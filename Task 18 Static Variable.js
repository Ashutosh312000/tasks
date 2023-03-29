   class User{

      static userindex=0;

  constructor(firstname,lastname,age){

    this.firstname=firstname;

    this.lastname=lastname;

    this.age=age;

    User.userindex++;

  }

   

   

    static registeredUsers(){

    console.log(User.userindex);

  }

}

console.log(User.userindex);
const user1=new User('ashutosh','sharma',21);
const user2=new User('ashutosh','sharma',21);
const user3=new User('ashutosh','sharma',21);
User.registeredUsers();
