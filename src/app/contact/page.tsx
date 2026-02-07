'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, ExternalLink } from 'lucide-react';
import ContactForm from '@/components/sections/ContactForm';
import { images } from '@/lib/images';

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/Absolute+Fit/@26.8104979,75.8046623,17z/data=!3m1!4b1!4m6!3m5!1s0x396dc91025ccafdb:0x3dade9105eeb886!8m2!3d26.8104979!4d75.8072372!16s%2Fg%2F11kgg2pf6z';
const GOOGLE_MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.8799!2d75.8046623!3d26.8104979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc91025ccafdb%3A0x3dade9105eeb886!2sAbsolute%20Fit!5e0!3m2!1sen!2sin!4v1707300000000!5m2!1sen!2sin';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@absolutefitness.com',
    href: 'mailto:info@absolutefitness.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98XXX XXXXX',
    href: 'tel:+919800000000',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '60/3, Sheopur Rd, Sanganer, Pratap Nagar, Jaipur, Rajasthan 302029',
    href: GOOGLE_MAPS_URL,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Info Block */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20 bg-navy-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
              Ready to start your fitness journey? Have questions about our programs?
              We&apos;d love to hear from you. Reach out through any of the channels below.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {contactInfo.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="bg-navy-secondary p-6 rounded-lg hover:bg-navy-accent transition-colors duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-red/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-red/30 transition-colors">
                    <item.icon className="w-5 h-5 text-accent-red" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-semibold mb-1">{item.label}</h3>
                      {item.external && (
                        <ExternalLink className="w-3 h-3 text-gray-500" />
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{item.value}</p>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[280px] sm:h-[350px] lg:h-full min-h-[280px] lg:min-h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src={images.contactImage}
                alt="Gym workout session"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-body-text mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              <ContactForm className="flex-1" />

              {/* Instagram Link */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">Follow Us</p>
                <Link
                  href="https://instagram.com/absolutefit_jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base font-medium group-hover:text-accent-red transition-colors">
                    @absolutefit_jaipur
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="relative">
        {/* Map Embed */}
        <div className="h-[300px] sm:h-[400px] md:h-[500px] w-full">
          <iframe
            src={GOOGLE_MAPS_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Absolute Fitness Location"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Overlay Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-4 sm:bottom-8 left-3 right-3 sm:left-4 sm:right-4 md:left-8 md:right-auto md:max-w-md"
        >
          <div className="bg-navy-dark p-4 sm:p-6 rounded-lg shadow-2xl">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent-red flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-base sm:text-lg mb-1">Visit Us</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                  60/3, Sheopur Rd, Sanganer,<br />
                  Pratap Nagar, Jaipur,<br />
                  Rajasthan 302029
                </p>
                <Link
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-red hover:text-white transition-colors font-semibold text-xs sm:text-sm"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
