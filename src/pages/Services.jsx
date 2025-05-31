import { motion } from 'framer-motion'
import ServicesList from '../components/ServicesList'
import CallToAction from '../components/CallToAction'

const Services = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">Our Services</h1>
            <p className="text-lg text-primary-100">
              Comprehensive pool maintenance and repair services to keep your pool in perfect condition year-round.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container">
          <ServicesList />
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
            >
              <h2 className="text-3xl font-bold mb-4">Custom Service Plans</h2>
              <p className="text-gray-600 mb-4">
                We understand that every pool is different, and so are the needs of pool owners. That's why we offer customized service plans tailored to your specific requirements and budget.
              </p>
              <p className="text-gray-600 mb-4">
                Whether you need weekly maintenance, occasional service, or just help with specific issues, we can create a plan that works for you.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Weekly maintenance plans</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Bi-weekly service options</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>One-time cleanings and repairs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Seasonal opening and closing services</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Service Process</h3>
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">1</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Initial Consultation</h4>
                    <p className="text-gray-600">We assess your pool's condition and discuss your specific needs and concerns.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">2</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Customized Plan</h4>
                    <p className="text-gray-600">We create a service plan tailored to your pool's requirements and your budget.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">3</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Regular Service</h4>
                    <p className="text-gray-600">We perform scheduled maintenance or repairs according to the agreed plan.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">4</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Follow-up</h4>
                    <p className="text-gray-600">We ensure your satisfaction and make adjustments to the service plan as needed.</p>
                  </div>
                </li>
              </ol>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
              <p className="text-gray-600 text-lg">
                We provide pool services throughout Lagrange, GA, Valley, AL and surrounding areas.
              </p>
            </motion.div>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg inline-block mx-auto"
            >
              <h3 className="text-2xl font-bold mb-3">Lagrange, GA, Valley, AL and Surrounding Areas</h3>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  )
}

export default Services
