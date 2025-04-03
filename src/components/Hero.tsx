
import { Link } from 'react-router-dom';
import { Waves } from '@/components/ui/waves';

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-zinc-900">
      {/* Interactive background with Waves */}
      <Waves 
        lineColor="rgba(255, 255, 255, 0.15)"
        backgroundColor="transparent"
        waveSpeedX={0.018}
        waveSpeedY={0.008}
        waveAmpX={40}
        waveAmpY={25}
        friction={0.92}
        tension={0.008}
        maxCursorMove={120}
        xGap={18}
        yGap={40}
        className="z-0"
      />
      
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-archiest-darkblue/80 via-black/60 to-black/40 z-10"></div>
      
      {/* Hero content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center z-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Crafting Timeless Architectural Experiences
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed">
            ArchiEst transforms visions into exceptional spaces that inspire, function beautifully, and stand the test of time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/projects" 
              className="bg-archiest-blue text-white font-medium px-8 py-4 rounded-lg hover:bg-archiest-darkblue transition-colors inline-block text-center text-lg"
            >
              Our Projects
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white font-medium px-8 py-4 rounded-lg hover:bg-white/20 transition-colors inline-block text-center text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg 
          className="w-6 h-6 text-white" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
