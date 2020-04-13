import {TeaMaker} from "./TeaMaker";

export class TeaShop {
    private orders = [];
    private teaMaker:TeaMaker;

    constructor(teaMaker: TeaMaker) {
        this.teaMaker = new TeaMaker();
    }

    takeOrder(teaType:string,table:number){
        this.orders[table] = this.teaMaker.make(teaType);
    }

    serve(){
        this.orders.forEach((order,index) =>{
            if(order){
                console.log('Serving at '+index+' table')
            }
        })
    }
}
