//Classes are a template for creating objects. u can create multiple objects after creating a single class

//syntax for creating a class
class car {
    constructor(Model, Engine, Transmission, Color) {

        this.Model = Model;
        this.Engine = Engine;
        this.Transmission = Transmission;
        this.Color = Color

    }

}

//syntax for creating a object through class 
const crolla = new car("GLI", 1600, "auto", 'white'); //here we used 'new ' for new object
console.log(crolla);

const altis = new car("grende", 1800, "auto", "black");
console.log(altis);


console.log(crolla.Color, altis.Model);
console.log();