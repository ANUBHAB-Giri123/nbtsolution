export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] py-14 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight mb-6">
              NBT <span className="font-normal text-gray-500 text-lg">Solutions</span>
            </h2>

            <p className="text-gray-500 text-sm mb-2">
              Ready To Elevate Your Bussines
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Let's Get Started Now!
            </p>

            <div className="flex gap-5 text-gray-600 text-base">
              <span className="cursor-pointer hover:text-black">f</span>
              <span className="cursor-pointer hover:text-black">t</span>
              <span className="cursor-pointer hover:text-black">ig</span>
              <span className="cursor-pointer hover:text-black">in</span>
              <span className="cursor-pointer hover:text-black">yt</span>
            </div>
          </div>

          {/* Middle */}
          <div className="md:pl-10">
            <h3 className="text-base font-semibold text-gray-800 mb-5">
              Pages
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-black">Home</a></li>
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Services</a></li>
            </ul>
          </div>

          {/* Right */}
          <div className="md:pl-10">
            <h3 className="text-base font-semibold text-gray-800 mb-5">
              Contacts us
            </h3>

            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-3">
                <span>✉️</span>
                <span>office@nbt.solutions</span>
              </li>

              <li className="flex items-center gap-3">
                <span>📞</span>
                <span>0431 568 088</span>
              </li>

              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>416 Churchill Rd, Kilburn, SA 5084</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-12"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-500">

          <p className="mb-3 md:mb-0">
            Copyright © 2022 BRIX Templates
          </p>

          <p>
            All Rights Reserved |
            <a href="#" className="text-indigo-600 hover:underline ml-1">
              Terms and Conditions
            </a>
            |
            <a href="#" className="text-indigo-600 hover:underline ml-1">
              Privacy Policy
            </a>
          </p>

        </div>

      </div>
    </footer>
  );
}