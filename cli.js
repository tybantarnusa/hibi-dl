import arg from 'arg';
import inquirer from 'inquirer';

import run from './dist/index';

function parseArgumentsIntoOptions(rawArgs) {
    const args = arg({
        '--url': String,
        '-u': '--url'
    }, {
        argv: rawArgs.slice(2),
    });
    
    return {
        url: args['--url'] || undefined,
    };
}

async function promptForMissingOptions(options) {
    const questions = [];
    if (!options.url) {
        questions.push({
            type: 'input',
            name: 'url',
            message: 'Input URL to a HiBiKi Radio program:',
        });
    }
   
    const answers = await inquirer.prompt(questions);
    return {
        ...options,
        url: options.url || answers.url,
    };
}

export async function cli(args) {
    let options = parseArgumentsIntoOptions(args);
    options = await promptForMissingOptions(options);
    await run(options);
}