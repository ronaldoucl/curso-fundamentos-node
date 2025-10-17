const {Buffer} = require("buffer");

const bufferFromString = Buffer.from("Hello World!", "utf-8");
console.log(bufferFromString);

const bufferAlloc = Buffer.alloc(10);
console.log(bufferAlloc);

bufferAlloc.write("node.js");
console.log(bufferAlloc);

const bufferToString = bufferAlloc.toString("utf-8", 0, 7);
console.log(bufferToString);