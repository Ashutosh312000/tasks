
const S3Services=require('../services/S3services')

exports.getexpense=(req,res,next)=>{ 
     
        res.status(200).json({expenses:req.user.Expenses});

}


const isstringvalid=(string)=>{
    if(string=="" || string==undefined){
        return true;
    }
    else{
        return false;
    }
}



exports.postexpense= async(req,res,next)=>{
    
    
    try{
       
        const {Amount,Description,Catogary}=req.body.expensedetails;
        if(isstringvalid(Amount) ||isstringvalid(Description) || isstringvalid(Catogary)){
         return res.json({message:'Fill Up The Blank Spaces'})
      }
      else{
          await req.user.addexpense({Amount,Description,Catogary})
          const expense=req.user.Expenses.slice(-1);
             res.status(201).json({message:"Expense Is Added",expense})
      }
    }
    catch(err){
        // await t.rollback();
        console.log(err)
        res.status(400).json({message:"Something Is Wrong",err})
    }

}

exports.deleteAddExpense = async(req, res, next) => {
    try{
        const ExpenseId=req.params.ExpenseId;
        await req.user.deleteExpense(ExpenseId);
        res.status(200).json({message:'successfully deleted'})
    }
    catch(err){
        console.log(err);
    }
}
    
 

exports.downloadexpense=async(req,res,next)=>{
    try{
        const userId=req.user.id;
        const expenses = req.user.Expenses;
    const stringifiedExpenses=JSON.stringify(expenses);
                                                    
        const filename=`Expense${userId}/${new Date()}.txt`; 
        const fileURL= await S3Services.uploadtoS3(stringifiedExpenses,filename);   
        
       
        req.user.Link=fileURL;
        await req.user.save();
        res.status(200).json({fileURL,success:true})              
    
    }
    catch(err){ 
        console.log(err)
        res.status(500).json({message:'failed',fileURL:'',err})
    }
   
}

exports.getIndex = (req, res, next) => {
    const EXPENSES_PER_PAGE=+req.query.per_page ||5;
    const page=+req.query.page ||1;
    const totalItems=req.user.Expenses.length;
    const offset=(page-1)*EXPENSES_PER_PAGE;
    const limit=offset+EXPENSES_PER_PAGE;
    const expenses=req.user.Expenses.slice(offset,limit);
   
        res.status(200).json({expenses:expenses,
          currentPage:page,
          hasPreviosPage: page > 1,
          hasNextPage:EXPENSES_PER_PAGE *page <totalItems,
          nextPage: page+1,
          previosPage: page-1,
          lastPage:Math.ceil(totalItems/EXPENSES_PER_PAGE)
        })      

  };

