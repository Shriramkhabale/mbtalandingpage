import { useState } from 'react';
import {
  ShieldCheck, FileText, ChevronRight, Phone, Mail, MapPin,
  CreditCard, AlertTriangle, Scale, HelpCircle, CheckCircle,
  Building2, ExternalLink, ArrowRight, Clock, Award, Lock, Search
} from 'lucide-react';

export default function TermsPage({ onNavigateHome, onNavigateTravel, onNavigateRecharge }) {
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    {
      id: 'eligibility',
      title: 'Eligibility',
      icon: ShieldCheck,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm">
          <p>
            You shall be at least 18 years of age or over to register and avail the services of the &quot;Site&quot;. You represent and warrant that he/she has the right, authority, and capacity to enter into this Agreement and to abide by all of the terms and conditions of this Agreement.
          </p>
          <p>
            You shall not impersonate any person or entity, or falsely state or otherwise misrepresent identity, age or affiliation with any person or entity. The &quot;Site&quot; may terminate the registration of the &quot;User&quot;, and any content or information that You have posted on the &quot;Site&quot; and/or prohibit You from using or accessing the Service or the Site (or any portion, aspect or feature of the Service or the Site) for any reason including the reasons stated above, at any time in its sole discretion, with or without notice, including without limitation if it believes that you are under 18 years of age.
          </p>
        </div>
      ),
    },
    {
      id: 'online-payments',
      title: 'Online Card Payments',
      icon: CreditCard,
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-sm">
          <p>
            Visa, Master and American express Card payments are processed through an online payment gateway system. You need not worry about your card information falling into the wrong hands because your bank will authorize the card transaction directly without any information passing through us. In approximately 25-30 seconds (depending on your internet connection) your bank will issue, using the online payment gateway, an authorization code and confirmation of completion of transaction.
          </p>
          <div className="bg-orange-50/80 border border-orange-200/90 rounded-2xl p-4 text-orange-950 font-medium">
            In fact, transacting online with a credit card at the Website is even safer than using a credit card at a restaurant because we do not retain your credit card information. You can be assured that <strong>MBTA BUSINESS PRIVATE LIMITED</strong> offers you the highest standards of security currently available on the internet so as to ensure that your shopping experience is private, safe and secure.
          </div>
          <p>
            If the payment on the credit card is declined for some reason, alternate payment instructions must be received by <strong>MBTA BUSINESS PRIVATE LIMITED</strong> 72 hours prior to the time of departure; else, the order is liable to be cancelled.
          </p>
          <p>
            <strong>MBTA BUSINESS PRIVATE LIMITED</strong> charges a service fee on all domestic airline bookings. In case of cancellation of booking, this fee is non-refundable.
          </p>
        </div>
      ),
    },
    {
      id: 'prohibited-conduct',
      title: 'Prohibited Conduct',
      icon: AlertTriangle,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm">
          <p className="font-semibold text-slate-900">
            By using the Services you agree not to:
          </p>
          <p className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 font-mono text-xs text-slate-700 leading-relaxed">
            Impersonate any person or entity, falsely claim or otherwise misrepresent an affiliation with any person or entity, or access the accounts of others without permission, forge another persons&apos; digital signature, misrepresent the source, identity, or content of information transmitted via the Services, perform any other similar fraudulent activity or otherwise purchase Recharge with what we reasonably believe to be potentially fraudulent funds; infringe our or any third party&apos;s intellectual property rights, rights of publicity or privacy; post or transmit any message which is libelous, defamatory or which discloses private or personal matters concerning any person; refuse to cooperate in an investigation or provide confirmation of Your identity or any other information You provide to company Services; reverse engineer, decompile, disassemble or otherwise attempt to discover the source code of the Services or any part thereof, except and only to the extent that such prohibition is expressly prohibited by applicable law notwithstanding this limitation; interfere or disrupt this Site or networks connected to this Site; take any action that imposes an unreasonably or disproportionately large load on our infrastructure/ network; forge headers or manipulate identifiers or other data in order to disguise the origin of any content transmitted through our Site or to manipulate your presence on our Site; sell the Services, information, or software associated with or derived from it; breach this Agreement or any other company Services agreement or policy; provide false, inaccurate or misleading information; use the Site to collect or obtain personal information, including without limitation, financial information, about other users of the Site; purchase Recharge with what company Services reasonably believes to be potentially fraudulent funds; use the Services in a manner that results in or may result in complaints, disputes, reversals, charge backs, fees, fines, penalties and other liability to Smart Pay Store, a third party or You; use the Services in a manner that Smart Pay Store or any payment card network reasonably believe to be an abuse of the payment card system or a violation of payment card network rules; take any action that may cause company Services to lose any of the Services from its service providers, Telcos, payment processors or other suppliers.
          </p>
        </div>
      ),
    },
    {
      id: 'third-party-links',
      title: 'Third Party Sites, Products and Services; Links',
      icon: ExternalLink,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm">
          <p>
            The Services and/or the Site may include links or references to other web sites or services solely as a convenience to users (&quot;Reference Sites&quot;). company Services does not endorse any such Reference Sites or the information, materials, products, or services contained on or accessible through Reference Sites.
          </p>
          <p>
            In addition, Your correspondence or business dealings with, or participation in promotions of, advertisers found on or through the Services and/or the Site are solely between You and such entity. Access and use of reference sites, including the information, materials, products, and services on or available through reference sites is solely at your own risk.
          </p>
        </div>
      ),
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      icon: ShieldCheck,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm">
          <p>
            You agree to indemnify, save, and hold company Services, its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the services or of the site, any violation by you of this agreement, or any breach of the representations, warranties, and covenants made by you herein.
          </p>
          <p>
            company Services reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify Smart Pay Store, including rights to settle, and you agree to cooperate with company Services defense and settlement of these claims. company services will use reasonable efforts to notify you of any claim, action, or proceeding brought by a third party that is subject to the foregoing indemnification upon becoming aware of it. This paragraph shall survive termination of this agreement.
          </p>
        </div>
      ),
    },
    {
      id: 'arbitration',
      title: 'Arbitration',
      icon: Scale,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm">
          <p>
            company Services may elect to resolve any dispute, controversy or claim arising out of or relating to this agreement or service provided in connection with this agreement by binding arbitration in accordance with the provisions of the Indian Arbitration &amp; Conciliation Act, 1996. Any such dispute, controversy or claim shall be arbitrated on an individual basis and shall not be consolidated in any arbitration with any claim or controversy of any other party.
          </p>
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-xs space-y-1.5 font-medium text-slate-800">
            <p><strong>Arbitration Venue:</strong> Pindwara, India</p>
            <p><strong>Jurisdiction:</strong> Judgment on the arbitration award may be entered in any court having jurisdiction thereof.</p>
            <p><strong>Costs &amp; Expenses:</strong> All administrative fees and expenses of an arbitration will be divided equally between you and us. In all arbitrations, each party will bear the expense of its own lawyers and preparation.</p>
            <p><strong>Language:</strong> The language of arbitration shall be English.</p>
          </div>
        </div>
      ),
    },
    {
      id: 'governing-law',
      title: 'Governing Law and Forum for Disputes',
      icon: Scale,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm">
          <p>
            Except as otherwise agreed by the parties or as described in the arbitration section above, you agree that any claim or dispute you may have against company Services must be resolved by a court situate in <strong>Pindwara, India</strong>. This agreement shall be governed by the laws of India, without giving effect to any principles of conflicts of law.
          </p>
        </div>
      ),
    },
    {
      id: 'severability-assignment',
      title: 'Severability & Assignment',
      icon: FileText,
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
          <div>
            <h5 className="font-bold text-slate-900 mb-1">Severability</h5>
            <p>
              If any provision of this agreement is held to be unlawful, void, invalid or otherwise unenforceable, then that provision will be limited or eliminated from this agreement to the minimum extent required, and the remaining provisions will remain valid and enforceable.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-1">Assignment</h5>
            <p>
              This agreement, and any rights granted hereunder, may not be transferred or assigned by you without our prior written consent which may be withheld in our sole discretion, but may be assigned by us without restriction. Any assignment attempted to be made in violation of this provision shall be void and of no effect.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'b2b-refund-policy',
      title: 'Refund Policy for B2B Customer',
      icon: AlertTriangle,
      content: (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/90 text-amber-950 text-sm leading-relaxed font-semibold">
          B2B customer, takes the balance. In any event, the balance will not return.
        </div>
      ),
    },
    {
      id: 'changes-to-terms',
      title: 'Changes to the Terms and Conditions',
      icon: Clock,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm">
          <p>
            The site may amend its terms and conditions at any time, at its sole discretion. If there are any change made in the terms and conditions, the same shall be updated on the website.
          </p>
        </div>
      ),
    },
    {
      id: 'post-pay-hotel',
      title: 'Pay at Hotel Reception ("Post Pay")',
      icon: Building2,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm">
          <p>
            With some of our partner hotels <strong>MBTA BUSINESS PRIVATE LIMITED</strong> has negotiated a special facility where <strong>MBTA BUSINESS PRIVATE LIMITED</strong> customers can pay the hotel directly at the reception at the time of check-in at the hotel.
          </p>
        </div>
      ),
    },
    {
      id: 'transaction-confirmation',
      title: 'Transaction Confirmation',
      icon: CheckCircle,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm">
          <p>
            You should not take any action based on information on the Website until you have received a confirmation of your transaction. In case of confirmations to be received by email, if you do not receive a confirmation of your purchase/transaction within the stipulated time period, first look into your &quot;spam&quot; or &quot;junk&quot; folder to verify that it has not been misdirected, and if still not found, please contact our customer care.
          </p>
        </div>
      ),
    },
    {
      id: 'delivery-etickets',
      title: 'Delivery of Products/Services — Electronic Tickets ("e-Tickets")',
      icon: FileText,
      content: (
        <div className="space-y-5 text-slate-700 leading-relaxed text-sm">
          <div className="space-y-1.5">
            <h5 className="font-bold text-slate-900">What is an e-Ticket?</h5>
            <p>
              An e-Ticket is a paperless electronic document with a unique confirmation number given to passengers in place of a paper ticket. Passengers are required to produce the unique confirmation number at the airport airline counter to claim the e-Ticket.
            </p>
          </div>

          <div className="space-y-1.5">
            <h5 className="font-bold text-slate-900">How will I get my e-Ticket details?</h5>
            <p>
              Your e-Ticket details will be sent to your email address provided by you at the time of making the payment for your booking. In case you do not have an email address, the details will be given to you over the phone.
            </p>
            <p className="text-orange-700 font-semibold text-xs bg-orange-50 p-3 rounded-xl border border-orange-200">
              If you do not receive your e-ticket within 8 hours of making your booking on MBTA BUSINESS PRIVATE LIMITED please email us at <strong>care@mbmitra.com</strong>. MBTA BUSINESS PRIVATE LIMITED shall not be liable if customers do not comply with this requirement.
            </p>
          </div>

          <div className="space-y-1.5">
            <h5 className="font-bold text-slate-900">
              Is it necessary to show my MBTA BUSINESS PRIVATE LIMITED Reference Number Confirmation email at the airport check-in counter of the airline?
            </h5>
            <p>
              It is not mandatory to show your MBTA BUSINESS PRIVATE LIMITED Reference Number Confirmation email. In case you are not carrying the MBTA BUSINESS PRIVATE LIMITED Reference Number Confirmation email, you will need to show a photographic identity proof (passport, driver&apos;s license etc.) at the airport check-in counter of the airline. However, it is advisable that you carry your MBTA BUSINESS PRIVATE LIMITED Reference Number Confirmation email and e-Ticket together.
            </p>
          </div>

          <div className="space-y-1.5">
            <h5 className="font-bold text-slate-900">Is it necessary to carry my e-ticket with me?</h5>
            <p>
              Yes, it is mandatory for you to carry a copy of your e-ticket as sent by MBTA BUSINESS PRIVATE LIMITED. In the event that you fail to present a copy of your e-ticket, MBTA BUSINESS PRIVATE LIMITED will not be held responsible if the Airline does not issue a boarding pass/ disallows you from traveling.
            </p>
          </div>

          <div className="space-y-1.5">
            <h5 className="font-bold text-slate-900">How will I get my boarding pass for an e-Ticket?</h5>
            <p>
              You will need to show your e-Ticket confirmation email and e-Ticket number along with a photographic identity proof (passport, driver&apos;s license etc.) at the airport check-in counter of the airline. The airline representative will issue your boarding pass at that time.
            </p>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <h5 className="font-bold text-slate-900">Prepaid Ticket Advice (&quot;PTA&quot;)</h5>
            <p>
              A PTA is a Prepaid Ticket Advice. We will give you a PTA number that you need to present at the airport check-in counter of the airline. The airline representative will print and give you your ticket at that time.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'promotion-codes',
      title: 'Promotion Codes',
      icon: Award,
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-sm">
          <p>
            <strong>MBTA BUSINESS PRIVATE LIMITED</strong> generates promotion codes from time to time which may be availed on the site as a discount coupon. Users are advised that the promotional offer of using Promotion Codes for receiving discounts is not valid for transactions relating to Air Deccan. Other regular promotions that may be offered from time to time shall be valid for all airlines, including Air Deccan, unless indicated otherwise.
          </p>
          <p>
            <strong>MBTA BUSINESS PRIVATE LIMITED</strong> reserves the right to add, alter, modify, withdraw all or any of the Terms and Conditions or replace, wholly or in part, the program by any other program, whether similar to this program or not or withdraw it altogether without any prior notice.
          </p>
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-xs font-semibold text-slate-900">
            In case of dispute with any party, <strong>MBTA BUSINESS PRIVATE LIMITED&apos;s</strong> decision will be binding and final.
          </div>
          <p>
            When you register with <strong>MBTA BUSINESS PRIVATE LIMITED</strong> we or any of our partners/affiliate/group companies may contact you from time to time to provide the offers/information of such products/services that we believe may benefit you.
          </p>
        </div>
      ),
    },
  ];

  const filteredSections = searchTerm.trim()
    ? sections.filter(s =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.id.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : sections;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-22 sm:pt-24">

      {/* ── BREADCRUMB & ACCESS STRIP ── */}
      <div className="bg-white border-b border-slate-200/80 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-500">
            <button onClick={onNavigateHome} className="hover:text-orange-600 font-medium transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-slate-400">Legal &amp; Compliance</span>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="font-bold text-orange-600">Terms &amp; Conditions</span>
          </div>

          <div className="flex items-center gap-4 text-slate-600">
            <a href="mailto:care@mbmitra.com" className="flex items-center gap-1.5 hover:text-orange-600 font-semibold transition-colors">
              <Mail size={13} className="text-orange-600" />
              <span>care@mbmitra.com</span>
            </a>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
              <ShieldCheck size={13} className="text-emerald-600" />
              Verified Legal Agreement
            </span>
          </div>
        </div>
      </div>

      {/* ── HERO BANNER: TERMS & CONDITIONS ── */}
      <section className="relative py-12 lg:py-16 bg-gradient-to-b from-white via-orange-50/20 to-slate-50 border-b border-slate-200/70 overflow-hidden">
        <div className="absolute top-0 right-10 w-[450px] h-[450px] bg-orange-400/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-amber-400/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-xs font-bold text-orange-800 shadow-2xs mb-4">
              <FileText size={14} className="text-orange-600" />
              <span>MBTA BUSINESS PRIVATE LIMITED · OFFICIAL USER AGREEMENT</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-4">
              Terms &amp; Conditions
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              Please read these terms carefully before accessing or using the services of this website. By registering or transacting, you agree to be bound by the terms outlined below.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600">
              <span className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <Building2 size={13} className="text-orange-600" />
                Operated by MBTA BUSINESS PRIVATE LIMITED
              </span>
              <span className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <Clock size={13} className="text-emerald-600" />
                Effective &amp; Enforceable
              </span>
              <span className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <Lock size={13} className="text-blue-600" />
                256-Bit SSL Secured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT LAYOUT ── */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">

            {/* Quick Sticky Index Navigation */}
            <div className="hidden lg:block sticky top-24 space-y-4">
              <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-4 shadow-xs">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Quick Section Index</p>
                <div className="space-y-1 text-xs">
                  {sections.map(s => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block py-1.5 px-2.5 rounded-lg text-slate-600 hover:text-orange-600 hover:bg-orange-50 font-medium transition-colors truncate"
                    >
                      {s.title}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200/80 rounded-2xl p-4 text-xs text-orange-950 space-y-2">
                <p className="font-bold flex items-center gap-1.5">
                  <HelpCircle size={14} className="text-orange-600" />
                  Need Assistance?
                </p>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  For questions regarding our terms or e-ticket deliveries, contact our legal &amp; ticketing desk.
                </p>
                <a
                  href="mailto:care@mbmitra.com"
                  className="font-bold text-orange-700 hover:underline block pt-1"
                >
                  care@mbmitra.com ➔
                </a>
              </div>
            </div>

            {/* Sections List */}
            <div className="space-y-8">
              {filteredSections.map((sec, idx) => (
                <div
                  key={sec.id}
                  id={sec.id}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 scroll-mt-28 hover:border-orange-200 transition-colors"
                >
                  <div className="flex items-center gap-3.5 mb-5 pb-3 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center flex-shrink-0">
                      <sec.icon size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest block">
                        Section {idx + 1}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                        {sec.title}
                      </h2>
                    </div>
                  </div>

                  {sec.content}
                </div>
              ))}

              {/* Legal Entity Signature Card */}
              <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">Corporate Operator</p>
                  <h3 className="text-xl font-bold">MBTA BUSINESS PRIVATE LIMITED</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Operated under registered Indian corporate charter. All rights reserved.
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Address: MB Travels, Bus Stand Road, Athani, Karnataka 591304, India
                  </p>
                </div>
                <button
                  onClick={onNavigateHome}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors cursor-pointer flex items-center gap-2 flex-shrink-0"
                >
                  <span>Return to Home</span>
                  <ArrowRight size={14} />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
