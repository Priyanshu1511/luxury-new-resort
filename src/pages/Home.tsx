import { Link } from 'react-router-dom'
import { ArrowRight, Wifi, Utensils, Waves, TreePine, Car, Coffee, Star, ChevronDown } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import BookingCTA from '../components/ui/BookingCTA'

const amenities = [
  { icon: Waves, label: 'Infinity Pool', desc: 'Panoramic vistas from our heated infinity pool overlooking the valley' },
  { icon: Utensils, label: 'Fine Dining', desc: 'Award-winning cuisine crafted by our resident Michelin-trained chefs' },
  { icon: Coffee, label: 'Signature Spa', desc: 'Ancient healing therapies reimagined in a serene sanctuary of wellness' },
  { icon: TreePine, label: 'Nature Walks', desc: 'Guided trails through pristine coffee estates and wildlife corridors' },
  { icon: Car, label: 'Chauffeur Service', desc: 'Seamless transfers in our fleet of luxury vehicles, available 24/7' },
  { icon: Wifi, label: 'High-Speed Wi-Fi', desc: 'Stay connected with complimentary high-speed internet throughout the resort' },
]

const rooms = [
  {
    name: 'Heritage Room',
    size: '450 sq ft',
    price: '₹18,000',
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['King Bed', 'Garden View', 'Rainfall Shower'],
  },
  {
    name: 'Lakeside Suite',
    size: '650 sq ft',
    price: '₹32,000',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['King Bed', 'Private Balcony', 'Plunge Pool'],
  },
  {
    name: 'Royal Villa',
    size: '1200 sq ft',
    price: '₹58,000',
    image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['2 Bedrooms', 'Private Pool', 'Butler Service'],
  },
]

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'An absolutely transcendent experience. The attention to detail in every room speaks of a property that truly understands luxury.',
    room: 'Royal Suite',
  },
  {
    name: 'James Wellington',
    location: 'London',
    rating: 5,
    text: 'Serenova redefines what a luxury resort should be. The spa treatments were phenomenal, the dining was world-class.',
    room: 'Lakeside Villa',
  },
  {
    name: 'Meera Kapoor',
    location: 'Delhi',
    rating: 5,
    text: 'This is the pinnacle of Indian luxury hospitality. Every element reflects deep thought and care. Already planning our return.',
    room: 'Presidential Suite',
  },
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Serenova Resort"
            className="w-full h-full object-cover scale-105 transition-transform duration-[20s] ease-out hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/50 via-charcoal-900/30 to-charcoal-900/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="font-body text-xs tracking-[0.5em] uppercase text-gold-400 mb-6 animate-fade-in">
            Welcome to Rubaru Hill Resort
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight animate-fade-up">
            Where Luxury<br />
            <span className="italic text-gold-400">Meets Serenity</span>
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8" />
          <p className="font-body text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Nestled among ancient coffee estates and mist-draped valleys, Serenova is an invitation to experience India's most refined luxury escape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tariff"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-charcoal-900 font-body text-xs tracking-[0.25em] uppercase px-10 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-0.5"
            >
              Book Your Stay
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-body text-xs tracking-[0.25em] uppercase px-10 py-4 hover:border-gold-400 hover:text-gold-400 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Resort
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown size={24} className="text-white/40" />
        </div>
      </section>

      {/* About */}
      <section className="py-28 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Resort Interior"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 border-2 border-gold-400/30 hidden lg:block" />
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gold-500/10 hidden lg:block" />
                <div className="absolute bottom-8 left-8 bg-charcoal-900/90 backdrop-blur-sm px-6 py-4 border-l-2 border-gold-500">
                  <span className="font-serif text-3xl text-gold-400 block">15+</span>
                  <span className="font-body text-xs tracking-widest uppercase text-white/60">Years of Excellence</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="lg:pl-8">
                <p className="section-label">Our Story</p>
                <h2 className="font-serif text-4xl md:text-5xl text-charcoal-900 mb-6 leading-tight">
                  A Legacy of<br />Uncompromising<br />
                  <span className="italic text-gold-600">Refinement</span>
                </h2>
                <div className="w-12 h-px bg-gold-500 mb-8" />
                <p className="font-body text-charcoal-600 leading-relaxed mb-6">
                  Founded in 2009 by the Mehta family, Serenova was conceived as a living testament to the belief that true luxury lies in thoughtful details — the scent of fresh jasmine each morning, the weight of hand-spun cotton sheets, the warmth of a staff member who remembers your name.
                </p>
                <p className="font-body text-charcoal-600 leading-relaxed mb-10">
                  Set across 40 acres of pristine estate in the heart of Coorg, our resort offers 48 exclusive accommodations, each a private sanctuary with its own story to tell. Every element has been curated to transport you into a world of serene, unpretentious luxury.
                </p>
                <div className="grid grid-cols-3 gap-6 mb-10">
                  {[
                    { num: '48', label: 'Exclusive Suites' },
                    { num: '40', label: 'Acres of Estate' },
                    { num: '5★', label: 'Rating' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center border-t border-gold-200 pt-4">
                      <span className="font-serif text-3xl text-gold-600 block">{stat.num}</span>
                      <span className="font-body text-xs tracking-wider uppercase text-charcoal-500">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-charcoal-900 text-charcoal-900 font-body text-xs tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-charcoal-900 hover:text-white transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight size={13} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-28 px-6 bg-charcoal-900">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.35em] uppercase text-gold-500 mb-4">Experiences</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">World-Class Amenities</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {amenities.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 80}>
                <div className="bg-charcoal-900 p-8 group hover:bg-charcoal-800 transition-all duration-300 h-full">
                  <div className="w-12 h-12 border border-gold-500/40 flex items-center justify-center mb-6 group-hover:border-gold-500 group-hover:bg-gold-500/10 transition-all duration-300">
                    <item.icon size={20} className="text-gold-500" />
                  </div>
                  <h3 className="font-serif text-xl text-white mb-3 group-hover:text-gold-400 transition-colors">{item.label}</h3>
                  <p className="font-body text-sm text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-28 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label">Accommodations</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal-900 mb-4">Spaces of Distinction</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6" />
            <p className="font-body text-charcoal-500 max-w-xl mx-auto text-sm leading-relaxed">
              Each room and suite at Serenova has been conceived as a private world — a place where comfort and artistry coexist effortlessly.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, i) => (
              <ScrollReveal key={room.name} delay={i * 120}>
                <div className="group cursor-pointer bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link
                        to="/tariff"
                        className="bg-gold-500 text-charcoal-900 font-body text-xs tracking-widest uppercase px-5 py-2 hover:bg-gold-400 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-serif text-xl text-charcoal-900">{room.name}</h3>
                      <span className="font-body text-xs text-charcoal-400">{room.size}</span>
                    </div>
                    <div className="w-8 h-px bg-gold-400 mb-4" />
                    <div className="flex flex-wrap gap-2 mb-4">
                      {room.features.map((f) => (
                        <span key={f} className="font-body text-xs text-charcoal-500 border border-charcoal-100 px-3 py-1">
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-charcoal-50">
                      <div>
                        <span className="font-body text-xs text-charcoal-400 tracking-wider uppercase">From</span>
                        <span className="font-serif text-2xl text-gold-600 block">{room.price}</span>
                        <span className="font-body text-xs text-charcoal-400">per night</span>
                      </div>
                      <Link
                        to="/tariff"
                        className="flex items-center gap-1 font-body text-xs tracking-wider uppercase text-charcoal-500 hover:text-gold-600 transition-colors"
                      >
                        Details <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/tariff"
              className="inline-flex items-center gap-2 border border-charcoal-300 text-charcoal-700 font-body text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal-900 hover:text-white hover:border-charcoal-900 transition-all duration-300"
            >
              View All Accommodations
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="h-80 overflow-hidden">
        <div className="flex h-full">
          {[
            'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=600',
          ].map((src, i) => (
            <div key={i} className="flex-1 overflow-hidden relative group">
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link to="/gallery" className="text-white font-body text-xs tracking-widest uppercase border border-white/50 px-4 py-2 hover:border-gold-400 hover:text-gold-400 transition-colors">
                  View Gallery
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label">Guest Voices</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal-900 mb-4">Stories of Serenova</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 120}>
                <div className="bg-white p-8 shadow-lg border-t-2 border-gold-400 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="font-serif text-lg text-charcoal-700 italic leading-relaxed mb-6 flex-1">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-5 border-t border-charcoal-50">
                    <div className="w-10 h-10 bg-gold-100 flex items-center justify-center font-serif text-gold-600 font-medium">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <span className="font-body text-sm font-bold text-charcoal-800 block">{t.name}</span>
                      <span className="font-body text-xs text-charcoal-400">{t.location} · {t.room}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/feedback"
              className="inline-flex items-center gap-2 border border-charcoal-300 text-charcoal-700 font-body text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-charcoal-900 hover:text-white hover:border-charcoal-900 transition-all duration-300"
            >
              Read All Reviews
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <BookingCTA variant="dark" />
    </div>
  )
}
