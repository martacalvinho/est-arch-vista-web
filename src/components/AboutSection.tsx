
const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <img 
              src="/lovable-uploads/e4fdaa34-a77c-4c8e-aa0b-c4f1f5dd0cd2.png" 
              alt="Design Blueprint with Building" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About ArchiEst</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-gray-700">
                  Over 30 years shaping architecture, with successful projects across Portugal, the Middle East, South America and Africa.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Credentials</h3>
                <p className="text-gray-700">
                  Certified by the Order of Architects of Portugal (No. 3159), RIBA UK (No. 20015078), and ARB (No. 085479D), bringing global expertise to every design.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Approach</h3>
                <p className="text-gray-700">
                  Thoughtful, sustainable, and deeply connected to cultural context, always in close collaboration with clients.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Impact</h3>
                <p className="text-gray-700">
                  More than just functional spaces—each project enriches its surroundings, creating lasting value for both people and places.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
