import { useState } from 'react';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ProjectDetail from '@/components/projects/ProjectDetail';

// Project data
const projects = [
  {
    id: 1,
    title: 'Luxury Apartments',
    location: 'Lisbon, Portugal',
    category: 'Residential',
    imageSrc: '/lovable-uploads/024ac5c7-ac59-48b9-bdbd-11381d4a4073.png',
    imageGallery: [
      '/lovable-uploads/f3fa240b-5afc-4778-b42a-20bfed790409.png',
      '/lovable-uploads/3e8b0ceb-4ba5-4d58-b47e-364575865056.png',
      '/lovable-uploads/6dff6b77-a505-4bca-8126-a8a851c32e2b.png',
      '/lovable-uploads/50f66b7b-edd4-4f56-bafd-439a7c365858.png'
    ],
    description: 'High-end residential development featuring elegant interiors and panoramic city views.'
  },
  {
    id: 2,
    title: 'Masterplan Guincho',
    location: 'Lisbon, Portugal',
    category: 'Residential',
    imageSrc: '/lovable-uploads/19d73f25-4d8e-4971-8904-9c68e38b4435.png',
    imageGallery: [
      '/lovable-uploads/e20f8bfa-f22a-4705-a6ce-96584de23036.png',
      '/lovable-uploads/2f1a68c4-6a3d-46a4-8b4e-107f72237537.png',
      '/lovable-uploads/3635567f-63c1-46a5-a5a1-25a58ddd6255.png',
      '/lovable-uploads/bb32123b-6df6-4082-ab12-f46f487de5c8.png'
    ],
    description: 'Comprehensive residential development with integrated amenities and natural landscape design.'
  },
  {
    id: 3,
    title: 'Restaurant Republica 51',
    location: 'Lisbon, Portugal',
    category: 'Commercial',
    imageSrc: '/lovable-uploads/2a933528-c9ae-4c98-8c8a-1f0cafcdc903.png',
    imageGallery: [
      '/lovable-uploads/818fa8d8-52ed-44a3-b3b4-e6784dbff517.png',
      '/lovable-uploads/cd11d348-8e6a-4ee9-9031-8071f8be5845.png',
      '/lovable-uploads/3a8cf422-846e-4d63-bb6c-805ded88e682.png',
      '/lovable-uploads/0bde8a0d-40f9-43cf-91da-7d33b92237bd.png'
    ],
    description: 'Modern dining establishment with innovative space planning and distinctive visual identity.'
  },
  {
    id: 4,
    title: 'American School of Lisbon',
    location: 'Lisbon, Portugal',
    category: 'Educational',
    imageSrc: '/lovable-uploads/546def6a-a606-4a2d-bc3e-e389e2d53adb.png',
    imageGallery: [
      '/lovable-uploads/e168116e-d14d-4733-a786-01da7845892c.png'
    ],
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
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

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
          <ProjectGallery 
            projects={projects}
            onProjectClick={openProjectDetails}
          />
        </div>
      </section>
      
      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject}
          onClose={closeProjectDetails}
        />
      )}
    </div>
  );
};

export default Projects;
