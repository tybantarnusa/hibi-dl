import axios from 'axios';

export default class VCMS {
    private VCMS_URL: string
    private PROGRAM_ENDPOINT: string
    private VIDEO_ENDPOINT: string;

    private access_id: string;

    constructor(access_id: string) {
        this.VCMS_URL = "https://vcms-api.hibiki-radio.jp/api/v1/";
        this.PROGRAM_ENDPOINT = "programs/";
        this.VIDEO_ENDPOINT = "videos/play_check?video_id=";

        this.access_id = access_id;
    }

    private async getVideoID(): Promise<number> {
        const ENDPOINT: string = this.VCMS_URL + this.PROGRAM_ENDPOINT + this.access_id;

        const config = {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        }

        const response = await axios.get(ENDPOINT, config);
        const program: Program = response.data;

        const video_id: number = program.episode.video.id;

        console.log(`[OK] Video ID: ${video_id}`)
        return video_id;
    }

    async getPlaylistURL(): Promise<string> {
        const video_id: number = await this.getVideoID();

        if (video_id === 0) {
            return "";
        }

        const ENDPOINT: string = this.VCMS_URL + this.VIDEO_ENDPOINT + video_id;

        const config = {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        }

        const response = await axios.get(ENDPOINT, config);
        const video: VideoPlayCheck = response.data;

        const playlist_url: string = video.playlist_url;

        console.log(`[OK] Playlist URL: ${playlist_url}`)
        return video.playlist_url;
    }
}

interface Program {
    id: number;
    name: string;
    episode: Episode;
}

interface Episode {
    id: number;
    name: string;
    video: Video;
    updated_at: string;
}

interface Video {
    id: number;
    duration: number;
}

interface VideoPlayCheck {
    token: string;
    playlist_url: string;
}