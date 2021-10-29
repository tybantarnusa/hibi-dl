import Util from './logic/util';
import VCMS from './logic/vcms';

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

        const vcms = new VCMS(ACCESS_ID);
        await vcms.getPlaylistURL();
    }
}