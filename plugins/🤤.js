import axios from "axios";
import fetch from "node-fetch";

// Pre-downloaded image URLs
const imageUrls = [
  "https://express-uploader.garioxyt.repl.co/file/peaqMXu0FKf2.jpg",
  "https://express-uploader.garioxyt.repl.co/file/livjOsIQBmwR.jpg",
  "https://express-uploader.garioxyt.repl.co/file/zoktHgZT7wiL.jpg",
  "https://express-uploader.garioxyt.repl.co/file/2BzOk6capp6E.jpg",
  "https://express-uploader.garioxyt.repl.co/file/cOEbv1UaSShj.jpg",
  "https://express-uploader.garioxyt.repl.co/file/wb8Zc7V5j8qV.jpg",
  "https://express-uploader.garioxyt.repl.co/file/G1WsWSQnpAEC.jpg",
  "https://express-uploader.garioxyt.repl.co/file/kb7y4oWa8Jzv.jpg",
  "https://express-uploader.garioxyt.repl.co/file/Kp8JERZ9UuwI.jpg",
  "https://express-uploader.garioxyt.repl.co/file/LYwTV0NYz7A6.jpg",
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

handler.customPrefix = /^(🤤)$/i
handler.command = new RegExp
handler.tags = ['🤤']
handler.help = ['🤤']
export default handler;
