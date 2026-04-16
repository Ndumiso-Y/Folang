import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, BookOpen, Trophy, TrendingUp, HandHeart, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-neutral-light min-h-[90vh] flex items-center">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-blue/10 blur-3xl opacity-50 block"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary-green/10 blur-3xl opacity-50 block"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center space-y-8 max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm w-max border border-gray-100">
                <span className="flex h-2 w-2 rounded-full bg-primary-green"></span>
                <span className="text-sm font-medium text-neutral-dark">Sustainable Community Development</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-neutral-dark tracking-tight leading-[1.1]">
                With limited resources we touch <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green">unlimited lives</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                Building partnerships and mobilising resources to equip communities with the tools they need to pursue healthy, sustainable lifestyles.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/about" className="inline-flex justify-center items-center gap-2 bg-primary-blue text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-primary-blue/30 hover:bg-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="inline-flex justify-center items-center gap-2 bg-white text-neutral-dark border border-gray-200 px-8 py-4 rounded-full font-semibold shadow-sm hover:border-primary-green hover:text-primary-green transition-all">
                  Partner With Us
                </Link>
              </div>
            </div>
            
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-green/20 to-primary-blue/20 rounded-[3rem] transform rotate-3 scale-105 transition-transform duration-700 hover:scale-100"></div>
              <img 
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Community Health in Africa" 
                className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
                <div className="bg-primary-green/10 p-3 rounded-full">
                  <HandHeart className="w-8 h-8 text-primary-green" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Registered</p>
                  <p className="text-sm font-bold text-neutral-dark">Non-Profit Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values/Intro Snapshot Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">Empowering the Future</h2>
            <p className="text-gray-600 text-lg">
              Formerly known as The Folang Trust, Folang Africa NPC is a globally recognized organization focused on community upliftment, health, and sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-light p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-7 h-7 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-dark text-balance">Accountable Partnerships</h3>
              <p className="text-gray-600">Fostering trust and collaboration for sustainable impact across communities.</p>
            </div>
            <div className="bg-neutral-light p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Trophy className="w-7 h-7 text-primary-green" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-dark text-balance">Excellence in Health</h3>
              <p className="text-gray-600">Driving superior private and public health initiatives for all.</p>
            </div>
            <div className="bg-neutral-light p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-dark text-balance">Results-Focused</h3>
              <p className="text-gray-600">People-centered projects crafted with innovative thoughts and measurable outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-24 bg-neutral-dark text-white relative overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-primary-green tracking-widest uppercase mb-2">Our Pillars</h2>
              <h3 className="text-3xl md:text-5xl font-bold">Core Focus Areas</h3>
            </div>
            <Link to="/focus-areas" className="inline-flex items-center gap-2 text-white hover:text-primary-blue transition-colors group">
              View all programs <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 p-8 rounded-3xl hover:bg-gray-800 transition-colors group">
              <HeartPulse className="w-12 h-12 text-primary-blue mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-3">Health Care</h4>
              <p className="text-sm text-gray-400">Promoting wellness and providing healthcare resources to underserved areas.</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 p-8 rounded-3xl hover:bg-gray-800 transition-colors group">
              <BookOpen className="w-12 h-12 text-primary-green mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-3">Education</h4>
              <p className="text-sm text-gray-400">Uplifting communities through comprehensive educational tools and skills.</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 p-8 rounded-3xl hover:bg-gray-800 transition-colors group">
              <Trophy className="w-12 h-12 text-primary-blue mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-3">Sports</h4>
              <p className="text-sm text-gray-400">Encouraging active lifestyles and youth development through recreation.</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 p-8 rounded-3xl hover:bg-gray-800 transition-colors group">
              <TrendingUp className="w-12 h-12 text-primary-green mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-3">Economic Dev.</h4>
              <p className="text-sm text-gray-400">Fostering sustainable economic growth and local empowerment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-dark mb-6 text-balance">Think Globally, Act Locally</h2>
          <p className="text-xl text-gray-600 mb-10 text-balance">
            Join us in our mission to build partnerships, mobilise resources, and transform communities. Your support makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto text-center bg-primary-green text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary-green/30 hover:bg-green-600 hover:-translate-y-1 transition-all">
              Become a Partner
            </Link>
            <Link to="/about" className="w-full sm:w-auto text-center bg-white text-neutral-dark border border-gray-200 px-8 py-4 rounded-full font-bold shadow-sm hover:border-primary-blue hover:text-primary-blue transition-all">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
