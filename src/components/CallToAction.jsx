import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CallToAction = () => {
  return (
    <section className="bg-primary-700 py-16">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Crystal Clear, Hassle-Free Pool Maintenance?
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Contact us today for a free consultation and quote. Let us handle the work while you enjoy your pool!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50">
              Get a Free Quote
            </Link>
            <a href="tel:3347447772" className="btn border-2 border-white text-white hover:bg-white/10">
              Call (334) 744-7772
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
