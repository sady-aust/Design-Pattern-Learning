import {Employee} from "../interfaces/Employee";

export class Developer implements Employee{
    private roles;
    constructor(private name:string, private salary:number) {}

    getName(): string {
        return this.name;
    }

    getRoles(): [any] {
        return this.roles;
    }

    getSalary(): number {
        return this.salary;
    }

    setSalary(salary: number) {
        this.salary = salary;
    }




}
