var itemlist=document.querySelector('#items');
//parentnode
// itemlist.parentNode.style.backgroundColor='#f4f4f4';

//parentelement
// itemlist.parentElement.style.backgroundColor='#f4f4f4';

//childnodes
// console.log(itemlist.childNodes);

//children
// console.log(itemlist.children);
// itemlist.children[2].style.backgroundColor='pink';

//firstchild
// console.log(itemlist.firstChild);

// lastchild
// console.log(itemlist.lastChild);

//firstelementchild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.style.backgroundColor='red';

//lastelementchild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.style.backgroundColor='red';

//nextsibling
// console.log(itemlist.nextSibling);

//nextelementsibling
// console.log(itemlist.nextElementSibling)

//previossibling
// console.log(itemlist.previousSibling);
//previoselementsibling
// console.log(itemlist.previousElementSibling);


//createelement
var newdiv=document.createElement('div');

//addclasstodiv
newdiv.className='hello';       

//addidtodiv
newdiv.id='hello1';

//add attribute to div
newdiv.setAttribute('title','hello world');

//create textnode
var newdivtext=document.createTextNode('Hello');

//ADD text to div
newdiv.appendChild(newdivtext);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

container.insertBefore(newdiv,h1);

var items=document.querySelector('#items');
var before=document.querySelector('.list-group-item');

items.insertBefore(newdivtext,before);

console.log(newdiv);

