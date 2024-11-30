import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../constants/colors';
import { Download } from 'lucide-react';
import splitfunction from '../utils/split-function';

const charVarients = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 }
}

const Hero: React.FC = () => {
  const handleResumeDownload = () => {
    window.open('/path/to/resume.pdf', '_blank');
  };
  const name = "Sangeetha Kanniyappan"

  const nameChar = splitfunction(name)

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
          <motion.img
            src="/api/placeholder/400/400"
            alt="Profile"
            className="rounded-full w-72 h-72 object-cover border-4"
            style={{ borderColor: COLORS.primary }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>


        {/* Text Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1 }}
        >
          <motion.h1
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: .09 }}
            className="text-4xl font-bold mb-4"
            style={{ color: COLORS.text }}
          >
            {
              nameChar.map((char) => (
                <motion.span
                  key={char}
                  transition={{ duration: 2 }}
                  variants={charVarients}
                >
                  {char}
                </motion.span>
              ))
            }
          </motion.h1>
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