import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const { path: filePath } = req.query;
  const fullPath = path.join(process.cwd(), "images", ...filePath);

  try {
    const file = await fs.readFile(fullPath);
    res.setHeader("Content-Type", "image/jpeg");
    res.status(200).send(file);
  } catch (error) {
    res.status(404).send("Image not found");
  }
}
