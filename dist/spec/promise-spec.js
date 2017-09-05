"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../lib/app");
const chai_1 = require("chai");
const chalk = require("chalk");
describe("ES6 Promise", () => {
    it("Single promise", (done) => {
        app_1.traditionalPromisify(3000, "One").then(data => {
            console.log(chalk.yellow(`Got data back for ${data}`));
            chai_1.expect(data).to.equal("One");
            done();
        });
    });
    it("[Promise Chaining]", (done) => {
        app_1.traditionalPromisify(1000, "First")
            .then(data => app_1.traditionalPromisify(2000, "Second"))
            .then(data => app_1.traditionalPromisify(3000, "Third"))
            .then(data => {
            chai_1.expect(data).equal("Third");
            done();
        });
    });
    it("Promise race", (done) => {
        Promise.race([app_1.traditionalPromisify(1000, "First"), app_1.traditionalPromisify(2000, "Second"), app_1.traditionalPromisify(3000, "Third")])
            .then(res => {
            chai_1.expect(res).equal("First");
            done();
        });
    });
    it("Promise.all", (done) => {
        Promise.all([app_1.traditionalPromisify(7000, "First"), app_1.traditionalPromisify(100, "Second"), app_1.traditionalPromisify(300, "Third")])
            .then(data => {
            chai_1.expect(data).deep.equal(["First", "Second", "Third"]);
            done();
        });
    });
});
