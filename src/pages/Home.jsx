// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import {
  FaCheck,
  FaChalkboardTeacher,
  FaBook,
  FaUserGraduate,
  FaCalendarAlt,
  FaArrowRight,
  FaStar,
  FaPlay,
  FaRocket,
  FaPhoneAlt
} from 'react-icons/fa'

import { MdImportantDevices, MdGroups, MdTrendingUp } from 'react-icons/md'
import { GiAchievement, GiGraduateCap } from 'react-icons/gi'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Home = () => {
  // Color Palette
  const colors = {
    navy: '#1A2B56',
    gold: '#F9E11E',
    white: '#FFFFFF',
    bronze: '#C2933C',
    brown: '#3D2616'
  }

  const heroRef = useRef(null)
  const coursesRef = useRef(null)
  const featuresRef = useRef(null)
  const statsRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true })
  const isCoursesInView = useInView(coursesRef, { once: true })
  const isFeaturesInView = useInView(featuresRef, { once: true })
  const isStatsInView = useInView(statsRef, { once: true })

  const courses = [
    { 
      id: 1, 
      title: "Foundation Course", 
      duration: "6 Months", 
      description: "Complete civil service preparation",
      icon: "📚",
      features: ["Basic to Advanced", "Weekly Tests", "Study Materials"]
    },
    { 
      id: 2, 
      title: "Advance Course", 
      duration: "4 Months", 
      description: "For serious aspirants",
      icon: "🚀",
      features: ["Advanced Topics", "Mock Interviews", "Current Affairs"]
    },
    { 
      id: 3, 
      title: "Crash Course", 
      duration: "2 Months", 
      description: "Quick revision & practice",
      icon: "⚡",
      features: ["Rapid Revision", "Important Questions", "Speed Techniques"]
    },
    { 
      id: 4, 
      title: "Interview Prep", 
      duration: "1 Month", 
      description: "Personality development",
      icon: "💼",
      features: ["Mock Interviews", "Communication Skills", "Confidence Building"]
    },
  ]

  const features = [
    { 
      icon: <FaChalkboardTeacher />, 
      title: "Expert Faculty", 
      desc: "Experienced government officers as instructors",
      color: "from-blue-500 to-cyan-400"
    },
    { 
      icon: <FaBook />, 
      title: "Study Materials", 
      desc: "Comprehensive notes and practice sets",
      color: "from-green-500 to-emerald-400"
    },
    { 
      icon: <MdImportantDevices />, 
      title: "Smart Classes", 
      desc: "Technology-enabled learning environment",
      color: "from-purple-500 to-pink-400"
    },
    { 
      icon: <FaUserGraduate />, 
      title: "Personal Mentoring", 
      desc: "One-on-one guidance and counseling",
      color: "from-orange-500 to-yellow-400"
    },
    { 
      icon: <FaCalendarAlt />, 
      title: "Regular Tests", 
      desc: "Weekly assessments and mock exams",
      color: "from-red-500 to-pink-400"
    },
    { 
      icon: <MdGroups />, 
      title: "Study Groups", 
      desc: "Collaborative learning environment",
      color: "from-indigo-500 to-blue-400"
    },
  ]

  const stats = [
    { number: "95%", label: "Preliminary Pass Rate", icon: <GiAchievement /> },
    { number: "2000+", label: "Successful Students", icon: <GiGraduateCap /> },
    { number: "50+", label: "Expert Faculty", icon: <FaChalkboardTeacher /> },
    { number: "150+", label: "Top 100 Rankers", icon: <FaStar /> },
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
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.brown} 100%)` 
        }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: colors.gold,
                opacity: 0.05
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                <FaRocket className="mr-2" />
                Premier Institute in Eastern Nepal
              </motion.span>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
              >
                Your Path to{' '}
                <span className="relative">
                  <span style={{ color: colors.gold }}>Civil Service</span>
                  <motion.div 
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-gold to-bronze"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                Transform your dream of serving the nation into reality with expert 
                guidance, comprehensive study materials, and proven teaching methodologies 
                at Success Loksewa Institute.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="space-y-4 mb-8"
              >
                {[
                  "95% Success Rate in Preliminary Exams",
                  "Experienced Government Officer Faculty",
                  "Personalized Attention & Mentoring",
                  "Comprehensive Study Materials"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                      className="w-6 h-6 rounded-full flex items-center justify-center mr-3"
                      style={{ backgroundColor: colors.gold, color: colors.navy }}
                    >
                      <FaCheck size={12} />
                    </motion.div>
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.gold} 0%, ${colors.bronze} 100%)`,
                    color: colors.navy
                  }}
                >
                  <span>Start Your Journey</span>
                  <FaArrowRight className="ml-2" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl font-bold text-lg border-2 flex items-center justify-center"
                  style={{ 
                    borderColor: colors.gold,
                    color: colors.gold,
                    backgroundColor: colors.gold + '10'
                  }}
                >
                  <FaPlay className="mr-2" />
                  Watch Video
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-bronze/20 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Free Demo Class</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <span className="text-gray-300">Date</span>
                      <span className="text-white font-semibold">Every Saturday</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <span className="text-gray-300">Time</span>
                      <span className="text-white font-semibold">10 AM - 12 PM</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <span className="text-gray-300">Seats</span>
                      <span className="text-white font-semibold">Limited Availability</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 py-3 rounded-xl font-bold"
                    style={{ 
                      backgroundColor: colors.gold,
                      color: colors.navy
                    }}
                  >
                    Book Your Seat
                  </motion.button>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-2xl"
                style={{ color: colors.navy }}
              >
                <div className="text-2xl">🏆</div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-2xl"
                style={{ color: colors.navy }}
              >
                <div className="text-2xl">📈</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: colors.white }}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(${colors.navy} 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="inline-block p-4 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110"
                     style={{ 
                       backgroundColor: colors.gold + '20',
                       color: colors.gold
                     }}>
                  {stat.icon}
                </div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={isStatsInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-4xl font-bold mb-2"
                  style={{ color: colors.navy }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section 
        ref={coursesRef}
        className="py-20 relative overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.brown} 100%)` 
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F9E11E' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCoursesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 rounded-full mb-4 text-sm font-semibold tracking-wider uppercase"
                 style={{ 
                   backgroundColor: colors.gold + '20',
                   color: colors.gold 
                 }}>
              Our Programs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Comprehensive <span style={{ color: colors.gold }}>Courses</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose from our range of civil service preparation programs designed for success
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={isCoursesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-bronze/20 rounded-2xl transform rotate-3 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{course.icon}</div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold"
                            style={{ 
                              backgroundColor: colors.gold + '20',
                              color: colors.navy
                            }}>
                        {course.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3" style={{ color: colors.navy }}>
                      {course.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <FaCheck className="mr-2 text-xs" style={{ color: colors.gold }} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg" style={{ color: colors.bronze }}>
                        NPR 25,000
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-4 py-2 rounded-lg text-sm font-semibold"
                        style={{ 
                          backgroundColor: colors.navy,
                          color: colors.white
                        }}
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCoursesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link to="/academics">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-bold text-lg border-2"
                style={{ 
                  borderColor: colors.gold,
                  color: colors.gold,
                  backgroundColor: colors.gold + '10'
                }}
              >
                View All Courses
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresRef}
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: colors.white }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 rounded-full mb-4 text-sm font-semibold tracking-wider uppercase"
                 style={{ 
                   backgroundColor: colors.navy + '10',
                   color: colors.navy 
                 }}>
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.navy }}>
              Our <span style={{ color: colors.bronze }}>Unique</span> Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our student-centric approach and proven methodologies
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl transform group-hover:scale-105 transition-all duration-500"></div>
                <div className="relative p-6 rounded-2xl border border-gray-100 shadow-lg">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}>
                    <div className="text-white text-2xl">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3" style={{ color: colors.navy }}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{feature.desc}</p>
                  
                  <div className="flex items-center text-sm font-semibold"
                       style={{ color: colors.bronze }}>
                    <span>Learn More</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="ml-2"
                    >
                      →
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2B56] via-[#3D2616] to-[#C2933C]"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Animated Stars */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ backgroundColor: colors.gold }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
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
              <MdTrendingUp className="text-3xl" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Begin Your <span style={{ color: colors.gold }}>Success</span> Story Today
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of successful civil servants who started their journey with us. 
              Your dream of serving the nation is just one step away.
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
                Enroll Now
              </motion.button>
              
              <motion.a
                href="tel:981-9302784"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-bold text-lg border-2 shadow-2xl flex items-center justify-center"
                style={{ 
                  borderColor: colors.gold,
                  color: colors.gold,
                  backgroundColor: colors.gold + '10'
                }}
              >
                <FaPhoneAlt className="mr-2" />
                981-9302784
              </motion.a>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-gray-400 text-sm"
            >
              Limited seats available for upcoming batch starting next month
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home