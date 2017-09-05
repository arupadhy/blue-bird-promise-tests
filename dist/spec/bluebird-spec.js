"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
const chalk = require("chalk");
describe.only("BlueBird Promise", () => {
    it("[BlueBird.promisify()]", (done) => {
        let callback = function () {
            console.log(chalk.red("i am called"));
            return "returned from callback";
        };
        let promise = Promise.promisify(callback);
        console.log(promise);
        done();
    });
});
