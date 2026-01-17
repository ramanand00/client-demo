// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaChevronDown, FaUserGraduate } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  
  // Color Palette
  const colors = {
    navy: '#1A2B56',
    gold: '#F9E11E',
    white: '#FFFFFF',
    bronze: '#C2933C',
    brown: '#3D2616'
  }
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { 
      path: '/academics', 
      label: 'Academics',
      submenu: [
        { path: '/academics#courses', label: 'Courses' },
        { path: '/academics#schedule', label: 'Schedule' },
        { path: '/academics#materials', label: 'Study Materials' },
        { path: '/academics#strategy', label: 'Exam Strategy' }
      ]
    },
    { path: '/news-events', label: 'News & Events' },
    { path: '/notices', label: 'Notices' },
    { path: '/career', label: 'Career' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar with Animated Gradient */}
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.brown} 100%)` 
        }}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F9E11E' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative z-10 py-2 px-4">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="tel:981-9302784" 
                className="flex items-center hover:text-gold transition-colors group"
                style={{ color: colors.gold }}
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="mr-2"
                >
                  <FaPhoneAlt />
                </motion.div>
                <span className="group-hover:underline">981-9302784</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="mailto:slin.biratnagar@gmail.com" 
                className="flex items-center hover:text-gold transition-colors group"
                style={{ color: colors.gold }}
              >
                <motion.div 
                  whileHover={{ y: -2 }}
                  className="mr-2"
                >
                  <FaEnvelope />
                </motion.div>
                <span className="group-hover:underline">slin.biratnagar@gmail.com</span>
              </motion.a>
            </div>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <a href="https://instagram.com/successloksewabiratnagar2080" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-gold transition-colors transform hover:-translate-y-0.5"
                 style={{ color: colors.white }}>
                Instagram
              </a>
              <a href="https://tiktok.com/@successloksewainstitute" target="_blank" rel="noopener noreferrer"
                 className="hover:text-gold transition-colors transform hover:-translate-y-0.5"
                 style={{ color: colors.white }}>
                TikTok
              </a>
              <a href="https://youtube.com/@successloksewa" target="_blank" rel="noopener noreferrer"
                 className="hover:text-gold transition-colors transform hover:-translate-y-0.5"
                 style={{ color: colors.white }}>
                YouTube
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar with Glassmorphism Effect */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-xl'
            : 'bg-white'
        }`}
        style={{
          borderBottom: `2px solid ${colors.gold}20`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Animated Logo */}
            <Link to="/" className="flex items-center group">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative mr-3"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                     style={{ backgroundColor: colors.navy }}>
                  <FaUserGraduate className="text-xl" style={{ color: colors.gold }} />
                </div>
                <div className="absolute -inset-2 rounded-full border-2 animate-pulse"
                     style={{ borderColor: colors.gold }}></div>
              </motion.div>
              <div>
                <motion.h1 
                  whileHover={{ x: 5 }}
                  className="text-xl font-bold tracking-tight"
                  style={{ color: colors.navy }}
                >
                  Success Loksewa Institute
                </motion.h1>
                <p className="text-xs tracking-wide opacity-75"
                   style={{ color: colors.brown }}>
                  Biratnagar, Nepal
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.div 
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.3 }}
                  className="relative group"
                >
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center relative overflow-hidden group ${
                      isActive(link.path)
                        ? 'font-bold'
                        : 'font-medium hover:font-bold'
                    }`}
                    style={{
                      color: isActive(link.path) ? colors.navy : colors.brown
                    }}
                  >
                    {/* Animated background on hover */}
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <span className="relative z-10">{link.label}</span>
                    {link.submenu && (
                      <motion.div
                        animate={{ rotate: isActive(link.path) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown className="ml-1 text-xs" />
                      </motion.div>
                    )}
                    
                    {/* Active indicator */}
                    {isActive(link.path) && (
                      <motion.div 
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full"
                        style={{ backgroundColor: colors.gold }}
                        layoutId="activeIndicator"
                      />
                    )}
                  </Link>
                  
                  {/* Submenu */}
                  {link.submenu && (
                    <div className="absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm shadow-2xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border"
                         style={{ borderColor: colors.gold + '20' }}>
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-4 py-2 text-sm transition-all duration-300 group/item hover:pl-6"
                          style={{ 
                            color: colors.brown,
                            borderLeft: `2px solid transparent`
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderLeftColor = colors.gold
                            e.currentTarget.style.backgroundColor = colors.gold + '10'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderLeftColor = 'transparent'
                            e.currentTarget.style.backgroundColor = 'transparent'
                          }}
                        >
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center"
                          >
                            <span className="w-2 h-2 rounded-full bg-gold/30 mr-2 group-hover/item:bg-gold"></span>
                            {sub.label}
                          </motion.span>
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              
              {/* Enroll Now Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact" 
                  className="ml-4 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.gold} 0%, ${colors.bronze} 100%)`,
                    color: colors.navy
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Enroll Now</span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg relative"
              style={{ color: colors.navy }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <FaTimes size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <FaBars size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Pulsing effect */}
              {!isOpen && (
                <motion.div 
                  className="absolute inset-0 rounded-lg border-2"
                  style={{ borderColor: colors.gold }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2 
                  }}
                />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-4 border-t"
                     style={{ borderColor: colors.gold + '20' }}>
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => link.submenu ? null : setIsOpen(false)}
                        className={`block px-4 py-3 rounded-lg mb-1 transition-all duration-300 relative overflow-hidden group ${
                          isActive(link.path)
                            ? 'font-bold'
                            : 'font-medium hover:font-bold'
                        }`}
                        style={{
                          color: isActive(link.path) ? colors.navy : colors.brown,
                          backgroundColor: isActive(link.path) ? colors.gold + '20' : 'transparent'
                        }}
                      >
                        {/* Animated background */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                        
                        <div className="flex justify-between items-center relative z-10">
                          {link.label}
                          {link.submenu && (
                            <motion.div
                              animate={{ rotate: isActive(link.path) ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <FaChevronDown />
                            </motion.div>
                          )}
                        </div>
                        
                        {/* Active indicator */}
                        {isActive(link.path) && (
                          <motion.div 
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 rounded-full"
                            style={{ backgroundColor: colors.gold }}
                            layoutId="mobileActiveIndicator"
                          />
                        )}
                      </Link>
                      
                      {/* Mobile Submenu */}
                      {link.submenu && (
                        <motion.div 
                          className="ml-4 border-l-2 pl-2"
                          style={{ borderColor: colors.gold + '30' }}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ delay: 0.1 }}
                        >
                          {link.submenu.map((sub, subIndex) => (
                            <motion.div
                              key={sub.path}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.05 + 0.15 }}
                            >
                              <Link
                                to={sub.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-sm transition-all duration-300 hover:pl-6"
                                style={{ 
                                  color: colors.brown + '90',
                                  borderLeft: `2px solid transparent`
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.borderLeftColor = colors.gold
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.borderLeftColor = 'transparent'
                                }}
                              >
                                <span className="flex items-center">
                                  <span className="w-1.5 h-1.5 rounded-full bg-gold/30 mr-2"></span>
                                  {sub.label}
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                  
                  {/* Mobile Enroll Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4"
                  >
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="block w-full px-6 py-3 rounded-xl font-bold text-center transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                      style={{ 
                        background: `linear-gradient(135deg, ${colors.gold} 0%, ${colors.bronze} 100%)`,
                        color: colors.navy
                      }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10">Enroll Now</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar