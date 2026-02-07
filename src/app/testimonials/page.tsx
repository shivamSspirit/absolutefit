'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Heart, Flame, Sparkles, Dumbbell, Trophy, Quote, Star } from 'lucide-react';

// Category definitions with icons and colors
const categories = [
  { id: 'all', name: 'All', icon: Trophy, color: 'bg-accent-red' },
  { id: 'cardio', name: 'Cardio', icon: Heart, color: 'bg-rose-500' },
  { id: 'zumba', name: 'Zumba Dance', icon: Sparkles, color: 'bg-pink-500' },
  { id: 'yoga', name: 'Yoga & Meditation', icon: Flame, color: 'bg-amber-500' },
  { id: 'weight', name: 'Weight Training', icon: Dumbbell, color: 'bg-blue-500' },
  { id: 'workout', name: 'Workout', icon: Trophy, color: 'bg-emerald-500' },
];

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    category: 'cardio',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop&q=80',
    quote: 'Lost 15 kgs in 4 months! The cardio sessions here are intense but the trainers make it fun. Best decision I ever made.',
    achievement: '-15 kg',
    duration: '4 months',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rahul Verma',
    category: 'weight',
    image: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=400&h=400&fit=crop&q=80',
    quote: 'Gained 12 kgs of pure muscle. The weight training program is scientific and the trainers know exactly what they are doing.',
    achievement: '+12 kg muscle',
    duration: '6 months',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ananya Patel',
    category: 'zumba',
    image: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=400&h=400&fit=crop&q=80',
    quote: 'Zumba classes are the highlight of my week! I have never enjoyed working out this much. The energy is absolutely contagious.',
    achievement: 'Lost 8 kg',
    duration: '3 months',
    rating: 5,
  },
  {
    id: 4,
    name: 'Vikram Singh',
    category: 'workout',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop&q=80',
    quote: 'State-of-the-art equipment and a motivating atmosphere. This gym has everything you need to transform yourself.',
    achievement: 'Complete transformation',
    duration: '8 months',
    rating: 5,
  },
  {
    id: 5,
    name: 'Meera Joshi',
    category: 'yoga',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&q=80',
    quote: 'The yoga and meditation sessions have changed my life. I feel more centered, flexible, and at peace than ever before.',
    achievement: 'Inner peace',
    duration: '5 months',
    rating: 5,
  },
  {
    id: 6,
    name: 'Arjun Reddy',
    category: 'weight',
    image: 'https://images.unsplash.com/photo-1596357395217-80de13130e92?w=400&h=400&fit=crop&q=80',
    quote: 'From skinny to strong. The personalized weight training plan helped me gain confidence along with muscle mass.',
    achievement: '+18 kg muscle',
    duration: '10 months',
    rating: 5,
  },
  {
    id: 7,
    name: 'Kavitha Nair',
    category: 'cardio',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&q=80',
    quote: 'The HIIT cardio sessions pushed me beyond my limits. I am fitter at 40 than I was at 25!',
    achievement: '-10 kg',
    duration: '5 months',
    rating: 5,
  },
  {
    id: 8,
    name: 'Deepak Kumar',
    category: 'workout',
    image: 'https://images.unsplash.com/photo-1534368959876-26bf04f2c947?w=400&h=400&fit=crop&q=80',
    quote: 'Clean facilities, professional trainers, and a community that supports you. Absolute Fitness lives up to its name.',
    achievement: 'Lifestyle change',
    duration: '1 year',
    rating: 5,
  },
  {
    id: 9,
    name: 'Sneha Gupta',
    category: 'zumba',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop&q=80',
    quote: 'Dance your way to fitness! The Zumba instructors are so energetic and the playlists are fire. I look forward to every session.',
    achievement: '-6 kg',
    duration: '2 months',
    rating: 5,
  },
  {
    id: 10,
    name: 'Rohan Mehta',
    category: 'yoga',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=400&fit=crop&q=80',
    quote: 'Started yoga for flexibility, stayed for the mental clarity. The instructors here truly understand the holistic approach.',
    achievement: 'Mental wellness',
    duration: '7 months',
    rating: 5,
  },
];

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTestimonials = activeCategory === 'all'
    ? testimonials
    : testimonials.filter(t => t.category === activeCategory);

  const getCategoryInfo = (categoryId: string) => {
    return categories.find(c => c.id === categoryId) || categories[0];
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center bg-navy-dark pt-20 sm:pt-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent-red/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-accent-red/5 rounded-full blur-3xl" />
        </div>

        {/* Decorative Quote Marks */}
        <div className="absolute top-20 left-4 sm:left-10 opacity-5">
          <Quote className="w-24 h-24 sm:w-40 sm:h-40 text-accent-red" strokeWidth={1} />
        </div>
        <div className="absolute bottom-10 right-4 sm:right-10 opacity-5 rotate-180">
          <Quote className="w-24 h-24 sm:w-40 sm:h-40 text-accent-red" strokeWidth={1} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-accent-red text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Real Stories, Real Results
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
              TESTIMONIALS
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Hear from our members who transformed their lives through dedication,
              hard work, and the support of our expert trainers.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-10 sm:mt-12"
          >
            {[
              { value: '500+', label: 'Happy Members' },
              { value: '95%', label: 'Success Rate' },
              { value: '4.9', label: 'Average Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-accent-red">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-navy-secondary py-6 sm:py-8 sticky top-14 sm:top-16 z-30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 sm:gap-3 pb-2 sm:pb-0 scrollbar-hide justify-start sm:justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-accent-red text-white shadow-lg shadow-accent-red/30'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {category.name}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 sm:py-16 md:py-24 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            >
              {filteredTestimonials.map((testimonial, index) => {
                const categoryInfo = getCategoryInfo(testimonial.category);
                return (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-accent-red/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent-red/5"
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-accent-red" />
                    </div>

                    {/* Category Badge */}
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold text-white mb-4 ${categoryInfo.color}`}>
                      <categoryInfo.icon className="w-3 h-3" />
                      {categoryInfo.name}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 line-clamp-4">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Achievement Badge */}
                    <div className="flex items-center gap-3 mb-5 p-3 bg-accent-red/10 rounded-lg border border-accent-red/20">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent-red/20 flex items-center justify-center">
                        <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-accent-red" />
                      </div>
                      <div>
                        <p className="text-accent-red font-bold text-sm sm:text-base">{testimonial.achievement}</p>
                        <p className="text-gray-500 text-[10px] sm:text-xs">in {testimonial.duration}</p>
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-accent-red/30">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</p>
                        <div className="flex items-center gap-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredTestimonials.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-500 text-lg">No testimonials found for this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-navy-secondary to-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-xl mx-auto">
              Join hundreds of members who have transformed their lives at Absolute Fitness.
              Your journey to a better you starts today.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent-red text-white text-sm sm:text-base font-bold uppercase tracking-wider hover:bg-accent-red/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent-red/30"
            >
              Start Your Journey
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
