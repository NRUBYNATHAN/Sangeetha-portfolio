import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../constants/colors';

// Define skills data
const SKILLS = [
  { name: 'Python', icon: '/path/to/python-icon.png' },
  { name: 'SQL', icon: '/path/to/sql-icon.png' },
  { name: 'Pandas', icon: '/path/to/pandas-icon.png' },
  { name: 'Matplotlib', icon: '/path/to/matplotlib-icon.png' },
  { name: 'Excel', icon: '/path/to/excel-icon.png' },
  { name: 'PowerBI', icon: '/path/to/powerbi-icon.png' }
];

const Skills: React.FC = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="container max-w-7xl mx-auto px-6 py-16"
    >
      <h2
        className="text-3xl font-bold text-center mb-8"
        style={{ color: COLORS.text }}
      >
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.1 }
            }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center p-4 rounded-lg shadow-md"
            style={{
              backgroundColor: COLORS.background,
              borderColor: COLORS.primary
            }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 mb-4"
            />
            <p
              className="text-center font-semibold"
              style={{ color: COLORS.text }}
            >
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;