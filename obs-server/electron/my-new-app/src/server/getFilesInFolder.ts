import fs from "fs"
import { FilesWithMetadata } from "src/global/types/FileMetaTypes"

export function getFilesInFolder(path: string): FilesWithMetadata[] {
    const files = fs.readdirSync(path)
    // return the filenames with their types
    return files.map((file) => {
        // get the file type e.g. .js, .ts, .jsx, .tsx
        const fileType = file.split(".").pop()
        return {
            path : `${path}/${file}`,
            name: file,
            type: fileType
        }
    })

}