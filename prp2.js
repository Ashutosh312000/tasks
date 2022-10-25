const posts=[
    {title:'post one',body:'this is post one'},
    {title:'post two',body:'this is post two'}
];
function getpost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1)
}
const updatingpost=async()=>{
function createpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;

            if(!error){
                resolve('new post added');
            }
            else{
                reject('Error: Something went wrong')
            }
        },1);
    });
   
}
function deletepost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            if(posts.length!=0){
                posts.pop();
                resolve('last post is deleted');
            }
            else{
                reject('Error: Inside catch Array is empty now')
            }
            
        },1000);
    });
   
}

let createnewpost=await createpost({title:'post three',body:'this is post three'});
getpost()
let deletenewpost=await deletepost();
getpost();
return 'update is done';
}

updatingpost().then((t)=> console.log(t));




        


