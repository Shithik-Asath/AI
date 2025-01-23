import React, { useState } from 'react';
import { 
  Brain, 
  Code, 
  ChevronDown, 
  ExternalLink,
  Search,
  BookOpen,
  Rocket,
  MessageSquare,
  PenTool,
  Sparkles
} from 'lucide-react';

const tools = {
  writing: [
    {
      name: 'Perplexity.ai',
      description: 'Advanced AI writing assistant that helps you create high-quality content with real-time suggestions and improvements.',
      icon: <PenTool className="w-6 h-6" />,
      url: 'https://www.perplexity.ai',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      name: 'ChatGPT',
      description: 'Powerful language model for writing assistance, brainstorming, and content generation.',
      icon: <MessageSquare className="w-6 h-6" />,
      url: 'https://chat.openai.com',
      gradient: 'from-emerald-600 to-teal-600'
    }
  ],
  research: [
    {
      name: 'GravityWhite',
      description: 'Advanced AI assistant for generating innovative ideas and solutions for research and problem-solving.',
      icon: <Search className="w-6 h-6" />,
      url: 'https://gravitywrite.com',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      name: 'Elicit',
      description: 'AI research assistant that helps you find, analyze, and summarize academic papers efficiently.',
      icon: <BookOpen className="w-6 h-6" />,
      url: 'https://elicit.org',
      gradient: 'from-green-600 to-teal-600'
    }
  ],
  coding: [
    {
      name: 'GitHub Copilot',
      description: 'AI-powered coding assistant that helps you write better code faster with intelligent suggestions.',
      icon: <Code className="w-6 h-6" />,
      url: 'https://github.com/features/copilot',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Tabnine',
      description: 'AI code completion tool that predicts and suggests code based on your patterns and context.',
      icon: <Sparkles className="w-6 h-6" />,
      url: 'https://www.tabnine.com',
      gradient: 'from-indigo-600 to-blue-600'
    }
  ],
  productivity: [
    {
      name: 'Gamma.app',
      description: 'AI-powered presentation and document creation platform for beautiful, engaging content.',
      icon: <Sparkles className="w-6 h-6" />,
      url: 'https://gamma.app/',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      name: 'Soloist.ai',
      description: 'AI-powered productivity tool that helps you stay focused and accomplish more in less time.',
      icon: <Rocket className="w-6 h-6" />,
      url: 'https://soloist.ai/',
      gradient: 'from-cyan-600 to-blue-600'
    }
  ]
};

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain className="w-8 h-8 text-blue-400" />
          <span className="text-xl font-bold">AI Tools Hub</span>
        </div>
        
        <div className="flex space-x-8">
          {Object.entries(tools).map(([category]) => (
            <div
              key={category}
              className="relative"
              onMouseEnter={() => setActiveDropdown(category)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 py-2 px-3 rounded-md hover:bg-gray-800 transition-colors">
                <span className="capitalize">{category}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === category && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 text-gray-800">
                  {tools[category as keyof typeof tools].map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100"
                    >
                      {tool.icon}
                      <span>{tool.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

function ToolCard({ tool }: { tool: any }) {
  return (
    <div className={`bg-gradient-to-r ${tool.gradient} rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-xl`}>
      <div className="flex items-center space-x-3 mb-4">
        {tool.icon}
        <h2 className="text-2xl font-bold">{tool.name}</h2>
      </div>
      <p className="text-gray-100 mb-6">{tool.description}</p>
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        <span>Try Now</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="pt-24 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Empower Your Learning with AI
            </h1>
            <p className="text-xl text-gray-600">
              Discover the best AI tools to enhance your academic journey
            </p>
          </div>

          {Object.entries(tools).map(([category, categoryTools]) => (
            <section key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 capitalize">
                {category} Tools
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryTools.map((tool) => (
                  <ToolCard key={tool.name} tool={tool} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="w-6 h-6 text-blue-400" />
            <span className="text-lg font-bold">AI Tools Hub</span>
          </div>
          <p className="text-gray-400">
            Helping students excel with the power of artificial intelligence
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Created by Shithik Asath M
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;