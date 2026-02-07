'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().optional(),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  darkBackground?: boolean;
  className?: string;
}

export default function ContactForm({ darkBackground = false, className = '' }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate success
    console.log('Form data:', data);
    setStatus('success');
    reset();

    // Reset status after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  const inputClasses = `w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base rounded-md border transition-all duration-300 font-normal
    ${darkBackground
      ? 'bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent-blue focus:bg-white/15'
      : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20'
    }
    focus:outline-none`;

  const labelClasses = `block text-sm sm:text-base font-medium mb-2 ${darkBackground ? 'text-gray-200' : 'text-gray-800'}`;
  const errorClasses = 'text-accent-red text-xs sm:text-sm mt-1.5 font-medium';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className={labelClasses}>
              First Name <span className="text-accent-red">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="John"
              className={inputClasses}
              {...register('firstName')}
            />
            {errors.firstName && (
              <p className={errorClasses}>{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className={labelClasses}>
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Doe"
              className={inputClasses}
              {...register('lastName')}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span className="text-accent-red">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            className={inputClasses}
            {...register('email')}
          />
          {errors.email && (
            <p className={errorClasses}>{errors.email.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClasses}>
            Message <span className="text-accent-red">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="How can we help you?"
            className={`${inputClasses} resize-none`}
            {...register('message')}
          />
          {errors.message && (
            <p className={errorClasses}>{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          fullWidth
          size="lg"
          disabled={status === 'loading' || status === 'success'}
          className="flex items-center justify-center gap-2"
        >
          {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
          {status === 'success' && <CheckCircle className="w-5 h-5" />}
          {status === 'error' && <AlertCircle className="w-5 h-5" />}
          {status === 'loading'
            ? 'Sending...'
            : status === 'success'
            ? 'Message Sent!'
            : status === 'error'
            ? 'Try Again'
            : 'Send Message'}
        </Button>
      </form>
    </motion.div>
  );
}
