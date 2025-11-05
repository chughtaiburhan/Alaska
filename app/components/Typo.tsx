"use client";
import React from "react";
import { motion, Variants, Transition } from "framer-motion";

const Typo = () => {
  // Correctly typed motion variants
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.42, 0, 0.58, 1], // cubic-bezier equivalent to easeOut
      } as Transition,
    },
  };

  return (
    <motion.div
      className="flex items-center justify-center flex-col my-16 px-3"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight text-center first:mt-0"
        variants={item}
      >
        Experience the Kenai River
      </motion.h2>

      <motion.p
        className="text-center leading-6 max-w-xl text-gray-700 mt-4"
        variants={item}
      >
        The Kenai River is renowned worldwide for its incredible salmon runs and
        pristine rainbow trout fishing. Our expert guides will take you to the
        best spots for an unforgettable Alaskan fishing adventure.
      </motion.p>
    </motion.div>
  );
};

export default Typo;
