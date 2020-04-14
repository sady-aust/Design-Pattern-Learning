import {WritingState} from "../interfaces/WritingState";

export class UpperCase implements WritingState {
    write(words: string) {
        console.log(words.toUpperCase())
    }

}
