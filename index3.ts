// LITERAL TYPES
let myName = "mike"
const myName2: "Bob" = "Bob"

type UserRole = "guest" | "member" | "admin"

// usage
//let userRole: UserRole = "admin" //type UserRole = "guest" | "member" | "admin"
// let userRole = "xxxzxzxzxz" //"xxxzxzxzxz": Unknown word
// let userRole: UserRole = "member"

// UNIONS or enums
type User = {
    username: string
    role: UserRole
}

const users: User[] = [
    { username: "John Doe", role: "member" },
    { username: "Jane Doe", role: "admin" },
    { username: "guest_user", role: "member" }
]

function fetchUserDetails(username: string): User {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}