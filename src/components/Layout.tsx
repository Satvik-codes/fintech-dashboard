import React from 'react';
import { Navbar } from './Navbar';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
  <div className="min-h-screen pt-32 pb-12 px-8 relative page-shell-tinted">
      {/* Premium page background: animated emerald spheres inside the darkest layer */}
      <div className="page-inner-premium" aria-hidden="true">
        <span className="page-orb page-orb--a" />
        <span className="page-orb page-orb--b" />
        <span className="page-orb page-orb--c" />
        <span className="page-orb page-orb--d" />
        <span className="page-orb page-orb--e" />
        <span className="page-noise" />
      </div>
      <Navbar />
  <main className="max-w-[1600px] mx-auto page-container-tinted">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
};
