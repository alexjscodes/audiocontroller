const express = require("express");
const app = express();
const port = 1010;
const loudness = require('loudness');
const path = require('path');
const { Server } = require("ws"); // Import WebSocket library

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Create a WebSocket server instance
const wss = new Server({ port: 1011 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  // Function to send current volume to the connected client
  const sendCurrentVolume = async () => {
    const volume = await loudness.getVolume();
    ws.send(JSON.stringify({ type: "volume", value: volume }));
  };

  // Function to send muted status to the connected client
  const sendMutedStatus = async () => {
    const muted = await loudness.getMuted();
    ws.send(JSON.stringify({ type: "muted", value: muted }));
  };

  // Handle messages received from the client
  ws.on("message", async (data) => {
    const message = JSON.parse(data);
    switch (message.type) {
      case "setVol":
        await loudness.setVolume(message.value);
        await sendCurrentVolume();
        break;
      case "getVol":
        await sendCurrentVolume();
        break;
      case "muteVol":
        await loudness.setMuted(!message.value); // Toggle mute based on received value
        await sendMutedStatus();
        break;
      default:
        console.warn("Unknown message type:", message.type);
    }
  });

  // Send initial volume and muted state on connection
  sendCurrentVolume();
  sendMutedStatus();

  // Handle client disconnection
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

app.get('/', (req, res) => {
  res.render("index"); // Serve the HTML page
});

app.listen(port, () => {
  console.log(`Audio Controller is running on port ${port}`);
});