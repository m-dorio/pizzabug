let myName: string = "Bob";
// myName = 5;

let numberOfWheels: number = 4;
let isStudent: boolean = false;

type Food = string;
let favoriteFood: Food = "pizza";

type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
};

let person: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
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

// function displayInfo(person: Person) {
//     console.log(`${person} lives at ${person.address?.street}`)
// }

// displayInfo(person);

let agesA: number[] = [100, 101, 102]
let agesB = [100, 101, 102]


type PersonA = {
    name: string
    age: number
    isStudent: boolean
};

let person01: PersonA = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person02: PersonA = {
    name: "Jill",
    age: 66,
    isStudent: false,
}

let peopleList: PersonA[] = [person01, person2]
// let peopleList: Array<PersonA> = [person01,person02]
// let peopleList = [person01, person2]
