const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    if (req.url === "/video") {
        const videoPath = path.join(__dirname, "video.mp4");
        const stat = fs.statSync(videoPath);

        res.writeHead(200, {
            "Content-Type": "video/mp4",
            "content-length": stat.size
        });

        const readStream = fs.createReadStream(videoPath);
        let chunkCounter = 0;

        readStream.on("data", (chunk) => {
            chunkCounter++;
            console.log(`Chunk ${chunkCounter}: size: ${chunk.length} bytes, leídos y enviados`);
        });
        readStream.pipe(res);
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Not Found");
    }
});


const PORT = 3005;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});