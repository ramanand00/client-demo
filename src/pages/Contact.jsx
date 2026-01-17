// src/pages/Contact.jsx
import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa'
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
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

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-navy to-navy-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contact us for admission inquiries, course information, or any other questions
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-navy mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="bg-navy text-white p-3 rounded-lg mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-navy mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/successloksewabiratnagar2080" target="_blank" rel="noopener noreferrer"
                     className="bg-gray-100 text-navy p-3 rounded-lg hover:bg-navy hover:text-white transition-colors">
                    <FaInstagram size={20} />
                  </a>
                  <a href="https://tiktok.com/@successloksewainstitute" target="_blank" rel="noopener noreferrer"
                     className="bg-gray-100 text-navy p-3 rounded-lg hover:bg-navy hover:text-white transition-colors">
                    <FaTiktok size={20} />
                  </a>
                  <a href="https://youtube.com/@successloksewa" target="_blank" rel="noopener noreferrer"
                     className="bg-gray-100 text-navy p-3 rounded-lg hover:bg-navy hover:text-white transition-colors">
                    <FaYoutube size={20} />
                  </a>
                </div>
              </div>

              {/* Quick FAQ */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-bold text-navy mb-4">Quick Questions</h3>
                <ul className="space-y-3">
                  <li>
                    <h4 className="font-semibold">When does the new batch start?</h4>
                    <p className="text-sm text-gray-600">New batches start every month</p>
                  </li>
                  <li>
                    <h4 className="font-semibold">Is scholarship available?</h4>
                    <p className="text-sm text-gray-600">Yes, based on merit and need</p>
                  </li>
                  <li>
                    <h4 className="font-semibold">Can I visit the institute?</h4>
                    <p className="text-sm text-gray-600">Yes, visit during office hours</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form & Map */}
            <div className="lg:col-span-2">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-navy mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-navy"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-navy"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-navy"
                        placeholder="98XXXXXXXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Interested Course</label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-navy"
                      >
                        <option value="">Select a course</option>
                        <option value="foundation">Foundation Course</option>
                        <option value="advance">Advance Course</option>
                        <option value="crash">Crash Course</option>
                        <option value="interview">Interview Preparation</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-navy"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary flex items-center justify-center">
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Map */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy mb-4">Find Us Here</h3>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                    {/* Google Map Embed - Replace with actual embed code */}
                    <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                      <div className="text-center">
                        <FaMapMarkerAlt className="text-4xl text-navy mx-auto mb-4" />
                        <p className="text-navy font-semibold">Success Loksewa Institute</p>
                        <p className="text-gray-600">College Road, Traffic Chowk</p>
                        <p className="text-gray-600">Biratnagar, Nepal</p>
                      </div>
                    </div>
                    {/* Actual Google Map embed code would go here */}
                  </div>
                  
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-navy mb-2">By Public Transport</h4>
                      <p className="text-sm text-gray-600">Located near Traffic Chowk, easily accessible by buses, tempos, and taxis</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-navy mb-2">Parking Available</h4>
                      <p className="text-sm text-gray-600">Ample parking space for two-wheelers and four-wheelers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-gold text-navy py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl mb-6">Call us directly for urgent admission or inquiry</p>
          <a href="tel:981-9302784" className="text-3xl font-bold hover:underline">
            📞 981-9302784
          </a>
        </div>
      </section>
    </>
  )
}

export default Contact