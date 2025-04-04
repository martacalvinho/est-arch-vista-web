
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white">ArchiEst</h3>
            <p className="text-gray-400 mb-4">
              Transforming spaces with innovative architectural design. Based in Estonia with global expertise.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Residential Architecture</li>
              <li className="text-gray-400">Commercial Architecture</li>
              <li className="text-gray-400">BIM Consulting</li>
              <li className="text-gray-400">Sustainable Projects</li>
              <li className="text-gray-400">Interior Design</li>
              <li className="text-gray-400">Project Management</li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-archiest-lightblue" />
                <span className="text-gray-400">Tallinn, Estonia</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-archiest-lightblue" />
                <a href="mailto:info@archiest.eu" className="text-gray-400 hover:text-white transition-colors">info@archiest.eu</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-archiest-lightblue" />
                <span className="text-gray-400">+351 912 010 201</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} ArchiEst. All rights reserved. Designed by Paulo Calvinho.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
