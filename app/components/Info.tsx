"use client";

import Image from "next/image";
import FeatureImg from "@/public/featureImg.svg";
import Icon from "@/app/assets/icon.svg";
import { cn } from "@/app/lib/utils";
import { motion, Variants, Transition } from "framer-motion";

const listItems = [
  "Over 20 years of guiding experience on the Kenai River",
  "All equipment provided - rods, reels, tackle, and bait",
  "Small group sizes for personalized attention",
  "Fish cleaning and packaging services available",
];

// Framer Motion easing
const ease: [number, number, number, number] = [0.43, 0.13, 0.23, 0.96];
const transition: Transition = { duration: 0.6, ease };

// Animation variants
const containerVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, ...transition },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition },
};

const Info = () => {
  return (
    <>
      {/* Desktop View */}
      <motion.div
        className="hidden md:flex justify-start max-w-8xl container mx-auto p-8 my-16 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariant}
      >
        {/* Image */}
        <motion.div
          className="w-1/2 h-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <Image
            src={FeatureImg}
            alt="FeatureCard"
            width={800}
            height={800}
            className="object-cover w-full h-full rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="flex flex-col items-start justify-center gap-6"
          variants={containerVariant}
        >
          <motion.h4
            className="scroll-m-20 text-xl font-semibold tracking-tight"
            variants={itemVariant}
          >
            Why Choose Alaska Fin Chasers?
          </motion.h4>

          <motion.div className="flex flex-col gap-4" variants={containerVariant}>
            {listItems.map((text, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                variants={itemVariant}
              >
                <Image src={Icon} alt="Icon" width={20} height={20} />
                <p>{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile View */}
      <motion.div
        className="md:hidden max-w-xl my-10 w-full group/card mx-auto p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariant}
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-md shadow-xl flex flex-col justify-between p-4 h-96",
            "bg-cover bg-center",
            `bg-[url('/featureImg.svg')]`
          )}
        >
          <div className="absolute w-full h-full top-0 left-0 bg-black/50 transition duration-300"></div>
          <motion.div
            className="flex flex-col gap-4 z-10 relative text-white py-6"
            variants={containerVariant}
          >
            <motion.h4 className="text-xl font-semibold" variants={itemVariant}>
              Why Choose Alaska Fin Chasers?
            </motion.h4>

            {listItems.map((text, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                variants={itemVariant}
              >
                <Image src={Icon} alt="Icon" width={20} height={20} />
                <p className="text-white">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Info;
