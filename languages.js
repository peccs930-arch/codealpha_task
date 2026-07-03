```javascript
// =======================================
// AI Language Translator
// languages.js
// =======================================

// Language List

const languages = {
    "auto": "Auto Detect",
    "en": "English",
    "ta": "Tamil",
    "hi": "Hindi",
    "te": "Telugu",
    "ml": "Malayalam",
    "kn": "Kannada",
    "mr": "Marathi",
    "gu": "Gujarati",
    "bn": "Bengali",
    "pa": "Punjabi",
    "ur": "Urdu",
    "as": "Assamese",
    "or": "Odia",
    "ne": "Nepali",
    "si": "Sinhala",

    "ar": "Arabic",
    "zh": "Chinese",
    "ja": "Japanese",
    "ko": "Korean",
    "th": "Thai",
    "vi": "Vietnamese",
    "id": "Indonesian",
    "ms": "Malay",
    "tl": "Filipino",

    "fr": "French",
    "de": "German",
    "es": "Spanish",
    "it": "Italian",
    "pt": "Portuguese",
    "ru": "Russian",
    "nl": "Dutch",
    "pl": "Polish",
    "tr": "Turkish",
    "uk": "Ukrainian",
    "el": "Greek",
    "sv": "Swedish",
    "da": "Danish",
    "fi": "Finnish",
    "no": "Norwegian",
    "cs": "Czech",
    "sk": "Slovak",
    "hu": "Hungarian",
    "ro": "Romanian",
    "bg": "Bulgarian",
    "hr": "Croatian",
    "sr": "Serbian",
    "sl": "Slovenian",
    "et": "Estonian",
    "lv": "Latvian",
    "lt": "Lithuanian",

    "he": "Hebrew",
    "fa": "Persian",
    "af": "Afrikaans",
    "sw": "Swahili",
    "am": "Amharic",
    "zu": "Zulu",
    "xh": "Xhosa",
    "yo": "Yoruba",
    "ig": "Igbo",
    "ha": "Hausa",

    "ca": "Catalan",
    "eu": "Basque",
    "gl": "Galician",
    "is": "Icelandic",
    "ga": "Irish",
    "cy": "Welsh",
    "mt": "Maltese",
    "sq": "Albanian",
    "mk": "Macedonian",
    "be": "Belarusian",
    "kk": "Kazakh",
    "uz": "Uzbek",
    "mn": "Mongolian"
};


// Get Dropdowns

const sourceLanguage = document.getElementById("sourceLanguage");
const targetLanguage = document.getElementById("targetLanguage");


// Populate Dropdowns

function loadLanguages() {

    for (const code in languages) {

        // Source Dropdown
        const sourceOption = document.createElement("option");
        sourceOption.value = code;
        sourceOption.textContent = languages[code];

        // Target Dropdown
        const targetOption = document.createElement("option");
        targetOption.value = code;
        targetOption.textContent = languages[code];

        sourceLanguage.appendChild(sourceOption);
        targetLanguage.appendChild(targetOption);
    }

    // Default selections
    sourceLanguage.value = "auto";
    targetLanguage.value = "ta";
}


// Load on page start
loadLanguages();
```
