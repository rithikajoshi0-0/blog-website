import { useState, useEffect } from 'react';
import { StarField } from './components/StarField';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BlogSection } from './components/BlogSection';
import { BlogPost } from './components/BlogPost';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { blogPosts } from './data/blogPosts';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentBlogPost, setCurrentBlogPost] = useState<string | null>(null);

  const handleNavigation = (section: string, postId?: string) => {
    if (section === 'blog' && postId) {
      setCurrentBlogPost(postId);
      setActiveSection('blog');
    } else {
      setCurrentBlogPost(null);
      setActiveSection(section);
    }

    // Smooth scroll to section
    if (!postId) {
      const element = document.getElementById(section);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Scroll to top for blog posts
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackFromBlogPost = () => {
    setCurrentBlogPost(null);
    handleNavigation('blog');
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (currentBlogPost) return; // Don't update if viewing a blog post

      const sections = ['home', 'blog', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentBlogPost]);

  // If viewing a specific blog post
  if (currentBlogPost) {
    const post = blogPosts.find(p => p.id === currentBlogPost);
    if (post) {
      return (
        <div className="min-h-screen relative">
          <StarField />
          <Header activeSection="blog" onNavigate={handleNavigation} />
          <BlogPost post={post} onBack={handleBackFromBlogPost} />
          <Footer />
          <Toaster />
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen relative">
      <StarField />
      <Header activeSection={activeSection} onNavigate={handleNavigation} />
      
      <main>
        <section id="home">
          <Hero onNavigate={handleNavigation} />
        </section>
        
        <section id="blog">
          <BlogSection onNavigate={handleNavigation} />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;