"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import Icon1 from "@/app/assets/featurImg1.svg";
import Icon2 from "@/app/assets/featureImg2.svg";
import Icon3 from "@/app/assets/featureImg3.svg";

const InfoSection = () => {
  const features = [
    {
      title: "Prime Locations",
      description:
        "Access to the best fishing spots on the Kenai River, known by locals and perfected over years of guiding.",
      icon: Icon1,
    },
    {
      title: "Expert Guides",
      description:
        "Our experienced guides ensure you have the best fishing experience, sharing tips and local knowledge.",
      icon: Icon2,
    },
    {
      title: "Quality Gear",
      description:
        "We provide top-notch fishing equipment to make your trip smooth and enjoyable.",
      icon: Icon3,
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  // ✅ Correctly typed variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, rotate: 15, scale: 0.8 },
    show: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut", // ✅ string-based ease
      },
    },
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-start py-16">
      {/* Desktop / Tablet */}
      <div className="hidden md:flex flex-wrap justify-center gap-10 xl:gap-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="border border-gray-400 w-72 xl:w-80 bg-[#fff8ea] rounded-lg flex flex-col items-center justify-center p-10 space-y-3 text-center"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              alt={`${feature.title} icon`}
              height={50}
              width={50}
              src={feature.icon}
            />
            <h3 className="text-2xl font-semibold tracking-tight">
              {feature.title}
            </h3>
            <p className="leading-7">{feature.description}</p>
          </motion.div>
        ))}
      </div>
 
    {/* Mobile / Carousel */}
<div className="md:hidden overflow-hidden relative pb-10">
  <div
    className="flex flex-nowrap transition-transform duration-500 ease-in-out"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {features.map((feature, index) => (
      <motion.div
        key={index}
        className="flex-shrink-0 w-full px-2"
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="bg-[#fff8ea] rounded-lg flex flex-col items-center justify-center py-4 space-y-3 text-center shadow-lg">
          <Image
            alt={`${feature.title} icon`}
            height={50}
            width={50}
            src={feature.icon}
          />
          <h3 className="text-2xl font-semibold tracking-tight">
            {feature.title}
          </h3>
          <p className="leading-6 text-sm sm:text-base">
            {feature.description}
          </p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Dots */}
  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
    {features.map((_, index) => (
      <span
        key={index}
        className={`w-2 h-2 rounded-full ${
          currentIndex === index ? "bg-gray-800" : "bg-gray-400"
        }`}
      ></span>
    ))}
  </div>
</div>


    </div>
  );
};

export default InfoSection;
