import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  status: 'completed' | 'ongoing' | 'planning';
  featured?: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 'dynamic-routing',
    title: 'Dynamic Routing Optimization System',
    description: 'AI-powered network routing optimization for real-time adaptation to changing network conditions.',
    longDescription: 'A sophisticated system that uses machine learning algorithms to optimize network routing in real-time, improving performance and reliability in dynamic network environments.',
    technologies: ['Python', 'C++', 'NetworkX', 'TensorFlow', 'Redis'],
    status: 'completed',
    featured: true,
  },
  {
    id: 'ryze-platform',
    title: 'Ryze Platform',
    description: 'Full-stack AI platform for data analysis and machine learning workflows.',
    longDescription: 'A comprehensive platform that streamlines the entire machine learning workflow, from data ingestion to model deployment, with an intuitive user interface.',
    technologies: ['React', 'Node.js', 'Python', 'Docker', 'PostgreSQL', 'TensorFlow'],
    status: 'completed',
    featured: true,
  },
  {
    id: 'eve-platform',
    title: 'EVE (Education via Entertainment)',
    description: 'Gamified educational platform that makes learning engaging through AI-powered personalization.',
    longDescription: 'An innovative educational platform that combines gamification with AI to create personalized learning experiences that adapt to each student\'s learning style and pace.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Python', 'ML Models'],
    status: 'completed',
    featured: true,
  },
  {
    id: 'cynotech',
    title: 'Cynotech Service Platform',
    description: 'Scalable microservices architecture for enterprise-level service management.',
    longDescription: 'An ongoing project focused on building a robust, scalable service platform using modern microservices architecture and cloud-native technologies.',
    technologies: ['Go', 'Kubernetes', 'PostgreSQL', 'Redis', 'gRPC'],
    status: 'ongoing',
  },
];

export const ProjectsSection = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-600/20 text-green-300 border-green-600/30';
      case 'ongoing':
        return 'bg-yellow-600/20 text-yellow-300 border-yellow-600/30';
      case 'planning':
        return 'bg-blue-600/20 text-blue-300 border-blue-600/30';
      default:
        return 'bg-gray-600/20 text-gray-300 border-gray-600/30';
    }
  };

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Galactic Ventures
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative projects that push the boundaries of technology and demonstrate expertise across the full spectrum of development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Star className="w-6 h-6 text-yellow-400 mr-3" />
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects
              .filter(project => project.featured)
              .map((project) => (
                <Card
                  key={project.id}
                  className="bg-slate-800/40 border-slate-700/40 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getStatusColor(project.status)}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-gray-600 text-gray-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.demoUrl && (
                        <Button
                          size="sm"
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.demoUrl, '_blank');
                          }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
            All Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-slate-800/20 border-slate-700/20 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-slate-700/30 text-gray-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};