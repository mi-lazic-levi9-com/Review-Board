export default function About() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
      <p className="mb-6 text-lg text-gray-700 text-center">
        Welcome to Review Board App! We are passionate about helping you
        discover, review, and share the best digital products for productivity,
        design, development, and collaboration.k
      </p>
      <h2 className="text-2xl font-semibold mb-2 mt-8">Our Mission</h2>
      <p className="mb-6 text-gray-700">
        Our mission is to empower individuals and teams to make informed
        decisions by providing honest, community-driven reviews and insights on
        the latest tools and platforms. We believe in transparency, quality, and
        the power of shared knowledge.
      </p>
      <h2 className="text-2xl font-semibold mb-2 mt-8">Meet the Team</h2>
      <ul className="mb-6 text-gray-700 list-disc list-inside">
        <li>
          <span className="font-medium">Miljana Tukic</span> - Frontend
          Developer
        </li>
        <li>
          <span className="font-medium">Contributors</span> – Our amazing
          open-source community
        </li>
      </ul>
      <p className="text-gray-700">
        Whether you’re a developer, designer, or productivity enthusiast, we’re
        here to help you find the right tools for your workflow. Thank you for
        being part of our journey!
      </p>
    </div>
  );
}
