// src/pages/Notices.jsx
const Notices = () => {
  return (
    <>
      <section className="relative bg-gradient-to-r from-navy to-navy-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Official Notices</h1>
          <p className="text-xl text-gray-300">Important announcements and updates</p>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container mx-auto">
          {/* Notices content */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy mb-8">Notices Board Coming Soon</h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default Notices