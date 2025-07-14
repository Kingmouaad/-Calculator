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
let dispay = document.querySelector("#display");
dispay.value = Number(0);

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
dispay.textContent = "";
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    const deleteall = document.querySelector("#cc");
    deleteall.addEventListener("click", () => {
      dispay.textContent = "0";
    });
    if (dispay.textContent === "0") {
      dispay.textContent = number.textContent;
    } else {
      dispay.textContent += number.textContent;
    }
  });
});
// const deleteall = document.querySelector("#cc");
// deleteall.addEventListener("click", () => {
//   dispay.textContent = "0";
// });
const operation = document.querySelectorAll(".calcu");
let first;
let second;
let operationn;
let all = ["plus", "moins", "div", "plus"];
const equal = document.querySelector("#equal");
operation.forEach((opera) => {
  opera.addEventListener("click", (e) => {
    // operationn = e.target.textContent;
    if (e.target.id === "plus") {
      dispay.textContent += "+";
    } else if (e.target.id === "moins") {
      dispay.textContent += "-";
    } else if (e.target.id === "mul") {
      dispay.textContent += "*";
    } else if (e.target.id === "div") {
      dispay.textContent += "/";
    }
    operationn = e.target.textContent;
    first = dispay.textContent;
  });
});
equal.addEventListener("click", () => {
  first = first.slice(0, -1);
  second = dispay.textContent.slice(first.length + 1);
  first = Number(first);
  second = Number(second);
  operationn = operationn;
  if (operationn == "+") {
    result = first + second;
  } else if (operationn == "-") {
    result = first - second;
  } else if (operationn == "X") {
    result = first * second;
  } else if (operationn == "/") {
    result = first / second;
  }

  dispay.textContent = result;
});
const deletee = document.querySelector("#tmhi");
deletee.addEventListener("click", () => {
  dispay.textContent = dispay.textContent.slice(0, -1);
});
