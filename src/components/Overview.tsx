import { useState } from "react";
import ball from "../assets/ball.png";

const Card = ({ dark }) => {
  return (
    <div
      className={`relative w-[280px] h-[320px] rounded-[30px] p-6 ${
        dark ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-bl-[80px]" />

      <div
        className={`absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full ${
          dark ? "bg-black text-white" : "bg-gray-300 text-black"
        } shadow-md`}
      >
        ↗
      </div>

      <div className="grid grid-cols-2 gap-2 mb-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-5 h-5 border rounded-full"></div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-2">Paid Ads</h2>

      <p className="text-sm mb-4">
        Drive targeted traffic and maximize ROI with high performance ad campaigns
      </p>

      <div className="flex flex-wrap gap-2">
        {["Facebook", "Instagram", "Tiktok", "Google Ads"].map((tag) => (
          <span
            key={tag}
            className={`px-3 py-1 text-xs rounded-full ${
              dark ? "bg-white text-black" : "bg-white"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const steps = [
  {
    title: "Consult with our team of experts",
    desc: "Begin with a strategy where our specialists understand your needs, goals, and vision.",
  },
  {
    title: "Contract agreement & upfront payment",
    desc: "We finalize scope, timelines, and pricing before starting the project.",
  },
  {
    title: "Revisions",
    desc: "We refine based on your feedback to ensure the best results.",
  },
  {
    title: "Handover & Final Refinements",
    desc: "Final delivery with all assets and last improvements.",
  },
];

export default function Overview() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* ================= BLACK SECTION ================= */}
      <div className="w-full flex justify-center py-16 bg-gray-100">
        <div className="w-[1200px] min-h-[550px] bg-black text-white rounded-[40px] px-10 py-20">

          <div className="flex justify-between items-start">
            <div className="max-w-[600px]">
              <h1 className="text-6xl font-semibold mb-6">Overview</h1>
              <p className="text-gray-400">
                At NBT Solutions, we deliver results.
              </p>
            </div>

            <div className="text-right">
              <h1 className="text-6xl font-bold">4+</h1>
              <p className="text-gray-400">Years Of Experience</p>
            </div>
          </div>

          <div className="flex gap-6 mt-10 text-gray-300">
            <span>High Experience</span>
            <span>›</span>
            <span>Solid Portfolio</span>
            <span>›</span>
            <span>Global Service</span>
            <span>›</span>
            <span>Client Satisfaction</span>
          </div>

          <div className="mt-14 bg-white text-black rounded-[30px] p-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border">
                ▶
              </div>
              <p className="font-semibold">
                Empowering Tech Innovators with <br />
                Next-Generation IT Solutions
              </p>
            </div>

            <button className="bg-black text-white px-6 py-3 rounded-full">
              Let’s Talk →
            </button>
          </div>
        </div>
      </div>

      {/* ================= WHITE SECTION ================= */}
      <div className="bg-white w-full py-20 flex flex-col items-center">
        <div className="max-w-[900px] text-center px-4">
          <h1 className="text-black leading-tight">
            <span className="block text-6xl md:text-8xl font-bold">
              Explore Our Expert
            </span>
            <span className="block text-4xl md:text-6xl text-gray-600 font-semibold mt-2">
              Design & Marketing Services
            </span>
          </h1>

          <div className="mt-10 flex justify-center">
            <button className="border border-gray-400 px-8 py-3 rounded-full">
              Tailored Solution For Every Project
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-16 flex gap-8 flex-wrap justify-center">
          <Card dark={true} />
          <Card dark={false} />
          <Card dark={false} />
        </div>
      </div>

      {/* ================= HOW WE WORK ================= */}
      <div className="w-full bg-gray-100 flex justify-center py-20">
        <div className="w-[1200px] bg-gradient-to-r from-black via-gray-800 to-gray-200 rounded-[40px] p-10 flex gap-10">

          {/* LEFT */}
          <div className="flex-1 text-white">
            <h1 className="text-6xl font-bold mb-4">HOW WE WORK</h1>
            <p className="text-gray-300 mb-10">
              Answers To Your Most Asked Questions
            </p>

            <div className="w-[500px] h-[500px] rounded-full flex items-center justify-center">
              <img
                src={ball}
                alt="ball"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex flex-col gap-4">
            {steps.map((item, index) => {
              const isActive = active === index;

              return (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className={`rounded-[25px] p-6 cursor-pointer transition ${
                    isActive
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{item.title}</h3>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full border">
                      {isActive ? "−" : "+"}
                    </div>
                  </div>

                  {isActive && (
                    <p className="text-sm mt-3 text-gray-300">
                      {item.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}