import { RotatingEarth } from './RotatingEarth';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Rithika Joshi B
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-300 font-light">
              Artificial Intelligence and Data Science
            </p>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              Rithika Joshi B is an innovative AI and Data Science developer passionate about expanding the frontiers of programming. With strong expertise in Python, C extensions, and full-stack AI development, Rithika continuously creates powerful, elegant solutions that combine technical precision with creativity.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              onClick={() => onNavigate('blog')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Stellar Insights
            </Button>
            <Button
              onClick={() => onNavigate('projects')}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg transition-all duration-300"
            >
              View Galactic Ventures
            </Button>
          </div>
        </div>

        {/* Earth Component */}
        <div className="hidden lg:flex justify-center">
          <RotatingEarth />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/60 w-6 h-6" />
      </div>
    </section>
  );
};