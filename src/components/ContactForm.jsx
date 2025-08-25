import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    message: "",
  });
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost/landscape/wp-json/react/v1/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      setResponseMsg(result.message);
      setFormData({
        name: "",
        mobile: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setResponseMsg("Something went wrong!");
      console.error("Error:", error);
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="w-11/12 md:w-5/6 rounded-3xl shadow-2xl bg-white p-10 flex flex-col md:flex-row gap-12">
        
        {/* Left section */}
        <div className="w-full md:w-1/2 space-y-8">
          <h1 className="font-semibold text-3xl md:text-5xl text-brandGreen">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg">
            Get in touch with <span className="font-semibold text-brandGreen">Sabaco Landscaping</span> today and let us transform your outdoor space into a beautiful oasis.
          </p>

          <div className="flex flex-col space-y-5 mt-10 font-medium">
            <div className="p-5 bg-gray-100 border border-gray-200 flex justify-between rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-gray-800">Email</h3>
              <a href="mailto:contact@sabacots.ae" className="text-brandGreen hover:underline">
                contact@sabacots.ae
              </a>
            </div>
            <div className="p-5 bg-gray-100 border border-gray-200 flex justify-between rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-gray-800">Phone</h3>
              <a href="tel:+971581891130" className="text-brandGreen hover:underline">
                +971 58 189 1130
              </a>
            </div>
            <div className="p-5 bg-gray-100 border border-gray-200 flex justify-between rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-gray-800">Office</h3>
              <span className="text-gray-700">Al Satwa, Dubai, UAE</span>
            </div>
          </div>
        </div>

        {/* Right section (Form) */}
        <div className="w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-5"
          >
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandGreen focus:outline-none"
            />

            <input
              name="mobile"
              placeholder="Your Mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandGreen focus:outline-none"
            />

            <input
              name="email"
              placeholder="Your Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandGreen focus:outline-none"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-lg text-gray-500 focus:ring-2 focus:ring-brandGreen focus:outline-none"
            >
              <option value="">Pick Your Service</option>
              <option value="landscaping">Landscaping Service</option>
              <option value="handyman">Handyman Service</option>
              <option value="carpentry">Carpentry Works</option>
              <option value="electrical">Electrical</option>
              <option value="plumbing">Plumbing</option>
              <option value="hvac">HVAC</option>
              <option value="maintenance">Maintenance & Projects</option>
              <option value="others">Others</option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandGreen focus:outline-none h-32"
            />

            <button
              type="submit"
              className="bg-brandGreen text-white py-3 rounded-lg shadow-md hover:bg-green-800 transition"
            >
              Submit
            </button>
          </form>

          {responseMsg && (
            <p className="text-center mt-4 text-sm font-medium text-gray-700">
              {responseMsg}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
