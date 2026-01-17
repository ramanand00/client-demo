// src/pages/Contact.jsx
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaUser, FaGlobe } from 'react-icons/fa'
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })

  // Color Palette
  const colors = {
    navy: '#1A2B56',
    gold: '#F9E11E',
    white: '#FFFFFF',
    bronze: '#C2933C',
    brown: '#3D2616'
  }

  const heroRef = useRef(null)
  const formRef = useRef(null)
  
  const isHeroInView = useInView(heroRef, { once: true })
  const isFormInView = useInView(formRef, { once: true })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', course: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: "Address", info: "College Road, Traffic Chowk, Biratnagar, Nepal, 56613" },
    { icon: <FaPhone />, title: "Phone", info: "981-9302784" },
    { icon: <FaEnvelope />, title: "Email", info: "slin.biratnagar@gmail.com" },
    { icon: <FaClock />, title: "Office Hours", info: "Sun-Fri: 6:00 AM - 8:00 PM, Sat: 6:00 AM - 1:00 PM" },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.brown} 100%)` 
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23F9E11E' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ 
                backgroundColor: colors.gold + '20',
                color: colors.gold 
              }}
            >
              <FaPaperPlane className="mr-2" />
              Get in Touch
            </motion.span>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              Contact <span style={{ color: colors.gold }}>Us</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Have questions? We're here to help. Reach out to us for admission inquiries, course information, or any other questions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={formRef}
        className="py-20 relative"
        style={{ backgroundColor: colors.white }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold" style={{ color: colors.navy }}>
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start group"
                  >
                    <div className="p-3 rounded-xl mr-4 transition-all duration-300 group-hover:scale-110"
                         style={{ 
                           backgroundColor: colors.gold + '20',
                           color: colors.gold
                         }}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold mb-1" style={{ color: colors.navy }}>
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div className="pt-6 border-t border-gray-100">
                <h3 className="font-bold mb-4" style={{ color: colors.navy }}>
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <FaInstagram />, href: 'https://instagram.com/successloksewabiratnagar2080', label: 'Instagram' },
                    { icon: <FaTiktok />, href: 'https://tiktok.com/@successloksewainstitute', label: 'TikTok' },
                    { icon: <FaYoutube />, href: 'https://youtube.com/@successloksewa', label: 'YouTube' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group relative overflow-hidden"
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
              </div>

              {/* Quick FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-xl border"
                style={{ 
                  backgroundColor: colors.gold + '10',
                  borderColor: colors.gold + '30'
                }}
              >
                <h3 className="font-bold mb-4" style={{ color: colors.navy }}>
                  Quick Questions
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">When does the new batch start?</h4>
                    <p className="text-xs text-gray-600">New batches start every month</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Is scholarship available?</h4>
                    <p className="text-xs text-gray-600">Yes, based on merit and need</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Can I visit the institute?</h4>
                    <p className="text-xs text-gray-600">Yes, visit during office hours</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form & Map */}
            <div className="lg:col-span-2">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-100"
              >
                <h2 className="text-3xl font-bold mb-6" style={{ color: colors.navy }}>
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label className="block text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-gold transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label className="block text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-gold transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label className="block text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-gold transition-colors"
                          placeholder="98XXXXXXXX"
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                    >
                      <label className="block text-gray-700 mb-2">
                        Interested Course
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-gold transition-colors"
                      >
                        <option value="">Select a course</option>
                        <option value="foundation">Foundation Course</option>
                        <option value="advance">Advance Course</option>
                        <option value="crash">Crash Course</option>
                        <option value="interview">Interview Preparation</option>
                      </select>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label className="block text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-gold transition-colors"
                      placeholder="Your message..."
                    ></textarea>
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.gold} 0%, ${colors.bronze} 100%)`,
                      color: colors.navy
                    }}
                  >
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </motion.button>
                </form>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: colors.navy }}>
                    Find Us Here
                  </h3>
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl overflow-hidden flex items-center justify-center">
                    <div className="text-center p-8">
                      <FaMapMarkerAlt className="text-5xl mx-auto mb-4" style={{ color: colors.navy }} />
                      <p className="text-xl font-bold mb-2" style={{ color: colors.navy }}>
                        Success Loksewa Institute
                      </p>
                      <p className="text-gray-600">College Road, Traffic Chowk</p>
                      <p className="text-gray-600">Biratnagar, Nepal</p>
                      <motion.a
                        href="https://maps.google.com/?q=College+Road,+Traffic+Chowk,+Biratnagar,+Nepal"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block mt-4 px-6 py-3 rounded-xl font-semibold"
                        style={{ 
                          backgroundColor: colors.gold + '20',
                          color: colors.navy
                        }}
                      >
                        <FaGlobe className="inline-block mr-2" />
                        Open in Google Maps
                      </motion.a>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 rounded-xl border"
                         style={{ 
                           backgroundColor: colors.gold + '10',
                           borderColor: colors.gold + '30'
                         }}>
                      <h4 className="font-bold mb-2" style={{ color: colors.navy }}>
                        By Public Transport
                      </h4>
                      <p className="text-sm text-gray-600">Located near Traffic Chowk, easily accessible by buses, tempos, and taxis</p>
                    </div>
                    <div className="p-4 rounded-xl border"
                         style={{ 
                           backgroundColor: colors.gold + '10',
                           borderColor: colors.gold + '30'
                         }}>
                      <h4 className="font-bold mb-2" style={{ color: colors.navy }}>
                        Parking Available
                      </h4>
                      <p className="text-sm text-gray-600">Ample parking space for two-wheelers and four-wheelers</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-brown to-bronze"></div>
        
        {/* Floating Phone */}
        <motion.div
          className="absolute"
          style={{
            left: '50%',
            top: '30%',
            transform: 'translateX(-50%)',
            color: colors.gold,
            fontSize: '8rem',
            opacity: 0.1
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        >
          📞
        </motion.div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Need <span style={{ color: colors.gold }}>Immediate</span> Assistance?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Call us directly for urgent admission inquiries or emergency situations
            </p>
            
            <motion.a
              href="tel:981-9302784"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-6 rounded-2xl font-bold text-2xl shadow-2xl"
              style={{ 
                background: `linear-gradient(135deg, ${colors.gold} 0%, ${colors.bronze} 100%)`,
                color: colors.navy
              }}
            >
              <FaPhone className="mr-4" />
              981-9302784
            </motion.a>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-gray-400 text-sm"
            >
              Available 24/7 for emergency calls • Administrative office hours: 6 AM - 8 PM
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Contact