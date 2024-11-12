{



    //

    const showMessage = (message: string): string => {
        return message
    }

    // const showMessage1 = (message: string) => {
    //     return message;
    // }
    const showMessage1 = <msgType>(message: msgType) => {
        return message;
    }
    // console.log(showMessage1<number>(123))

    // const mixedFunc = (num: number, str: string): string => {
    //     return `hi my name is ${str}, my salary is ${str}`
    // }
    const mixedFunc = <N, S>(num: N, str: S): string => {
        return `hi my name is ${str}, my salary is ${str}`
    }
    console.log(mixedFunc<number, string>(2000, "riday"))
    //






    // ReadOnly

    // type Employee = {
    //     readonly firstName: string;
    //     readonly lastName: string;
    //     email?: string;

    // }

    // let person10: Employee = {
    //     firstName: "safayet",
    //     lastName: "iqbal",
    //     email: "@gamil.com"
    // }

    // person10.firstName = rakib // you cant not assign rakin in first name because it is a readonly property






}