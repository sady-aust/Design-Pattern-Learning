import { Lion } from '../interfaces/Lios';
import { WildDog } from './WildDog';

export class WildDogAdapter implements Lion {
    private dog: WildDog;

    constructor(wildDog:WildDog){
        this.dog = wildDog;
    }

    roar() {
      this.dog.bark();
    }

}