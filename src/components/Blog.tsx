import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';

const Blog: React.FC = () => {
  const [category, setCategory] = useState<string>('All');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Automation Testing: Trends and Best Practices',
      excerpt: 'Exploring the latest trends in automation testing, including AI-driven testing, codeless automation, and the integration of testing into DevOps pipelines.',
      content: 'Automation testing is evolving rapidly with new technologies and methodologies. In this comprehensive guide, we explore the latest trends including AI-driven testing, codeless automation tools, and the seamless integration of testing into modern DevOps pipelines. Learn how to stay ahead of the curve and implement best practices for scalable, maintainable test automation.',
      author: 'Sadiq Muhammad',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Testing',
      tags: ['Automation', 'AI Testing', 'DevOps', 'Best Practices'],
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      id: 2,
      title: 'Building Robust API Testing Strategies with Postman',
      excerpt: 'A comprehensive guide to designing effective API testing strategies using Postman, covering authentication, data validation, and performance testing.',
      content: 'API testing is crucial for ensuring the reliability and performance of modern applications. This guide covers everything from setting up Postman collections to implementing comprehensive testing strategies that cover authentication, data validation, error handling, and performance testing. Learn how to create maintainable and scalable API test suites.',
      author: 'Sadiq Muhammad',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'API Testing',
      tags: ['Postman', 'API Testing', 'Automation', 'Testing Strategy'],
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 3,
      title: 'Agile QA: Integrating Quality Assurance into Agile Development',
      excerpt: 'Learn how to effectively integrate QA processes into Agile development cycles, ensuring quality while maintaining development velocity.',
      content: 'Integrating QA into Agile development requires a shift in mindset and processes. This article explores how to align QA activities with Agile principles, implement continuous testing, and maintain quality standards while supporting rapid development cycles. Discover practical strategies for QA teams working in Agile environments.',
      author: 'Sadiq Muhammad',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Agile',
      tags: ['Agile', 'QA Process', 'Continuous Testing', 'Team Collaboration'],
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 4,
      title: 'Performance Testing with JMeter: A Complete Guide',
      excerpt: 'Master performance testing using JMeter with this comprehensive guide covering load testing, stress testing, and performance optimization.',
      content: 'Performance testing is essential for ensuring applications can handle expected user loads and perform well under stress. This comprehensive guide covers everything from basic JMeter setup to advanced performance testing scenarios, including load testing, stress testing, and performance optimization techniques.',
      author: 'Sadiq Muhammad',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'Performance Testing',
      tags: ['JMeter', 'Performance Testing', 'Load Testing', 'Optimization'],
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 5,
      title: 'DevOps Integration: Streamlining QA in CI/CD Pipelines',
      excerpt: 'Explore how to integrate QA processes into CI/CD pipelines using Azure DevOps, ensuring quality gates and automated testing workflows.',
      content: 'Modern software development requires seamless integration of QA processes into CI/CD pipelines. This article explores how to implement quality gates, automated testing workflows, and continuous quality monitoring using Azure DevOps and other CI/CD tools. Learn best practices for maintaining quality while supporting rapid deployment cycles.',
      author: 'Sadiq Muhammad',
      date: '2023-12-28',
      readTime: '9 min read',
      category: 'DevOps',
      tags: ['DevOps', 'CI/CD', 'Azure DevOps', 'Quality Gates'],
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 6,
      title: 'Project Management in QA: Leading Quality Initiatives',
      excerpt: 'Learn how to apply project management principles to QA initiatives, from planning test strategies to managing QA teams and stakeholders.',
      content: 'Effective project management is crucial for successful QA initiatives. This article covers how to apply project management principles to QA work, including planning comprehensive test strategies, managing QA teams, coordinating with stakeholders, and ensuring successful project delivery. Discover how to balance technical excellence with project management best practices.',
      author: 'Sadiq Muhammad',
      date: '2023-12-25',
      readTime: '8 min read',
      category: 'Project Management',
      tags: ['Project Management', 'QA Leadership', 'Team Management', 'Stakeholder Communication'],
      image: '/api/placeholder/600/300',
      featured: false
    }
  ];

  const categories: string[] = ['All', 'Testing', 'API Testing', 'Agile', 'Performance Testing', 'DevOps', 'Project Management'];
  const filtered = useMemo(() => blogPosts.filter(p => category === 'All' || p.category === category), [category, blogPosts]);

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tips, and thoughts on software quality assurance, automation testing, and project management
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-medium ${
                category === cat
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'border-gray-200 text-gray-600 hover:border-primary-600 hover:text-primary-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-semibold">
                Featured
              </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  The Future of Automation Testing: Trends and Best Practices
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Exploring the latest trends in automation testing, including AI-driven testing, codeless automation, 
                  and the integration of testing into DevOps pipelines.
                </p>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Jan 15, 2024</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>8 min read</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Automation', 'AI Testing', 'DevOps', 'Best Practices'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/50 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="btn-primary">
                  Read More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
              <div>
                <img
                  src="/api/placeholder/600/300"
                  alt="Featured blog post"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group cursor-pointer"
              onClick={() => setActivePost(post)}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3 group-hover:line-clamp-none transition-[max-height] duration-300">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <div className="flex items-center text-primary-600 group-hover:text-primary-700 transition-colors">
                    <span className="text-sm font-medium mr-1">Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-secondary">
            Load More Articles
          </button>
        </motion.div>
        {/* Post Modal */}
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setActivePost(null)}
          >
            <motion.article
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{activePost.title}</h3>
              <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(activePost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{activePost.readTime}</span>
                </div>
              </div>
              <div className="prose-custom">
                <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeHighlight]}>
{`# ${activePost.title}

${activePost.content}

\n\n
\n\n
`}
                </ReactMarkdown>
              </div>
            </motion.article>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;
