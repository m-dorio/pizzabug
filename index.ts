type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

const menu: Pizza[] = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
];


let cashInRegister = 100;
let nextOrderId = 1;
const orderHistory: Order[] = []

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (selectedPizza === undefined) {
        console.error(`${pizzaName} does not exist in the menu.`);
        return;
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderHistory.push(newOrder);
    return newOrder;
}

function completeOrder(orderId: number) {
    const order = orderHistory.find(order => order.id === orderId)
    if (order === undefined) {
        console.error(`${orderId} does not exist in the menu.`);
        // throw new Error();
        return;
    }
    order.status = "completed"
    return order
}

export function getPizzaDetail(identifier: string | number) {
    // const identify = menu.find(item => item.id === identifier || item.name === identifier); 
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `Identifier` must be either a string or a number");
    }
}

addNewPizza({ id: 4, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: 5, name: "BBQ Chicken", price: 12 })
addNewPizza({ id: 6, name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderHistory)
console.log(getPizzaDetail(1));