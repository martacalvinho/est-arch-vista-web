
interface ProjectCardProps {
  title: string;
  location: string;
  imageSrc: string;
  imageArray?: string[];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, location, imageSrc, imageArray, index }) => {
  return (
    <div className="project-card group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 h-[400px] w-full">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
      <img 
        src={imageSrc} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-300">{location}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
