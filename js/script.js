// DOM Elements
const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// Event Listeners
if (button) {
    button.addEventListener('click', handleSubmit);
}

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleSubmit();
    });
}

// Functions
function handleSubmit() {
    const value = input.value.trim();
    
    if (value === '') {
        alert('Please enter something');
        return;
    }
    }
    
    console.log('Submitted:', value);
    input.value = '';


// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded');
});