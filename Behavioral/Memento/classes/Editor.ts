import {EditorMemento} from "./EditorMemento";

export class Editor {
    private content = '';

    type(words: string) {
        this.content += ' ' + words;

    }

    getContent() {
        return this.content;
    }

    save() {
        return new EditorMemento(this.content);
    }

    restore(memento: EditorMemento) {
         this.content = memento.getContent();
    }

}
