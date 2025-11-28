import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, CheckCircle, Sparkles, Zap, Shield } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-dark-900/95 border-b border-dark-800/50 backdrop-blur-md' : 'bg-dark-950/50 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">
              Cerrado
            </div>

            <div className="hidden md:flex items-center space-x-12">
              <button onClick={() => scrollToSection('products')} className="text-dark-300 hover:text-brand-400 transition-colors text-sm font-medium">
                Products
              </button>
              <button onClick={() => scrollToSection('services')} className="text-dark-300 hover:text-brand-400 transition-colors text-sm font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('managed-services')} className="text-dark-300 hover:text-brand-400 transition-colors text-sm font-medium">
                Managed Services
              </button>
              <button onClick={() => scrollToSection('why-us')} className="text-dark-300 hover:text-brand-400 transition-colors text-sm font-medium">
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection('cta')}
                className="px-6 py-2.5 bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-lg hover:from-brand-600 hover:to-brand-700 transition-all text-sm font-medium"
              >
                Schedule
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-brand-400 p-2"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-20 bg-dark-900 z-30 w-full h-screen">
            <div className="px-6 py-12 space-y-8">
              <button
                onClick={() => scrollToSection('products')}
                className="block w-full text-left text-dark-100 py-4 text-2xl font-medium border-b border-dark-800"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-dark-100 py-4 text-2xl font-medium border-b border-dark-800"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('managed-services')}
                className="block w-full text-left text-dark-100 py-4 text-2xl font-medium border-b border-dark-800"
              >
                Managed Services
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="block w-full text-left text-dark-100 py-4 text-2xl font-medium border-b border-dark-800"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection('cta')}
                className="w-full px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-lg hover:from-brand-600 hover:to-brand-700 transition-all text-lg font-medium mt-8"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-48 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-0 w-96 h-96 bg-brand-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-600 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 border border-brand-500/30 rounded-full">
            <Sparkles size={16} className="text-brand-400" />
            <span className="text-sm font-medium text-brand-300">AI-First Enterprise Transformation</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Cerrado Consulting Services
          </h1>
          <p className="text-2xl lg:text-3xl text-brand-300 font-semibold mb-8">
            Pioneering AI-First Enterprise Transformation
          </p>
          <p className="text-xl lg:text-2xl text-dark-300 mb-16 leading-relaxed">
            Where Strategy Meets Innovation, Powered by AI
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => scrollToSection('cta')}
              className="px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-lg hover:from-brand-600 hover:to-brand-700 transition-all text-lg font-medium flex items-center gap-2 group"
            >
              Schedule Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="px-8 py-4 border border-dark-600 text-dark-100 rounded-lg hover:border-brand-400/50 hover:bg-dark-900 transition-all text-lg font-medium"
            >
              Explore Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 lg:px-12 border-y border-dark-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 text-center">
            <div>
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent mb-4">500+</div>
              <p className="text-dark-300 text-lg leading-relaxed">Successful AI Implementations</p>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent mb-4">95%+</div>
              <p className="text-dark-300 text-lg leading-relaxed">Client Satisfaction Rating</p>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent mb-4">$2B+</div>
              <p className="text-dark-300 text-lg leading-relaxed">Documented Value Creation</p>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent mb-4">50+</div>
              <p className="text-dark-300 text-lg leading-relaxed">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Our Products
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge AI solutions designed to transform your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-lg p-10 h-full flex flex-col hover:border-brand-500/50 transition-all group">
              <Sparkles size={32} className="text-brand-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-3">
                Virinchi Analytics
              </h3>
              <p className="text-lg text-brand-300 font-semibold mb-8">
                Transform Data Chaos into Strategic Intelligence
              </p>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex gap-3 text-dark-300 leading-relaxed">
                  <CheckCircle size={20} className="text-brand-400 flex-shrink-0 mt-0.5" />
                  <span>Unified data platform</span>
                </li>
                <li className="flex gap-3 text-dark-300 leading-relaxed">
                  <CheckCircle size={20} className="text-brand-400 flex-shrink-0 mt-0.5" />
                  <span>AI-powered insights</span>
                </li>
                <li className="flex gap-3 text-dark-300 leading-relaxed">
                  <CheckCircle size={20} className="text-brand-400 flex-shrink-0 mt-0.5" />
                  <span>Predictive analytics</span>
                </li>
              </ul>
              <div className="pt-8 border-t border-dark-700">
                <p className="text-dark-300 leading-relaxed"><span className="font-semibold text-brand-300">60-70%</span> reduction in data prep time</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-lg p-10 h-full flex flex-col hover:border-brand-500/50 transition-all group">
              <Zap size={32} className="text-brand-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-3">
                Virinchi Customer Excellence
              </h3>
              <p className="text-lg text-brand-300 font-semibold mb-8">
                AI-Powered Customer Success Platform
              </p>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex gap-3 text-dark-300 leading-relaxed">
                  <CheckCircle size={20} className="text-brand-400 flex-shrink-0 mt-0.5" />
                  <span>Omnichannel support (voice, email, chat)</span>
                </li>
                <li className="flex gap-3 text-dark-300 leading-relaxed">
                  <CheckCircle size={20} className="text-brand-400 flex-shrink-0 mt-0.5" />
                  <span>Smart analytics</span>
                </li>
                <li className="flex gap-3 text-dark-300 leading-relaxed">
                  <CheckCircle size={20} className="text-brand-400 flex-shrink-0 mt-0.5" />
                  <span>SLA monitoring</span>
                </li>
              </ul>
              <div className="pt-8 border-t border-dark-700">
                <p className="text-dark-300 leading-relaxed"><span className="font-semibold text-brand-300">50-70%</span> reduction in response times</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-lg p-10 h-full flex flex-col hover:border-brand-500/50 transition-all group">
              <Shield size={32} className="text-brand-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-3">
                Virinchi Bolt AI
              </h3>
              <p className="text-lg text-brand-300 font-semibold mb-8">
                Democratize AI Development Across Your Enterprise
              </p>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex gap-3 text-dark-300 leading-relaxed">
                  <CheckCircle size={20} className="text-brand-400 flex-shrink-0 mt-0.5" />
                  <span>No-code AI development</span>
                </li>
                <li className="flex gap-3 text-dark-300 leading-relaxed">
                  <CheckCircle size={20} className="text-brand-400 flex-shrink-0 mt-0.5" />
                  <span>Rapid prototyping</span>
                </li>
                <li className="flex gap-3 text-dark-300 leading-relaxed">
                  <CheckCircle size={20} className="text-brand-400 flex-shrink-0 mt-0.5" />
                  <span>Citizen data scientists</span>
                </li>
              </ul>
              <div className="pt-8 border-t border-dark-700">
                <p className="text-dark-300 leading-relaxed"><span className="font-semibold text-brand-300">70-80%</span> reduction in time to MVP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 lg:px-12 bg-dark-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Our Services
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions to accelerate your AI transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-dark-800 to-dark-800/50 border border-dark-700 rounded-lg p-10 hover:border-brand-500/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-2">
                AI Adoption & Strategy
              </h3>
              <p className="text-lg text-brand-300 font-semibold mb-6">
                From Vision to Execution
              </p>
              <p className="text-dark-300 text-lg leading-relaxed mb-6">
                Strategic guidance to integrate AI capabilities across your organization, ensuring alignment with business objectives and measurable outcomes.
              </p>
              <p className="text-dark-300 leading-relaxed"><span className="font-semibold text-brand-300">Key Focus:</span> Roadmaps, architecture, transformation plans</p>
            </div>

            <div className="bg-gradient-to-br from-dark-800 to-dark-800/50 border border-dark-700 rounded-lg p-10 hover:border-brand-500/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-2">
                Integrated Innovation Cycle
              </h3>
              <p className="text-lg text-brand-300 font-semibold mb-6">
                End-to-End Partnership
              </p>
              <p className="text-dark-300 text-lg leading-relaxed mb-6">
                End-to-end innovation framework that combines ideation, rapid prototyping, and scaled deployment to drive continuous improvement.
              </p>
              <p className="text-dark-300 leading-relaxed"><span className="font-semibold text-brand-300">Key Focus:</span> Advisory, building, integration, management</p>
            </div>

            <div className="bg-gradient-to-br from-dark-800 to-dark-800/50 border border-dark-700 rounded-lg p-10 hover:border-brand-500/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-2">
                Risk Mitigation & GRC
              </h3>
              <p className="text-lg text-brand-300 font-semibold mb-6">
                AI-Powered Governance
              </p>
              <p className="text-dark-300 text-lg leading-relaxed mb-6">
                Comprehensive governance, risk management, and compliance frameworks tailored for AI-driven enterprises.
              </p>
              <p className="text-dark-300 leading-relaxed"><span className="font-semibold text-brand-300">Key Focus:</span> Predictive analytics, compliance automation</p>
            </div>

            <div className="bg-gradient-to-br from-dark-800 to-dark-800/50 border border-dark-700 rounded-lg p-10 hover:border-brand-500/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-2">
                M&A & Operational Strategy
              </h3>
              <p className="text-lg text-brand-300 font-semibold mb-6">
                Navigate Complexity
              </p>
              <p className="text-dark-300 text-lg leading-relaxed mb-6">
                Strategic advisory for mergers, acquisitions, and operational transformation to maximize value and accelerate growth.
              </p>
              <p className="text-dark-300 leading-relaxed"><span className="font-semibold text-brand-300">Key Focus:</span> Integration, continuity, synergy capture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Managed Services Section */}
      <section id="managed-services" className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Managed Services
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive support to keep your AI systems running at peak performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-lg p-10 text-center hover:border-brand-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">
                Application, Data & AI
              </h3>
              <p className="text-dark-300 leading-relaxed">Modernization with Intelligence</p>
            </div>

            <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-lg p-10 text-center hover:border-brand-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">
                Cloud Services
              </h3>
              <p className="text-dark-300 leading-relaxed">Hybrid & Multi-Cloud Excellence</p>
            </div>

            <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-lg p-10 text-center hover:border-brand-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">
                Enterprise Applications
              </h3>
              <p className="text-dark-300 leading-relaxed">Mission-Critical Support</p>
            </div>

            <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-lg p-10 text-center hover:border-brand-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">
                Network & Security
              </h3>
              <p className="text-dark-300 leading-relaxed">Zero-Trust Protection</p>
            </div>

            <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-lg p-10 text-center hover:border-brand-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">
                Resiliency & Storage
              </h3>
              <p className="text-dark-300 leading-relaxed">Unbreakable Business Continuity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-32 px-6 lg:px-12 bg-dark-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Why Choose Us
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Partner with experts who understand both technology and business transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-dark-800 to-dark-800/50 border border-dark-700 rounded-lg p-10 hover:border-brand-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">
                AI-First Approach
              </h3>
              <p className="text-dark-300 leading-relaxed">
                Intelligence at the core of every solution
              </p>
            </div>

            <div className="bg-gradient-to-br from-dark-800 to-dark-800/50 border border-dark-700 rounded-lg p-10 hover:border-brand-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">
                Enterprise-Ready
              </h3>
              <p className="text-dark-300 leading-relaxed">
                Battle-tested, scalable solutions
              </p>
            </div>

            <div className="bg-gradient-to-br from-dark-800 to-dark-800/50 border border-dark-700 rounded-lg p-10 hover:border-brand-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">
                End-to-End Support
              </h3>
              <p className="text-dark-300 leading-relaxed">
                From strategy to operations
              </p>
            </div>

            <div className="bg-gradient-to-br from-dark-800 to-dark-800/50 border border-dark-700 rounded-lg p-10 hover:border-brand-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">
                Proven Technology
              </h3>
              <p className="text-dark-300 leading-relaxed">
                Powered by Virinchi AI platform
              </p>
            </div>

            <div className="bg-gradient-to-br from-dark-800 to-dark-800/50 border border-dark-700 rounded-lg p-10 hover:border-brand-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">
                Risk-Aware
              </h3>
              <p className="text-dark-300 leading-relaxed">
                Proactive security and governance
              </p>
            </div>

            <div className="bg-gradient-to-br from-dark-800 to-dark-800/50 border border-dark-700 rounded-lg p-10 hover:border-brand-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">
                Accelerated Value
              </h3>
              <p className="text-dark-300 leading-relaxed">
                40-60% faster implementation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl lg:text-2xl text-dark-300 mb-12 leading-relaxed">
            Let's discuss how AI can drive your next phase of growth and create lasting competitive advantage.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-lg hover:from-brand-600 hover:to-brand-700 transition-all text-lg font-medium flex items-center gap-2 mx-auto group">
            Schedule a Consultation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 lg:px-12 bg-dark-900 border-t border-dark-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent mb-4">
            Cerrado
          </div>
          <p className="text-dark-300 mb-8">
            AI-First Enterprise Transformation
          </p>
          <p className="text-dark-500 text-sm">
            &copy; 2025 Cerrado Consulting Services. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
