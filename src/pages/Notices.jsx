// src/pages/Notices.jsx
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaFileAlt, FaCalendar, FaDownload, FaBell, FaExclamationTriangle, FaCheckCircle, FaArrowRight, FaSearch } from 'react-icons/fa'
import { GiScrollQuill } from 'react-icons/gi'

const Notices = () => {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  
  // Color Palette
  const colors = {
    navy: '#1A2B56',
    gold: '#F9E11E',
    white: '#FFFFFF',
    bronze: '#C2933C',
    brown: '#3D2616'
  }

  const heroRef = useRef(null)
  const noticesRef = useRef(null)
  
  const isHeroInView = useInView(heroRef, { once: true })
  const isNoticesInView = useInView(noticesRef, { once: true })

  const notices = [
    {
      id: 1,
      title: "New Batch Admission Notice 2081",
      date: "Jan 15, 2024",
      type: "Admission",
      category: "Important",
      description: "Admission open for new batch starting from February 1st, 2024. Last date for application: January 30, 2024.",
      file: true
    },
    {
      id: 2,
      title: "Loksewa Preliminary Exam Result 2080",
      date: "Jan 10, 2024",
      type: "Result",
      category: "Important",
      description: "Result of Loksewa Preliminary Examination 2080 has been published. Check your result online.",
      file: true
    },
    {
      id: 3,
      title: "Republic Day Holiday Notice",
      date: "Jan 8, 2024",
      type: "Holiday",
      category: "Notice",
      description: "Institute will remain closed on Republic Day, January 15, 2024.",
      file: false
    },
    {
      id: 4,
      title: "Winter Vacation Schedule 2080",
      date: "Jan 5, 2024",
      type: "Schedule",
      category: "Notice",
      description: "Winter vacation schedule and important dates for students.",
      file: true
    },
    {
      id: 5,
      title: "Fee Payment Deadline Extended",
      date: "Dec 28, 2023",
      type: "Fee",
      category: "Important",
      description: "Last date for fee payment extended to January 10, 2024.",
      file: true
    },
    {
      id: 6,
      title: "Mock Test Schedule - January 2024",
      date: "Dec 25, 2023",
      type: "Exam",
      category: "Schedule",
      description: "Monthly mock test schedule for January 2024.",
      file: true
    },
    {
      id: 7,
      title: "Library Timings During Winter",
      date: "Dec 20, 2023",
      type: "Library",
      category: "Notice",
      description: "Revised library timings during winter season.",
      file: false
    },
    {
      id: 8,
      title: "Scholarship Application Deadline",
      date: "Dec 18, 2023",
      type: "Scholarship",
      category: "Important",
      description: "Last date for scholarship application submission.",
      file: true
    },
  ]

  const categories = [
    { id: 'all', label: 'All Notices', icon: <FaBell />, count: notices.length },
    { id: 'important', label: 'Important', icon: <FaExclamationTriangle />, count: notices.filter(n => n.category === 'Important').length },
    { id: 'admission', label: 'Admission', icon: <FaCheckCircle />, count: notices.filter(n => n.type === 'Admission').length },
    { id: 'result', label: 'Results', icon: <GiScrollQuill />, count: notices.filter(n => n.type === 'Result').length },
    { id: 'exam', label: 'Exams', icon: <FaFileAlt />, count: notices.filter(n => n.type === 'Exam').length },
  ]

  const filteredNotices = notices.filter(notice => {
    if (filter !== 'all' && notice.category.toLowerCase() !== filter && notice.type.toLowerCase() !== filter) {
      return false
    }
    if (search && !notice.title.toLowerCase().includes(search.toLowerCase()) && 
        !notice.description.toLowerCase().includes(search.toLowerCase())) {
      return false
    }
    return true
  })

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
              <GiScrollQuill className="mr-2" />
              Official Notices
            </motion.span>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              Official <span style={{ color: colors.gold }}>Notices</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Important announcements, exam schedules, results, and official communications from the institute
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Notices Section */}
      <section 
        ref={noticesRef}
        className="py-20 relative"
        style={{ backgroundColor: colors.white }}
      >
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isNoticesInView ? { opacity: 1, y: 0 } : {}}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
              <div className="relative flex-1 max-w-2xl">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search notices..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              
              <div className="text-sm text-gray-600">
                Showing {filteredNotices.length} of {notices.length} notices
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((cat, index) => (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setFilter(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-3 rounded-xl font-semibold flex items-center transition-all duration-300 relative overflow-hidden group ${
                    filter === cat.id
                      ? 'text-white'
                      : 'text-gray-700 hover:text-navy'
                  }`}
                  style={{
                    backgroundColor: filter === cat.id ? colors.navy : colors.gold + '10',
                    border: `2px solid ${filter === cat.id ? colors.navy : colors.gold + '30'}`
                  }}
                >
                  {filter === cat.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gold to-bronze"
                      layoutId="filterTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center">
                    <span className="mr-2">{cat.icon}</span>
                    {cat.label}
                    <span className="ml-2 px-2 py-1 rounded-full text-xs"
                          style={{ 
                            backgroundColor: filter === cat.id ? colors.white + '20' : colors.gold + '20',
                            color: filter === cat.id ? colors.white : colors.navy
                          }}>
                      {cat.count}
                    </span>
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Notices Grid */}
          <motion.div
            initial="hidden"
            animate={isNoticesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {filteredNotices.map((notice, index) => (
              <motion.div
                key={notice.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl transform rotate-1 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          notice.category === 'Important'
                            ? 'bg-red-100 text-red-600'
                            : 'bg-blue-100 text-blue-600'
                        }`}>
                          {notice.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold"
                              style={{ 
                                backgroundColor: colors.gold + '20',
                                color: colors.navy
                              }}>
                          {notice.type}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <FaCalendar className="mr-2" />
                        {notice.date}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4" style={{ color: colors.navy }}>
                      {notice.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">{notice.description}</p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="flex items-center space-x-4">
                        {notice.file && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center px-4 py-2 rounded-lg font-semibold"
                            style={{ 
                              backgroundColor: colors.gold + '20',
                              color: colors.navy
                            }}
                          >
                            <FaDownload className="mr-2" />
                            Download
                          </motion.button>
                        )}
                        <button className="flex items-center text-sm font-semibold group/btn"
                                style={{ color: colors.bronze }}>
                          View Details
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="ml-2"
                          >
                            <FaArrowRight />
                          </motion.div>
                        </button>
                      </div>
                      
                      <div className="text-xs text-gray-500">
                        Notice #{notice.id.toString().padStart(3, '0')}
                      </div>
                    </div>
                  </div>
                  
                  {/* Important Notice Indicator */}
                  {notice.category === 'Important' && (
                    <div className="absolute top-0 right-0">
                      <div className="relative">
                        <div className="w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-red-500"></div>
                        <FaExclamationTriangle className="absolute top-1 right-1 text-white text-xs" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredNotices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-6">📭</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.navy }}>
                No Notices Found
              </h3>
              <p className="text-gray-600 mb-8">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setFilter('all')
                  setSearch('')
                }}
                className="px-6 py-3 rounded-xl font-semibold"
                style={{ 
                  backgroundColor: colors.gold,
                  color: colors.navy
                }}
              >
                Clear Filters
              </motion.button>
            </motion.div>
          )}

          {/* Notice Archive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isNoticesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6" style={{ color: colors.navy }}>
                Notice Archive
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['2024', '2023', '2022'].map((year, index) => (
                  <motion.div
                    key={year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-gold transition-colors">
                      <div className="text-4xl font-bold mb-2" style={{ color: colors.navy }}>
                        {year}
                      </div>
                      <p className="text-gray-600 mb-4">
                        Archived notices from {year}
                      </p>
                      <button className="flex items-center text-sm font-semibold group/btn"
                              style={{ color: colors.bronze }}>
                        Browse Archive
                        <FaArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-brown to-bronze"></div>
        
        {/* Floating Documents */}
        {[FaFileAlt, GiScrollQuill].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${30 + index * 40}%`,
              top: '20%',
              color: colors.gold,
              fontSize: '4rem',
              opacity: 0.1
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
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
              Stay <span style={{ color: colors.gold }}>Informed</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Important notices are also shared via SMS and email. Make sure your contact information is updated.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-bold text-lg shadow-2xl"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.gold} 0%, ${colors.bronze} 100%)`,
                  color: colors.navy
                }}
              >
                Update Contact Info
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-bold text-lg border-2 shadow-2xl"
                style={{ 
                  borderColor: colors.gold,
                  color: colors.gold,
                  backgroundColor: colors.gold + '10'
                }}
              >
                Download Notice App
              </motion.button>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-gray-400 text-sm"
            >
              For urgent queries regarding any notice, contact administration: 981-9302784
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Notices