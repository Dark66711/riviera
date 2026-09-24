import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const folder = process.argv[2] ?? "riviera-premium";
const dir = path.join(process.cwd(), "public", "images", folder);
const files = (await fs.readdir(dir)).filter((file) => file.endsWith(".webp")).sort();
const thumbs = [];

for (const file of files) {
  const svg = Buffer.from(`
    <svg width="220" height="50" xmlns="http://www.w3.org/2000/svg">
      <rect width="220" height="50" fill="#101414"/>
      <text x="10" y="28" font-size="13" fill="#F3F0E9" font-family="Arial">${file}</text>
    </svg>
  `);
  const input = await sharp(path.join(dir, file))
    .resize(220, 220, { fit: "cover" })
    .extend({ top: 0, bottom: 50, left: 0, right: 0, background: "#101414" })
    .composite([{ input: svg, top: 220, left: 0 }])
    .png()
    .toBuffer();

  thumbs.push({
    input,
    left: (thumbs.length % 5) * 220,
    top: Math.floor(thumbs.length / 5) * 270
  });
}

const output = path.join(process.cwd(), "public", "images", `${folder}-contact.png`);
await sharp({
  create: {
    width: 1100,
    height: Math.ceil(files.length / 5) * 270,
    channels: 4,
    background: "#101414"
  }
})
  .composite(thumbs)
  .png()
  .toFile(output);

console.log(output);
