import { DarkTheme } from './classes/DarkTheme';
import { About } from './classes/About';
import { Careers } from './classes/Careers';
import { LightTheme } from './classes/LightTheme';

let darkTheme = new DarkTheme();
let lightTheme = new LightTheme();

let about = new About(darkTheme);
let careers = new Careers(lightTheme);

console.log(about.getContent());
console.log(careers.getContent());

