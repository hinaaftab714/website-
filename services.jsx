function Services() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "We build modern, responsive and high-performance websites."
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description:
        "We create mobile-friendly applications and digital experiences."
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "We design beautiful and user-friendly interfaces."
    },
    {
      icon: "📈",
      title: "Digital Marketing",
      description:
        "We help businesses improve their online presence and reach."
    },
    {
      icon: "⚙️",
      title: "Custom Solutions",
      description:
        "We develop customized solutions according to your requirements."
    },
    {
      icon: "🛠️",
      title: "Technical Support",
      description:
        "We provide reliable technical support and maintenance."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Professional digital services designed to help
            your business grow.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >

                <div className="text-4xl mb-5">
                  {service.icon}
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h2>

                <p className="text-gray-600 leading-7">
                  {service.description}
                </p>

                <button className="mt-6 text-blue-600 font-semibold hover:text-blue-800">
                  Learn More →
                </button>

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}

export default Services;