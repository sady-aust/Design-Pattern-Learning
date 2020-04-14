import {Monkey} from "./classes/Monkey";
import {Lion} from "./classes/Lion";
import {Dolphin} from "./classes/Dolphin";
import {Speak} from "./classes/Speak";
import {Jump} from "./classes/Jump";

let monkey =  new Monkey();
let lion = new Lion();
let dolphin = new Dolphin();

let speak = new Speak();

monkey.accept(speak)
lion.accept(speak)
dolphin.accept(speak);

let jump = new Jump();

monkey.accept(jump)
lion.accept(jump)
dolphin.accept(jump);
