import { useState, useEffect, useRef } from 'react';
import {
  Plane, Bus, Train, Hotel, Smartphone, Tv, Zap, Droplets,
  Fuel, Wifi, Shield, Lock, CreditCard, Phone, Mail, MapPin,
  Clock, ChevronDown, X, Menu, ArrowRight,
  CheckCircle, Star, Globe, Users, Award, HeadphonesIcon,
  FileText, RefreshCw, Truck, Eye,
  ExternalLink,
  ShieldCheck, BadgeCheck, Fingerprint, SendHorizontal,
  Sparkles, TrendingUp, Building2, CircleCheck, AlertCircle,
  Receipt
} from 'lucide-react';
import TravelPage from './TravelPage';
import RechargePage from './RechargePage';
import TermsPage from './TermsPage';
import RefundPolicyPage from './RefundPolicyPage';
import UserAgreementPage from './UserAgreementPage';
import PrivacyPolicyPage from './PrivacyPolicyPage';

// Social icon SVGs (lucide removed them from newer versions)
const SocialIcon = ({ type, className = "w-4 h-4" }) => {
  const paths = {
    facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    instagram: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z",
    twitter: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
    youtube: "M22.54 6.42a2.78 2.78 0 0 0-1.94-1.94C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.94A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.94A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z",
  };
  const extra = type === 'instagram' ? "M2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" : null;
  const isYoutube = type === 'youtube';
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={paths[type]} />
      {extra && <path d={extra} />}
      {isYoutube && <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" stroke="none" />}
    </svg>
  );
};

// ─── LOGO COMPONENT ────────────────────────────────────────────────────────────
const MBMitraLogo = ({ variant = 'default', size = 'lg', className = '' }) => {
  const isWhite = variant === 'white';
  const logoSrc = isWhite ? '/logo-white.png' : '/logo.png';

  const sizeClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-13 sm:h-15',
    lg: 'h-14 sm:h-16 md:h-18',
    xl: 'h-20 sm:h-24 md:h-28',
    footer: 'h-20 sm:h-24 md:h-28',
  };

  const chosenSize = sizeClasses[size] || sizeClasses.lg;

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="MB MITRA — Everything Easy"
        className={`${chosenSize} w-auto object-contain transition-transform duration-200 hover:scale-[1.02]`}
        loading="eager"
      />
    </div>
  );
};

// ─── MODAL COMPONENT ────────────────────────────────────────────────────────────
const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 modal-overlay" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[88vh] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 brand-gradient">
          <h2 className="text-white font-bold text-lg">{title}</h2>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors p-1.5 hover:bg-white/20 rounded-lg">
            <X size={20} />
          </button>
        </div>
        <div className="overflow-y-auto flex-1 px-6 py-5 text-slate-700 leading-relaxed text-sm">
          {children}
        </div>
        <div className="px-6 py-4 border-t border-slate-100 flex justify-end">
          <button onClick={onClose} className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-xl text-sm transition-colors cursor-pointer shadow-sm">
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── ACCORDION COMPONENT ────────────────────────────────────────────────────────
const Accordion = ({ title, children, icon: Icon, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  return (
    <div className={`border rounded-xl transition-all duration-300 overflow-hidden ${open ? 'border-orange-200 shadow-md shadow-orange-50' : 'border-slate-200 hover:border-orange-200'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="w-8 h-8 rounded-lg brand-gradient-soft flex items-center justify-center flex-shrink-0">
              <Icon size={16} className="text-orange-600" />
            </div>
          )}
          <span className="font-semibold text-slate-800 text-sm">{title}</span>
        </div>
        <div className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <ChevronDown size={18} className="text-orange-500" />
        </div>
      </button>
      <div className={`accordion-content ${open ? 'open' : ''}`}>
        <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
          {children}
        </div>
      </div>
    </div>
  );
};

// ─── SECTION BADGE ──────────────────────────────────────────────────────────────
const SectionBadge = ({ label }) => (
  <div className="inline-flex items-center gap-2 brand-gradient-soft border border-orange-200 text-orange-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
    <Sparkles size={12} />
    {label}
  </div>
);

// ─── MAIN APP ───────────────────────────────────────────────────────────────────
export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'travel' | 'recharge'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState('travel');
  const [heroActiveTab, setHeroActiveTab] = useState('travel'); // 'travel' | 'bbps'
  const [heroTravelMode, setHeroTravelMode] = useState('flight'); // 'flight' | 'bus' | 'train' | 'hotel'
  const [heroBbpsService, setHeroBbpsService] = useState('electricity'); // 'electricity' | 'mobile' | 'fastag' | 'dth'
  const [heroPaymentSuccess, setHeroPaymentSuccess] = useState(false);
  const [customerServicesOpen, setCustomerServicesOpen] = useState(false);
  const [mobileCustomerServicesOpen, setMobileCustomerServicesOpen] = useState(false);
  const [activePolicyTab, setActivePolicyTab] = useState('terms');
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);

  const heroTravelData = {
    flight: {
      title: 'Flight Booking (Domestic & Intl)',
      icon: Plane,
      from: 'Mumbai (BOM)',
      to: 'Goa (GOI)',
      operator: 'IndiGo · 6E-204 Non-Stop',
      time: '1h 15m · Departs 10:45 AM',
      fare: '₹2,999',
      dealTag: 'Lowest Fare Guaranteed',
      pnrPreview: 'PNR: 6E-MB910',
      tagline: 'Instant E-Ticket to WhatsApp & Email in 30s',
    },
    bus: {
      title: 'Bus Ticketing (500+ Operators)',
      icon: Bus,
      from: 'Pune (Swargate)',
      to: 'Bangalore (Majestic)',
      operator: 'VRL Travels · AC Multi-Axle Sleeper',
      time: '12h 30m · Departs 08:30 PM',
      fare: '₹1,150',
      dealTag: 'Top Rated Operator',
      pnrPreview: 'TKT: VRL-8821',
      tagline: 'Live GPS Tracking + Zero Booking Fees',
    },
    train: {
      title: 'IRCTC Train Booking Assistance',
      icon: Train,
      from: 'New Delhi (NDLS)',
      to: 'Varanasi (BSB)',
      operator: 'Vande Bharat Express (22436)',
      time: '8h 00m · Chair Car (CC)',
      fare: '₹1,750',
      dealTag: 'Confirmed Seat Assistance',
      pnrPreview: 'PNR: 2489-1029',
      tagline: 'Authorized IRCTC Gateway Assistance',
    },
    hotel: {
      title: 'Hotel & Resort Reservations',
      icon: Hotel,
      from: 'North Goa (Candolim)',
      to: 'Deluxe Ocean View Suite',
      operator: 'Beachside Premium Resort ★ 4.8',
      time: '2 Nights · Couple Friendly',
      fare: '₹2,499 / night',
      dealTag: 'Free Breakfast Included',
      pnrPreview: 'RES: MB-HTL54',
      tagline: 'Pay at Hotel Available · Free Cancellation',
    },
  };

  const heroBbpsData = {
    electricity: {
      id: 'electricity',
      label: 'Electricity Bill',
      icon: Zap,
      biller: 'Adani Electricity & Mahavitran',
      accNo: 'Consumer #90214812',
      amount: '₹1,840',
      status: 'Bill Verified via NPCI BBPS',
      speed: 'Direct Settlement in 0.8s',
      color: 'from-amber-400 to-orange-500',
    },
    mobile: {
      id: 'mobile',
      label: 'Mobile 5G Recharge',
      icon: Smartphone,
      biller: 'Jio / Airtel Unlimited 5G',
      accNo: 'Mobile: 98765-XXXXX',
      amount: '₹349',
      status: '2GB/Day + True 5G Pack',
      speed: 'Instant Operator Sync in 1.2s',
      color: 'from-pink-500 to-rose-500',
    },
    fastag: {
      id: 'fastag',
      label: 'FASTag Toll Top-up',
      icon: Fuel,
      biller: 'NHAI National Highway Toll',
      accNo: 'VRN: MH-12-AB-4491',
      amount: '₹1,000',
      status: 'Instant Plaza Balance Active',
      speed: 'NETC National Switch in 1.4s',
      color: 'from-orange-500 to-red-500',
    },
    dth: {
      id: 'dth',
      label: 'DTH & TV Pack',
      icon: Tv,
      biller: 'Tata Play HD & Airtel Digital',
      accNo: 'Subscriber ID: 30018942',
      amount: '₹480',
      status: 'All HD Channels Unlocked',
      speed: 'Instant Activation in 1.0s',
      color: 'from-blue-500 to-indigo-500',
    },
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hash & URL synchronization for page routing
  useEffect(() => {
    const syncRoute = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      if (hash === '#travel' || path === '/travel') {
        setCurrentPage('travel');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#recharge' || path === '/recharge') {
        setCurrentPage('recharge');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#terms' || path === '/terms') {
        setCurrentPage('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#refund' || path === '/refund') {
        setCurrentPage('refund');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#agreement' || path === '/agreement' || hash === '#user-agreement') {
        setCurrentPage('agreement');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#privacy' || path === '/privacy' || hash === '#privacy-policy') {
        setCurrentPage('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };
    syncRoute();
    window.addEventListener('hashchange', syncRoute);
    window.addEventListener('popstate', syncRoute);
    return () => {
      window.removeEventListener('hashchange', syncRoute);
      window.removeEventListener('popstate', syncRoute);
    };
  }, []);

  const navigateTo = (page, sectionId = null) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setCustomerServicesOpen(false);
    setMobileCustomerServicesOpen(false);

    if (page === 'travel') {
      window.history.pushState({}, '', '#travel');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'recharge') {
      window.history.pushState({}, '', '#recharge');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'terms') {
      window.history.pushState({}, '', '#terms');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'refund') {
      window.history.pushState({}, '', '#refund');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'agreement') {
      window.history.pushState({}, '', '#agreement');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'privacy') {
      window.history.pushState({}, '', '#privacy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState({}, '', '#');
      if (sectionId) {
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const scrollTo = (id) => {
    if (currentPage !== 'home') {
      navigateTo('home', id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setFormStatus(null), 4000);
  };

  const navLinks = [
    { label: 'Why Us', id: 'why-us' },
    { label: 'About Us', id: 'about' },
    { label: 'Support', id: 'contact' },
  ];

  const travelServices = [
    { icon: Plane, label: 'Flight Booking', desc: 'Domestic & International flights at best fares with instant e-ticket delivery', color: 'from-blue-500 to-cyan-500' },
    { icon: Bus, label: 'Bus Ticketing', desc: '500+ top operators across India — Volvo, sleeper, AC & non-AC buses', color: 'from-green-500 to-emerald-500' },
    { icon: Hotel, label: 'Hotel & Stays', desc: 'Budget to luxury hotels, holiday packages & resort bookings nationwide', color: 'from-purple-500 to-violet-500' },
    { icon: Train, label: 'Train / IRCTC', desc: 'Tatkal & general seat availability, PNR status & IRCTC booking assistance', color: 'from-orange-500 to-amber-500' },
  ];

  const bbpsServices = [
    { icon: Smartphone, label: 'Mobile Recharge', desc: 'Prepaid & Postpaid for Jio, Airtel, Vi, BSNL — instant activation', color: 'from-pink-500 to-rose-500' },
    { icon: Tv, label: 'DTH & Cable TV', desc: 'Tata Sky, Dish TV, Airtel DTH, d2h — all plans & packages', color: 'from-indigo-500 to-blue-500' },
    { icon: Zap, label: 'Electricity Bills', desc: 'All state DISCOMs — MSEDCL, BESCOM, UPPCL & 50+ utilities', color: 'from-yellow-500 to-orange-500' },
    { icon: Droplets, label: 'Water & Gas', desc: 'Municipal water bills + Indane, HP Gas, Bharat Gas cylinder booking', color: 'from-cyan-500 to-teal-500' },
    { icon: Fuel, label: 'FASTag Recharge', desc: 'NHAI FASTag wallet top-up for seamless toll plaza passage', color: 'from-red-500 to-orange-500' },
    { icon: Wifi, label: 'Broadband & More', desc: 'ACT, Jio Fiber, Airtel Xstream + insurance premiums & subscriptions', color: 'from-violet-500 to-purple-500' },
  ];

  const stats = [
    { value: '2L+', label: 'Happy Customers', icon: Users },
    { value: '50+', label: 'Bill Categories', icon: Zap },
    { value: '99.9%', label: 'Uptime SLA', icon: TrendingUp },
    { value: '24/7', label: 'Support', icon: HeadphonesIcon },
  ];

  const trustBadges = [
    { icon: ShieldCheck, label: '256-bit SSL Encryption', sub: 'Bank-grade security on all transactions' },
    { icon: BadgeCheck, label: 'PCI-DSS Compliant', sub: 'Certified payment card industry standards' },
    { icon: Fingerprint, label: 'ISO 27001 Security', sub: 'Certified information security management' },
    { icon: Lock, label: 'RBI Regulated', sub: 'Operating under RBI licensed payment norms' },
  ];

  const paymentModes = [
    { label: 'UPI', desc: 'GPay, PhonePe, BHIM, Paytm' },
    { label: 'Cards', desc: 'Visa, Mastercard, RuPay, Amex' },
    { label: 'Net Banking', desc: '50+ Major Banks Supported' },
    { label: 'Wallets', desc: 'Paytm, Mobikwik & More' },
  ];

  const policies = {
    terms: {
      label: 'Terms & Conditions',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p className="text-slate-500 text-xs">Last Updated: October 2026 | Effective Date: January 2025</p>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">1. Acceptance of Terms</h4>
            <p>By accessing or using the MB MITRA platform (www.mbmitra.com), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of our services immediately.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">2. Eligibility & User Obligations</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>You must be at least 18 years old and legally capable of entering contracts under Indian law.</li>
              <li>You agree to provide accurate, current, and complete information during registration and all bookings.</li>
              <li>You are solely responsible for maintaining confidentiality of your account credentials.</li>
              <li>Any misuse, fraudulent activity, or abuse of our platform will result in immediate account termination and legal action.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">3. Service Availability</h4>
            <p>MB MITRA strives for 99.9% platform uptime. However, certain services may be temporarily unavailable due to scheduled maintenance, third-party API downtime (airlines, railways, BBPS network), or force majeure events. We shall not be liable for losses arising from such unavailability.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">4. Travel Booking Terms</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>All flight, bus, hotel, and train bookings are facilitated through authorized GDS/API partners.</li>
              <li>Fares are subject to airline/operator availability and may change before booking confirmation.</li>
              <li>It is the user's responsibility to carry valid government ID proof for travel.</li>
              <li>Name changes on confirmed tickets are not permitted; cancellation and rebooking apply.</li>
              <li>International travel requires valid passport and applicable visas; MB MITRA is not responsible for visa denials.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">5. BBPS & Recharge Services</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Bill payments are processed via the NPCI-authorized Bharat Bill Payment System (BBPS).</li>
              <li>Users must ensure bill details (consumer number, mobile number) are accurate before proceeding.</li>
              <li>Once a recharge/payment is processed, it cannot be reversed unless the transaction fails and amount is not credited.</li>
              <li>MB MITRA shall not be responsible for delays caused by the biller/utility company's system.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">6. Fair Usage Policy</h4>
            <p>Users may not use MB MITRA for bulk commercial transactions, automated bots, scraping, or any activity that unduly burdens our servers. Accounts found to be in violation will be suspended without prior notice.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">7. Intellectual Property</h4>
            <p>All content, trademarks, logos, and designs on this platform belong exclusively to MB MITRA / InfoYasho & Nand Tech. Unauthorized reproduction or distribution is strictly prohibited.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">8. Limitation of Liability</h4>
            <p>MB MITRA's aggregate liability for any claim shall not exceed the transaction amount paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">9. Governing Law & Dispute Resolution</h4>
            <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in [City, Maharashtra]. Disputes shall first be attempted to be resolved through mutual negotiation.</p>
          </div>
        </div>
      )
    },
    refund: {
      label: 'Cancellation & Refund',
      icon: RefreshCw,
      content: (
        <div className="space-y-4">
          <p className="text-slate-500 text-xs">Last Updated: October 2026</p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <p className="text-orange-800 font-semibold text-sm">⚡ Refunds for failed transactions are processed within 5–7 business days to the original payment method.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">Flight Booking Cancellations</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>More than 7 days before departure:</strong> Full refund minus ₹250 processing fee + airline cancellation charges.</li>
              <li><strong>3–7 days before departure:</strong> 50% refund after airline charges; non-refundable taxes may apply.</li>
              <li><strong>Less than 3 days / No-show:</strong> As per airline's fare rules; mostly non-refundable fares attract no refund.</li>
              <li>Refunds are processed within 7–10 business days to original payment method.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">Bus Ticket Cancellations</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>More than 24 hours before departure:</strong> 80% refund after operator deduction.</li>
              <li><strong>12–24 hours before departure:</strong> 50% refund as per operator policy.</li>
              <li><strong>Less than 12 hours:</strong> No refund; ticket is non-transferable.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">Hotel Reservations</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Cancellation policies vary per property. Refund eligibility is displayed at the time of booking.</li>
              <li>Non-refundable rooms are clearly marked; no refund applies on such bookings.</li>
              <li>Free cancellation window (if applicable) ends as specified in the booking confirmation.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">BBPS & Recharge Payments</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Successful transactions:</strong> Not eligible for refund once biller credits the amount.</li>
              <li><strong>Failed transactions (amount debited but service not activated):</strong> Auto-reversal within 3–5 working days. If not received, raise a grievance within 7 days.</li>
              <li><strong>Duplicate payments:</strong> Refunded after verification within 5–7 business days.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">Refund Processing Timeline</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { method: 'UPI / Wallet', time: '1–3 Business Days' },
                { method: 'Debit / Credit Card', time: '5–7 Business Days' },
                { method: 'Net Banking', time: '3–5 Business Days' },
                { method: 'NEFT / RTGS', time: '7–10 Business Days' },
              ].map(r => (
                <div key={r.method} className="bg-slate-50 rounded-lg p-3">
                  <p className="font-semibold text-slate-800 text-xs">{r.method}</p>
                  <p className="text-orange-600 text-xs font-bold">{r.time}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">Grievance / Dispute Resolution</h4>
            <p>For refund-related grievances, contact <strong>care@mbmitra.com</strong> or call <strong>+91 7777885526</strong> within 30 days of transaction. Include your booking ID, transaction ID, and screenshot of payment for faster resolution.</p>
          </div>
        </div>
      )
    },
    delivery: {
      label: 'Delivery / Fulfillment',
      icon: Truck,
      content: (
        <div className="space-y-4">
          <p className="text-slate-500 text-xs">Last Updated: October 2026</p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-green-800 font-semibold text-sm">✅ MB MITRA is a 100% digital platform. All services are delivered electronically — no physical shipping involved.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">Travel Ticket Delivery</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>E-tickets and booking confirmations are delivered instantly via registered email and SMS.</li>
              <li>Flight PNR and e-boarding passes are sent within 2–5 minutes of payment confirmation.</li>
              <li>Bus tickets (m-ticket / QR code) are delivered within 1–3 minutes after booking.</li>
              <li>Hotel vouchers are sent within 10–15 minutes; check your spam folder if not received.</li>
              <li>All tickets are accessible from the "My Bookings" dashboard for download/reprint.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">Bill Payment & Recharge Confirmation</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Mobile recharges are activated within 60 seconds of successful payment.</li>
              <li>Electricity, water, and gas bill payments are processed and confirmed within 5 minutes.</li>
              <li>DTH activation typically reflects within 30 minutes during business hours.</li>
              <li>FASTag wallet recharge is reflected within 2–4 hours as per NHAI system.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">Delivery Channels</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Email', desc: 'PDF e-tickets & payment receipts' },
                { label: 'SMS / WhatsApp', desc: 'Booking reference & quick links' },
                { label: 'App / Dashboard', desc: 'Real-time booking management' },
                { label: 'WhatsApp', desc: 'Share ticket directly from chat' },
              ].map(d => (
                <div key={d.label} className="bg-slate-50 rounded-lg p-3">
                  <p className="font-semibold text-slate-800 text-xs">{d.label}</p>
                  <p className="text-slate-500 text-xs">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">Delivery Failure Resolution</h4>
            <p>If you do not receive your ticket/confirmation within the stipulated time, please check your spam/junk folder. If still not received, contact support immediately at <strong>care@mbmitra.com</strong> or WhatsApp us. We will resend the confirmation within 1 hour of your complaint.</p>
          </div>
        </div>
      )
    },
    privacy: {
      label: 'Privacy Policy',
      icon: Eye,
      content: (
        <div className="space-y-4">
          <p className="text-slate-500 text-xs">Last Updated: October 2026 | This policy applies to www.mbmitra.com</p>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">1. Information We Collect</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Personal Information:</strong> Name, email, phone number, date of birth collected during registration.</li>
              <li><strong>Travel Details:</strong> Passenger names, passport numbers, travel dates for booking purposes only.</li>
              <li><strong>Financial Data:</strong> Payment information is processed by PCI-DSS certified payment gateways (Razorpay/Cashfree). We do NOT store card numbers or CVV on our servers.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and session duration via analytics tools.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">2. How We Use Your Information</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>To process and confirm your bookings and bill payments.</li>
              <li>To send booking confirmations, alerts, and customer support communications.</li>
              <li>To improve our services through aggregated, anonymized analytics.</li>
              <li>To comply with legal obligations under Indian law (IT Act 2000, DPDP Act 2023).</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">3. Data Sharing Policy</h4>
            <p className="mb-2">We do NOT sell, trade, or rent your personal information to third parties. Data is shared only with:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Airlines, hotels, bus operators, and IRCTC for fulfilling your bookings.</li>
              <li>BBPS network and biller systems for payment processing.</li>
              <li>Payment gateway partners for secure transaction processing.</li>
              <li>Law enforcement agencies when required by law.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">4. Data Security</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>All data transmission is encrypted using 256-bit TLS/SSL protocols.</li>
              <li>Sensitive data is stored in AES-256 encrypted databases.</li>
              <li>Regular security audits and penetration testing are conducted.</li>
              <li>Access to user data is restricted on a need-to-know basis with role-based access control.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">5. Your Rights (DPDP Act 2023)</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Right to access your personal data we hold.</li>
              <li>Right to correction of inaccurate personal data.</li>
              <li>Right to erasure of data (subject to legal retention requirements).</li>
              <li>Right to nominate a person to exercise rights on your behalf.</li>
              <li>Right to grievance redressal — contact our Data Protection Officer at <strong>privacy@mbmitra.com</strong>.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">6. Cookies Policy</h4>
            <p>We use functional and analytics cookies to enhance your experience. You may disable cookies in your browser settings; however, certain features may not function optimally.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">7. Data Retention</h4>
            <p>Transaction records are retained for 7 years as required under Indian financial regulations. Account data is deleted within 30 days of account closure request.</p>
          </div>
        </div>
      )
    },
    userAgreement: {
      label: 'User Agreement',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p className="text-slate-500 text-xs">Last Updated: October 2026 | Governing Entity: InfoYasho &amp; Nand Tech / MBTA Business Pvt Ltd</p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <p className="text-orange-900 font-semibold text-sm">
              This User Agreement governs your access to MB MITRA services including travel ticketing, hotel reservations, and BBPS utility bill payments.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">1. Scope of Digital Services</h4>
            <p>MB MITRA facilitates domestic &amp; international airline tickets, state/private bus reservations, IRCTC train ticketing, hotel bookings, and 50+ BBPS utility bill settlements. All transactions are digitally fulfilled through authorized APIs and banking gateways.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">2. Identity &amp; Lawful Usage</h4>
            <p>You agree to provide true and accurate identification details matching government identity records (Aadhaar, PAN, Passport). Fraudulent ticketing or chargeback abuse will lead to permanent blacklist and reporting to appropriate cyber crime enforcement agencies.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">3. Payment &amp; Settlements</h4>
            <p>Payments are processed using PCI-DSS certified gateways (Razorpay, Cashfree, PayU). We strictly do not store card credentials. In case of payment deduct with booking failure, refunds are auto-reversed within 3–7 business days.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">4. Registered Office &amp; Support</h4>
            <p>Head Office: MB Travels, Bus Stand Road, Athani, Karnataka 591304, India. Support Helpline: 7777885526 / +91 7777885526. Email: care@mbmitra.com.</p>
          </div>
        </div>
      )
    },
    partnerReg: {
      label: 'Partner Registration',
      icon: Users,
      content: (
        <div className="space-y-4">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <h4 className="font-bold text-orange-900 text-sm mb-1">Join the MB MITRA Channel Partner Network</h4>
            <p className="text-orange-800 text-xs">Monetize your store, cyber café, or kiosk with instant commissions on travel ticketing and BBPS bill collections.</p>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Retailer / Agency Name</label>
              <input type="text" placeholder="e.g. Athani Digital Services" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-sm outline-none focus:border-orange-500 font-medium" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Mobile (WhatsApp)</label>
                <input type="tel" placeholder="10-digit number" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-sm outline-none focus:border-orange-500 font-medium" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Email ID</label>
                <input type="email" placeholder="partner@gmail.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-sm outline-none focus:border-orange-500 font-medium" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">City / Town</label>
                <input type="text" placeholder="e.g. Athani" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-sm outline-none focus:border-orange-500 font-medium" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">State</label>
                <input type="text" placeholder="e.g. Karnataka" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-sm outline-none focus:border-orange-500 font-medium" />
              </div>
            </div>
            <button
              onClick={() => alert('Partner application received! Our onboarding team will contact you within 24 hours.')}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl text-sm transition-colors mt-2 cursor-pointer shadow-sm"
            >
              Submit Partner Application
            </button>
          </div>
        </div>
      )
    },
    businessReg: {
      label: 'Register Your Business',
      icon: Building2,
      content: (
        <div className="space-y-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Corporate Travel &amp; Institutional Utility Desk</h4>
            <p className="text-slate-600 text-xs">Unified corporate billing, GST input tax credits on flights &amp; hotels, and centralized bill settlement console.</p>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Registered Company Name</label>
              <input type="text" placeholder="e.g. Yasho Enterprises Pvt Ltd" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-sm outline-none focus:border-orange-500 font-medium" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">GSTIN Number</label>
                <input type="text" placeholder="29XXXXX0000X1Z5" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-sm outline-none focus:border-orange-500 font-medium" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Corporate Work Email</label>
                <input type="email" placeholder="corporate@company.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-sm outline-none focus:border-orange-500 font-medium" />
              </div>
            </div>
            <button
              onClick={() => alert('Corporate inquiry submitted! Our enterprise relationship manager will reach out within 1 business day.')}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl text-sm transition-colors mt-2 cursor-pointer shadow-sm"
            >
              Request Corporate Account
            </button>
          </div>
        </div>
      )
    },
    androidApp: {
      label: 'Mobile App (Android)',
      icon: Smartphone,
      content: (
        <div className="space-y-4 text-center py-2">
          <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center mx-auto mb-2">
            <Smartphone size={32} />
          </div>
          <h4 className="font-bold text-slate-900 text-base">Download MB MITRA Android App</h4>
          <p className="text-slate-600 text-xs max-w-sm mx-auto leading-relaxed">
            Fast, secure, and lightweight mobile application for flight bookings, bus ticketing, and instant BBPS utility settlements anywhere, anytime.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Package:</span>
              <span className="font-mono font-bold text-slate-800">com.mbmitra.app</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Security:</span>
              <span className="font-bold text-emerald-600">Verified by Google Play Protect</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Size:</span>
              <span className="font-bold text-slate-800">18.4 MB (Fast Install)</span>
            </div>
          </div>
          <div className="flex gap-3 justify-center pt-2">
            <button
              onClick={() => alert('Starting MB MITRA Android APK download (18.4 MB)...')}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Download Direct APK</span>
            </button>
            <button
              onClick={() => alert('Redirecting to Google Play Store listing...')}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Google Play Store</span>
            </button>
          </div>
        </div>
      )
    },
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">

      {/* ── NAVBAR ─────────────────────────────────────────────────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm' : 'bg-white/80 backdrop-blur-md border-b border-orange-100/60 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22">

            {/* Logo */}
            <button onClick={() => navigateTo('home')} className="flex-shrink-0 cursor-pointer py-1">
              <MBMitraLogo variant="default" size="lg" />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              <button
                onClick={() => navigateTo('home')}
                className={`px-3.5 py-2 font-medium text-sm rounded-lg transition-all duration-200 cursor-pointer ${currentPage === 'home' ? 'text-orange-600 bg-orange-50 font-bold' : 'text-slate-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
              >
                Home
              </button>

              {/* Customer Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCustomerServicesOpen(true)}
                onMouseLeave={() => setCustomerServicesOpen(false)}
              >
                <button
                  onClick={() => setCustomerServicesOpen(!customerServicesOpen)}
                  className={`px-3.5 py-2 font-medium text-sm rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${currentPage === 'travel' || currentPage === 'recharge' ? 'text-orange-600 bg-orange-50 font-bold' : 'text-slate-700 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                  aria-expanded={customerServicesOpen}
                >
                  <span>Customer Services</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${customerServicesOpen ? 'rotate-180 text-orange-600' : 'text-slate-400'
                      }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {customerServicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-100 p-2 z-50">
                    {/* MB Travels Submenu */}
                    <button
                      onClick={() => navigateTo('travel')}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 group cursor-pointer ${currentPage === 'travel' ? 'bg-orange-50' : 'hover:bg-orange-50/70'
                        }`}
                    >
                      <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Plane size={17} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors flex items-center gap-1">
                          MB Travels
                          <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-600" />
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">Flights, Buses, Trains &amp; Hotels</p>
                      </div>
                    </button>

                    {/* Recharge & Bill Payments Submenu */}
                    <button
                      onClick={() => navigateTo('recharge')}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 group cursor-pointer mt-1 ${currentPage === 'recharge' ? 'bg-orange-50' : 'hover:bg-orange-50/70'
                        }`}
                    >
                      <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Zap size={17} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors flex items-center gap-1">
                          Recharge &amp; Bill Payments
                          <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-600" />
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">Electricity, Mobile 5G, FASTag &amp; DTH</p>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="px-3.5 py-2 font-medium text-sm text-slate-700 hover:text-orange-600 rounded-lg hover:bg-orange-50 transition-all duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+917777885526" className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-orange-600 transition-colors font-medium">
                <Phone size={13} className="text-orange-500" />
                +91 7777885526
              </a>
              <div className="w-px h-5 bg-slate-200" />
              <a
                href="https://one.mbmitra.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-orange-200 text-orange-600 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-orange-50 transition-all cursor-pointer inline-flex items-center justify-center"
              >
                Login
              </a>
              <a
                href="https://one.mbmitra.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm px-5 py-2 rounded-xl transition-colors cursor-pointer shadow-sm inline-flex items-center justify-center"
              >
                Register
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-xl px-4 py-4 space-y-1">
            <button
              onClick={() => navigateTo('home')}
              className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-colors ${currentPage === 'home' ? 'text-orange-600 bg-orange-50 font-bold' : 'text-slate-700 hover:bg-orange-50 hover:text-orange-600'
                }`}
            >
              Home
            </button>

            {/* Customer Services Accordion */}
            <div className="rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileCustomerServicesOpen(!mobileCustomerServicesOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-colors cursor-pointer ${currentPage === 'travel' || currentPage === 'recharge' ? 'text-orange-600 bg-orange-50 font-bold' : 'text-slate-700 hover:bg-orange-50 hover:text-orange-600'
                  }`}
              >
                <span>Customer Services</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${mobileCustomerServicesOpen ? 'rotate-180 text-orange-600' : 'text-slate-400'
                    }`}
                />
              </button>

              {mobileCustomerServicesOpen && (
                <div className="pl-3 pr-2 py-1 space-y-1 bg-slate-50/80 rounded-xl mb-1">
                  <button
                    onClick={() => navigateTo('travel')}
                    className={`w-full text-left p-2.5 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-colors cursor-pointer ${currentPage === 'travel' ? 'bg-orange-100/70 text-orange-700' : 'text-slate-700 hover:text-orange-600 hover:bg-white'
                      }`}
                  >
                    <Plane size={15} className="text-orange-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">MB Travels</p>
                      <p className="text-[11px] text-slate-500 font-normal">Flights, Buses, Trains &amp; Hotels</p>
                    </div>
                  </button>

                  <button
                    onClick={() => navigateTo('recharge')}
                    className={`w-full text-left p-2.5 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-colors cursor-pointer ${currentPage === 'recharge' ? 'bg-orange-100/70 text-orange-700' : 'text-slate-700 hover:text-orange-600 hover:bg-white'
                      }`}
                  >
                    <Zap size={15} className="text-amber-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">Recharge &amp; Bill Payments</p>
                      <p className="text-[11px] text-slate-500 font-normal">Electricity, Mobile 5G, FASTag &amp; DTH</p>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="block w-full text-left px-4 py-3 text-slate-700 font-medium text-sm rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors"
              >
                {link.label}
              </button>
            ))}

            <div className="pt-2 flex gap-2">
              <a
                href="https://one.mbmitra.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-orange-200 text-orange-600 font-semibold text-sm py-2.5 rounded-xl text-center inline-flex items-center justify-center hover:bg-orange-50 transition-colors"
              >
                Login
              </a>
              <a
                href="https://one.mbmitra.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors shadow-sm text-center inline-flex items-center justify-center"
              >
                Register
              </a>
            </div>
          </div>
        )}
      </header>

      {currentPage === 'travel' ? (
        <TravelPage
          onNavigateHome={() => navigateTo('home')}
          onNavigateRecharge={() => navigateTo('recharge')}
          onNavigateSection={(id) => navigateTo('home', id)}
        />
      ) : currentPage === 'recharge' ? (
        <RechargePage
          onNavigateHome={() => navigateTo('home')}
          onNavigateTravel={() => navigateTo('travel')}
          onNavigateSection={(id) => navigateTo('home', id)}
        />
      ) : currentPage === 'terms' ? (
        <TermsPage
          onNavigateHome={() => navigateTo('home')}
          onNavigateTravel={() => navigateTo('travel')}
          onNavigateRecharge={() => navigateTo('recharge')}
        />
      ) : currentPage === 'refund' ? (
        <RefundPolicyPage
          onNavigateHome={() => navigateTo('home')}
          onNavigateTravel={() => navigateTo('travel')}
          onNavigateRecharge={() => navigateTo('recharge')}
        />
      ) : currentPage === 'agreement' ? (
        <UserAgreementPage
          onNavigateHome={() => navigateTo('home')}
          onNavigateTravel={() => navigateTo('travel')}
          onNavigateRecharge={() => navigateTo('recharge')}
        />
      ) : currentPage === 'privacy' ? (
        <PrivacyPolicyPage
          onNavigateHome={() => navigateTo('home')}
          onNavigateTravel={() => navigateTo('travel')}
          onNavigateRecharge={() => navigateTo('recharge')}
        />
      ) : (
        <>
          {/* ══════════════════════════════════════════════════════════════
              HERO  —  Clean, Modern, High-Conversion
              ══════════════════════════════════════════════════════════════ */}
          <section id="home" className="relative min-h-[88vh] flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-orange-50/20 text-slate-900">

            {/* Soft, subtle ambient warm glow behind console card */}
            <div className="absolute top-1/4 right-8 w-[500px] h-[500px] bg-orange-400/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-400/6 rounded-full blur-3xl pointer-events-none" />

            {/* ══ HERO MAIN CONTAINER ══ */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 w-full">
              <div className="grid lg:grid-cols-[1.1fr_1.1fr] gap-12 xl:gap-16 items-center">

                {/* ══ LEFT COLUMN — Clean, High-Contrast Typography & CTAs ══ */}
                <div className="relative z-10 space-y-6">

                  {/* Refined Pill Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-xs font-semibold text-orange-800 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>MB MITRA · Everything Easy</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-600 font-normal">2L+ Active Users</span>
                  </div>

                  {/* Crisp, Balanced Headline */}
                  <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                    Travel &amp; Utility Payments, <br className="hidden sm:inline" />
                    <span className="text-orange-600">Simplified in One Place.</span>
                  </h1>

                  {/* Clear, Readable Subtitle */}
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg">
                    Book flights, buses, trains &amp; hotels or settle 50+ BBPS utility bills in under 60 seconds. Zero hidden markups, 256-bit bank security, and instant WhatsApp confirmation.
                  </p>

                  {/* Action Buttons (Plain Solid Orange) */}
                  <div className="flex flex-wrap items-center gap-3.5 pt-2">
                    <button
                      onClick={() => scrollTo('services')}
                      className="bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold px-7 py-3.5 rounded-xl flex items-center gap-2 text-sm shadow-sm hover:shadow transition-all cursor-pointer group"
                    >
                      <span>Explore All Services</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => scrollTo('about')}
                      className="bg-white hover:bg-slate-50 text-slate-700 font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 text-sm border border-slate-200 hover:border-slate-300 shadow-2xs transition-all cursor-pointer"
                    >
                      <ShieldCheck size={16} className="text-orange-600" />
                      <span>About MB MITRA</span>
                    </button>
                  </div>

                  {/* Clean Inline Trust Ribbon */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-6 border-t border-slate-200/70 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle size={15} className="text-emerald-600 flex-shrink-0" />
                      <span>Instant WhatsApp Ticket</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <ShieldCheck size={15} className="text-orange-600 flex-shrink-0" />
                      <span>256-Bit SSL &amp; PCI-DSS</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <HeadphonesIcon size={15} className="text-slate-400 flex-shrink-0" />
                      <span>24/7 Dedicated Support</span>
                    </div>
                  </div>

                </div>

                {/* ══ RIGHT COLUMN — The Unified Interactive Console ══ */}
                <div className="relative flex justify-center items-center">

                  {/* Clean Modern Console Card */}
                  <div className="w-full max-w-[500px] bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-7 relative transition-all">

                    {/* Top Segmented Mode Switcher */}
                    <div className="bg-slate-100 p-1 rounded-2xl flex items-center gap-1 mb-5">
                      <button
                        onClick={() => setHeroActiveTab('travel')}
                        className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${heroActiveTab === 'travel'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-500 hover:text-slate-800'
                          }`}
                      >
                        <Plane size={14} className={heroActiveTab === 'travel' ? 'text-orange-600' : 'text-slate-400'} />
                        <span>Travel Bookings</span>
                      </button>
                      <button
                        onClick={() => setHeroActiveTab('bbps')}
                        className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${heroActiveTab === 'bbps'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-500 hover:text-slate-800'
                          }`}
                      >
                        <Zap size={14} className={heroActiveTab === 'bbps' ? 'text-orange-600' : 'text-slate-400'} />
                        <span>BBPS Utility Bills</span>
                      </button>
                    </div>

                    {/* ── MODE 1: TRAVEL BOOKINGS ── */}
                    {heroActiveTab === 'travel' && (
                      <div>
                        {/* Category Switcher Tabs */}
                        <div className="grid grid-cols-4 gap-1.5 mb-4 pb-3 border-b border-slate-100">
                          {[
                            { id: 'flight', icon: Plane, label: 'Flights' },
                            { id: 'bus', icon: Bus, label: 'Buses' },
                            { id: 'train', icon: Train, label: 'Trains' },
                            { id: 'hotel', icon: Hotel, label: 'Hotels' },
                          ].map(tab => (
                            <button
                              key={tab.id}
                              onClick={() => setHeroTravelMode(tab.id)}
                              className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${heroTravelMode === tab.id
                                ? 'bg-orange-50 text-orange-600 border border-orange-200 shadow-2xs'
                                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                                }`}
                            >
                              <tab.icon size={12} />
                              <span>{tab.label}</span>
                            </button>
                          ))}
                        </div>

                        {/* Booking Details Box */}
                        <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/80 mb-4">
                          {/* Deal & Status Ribbon */}
                          <div className="flex items-center justify-between mb-3 text-[11px]">
                            <span className="font-extrabold text-orange-700 bg-orange-100/80 px-2 py-0.5 rounded-md">
                              {heroTravelData[heroTravelMode].dealTag}
                            </span>
                            <span className="font-mono font-bold text-emerald-600 flex items-center gap-1">
                              <CheckCircle size={11} /> {heroTravelData[heroTravelMode].pnrPreview}
                            </span>
                          </div>

                          {/* Origin ➔ Destination */}
                          <div className="flex items-center justify-between gap-3 my-2">
                            <div className="flex-1">
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">From</p>
                              <p className="text-base font-black text-slate-900 leading-tight">{heroTravelData[heroTravelMode].from}</p>
                            </div>

                            <div className="flex flex-col items-center px-2">
                              <div className="w-7 h-7 rounded-full bg-white border border-slate-200 text-orange-600 flex items-center justify-center shadow-2xs">
                                {heroTravelMode === 'flight' && <Plane size={13} />}
                                {heroTravelMode === 'bus' && <Bus size={13} />}
                                {heroTravelMode === 'train' && <Train size={13} />}
                                {heroTravelMode === 'hotel' && <Hotel size={13} />}
                              </div>
                              <span className="text-[9px] font-mono font-semibold text-slate-400 mt-1">
                                {heroTravelData[heroTravelMode].time}
                              </span>
                            </div>

                            <div className="flex-1 text-right">
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">To</p>
                              <p className="text-base font-black text-slate-900 leading-tight">{heroTravelData[heroTravelMode].to}</p>
                            </div>
                          </div>

                          {/* Operator & Fare */}
                          <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-200/60 text-xs">
                            <div>
                              <p className="text-[11px] font-medium text-slate-600">{heroTravelData[heroTravelMode].operator}</p>
                              <p className="text-[10px] font-semibold text-emerald-600">{heroTravelData[heroTravelMode].tagline}</p>
                            </div>
                            <div className="text-right">
                              <span className="text-[9px] font-bold text-slate-400 uppercase block">Total Fare</span>
                              <span className="text-base font-black text-slate-900">{heroTravelData[heroTravelMode].fare}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action CTA Button */}
                        <button
                          onClick={() => navigateTo('travel')}
                          className="w-full bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow transition-all group"
                        >
                          <span>Search &amp; Book {heroTravelMode === 'flight' ? 'Flights' : heroTravelMode === 'bus' ? 'Buses' : heroTravelMode === 'train' ? 'Trains' : 'Hotels'}</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    )}

                    {/* ── MODE 2: BBPS UTILITY BILLS ── */}
                    {heroActiveTab === 'bbps' && (
                      <div>
                        {/* Category Switcher Tabs */}
                        <div className="grid grid-cols-4 gap-2 mb-4 pb-3 border-b border-slate-100">
                          {Object.values(heroBbpsData).map(util => (
                            <button
                              key={util.id}
                              onClick={() => {
                                setHeroBbpsService(util.id);
                                setHeroPaymentSuccess(false);
                              }}
                              className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${heroBbpsService === util.id
                                ? 'bg-orange-50 border-orange-300 text-orange-700 shadow-2xs'
                                : 'bg-white border-slate-200/80 hover:bg-slate-50 text-slate-600'
                                }`}
                            >
                              <util.icon size={15} className={`mx-auto mb-1 ${heroBbpsService === util.id ? 'text-orange-600' : 'text-slate-400'}`} />
                              <p className="text-[11px] font-bold truncate">{util.label.split(' ')[0]}</p>
                            </button>
                          ))}
                        </div>

                        {/* Bill Overview Box */}
                        <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/80 mb-4">
                          <div className="flex items-center justify-between mb-3 text-[11px]">
                            <span className="font-bold text-slate-500 uppercase tracking-wider">Biller &amp; Account</span>
                            <span className="font-mono font-bold text-emerald-700 flex items-center gap-1 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                              <CheckCircle size={11} /> NPCI Live Verified
                            </span>
                          </div>

                          <div className="flex items-center justify-between gap-3 my-2">
                            <div>
                              <p className="text-sm font-black text-slate-900">{heroBbpsData[heroBbpsService].biller}</p>
                              <p className="text-xs text-slate-500 font-mono mt-0.5">{heroBbpsData[heroBbpsService].accNo}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Bill Amount</p>
                              <p className="text-xl font-black text-slate-900">{heroBbpsData[heroBbpsService].amount}</p>
                            </div>
                          </div>

                          <div className="pt-2 mt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                            <span>Settlement Speed</span>
                            <span className="font-semibold text-emerald-600">{heroBbpsData[heroBbpsService].speed}</span>
                          </div>
                        </div>

                        {/* Action CTA Button with Live Simulation */}
                        <button
                          onClick={() => {
                            setHeroPaymentSuccess(true);
                            setTimeout(() => setHeroPaymentSuccess(false), 3500);
                          }}
                          className={`w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow transition-all ${heroPaymentSuccess
                            ? 'bg-emerald-600 text-white'
                            : 'bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white'
                            }`}
                        >
                          {heroPaymentSuccess ? (
                            <>
                              <CheckCircle size={15} />
                              <span>Settled via NPCI BBPS (0.8s) · Receipt Sent</span>
                            </>
                          ) : (
                            <>
                              <Receipt size={14} />
                              <span>Pay {heroBbpsData[heroBbpsService].amount} Instantly</span>
                            </>
                          )}
                        </button>

                        <div className="mt-2.5 text-center">
                          <button
                            onClick={() => navigateTo('recharge')}
                            className="text-xs font-bold text-orange-600 hover:text-orange-700 hover:underline inline-flex items-center gap-1 cursor-pointer"
                          >
                            <span>Open Complete Recharge &amp; Bill Payments Hub</span>
                            <ArrowRight size={12} />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Console Micro-Trust Footer */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
                      <ShieldCheck size={13} className="text-emerald-500 flex-shrink-0" />
                      <span>NPCI BBPS Certified · IRCTC &amp; IATA Partner Network · 100% Encrypted</span>
                    </div>

                  </div>

                </div>{/* /Right Col */}

              </div>
            </div>

          </section>

          {/* ── STATS BAR ──────────────────────────────────────────────────── */}
          <section className="bg-white border-y border-slate-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="stat-card rounded-2xl p-5 flex items-center gap-4">
                    <div className="w-11 h-11 brand-gradient rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                      <stat.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                      <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SERVICES ───────────────────────────────────────────────────── */}
          <section id="services" className="py-20 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <SectionBadge label="Our Services" />
                <h2 className="text-4xl font-black text-slate-900 mb-4">
                  Two Powerful Hubs,{' '}
                  <span className="brand-text-gradient">One Platform</span>
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto">From booking your next adventure to paying your monthly utility bills — MB MITRA has everything covered under one roof with seamless digital delivery.</p>
              </div>

              {/* Tabs */}
              <div className="flex justify-center mb-10">
                <div className="bg-white border border-slate-200 rounded-2xl p-1.5 flex shadow-sm">
                  <button
                    onClick={() => setActiveServiceTab('travel')}
                    className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${activeServiceTab === 'travel' ? 'bg-orange-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    <Plane size={16} /> MB Travels
                  </button>
                  <button
                    onClick={() => setActiveServiceTab('bbps')}
                    className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${activeServiceTab === 'bbps' ? 'bg-orange-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    <Zap size={16} /> BBPS & Recharges
                  </button>
                </div>
              </div>

              {/* Travel Services */}
              {activeServiceTab === 'travel' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {travelServices.map((service) => (
                    <div
                      key={service.label}
                      onClick={() => navigateTo('travel')}
                      className="service-card rounded-2xl p-6 cursor-pointer group flex flex-col justify-between border border-slate-200/90 hover:border-orange-300 transition-all duration-200"
                    >
                      <div className="flex-1">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform duration-200`}>
                          <service.icon size={22} className="text-white" />
                        </div>
                        <h3 className="font-extrabold text-slate-900 mb-2 text-base group-hover:text-orange-950 transition-colors">
                          {service.label}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4 group-hover:text-slate-700 transition-colors">
                          {service.desc}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-100 group-hover:border-orange-200/80 transition-colors flex items-center justify-between mt-auto">
                        <span className="text-xs font-semibold text-slate-400 group-hover:text-orange-600 transition-colors">
                          Instant Ticket
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-orange-600 group-hover:bg-orange-700 text-white text-xs font-bold shadow-xs group-hover:shadow transition-all">
                          <span>Book Now</span>
                          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* BBPS Services */}
              {activeServiceTab === 'bbps' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {bbpsServices.map((service) => (
                    <div
                      key={service.label}
                      onClick={() => navigateTo('recharge')}
                      className="service-card rounded-2xl p-6 cursor-pointer group flex flex-col justify-between border border-slate-200/90 hover:border-orange-300 transition-all duration-200"
                    >
                      <div className="flex-1">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform duration-200`}>
                          <service.icon size={22} className="text-white" />
                        </div>
                        <h3 className="font-extrabold text-slate-900 mb-2 text-base group-hover:text-orange-950 transition-colors">
                          {service.label}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4 group-hover:text-slate-700 transition-colors">
                          {service.desc}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-100 group-hover:border-orange-200/80 transition-colors flex items-center justify-between mt-auto">
                        <span className="text-xs font-semibold text-slate-400 group-hover:text-orange-600 transition-colors">
                          Direct BBPS
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-orange-600 group-hover:bg-orange-700 text-white text-xs font-bold shadow-xs group-hover:shadow transition-all">
                          <span>Pay Now</span>
                          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* BBPS Badge */}
              {activeServiceTab === 'bbps' && (
                <div className="mt-8 flex justify-center">
                  <div className="bg-white border border-slate-200 rounded-2xl px-6 py-3 flex items-center gap-3 shadow-sm">
                    <BadgeCheck size={20} className="text-blue-600" />
                    <span className="text-sm font-semibold text-slate-700">Powered by NPCI — Official BBPS Network</span>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* ── WHY CHOOSE US ──────────────────────────────────────────────── */}
          <section id="why-us" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-14">
                <SectionBadge label="Why Choose Us" />
                <h2 className="text-4xl font-black text-slate-900 mb-4">Built for Trust. <span className="brand-text-gradient">Engineered for Speed.</span></h2>
                <p className="text-slate-500 max-w-xl mx-auto">We combine cutting-edge fintech infrastructure with an intuitive interface to deliver India's most reliable travel & payment platform.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Zap, title: 'Instant Processing', desc: 'Sub-second payment processing with real-time confirmation across all services — no waiting, no delays.', color: 'text-yellow-600 bg-yellow-50' },
                  { icon: Shield, title: 'Bank-Grade Security', desc: '256-bit SSL encryption, 2FA authentication, and fraud detection algorithms protect every transaction.', color: 'text-blue-600 bg-blue-50' },
                  { icon: HeadphonesIcon, title: '24/7 Expert Support', desc: 'Dedicated customer support via WhatsApp, email, and phone — available round the clock, every day of the year.', color: 'text-green-600 bg-green-50' },
                  { icon: Globe, title: 'Widest Coverage', desc: '500+ bus operators, all major airlines, 50+ BBPS billers, and hotel inventory across 1,000+ Indian cities.', color: 'text-purple-600 bg-purple-50' },
                  { icon: CreditCard, title: 'Zero Hidden Charges', desc: 'Transparent pricing with no surprises. What you see is what you pay — convenience fee always displayed upfront.', color: 'text-orange-600 bg-orange-50' },
                  { icon: Award, title: 'BBPS Certified Partner', desc: 'Authorized BBPS participant under NPCI, ensuring 100% settlement guarantee for all utility payments.', color: 'text-red-600 bg-red-50' },
                ].map(item => (
                  <div key={item.title} className="group p-6 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 transition-all duration-300 bg-[#F8FAFC] hover:bg-white">
                    <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon size={22} />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── TRUST & SECURITY ───────────────────────────────────────────── */}
          <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #EA580C 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-orange-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                  <Lock size={12} /> Security & Compliance
                </span>
                <h2 className="text-3xl font-black text-white mb-3">Your Payments Are 100% Secure</h2>
                <p className="text-slate-400 max-w-xl mx-auto text-sm">We meet the highest global standards for payment security and data protection — so you can transact with complete confidence.</p>
              </div>

              {/* Trust Badges */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {trustBadges.map(badge => (
                  <div key={badge.label} className="trust-badge bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 brand-gradient rounded-xl flex items-center justify-center mb-3 shadow-lg">
                      <badge.icon size={20} className="text-white" />
                    </div>
                    <p className="text-white font-bold text-sm mb-1">{badge.label}</p>
                    <p className="text-slate-400 text-xs">{badge.sub}</p>
                  </div>
                ))}
              </div>

              {/* Payment Modes */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-slate-300 font-semibold text-sm mb-5 text-center">Accepted Payment Methods</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {paymentModes.map(mode => (
                    <div key={mode.label} className="bg-white/10 rounded-xl p-4 text-center border border-white/10 hover:border-orange-400/50 transition-colors">
                      <p className="text-white font-bold text-sm">{mode.label}</p>
                      <p className="text-slate-400 text-xs mt-1">{mode.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── ABOUT US ───────────────────────────────────────────────────── */}
          <section id="about" className="py-20 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-14 items-center">
                <div>
                  <SectionBadge label="About Us" />
                  <h2 className="text-4xl font-black text-slate-900 mb-5">
                    Simplifying India's <span className="brand-text-gradient">Digital Payments</span> Journey
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-5">
                    MB MITRA is a flagship product of <strong>InfoYasho & Nand Tech</strong>, a technology company dedicated to making financial services accessible, secure, and effortless for every Indian citizen. Operating from Maharashtra, we serve customers across the country with travel bookings and digital utility payments.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-7">
                    Under the <strong>MB Travels</strong> brand, we deliver seamless flight, bus, hotel, and train booking experiences. Our BBPS platform handles utility payments through the NPCI-authorized Bharat Bill Payment System, ensuring settlement reliability and compliance.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Building2, label: 'Legal Entity', value: 'MB Travels, Bus Stand Road' },
                      { icon: MapPin, label: 'Head Office', value: 'Athani, Karnataka 591304, India' },
                      { icon: Globe, label: 'Platform', value: 'www.mbmitra.com' },
                      { icon: Clock, label: 'Business Hours', value: '9 AM – 9 PM (Mon–Sat)' },
                    ].map(item => (
                      <div key={item.label} className="bg-white rounded-xl border border-slate-200 p-4">
                        <div className="flex items-center gap-2 mb-1.5">
                          <item.icon size={14} className="text-orange-500" />
                          <span className="text-xs text-slate-400 font-medium">{item.label}</span>
                        </div>
                        <p className="text-sm font-bold text-slate-800">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mission & Values */}
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 brand-gradient rounded-xl flex items-center justify-center shadow-md">
                        <Star size={18} className="text-white" />
                      </div>
                      <h3 className="font-bold text-slate-800">Our Mission</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">To democratize access to seamless travel and digital payment services for every Indian, leveraging technology to make complex financial transactions as simple as a single tap.</p>
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                        <ShieldCheck size={18} className="text-blue-600" />
                      </div>
                      <h3 className="font-bold text-slate-800">Our Commitment</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">Full regulatory compliance with RBI guidelines, NPCI BBPS standards, and India's Digital Personal Data Protection Act 2023. We maintain complete transparency in pricing, policies, and operations.</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100 p-6">
                    <p className="text-orange-800 font-bold text-lg mb-1">GSTIN: 27XXXXX0000X1Z5</p>
                    <p className="text-orange-600 text-sm">Registered under GST as per Indian Tax Law. All convenience fees include applicable GST.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── CONTACT ────────────────────────────────────────────────────── */}
          <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <SectionBadge label="Contact & Support" />
                <h2 className="text-4xl font-black text-slate-900 mb-4">We're Here to <span className="brand-text-gradient">Help You</span></h2>
                <p className="text-slate-500 max-w-xl mx-auto">Reach out through any of our support channels. Our team is committed to resolving your queries within 24 hours.</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Contact Info */}
                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      title: 'Email Support',
                      primary: 'care@mbmitra.com',
                      secondary: 'grievance@mbmitra.com',
                      sub: 'Response within 24 hours',
                      color: 'bg-blue-50 text-blue-600',
                    },
                    {
                      icon: Phone,
                      title: 'Phone / WhatsApp',
                      primary: '+91 7777885526',
                      
                      sub: 'Mon–Sat: 9 AM – 9 PM IST',
                      color: 'bg-green-50 text-green-600',
                    },
                    {
                      icon: MapPin,
                      title: 'Registered Address',
                      primary: 'MB Travels, Bus Stand Road, Athani, Karnataka 591304, India',
                      secondary: 'Maharashtra – 400001, India.',
                      sub: 'Visit by appointment only',
                      color: 'bg-orange-50 text-orange-600',
                    },
                    {
                      icon: Clock,
                      title: 'Support Hours',
                      primary: 'Mon – Sat: 9:00 AM – 9:00 PM',
                      secondary: 'Sunday: 10:00 AM – 6:00 PM',
                      sub: 'Emergency: 24/7 via email',
                      color: 'bg-purple-50 text-purple-600',
                    },
                  ].map(item => (
                    <div key={item.title} className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-4 flex items-start gap-4 hover:border-orange-200 hover:shadow-md transition-all duration-200">
                      <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <item.icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium mb-0.5">{item.title}</p>
                        <p className="text-sm font-bold text-slate-800">{item.primary}</p>
                        <p className="text-sm text-slate-600">{item.secondary}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2 bg-[#F8FAFC] border border-slate-100 rounded-3xl p-8">
                  <h3 className="font-bold text-slate-800 text-lg mb-1">Send Us a Message</h3>
                  <p className="text-slate-400 text-sm mb-6">For bookings, refunds, grievances, or general inquiries.</p>

                  {formStatus === 'success' && (
                    <div className="mb-5 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                      <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
                      <p className="text-green-700 text-sm font-semibold">Message sent! We'll respond within 24 hours.</p>
                    </div>
                  )}

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Full Name *</label>
                        <input
                          required
                          type="text"
                          className="form-input"
                          placeholder="Rahul Sharma"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address *</label>
                        <input
                          required
                          type="email"
                          className="form-input"
                          placeholder="rahul@example.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Subject</label>
                      <select className="form-input text-slate-600">
                        <option>Select a topic</option>
                        <option>Booking / Ticket Issue</option>
                        <option>Refund Request</option>
                        <option>Bill Payment Issue</option>
                        <option>Technical Support</option>
                        <option>General Inquiry</option>
                        <option>Business Partnership</option>
                        <option>Grievance / Complaint</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message *</label>
                      <textarea
                        required
                        rows={4}
                        className="form-input resize-none"
                        placeholder="Describe your issue or query in detail. Include booking ID / transaction ID if applicable..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <button type="submit" className="bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold py-3.5 px-8 rounded-xl flex items-center gap-2.5 text-sm transition-all shadow-sm hover:shadow-md cursor-pointer">
                      <SendHorizontal size={16} /> Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer className="bg-slate-900 text-white">
        {/* Top Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14">

            {/* Brand & Reach (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <MBMitraLogo variant="white" size="footer" />
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                India's trusted platform for Travel Bookings &amp; BBPS Utility Payments. Simple, secure, and instant — every time.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-400 pt-1">
                <li className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>MB Travels, Bus Stand Road, Athani, Karnataka 591304, India</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={14} className="text-orange-400 flex-shrink-0" />
                  <a href="mailto:care@mbmitra.com" className="hover:text-orange-400 transition-colors">care@mbmitra.com</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={14} className="text-orange-400 flex-shrink-0" />
                  <a href="tel:+917777885526" className="hover:text-orange-400 transition-colors">+91 7777885526</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock size={14} className="text-orange-400 flex-shrink-0" />
                  <span>Mon–Sat: 9AM–9PM IST · Sun: 10AM–6PM IST</span>
                </li>
              </ul>

              <div className="flex gap-2.5 pt-2">
                {['facebook', 'instagram', 'twitter', 'youtube'].map((type) => (
                  <a key={type} href="#" className="w-8 h-8 bg-white/5 hover:bg-orange-600 border border-white/10 hover:border-orange-600 rounded-lg flex items-center justify-center transition-all duration-200 text-slate-400 hover:text-white">
                    <SocialIcon type={type} className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Corporate Information (5 cols with 2 spacious sub-columns) */}
            <div className="lg:col-span-5">
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Corporate Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => navigateTo('home', 'about')}
                      className="text-slate-400 hover:text-orange-400 text-xs sm:text-sm transition-colors text-left flex items-center gap-1.5 cursor-pointer group"
                    >
                      <span className="text-orange-500 font-bold text-xs group-hover:translate-x-0.5 transition-transform">▸</span>
                      <span>About Us</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigateTo('privacy')}
                      className="text-slate-400 hover:text-orange-400 text-xs sm:text-sm transition-colors text-left flex items-center gap-1.5 cursor-pointer group"
                    >
                      <span className="text-orange-500 font-bold text-xs group-hover:translate-x-0.5 transition-transform">▸</span>
                      <span>Privacy Policy</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigateTo('terms')}
                      className="text-slate-400 hover:text-orange-400 text-xs sm:text-sm transition-colors text-left flex items-center gap-1.5 cursor-pointer group"
                    >
                      <span className="text-orange-500 font-bold text-xs group-hover:translate-x-0.5 transition-transform">▸</span>
                      <span>Terms &amp; Conditions</span>
                    </button>
                  </li>
                </ul>

                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => navigateTo('home', 'contact')}
                      className="text-slate-400 hover:text-orange-400 text-xs sm:text-sm transition-colors text-left flex items-center gap-1.5 cursor-pointer group"
                    >
                      <span className="text-orange-500 font-bold text-xs group-hover:translate-x-0.5 transition-transform">▸</span>
                      <span>Contact Us</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigateTo('agreement')}
                      className="text-slate-400 hover:text-orange-400 text-xs sm:text-sm transition-colors text-left flex items-center gap-1.5 cursor-pointer group"
                    >
                      <span className="text-orange-500 font-bold text-xs group-hover:translate-x-0.5 transition-transform">▸</span>
                      <span>User Agreement</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigateTo('refund')}
                      className="text-slate-400 hover:text-orange-400 text-xs sm:text-sm transition-colors text-left flex items-center gap-1.5 cursor-pointer group"
                    >
                      <span className="text-orange-500 font-bold text-xs group-hover:translate-x-0.5 transition-transform">▸</span>
                      <span>Cancellation &amp; Refund Policy</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Others (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Others</h4>
              <ul className="space-y-3 mb-6">
                <li>
                  <a
                    href="https://www.mbtravels.in/partner-registration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-orange-400 text-xs sm:text-sm transition-colors text-left flex items-center gap-1.5 cursor-pointer group"
                  >
                    <span className="text-orange-500 font-bold text-xs group-hover:translate-x-0.5 transition-transform">▸</span>
                    <span>Partner Registration</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mbtravels.in/register-business"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-orange-400 text-xs sm:text-sm transition-colors text-left flex items-center gap-1.5 cursor-pointer group"
                  >
                    <span className="text-orange-500 font-bold text-xs group-hover:translate-x-0.5 transition-transform">▸</span>
                    <span>Register Your Business</span>
                  </a>
                </li>
              </ul>

              {/* PG Badges */}
              <div className="pt-4 border-t border-white/5 space-y-2.5">
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Payment Gateways</p>
                <div className="flex flex-wrap gap-2">
                  {['Razorpay', 'Cashfree', 'PayU'].map(pg => (
                    <span key={pg} className="bg-white/5 border border-white/10 text-slate-400 text-xs px-3 py-1 rounded-full font-semibold">
                      {pg} Ready
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-500 text-xs text-center">
              © 2026 MB MITRA. All Rights Reserved. | GSTIN: 27XXXXX0000X1Z5
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <ShieldCheck size={12} className="text-green-500" />
                256-bit SSL Secured
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <BadgeCheck size={12} className="text-blue-400" />
                PCI-DSS Compliant
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ── POLICY MODALS ──────────────────────────────────────────────── */}
      {Object.entries(policies).map(([key, policy]) => (
        <Modal
          key={key}
          isOpen={modalOpen === key}
          onClose={() => setModalOpen(null)}
          title={policy.label}
        >
          {policy.content}
        </Modal>
      ))}

      {/* ── FLOATING WHATSAPP BUTTON ───────────────────────────────────── */}
      <a
        href="https://wa.me/917777885526"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/40"
        title="WhatsApp Support"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

    </div>
  );
}
