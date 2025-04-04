
import { Link } from 'react-router-dom';
import TestimonialSection from '@/components/TestimonialSection';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" 
             style={{ backgroundImage: "url('/lovable-uploads/b9877e1a-f802-4028-b074-de86c32c97b4.png')" }}>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
            Crafting Timeless Spaces, Designed for Impact
          </h2>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Founded by Paulo Calvinho, ArchiEst emerges from over three decades of architectural expertise across multiple continents. Established in Estonia, our studio brings together international experience with local understanding to create spaces that stand the test of time.
              </p>
              <p className="text-gray-700 mb-6">
                Our team comprises talented architects, designers, and consultants who share a passion for innovative design and sustainable building practices. We believe architecture should not only solve practical problems but also enhance the human experience and contribute positively to the environment.
              </p>
              <p className="text-gray-700">
                From residential projects to commercial developments and public institutions, we approach each design challenge with fresh perspective and deep respect for context, culture, and community.
              </p>
            </div>
            
            <div className="w-full md:w-1/2 space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Experience</h3>
                <p className="text-gray-700">
                  Over 30 years shaping architecture, with successful projects across Portugal, the Middle East, South America and Africa.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Credentials</h3>
                <p className="text-gray-700">
                  Certified by the Order of Architects of Portugal (No. 3159), RIBA UK (No. 20015078), and ARB (No. 085479D), bringing global expertise to every design.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Approach</h3>
                <p className="text-gray-700">
                  Thoughtful, sustainable, and deeply connected to cultural context, always in close collaboration with clients.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Impact</h3>
                <p className="text-gray-700">
                  More than just functional spaces—each project enriches its surroundings, creating lasting value for both people and places.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Meet Our Founder</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/4 md:mt-1">
              <img 
                src="/founder.jpg" 
                alt="Paulo Calvinho" 
                className="rounded-lg shadow-lg w-full object-cover max-h-[400px]"
              />
            </div>
            
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-semibold mb-4">Paulo Calvinho</h3>
              <p className="text-gray-700 mb-6">
                With a distinguished career spanning over three decades, Paulo Calvinho has established himself as a visionary in the architectural world. His work transcends borders, with award-winning projects across four continents that demonstrate his versatility and deep understanding of diverse cultural contexts.
              </p>
              <p className="text-gray-700 mb-6">
                Paulo's design philosophy centers on creating meaningful spaces that respond to human needs while respecting environmental considerations. He believes in architecture as a powerful tool for positive change, capable of enhancing quality of life and contributing to sustainable communities.
              </p>
              <p className="text-gray-700">
                As the founder of ArchiEst, Paulo brings his global expertise to Estonia, creating a studio that combines international perspective with local sensitivity. His leadership inspires our team to push boundaries and pursue excellence in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialSection />
      
      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're excited to learn about your project and explore how we can bring your vision to life.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-archiest-blue text-white font-medium px-8 py-4 rounded-lg hover:bg-archiest-darkblue transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
