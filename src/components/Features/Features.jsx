import { FaTruckFast, FaShieldHalved, FaStar } from "react-icons/fa6";

const features = [
  {
    icon: <FaTruckFast className="text-4xl text-primary" />,
    title: "Fast Delivery",
    desc: "Get your products delivered quickly and safely within 24 hours all over the country.",
  },
  {
    icon: <FaShieldHalved className="text-4xl text-primary" />,
    title: "Secure Payment",
    desc: "We provide 100% secure payment options to keep your information protected.",
  },
  {
    icon: <FaStar className="text-4xl text-primary" />,
    title: "Premium Quality",
    desc: "We ensure the best quality products directly from trusted suppliers.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-base-100">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Our Features</h2>
        <p className="text-gray-500 mt-2">Why customers choose us</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 lg:px-20">
        {features.map((f, i) => (
          <div
            key={i}
            className="card bg-base-200 shadow-lg p-8 text-center
transition-all duration-500 ease-in-out
hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.03] "
          >
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-gray-500">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
