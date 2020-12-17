////////////////////////////////////////



// '.map'  is used for running a loop on array or array_objects 
// map always return an array 

let array = ["item1", "item2", "item3", "item4"];
// var/let/const variableName = nameYouWantLoopOn.map ((parameters) create a arrow function )
// ((first paramter is for items of array/arrayObject  , secod is for index value like [0 , 1 , 2 so on] ) => then any actions )


// array.map((u can Name it What ever you want, ));
const mapArray = array.map((items, index) => console.log(items)); // here items variable is for taking items and index is for index values


// creating a array of multiple objects

// //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
// const arrayObj = [
//     { name: "book", price: 100 },
//     { name: "bag", price: 500 },
//     { name: "pen", price: 10 },
//     { name: "keyboard", price: 150 },
//     { name: "mouse", price: 90 }

// ]

// //created a map loop , elements is for values ,indexValue is for index , then arrow funtion with some desire actions
// const mapArrayObj = arrayObj.map((elements, indexValues) => elements); // elements.name print all values of name
// console.log(mapArrayObj);


///xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//


const arrayObj = [
    { name: "book", price: 100 },
    { name: "bag", price: 500 },
    { name: "pen", price: 10 },
    { name: "keyboard", price: 150 },
    { name: "mouse", price: 90 }

]

  

//created a map loop , elements is for values ,indexValue is for index , then arrow funtion with some desire actions
const mapArrayObj = arrayObj.map((elements, indexValues) => {
    return elements // it return all key and values in vairable mapArratObj

    

    // return elements.name  // it return all the names
    // return indexValues // it return index values
});
console.log(mapArrayObj);





//extra

const teachers = ['zia', 'amir', 'ahsan', 'khan']
const title = teachers.map((name, ali) => 'Mr. ' + name, "add");
console.log(title);