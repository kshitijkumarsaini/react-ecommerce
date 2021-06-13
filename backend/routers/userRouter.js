const userRouter = require("express").Router();
const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const data = require("../data");
const User = require("../models/userModel");
const { generateToken } = require("../utils");

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({
      message: "Incorrect Details. Kindly Provide the valid Credentials",
    });
  })
);

module.exports = userRouter;
