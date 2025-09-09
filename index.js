import QRCode from "qrcode";
import fs from "fs";

async function generateHighQualityQRCode(url, outputFile = "qrcode.png") {
  if (!url) {
    console.error("❌ Please provide a URL after npm run dev");
    console.log("👉 Example: npm run dev https://example.com myqr.png");
    process.exit(1);
  }

  console.log(`🌍 Generating HIGH-QUALITY QR code for: ${url}`);

  const qrBuffer = await QRCode.toBuffer(url, {
    type: "png",
    width: 3840,
    errorCorrectionLevel: "H",
    margin: 2,
    scale: 20,
    rendererOpts: {
      quality: 1,
    },
  });

  fs.writeFileSync(outputFile, qrBuffer);
  console.log(`✅ QR code saved as ${outputFile}`);
}

const [, , url, outputFile] = process.argv;
generateHighQualityQRCode(url, outputFile || "qrcode.png");
