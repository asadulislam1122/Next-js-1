import { FaStar } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "Rahim Khan",
    role: "Web Developer",
    message:
      "Next.js course from SCIC was amazing! The tutorials were clear and easy to follow.",
    avatar: "https://img.icons8.com/color/48/user.png",
  },
  {
    id: 2,
    name: "Sumi Akter",
    role: "UI/UX Designer",
    message:
      "Loved the project-based approach. I built real projects and gained confidence.",
    avatar: "https://img.icons8.com/fluency/48/user-female.png",
  },
  {
    id: 3,
    name: "Jamal Uddin",
    role: "Frontend Engineer",
    message:
      "Highly recommend this to anyone who wants to start a career in web development!",
    avatar: "https://img.icons8.com/office/40/user.png",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-base-100">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">What Our Students Say</h2>
        <p className="text-gray-500 mt-2">Real feedback from our learners</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 lg:px-20">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="card bg-base-200 p-8 shadow-lg rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{t.role}</p>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mx-0.5" />
                ))}
              </div>
              <p className="text-gray-600">{t.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
