// Write your code here!
// Remove the 'main#main' node
document.querySelector('main#main').remove();

// Create a new <h1> node and assign it to the 'newHeader' variable
const newHeader = document.createElement('h1');

// Set the 'id' attribute of the new <h1> node to 'victory'
newHeader.id = 'victory';

// Set the innerHTML of the new <h1> node to include the appropriate text
newHeader.innerHTML = `${YOUR_NAME} is the champion`;