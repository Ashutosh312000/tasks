function boughtaPC(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve('got the PC')
        },1000);
    });
}
function assembleparts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve('assebled all the pc parts')
        },2000);
    });
}
function installsoftwares(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve('softwares is installed')
        },2000);
    });
}
function installvscode(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve('vs code is installed')
        },2000);
    });
}

const startcoding=async function(){
    console.log('Lets buy a PC')
    console.log(await boughtaPC());
    console.log(await assembleparts());
    console.log(await installsoftwares());
    console.log(await installvscode());
   
};
startcoding();