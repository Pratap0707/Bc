import axios from "axios";
import fetch from "node-fetch";

// Pre-downloaded image URLs
const imageUrls = [
  "https://express-uploader.garioxyt.repl.co/file/NjamOp0leq0z.jpg",
  "https://express-uploader.garioxyt.repl.co/file/q6fXKCsEb8RR.jpg",
  "https://express-uploader.garioxyt.repl.co/file/GuTnWjnxNFrX.jpg",
  "https://express-uploader.garioxyt.repl.co/file/Rw53QfiUwoW1.jpeg",
  "https://express-uploader.garioxyt.repl.co/file/J1Skn2XUj0dU.jpeg",
  "https://express-uploader.garioxyt.repl.co/file/dJ5qD1RMSGG4.jpeg",
  "https://express-uploader.garioxyt.repl.co/file/Nd8MQcNlhDQv.jpeg",
  "https://express-uploader.garioxyt.repl.co/file/TImv1PaARfUG.jpg",
  "https://express-uploader.garioxyt.repl.co/file/hsS2VPswezag.jpg",
  "https://express-uploader.garioxyt.repl.co/file/yZnLx0dHVvjn.jpg",
  // Add more image URLs here
];

let handler = async (m, { conn, text }) => {
  try {
    // Select a random image URL
    const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

    // Fetch the image
    const response = await axios.get(randomImageUrl, { responseType: "arraybuffer" });
    const base64Image = Buffer.from(response.data, "binary").toString("base64");

    // Send the image as a file
    conn.sendFile(m.chat, `data:image/jpeg;base64,${base64Image}`, "", "");
  } catch (error) {
    console.error(error);
    m.reply("An error occurred while sending the image.");
  }
};

handler.customPrefix = /^(🥵)$/i
handler.command = new RegExp

handler.tags = ['🤤']
handler.help = ['🥵']
export default handler;