export interface VideoItem{
    type: "file" | "folder"
    play: "all" | number
    path: string
    startingTime: string
}

export type VideoItems = VideoItem[]
