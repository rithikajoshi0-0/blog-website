import { Heart, Code } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-700/30 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Rithika Joshi B
              </span>
            </h3>
            <p className="text-gray-400">
              Artificial Intelligence and Data Science Expert
            </p>
          </div>

          <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>and</span>
            <Code className="w-4 h-4 text-blue-400" />
            <span>by Rithika Joshi B</span>
          </div>

          <div className="mt-4 text-gray-500 text-sm">
            © {currentYear} Rithika Joshi B. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};