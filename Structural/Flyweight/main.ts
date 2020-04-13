import {TeaMaker} from "./classes/TeaMaker";
import {TeaShop} from "./classes/TeaShop";

let teaMaker = new TeaMaker();
let shop = new TeaShop(teaMaker);

shop.takeOrder('less sugar',1)
shop.takeOrder('More Milk',5)
shop.takeOrder('Without Suger',3)

shop.serve();
