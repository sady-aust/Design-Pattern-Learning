import {TextEditor} from "./classes/TextEditor";
import {DeafultText} from "./classes/DeafultText";
import {UpperCase} from "./classes/UpperCase";
import {LowerCase} from "./classes/LowerCase";

let editor = new TextEditor(new DeafultText());
editor.type('First list');

editor.setState(new UpperCase());
editor.type('Second line');
editor.type('Third Line');

editor.setState(new LowerCase());

editor.type('Forth Line');
editor.type('Fifth Line')
