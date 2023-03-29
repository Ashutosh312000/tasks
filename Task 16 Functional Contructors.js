

function student(firstname, lastname,age,sex) {

    this.firstname = firstname;

    this.lastname = lastname;

    this.age = age;

    this.sex = sex;

    this.getFullname = function () {
        console.log(`FullName= ${this.firstname} ` + `${this.lastname}`)
        console.log(`Age ${this.age}`)
        return `${this.firstname} ` + `${this.lastname}`;
    }



}

const student1 = new student("yash", "prasad", 10, "M");

const student2 = new student("vaibhav", "prasad", 20, "M");


student.prototype.egligible = function egligible(minAge) {
   
    if (this.age > minAge) {

        console.log(this.getFullname() + " is egligible");

    } else {
        
        console.log(this.getFullname() + " is Not egligible");

    }

};

student1.egligible(18);
student2.egligible(18);
