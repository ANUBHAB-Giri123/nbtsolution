

import aboutBg from "../assets/About.png";

const About = () => {
  return (
    <div
  style={{ backgroundImage: `url(${aboutBg})` }}
  className="bg-cover bg-center w-full min-h-screen flex flex-col items-center justify-center"
>
  <div className="max-w-[900px] text-center px-4">
    <h1 className="text-5xl md:text-7xl font-bold leading-tight text-black">
      <span>NBT Solutions empowers </span>
      <span className="text-gray-600">
        businesses with digital marketing, web development, content creation, helping brands stand out and succeed.
      </span>
    </h1>
  </div>

  {/* <div className="mt-10 flex justify-center">
    <button className="border border-gray-400 px-8 py-3 rounded-full text-black">
      Tailored Solution For Every Project
    </button>
  </div> */}
</div>
    
  );
};

export default About;
