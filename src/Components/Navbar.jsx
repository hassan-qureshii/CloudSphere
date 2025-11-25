import { useState } from "react";
import { Cloud, Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-screen h-[40px] md:h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg font-poppins mb-10">
      <div className="flex justify-between items-center px-2 w-full h-full">
        {/* Logo */}
        <div className="flex items-center">
          <span className="flex items-center text-blue-900 gap-2 md:text-3xl font-black sm:text-2xl uppercase">
            <Cloud className="h-10 w-10 text-blue-900 font-extrabold" />
            Cloud
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex px-20">
          <ul className="flex gap-x-10">
            <Link to="home" smooth={true} duration={700}>
              <li className="font-bold text-[12px] cursor-pointer">Home</li>
            </Link>
            <Link to="about" smooth={true} duration={700}>
              <li className="font-bold text-[12px] cursor-pointer">About</li>
            </Link>
            <Link to="support" smooth={true} duration={700}>
              <li className="font-bold text-[12px] cursor-pointer">Support</li>
            </Link>
            <Link to="platforms" smooth={true} duration={700}>
              <li className="font-bold text-[12px] cursor-pointer">Platforms</li>
            </Link>
            <Link to="pricing" smooth={true} duration={700}>
              <li className="font-bold text-[12px] cursor-pointer">Pricing</li>
            </Link>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex">
          <button className="bg-transparent rounded-[4px] py-2 px-5 mx-1 text-blue-900 hover:bg-amber-400 duration-700 ease-in-out font-bold text-[14px] cursor-pointer">
            Sign In
          </button>
          <button className="bg-blue-900 rounded-[4px] py-2 px-5 mx-4 text-amber-50 cursor-pointer">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={handleNav}>
          {nav ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className="md:hidden bg-zinc-200 px-4 py-2">
          <ul className="space-y-4">
            <li className="font-bold cursor-pointer border-b-2 border-blue-900 py-2">Home</li>
            <li className="font-bold cursor-pointer border-b-2 border-blue-900 py-2">About</li>
            <li className="font-bold cursor-pointer border-b-2 border-blue-900 py-2">Support</li>
            <li className="font-bold cursor-pointer border-b-2 border-blue-900 py-2">Platforms</li>
            <li className="font-bold cursor-pointer border-b-2 border-blue-900 py-2">Pricing</li>
          </ul>
          <div className="mt-6 flex flex-col gap-4">
            <button className="bg-transparent rounded-[4px] py-2 px-5 text-blue-900 font-bold text-[14px] border-1 cursor-pointer">
              Sign In
            </button>
            <button className="bg-blue-900 rounded-[4px] py-2 px-5 text-amber-50 cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;