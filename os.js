const os = require("os");

function showSystemInfo() {
  console.log("Sistema operativo:", os.type());
  console.log("Plataforma:", os.platform());
  console.log("Arquitectura:", os.arch());
  console.log("Versión del sistema operativo:", os.release());
  console.log("Memoria total:", os.totalmem());
  console.log("Memoria libre:", os.freemem());
  console.log("CPUs disponibles:", os.cpus().length);
  console.log("Directorio principal:", os.homedir());
  console.log("Nombre del host:", os.hostname());
}

showSystemInfo();