let subsButton = document.querySelector(".subsBtn");

//SUBSCRIBE BUTTON
function subscribe() {
  if (subsButton.innerText === "Subscribe") {
    subsButton.innerHTML = "Subscribed";
  } else {
    subsButton.innerHTML = "Subscribe";
  }
}

//AMAZON SHIP FUNCTION
let amount = document.querySelector('.js-text-input');
let getAmount = Number(amount.value);
let total = document.querySelector('.total');
const fee = 10;

function calculate() {
  if (getAmount < 40) {
    total.innerHTML = `Total: ${getAmount += fee}`
  }
  else if (getAmount > 40) {
    total.innerHTML = `Total: ${getAmount} + FREE shipping`
  }
}
