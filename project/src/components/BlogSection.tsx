import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

interface BlogSectionProps {
  onNavigate: (section: string, postId?: string) => void;
}

const blogPosts: BlogPost[] = [
  {
    id: 'dynamic-routing-optimization',
    title: 'Dynamic Routing Optimization System: A Deep Dive',
    excerpt: 'Exploring advanced algorithms for optimizing network routing in real-time environments, leveraging AI to adapt to changing network conditions.',
    date: '2024-12-15',
    readTime: '8 min read',
    tags: ['AI', 'Networking', 'Optimization'],
    featured: true,
  },
  {
    id: 'ryze-platform-architecture',
    title: 'Building Ryze Platform: Full-Stack AI Architecture',
    excerpt: 'A comprehensive look at the architectural decisions behind Ryze Platform, from data structures to AI model integration.',
    date: '2024-12-10',
    readTime: '12 min read',
    tags: ['Full Stack', 'AI', 'Architecture'],
    featured: true,
  },
  {
    id: 'eve-education-entertainment',
    title: 'EVE: Revolutionizing Education via Entertainment',
    excerpt: 'How we combined gamification with AI to create an immersive educational platform that makes learning engaging and effective.',
    date: '2024-12-05',
    readTime: '10 min read',
    tags: ['EdTech', 'AI', 'Gamification'],
  },
  {
    id: 'python-c-extensions',
    title: 'Optimizing Python Performance with C Extensions',
    excerpt: 'A practical guide to writing high-performance Python applications using C extensions for computationally intensive tasks.',
    date: '2024-11-28',
    readTime: '15 min read',
    tags: ['Python', 'C', 'Performance'],
  },
  {
    id: 'cynotech-service-insights',
    title: 'Cynotech: Building Scalable Service Solutions',
    excerpt: 'Insights from developing Cynotech, an ongoing service project that demonstrates modern microservices architecture.',
    date: '2024-11-20',
    readTime: '6 min read',
    tags: ['Microservices', 'Scalability', 'Backend'],
  },
  {
    id: 'data-structures-ai',
    title: 'Advanced Data Structures for AI Applications',
    excerpt: 'Exploring specialized data structures that can significantly improve the performance of machine learning algorithms.',
    date: '2024-11-15',
    readTime: '9 min read',
    tags: ['Data Structures', 'AI', 'Algorithms'],
  },
];

export const BlogSection = ({ onNavigate }: BlogSectionProps) => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Stellar Insights
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exploring the cosmos of technology, AI, and innovation through detailed articles and case studies.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
            Featured Articles
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts
              .filter(post => post.featured)
              .map((post) => (
                <Card
                  key={post.id}
                  className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                      <Clock className="w-4 h-4 ml-4" />
                      {post.readTime}
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{post.title}</CardTitle>
                    <CardDescription className="text-gray-300 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-blue-600/20 text-blue-300 hover:bg-blue-600/30"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      onClick={() => onNavigate('blog', post.id)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Posts Grid */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
            All Articles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-slate-800/30 border-slate-700/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 cursor-pointer group"
                onClick={() => onNavigate('blog', post.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString()}
                    <Clock className="w-3 h-3 ml-2" />
                    {post.readTime}
                  </div>
                  <CardTitle className="text-white text-lg group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-blue-600/10 text-blue-300 text-xs"
                      >
                        {tag}
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