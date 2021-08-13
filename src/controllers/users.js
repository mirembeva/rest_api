const UserModel = require('../models/users')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')



exports.UserController = {
    async getusers(req, res) {
        try {
            const response = await UserModel.find();
            return res.json(response);
        } catch(err){
            throw new Error("Failed to get users");
        }
    },
    async createNewUser(req, res) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt)
        try {
            console.log(req.body)
            const response = await UserModel.create({
                firstName:req.body.firstName,
                email:req.body.email,
                phone:req.body.phone,
                password:hashedPassword,
            });
            
            return res.json(response);
        } catch(err){
            console.log(err)
            throw new Error("Failed to post users");
        }
    },
    async updateUser(req, res) {
        try {
            const id = req.params.id;
            const response = await UserModel.findByIdAndUpdate({_id: id}, req.body, {new: true});
            return res.json(response);
        } catch(err){
            throw new Error("Failed to updated user");
        }
    },
    async deleteUser(req, res) {
        try {
            const id = req.params.id;
            const response = await UserModel.findByIdAndDelete({_id: id});
            return res.json({message: 'Resource deleted successfully'});
        } catch(err){
            throw new Error("Failed to delete user");
        }
    },

    async loginUser(req, res) {
        try {
            //valid email
            const user= await UserModel.findOne({email: req.body.email});
            if(!user)
            return res.json({message: 'Invalid Email'});
            //valid password
            const validpass = await bcrypt.compare(req.body.password,user.password);
            if(!validpass)
            return res.json({message: 'Invalid password'});
            
            //create and assign jwt
            const token = jwt.sign({_id:user._id}, process.env.TOKEN_SECRET)
            res.header('authentication_token', token);
            res.send(token);
        
        } catch(err){
            console.log(err)
            // throw new Error("Failed to login user");
        }
    }
}