var form=document.getElementById('my-form');
form.addEventListener('submit',storevalues);





function storevalues(e){    
    e.preventDefault();

    var names=document.getElementById('name').value;
    var emails=document.getElementById('email').value;

    let myobj={
        name: names,
        email: emails
    }

    let myobj_stringed=JSON.stringify(myobj);

    localStorage.setItem('myobj',myobj_stringed);
   
}