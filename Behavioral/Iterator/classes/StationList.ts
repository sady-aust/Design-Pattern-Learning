import {RadioStation} from "./RadioStation";

export class StationList {
     stations: RadioStation[] = [];
    private counter;

    addStation(radioStation: RadioStation) {
        this.stations.push(radioStation);
    }

    removeStation(radioStation: RadioStation) {
        this.stations = this.stations.filter(rs => rs.getFrequency() !== radioStation.getFrequency())
    }

    count(): number {
        return this.stations.length;
    }

    current(): RadioStation {
        return this.stations[this.counter];
    }

    key() {
        return this.counter;
    }

    next() {
        this.counter++;
    }

    rewind() {
        this.counter = 0;
    }

    valid(): boolean {
        return this.stations[this.counter] ? true : false;
    }
}
