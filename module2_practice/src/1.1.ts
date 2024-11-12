{

    // type PromiseString = string

    // const variable: PromiseString = "Hello World i will complete this cours successfully and become a Next level web developer!"
    // console.log(variable)


    //Task-2
    // type Fun = {
    //     name: string;
    //     age: number;
    //     role?: string
    // }
    // const createFunction = (name: string, age: number, role: string) => {

    // }

    // Task-3

    // type Person = {
    //     name: string;
    //     address: string;
    //     HairAndEyeColor: string;
    //     incomeAndExpense: string;
    //     hobbies: string;
    //     familyMembers: number;
    //     job: string;
    //     skills: string;
    //     maritalStatus: string;
    //     friends: Array<string>
    // }


    // const person1: Person = {
    //     name: "sakib",
    //     address: "khilkhet",
    //     HairAndEyeColor: "black",
    //     incomeAndExpense: "income- 222 , expense-21",
    //     hobbies: "fishing",
    //     familyMembers: 3,
    //     job: "developer",
    //     skills: "frontend developer",
    //     maritalStatus: "single",
    //     friends: ["sakib", "tamim"]
    // }



    // Task-4
    interface Book {
        bookName: string;
        publishYear: number;
        price: number;
        bookAuthor: string
    }

    interface Magazine {
        magazineName: string;
        magazineAuthor: string;
        publishYear: number

    }


    // Task - 5
    // type NewBookAndMagazine1 = Book | Magazine
    // type NewBookAndMagazine2 = Book & Magazine

    // const document: NewBookAndMagazine1 = {

    // }


    //Task - 5

    // const reverseStringFunc = (param: string): string => {

    //     const reverseValue = param.split("").reverse().join("")
    //     return reverseValue
    // }

    // TasK-6
    // const func = (...params: number[]) => {
    //     let sum = 0;
    //     for (let i = 0; i < params.length; i++) {
    //         sum = sum + params[i]
    //     }
    //     return sum
    // }


    //Task-7
    // const func = (param: string | number) => {
    //     let result: number = 0
    //     if (typeof param === "string") {
    //         result = param.length
    //     }
    //     if (typeof param === "number") {
    //         result = param * param
    //     }
    //     return result
    // }
    // const res1 = func(5)
    // console.log(res1)


    //Task-8
    // type User = {
    //     name: string;
    //     email: string;
    // }
    // type Admin = {
    //     adminLevel: string;
    // }

    // type AdminUser = User & Admin
    // const user: AdminUser = {
    //     name: "sakib",
    //     email: "x@gmail.com",
    //     adminLevel: "mid-level"
    // }
    // const describeAdmin = (user: AdminUser): string => {
    //     return `i am ${user.name} , my email is ${user.email}, and my role is ${user.adminLevel} `
    // }

    // const res1 = describeAdmin(user)
    // console.log(res1)


    //Type-9

    // const employee = {
    //     name: "sakib",
    //     address: {
    //         city: "narayongonj",
    //         road: "chittagong",
    //     }
    // }

    // const { address: { city } } = employee
    // // console.log(city)

    // type EmployeeObj = {
    //     name: string;
    //     address: {
    //         city: string;
    //         road: string
    //     }
    // }
    // function getEmployeeCity(employee: EmployeeObj): string {
    //     const { address: { city } } = employee
    //     return city
    // }
    // const res1: string = getEmployeeCity(employee)
    // console.log(res1)



    //Task-10
    // const getDisplayName = (name: string | null | undefined): string => {

    //     const userName = name ?? "Anonymous"
    //     return userName
    // }
    // const res = getDisplayName(null)
    // console.log(res)


    //Task-11
    // const processData = (data: unknown) => {
    //     if (typeof data === "string") {
    //         const res = data.toUpperCase()
    //         return res;
    //     }
    //     if (typeof data === "number") {
    //         const res = data * data;
    //         return res
    //     }
    // }

    // const res = processData("riday")
    // console.log(res)


    //Task-12
    // const handleError = (message: string): never => {
    //     throw new Error(`${message}`)
    // }
    // console.log(handleError('i dont know what kind of error it was'))


    //Task-13 : Generics with Functions and Interfaces

    // type GenericArray<T> = Array<T>

    // const genericFunction = <T>(param: T[]) => {

    // }
    // const res = genericFunction


    //Task-14 : Asynchronous TypeScript and Type Aliases

    type User = {
        name: string;
        age: number
    }

    const asynFunc = async (): Promise<User> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const userData: User = { name: 'jon', age: 20 }
            }, 1000);
        })
    }




    //Task-16

    const UserInfo = {
        name: "user",
        age: 21
    }

    const newFunc = <P, Q extends keyof P>(Obj: P, Key: Q) => {
        return Obj[Key]
    }




}