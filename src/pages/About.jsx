// src/pages/About.jsx
import { useEffect, useRef } from 'react'
import { FaBullseye, FaEye, FaUsers, FaChartLine, FaAward, FaHandshake, FaCheck, FaQuoteLeft, FaStar } from 'react-icons/fa'
import { GiTeacher, GiAchievement, GiMedal, GiTargeted } from 'react-icons/gi'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const About = () => {
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const missionRef = useRef(null)
  const facultyRef = useRef(null)
  const valuesRef = useRef(null)
  
  const isStatsInView = useInView(statsRef, { once: true })
  const isMissionInView = useInView(missionRef, { once: true })
  const isFacultyInView = useInView(facultyRef, { once: true })
  const isValuesInView = useInView(valuesRef, { once: true })

  // Color Palette
  const colors = {
    navy: '#1A2B56',
    gold: '#F9E11E',
    white: '#FFFFFF',
    bronze: '#C2933C',
    brown: '#3D2616'
  }

  const faculty = [
    { 
      id: 1, 
      name: "Ram Prasad Sharma", 
      designation: "Senior Faculty - General Knowledge", 
      experience: "15+ Years", 
      qualification: "MA, M.Phil",
      specialty: "Constitutional Law & Current Affairs",
      imageColor: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    { 
      id: 2, 
      name: "Sita Devi Karki", 
      designation: "Faculty - Nepali & Samanya Gyan", 
      experience: "12+ Years", 
      qualification: "MA, B.Ed",
      specialty: "Nepali Literature & Culture",
      imageColor: "bg-gradient-to-br from-purple-400 to-purple-600"
    },
    { 
      id: 3, 
      name: "Hari Bahadur Thapa", 
      designation: "Faculty - Mathematics & Reasoning", 
      experience: "10+ Years", 
      qualification: "MSc, B.Ed",
      specialty: "Quantitative Aptitude",
      imageColor: "bg-gradient-to-br from-green-400 to-green-600"
    },
    { 
      id: 4, 
      name: "Gita Kumari Rai", 
      designation: "Faculty - English & Communication", 
      experience: "8+ Years", 
      qualification: "MA English, TEFL",
      specialty: "Communication Skills & Interview Prep",
      imageColor: "bg-gradient-to-br from-pink-400 to-pink-600"
    },
  ]

  const methodology = [
    { step: "1", title: "Foundation Building", desc: "Strong conceptual understanding", icon: "🏗️" },
    { step: "2", title: "Regular Practice", desc: "Daily problem solving sessions", icon: "📝" },
    { step: "3", title: "Mock Tests", desc: "Weekly assessment exams", icon: "📊" },
    { step: "4", title: "Performance Analysis", desc: "Detailed feedback & improvement plans", icon: "🔍" },
    { step: "5", title: "Revision Cycles", desc: "Systematic revision schedule", icon: "🔄" },
    { step: "6", title: "Interview Preparation", desc: "Mock interviews & personality development", icon: "💼" },
  ]

  const achievements = [
    { number: "95%", label: "Preliminary Pass Rate", icon: <GiTargeted />, suffix: "+" },
    { number: "2000", label: "Successful Students", icon: <FaUsers />, suffix: "+" },
    { number: "50", label: "Govt. Officer Faculty", icon: <GiTeacher />, suffix: "+" },
    { number: "8", label: "Years of Excellence", icon: <GiAchievement />, suffix: "" },
    { number: "150", label: "Top 100 Rankers", icon: <GiMedal />, suffix: "+" },
    { number: "98%", label: "Student Satisfaction", icon: <FaStar />, suffix: "" },
  ]

  const values = [
    { 
      title: "Excellence", 
      desc: "Striving for the highest standards in teaching and learning",
      icon: <FaStar className="text-3xl" />,
      color: "from-[#F9E11E] to-[#C2933C]"
    },
    { 
      title: "Integrity", 
      desc: "Upholding ethical standards and academic honesty",
      icon: <FaHandshake className="text-3xl" />,
      color: "from-[#1A2B56] to-[#3D2616]"
    },
    { 
      title: "Innovation", 
      desc: "Continuously improving teaching methodologies",
      icon: <FaChartLine className="text-3xl" />,
      color: "from-[#C2933C] to-[#3D2616]"
    },
    { 
      title: "Commitment", 
      desc: "Dedicated to student success and growth",
      icon: <FaBullseye className="text-3xl" />,
      color: "from-[#1A2B56] to-[#F9E11E]"
    },
  ]

  const testimonials = [
    {
      name: "Anil Sharma",
      batch: "2022 Batch",
      achievement: "Ranked 15th in PSC",
      text: "The personalized guidance and mock tests were instrumental in my success.",
      color: "border-l-4 border-[#F9E11E]"
    },
    {
      name: "Sabina Rai",
      batch: "2023 Batch",
      achievement: "Selected as Kharidar",
      text: "Expert faculty and comprehensive study materials made all the difference.",
      color: "border-l-4 border-[#C2933C]"
    },
    {
      name: "Rajesh Thapa",
      batch: "2021 Batch",
      achievement: "Now serving as Nayab Subba",
      text: "The interview preparation program was exceptionally helpful.",
      color: "border-l-4 border-[#1A2B56]"
    },
  ]

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  }

  return (
    <>
      {/* Animated Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: colors.navy }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-10 animate-pulse"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: colors.gold,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 5}s`
              }}
            />
          ))}
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full border-4 border-[#F9E11E]/20 animate-bounce" 
               style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 right-10 w-24 h-24 rounded-full border-4 border-[#C2933C]/20 animate-bounce" 
               style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full border-4 border-[#FFFFFF]/20 animate-bounce" 
               style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block px-6 py-2 rounded-full mb-6 text-sm font-semibold tracking-wider uppercase"
              style={{ backgroundColor: colors.gold, color: colors.navy }}
            >
              Since 2015
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
            >
              Building <span className="text-[#F9E11E]">Future</span> Leaders
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
            >
              Pioneering excellence in civil service preparation in Eastern Nepal. 
              Transforming dreams into reality with expert guidance and proven methodologies.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button 
                className="px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: colors.gold, color: colors.navy }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = `0 20px 40px ${colors.gold}40`
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'
                }}
              >
                Explore Courses
              </button>
              <button 
                className="px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all duration-300 hover:scale-105"
                style={{ borderColor: colors.gold, color: colors.white }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.backgroundColor = colors.gold + '20'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.backgroundColor = 'transparent'
                }}
              >
                Meet Our Team
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 rounded-full border-[#F9E11E] flex justify-center">
              <div className="w-1 h-3 bg-[#F9E11E] rounded-full mt-2"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section 
        ref={statsRef}
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: colors.white }}
      >
        {/* Background Pattern */}
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
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.navy }}>
              Our <span style={{ color: colors.bronze }}>Journey</span> in Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Years of dedication reflected in our achievements and student success stories
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1A2B56]/10 rounded-2xl transform group-hover:scale-105 transition-all duration-500"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center transform transition-all duration-300 group-hover:shadow-2xl">
                  <div className="inline-block p-3 rounded-full mb-4" 
                       style={{ backgroundColor: colors.gold + '20' }}>
                    <div style={{ color: colors.bronze }}>
                      {item.icon}
                    </div>
                  </div>
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={isStatsInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="text-4xl font-bold mb-2"
                    style={{ color: colors.navy }}
                  >
                    {item.number}<span style={{ color: colors.bronze }}>{item.suffix}</span>
                  </motion.div>
                  <p className="text-sm text-gray-600 font-medium">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision with Parallax */}
      <section 
        ref={missionRef}
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: colors.navy }}
      >
        {/* Parallax Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F9E11E' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={isMissionInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our <span style={{ color: colors.gold }}>Purpose</span> & <span style={{ color: colors.bronze }}>Promise</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Driving force behind our commitment to excellence in civil service education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F9E11E] via-[#C2933C] to-[#3D2616] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-2xl mr-4" style={{ backgroundColor: colors.gold }}>
                    <FaBullseye className="text-2xl" style={{ color: colors.navy }} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  To empower civil service aspirants with comprehensive knowledge, strategic 
                  preparation, and ethical guidance, transforming them into competent, 
                  compassionate, and committed government servants who serve the nation with integrity.
                </p>
                <ul className="space-y-3">
                  {[
                    "Provide quality education at affordable cost",
                    "Develop analytical and decision-making skills",
                    "Foster ethical values and public service mindset",
                    "Create a supportive learning environment"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-300 group/item"
                    >
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-all duration-300 group-hover/item:scale-110"
                           style={{ backgroundColor: colors.gold + '30' }}>
                        <FaCheck style={{ color: colors.gold }} />
                      </div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A2B56] via-[#3D2616] to-[#C2933C] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-2xl mr-4" style={{ backgroundColor: colors.bronze }}>
                    <FaEye className="text-2xl" style={{ color: colors.white }} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  To become Nepal's premier civil service preparation institute, recognized 
                  for producing the highest number of successful, ethical, and transformative 
                  civil servants who contribute significantly to national development and progress.
                </p>
                <ul className="space-y-3">
                  {[
                    "Center of excellence for civil service preparation",
                    "Innovator in educational methodologies",
                    "Bridge between aspiration and achievement",
                    "National benchmark for success rates"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="flex items-center text-gray-300 group/item"
                    >
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-all duration-300 group-hover/item:scale-110"
                           style={{ backgroundColor: colors.bronze + '30' }}>
                        <FaCheck style={{ color: colors.bronze }} />
                      </div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20" style={{ backgroundColor: colors.white }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 rounded-full mb-4 text-sm font-semibold tracking-wider uppercase"
                 style={{ backgroundColor: colors.navy + '10', color: colors.navy }}>
              Our Approach
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.navy }}>
              Teaching <span style={{ color: colors.bronze }}>Methodology</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures comprehensive learning and success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: `0 20px 40px ${colors.navy}20`
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F9E11E] to-[#C2933C] rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-lg transform transition-all duration-500">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                           style={{ backgroundColor: colors.navy, color: colors.white }}>
                        {item.step}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-lg"
                           style={{ backgroundColor: colors.gold, color: colors.navy }}>
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold ml-4" style={{ color: colors.navy }}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm font-medium" style={{ color: colors.bronze }}>
                      Step {item.step}/6
                    </span>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2"
                         style={{ backgroundColor: colors.navy, color: colors.white }}>
                      →
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Overview */}
      <section 
        ref={facultyRef}
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: colors.navy }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: colors.gold,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFacultyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 rounded-full mb-4 text-sm font-semibold tracking-wider uppercase"
                 style={{ backgroundColor: colors.gold, color: colors.navy }}>
              Expert Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Meet Our <span style={{ color: colors.gold }}>Expert</span> Faculty
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Learn from experienced government officers and subject matter experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isFacultyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F9E11E] to-[#C2933C] rounded-2xl transform rotate-3 scale-105 opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                  {/* Faculty Image Placeholder */}
                  <div className={`h-48 ${member.imageColor} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
                      {member.name.charAt(0)}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="text-center">
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
                             style={{ backgroundColor: colors.gold, color: colors.navy }}>
                          {member.specialty}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-sm mb-3" style={{ color: colors.gold }}>
                      {member.designation}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-300">
                        <FaChartLine className="mr-2" style={{ color: colors.bronze }} />
                        <span className="text-sm">{member.experience} Experience</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <FaAward className="mr-2" style={{ color: colors.bronze }} />
                        <span className="text-sm">{member.qualification}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <button className="w-full py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
                              style={{ 
                                backgroundColor: colors.gold + '20',
                                color: colors.gold,
                                border: `1px solid ${colors.gold}40`
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor = colors.gold;
                                e.target.style.color = colors.navy;
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = colors.gold + '20';
                                e.target.style.color = colors.gold;
                              }}>
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: colors.white }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 rounded-full mb-4 text-sm font-semibold tracking-wider uppercase"
                 style={{ backgroundColor: colors.gold + '20', color: colors.navy }}>
              Student Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.navy }}>
              Success <span style={{ color: colors.bronze }}>Stories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our successful students who achieved their dreams
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className={`bg-white p-6 rounded-2xl shadow-lg h-full transform transition-all duration-300 group-hover:shadow-2xl ${testimonial.color}`}>
                  <div className="mb-4">
                    <FaQuoteLeft className="text-4xl opacity-20" style={{ color: colors.navy }} />
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4"
                         style={{ backgroundColor: colors.navy }}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.batch}</p>
                      <p className="text-sm font-semibold" style={{ color: colors.bronze }}>
                        {testimonial.achievement}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section 
        ref={valuesRef}
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: colors.navy }}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${colors.gold} 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our <span style={{ color: colors.gold }}>Core</span> Values
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Principles that guide our every action and decision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isValuesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 2 : -2
                }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${value.color} p-1 rounded-3xl`}>
                  <div className="bg-[#1A2B56] p-6 rounded-3xl h-full text-center">
                    <div className="inline-block p-4 rounded-2xl mb-4 bg-white/10">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 text-sm">{value.desc}</p>
                    <div className="mt-6">
                      <div className="inline-flex items-center text-sm" style={{ color: colors.gold }}>
                        <span className="mr-2">Learn More</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          →
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2B56] via-[#3D2616] to-[#C2933C]"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Animated Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: colors.gold,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Begin Your <span style={{ color: colors.gold }}>Journey</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of successful civil servants who started their journey with us
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
                className="px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                style={{ 
                  backgroundColor: colors.gold,
                  color: colors.navy,
                  boxShadow: `0 10px 30px ${colors.gold}40`
                }}
              >
                Start Your Application
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all duration-300"
                style={{ 
                  borderColor: colors.gold,
                  color: colors.white,
                  boxShadow: `0 10px 30px ${colors.gold}20`
                }}
              >
                Schedule a Visit
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About