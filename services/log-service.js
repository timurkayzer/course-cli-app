import chalk from 'chalk';
import dedent from 'dedent-js';

export function printError(error) {
    console.log(dedent(chalk.bgRed('ERROR ') + error));
}

export function printSuccess(message) {
    console.log(dedent(chalk.bgGreen('SUCCESS') + ' ' + message));
}

export function printHelp() {
    console.log(dedent(`
    ${chalk.bgCyan('HELP')}
    -s [CITY] - погода в городе
    -h - помощь
    -t [TOKEN] - установка токена OpenWeather
    `));
}