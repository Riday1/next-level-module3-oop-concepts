{




    //

    // interface Iperson  {
    // name:  string;
    // age: number;
    // role: string;
    // salary: number;
    // address: string;
    // sex: string;

    // }
    interface Iperson<T, Q> {
        name: T;
        age: Q;
        role: T;
        salary: Q;
        address: T;
        sex: T;

    }

    const person1: Iperson<string, number> = {
        name: "rakib",
        age: 21,
        role: "manager",
        salary: 210000,
        address: "khilkhet",
        sex: "male"
    }







    //
}