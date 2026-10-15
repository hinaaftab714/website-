function About() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Learn more about our company, our mission and
            what we do.
          </p>

        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-5">
                Who We Are
              </h2>

              <p className="text-gray-600 leading-7 mb-5">
                We are a team of passionate professionals
                focused on creating modern digital experiences
                and solutions for businesses.
              </p>

              <p className="text-gray-600 leading-7">
                Our goal is to combine creativity, technology
                and innovation to help our clients achieve
                their digital goals.
              </p>
            </div>

            <div className="bg-blue-600 rounded-2xl p-10 text-white">

              <h3 className="text-2xl font-bold mb-6">
                Our Mission
              </h3>

              <p className="text-blue-100 leading-7">
                Our mission is to provide simple, powerful
                and affordable digital solutions that make
                a real difference.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-bold text-blue-600">
                50+
              </h3>
              <p className="text-gray-600 mt-2">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">
                30+
              </h3>
              <p className="text-gray-600 mt-2">
                Clients
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">
                5+
              </h3>
              <p className="text-gray-600 mt-2">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">
                24/7
              </h3>
              <p className="text-gray-600 mt-2">
                Support
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default About;
