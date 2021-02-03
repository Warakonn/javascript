class Dog{
    constructor(name){
        this._name = name;
    }

    introduce(){
        console.log("Hello This is " + this._name + " !");
    }

    //A static method
    static bark(){
        console.log("Woof!");
    }
}

const myDog = new Dog("Buster");
myDog.introduce();
const myDog2 = new Dog("pluto");
myDog2.introduce();
//Calling the static method
Dog.bark();