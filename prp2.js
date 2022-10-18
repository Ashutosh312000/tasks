var form=document.getElementById('forms');
form.addEventListener('submit',storevalues);
var bodies=document.getElementById('bodies');



 var x=0;
function storevalues(e){    
    e.preventDefault();
    let y=x;
    var amounts=document.getElementById('amount').value;
    var discriptions=document.getElementById('discription').value;
    var catogarys=document.getElementById('catogary').value;

    let myobj={
        amount: amounts,
        discription:discriptions,
        catogary: catogarys
    }
    
    let y_stringed=JSON.stringify(y);
    let myobj_stringed=JSON.stringify(myobj);

    localStorage.setItem(y_stringed,myobj_stringed);
   x=x+1;

   
   var details=document.createElement('div');
   details.id=`${y}`;
   bodies.appendChild(details);
   const parentnode=details;
   const childHTML=`<li>${myobj.amount}-${myobj.discription}-${myobj.catogary}<button onclick=deleteuser('${y}')>Delete expense</button>
   <button onclick=edituser('${y}')>Edit expense</button></li>`;
    parentnode.innerHTML=parentnode.innerHTML+childHTML;
  
    deleteuser=function(key){
        localStorage.removeItem(key);
        const parentnode2=document.getElementById('bodies');
        const childnode2=document.getElementById(key);
        parentnode2.removeChild(childnode2);
    }

    edituser=function(key){
        let deserialized=JSON.parse(localStorage.getItem(key));
        document.getElementById('amount').value= deserialized.amount;
        document.getElementById('discription').value=deserialized.discription;
        document.getElementById('catogary').value=deserialized.catogary;
       
        deleteuser(key);
    }
}

