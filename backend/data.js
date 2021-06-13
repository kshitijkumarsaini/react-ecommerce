const bcrypt = require("bcryptjs");

const data = {
  users: [
    {
      name: "Kshitij",
      email: "kshitij@admin.com",
      password: bcrypt.hashSync("11022", 8),
      isAdmin: true,
    },
    {
      name: "John Doe",
      email: "john@gmail.com",
      password: bcrypt.hashSync("12345", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      _id: "1",
      name: "Nike Slim Shirts",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 50,
      brand: "Nike",
      rating: 3,
      numReviews: 10,
      description: "High Quality Product",
    },
    {
      _id: "2",
      name: "Adidas Fit Shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 100,
      countInStock: 20,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "High Quality Product",
    },
    {
      _id: "3",
      name: "Peter England Shirts",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: 220,
      countInStock: 0,
      brand: "Peter England",
      rating: 4.9,
      numReviews: 15,
      description: "High Quality Product",
    },
    {
      _id: "4",
      name: "Nike Slim Pants",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 90,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "High Quality Product",
    },
    {
      _id: "5",
      name: "Puma Slim Pants",
      category: "Pants",
      image: "/images/p5.jpg",
      price: 95,
      countInStock: 30,
      brand: "Puma",
      rating: 3.5,
      numReviews: 10,
      description: "High Quality Product",
    },
    {
      _id: "6",
      name: "Adidas Fit Pants",
      category: "Pants",
      image: "/images/p6.jpg",
      price: 105,
      countInStock: 12,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 8,
      description: "High Quality Product",
    },
  ],
};

module.exports = data;
