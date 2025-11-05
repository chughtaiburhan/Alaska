"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HeroProps {
  heading?: string;
  description?: string;
  button1?: { text: string; url: string };
  button2?: { text: string; url: string };
  className?: string;
}

const Hero = ({
  heading = "Alaska Fin Chasers",
  description = "Experience world-class fishing in the pristine waters of Alaska. Join us for an unforgettable adventure on the Kenai River.",
  button1 = { text: "Book Your Trip", url: "#contact" },
  button2 = { text: "Learn More", url: "#learnMore" },
  className,
}: HeroProps) => {
  // Motion variants for staggered reveal
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      className={cn(
        "relative min-h-[85vh] flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/alaskaBgImg.svg"
          alt="Alaska Fishing Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
          {/* Animated Heading */}
          <motion.h1
            className="bg-linear-to-r from-white to-white/80 bg-clip-text text-transparent font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {heading.split("").map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            className="text-balance text-lg sm:text-xl md:text-2xl text-white/90 mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } }}
          >
            {description}
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="bg-[#f96c31] text-lg" asChild>
              <a href={button1.url}>{button1.text}</a>
            </Button>
            <Button
              size="lg"
              className="bg-transparent border border-gray-400 text-lg"
              asChild
            >
              <a href={button2.url}>{button2.text}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
