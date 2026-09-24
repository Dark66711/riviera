import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const srcDir = path.join(process.cwd(), "public/images/bondi");
const outDir = path.join(process.cwd(), "public/images/bondi-enhanced");

const targets = {
  "avocado-toast.webp": 1200,
  "bowl.webp": 1200,
  "breakfast-table.webp": 1600,
  "chilaquiles.webp": 1400,
  "coffee.webp": 1200,
  "interior.webp": 1600,
  "patio.webp": 1600,
  "toasts.webp": 1200
};

await fs.mkdir(outDir, { recursive: true });

for (const [file, target] of Object.entries(targets)) {
  const input = path.join(srcDir, file);
  const output = path.join(outDir, file);
  const metadata = await sharp(input, { failOn: "none" }).metadata();
  const maxSide = Math.max(metadata.width ?? 0, metadata.height ?? 0, target);

  await sharp(input, { failOn: "none" })
    .resize({
      width: maxSide,
      height: maxSide,
      fit: "inside",
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: false
    })
    .modulate({ brightness: 1.04, saturation: 1.08 })
    .linear(1.06, -5)
    .sharpen({ sigma: 0.9, m1: 0.8, m2: 1.4, x1: 2, y2: 10, y3: 18 })
    .webp({ quality: 88, effort: 6, smartSubsample: true })
    .toFile(output);

  const next = await sharp(output).metadata();
  console.log(`${file}: ${metadata.width}x${metadata.height} -> ${next.width}x${next.height}`);
}
