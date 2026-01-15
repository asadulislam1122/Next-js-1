const plans = [
  {
    id: 1,
    name: "Basic",
    price: "৳5,000",
    features: ["1 Project", "Basic Support", "Access to Tutorials"],
  },
  {
    id: 2,
    name: "Pro",
    price: "৳12,000",
    features: ["5 Projects", "Priority Support", "Advanced Tutorials"],
  },
  {
    id: 3,
    name: "Enterprise",
    price: "৳25,000",
    features: ["Unlimited Projects", "24/7 Support", "All Tutorials + Extras"],
  },
];

const PricingPlans = () => {
  return (
    <section className="py-24 bg-base-200">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Pricing Plans</h2>
        <p className="text-gray-500 mt-2">
          Choose the plan that suits you best
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 lg:px-20">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="card bg-base-100 shadow-lg rounded-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.03]"
          >
            <h3 className="text-2xl font-bold mb-2 text-center">{plan.name}</h3>
            <p className="text-center text-3xl font-extrabold text-primary mb-4">
              {plan.price}
            </p>
            <ul className="mb-6 space-y-2 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> {feature}
                </li>
              ))}
            </ul>
            <div className="text-center">
              <button className="btn btn-primary w-full">Select Plan</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
