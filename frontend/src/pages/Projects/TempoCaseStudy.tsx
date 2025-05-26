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
      <section className="mt-20 max-w-3xl mx-auto space-y-6 font-body">
        <p>
          Tempo started as a simple idea: what if travel planning was
          personalized through AI — not just by location or dates, but by mood,
          purpose, and context? I wanted users to describe their trip the way
          they'd talk to a friend, and get back an itinerary that felt uniquely
          theirs.
        </p>

        <p>
          I began with a multi-step form to collect preferences — destination,
          duration, travel style. But I soon realized this rigid input was
          limiting the core strength of the app: natural language flexibility. I
          removed onboarding constraints and replaced fixed options with
          open-ended input fields. This shift unlocked far more personalized
          planning and reflected the actual power of generative AI.
        </p>

        <p>
          Working with the Gemini API came with its own set of challenges.
          Initially, responses came with extra text outside the JSON block —
          sometimes even breaking mid-sentence or returning incomplete
          structures. My early workaround was to manually strip out unwanted
          text, but that quickly proved unreliable. I then restructured the
          prompt to include a strict JSON schema definition, which stabilized
          the output format and made parsing much more predictable. Still, I
          learned to build defensively: LLMs don't always follow rules, so my
          code had to.
        </p>

        <p>
          Voice input was another key feature. I evaluated both a lightweight
          React speech library and Google Cloud Speech-to-Text. While the React
          solution was easier to implement, I chose Google for its superior
          accuracy and long-term potential — especially as I plan to support
          multi-language voice prompts and translations in future iterations.
        </p>

        <p>
          Along the way, I faced another unexpected challenge: users didn’t
          realize how much control they actually had. Most typed vague prompts
          like “relaxing trip” or “family-friendly.” But Tempo can handle much
          more nuanced input — like “plan an active holiday, but leave Day 2
          free,” or “include a luxury dinner on the third night for a couple
          with kids.” Helping users understand this is now a key UX goal for me
          going forward.
        </p>

        <p>
          I also built a trip-sharing feature using SendGrid. Shared trip access
          is protected through secure routes — only invited users can view or
          modify those trips.
        </p>

        <p>
          Tempo isn’t just an AI wrapper. It’s a carefully designed environment
          that gives users power, flexibility, and clarity. This project pushed
          me to design smarter prompts, structure flexible data, and guide users
          toward better experiences. It also deepened my understanding of how to
          collaborate with unpredictable systems — like generative models —
          while still building something consistent, useful, and human-centered.
        </p>
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
