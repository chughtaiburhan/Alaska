// Page.tsx
"use client";

import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
const Hero = dynamic(() => import('@/app/components/Hero'));
const Typo = dynamic(() => import('@/app/components/Typo'));
const FeatureSec = dynamic(() => import('@/app/components/features'));
const InfoSection = dynamic(() => import('@/app/components/Info'));
const TrophyFishingSec = dynamic(
  () => import('@/app/components/TrophyFishingSec'),
  { ssr: false }
);
const Gallery = dynamic(() => import('@/app/components/ImgGallery'));
const Contact = dynamic(() => import('@/app/components/Contact'));
const Footer = dynamic(() => import('@/app/components/FooterSec')); 

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Typo />
      <FeatureSec />
      <InfoSection />
      <TrophyFishingSec />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
