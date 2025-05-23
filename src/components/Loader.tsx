import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Exo_2 } from "next/font/google";

const fontExo = Exo_2({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-exo",
  style: "normal",
  display: "swap",
});

const Loader = ({ onFinish }: { onFinish: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 1000); // Delay before curtain                          
          return 100;
        }
        return prev + 1;
      });
    }, 20); // 2s total
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
  <motion.div
    className="fixed inset-0 flex flex-col items-center justify-center text-white z-50 bg-cover h-full w-full"
    style={{ backgroundImage: "url('/images/solid-01.jpg')" }}
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {/* Optional Dark Overlay */}
    <div className="absolute inset-0 bg-black/60 z-0" />

    {/* Foreground Content */}
    <div className="relative z-10 flex flex-col items-center">
      <p className={`${fontExo.className} mb-4 tracking-widest`}>LOADING</p>
      <div className="w-64 h-1 bg-gray-500 overflow-hidden">
        <motion.div
          className="h-full bg-black"
          animate={{ width: `${progress}%` }}
          transition={{ ease: 'easeInOut', duration: 0.2 }}
        />
      </div>
    </div>
  </motion.div>
</AnimatePresence>

  );
};

export default Loader;



