import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function MobileHeroSection() {
  return (
    <section className="h-screen relative bg-slate-950 overflow-hidden">
      {/* Simple animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-950"
        animate={{
          background: [
            'linear-gradient(to bottom right, rgba(30, 58, 138, 0.2), rgba(88, 28, 135, 0.2), rgb(2, 6, 23))',
            'linear-gradient(to bottom right, rgba(88, 28, 135, 0.2), rgba(30, 58, 138, 0.2), rgb(2, 6, 23))',
            'linear-gradient(to bottom right, rgba(30, 58, 138, 0.2), rgba(88, 28, 135, 0.2), rgb(2, 6, 23))',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-sm">
          {/* Main headline */}
          <motion.h1
            className="text-5xl font-extrabold mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            See the whole board
            <br />
            <motion.span
              className="text-blue-400 block mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Not just the pieces.
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl text-gray-300 mb-10 leading-relaxed font-light max-w-xs mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            The breakthrough you've been waiting for. Finally here.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-blue-600 text-white px-8 py-4 rounded-lg w-full hover:bg-blue-700">
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
