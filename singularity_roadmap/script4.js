// script4.js - DOM Interaction and Event Handling

// Selecting elements
const button = document.querySelector('#myButton');
const output = document.querySelector('.display');

// Ensure elements exist before adding event listener
if (button && output) {
    button.addEventListener('click', () => {
        // Changing HTML content
        output.textContent = "Button was clicked!";

        // Changing CSS styles
        output.style.color = "blue";

        // Toggling class for additional styling or animation
        output.classList.toggle('active');
    });
}
