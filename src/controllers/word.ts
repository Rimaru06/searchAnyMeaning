import { Request, Response } from "express";
import WordModel from "../models/word.js";
import { AppError } from "../utils/AppError.js";
import { GoogleGenAI } from "@google/genai";
const wordController = async (req: Request, res: Response) => {

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

  const word: string = req.body.word;
  if (!word) throw new AppError("word is required", 400);

  try {
    const wordInDb = await WordModel.findOne({ WordOrSentence: word });
    if (wordInDb) return res.json({ meaning: wordInDb.Meaning });

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: `Explain the meaning of this sentence or word in simple words: ${word}`,
    });

    const meaning = response.text;

    await WordModel.create({
      WordOrSentence: word,
      Meaning: meaning,
    });

    return res.json({ meaning });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Could not fetch meaning" });
  }
};

export default wordController;