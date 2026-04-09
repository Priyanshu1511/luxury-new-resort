import { Shield, Clock, CreditCard, Car, Calendar, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ui/ScrollReveal'

const sections = [
  {
    icon: Calendar,
    title: 'Reservation & Cancellation',
    items: [
      'Reservations are confirmed upon receipt of a 30% advance payment.',
      'Cancellations made 14 or more days prior to arrival receive a full refund minus a 5% processing fee.',
      'Cancellations 7–13 days prior to arrival receive a 50% refund of the advance paid.',
      'Cancellations within 7 days of arrival are non-refundable.',
      'No-shows will be charged the full value of the booking.',
      'Date changes are subject to availability and may incur rate differences.',
    ],
  },
  {
    icon: Clock,
    title: 'Check-In & Check-Out',
    items: [
      'Standard check-in time is 2:00 PM. Early check-in may be arranged subject to availability.',
      'Standard check-out time is 11:00 AM. Late check-out until 2:00 PM may be requested at no charge, subject to availability.',
      'Late check-out after 2:00 PM will be charged at 50% of the nightly rate.',
      'Guests are requested to complete registration formalities upon arrival.',
      'A valid government-issued photo ID is mandatory for all adult guests.',
      'International guests must present a valid passport.',
    ],
  },
  {
    icon: CreditCard,
    title: 'Payment Policy',
    items: [
      'We accept Visa, Mastercard, American Express, and major UPI platforms.',
      'Cash payments are accepted in Indian Rupees only.',
      'A valid credit card must be presented at check-in for incidental expenses.',
      'Foreign currency transactions are processed at prevailing bank exchange rates.',
      'Invoices will be provided at check-out with full itemization.',
      'All applicable GST and service charges are included in quoted rates.',
    ],
  },
  {
    icon: Car,
    title: 'Transportation & Parking',
    items: [
      'Complimentary parking is available for all in-house guests.',
      'Valet service is available round-the-clock at no additional charge.',
      'Serenova accepts no liability for vehicles or their contents.',
      'Airport transfers must be booked at least 24 hours in advance.',
      'Helicopter pad available for private arrivals; advance coordination required.',
      'Electric vehicle charging stations are available on the property.',
    ],
  },
  {
    icon: Shield,
    title: 'Privacy & Security',
    items: [
      'All guest information is treated with the strictest confidentiality.',
      'CCTV surveillance operates in all common areas for guest safety.',
      'Guest room privacy is paramount; housekeeping requires guest consent.',
      'We do not share guest data with third parties without explicit consent.',
      'Serenova is compliant with the Information Technology Act, 2000.',
      'Guests may request their data be deleted upon departure.',
    ],
  },
  {
    icon: AlertCircle,
    title: 'Liability & Force Majeure',
    items: [
      'Serenova is not liable for loss or damage to personal belongings.',
      'Safe deposit boxes are available in all rooms and at the front desk.',
      'The resort is not responsible for disruptions caused by events beyond its control.',
      'In cases of natural calamity, alternative accommodation will be arranged.',
      'Medical emergencies are handled by our on-call physician; charges apply.',
      'Serenova reserves the right to refuse service or terminate a stay without refund in cases of misconduct.',
    ],
  },
]

export default function Policies() {
  return (
    <div className="pt-20">
      <div className="relative py-28 px-6 bg-charcoal-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold-400 mb-4">Guest Information</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Our Policies</h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6" />
          <p className="font-body text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            Our policies are designed to ensure a seamless and pleasant experience for every guest. We are always available to clarify any queries.
          </p>
        </div>
      </div>

      <div className="py-20 px-6 bg-ivory">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 text-xs flex-wrap justify-center mb-12">
            {['Policies', 'Terms & Conditions', 'Property Rules'].map((tab, i) => {
              const paths = ['/policies', '/terms', '/property-rules']
              return (
                <Link
                  key={tab}
                  to={paths[i]}
                  className={`font-body tracking-[0.15em] uppercase px-6 py-3 transition-all border ${
                    i === 0
                      ? 'bg-charcoal-900 text-white border-charcoal-900'
                      : 'border-charcoal-200 text-charcoal-500 hover:border-gold-400 hover:text-gold-600'
                  }`}
                >
                  {tab}
                </Link>
              )
            })}
          </div>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <ScrollReveal key={section.title} delay={i * 80}>
                <div className="bg-white shadow-sm border border-charcoal-50 p-8 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 border border-gold-300 flex items-center justify-center flex-shrink-0">
                      <section.icon size={18} className="text-gold-600" />
                    </div>
                    <h2 className="font-serif text-2xl text-charcoal-900">{section.title}</h2>
                  </div>
                  <div className="w-full h-px bg-gold-100 mb-6" />
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="font-body text-sm text-charcoal-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 bg-gold-50 border border-gold-200 p-8 text-center">
            <p className="font-body text-sm text-charcoal-600 mb-4">
              Have questions about our policies? Our Guest Relations team is available 24/7.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 text-charcoal-900 font-body text-xs tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-gold-400 transition-colors"
            >
              Contact Guest Relations
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
