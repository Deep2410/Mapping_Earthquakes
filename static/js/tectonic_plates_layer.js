// Initialize the map
let map = L.map('map').setView([30, 0], 2);

// Add OpenStreetMap base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to fetch and add tectonic plate boundaries
function addTectonicPlates() {
    d3.json("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json")
        .then(function(plateData) {
            L.geoJSON(plateData, {
                style: {
                    color: "orange",
                    weight: 2
                }
            }).addTo(map);
        })
        .catch(function(error) {
            console.error("Error loading tectonic plate data:", error);
        });
}

// Add tectonic plates to the map
addTectonicPlates();