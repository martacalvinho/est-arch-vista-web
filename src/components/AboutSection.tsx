
import { Award, Users, Compass, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About ArchiEst</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Founded by Paulo Calvinho, ArchiEst is a boutique architecture studio that combines global expertise with local insight.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
            <Award className="text-archiest-blue w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Experience</h3>
            <p className="text-gray-700">
              Over 30 years shaping architecture, with successful projects across Portugal, the Middle East, South America and Africa.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
            <Users className="text-archiest-blue w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Credentials</h3>
            <p className="text-gray-700">
              Certified by the Order of Architects of Portugal (No. 3159), RIBA UK (No. 20015078), and ARB (No. 085479D).
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
            <Compass className="text-archiest-blue w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Approach</h3>
            <p className="text-gray-700">
              Thoughtful, sustainable, and deeply connected to cultural context, always in close collaboration with clients.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
            <Globe className="text-archiest-blue w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Impact</h3>
            <p className="text-gray-700">
              More than just functional spaces—each project enriches its surroundings, creating lasting value for both people and places.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-xl text-gray-700 italic mb-6">
            "Architecture is not just about creating buildings; it's about crafting experiences and environments that enhance lives and communities."
          </blockquote>
          <p className="font-bold text-archiest-blue">— Paulo Calvinho, Founder</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
