

// // import { useState } from "react";
// // import ball from "../assets/ball.png";
// // import { motion } from "framer-motion";

// // /* ================= CARD ================= */
// // const Card = ({ dark }: { dark: boolean }) => {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 40 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       whileHover={{ y: -10, scale: 1.04 }}
// //       viewport={{ once: true }}
// //       transition={{ duration: 0.5 }}
// //       className={`relative w-full max-w-[280px] rounded-[30px] p-6 ${
// //         dark ? "bg-black text-white" : "bg-gray-100 text-black"
// //       }`}
// //     >
// //       <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 bg-white rounded-bl-[60px] md:rounded-bl-[80px]" />

// //       <div
// //         className={`absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full ${
// //           dark ? "bg-black text-white" : "bg-gray-300 text-black"
// //         } shadow-md`}
// //       >
// //         ↗
// //       </div>

// //       <div className="grid grid-cols-2 gap-2 mb-6">
// //         {[...Array(4)].map((_, i) => (
// //           <div key={i} className="w-4 h-4 md:w-5 md:h-5 border rounded-full"></div>
// //         ))}
// //       </div>

// //       <h2 className="text-lg md:text-xl font-semibold mb-2">Paid Ads</h2>

// //       <p className="text-xs md:text-sm mb-4">
// //         Drive targeted traffic and maximize ROI with high performance ad campaigns
// //       </p>

// //       <div className="flex flex-wrap gap-2">
// //         {["Facebook", "Instagram", "Tiktok", "Google Ads"].map((tag) => (
// //           <span
// //             key={tag}
// //             className={`px-2 md:px-3 py-1 text-xs rounded-full ${
// //               dark ? "bg-white text-black" : "bg-white"
// //             }`}
// //           >
// //             {tag}
// //           </span>
// //         ))}
// //       </div>
// //     </motion.div>
// //   );
// // };

// // /* ================= STEPS ================= */
// // const steps = [
// //   {
// //     title: "Consult with our team of experts",
// //     desc: "Begin with a strategy where our specialists understand your needs, goals, and vision.",
// //   },
// //   {
// //     title: "Contract agreement & upfront payment",
// //     desc: "We finalize scope, timelines, and pricing before starting the project.",
// //   },
// //   {
// //     title: "Revisions",
// //     desc: "We refine based on your feedback to ensure the best results.",
// //   },
// //   {
// //     title: "Handover & Final Refinements",
// //     desc: "Final delivery with all assets and last improvements.",
// //   },
// // ];

// // export default function Overview() {
// //   const [active, setActive] = useState(0);

// //   return (
// //     <>
// //       {/* ================= BLACK SECTION ================= */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 60 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.8 }}
// //         className="w-full flex justify-center py-10 md:py-16 bg-gray-100 px-4"
// //       >
// //         <div className="w-full max-w-6xl bg-black text-white rounded-[30px] md:rounded-[40px] px-6 md:px-10 py-10 md:py-20">

// //           <div className="flex flex-col md:flex-row md:justify-between gap-6">
// //             <div className="max-w-xl">
// //               <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-4">
// //                 Overview
// //               </h1>
// //               <p className="text-gray-400 text-sm md:text-base">
// //                 At NBT Solutions, we deliver results.
// //               </p>
// //             </div>

// //             <div className="md:text-right">
// //               <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">4+</h1>
// //               <p className="text-gray-400 text-sm md:text-base">
// //                 Years Of Experience
// //               </p>
// //             </div>
// //           </div>

// //           <div className="flex flex-wrap gap-2 md:gap-4 mt-6 text-gray-300 text-xs md:text-sm">
// //             <span>High Experience</span>
// //             <span>›</span>
// //             <span>Solid Portfolio</span>
// //             <span>›</span>
// //             <span>Global Service</span>
// //             <span>›</span>
// //             <span>Client Satisfaction</span>
// //           </div>

// //           <div className="mt-10 bg-white text-black rounded-[20px] md:rounded-[30px] p-4 md:p-6 flex flex-col md:flex-row justify-between items-center gap-4">
// //             <div className="flex items-center gap-3">
// //               <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border">
// //                 ▶
// //               </div>
// //               <p className="font-semibold text-sm md:text-base">
// //                 Empowering Tech Innovators with <br />
// //                 Next-Generation IT Solutions
// //               </p>
// //             </div>

// //             <button className="bg-black text-white px-5 py-2 md:px-6 md:py-3 rounded-full hover:scale-105 transition">
// //               Let’s Talk →
// //             </button>
// //           </div>
// //         </div>
// //       </motion.div>

// //       {/* ================= WHITE SECTION ================= */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 60 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.8 }}
// //         className="bg-white w-full py-16 flex flex-col items-center"
// //       >
// //         <div className="max-w-[900px] text-center px-4">
// //           <h1 className="leading-tight">
// //             <span className="block text-3xl md:text-6xl lg:text-8xl font-bold">
// //               Explore Our Expert
// //             </span>
// //             <span className="block text-xl md:text-4xl lg:text-6xl text-gray-600 font-semibold mt-2">
// //               Design & Marketing Services
// //             </span>
// //           </h1>
// //         </div>

// //         {/* STAGGER CARDS */}
// //         <motion.div
// //           className="mt-10 md:mt-16 flex flex-wrap gap-6 justify-center"
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={{
// //             hidden: {},
// //             visible: {
// //               transition: { staggerChildren: 0.2 },
// //             },
// //           }}
// //         >
// //           <Card dark={true} />
// //           <Card dark={false} />
// //           <Card dark={false} />
// //         </motion.div>
// //       </motion.div>

// //       {/* ================= HOW WE WORK ================= */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 60 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.8 }}
// //         className="w-full bg-gray-100 flex justify-center py-16 px-4"
// //       >
// //         <div className="w-full max-w-6xl bg-gradient-to-r from-black via-gray-800 to-gray-200 rounded-[30px] md:rounded-[40px] p-6 md:p-10 flex flex-col lg:flex-row gap-10">

// //           {/* LEFT */}
// //           <div className="flex-1 text-white text-center lg:text-left">
// //             <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
// //               HOW WE WORK
// //             </h1>

// //             <motion.img
// //               src={ball}
// //               alt="ball"
// //               initial={{ scale: 0.8, opacity: 0 }}
// //               whileInView={{ scale: 1, opacity: 1 }}
// //               transition={{ duration: 0.8 }}
// //               className="w-[200px] md:w-[350px] lg:w-[450px] mx-auto lg:mx-0"
// //             />
// //           </div>

// //           {/* RIGHT */}
// //           <div className="flex-1 flex flex-col gap-4">
// //             {steps.map((item, index) => {
// //               const isActive = active === index;

// //               return (
// //                 <div
// //                   key={index}
// //                   onClick={() => setActive(index)}
// //                   className={`rounded-[20px] p-4 md:p-6 cursor-pointer transition ${
// //                     isActive
// //                       ? "bg-black text-white"
// //                       : "bg-gray-200 text-black"
// //                   }`}
// //                 >
// //                   <div className="flex justify-between items-center">
// //                     <h3 className="font-semibold text-sm md:text-base">
// //                       {item.title}
// //                     </h3>
// //                     <div>{isActive ? "−" : "+"}</div>
// //                   </div>

// //                   <motion.div
// //                     initial={false}
// //                     animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
// //                     className="overflow-hidden"
// //                   >
// //                     <p className="text-xs md:text-sm mt-3 text-gray-300">
// //                       {item.desc}
// //                     </p>
// //                   </motion.div>
// //                 </div>
// //               );
// //             })}
// //           </div>

// //         </div>
// //       </motion.div>
// //     </>
// //   );
// // }

// import { motion } from "framer-motion";

// const Card = ({ dark }: { dark: boolean }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       whileHover={{ y: -10, scale: 1.04 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.4 }}
//       className={`
//         group relative w-full max-w-[280px] rounded-[30px] p-6
//         transition-all duration-300
//         ${dark ? "bg-black text-white" : "bg-gray-100 text-black"}
//         hover:bg-black hover:text-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
//       `}
//     >
//       {/* Corner Shape */}
//       <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 bg-white rounded-bl-[60px] md:rounded-bl-[80px]" />

//       {/* Arrow */}
//       <div
//         className={`
//           absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12
//           flex items-center justify-center rounded-full shadow-md
//           ${dark ? "bg-black text-white" : "bg-gray-300 text-black"}
//           group-hover:bg-white group-hover:text-black
//         `}
//       >
//         ↗
//       </div>

//       {/* Dots */}
//       <div className="grid grid-cols-2 gap-2 mb-6">
//         {[...Array(4)].map((_, i) => (
//           <div
//             key={i}
//             className="w-4 h-4 md:w-5 md:h-5 border rounded-full group-hover:border-white"
//           ></div>
//         ))}
//       </div>

//       {/* Title */}
//       <h2 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-white">
//         Paid Ads
//       </h2>

//       {/* Description */}
//       <p className="text-xs md:text-sm mb-4 group-hover:text-gray-300">
//         Drive targeted traffic and maximize ROI with high performance ad campaigns
//       </p>

//       {/* Tags */}
//       <div className="flex flex-wrap gap-2">
//         {["Facebook", "Instagram", "Tiktok", "Google Ads"].map((tag) => (
//           <span
//             key={tag}
//             className="
//               px-2 md:px-3 py-1 text-xs rounded-full
//               bg-white text-black
//               transition
//               group-hover:bg-white group-hover:text-black
//             "
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default Card;

import { useState } from "react";
import ball from "../assets/ball.png";
import { motion } from "framer-motion";

/* ================= CARD ================= */
const Card = ({ dark }: { dark: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.04 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`
        group relative w-full max-w-[280px] rounded-[30px] p-6
        transition-all duration-300
        ${dark ? "bg-black text-white" : "bg-gray-100 text-black"}
        hover:bg-black hover:text-white
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
      `}
    >
      {/* Corner Shape */}
      <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 bg-white rounded-bl-[60px] md:rounded-bl-[80px]" />

      {/* Arrow */}
      <div
        className={`
          absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12
          flex items-center justify-center rounded-full shadow-md
          ${dark ? "bg-black text-white" : "bg-gray-300 text-black"}
          group-hover:bg-white group-hover:text-black
        `}
      >
        ↗
      </div>

      {/* Dots */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 md:w-5 md:h-5 border rounded-full group-hover:border-white"
          ></div>
        ))}
      </div>

      {/* Title */}
      <h2 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-white">
        Paid Ads
      </h2>

      {/* Description */}
      <p className="text-xs md:text-sm mb-4 group-hover:text-gray-300">
        Drive targeted traffic and maximize ROI with high performance ad campaigns
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {["Facebook", "Instagram", "Tiktok", "Google Ads"].map((tag) => (
          <span
            key={tag}
            className="
              px-2 md:px-3 py-1 text-xs rounded-full
              bg-white text-black
              transition
              group-hover:bg-white group-hover:text-black
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

/* ================= STEPS ================= */
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
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full flex justify-center py-10 md:py-16 bg-gray-100 px-4"
      >
        <div className="w-full max-w-6xl bg-black text-white rounded-[30px] md:rounded-[40px] px-6 md:px-10 py-10 md:py-20">

          <div className="flex flex-col md:flex-row md:justify-between gap-6">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-4">
                Overview
              </h1>
              <p className="text-gray-400 text-sm md:text-base">
                At NBT Solutions, we deliver results.
              </p>
            </div>

            <div className="md:text-right">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">4+</h1>
              <p className="text-gray-400 text-sm md:text-base">
                Years Of Experience
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4 mt-6 text-gray-300 text-xs md:text-sm">
            <span>High Experience</span>
            <span>›</span>
            <span>Solid Portfolio</span>
            <span>›</span>
            <span>Global Service</span>
            <span>›</span>
            <span>Client Satisfaction</span>
          </div>

          <div className="mt-10 bg-white text-black rounded-[20px] md:rounded-[30px] p-4 md:p-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border">
                ▶
              </div>
              <p className="font-semibold text-sm md:text-base">
                Empowering Tech Innovators with <br />
                Next-Generation IT Solutions
              </p>
            </div>

            <button className="bg-black text-white px-5 py-2 md:px-6 md:py-3 rounded-full hover:scale-105 transition">
              Let’s Talk →
            </button>
          </div>
        </div>
      </motion.div>

      {/* ================= WHITE SECTION ================= */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white w-full py-16 flex flex-col items-center"
      >
        <div className="max-w-[900px] text-center px-4">
          <h1 className="leading-tight">
            <span className="block text-3xl md:text-6xl lg:text-8xl font-bold">
              Explore Our Expert
            </span>
            <span className="block text-xl md:text-4xl lg:text-6xl text-gray-600 font-semibold mt-2">
              Design & Marketing Services
            </span>
          </h1>
        </div>

        {/* CARDS */}
        <motion.div
          className="mt-10 md:mt-16 flex flex-wrap gap-6 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <Card dark={true} />
          <Card dark={false} />
          <Card dark={false} />
        </motion.div>
      </motion.div>

      {/* ================= HOW WE WORK ================= */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full bg-gray-100 flex justify-center py-16 px-4"
      >
        <div className="w-full max-w-6xl bg-gradient-to-r from-black via-gray-800 to-gray-200 rounded-[30px] md:rounded-[40px] p-6 md:p-10 flex flex-col lg:flex-row gap-10">

          {/* LEFT */}
          <div className="flex-1 text-white text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              HOW WE WORK
            </h1>

            <motion.img
              src={ball}
              alt="ball"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-[200px] md:w-[350px] lg:w-[450px] mx-auto lg:mx-0"
            />
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex flex-col gap-4">
            {steps.map((item, index) => {
              const isActive = active === index;

              return (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className={`rounded-[20px] p-4 md:p-6 cursor-pointer transition ${
                    isActive
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-sm md:text-base">
                      {item.title}
                    </h3>
                    <div>{isActive ? "−" : "+"}</div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs md:text-sm mt-3 text-gray-300">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </motion.div>
    </>
  );
}