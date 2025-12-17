import Link from 'next/link';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <div>
                <span className="text-xl font-bold">ONECOREX</span>
                <div className="text-xs text-amber-400 font-medium">Design. Deliver. Dazzle.</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Creating luxury interior spaces that blend creativity with engineering precision. 
              Every project is crafted to make people feel inspired and connected.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm leading-relaxed">
                  First Floor, Princess Cars Building<br />
                  Near Oasis Mall, Sheikh Zayed Road<br />
                  Dubai, UAE
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-amber-400 flex-shrink-0" />
                <a href="tel:+971525315971" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  +971 52 531 5971
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-400 flex-shrink-0" />
                <a href="mailto:info@onecorex.ae" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  info@onecorex.ae
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe size={18} className="text-amber-400 flex-shrink-0" />
                <a href="https://onecorex.ae" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  onecorex.ae
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} OneCorex Design and Implementation LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}