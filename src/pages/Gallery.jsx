import React from 'react';
import GalleryComponent from '../components/Gallery';

function GalleryPage() {
  return (
    <>
      <header className="w-full">
        <div className="text-center justify-center relative top-24 md:relative md:top-32  space-y-5">
          <span className="text-xs sm:text-sm md:text-base lg:text-lg bg-gray-200 px-4 py-2 rounded-2xl text-gray-600">
            Gallery
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-slate-900">
            Gallery
          </h1>
        </div>
      </header>

      
        <section className="w-full min-h-screen flex justify-center items-start py-20">
              <GalleryComponent />
            </section>
    </>
  );
}

export default GalleryPage;
