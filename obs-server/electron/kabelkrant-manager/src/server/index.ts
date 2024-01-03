import { startObsConnector } from "./obsManager"
import { startCron } from "./playout"
import { startServer } from "./server"

export function startPlayoutServer(programFilePath: string, hasPlayedPath:string) {
    console.log("startPlayoutServer")
    startObsConnector()
    //startServer()
    startCron(programFilePath,hasPlayedPath)
}