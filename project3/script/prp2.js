var form = document.getElementById('forms');
form.addEventListener('submit', storevalues);
var bodies = document.getElementById('bodies');

window.addEventListener("DOMContentLoaded", () => {
    axios.get('http://localhost:5000/')
        .then((response) => {
            for (var i = 0; i < response.data.length; i++) {
                let myobj = response.data[i];
                makeuser(myobj);
            }
        })
        .catch((err) => {
            console.log(err)
        })
})


function storevalues(e) {
    e.preventDefault();

    let Amount = document.getElementById('amount').value;
    let Discription = document.getElementById('discription').value;
    let Catogary = document.getElementById('catogary').value;

    let myobj = {
        Amount: Amount,
        Discription: Discription,
        Catogary: Catogary
    }
    axios.post("http://localhost:5000/postAddExpense", myobj)
        .then((response) => {
            let myobj1 = response.data;
            makeuser(myobj1);
        })
        .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + "<h4>SOMETHING WENT WRONG</h4>"
        })
}

function makeuser(myobj) {
    var details = document.createElement('ul');
    details.id = `${myobj.Key}`;
    details.setAttribute('type', 'none');
    details.setAttribute('class', 'newli')
    bodies.appendChild(details);
    const parentnode = details;
    const childHTML = `<li>${myobj.Amount}    ${myobj.Discription}    ${myobj.Catogary}    <button  class="stylenewli" onclick=deleteuser('${myobj.Key}')>Delete expense</button>
            <button class="stylenewli" onclick=edituser('${myobj.Key}')>Edit expense</button></li>`;
    parentnode.innerHTML = parentnode.innerHTML + childHTML;
}

deleteuser = function (key) {

    axios.delete(`http://localhost:5000/deleteAddExpense/${key}`)
        .then((response) => {
            const parentnode2 = document.getElementById('bodies');
            const childnode2 = document.getElementById(key);
            parentnode2.removeChild(childnode2);
        })
        .catch((err) => { console.log(err) })
}
edituser = function (key) {
    axios.get(`http://localhost:5000/getAnExpense/${key}`)
        .then((response) => {
            console.log(response.data)
            myobj = response.data[0];
            document.getElementById('amount').value = myobj.Amount;
            document.getElementById('discription').value = myobj.Discription;
            document.getElementById('catogary').value = myobj.Catogary;

            const parentnode2 = document.getElementById('bodies');
            const childnode2 = document.getElementById(key);
            parentnode2.removeChild(childnode2);

            return key;
        })
        .then((key) => {
            return axios.delete(`http://localhost:5000/deleteAddExpense/${key}`)
        })
        .catch(err => console.log(err))
}
