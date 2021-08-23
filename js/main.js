// variables:
const bestPrice = document.querySelector("#best-price");
const memoryCost = document.querySelector("#memory-cost");
const storageCost = document.querySelector("#storage-cost");
const deliveryCost = document.querySelector("#delivery-cost");
const allCost = document.querySelector("#total-price");
const discount = document.querySelector("#input-coupon");
const totalCost = document.querySelector("#total");

// calculate total cost
function totalPrice() {
  const totalCost =
    parseInt(bestPrice.innerText) +
    parseInt(memoryCost.innerText) +
    parseInt(storageCost.innerText) +
    parseInt(deliveryCost.innerText);
  allCost.innerText = totalCost;
  return totalCost;
}

// calculate memory cost
function memoryPrice(inputId, price) {
  document.getElementById(inputId).addEventListener("click", function () {
    memoryCost.innerText = price;
    totalPrice();
    totalCost.innerText = totalPrice();
  });
}

memoryPrice("memory-first", "0");
memoryPrice("memory-second", "180");

// calculate storage cost
function storagePrice(inputId, price) {
  document.getElementById(inputId).addEventListener("click", function () {
    storageCost.innerText = price;
    totalPrice();
    totalCost.innerText = totalPrice();
  });
}

storagePrice("storage-first", "0");
storagePrice("storage-second", "100");
storagePrice("storage-third", "180");

// calculate delivery cost
function deliveryPrice(inputId, price) {
  document.getElementById(inputId).addEventListener("click", function () {
    deliveryCost.innerText = price;
    totalPrice();
    totalCost.innerText = totalPrice();
  });
}

deliveryPrice("delivery-first", "0");
deliveryPrice("delivery-second", "20");

// calculate discount amount
function applyDiscount() {
  const discountValue = discount.value;
  if (discountValue == "stevekaku") {
    const discount = (parseInt(allCost.innerText) * 20) / 100;
    totalCost.innerText = parseInt(allCost.innerText) - discount;
    discountValue.value = "";
  } else {
    alert("Please Enter Valid Promo Code");
  }
}
