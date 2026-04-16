import { HeartPulse, BookOpen, Trophy, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FocusAreas() {
  const areas = [
    {
      id: 'healthcare',
      title: 'Health Care',
      icon: <HeartPulse className="w-10 h-10 text-primary-blue" />,
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'We believe health is the foundation of any thriving community. Our healthcare initiatives focus on promoting wellness, improving access to vital medical resources, and driving excellence in both private and public health sectors.'
    },
    {
      id: 'education',
      title: 'Education',
      icon: <BookOpen className="w-10 h-10 text-primary-green" />,
      color: 'green',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Education unlocks potential. We aim to uplift communities by providing comprehensive educational tools, supporting skills development, and creating environments where minds can flourish regardless of their background.'
    },
    {
      id: 'sports',
      title: 'Sports & Recreation',
      icon: <Trophy className="w-10 h-10 text-primary-blue" />,
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Sports build character, discipline, and unity. Through recreation, we encourage active and healthy lifestyles while focusing on youth development, keeping them engaged in positive, team-building activities.'
    },
    {
      id: 'economic',
      title: 'Economic Development',
      icon: <TrendingUp className="w-10 h-10 text-primary-green" />,
      color: 'green',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Sustainable communities require economic stability. We foster local empowerment and sustainable growth, helping individuals build businesses and livelihoods that can support the next generation.'
    }
  ];

  return (
    <div className="flex flex-col bg-neutral-light min-h-screen pb-24">
      {/* Header */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-dark mb-6">Core Focus Areas</h1>
          <p className="text-xl text-gray-600">
            Our strategic programs are built around four pillars essential for sustainable community development and empowerment.
          </p>
        </div>
      </section>

      {/* Cards List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        {areas.map((area, index) => (
          <div 
            key={area.id} 
            className={`bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            {/* Image Side */}
            <div className="w-full md:w-2/5 aspect-video md:aspect-auto relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-dark/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src={area.image} 
                alt={area.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className={`mb-6 inline-flex p-4 rounded-2xl ${area.color === 'blue' ? 'bg-primary-blue/10' : 'bg-primary-green/10'}`}>
                {area.icon}
              </div>
              <h2 className="text-3xl font-bold text-neutral-dark mb-4">{area.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {area.description}
              </p>
              <div>
                <Link to="/contact" className={`inline-flex font-semibold items-center gap-2 group ${area.color === 'blue' ? 'text-primary-blue hover:text-blue-700' : 'text-primary-green hover:text-green-700'}`}>
                  Partner with this program <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
