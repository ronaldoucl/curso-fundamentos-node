const { error } = require("console");
const fs = require("fs");
const path = require("path");

async function transcriptAudio(audioFilePath, apiKey) {
    try {
        if (!fs.existsSync(audioFilePath)) {
            throw new Error("El archivo de audio no existe");
        }

        const audioFile = fs.readFileSync(audioFilePath);
        const formData = new FormData();
        const blob = new Blob([audioFile]);

        formData.append("file", blob, path.basename(audioFilePath));
        formData.append("model", "whisper-1");

        const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`
            },
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error en la API: ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        const transcription = data.text;

        const outputFilePath = path.join(
            path.dirname(audioFilePath), 
            `${path.basename(
                audioFilePath, 
                path.extname(audioFilePath)
            )}_transcription.txt`
        );

        fs.writeFileSync(outputFilePath, transcription);
        console.log(`Transcripcion guardada en: ${outputFilePath}`);
        return transcription;

    } catch(error) {
        console.log("Error durante la transcripcion", error.message);
        throw error;
    }
}

const audioPath = "./audio.mp3";
const openaiApiKey = "<OPENAI KEY>";

transcriptAudio(audioPath, openaiApiKey)
    .then(transcription => {
        console.log("Transcripcion completada con éxito");
        console.log(transcription);
    })
    .catch(error => {
        console.log("Falló la transcripcion", error);
    });