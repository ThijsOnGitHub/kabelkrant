import {type Stats} from "fs"

export enum EventKeys {
    SELECT_FOLDER = "select-folder",
    SAVE_PROGRAMS = "save-programs",
    GET_PROGRAMS = "get-programs",
    GET_VIDEOS = "get-videos",
}

export type FilesWithMetadata = { path: string } & Stats

export type Events  = {
    [EventKeys.SELECT_FOLDER] : () =>string,
    [EventKeys.SAVE_PROGRAMS] : (newProgramms: any) => void,
    [EventKeys.GET_PROGRAMS] : () => string,
    [EventKeys.GET_VIDEOS] : (path:string) => FilesWithMetadata[]
}

