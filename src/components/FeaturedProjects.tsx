
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import ProjectDetail from './projects/ProjectDetail';
import { useState } from 'react';

// Project data - only 2 projects as requested
const featuredProjects = [
  {
    id: 1,
    title: 'Luxury Apartments',
    location: 'Lisbon, Portugal',
    category: 'Residential',
    imageSrc: '/projects/project1/Exterior Sunset- 24 de Julho.jpg',
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
    imageGallery: [
      '/projects/project2/Marinha Guincho 01.jpg',
      '/projects/project2/Marinha Guincho 02.jpg',
      '/projects/project2/Marinha Guincho 03.jpg',
      '/projects/project2/Marinha Guincho 04.jpg',
      '/projects/project2/Marinha Guincho 05.jpg'
    ],
    description: 'Comprehensive residential development with integrated amenities and natural landscape design.'
  }
];

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof featuredProjects[0] | null>(null);
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most innovative architectural designs across residential, commercial, and institutional projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className="h-full">
              <ProjectCard 
                title={project.title}
                location={project.location}
                imageSrc={project.imageSrc}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/projects" 
            className="inline-block bg-archiest-blue text-white font-medium px-6 py-3 rounded hover:bg-archiest-darkblue transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default FeaturedProjects;
