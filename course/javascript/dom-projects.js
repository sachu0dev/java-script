
String(25)
console.log('25' - 5)

function calculateTotal() {
  const inputElement = document.querySelector(".js-cost-input");
  let orderCost = Number(inputElement.value);
  if (orderCost < 40) {
    orderCost = orderCost + 10;
  }
  document.querySelector(".total-cost").innerHTML = `$${orderCost}`;
}

function handelCostKeyDown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}

function subscribe() {
  const buttonElement = document.querySelector(".js-subscribe-button");
  if (buttonElement.innerText === "Subscribe") {
    buttonElement.innerHTML = "Subscribed";
  } else {
    buttonElement.innerHTML = "Subscribe";
  }
}