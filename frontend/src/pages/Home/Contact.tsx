import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message submitted:", formData);
    // TODO: connect to backend endpoint (e.g. /api/contact)
  };

  return (
    <section className="w-full px-4 py-10 sm:px-6 md:px-10 max-w-2xl mx-auto">
      <SectionTitle title="Contact Me" />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 mt-8 bg-surface p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tertiary"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tertiary"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-tertiary"
        />

        <button
          type="submit"
          className="bg-tertiary hover:bg-opacity-80 text-white py-3 rounded-md font-semibold transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
