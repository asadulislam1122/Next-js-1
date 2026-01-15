const Hero = () => {
  return (
    <div className="hero min-h-[90vh] bg-base-200 px-6 lg:px-20">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-16">
        {/* Image */}
        <img
          src="https://i.ibb.co.com/twR8FWqk/images-42.jpg"
          className="w-full max-w-[520px] rounded-3xl shadow-2xl"
        />

        {/* Text */}
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Welcome to <span className="text-primary">Next.js</span>
          </h1>

          <p className="py-8 text-lg leading-relaxed">
            Are you ready to turn your passion into your profession? Next K S
            (Next Kishore Star) is back, and this time, it’s bigger, better, and
            bolder! This is not just a competition; it is a premier platform
            designed to discover, nurture, and celebrate the extraordinary
            talents of the next generation.
          </p>

          <button className="btn btn-primary btn-lg">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
