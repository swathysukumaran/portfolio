import React from "react";

export default function TempoCaseStudy() {
  return (
    <div className="bg-primary text-white min-h-screen py-12 px-6 md:px-16">
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-tertiary">
          🌍 Tempo – A Travel Planner That Understands You
        </h1>
      </section>

      {/* Introduction */}
      <section className="mb-10 max-w-3xl space-y-4 ">
        <p className="mt-4 text-lg text-secondary max-w-2xl">
          Tempo began with one simple idea: everyone travels differently — even
          to the same place, on the same dates.
        </p>
        <p>
          Some people travel to relax. Others to explore. Some are with their
          kids, some on solo adventures, and others are attending weddings or
          work trips. The same city can mean totally different things depending
          on who's going and why.
        </p>
        <p>
          This was the inspiration behind Tempo, my capstone project — and also
          my first experience working with Large Language Models (LLMs).
        </p>
        <p>
          I wanted to build something that felt personal, flexible, and smart —
          something that didn’t just give you a list of tourist spots, but
          actually listened to what you wanted.
        </p>
      </section>
      {/* Screenshots */}
      <section className="mb-12 max-w-6xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-4">
          📸 Screenshots
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="/images/tempo-1.png"
            alt="Trip Input"
            className="rounded-xl shadow-lg"
          />
          <img
            src="/images/tempo-2.png"
            alt="Generated Itinerary"
            className="rounded-xl shadow-lg"
          />
          <img
            src="/images/tempo-3.png"
            alt="Hotel Suggestions"
            className="rounded-xl shadow-lg"
          />
          <img
            src="/images/tempo-4.png"
            alt="Map Integration"
            className="rounded-xl shadow-lg"
          />
          <img
            src="/images/tempo-5.png"
            alt="Share Feature"
            className="rounded-xl shadow-lg"
          />
          <img
            src="/images/tempo-6.png"
            alt="Edit Trip View"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* From Forms to Freedom */}
      <section className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-2">
          🧠 From Forms to Freedom
        </h2>
        <p>
          Tempo always used AI — but in the beginning, I was only scratching the
          surface.
        </p>
        <p>
          I started with a form-based system. Users could choose things like
          pace, activity level, and travel style. The AI would take those and
          generate an itinerary. It worked, but something felt off.
        </p>
        <p>
          Then I realized: even the same person doesn't travel the same way
          every time. Your preferences change. A solo trip is different from a
          family trip. A honeymoon is different from a work conference.
        </p>
        <p>
          I had originally planned to store user preferences after onboarding
          and reuse them. But that idea started to break — because in real life,
          travel styles change with context.
        </p>
        <p>
          And once I saw what the AI could really understand, I asked myself:
          <em>Why am I limiting the input at all?</em>
        </p>
        <p>
          So I removed the onboarding, removed the fixed options, and replaced
          it all with a single smart text box — or voice input.
        </p>
        <p>Now, users can simply say:</p>
        <ul className="list-disc list-inside pl-5 my-2">
          <li>
            “Keep it budget-friendly but surprise me with one luxury activity,”
          </li>
          <li>“Nothing on Day 2 — I’ll be attending a wedding.”</li>
        </ul>
        <p>No rigid fields. Just human input. And the AI understands.</p>
        <p>
          That moment — when I moved away from structured inputs and let people
          speak freely — is when Tempo became something real.
        </p>
      </section>

      {/* What Tempo Can Do */}
      <section className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-2">
          ✨ What Tempo Can Do
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            🧠 AI-generated itineraries using Gemini, based on natural text or
            speech
          </li>
          <li>
            🗣️ Voice input using Google Speech-to-Text for hands-free planning
          </li>
          <li>
            🗺️ Activities and hotels link to real locations via Google Maps
          </li>
          <li>📸 Each item includes photos from Google Places API</li>
          <li>💾 Trip saving and revisit anytime through interactive cards</li>
          <li>🔁 Modify trips anytime using simple natural commands</li>
          <li>
            📤 Share trips via email (SendGrid), with view or edit permission
          </li>
          <li>
            🔐 Protected routes to ensure only registered users can create or
            modify trips
          </li>
        </ul>
      </section>

      {/* Challenges */}
      <section className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-2">
          🧩 Major Challenges (and What I Learned)
        </h2>
        <h3 className="font-semibold mt-4">🤖 Inconsistent AI Responses</h3>
        <p>
          Since this was my first time working with LLMs, I faced a lot of
          issues:
        </p>
        <ul className="list-disc list-inside pl-5 mb-2">
          <li>Random text before/after the JSON</li>
          <li>Broken or incomplete responses</li>
          <li>The AI sometimes changed the data structure</li>
        </ul>
        <p>
          <strong>My solution:</strong> I switched to using Gemini’s recommended
          structured output format and sent the exact JSON schema in the prompt.
          I also added a retry mechanism in case the response was malformed.
          These changes made Tempo far more stable — especially during demos and
          real-time use.
        </p>

        <h3 className="font-semibold mt-6">🗣️ Voice-to-Text Integration</h3>
        <p>
          I explored a few options, including lightweight React libraries. They
          worked, but the accuracy wasn’t good enough.
        </p>
        <p>
          I eventually chose Google Cloud Speech-to-Text because of its
          reliability and room for future enhancements — like language
          translation.
        </p>
        <p>
          Now, users can literally talk to the app to plan or modify their trip.
        </p>
      </section>

      {/* Why Not Just Use Gemini */}
      <section className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-2">
          💡 Why Not Just Use ChatGPT or Gemini Directly?
        </h2>
        <p>Good question — but here's why Tempo is different.</p>
        <p>It’s not just an AI window. It’s a complete planning experience:</p>
        <ul className="list-disc list-inside pl-5 mb-2">
          <li>It keeps your trip organized</li>
          <li>Adds maps and real photos</li>
          <li>Lets you save, modify, and share</li>
          <li>You can use text or voice</li>
          <li>You don’t need to start over every time</li>
        </ul>
        <p>
          It's a one-stop, guided interface for travel planning — built with
          real-world behavior in mind.
        </p>
      </section>

      {/* Learnings */}
      <section className="max-w-3xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-2">
          🌱 What I Learned
        </h2>
        <p>Tempo taught me a lot more than how to build a full-stack app.</p>
        <ul className="list-disc list-inside pl-5 mb-2">
          <li>
            I learned how to structure prompts so AI gives consistent results
          </li>
          <li>How to handle unpredictability in AI responses</li>
          <li>
            How to integrate and manage multiple real-world APIs — Google Maps,
            Places, Speech, and SendGrid
          </li>
          <li>How to build fallback systems, retries, and protected routes</li>
        </ul>
        <p>
          But more than anything, I learned how to build for real people. Not
          around the limits of a system — but around the way people think, talk,
          and dream.
        </p>
      </section>
    </div>
  );
}
