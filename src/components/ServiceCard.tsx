
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100">
      <div className="bg-archiest-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        <div className="text-archiest-blue">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-archiest-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
