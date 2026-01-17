"use client";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const ItemDetailsPage = () => {
  const params = useParams();
  const { id } = params;
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/items`)
      .then((res) => res.json())
      .then((data) => {
        const foundItem = data.find((i) => i.id === parseInt(id));
        setItem(foundItem);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-20">Loading item...</p>;
  if (!item) return <p className="text-center mt-20">Item not found!</p>;

  return (
    <div className="py-24 px-6 lg:px-20 bg-base-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-base-200 p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8">
        {/* Left: Image */}
        <div className="md:w-1/2">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2">
          <Link
            href="/items"
            className="text-blue-400 content-center items-center gap-3 flex mb-8"
          >
            <IoArrowBackCircleSharp /> Back
          </Link>
          <h2 className="text-3xl font-bold mb-4">{item.name}</h2>
          <p className="text-gray-500 mb-4">{item.description}</p>
          <p className="text-primary font-bold text-xl mb-6">{item.price} ৳</p>
          <button className="btn btn-success">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsPage;
