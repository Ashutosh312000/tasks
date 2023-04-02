var form = document.getElementById('forms');
form.addEventListener('submit', storevalues);
var bodies = document.getElementById('bodies');
var totalprice = document.getElementById('totalprice')


window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/38d86ffd6c764db2a545cabf84195ce4/expenses")
        .then((response) => {

            let allprice = 0;

            for (var i = 0; i < response.data.length; i++) {
                let myobj = response.data[i];
                allprice += +myobj.price;
                var details = document.createElement('div');
                details.id = `${myobj._id}`;
                bodies.appendChild(details);
                const parentnode = details;
                const childHTML = `<li>${myobj.price}-${myobj.name}<button onclick=deleteuser('${myobj._id}','${myobj.price}')>Delete expense</button>`;
                parentnode.innerHTML = parentnode.innerHTML + childHTML;
            }

            totalprice.innerText = `${allprice}`;
        })
        .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + "<h4>SOMETHING WENT WRONG</h4>"
        })
})



function storevalues(e) {
    e.preventDefault();

    var price = e.target.price.value;
    var name = e.target.name.value;


    let myobj = {
        price: price,
        name: name,
    }

    makeuser(myobj);

}

function makeuser(myobj) {
    axios.post("https://crudcrud.com/api/38d86ffd6c764db2a545cabf84195ce4/expenses", myobj)
        .then((response) => {

            let myobj1 = response.data;

            var details = document.createElement('div');
            details.id = `${myobj1._id}`;
            bodies.appendChild(details);
            const parentnode = details;
            const childHTML = `<li>${myobj1.price}-${myobj1.name}<button onclick=deleteuser('${myobj1._id}','${myobj1.price}')>Delete expense</button>`;
            parentnode.innerHTML = parentnode.innerHTML + childHTML;

            allprice = parseInt(totalprice.innerText);
            allprice += parseInt(myobj1.price);
            totalprice.innerText = `${allprice}`;
        })
        .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + "<h4>SOMETHING WENT WRONG</h4>"
        })
}
deleteuser = function (key, price) {

    axios.delete(`https://crudcrud.com/api/38d86ffd6c764db2a545cabf84195ce4/expenses/${key}`)
        .then((response) => {

            allprice = parseInt(totalprice.innerText) - parseInt(price);
            totalprice.innerText = `${allprice}`;

            const parentnode2 = document.getElementById('bodies');
            const childnode2 = document.getElementById(key);
            parentnode2.removeChild(childnode2);
        })
        .catch((err) => {  document.body.innerHTML = document.body.innerHTML + "<h4>SOMETHING WENT WRONG</h4>"})



}
