const blogs = [
  {
    id: 1,
    title: "Next.js 16 App Router Guide",
    snippet:
      "Learn how to use the new App Router in Next.js 16 for building scalable apps.",
    image:
      "https://i.ibb.co.com/v4pFrYVZ/nested-file-conventions-component-hierarchy.png",
  },
  {
    id: 2,
    title: "Tailwind + DaisyUI Tips",
    snippet:
      "Boost your UI development speed with Tailwind CSS and DaisyUI ready components.",
    image:
      "https://i.ibb.co.com/KcHWCsm4/daisyui-nextjs-component-library.webp",
  },
  {
    id: 3,
    title: "Frontend Development Best Practices",
    snippet:
      "Improve your coding workflow, structure, and design for professional front-end projects.",
    image: "https://i.ibb.co.com/XZ9vw4nd/images-4.png",
  },
];

const BlogPreview = () => {
  return (
    <section className="py-24 bg-base-100">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Latest Blogs</h2>
        <p className="text-gray-500 mt-2">
          Keep up with our latest tips and tutorials
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 lg:px-20">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="card bg-base-200 shadow-lg rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]"
          >
            <figure>
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-gray-500 mt-2">{blog.snippet}</p>
              <button className="btn btn-primary btn-sm mt-4">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;
