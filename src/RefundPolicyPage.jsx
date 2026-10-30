import { useState } from 'react';
import {
  RefreshCw, Plane, Bus, Hotel, AlertCircle, CheckCircle, Clock,
  Mail, Phone, ShieldCheck, ChevronRight, ArrowRight, Building2,
  FileText, Users, DollarSign, HelpCircle, PackageX
} from 'lucide-react';

export default function RefundPolicyPage({ onNavigateHome, onNavigateTravel, onNavigateRecharge }) {
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    {
      id: 'flight-cancellation',
      title: 'Flight Cancellation & Rescheduling Policy',
      icon: Plane,
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
          <p>
            You can cancel domestic flight bookings online. Log in to <strong>My Bookings</strong>, select the relevant booking and click the <strong>Cancel</strong> button. For online cancellation, <strong>MBTA BUSINESS PRIVATE LIMITED</strong> will charge additional service fee per person per sector as standard cancellation service charges over and above the airline&apos;s own cancellation charge.
          </p>

          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 space-y-2">
            <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Offline Amendments &amp; Cancellations</h5>
            <p className="text-xs text-slate-600">
              To amend/cancel your ticket offline, contact <strong>MBTA BUSINESS PRIVATE LIMITED</strong> Customer Care at <a href="mailto:support@mbtravels.in" className="text-orange-600 font-semibold hover:underline">support@mbtravels.in</a>. For international flight bookings email us at <a href="mailto:support@mbtravels.in" className="text-orange-600 font-semibold hover:underline">support@mbtravels.in</a>.
            </p>
            <p className="text-xs text-slate-600">
              For all offline cancellation of domestic flights a standard charge of additional service fee per person per sector, over and above the airline&apos;s own cancellation charge will apply. While for international flight bookings a standard fee per person would be charged, over and above the airline&apos;s own cancellation charge.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 bg-orange-50/70 border border-orange-200/80 rounded-xl">
              <span className="font-bold text-orange-950 block mb-1">Flight Rescheduling</span>
              <p className="text-orange-900">
                For rescheduling of domestic flights, <strong>MBTA BUSINESS PRIVATE LIMITED</strong> will charge additional service fee per person per sector as standard rescheduling charges.
              </p>
            </div>
            <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl">
              <span className="font-bold text-amber-950 block mb-1">No-Show Policy</span>
              <p className="text-amber-900">
                For No-Show of domestic flights, <strong>MBTA BUSINESS PRIVATE LIMITED</strong> will charge additional service fee per person per sector as standard No-Show charges.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500 italic">
            Please refer to airline specific amendment and cancellation policy while using MBTA BUSINESS PRIVATE LIMITED Services. You may be required to directly contact the nearest airline office (of the concerned airline) to get your reservation cancelled.
          </p>
        </div>
      ),
    },
    {
      id: 'refund-timeline',
      title: 'How Do I Get a Refund After Canceling My Ticket?',
      icon: Clock,
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
          <p>
            In case of e-Tickets and PTA, the refund shall be processed within <strong>15 - 20 working days</strong> from the date of the cancellation request being made.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Credit Card Payments</span>
              <p className="text-xs text-slate-700">
                If we have received the payment through a valid credit card, then the same will be refunded to your credit card directly.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Other Payment Modes</span>
              <p className="text-xs text-slate-700">
                Payments made using any other form of payment will be refunded to original mode of payment within a maximum of <strong>30 days</strong> from date of receipt of ticket.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-red-50 border border-red-200/80 text-red-950 text-xs font-medium space-y-1">
            <p><strong>Note on Convenience Fees:</strong> Please note convenience fee charged at the time of booking will not be refundable.</p>
            <p className="text-red-800">All refunds shall be processed subject to processing of refunds by the respective airline/service provider.</p>
          </div>
        </div>
      ),
    },
    {
      id: 'cancellation-charges',
      title: 'Cancellation & Amendment Charges Structure',
      icon: DollarSign,
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-sm">
          <p>
            Cancellation and/or amendment of airline tickets shall at all times be subject to fees/charges/levies/payments as may be levied/payable to the relevant airline/carrier in accordance with such relevant airline/carrier cancellation/refund policy. Prior to booking tickets, you must acquaint yourself with the relevant airline/carrier cancellation/refund policy with respect to the ticket to be booked by you. Any cancellation/amendment fees/charges/levies/payments levied by/payable to the relevant airline shall be to your account.
          </p>
          <p>
            Except to the extent stated in the individual airline/carrier terms and conditions or otherwise applicable to specific tickets booked/issued, cancellation fee are payable as described in our flight cancellation section.
          </p>
          <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 text-xs text-amber-950 space-y-2 font-medium">
            <p>
              <strong>Airline Routing Requirement:</strong> Unless expressly stated otherwise, it is mandatory to contact <strong>MBTA BUSINESS PRIVATE LIMITED</strong> for refunds and the airline will route the refund for your tickets booked on the Website, through MBTA BUSINESS PRIVATE LIMITED.
            </p>
            <p>
              The above mentioned cancellation process and refund processing time may vary. In case of lost or damaged tickets, the refund process cannot be initiated with the airline. Refund would be made to original mode of payment.
            </p>
            <p>
              <strong>Hotel Uncontactable Clause:</strong> In case you avail of the Website&apos;s hotel reservation service and are, thereafter, not contactable on the contact details provided in this regard, then the hotel reservation selected by you will stand cancelled and MBTA BUSINESS PRIVATE LIMITED would not be liable for any charges/expenses incurred by you, either directly or indirectly in this regard.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'bus-cancellation',
      title: 'Bus Cancellations and Refund Slabs',
      icon: Bus,
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
          <p>Following amount will be deducted on cancellation of bus bookings:</p>

          <div className="overflow-hidden border border-slate-200 rounded-2xl shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Cancellation Timeframe</th>
                  <th className="py-3 px-4">Deduction %</th>
                  <th className="py-3 px-4">Refund Eligibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-red-50/40">
                  <td className="py-3 px-4 font-semibold text-slate-900">Less than 4 hours from departure</td>
                  <td className="py-3 px-4 font-black text-red-600">100%</td>
                  <td className="py-3 px-4 text-slate-500">No Refund</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Between 4 Hrs to 12 Hrs from departure</td>
                  <td className="py-3 px-4 font-black text-orange-600">50%</td>
                  <td className="py-3 px-4 text-emerald-700 font-semibold">50% Refund</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Between 12 Hrs to 24 Hrs from departure</td>
                  <td className="py-3 px-4 font-black text-amber-600">25%</td>
                  <td className="py-3 px-4 text-emerald-700 font-semibold">75% Refund</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Between 1 to 7 days before departure</td>
                  <td className="py-3 px-4 font-black text-slate-700">10%</td>
                  <td className="py-3 px-4 text-emerald-700 font-semibold">90% Refund</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="py-3 px-4 font-semibold text-slate-900">Passenger No-Show</td>
                  <td className="py-3 px-4 font-black text-red-600">100%</td>
                  <td className="py-3 px-4 text-slate-500">No Refund Eligible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 'hotel-holiday-cancellation',
      title: 'Hotel and Holidays Cancellations and Refund',
      icon: Hotel,
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
          {/* Room definitions */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 space-y-2">
            <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Room Occupancy Standards</h5>
            <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-600">
              <li><strong>Single room:</strong> A room exclusively for one person.</li>
              <li><strong>Double room:</strong> A room for two persons.</li>
              <li><strong>Twin Share:</strong> Two single beds in a double room; rates are per person and sold for a minimum of two persons.</li>
              <li><strong>Triple room:</strong> Three persons in a room; mostly the third person is provided with an extra cot or roll-away cot.</li>
            </ul>
          </div>

          <div className="text-xs text-slate-600 space-y-1.5">
            <p>
              <strong>Check-in / Check-out:</strong> Check-in/check-out time in hotels varies from hotel to hotel and region to region. Generally check-in time is <strong>12.00 hrs to 14.00 hrs</strong>, and check-out is <strong>11.00 hrs to 12.00 hrs</strong>. Early check-in and late check-out is subject to availability and additional charges.
            </p>
            <p>
              Cancellation must be effected to us directly by letter, fax or email by the customer. Due to supplier policies, cancellation charges apply and vary from supplier to supplier. For all group bookings, only the group leader can request/intimate for cancellation.
            </p>
          </div>

          <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider pt-2">Normal Cancellation Charges:</h5>
          <div className="overflow-hidden border border-slate-200 rounded-2xl shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Timeline Before Check-in / Departure</th>
                  <th className="py-3 px-4">Cancellation Charges</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                <tr className="bg-red-50/40">
                  <td className="py-3 px-4 font-semibold text-slate-900">10 days before check-in date</td>
                  <td className="py-3 px-4 font-black text-red-600">100% cancellation charges (NO REFUND)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">20 days to 10 days before departure</td>
                  <td className="py-3 px-4 font-bold text-orange-600">35% service taken / Tour charges</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">30 days to 17 days before departure</td>
                  <td className="py-3 px-4 font-bold text-amber-600">25% service taken / Tour charges</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">30 days before departure</td>
                  <td className="py-3 px-4 font-bold text-emerald-700">No cancellation charges (only Processing Charges apply)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 'b2b-policy',
      title: 'For B2B Users Policy — Unused Balance Clause',
      icon: Users,
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-sm">
          <div className="bg-orange-50/80 border border-orange-200 rounded-2xl p-5 text-orange-950 text-xs sm:text-sm space-y-2">
            <h5 className="font-bold uppercase tracking-wider text-xs text-orange-900">Unused Balance Clause</h5>
            <p>
              Any top-up payment / advance payment which is received from retailers / distributors deposited to their retail account: in the event the retailer / distributor does not use the amount for goods &amp; services and requests the payment to be returned, after one month of deposit, the retailer needs to submit a refund request to us.
            </p>
            <p className="font-bold text-orange-800">
              Once we receive the refund request from the retailer, the balance amount will be refunded within 15 to 20 working days via the same source.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'general-refunds',
      title: 'General Refund Terms & Conditions',
      icon: ShieldCheck,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm">
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li className="flex items-start gap-2.5">
              <CheckCircle size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>All refund requests are subject to obtaining approval from our suppliers.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Supplier reserves the right to approve or reject refunds based on service status.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Applicable supplier penalty and administrative fees will be deducted.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Refund will be paid to the customer only who has made the payment to us.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>No refund will be paid for partially utilised services and no-shows.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Group booking refund charges differ from individual booking charges.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>All payment refunds will be executed through original mode of payment only.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'shipping-policy',
      title: 'Shipping Policy',
      icon: PackageX,
      content: (
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-slate-800 text-xs sm:text-sm leading-relaxed">
          <p className="font-bold text-slate-900 mb-1">Non-Applicability of Shipping Policy:</p>
          <p className="text-slate-600">
            We are not selling or shipping any physical goods online. All tickets, booking confirmations, and vouchers are fulfilled 100% electronically. Hence Shipping policy is not applicable to our business.
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

      {/* ── BREADCRUMB STRIP ── */}
      <div className="bg-white border-b border-slate-200/80 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-500">
            <button onClick={onNavigateHome} className="hover:text-orange-600 font-medium transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-slate-400">Legal &amp; Policies</span>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="font-bold text-orange-600">Cancellation &amp; Refund Policy</span>
          </div>

          <div className="flex items-center gap-4 text-slate-600">
            <a href="mailto:support@mbtravels.in" className="flex items-center gap-1.5 hover:text-orange-600 font-semibold transition-colors">
              <Mail size={13} className="text-orange-600" />
              <span>support@mbtravels.in</span>
            </a>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
              <ShieldCheck size={13} className="text-emerald-600" />
              100% Original Mode Refund
            </span>
          </div>
        </div>
      </div>

      {/* ── HERO BANNER: REFUND / CANCELLATIONS POLICY ── */}
      <section className="relative py-12 lg:py-16 bg-gradient-to-b from-white via-orange-50/20 to-slate-50 border-b border-slate-200/70 overflow-hidden">
        <div className="absolute top-0 right-10 w-[450px] h-[450px] bg-orange-400/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-amber-400/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-xs font-bold text-orange-800 shadow-2xs mb-4">
              <RefreshCw size={14} className="text-orange-600" />
              <span>MBTA BUSINESS PRIVATE LIMITED · CANCELLATION &amp; REFUND CHARTER</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-4">
              Refund / Cancellations Policy
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              Clear, transparent rules regarding cancellations, amendments, fee deductions, and refund timelines across domestic &amp; international flights, buses, hotels, and holiday bookings.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600">
              <span className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <Building2 size={13} className="text-orange-600" />
                MBTA BUSINESS PRIVATE LIMITED
              </span>
              <span className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <Clock size={13} className="text-emerald-600" />
                15–20 Working Days Refund Process
              </span>
              <span className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-blue-600" />
                RBI &amp; Airline PG Compliant
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
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Quick Policy Index</p>
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
                  Have a Cancellation Query?
                </p>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Need to cancel or amend an urgent flight, bus, or hotel booking? Email our 24/7 desk:
                </p>
                <a
                  href="mailto:support@mbtravels.in"
                  className="font-bold text-orange-700 hover:underline block pt-1"
                >
                  support@mbtravels.in ➔
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
                        Clause {idx + 1}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                        {sec.title}
                      </h2>
                    </div>
                  </div>

                  {sec.content}
                </div>
              ))}

              {/* Corporate Legal Entity Card */}
              <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">Operating Entity</p>
                  <h3 className="text-xl font-bold">MBTA BUSINESS PRIVATE LIMITED</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Customer Care: support@mbtravels.in | Helpline: +91 7777885526
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

