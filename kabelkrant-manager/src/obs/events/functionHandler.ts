import { FunctionKeys } from "../../global/events"
import { handleFunction } from "./ipcHelperFunctions"
import { dialog } from "electron"
import { getFilesInFolder } from "../getFilesInFolder"
import fs from "fs"
import { programJSONPath } from "../../main"
import { obsIsRunning } from "../obsManager"


export function handleEvents(){
    handleFunction(FunctionKeys.SELECT_FOLDER, () => dialog.showOpenDialogSync({properties: ['openDirectory']})?.[0] || "")
    handleFunction(FunctionKeys.SAVE_PROGRAMS, (newSettings) => {
      console.log("Save new programs", newSettings)
      // Save data in settings json file
      const settingsPath = programJSONPath
      fs.writeFileSync(settingsPath, newSettings)
    })
    handleFunction(FunctionKeys.GET_PROGRAMS, () => {
      // Read data from settings json file
      const settingsPath = programJSONPath
      if (!fs.existsSync(settingsPath)) return ""
      return fs.readFileSync(settingsPath, "utf-8")
    } )
    handleFunction(FunctionKeys.GET_VIDEOS, async (path) => {
      // Read data from settings json file
      return await getFilesInFolder(path)
    })
    handleFunction(FunctionKeys.CHECK_OBS_IS_RUNNING, () => {
      // Read data from settings json file
      return obsIsRunning
    })
}