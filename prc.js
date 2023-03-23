const posts=[
    {title:'post one',body:'this is post one',createAt:new Date().getTime()},
    {title:'post two',body:'this is post two',createAt:new Date().getTime()}
];

function getpost(){
   
    intervalId=setInterval(()=>{
        let output='';
        for(let i=0;i<posts.length;i++){
            output+=`<li>${posts[i].title}  last updated ${(new Date().getTime() - posts[i].createAt) /1000}  seconds ago</li>`;
        }
        document.body.innerHTML=output;
    },1000)
}
function createpost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createAt:new Date().getTime()})
        callback({title:'post four',body:'this is post four'},getpost);
    },2000);
}

createpost({title:'post three',body:'this is post three'},create4thpost);

function create4thpost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createAt:new Date().getTime()});
        callback();
    },2000);
}
