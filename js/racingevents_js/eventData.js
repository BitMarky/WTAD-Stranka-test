    // JSON data for event card 1
    var eventData1 = {
        "name": "Monaco Marvel Rally Challenge",
        "date_time": {
            "date": {
                "day": "10",
                "month": "August"
            },
            "time": "12:00 PM"
        },
        "location": {
            "track": "Rally Monaco Circuit",
            "city": "Monaco"
        },
        "description": "Rally Monaco Circuit: High-speed gravel stages, epic jumps"
    };
    
    // JSON data for event card 2
    var eventData2 = {
        "name": "Barcelona Grand Prix",
        "date_time": {
            "date": {
                "day": "15",
                "month": "September"
            },
            "time": "2:00 PM"
        },
        "location": {
            "track": "Circuit de Barcelona-Catalunya",
            "city": "Barcelona"
        },
        "description": "Barcelona Grand Prix: Iconic track with thrilling corners and fast straights"
    };
    
    // JSON data for event card 3
    var eventData3 = {
        "name": "Silverstone Circuit Challenge",
        "date_time": {
            "date": {
                "day": "20",
                "month": "October"
            },
            "time": "3:30 PM"
        },
        "location": {
            "track": "Silverstone Circuit",
            "city": "Northamptonshire"
        },
        "description": "Silverstone Circuit Challenge: Historic track with a mix of high-speed corners and technical sections"
    };
    
    // Function to format the date
    function formatDate(date) {
        return date.day + " " + date.month;
    }
    
    // Function to populate the event information for a specific card
    // Function to populate the event information for a specific card
    function populateEventInfo(data, cardId) {
        console.log("Populating event information for card:", cardId);
        var card = document.getElementById(cardId);
        card.querySelector('#meno' + cardId).innerText = data.name;
        card.querySelector('#date' + cardId).innerText = formatDate(data.date_time.date) + " at " + data.date_time.time;
        card.querySelector('#location' + cardId).innerText = data.location.track + ", " + data.location.city;
        card.querySelector('#description' + cardId).innerText = data.description;
    }
    
    
    // Populate event data for each card
    document.addEventListener("DOMContentLoaded", function() {
        populateEventInfo(eventData1, 'event-card-1');
        populateEventInfo(eventData2, 'event-card-2');
        populateEventInfo(eventData3, 'event-card-3');
    });