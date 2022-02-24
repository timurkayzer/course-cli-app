#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { printError, printHelp, printSuccess } from './services/log-service.js';
import { saveKeyValue } from './services/storage-service.js';

async function initCli() {
    const args = getArgs();

    if (args.t) {
        saveToken(args.t);
    }

    if (args.s) {

    }

    if (args.h) {
        printHelp();
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


initCli();