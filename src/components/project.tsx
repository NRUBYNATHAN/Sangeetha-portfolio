import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { COLORS } from '../constants/colors';
import { PROJECTS } from '../constants/projects';

const Project: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto max-w-7xl px-6 py-16"
    >
      <h2
        className="text-3xl font-bold text-center mb-8"
        style={{ color: COLORS.text }}
      >
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5 }
            }}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredProject(project.name)}
            onHoverEnd={() => setHoveredProject(null)}
            className="rounded-lg overflow-hidden shadow-lg relative"
            style={{ backgroundColor: COLORS.background }}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              {hoveredProject === project.name && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center bg-white px-4 py-2 rounded-full"
                  >
                    <Github className="mr-2" color={COLORS.primary} />
                    View Project
                  </motion.a>
                </motion.div>
              )}
            </div>

            {/* Project Details */}
            <div className="p-4">
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: COLORS.text }}
              >
                {project.name}
              </h3>
              <p
                className="mb-2"
                style={{ color: COLORS.text }}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-full text-xs"
                    style={{
                      backgroundColor: COLORS.primary + '20',
                      color: COLORS.primary
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Project;