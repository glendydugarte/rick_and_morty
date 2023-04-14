const users = require("../utils/users")


module.exports =

function Login(req, res){
    
    const {email, password} = req.query;
    
    const findUser = users.find((user) => user.email === email && user.password === password)
    if(findUser){
        res.status(200).json({access:true})
    } else{
        return res.status(200).json({access:false})
    } 
}