export default class Util {
    static getAccessIDFromURL(url: string): string {
        const ACCESS_ID_URL_REGEX = /(?<=(http(s)*:\/\/)*hibiki-radio.jp\/description\/).+(?=\/detail)/g;

        const access_id = url.match(ACCESS_ID_URL_REGEX)
        if (access_id) {
            return access_id[0];
        }

        return "";
    }

}