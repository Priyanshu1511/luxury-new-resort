import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-serif text-3xl text-gold-400 block">Serenova</span>
              <span className="font-body text-[9px] tracking-[0.4em] uppercase text-white/40 mt-1 block">Luxury Resort</span>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-8">
              Where the world fades away and tranquility becomes your reality. An unparalleled sanctuary of refined luxury.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/40 hover:border-gold-500 hover:text-gold-400 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.3em] uppercase text-gold-500 mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Rooms & Suites', path: '/tariff' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Guest Reviews', path: '/feedback' },
                { label: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-white/50 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.3em] uppercase text-gold-500 mb-6">Information</h4>
            <ul className="space-y-3">
              {[
                { label: 'Tariff & Pricing', path: '/tariff' },
                { label: 'Policies', path: '/policies' },
                { label: 'Terms & Conditions', path: '/terms' },
                { label: 'Property Rules', path: '/property-rules' },
                { label: 'Guest Portal', path: '/login' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-white/50 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.3em] uppercase text-gold-500 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={15} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-white/50 leading-relaxed">
                  Serenova Estate, Lake Road<br />Coorg, Karnataka 571201
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={15} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+919876543210" className="font-body text-sm text-white/50 hover:text-gold-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={15} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:reservations@serenova.com" className="font-body text-sm text-white/50 hover:text-gold-400 transition-colors">
                  reservations@serenova.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30 tracking-wider">
            © {new Date().getFullYear()} Rubaru Hill Resort. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: 'Privacy Policy', path: '/policies' },
              { label: 'Terms', path: '/terms' },
              { label: 'Sitemap', path: '/' },
            ].map((link) => (
              <Link
                key={link.path + link.label}
                to={link.path}
                className="font-body text-xs text-white/30 hover:text-gold-400 transition-colors tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
