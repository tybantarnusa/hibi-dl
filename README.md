# hibi-dl
hibi-dl is a command line tool to download an episode from [HiBiKi Radio Station](https://hibiki-radio.jp/). hibi-dl uses [maeda577's method](https://maeda577.github.io/2021/01/10/webradio.html) to download the episode.

## Prerequisites
In order to run hibi-dl, you need to install the following:
- [Node JS](https://nodejs.org/en/)
- [FFmpeg](https://www.ffmpeg.org/)
- A VPN Client that connects to Japan server (e.g. [VPN Gate](https://www.vpngate.net/en/download.aspx))

## Installation
Install hibi-dl through npm.
```
npm install -g @tybantarnusa/hibi-dl
```

## Usage
1. It seems that HiBiKi Radio can only be accessible from Japan. First, you need to connect through VPN. You can use [VPN Gate](https://www.vpngate.net/en/download.aspx) to connect to Japan server. Choose any Japan server and try if it works.
2. Run hibi-dl using this command:
    ```
    hibi-dl -u <program_url>
    ```
    For example, if you want to download from Love Live! Nijigasaki program, you can run:
    ```
    hibi-dl -u https://hibiki-radio.jp/description/llniji/detail
    ```
3. hibi-dl will run and try to download currently airing episode.

## Contributing
Please do any Pull Requests or submit any Issues. I really appreciate it. No instructions, just do what you want to improve.

## License
Distributed under the MIT License. See [LICENSE](https://github.com/tybantarnusa/hibi-dl/blob/master/LICENSE.md) for more information.
