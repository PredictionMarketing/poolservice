import { Link } from 'react-router-dom'
import { FaSwimmingPool, FaTools, FaWater, FaLeaf, FaThermometerHalf, FaWrench, FaTape, FaListUl } from 'react-icons/fa'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'Regular Pool Maintenance',
    description: 'Weekly or bi-weekly maintenance to keep your pool clean and balanced. Includes skimming, vacuuming, brushing, and chemical balancing.',
    icon: <FaSwimmingPool size={36} className="text-primary-500" />,
  },
  {
    id: 2,
    title: 'Equipment Repair',
    description: 'Expert repair services for pumps, filters, heaters, and other pool equipment. Fast and reliable service to minimize downtime.',
    icon: <FaTools size={36} className="text-primary-500" />,
  },
  {
    id: 3,
    title: 'Water Testing & Treatment',
    description: 'Professional water testing and chemical balancing to ensure your pool water is safe, clear, and properly sanitized.',
    icon: <FaWater size={36} className="text-primary-500" />,
  },
  {
    id: 4,
    title: 'Pool Opening & Closing',
    description: 'Seasonal services to properly open your pool for summer enjoyment and close it for winter protection.',
    icon: <FaLeaf size={36} className="text-primary-500" />,
  },
  {
    id: 5,
    title: 'Equipment Installation',
    description: 'Installation of pumps, filters, heaters, salt cells, and other pool equipment to enhance your pool system performance and efficiency.',
    icon: <FaThermometerHalf size={36} className="text-primary-500" />,
  },
  {
    id: 6,
    title: 'Equipment Upgrades',
    description: 'Upgrade to energy-efficient, modern pool equipment to save on operating costs and improve performance.',
    icon: <FaWrench size={36} className="text-primary-500" />,
  },
  {
    id: 7,
    title: 'Liner Installation and Leak Repair',
    description: 'Professional installation of new pool liners and expert leak detection and repair services to keep your pool watertight and looking great.',
    icon: <FaTape size={36} className="text-primary-500" />,
  },
  {
    id: 8,
    title: 'Other Services',
    description: 'Additional pool services including sand changes, filter cleaning, safety cover installation, and more. Contact us for any specialized pool service needs.',
    icon: <FaListUl size={36} className="text-primary-500" />,
  },
]

const ServicesList = ({ limit }) => {
  const displayServices = limit ? services.slice(0, limit) : services
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }
  
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {displayServices.map((service) => (
        <motion.div 
          key={service.id} 
          className="service-card"
          variants={itemVariants}
        >
          <div className="mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <Link to="/contact" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
            Request Service
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ServicesList
