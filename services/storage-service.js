import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';

const filePath = path.join(os.homedir(), 'weather-data.json');

export async function saveKeyValue(key, value) {
    const exists = await fileExists(filePath);
    let data = {};
    if (exists) {
        const file = await fs.promises.readFile(filePath);
        data = JSON.parse(file);
    }
    data[key] = value;
    await fs.promises.writeFile(filePath, JSON.stringify(data));
}

export async function getValue(key) {
    const exists = await fileExists(filePath);
    let data = {};
    if (exists) {
        const file = await fs.promises.readFile(filePath);
        data = JSON.parse(file);
    }
    return data[key];
}

async function fileExists(route) {
    try {
        await fs.promises.stat(route);
        return true;
    }
    catch (e) {
        return false;
    }

}