
const AuthUser = require("../Model/auth.modal")
const bcrypt = require("bcryptjs")


class AuthenticationController { }


AuthenticationController.register = async (req, res, nxt) => {

    try {

        const salt = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(req.body.password, salt)
        
        req.body.password = hashpassword

        let user = await new AuthUser(req.body)

        await user.save()
         
        res.send({
            succes: true,
            message: "user register succesfully"
        })



    } catch (err) {
        nxt(err)

    }

}


AuthenticationController.login = async (req, res, nxt) =>{
    try{
        console.log(req.body);
        

    }catch(err){
         nxt(err)
    }

}


module.exports = {
    AuthenticationController
}