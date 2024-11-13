{

    //


    class Animal {
        name: string;
        species: string;
        constructor(name: string, species: string) {
            this.name = name;
            this.species = species
        }
        makeSound() {
            console.log(`I am making sound`);
        }

    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeBark() {
            console.log(`i am barking`);
        }
    }


    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeMeaw() {
            console.log(`i am meao`);
        }
    }

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog // return true
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat // return true
    }

    const getAnimal = (animal: Animal) => {
        animal.makeSound()
        if (isDog(animal)) { // if animal parameter is instance of "Dog" class
            animal.makeBark()
        }
        else if (isCat(animal)) { // if animal parameter is instance of "Cat" class
            animal.makeMeaw()
        }
        else { // if parameter animal is not an instance of "Dog" or "Cat" class
            animal.makeSound()
        }
    }



    const dog = new Dog("dog vai", "dog")// instance of Dog class
    const cat = new Cat("persian", "cat") // instance of Cat class

    getAnimal(dog)
    getAnimal(cat)





    
    // const getAnimal = (animal: Animal) => {
    //     animal.makeSound()
    //     if (animal instanceof Dog) { 
    //         animal.makeBark()
    //     }
    //     else if (animal instanceof Cat) { 
    //         animal.makeMeaw()
    //     }
    //     else { 
    //         animal.makeSound()
    //     }
    // }










    //
}