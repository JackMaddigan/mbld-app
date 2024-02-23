const video = document.getElementById("video");

// Prompt the user for permission to access the camera
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((error) => {
    console.error("Error accessing the camera:", error);
  });

const captureBtn = document.getElementById("captureBtn");
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

photoButton.addEventListener("click", () => {
  // Draw the current video frame onto the canvas
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Get the image data as a data URL
  const imageDataURL = canvas.toDataURL("image/png");

  // Do something with the captured image data (e.g., send it to a server, display it)
  console.log("Captured Image:", imageDataURL);
});
