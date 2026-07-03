```javascript
// ========================================
// AI Language Translator
// server.js
// ========================================

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

// Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Translation Route
app.post("/translate", async (req, res) => {

    const { text, source, target } = req.body;

    try {

        const response = await fetch("https://libretranslate.com/translate", {
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

        const data = await response.json();

        res.json({
            translatedText: data.translatedText
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            translatedText: "",
            error: "Translation failed"
        });

    }

});

// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
```
