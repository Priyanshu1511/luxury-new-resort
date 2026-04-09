import { useState } from 'react'
import { Check, Star, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ui/ScrollReveal'
import BookingCTA from '../components/ui/BookingCTA'

const packages = [
  {
    name: 'Heritage Room',
    subtitle: 'Garden Retreat',
    price: 18000,
    size: '450 sq ft',
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: [
      'King or Twin Bed',
      'Garden or Pool View',
      'Rainfall Shower',
      'Private Sit-Out',
      'Daily Breakfast',
      'Evening Tea Service',
      'Complimentary Wi-Fi',
      '24-Hour Room Service',
    ],
    highlight: false,
  },
  {
    name: 'Signature Suite',
    subtitle: 'Elevated Living',
    price: 32000,
    size: '650 sq ft',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: [
      'King Bed with Premium Linen',
      'Private Lake-Facing Balcony',
      'Soaking Tub + Rainfall Shower',
      'Living Room Alcove',
      'Daily Breakfast + Dinner',
      'Evening Cocktail Hour',
      'Personalized Butler Service',
      'Spa Access (1 session/day)',
      'Complimentary Airport Transfer',
    ],
    highlight: true,
    badge: 'Best Value',
  },
  {
    name: 'Royal Villa',
    subtitle: 'Ultimate Indulgence',
    price: 58000,
    size: '1,200 sq ft',
    image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: [
      '2 Master Bedrooms',
      'Private Plunge Pool',
      'Full Kitchen & Pantry',
      'Dedicated Butler 24/7',
      'All Meals Included',
      'Unlimited Spa Access',
      'Private Dining on Request',
      'Curated Experiences Package',
      'Complimentary Airport Transfer',
      'Welcome Champagne & Hamper',
    ],
    highlight: false,
  },
]

const addOns = [
  { name: 'Candlelit Dinner', desc: 'Private lakeside dinner for two', price: '₹4,500' },
  { name: 'Spa Ritual', desc: '90-min signature Ayurvedic treatment', price: '₹3,800' },
  { name: 'Estate Tour', desc: 'Guided walk through coffee & spice estates', price: '₹1,200' },
  { name: 'Airport Transfer', desc: 'Luxury sedan, one-way', price: '₹2,500' },
  { name: 'Bonfire Experience', desc: 'Evening bonfire with curated snacks', price: '₹2,000' },
  { name: 'Photography Session', desc: '1-hour professional resort shoot', price: '₹6,000' },
]

export default function Tariff() {
  const [selectedNights, setSelectedNights] = useState(2)

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="relative py-28 px-6 bg-charcoal-900 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Tariff"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold-400 mb-4">Accommodations</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Tariff & Packages</h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6" />
          <p className="font-body text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            Each rate is crafted to offer an immersive experience, not simply a room for the night. All prices are inclusive of taxes.
          </p>
        </div>
      </div>

      {/* Night Selector */}
      <div className="bg-ivory border-b border-charcoal-100 py-6 px-6 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-charcoal-600">
            Showing rates for{' '}
            <span className="font-medium text-charcoal-900">{selectedNights} night{selectedNights > 1 ? 's' : ''}</span>
          </p>
          <div className="flex items-center gap-3">
            <span className="font-body text-xs tracking-wider uppercase text-charcoal-400">Nights:</span>
            {[1, 2, 3, 5, 7].map((n) => (
              <button
                key={n}
                onClick={() => setSelectedNights(n)}
                className={`w-10 h-10 font-body text-sm transition-all duration-200 ${
                  selectedNights === n
                    ? 'bg-gold-500 text-white'
                    : 'border border-charcoal-200 text-charcoal-600 hover:border-gold-400 hover:text-gold-600'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
          <Link
            to="/contact"
            className="bg-gold-500 text-charcoal-900 font-body text-xs tracking-[0.2em] uppercase px-6 py-2.5 hover:bg-gold-400 transition-colors"
          >
            Make Reservation
          </Link>
        </div>
      </div>

      {/* Packages */}
      <section className="py-20 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 100}>
                <div className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full flex flex-col ${
                  pkg.highlight
                    ? 'ring-2 ring-gold-500 shadow-2xl shadow-gold-500/20'
                    : 'shadow-lg hover:shadow-xl'
                } bg-white`}>
                  {pkg.badge && (
                    <div className="absolute top-4 right-4 z-10 bg-gold-500 text-charcoal-900 font-body text-xs tracking-widest uppercase px-4 py-1.5">
                      {pkg.badge}
                    </div>
                  )}
                  <div className="relative h-52 overflow-hidden">
                    <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="font-body text-xs text-white/70 tracking-wider">{pkg.size}</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <p className="font-body text-xs tracking-[0.25em] uppercase text-gold-500 mb-1">{pkg.subtitle}</p>
                    <h3 className="font-serif text-2xl text-charcoal-900 mb-3">{pkg.name}</h3>
                    <div className="w-8 h-px bg-gold-400 mb-6" />

                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-4xl text-charcoal-900">
                          ₹{(pkg.price * selectedNights).toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className="font-body text-xs text-charcoal-400">
                        ₹{pkg.price.toLocaleString('en-IN')} / night · {selectedNights} night{selectedNights > 1 ? 's' : ''} · all taxes included
                      </span>
                    </div>

                    <ul className="space-y-2.5 mb-8 flex-1">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Check size={13} className="text-gold-500 mt-0.5 flex-shrink-0" />
                          <span className="font-body text-sm text-charcoal-600">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className={`w-full text-center font-body text-xs tracking-[0.2em] uppercase py-4 transition-all duration-300 ${
                        pkg.highlight
                          ? 'bg-gold-500 text-charcoal-900 hover:bg-gold-400'
                          : 'border border-charcoal-300 text-charcoal-700 hover:bg-charcoal-900 hover:text-white hover:border-charcoal-900'
                      }`}
                    >
                      Reserve This Suite
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-6 bg-charcoal-900">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.35em] uppercase text-gold-500 mb-4">Enhancements</p>
            <h2 className="font-serif text-4xl text-white mb-4">Curate Your Experience</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 80}>
                <div className="bg-charcoal-800/50 border border-white/10 p-6 flex items-start gap-5 hover:border-gold-500/40 transition-all duration-300 group">
                  <Star size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-serif text-lg text-white mb-1 group-hover:text-gold-400 transition-colors">{item.name}</h4>
                    <p className="font-body text-sm text-white/50 mb-3">{item.desc}</p>
                    <span className="font-serif text-xl text-gold-500">{item.price}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-body text-xs tracking-[0.2em] uppercase px-10 py-4 hover:border-gold-400 hover:text-gold-400 transition-all duration-300"
            >
              Enquire About Packages
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* Policy Note */}
      <section className="py-10 px-6 bg-ivory border-b border-charcoal-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-sm text-charcoal-500 leading-relaxed">
            All rates are per room per night and are subject to change without prior notice.
            Taxes and service charges are included. For group bookings or special occasions, please{' '}
            <Link to="/contact" className="text-gold-600 hover:underline">contact our reservations team</Link>.{' '}
            <Link to="/policies" className="text-gold-600 hover:underline">View our cancellation policy</Link>.
          </p>
        </div>
      </section>

      <BookingCTA variant="dark" />
    </div>
  )
}
