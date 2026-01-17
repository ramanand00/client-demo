// src/pages/NewsEvents.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaNewspaper, FaVideo, FaArrowRight, FaShareAlt } from 'react-icons/fa'
import { GiPartyPopper, GiSpeaker } from 'react-icons/gi'

const NewsEvents = () => {
  // Color Palette
  const colors = {
    navy: '#1A2B56',
    gold: '#F9E11E',
    white: '#FFFFFF',
    bronze: '#C2933C',
    brown: '#3D2616'
  }

  const heroRef = useRef(null)
  const contentRef = useRef(null)
  
  const isHeroInView = useInView(heroRef, { once: true })
  const isContentInView = useInView(contentRef, { once: true })

  const news = [
    {
      id: 1,
      title: "New Batch Admission Open for 2081",
      date: "Jan 15, 2024",
      category: "Admission",
      description: "Admission open for new batch starting from February 1st, 2024",
      image: "🎓",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Loksewa Preli Result 2080 Published",
      date: "Jan 10, 2024",
      category: "Result",
      description: "Congratulations to all successful candidates",
      image: "📊",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Republic Day Celebration at Institute",
      date: "Jan 8, 2024",
      category: "Event",
      description: "Join us for Republic Day celebrations and cultural programs",
      image: "🎉",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 4,
      title: "Winter Vacation Schedule",
      date: "Jan 5, 2024",
      category: "Notice",
      description: "Important notice regarding winter vacation schedule",
      image: "❄️",
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 5,
      title: "Guest Lecture by Former PSC Member",
      date: "Dec 28, 2023",
      category: "Seminar",
      description: "Special guest lecture on interview preparation techniques",
      image: "🎤",
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: 6,
      title: "Annual Day Celebration 2080",
      date: "Dec 25, 2023",
      category: "Celebration",
      description: "Annual day celebration with cultural programs and awards",
      image: "🏆",
      color: "from-teal-500 to-cyan-500"
    },
  ]

  const events = [
    {
      id: 1,
      title: "Free Demo Class Every Saturday",
      date: "Every Saturday",
      time: "10:00 AM - 12:00 PM",
      location: "Main Hall",
      icon: "📚",
      type: "Regular"
    },
    {
      id: 2,
      title: "Mock Interview Session",
      date: "Jan 20, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Interview Room",
      icon: "💼",
      type: "Special"
    },
    {
      id: 3,
      title: "Current Affairs Discussion",
      date: "Jan 27, 2024",
      time: "3:00 PM - 4:30 PM",
      location: "Seminar Hall",
      icon: "📰",
      type: "Regular"
    },
    {
      id: 4,
      title: "Parent-Teacher Meeting",
      date: "Feb 5, 2024",
      time: "11:00 AM - 2:00 PM",
      location: "Conference Room",
      icon: "👨‍👩‍👧‍👦",
      type: "Special"
    },
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
              <FaNewspaper className="mr-2" />
              Latest Updates
            </motion.span>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              News & <span style={{ color: colors.gold }}>Events</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Stay updated with the latest announcements, events, and happenings at our institute
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section 
        ref={contentRef}
        className="py-20 relative"
        style={{ backgroundColor: colors.white }}
      >
        <div className="container mx-auto px-4">
          {/* Featured News */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold" style={{ color: colors.navy }}>
                  Latest <span style={{ color: colors.bronze }}>News</span>
                </h2>
                <p className="text-gray-600">Recent announcements and updates</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl font-semibold flex items-center"
                style={{ 
                  backgroundColor: colors.gold + '20',
                  color: colors.navy
                }}
              >
                <FaVideo className="mr-2" />
                Watch All Updates
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.slice(0, 3).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl transform group-hover:scale-105 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className={`h-40 bg-gradient-to-br ${item.color} flex items-center justify-center text-6xl`}>
                      {item.image}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold"
                              style={{ 
                                backgroundColor: colors.gold + '20',
                                color: colors.navy
                              }}>
                          {item.category}
                        </span>
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3" style={{ color: colors.navy }}>
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6">{item.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <button className="flex items-center text-sm font-semibold group/btn"
                                style={{ color: colors.bronze }}>
                          Read More
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="ml-2"
                          >
                            <FaArrowRight />
                          </motion.div>
                        </button>
                        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                style={{ color: colors.navy }}>
                          <FaShareAlt />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Events Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold" style={{ color: colors.navy }}>
                  Upcoming <span style={{ color: colors.bronze }}>Events</span>
                </h2>
                <p className="text-gray-600">Mark your calendar for important events</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl font-semibold flex items-center"
                style={{ 
                  backgroundColor: colors.navy,
                  color: colors.white
                }}
              >
                <FaCalendarAlt className="mr-2" />
                View Calendar
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:border-gold transition-colors">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">{event.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold" style={{ color: colors.navy }}>
                            {event.title}
                          </h3>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            event.type === 'Special' 
                              ? 'bg-red-100 text-red-600'
                              : 'bg-blue-100 text-blue-600'
                          }`}>
                            {event.type}
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <FaCalendarAlt className="mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <FaClock className="mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <FaMapMarkerAlt className="mr-2" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        
                        <button className="mt-4 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
                                style={{ 
                                  backgroundColor: colors.gold + '20',
                                  color: colors.navy
                                }}>
                          Add to Calendar
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent News Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8" style={{ color: colors.navy }}>
              Recent <span style={{ color: colors.bronze }}>Announcements</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.slice(3).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                  whileHover={{ y: -3 }}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2 py-1 rounded text-xs font-semibold"
                            style={{ 
                              backgroundColor: colors.gold + '20',
                              color: colors.navy
                            }}>
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                    
                    <h3 className="font-bold mb-3" style={{ color: colors.navy }}>
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                    
                    <button className="text-sm font-semibold flex items-center group/btn"
                            style={{ color: colors.bronze }}>
                      Read More
                      <FaArrowRight className="ml-2 text-xs group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-brown to-bronze"></div>
        
        {/* Floating Icons */}
        {[GiPartyPopper, GiSpeaker].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${20 + index * 60}%`,
              top: '30%',
              color: colors.gold,
              fontSize: '4rem',
              opacity: 0.1
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5
            }}
          >
            <Icon />
          </motion.div>
        ))}

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Never Miss an <span style={{ color: colors.gold }}>Update</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and get the latest news, events, and important announcements directly in your inbox
            </p>
            
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
              />
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-4 rounded-xl font-bold text-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.gold} 0%, ${colors.bronze} 100%)`,
                  color: colors.navy
                }}
              >
                Subscribe Now
              </motion.button>
            </motion.form>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-gray-400 text-sm"
            >
              We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default NewsEvents