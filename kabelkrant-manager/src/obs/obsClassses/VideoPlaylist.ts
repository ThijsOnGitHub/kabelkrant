import { Playout } from './Playout';


export class VideoPlaylist {
    public videos: string[] = [];
    public currentPlayoutIndex: number = 0;

    constructor(
        public playFirstVideo: (videoPath: string, playout: Playout, shouldFade:boolean) => Promise<void>,
        public clearVideoPlayer: (data: {inputName: string}) => Promise<void>,
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
        const oldLength = this.videos.length;
        this.videos.push(...videoPath);
        if (oldLength == 0) {
            await this.prepairVideo(videoPath[0], this.getCurrentPlayout())
            await this.playFirstVideo(videoPath[0],this.getCurrentPlayout(), true);
        }
        console.log("Playing videos", this.videos)
        if(this.videos.length > 1 && oldLength < 2){
            await this.prepairVideo(this.videos[1], this.getNextPlayout())
        }
    }

    async playNextVideo(data: {inputName: string}) {
        // Check if it is not an video that stoped in the preview
        if(data.inputName != this.getCurrentPlayout().videoSource) return;
        this.videos.shift();
        console.log("Playing videos - video's after shift", this.videos)
        if (this.videos.length == 0) {
            await this.clearVideoPlayer(data);
            this.playListEmpty();
            return;
        }
        this.setNextPlayout();
        console.log("Playing videos", this.videos)
        await this.playFirstVideo(this.videos[0], this.getCurrentPlayout(), false);
        await this.clearVideoPlayer({inputName: this.getNextPlayout().videoSource});
        if (this.videos.length > 1) {
            await this.prepairVideo(this.videos[1], this.getNextPlayout())
        }
    }

    removeItemsFromPlaylist() {
        this.videos = [];
        this.clearVideoPlayer({inputName:this.getCurrentPlayout().videoSource} )
        this.clearVideoPlayer({inputName:this.getNextPlayout().videoSource})
    }
}
