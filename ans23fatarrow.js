







'use strict'



class student {



    static count = 0;



    constructor(n, a, p, m) {



        student.count++;



        this.name = n;



        this.age = a;



        this.phone_no = p;



        this.marks = m;



    }



    egligiblity = function () {



        if (this.marks >= 40) {



            console.log('YES egligible');



        }



        else {



            console.log('NOT egligible');



        }



    }

    egligible_placements=function(minmarks){

        return (age)=>{

            if(this.marks>=minmarks && this.age>=age){

                return this.name;

            }

            else{

                return 'not qualified';

            }

        }

    }



}



const obj1 = new student('Ashu', 30, 880017, 74);



const obj2 = new student('Anu', 21, 990012, 94);



const obj3 = new student('Amit', 11, 833417, 100);



const obj4 = new student('shu', 50, 33017, 34);



const obj5 = new student('meena', 9, 893017, 27);



console.log(obj1.egligible_placements(60)(18));

console.log(obj2.egligible_placements(60)(18));

console.log(obj3.egligible_placements(60)(18));

console.log(obj4.egligible_placements(60)(18));

console.log(obj5.egligible_placements(60)(18));