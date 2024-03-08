import { FilesWithMetadata } from "./types/FileMetaTypes"

export enum FunctionKeys {
    SELECT_FOLDER = "select-folder",
    SAVE_PROGRAMS = "save-programs",
    GET_PROGRAMS = "get-programs",
    GET_VIDEOS = "get-videos",
    GET_PLAYLIST = "get-playlist",
    CHECK_OBS_IS_RUNNING = "check-obs-is-running",
}


export type Functions  = {
    [FunctionKeys.SELECT_FOLDER] : () =>string,
    [FunctionKeys.SAVE_PROGRAMS] : (newProgramms: any) => void,
    [FunctionKeys.GET_PROGRAMS] : () => string,
    [FunctionKeys.GET_VIDEOS] : (path:string) => Promise<FilesWithMetadata[]>
    [FunctionKeys.CHECK_OBS_IS_RUNNING] : () => boolean
    [FunctionKeys.GET_PLAYLIST] : () => string[]
}


export enum EventKeys {
    OBS_STATUS_CHANGE = "obs-status-change",
}

export type Events = {
    [EventKeys.OBS_STATUS_CHANGE] : [boolean]
}

