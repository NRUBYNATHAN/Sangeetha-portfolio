import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../constants/colors';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  const handleResumeDownload = () => {
    // Implement resume download logic
    window.open('/path/to/resume.pdf', '_blank');
  };

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center container max-w-7xl mx-auto px-6 pt-16"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Photo Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1 }}
          className="flex justify-center"
        >
          <img
            src="/api/placeholder/400/400"
            alt="Profile"
            className="rounded-full w-72 h-72 object-cover border-4"
            style={{ borderColor: COLORS.primary }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1 }}
        >
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: COLORS.text }}
          >
            Sangeetha Kanniyappan
          </h1>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: COLORS.secondary }}
          >
            Data Analyst
          </h2>
          <p
            className="mb-6"
            style={{ color: COLORS.text }}
          >
            Transforming data into actionable insights with a blend of analytical skills and technical expertise.
          </p>

          <motion.button
            onClick={handleResumeDownload}
            whileHover={{ scale: 1.1 }}
            className="flex items-center px-6 py-2 rounded-full"
            style={{
              backgroundColor: COLORS.primary,
              color: COLORS.white
            }}
          >
            <Download className="mr-2" />
            Download Resume
          </motion.button>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;