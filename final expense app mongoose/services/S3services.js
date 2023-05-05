const AWS=require('aws-sdk') //install aws-sdk

const uploadtoS3=(data,filename)=>{ 
    const BUCKET_NAME='appproject1'; 
    const IAM_USER_KEY=process.env.IAM_USER_KEY;                          
    const IAM_USER_SECRET=process.env.IAM_USER_SECRET;

    let s3bucket=new AWS.S3({ 
        accessKeyId: IAM_USER_KEY,
        secretAccessKey:IAM_USER_SECRET,
    })

  
        var params={
            Bucket:BUCKET_NAME,
            Key:filename,
            Body:data,
            ACL:'public-read' 
        }
        return new Promise((resolve,reject)=>{
            s3bucket.upload(params,(err,s3response)=>{ 
                if(err){
                    console.log('Something went  wrong',err)
                    reject(err);
                }
                else{
                    resolve(s3response.Location);
                }
    
            })
        })
       

}

module.exports={
    uploadtoS3
}