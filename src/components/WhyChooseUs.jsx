import { motion } from 'framer-motion'
import { FaCheckCircle, FaClock, FaUserTie, FaTools, FaThumbsUp } from 'react-icons/fa'

const reasons = [
  {
    id: 1,
    title: 'Experienced Professional',
    description: 'With over 14 years of experience, Daryl has the expertise to handle any pool issue efficiently and effectively.',
    icon: <FaUserTie size={24} className="text-primary-500" />,
  },
  {
    id: 2,
    title: 'Reliable Service',
    description: 'Count on consistent, on-time service that keeps your pool in perfect condition year-round.',
    icon: <FaClock size={24} className="text-primary-500" />,
  },
  {
    id: 3,
    title: 'Quality Equipment',
    description: 'We use only high-quality chemicals and equipment to ensure the best results for your pool.',
    icon: <FaTools size={24} className="text-primary-500" />,
  },
  {
    id: 4,
    title: 'Personalized Attention',
    description: 'As a solo owner-operator, Daryl provides personalized service tailored to your specific pool needs.',
    icon: <FaCheckCircle size={24} className="text-primary-500" />,
  },
  {
    id: 5,
    title: 'Customer Satisfaction',
    description: 'Our long-standing customers are a testament to our commitment to excellence and satisfaction.',
    icon: <FaThumbsUp size={24} className="text-primary-500" />,
  },
]

const WhyChooseUs = () => {
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
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-lg">
            Pool Supplies and Service has been the trusted choice for pool maintenance and repair in the Lagrange, GA, Valley, AL and surrounding areas since 2009. Here's why our customers choose us:
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((reason) => (
            <motion.div 
              key={reason.id} 
              className="bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">{reason.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
