
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] py-12 px-4 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-extrabold mb-4">
              NBT <span className="text-gray-500 text-lg font-normal">Solutions</span>
            </h2>

            <p className="text-gray-500 text-sm">
              Ready To Elevate Your Business
            </p>
            <p className="text-gray-500 text-sm mb-5">
              Let's Get Started Now!
            </p>

            {/* SOCIAL */}
            <div className="flex justify-center md:justify-start gap-4 text-gray-600 text-lg">
              <FaFacebookF className="cursor-pointer hover:text-black transition" />
              <FaTwitter className="cursor-pointer hover:text-black transition" />
              <FaInstagram className="cursor-pointer hover:text-black transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-black transition" />
              <FaYoutube className="cursor-pointer hover:text-black transition" />
            </div>
          </div>

          {/* MIDDLE */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4">
              Pages
            </h3>

            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Home</a></li>
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Services</a></li>
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4">
              Contact Us
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <MdEmail />
                <span>office@nbt.solutions</span>
              </li>

              <li className="flex items-center justify-center md:justify-start gap-2">
                <FiPhone />
                <span>0431 568 088</span>
              </li>

              <li className="flex items-start justify-center md:justify-start gap-2">
                <MdLocationOn />
                <span>416 Churchill Rd, Kilburn, SA 5084</span>
              </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-300 mt-10"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mt-6 text-sm text-gray-500 text-center md:text-left">

          <p>
            © 2026 NBT Solutions. All rights reserved.
          </p>

          <p>
            <a href="#" className="text-indigo-600 hover:underline">Terms</a>
            {" | "}
            <a href="#" className="text-indigo-600 hover:underline">Privacy</a>
          </p>

        </div>

      </div>
    </footer>
  );
}