



class AuthenticationController {}


AuthenticationController.register = async (req,res,nxt)=>{

    try{

        console.log(req ,"arun");
        


        res.send({
            status:"sucess"
        })

    }catch(err){

    }

}


module.exports={
    AuthenticationController
}