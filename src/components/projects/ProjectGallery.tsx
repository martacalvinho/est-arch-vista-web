
import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';

// Project categories
const categories = ["All", "Residential", "Commercial", "Educational", "Hospitality", "Industrial"];

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  imageSrc: string;
  imageGallery?: string[];
  description: string;
}

interface ProjectGalleryProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectGallery = ({ projects, onProjectClick }: ProjectGalleryProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div>
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
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card group relative cursor-pointer overflow-hidden rounded-lg shadow-lg h-[350px]"
            onClick={() => onProjectClick(project)}
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
  );
};

export default ProjectGallery;
