function solve() {
  const TASKS = {
    JUNIOR: [" is working on a simple task."],
    SENIOR: [
      " is working on a complicated task.",
      " is taking time off work.",
      " is supervising junior workers.",
    ],
    MANAGER: [" scheduled a meeting.", " is preparing a quarterly report."],
  };

  class Employee {
    constructor(name, age, tasks) {
      this.name = name;
      this.age = age;
      this.salary = 0;
      this.tasks = tasks;
      this._index = 0;
      this.dividend = 0;
    }
    work() {
      if (this._index === this.tasks.length) {
        this._index = 0;
      }
      console.log(this.name + this.tasks[this._index]);
      this._index++;
    }
    collectSalary() {
      console.log(`${this.name} received ${this.salary} this month.`);
    }
  }

  class Junior extends Employee {
    constructor(name, age) {
      super(name, age, TASKS.JUNIOR);
    }
  }
  class Senior extends Employee {
    constructor(name, age) {
      super(name, age, TASKS.SENIOR);
    }
  }
  class Manager extends Employee {
    constructor(name, age) {
      super(name, age, TASKS.MANAGER);
    }
    collectSalary() {
      console.log(
        `${this.name} received ${this.salary + this.dividend} this month.`
      );
    }
  }
  return { Employee, Junior, Senior, Manager };
}
const company = solve();
const emp = new company.Manager("Mark", 20);
console.log(emp);
emp.work();
emp.work();
const guy1 = new company.Manager("dragan", 20);
guy1.dividened = 500;
guy1.salary = 1000;
guy1.collectSalary();
// expect(log[0]).to.equal('dragan received 1000 this month.', "Junior's salary was not logged.");
const guy3 = new company.Manager("boyan", 20);
guy3.salary = 3000;
guy3.collectSalary();

guy3.dividend = 500;
guy3.collectSalary();
