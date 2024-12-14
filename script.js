const radioButtons = document.querySelectorAll('input[type="radio"]');
const totalElement = document.querySelector(".delivery span:last-child");

const prices = {
  "one-unit": 10.0,
  "two-unit": 18.0,
  "three-unit": 24.0,
};

radioButtons.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      const price = prices[radio.id];
      totalElement.textContent = `Total : $${price.toFixed(2)} USD`;

      const selections = document.querySelector(".selections");
      selections.style.display = radio.id === "two-unit" ? "block" : "none";

      document.querySelectorAll(".option").forEach((option) => {
        option.style.borderColor = option.contains(radio)
          ? "#ff4d79"
          : "#e0e0e0";
        option.style.borderWidth = option.contains(radio) ? "2px" : "1px";
      });
    }
  });
});

document
  .querySelector('input[type="radio"]:checked')
  .dispatchEvent(new Event("change"));

const cartButton = document.querySelector(".cart-button");
cartButton.addEventListener("click", () => {
  cartButton.style.transform = "scale(0.95)";
  setTimeout(() => {
    cartButton.style.transform = "scale(1)";
  }, 100);
});
