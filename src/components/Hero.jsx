import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative pt-24 pb-32 bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
              Professional Pool Service & Repair
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-100 max-w-xl">
              Keeping your pool crystal clear and perfectly maintained since 2009. 
              Serving Lagrange, GA, Valley, AL and surrounding areas with expert pool care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50">
                Get a Free Quote
              </Link>
              <Link to="/services" className="btn border-2 border-white text-white hover:bg-white/10">
                Our Services
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 rounded-full blur-xl"></div>
              <img 
                src="https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Beautiful swimming pool" 
                className="rounded-lg shadow-2xl relative z-10 w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated wave pattern */}
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-40 h-40 bg-secondary-400 rounded-full opacity-10 blur-2xl"></div>
    </section>
  )
}

export default Hero
