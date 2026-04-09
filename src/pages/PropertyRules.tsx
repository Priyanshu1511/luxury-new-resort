import { Link } from 'react-router-dom'
import { Volume2, Wine, PawPrint, Cigarette, Camera, Users, Sun, Moon } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'

const ruleCategories = [
  {
    icon: Volume2,
    title: 'Noise & Quiet Hours',
    color: 'text-blue-500',
    rules: [
      'Quiet hours are strictly observed from 10:00 PM to 7:00 AM.',
      'Music and entertainment in rooms must be kept at a considerate volume.',
      'Pool and outdoor areas observe quiet hours after 9:30 PM.',
      'In-room movie nights are welcome; please use headphones after 10 PM.',
      'Event spaces are soundproofed and available for private gatherings until 11:00 PM.',
    ],
  },
  {
    icon: Wine,
    title: 'Dining & Beverages',
    color: 'text-red-500',
    rules: [
      'Outside food and beverages are not permitted within resort premises.',
      'Room service is available 24 hours a day.',
      'Dietary requirements (vegan, gluten-free, Jain, etc.) must be communicated at booking.',
      'Alcohol is available to guests aged 21 and above. Valid ID may be requested.',
      'Complimentary minibar is restocked daily; items consumed will be charged at check-out.',
    ],
  },
  {
    icon: Cigarette,
    title: 'Smoking Policy',
    color: 'text-amber-600',
    rules: [
      'Serenova is a 95% smoke-free property.',
      'Smoking is permitted only in designated outdoor areas marked on the property map.',
      'Smoking in rooms, indoor spaces, or near children incurs a deep-cleaning fee of ₹5,000.',
      'Electronic cigarettes and vaping devices follow the same policy as smoking.',
      'Disposal of cigarette waste anywhere other than designated receptacles is prohibited.',
    ],
  },
  {
    icon: PawPrint,
    title: 'Pets & Animals',
    color: 'text-green-500',
    rules: [
      'Serenova is a pet-friendly resort. We welcome well-behaved dogs and cats.',
      'A pet supplement of ₹1,500 per night applies. Please declare pets at booking.',
      'Pets must be kept on a leash in all common areas.',
      'Pets are not permitted in the restaurant, spa, or pool areas.',
      'Guests are fully responsible for any damage caused by their pets.',
    ],
  },
  {
    icon: Camera,
    title: 'Photography & Privacy',
    color: 'text-purple-500',
    rules: [
      'Personal photography for non-commercial use is welcome throughout the resort.',
      'Commercial shoots, video productions, or drone flights require prior written approval.',
      'Photographing other guests without their consent is strictly prohibited.',
      'The spa, changing rooms, and select private areas are photography-free zones.',
      'Serenova staff may request deletion of photographs taken in restricted areas.',
    ],
  },
  {
    icon: Users,
    title: 'Visitors & Guests',
    color: 'text-teal-500',
    rules: [
      'In-house guests may have day visitors subject to a visitor fee of ₹500 per person.',
      'All visitors must register at the front desk and receive a visitor pass.',
      'Visitors are permitted on property from 9:00 AM to 8:00 PM only.',
      'Guests are responsible for the conduct of their visitors at all times.',
      'Overnight visitors are not permitted without prior approval and additional charges.',
    ],
  },
  {
    icon: Sun,
    title: 'Pool & Recreation',
    color: 'text-orange-500',
    rules: [
      'The infinity pool is open from 6:30 AM to 9:00 PM daily.',
      'Children under 12 must be supervised by an adult at all times in the pool.',
      'Appropriate swimwear is mandatory. Cut-offs and underwear are not permitted.',
      'No food or glass containers are permitted in the pool area.',
      'The gym is open 24 hours for in-house guests. Personal trainers are available on request.',
    ],
  },
  {
    icon: Moon,
    title: 'General Conduct',
    color: 'text-charcoal-500',
    rules: [
      'All guests must maintain dignity and respect towards staff and fellow guests.',
      'Intoxicated behaviour that disturbs other guests will result in immediate ejection without refund.',
      'Gambling, illegal substances, or weapons of any kind are strictly prohibited.',
      'The resort reserves the right to enter a room in emergencies or for safety inspections.',
      'Lost & Found items are held for 30 days; unclaimed items are donated to charity.',
    ],
  },
]

export default function PropertyRules() {
  return (
    <div className="pt-20">
      <div className="relative py-28 px-6 bg-charcoal-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold-400 mb-4">House Rules</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Property Rules</h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6" />
          <p className="font-body text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            Our guidelines are designed to preserve the tranquil atmosphere that our guests cherish. We appreciate your cooperation.
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
                    i === 2
                      ? 'bg-charcoal-900 text-white border-charcoal-900'
                      : 'border-charcoal-200 text-charcoal-500 hover:border-gold-400 hover:text-gold-600'
                  }`}
                >
                  {tab}
                </Link>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ruleCategories.map((cat, i) => (
              <ScrollReveal key={cat.title} delay={i * 60}>
                <div className="bg-white border border-charcoal-50 shadow-sm p-7 hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 bg-ivory flex items-center justify-center flex-shrink-0">
                      <cat.icon size={17} className={cat.color} />
                    </div>
                    <h2 className="font-serif text-xl text-charcoal-900">{cat.title}</h2>
                  </div>
                  <div className="w-full h-px bg-charcoal-50 mb-5" />
                  <ul className="space-y-3">
                    {cat.rules.map((rule, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="w-1 h-1 bg-gold-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="font-body text-sm text-charcoal-600 leading-relaxed">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-10 bg-charcoal-900 text-white p-8 text-center">
              <p className="font-serif text-2xl mb-3">A Note from Our Management</p>
              <div className="w-12 h-px bg-gold-500 mx-auto mb-4" />
              <p className="font-body text-sm text-white/70 max-w-2xl mx-auto leading-relaxed">
                We have crafted these guidelines not as restrictions, but as a framework for the mutual respect and shared serenity that makes Serenova extraordinary. We are deeply grateful for your understanding and cooperation.
              </p>
              <p className="font-serif italic text-gold-400 mt-4">— The Management, Serenova Resort</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
