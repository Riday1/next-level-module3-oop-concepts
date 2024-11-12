{

    // OOP -inheritance (get property + function from parent class )



    class Student {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours} Hs`);
        }
    }

    // instance of class Student
    const student1 = new Student("sohel", 25, "khilkhet")
    console.log(student1.getSleep(123));










    //
}