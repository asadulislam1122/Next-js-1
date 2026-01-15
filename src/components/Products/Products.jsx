import Link from "next/link";

// Sample product data
const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: 85000,
    description: "High-performance laptop for gaming and work.",
    image: "https://i.ibb.co.com/bRdjsGNb/08-Legion-Pro-7i-10.webp",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 25000,
    description: "Latest smartphone with amazing features.",
    image:
      "https://i.ibb.co.com/S7WHNXpF/motorola-edge-60-fusion-smartphone-diamu.png",
  },
  {
    id: 3,
    name: "Headphones",
    price: 4500,
    description: "Noise-cancelling headphones for music lovers.",
    image:
      "https://i.ibb.co.com/tTP82Qpm/XTREME-X50-RG-RGB-GAMING-HEADPHONE.jpg",
  },
];

const Products = () => {
  return (
    <section className="py-24 bg-base-100">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Top Products</h2>
        <p className="text-gray-500 mt-2">Check out our best-selling items</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 lg:px-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="card bg-base-200 shadow-lg p-6 text-center transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.03]"
          >
            <figure>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover rounded-xl mb-4"
              />
            </figure>
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-primary font-bold mt-1">{product.price} ৳</p>
            <p className="text-gray-500 text-sm mt-2">{product.description}</p>
            <Link
              href={`/items/${product.id}`}
              className="btn btn-primary btn-sm mt-4"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
