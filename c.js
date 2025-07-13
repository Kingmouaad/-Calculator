const body = document.querySelector("body");
function small() {
  for (let i = 0; i < 50; i++) {
    const small = document.createElement("div");
    small.classList.add("small");
    small.style.top = Math.random() * 100 + "%";
    small.style.left = Math.random() * 100 + "%";
    small.style.animationDuration = Math.random() * 3 + 3 + "s";
    small.style.animationDelay = Math.random() * 4 + "s";
    body.appendChild(small);
  }
}
const dispay = document.querySelector("#display");

window.addEventListener("load", small);
const buttons = document.querySelectorAll(".grid div");
buttons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.setAttribute("style", "animation: click 0.2s linear  both;");
  });
  button.addEventListener("mouseup", () => {
    button.removeAttribute("style", "animation: click 0.2s linear  both;");
    button.setAttribute("style", "transition: 0.3s transform linear;");
  });
});
// dispay.addEventListener("click", (e) => {
//   if (e.target === "click") {
//     e.preventDefault;
//   }
// });
const numbers = document.querySelectorAll(".numbers");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    dispay.textContent = Number(number.textContent);
  });
});
