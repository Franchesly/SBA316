// plant names to image paths
const plantImages = {
  "monstera": "images/monstera.jpg",
  "bird of paradise": "images/bird-of-paradise.jpg",
  "snake plant": "images/snake-plant.jpg",
};

document
  .getElementById("plant-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const plantName = document.getElementById("plant-name").value.trim();
    const plantType = document.getElementById("plant-type").value;
    const plantLocation = document.getElementById("plant-location").value;
    const soilType = document.getElementById("soil-type").value;

    // Create new plant card
    const plantCard = document.createElement("div");
    plantCard.className = "plant-card";
    
    // plant image
    const plantImage = document.createElement("img");
    const imageUrl = plantImages[plantName] || "images/default.jpg";
    plantImage.src = imageUrl;
    
    plantImage.alt = plantName || "image not available";
    plantImage.classList.add("plant-image");

    plantCard.innerHTML = `
        <p><strong>Plant Name:</strong> ${plantName}</p>
        <p><strong>Plant Type:</strong> ${plantType}</p>
        <p><strong>Plant Location:</strong> ${plantLocation}</p>
        <p><strong>Soil Type:</strong> ${soilType}</p>
    `;

    // Add the image to the plant card
    plantCard.prepend(plantImage);

    // Add the new plant card to the saved plants
    const savedPlants = document.getElementById("saved-plants");
    savedPlants.appendChild(plantCard);

    // Clear form 
    document.getElementById("plant-form").reset();
  });

// Clear all saved plants
document.getElementById("clear-plants").addEventListener("click", function () {
  const savedPlants = document.getElementById("saved-plants");
  savedPlants.innerHTML =
    "<p>No plants saved yet. Add a plant to see its details here!</p>";
});
