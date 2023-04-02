
class Student{

    static count=0;

    constructor(name,age,phone,marks){
        this.name=name;
        this.age=age;
        this.phone=phone;
        this.marks=marks;
        Student.count++;
    }

    eligible=function(marks){
        if(this.marks>=40){
            console.log('Eligible')
        }
        else{
            console.log('Not Eligible')
        }
    }


}

printStudentCount=()=>{
    console.log(Student.count)
}

const student1=new Student('ashu',21,8800,46)
const student2=new Student('tosh',29,7700,26)

console.log(student1.name)
student1.eligible()
console.log(student2.name)
student2.eligible()
printStudentCount();
