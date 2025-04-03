
const testimonials = [
  {
    id: 1,
    quote: "Paulo and his team delivered an exceptional design for our corporate headquarters. Their ability to blend functionality with striking aesthetics exceeded our expectations.",
    author: "Miguel Santos",
    position: "CEO, Tech Ventures"
  },
  {
    id: 2,
    quote: "Working with ArchiEst on our residential development was a seamless experience. Their commitment to sustainability and innovative design thinking set them apart.",
    author: "Sofia Almeida",
    position: "Development Director, Urban Living"
  },
  {
    id: 3,
    quote: "The attention to detail and cultural sensitivity ArchiEst brought to our international project was remarkable. They truly understand how to create spaces that resonate with local context.",
    author: "Ahmed Hassan",
    position: "Project Manager, Global Developments"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-archiest-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            We pride ourselves on client satisfaction and delivering projects that exceed expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg">
              <svg className="w-10 h-10 text-archiest-blue mb-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-bold text-archiest-blue">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
