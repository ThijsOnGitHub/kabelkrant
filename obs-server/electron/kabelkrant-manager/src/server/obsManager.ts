import { BrowserWindow, ipcMain } from 'electron';
import OBSWebSocket from 'obs-websocket-js';
import { EventKeys } from '../global/events';
const obs = new OBSWebSocket();

const KABELKRANT_SCENE = "Kabelkrant"

const PLAYOUT_SCENE = "Video"
const KABELKRANT_MEDIA_SOURCE = "Playout"
const RADIO_INPUT = "Radio"

export let obsIsRunning = false

async function wait(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

setInterval(async () => {
    if(obsIsRunning) return
    try{
        await conntect()
    }catch(e){
        console.log("OBS not running")
    }
}, 1000)

async function conntect(){
    await obs.connect('ws://localhost:4455', 'rtvserver');
}

export async function startObsConnector(){

    // Connect to obs-ws running on 192.168.0.4
   await conntect()

    obs.on('ConnectionOpened', () => {
        console.log('Connection Opened');
        obsIsRunning = true
        console.log("event obs status change", obsIsRunning)
        BrowserWindow.getAllWindows().forEach(window => {
            window.webContents.send(EventKeys.OBS_STATUS_CHANGE, obsIsRunning)
        })
    });

    obs.on('ConnectionClosed', () => {
        console.log('Connection Closed');
        obsIsRunning = false
        console.log("event obs status change", obsIsRunning)
        BrowserWindow.getAllWindows().forEach(window => {
            window.webContents.send(EventKeys.OBS_STATUS_CHANGE, obsIsRunning)
        })
    });

    obs.on('MediaInputPlaybackEnded', async (data) => {
        if(data.inputName != KABELKRANT_MEDIA_SOURCE) return
        await obs.call('SetInputVolume',{
            inputName: RADIO_INPUT,
            inputVolumeMul: 0
        })
        console.log("MediaInputPlaybackEnded", data)
        await obs.call('SetCurrentProgramScene', {
            sceneName: KABELKRANT_SCENE
        })
        await ObsPlayer.fadeVolume(RADIO_INPUT, 2000, true)
    })

}


function log(data:any){
    console.log(data)
}
export module ObsPlayer {
    export async function fadeVolume(sourceName:string, duration:number, buildUp:boolean){
        for(let i =1 ; i < 11; i++){
            console.log("volume" ,1 - i/10)
            await wait(duration/ 10)
            await obs.call("SetInputVolume",{
                inputName: RADIO_INPUT,
                inputVolumeMul: buildUp ? i/10 :1 - i/10
            })
        }
    }
    
    
    
    export async function playVideo(filePath:string, playoutScene:string=PLAYOUT_SCENE, mediaSourceName:string=KABELKRANT_MEDIA_SOURCE){
        log("input settings")
        await obs.call("SetInputSettings",{
            inputName: mediaSourceName,
            inputSettings: {
                local_file: filePath
            }
        })
    
        log("preview scene" )
        console.log("SetCurrentPreviewScene", playoutScene)
        await obs.call("SetCurrentPreviewScene",{
            sceneName: playoutScene
        })
    
    
        log("get item id")
        const itemId= await obs.call("GetSceneItemId",{
            sceneName: playoutScene,
            sourceName: mediaSourceName,
        })
    
    
        log("stop video")
        await obs.call("TriggerMediaInputAction", {
            inputName: mediaSourceName,
            mediaAction: "OBS_WEBSOCKET_MEDIA_INPUT_ACTION_STOP",
        })
    
    
        log("start video")
        await wait(200)
        await obs.call("TriggerMediaInputAction", {
            inputName: mediaSourceName,
            mediaAction: "OBS_WEBSOCKET_MEDIA_INPUT_ACTION_RESTART",
        })
        await wait(200)
        log("get transform")
        const {sceneItemTransform:transform} = await obs.call("GetSceneItemTransform",{
            sceneName: playoutScene,
            sceneItemId: itemId.sceneItemId
        })
    
        
        const object = {
            transform,
            itemId,
            scaleX:  1920 / (transform.sourceWidth as number) ,
            scaleY: 1080/ (transform.sourceHeight as number) ,
        }
    
        console.log(object)
    
    
        if(object.scaleX != Infinity && object.scaleY != Infinity){
            console.log("scale", object.scaleX, object.scaleY)
            await obs.call("SetSceneItemTransform",{
                sceneName: playoutScene,
                sceneItemId: itemId.sceneItemId,
                sceneItemTransform: {
                    positionX: 0,
                    positionY: 0,
                    scaleX:  object.scaleX,
                    scaleY: object.scaleY,
                }
            })
        }
    
        await fadeVolume(RADIO_INPUT, 2000, false)
    
        console.log(`play ${filePath} on ${KABELKRANT_MEDIA_SOURCE} in ${PLAYOUT_SCENE}`)
        await obs.call("SetCurrentProgramScene",{
            sceneName: playoutScene
        })
        await wait(2000)
        await obs.call("SetInputVolume",{
            inputName: RADIO_INPUT,
            inputVolumeMul: 1
        })
    }
    
}

