const box = document.getElementById("box");
let position = 0;
let direction = 1; // 1 for moving right, -1 for moving left

function moveBox() {
  position += direction * 2; // Change the speed by adjusting the multiplier
  box.style.left = position + "px";

  // Reverse direction if the box reaches the end of the window
  if (position >= window.innerWidth - box.offsetWidth || position <= 0) {
    direction *= -1;
  }

  // Continue the animation
  requestAnimationFrame(moveBox);
}

// Start the animation
moveBox();
