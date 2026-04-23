const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

// Move button randomly
function moveButton() {
  const padding = 20;
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - padding);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - padding);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Desktop hover
noBtn.addEventListener("mouseover", moveButton);

// Touch support (iPad/iPhone)
document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  const rect = noBtn.getBoundingClientRect();

  const distance = Math.hypot(
    touch.clientX - (rect.left + rect.width / 2),
    touch.clientY - (rect.top + rect.height / 2)
  );

  // If finger gets close → run away
  if (distance < 100) {
    moveButton();
  }
});

// Yes button
yesBtn.addEventListener("click", () => {
  message.style.display = "block";
});
