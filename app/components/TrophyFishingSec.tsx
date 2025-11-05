"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/app/components-shadcn/ui/card'; 
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

import fishIcon from '@/app/assets/fishIcon.svg';
import trophyFishImg1 from '@/public/trophyFishImg1.svg';
import trophyFishImg2 from '@/public/trophyFishImg2.svg';
import trophyFishImg3 from '@/public/trophyFishImg3.svg';
import trophyFishImg4 from '@/public/trophyFishImg4.svg';
import trophyFishImg5 from '@/public/trophyFishImg5.svg';
import MobileCarousel from '@/app/components/MobileCarasoul';

const submarines = [
  {
    id: 1,
    icon: fishIcon,
    name: 'USS Virginia',
    image: trophyFishImg1,
    date: "May - July",
    description: 'The Kenai River holds the world record for King Salmon at 97 pounds! Target these massive fish during peak season.',
    specs: '30 - 50 lbs'
  },
  {
    id: 2,
    icon: fishIcon,
    name: 'Silver Salmon',
    image: trophyFishImg2,
    date: "May - July",
    description: 'Coho salmon are known for their acrobatic fights and chrome-bright appearance when fresh from the ocean.',
    specs: '30 - 50 lbs'
  },
  {
    id: 3,
    icon: fishIcon,
    name: 'Sockeye Salmon',
    image: trophyFishImg3,
    date: "May - July",
    description: 'Also known as Red Salmon, these fish are prized for their incredible taste and fighting spirit.',
    specs: '30 - 50 lbs'
  },
  {
    id: 4,
    icon: fishIcon,
    name: 'Rainbow Trout',
    image: trophyFishImg4,
    date: "May - July",
    description: 'Beautiful, hard-fighting rainbow trout that grow fat feeding on salmon eggs and flesh.',
    specs: '30 - 50 lbs'
  },
  {
    id: 5,
    icon: fishIcon,
    name: 'Dolly Varden & More',
    image: trophyFishImg5,
    date: "May - July",
    description: 'Dolly Varden char, Northern Pike, and other species add variety to your Kenai River experience.',
    specs: '30 - 50 lbs'
  }
];

// Animation variants
const containerVariant: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 }
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] } },
};

const imageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

const textVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TrophyFishingSec: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % submarines.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + submarines.length) % submarines.length);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-12" initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariant}>
          <motion.h4 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center" variants={textVariant}>
            Trophy Fishing For
          </motion.h4>
          <motion.p className="text-lg max-w-xl text-center leading-8 text-gray-700 mx-auto mt-4" variants={textVariant}>
            The Kenai River offers some of the world&apos;s best fishing for multiple species. Each season brings new opportunities for trophy catches.
          </motion.p>
        </motion.div>

        {/* Desktop View */}
        <motion.div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000" initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariant}>
          {submarines.map((sub) => (
            <motion.div key={sub.id} variants={cardVariant}>
              <Card className="group relative overflow-hidden bg-[#fff8ea] backdrop-blur-sm border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <motion.div className="relative h-64 overflow-hidden" variants={imageVariant}>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                  <Image
                    height={500}
                    width={500}
                    src={sub.image}
                    alt={sub.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#f96c31] backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white z-20">
                    Trophy Size {sub.id}
                  </div>
                </motion.div>
                <CardContent className="p-6 space-y-4">
                  <motion.div className="flex items-center gap-x-3" variants={textVariant}>
                    <Image alt='iconImg' src={sub.icon} height={20} width={20} />
                    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">{sub.name}</h3>
                  </motion.div>
                  <motion.h5 variants={textVariant}>{sub.date}</motion.h5>
                  <motion.p className="text-gray-600 text-sm leading-relaxed" variants={textVariant}>{sub.description}</motion.p>
                  <motion.div className="pt-4 flex justify-between items-center" variants={textVariant}>
                    <h5 className="text-sm font-semibold">Specifications</h5>
                    <p className="text-sm">{sub.specs}</p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View */}
        <MobileCarousel submarines={submarines} />
        
      </div>
    </div>
  );
};

export default TrophyFishingSec;
