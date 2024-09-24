export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2023, our company has been at the forefront of innovation
            in the tech industry. We're passionate about creating solutions that
            make a difference in people's lives.
          </p>
          <p>
            Our team of dedicated professionals works tirelessly to deliver
            high-quality products and services that exceed our customers'
            expectations.
          </p>
        </div>
        <div className="relative h-64 md:h-full"></div>
      </div>
      <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {["Innovation", "Integrity", "Collaboration"].map((value) => (
          <div key={value} className="bg-white border rounded-lg shadow-sm">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{value}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
