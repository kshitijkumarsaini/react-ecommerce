const express = require("express");
const mongoose = require("mongoose");
// const data = require("./data");
const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/react-ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

// app.get("/api/products/:id", (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product Not Found" });
//   }
// });

app.get("/", (req, res) => {
  res.send("Server is Ready");
});

app.use((error, req, res, next) => {
  res.status(500).send({ message: error.message });
});

app.listen(PORT, () => {
  console.log("Serve at host 5000");
});
