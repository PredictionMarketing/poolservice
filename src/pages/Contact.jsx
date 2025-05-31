import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <section className="pt-32 pb-16 bg-primary-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">Contact Us</h1>
            <p className="text-lg text-primary-100">
              Have questions or ready to schedule service? Get in touch with us today.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Whether you need regular pool maintenance, equipment repair, or just have questions about our services, we're here to help. Contact us using the form or the information below.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <FaPhone className="text-primary-600 text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <a href="tel:3347447772" className="text-gray-600 hover:text-primary-600 transition-colors">
                        (334) 744-7772
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <FaEnvelope className="text-primary-600 text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <a href="mailto:waitedk@charter.net" className="text-gray-600 hover:text-primary-600 transition-colors">
                        waitedk@charter.net
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <FaClock className="text-primary-600 text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: By appointment</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Service Area</h3>
                  <p className="text-gray-600 mb-2">
                    We provide pool services throughout Lagrange, GA, Valley, AL and surrounding areas.
                  </p>
                  <p className="text-gray-600">
                    For locations outside our primary service area, please contact us to discuss availability.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-lg">
                Find answers to common questions about our pool services.
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">How often should I have my pool serviced?</h3>
                <p className="text-gray-600">
                  For most residential pools, weekly service is recommended during the swimming season. This ensures proper chemical balance and cleanliness. During off-seasons, bi-weekly service may be sufficient.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">What is included in regular pool maintenance?</h3>
                <p className="text-gray-600">
                  Our regular maintenance includes skimming the surface, vacuuming the pool floor, brushing walls and steps, cleaning the filter as needed, checking and adjusting chemical levels, and inspecting equipment for proper operation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Do you offer one-time cleaning services?</h3>
                <p className="text-gray-600">
                  Yes, we offer one-time cleaning services for special occasions or if you need help getting your pool back in shape after a period of neglect.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">When should I open and close my pool?</h3>
                <p className="text-gray-600">
                  In the Lagrange and Valley area, most pools are opened in late March or early April and closed in late September or October, depending on the weather. We recommend scheduling these services in advance as these are busy times.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Do you provide emergency services?</h3>
                <p className="text-gray-600">
                  Yes, we understand that pool issues don't always happen during business hours. Contact us for emergency service availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
