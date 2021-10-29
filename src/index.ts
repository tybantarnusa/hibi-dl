import Util from './logic/util';
import { VCMS, Episode } from './logic/vcms';
import convert from './logic/ffmpeg';

export default async function run(options: any) {
    await Main.main(options);
}

class Main {
    static async main(options: any) {
        const ACCESS_ID: string = Util.getAccessIDFromURL(options.url);

        if (ACCESS_ID === "") {
            console.log("Failed to download. Reason: Invalid URL.");
            return;
        }

        console.log(`Trying to download an episode from ${ACCESS_ID}...`);

        const vcms: VCMS = new VCMS(ACCESS_ID);
        const episode: Episode = await vcms.getEpisodeInfo();
        const playlist_url: string = await vcms.getPlaylistURL(episode.video.id);

        const output_name: string = episode.program_name + " " + episode.name;

        await convert(playlist_url, output_name);
    }
}