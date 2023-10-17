import NodeCron from 'node-cron';
import fs from 'fs';
import path from 'path';
import { VideoItem, VideoItems } from './types/dataStructure.js';
import { fileURLToPath } from 'url';
import { isBefore, isAfter, subSeconds, getDay } from 'date-fns';
import { ObsPlayer } from './player.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const jsonFolder = path.join(__dirname, '../json');
const programPath = path.join(jsonFolder, '/program.json');
const hasPlayedPath = path.join(jsonFolder, '/hasPlayed.json');
const VIDEOS_FILE_PATH = path.join(__dirname, '../video');
console.log(jsonFolder,programPath)

export function startCron(){
    NodeCron.schedule('* * * * * *', () => {
        // log the current time
        console.log("Running a task every 5 minutes", new Date().toLocaleTimeString());
        try{
            checkIfVideoMustPlay()
        }catch(e){
            console.log("error", e)
        }
    })

}

function getVideos(){
    // read json file
    const json = fs.readFileSync(programPath)
    const program: VideoItems = JSON.parse(json.toString())
    return program
  
}

function getVideoPath(videoItem: VideoItem):string{
    const files = fs.readdirSync(path.join(VIDEOS_FILE_PATH, videoItem.path))
    const playedFiles = getPlayedVideos()
    const mappedFiles = files.map(file => {
        const filePath =path.join(VIDEOS_FILE_PATH, videoItem.path,file)
        const lastPlayed = playedFiles[filePath]
        return {path: file, date: lastPlayed == undefined ? undefined : new Date(lastPlayed)} 
    })
    const sortedFiles = mappedFiles.sort((a,b) => a.date == undefined ? -1 : b.date == undefined ? 1 : a.date.getTime() - b.date.getTime() )
    const filePath = path.join(VIDEOS_FILE_PATH, videoItem.path, sortedFiles[0].path)
    writePlay(filePath)
    return filePath
}

function getPlayedVideos():{[key:string]:Date}{
    if(!fs.existsSync(hasPlayedPath)){
        fs.writeFileSync(hasPlayedPath, "{}")
    }
    return JSON.parse(fs.readFileSync(hasPlayedPath, 'utf8'))
}

function writePlay(path:string){
    if(!fs.existsSync(hasPlayedPath)){
        fs.writeFileSync(hasPlayedPath, "{}")
    }
    let jsonData: {[key:string]:Date} = JSON.parse(fs.readFileSync(hasPlayedPath, 'utf8'))	
    jsonData = {...jsonData,[path]: new Date()}
    console.log("write play", JSON.stringify(jsonData)) 
    fs.writeFileSync(hasPlayedPath, JSON.stringify(jsonData),{encoding:'utf8',flag:'w'})
}

function isTimeInTimeRange(time: string, now: Date, start: Date){
    const timeDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(time.split(":")[0]), parseInt(time.split(":")[1]), parseInt(time.split(":")[2]))
    return isBefore(timeDate, now) && isAfter(timeDate, start)
}

function shouldVideoPlay(video : VideoItem, currentDay: number, currentDate: Date, prevCheckDate: Date){
    return video.planning.some(planning => {
        return planning.days.some(day => day == currentDay) && planning.time.some(time => isTimeInTimeRange(time, currentDate, prevCheckDate)) 
    })
}

function playVideoItem(videoItem: VideoItem){
    console.log("play video", videoItem.path)
    const totalVideoPath = getVideoPath(videoItem)
    console.log("total video path",totalVideoPath)
    ObsPlayer.playVideo(totalVideoPath)
}

export function checkIfVideoMustPlay(){
    const videos = getVideos()
    const now = new Date()
    const start = subSeconds(now, 1)
    const currentDay = getDay(now)
    videos.some(video => {
        if(shouldVideoPlay(video,currentDay, now, start)){
            playVideoItem(video)
            return true
        }
    })


    // remove time from now

    
}