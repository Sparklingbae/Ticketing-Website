// Example data for events (replace with actual data from backend)
const events = [
];

// Function to display events on the page
function displayEvents() {
    const eventList = document.getElementById("event-list");
    eventList.innerHTML = '';
    events.forEach(event => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${event.name}</strong><br>
            Date: ${event.date}<br>
            Venue: ${event.venue}<br>
            Price: $${event.price}<br>
            <button onclick="purchaseTicket(${event.id})">Purchase Ticket</button>
        `;
        eventList.appendChild(listItem);
    });
}

// Function to simulate purchasing a ticket
function purchaseTicket(eventId) {
    const event = events.find(e => e.id === eventId);
    if (event) {
        alert(`Ticket purchased for ${event.name}`);
    }
}

// Display events when the page loads
window.onload = displayEvents;