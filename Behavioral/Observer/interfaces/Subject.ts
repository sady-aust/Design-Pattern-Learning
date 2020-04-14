import {Observer} from "./Observer";

export interface Subject {
    state: number;

    attach(observer: Observer): void;

    detach(observer: Observer): void;

    notify(): void;
}
