import { AfricanLion } from './classes/AfricanLion';
import { WildDog } from './classes/WildDog';
import { WildDogAdapter } from './classes/WildDogAdapter';
import { Hunter } from './classes/Hunter';
import { AsianLion } from './classes/AsianLion';

let africanLion = new AfricanLion();
let asianLion = new AsianLion();

let wildDog = new WildDog();
let wildDogAdapter = new WildDogAdapter(wildDog);

let hunter = new Hunter();

hunter.hunt(africanLion);
hunter.hunt(asianLion);
hunter.hunt(wildDogAdapter);
