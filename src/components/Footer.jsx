import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import logo from '../assets/LogoFolang.png';

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-neutral-light pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <div className="bg-white/95 p-3 rounded-2xl shadow-lg inline-block hover:bg-white transition-colors duration-300">
                <img src={logo} alt="Folang Africa NPC Logo" className="h-14 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-sm text-gray-400 mt-4 max-w-xs">
              With limited resources we touch unlimited lives. Equipping communities with the tools and resources to pursue a healthy lifestyle.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/focus-areas" className="text-gray-400 hover:text-white transition-colors text-sm">Focus Areas</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Focus Areas</h3>
            <ul className="space-y-3">
              <li><Link to="/focus-areas" className="text-gray-400 hover:text-primary-blue transition-colors text-sm">Health Care</Link></li>
              <li><Link to="/focus-areas" className="text-gray-400 hover:text-primary-blue transition-colors text-sm">Education</Link></li>
              <li><Link to="/focus-areas" className="text-gray-400 hover:text-primary-blue transition-colors text-sm">Sports</Link></li>
              <li><Link to="/focus-areas" className="text-gray-400 hover:text-primary-blue transition-colors text-sm">Economic Dev.</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">31 Ruiter Street, Mokopane, Limpopo, 0600</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-green flex-shrink-0" />
                <a href="mailto:folangdiabetes@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">folangdiabetes@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-green flex-shrink-0" />
                <a href="tel:0765727856" className="text-sm text-gray-400 hover:text-white transition-colors">076 572 7856</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Folang Africa NPC. All rights reserved.
          </p>
          <div className="text-sm text-gray-500">
            Registered Non-Profit Company
          </div>
        </div>
      </div>
    </footer>
  );
}
