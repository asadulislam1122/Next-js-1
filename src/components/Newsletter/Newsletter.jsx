const Newsletter = () => {
  return (
    <section className="py-24 bg-base-200">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <p className="text-gray-500 mb-8">
          Get the latest updates and offers straight to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-auto flex-1"
          />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
