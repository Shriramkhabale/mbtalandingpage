import { useState } from 'react';
import {
  Smartphone, Tv, Zap, Droplets, Fuel, Wifi, ShieldCheck, CheckCircle,
  ArrowRight, RefreshCw, FileText, Phone, Mail, MapPin, Receipt, Search,
  ChevronRight, Sparkles, Building2, BadgeCheck, Clock, Award, Wallet,
  CreditCard, Check, AlertCircle, HelpCircle, Download, Plane
} from 'lucide-react';

export default function RechargePage({ onNavigateHome, onNavigateTravel, onNavigateSection }) {
  // Widget tab: 'mobile' | 'dth' | 'electricity' | 'fastag' | 'gas' | 'broadband'
  const [activeWidgetTab, setActiveWidgetTab] = useState('mobile');
  
  // Mobile recharge state
  const [mobileForm, setMobileForm] = useState({
    type: 'prepaid', // 'prepaid' | 'postpaid'
    mobileNumber: '9876543210',
    operator: 'Jio 5G',
    circle: 'Maharashtra & Goa',
    planAmount: '349',
  });

  // DTH state
  const [dthForm, setDthForm] = useState({
    operator: 'Tata Play HD',
    subscriberId: '3001894291',
    amount: '480',
  });

  // Electricity state
  const [elecForm, setElecForm] = useState({
    state: 'Maharashtra',
    board: 'Adani Electricity Mumbai Limited',
    consumerNo: '9021481290',
  });

  // FASTag state
  const [fastagForm, setFastagForm] = useState({
    bank: 'ICICI Bank FASTag',
    vehicleNo: 'MH-12-AB-4491',
    amount: '1000',
  });

  // Gas state
  const [gasForm, setGasForm] = useState({
    type: 'lpg', // 'lpg' | 'piped'
    provider: 'Bharat Gas (BPCL)',
    consumerNo: '9823104921',
  });

  // Broadband state
  const [broadbandForm, setBroadbandForm] = useState({
    provider: 'Airtel Xstream Fiber',
    accountNo: '020-25419082',
    amount: '999',
  });

  // Status tracker state
  const [trackId, setTrackId] = useState('');
  const [trackResult, setTrackResult] = useState(null);

  // Simulated payment processing state
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handlePay = (serviceName, amount, accountId) => {
    setPaymentSuccess({
      serviceName,
      amount,
      accountId,
      refId: 'NPCI' + Math.floor(100000000 + Math.random() * 900000000),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
    setTimeout(() => setPaymentSuccess(null), 6000);
  };

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (!trackId.trim()) return;
    setTrackResult({
      id: trackId,
      status: 'SUCCESS',
      service: 'Electricity Bill Payment (Adani Electricity)',
      amount: '₹1,840.00',
      dateTime: '30 Oct 2026, 12:45 PM',
      billerRef: 'BBPS-MH-' + Math.floor(1000000 + Math.random() * 9000000),
      paymentMode: 'UPI / NetBanking',
    });
  };

  // The 11 core services directly from the user's uploaded image
  const officialServicesList = [
    { title: 'Mobile Prepaid Recharge', desc: 'Instant recharge for Jio, Airtel, Vi, and BSNL with 5G unlimited plans & special tariffs.', icon: Smartphone },
    { title: 'DTH Recharge', desc: 'All direct-to-home providers: Tata Play, Dish TV, Airtel Digital TV, Sun Direct & d2h.', icon: Tv },
    { title: 'Electricity Bill Payment', desc: 'Over 50+ state DISCOMs across India: MSEDCL, Adani Electricity, BESCOM, UPPCL, Tata Power & more.', icon: Zap },
    { title: 'Water Bill Payment', desc: 'Municipal corporations and municipal water boards across all major cities with instant verification.', icon: Droplets },
    { title: 'Gas Bill Payment', desc: 'Piped Natural Gas (MGL, IGL, Adani Gas) and LPG cylinder bookings for Indane, HP & Bharat Gas.', icon: FlameIcon },
    { title: 'Broadband and Landline Bills', desc: 'High-speed broadband bills for ACT Fibernet, JioFiber, Airtel Xstream, BSNL & MTNL.', icon: Wifi },
    { title: 'FASTag Recharge', desc: 'NETC national highway toll top-ups for ICICI, HDFC, SBI, Axis, and all certified bank FASTags.', icon: Fuel },
    { title: 'BBPS-enabled Bill Payments', desc: 'Official Bharat BillPay (BBPS) network integration for nationwide verified bill fetch & settlement.', icon: BadgeCheck },
    { title: 'Other Supported Utility Payments', desc: 'Municipal property taxes, housing society maintenance, education fees & insurance premiums.', icon: Building2 },
    { title: 'Transaction History and Status Tracking', desc: 'Real-time ledger, instant SMS/WhatsApp payment confirmations, and downloadable PDF receipts.', icon: Receipt },
    { title: 'Retailer Commission Information', desc: 'Attractive commercial retailer slabs, transparent margins, and direct instant wallet settlement.', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-22 sm:pt-24">

      {/* ── TOP BREADCRUMB STRIP ── */}
      <div className="bg-white border-b border-slate-200/80 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-500">
            <button onClick={onNavigateHome} className="hover:text-orange-600 font-medium transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-slate-400">Customer Services</span>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="font-bold text-orange-600">Recharge &amp; Bill Payments</span>
          </div>

          <div className="flex items-center gap-4 text-slate-600">
            {onNavigateTravel && (
              <button
                onClick={onNavigateTravel}
                className="hidden md:flex items-center gap-1.5 text-slate-600 hover:text-orange-600 font-semibold transition-colors cursor-pointer"
              >
                <Plane size={13} className="text-orange-600" />
                <span>MB Travels Hub ➔</span>
              </button>
            )}
            <span className="text-slate-300 hidden md:inline">|</span>
            <span className="flex items-center gap-1.5 font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
              <BadgeCheck size={13} className="text-emerald-600" />
              NPCI BBPS Certified Gateway
            </span>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <a href="tel:7777885526" className="hidden sm:flex items-center gap-1.5 hover:text-orange-600 font-semibold transition-colors">
              <Phone size={13} className="text-orange-600" />
              <span>Support: 7777885526</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── HERO BANNER: RECHARGE & BILL PAYMENTS ── */}
      <section className="relative py-12 lg:py-16 bg-gradient-to-b from-white via-orange-50/20 to-slate-50 border-b border-slate-200/70 overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 right-10 w-[450px] h-[450px] bg-orange-400/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-amber-400/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-xs font-bold text-orange-800 shadow-2xs mb-4">
              <Zap size={14} className="text-orange-600" />
              <span>BHARAT BILL PAYMENT SYSTEM (BBPS) · NPCI CERTIFIED</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-4">
              Recharge &amp; Bill Payments, <br className="hidden sm:inline" />
              <span className="text-orange-600">All Utilities in One Place</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              Pay electricity, mobile 5G, DTH, FASTag, piped gas, and water bills in seconds with zero convenience surcharges on UPI. Backed by bank-grade 256-bit SSL encryption and instant WhatsApp receipts.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                <CheckCircle size={14} className="text-emerald-600" /> 20,000+ Billers Active
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                <Clock size={14} className="text-orange-600" /> 0.8s Direct Settlement
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                <Receipt size={14} className="text-blue-600" /> Instant PDF &amp; SMS Receipt
              </span>
            </div>
          </div>

          {/* ── ALL-IN-ONE BILLPAY CONSOLE WIDGET ── */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-5 sm:p-7 max-w-4xl mx-auto">
            
            {/* Widget Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 pb-4 mb-5 border-b border-slate-100">
              {[
                { id: 'mobile', icon: Smartphone, label: 'Mobile Recharge' },
                { id: 'dth', icon: Tv, label: 'DTH TV' },
                { id: 'electricity', icon: Zap, label: 'Electricity' },
                { id: 'fastag', icon: Fuel, label: 'FASTag' },
                { id: 'gas', icon: FlameIcon, label: 'Gas / LPG' },
                { id: 'broadband', icon: Wifi, label: 'Broadband' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveWidgetTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
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

            {/* TAB 1: MOBILE RECHARGE */}
            {activeWidgetTab === 'mobile' && (
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 mb-1">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="mobType"
                      checked={mobileForm.type === 'prepaid'}
                      onChange={() => setMobileForm({ ...mobileForm, type: 'prepaid' })}
                      className="accent-orange-600"
                    />
                    <span>Prepaid Recharge</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="mobType"
                      checked={mobileForm.type === 'postpaid'}
                      onChange={() => setMobileForm({ ...mobileForm, type: 'postpaid' })}
                      className="accent-orange-600"
                    />
                    <span>Postpaid Bill</span>
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Mobile Number</label>
                    <input
                      type="tel"
                      value={mobileForm.mobileNumber}
                      onChange={e => setMobileForm({ ...mobileForm, mobileNumber: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                      placeholder="10-digit Mobile"
                    />
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Operator</label>
                    <select
                      value={mobileForm.operator}
                      onChange={e => setMobileForm({ ...mobileForm, operator: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1 cursor-pointer"
                    >
                      <option>Jio 5G</option>
                      <option>Airtel 5G Plus</option>
                      <option>Vodafone Idea (Vi)</option>
                      <option>BSNL GSM Prepaid</option>
                    </select>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Telecom Circle</label>
                    <select
                      value={mobileForm.circle}
                      onChange={e => setMobileForm({ ...mobileForm, circle: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1 cursor-pointer"
                    >
                      <option>Maharashtra &amp; Goa</option>
                      <option>Delhi NCR</option>
                      <option>Karnataka</option>
                      <option>Gujarat</option>
                      <option>Uttar Pradesh (West/East)</option>
                      <option>Mumbai</option>
                    </select>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Plan Amount (₹)</label>
                    <input
                      type="text"
                      value={mobileForm.planAmount}
                      onChange={e => setMobileForm({ ...mobileForm, planAmount: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                    />
                  </div>
                </div>

                {/* Popular plan chips */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                  <span className="text-slate-400 font-semibold text-[11px]">Popular Packs:</span>
                  {[
                    { amt: '299', desc: '1.5GB/Day · 28D' },
                    { amt: '349', desc: '2GB/Day · 5G Unlimited · 28D' },
                    { amt: '719', desc: '2GB/Day · 84 Days' },
                    { amt: '2999', desc: '365 Days Annual Pack' },
                  ].map(p => (
                    <button
                      key={p.amt}
                      onClick={() => setMobileForm({ ...mobileForm, planAmount: p.amt })}
                      className={`px-2.5 py-1 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                        mobileForm.planAmount === p.amt
                          ? 'bg-orange-50 border-orange-500 text-orange-700'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      ₹{p.amt} <span className="text-[10px] font-normal text-slate-400">({p.desc})</span>
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between pt-2 gap-3">
                  <span className="text-xs text-slate-500 font-medium">Instant 5G sync in &lt; 1.5 seconds directly with telecom switch.</span>
                  <button
                    onClick={() => handlePay('Mobile 5G Recharge', `₹${mobileForm.planAmount}`, mobileForm.mobileNumber)}
                    className="bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold px-8 py-3 rounded-xl text-sm flex items-center gap-2 cursor-pointer shadow-sm hover:shadow transition-all"
                  >
                    <span>Proceed to Recharge ₹{mobileForm.planAmount}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: DTH RECHARGE */}
            {activeWidgetTab === 'dth' && (
              <div className="space-y-4">
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">DTH Operator</label>
                    <select
                      value={dthForm.operator}
                      onChange={e => setDthForm({ ...dthForm, operator: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1 cursor-pointer"
                    >
                      <option>Tata Play HD</option>
                      <option>Airtel Digital TV</option>
                      <option>Dish TV</option>
                      <option>Sun Direct</option>
                      <option>d2h (Videocon)</option>
                    </select>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Subscriber ID / VC Number</label>
                    <input
                      type="text"
                      value={dthForm.subscriberId}
                      onChange={e => setDthForm({ ...dthForm, subscriberId: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                    />
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Recharge Amount (₹)</label>
                    <input
                      type="text"
                      value={dthForm.amount}
                      onChange={e => setDthForm({ ...dthForm, amount: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-2 gap-3">
                  <span className="text-xs text-slate-500 font-medium">Instant DTH channel unfreeze &amp; active pack top-up in under 2 seconds.</span>
                  <button
                    onClick={() => handlePay('DTH Recharge', `₹${dthForm.amount}`, dthForm.subscriberId)}
                    className="bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold px-8 py-3 rounded-xl text-sm flex items-center gap-2 cursor-pointer shadow-sm hover:shadow transition-all"
                  >
                    <span>Recharge DTH ₹{dthForm.amount}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* TAB 3: ELECTRICITY BILL */}
            {activeWidgetTab === 'electricity' && (
              <div className="space-y-4">
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">State</label>
                    <select
                      value={elecForm.state}
                      onChange={e => setElecForm({ ...elecForm, state: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1 cursor-pointer"
                    >
                      <option>Maharashtra</option>
                      <option>Karnataka</option>
                      <option>Uttar Pradesh</option>
                      <option>Delhi NCR</option>
                      <option>Gujarat</option>
                      <option>Tamil Nadu</option>
                    </select>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Electricity Board (DISCOM)</label>
                    <select
                      value={elecForm.board}
                      onChange={e => setElecForm({ ...elecForm, board: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1 cursor-pointer"
                    >
                      <option>Adani Electricity Mumbai Limited</option>
                      <option>Maharashtra State Electricity (MSEDCL)</option>
                      <option>BESCOM - Bangalore Electricity</option>
                      <option>Tata Power Mumbai / Delhi</option>
                      <option>UPPCL (Urban / Rural)</option>
                    </select>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Consumer Number (CA Number)</label>
                    <input
                      type="text"
                      value={elecForm.consumerNo}
                      onChange={e => setElecForm({ ...elecForm, consumerNo: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                    />
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/90 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="font-bold text-slate-900 text-sm block">Verified Bill: ₹1,840.00</span>
                    <span className="text-slate-500 font-mono">Due Date: 12 Nov 2026 · Consumer: #9021481290</span>
                  </div>
                  <span className="font-mono text-emerald-600 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    ✓ NPCI Live Verified
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-1 gap-3">
                  <span className="text-xs text-slate-500 font-medium">BBPS settlement acknowledgment generated instantly.</span>
                  <button
                    onClick={() => handlePay('Electricity Bill', '₹1,840', elecForm.consumerNo)}
                    className="bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold px-8 py-3 rounded-xl text-sm flex items-center gap-2 cursor-pointer shadow-sm hover:shadow transition-all"
                  >
                    <span>Pay Bill ₹1,840</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* TAB 4: FASTAG */}
            {activeWidgetTab === 'fastag' && (
              <div className="space-y-4">
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">FASTag Issuer Bank</label>
                    <select
                      value={fastagForm.bank}
                      onChange={e => setFastagForm({ ...fastagForm, bank: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1 cursor-pointer"
                    >
                      <option>ICICI Bank FASTag</option>
                      <option>HDFC Bank FASTag</option>
                      <option>State Bank of India (SBI)</option>
                      <option>Paytm Payments Bank</option>
                      <option>Axis Bank FASTag</option>
                    </select>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Vehicle Registration No. (VRN)</label>
                    <input
                      type="text"
                      value={fastagForm.vehicleNo}
                      onChange={e => setFastagForm({ ...fastagForm, vehicleNo: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1 uppercase"
                    />
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Top-up Amount (₹)</label>
                    <input
                      type="text"
                      value={fastagForm.amount}
                      onChange={e => setFastagForm({ ...fastagForm, amount: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-2 gap-3">
                  <span className="text-xs text-slate-500 font-medium">NETC National Toll Switch updates balance within 2 minutes.</span>
                  <button
                    onClick={() => handlePay('FASTag Top-up', `₹${fastagForm.amount}`, fastagForm.vehicleNo)}
                    className="bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold px-8 py-3 rounded-xl text-sm flex items-center gap-2 cursor-pointer shadow-sm hover:shadow transition-all"
                  >
                    <span>Recharge FASTag ₹{fastagForm.amount}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* TAB 5: GAS / LPG */}
            {activeWidgetTab === 'gas' && (
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Gas Provider (LPG / Piped)</label>
                    <select
                      value={gasForm.provider}
                      onChange={e => setGasForm({ ...gasForm, provider: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1 cursor-pointer"
                    >
                      <option>Bharat Gas (BPCL Cylinder)</option>
                      <option>Indane Gas (IOCL Cylinder)</option>
                      <option>HP Gas (HPCL Cylinder)</option>
                      <option>Mahanagar Gas Limited (MGL Piped)</option>
                      <option>Indraprastha Gas Limited (IGL Piped)</option>
                      <option>Adani Total Gas</option>
                    </select>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Consumer Number / Registered Mobile</label>
                    <input
                      type="text"
                      value={gasForm.consumerNo}
                      onChange={e => setGasForm({ ...gasForm, consumerNo: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-2 gap-3">
                  <span className="text-xs text-slate-500 font-medium">LPG cylinder booking confirmation SMS sent immediately by OMC.</span>
                  <button
                    onClick={() => handlePay('Gas Bill / Cylinder', '₹945', gasForm.consumerNo)}
                    className="bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold px-8 py-3 rounded-xl text-sm flex items-center gap-2 cursor-pointer shadow-sm hover:shadow transition-all"
                  >
                    <span>Proceed to Book &amp; Pay</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* TAB 6: BROADBAND */}
            {activeWidgetTab === 'broadband' && (
              <div className="space-y-4">
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Broadband Provider</label>
                    <select
                      value={broadbandForm.provider}
                      onChange={e => setBroadbandForm({ ...broadbandForm, provider: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1 cursor-pointer"
                    >
                      <option>Airtel Xstream Fiber</option>
                      <option>JioFiber Broadband</option>
                      <option>ACT Fibernet</option>
                      <option>BSNL Broadband</option>
                      <option>Hathway Cable &amp; Datacom</option>
                    </select>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Account Number / Landline with STD</label>
                    <input
                      type="text"
                      value={broadbandForm.accountNo}
                      onChange={e => setBroadbandForm({ ...broadbandForm, accountNo: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                    />
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">Bill Amount (₹)</label>
                    <input
                      type="text"
                      value={broadbandForm.amount}
                      onChange={e => setBroadbandForm({ ...broadbandForm, amount: e.target.value })}
                      className="w-full bg-transparent font-bold text-slate-900 text-sm outline-none mt-1"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-2 gap-3">
                  <span className="text-xs text-slate-500 font-medium">Fiber connection active immediately upon payment receipt.</span>
                  <button
                    onClick={() => handlePay('Broadband Bill', `₹${broadbandForm.amount}`, broadbandForm.accountNo)}
                    className="bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold px-8 py-3 rounded-xl text-sm flex items-center gap-2 cursor-pointer shadow-sm hover:shadow transition-all"
                  >
                    <span>Pay Broadband ₹{broadbandForm.amount}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* Payment Settlement Feedback Notification */}
            {paymentSuccess && (
              <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex flex-wrap items-center justify-between gap-3 animate-in fade-in">
                <div className="flex items-center gap-2.5">
                  <CheckCircle size={20} className="text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold">{paymentSuccess.serviceName} Settled Successfully!</p>
                    <p className="text-xs text-emerald-800 mt-0.5">
                      Amount: {paymentSuccess.amount} · Ref: {paymentSuccess.refId} · Time: {paymentSuccess.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-lg">
                    100% OK · SMS Dispatched
                  </span>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ── SECTION 2: OFFICIAL SERVICES MATRIX (EXACT CARD FROM USER SCREENSHOT) ── */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">

            {/* Left Column: The EXACT Card from user image */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-7 sm:p-9 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/80 text-orange-600 flex items-center justify-center shadow-xs">
                  <Zap size={22} className="text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    Recharge &amp; Bill Payments
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">NPCI Certified Bharat BillPay (BBPS) Engine</p>
                </div>
              </div>

              {/* The 11 Checkmarked Items from User Screenshot */}
              <div className="space-y-3.5">
                {officialServicesList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-800 font-semibold group">
                    <span className="text-orange-600 font-bold mt-0.5 flex-shrink-0 text-base">✓</span>
                    <span className="leading-snug group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-500 font-medium flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  PCI-DSS &amp; 256-Bit SSL Encrypted
                </span>
                <button
                  onClick={() => window.scrollTo({ top: 320, behavior: 'smooth' })}
                  className="text-orange-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Pay Any Bill Now</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>

            {/* Right Column: Detailed Explanations & Capabilities */}
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200/80">
                Authorized Utility Infrastructure
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-4">
                Fast, Verified &amp; 100% Digital Settlement
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                MB MITRA's utility gateway connects directly with NPCI’s Bharat Bill Payment Operating Unit (BBPOU). This guarantees real-time fetch of exact consumer bills, verified biller names, and instantaneous receipt generation.
              </p>

              {/* 3 Value Cards */}
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">
                    01
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-0.5">Live Consumer Bill Fetch</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      Enter your account or consumer number and fetch outstanding bill dues, due date, and biller name live before making payment.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">
                    02
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-0.5">Instant Confirmation &amp; Legal Receipt</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      Every transaction generates an official BBPS reference ID with instant SMS and WhatsApp confirmation acceptable by government authorities.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">
                    03
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-0.5">100% Refund Guarantee</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      If an operator or power board rejects a payment, your funds are reversed automatically within 24–48 business hours with complete transparency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => document.getElementById('transaction-tracker')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold px-6 py-3 rounded-xl text-sm flex items-center gap-2 shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  <Search size={15} />
                  <span>Track Any Bill / Receipt</span>
                </button>
                <button
                  onClick={() => document.getElementById('retailer-commission')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-3 rounded-xl text-sm border border-slate-200 hover:border-slate-300 shadow-2xs transition-all cursor-pointer"
                >
                  <Award size={15} className="text-orange-600" />
                  <span>Retailer Commission Info</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 3: TRANSACTION HISTORY & STATUS TRACKER ── */}
      <section id="transaction-tracker" className="py-16 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200/80">
              Live Status Check
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-2">
              Transaction History &amp; Status Tracking
            </h2>
            <p className="text-slate-600 text-sm">
              Check the status of any recharge, utility bill payment, or refund in real-time using your Reference ID or Mobile Number.
            </p>
          </div>

          <div className="max-w-xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/40 p-6 sm:p-8">
            <form onSubmit={handleTrackSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Enter Transaction ID / Mobile Number / Consumer CA #
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={trackId}
                    onChange={e => setTrackId(e.target.value)}
                    placeholder="e.g. NPCI89218491 or 9876543210"
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl pl-4 pr-10 py-3 text-sm text-slate-900 outline-none focus:border-orange-500 font-medium"
                  />
                  <Search size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow transition-all"
              >
                <span>Track Transaction Status</span>
                <ArrowRight size={14} />
              </button>
            </form>

            {/* Track Result View */}
            {trackResult && (
              <div className="mt-6 pt-5 border-t border-slate-100 animate-in fade-in space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Payment Status</span>
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 font-mono">
                    <CheckCircle size={11} /> {trackResult.status}
                  </span>
                </div>

                <div className="bg-slate-50 rounded-xl p-3.5 space-y-1.5 border border-slate-200/70">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Service:</span>
                    <span className="font-bold text-slate-900">{trackResult.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Amount Paid:</span>
                    <span className="font-extrabold text-slate-900">{trackResult.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Date &amp; Time:</span>
                    <span className="text-slate-700 font-mono">{trackResult.dateTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Biller Ref #:</span>
                    <span className="text-slate-700 font-mono font-bold">{trackResult.billerRef}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Payment Mode:</span>
                    <span className="text-slate-700">{trackResult.paymentMode}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <BadgeCheck size={13} /> Official BBPS Receipt Verified
                  </span>
                  <button
                    onClick={() => alert(`Receipt downloaded for Ref: ${trackResult.billerRef}`)}
                    className="text-orange-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Download size={12} />
                    <span>Download Receipt (PDF)</span>
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ── SECTION 4: RETAILER COMMISSION INFORMATION ── */}
      <section id="retailer-commission" className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-orange-50/70 via-white to-amber-50/60 rounded-3xl border border-orange-200/90 shadow-xl shadow-orange-500/5 p-8 sm:p-12">
            
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-100/70 px-3 py-1 rounded-full border border-orange-200">
                Partner Earnings
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
                Retailer Commission Information
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Cyber cafes, digital Kendra owners, and financial retail agents earn instant commission on every single mobile recharge, DTH pack, and utility settlement. Transparent real-time wallet ledger with zero hidden deductions.
              </p>
            </div>

            {/* Slabs Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { category: 'Mobile Prepaid (Jio/Airtel/Vi)', commission: 'Up to 3.50%', payout: 'Instant Wallet Credit', badge: 'Highest Margin' },
                { category: 'DTH Recharges (All 5 Boards)', commission: 'Up to 3.25%', payout: 'Instant Wallet Credit', badge: 'Popular' },
                { category: 'Electricity & Municipal Bills', commission: '₹2.00 – ₹10.00 / bill', payout: 'Real-time BBPS Credit', badge: 'Volume High' },
                { category: 'FASTag Toll Top-ups', commission: '0.15% – 0.25%', payout: 'Instant NPCI Switch', badge: 'National Switch' },
              ].map((slab, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-orange-100 shadow-xs hover:border-orange-300 transition-colors">
                  <span className="text-[10px] font-bold text-orange-700 bg-orange-50 border border-orange-200/70 px-2 py-0.5 rounded-md uppercase block w-fit mb-2">
                    {slab.badge}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{slab.category}</h4>
                  <p className="text-xl font-black text-orange-600 my-1">{slab.commission}</p>
                  <p className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                    <CheckCircle size={11} className="text-emerald-600" />
                    {slab.payout}
                  </p>
                </div>
              ))}
            </div>

            {/* Retailer Features Strip */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-orange-100 text-xs">
              <div className="flex items-start gap-2.5">
                <Wallet size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Unified Retailer Wallet</p>
                  <p className="text-slate-500 text-[11px]">Single balance for all recharges, utilities, and travel ticketing.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Receipt size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Custom Branded Receipts</p>
                  <p className="text-slate-500 text-[11px]">Print customer receipts carrying your shop/kiosk name and contact.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">24x7 Settlement Desk</p>
                  <p className="text-slate-500 text-[11px]">Dedicated distributor and retailer support helpline for failed queues.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 5: CONTACT & HELPLINE DETAILS ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-[#F8FAFC] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">BBPS Helpline</p>
                <p className="text-base font-extrabold text-slate-900 mt-0.5">7777885526</p>
                <p className="text-xs text-slate-500">Dedicated Utility Desk · Mon–Sat, 9 AM – 6 PM</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/90 bg-[#F8FAFC] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Support</p>
                <p className="text-base font-extrabold text-slate-900 mt-0.5">care@mbmitra.com</p>
                <p className="text-xs text-slate-500">Instant ticket resolution with 24-hr turnaround</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/90 bg-[#F8FAFC] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Corporate Entity</p>
                <p className="text-xs font-bold text-slate-900 mt-0.5 leading-snug">
                  MB Travels, Bus Stand Road, Athani, Karnataka 591304, India
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">InfoYasho &amp; Nand Tech / MBTA Business Pvt Ltd</p>
                <p className="text-[10px] text-slate-400 font-mono mt-1">CIN: U63030KA2020PTC137942 · GST: 29AANCM7500R1ZN</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Flame icon for Gas
function FlameIcon({ size = 20, className = '' }) {
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
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}
