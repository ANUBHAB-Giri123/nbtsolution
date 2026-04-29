
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex justify-center px-4 pt-6 relative z-20">
      <div className="w-full max-w-7xl flex items-center justify-between px-4 md:px-6 py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md">

        {/* LOGO */}
        <div className="text-black font-bold text-lg">
          NBT <span className="text-sm font-normal">Solutions</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 items-center">
          <span className="bg-black text-white px-4 py-1 rounded-full">Home</span>
          <span>About</span>
          <span>Services</span>
          <span>Blogs</span>
        </div>

        {/* DESKTOP BUTTON */}
        <button className="hidden md:block bg-black text-white px-5 py-2 rounded-full">
          Let&apos;s Talk →
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="absolute top-[80px] w-[90%] max-w-sm bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 md:hidden">
          <span className="font-semibold">Home</span>
          <span>About</span>
          <span>Services</span>
          <span>Blogs</span>

          <button className="bg-black text-white px-5 py-2 rounded-full mt-2">
            Let&apos;s Talk →
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;