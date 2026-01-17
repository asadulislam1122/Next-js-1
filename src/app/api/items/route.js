import { NextResponse } from "next/server";

export async function GET() {
  const items = [
    {
      id: 1,
      name: "Laptop",
      description:
        "High-end performance laptop suitable for programming, gaming, and professional office work.",
      price: 50000,
      image: "/images/laptop.webp",
    },
    {
      id: 2,
      name: "Phone",
      description:
        "Modern smartphone with a powerful processor, high-quality camera, and long-lasting battery.",
      price: 20000,
      image: "/images/phone.png",
    },
    {
      id: 3,
      name: "Watch",
      description:
        "Smartwatch with fitness tracking, heart rate monitoring, and smartphone notifications.",
      price: 8000,
      image: "/images/smartwatch.png",
    },
    {
      id: 4,
      name: "Camera",
      description:
        "Professional DSLR camera ideal for photography, videography, and creative content creation.",
      price: 45000,
      image: "/images/cemera.png",
    },
    {
      id: 5,
      name: "Headphones",
      description:
        "Noise-canceling headphones delivering premium sound quality and all-day comfort.",
      price: 5000,
      image: "/images/hadphone.png",
    },
    {
      id: 6,
      name: "Keyboard",
      description:
        "Mechanical keyboard with tactile keys, RGB lighting, and durable build quality.",
      price: 3000,
      image: "/images/kibord.png",
    },
    {
      id: 7,
      name: "Mouse",
      description:
        "Wireless mouse with smooth tracking, ergonomic design, and long battery life.",
      price: 1500,
      image: "/images/mouse.png",
    },
    {
      id: 8,
      name: "Monitor",
      description:
        "Ultra HD 4K monitor offering crystal-clear display, vibrant colors, and wide viewing angles.",
      price: 12000,
      image: "/images/monitor.png",
    },
    {
      id: 9,
      name: "Tablet",
      description:
        "Android tablet suitable for entertainment, online classes, reading, and light productivity.",
      price: 10000,
      image: "/images/tablet.png",
    },
    {
      id: 10,
      name: "Charger",
      description:
        "Fast charger with advanced safety features for quick and reliable device charging.",
      price: 800,
      image: "/images/drive.png",
    },
  ];

  return NextResponse.json(items);
}
