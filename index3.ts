// LITERAL TYPES
let myName3 = "mike"
const myName2: "Bob" = "Bob"

type UserRole = "guest" | "member" | "admin" | "contributor"

// usage
//let userRole: UserRole = "admin" //type UserRole = "guest" | "member" | "admin"
// let userRole = "xxxzxzxzxz" //"xxxzxzxzxz": Unknown word
// let userRole: UserRole = "member"

// UNIONS or enums
type User = {
    id: number
    username: string
    role: UserRole
}

const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "guest_user", role: "member" }
]

// function fetchUserDetails(username: string): User {
//     const user = users.find(user => user.username === username)
//     if (!user) {
//         throw new Error(`User with username ${username} not found`)
//     }
//     return user
// }

function updateUser(id: number, updates: any) { //this time we use any, as we do not know what field/property to update
    const foundUser = users.find(user => user.id === id);
    if (!foundUser) {
        console.error("user not found");
        return
    }
    Object.assign(foundUser,updates);
}

updateUser(1, {
    username: "new_john_doe"
});
updateUser(4, {
    role: "contributor"
});

console.log(users);