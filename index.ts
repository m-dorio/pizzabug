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

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaID = 1;

const orderHistory: Order[] = []

const menu: Pizza[] = [
    { id: nextPizzaID++, name: "Margherita", price: 8 },
    { id: nextPizzaID++, name: "Pepperoni", price: 10 },
    { id: nextPizzaID++, name: "Hawaiian", price: 10 },
    { id: nextPizzaID++, name: "Veggie", price: 9 },
];

function addNewPizza(pizzaObj: Pizza): void{ //function addNewPizza(pizzaObj: Pizza): void
    // will not return anything added Void as a return type
    pizzaObj.id = nextPizzaID++;
    menu.push(pizzaObj);
}

function placeOrder(pizzaName: string): Order | undefined { // Added : Order | undefined
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

function completeOrder(orderId: number): Order | undefined { //Added: : Order | undefined
    const order = orderHistory.find(order => order.id === orderId)
    if (order === undefined) {
        console.error(`${orderId} does not exist in the menu.`);
        // throw new Error();
        return;
    }
    order.status = "completed"
    return order
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined { //added union : Pizza | undefined
    // const identify = menu.find(item => item.id === identifier || item.name === identifier); 
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
        //Type 'Pizza | undefined' is not assignable to type 'Pizza'.
        //Type 'undefined' is not assignable to type 'Pizza'.
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
        //Type 'Pizza | undefined' is not assignable to type 'Pizza'.
        //Type 'undefined' is not assignable to type 'Pizza'.
    } else {
        throw new TypeError("Parameter `Identifier` must be either a string or a number");
    }

}

addNewPizza({ id: nextPizzaID, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: nextPizzaID, name: "BBQ Chicken", price: 12 })
addNewPizza({ id: nextPizzaID, name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderHistory)
console.log(getPizzaDetail(1));