import { Playout } from './Playout';


export class VideoPlaylist {
    public videos: string[] = [];
    public currentPlayoutIndex: number = 0;

    constructor(
        public playFirstVideo: (videoPath: string, playout: Playout, shouldFade:boolean) => Promise<void>,
        public prepairVideo: (videoPath: string, playout: Playout) => Promise<void>,
        public playListEmpty: () => Promise<void>,
        public playouts: Playout[]
    ) { }

    getCurrentPlayout() {
        return this.playouts[this.currentPlayoutIndex];
    }

    getNextPlayoutIndex() {
        return (this.currentPlayoutIndex + 1) % this.playouts.length
    }

    getNextPlayout() {
        return this.playouts[this.getNextPlayoutIndex()];
    }

    setNextPlayout() {
        this.currentPlayoutIndex = this.getNextPlayoutIndex();
    }

    async addVideos(videoPath: string[]) {
        if (this.videos.length == 0) {
            await this.prepairVideo(videoPath[0], this.getCurrentPlayout())
            await this.playFirstVideo(videoPath[0],this.getCurrentPlayout(), true);
        }
        this.videos.push(...videoPath);
        console.log("Playing videos", this.videos)
        if(this.videos.length > 1){
            await this.prepairVideo(videoPath[1], this.getNextPlayout())
        }
    }

    async playNextVideo(data: {inputName: string}) {
        if(data.inputName != this.getCurrentPlayout().videoSource) return;
        this.videos.shift();
        console.log("Playing videos - video's after shift", this.videos)
        if (this.videos.length == 0) {
            this.playListEmpty();
            return;
        }
        this.setNextPlayout();
        console.log("Playing videos", this.videos)
        await this.playFirstVideo(this.videos[0], this.getCurrentPlayout(), false);
        if (this.videos.length > 1) {
            await this.prepairVideo(this.videos[1], this.getNextPlayout())
        }
    }
}
