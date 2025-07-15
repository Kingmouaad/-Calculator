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

const numbers = document.querySelectorAll(".numbers");
dispay.textContent = "";
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    const deleteall = document.querySelector("#cc");
    deleteall.addEventListener("click", () => {
      dispay.textContent = "0";
      first = "";
      second = "";
      operationn = null;
      iseditingsecond = false;
    });

    if (dispay.textContent === "0") {
      iseditingsecond = false;
      dispay.textContent = number.textContent;
    } else {
      dispay.textContent += number.textContent;
    }
    // Update second number after adding digit
    if (iseditingsecond) {
      second = dispay.textContent.slice(first.length + 1);
    }
  });
});

const operation = document.querySelectorAll(".calcu");
let first;
let second;
let operationn;
let iseditingsecond = false;
let all = ["plus", "moins", "div", "plus"];
const deletee = document.querySelector("#tmhi");
deletee.addEventListener("click", () => {
  if (dispay.textContent.length <= 1) {
    dispay.textContent = "0";
    first = "";
    second = "";
    operationn = null;
    iseditingsecond = false;
    return;
  }

  const lastChar = dispay.textContent.slice(-1);
  if (["+", "-", "*", "/"].includes(lastChar)) {
    dispay.textContent = dispay.textContent.slice(0, -1);
    iseditingsecond = false;
    operationn = null;
    first = dispay.textContent;
    second = "";
    return;
  }

  dispay.textContent = dispay.textContent.slice(0, -1);
  if (iseditingsecond) {
    second = dispay.textContent.slice(first.length + 1);
    if (second === "") {
      second = "0";
    }
  } else {
    first = dispay.textContent;
  }
});

operation.forEach((opera) => {
  opera.addEventListener("click", (e) => {
    if (["+", "-", "X", "/"].some((op) => dispay.textContent.includes(op))) {
      return; // Prevent multiple operators
    }

    if (e.target.id === "plus") {
      dispay.textContent += "+";
    } else if (e.target.id === "moins") {
      dispay.textContent += "-";
    } else if (e.target.id === "mul") {
      dispay.textContent += "*";
    } else if (e.target.id === "div") {
      dispay.textContent += "/";
    }

    operationn = dispay.textContent.slice(-1);
    first = dispay.textContent.slice(0, -1);
    iseditingsecond = true;
  });
});
equal.addEventListener("click", () => {
  if (!operationn || !first || !second) return;

  first = Number(first);
  second = Number(second);
  let result;

  if (operationn === "+") {
    result = first + second;
  } else if (operationn === "-") {
    result = first - second;
  } else if (operationn === "*") {
    result = first * second;
  } else if (operationn === "/") {
    result = second === 0 ? "Error" : first / second;
  }

  dispay.textContent = result;
  first = result.toString();
  second = "";
  operationn = null;
  iseditingsecond = false;
});
