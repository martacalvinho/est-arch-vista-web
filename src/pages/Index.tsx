
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import ServicesList from '@/components/ServicesList';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <FeaturedProjects />
      <ServicesList />
      
      {/* Call to Action */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let's collaborate to transform your vision into an architectural masterpiece. Contact us today to discuss your ideas.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-archiest-blue text-white font-medium px-8 py-4 rounded-lg hover:bg-archiest-darkblue transition-colors text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
