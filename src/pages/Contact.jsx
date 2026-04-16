import { MapPin, Mail, Phone, Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Header */}
      <section className="bg-neutral-dark text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Let's Make an Impact Together</h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Whether you want to sponsor a program, partner with our initiatives, or simply learn more, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-neutral-dark mb-8">Get in Touch</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6 group">
                <div className="bg-primary-blue/10 p-4 rounded-2xl group-hover:bg-primary-blue/20 transition-colors">
                  <MapPin className="w-8 h-8 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">Visit Us</h3>
                  <p className="text-gray-600 text-lg">31 Ruiter Street,<br/>Mokopane, Limpopo,<br/>0600</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-primary-green/10 p-4 rounded-2xl group-hover:bg-primary-green/20 transition-colors">
                  <Mail className="w-8 h-8 text-primary-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">Email Us</h3>
                  <a href="mailto:folangdiabetes@gmail.com" className="text-gray-600 text-lg hover:text-primary-green transition-colors">
                    folangdiabetes@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-primary-blue/10 p-4 rounded-2xl group-hover:bg-primary-blue/20 transition-colors">
                  <Phone className="w-8 h-8 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">Call Us</h3>
                  <a href="tel:0765727856" className="text-gray-600 text-lg hover:text-primary-blue transition-colors">
                    076 572 7856
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-neutral-light rounded-[2rem] p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-neutral-dark mb-4">Why Partner With Us?</h3>
              <p className="text-gray-600 mb-6">
                Folang Africa NPC operates on values of accountability and excellence, meaning every contribution directly translates to sustainable action on the ground.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-primary-green" /> Tax-deductible contributions (where applicable)
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-primary-green" /> Measurable community impact reports
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-primary-green" /> Direct community engagement opportunities
                </li>
              </ul>
            </div>
          </div>

          {/* Form Mockup */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-gray-200/50 border border-gray-100">
            <h2 className="text-2xl font-bold text-neutral-dark mb-6">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue outline-none transition-all placeholder-gray-400" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue outline-none transition-all placeholder-gray-400" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue outline-none transition-all placeholder-gray-400" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700">Area of Interest</label>
                <select id="interest" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue outline-none transition-all bg-white text-gray-600">
                  <option value="">Select an option...</option>
                  <option value="partner">General Partnership</option>
                  <option value="health">Health Care Support</option>
                  <option value="education">Education Sponsorship</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows="5" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue outline-none transition-all placeholder-gray-400 resize-none" placeholder="Tell us how you would like to be involved..."></textarea>
              </div>

              <button type="submit" className="w-full bg-primary-blue text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-primary-blue/30 hover:bg-blue-600 hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
