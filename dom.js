var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
itemList.addEventListener('click', removeitem);
form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();

    var newItem=document.getElementById('item').value;

    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));

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