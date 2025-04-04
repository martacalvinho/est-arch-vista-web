import { useState } from 'react';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ProjectDetail from '@/components/projects/ProjectDetail';
import { getProjectDirectory } from '@/lib/imageUtils';

// Project data
const projects = [
  {
    id: 1,
    title: 'Luxury Apartments',
    location: 'Lisbon, Portugal',
    category: 'Residential',
    imageSrc: '/projects/project1/Exterior Sunset- 24 de Julho.jpg', // Use one of the new images for the grid
    projectFolder: getProjectDirectory(1),
    imageGallery: [
      '/projects/project1/Apt- Living Room.jpg',
      '/projects/project1/Apt- Outdoor 2.jpg',
      '/projects/project1/Apt- Room.jpg',
      '/projects/project1/Exterior Closer - 24 de Julho.jpg',
      '/projects/project1/Exterior Sunset- 24 de Julho.jpg'
    ],
    description: 'High-end residential development featuring elegant interiors and panoramic city views.'
  },
  {
    id: 2,
    title: 'Masterplan Guincho',
    location: 'Lisbon, Portugal',
    category: 'Residential',
    imageSrc: '/projects/project2/Marinha Guincho 03.jpg',
    projectFolder: getProjectDirectory(2),
    imageGallery: [
      '/projects/project2/Marinha Guincho 01.jpg',
      '/projects/project2/Marinha Guincho 02.jpg',
      '/projects/project2/Marinha Guincho 03.jpg',
      '/projects/project2/Marinha Guincho 04.jpg',
      '/projects/project2/Marinha Guincho 05.jpg'
    ],
    description: 'Comprehensive residential development with integrated amenities and natural landscape design.'
  },
  {
    id: 3,
    title: 'Restaurant Republica 51',
    location: 'Lisbon, Portugal',
    category: 'Commercial',
    imageSrc: '/projects/project3/Republica 51_View 01.jpg',
    projectFolder: getProjectDirectory(3),
    imageGallery: [
      '/projects/project3/Republica 51_View 01.jpg',
      '/projects/project3/Republica 51_View 02.jpg',
      '/projects/project3/Republica 51_View 03.jpg',
      '/projects/project3/Republica 51_View 04.jpg',
      '/projects/project3/Republica 51_View 05 02.jpg',
      '/projects/project3/Republica 51_View 06.jpg',
      '/projects/project3/Republica 51_View 07.jpg'
    ],
    description: 'Upscale dining experience with contemporary interior design and a focus on local cuisine.'
  },
  {
    id: 4,
    title: 'American School of Lisbon',
    location: 'Lisbon, Portugal',
    category: 'Educational',
    imageSrc: '/projects/project4/CAISL-View 01 01.jpg',
    projectFolder: getProjectDirectory(4),
    imageGallery: [
      '/lovable-uploads/8e2a99f8-fdd3-426f-a5de-14dcf1f09a47.png',
      '/lovable-uploads/03551cee-9a5f-49ef-ad1d-a5c44c8c8dc1.png',
      '/lovable-uploads/44b85ba8-4bec-4be3-b4d4-9c8e27326989.png',
      '/lovable-uploads/c13e9e9e-c4d6-4b28-a7c7-82ab5a9e9222.png'
    ],
    description: 'Contemporary educational campus designed to inspire learning and collaboration among students.'
  },
  {
    id: 5,
    title: 'Nisa Boutique Hotel',
    location: 'Nisa, Portugal',
    category: 'Hospitality',
    imageSrc: '/projects/project5/Nisa- Exterior 01 light.jpg',
    projectFolder: getProjectDirectory(5),
    description: 'Intimate hospitality project that blends modern comfort with local architectural traditions.'
  },
  {
    id: 6,
    title: 'Apartments / Offices',
    location: 'Luanda, Angola',
    category: 'Commercial',
    imageSrc: '/projects/project6/Luanda.PNG',
    projectFolder: getProjectDirectory(6),
    description: 'Mixed-use development combining residential and commercial spaces in a tropical setting.'
  },
  {
    id: 7,
    title: 'Apartments',
    location: 'Estoril, Portugal',
    category: 'Residential',
    imageSrc: '/projects/project7/Estoril- Outside View.png',
    projectFolder: getProjectDirectory(7),
    description: 'Luxury residential complex featuring contemporary design and premium amenities.'
  },
  {
    id: 8,
    title: 'Beloura Office Park',
    location: 'Sintra, Portugal',
    category: 'Commercial',
    imageSrc: '/projects/project8/IMG_9220.JPEG',
    projectFolder: getProjectDirectory(8),
    description: 'Corporate office complex with distinctive architectural elements and landscaped surroundings.'
  },
  {
    id: 9,
    title: 'Luxury Shops Talatona',
    location: 'Angola',
    category: 'Commercial',
    imageSrc: '/projects/project9/Luxury Shops Angola.PNG',
    projectFolder: getProjectDirectory(9),
    description: 'Premium retail development featuring elegant design and high-end shopping experience.'
  },
  {
    id: 10,
    title: 'Housing Towers',
    location: 'Luanda, Angola',
    category: 'Residential',
    imageSrc: '/projects/project10/Housing towers 1.PNG',
    projectFolder: getProjectDirectory(10),
    description: 'High-rise residential towers with modern amenities and spectacular views.'
  },
  {
    id: 11,
    title: 'Loanda Towers',
    location: 'Luanda, Angola',
    category: 'Commercial',
    imageSrc: '/projects/project11/Loanda Towers.PNG',
    projectFolder: getProjectDirectory(11),
    description: 'Iconic twin towers featuring mixed-use spaces with contemporary architectural design.'
  },
  {
    id: 12,
    title: 'Multi Brands Dealer',
    location: 'Torres Vedras, Portugal',
    category: 'Commercial',
    imageSrc: '/projects/project12/car dealer.png',
    projectFolder: getProjectDirectory(12),
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
