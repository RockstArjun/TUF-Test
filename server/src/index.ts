import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import { db } from "./config/db";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response) => {
  try {
    const submissions = await db.submissions.findMany();
    res.json(submissions);
  } catch (error: any) {
    res.json({ error: error.message });
  }
});

app.post("/", async (req: Request, res: Response) => {
  try {
    const { username, language, input, source } = req.body;

    // validate body
    if (!username || !language || !input || !source) {
      return res.json({ error: "All fields are required" });
    }

    const newSubmission = await db.submissions.create({
      data: {
        username,
        language,
        input,
        source,
      },
    });
    res.json({
      message: "Submission created successfully",
      data: newSubmission,
    });
  } catch (error: any) {
    res.json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
