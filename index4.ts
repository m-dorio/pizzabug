// TYPE OF ANY

// let value = 1
// value = "hi" //type 'string' is not assignable to type 'number'
// value.toUppercase(); //type 'string' is not assignable to type 'number'

let value: any = 1
value.toUppercase()
value = "hi" 
value.map()

// WHEN SHOULD I USE ANY? DON'T!
// JS to TS if you are in a hurry, can do this just for now.

