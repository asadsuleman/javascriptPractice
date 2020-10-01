// filter is used for filtering a array or an array object

// its a conditional loop run on our desire command



const arrayObj = [
    { name: "book", price: 100 },
    { name: "bag", price: 500 },
    { name: "pen", price: 10 },
    { name: "keyboard", price: 150 },
    { name: "mouse", price: 90 }
]


// case is if the price is less then 100 only show those values

const arrayFilter = arrayObj.filter((values, index) => {
    return values.price <= 100 // <= 100 its  mean  is less then and equal to 100

    // return values.name === "book"   // it return only that particuler obj which name is book
})

console.log(arrayFilter);