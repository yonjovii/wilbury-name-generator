// Updated list of possible Wilbury-style names
const wilburyNames = ["Jasper", "Buck", "Finn", "Riley", "Dexter", "Murphy", "Arlo", "Wesley", "Sawyer", "Hudson"];

// Function to generate a Wilbury name based on the user's first name
function generateName() {
    const inputName = document.getElementById('nameInput').value.trim();
    
    if (inputName === "") {
        document.getElementById('result').textContent = "Please enter a name!";
        return;
    }

    // Generate a random name from the list
    const randomIndex = Math.floor(Math.random() * wilburyNames.length);
    const generatedName = wilburyNames[randomIndex];

    // Display the generated name
    document.getElementById('result').textContent = `${generatedName} Wilbury`;
}

// JavaScript for social sharing
document.getElementById('shareBtn').onclick = function() {
    const generatedName = document.getElementById('result').textContent;
    if (generatedName) {
        const tweet = `Check out my Wilbury name: ${generatedName}!`;
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
        window.open(url, '_blank');
    }
};

// JavaScript for downloading a certificate
document.getElementById('downloadBtn').onclick = function() {
    const generatedName = document.getElementById('result').textContent;
    if (generatedName) {
        const certificateText = `Certificate of Wilbury-ness: ${generatedName}`;
        const blob = new Blob([certificateText], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${generatedName}-certificate.txt`;
        link.click();
    }
};
