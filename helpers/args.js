export function getArgs() {
    const argsObj = {};
    const args = process.argv.slice(2);
    args.forEach((value, index) => {
        if (value.startsWith('-')) {
            if (args[index + 1] && !args[index + 1].startsWith('-')) {
                argsObj[value.slice(1)] = args[index + 1];
            }
            else {
                argsObj[value.slice(1)] = true;
            }
        }
    });

    return argsObj;
}