// Promise.all
// const promise1=Promise.resolve('hello world');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>
//     setTimeout(resolve,2000,'Goodbye'));
// Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));






const posts=[
    {title:'post one',body:'this is post one'},
    {title:'post two',body:'this is post two'}
];

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





        




const user={
    username:'yash',
    lastactivitytime:'13th of jan'
}
console.log('last active time of', `${user.username} is`, user.lastactivitytime);

function updatelastactivitytime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastactivitytime=new Date().getTime();
            resolve(user.lastactivitytime);
        },1000)
    })
}
const userupdatepost=function(){
    Promise.all([createpost({title:'post three',body:'this is post three'}),updatelastactivitytime()]).then(([createpostresolves,updatepostresolves])=>{
        console.log(createpostresolves,`and last active time  of ${user.username} is` ,updatepostresolves);
        for(let i=0;i<posts.length;i++){
            console.log(posts[i]);
        }
    })
    .catch(err=>console.log(err));
}

const userdeletepost=function(){
    Promise.all([deletepost(),updatelastactivitytime()]).then(([deletepostresolves,updatepostresolves])=>{
        console.log(deletepostresolves,`and last active time  of ${user.username} is` ,updatepostresolves);
        for(let i=0;i<posts.length;i++){
            console.log(posts[i]);
        }
    })
    .catch(err=>console.log(err));
}

userupdatepost();
userdeletepost();
