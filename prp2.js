var form=document.getElementById('forms');
form.addEventListener('submit',storevalues);
var bodies=document.getElementById('bodies');


window.addEventListener("DOMContentLoaded",()=>{
axios.get("https://crudcrud.com/api/0ddc33c199784b489653992666a5fb27/appointment")
    .then((response)=>{
        console.log(response.data);
        for(var i=0;i<response.data.length;i++){
        let myobj=response.data[i];
        console.log(myobj)
        let y=x;
       
        


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
        x=x+1;
    })
    .catch((err)=>{
        console.log(err)
    })
})


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
    
    makeuser(myobj,y);

   

  
}

function makeuser(myobj,y){
    axios.post("https://crudcrud.com/api/0ddc33c199784b489653992666a5fb27/appointment")
    .then((response)=>{
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
    })
    .catch((err)=>{
        document.body.innerHTML= document.body.innerHTML + "<h4>SOMETHING WENT WRONG</h4>"
    })
}