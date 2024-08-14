// List of possible Wilbury-style names
const wilburyNames = ["Nelson", "Otis", "Lefty", "Charlie", "Lucky", "Muddy", "Clayton", "Spike", "Buck", "Jasper"];

// Function to generate a Wilbury name based on the user's first name
function generateName() {
    const inputName = document.getElementById('nameInput').value.trim();
    
    if (inputName === "") {
        document.getElementById('result').textContent = "Please enter a name!";
        return;
    }

    // Generate a random index to select a name from the list
    const randomIndex = Math.floor(Math.random() * wilburyNames.length);
    const generatedName = wilburyNames[randomIndex];

    // Display the generated name
    document.getElementById('result').textContent = `${generatedName} Wilbury`;
}
