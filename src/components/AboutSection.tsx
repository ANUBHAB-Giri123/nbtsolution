
import aboutBg from "../assets/About.png";

const About = () => {
  return (
    <div
      style={{ backgroundImage: `url(${aboutBg})` }}
      className="bg-cover bg-center w-full min-h-screen flex items-center justify-center px-4 py-16"
    >
      <div className="w-full max-w-4xl text-center">

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
          <span>NBT Solutions empowers </span>
          <span className="text-gray-600">
            businesses with digital marketing, web development, content creation,
            helping brands stand out and succeed.
          </span>
        </h1>

        {/* Optional Button */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <button className="border border-gray-400 px-5 md:px-8 py-2 md:py-3 rounded-full text-black text-sm md:text-base">
            Tailored Solution For Every Project
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;