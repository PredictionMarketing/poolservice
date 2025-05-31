import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ServicesList from '../components/ServicesList'
import TestimonialsList from '../components/TestimonialsList'
import CallToAction from '../components/CallToAction'
import WhyChooseUs from '../components/WhyChooseUs'

const Home = () => {
  return (
    <>
      <Hero />
      
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-600 text-lg">
                We provide comprehensive pool maintenance and repair services to keep your pool in perfect condition year-round.
              </p>
            </motion.div>
          </div>
          
          <ServicesList limit={3} />
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      <WhyChooseUs />
      
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-gray-600 text-lg">
                Don't just take our word for it. Here's what our satisfied customers have to say about our services.
              </p>
            </motion.div>
          </div>
          
          <TestimonialsList limit={3} />
          
          <div className="text-center mt-12">
            <Link to="/about#testimonials" className="btn btn-outline">
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Pool Service Since 2009</h2>
              <p className="text-gray-600 text-lg mb-6">
                Pool Supplies and Service has been providing expert pool maintenance and repair services to Lagrange and Valley areas for over a decade.
              </p>
              <p className="text-gray-600 mb-6">
                Owner Daryl Waites personally handles all service calls, ensuring the highest quality of work and customer satisfaction. With years of experience and a dedication to excellence, Daryl has built a reputation for reliable, professional service.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Professional pool service" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  )
}

export default Home
