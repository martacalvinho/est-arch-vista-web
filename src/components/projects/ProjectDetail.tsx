
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  imageSrc: string;
  imageGallery?: string[];
  description: string;
}

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    if (project.imageGallery) {
      setActiveImageIndex((prevIndex) => 
        prevIndex === project.imageGallery!.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (project.imageGallery) {
      setActiveImageIndex((prevIndex) => 
        prevIndex === 0 ? project.imageGallery!.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Main image display */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <img 
              src={project.imageGallery && project.imageGallery.length > 0 
                ? project.imageGallery[activeImageIndex] 
                : project.imageSrc} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation arrows - only show if there are multiple images */}
            {project.imageGallery && project.imageGallery.length > 1 && (
              <>
                <button 
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
          
          {/* Thumbnail gallery */}
          {project.imageGallery && project.imageGallery.length > 1 && (
            <div className="flex gap-2 p-2 overflow-x-auto bg-gray-100">
              {project.imageGallery.map((img, idx) => (
                <div 
                  key={idx}
                  className={`h-16 w-24 flex-shrink-0 cursor-pointer border-2 ${activeImageIndex === idx ? 'border-archiest-blue' : 'border-transparent'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(idx);
                  }}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          )}
          
          <button 
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-archiest-blue text-white rounded-full mb-2">
            {project.category}
          </span>
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-600 mb-4">{project.location}</p>
          <p className="text-gray-700">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
