```javascript
// ======================================
// AI Language Translator
// script.js
// ======================================

const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const translateBtn = document.getElementById("translateBtn");
const swapBtn = document.getElementById("swapBtn");
const copyBtn = document.getElementById("copyBtn");
const speakBtn = document.getElementById("speakBtn");
const clearBtn = document.getElementById("clearBtn");
const downloadBtn = document.getElementById("downloadBtn");

const charCount = document.getElementById("charCount");
const loading = document.getElementById("loading");


// Character Counter

inputText.addEventListener("input", () => {

    charCount.textContent = inputText.value.length;

});


// Translate

translateBtn.addEventListener("click", async () => {

    const text = inputText.value.trim();

    if (text === "") {

        alert("Please enter some text.");

        return;

    }

    loading.classList.remove("hidden");

    const translatedText = await translateTextApi(

        text,

        sourceLanguage.value,

        targetLanguage.value

    );

    outputText.value = translatedText;

    loading.classList.add("hidden");

});


// Swap Languages

swapBtn.addEventListener("click", () => {

    if (sourceLanguage.value === "auto") {

        alert("Auto Detect cannot be swapped.");

        return;

    }

    const tempLanguage = sourceLanguage.value;
    sourceLanguage.value = targetLanguage.value;
    targetLanguage.value = tempLanguage;

    const tempText = inputText.value;
    inputText.value = outputText.value;
    outputText.value = tempText;

});


// Copy Translation

copyBtn.addEventListener("click", async () => {

    if (outputText.value === "") {

        alert("Nothing to copy.");

        return;

    }

    await navigator.clipboard.writeText(outputText.value);

    alert("Copied successfully.");

});


// Speak Translation

speakBtn.addEventListener("click", () => {

    if (outputText.value === "") {

        alert("Nothing to speak.");

        return;

    }

    const speech = new SpeechSynthesisUtterance(outputText.value);

    speech.lang = targetLanguage.value;

    window.speechSynthesis.speak(speech);

});


// Clear

clearBtn.addEventListener("click", () => {

    inputText.value = "";
    outputText.value = "";
    charCount.textContent = "0";

});


// Download Translation

downloadBtn.addEventListener("click", () => {

    if (outputText.value === "") {

        alert("Nothing to download.");

        return;

    }

    const blob = new Blob(

        [outputText.value],

        { type: "text/plain" }

    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "translation.txt";

    link.click();

    URL.revokeObjectURL(url);

});
```
