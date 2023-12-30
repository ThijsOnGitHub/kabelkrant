export interface VideoItem{
    id:string
    programName: string
    path: string
    planning: Planning[]
}

export interface Planning{
    days: number[]
    times: string[]
}

export type VideoItems = VideoItem[]
