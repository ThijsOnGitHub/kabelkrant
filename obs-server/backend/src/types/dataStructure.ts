export interface VideoItem{
    id: string
    path: string
    planning: Planning[]
}

export interface Planning{
    days: number[]
    time: string[]
}

export type VideoItems = VideoItem[]
