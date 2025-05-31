import { useState } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Michael Johnson',
    location: 'Auburn, AL',
    quote: 'Daryl has been maintaining our pool for over 5 years now. His service is reliable, thorough, and he always goes the extra mile. Our pool has never looked better!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Williams',
    location: 'Opelika, AL',
    quote: 'When our pool heater stopped working, Daryl came out the same day and had it fixed in no time. His knowledge and quick service saved our weekend pool party!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Robert Thompson',
    location: 'Auburn, AL',
    quote: 'As new pool owners, we were overwhelmed with maintenance. Daryl not only keeps our pool in perfect condition but has taught us so much about proper pool care.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Jennifer Davis',
    location: 'Auburn, AL',
    quote: 'Pool Supplies and Service has been handling our commercial property pool for years. Always professional, always on time, and always perfect results.',
    rating: 5,
  },
  {
    id: 5,
    name: 'David Wilson',
    location: 'Opelika, AL',
    quote: 'Daryl helped us upgrade our old pool equipment to more energy-efficient options. We\'ve seen a significant decrease in our utility bills since the upgrade.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Amanda Miller',
    location: 'Auburn, AL',
    quote: 'I\'ve used several pool services in the past, but none compare to the attention to detail and quality of service that Daryl provides. Highly recommended!',
    rating: 5,
  },
]

const TestimonialsList = ({ limit }) => {
  const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials
  const [activeIndex, setActiveIndex] = useState(0)
  
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index}
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }
  
  if (limit) {
    // Grid layout for homepage
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayTestimonials.map((testimonial) => (
          <motion.div 
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="testimonial-card"
          >
            <div className="flex mb-3">{renderStars(testimonial.rating)}</div>
            <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    )
  }
  
  // Carousel layout for testimonials page
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full px-4">
              <div className="max-w-3xl mx-auto testimonial-card">
                <div className="flex justify-center mb-4">{renderStars(testimonial.rating)}</div>
                <p className="text-xl italic text-gray-600 text-center mb-6">"{testimonial.quote}"</p>
                <div className="text-center">
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-primary-600' : 'bg-gray-300'}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      
      <button
        onClick={() => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-primary-600 hover:bg-primary-50"
        aria-label="Previous testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-primary-600 hover:bg-primary-50"
        aria-label="Next testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default TestimonialsList
