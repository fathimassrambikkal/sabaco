import { section } from 'framer-motion/client'
import React from 'react'
import garden1 from '../assets/land4.avif';
import garden2 from '../assets/residential.jpg';
import garden3 from '../assets/why.avif';
import garden4 from '../assets/land.avif';
import garden5 from '../assets/land1.webp';
import garden6 from '../assets/land3.webp';
import garden7 from '../assets/house.avif';
import garden8 from '../assets/land7.avif';
import garden9 from '../assets/irrigation2.webp';
import garden10 from '../assets/land5.webp';
import garden11 from '../assets/land6.webp';
import garden12 from '../assets/garden1.webp';
import garden13 from '../assets/land8.avif';
import garden14 from '../assets/villa.jpg';

function Gallery() {
  return (
    <section className='w-full min-h-screen'>
      <h1 className=' text-2xl md:text-5xl text-slate-900 text-center mt-5 md:mt-20 mb-10 '>Our Landscape Projects <br /> in Dubai and  UAE</h1>
      
    <main className="p-6">

    <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
      <img src={garden1} className="w-full rounded-xl" alt="gallery" />
      <img src={garden12} className="w-full rounded-xl" alt="gallery" />
      <img src={garden3} className="w-full rounded-xl" alt="gallery" />
      <img src={garden4} className="w-full rounded-xl" alt="gallery" />
      <img src={garden5} className="w-full rounded-xl" alt="gallery" />
      <img src={garden6} className="w-full rounded-xl" alt="gallery" />
      <img src={garden7} className="w-full rounded-xl" alt="gallery" />
      <img src={garden8} className="w-full rounded-xl" alt="gallery" />
        <img src={garden9} className="w-full rounded-xl" alt="gallery" />
        <img src={garden10} className="w-full rounded-xl" alt="gallery" />
        <img src={garden11} className="w-full rounded-xl" alt="gallery" />
        <img src={garden2} className="w-full rounded-xl" alt="gallery" />
        <img src={garden13} className="w-full rounded-xl" alt="gallery" />
        <img src={garden14} className="w-full rounded-xl" alt="gallery" />
    </div>
  </main>
      
    </section>
  )
}

export default Gallery