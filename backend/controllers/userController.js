import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email : email})

    if(user && (await user.matchPassword(password))) {
        const token = jwt.sign({userId: user._id} , process.env.JWT_SECRET , {expiresIn: '30d'})

        res.cookie("jwt" , token , {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 30 * 24 * 60 * 60 * 1000
        })
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(401)
        throw new Error("Invalid email or password")
    }
    
})

const registerUser = asyncHandler(async (req, res) => {
    res.send("Register user")
})

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie("jwt" , "" , {
        httpOnly: true,
        expires: new Date(0),
    });

    res.status(200).json({message: "Logged out successfully"})
})

const getUserProfile = asyncHandler(async (req, res) => {
    res.send("Get user profile")
})

const updateUserProfile = asyncHandler(async (req, res) => {
    res.send("Update user profile")
})

const getUsers = asyncHandler(async (req, res) => {
    res.send("Get users")
})

const deleteUser = asyncHandler(async (req, res) => {
    res.send("Delete user")
})

const getUserById = asyncHandler(async (req, res) => {
    res.send("Get user by ID")
})

const updateUser = asyncHandler(async (req, res) => {
    res.send("Update user")
})

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, deleteUser, getUserById, updateUser };
