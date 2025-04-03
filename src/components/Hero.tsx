
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/lovable-uploads/b2813dcc-ff8a-4dd1-ae77-f9f8fb6b1c40.png')",
          backgroundPosition: "center center", 
          backgroundRepeat: "no-repeat", 
          backgroundSize: "cover"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Crafting Timeless Spaces, Designed for Impact
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            ArchiEst is an innovative architecture studio based in Estonia, 
            delivering exceptional architectural solutions with global expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/projects" 
              className="bg-archiest-blue text-white font-medium px-6 py-3 rounded hover:bg-archiest-darkblue transition-colors inline-block text-center"
            >
              Our Projects
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white font-medium px-6 py-3 rounded hover:bg-white hover:text-archiest-blue transition-colors inline-block text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
