"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";

const ItemsPage = () => {
  const router = useRouter();
  const [items, setItems] = useState([]); // items state
  const [loading, setLoading] = useState(true);

  // Authentication check
  useEffect(() => {
    const auth = Cookies.get("auth");
    if (!auth) {
      router.push("/login"); // redirect to login if not authenticated
    }
  }, [router]);

  // Fetch items from server
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("/api/items");
        const data = await res.json();
        setItems(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching items:", err);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <p className="text-center mt-20">Loading items...</p>;

  return (
    <div className="py-24 px-6 lg:px-20 bg-base-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-12 text-center">Item List</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="card bg-base-200 shadow-lg rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <figure>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
            </figure>

            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-500 mt-2">{item.description}</p>
            <p className="text-primary font-bold mt-2">{item.price} ৳</p>

            {/* Details button */}
            <Link
              href={`/items/${item.id}`}
              className="btn btn-primary mt-4 w-full text-center"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
