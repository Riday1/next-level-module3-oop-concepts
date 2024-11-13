{

    // Access modifiers


    class BankAccount {
        public readonly id: number;
        public readonly name: string;
        protected balance: number;



        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this.balance = balance
        }

        addBalance(amount: number) {
            this.balance = this.balance + amount
            return this.balance
        }
        withdrawBalance(amount: number) {
            this.balance = this.balance - amount
            return this.balance
        }
    }


    class StudentAccount extends BankAccount {

        constructor(id: number, name: string, balance: number) {
            super(id, name, balance)
        }
        showBalance() {
            console.log(this.balance) // parent class e balance property protected howay amra child e access korte parchi, kintu private hole access korte partam na 
        }
    }

    // myAccount is an instance of BankAccount
    const myAccount = new BankAccount(1, "riday", 100)

    const studentAccount1 = new StudentAccount(1, "suad", 5000)
    studentAccount1.showBalance()

    //
}