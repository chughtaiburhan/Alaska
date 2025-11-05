"use client";

import React, { useState } from "react";
import { Card, CardContent } from '@/app/components-shadcn/ui/card';
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Submarine {
  id: number;
  icon: string;
  name: string;
  image: string;
  date: string;
  description: string;
  specs: string;
}

interface MobileCarouselProps {
  submarines: Submarine[];
}

const MobileCarousel: React.FC<MobileCarouselProps> = ({ submarines }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % submarines.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + submarines.length) % submarines.length);
  };

  return (
    <div className="md:hidden relative overflow-hidden">
      <div className="relative w-full h-96">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Card className="overflow-hidden bg-[#fff8ea] backdrop-blur-sm border-blue-500/30 h-full z-0">
              <div className="relative h-56">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                <Image
                  src={submarines[currentIndex].image}
                  alt={submarines[currentIndex].name}
                  height={500}
                  width={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#f96c31] backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white z-20">
                  Trophy Size {submarines[currentIndex].id}
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-x-3">
                  <Image alt="iconImg" src={submarines[currentIndex].icon} height={20} width={20} />
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">{submarines[currentIndex].name}</h3>
                </div>
                <h5>{submarines[currentIndex].date}</h5>
                <p className="text-gray-600 text-sm leading-relaxed">{submarines[currentIndex].description}</p>
                <div className="pt-4 flex justify-between items-center">
                  <h5 className="text-sm font-semibold">Specifications</h5>
                  <p className="text-sm">{submarines[currentIndex].specs}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence> 
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#f96c31]/80 text-white p-2 rounded-full shadow-md hover:bg-[#f96c31] hover:scale-105 transition-all duration-300 z-10 flex items-center justify-center"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#f96c31]/80 text-white p-2 rounded-full shadow-md hover:bg-[#f96c31] hover:scale-105 transition-all duration-300 z-10 flex items-center justify-center"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default MobileCarousel;
