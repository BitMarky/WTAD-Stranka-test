document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from the JSON file using AJAX
    fetch("json/locations_json/locations.json") // Corrected path to the JSON file
        .then(response => response.json())
        .then(data => {
            // Find the event with location "Bratislava"
            const bratislavaEvent = data.events.find(event => event.location === "Bratislava");

            if (bratislavaEvent) {
                // Populate the "About Bratislava" section with event details
                document.getElementById("about-bratislava").innerHTML = `
                    <h2>About Bratislava Events</h2>
                    <p>Venue: ${bratislavaEvent.venue}</p>
                    <p>Start Time: ${bratislavaEvent.start_time}</p>
                    <p>End Time: ${bratislavaEvent.end_time}</p>
                    <p>Bands: ${bratislavaEvent.bands.join(", ")}</p>
                    <p>Days: ${bratislavaEvent.days.join(", ")}</p>
                `;
            }
        })
        .catch(error => {
            console.error("Error fetching JSON data:", error);
        });
});
