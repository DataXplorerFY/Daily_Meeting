let capturedImages = [];

function startAsGuest() {
    // Your logic for using the application as a guest
    showCameraScreen();
}

function showLoginScreen() {
    // Your logic for showing the login/signup screen
    alert('Login/Signup functionality not implemented in this example.');
}

function showCameraScreen() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const cameraScreen = document.getElementById('camera-screen');
    welcomeScreen.classList.add('hidden');
    cameraScreen.classList.remove('hidden');

    // Access the camera and display the preview
    const video = document.getElementById('camera-preview');
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
            video.play();
        })
        .catch(function (err) {
            console.error('Error accessing camera:', err);
        });
}

function captureImage() {
    const video = document.getElementById('camera-preview');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Save the captured image
    capturedImages.push(canvas.toDataURL('image/png'));

    // Display the captured images
    const capturedImagesDiv = document.getElementById('captured-images');
    capturedImagesDiv.innerHTML = '';
    capturedImages.forEach((imageSrc) => {
        const img = document.createElement('img');
        img.src = imageSrc;
        capturedImagesDiv.appendChild(img);
    });
}

function processImages() {
    // Your logic for processing the captured images (orange detection)
    // This is a placeholder; you'd need a more sophisticated image processing solution
    const orangeCount = Math.floor(Math.random() * 10) + 1; // Random number for demonstration

    // Display the summary screen
    showSummaryScreen(orangeCount);
}

function showSummaryScreen(orangeCount) {
    const cameraScreen = document.getElementById('camera-screen');
    const summaryScreen = document.getElementById('summary-screen');
    cameraScreen.classList.add('hidden');
    summaryScreen.classList.remove('hidden');

    // Display the summary content
    const treeName = document.getElementById('tree-name');
    const fruitCount = document.getElementById('fruit-count');

    treeName.textContent = 'Tree Name: Orange Tree';
    fruitCount.textContent = `Fruits Counting: ${orangeCount}`;
}
