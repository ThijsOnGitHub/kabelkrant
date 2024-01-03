import Express from "express";
import { videoPlaylist } from "./obsManager";
export function startServer(){
    const app = Express()
    const port = 3002

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.get('/play', async (req, res) => {
        await videoPlaylist.addVideos(["C:\\Users\\thijs\\Videos\\RTV\\Intro Talk D'huzes.mp4","C:\\Users\\thijs\\Videos\\RTV\\Intro Talk D'huzes.mp4","C:\\Users\\thijs\\Videos\\2021-10-09 11-15-14.mp4"])
        res.send('Playing video')
    })

    app.listen(port, () => {
        console.log("Server is running on port " + port)
    })
}
