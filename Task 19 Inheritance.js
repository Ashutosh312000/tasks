
   class User{

  constructor(firstname,lastname,age,packages){

    this.firstname=firstname;

    this.lastname=lastname;

    this.age=age;

    this.packages=packages;

    this.membershipactivetilldate=new Date(2023,3,3) 


  }


renewmemebership=()=>{
    let year=this.membershipactivetilldate.getFullYear();
    let month=this.membershipactivetilldate.getMonth();
    let date=this.membershipactivetilldate.getDate();
    if(this.packages==='monthly'){
        month++;
        this.membershipactivetilldate=new Date(year,month,date)
    }
    else{
        year++;
        this.membershipactivetilldate=new Date(year,month,date)
    }
}

}



const user=new User('ashutosh','sharma',21,'monthly')
const user1=new User('tosh','singh',12,'yearly')
user.renewmemebership()
user1.renewmemebership()
console.log(user.membershipactivetilldate)
console.log(user1.membershipactivetilldate)





     

   

