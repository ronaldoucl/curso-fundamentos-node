# 🟩 Fundamentos de Node.js

Este repositorio contiene todos los ejercicios y proyectos desarrollados durante el curso **Fundamentos de Node.js** de [Platzi](https://platzi.com/).  
El objetivo del curso fue comprender el funcionamiento interno de Node.js, sus módulos nativos, el manejo de streams, buffers, procesos y la creación de servidores básicos.

---


## 🚀 Temas aprendidos

Durante este curso se trabajó en ejemplos prácticos para comprender:

- ✅ Cómo funciona el **event loop** y la ejecución asíncrona en Node.js.  
- ✅ Uso de **módulos nativos** (`fs`, `os`, `path`, `http`, `crypto`, etc.).  
- ✅ Lectura y escritura de archivos usando **Streams y Buffers**.  
- ✅ Manejo de **procesos e hilos** (`process`, `child_process`).  
- ✅ Creación de un **servidor HTTP básico** desde cero.  
- ✅ Uso de **ES Modules** y `require()` en CommonJS.  
- ✅ Simulación de tareas reales como servir un **video por streaming**.  

---

## 🧠 Ejemplo destacado

El archivo [`server-video.js`](./server-video.js) demuestra cómo crear un **servidor HTTP que transmite un video** sin cargarlo completamente en memoria, usando `fs.createReadStream()`:

```js
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/video") {
    const videoPath = path.join(__dirname, "video.mp4");
    const stat = fs.statSync(videoPath);

    res.writeHead(200, {
      "Content-Type": "video/mp4",
      "Content-Length": stat.size,
    });

    const stream = fs.createReadStream(videoPath);
    stream.pipe(res);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(3005, () =>
  console.log("Servidor ejecutándose en http://localhost:3005/video")
);
