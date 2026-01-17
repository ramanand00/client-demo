// src/pages/Academics.jsx
import { useState } from 'react'
import { FaBook, FaClock, FaUserGraduate, FaCalendar, FaFilePdf, FaVideo, FaQuestionCircle, FaChartBar } from 'react-icons/fa'

const Academics = () => {
  const [activeTab, setActiveTab] = useState('courses')

  const courses = [
    { 
      id: 1, 
      title: "Foundation Course", 
      duration: "6 Months",
      fee: "NPR 25,000",
      subjects: ["General Knowledge", "Mathematics", "English", "Nepali"],
      features: ["Complete syllabus coverage", "Basic to advanced concepts", "Weekly tests", "Study materials"]
    },
    { 
      id: 2, 
      title: "Advance Course", 
      duration: "4 Months",
      fee: "NPR 20,000",
      subjects: ["Current Affairs", "Reasoning", "Essay Writing", "Interview Prep"],
      features: ["Advanced problem solving", "Mock interviews", "Current affairs updates", "Personality development"]
    },
    { 
      id: 3, 
      title: "Crash Course", 
      duration: "2 Months",
      fee: "NPR 15,000",
      subjects: ["Quick Revision", "Important Topics", "Test Series", "Doubt Sessions"],
      features: ["Rapid revision", "Important questions", "Speed techniques", "Last minute tips"]
    },
    { 
      id: 4, 
      title: "Interview Preparation", 
      duration: "1 Month",
      fee: "NPR 10,000",
      subjects: ["Communication Skills", "Body Language", "Mock Interviews", "PSP Analysis"],
      features: ["Personal grooming", "Confidence building", "Expert feedback", "Success strategies"]
    }
  ]

  const schedule = [
    { time: "6:00 AM - 8:00 AM", batch: "Morning Batch", subjects: "GK & Current Affairs" },
    { time: "10:00 AM - 1:00 PM", batch: "Day Batch", subjects: "Full Syllabus Coverage" },
    { time: "2:00 PM - 5:00 PM", batch: "Afternoon Batch", subjects: "Practice & Doubt Solving" },
    { time: "6:00 PM - 9:00 PM", batch: "Evening Batch", subjects: "Working Professionals" }
  ]

  const studyMaterials = [
    { type: "PDF Notes", icon: <FaFilePdf />, count: "150+", desc: "Comprehensive subject notes" },
    { type: "Video Lectures", icon: <FaVideo />, count: "200+", desc: "Recorded expert sessions" },
    { type: "Practice Sets", icon: <FaBook />, count: "1000+", desc: "Previous year questions" },
    { type: "Mock Tests", icon: <FaChartBar />, count: "50+", desc: "Full length tests" }
  ]

  const strategies = [
    { step: "Assessment Test", desc: "Evaluate current knowledge level" },
    { step: "Customized Plan", desc: "Personalized study schedule" },
    { step: "Concept Building", desc: "Strong foundation in basics" },
    { step: "Regular Practice", desc: "Daily problem solving" },
    { step: "Revision Cycles", desc: "Systematic revision plan" },
    { step: "Mock Tests", desc: "Exam simulation practice" }
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-navy to-navy-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Programs</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive civil service preparation courses designed for success
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 border-b">
            {['courses', 'schedule', 'strategy', 'materials'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold rounded-t-lg transition-colors ${
                  activeTab === tab
                    ? 'bg-navy text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab === 'courses' && 'Courses'}
                {tab === 'schedule' && 'Class Schedule'}
                {tab === 'strategy' && 'Exam Strategy'}
                {tab === 'materials' && 'Study Materials'}
              </button>
            ))}
          </div>

          {/* Courses Tab */}
          {activeTab === 'courses' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy mb-4">Our Courses</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Choose from our comprehensive range of civil service preparation programs
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {courses.map((course) => (
                  <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-navy mb-2">{course.title}</h3>
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center text-gray-600">
                              <FaClock className="mr-2" /> {course.duration}
                            </span>
                            <span className="flex items-center font-bold text-gold">
                              <FaUserGraduate className="mr-2" /> {course.fee}
                            </span>
                          </div>
                        </div>
                        <span className="bg-navy text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Popular
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-navy mb-2">Subjects Covered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {course.subjects.map((subject, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-navy mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {course.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <FaCheck className="text-gold mr-2" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="btn-primary w-full mt-6">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Schedule Tab */}
          {activeTab === 'schedule' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy mb-4">Class Schedule</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Flexible batches to suit different schedules and requirements
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {schedule.map((slot, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-lg p-6 card-hover">
                    <FaCalendar className="text-4xl text-navy mb-4" />
                    <h3 className="text-xl font-bold text-navy mb-2">{slot.batch}</h3>
                    <p className="text-gray-600 mb-3">{slot.time}</p>
                    <p className="text-sm text-gray-500">{slot.subjects}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-navy mb-4">Weekly Routine</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="p-3">Day</th>
                        <th className="p-3">Morning (6-8 AM)</th>
                        <th className="p-3">Day (10-1 PM)</th>
                        <th className="p-3">Evening (6-9 PM)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                        <tr key={day} className="border-b">
                          <td className="p-3 font-semibold">{day}</td>
                          <td className="p-3">Current Affairs</td>
                          <td className="p-3">Full Syllabus</td>
                          <td className="p-3">Practice Session</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Strategy Tab */}
          {activeTab === 'strategy' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy mb-4">Exam Preparation Strategy</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Proven methodology for success in civil service examinations
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {strategies.map((strategy, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-lg p-6 card-hover">
                    <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      {idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2">{strategy.step}</h3>
                    <p className="text-gray-600">{strategy.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-gold text-navy p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <FaQuestionCircle className="mr-3" />
                  Important Tips for Success
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-3" />
                    <span><strong>Consistency is Key:</strong> Regular study beats last-minute cramming</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-3" />
                    <span><strong>Quality over Quantity:</strong> Focus on understanding concepts thoroughly</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-3" />
                    <span><strong>Time Management:</strong> Practice with time limits to improve speed</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-3" />
                    <span><strong>Revision Cycle:</strong> Regular revision helps in long-term retention</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Materials Tab */}
          {activeTab === 'materials' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy mb-4">Study Materials</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Comprehensive resources to support your preparation journey
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {studyMaterials.map((material, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-lg p-6 text-center card-hover">
                    <div className="text-5xl text-navy mb-4 flex justify-center">
                      {material.icon}
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2">{material.type}</h3>
                    <div className="text-3xl font-bold text-gold mb-2">{material.count}</div>
                    <p className="text-gray-600">{material.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-navy text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">How to Access Materials</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2">📚</div>
                    <h4 className="font-bold mb-2">Physical Copies</h4>
                    <p>Collect printed materials from institute library</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">💻</div>
                    <h4 className="font-bold mb-2">Online Portal</h4>
                    <p>Access digital content through student portal</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">📱</div>
                    <h4 className="font-bold mb-2">Mobile App</h4>
                    <p>Study on the go with our mobile application</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">Ready to Start Your Preparation?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our upcoming batch and get access to all study materials, expert guidance, and comprehensive preparation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Download Brochure
            </button>
            <button className="btn-secondary">
              Contact for Admission
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Academics