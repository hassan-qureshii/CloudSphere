import { Check } from "lucide-react"
const Pricing = () => {
  return (
    <div id="pricing" className="w-full my-24 font-poppins">
        <div className='absolute w-full h-[600px] bg-slate-900 mix-blend-overlay'>
        </div>

        <div className="max-w-[1024px] mx-auto py-12">
          <div className="text-center py-8 text-slate-300">
            <h2 className="text-2xl md:3xl uppercase">Pricing</h2>
            <h3 className="text-4xl md:text5xl font-black text-white py-8">The right price for your research.</h3>
            <p className="text-2xl md:text-3xl px-2">Get started with our free plan, or choose a paid plan for more advanced features.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-1 place-items-center max-w-[1024px] mx-auto"> 
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="bg-blue-300 px-4 py-2 my-20 rounded-xl uppercase font-bold">Standard</span>
            <h2 className="text-6xl font-bold mt-5 text-blue-900">$49<span className="text-2xl text-slate-500">/mo</span></h2>
            <p className="text-2xl py-8 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.</p>
            <div className="">
              <p className="flex gap-2 text-2xl py-3"><Check size={20} className="text-blue-900"/>Lorem ipsum dolor </p>
              <p className="flex gap-2 text-2xl py-3"><Check size={20} className="text-blue-900"/>Lorem ipsum dolor sit amet.</p> 
              <p className="flex gap-2 text-2xl py-3"><Check size={20} className="text-blue-900"/>Lorem ipsum dolor sit.</p> 
              <p className="flex gap-2 text-2xl py-3"><Check size={20} className="text-blue-900"/>Lorem ipsum dolor amet.</p>
              <button className="w-full h-12 bg-blue-900 text-slate-200 border-0 rounded-xl my-2 cursor-pointer hover:bg-blue-950 duration-500">Get Started</button> 
            </div>
          </div>

           <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="bg-blue-300 px-4 py-2 my-20 rounded-xl uppercase font-bold">Premium</span>
            <h2 className="text-6xl font-bold mt-5 text-blue-900">$99<span className="text-2xl text-slate-500">/mo</span></h2>
            <p className="text-2xl py-8 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.</p>
            <div className="">
              <p className="flex gap-2 text-2xl py-3"><Check size={20} className="text-blue-900"/>Lorem ipsum dolor </p>
              <p className="flex gap-2 text-2xl py-3"><Check size={20} className="text-blue-900"/>Lorem ipsum dolor sit amet.</p> 
              <p className="flex gap-2 text-2xl py-3"><Check size={20} className="text-blue-900"/>Lorem ipsum dolor sit.</p> 
              <p className="flex gap-2 text-2xl py-3"><Check size={20} className="text-blue-900"/>Lorem ipsum dolor amet.</p>
              <button className="w-full h-12 bg-blue-900 text-slate-200 border-0 rounded-xl my-2 cursor-pointer hover:bg-blue-950 duration-500">Get Started</button> 
            </div>
          </div>


        </div>
    </div>
  )
}

export default Pricing
