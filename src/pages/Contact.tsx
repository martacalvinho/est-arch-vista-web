
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" 
             style={{ backgroundImage: "url('/lovable-uploads/5855bb91-b7d0-44b8-8db9-37ee53d2deec.png')" }}>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Get in touch with our team to discuss your architectural project or any inquiries you may have.
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              We'd love to hear from you. Reach out directly through the following channels:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                <MapPin className="w-10 h-10 text-archiest-blue mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Office Location</h3>
                <p className="text-gray-600">
                  Tallinn, Estonia
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                <Mail className="w-10 h-10 text-archiest-blue mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Email Address</h3>
                <a href="mailto:info@archiest.eu" className="text-archiest-blue hover:underline">
                  info@archiest.eu
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                <Phone className="w-10 h-10 text-archiest-blue mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Phone Number</h3>
                <p className="text-gray-600">
                  +351 912 010 201
                </p>
              </div>
            </div>
            
            <div className="mt-16">
              <h3 className="font-semibold text-gray-800 mb-4 text-center text-xl">Working Hours</h3>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <p className="font-medium text-archiest-blue mb-2">Monday - Friday</p>
                  <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                </div>
                <div className="text-center">
                  <p className="font-medium text-archiest-blue mb-2">Saturday</p>
                  <p className="text-gray-600">By appointment only</p>
                </div>
                <div className="text-center">
                  <p className="font-medium text-archiest-blue mb-2">Sunday</p>
                  <p className="text-gray-600">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Location</h2>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="ArchiEst Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.7592997895788!2d24.74187307680272!3d59.437008296977505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692935c7d8bc5a5%3A0xe2e1c8de7f932e1b!2sTallinn%2C%20Estonia!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
