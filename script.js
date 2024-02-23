const video = document.getElementById("video");
const captureBtn = document.getElementById("captureBtn");
const switchCameraBtn = document.getElementById("switchCameraBtn");
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

let currentFacingMode = "user"; // 'user' for front camera, 'environment' for rear camera

async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: currentFacingMode },
    });

    video.srcObject = stream;
  } catch (error) {
    console.error("Error accessing the camera:", error);
  }
}

startCamera(); // Initialize the camera with the default facing mode

function switchCamera() {
  currentFacingMode = currentFacingMode === "user" ? "environment" : "user";
  restartCamera();
}

async function restartCamera() {
  const stream = video.srcObject;
  const tracks = stream.getTracks();

  // Stop all tracks
  tracks.forEach((track) => track.stop());

  // Start the camera with the updated facing mode
  await startCamera();
}

switchCameraBtn.addEventListener("click", switchCamera);

photoBtn.addEventListener("click", () => {
  // Draw the current video frame onto the canvas
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Get the image data as a data URL
  const imageDataURL = canvas.toDataURL("image/png");

  // Do something with the captured image data (e.g., send it to a server, display it)
  console.log("Captured Image:", imageDataURL);
});
