/* Destructing Objects */

const user = {
    name:"Jesse",
    age:25,
    location:'Yola',
    role:"Developer",
    country:"Nigeria"
}

const {name,role} = user
const city = user.location
console.log(name,role,city)

const product = {
    id:101,
    nameL:'Laptop',
    specs:{
        processor:"Intel i7",
        ram:"16gb",
        storage: "512gb SSD"
    }
}

const {nameL} = product
const {processor,ram} = product.specs
console.log(nameL,processor,ram)


/* Rest Operators */
const scores = [98,85,75,90,88]

const [high1,high2,...remaingScores] = scores
console.log(remaingScores)
console.log(high1,high2,remaingScores)

/* Spread Arrays =  combine arrays*/
const fruits = ["apple","banana"]
const vegetable = ["carrot","brocoli"]
const groceries = [...fruits,...vegetable]
console.log(groceries)

/* Spread Objects = merge objects*/
const personalInfo = {
    namec : "Jesse",
    age2 : 25
}

const jobInfo = {
    job:"Developer",
    company : "Tech Co"
}

const profile = {...personalInfo,...jobInfo}
console.log(profile)

 
/* Template literal */
function generateMessage (name,favLang){
    console.log( `Hello ${name}! I see you love ${favLang}.Keep Coding` )
}
generateMessage("Jesse","Javascript")

/* Ternary Operator */

function checkAge (age) {
    const ifAdult = `${age}` > 18 ? "You are an Adult" : "You are a minor"
    console.log(ifAdult)
}
checkAge(21)

/* Arrow functions  = argu,arrow,what you wanna return*/


/* Short circuting and Logical operators (And &&) if first value true outputs second value ,  if false it logs false and doesn't even check second value */

/* Falsy value : null,undefined,0,' ' */
console.log('Jesse' && 'some codes')
console.log(0 && 'some codes')

/* (OR||) operator opposite of AND  if true we get true first value ignored if false we get second element */

console.log('Jesse' || 'some codes')
console.log(0 || 'some codes')

