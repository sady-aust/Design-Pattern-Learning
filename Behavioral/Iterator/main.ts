import {StationList} from "./classes/StationList";
import {RadioStation} from "./classes/RadioStation";

let stationList = new StationList();

stationList.addStation(new RadioStation(89))
stationList.addStation(new RadioStation(101))
stationList.addStation(new RadioStation(102))
stationList.addStation(new RadioStation(103.2))

stationList.stations.forEach(st => console.log(st.getFrequency()));

stationList.removeStation(new RadioStation(89))
console.log('After Removing')
stationList.stations.forEach(st => console.log(st.getFrequency()));
