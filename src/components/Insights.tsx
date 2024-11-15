import React from 'react';
import { TrendingUp, BookOpen, Newspaper, ArrowRight } from 'lucide-react';

export function Insights() {
  const insights = [
    {
      category: "Market Analysis",
      date: "March 15, 2024",
      title: "The Evolution of Personal Loan Marketing in 2024",
      excerpt: "Discover how AI and personalization are reshaping the landscape of personal loan marketing...",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "Industry Trends",
      date: "March 12, 2024",
      title: "Digital Transformation in Financial Marketing",
      excerpt: "Exploring the latest technologies driving growth in financial services marketing...",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "Best Practices",
      date: "March 10, 2024",
      title: "Optimizing Conversion Rates in Loan Marketing",
      excerpt: "Learn proven strategies to improve your loan marketing conversion rates...",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">Industry Insights & Latest Trends</h1>
          <p className="text-xl text-gray-600">Stay ahead of the curve with our expert analysis and industry updates</p>
        </div>

        {/* Featured Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {insights.map((insight, index) => (
            <article 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-blue-600 text-sm font-semibold">{insight.category}</span>
                  <span className="text-gray-500 text-sm">{insight.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {insight.title}
                </h3>
                <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                <button className="text-blue-600 font-semibold inline-flex items-center group/btn">
                  Read More 
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Resources Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <TrendingUp className="w-12 h-12 text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-2">Market Reports</h3>
            <p className="text-gray-600 mb-4">Access detailed market analysis and industry forecasts</p>
            <a href="#" className="text-blue-600 font-semibold inline-flex items-center">
              View Reports <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <BookOpen className="w-12 h-12 text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-2">Case Studies</h3>
            <p className="text-gray-600 mb-4">Learn from real success stories and implementations</p>
            <a href="#" className="text-blue-600 font-semibold inline-flex items-center">
              Read Cases <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <Newspaper className="w-12 h-12 text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-2">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to our weekly industry updates</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}