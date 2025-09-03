import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Zap, Globe, Cpu } from 'lucide-react';

export const AboutSection = () => {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Neural Networks', 'Deep Learning', 'NLP'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'C/C++', 'JavaScript', 'TypeScript', 'Java', 'Go'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Full Stack Development',
      icon: <Globe className="w-6 h-6" />,
      skills: ['React', 'Node.js', 'Express', 'Next.js', 'MongoDB', 'PostgreSQL'],
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Data Science & Analytics',
      icon: <Database className="w-6 h-6" />,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Data Visualization', 'Statistics'],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'System Programming',
      icon: <Cpu className="w-6 h-6" />,
      skills: ['C Extensions', 'Performance Optimization', 'Memory Management', 'Algorithms'],
      color: 'from-red-500 to-rose-500',
    },
    {
      title: 'Tools & Technologies',
      icon: <Zap className="w-6 h-6" />,
      skills: ['Docker', 'Kubernetes', 'AWS', 'Git', 'Linux', 'CI/CD'],
      color: 'from-indigo-500 to-violet-500',
    },
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skill Constellations
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            A universe of technical expertise spanning artificial intelligence, full-stack development, and system optimization.
          </p>
        </div>

        {/* Bio Section */}
        <div className="mb-20">
          <Card className="bg-slate-800/30 border-slate-700/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">About Me</h3>
              <div className="prose prose-lg prose-invert max-w-none text-center">
                <p className="text-gray-300 leading-relaxed text-lg">
                  As an AI and Data Science specialist, I bridge the gap between theoretical concepts and practical applications. 
                  My journey spans from low-level system programming with C extensions to high-level AI model development, 
                  always with a focus on creating solutions that push the boundaries of what's possible.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mt-4">
                  I believe in the power of combining technical precision with creative problem-solving to build 
                  systems that not only work but inspire. Whether it's optimizing algorithms for performance or 
                  designing user experiences that delight, I approach every project with passion and attention to detail.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="bg-slate-800/30 border-slate-700/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardHeader className="pb-4">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} w-fit mb-3`}>
                  {category.icon}
                </div>
                <CardTitle className="text-white text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-slate-700/50 text-gray-300 hover:bg-slate-700 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};