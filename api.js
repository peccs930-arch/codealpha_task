```javascript
// =====================================
// AI Language Translator
// api.js
// =====================================

// LibreTranslate API Endpoint
const API_URL = "https://libretranslate.com/translate";

/**
 * Translate text using LibreTranslate
 */
async function translateAPI(text, source, target) {

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                q: text,

                source: source === "auto" ? "auto" : source,

                target: target,

                format: "text"

            })

        });

        if (!response.ok) {
            throw new Error("Translation failed.");
        }

        const data = await response.json();

        return data.translatedText;

    } catch (error) {

        console.error(error);

        return "Error: Unable to translate text.";

    }

}
```
