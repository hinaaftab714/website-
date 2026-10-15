function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-blue-100 text-lg">
            Have a question? We'd love to hear from you.
          </p>

        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Information */}
            <div className="bg-blue-600 text-white rounded-2xl p-8">

              <h2 className="text-3xl font-bold mb-5">
                Get In Touch
              </h2>

              <p className="text-blue-100 mb-8">
                Contact us for more information about our
                services and solutions.
              </p>

              <div className="space-y-6">

                <div>
                  <h3 className="font-bold text-lg">
                    📧 Email
                  </h3>
                  <p className="text-blue-100">
                    info@example.com
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    📞 Phone
                  </h3>
                  <p className="text-blue-100">
                    +92 300 1234567
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    📍 Address
                  </h3>
                  <p className="text-blue-100">
                    Faisalabad, Punjab, Pakistan
                  </p>
                </div>

              </div>

            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-md p-8">

              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send Message
              </h2>

              <form className="space-y-5">

                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;