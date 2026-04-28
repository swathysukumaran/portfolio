import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle";
import { submitContact } from "../../lib/api";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await submitContact(formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-surface border border-border rounded-lg px-4 py-3 text-text text-sm font-body focus:outline-none focus:border-accent transition-colors duration-200 placeholder:text-muted/50";

  return (
    <section id="contact" className="px-6 md:px-16 py-28 max-w-2xl mx-auto">
      <SectionTitle title="Get In Touch" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-muted leading-relaxed mb-10 font-body">
          Have a project in mind, want to collaborate, or just want to say hi?
          My inbox is always open.
        </p>

        {submitted ? (
          <div className="flex items-center gap-3 text-accent font-body">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p>Message sent! I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs text-muted uppercase tracking-wider font-body"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs text-muted uppercase tracking-wider font-body"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs text-muted uppercase tracking-wider font-body"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>

            {error && <p className="text-red-400 text-sm font-body">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-accent text-bg rounded-lg font-medium text-sm hover:bg-accent/90 transition disabled:opacity-50 font-body"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
