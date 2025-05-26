import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://portfolio-backend-xx0a.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Failed to send message");
      }
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <section
      id="contact"
      className="bg-bg text-text px-6 md:px-24 py-24 max-w-3xl mx-auto"
    >
      <SectionTitle title="Say Hello" />

      <p className="text-base leading-relaxed mt-6 font-body">
        If you’d like to work together, have a question, or just want to say hi
        — I’d love to hear from you.
      </p>

      {submitted ? (
        <p className="mt-8 text-green-600 font-medium">
          ✅ Your message has been sent successfully!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 space-y-6 font-body">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-primary bg-white text-text focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-primary bg-white text-text focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-primary bg-white text-text focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:brightness-110 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
