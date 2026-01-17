// src/pages/Career.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaUserGraduate, FaClock, FaArrowRight, FaUpload, FaPhone, FaEnvelope } from 'react-icons/fa'
import { GiTeacher, GiOfficeChair } from 'react-icons/gi'

const Career = () => {
  // Color Palette
  const colors = {
    navy: '#1A2B56',
    gold: '#F9E11E',
    white: '#FFFFFF',
    bronze: '#C2933C',
    brown: '#3D2616'
  }

  const heroRef = useRef(null)
  const jobsRef = useRef(null)
  
  const isHeroInView = useInView(heroRef, { once: true })
  const isJobsInView = useInView(jobsRef, { once: true })

  const jobOpenings = [
    {
      id: 1,
      title: "Civil Service Preparation Faculty",
      type: "Full-time",
      location: "Biratnagar",
      experience: "3+ years",
      deadline: "Jan 31, 2024",
      description: "Looking for experienced faculty for General Knowledge and Current Affairs",
      requirements: ["Master's Degree", "Teaching Experience", "Subject Expertise"],
      icon: <GiTeacher />
    },
    {
      id: 2,
      title: "Mathematics & Reasoning Instructor",
      type: "Part-time",
      location: "Biratnagar",
      experience: "2+ years",
      deadline: "Feb 15, 2024",
      description: "Expert in quantitative aptitude and logical reasoning",
      requirements: ["MSc Mathematics", "Problem Solving Skills", "Teaching Experience"],
      icon: <FaUserGraduate />
    },
    {
      id: 3,
      title: "Administrative Officer",
      type: "Full-time",
      location: "Biratnagar",
      experience: "1+ years",
      deadline: "Jan 25, 2024",
      description: "Manage institute operations and student services",
      requirements: ["Bachelor's Degree", "Management Skills", "Communication Skills"],
      icon: <GiOfficeChair />
    },
    {
      id: 4,
      title: "Content Developer",
      type: "Contract",
      location: "Remote",
      experience: "2+ years",
      deadline: "Feb 10, 2024",
      description: "Develop study materials and practice questions",
      requirements: ["Writing Skills", "Research Ability", "Subject Knowledge"],
      icon: <FaBriefcase />
    },
  ]

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Attractive salary package with performance bonuses",
      icon: "💰"
    },
    {
      title: "Professional Growth",
      description: "Regular training and development opportunities",
      icon: "📈"
    },
    {
      title: "Work Environment",
      description: "Supportive and collaborative work culture",
      icon: "🤝"
    },
    {
      title: "Flexible Schedule",
      description: "Flexible working hours for better work-life balance",
      icon: "⏰"
    },
    {
      title: "Career Advancement",
      description: "Clear career progression paths",
      icon: "🎯"
    },
    {
      title: "Additional Benefits",
      description: "Health insurance and other employee benefits",
      icon: "🏥"
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
              <FaBriefcase className="mr-2" />
              Join Our Team
            </motion.span>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              Career <span style={{ color: colors.gold }}>Opportunities</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Join our team of dedicated educators and professionals committed to shaping future civil servants
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Job Openings */}
      <section 
        ref={jobsRef}
        className="py-20 relative"
        style={{ backgroundColor: colors.white }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isJobsInView ? { opacity: 1, y: 0 } : {}}
            className="mb-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ color: colors.navy }}>
                Current <span style={{ color: colors.bronze }}>Openings</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore exciting career opportunities at Success Loksewa Institute
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl transform rotate-1 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-xl" style={{ 
                            backgroundColor: colors.gold + '20',
                            color: colors.navy
                          }}>
                            {job.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: colors.navy }}>
                              {job.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{ 
                                      backgroundColor: colors.gold + '20',
                                      color: colors.navy
                                    }}>
                                {job.type}
                              </span>
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-600">
                                {job.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{job.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3" style={{ color: colors.navy }}>
                          Requirements:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.map((req, idx) => (
                            <span key={idx} 
                                  className="px-3 py-1 rounded-full text-sm border"
                                  style={{ 
                                    backgroundColor: colors.gold + '10',
                                    color: colors.navy,
                                    borderColor: colors.gold + '30'
                                  }}>
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <FaClock className="mr-2" />
                            <span>Exp: {job.experience}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <FaCalendar className="mr-2" />
                            <span>Apply by: {job.deadline}</span>
                          </div>
                        </div>
                        
                        <button className="flex items-center px-6 py-3 rounded-xl font-semibold group/btn"
                                style={{ 
                                  backgroundColor: colors.navy,
                                  color: colors.white
                                }}>
                          Apply Now
                          <FaArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Openings Message */}
            {jobOpenings.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-6">📭</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.navy }}>
                  No Current Openings
                </h3>
                <p className="text-gray-600 mb-8">
                  There are no job openings at the moment. Please check back later.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl font-semibold"
                  style={{ 
                    backgroundColor: colors.gold,
                    color: colors.navy
                  }}
                >
                  Subscribe for Updates
                </motion.button>
              </motion.div>
            )}
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isJobsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: colors.navy }}>
                Why Work With <span style={{ color: colors.bronze }}>Us</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a rewarding work environment with opportunities for growth and development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  whileHover={{ y: -3 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="text-3xl mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: colors.navy }}>
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Application Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isJobsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-8" style={{ color: colors.navy }}>
                Application <span style={{ color: colors.bronze }}>Process</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: "1", title: "Submit Application", desc: "Fill the online application form", icon: "📝" },
                  { step: "2", title: "Document Review", desc: "Our team reviews your application", icon: "🔍" },
                  { step: "3", title: "Interview", desc: "Participate in interview process", icon: "💬" },
                  { step: "4", title: "Joining", desc: "Welcome to our team!", icon: "🎉" },
                ].map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                    className="text-center"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4"
                           style={{ 
                             backgroundColor: colors.gold + '20',
                             color: colors.navy
                           }}>
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                           style={{ 
                             backgroundColor: colors.gold,
                             color: colors.navy
                           }}>
                        {step.step}
                      </div>
                    </div>
                    <h4 className="font-bold mb-2" style={{ color: colors.navy }}>
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-600">{step.desc}</p>
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
        
        {/* Floating Icons */}
        {[FaUpload, FaPhone, FaEnvelope].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${20 + index * 30}%`,
              top: '30%',
              color: colors.gold,
              fontSize: '3rem',
              opacity: 0.1
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
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
              Ready to <span style={{ color: colors.gold }}>Apply</span>?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Send us your resume and cover letter. We're always looking for talented individuals to join our team.
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
                className="px-8 py-4 rounded-xl font-bold text-lg shadow-2xl flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.gold} 0%, ${colors.bronze} 100%)`,
                  color: colors.navy
                }}
              >
                <FaUpload className="mr-2" />
                Upload Resume
              </motion.button>
              
              <motion.a
                href="mailto:slin.biratnagar@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-bold text-lg border-2 shadow-2xl flex items-center justify-center"
                style={{ 
                  borderColor: colors.gold,
                  color: colors.gold,
                  backgroundColor: colors.gold + '10'
                }}
              >
                <FaEnvelope className="mr-2" />
                Email Application
              </motion.a>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-gray-400 text-sm"
            >
              For queries regarding career opportunities, contact: 981-9302784
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Career