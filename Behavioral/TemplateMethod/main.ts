import {AndroidBuilder} from "./classes/AndroidBuilder";
import {IosBuilder} from "./classes/IosBuilder";

let androidBuilder = new AndroidBuilder()
androidBuilder.build();

let iosBuilder = new IosBuilder();
iosBuilder.build();
