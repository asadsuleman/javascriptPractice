let array = ["asad", "suleman", "sarazai"];

let [fName, sName, lName] = array; //it is also an array variable 
console.log(fName, sName, lName);

// for destructuring index[1]/value number 2 
// let [, surName] = array; "it will skip value1 becuse of 'qoama'  ,   and if u want to select 3rd value so apply 2 qoama,s first  "

//very important
let newObj = {
    fname: "asad",
    sname: "suleman",
    lname: "sarazai",
}

//deStructuring objects
let { lname } = newObj;

// console.log(lname); //result : sarazai

//for changing obj inner property
let { fname: firstName } = newObj;
console.log(firstName); //result : asad


// what if we have nested object

let obj1 = {
    email: "asadsuleman@gmail.com",
    home: {

        address1: "karachi",
        address2: "turbat",
    }

}

// de sturcturing nested object , nested means object inside an object

// let { home: { address1 } } = obj1;

// console.log(address1); //result : karachi 

// for changing nested obj

let { home: { address1: directions, address2 } } = obj1;

console.log(directions, address2); //result is same as address1