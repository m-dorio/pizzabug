let myName: string = "Bob";
// myName = 5;

let numberOfWheels : number = 4;
let isStudent: boolean = false;

type Food = string;
let favoriteFood: Food = "pizza";

type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    address: Address;
};

let person: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address: {
        street: "Magical",
        city: "Somewhere",
        country: "Anywhere"
    }
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
        address: {
        street: "Magical",
        city: "Somewhere",
        country: "Anywhere"
    }
}