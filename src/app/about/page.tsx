'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { images } from '@/lib/images';

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center bg-navy-dark pt-20 sm:pt-24">
        <div className="absolute inset-0">
          <Image
            src={images.aboutHero}
            alt="Gym interior"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 to-navy-dark" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
          >
            About Absolute Fitness
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300"
          >
            The Complete Health & Fitness Centre
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-10 sm:py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Philosophy */}
          <motion.div {...fadeInUp} className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-body-text mb-4 sm:mb-6">Our Philosophy</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              At Absolute Fitness, we believe that fitness is not just about physical transformation—it&apos;s
              about building mental strength, discipline, and a lifestyle that supports your overall well-being.
              Our philosophy centers on the idea that everyone deserves access to quality fitness training,
              regardless of their current fitness level.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We&apos;ve created an environment where beginners feel welcomed and advanced athletes feel
              challenged. Our approach is simple: meet you where you are and help you get to where you
              want to be.
            </p>
          </motion.div>

          {/* Expert Trainers */}
          <motion.div {...fadeInUp} className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-body-text mb-4 sm:mb-6">Expert Certified Trainers</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              Our team consists of nationally certified fitness professionals with expertise in strength
              and conditioning, sports nutrition, and functional movement. Each trainer brings years of
              experience and a genuine passion for helping others achieve their goals.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We invest heavily in ongoing education and training for our staff, ensuring they stay
              current with the latest research and methodologies in fitness science. When you train
              with us, you&apos;re getting guidance from the best in the industry.
            </p>
          </motion.div>

          {/* Programs For All Levels */}
          <motion.div {...fadeInUp} className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-body-text mb-4 sm:mb-6">Programs For All Levels</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              Whether you&apos;re taking your first steps into fitness or you&apos;re a seasoned athlete
              looking for new challenges, we have programs designed for you. Our four core offerings
              cater to different preferences and goals:
            </p>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-base sm:text-lg mb-4">
              <li className="flex items-start">
                <span className="text-accent-red font-bold mr-2">•</span>
                <span><strong>Strength Training:</strong> Build muscle, increase bone density, and boost your metabolism with our structured resistance programs.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-red font-bold mr-2">•</span>
                <span><strong>Cardio:</strong> Improve your cardiovascular health and endurance with varied, engaging cardio sessions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-red font-bold mr-2">•</span>
                <span><strong>Zumba:</strong> Make fitness fun with high-energy dance workouts that don&apos;t feel like exercise.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-red font-bold mr-2">•</span>
                <span><strong>CrossFit:</strong> Challenge yourself with functional movements performed at high intensity.</span>
              </li>
            </ul>
          </motion.div>

          {/* Personalized Attention */}
          <motion.div {...fadeInUp} className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-body-text mb-4 sm:mb-6">Personalized Attention</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              We don&apos;t believe in one-size-fits-all solutions. Every member receives an initial
              assessment to understand their current fitness level, limitations, and goals. From there,
              we create a customized approach that evolves as you progress.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Our trainers maintain small group sizes to ensure everyone gets the attention they need.
              Form corrections, modifications for injuries, and progressive challenges are all part of
              our standard service—not an upsell.
            </p>
          </motion.div>

          {/* Flexible Scheduling */}
          <motion.div {...fadeInUp} className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-body-text mb-4 sm:mb-6">Flexible Scheduling</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We understand that life is busy. That&apos;s why we offer classes and training sessions
              throughout the day, from early morning to late evening. Our flexible scheduling options
              allow you to maintain consistency with your fitness routine, even with a demanding schedule.
              Weekend sessions are also available for those who prefer to focus on fitness when they have
              more time.
            </p>
          </motion.div>

          {/* Safety & Progress */}
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-bold text-body-text mb-4 sm:mb-6">Commitment to Safety & Progress</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              Your safety is paramount. Every exercise is taught with proper form as the foundation.
              We believe that sustainable progress comes from training smart, not just training hard.
              Our trainers are vigilant about preventing injuries and will always prioritize technique
              over ego lifting.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              We track your progress through regular assessments and celebrate your milestones along
              the way. Our supportive community atmosphere means you&apos;ll always have people cheering
              you on, holding you accountable, and celebrating your victories—big and small.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium">
              Join Absolute Fitness today and discover what you&apos;re truly capable of.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
