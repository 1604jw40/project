const basePrice = 10000;
const shippingFee = 3000;

let totalPrice = basePrice + shippingFee;

const isMember = true;

if (isMember) {
  totalPrice = totalPrice - 2000;
}

console.log(totalPrice);