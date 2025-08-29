import { Database, Send, Server, Upload } from "lucide-react"
import Cyber_bg from "../assets/Cyber_bg.png"

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen bg-zinc-200 flex flex-col justify-between text-center relative">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto px-4">
        
        {/* Left Side */}
        <div className="flex flex-col justify-center md:items-start w-full py-4">
          <p className="text-lg sm:text-xl md:text-2xl">Unique Sequencing & Production</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black py-3">
            Cloud Management
          </h1>
          <p className="text-base sm:text-lg md:text-2xl">This is our Tech brand.</p>
          <button className="bg-blue-900 text-white py-2 sm:py-3 px-4 sm:px-6 rounded mt-4 mx-auto sm:mx-auto md:mx-0 w-[70%] sm:w-[50%] md:w-auto">
            Get Started
          </button>
        </div>

        {/* Right Side */}
        <div className="flex justify-center items-center mt-6 md:mt-0">
          <img src={Cyber_bg} alt="cyber img" className="w-full h-auto max-w-[300px] md:max-w-[500px]" />
        </div>

        {/* Bottom Card */}
        <div className="absolute flex flex-col py-6 w-[90%] sm:w-[80%] md:min-w-[760px] bottom-[2%] left-1/2 transform -translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
          <p className="text-blue-900 font-black text-xl sm:text-2xl mb-2">Data Services</p>
          <div className="flex flex-wrap justify-center sm:justify-between px-2 sm:px-4">
            <p className="flex items-center px-3 py-2 text-slate-800 text-sm sm:text-base">
              <Upload className="h-5 sm:h-6 text-blue-900 mr-2" /> App Security
            </p>
            <p className="flex items-center px-3 py-2 text-slate-800 text-sm sm:text-base">
              <Database className="h-5 sm:h-6 text-blue-900 mr-2" /> Dashboard Design
            </p>
            <p className="flex items-center px-3 py-2 text-slate-800 text-sm sm:text-base">
              <Server className="h-5 sm:h-6 text-blue-900 mr-2" /> Cloud Data
            </p>
            <p className="flex items-center px-3 py-2 text-slate-800 text-sm sm:text-base">
              <Send className="h-5 sm:h-6 text-blue-900 mr-2" /> API
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
