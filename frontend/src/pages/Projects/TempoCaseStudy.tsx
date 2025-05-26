// import landing from "../../assets/tempo-landing.jpg";
import inputimage from "../../assets/tempo-input.jpg";
import hotel from "../../assets/tempo-hotel.jpg";
import modify from "../../assets/tempo-modify.png";
import temposhare from "../../assets/tempo-share.png";
import tempotrip from "../../assets/tempo-trip.jpg";

export default function TempoCaseStudy() {
  return (
    <div className="bg-bg text-text px-6 md:px-24 py-24 max-w-7xl mx-auto font-body">
      {/* Hero */}
      <section className="mb-16 text-center  mx-auto">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary">
          🌍 Tempo – A Travel Planner That Understands You
        </h1>
        <p className="mt-6 text-lg leading-relaxed">
          A personalized itinerary builder powered by Gemini AI and Google APIs.
        </p>
      </section>

      {/* Overview */}
      <section className="mt-20 mx-auto space-y-10 font-body ">
        {/* Problem & Inspiration */}
        <div className="space-y-4">
          <h2 className="text-xl font-heading font-semibold text-primary">
            🎯 Why I Built Tempo
          </h2>
          <p>
            Tempo started as a simple idea: what if travel planning was
            personalized through AI — not just by location or dates, but by
            mood, purpose, and context?
          </p>
          <p>
            I wanted users to describe their trip the way they'd talk to a
            friend — and get back a plan that felt uniquely theirs.
          </p>
        </div>

        {/* Early Approach & Pivot */}
        <div className="space-y-4">
          <h2 className="text-xl font-heading font-semibold text-primary">
            🔁 From Forms to Freedom
          </h2>
          <p>
            I initially built a multi-step form to collect preferences like
            destination, duration, and travel style. But I quickly realized this
            rigid input was limiting the real power of the app — natural
            language flexibility.
          </p>
          <p>
            I removed onboarding constraints and replaced fixed fields with
            open-ended inputs. This shift unlocked highly personalized planning
            that reflected the actual strength of generative AI.
          </p>
        </div>

        {/* AI Prompting Challenges */}
        <div className="space-y-4">
          <h2 className="text-xl font-heading font-semibold text-primary">
            🤖 Taming AI Inconsistencies
          </h2>
          <p>Working with the Gemini API introduced a set of challenges:</p>
          <ul className="list-disc list-inside text-zinc-700 space-y-1">
            <li>Extra text before/after the JSON output</li>
            <li>Incomplete or broken responses mid-string</li>
            <li>Inconsistent structure that broke the parser</li>
          </ul>
          <p>
            I first tried stripping out unwanted text but that proved
            unreliable. Eventually, I embedded a strict JSON schema into the
            prompt — which helped stabilize the output and made parsing safer.
          </p>
          <p className="italic text-sm text-zinc-600">
            Lesson learned: even the smartest LLM needs guardrails.
          </p>
        </div>

        {/* Voice Input Decision */}
        <div className="space-y-4">
          <h2 className="text-xl font-heading font-semibold text-primary">
            🎤 Choosing the Right Speech Tool
          </h2>
          <p>
            I tested both a lightweight React speech library and Google Cloud
            Speech-to-Text. While the React version was easy to use, its
            accuracy was limited.
          </p>
          <p>
            I chose Google’s API for its precision and future-proofing —
            especially since I plan to add multilingual voice input and
            translation support later.
          </p>
        </div>

        {/* UX Insight */}
        <div className="space-y-4">
          <h2 className="text-xl font-heading font-semibold text-primary">
            💡 Designing for User Imagination
          </h2>
          <p>
            One unexpected challenge was helping users realize how much power
            they had. Many typed generic prompts like “relaxing trip” — even
            though Tempo could handle things like:
          </p>
          <ul className="list-disc list-inside text-zinc-700 space-y-1">
            <li>"Leave Day 2 empty, I want to rest."</li>
            <li>
              "Include a candlelight dinner on Day 3 with a luxury hotel."
            </li>
            <li>"I’m traveling with my child, but want one solo evening."</li>
          </ul>
          <p>
            To motivate users to create richer prompts, I got rid of the quick
            select options, and added example prompts to help the users see the
            potential of what they could ask. This led to more creative and
            personalized results.
          </p>
        </div>

        {/* Sharing & Security */}
        <div className="space-y-4">
          <h2 className="text-xl font-heading font-semibold text-primary">
            🔐 Sharing Features & Access Control
          </h2>
          <p>
            I added a trip sharing feature using SendGrid, allowing users to
            send itineraries via email. These are protected through private
            routes — only invited users can view or edit them.
          </p>
        </div>

        {/* Final Reflection */}
        <div className="space-y-4">
          <h2 className="text-xl font-heading font-semibold text-primary">
            ✨ What I Learned
          </h2>
          <p>
            Tempo isn't just an AI wrapper. It's a structured, human-first
            environment designed to guide, not overwhelm. It pushed me to think
            deeply about prompt design, flexible architecture, and guiding user
            behavior in open-ended systems.
          </p>
          <p className="text-zinc-700 font-medium">
            It’s my favorite kind of challenge: technical, creative, and
            empathetic.
          </p>
        </div>
      </section>

      {/* Features + Images */}
      <section className="mt-16 space-y-20">
        <CaseStudyBlock
          title="🎯 Natural Language Input"
          img={inputimage}
          text="Users can describe their travel preferences like '3-day trip with my daughter to somewhere peaceful but not too remote'. Tempo interprets it using Gemini AI and returns a tailored itinerary."
        />
        <CaseStudyBlock
          title="🏨 Smart Hotel Suggestions"
          img={hotel}
          text="Using Google Places API, Tempo fetches relevant accommodations with images and links — matched to the trip type and user context."
        />
        <CaseStudyBlock
          title="✏️ Modify Your Trip"
          img={modify}
          text="Change your mind? Just ask Tempo to update your trip in plain language — it's like chatting with a travel assistant."
        />
        <CaseStudyBlock
          title="🔁 Share & Collaborate"
          img={temposhare}
          text="Invite others to view or co-edit a trip. Great for group travel planning or sending curated recommendations to a friend."
        />
        <CaseStudyBlock
          title="🗺️ Full Itinerary View"
          img={tempotrip}
          text="Get a clean, scrollable day-wise breakdown of your trip with activity summaries, hotel info, and interactive maps."
        />
      </section>
    </div>
  );
}

// 🧩 Modular feature block
function CaseStudyBlock({
  title,
  text,
  img,
}: {
  title: string;
  text: string;
  img: string;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <img
        src={img}
        alt={title}
        className="w-full md:w-1/2 rounded-lg shadow-md object-contain bg-zinc-100"
      />
      <div className="flex-1 space-y-3">
        <h2 className="text-xl font-semibold font-heading text-primary">
          {title}
        </h2>
        <p className="text-base text-zinc-700 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
