const About = () => {
  return (
    <div id="about" className='w-full my-32'>
     <div className='max-w-[1024px] mx-auto'>
       <div className='text-center'>
         <h2 className='text-3xl md:text-5xl font-bold'>Trusted by Developers across the world</h2>
         <p className='text-2xl md:text-3xl py-6 text-gray-600'>To provide top-notch cloud management solutions that empower businesses.</p>
       </div>

       <div className='grid md:grid-cols-3 gap-4 px-2 text-center'>
         <div className='py-10 rounded-xl shadow-xl'>
           <p className='text-blue-900 text-6xl font-black text-center'>100%</p>
           <p className='text-gray-400 mt-2'>Completion</p>
         </div>
          <div className='py-10 rounded-xl shadow-xl'>
           <p className='text-blue-900 text-6xl font-black text-center'>24/7</p>
           <p className='text-gray-400 mt-2'>Delivery</p>
         </div>
          <div className='py-10 rounded-xl shadow-xl'>
           <p className='text-blue-900 text-6xl font-black text-center'>100K</p>
           <p className='text-gray-400 mt-2'>Transactions</p>
         </div>
       </div>
     </div>
    </div>
  )
}

export default About
