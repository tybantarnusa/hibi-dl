import Ffmpeg from 'fluent-ffmpeg';

export default async function convert(playlist_url: string, output_name: string) {
    const command: Ffmpeg.FfmpegCommand = Ffmpeg(playlist_url).output(`${output_name}.mp4`).addOption("-c copy")
        .on('start', function (t) {
            console.log('Start processing...');
            console.log(t);
        })
        .on('error', function (err) {
            console.log('An error occurred: ' + err.message);
        })
        .on('progress', function (progress) {
            let percent = Math.round((progress.percent + Number.EPSILON) * 100) / 100
            if (progress.percent === undefined) {
                percent = 0;
            }
            console.log('Processing: ' + percent + '%')
        })
        .on('end', function () {
            console.log('[OK] Finished!')
        });

    await command.run();
}