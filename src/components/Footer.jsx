import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-300">Pool Supplies & Service</h3>
            <p className="mb-4 text-gray-400">
              Professional swimming pool maintenance, repair, and supplies in Lanett, AL. 
              Serving the community since 2009.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-300 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-300 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-300 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-300">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-primary-300" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:3347447772" className="hover:text-primary-300 transition-colors">(334) 744-7772</a>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-primary-300" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:waitedk@charter.net" className="hover:text-primary-300 transition-colors">waitedk@charter.net</a>
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary-300" />
                <div>
                  <p className="text-gray-400">Location</p>
                  <p>Lanett, AL</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-950 py-4">
        <div className="container text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Pool Supplies and Service. All rights reserved.</p>
          <p className="mt-1">Established 2009 | Owner: Daryl Waites</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
