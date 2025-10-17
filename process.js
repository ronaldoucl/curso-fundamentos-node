console.log(`ID del proceso (PID): ${process.pid}`);
console.log(`Directorio actual: ${process.cwd()}`);
console.log(`Version de Node.js: ${process.version}`);
console.log(`Plataforma: ${process.platform}`);
console.log(`Arquitectura: ${process.arch}`);
console.log(`Tiempo de ejecución: ${process.uptime()} segundos\n`);

console.log(process.env);
console.log(`Path: ${process.env.PATH}`);
console.log(`User Profile: ${process.env.HOME || process.env.USERPROFILE}`);
console.log(`NODE_ENV: ${process.env.NODE_ENV || 'No Definido'}`);

const memoryUsage = process.memoryUsage();
for (const property in memoryUsage) {
    memoryUsage[property] = (memoryUsage[property] / 1024 / 1024).toFixed(2) + " MB";
}
console.table(memoryUsage);

process.on("exit", code => {
    console.log("El proceso está terminado", code);
});

process.on("SIGINT", ()=>{
    console.log("Se recibió la señal de Interrupción (CTRL + C)");
    process.exit(0);
});

console.log("Escribe algo y presiona enter o Ctrl + C para salir");
process.stdin.on("data", data => {
    const input = data.toString().trim();
    if(input.toLowerCase() === "salir") {
        console.log("Comando de salia recibido!");
        process.exit(0);
    } else {
        console.log(`Mensaje ${input}`);
        console.log("Escribe salir para terminar o escribe algo más");
    }
});