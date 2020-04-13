export abstract class Account {
    private successor;
    balance;
    name:string;

    setNext(account: Account) {
        this.successor = account;
    }
    

    canPay(amount): boolean {
        return this.balance >= amount;
    }
    pay(amountToPay){
        if(this.canPay(amountToPay)){
            console.log(`Paid ${amountToPay} using ${this.name}`)
        }else if(this.successor){
            console.log(`Can't pay using ${this.name}. Proceeding... `)
            this.successor.pay(amountToPay);
        }else{
            throw new Error('None of this have enough balance')
        }
    }
}
