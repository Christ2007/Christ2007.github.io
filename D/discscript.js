// Get the button element
const button = document.getElementById('puls');

// Add an event listener to the button
button.addEventListener('click', () => {
  // Add a loading effect to the button
  button.disabled = true;
  button.textContent = 'Loading...';
  button.style.cursor = 'wait';

  // Wait for 2 seconds before redirecting
  setTimeout(() => {
    window.location.href = '../index.html'; // replace with your desired redirect URL
  }, 2000);
});

// Add a hover effect to the button
button.addEventListener('mouseover', () => {
  button.style.transform = 'scale(1.1)'; // increase size on hover
  button.style.transition = 'transform 0.3s ease-in-out'; // add transition effect
});

button.addEventListener('mouseout', () => {
  button.style.transform = 'scale(1)'; // reset size on mouseout
  button.style.transition = 'transform 0.3s ease-in-out'; // add transition effect
});

// Add a fade-in animation when the page opens
document.body.style.opacity = 0; // set initial opacity to 0
setTimeout(() => {
  document.body.style.transition = 'opacity 1.5s'; // add transition effect with a longer duration
  document.body.style.opacity = 1; // fade in the page
}, 10);