// Get the interactive box and text elements
const The = document.querySelector('#box-and-text');

// Variables to keep track of mouse/touch position and rotation
let isDragging = false;
let lastMouseX = 0;
let lastMouseY = 0;

// Function to handle mouse/touch down event
function onPointerDown(event) {
  isDragging = true;
  lastMouseX = event.clientX || event.touches[0].clientX;
  lastMouseY = event.clientY || event.touches[0].clientY;
}

// Function to handle mouse/touch move event
function onPointerMove(event) {
  if (isDragging) {
    const currentX = event.clientX || event.touches[0].clientX;
    const currentY = event.clientY || event.touches[0].clientY;
    const deltaX = currentX - lastMouseX;
    const deltaY = currentY - lastMouseY;
    
    // Update box rotation based on movement
    const TheRotation = The.getAttribute('rotation');
    The.setAttribute('rotation', {
      x: TheRotation.x + deltaY * 0.2,
      y: TheRotation.y + deltaX * 0.2,
      z: TheRotation.z
    });
    lastMouseX = currentX;
    lastMouseY = currentY;
  }
}

// Function to handle mouse/touch up event
function onPointerUp() {
  isDragging = false;
}

// Add event listeners for mouse and touch events
document.addEventListener('mousedown', onPointerDown);
document.addEventListener('mousemove', onPointerMove);
document.addEventListener('mouseup', onPointerUp);

document.addEventListener('touchstart', onPointerDown);
document.addEventListener('touchmove', onPointerMove);
document.addEventListener('touchend', onPointerUp);
