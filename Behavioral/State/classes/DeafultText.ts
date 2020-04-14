import {WritingState} from "../interfaces/WritingState";

export class DeafultText implements WritingState {
    write(words: string) {
        console.log(words)
    }

}
