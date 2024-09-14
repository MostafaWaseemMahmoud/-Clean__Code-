class ManageSlaries {
    constructor() {
        this.salaryRates = [
            {id:1 , role:"Develeper", rate: 100},
            {id:2 , role:"Manager", rate: 200},
            {id:3 , role:"Hiring Manager", rate: 300}
        ]
    }
    calculateSalaries(empId,hoursWorked){
        let salaryObject = this.salaryRates.find((object)=> object.id === empId);
        return hoursWorked = salaryObject.rate;
    }

    addSalaryRate(id,role,rate){
        this.salaryRates.push({id:id,role:role,rate:rate})
    }
}

const salaryManager = new ManageSlaries();

salaryManager.addSalaryRate(4,"Develeper", 250);
console.log("Salary: ", salaryManager.calculateSalaries(4,100) + "$");

// OutPut: Salary: 250$