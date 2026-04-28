
const Navbar = () => {
  return (
    
<div className="w-full flex justify-center pt-[70px]">
        <div className="w-[1500px] h-[90px] flex items-center justify-between px-[40px] rounded-[60px] border border-white/30 bg-white/10 backdrop-blur-[20px]">
          
          <div className="text-black font-bold text-xl">
            NBT <span className="text-sm font-normal">Solutions</span>
          </div>

          <div className="flex gap-[32px] items-center">
            <span className="bg-black text-white px-5 py-2 rounded-full">Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Blogs</span>
          </div>

          <button className="bg-black text-white px-6 py-2 rounded-full">
            Let&apos;s Talk →
          </button>
        </div>
      </div>
  );
};

export default Navbar;