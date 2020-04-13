import {Developer} from "./classes/Developer";
import {Designer} from "./classes/Designer";
import {Organization} from "./classes/Organization";

// Prepare the employees
let toufiq = new Developer('Md. Toufiqul Islam',20000);
let sadi = new Designer('Sadi Mahmud',15000);

// Add them to organization
let organization = new Organization();
organization.addEmployee(toufiq);
organization.addEmployee(sadi);

console.log(`Net Salaries: `+ organization.getNetSalaries())
