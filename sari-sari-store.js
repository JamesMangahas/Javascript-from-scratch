let store = [
  { name: "Milo", price: 500 },
  { name: "Bearbrand", price: 3000 },
  { name: "Nescafe", price: 320 }
];

function calculateTotal(store){
  let total = 0;

  for (let i = 0; i < store.length; i++){
    total += store[i].price;
  }

  return total;
}

function applyDiscount(total) {
  if (total > 1000) {
    return total - 40;
  }
  return total;
}

let total = calculateTotal(store);
let finalTotal = applyDiscount(total);

console.log(finalTotal);