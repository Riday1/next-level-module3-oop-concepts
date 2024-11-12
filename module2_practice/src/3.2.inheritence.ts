{

    // OOP -inheritance

    class Student {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name,
                this.age = age,
                this.address = address
        }
        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours} hs`);
        }
    }

    const student1 = new Student("sakib", 25, "narayongonj")
    const student2 = new Student("riday", 26, "khilkhet")

    // console.log(student1.getSleep(12))
    // console.log()




    class Teacher {
        name: string;
        age: number;
        address: string;
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            this.name = name,
                this.age = age,
                this.address = address,
                this.designation = designation
        }
        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours} hs`);
        }

        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass} classes`);
        }
    }

    const teacher1 = new Teacher("saud", 28, "dhanmondi", "Junior lecturer")








    //
}