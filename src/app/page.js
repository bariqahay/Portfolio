'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  Award,
  Code,
  User,
  FileText,
  Trophy,
  BookOpen,
  ArrowRight,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: 'ElectQ',
      description: 'ElectQ is an innovative web application designed to help users build a PC tailored to their needs.',
      technologies: ['Python', 'Tailwind CSS'],
      role: 'Led the development of core application features, implementing approximately 70% of the overall functionality.',
      demo: '#',
      code: 'https://github.com/bariqahay/ElectQ_New.git',
      image: '/images/ElectQ.png'
    },
    {
      title: 'PopSQL',
      description: 'Designed to scan a list of URLs to identify potential SQL injection vulnerabilities.',
      technologies: ['Golang'],
      role: 'Self Project',
      demo: 'https://github.com/bariqahay/Popsql.git',
      code: 'https://github.com/bariqahay/Popsql.git',
      image: '/images/popsql.png'
    },
    {
      title: 'FocusTime',
      description: 'Desktop Application for Time-Based Study Session Tracking',
      technologies: ['JavaFX'],
      role: 'Developed the focus timer with customizable durations and sound notifications, and implemented activity category management with support for custom categories.',
      demo: '#',
      code: 'https://github.com/bariqahay/UAS-PBO_FocusTime_CoderTampan.git',
      image: '/images/focustime.png'
    },
    {
      title: 'ADVANCED NETWORK ANOMALY DETECTION',
      description: 'Developed a real-time Network Intrusion Detection System using machine learning to detect anomalies and network attacks by analyzing traffic patterns.',
      technologies: [
        'Python',
        'Google Colab',
        'Scikit-learn',
        'XGBoost',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Seaborn',
        'Plotly',
        'PCA',
        't-SNE',
        'Isolation Forest',
        'One-Class SVM'
      ],
      role: 'Self Project',
      demo: '',
      code: 'https://colab.research.google.com/drive/19xqPEArimR3tylzB0UU2qwNDsLSLKkxn?usp=sharing',
      image: '/images/projek4.png'
    }
  ];

  const certifications = [
    {
      title: 'Google Cybersecurity Professional Certificate',
      institution: 'Coursera',
      date: '05/2024',
      color: 'from-green-400 to-blue-400',
      url: 'https://www.coursera.org/account/accomplishments/specialization/T8BTCV2ZN7RE?trk=public_profile_see-credential'
    },
    {
      title: 'CompFest 16 Universitas Indonesia – CTF Participant',
      institution: 'Universitas Indonesia',
      date: '09/2024',
      color: 'from-red-400 to-pink-400',
      url: 'https://drive.google.com/file/d/1CmvZpLwVZNwV6KqZTSL1wf9a6n1bArH0/view?usp=sharing'
    },
    {
      title: 'CyberStrike 1.0',
      institution: 'SATSIBER TNI',
      date: '10/2024',
      color: 'from-blue-400 to-purple-400',
      url: 'https://drive.google.com/file/d/1CnW_QzWhBodVTOJHsE2oJCnt_SpoOt3e/view?usp=sharing'
    },
    {
      title: 'University CTF 2024: Binary Badlands',
      institution: 'Hack The Box',
      date: '12/2024',
      color: 'from-yellow-400 to-orange-400',
      url: 'https://drive.google.com/file/d/18W3Vde-pmWrNFBXSxL1aBnPwaxtCBm_7/view?usp=sharing'
    }
  ];

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: FileText },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'certifications', label: 'Certifications', icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-x-hidden">
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .gradient-text {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
        }
      `}</style>

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(139, 92, 246, 0) 70%)',
            top: '-10%',
            right: '-10%',
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0) 70%)',
            bottom: '-10%',
            left: '-10%',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10 animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, rgba(236, 72, 153, 0) 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Enhanced Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'glass-effect' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold gradient-text">
              RIFKI BARIQ
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg glass-effect hover:bg-white hover:bg-opacity-20 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect">
            <div className="px-4 py-2 space-y-1">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-left text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200"
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Avatar */}
          <div className="relative mb-8 inline-block">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center shadow-2xl hover-glow">
              <User size={60} className="text-white" />
            </div>
            <div className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto animate-ping opacity-20"></div>
          </div>

          {/* Main Title */}
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                MUHAMMAD
              </span>
              <span className="block bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
                RIFKI BARIQ
              </span>
            </h1>
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-gray-300 font-medium">
                Cybersecurity Enthusiast • Computer Science Student
              </p>
              <p className="text-lg text-gray-400">
                Universitas Sumatera Utara
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: 'https://github.com/bariqahay', label: 'GitHub' },
              { icon: Linkedin, href: 'https://id.linkedin.com/in/muhammad-rifki-bariq-b01aa2282', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:muhammadrifki@students.usu.ac.id', label: 'Email' }
            ].map(({ icon: Icon, href, label }, i) => (
              <a 
                key={i} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-4 glass-effect rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300 hover:scale-110 hover-glow"
                title={label}
              >
                <Icon size={24} className="text-gray-300 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span>Explore My Work</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center space-x-2 px-8 py-4 glass-effect rounded-full text-white font-semibold hover:bg-white hover:bg-opacity-20 transition-all duration-300"
            >
              <span>View Projects</span>
              <Code size={20} />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white opacity-60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-8 hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I like breaking things to understand how they work—whether it&rsquo;s code, systems, or ideas. That curiosity naturally pulled me into cybersecurity.
                </p>
              </div>
              
              <div className="glass-effect rounded-2xl p-8 hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I&rsquo;m not a pro (yet), but I&rsquo;m not here to watch from the sidelines either. I&rsquo;m doing CTFs, digging into labs, and building up my skills one shell, one exploit, one log at a time. No shortcuts. No fake flexing.
                </p>
              </div>
              
              <div className="glass-effect rounded-2xl p-8 hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Beyond tech, I&rsquo;m someone who enjoys building systems, understanding how complex things tick, and going deep into things that others skim past.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-8" style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)'}}>
                <h3 className="text-2xl font-bold text-white mb-4">My Focus Areas</h3>
                <div className="space-y-3">
                  {[
                    'Network Security & Penetration Testing',
                    'Capture The Flag (CTF) Competitions',
                    'Vulnerability Assessment & Analysis',
                    'Machine Learning in Cybersecurity',
                    'Web Application Security'
                  ].map((skill, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Project Showcase
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group glass-effect rounded-2xl overflow-hidden hover:bg-white hover:bg-opacity-10 transition-all duration-500 hover:scale-105 hover-glow">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 flex items-center justify-center">
                    <Code size={48} className="text-blue-400" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-300 rounded-full text-sm border border-blue-500 border-opacity-30 hover:bg-opacity-30 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Role */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3">My Role:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.role}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-500 bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-all duration-300 text-blue-300 hover:text-white border border-blue-500 border-opacity-30 hover:border-opacity-50 hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                    <a 
                      href={project.code} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-2 px-4 py-2 bg-purple-500 bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-all duration-300 text-purple-300 hover:text-white border border-purple-500 border-opacity-30 hover:border-opacity-50 hover:scale-105"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Certifications & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className="group glass-effect rounded-2xl p-6 hover:bg-white hover:bg-opacity-10 transition-all duration-300 hover:scale-105 hover-glow">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <BookOpen size={24} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{cert.institution}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar size={16} className="mr-2" />
                        {cert.date}
                      </div>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-500 bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-all duration-300 text-blue-400 hover:text-white hover:scale-110"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white border-opacity-10 relative z-10" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 gradient-text">
              Let&rsquo;s Connect!
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to connect and collaborate on exciting projects! Feel free to reach out if you want to discuss cybersecurity, development, or just have a chat.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: 'https://github.com/bariqahay', label: 'GitHub' },
              { icon: Linkedin, href: 'https://id.linkedin.com/in/muhammad-rifki-bariq-b01aa2282', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:muhammadrifki@students.usu.ac.id', label: 'Email' }
            ].map(({ icon: Icon, href, label }, i) => (
              <a 
                key={i} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 p-4 glass-effect rounded-xl hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-gray-400 hover:text-white hover:scale-105"
              >
                <Icon size={24} className="group-hover:text-blue-400 transition-colors" />
                <span className="hidden sm:inline font-medium">{label}</span>
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Muhammad Rifki Bariq. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}