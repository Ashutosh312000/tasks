var form=document.getElementById('forms');
form.addEventListener('submit',storevalues);
var bodies=document.getElementById('bodies');


window.addEventListener("DOMContentLoaded",()=>{
axios.get("https://crudcrud.com/api/11f3080cc5dc4fb183b2395fd5516837/appointment")
    .then((response)=>{
        
        for(var i=0;i<response.data.length;i++){
        let myobj=response.data[i];
       
       
        


        var details=document.createElement('div');
        details.id=`${myobj._id}`;
        bodies.appendChild(details);
        const parentnode=details;
        const childHTML=`<li>${myobj.amount}-${myobj.discription}-${myobj.catogary}<button onclick=deleteuser('${myobj._id}')>Delete expense</button>
        <button onclick=edituser('${myobj._id}')>Edit expense</button></li>`
        parentnode.innerHTML=parentnode.innerHTML+childHTML;
      
        }
        
    })
    .catch((err)=>{
        console.log(err)
    })
})


 
function storevalues(e){    
    e.preventDefault();
    
    var amounts=document.getElementById('amount').value;
    var discriptions=document.getElementById('discription').value;
    var catogarys=document.getElementById('catogary').value;

    let myobj={
        amount: amounts,
        discription:discriptions,
        catogary: catogarys
    }
    
    makeuser(myobj);

   

  
}

function makeuser(myobj){
    axios.post("https://crudcrud.com/api/11f3080cc5dc4fb183b2395fd5516837/appointment",myobj)
    .then((response)=>{
       

        
        var details=document.createElement('div');
        details.id=`${response.data._id}`;
        bodies.appendChild(details);
        const parentnode=details;
        const childHTML=`<li>${myobj.amount}-${myobj.discription}-${myobj.catogary}<button onclick=deleteuser('${response.data._id}')>Delete expense</button>
        <button onclick=edituser('${response.data._id}')>Edit expense</button></li>`;
         parentnode.innerHTML=parentnode.innerHTML+childHTML;
    })
    .catch((err)=>{
        document.body.innerHTML= document.body.innerHTML + "<h4>SOMETHING WENT WRONG</h4>"
    })
}
deleteuser=function(key){
                
    axios.delete(`https://crudcrud.com/api/11f3080cc5dc4fb183b2395fd5516837/appointment/${key}`)
    .then((response)=>{})
    .catch((err)=>{console.log(err)})



     const parentnode2=document.getElementById('bodies');
     const childnode2=document.getElementById(key);
     parentnode2.removeChild(childnode2);
 }

 edituser=function(key){
    axios.get(`https://crudcrud.com/api/11f3080cc5dc4fb183b2395fd5516837/appointment/${key}`)
    .then((response)=>{
        myobj=response.data;
        document.getElementById('amount').value= myobj.amount;
    document.getElementById('discription').value=myobj.discription;
    document.getElementById('catogary').value=myobj.catogary;
   
    deleteuser(key);
       
    })
    .catch((err)=>{
       console.log(err);
    })
    
 }