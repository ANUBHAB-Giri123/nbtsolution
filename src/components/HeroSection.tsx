// import bg from "../assets/homepage.png";
// import BrandBar from "./BrandBar";
// import Navbar from "./Navbar";

// const HeroSection = () => {
//   return (
//     <div
//       className="w-full min-h-screen bg-cover bg-center relative"
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       <Navbar />

//       <div className="text-left mt-15 max-w-[1920px]">
//         <h1 className="text-8xl ml-50 font-bold leading-tight text-black">
//           <span className="font-light">We </span>
//           Create <br />
//           awesome <span className="text-gray font-medium">Stuff</span>
//         </h1>
//         <p className="ml-50 text-left text-gray-700 text-[24px]">
//           Combination of beautiful design with amazing movement
//         </p>
//         <div className="ml-50 flex gap-6 mt-8">
//           <button className="bg-black text-white px-8 py-3 rounded-full">
//             Let&apos;s Talk
//           </button>
//           <button className="border border-gray-400 px-8 py-3 rounded-full text-black">
//             Schedule a meeting!
//           </button>
//         </div>
//       </div>

//       {/* Fixed: removed left-64, added w-full px-10 to center it */}
//       <div className="absolute -bottom-10 left-0 w-full px-10">
//         <BrandBar />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import bg from "../assets/homepage.png";
// import BrandBar from "./BrandBar";
// import Navbar from "./Navbar";

// const HeroSection = () => {
//   return (
//     <div
//       className="w-full min-h-screen bg-cover bg-center relative flex flex-col"
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       <Navbar />

//       {/* CONTENT */}
//       <div className="flex-1 flex items-center">
//         <div className="w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-20">

//           <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight text-black">
//             <span className="font-light">We </span>
//             Create <br />
//             awesome <span className="text-gray-500 font-medium">Stuff</span>
//           </h1>

//           <p className="mt-4 text-gray-700 text-sm md:text-lg max-w-xl">
//             Combination of beautiful design with amazing movement
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mt-6">
//             <button className="bg-black text-white px-6 py-3 rounded-full">
//               Let&apos;s Talk
//             </button>

//             <button className="border border-gray-400 px-6 py-3 rounded-full text-black">
//               Schedule a meeting!
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* BRAND BAR */}
//       <div className="w-full pb-6 px-4">
//         <BrandBar />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import bg from "../assets/homepage.png";
import BrandBar from "./BrandBar";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />

      {/* HERO CONTENT */}
      <div className="flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-20">

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight text-black">
            <span className="font-light">We </span>
            Create <br />
            awesome <span className="text-gray-500 font-medium">Stuff</span>
          </h1>

          <p className="mt-4 text-gray-700 text-sm md:text-lg max-w-xl">
            Combination of beautiful design with amazing movement
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="bg-black text-white px-6 py-3 rounded-full">
              Let&apos;s Talk
            </button>

            <button className="border border-gray-400 px-6 py-3 rounded-full text-black">
              Schedule a meeting!
            </button>
          </div>

        </div>
      </div>

      {/* ✅ BRAND BAR (NO ABSOLUTE → NO OVERLAP) */}
      <div className="w-full mt-10 px-4 -mb-16 relative z-10">
        <BrandBar />
      </div>
    </div>
  );
};

export default HeroSection;