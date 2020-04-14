import {WritingState} from "../interfaces/WritingState";

export class LowerCase implements WritingState {
    write(words: string) {
        console.log(words.toLocaleLowerCase())
    }

}
