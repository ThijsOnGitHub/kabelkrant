import OBSWebSocket from 'obs-websocket-js'

const obs = new OBSWebSocket();

const KABELKRANT_SCENE = "Kabelkrant"

const PLAYOUT_SCENE = "Video"
const KABELKRANT_MEDIA_SOURCE = "Playout"
const RADIO_INPUT = "Radio"

const testvideo1 ="C:\\Users\\thijs\\Videos\\2021-10-09 11-15-14.mp4"
const testvideo2 = "C:\\Users\\thijs\\Videos\\2d character.mp4"
const filePath = "C:\\Users\\thijs\\Videos\\RTV\\Intro Talk D'huzes.mp4"

async function wait(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
async function main(){

// Connect to obs-ws running on 192.168.0.4
    await obs.connect('ws://localhost:4455');

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
        await fadeVolume(RADIO_INPUT, 2000, true)
    })

    setTimeout(async () => {
      playVideo(filePath)
    } , 0)
}
main()

async function fadeVolume(sourceName:string, duration:number, buildUp:boolean){
    for(let i =1 ; i < 11; i++){
        console.log("volume" ,1 - i/10)
        await wait(duration/ 10)
        await obs.call("SetInputVolume",{
            inputName: RADIO_INPUT,
            inputVolumeMul: buildUp ? i/10 :1 - i/10
        })
    }
}



async function playVideo(filePath:string, playoutScene:string=PLAYOUT_SCENE, mediaSourceName:string=KABELKRANT_MEDIA_SOURCE){
    await obs.call("SetInputSettings",{
        inputName: mediaSourceName,
        inputSettings: {
            local_file: filePath
        }
    })


    await obs.call("SetCurrentPreviewScene",{
        sceneName: playoutScene
    })


    const itemId= await obs.call("GetSceneItemId",{
        sceneName: playoutScene,
        sourceName: mediaSourceName,
    })


    await obs.call("TriggerMediaInputAction", {
        inputName: mediaSourceName,
        mediaAction: "OBS_WEBSOCKET_MEDIA_INPUT_ACTION_STOP",
    })


    console.log('start')
    await wait(200)
    await obs.call("TriggerMediaInputAction", {
        inputName: mediaSourceName,
        mediaAction: "OBS_WEBSOCKET_MEDIA_INPUT_ACTION_RESTART",
    })
    await wait(200)
    console.log('end')
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
