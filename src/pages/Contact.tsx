import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'
import ScrollReveal from '../components/ui/ScrollReveal'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    lines: ['Serenova Estate, Lake Road', 'Coorg, Karnataka 571201', 'India'],
  },
  {
    icon: Phone,
    title: 'Telephone',
    lines: ['+91 98765 43210', '+91 80 4567 8901', '(Reservations Toll-Free)'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['reservations@serenova.com', 'concierge@serenova.com', 'events@serenova.com'],
  },
  {
    icon: Clock,
    title: 'Hours',
    lines: ['Front Desk: 24/7', 'Reservations: 7am – 11pm', 'Concierge: 6am – 12am'],
  },
]

const subjects = [
  'General Enquiry', 'Room Reservation', 'Group Booking',
  'Spa Appointment', 'Event Planning', 'Feedback', 'Other',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    const { error: err } = await supabase.from('contact_messages').insert([form])
    setSubmitting(false)
    if (err) {
      setError('Something went wrong. Please try again or call us directly.')
    } else {
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    }
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="relative py-28 px-6 bg-charcoal-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold-400 mb-4">Get in Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Contact Us</h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6" />
          <p className="font-body text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            Our team is dedicated to crafting your perfect retreat. Reach out and let us begin planning your Serenova experience.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <section className="py-16 px-6 bg-charcoal-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={info.title} delay={i * 80}>
                <div className="bg-charcoal-900 p-8 text-center hover:bg-charcoal-800 transition-colors h-full">
                  <div className="w-12 h-12 border border-gold-500/40 flex items-center justify-center mx-auto mb-5">
                    <info.icon size={18} className="text-gold-500" />
                  </div>
                  <h3 className="font-body text-xs tracking-[0.25em] uppercase text-gold-500 mb-4">{info.title}</h3>
                  {info.lines.map((line, j) => (
                    <p key={j} className="font-body text-sm text-white/60 leading-loose">{line}</p>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="py-20 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <ScrollReveal>
              <div>
                <h2 className="font-serif text-3xl text-charcoal-900 mb-2">Find Us</h2>
                <div className="w-10 h-px bg-gold-500 mb-6" />
                <p className="font-body text-sm text-charcoal-500 mb-6 leading-relaxed">
                  Serenova Resort is nestled in the lush coffee estates of Coorg, Karnataka. The nearest airport is Mangalore International (2.5 hours) and Kempegowda International, Bengaluru (4.5 hours).
                </p>
                <div className="w-full h-80 overflow-hidden shadow-lg bg-charcoal-100">
                  <iframe
                    title="Serenova Resort Location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=75.6%2C12.3%2C75.9%2C12.5&layer=mapnik&marker=12.4%2C75.75"
                    width="100%"
                    height="100%"
                    className="border-0"
                    loading="lazy"
                  />
                </div>
                <p className="font-body text-xs text-charcoal-400 mt-3 text-center">
                  Serenova Estate, Lake Road, Coorg, Karnataka
                </p>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={150}>
              <div>
                <h2 className="font-serif text-3xl text-charcoal-900 mb-2">Send a Message</h2>
                <div className="w-10 h-px bg-gold-500 mb-6" />

                {submitted ? (
                  <div className="bg-white shadow-lg p-12 text-center">
                    <CheckCircle size={48} className="text-gold-500 mx-auto mb-5" />
                    <p className="font-serif text-2xl text-charcoal-800 mb-3">Message Received</p>
                    <p className="font-body text-sm text-charcoal-500 leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. Our team will respond within 4 hours during operating hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 font-body text-xs tracking-[0.2em] uppercase text-gold-600 hover:underline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white shadow-lg p-8 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-body text-xs tracking-wider uppercase text-charcoal-500 block mb-2">Name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          className="w-full border border-charcoal-200 px-4 py-3 font-body text-sm text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors bg-ivory"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="font-body text-xs tracking-wider uppercase text-charcoal-500 block mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          className="w-full border border-charcoal-200 px-4 py-3 font-body text-sm text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors bg-ivory"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-body text-xs tracking-wider uppercase text-charcoal-500 block mb-2">Phone</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          className="w-full border border-charcoal-200 px-4 py-3 font-body text-sm text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors bg-ivory"
                          placeholder="+91 00000 00000"
                        />
                      </div>
                      <div>
                        <label className="font-body text-xs tracking-wider uppercase text-charcoal-500 block mb-2">Subject *</label>
                        <select
                          required
                          value={form.subject}
                          onChange={e => setForm({ ...form, subject: e.target.value })}
                          className="w-full border border-charcoal-200 px-4 py-3 font-body text-sm text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors bg-ivory"
                        >
                          <option value="">Select subject</option>
                          {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="font-body text-xs tracking-wider uppercase text-charcoal-500 block mb-2">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full border border-charcoal-200 px-4 py-3 font-body text-sm text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors resize-none bg-ivory"
                        placeholder="How can we assist you? Tell us about your ideal stay..."
                      />
                    </div>
                    {error && (
                      <p className="font-body text-xs text-red-500">{error}</p>
                    )}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 bg-charcoal-900 text-white font-body text-xs tracking-[0.2em] uppercase py-4 hover:bg-gold-600 transition-colors disabled:opacity-50"
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                      <Send size={13} />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

