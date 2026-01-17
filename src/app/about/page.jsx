export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">About This Project</h1>

      <p className="text-gray-700 mb-6">
        This project is a simple product listing application built using Next.js
        15/16 (App Router). It demonstrates basic routing, data fetching from an
        API, and mock authentication.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Purpose</h2>
        <p className="text-gray-700">
          The main purpose of this application is to understand how public
          pages, authentication, and dynamic routes work in Next.js.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Landing page with multiple sections</li>
          <li>Mock login using hardcoded credentials</li>
          <li>Public product listing page</li>
          <li>Dynamic product details page</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
        <p className="text-gray-700">
          Next.js (App Router), Express.js / JSON API, Cookies, and Tailwind
          CSS.
        </p>
      </section>
    </main>
  );
}
