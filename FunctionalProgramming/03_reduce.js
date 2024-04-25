const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 },
];

// Approach #1: traditional way
let totalAmount = 0;
for (let i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount;
}
console.log(totalAmount);

// Approach #2 functional way
const totalValue = orders.reduce(
    (accum, orderObj) => accum + orderObj.amount,
    0
);
console.log(totalValue);
