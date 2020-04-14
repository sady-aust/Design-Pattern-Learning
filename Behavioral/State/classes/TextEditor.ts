import {WritingState} from "../interfaces/WritingState";

export class TextEditor {
    constructor(private state: WritingState) {
    }

    setState(state: WritingState) {
        this.state = state;
    }

    type(words: string) {
        this.state.write(words);
    }
}
