// Example One -->

class ManageEmployee {
    getEmployee(empId) {
    }
    deleteEmployee(employee) {
    }
    updateEmployee(empId) {
    }
    
} 

class ManageSalary {
    calculateEmployeeSalary (empId, workingHours) {
        const employee = this.getEmployee()
        return employee.rate = workingHours
    }
}

// Example Two -->

class ToDoList {
    constructor() {
        this.items = []
    }

    addItem(text) {
        this.items.push(text)
    }

    removeItem(index) {
        this.items = this.items.splice(index,1)
    }

    toString() {
        return this.items.toString();
    }
}

class SaveManager {
    saveToFile(data, fileName) {
        fs.writeFileSync(fileName, data.toString());
    }
}