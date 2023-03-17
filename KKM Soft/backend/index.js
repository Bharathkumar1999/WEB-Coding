const express= require("express");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors= require("cors");
const {productsRouter}= require("./routes/products.route");

const {authenticate}= require("./middleswares/authentication")

const {connection}= require("./config/db")
const {UserModel}= require("./models/User.model")

const app= express();

app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.post("/signup",async (req,res)=>{
    const {email,password,age,name}= req.body;
    const userPresent= await UserModel.findOne({email})
    if(userPresent?.email){
        res.send("User already exists")
    }
    else{
        try{
            bcrypt.hash(password, 5, async function(err, hash) {
                const user= new UserModel({email,password:hash,age,name});
                await user.save();
                res.send({"msg":"Sign up successfully"})
            });
        }
        catch(err){
            console.log(err);
            res.send({"msg":"Something went wrong, pls try again later"})
        }

    }
    
})

app.post("/login",async (req,res)=>{
    const {email,password}= req.body;
    try{
        const user= await UserModel.find({email});
        console.log(user)

        if(user.length>0){
            const hashed_password= user[0].password;
            bcrypt.compare(password, hashed_password, function(err, result) {
                if(result){
                    const token = jwt.sign({ "userID": user[0]._id }, 'shhhhh');
                    res.send({"msg":"Login successfull","token": token})
                }
                else{
                    res.send({"msg":"Login failed"})

                }
            });

        }
        else{
            res.send({"msg":"Login failed"})
        }
        // console.log(user);
    }
    catch{
        res.send({"msg":"Something went wrong"})

    }
    // res.send("work in progress");
})


// app.get("/about",(req,res)=>{
//     res.send("About..")
// })

// app.get("/weather",(req,res)=>{
//     // console.log(req.headers.authorization)
//     var token= req.headers.authorization?.split(" ")[1];

//     var decoded = jwt.verify(token, 'shhhhh',(err, decoded) => {
//         if(err){
//             res.send("pls login again")
//         }
//         else if(decoded){
//             // console.log(decoded.foo)
//             res.send("Weather data is xyz..")
//         }

//       });
// })

app.use(authenticate)
app.use("/products",productsRouter)


app.listen(8080,async()=>{
    try{
        await connection;
        console.log("Connected to DB Successfully");
    }
    catch(err){
        console.log("Error connecting to DB");
        console.log(err)
    }
    console.log("Listening on PORT 8080")
})