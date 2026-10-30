import { useState } from 'react';
import {
  Plane, Hotel, Bus, Train, MapPin, Calendar, Users, Phone, Mail,
  Clock, ShieldCheck, CheckCircle, ArrowRight, ExternalLink, Sparkles,
  Building2, Car, Compass, Award, Globe, BadgeCheck, FileText, Send,
  ChevronRight, Star, HeartHandshake, Luggage, Zap
} from 'lucide-react';

export default function TravelPage({ onNavigateHome, onNavigateRecharge, onNavigateSection }) {
  // Widget tab: 'flight' | 'hotel' | 'bus' | 'train' | 'package' | 'visa'
  const [activeWidgetTab, setActiveWidgetTab] = useState('flight');
  const [flightType, setFlightType] = useState('oneway'); // 'oneway' | 'round'
  const [destinationTab, setDestinationTab] = useState('international'); // 'international' | 'domestic'
  
  // Widget form states
  const [widgetState, setWidgetState] = useState({
    from: 'Mumbai (BOM)',
    to: 'Goa (GOI)',
    departDate: '2026-11-05',
    returnDate: '',
    passengers: '1 Adult, Economy',
    hotelCity: 'Goa, India',
    hotelCheckIn: '2026-11-10',
    hotelCheckOut: '2026-11-13',
    hotelGuests: '2 Adults, 1 Room',
    busFrom: 'Pune (Swargate)',
    busTo: 'Bangalore (Majestic)',
    busDate: '2026-11-08',
    trainFrom: 'New Delhi (NDLS)',
    trainTo: 'Varanasi (BSB)',
    trainDate: '2026-11-12',
    visaCountry: 'United Arab Emirates (Dubai)',
    packageDestination: 'Thailand (Phuket & Bangkok)',
  });

  const [widgetSearchResult, setWidgetSearchResult] = useState(null);

  // Group enquiry form state
  const [enquiryForm, setEnquiryForm] = useState({
    fullName: '',
    companyName: '',
    mobile: '',
    email: '',
    destination: '',
    departureDate: '',
    passengerCount: '6–10 passengers',
    requirements: '',
  });
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  const handleWidgetSearch = (e) => {
    e.preventDefault();
    setWidgetSearchResult({
      tab: activeWidgetTab,
      from: activeWidgetTab === 'flight' ? widgetState.from : activeWidgetTab === 'hotel' ? widgetState.hotelCity : widgetState.busFrom,
      to: activeWidgetTab === 'flight' ? widgetState.to : activeWidgetTab === 'hotel' ? widgetState.hotelGuests : widgetState.busTo,
    });
    setTimeout(() => setWidgetSearchResult(null), 5000);
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setEnquirySubmitted(true);
    setEnquiryForm({
      fullName: '',
      companyName: '',
      mobile: '',
      email: '',
      destination: '',
      departureDate: '',
      passengerCount: '6–10 passengers',
      requirements: '',
    });
    setTimeout(() => setEnquirySubmitted(false), 5000);
  };

  const prefillDestinationEnquiry = (destName) => {
    setEnquiryForm(prev => ({ ...prev, destination: destName }));
    document.getElementById('group-enquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  // 12 Services matching mbmitra.com/travel
  const travelServices = [
    {
      id: 'flights',
      icon: Plane,
      title: 'Flight Booking',
      desc: 'Domestic and international flights at the best prices with instant confirmation, web check-in support, and zero hidden charges.',
      tag: 'Best Fare Guarantee',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: 'hotels',
      icon: Hotel,
      title: 'Hotel Reservations',
      desc: 'Over 16 lakh hotel rooms worldwide. Budget stays to 5-star luxury resorts with verified reviews and free cancellation options.',
      tag: '16 Lakh+ Rooms',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      id: 'buses',
      icon: Bus,
      title: 'Bus Ticket Booking',
      desc: 'Book bus tickets across India with 500+ top operators, Volvo multi-axle AC sleepers, real-time seat layout, and live GPS tracking.',
      tag: '500+ Operators',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      id: 'cars',
      icon: Car,
      title: 'Car Booking & Transfers',
      desc: 'Comfortable airport transfers, hourly city rentals, and verified outstation cabs with professional chauffeurs nationwide.',
      tag: 'Verified Chauffeurs',
      color: 'from-amber-500 to-orange-600',
    },
    {
      id: 'packages',
      icon: Compass,
      title: 'Holiday Packages',
      desc: 'Curated domestic and international holiday packages for families, couples, and adventurers with flexible custom itineraries.',
      tag: 'Custom Itineraries',
      color: 'from-rose-500 to-pink-600',
    },
    {
      id: 'tours',
      icon: Globe,
      title: 'Domestic & Intl Tours',
      desc: 'Expertly guided sightseeing tours across popular tourist hotspots in India and globally with seamless ground transport.',
      tag: 'Guided Experiences',
      color: 'from-sky-500 to-blue-600',
    },
    {
      id: 'visa',
      icon: FileText,
      title: 'Visa Assistance',
      desc: 'Hassle-free visa application guidance, documentation check, submission support, and appointment scheduling for 50+ countries.',
      tag: '50+ Countries',
      color: 'from-teal-500 to-emerald-600',
    },
    {
      id: 'trains',
      icon: Train,
      title: 'Train Booking Assistance',
      desc: 'Authorized train booking assistance, IRCTC partner connectivity, tatkal seat availability tracking, and live PNR status updates.',
      tag: 'IRCTC Assistance',
      color: 'from-orange-500 to-amber-600',
    },
    {
      id: 'group',
      icon: Users,
      title: 'Group Travel Enquiries',
      desc: 'Special group airfares and blocked hotel tariffs for family reunions, destination weddings, and group excursions of 10+ travelers.',
      tag: 'Special Group Rates',
      color: 'from-indigo-500 to-violet-600',
    },
    {
      id: 'umrah',
      icon: Building2,
      title: 'Umrah Travel Enquiries',
      desc: 'Dedicated Umrah travel packages, flights, verified hotel accommodation near Haram in Makkah and Madinah with group support.',
      tag: 'Dedicated Packages',
      color: 'from-emerald-600 to-green-700',
    },
    {
      id: 'corporate',
      icon: BriefcaseIcon,
      title: 'Corporate Travel Solutions',
      desc: 'End-to-end corporate travel management for businesses of all sizes with GST-compliant tax invoicing and consolidated billing.',
      tag: 'GST Compliant',
      color: 'from-slate-700 to-slate-900',
    },
    {
      id: 'refunds',
      icon: ShieldCheck,
      title: 'Booking & Refund Support',
      desc: 'Smooth cancellation processing, easy date modification, and transparent refund timelines (5–7 business days) on all bookings.',
      tag: '5-7 Days Refund',
      color: 'from-orange-600 to-red-600',
    },
  ];

  // Destinations matching mbmitra.com/travel
  const internationalDestinations = [
    {
      name: 'Thailand',
      subtitle: 'Land of Smiles',
      desc: 'Beaches, historic temples, floating markets, street food and vibrant nightlife in Bangkok, Pattaya and Phuket.',
      duration: '5 Days / 4 Nights',
      price: '₹24,999',
      imageBg: 'from-emerald-600/90 to-teal-800/90',
      highlights: ['Phuket Island Tour', 'Coral Island Speedboat', 'Bangkok City Temple Tour'],
    },
    {
      name: 'Azerbaijan & Georgia',
      subtitle: 'Hidden Gems of the Caucasus',
      desc: 'Explore the futuristic Flame Towers of Baku, ancient cobblestone streets of Old Tbilisi, and snow-capped Caucasus peaks.',
      duration: '6 Days / 5 Nights',
      price: '₹44,999',
      imageBg: 'from-sky-700/90 to-indigo-900/90',
      highlights: ['Baku Old City & Gobustan', 'Tbilisi Cable Car', 'Kazbegi Mountain Safari'],
    },
    {
      name: 'Australia',
      subtitle: 'The Land Down Under',
      desc: 'From the Great Barrier Reef and Sydney Opera House to the golden beaches of Gold Coast and Melbourne heritage.',
      duration: '8 Days / 7 Nights',
      price: '₹94,999',
      imageBg: 'from-amber-600/90 to-orange-800/90',
      highlights: ['Sydney Harbour Cruise', 'Great Barrier Reef Snorkel', 'Gold Coast Theme Parks'],
    },
    {
      name: 'Kazakhstan',
      subtitle: 'Steppe & Skyline',
      desc: 'Discover the vast alpine lakes of Almaty, Charyn Canyon, and the futuristic modern architecture of Astana.',
      duration: '5 Days / 4 Nights',
      price: '₹38,999',
      imageBg: 'from-cyan-700/90 to-blue-900/90',
      highlights: ['Shymbulak Ski Resort', 'Charyn Canyon Day Tour', 'Kok Tobe Hill Cableway'],
    },
    {
      name: 'Dubai & UAE',
      subtitle: 'The Desert Metropolis',
      desc: 'World-record architecture, Burj Khalifa 124th floor, thrilling Desert Safari with BBQ dinner, and luxury shopping.',
      duration: '5 Days / 4 Nights',
      price: '₹32,999',
      imageBg: 'from-orange-600/90 to-red-800/90',
      highlights: ['Burj Khalifa Top View', 'Desert 4x4 Dune Bashing', 'Marina Dhow Cruise Dinner'],
    },
    {
      name: 'Singapore & Malaysia',
      subtitle: 'Garden City & Twin Towers',
      desc: 'Experience Marina Bay Sands, Sentosa Island Universal Studios, and the Petronas Twin Towers in Kuala Lumpur.',
      duration: '6 Days / 5 Nights',
      price: '₹41,999',
      imageBg: 'from-teal-700/90 to-emerald-900/90',
      highlights: ['Universal Studios Singapore', 'Sentosa Cable Car', 'Batu Caves & KL Towers'],
    },
  ];

  const domesticDestinations = [
    {
      name: 'Jammu & Kashmir',
      subtitle: 'Paradise on Earth',
      desc: 'Snow-capped Himalayan peaks, traditional Srinagar houseboats on Dal Lake, Gulmarg Gondola, and Betaab Valley.',
      duration: '6 Days / 5 Nights',
      price: '₹16,999',
      imageBg: 'from-blue-700/90 to-slate-900/90',
      highlights: ['Srinagar Shikara Ride', 'Gulmarg Gondola Ride', 'Pahalgam Valley Sightseeing'],
    },
    {
      name: 'Meghalaya',
      subtitle: 'Abode of Clouds',
      desc: 'Living root bridges in Nohwet, crystal clear Dawki river, Cherrapunji waterfalls, and the cleanest village Mawlynnong.',
      duration: '5 Days / 4 Nights',
      price: '₹19,500',
      imageBg: 'from-emerald-700/90 to-teal-900/90',
      highlights: ['Double Decker Root Bridge', 'Dawki Boating at Umngot', 'Nohkalikai Falls Cherrapunji'],
    },
    {
      name: 'Katra & Pahalgam',
      subtitle: 'Spiritual & Scenic Journey',
      desc: 'Sacred Mata Vaishno Devi pilgrimage combined with the breathtaking alpine meadows and pine forests of Pahalgam.',
      duration: '5 Days / 4 Nights',
      price: '₹13,499',
      imageBg: 'from-orange-700/90 to-amber-900/90',
      highlights: ['Vaishno Devi Darshan Priority', 'Aru Valley & Chandanwari', 'Katra Deluxe Stays'],
    },
    {
      name: 'Goa Coastal Retreat',
      subtitle: 'Sun, Sand & Portuguese Charm',
      desc: 'North Goa beach shacks, thrilling water sports, historic Old Goa churches, Dudhsagar falls, and South Goa calm shores.',
      duration: '4 Days / 3 Nights',
      price: '₹8,999',
      imageBg: 'from-amber-600/90 to-teal-800/90',
      highlights: ['Mandovi River Sunset Cruise', 'Scuba & Watersports Combo', 'Historic Fort Aguada'],
    },
    {
      name: 'Kerala Backwaters',
      subtitle: "God's Own Country",
      desc: 'Munnar sprawling tea plantations, Mattupetty dam, Periyar wildlife sanctuary, and an overnight Alleppey deluxe houseboat.',
      duration: '5 Days / 4 Nights',
      price: '₹17,999',
      imageBg: 'from-green-700/90 to-emerald-900/90',
      highlights: ['Private Houseboat Cruise', 'Munnar Tea Estate Walk', 'Thekkady Spice Plantation'],
    },
    {
      name: 'Rajasthan Royal Circuit',
      subtitle: 'Land of Kings & Palaces',
      desc: 'Grand forts of Jaipur, the blue alleys of Jodhpur Mehrangarh, and the romantic lake palaces of Udaipur.',
      duration: '6 Days / 5 Nights',
      price: '₹21,500',
      imageBg: 'from-rose-700/90 to-amber-900/90',
      highlights: ['Amer Fort Elephant Ride', 'Lake Pichola Udaipur Boat', 'Chokhi Dhani Heritage Dinner'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-22 sm:pt-24">

      {/* ── TOP BREADCRUMB & QUICK ACCESS STRIP ── */}
      <div className="bg-white border-b border-slate-200/80 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-500">
            <button onClick={onNavigateHome} className="hover:text-orange-600 font-medium transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-slate-400">Customer Services</span>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="font-bold text-orange-600">MB Travels</span>
          </div>

          <div className="flex items-center gap-4 text-slate-600">
            {onNavigateRecharge && (
              <button
                onClick={onNavigateRecharge}
                className="hidden md:flex items-center gap-1.5 text-slate-600 hover:text-orange-600 font-semibold transition-colors cursor-pointer"
              >
                <Zap size={13} className="text-orange-600" />
                <span>Recharge &amp; Bill Payments ➔</span>
              </button>
            )}
            <span className="text-slate-300 hidden md:inline">|</span>
            <a href="tel:7777885526" className="flex items-center gap-1.5 hover:text-orange-600 font-semibold transition-colors">
              <Phone size={13} className="text-orange-600" />
              <span>Travel Desk: 7777885526</span>
            </a>
            <span className="text-slate-300">|</span>
            <a href="mailto:care@mbmitra.com" className="hidden sm:flex items-center gap-1.5 hover:text-orange-600 transition-colors">
              <Mail size={13} className="text-orange-600" />
              <span>care@mbmitra.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── HERO BANNER: MB TRAVELS ── */}
      <section className="relative py-14 lg:py-18 bg-gradient-to-b from-white via-orange-50/25 to-slate-50 border-b border-slate-200/70 overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-orange-400/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-amber-400/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-xs font-bold text-orange-800 shadow-2xs mb-4">
              <Plane size={13} className="text-orange-600" />
              <span>MB TRAVELS · YOUR COMPLETE TRAVEL SOLUTION</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-medium">MBTA Business Pvt Ltd</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-4">
              Your Complete <br className="hidden sm:inline" />
              <span className="text-orange-600">Travel Booking Solution</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              Travel with Trust. Discover flights, hotels, bus tickets, holiday packages, visa assistance, and corporate travel services through MB Travels — with 24x7 support, best price guarantee, and instant WhatsApp confirmations.
            </p>

            {/* Top Quick Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://mbtravels.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 text-sm shadow-sm hover:shadow transition-all"
              >
                <span>Book on mbtravels.in</span>
                <ExternalLink size={14} />
              </a>
              <button
                onClick={() => document.getElementById('group-enquiry')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-3 rounded-xl flex items-center gap-2 text-sm border border-slate-200 hover:border-slate-300 shadow-2xs transition-all cursor-pointer"
              >
                <Users size={15} className="text-orange-600" />
                <span>Group &amp; Corporate Enquiry</span>
              </button>
              <button
                onClick={() => document.getElementById('travel-partner')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-50 hover:bg-orange-100/70 text-orange-800 font-bold px-5 py-3 rounded-xl flex items-center gap-2 text-sm border border-orange-200/80 transition-all cursor-pointer"
              >
                <Award size={15} className="text-orange-600" />
                <span>Partner Programme</span>
              </button>
            </div>
          </div>

          {/* ── ALL-IN-ONE TRAVEL SEARCH CONSOLE WIDGET ── */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-5 sm:p-7 max-w-4xl mx-auto">
            
            {/* Widget Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 pb-4 mb-5 border-b border-slate-100">
              {[
                { id: 'flight', icon: Plane, label: 'Flights' },
                { id: 'hotel', icon: Hotel, label: 'Hotels' },
                { id: 'bus', icon: Bus, label: 'Buses' },
                { id: 'train', icon: Train, label: 'Trains' },
                { id: 'package', icon: Compass, label: 'Holidays' },
                { id: 'visa', icon: FileText, label: 'Visa' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveWidgetTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                    activeWidgetTab === tab.id
                      ? 'bg-orange-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <tab.icon size={15} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* TAB 1: FLIGHT SEARCH */}
            {activeWidgetTab === 'flight' && (
              <form onSubmit={handleWidgetSearch} className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 mb-2">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="flightType"
                      checked={flightType === 'oneway'}
                      onChange={() => setFlightType('oneway')}
                      className="accent-orange-600"
                    />
                    <span>One Way</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="flightType"
                      checked={flightType === 'round'}
                      onChange={() => setFlightType('round')}
                      className="accent-orange-600"
                    />
                    <span>Round Trip</span>
                  </label>
                  <span className="text-slate-300">|</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle size={12} /> Zero Convenience Fee on Net Fares
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">From (Origin)</label>
                    <input
                      type="text"
                      value={widgetState.from}
                      onChange={e => setWidgetState({ ...widgetState, from: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                      placeholder="City or Airport"
                      required
                    />
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">To (Destination)</label>
                    <input
                      type="text"
                      value={widgetState.to}
                      onChange={e => setWidgetState({ ...widgetState, to: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                      placeholder="City or Airport"
                      required
                    />
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Departure Date</label>
                    <input
                      type="date"
                      value={widgetState.departDate}
                      onChange={e => setWidgetState({ ...widgetState, departDate: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1 cursor-pointer"
                      required
                    />
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Passengers &amp; Class</label>
                    <input
                      type="text"
                      value={widgetState.passengers}
                      onChange={e => setWidgetState({ ...widgetState, passengers: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-2 gap-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-medium">
                      <ShieldCheck size={14} className="text-emerald-600" />
                      IndiGo, Air India, SpiceJet, Vistara &amp; 100+ Airlines
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold px-8 py-3 rounded-xl text-sm flex items-center gap-2 cursor-pointer shadow-sm hover:shadow transition-all"
                  >
                    <span>Search Best Fares</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}

            {/* TAB 2: HOTEL SEARCH */}
            {activeWidgetTab === 'hotel' && (
              <form onSubmit={handleWidgetSearch} className="space-y-4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 lg:col-span-2">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">City, Location or Hotel Name</label>
                    <input
                      type="text"
                      value={widgetState.hotelCity}
                      onChange={e => setWidgetState({ ...widgetState, hotelCity: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                      placeholder="e.g. Goa, Mumbai, Dubai"
                      required
                    />
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Check-In / Out</label>
                    <input
                      type="text"
                      value="10 Nov – 13 Nov (3 Nights)"
                      readOnly
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                    />
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Rooms &amp; Guests</label>
                    <input
                      type="text"
                      value={widgetState.hotelGuests}
                      onChange={e => setWidgetState({ ...widgetState, hotelGuests: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-2 gap-3">
                  <span className="text-xs text-slate-500 font-medium">Over 16,00,000 Verified Hotel Rooms Worldwide with Free Cancellation</span>
                  <button
                    type="submit"
                    className="bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold px-8 py-3 rounded-xl text-sm flex items-center gap-2 cursor-pointer shadow-sm hover:shadow transition-all"
                  >
                    <span>Search Hotels</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}

            {/* TAB 3: BUS SEARCH */}
            {activeWidgetTab === 'bus' && (
              <form onSubmit={handleWidgetSearch} className="space-y-4">
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">From City</label>
                    <input
                      type="text"
                      value={widgetState.busFrom}
                      onChange={e => setWidgetState({ ...widgetState, busFrom: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                      required
                    />
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">To City</label>
                    <input
                      type="text"
                      value={widgetState.busTo}
                      onChange={e => setWidgetState({ ...widgetState, busTo: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                      required
                    />
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Date of Journey</label>
                    <input
                      type="date"
                      value={widgetState.busDate}
                      onChange={e => setWidgetState({ ...widgetState, busDate: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1 cursor-pointer"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-2 gap-3">
                  <span className="text-xs text-slate-500 font-medium">500+ Top Private &amp; State RTC Operators with Live GPS Tracking</span>
                  <button
                    type="submit"
                    className="bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold px-8 py-3 rounded-xl text-sm flex items-center gap-2 cursor-pointer shadow-sm hover:shadow transition-all"
                  >
                    <span>Search Buses</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}

            {/* TAB 4: TRAIN SEARCH */}
            {activeWidgetTab === 'train' && (
              <form onSubmit={handleWidgetSearch} className="space-y-4">
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">From Station</label>
                    <input
                      type="text"
                      value={widgetState.trainFrom}
                      onChange={e => setWidgetState({ ...widgetState, trainFrom: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                      required
                    />
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">To Station</label>
                    <input
                      type="text"
                      value={widgetState.trainTo}
                      onChange={e => setWidgetState({ ...widgetState, trainTo: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                      required
                    />
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Date of Journey</label>
                    <input
                      type="date"
                      value={widgetState.trainDate}
                      onChange={e => setWidgetState({ ...widgetState, trainDate: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1 cursor-pointer"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-2 gap-3">
                  <span className="text-xs text-slate-500 font-medium">Authorized IRCTC Booking Assistance · PNR Status · Tatkal Alerts</span>
                  <button
                    type="submit"
                    className="bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold px-8 py-3 rounded-xl text-sm flex items-center gap-2 cursor-pointer shadow-sm hover:shadow transition-all"
                  >
                    <span>Check Trains</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}

            {/* TAB 5: HOLIDAYS SEARCH */}
            {activeWidgetTab === 'package' && (
              <form onSubmit={handleWidgetSearch} className="space-y-4">
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:col-span-2">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Destination or Theme</label>
                    <input
                      type="text"
                      value={widgetState.packageDestination}
                      onChange={e => setWidgetState({ ...widgetState, packageDestination: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                      placeholder="e.g. Thailand, Kashmir, Dubai, Europe"
                      required
                    />
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Travel Duration</label>
                    <select className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1 cursor-pointer">
                      <option>3 to 5 Days</option>
                      <option>6 to 8 Days</option>
                      <option>9+ Days</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-2 gap-3">
                  <span className="text-xs text-slate-500 font-medium">All-Inclusive Packages with Flights, Hotels, Sightseeing &amp; Transfers</span>
                  <button
                    type="submit"
                    className="bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold px-8 py-3 rounded-xl text-sm flex items-center gap-2 cursor-pointer shadow-sm hover:shadow transition-all"
                  >
                    <span>Explore Packages</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}

            {/* TAB 6: VISA SEARCH */}
            {activeWidgetTab === 'visa' && (
              <form onSubmit={handleWidgetSearch} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Destination Country</label>
                    <select
                      value={widgetState.visaCountry}
                      onChange={e => setWidgetState({ ...widgetState, visaCountry: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1 cursor-pointer"
                    >
                      <option>United Arab Emirates (Dubai)</option>
                      <option>Thailand Tourist Visa</option>
                      <option>Singapore Tourist &amp; Business</option>
                      <option>Schengen (Europe 27 Countries)</option>
                      <option>United Kingdom (UK)</option>
                      <option>United States (US B1/B2)</option>
                      <option>Azerbaijan &amp; Georgia eVisa</option>
                    </select>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Visa Type</label>
                    <select className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1 cursor-pointer">
                      <option>Tourist / Holiday Visa (30/60 Days)</option>
                      <option>Business / Conference Visa</option>
                      <option>Transit Visa</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-2 gap-3">
                  <span className="text-xs text-slate-500 font-medium">99.2% Visa Approval Rate · Complete Documentation Check &amp; Verification</span>
                  <button
                    type="submit"
                    className="bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold px-8 py-3 rounded-xl text-sm flex items-center gap-2 cursor-pointer shadow-sm hover:shadow transition-all"
                  >
                    <span>Get Visa Assistance</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}

            {/* Simulated Live Search Result Notification */}
            {widgetSearchResult && (
              <div className="mt-4 p-4 rounded-2xl bg-orange-50 border border-orange-200 text-orange-950 flex flex-wrap items-center justify-between gap-3 animate-in fade-in">
                <div className="flex items-center gap-2.5">
                  <CheckCircle size={18} className="text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold">Real-time availability locked for {widgetSearchResult.from}!</p>
                    <p className="text-xs text-orange-800 mt-0.5">Redirecting to live engine on mbtravels.in with best discounted rates applied.</p>
                  </div>
                </div>
                <a
                  href="https://mbtravels.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-xs"
                >
                  <span>Continue on mbtravels.in</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ── SECTION 2: 12 COMPREHENSIVE TRAVEL SERVICES ── */}
      <section id="travel-services" className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200/80">
              Complete Travel Suite
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-3">
              Travel Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Everything you need for a seamless travel experience — from booking to boarding, tailored for retail customers and corporate partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelServices.map((service) => (
              <div
                key={service.id}
                className="service-card rounded-2xl p-6 cursor-pointer group flex flex-col justify-between border border-slate-200/90 hover:border-orange-300 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200 text-white`}>
                      <service.icon size={22} />
                    </div>
                    <span className="text-[10px] font-bold text-orange-700 bg-orange-50 border border-orange-200/70 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-slate-900 mb-2 text-lg group-hover:text-orange-950 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 group-hover:text-slate-700">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 group-hover:border-orange-200/80 transition-colors flex items-center justify-between mt-auto">
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-orange-600 transition-colors">
                    24/7 Booking Desk
                  </span>
                  <a
                    href="https://mbtravels.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold shadow-xs group-hover:shadow transition-all"
                  >
                    <span>Book Now</span>
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 3: POPULAR DESTINATIONS GALLERY ── */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200/80">
                Explore The World
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-2">
                Popular Destinations
              </h2>
              <p className="text-slate-600 text-sm max-w-xl">
                Handpicked domestic and international holiday destinations with amazing curated packages worldwide.
              </p>
            </div>

            {/* Destination Mode Switcher */}
            <div className="bg-slate-200/80 p-1 rounded-2xl flex items-center gap-1 self-start md:self-auto">
              <button
                onClick={() => setDestinationTab('international')}
                className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  destinationTab === 'international'
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Globe size={14} />
                <span>International</span>
              </button>
              <button
                onClick={() => setDestinationTab('domestic')}
                className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  destinationTab === 'domestic'
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <MapPin size={14} />
                <span>Domestic (India)</span>
              </button>
            </div>
          </div>

          {/* Destinations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(destinationTab === 'international' ? internationalDestinations : domesticDestinations).map((dest) => (
              <div
                key={dest.name}
                className="service-card rounded-3xl overflow-hidden border border-slate-200/90 hover:border-orange-300 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  {/* Visual Header Banner */}
                  <div className={`p-6 bg-gradient-to-br ${dest.imageBg} text-white relative`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                        {destinationTab === 'international' ? 'International' : 'Domestic'}
                      </span>
                      <span className="text-xs font-mono font-bold bg-white/25 px-2.5 py-0.5 rounded-full">
                        {dest.duration}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black">{dest.name}</h3>
                    <p className="text-white/85 text-xs font-medium">{dest.subtitle}</p>
                  </div>

                  {/* Body Details */}
                  <div className="p-6">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {dest.desc}
                    </p>

                    <div className="space-y-1.5 mb-5">
                      <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Top Highlights</p>
                      {dest.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle size={12} className="text-emerald-600 flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0 mt-auto border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Starting From</span>
                    <span className="text-lg font-black text-slate-900">{dest.price}</span>
                  </div>
                  <button
                    onClick={() => prefillDestinationEnquiry(dest.name)}
                    className="bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-xs hover:shadow transition-all"
                  >
                    <span>Enquire Package</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 4: CORPORATE & GROUP TRAVEL ENQUIRY FORM ── */}
      <section id="group-enquiry" className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
            
            {/* Left Column: Value Proposition */}
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200/80">
                Tailored Group Desk
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
                Corporate &amp; Group Travel Enquiry
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Planning a company offsite, executive delegation, family reunion, wedding party, or group pilgrimage? Fill in your travel details and our corporate desk will provide customized quotes within 2 hours.
              </p>

              <div className="space-y-3.5 mb-8">
                {[
                  'Group flight bookings with flexible name changes & blocked fares',
                  'Negotiated room tariffs at 5-star & boutique resort chains',
                  'Dedicated executive account manager & single point of contact',
                  'Full GST compliance for Input Tax Credit (ITC) reconciliation',
                  'Charter buses, luxury coach transfers & local guides',
                  'Dedicated Umrah group travel planning & visa clearance',
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="bg-orange-50 border border-orange-200/80 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-orange-800 font-bold">Urgent Group Departure?</p>
                  <p className="text-sm font-extrabold text-slate-900">Direct Desk: +91 7777885526 / 9980963832</p>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Form */}
            <div className="bg-[#FAFAFC] rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/40 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Send an Enquiry</h3>
              <p className="text-xs text-slate-500 mb-5">Fill in your requirements below for an instant response.</p>

              {enquirySubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center animate-in fade-in">
                  <CheckCircle size={36} className="text-emerald-600 mx-auto mb-2" />
                  <h4 className="text-base font-bold text-emerald-900">Enquiry Received Successfully!</h4>
                  <p className="text-xs text-emerald-700 mt-1">Our group travel specialist will connect with you on your mobile/email within 2 hours with customized rates.</p>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4 text-xs">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={enquiryForm.fullName}
                        onChange={e => setEnquiryForm({ ...enquiryForm, fullName: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Company / Group Name</label>
                      <input
                        type="text"
                        value={enquiryForm.companyName}
                        onChange={e => setEnquiryForm({ ...enquiryForm, companyName: e.target.value })}
                        placeholder="e.g. Acme Technologies / Family Group"
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={enquiryForm.mobile}
                        onChange={e => setEnquiryForm({ ...enquiryForm, mobile: e.target.value })}
                        placeholder="e.g. 98765 43210"
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={enquiryForm.email}
                        onChange={e => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Destination *</label>
                      <input
                        type="text"
                        required
                        value={enquiryForm.destination}
                        onChange={e => setEnquiryForm({ ...enquiryForm, destination: e.target.value })}
                        placeholder="e.g. Dubai, Thailand, Goa, Kashmir"
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Estimated Departure Date</label>
                      <input
                        type="date"
                        value={enquiryForm.departureDate}
                        onChange={e => setEnquiryForm({ ...enquiryForm, departureDate: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 outline-none focus:border-orange-500 transition-colors cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Number of Passengers *</label>
                    <select
                      value={enquiryForm.passengerCount}
                      onChange={e => setEnquiryForm({ ...enquiryForm, passengerCount: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 outline-none focus:border-orange-500 transition-colors cursor-pointer font-medium"
                    >
                      <option>1–5 passengers</option>
                      <option>6–10 passengers</option>
                      <option>11–20 passengers</option>
                      <option>21–50 passengers</option>
                      <option>50+ passengers</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Message / Special Requirements</label>
                    <textarea
                      rows={3}
                      value={enquiryForm.requirements}
                      onChange={e => setEnquiryForm({ ...enquiryForm, requirements: e.target.value })}
                      placeholder="Mention preferred airline, meal preferences, 4-star/5-star accommodation, team activities..."
                      className="w-full bg-white border border-slate-200 rounded-xl p-3 text-slate-900 outline-none focus:border-orange-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow transition-all"
                  >
                    <span>Submit Travel Enquiry</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 5: TRAVEL PARTNER PROGRAMME ── */}
      <section id="travel-partner" className="py-16 bg-[#FFF9F5] border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl border border-orange-200/90 shadow-xl shadow-orange-500/5 p-8 sm:p-12">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200/80">
                B2B Partner Network
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
                Start Your Own Travel Business with MB Travels
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Join the MB Travels network and offer flights, hotels, buses, holiday packages, and visa services to your customers. High commission margins, dedicated agent portal, and 24x7 support.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { title: 'Access to Complete Travel Inventory', desc: '100,000+ flights, 16 lakh hotel rooms worldwide, and 500+ bus operators in one single unified interface.' },
                { title: 'White-Label Platform Available', desc: 'Deploy a branded travel booking portal with your agency name, logo, and custom markup capabilities.' },
                { title: 'Dedicated Partner & Corporate Login', desc: 'Separate agent login with live commission tracking, GST invoice generation, and wallet management.' },
                { title: '24x7 Customer Support Desk', desc: 'Round-the-clock priority assistance for date rescheduling, cancellations, and emergency airport issues.' },
                { title: 'Android Mobile App for Agents', desc: 'Book tickets, check PNRs, and share WhatsApp confirmation slips directly from your smartphone.' },
                { title: 'Lowest Price Guarantee', desc: 'Access unpublished B2B consolidated fares with zero extra fees and maximum earnings on every booking.' },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-orange-300 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold text-xs mb-3 shadow-xs">
                    0{i + 1}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
              <a
                href="https://www.mbtravels.in/partner-registration"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold px-7 py-3 rounded-xl text-sm flex items-center gap-2 shadow-sm hover:shadow transition-all"
              >
                <span>Register as Travel Partner</span>
                <ArrowRight size={14} />
              </a>
              <a
                href="https://one.mbmitra.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-3 rounded-xl text-sm border border-slate-200 hover:border-slate-300 shadow-2xs transition-all"
              >
                <span>Partner Login</span>
              </a>
              <span className="text-xs text-slate-400 font-medium ml-auto">
                Direct Consumer Booking: <a href="https://mbtravels.in" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold hover:underline">mbtravels.in</a>
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 6: CONTACT TRAVEL DESK & OFFICIAL DETAILS ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-[#F8FAFC] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Travel Support</p>
                <p className="text-base font-extrabold text-slate-900 mt-0.5">7777885526</p>
                <p className="text-xs text-slate-500">Alt: 9980963832 · Mon–Sat, 9 AM – 6 PM</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/90 bg-[#F8FAFC] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Assistance</p>
                <p className="text-base font-extrabold text-slate-900 mt-0.5">care@mbmitra.com</p>
                <p className="text-xs text-slate-500">2-hour guaranteed response time</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/90 bg-[#F8FAFC] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Head Office</p>
                <p className="text-xs font-bold text-slate-900 mt-0.5 leading-snug">
                  MB Travels, Bus Stand Road, Athani, Karnataka 591304, India
                </p>
                <p className="text-[10px] text-slate-400 font-mono mt-1">MBTA Business Pvt Ltd · CIN: U63030KA2020PTC137942</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Briefcase icon helper since lucide briefcase was replaced in some subsets
function BriefcaseIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

