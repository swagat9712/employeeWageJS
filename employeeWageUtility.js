
class computeEmpWages {
    constructor() {
        this.totalWorkDays = 0;
        this.totalempHrs = 0;
        this.empHours = 0;
        this.wagePerHour = 20;
        this.totalEmpwages = 0;
        this.fullDay = 8;
        this.DaysPerMonth = 20;
        this.ParTime = 8;
        this.TotalHoursPerMonth = 100;
    }

    //when total working days is less then days per month and total employee hours is less the total hours per month 
    checkRandomValue() {
        return (Math.ceil(Math.random() * 10) % 3 + 1);
    }
    computeEmpWagesValues() {
        try {
            while (this.totalWorkDays < this.DaysPerMonth && this.totalempHrs < this.TotalHoursPerMonth) {
                this.totalWorkDays++;
                let empCheck = this.checkRandomValue();
                switch (empCheck) {
                    case 1:
                        this.empHours += 8; //fulltime value
                        break;
                    case 2:
                        this.empHours += 8; //parttime
                        break;
                    default:
                        this.empHours += 0; //absent
                        break;

                }
            }
        }
        catch (e) {
            console.log("Something went wrong!");
            console.error(e);
        }
        this.totalempHrs += this.empHours;

        this.totalEmpwages = this.totalempHrs * this.wagePerHour;
        console.log("The Total employee wages " + this.totalEmpwages);
    }
}
module.exports = new computeEmpWages();