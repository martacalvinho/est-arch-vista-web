
import { Building, Building2, Lightbulb, Home, PenTool } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    id: 1,
    title: 'Residential Architecture',
    description: 'Custom homes, apartments, and housing developments that combine functionality with beautiful design and personal expression.',
    icon: <Home size={32} />
  },
  {
    id: 2,
    title: 'Commercial Architecture',
    description: 'Innovative office buildings, retail spaces, and hospitality projects that enhance business operations and create memorable experiences.',
    icon: <Building size={32} />
  },
  {
    id: 3,
    title: 'BIM and Virtual Reality Consulting',
    description: 'Advanced Building Information Modeling services and immersive VR experiences to visualize projects before construction begins.',
    icon: <Lightbulb size={32} />
  },
  {
    id: 4,
    title: 'Sustainable Projects',
    description: 'Environmentally conscious design solutions that minimize ecological impact while maximizing energy efficiency and occupant comfort.',
    icon: <Building2 size={32} />
  },
  {
    id: 5,
    title: 'Interior Design',
    description: 'Comprehensive interior solutions that transform spaces with thoughtful layouts, custom furniture, material selection, and lighting design.',
    icon: <PenTool size={32} />
  }
];

const ServicesList = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of architectural and design services tailored to meet the unique needs of each client and project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
