const jwt =require('jsonwebtoken');

function verifyToken(req, res, next) {
const token = req.header("x-auth-token");
if(!token){
    res.status(400).send("not token")
}

const decoded= jwt.verify(token,process.env.JWT_SECRET)

req.user=decoded.user;
next();
};

  
//     const bearerHeader = req.headers['authorization'];
  
//     if (bearerHeader) {
//       const bearer = bearerHeader.split(' ');
//       const bearerToken = bearer[1];
//       req.token = bearerToken;
//       next();
//     } 
//     else {

//       res.sendStatus(403);
    
//     }
//   