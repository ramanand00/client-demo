// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import { FaCheck, FaChalkboardTeacher, FaBook, FaUserGraduate, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import { MdImportantDevices, MdGroups } from 'react-icons/md'

const Home = () => {
  const courses = [
    { id: 1, title: "Loksewa Foundation", duration: "6 Months", description: "Basic civil service preparation" },
    { id: 2, title: "Loksewa Advance", duration: "4 Months", description: "Advanced level preparation" },
    { id: 3, title: "Interview Preparation", duration: "1 Month", description: "Mock interviews & guidance" },
    { id: 4, title: "Specialized Training", duration: "3 Months", description: "Subject-specific training" },
  ]

  const features = [
    { icon: <FaChalkboardTeacher />, title: "Expert Faculty", desc: "Experienced government officers as instructors" },
    { icon: <FaBook />, title: "Study Materials", desc: "Comprehensive notes and practice sets" },
    { icon: <MdImportantDevices />, title: "Smart Classes", desc: "Technology-enabled learning environment" },
    { icon: <FaUserGraduate />, title: "Personal Mentoring", desc: "One-on-one guidance and counseling" },
    { icon: <FaCalendarAlt />, title: "Regular Tests", desc: "Weekly assessments and mock exams" },
    { icon: <MdGroups />, title: "Study Groups", desc: "Collaborative learning environment" },
  ]

  const notices = [
    { id: 1, title: "New Batch Admission Open", date: "2024-01-15", category: "Admission" },
    { id: 2, title: "Loksewa Preli Result Published", date: "2024-01-10", category: "Result" },
    { id: 3, title: "Republic Day Celebration", date: "2024-01-08", category: "Event" },
    { id: 4, title: "Winter Vacation Notice", date: "2024-01-05", category: "Notice" },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy to-navy-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,...')" }}></div>
        </div>
        
        <div className="container mx-auto section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Your Path to <span className="text-gold">Government</span> Service
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Premier civil service preparation institute in Biratnagar. 
                Transforming aspirants into successful civil servants with expert guidance, 
                comprehensive study materials, and proven teaching methodologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-secondary text-center">
                  Enroll Now
                </Link>
                <Link to="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {[
                    "95% Success Rate in Preliminary Exams",
                    "Experienced Government Officer Faculty",
                    "Personalized Attention & Mentoring",
                    "Comprehensive Study Materials",
                    "Regular Mock Tests & Assessments",
                    "Modern Smart Classroom Facilities"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheck className="text-gold mr-3" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive preparation programs designed to cover all aspects of 
              Nepal's civil service examinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg p-6 card-hover">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-navy mb-2">{course.title}</h3>
                  <span className="inline-block bg-gold text-navy px-3 py-1 rounded-full text-sm font-semibold">
                    {course.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Link to="/academics" className="text-navy font-semibold hover:text-gold flex items-center">
                  Learn More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/academics" className="btn-primary">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Choose Success Loksewa Institute?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide the perfect environment for civil service preparation with 
              proven results and student-centric approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 card-hover">
                <div className="text-4xl text-navy mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Notices */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-navy">Latest Notices</h2>
            <Link to="/notices" className="text-navy font-semibold hover:text-gold flex items-center">
              View All <FaArrowRight className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {notices.map((notice) => (
              <div key={notice.id} className="bg-white rounded-xl shadow-lg p-6 card-hover">
                <span className="inline-block bg-navy text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {notice.category}
                </span>
                <h3 className="text-lg font-bold text-navy mb-2">{notice.title}</h3>
                <p className="text-gray-500 text-sm">Published: {notice.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Civil Service Journey Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful civil servants who started their journey with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Contact for Admission
            </Link>
            <a href="tel:981-9302784" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Call Now: 981-9302784
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home