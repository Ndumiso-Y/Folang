import { Heart, Globe2, Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col bg-white">
      {/* Page Header */}
      <section className="bg-neutral-light py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-dark mb-6">About Folang Africa</h1>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            We are a registered Non-Profit Company dedicated to sustainable community development. Formerly known as The Folang Trust, we continue our legacy of empowerment with a global outlook and local impact.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          <div className="bg-gradient-to-br from-primary-blue/5 to-transparent p-10 rounded-[2.5rem] border border-primary-blue/10 relative overflow-hidden group hover:border-primary-blue/30 transition-all">
            <div className="absolute top-0 right-0 -mr-6 -mt-6 bg-primary-blue/10 w-32 h-32 rounded-full blur-2xl"></div>
            <Heart className="w-12 h-12 text-primary-blue mb-8 relative z-10" />
            <h2 className="text-sm font-bold text-primary-blue uppercase tracking-widest mb-2 relative z-10">Our Vision</h2>
            <p className="text-2xl md:text-3xl font-bold text-neutral-dark leading-tight relative z-10">
              Touch unlimited lives with limited resources.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-green/5 to-transparent p-10 rounded-[2.5rem] border border-primary-green/10 relative overflow-hidden group hover:border-primary-green/30 transition-all">
            <div className="absolute top-0 right-0 -mr-6 -mt-6 bg-primary-green/10 w-32 h-32 rounded-full blur-2xl"></div>
            <Target className="w-12 h-12 text-primary-green mb-8 relative z-10" />
            <h2 className="text-sm font-bold text-primary-green uppercase tracking-widest mb-2 relative z-10">Our Mission</h2>
            <p className="text-lg text-neutral-dark leading-relaxed font-medium relative z-10">
              Build partnerships and collaborations to mobilise resources, equipping communities with the tools and resources to pursue a healthy lifestyle.
            </p>
          </div>

        </div>
      </section>

      {/* History & Identity */}
      <section className="py-24 bg-neutral-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1593113580326-72cb7b6d1927?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Community collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute -right-6 -bottom-6 bg-primary-blue p-6 rounded-3xl shadow-xl max-w-xs hidden md:block">
                <Globe2 className="w-10 h-10 text-white mb-3" />
                <p className="text-white font-bold leading-tight">Think globally,<br/>act locally mindset</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Identity & Heritage</h2>
                <div className="w-16 h-1 bg-primary-green rounded-full"></div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Folang Africa NPC stems from a deep-seeded passion for community upliftment. Transitioning from our previous identity as <strong>The Folang Trust</strong>, we have solidified our role as a legally registered Non-Profit Company with stronger governance and expanded reach.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We position ourselves at the heart of community development. Our approach is not just about charity—it is about sustainable empowerment, innovative thoughts, and holding ourselves accountable through strategic partnerships.
              </p>
              
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-2xl border border-gray-700/50">
                  <div className="bg-gray-700 p-2 rounded-lg mt-1">
                    <Lightbulb className="w-5 h-5 text-primary-yellow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Innovative Community Solutions</h4>
                    <p className="text-sm text-gray-400">Tailoring specific methodologies to address real local challenges.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
