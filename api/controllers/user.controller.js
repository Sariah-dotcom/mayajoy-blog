import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';
import User from "../models/user.model.js";

export const test = (req, res) => {
    res.json({message:'Api works'});
};

export const updateUser = async (req, res, next) => {
    //Display error if user is not verified
    if(String(req.user.id) !== String(req.params.userId)){
        return next(errorHandler(403, 'You are not allowed to update this user.'));
    }

    //Display error for invalid password length
    if(req.body.password){
        if(req.body.password.length < 3){
            return next(errorHandler(400, 'Password must be at least 6 characters.'));
        }
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    //Validate username length 
    if(req.body.username){
        if(req.body.username.length < 4 || req.body.username.length > 20){
            return next(errorHandler(400, 'Username must be between 4 and 20 characters'));
        }

        if(req.body.username.includes(' ')){
            return next(errorHandler(400, 'Username must not contain spaces'));
        }

        if(req.body.username !== req.body.toLowerCase()){
            return next(errorHandler(400, 'Username must be lowercase'));
        }

        if(!req.body.username.match(/^[a-zA-Z0-9]+$/)){
            return next(errorHandler(400, 'Username can only contain letters or numbers'));
        }
    }
    try {
         const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
        $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                },

            },{ new: true });
            const { password, ...rest } = updatedUser._doc;
            res.status(200).json(rest);

        }catch(error) {
            next(error);
    }
};

export const signout = (req, res, next) => {
    try {
      res
        .clearCookie('access_token')
        .status(200)
        .json('User has been signed out');
    } catch (error) {
      next(error);
    }
  };