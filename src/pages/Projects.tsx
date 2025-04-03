
import { useState } from 'react';

// Project categories
const categories = ["All", "Residential", "Commercial", "Educational", "Hospitality", "Industrial"];

// Project data
const projects = [
  {
    id: 1,
    title: 'Luxury Apartments',
    location: 'Lisbon, Portugal',
    category: 'Residential',
    imageSrc: '/lovable-uploads/024ac5c7-ac59-48b9-bdbd-11381d4a4073.png',
    description: 'High-end residential development featuring elegant interiors and panoramic city views.'
  },
  {
    id: 2,
    title: 'Masterplan Guincho',
    location: 'Lisbon, Portugal',
    category: 'Residential',
    imageSrc: '/lovable-uploads/19d73f25-4d8e-4971-8904-9c68e38b4435.png',
    description: 'Comprehensive residential development with integrated amenities and natural landscape design.'
  },
  {
    id: 3,
    title: 'Restaurant Republica 51',
    location: 'Lisbon, Portugal',
    category: 'Commercial',
    imageSrc: '/lovable-uploads/2a933528-c9ae-4c98-8c8a-1f0cafcdc903.png',
    description: 'Modern dining establishment with innovative space planning and distinctive visual identity.'
  },
  {
    id: 4,
    title: 'American School of Lisbon',
    location: 'Lisbon, Portugal',
    category: 'Educational',
    imageSrc: '/lovable-uploads/546def6a-a606-4a2d-bc3e-e389e2d53adb.png',
    description: 'Contemporary educational facility designed to enhance learning experiences and foster creativity.'
  },
  {
    id: 5,
    title: 'Nisa Boutique Hotel',
    location: 'Nisa, Portugal',
    category: 'Hospitality',
    imageSrc: '/lovable-uploads/afeaa000-1164-4b46-84b6-23579755b0e9.png',
    description: 'Intimate hospitality project that blends modern comfort with local architectural traditions.'
  },
  {
    id: 6,
    title: 'Apartments / Offices',
    location: 'Luanda, Angola',
    category: 'Commercial',
    imageSrc: '/lovable-uploads/ac8d0594-d9bb-4583-9b91-ca2d4478451e.png',
    description: 'Mixed-use development combining residential and commercial spaces in a tropical setting.'
  },
  {
    id: 7,
    title: 'Apartments',
    location: 'Estoril, Portugal',
    category: 'Residential',
    imageSrc: '/lovable-uploads/b2813dcc-ff8a-4dd1-ae77-f9f8fb6b1c40.png',
    description: 'Luxury residential complex featuring contemporary design and premium amenities.'
  },
  {
    id: 8,
    title: 'Beloura Office Park',
    location: 'Sintra, Portugal',
    category: 'Commercial',
    imageSrc: '/lovable-uploads/6788d3f7-5b3b-4524-a4f5-645e7fee01d0.png',
    description: 'Corporate office complex with distinctive architectural elements and landscaped surroundings.'
  },
  {
    id: 9,
    title: 'Luxury Shops Talatona',
    location: 'Angola',
    category: 'Commercial',
    imageSrc: '/lovable-uploads/fec698e0-be0c-472c-98bf-56d55639fa29.png',
    description: 'Premium retail development featuring elegant design and high-end shopping experience.'
  },
  {
    id: 10,
    title: 'Housing Towers',
    location: 'Luanda, Angola',
    category: 'Residential',
    imageSrc: '/lovable-uploads/bdef0170-02c0-4dd5-a475-e938a5c4973c.png',
    description: 'High-rise residential towers with modern amenities and spectacular views.'
  },
  {
    id: 11,
    title: 'Loanda Towers',
    location: 'Luanda, Angola',
    category: 'Commercial',
    imageSrc: '/lovable-uploads/f1eef36f-a4f9-4d2c-a34b-9788d8b7b339.png',
    description: 'Iconic twin towers featuring mixed-use spaces with contemporary architectural design.'
  },
  {
    id: 12,
    title: 'Multi Brands Dealer',
    location: 'Torres Vedras, Portugal',
    category: 'Commercial',
    imageSrc: '/lovable-uploads/5855bb91-b7d0-44b8-8db9-37ee53d2deec.png',
    description: 'Automotive showroom with innovative facade design and flexible interior spaces.'
  },
  {
    id: 13,
    title: 'Oil Laboratory',
    location: 'Algeria',
    category: 'Industrial',
    imageSrc: '/lovable-uploads/f8cad6ef-74c6-4949-9ec3-f21bf772e4dd.png',
    description: 'Specialized industrial facility with unique architectural features and technical specifications.'
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openProjectDetails = (project: typeof projects[0]) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" 
             style={{ backgroundImage: "url('/lovable-uploads/f1eef36f-a4f9-4d2c-a34b-9788d8b7b339.png')" }}>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Projects</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Explore our portfolio of architectural projects spanning residential, commercial, educational, and public spaces.
          </p>
        </div>
      </section>
      
      {/* Projects Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map(category => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-archiest-blue text-white' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="project-card group relative cursor-pointer overflow-hidden rounded-lg shadow-lg h-[350px]"
                onClick={() => openProjectDetails(project)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src={project.imageSrc} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-archiest-blue text-white rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-300">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.imageSrc} 
                alt={selectedProject.title}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              <button 
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={closeProjectDetails}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-archiest-blue text-white rounded-full mb-2">
                {selectedProject.category}
              </span>
              <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
              <p className="text-gray-600 mb-4">{selectedProject.location}</p>
              <p className="text-gray-700">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
