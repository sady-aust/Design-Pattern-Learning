import {Employee} from "../interfaces/Employee";

export class Organization {
    private employees: Employee[] = [];

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    getNetSalaries(): number {
        let total = 0;
        this.employees.forEach(em => total += em.getSalary());
        return total;
    }
}
