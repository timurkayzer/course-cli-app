#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { printHelp } from './services/log-service.js';

function initCli() {
    const args = getArgs();

    if (args.t) {

    }

    if (args.s) {

    }

    if (args.h) {
        printHelp();
    }
}

initCli();