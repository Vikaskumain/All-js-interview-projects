// Event Emitter Class
class EventEmitter {
    constructor() {
        // Initialize an object to store event listeners
        this.events = {};
    }

    // Method to subscribe to an event
    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }

    // Method to emit an event
    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(listener => {
                listener(data);
            });
        }
    }
}

// Instantiate the Event Emitter
const eventEmitter = new EventEmitter();

// Define event handlers
function event1Handler() {
    console.log("Event 1 triggered");
}

function event2Handler() {
    console.log("Event 2 triggered");
}

// Subscribe event handlers to events
eventEmitter.on("event1", event1Handler);
eventEmitter.on("event2", event2Handler);

// Get buttons
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

// Add click event listeners to buttons
button1.addEventListener("click", () => {
    // Emit event1 when button1 is clicked
    eventEmitter.emit("event1");
});

button2.addEventListener("click", () => {
    // Emit event2 when button2 is clicked
    eventEmitter.emit("event2");
});
