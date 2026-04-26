const productName = "Mouse";

const price = 30000;

let discountedPrice = price;

const isOnSale = true;

if (isOnSale === true) {
  discountedPrice = price - 5000;
}

console.log(productName);
console.log(price);
console.log(discountedPrice);
