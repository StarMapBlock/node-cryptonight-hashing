"use strict";
let multiHashing = require('../build/Release/cryptonight-hashing');

const ITER = 20000;

let start = Date.now();
for (let i = ITER; i; -- i) {
  multiHashing.astrobwt(Buffer.from("test" + i), 1);
}
let end = Date.now();
console.log("Perf: " + 1000 * ITER / (end - start) + " H/s");
