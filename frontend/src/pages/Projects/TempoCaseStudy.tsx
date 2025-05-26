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
      <section className="mb-16 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary">
          🌍 Tempo – A Travel Planner That Understands You
        </h1>
        <p className="mt-6 text-lg leading-relaxed">
          A personalized itinerary builder powered by Gemini AI and Google APIs.
        </p>
      </section>

      {/* Overview */}
      <section className="max-w-3xl mx-auto space-y-6">
        <p>
          Tempo began with one simple idea: everyone travels differently — even
          to the same place, on the same dates.
        </p>
        <p>
          Some people travel to relax. Others to explore. Some are with their
          kids, some on solo adventures, and others are attending weddings or
          work trips. The same city can mean totally different things depending
          on who’s going and why.
        </p>
        <p>
          This was the inspiration behind Tempo — my capstone project and first
          experience working with Large Language Models (LLMs).
        </p>
        <p>
          I wanted to create a tool that feels like a travel-savvy friend. You
          just say what you want in natural language — and Tempo does the rest.
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
