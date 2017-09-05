import { traditionalPromisify } from "../lib/app";
import { expect } from "chai";
import chalk = require("chalk");

describe("ES6 Promise", () => {
    it("Single promise", (done) => {
        traditionalPromisify(3000, "One").then(data => {
            console.log(chalk.yellow(`Got data back for ${data}`));
            expect(data).to.equal("One");
            done();
        });
    });

    it("[Promise Chaining]", (done) => {
        traditionalPromisify(1000,"First")
        .then(data => traditionalPromisify(2000, "Second"))
        .then(data => traditionalPromisify(3000, "Third"))
        .then(data => {
            expect(data).equal("Third");
            done();
        });
    });

    it("Promise race", (done) => {
        Promise.race([traditionalPromisify(1000,"First"), traditionalPromisify(2000,"Second"), traditionalPromisify(3000, "Third")])
        .then(res => {
            expect(res).equal("First");
            done();
        });
    });

    it("Promise.all", (done) => {
        Promise.all([traditionalPromisify(7000,"First"), traditionalPromisify(100,"Second"), traditionalPromisify(300, "Third")])
        .then(data => {
            expect(data).deep.equal(["First","Second","Third"]);
            done();
        })
    });
});