// src/pages/Academics.jsx
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBook, FaClock, FaUserGraduate, FaCalendar, FaFilePdf, FaVideo, FaQuestionCircle, FaChartBar, FaCheck, FaArrowRight, FaUsers } from 'react-icons/fa'
import { GiTeacher, GiNotebook, GiBrain } from 'react-icons/gi'

const Academics = () => {
  const [activeTab, setActiveTab] = useState('courses')
  
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

  const courses = [
    { 
      id: 1, 
      title: "Foundation Course", 
      duration: "6 Months",
      fee: "NPR 25,000",
      icon: "📚",
      subjects: ["General Knowledge", "Mathematics", "English", "Nepali"],
      features: ["Complete syllabus coverage", "Basic to advanced concepts", "Weekly tests", "Study materials"],
      popular: true
    },
    { 
      id: 2, 
      title: "Advance Course", 
      duration: "4 Months",
      fee: "NPR 20,000",
      icon: "🚀",
      subjects: ["Current Affairs", "Reasoning", "Essay Writing", "Interview Prep"],
      features: ["Advanced problem solving", "Mock interviews", "Current affairs updates", "Personality development"],
      popular: false
    },
    { 
      id: 3, 
      title: "Crash Course", 
      duration: "2 Months",
      fee: "NPR 15,000",
      icon: "⚡",
      subjects: ["Quick Revision", "Important Topics", "Test Series", "Doubt Sessions"],
      features: ["Rapid revision", "Important questions", "Speed techniques", "Last minute tips"],
      popular: false
    },
    { 
      id: 4, 
      title: "Interview Preparation", 
      duration: "1 Month",
      fee: "NPR 10,000",
      icon: "💼",
      subjects: ["Communication Skills", "Body Language", "Mock Interviews", "PSP Analysis"],
      features: ["Personal grooming", "Confidence building", "Expert feedback", "Success strategies"],
      popular: true
    }
  ]

  const schedule = [
    { time: "6:00 AM - 8:00 AM", batch: "Morning Batch", subjects: "GK & Current Affairs", icon: "🌅" },
    { time: "10:00 AM - 1:00 PM", batch: "Day Batch", subjects: "Full Syllabus Coverage", icon: "☀️" },
    { time: "2:00 PM - 5:00 PM", batch: "Afternoon Batch", subjects: "Practice & Doubt Solving", icon: "⏰" },
    { time: "6:00 PM - 9:00 PM", batch: "Evening Batch", subjects: "Working Professionals", icon: "🌙" }
  ]

  const studyMaterials = [
    { type: "PDF Notes", icon: <FaFilePdf />, count: "150+", desc: "Comprehensive subject notes", color: "from-red-500 to-pink-500" },
    { type: "Video Lectures", icon: <FaVideo />, count: "200+", desc: "Recorded expert sessions", color: "from-blue-500 to-cyan-500" },
    { type: "Practice Sets", icon: <GiNotebook />, count: "1000+", desc: "Previous year questions", color: "from-green-500 to-emerald-500" },
    { type: "Mock Tests", icon: <FaChartBar />, count: "50+", desc: "Full length tests", color: "from-purple-500 to-pink-500" }
  ]

  const strategies = [
    { step: "Assessment Test", desc: "Evaluate current knowledge level", icon: "📝" },
    { step: "Customized Plan", desc: "Personalized study schedule", icon: "📋" },
    { step: "Concept Building", desc: "Strong foundation in basics", icon: "🏗️" },
    { step: "Regular Practice", desc: "Daily problem solving", icon: "💪" },
    { step: "Revision Cycles", desc: "Systematic revision plan", icon: "🔄" },
    { step: "Mock Tests", desc: "Exam simulation practice", icon: "🎯" }
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
              <GiTeacher className="mr-2" />
              Academic Excellence
            </motion.span>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              Academic <span style={{ color: colors.gold }}>Programs</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Comprehensive civil service preparation courses designed for success in all stages of examination
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section 
        ref={contentRef}
        className="py-20 relative"
        style={{ backgroundColor: colors.white }}
      >
        <div className="container mx-auto px-4">
          {/* Animated Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {['courses', 'schedule', 'strategy', 'materials'].map((tab, index) => (
              <motion.button
                key={tab}
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 font-semibold rounded-xl transition-all duration-300 relative overflow-hidden group ${
                  activeTab === tab
                    ? 'text-white'
                    : 'text-gray-700 hover:text-navy'
                }`}
                style={{
                  backgroundColor: activeTab === tab ? colors.navy : 'transparent',
                  border: `2px solid ${activeTab === tab ? colors.navy : colors.gold + '30'}`
                }}
              >
                {activeTab === tab && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gold to-bronze"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center">
                  {tab === 'courses' && (
                    <>
                      <FaBook className="mr-2" />
                      Courses
                    </>
                  )}
                  {tab === 'schedule' && (
                    <>
                      <FaCalendar className="mr-2" />
                      Schedule
                    </>
                  )}
                  {tab === 'strategy' && (
                    <>
                      <GiBrain className="mr-2" />
                      Strategy
                    </>
                  )}
                  {tab === 'materials' && (
                    <>
                      <FaFilePdf className="mr-2" />
                      Materials
                    </>
                  )}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Courses Tab */}
          {activeTab === 'courses' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {courses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-bronze/10 rounded-3xl transform rotate-1 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-6">
                          <div className="flex items-start space-x-4">
                            <div className="text-4xl">{course.icon}</div>
                            <div>
                              <h3 className="text-2xl font-bold" style={{ color: colors.navy }}>
                                {course.title}
                              </h3>
                              <div className="flex items-center space-x-4 mt-2">
                                <span className="flex items-center text-gray-600">
                                  <FaClock className="mr-2" /> {course.duration}
                                </span>
                                <span className="flex items-center font-bold" style={{ color: colors.bronze }}>
                                  <FaUserGraduate className="mr-2" /> {course.fee}
                                </span>
                              </div>
                            </div>
                          </div>
                          {course.popular && (
                            <span className="px-3 py-1 rounded-full text-xs font-semibold"
                                  style={{ 
                                    backgroundColor: colors.gold + '20',
                                    color: colors.navy
                                  }}>
                              Popular
                            </span>
                          )}
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3" style={{ color: colors.navy }}>
                            Subjects Covered:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {course.subjects.map((subject, idx) => (
                              <span key={idx} 
                                    className="px-3 py-1 rounded-full text-sm border transition-all duration-300 group-hover:border-gold"
                                    style={{ 
                                      backgroundColor: colors.gold + '10',
                                      color: colors.navy,
                                      borderColor: colors.gold + '30'
                                    }}>
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3" style={{ color: colors.navy }}>
                            Key Features:
                          </h4>
                          <ul className="space-y-2">
                            {course.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center">
                                <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3"
                                     style={{ 
                                       backgroundColor: colors.gold + '20',
                                       color: colors.gold
                                     }}>
                                  <FaCheck size={10} />
                                </div>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                          <button className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg"
                                  style={{ 
                                    backgroundColor: colors.navy,
                                    color: colors.white
                                  }}>
                            Enroll Now
                          </button>
                          <button className="flex items-center text-sm font-semibold group/btn"
                                  style={{ color: colors.bronze }}>
                            Course Details
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ repeat: Infinity, duration: 1.5 }}
                              className="ml-2"
                            >
                              <FaArrowRight />
                            </motion.div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Schedule Tab */}
          {activeTab === 'schedule' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {schedule.map((slot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                      <div className="text-3xl mb-4">{slot.icon}</div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: colors.navy }}>
                        {slot.batch}
                      </h3>
                      <p className="text-gray-600 mb-3 font-semibold">{slot.time}</p>
                      <p className="text-sm text-gray-500">{slot.subjects}</p>
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <button className="w-full py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
                                style={{ 
                                  backgroundColor: colors.gold + '20',
                                  color: colors.navy
                                }}>
                          Join Batch
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6" style={{ color: colors.navy }}>
                  Weekly Routine
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr style={{ backgroundColor: colors.navy }}>
                        <th className="p-4 text-left text-white rounded-l-xl">Day</th>
                        <th className="p-4 text-left text-white">Morning (6-8 AM)</th>
                        <th className="p-4 text-left text-white">Day (10-1 PM)</th>
                        <th className="p-4 text-left text-white rounded-r-xl">Evening (6-9 PM)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => (
                        <motion.tr 
                          key={day}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 + 0.3 }}
                          className="border-b hover:bg-gray-50 transition-colors"
                        >
                          <td className="p-4 font-semibold" style={{ color: colors.navy }}>
                            {day}
                          </td>
                          <td className="p-4">Current Affairs</td>
                          <td className="p-4">Full Syllabus</td>
                          <td className="p-4">Practice Session</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Strategy Tab */}
          {activeTab === 'strategy' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {strategies.map((strategy, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mr-4"
                             style={{ 
                               backgroundColor: colors.gold + '20',
                               color: colors.navy
                             }}>
                          {strategy.icon}
                        </div>
                        <div className="text-3xl font-bold" style={{ color: colors.navy }}>
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3" style={{ color: colors.navy }}>
                        {strategy.step}
                      </h3>
                      <p className="text-gray-600">{strategy.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-gold/10 to-bronze/10 p-8 rounded-3xl border border-gold/20"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: colors.navy }}>
                  <FaQuestionCircle className="mr-3" style={{ color: colors.gold }} />
                  Success Tips
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1"
                           style={{ 
                             backgroundColor: colors.gold,
                             color: colors.navy
                           }}>
                        <FaCheck size={12} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1" style={{ color: colors.navy }}>Consistency is Key</h4>
                        <p className="text-gray-600 text-sm">Regular study beats last-minute cramming</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1"
                           style={{ 
                             backgroundColor: colors.gold,
                             color: colors.navy
                           }}>
                        <FaCheck size={12} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1" style={{ color: colors.navy }}>Quality over Quantity</h4>
                        <p className="text-gray-600 text-sm">Focus on understanding concepts thoroughly</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1"
                           style={{ 
                             backgroundColor: colors.gold,
                             color: colors.navy
                           }}>
                        <FaCheck size={12} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1" style={{ color: colors.navy }}>Time Management</h4>
                        <p className="text-gray-600 text-sm">Practice with time limits to improve speed</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1"
                           style={{ 
                             backgroundColor: colors.gold,
                             color: colors.navy
                           }}>
                        <FaCheck size={12} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1" style={{ color: colors.navy }}>Revision Cycles</h4>
                        <p className="text-gray-600 text-sm">Regular revision helps in long-term retention</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Materials Tab */}
          {activeTab === 'materials' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {studyMaterials.map((material, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 text-center">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${material.color} mb-4`}>
                        <div className="text-white text-2xl">
                          {material.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: colors.navy }}>
                        {material.type}
                      </h3>
                      <div className="text-3xl font-bold mb-2" style={{ color: colors.bronze }}>
                        {material.count}
                      </div>
                      <p className="text-gray-600 text-sm">{material.desc}</p>
                      <button className="mt-6 w-full py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
                              style={{ 
                                backgroundColor: colors.gold + '20',
                                color: colors.navy
                              }}>
                        Access Now
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-navy to-brown text-white p-8 rounded-3xl"
              >
                <h3 className="text-2xl font-bold mb-6">How to Access Materials</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📚</div>
                    <h4 className="font-bold mb-2">Physical Copies</h4>
                    <p className="text-gray-300 text-sm">Collect printed materials from institute library</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">💻</div>
                    <h4 className="font-bold mb-2">Online Portal</h4>
                    <p className="text-gray-300 text-sm">Access digital content through student portal</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">📱</div>
                    <h4 className="font-bold mb-2">Mobile App</h4>
                    <p className="text-gray-300 text-sm">Study on the go with our mobile application</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-brown to-bronze"></div>
        
        {/* Animated Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: colors.gold }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
              className="inline-block p-4 rounded-2xl mb-6"
              style={{ 
                backgroundColor: colors.gold + '20',
                color: colors.gold
              }}
            >
              <FaUsers className="text-3xl" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Start Your <span style={{ color: colors.gold }}>Preparation</span>?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our upcoming batch and get access to expert guidance, comprehensive study materials, and proven success strategies
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
                Download Brochure
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
                Contact for Admission
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Academics