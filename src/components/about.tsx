import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../constants/colors';

const About: React.FC = () => {

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="container max-w-7xl mx-auto px-6 py-16"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex justify-center"
        >
          <img
            src="/api/placeholder/400/400"
            alt="About me"
            className="rounded-lg w-full max-w-md object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: COLORS.text }}
          >
            About Me
          </h2>
          <p
            className="mb-4"
            style={{ color: COLORS.text }}
          >
            Passionate data analyst with expertise in transforming complex datasets into meaningful insights. Skilled in Python, SQL, and data visualization tools.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;