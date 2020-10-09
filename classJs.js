//Classes are a template for creating objects. u can create multiple objects after creating a single class
// class is used for making multiple new objects
//syntax for creating a class
class car {
    constructor(Model, Engine, Transmission, Color) {

        this.Model = Model;
        this.Engine = Engine;
        this.Transmission = Transmission;
        this.Color = Color

    }
    carModel() {
        console.log(`the car model is ${this.Model}`);
    }


    carColor() {
        console.log(`the car color is ${this.Color}`);
    }

}

//syntax for creating a object through class 
const crolla = new car("GLI", 1600, "auto", 'white'); //here we used 'new ' for new object
// console.log(crolla);

const altis = new car("grende", 1800, "auto", "black");
// console.log(altis);


// console.log(crolla.Color, altis.Model);

altis.carColor();
altis.carModel();

// crolla.carColor();