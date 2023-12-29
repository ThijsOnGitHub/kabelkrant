import fs from "fs"
import { FilesWithMetadata } from "src/events"

export function getFilesInFolder(path: string): FilesWithMetadata[] {
    const files = fs.readdirSync(path)
    // Get file metadata
    const filesWithStats = files.map(file => {
        const filePath = path + "/" + file
        const stats = fs.statSync(filePath)
        return { path: filePath, ...stats }
    })
    console.log(filesWithStats) 
    return filesWithStats.filter(file => file?.isFile())
}