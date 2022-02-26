#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api-service.js';
import { printError, printHelp, printSuccess } from './services/log-service.js';
import { getValue, saveKeyValue } from './services/storage-service.js';

async function initCli() {
    const args = getArgs();

    await getForeCast();

    if (args.t) {
        saveToken(args.t);
    }

    if (args.c) {
        saveCity(args.c);
    }

    if (args.h) {
        printHelp();
    }
}

async function getForeCast() {
    try {
        const city = await getValue('city');
        const weather = await getWeather(city);
        console.log(weather);
    }
    catch (e) {
        if (e.response?.status == 401) {
            printError('Неверный токен');
        }
        else if (e.response?.status == 404) {
            printError('Город не найден');
        }
        else {
            printError(e.message);
        }
    }

}

async function saveToken(token) {
    try {
        await saveKeyValue('token', token);
        printSuccess('Ключ сохранен');
    }
    catch (e) {
        printError(e.message);
    }
}

async function saveCity(city) {
    try {
        await saveKeyValue('city', city);
        printSuccess('Город сохранен');
    }
    catch (e) {
        printError(e.message);
    }
}


initCli();