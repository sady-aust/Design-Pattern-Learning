import {KarakTea} from "./karakTea";

export class TeaMaker {
    private availableTea = [];

    make(preference: string) {
        if (!this.availableTea[preference]) {
            this.availableTea[preference] = new KarakTea();
        }
        return this.availableTea[preference];
    }
}
