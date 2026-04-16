import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, HeartHandshake } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Focus Areas', path: '/focus-areas' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-light shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
              <div className="p-2 bg-primary-blue/10 rounded-xl group-hover:bg-primary-blue/20 transition-colors">
                <HeartHandshake className="w-8 h-8 text-primary-blue" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none text-neutral-dark">Folang Africa</span>
                <span className="text-xs font-semibold tracking-wider text-primary-green uppercase">NPC</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary-blue ${
                    isActive ? 'text-primary-blue' : 'text-neutral-dark'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-primary-blue text-white px-6 py-2.5 rounded-full font-medium shadow-sm hover:bg-blue-600 hover:shadow transition-all transform hover:-translate-y-0.5"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-neutral-dark hover:text-primary-blue hover:bg-neutral-light focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white border-b border-neutral-light shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-primary-blue/10 text-primary-blue'
                    : 'text-neutral-dark hover:bg-neutral-light hover:text-primary-blue'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-4 px-4">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block w-full text-center bg-primary-green text-white px-6 py-3 rounded-xl font-medium shadow-sm hover:bg-green-600 transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
