// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";
import { EventKeys, Events } from "./events";

const invoke = <EventName extends keyof Events>(event: EventName) => 
    (...args: Parameters<Events[EventName]>): Promise<ReturnType<Events[EventName]>>  => ipcRenderer.invoke(event, ...args)


const api = {
    secretMessage: "Hello, not so secret message! 😀",
    selectFolder: invoke(EventKeys.SELECT_FOLDER),
    savePrograms: invoke(EventKeys.SAVE_PROGRAMS),
    getPrograms: invoke(EventKeys.GET_PROGRAMS),
    getFilesInFolder: invoke(EventKeys.GET_VIDEOS)
}

export type ElectronApi = typeof api

contextBridge.exposeInMainWorld("electronApi", api)