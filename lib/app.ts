declare function require(name: string): any;
import chalk = require("chalk");

export function traditionalPromisify(timeout: number, task: string): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${task}`);
            console.log(chalk.blue(`completed ${task} in ${timeout} ms`));
        }, timeout);
    });
}
