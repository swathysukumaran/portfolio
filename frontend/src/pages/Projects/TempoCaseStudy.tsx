import inputimage from "../../assets/tempo-input.jpg";
import hotel from "../../assets/tempo-hotel.jpg";
import modify from "../../assets/tempo-modify.png";
import temposhare from "../../assets/tempo-share.png";
import tempotrip from "../../assets/tempo-trip.jpg";

export default function TempoCaseStudy() {
  return (
    <div className="bg-bg text-text px-6 md:px-24 py-28 max-w-5xl mx-auto font-body">
      {/* Hero */}
      <section className="mb-20 max-w-3xl">
        <p className="text-xs text-accent uppercase tracking-widest mb-4">Case Study</p>
        <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
          Tempo — AI Travel Planner
        </h1>
        <p className="mt-5 text-muted text-lg leading-relaxed">
          A personalized itinerary builder powered by Gemini AI and Google APIs.
        </p>
        <p className="mt-3 text-xs text-muted/60 italic">Demo available on request.</p>
      </section>

      {/* Story */}
      <section className="space-y-12 max-w-3xl">
        <CaseStudySection title="Why I Built Tempo">
          <p>
            Tempo started as a simple idea: what if travel planning was
            personalized through AI — not just by location or dates, but by
            mood, purpose, and context? I wanted users to describe their trip
            the way they'd talk to a friend, and get back a plan that felt
            uniquely theirs.
          </p>
        </CaseStudySection>

        <CaseStudySection title="From Forms to Freedom">
          <p>
            I initially built a multi-step form to collect preferences like
            destination, duration, and travel style. But I quickly realized this
            rigid input was limiting the real power of the app — natural
            language flexibility.
          </p>
          <p className="mt-3">
            I removed the onboarding constraints and replaced fixed fields with
            open-ended inputs. This shift unlocked highly personalized planning
            that reflected the actual strength of generative AI.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Taming AI Inconsistencies">
          <p>Working with the Gemini API introduced a set of challenges:</p>
          <ul className="mt-3 space-y-1.5 text-muted list-disc list-inside">
            <li>Extra text before/after the JSON output</li>
            <li>Incomplete or broken responses mid-string</li>
            <li>Inconsistent structure that broke the parser</li>
          </ul>
          <p className="mt-3">
            I first tried stripping out unwanted text but that proved
            unreliable. Eventually, I embedded a strict JSON schema into the
            prompt — which helped stabilize output and made parsing safer.
          </p>
          <p className="mt-3 text-sm text-muted italic">
            Lesson learned: even the smartest LLM needs guardrails.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Choosing the Right Speech Tool">
          <p>
            I tested both a lightweight React speech library and Google Cloud
            Speech-to-Text. While the React version was easy to integrate, its
            accuracy was limited. I chose Google's API for its precision and
            future-proofing — especially since I plan to add multilingual voice
            input and translation support later.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Designing for User Imagination">
          <p>
            One unexpected challenge was helping users realize how much power
            they had. Many typed generic prompts like "relaxing trip" — even
            though Tempo could handle things like:
          </p>
          <ul className="mt-3 space-y-1.5 text-muted list-disc list-inside">
            <li>"Leave Day 2 empty, I want to rest."</li>
            <li>"Include a candlelight dinner on Day 3 with a luxury hotel."</li>
            <li>"I'm traveling with my child, but want one solo evening."</li>
          </ul>
          <p className="mt-3">
            I added example prompts to help users see the potential of what they
            could ask, which led to more creative and personalized results.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Sharing & Access Control">
          <p>
            I added a trip sharing feature using SendGrid, allowing users to
            send itineraries via email. These are protected through private
            routes — only invited users can view or edit them.
          </p>
        </CaseStudySection>

        <CaseStudySection title="What I Learned">
          <p>
            Tempo isn't just an AI wrapper. It's a structured, human-first
            environment designed to guide, not overwhelm. It pushed me to think
            deeply about prompt design, flexible architecture, and guiding user
            behavior in open-ended systems.
          </p>
          <p className="mt-3 text-accent font-medium">
            It's my favorite kind of challenge: technical, creative, and
            empathetic.
          </p>
        </CaseStudySection>
      </section>

      {/* Feature blocks */}
      <section className="mt-24 space-y-20">
        <FeatureBlock
          title="Natural Language Input"
          img={inputimage}
          text="Users can describe their travel preferences like '3-day trip with my daughter to somewhere peaceful but not too remote'. Tempo interprets it using Gemini AI and returns a tailored itinerary."
        />
        <FeatureBlock
          title="Smart Hotel Suggestions"
          img={hotel}
          text="Using Google Places API, Tempo fetches relevant accommodations with images and links — matched to the trip type and user context."
          reverse
        />
        <FeatureBlock
          title="Modify Your Trip"
          img={modify}
          text="Change your mind? Just ask Tempo to update your trip in plain language — it's like chatting with a travel assistant."
        />
        <FeatureBlock
          title="Share & Collaborate"
          img={temposhare}
          text="Invite others to view or co-edit a trip. Great for group travel planning or sending curated recommendations to a friend."
          reverse
        />
        <FeatureBlock
          title="Full Itinerary View"
          img={tempotrip}
          text="Get a clean, scrollable day-wise breakdown of your trip with activity summaries, hotel info, and interactive maps."
        />
      </section>
    </div>
  );
}

function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-heading font-semibold text-accent">{title}</h2>
      <div className="text-muted leading-relaxed">{children}</div>
    </div>
  );
}

function FeatureBlock({
  title,
  text,
  img,
  reverse = false,
}: {
  title: string;
  text: string;
  img: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10`}
    >
      <img
        src={img}
        alt={title}
        className="w-full md:w-1/2 rounded-xl border border-border object-contain bg-surface"
      />
      <div className="flex-1 space-y-3">
        <h2 className="text-xl font-semibold font-heading text-text">{title}</h2>
        <p className="text-muted leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
