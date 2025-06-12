import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({ apiKey });

app.post("/api/generate", async (req, res) => {
  const {
    systemPrompt,
    userPrompt,
    temperature,
    max_tokens,
    presence_penalty,
    frequency_penalty,
    model,
  } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: parseFloat(temperature),
      max_tokens: parseInt(max_tokens),
      presence_penalty: parseFloat(presence_penalty),
      frequency_penalty: parseFloat(frequency_penalty),
    });

    const output = response.choices[0].message.content;

    // Log to file
    const log = {
      timestamp: new Date(),
      input: req.body,
      output,
    };
    fs.appendFileSync(
      "outputs/output_results.json",
      JSON.stringify(log, null, 2) + ",\n"
    );

    res.json({ output });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
