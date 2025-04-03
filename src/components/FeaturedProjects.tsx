
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

// Project data - only 2 projects as requested
const featuredProjects = [
  {
    id: 1,
    title: 'Luxury Apartments',
    location: 'Lisbon, Portugal',
    imageSrc: '/lovable-uploads/024ac5c7-ac59-48b9-bdbd-11381d4a4073.png'
  },
  {
    id: 2,
    title: 'Masterplan Guincho',
    location: 'Lisbon, Portugal',
    imageSrc: '/lovable-uploads/19d73f25-4d8e-4971-8904-9c68e38b4435.png'
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most innovative architectural designs across residential, commercial, and institutional projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              location={project.location}
              imageSrc={project.imageSrc}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/projects" 
            className="inline-block bg-archiest-blue text-white font-medium px-6 py-3 rounded hover:bg-archiest-darkblue transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
