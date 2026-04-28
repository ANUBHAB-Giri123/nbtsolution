import bg from "../assets/homepage.png";
import BrandBar from "./BrandBar";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />

      <div className="text-left mt-15 max-w-[1920px]">
        <h1 className="text-8xl ml-50 font-bold leading-tight text-black">
          <span className="font-light">We </span>
          Create <br />
          awesome <span className="text-gray font-medium">Stuff</span>
        </h1>
        <p className="ml-50 text-left text-gray-700 text-[24px]">
          Combination of beautiful design with amazing movement
        </p>
        <div className="ml-50 flex gap-6 mt-8">
          <button className="bg-black text-white px-8 py-3 rounded-full">
            Let&apos;s Talk
          </button>
          <button className="border border-gray-400 px-8 py-3 rounded-full text-black">
            Schedule a meeting!
          </button>
        </div>
      </div>

      {/* Fixed: removed left-64, added w-full px-10 to center it */}
      <div className="absolute -bottom-10 left-0 w-full px-10">
        <BrandBar />
      </div>
    </div>
  );
};

export default HeroSection;