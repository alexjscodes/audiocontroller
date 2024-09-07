let ws; // Declare a variable to hold the WebSocket connection

function connect() {
  // Create a WebSocket connection to the server on port 1011
  ws = new WebSocket("ws://localhost:1011"); // Replace with your server address if needed

  ws.onopen = function () {
    console.log("Connected to server");
    // Send initial message to get current volume on connection
    sendGetVolMessage();
  };

  ws.onmessage = function (event) {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case "volume":
        document.getElementById("current-vol").innerHTML = data.value;
        document.getElementById("slider").value = data.value;
        break;
      case "muted":
        // Update mute state UI (if applicable)
        break;
      default:
        console.warn("Unknown message type:", data.type);
    }
  };

  ws.onerror = function (error) {
    console.error("WebSocket error:", error);
  };

  ws.onclose = function () {
    console.log("Disconnected from server");
  };
}

function sendGetVolMessage() {
  ws.send(JSON.stringify({ type: "getVol" }));
}

function setVol(newVal) {
  ws.send(JSON.stringify({ type: "setVol", value: newVal }));
}

// Update functions to use WebSocket messages
function currentVol() {
  sendGetVolMessage(); // Request current volume on page load
}

window.onload = () => {
  connect(); // Establish the WebSocket connection on window load
};