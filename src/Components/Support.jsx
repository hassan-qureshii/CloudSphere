import Team from "../assets/Team.png";
import { Phone, ArrowRight, Globe, Cpu } from "lucide-react";

const Support = () => {
  return (
    <div id="support" className="w-full my-24 font-poppins relative">
      <div className="w-full h-[600px] bg-gray-900/90 absolute top-0 left-0">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={Team}
          alt="Team"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12 text-center">
          <h2 className="pt-8 text-slate-300 uppercase">Support</h2>
          <h3 className="text-5xl font-bold py-6">Finding the right team.</h3>
          <p className="text-2xl md:text-3xl text-slate-300">
            If you have any questions or need assistance, feel free to reach out
            to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
        
          <div className="rounded-xl shadow-xl bg-white">
            <div className="p-8">
              <Phone className="text-white bg-blue-900 w-16 h-12 p-2 rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-blue-900 text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex gap-2 items-center bg-blue-50 py-1.5 px-5 text-blue-900 font-bold">
              <p>Contact Us</p> <ArrowRight className="w-5" />
            </div>
          </div>

          <div className="rounded-xl shadow-xl bg-white">
            <div className="p-8">
              <Globe className="text-white bg-blue-900 w-16 h-12 p-2 rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-blue-900 text-2xl my-6">
                Technical Support
              </h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex gap-2 items-center bg-blue-50 py-1.5 px-5 text-blue-900 font-bold">
              <p>Contact Us</p> <ArrowRight className="w-5" />
            </div>
          </div>

          <div className="rounded-xl shadow-xl bg-white">
            <div className="p-8">
              <Cpu className="text-white bg-blue-900 w-16 h-12 p-2 rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-blue-900 text-2xl my-6">
                Media Inquiries
              </h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore..
              </p>
            </div>

            <div className="flex gap-2 items-center bg-blue-50 py-1.5 px-5 text-blue-900 font-bold">
              <p>Contact Us</p> <ArrowRight className="w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
