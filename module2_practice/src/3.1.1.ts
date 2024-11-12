{
    //

    class Animal {
        // public name: string;  // define
        // public species: string;
        // public sound: string;


        // parameter properties
        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;  // initialize
            // this.species = species;
            // this.sound = sound

        }
        makeSound() {
            console.log(`the ${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal("haski", "dog", "gheu gheu")
    console.log(dog.makeSound());


    // cleaner code for class using public keyword and aparameter properties 


    class Boy {
        constructor(public name: string, public age: number, public isStudent: boolean) { }
        myInfo() {
            console.log(`my name is ${this.name} , i'm ${this.age} years old`);
        }
    }



    // making instance for Boy Class
    const rakib = new Boy("rakib", 28, true)
    const sakib = new Boy("sakib", 25, false)

    console.log(rakib.myInfo());
    console.log(sakib.myInfo());


    //
}