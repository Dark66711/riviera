import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDir = path.join(process.cwd(), "public", "images", "riviera");
const outputDir = path.join(process.cwd(), "public", "images", "riviera-premium");

const targets = [
  "ceiling-ambience.jpg",
  "cocktail.webp",
  "enkai-plate.webp",
  "facade.webp",
  "fish-rice.webp",
  "grill-steak.webp",
  "hero-seafood-ai.webp",
  "interior-lounge.webp",
  "seafood-bowl.jpg",
  "seafood-platter.webp",
  "shrimp-plate.webp",
  "skewer.webp",
  "sushi-plate.webp",
  "table-experience.webp",
  "tower.webp"
];

await fs.mkdir(outputDir, { recursive: true });

for (const file of targets) {
  const input = path.join(sourceDir, file);
  const parsed = path.parse(file);
  const output = path.join(outputDir, `${parsed.name}.webp`);
  const image = sharp(input, { failOn: "none" });
  const metadata = await image.metadata();
  const longEdge = Math.max(metadata.width ?? 0, metadata.height ?? 0);
  const upscaleTarget = 1400;
  const shouldUpscale = longEdge > 0 && longEdge < upscaleTarget;

  let pipeline = sharp(input, { failOn: "none" })
    .rotate()
    .median(1)
    .modulate({ saturation: 1.08, brightness: 1.035 })
    .linear(1.06, -4)
    .sharpen({ sigma: 0.75, m1: 0.55, m2: 1.35, x1: 2, y2: 8 });

  if (shouldUpscale) {
    pipeline = pipeline.resize({
      width: (metadata.width ?? 0) >= (metadata.height ?? 0) ? upscaleTarget : undefined,
      height: (metadata.height ?? 0) > (metadata.width ?? 0) ? upscaleTarget : undefined,
      fit: "inside",
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: false
    });
  }

  await pipeline.webp({ quality: 92, smartSubsample: true, effort: 6 }).toFile(output);
}

console.log(`Refined ${targets.length} Riviera images in ${outputDir}`);
