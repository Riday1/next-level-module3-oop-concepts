{
    //


    type DynamicGenericArray<T> = Array<T>

    const stringArray: DynamicGenericArray<string> = ["riday", "sohel"]
    const numberArray: DynamicGenericArray<number> = [1, 2, 3]
    const booleanArray: DynamicGenericArray<boolean> = [true, false, true]


    //tupple array

    type Person<S, N, B> = {
        firstName: S;
        lastName?: S;
        address: S;
        age?: N;
        salary: N;
        isCEO: B;
    }


    const person1: Person<string, number, boolean> = {
        firstName: "sohel",
        lastName: "rana",
        address: "khilkhet",
        age: 21,
        salary: 30000,
        isCEO: true
    }
    const person2: Person<string, number, boolean> = {
        firstName: "riday",
        lastName: "hossain",
        address: "khilkhet",
        age: 23,
        salary: 30000,
        isCEO: false
    }



    // same code with generic interface , 
    // generic interface means you can set parameter in interface 

    interface IPerson<S, N, B> {
        firstName: S; // string
        lastName: S; // string 
        address: S; // string
        age: N; //number
        salary: N; // number
        isCEO: B //boolean
    }

    const personWithGenericInterface1: IPerson<string, number, boolean> = {
        firstName: "sakib",
        lastName: "hossain",
        address: "narayongon",
        age: 21,
        salary: 20000,
        isCEO: true
    }

    //
}