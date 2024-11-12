{

    //

    const showLength = <T extends { length: number }>(str: T) => {
        return str.length
    }

    console.log(showLength<string>("hello"))




    //
}