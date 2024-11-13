{

    //

    const add = (param1: string | number, param2: string | number): string | number => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2
        }
        else {
            return param1.toString() + param2.toString()
        }
    }

    console.log(add("12", 12))



    type NormalUser = {
        name: string
    }

    type AdminUser = {
        name: string;
        role: string
    }

    const authenticateUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(user.name, user.role)
        }
        else {
            console.log(user.name, 'normal user')
        }
    }

    authenticateUser({ name: 'riday'})


    //
}