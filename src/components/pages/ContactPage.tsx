import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { DEVELOPER_INFO } from '../../data/portfolioData';
import { Mail, MapPin, Send, Github, Linkedin, FileDown, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface ContactPageProps {
  side: 'left' | 'right';
}

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export const ContactPage: React.FC<ContactPageProps> = ({ side }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setSubmitting(true);
    // Simulate network submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  const pageNum = side === 'left' ? 'Pg. 14' : 'Pg. 15';

  if (side === 'left') {
    return (
      <div className="h-full flex flex-col justify-between p-6 lg:p-8 text-zinc-100">
        <div>
          <div className="text-[10px] font-sans uppercase tracking-[0.3em] text-indigo-400 font-bold mb-1">
            Chapter VI — {pageNum}
          </div>
          <h2 className="text-2xl lg:text-3xl font-sans-luxury font-bold text-zinc-100 mb-4 border-b border-zinc-700/20 pb-2 flex items-center justify-between">
            <span>GET IN TOUCH</span>
            <Mail className="w-6 h-6 text-indigo-400/40" />
          </h2>

          <p className="font-reading text-zinc-200 text-sm leading-relaxed mb-5">
            Whether you are looking to collaborate on an ambitious full-stack project, discuss cloud infrastructure, or explore engineering roles, my inbox is always open.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center space-x-3 p-3 bg-zinc-800/50 rounded-xl border border-indigo-500/20">
              <div className="p-2 rounded-lg bg-zinc-800 text-zinc-100">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-sans uppercase text-zinc-400 block">Direct Email</span>
                <a href={`mailto:${DEVELOPER_INFO.email}`} className="font-sans font-bold text-xs text-zinc-100 hover:underline">
                  {DEVELOPER_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-zinc-800/50 rounded-xl border border-indigo-500/20">
              <div className="p-2 rounded-lg bg-zinc-800 text-zinc-100">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-sans uppercase text-zinc-400 block">Primary Location</span>
                <span className="font-sans font-bold text-xs text-zinc-100">
                  {DEVELOPER_INFO.location}
                </span>
              </div>
            </div>
          </div>

          {/* Social Links & Download CV */}
          <div className="space-y-2">
            <span className="text-[10px] font-sans uppercase font-bold text-indigo-300 tracking-wider block">
              Profiles & Resume:
            </span>
            <div className="flex items-center space-x-2">
              <a
                href={DEVELOPER_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-lg bg-zinc-950 hover:bg-black text-zinc-100 text-xs font-sans font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all shadow"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={DEVELOPER_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-900 text-zinc-100 text-xs font-sans font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all shadow"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

            <a
              href={DEVELOPER_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-indigo-700 to-indigo-900 hover:from-indigo-600 hover:to-indigo-800 text-zinc-100 text-xs font-sans font-bold uppercase tracking-widest flex items-center justify-center space-x-2 transition-all shadow-md mt-2"
            >
              <FileDown className="w-4 h-4 text-sky-400" />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>
        </div>

        <div className="pt-3 border-t border-zinc-700/20 flex items-center justify-between text-[11px] text-zinc-400 font-sans italic">
          <span>Open for Opportunities</span>
          <span className="font-bold text-indigo-300">Page 14</span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col justify-between p-6 lg:p-8 text-zinc-100">
      <div>
        <div className="text-[10px] font-sans uppercase tracking-[0.3em] text-indigo-400 font-bold mb-1">
          Chapter VI — {pageNum}
        </div>
        <h2 className="text-xl lg:text-2xl font-sans-luxury font-bold text-zinc-100 mb-3 border-b border-zinc-700/20 pb-2">
          SEND A MESSAGE
        </h2>

        {isSubmitted ? (
          <div className="p-6 bg-zinc-800/80 rounded-2xl border-2 border-indigo-500/30 text-center space-y-3 animate-fadeIn my-6">
            <div className="w-12 h-12 bg-zinc-800 text-sky-300 rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-sans font-bold text-lg text-zinc-100">
              Message Dispatched!
            </h3>
            <p className="font-reading text-xs text-zinc-200 leading-relaxed">
              Thank you for reaching out. Your inquiry has been received and Didier will respond promptly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-4 py-1.5 rounded-lg bg-zinc-800 text-zinc-100 text-xs font-sans uppercase tracking-wider"
            >
              Send Another Note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2.5">
            {/* Name */}
            <div>
              <label className="block text-[10px] font-sans uppercase font-bold text-zinc-100 mb-0.5">
                Your Full Name
              </label>
              <input
                {...register('name')}
                placeholder="e.g. Eleanor Vance"
                className="w-full px-3 py-1.5 rounded-lg bg-zinc-800/50 border border-indigo-500/30 text-zinc-100 text-xs focus:outline-none focus:border-indigo-500 focus:bg-zinc-800/90 font-sans"
              />
              {errors.name && (
                <p className="text-[10px] text-red-700 flex items-center space-x-1 mt-0.5">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.name.message}</span>
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-[10px] font-sans uppercase font-bold text-zinc-100 mb-0.5">
                Email Address
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="e.g. eleanor@example.com"
                className="w-full px-3 py-1.5 rounded-lg bg-zinc-800/50 border border-indigo-500/30 text-zinc-100 text-xs focus:outline-none focus:border-indigo-500 focus:bg-zinc-800/90 font-sans"
              />
              {errors.email && (
                <p className="text-[10px] text-red-700 flex items-center space-x-1 mt-0.5">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.email.message}</span>
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-[10px] font-sans uppercase font-bold text-zinc-100 mb-0.5">
                Subject
              </label>
              <input
                {...register('subject')}
                placeholder="e.g. Full Stack Collaboration"
                className="w-full px-3 py-1.5 rounded-lg bg-zinc-800/50 border border-indigo-500/30 text-zinc-100 text-xs focus:outline-none focus:border-indigo-500 focus:bg-zinc-800/90 font-sans"
              />
              {errors.subject && (
                <p className="text-[10px] text-red-700 flex items-center space-x-1 mt-0.5">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.subject.message}</span>
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-[10px] font-sans uppercase font-bold text-zinc-100 mb-0.5">
                Message
              </label>
              <textarea
                {...register('message')}
                rows={3}
                placeholder="Type your message here..."
                className="w-full px-3 py-1.5 rounded-lg bg-zinc-800/50 border border-indigo-500/30 text-zinc-100 text-xs focus:outline-none focus:border-indigo-500 focus:bg-zinc-800/90 font-sans resize-none"
              />
              {errors.message && (
                <p className="text-[10px] text-red-700 flex items-center space-x-1 mt-0.5">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.message.message}</span>
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2.5 rounded-lg bg-zinc-900 hover:bg-black text-zinc-100 text-xs font-sans font-bold uppercase tracking-widest flex items-center justify-center space-x-2 transition-all shadow-lg disabled:opacity-50"
            >
              {submitting ? (
                <span>Transmitting...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 text-sky-500" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>

      <div className="pt-3 border-t border-zinc-700/20 flex items-center justify-between text-[11px] text-zinc-400 font-sans italic">
        <span>Instant Dispatch</span>
        <span className="font-bold text-indigo-300">Page 15</span>
      </div>
    </div>
  );
};
