
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

// Project data
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
  },
  {
    id: 3,
    title: 'Restaurant Republica 51',
    location: 'Lisbon, Portugal',
    imageSrc: '/lovable-uploads/2a933528-c9ae-4c98-8c8a-1f0cafcdc903.png'
  },
  {
    id: 4,
    title: 'American School of Lisbon',
    location: 'Lisbon, Portugal',
    imageSrc: '/lovable-uploads/546def6a-a606-4a2d-bc3e-e389e2d53adb.png'
  },
  {
    id: 5,
    title: 'Nisa Boutique Hotel',
    location: 'Nisa, Portugal',
    imageSrc: '/lovable-uploads/afeaa000-1164-4b46-84b6-23579755b0e9.png'
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
