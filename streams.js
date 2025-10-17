const fs = require("fs");

const readableStream = fs.createReadStream("javascript-book.txt", {encoding: "utf-8"});
const writableStream = fs.createWriteStream("output-js.txt");

readableStream.on("data", (chunk) => {
    console.log("Chunk: ", chunk);
    writableStream.write(chunk);
});

readableStream.on("end", () => {
    console.log("Terminó la lectura del archivo");
    writableStream.end();
});

readableStream.on("error", (err) => {
    console.log("Error de lectura del archivo", err);
})

writableStream.on("error", (err) => {
    console.log("Error en escritura del archivo", err);
});