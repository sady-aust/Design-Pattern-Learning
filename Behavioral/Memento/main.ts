import {Editor} from "./classes/Editor";

let editor = new Editor();

editor.type('This is the first sentence.');
editor.type('This is second');

let saved = editor.save();

editor.type('And this is third');

console.log(editor.getContent());

editor.restore(saved)

console.log(editor.getContent())
