const jwt = require("jsonwebtoken");
const Register = require("../modules1/registerschema");



const auth = async(req, res, next) =>{
    try {

        const token = req.cookies.jwt;     // to get the value of cookie
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY); // verify both tokens are same or not 
        console.log(verifyUser);

        const user = await Register.findOne({_id:verifyUser._id}); // show all information of user in console
        console.log(user);

        // for the logout
        req.token = token; // to get the value of token
        req.user = user; // to get the value of user

        next();

    } catch (error) {
        res.status(401).send(error)
    }
}

module.exports = auth;