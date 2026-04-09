import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ui/ScrollReveal'

const terms = [
  {
    title: '1. Acceptance of Terms',
    content: `By making a reservation or entering the premises of Serenova Luxury Resort ("the Resort"), you ("the Guest") acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. These terms constitute a legally binding agreement between you and Serenova Hospitality Private Limited ("the Company").

The Company reserves the right to modify these terms at any time. The most current version will always be available at the Resort's front desk and on our official website. Continued use of our services constitutes acceptance of any modifications.`,
  },
  {
    title: '2. Booking and Confirmation',
    content: `A reservation is confirmed only upon receipt of a written confirmation from the Resort and the required advance payment. The confirmation will detail the room type, duration of stay, inclusions, and the total amount payable.

Guests are responsible for ensuring that all details on the booking confirmation are accurate. Any discrepancies must be reported to the reservations team within 24 hours of receiving the confirmation. The Resort cannot be held liable for errors not reported within this window.`,
  },
  {
    title: '3. Pricing and Payments',
    content: `All published tariffs are in Indian Rupees (INR) and are inclusive of applicable GST and service charges unless otherwise specified. Rates are subject to change without prior notice and the applicable rate is that confirmed at the time of booking.

The Resort reserves the right to levy additional charges for damages, excessive minibar consumption, or services rendered that were not included in the package. Such charges will be presented to the Guest at check-out. Payment in full is due upon check-out. Disputes over charges must be raised before departure.`,
  },
  {
    title: '4. Guest Responsibilities',
    content: `Guests are responsible for the behaviour of all members of their party, including children and invited visitors. Any damage caused to resort property, including furnishings, fixtures, artwork, or infrastructure, will be charged to the Guest's account at full replacement value.

Guests must comply with all resort rules and the directives of resort staff. The Resort reserves the right to terminate a stay without refund and, if necessary, involve law enforcement if a Guest's behaviour is deemed a risk to other guests, staff, or property.`,
  },
  {
    title: '5. Intellectual Property',
    content: `All content, including photography, videography, written material, logos, and branding associated with Serenova Luxury Resort, is the exclusive intellectual property of Serenova Hospitality Private Limited. Guests may not reproduce, distribute, or commercially exploit any Resort content without prior written consent.

Guests who share personal photographs or videos of the Resort on social media are granted a limited, revocable licence to do so, provided such content is used in a manner consistent with the Resort's brand values and does not portray the Resort in a disparaging light.`,
  },
  {
    title: '6. Limitation of Liability',
    content: `The Resort's liability to any Guest shall not exceed the total amount paid by that Guest for their stay. The Resort shall not be liable for any indirect, consequential, or punitive damages arising from a Guest's stay, including but not limited to loss of enjoyment, inconvenience, or lost profits.

This limitation applies regardless of the legal theory under which the claim is made, including negligence, contract, or any other basis, and shall survive the termination of this agreement.`,
  },
  {
    title: '7. Governing Law and Disputes',
    content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall first be subject to good-faith negotiation between the parties.

If negotiation fails, disputes shall be referred to binding arbitration in accordance with the Arbitration and Conciliation Act, 1996, conducted in Bengaluru, Karnataka. The language of arbitration shall be English.`,
  },
  {
    title: '8. Contact and Grievance Redressal',
    content: `For any concerns, complaints, or grievances regarding your stay or these Terms, please contact our Guest Relations team at reservations@serenova.com or call +91 98765 43210.

Our Grievance Officer, appointed under the Information Technology Act, can be reached at compliance@serenova.com. We are committed to resolving all complaints within 7 business days.`,
  },
]

export default function Terms() {
  return (
    <div className="pt-20">
      <div className="relative py-28 px-6 bg-charcoal-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold-400 mb-4">Legal</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Terms & Conditions</h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6" />
          <p className="font-body text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            Effective Date: 1 January 2024. Please read these terms carefully before making a reservation.
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
                    i === 1
                      ? 'bg-charcoal-900 text-white border-charcoal-900'
                      : 'border-charcoal-200 text-charcoal-500 hover:border-gold-400 hover:text-gold-600'
                  }`}
                >
                  {tab}
                </Link>
              )
            })}
          </div>

          <div className="bg-white border border-charcoal-50 shadow-sm">
            <div className="p-8 border-b border-charcoal-50">
              <p className="font-body text-sm text-charcoal-500 leading-relaxed">
                These Terms and Conditions govern your relationship with Serenova Luxury Resort and your use of our services. By completing a reservation, you confirm your agreement to these terms.
              </p>
            </div>
            <div className="divide-y divide-charcoal-50">
              {terms.map((term, i) => (
                <ScrollReveal key={term.title} delay={i * 60}>
                  <div className="p-8 hover:bg-ivory transition-colors duration-200">
                    <h2 className="font-serif text-xl text-charcoal-900 mb-4">{term.title}</h2>
                    <p className="font-body text-sm text-charcoal-600 leading-relaxed whitespace-pre-line">{term.content}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="font-body text-xs text-charcoal-400 mb-6 tracking-wider">
              Last updated: 1 January 2024 · Serenova Hospitality Private Limited
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/policies" className="font-body text-xs tracking-wider uppercase text-gold-600 hover:underline">
                View Policies
              </Link>
              <span className="text-charcoal-300">·</span>
              <Link to="/property-rules" className="font-body text-xs tracking-wider uppercase text-gold-600 hover:underline">
                Property Rules
              </Link>
              <span className="text-charcoal-300">·</span>
              <Link to="/contact" className="font-body text-xs tracking-wider uppercase text-gold-600 hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
