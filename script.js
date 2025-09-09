document.getElementById("generateBtn").addEventListener("click", function () {
    let text = document.getElementById("qrText").value;
    if (text.trim() === "") {
        alert("Please enter some text!");
        return;
    }

    let qrImage = document.getElementById("qrImage");
    let downloadBtn = document.getElementById("downloadBtn");

    fetch(`http://127.0.0.1:8000/generate_qr/?data=${encodeURIComponent(text)}`)
        .then(response => response.blob())  // Convert response to image blob
        .then(blob => {
            let imageUrl = URL.createObjectURL(blob);  // Create object URL for the image
            qrImage.src = imageUrl;
            qrImage.style.display = "block";  // Show the image
            
            // Enable the download button
            downloadBtn.href = imageUrl;
            downloadBtn.style.display = "inline-block";  // Show the button
        })
        .catch(error => console.error("Error:", error));
});
