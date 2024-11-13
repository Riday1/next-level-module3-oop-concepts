{
    //





    class BankAccount {
        public readonly id: number;
        public readonly name: string;
        protected _balance: number; // private ke shudhu class ei access kora jabe / convention er jonno _underscore


        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // addDeposit(amount: number) {
        //     this._balance = this._balance + amount //
        // }
        set deposit(amount: number) {
            this._balance = this._balance + amount
        }

        // getBalance() {
        //     return this._balance
        // }
        get balance() {
            return this._balance
        }
    }


    const myAccount = new BankAccount(1, "riday", 100)
    // const myBalance = myAccount.getBalance()
    // const depositBalance = myAccount.addDeposit(100)

    // function ke call na kore property er moto access kora jabe getter & setter diye 


    myAccount.deposit = 1000;
    const myBalance = myAccount.balance;
    console.log(myBalance)













    //
}