
import { Building, Building2, Lightbulb, Home, PenTool, RefreshCw, Compass, Zap, Database, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Service categories
const services = [
  {
    id: 1,
    title: 'Residential Architecture',
    description: 'Custom homes, apartments, and housing developments that combine functionality with beautiful design and personal expression.',
    icon: <Home className="w-12 h-12" />,
    features: [
      'Custom home design',
      'Multi-family residential development',
      'Luxury apartment interiors',
      'Housing masterplans',
      'Renovation and extensions'
    ]
  },
  {
    id: 2,
    title: 'Commercial Architecture',
    description: 'Innovative office buildings, retail spaces, and hospitality projects that enhance business operations and create memorable experiences.',
    icon: <Building className="w-12 h-12" />,
    features: [
      'Office buildings and workspaces',
      'Retail and shopping centers',
      'Restaurants and cafes',
      'Hotels and resorts',
      'Mixed-use developments'
    ]
  },
  {
    id: 3,
    title: 'BIM and Virtual Reality Consulting',
    description: 'Advanced Building Information Modeling services and immersive VR experiences to visualize projects before construction begins.',
    icon: <Lightbulb className="w-12 h-12" />,
    features: [
      '3D BIM modeling and coordination',
      'Virtual reality project visualization',
      'Clash detection and resolution',
      'Digital construction sequencing',
      'As-built documentation'
    ]
  },
  {
    id: 4,
    title: 'Sustainable Projects and Smart Buildings',
    description: 'Environmentally conscious design solutions that minimize ecological impact while maximizing energy efficiency and occupant comfort.',
    icon: <Building2 className="w-12 h-12" />,
    features: [
      'LEED and BREEAM certification consulting',
      'Energy-efficient design strategies',
      'Green building materials selection',
      'Smart building technology integration',
      'Renewable energy systems planning'
    ]
  },
  {
    id: 5,
    title: 'Building Rehabilitation and Retrofit',
    description: 'Thoughtful renovation and rehabilitation of existing structures, preserving architectural heritage while improving functionality.',
    icon: <RefreshCw className="w-12 h-12" />,
    features: [
      'Historic building rehabilitation',
      'Adaptive reuse of existing structures',
      'Energy retrofits',
      'Accessibility improvements',
      'Building systems modernization'
    ]
  },
  {
    id: 6,
    title: 'Interior Design',
    description: 'Comprehensive interior solutions that transform spaces with thoughtful layouts, custom furniture, material selection, and lighting design.',
    icon: <PenTool className="w-12 h-12" />,
    features: [
      'Space planning and optimization',
      'Custom furniture design',
      'Material and finish selection',
      'Lighting design',
      'Color and texture consulting'
    ]
  },
  {
    id: 7,
    title: 'Urban Planning',
    description: 'Strategic planning for urban spaces that promote sustainability, connectivity, and quality of life for communities.',
    icon: <Compass className="w-12 h-12" />,
    features: [
      'Master planning',
      'Urban revitalization',
      'Transit-oriented development',
      'Public space design',
      'Zoning and land use analysis'
    ]
  },
  {
    id: 8,
    title: 'Project Management',
    description: 'Comprehensive oversight of architectural projects from concept to completion, ensuring quality execution and timely delivery.',
    icon: <Zap className="w-12 h-12" />,
    features: [
      'Budget development and management',
      'Schedule planning and monitoring',
      'Contractor selection and coordination',
      'Construction administration',
      'Quality control and inspection'
    ]
  },
  {
    id: 9,
    title: 'Feasibility Studies',
    description: 'In-depth analysis to evaluate project viability, identify potential challenges, and develop effective implementation strategies.',
    icon: <Database className="w-12 h-12" />,
    features: [
      'Site analysis and evaluation',
      'Regulatory and zoning assessment',
      'Financial feasibility analysis',
      'Market and demographic research',
      'Constraints and opportunities mapping'
    ]
  },
  {
    id: 10,
    title: 'Design Consultation',
    description: 'Expert consultation on architectural and design matters, providing valuable insights and solutions for your project needs.',
    icon: <Users className="w-12 h-12" />,
    features: [
      'Design review and feedback',
      'Material and product recommendations',
      'Style and concept development',
      'Technical and regulatory guidance',
      'Sustainable design strategies'
    ]
  }
];

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" 
             style={{ backgroundImage: "url('/lovable-uploads/e4fdaa34-a77c-4c8e-aa0b-c4f1f5dd0cd2.png')" }}>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Comprehensive architectural solutions tailored to your unique vision and requirements.
          </p>
        </div>
      </section>
      
      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From initial concept to final execution, we provide end-to-end architectural services that bring your vision to life with precision and creativity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map(service => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="bg-archiest-blue/10 p-4 rounded-full inline-flex mb-6">
                    <span className="text-archiest-blue">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h4 className="font-semibold text-archiest-blue mb-4">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-archiest-blue mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Design Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured yet flexible approach to ensure your project's success from concept to completion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 rounded-full bg-archiest-blue text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-gray-600">We begin by understanding your vision, requirements, and constraints through in-depth consultation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 rounded-full bg-archiest-blue text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-3">Concept Design</h3>
              <p className="text-gray-600">We develop initial design concepts that align with your goals and respond to site conditions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 rounded-full bg-archiest-blue text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-gray-600">The chosen concept evolves into detailed drawings with materials, systems, and specifications.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 rounded-full bg-archiest-blue text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-3">Realization</h3>
              <p className="text-gray-600">We oversee construction to ensure the design is executed according to specifications and standards.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-archiest-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your architectural needs and how our services can bring your vision to life.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-archiest-blue font-medium px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
