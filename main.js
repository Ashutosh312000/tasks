var form=document.getElementById('forms');
form.addEventListener('submit',storevalues);
var bodies=document.getElementById('bodies');



 let x=0;
function storevalues(e){    
    e.preventDefault();

    var names=document.getElementById('name').value;
    var emails=document.getElementById('email').value;

    let myobj={
        name: names,
        email: emails
    }
    
    let x_stringed=JSON.stringify(x);
    let myobj_stringed=JSON.stringify(myobj);

    localStorage.setItem(x_stringed,myobj_stringed);
   x=x+1;

   
   var details=document.createElement('p');
   bodies.appendChild(details);
   var textNode1=document.createTextNode(myobj.name+ ' '+ myobj.email);
   details.appendChild(textNode1);
   var deleteBtn=createElement('button');
   var textNode2=document.createTextNode('DELETE');
   deleteBtn.setAttribute('value','DELETE');
   details.appendChild(deleteBtn);
}