class student{

    static  count=0;

    constructor(n,a,p,m){

        student.count++;

        this.name=n;

        this.age=a;

        this.phone_no=p;

        this.marks=m;

    }

    egligiblity=function(){

        if(this.marks>=40){

            console.log('YES egligible');

        }

        else{

            console.log('NOT egligible');

        }

    }

}

const obj1=new student('Ashu',30,880017,74);

const obj2=new student('Anu',21,990012,44);

const obj3=new student('Amit',11,833417,11);

const obj4=new student('shu',50,33017,34);

const obj5=new student('meena',90,893017,27);

console.log(student.count);

obj1.egligiblity();

obj2.egligiblity();

obj3.egligiblity();

obj4.egligiblity();

obj5.egligiblity();

