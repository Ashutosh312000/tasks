console.dir(document);
document.title='My website';
var headertitile=document.getElementById('header-title');
headertitile.style.borderBottom='2px solid black';
var additems=document.getElementsByClassName('title');
additems[0].innerHTML='<strong>Add Items<strong>';
additems[0].style.color='green';
