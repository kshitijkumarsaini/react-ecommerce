const userRouter = require("express").Router();
const expressAsyncHandler = require("express-async-handler");
const data = require("../data");
const User = require("../models/userModel");

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

module.exports = userRouter;
