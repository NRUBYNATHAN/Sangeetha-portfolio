import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { motion } from 'framer-motion';

import { COLORS } from '../constants/colors';
import { navItems } from '../constants/nav-items';

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1 }}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="container max-w-7xl mx-auto flex justify-between items-center p-6">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="text-2xl font-bold"
          style={{ color: COLORS.primary }}
        >
          Portfolio
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="transition-colors font-semibold"
              style={{ color: COLORS.text }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X color={COLORS.primary} /> : <Menu color={COLORS.primary} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="block p-4 text-center font-semibold hover:bg-background"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}

    </motion.nav>
  );
};

export default Navbar;