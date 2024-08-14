// List of possible Wilbury-style names
const wilburyNames = ["Nelson", "Otis", "Lefty", "Charlie", "Lucky", "Muddy", "Clayton", "Spike", "Buck", "Jasper"];

// Function to generate a Wilbury name based on the user's first name
function generateName() {
    const inputName = document.getElementById('nameInput').value.trim();
    const selectedLetter = document.getElementById('letterSelect').value;
    
    if (inputName === "") {
        document.getElementById('result').textContent = "Please enter a name!";
        return;
    }

    // Match first letter of the user's name if no letter is selected
    let filteredNames = wilburyNames;
    if (selectedLetter) {
        filteredNames = wilburyNames.filter(name => name.startsWith(selectedLetter));
    } else {
        filteredNames = wilburyNames.filter(name => name.startsWith(inputName[0].toUpperCase()));
    }

    // Fallback to full list if no matches found
    if (filteredNames.length === 0) {
        filteredNames = wilburyNames;
    }

    // Generate a random name from the filtered list
    const randomIndex = Math.floor(Math.random() * filteredNames.length);
    const generatedName = filteredNames[randomIndex];

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
