"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
 
const sectionContainerVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
      delayChildren: 0.1,
    },
  },
}; 
const textRevealVariant: Variants = {
  hidden: { y: 30, opacity: 0, filter: 'blur(4px)' },
  show: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] } },
};
 
const cardSlideVariant: Variants = {
  hidden: (direction: number) => ({  
    opacity: 0,
    x: direction * 100,
    rotateY: direction * 10,
    scale: 0.9,
  }),
  show: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.7,
    },
  },
};
 
const listItemVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    tagLine: '',
    specialRequests: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your actual form submission logic here (e.g., API call)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 py-8 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionContainerVariant}
    >
      <div className="max-w-7xl mx-auto px-1">
        
        {/* Header - Text Reveal Animation */}
        <div className="text-center mb-12 px-2 overflow-hidden">
          <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" variants={textRevealVariant}>
            Contact Us & Book Online
          </motion.h1>
          <motion.p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto" variants={textRevealVariant}>
            Thank for your interest in hiring photographer Marta.
          </motion.p>
          <motion.p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto" variants={textRevealVariant}>
            Please fill out the form below and get back to you within available and timing.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Contact Info & Trip Cards */}
          {/* Use a separate motion div for the left column to control its entry */}
          <motion.div 
            className="space-y-6"
            // Use custom prop '1' to indicate sliding from the left (negative direction)
            custom={-1} 
            variants={cardSlideVariant} 
          >
            {/* Contact Info Card */}
            <motion.div 
              className="bg-[#fff8ea] rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300" 
              style={{ transform: 'perspective(1000px) rotateY(-2deg)' }} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionContainerVariant} // Re-use container variant for children stagger
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              {/* Staggered Contact Details */}
              <motion.div className="space-y-6">
                
                {/* Phone */}
                <motion.div className="flex items-start gap-4 group" variants={listItemVariant}>
                  <div className="bg-orange-100 p-3 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-3 h-3 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 text-sm">+905 5836 1924/56</p>
                    <p className="text-gray-600 text-sm">Available from Mon-Fri 12 noon/5pm.</p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div className="flex items-start gap-4 group" variants={listItemVariant}>
                  <div className="bg-orange-100 p-3 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-3 h-3 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 text-sm">info@photographermarta.com</p>
                    <p className="text-gray-600 text-sm">photographermarta@hotmail.com</p>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div className="flex items-start gap-4 group" variants={listItemVariant}>
                  <div className="bg-orange-100 p-3 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-3 h-3 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600 text-sm">Address line goes here New York</p>
                    <p className="text-gray-600 text-sm">13 Broadway</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Trip Information Card (Staggered List) */}
            <motion.div 
              className="bg-[#fff8ea] rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300"
              style={{ transform: 'perspective(1000px) rotateY(-1deg)' }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">Trip Information</h2>
              {/* Apply motion stagger container here */}
              <motion.ul 
                className="space-y-2 text-sm text-gray-600"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={sectionContainerVariant}
              >
                <motion.li className="flex items-start" variants={listItemVariant}>
                  <span className="text-orange-500 mr-2">•</span>
                  <span>I need min. 2 day 4 & 6 hour.</span>
                </motion.li>
                <motion.li className="flex items-start" variants={listItemVariant}>
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Your hotel must organize transport.</span>
                </motion.li>
                <motion.li className="flex items-start" variants={listItemVariant}>
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Advance photography fees.</span>
                </motion.li>
                <motion.li className="flex items-start" variants={listItemVariant}>
                  <span className="text-orange-500 mr-2">•</span>
                  <span>I will provide you Breakfast.</span>
                </motion.li>
                <motion.li className="flex items-start" variants={listItemVariant}>
                  <span className="text-orange-500 mr-2">•</span>
                  <span>I am working around Mumbai.</span>
                </motion.li>
                <motion.li className="flex items-start" variants={listItemVariant}>
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Price starting depends on project.</span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Booking Form */}
          {/* Use custom prop '1' to indicate sliding from the right (positive direction) */}
          <motion.div 
            className="bg-[#fff8ea] rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300"
            style={{ transform: 'perspective(1000px) rotateY(2deg)' }}
            custom={1} // Pass direction for the slide
            variants={cardSlideVariant} // Use enhanced card slide variant
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Reserve Your Trip</h2>
            <p className="text-sm text-gray-600 mb-6">
              Fill out the form below and we will get back to you for RSVP availability and timing.
            </p>

            {/* Form fields are grouped in a div for potential form-level stagger, but kept stable */}
            <div className="space-y-4">
              {/* Full Name */}
              <motion.div variants={listItemVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.marta@email.com"
                  className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-orange-300"
                />
              </motion.div>

              {/* Email (omitted for brevity, but you'd apply motion.div and variants to each field) */}
              
              {/* Special Requests or Questions */}
              <motion.div variants={listItemVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center justify-between">
                  <span>Special Requests or Questions</span>
                  <span className="text-xs text-gray-400 font-normal">Word limit {formData.specialRequests.length}/100</span>
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  maxLength={100}
                  className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-orange-300 resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold py-4 rounded-lg hover:from-orange-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={listItemVariant} // Simple reveal for the button
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                COMPLETE RESERVE
              </motion.button>

              <motion.p className="text-xs text-gray-500 text-center mt-4" variants={listItemVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
                Your message provided will not be shared by mailing list terms during dealing time.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}