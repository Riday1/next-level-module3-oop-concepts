{
    //
    class Animal {
        name: string;
        species: string;
        sound: string;


        constructor(name: string, species: string, sound: string) {


            this.name = name;// initialize 
            this.species = species;
            this.sound = sound
        }
        makeSound() {
            console.log(`the ${this.name} says ${this.sound}`)
        }
    }

    // creating instance from based on Animal Class
    //instance dog,cat,cow,chicken,goat, horse, frog, pegion,
    const dog = new Animal("GermanShepart", "dog", "gheu gheu")
    const cat = new Animal("deshi biral", "cat", "meu meu")
    const cow = new Animal("deshi goru", "cow", "hamba hamba")
    const goat = new Animal("ram chagol", "goat", "meee meee")
    const horse = new Animal("marwari ghora", "horse", "euu euu")
    const frog = new Animal("kuno beng", "frog", "ghekor ghekor")
    const pigeon = new Animal("jalali koitor", "pegion", "bakbakum bakbakum")
    console.log(cat.name);
    console.log(cat.makeSound());
    console.log(dog.makeSound());
    // console.log(dog.name, dog.sound, dog.species);





    //
}