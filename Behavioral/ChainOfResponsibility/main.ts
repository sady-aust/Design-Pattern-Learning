import {Bank} from "./classes/Bank";
import {Paypal} from "./classes/Paypal";
import {Bitcoin} from "./classes/Bitcoin";

let bank = new Bank(100);
let paypal = new Paypal(200);
let bitcoin = new Bitcoin(300);

bank.setNext(paypal);

paypal.setNext(bitcoin);

bank.pay(259)
