// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const items = [
//   {
//     id: 1,
//     name: "Gaming Laptop",
//     description: "High-performance laptop for gaming and work.",
//     price: 85000,
//     image: "https://i.ibb.co/N9Xj6cX/laptop.jpg",
//   },
//   {
//     id: 2,
//     name: "Smartphone",
//     description: "Latest smartphone with amazing features.",
//     price: 25000,
//     image: "https://i.ibb.co/2kG9H6x/phone.jpg",
//   },
//   {
//     id: 3,
//     name: "Headphones",
//     description: "Noise-cancelling headphones for music lovers.",
//     price: 4500,
//     image: "https://i.ibb.co/5RkLZgY/headphones.jpg",
//   },
// ];

// app.get("/api/items", (req, res) => {
//   res.json(items);
// });

// const PORT = 3001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const items = [
  {
    id: 1,
    name: "Gaming Laptop",
    description: "High-performance laptop for gaming and work.",
    price: 85000,
    image: "https://i.ibb.co.com/bRdjsGNb/08-Legion-Pro-7i-10.webp",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest smartphone with amazing features.",
    price: 25000,
    image:
      "https://i.ibb.co.com/S7WHNXpF/motorola-edge-60-fusion-smartphone-diamu.png",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling headphones for music lovers.",
    price: 4500,
    image:
      "https://i.ibb.co.com/tTP82Qpm/XTREME-X50-RG-RGB-GAMING-HEADPHONE.jpg",
  },
  {
    id: 4,
    name: "Smartwatch",
    description: "Keep track of your fitness and notifications.",
    price: 8000,
    image: "https://i.ibb.co.com/99mRLpfq/5b4a59cfd23f021ad43270df4af5fdab.jpg",
  },
  {
    id: 5,
    name: "Gaming Mouse",
    description: "Precision mouse with customizable DPI.",
    price: 3500,
    image:
      "https://i.ibb.co.com/nq43P1Pf/d2595c1ce4fb0cda8eef8b28efcda967-jpg-720x720q80.jpg",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard.",
    price: 6000,
    image: "https://i.ibb.co.com/rKrQ9RjK/71-Mn3zh2la-L-AC-SL1000.jpg",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    description: "Portable speaker with high-quality sound.",
    price: 4000,
    image: "https://i.ibb.co.com/gMSvjwsF/sk885bt-01-500x500.webp",
  },
  {
    id: 8,
    name: "External Hard Drive",
    description: "1TB portable external hard portable external hard drive.",
    price: 5500,
    image: "https://i.ibb.co.com/whr6Czwc/d09462c498227f23f7c4c00bf2c31b5f.jpg",
  },
  {
    id: 9,
    name: "Wireless Earbuds",
    description: "Compact and wireless earbuds with charging case.",
    price: 3000,
    image:
      "https://i.ibb.co.com/pvZhvZsn/0444f5b415b139bf5e6c3fb7a96d86fb-png-720x720q80.png",
  },
  {
    id: 10,
    name: "Digital Camera",
    description: "High-resolution camera for photography enthusiasts.",
    price: 45000,
    image: "https://i.ibb.co.com/7d0QzcpV/big-307186.jpg",
  },
];

app.get("/api/items", (req, res) => {
  res.json(items);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
