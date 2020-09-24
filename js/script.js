//alert('JS is loaded!');
// IPO Input - Process - Output

// Declare your constants and variables (State)
let year;


//Select and cache DOM element references
const yearEl = document.getElementById('year');

// Initialize your even listeners

// Define application functions

init();  //run the function as soon as the page loads;

function init(){
    year = new Date().getFullYear();
    yearEl.innerText = year;
}