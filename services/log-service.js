import chalk from 'chalk';
import dedent from 'dedent-js';

export function printError(e) {
    console.log(dedent(chalk.bgRed('ERROR '), e));
}

export function printSuccess(e) {
    console.log(dedent(chalk.bgGreen('SUCCESS '), e));
}

export function printHelp() {
    console.log(dedent(`
    ${chalk.bgCyan('HELP')}
    -s [CITY] - погода в городе
    -h - помощь
    -t [TOKEN] - установка токена OpenWeather
    `));
}