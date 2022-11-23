var form=document.getElementById('forms');
form.addEventListener('submit',storevalues);
var bodies=document.getElementById('bodies');





window.addEventListener("DOMContentLoaded",()=>{
    axios.get('http://localhost:5000/')
        .then((response)=>{
            for(var i=0;i<response.data.length;i++){
            let myobj=response.data[i];
           
           
            
    
    
            var details=document.createElement('div');
            details.id=`${myobj.Key}`;
            bodies.appendChild(details);
            const parentnode=details;
            const childHTML=`<li>${myobj.Username}-${myobj.Phone_No}-${myobj.Email}<button onclick=deleteuser('${myobj.Key}')>Delete expense</button>`
            parentnode.innerHTML=parentnode.innerHTML+childHTML;
          
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
    })


 
function storevalues(e){    
    e.preventDefault();
    
    let Username=document.getElementById('Username').value;
    let Phone_Number=document.getElementById('Phone_Number').value;
    let Email=document.getElementById('Email').value;

    let myobj={
        Username: Username,
        Phone_Number:Phone_Number,
        Email: Email
    }
    makeuser(myobj);

   

  
}

function makeuser(myobj){
    axios.post("http://localhost:5000/postAddProduct",myobj)
    .then((response)=>{
        let myobj1=response.data;
        console.log(myobj1.Key)
        var details=document.createElement('div');
        details.id=`${myobj1.Key}`;
        bodies.appendChild(details);
        const parentnode=details;
        const childHTML=`<li>${myobj1.Username}-${myobj1.Phone_No}-${myobj1.Email}<button onclick=deleteuser('${myobj1.Key}')>Delete expense</button>`
        parentnode.innerHTML=parentnode.innerHTML+childHTML;
    })
    .catch((err)=>{
        document.body.innerHTML= document.body.innerHTML + "<h4>SOMETHING WENT WRONG</h4>"
    })
}
deleteuser=function(key){
                
    axios.delete(`http://localhost:5000/deleteAddProduct/${key}`)
    .then((response)=>{
        const parentnode2=document.getElementById('bodies');
        const childnode2=document.getElementById(key);
        parentnode2.removeChild(childnode2);
    })
    .catch((err)=>{console.log(err)})   
 }
