const menu = [
  { name: "Margarita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

const cashInRegister = 100;
const nextOrderId = 1;
const orderQueue = [];

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

// dot find is a method, a callback function for array
function placeOrder(pizzaName) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  cashInRegister += selectedPizza.price;
  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId) {
  const myOrder = orderQueue.find((order) => order.orderId === orderId);
  order.status = "completed";
  return order;
}

addNewPizza({
  name: "Pinoy Style",
  price: 5,
});
addNewPizza({
  name: "BBQ KF Chicken",
  price: 12,
});

placeOrder("Pinoy Style");
completeOrder("1");

console.log("Menu: ", menu);
console.log("Cash in register: ", cashInRegister);
console.log("Order Queue: ", orderQueue);
