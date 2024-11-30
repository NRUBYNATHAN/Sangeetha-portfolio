import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../constants/colors';

const Footer: React.FC = () => {

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-8"
      style={{
        backgroundColor: COLORS.background,
        color: COLORS.text
      }}
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Brand */}
          <div
            className="text-2xl font-bold mb-4 md:mb-0"
            style={{ color: COLORS.primary }}
          >
            Portfolio
          </div>

          {/* Copyright */}
          <div className="text-sm">
            © {new Date().getFullYear()} Sangeetha Kanniyappan. All Rights Reserved.
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;