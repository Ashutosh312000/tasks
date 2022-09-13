var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
itemList.addEventListener('click', removeitem);
form.addEventListener('submit',addItem);
var filter=document.getElementById('filter');
filter.addEventListener('keyup',filterItems) 

var discription=document.createElement('input');
discription.setAttribute('type','text');
discription.className='form-control mr-2';
discription.id='newinput';

var submitBtn=form.lastElementChild;

form.insertBefore(discription,submitBtn);

function addItem(e){
    e.preventDefault();

    var newItem=document.getElementById('item').value;
    var newItem2=document.getElementById('newinput').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem+' '));
    li.appendChild(document.createTextNode(newItem2));

    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    itemList.appendChild(li);

    var editBtn=document.createElement('button')
    editBtn.className='btn btn-sm float-right ';
    editBtn.appendChild(document.createTextNode('EDIT'));
    li.appendChild(editBtn);
    

}

function removeitem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    var text=e.target.value.toLowerCase();
   
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        var itemName3=item.firstChild.nextSibling.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1 || itemName3.toLowerCase().indexOf(text)!=-1  ){
            item.style.display='block';
        }
        else{
            item.style.display='none'
        }
    });
}