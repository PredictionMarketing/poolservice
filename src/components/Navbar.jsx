import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-primary-800/80 py-4'}`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <span className={`text-2xl font-bold font-display ${isScrolled ? 'text-primary-600' : 'text-white'}`}>Pool Supplies & Service</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <NavLink to="/" className={({ isActive }) => 
              isActive 
                ? `font-medium ${isScrolled ? 'text-primary-700' : 'text-white bg-primary-600/70 px-3 py-1 rounded'}` 
                : `${isScrolled ? 'text-gray-700 hover:text-primary-700' : 'text-white hover:bg-primary-600/50 px-3 py-1 rounded'} transition-colors`
            }>
              Home
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => 
              isActive 
                ? `font-medium ${isScrolled ? 'text-primary-700' : 'text-white bg-primary-600/70 px-3 py-1 rounded'}` 
                : `${isScrolled ? 'text-gray-700 hover:text-primary-700' : 'text-white hover:bg-primary-600/50 px-3 py-1 rounded'} transition-colors`
            }>
              Services
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              isActive 
                ? `font-medium ${isScrolled ? 'text-primary-700' : 'text-white bg-primary-600/70 px-3 py-1 rounded'}` 
                : `${isScrolled ? 'text-gray-700 hover:text-primary-700' : 'text-white hover:bg-primary-600/50 px-3 py-1 rounded'} transition-colors`
            }>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              isActive 
                ? `font-medium ${isScrolled ? 'text-primary-700' : 'text-white bg-primary-600/70 px-3 py-1 rounded'}` 
                : `${isScrolled ? 'text-gray-700 hover:text-primary-700' : 'text-white hover:bg-primary-600/50 px-3 py-1 rounded'} transition-colors`
            }>
              Contact
            </NavLink>
          </nav>
          
          <a href="tel:3347447772" className={`flex items-center font-medium ${isScrolled ? 'text-primary-600' : 'text-white bg-primary-600 px-4 py-2 rounded-md'}`}>
            <FaPhone className="mr-2" />
            (334) 744-7772
          </a>
        </div>

        <button 
          className={`md:hidden focus:outline-none ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ${isOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'}`}>
        <nav className="container flex flex-col space-y-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "text-white bg-primary-600 font-medium px-4 py-2 rounded" : "text-gray-700 hover:bg-primary-50 hover:text-primary-700 px-4 py-2 rounded transition-colors"
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              isActive ? "text-white bg-primary-600 font-medium px-4 py-2 rounded" : "text-gray-700 hover:bg-primary-50 hover:text-primary-700 px-4 py-2 rounded transition-colors"
            }
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "text-white bg-primary-600 font-medium px-4 py-2 rounded" : "text-gray-700 hover:bg-primary-50 hover:text-primary-700 px-4 py-2 rounded transition-colors"
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? "text-white bg-primary-600 font-medium px-4 py-2 rounded" : "text-gray-700 hover:bg-primary-50 hover:text-primary-700 px-4 py-2 rounded transition-colors"
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <a 
            href="tel:3347447772" 
            className="flex items-center text-white bg-primary-600 font-medium px-4 py-2 rounded"
            onClick={closeMenu}
          >
            <FaPhone className="mr-2" />
            (334) 744-7772
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
