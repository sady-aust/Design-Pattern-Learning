import { Sheep } from './Sheep';
let original = new Sheep('Jolly');

console.log(original.getName());
console.log(original.getCategory());

//cloning and modified what is required

let clone = Object.create(original);
clone.setName('Dolly');
console.log(clone.getName());
console.log(clone.getCategory());

