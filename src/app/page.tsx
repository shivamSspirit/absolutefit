'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import AlternatingSection from '@/components/sections/AlternatingSection';
import CTABanner from '@/components/sections/CTABanner';
import ContactForm from '@/components/sections/ContactForm';
import InstagramFeed from '@/components/sections/InstagramFeed';
import SectionHeading from '@/components/ui/SectionHeading';
import { images } from '@/lib/images';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Introduction Section - Image Left, Text Right */}
      <AlternatingSection
        title="Transform Your Body with Absolute Fitness"
        imageSrc={images.womanLifting}
        imageAlt="Woman lifting weights"
        imageOnRight={false}
        darkBackground={false}
      >
        <p>
          At Absolute Fitness, we believe in a holistic approach to health and wellness.
          Our comprehensive programs are designed to help you achieve your fitness goals,
          whether you&apos;re just starting out or looking to take your training to the next level.
        </p>
        <p>
          With our expert certified trainers, you&apos;ll receive personalized attention and
          guidance through strength training, cardio, zumba, and crossfit programs. We focus
          on proper form, progressive overload, and sustainable results that last.
        </p>
        <p>
          Your safety is our priority. Every session is carefully monitored to ensure you&apos;re
          pushing your limits while maintaining proper technique. Join us and discover what
          your body is truly capable of.
        </p>
      </AlternatingSection>

      {/* Programs Section - Text Left, Image Right */}
      <AlternatingSection
        title="Our Programs"
        imageSrc={images.crossfitTraining}
        imageAlt="CrossFit training session"
        imageOnRight={true}
        darkBackground={true}
      >
        <div className="space-y-4">
          <div>
            <h3 className="text-accent-red font-bold text-lg mb-1">Strength Training</h3>
            <p>Build power, muscle, and functional strength with our expertly designed resistance training programs.</p>
          </div>
          <div>
            <h3 className="text-accent-red font-bold text-lg mb-1">Cardio</h3>
            <p>Boost your endurance and heart health with high-energy cardio sessions that keep you motivated.</p>
          </div>
          <div>
            <h3 className="text-accent-red font-bold text-lg mb-1">Zumba</h3>
            <p>Have fun while burning calories with our dance-based fitness classes set to energetic music.</p>
          </div>
          <div>
            <h3 className="text-accent-red font-bold text-lg mb-1">CrossFit</h3>
            <p>Challenge yourself with high-intensity functional training that builds complete athletic performance.</p>
          </div>
        </div>
      </AlternatingSection>

      {/* Facility Section - Image Left, Text Right */}
      <AlternatingSection
        title="State-of-the-Art Facility"
        imageSrc={images.gymEquipment}
        imageAlt="Modern gym equipment"
        imageOnRight={false}
        darkBackground={false}
      >
        <p>
          Our facility features the latest in fitness technology and equipment. From premium
          free weights and cable machines to dedicated cardio zones and functional training areas,
          we have everything you need to achieve your goals.
        </p>
        <p>
          Spacious training areas ensure you never feel crowded, while dedicated zones for each
          program type allow you to focus on your workout without distractions. Our clean,
          well-maintained environment makes every session enjoyable.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          Open 7 days a week • Air-conditioned • Locker rooms • Free parking
        </p>
      </AlternatingSection>

      {/* About Preview Section */}
      <section className="py-10 sm:py-16 md:py-24 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center"
          >
            <div>
              <SectionHeading title="About Absolute Fitness" />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Founded with a mission to make fitness accessible and enjoyable for everyone,
                Absolute Fitness has become the go-to destination for health enthusiasts in
                the community. Our team of certified professionals is dedicated to helping you
                become the best version of yourself.
              </p>
            </div>
            <div className="text-center md:text-right">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-accent-blue text-sm sm:text-base font-semibold hover:text-accent-red transition-colors group"
              >
                Pre Consult Form
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner text="Start your fitness journey today and embark on a rewarding path to a healthier you!" />

      {/* Instagram Feed Section */}
      <InstagramFeed />

      {/* Contact Form Section */}
      <section className="py-10 sm:py-16 md:py-24 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Contact Us" align="center" />
          <p className="text-gray-600 text-sm sm:text-base text-center mb-6 sm:mb-8">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll
            respond as soon as possible.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
