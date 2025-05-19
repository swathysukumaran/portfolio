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
        "https://tempo-backend-w4iy.onrender.com/api/contact",
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
      className="w-full px-6 md:px-24 py-20 bg-primary text-secondary max-w-3xl mx-auto"
      id="contact"
    >
      <SectionTitle title="Say Hello" />

      <p className="text-base text-secondary leading-relaxed mt-6">
        If you’d like to work together, have a question, or just want to say hi
        — I’d love to hear from you. Fill out the form below and I’ll get back
        to you as soon as I can.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-10">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-primary text-secondary border border-muted placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-tertiary"
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-primary text-secondary border border-muted placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-tertiary"
        />

        <textarea
          name="message"
          placeholder="Your message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-primary text-secondary border border-muted placeholder:text-muted resize-none focus:outline-none focus:ring-2 focus:ring-tertiary"
        />

        <div>
          <button
            type="submit"
            className="bg-button text-white text-sm px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-sm text-green-600 mt-3">
              Thanks for reaching out! I’ll be in touch soon.
            </p>
          )}
        </div>
      </form>
    </section>
  );
}

export default Contact;
