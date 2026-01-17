// src/components/Footer.jsx
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTiktok, FaYoutube, FaFacebookF, FaArrowRight, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  // Color Palette
  const colors = {
    navy: '#1A2B56',
    gold: '#F9E11E',
    white: '#FFFFFF',
    bronze: '#C2933C',
    brown: '#3D2616'
  }

  const socialLinks = [
    { icon: <FaInstagram />, href: 'https://instagram.com/successloksewabiratnagar2080', label: 'Instagram' },
    { icon: <FaTiktok />, href: 'https://tiktok.com/@successloksewainstitute', label: 'TikTok' },
    { icon: <FaYoutube />, href: 'https://youtube.com/@successloksewa', label: 'YouTube' },
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
  ]

  const quickLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/academics', label: 'Courses' },
    { path: '/news-events', label: 'News & Events' },
    { path: '/notices', label: 'Notices' },
    { path: '/career', label: 'Career Opportunities' },
    { path: '/contact', label: 'Contact Us' },
  ]

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: 'College Road, Traffic Chowk, Biratnagar, Nepal, 56613' },
    { icon: <FaPhone />, text: '981-9302784' },
    { icon: <FaEnvelope />, text: 'slin.biratnagar@gmail.com' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <footer className="relative overflow-hidden"
            style={{ 
              background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.brown} 100%)` 
            }}>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{ backgroundColor: colors.gold }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Decorative Border */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold to-transparent"></div>

      <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          
          {/* Institute Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link to="/" className="flex items-center group">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative mr-4"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                     style={{ backgroundColor: colors.gold }}>
                  <FaGraduationCap className="text-2xl" style={{ color: colors.navy }} />
                </div>
                <motion.div 
                  className="absolute -inset-3 rounded-full border-2"
                  style={{ borderColor: colors.gold + '40' }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.3, 0.5]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3 
                  }}
                />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                  Success Loksewa Institute
                </h3>
                <p className="text-sm opacity-75 mt-1" style={{ color: colors.gold }}>
                  Biratnagar, Nepal
                </p>
              </div>
            </Link>
            
            <p className="text-gray-300 leading-relaxed">
              Premier civil service preparation institute in Eastern Nepal. 
              Empowering aspirants for government sector careers with expert 
              guidance and proven methodologies since 2015.
            </p>
            
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group relative overflow-hidden"
                  style={{ 
                    backgroundColor: colors.gold + '20',
                    color: colors.gold
                  }}
                  aria-label={social.label}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-gold to-bronze"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 group-hover:text-navy">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-bold text-white relative inline-block">
              Quick Links
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold to-bronze"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </h4>
            
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  variants={itemVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="flex items-center text-gray-300 hover:text-gold transition-all duration-300 group"
                  >
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      whileInView={{ width: 12, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="mr-2 overflow-hidden"
                    >
                      <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform" 
                                   style={{ color: colors.gold }} />
                    </motion.div>
                    <span className="group-hover:underline group-hover:underline-offset-2">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-bold text-white relative inline-block">
              Contact Us
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-bronze to-gold"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </h4>
            
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start group"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="mt-1 mr-3 flex-shrink-0"
                    style={{ color: colors.gold }}
                  >
                    {info.icon}
                  </motion.div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {info.text}
                  </span>
                </motion.li>
              ))}
            </ul>
            
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-gold/10 to-bronze/10 p-4 rounded-xl border border-gold/20 mt-4"
            >
              <p className="text-sm font-semibold text-white mb-2">Office Hours</p>
              <p className="text-sm text-gray-300">
                Sun-Fri: 6:00 AM - 8:00 PM<br />
                Sat: 6:00 AM - 1:00 PM
              </p>
            </motion.div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-bold text-white relative inline-block">
              Stay Updated
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold via-bronze to-brown"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </h4>
            
            <p className="text-gray-300">
              Subscribe for latest updates on courses, exams, and important announcements
            </p>
            
            <form className="space-y-3">
              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                  style={{ backdropFilter: 'blur(10px)' }}
                />
                <motion.div 
                  className="absolute inset-0 rounded-lg border-2 pointer-events-none"
                  style={{ borderColor: colors.gold }}
                  initial={{ opacity: 0 }}
                  whileFocus={{ opacity: 0.3 }}
                />
              </motion.div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-lg font-bold transition-all duration-300 relative overflow-hidden group"
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
                <span className="relative z-10 flex items-center justify-center">
                  Subscribe
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </form>
            
            {/* Quick Contact Button */}
            <motion.a
              href="tel:981-9302784"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="block text-center px-4 py-3 rounded-lg border-2 font-semibold transition-all duration-300 hover:shadow-lg"
              style={{ 
                borderColor: colors.gold,
                color: colors.gold,
                backgroundColor: colors.gold + '10'
              }}
            >
              📞 Call Now: 981-9302784
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/10 mt-12 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; {currentYear} Success Loksewa Institute. Powered by Riseup-Tech.</p>
              <p className="mt-1">Reg. No: 123456/073-74 | PAN: 601234567</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <motion.a 
                whileHover={{ scale: 1.05, color: colors.gold }}
                className="hover:text-gold transition-colors"
                style={{ color: colors.gray }}
                href="#"
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, color: colors.gold }}
                className="hover:text-gold transition-colors"
                style={{ color: colors.gray }}
                href="#"
              >
                Terms of Service
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, color: colors.gold }}
                className="hover:text-gold transition-colors"
                style={{ color: colors.gray }}
                href="#"
              >
                Sitemap
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300"
        style={{ 
          background: `linear-gradient(135deg, ${colors.gold} 0%, ${colors.bronze} 100%)`,
          color: colors.navy
        }}
        aria-label="Back to top"
      >
        <motion.svg
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </motion.svg>
      </motion.button>
    </footer>
  )
}

export default Footer