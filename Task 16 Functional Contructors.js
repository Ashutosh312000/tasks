
function student(firstname, lastname,age,sex) {

    this.firstname = firstname;

    this.lastname = lastname;

    this.age = age;

    this.sex = sex;

    this.printFullname = function () {
        console.log(`FullName= ${this.firstname} ` + `${this.lastname}`)
    }



}

const student1 = new student("yash", "prasad", 10, "M");

const student2 = new student("vaibhav", "prasad", 20, "M");


student.prototype.egligible = function egligible(minAge) {
   console.log(`Age= ${this.age}`)
    if (this.age > minAge) {

        console.log(this.firstname + " is egligible");

    } else {
        
        console.log(this.firstname + " is Not egligible");

    } 

};
student1.printFullname();
student1.egligible(18);
student2.printFullname();
student2.egligible(18);
