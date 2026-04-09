import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface Props {
  variant?: 'dark' | 'gold'
}

export default function BookingCTA({ variant = 'dark' }: Props) {
  const bg = variant === 'gold'
    ? 'bg-gradient-to-r from-gold-700 via-gold-600 to-gold-700'
    : 'bg-charcoal-900'

  return (
    <section className={`${bg} py-24 px-6`}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-body text-xs tracking-[0.35em] uppercase text-gold-400 mb-4">Reserve Your Escape</p>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
          Begin Your Journey to<br />Extraordinary Luxury
        </h2>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8" />
        <p className="font-body text-white/60 text-sm max-w-xl mx-auto mb-10 leading-relaxed">
          Every moment at Serenova is crafted with meticulous care. Contact our reservations team to begin planning your perfect retreat.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/tariff"
            className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-charcoal-900 font-body text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30"
          >
            View Tariff & Packages
            <ArrowRight size={14} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-body text-xs tracking-[0.2em] uppercase px-10 py-4 hover:border-gold-400 hover:text-gold-400 transition-all duration-300"
          >
            Make Enquiry
          </Link>
        </div>
      </div>
    </section>
  )
}
