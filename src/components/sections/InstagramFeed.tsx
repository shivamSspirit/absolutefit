'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { images } from '@/lib/images';

const instagramPosts = [
  { id: 1, image: images.instagram1, likes: '2.4k' },
  { id: 2, image: images.instagram2, likes: '1.8k' },
  { id: 3, image: images.instagram3, likes: '3.1k' },
  { id: 4, image: images.instagram4, likes: '2.9k' },
  { id: 5, image: images.instagram5, likes: '1.5k' },
  { id: 6, image: images.instagram6, likes: '2.2k' },
];

export default function InstagramFeed() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-navy-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-white text-base sm:text-lg font-semibold">@absolutefit_jaipur</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Follow Our Journey
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto px-2">
            Join our community of fitness enthusiasts. Get daily motivation, workout tips, and transformation stories.
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href="https://instagram.com/absolutefit_jaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square block overflow-hidden rounded-lg"
              >
                <Image
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Instagram className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">{post.likes} likes</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 sm:mt-10"
        >
          <Link
            href="https://instagram.com/absolutefit_jaipur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white text-sm sm:text-base font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            Follow Us on Instagram
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
