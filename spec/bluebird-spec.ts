import Promise  = require("bluebird");
import { expect } from "chai";
import chalk = require("chalk");
describe.only("BlueBird Promise", () => {
    it("[BlueBird.promisify()]", (done) => {
        let callback = function() {
            console.log(chalk.red("i am called"));
            return "returned from callback";
        };
        let promise = Promise.promisify(callback);
        console.log(promise);
        done();
    });
});