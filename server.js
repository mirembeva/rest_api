const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
require('dotenv/config')
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next)=>{
    if(req.headers && req.headers.authorization){
        jwt.verify(req.headers.authorization, process.env.TOKEN_SECRET, (err, decode) => {
            if(err) req.user = undefined;

            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
})




// app.use(async(req, res, next) => {
//     //const token = req.header('authentication_token');
//     let token = '';
//     if(req.headers&&req.headers.authorization){
//        jwt.verify()
//     }
//     console.log(token);
//       //if(!token) return res.send('Access denied');
//       try {
//         //verify token
//           const verified = await jwt.verify(token,process.env.TOKEN_SECRET)
//           req.user = verified;
//           if(req.user){
//               next();
//           }else{
//               res.send('Access denied')
//           }
//       } catch (error) {
//           console.log(error)
//           res.send('Invalid Token')
//       }
//   });
// (async () => {
//     try {
//         mongoose.connect(process.env.DB_CONNECTION, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false
//         })
//     } catch (err) {
//       console.log('error: ' + err)
//     }
//   })()
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const PORT = process.env.PORT || 3000;

require('./src/index')(app)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

module.exports = app;