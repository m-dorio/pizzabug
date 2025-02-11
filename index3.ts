// LITERAL TYPES
let myName = "mike"
const myName2: "Bob" = "Bob"

// UNIONS or enums
type User = {
    username: string
    role: "guest" | "member" | "admin"
}

type UserRole = "guest" | "member" | "admin"

// usage
//let userRole: UserRole = "admin" //type UserRole = "guest" | "member" | "admin"
// let userRole = "xxxzxzxzxz" //"xxxzxzxzxz": Unknown word
let userRole: UserRole = "member"
