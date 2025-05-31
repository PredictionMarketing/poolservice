import { motion } from 'framer-motion'
import TestimonialsList from '../components/TestimonialsList'
import CallToAction from '../components/CallToAction'

const About = () => {
  return (
    <>
      <section className="pt-32 pb-16 bg-primary-600 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">About Us</h1>
            <p className="text-lg text-primary-100">
              Professional pool service and maintenance since 2009. Learn more about our business and commitment to quality.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Pool Supplies and Service was established in 2009 by Daryl Waites with a simple mission: to provide reliable, high-quality pool maintenance services to the Lagrange, GA, Valley, AL and surrounding areas.
              </p>
              <p className="text-gray-600 mb-4">
                With a background in pool maintenance and a passion for customer service, Daryl built the business from the ground up, focusing on personalized attention and consistent results.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, Pool Supplies and Service has grown through word-of-mouth referrals from satisfied customers who appreciate the attention to detail and professional service that Daryl provides.
              </p>
              <p className="text-gray-600">
                Today, we continue to serve the Lagrange, GA, Valley, AL and surrounding areas with the same dedication to quality and customer satisfaction that has been our hallmark since day one.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Beautiful backyard swimming pool with clear blue water" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <img 
                src="https://hunamarketing.s3.us-east-1.amazonaws.com/swimming+pool+baby+pool+supplies+and+service+lanett+al.jpg" 
                alt="Pool Supplies and Service - Daryl Waites" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold mb-6">Meet Daryl Waites</h2>
              <p className="text-gray-600 mb-4">
                As the owner and sole operator of Pool Supplies and Service, Daryl personally handles all aspects of the business, from routine maintenance to complex repairs.
              </p>
              <p className="text-gray-600 mb-4">
                With over 14 years of experience in the pool service industry, Daryl has developed a deep understanding of pool systems and the expertise to diagnose and resolve issues efficiently.
              </p>
              <p className="text-gray-600 mb-4">
                Daryl's commitment to quality and personal service means that customers work directly with him on every service call, ensuring consistent results and clear communication.
              </p>
              <p className="text-gray-600">
                When you choose Pool Supplies and Service, you're getting Daryl's personal attention and expertise, not a rotating crew of technicians.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section id="testimonials" className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Customer Testimonials</h2>
              <p className="text-gray-600 text-lg">
                Don't just take our word for it. Here's what our satisfied customers have to say about our services.
              </p>
            </motion.div>
          </div>
          
          <TestimonialsList />
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-gray-600 text-lg mb-12">
                At Pool Supplies and Service, we believe in a straightforward approach to pool maintenance that focuses on quality, reliability, and customer satisfaction.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality First</h3>
              <p className="text-gray-600">
                We never cut corners. Every service call receives the same attention to detail and commitment to excellence.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Reliability</h3>
              <p className="text-gray-600">
                You can count on us to show up on time, every time, and to complete the work as promised.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Communication</h3>
              <p className="text-gray-600">
                We believe in clear, honest communication about your pool's needs and our services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  )
}

export default About
