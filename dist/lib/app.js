"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
function traditionalPromisify(timeout, task) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${task}`);
            console.log(chalk.blue(`completed ${task} in ${timeout} ms`));
        }, timeout);
    });
}
exports.traditionalPromisify = traditionalPromisify;
