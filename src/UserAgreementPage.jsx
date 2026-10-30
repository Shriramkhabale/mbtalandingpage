import { useState } from 'react';
import {
  FileCheck2, ShieldCheck, Scale, AlertTriangle, Building2,
  Lock, Eye, Phone, Mail, ChevronRight, ArrowRight, Clock,
  Luggage, HeartPulse, HelpCircle, Ban, CheckCircle, Award
} from 'lucide-react';

export default function UserAgreementPage({ onNavigateHome, onNavigateTravel, onNavigateRecharge }) {
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    {
      id: 'preamble',
      title: 'Agreement Overview & Acceptance',
      icon: FileCheck2,
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-sm">
          <p className="font-semibold text-slate-900">
            Before using our services you are required to read the user agreement and accept all the terms and conditions. The same are listed below for your reference:
          </p>
          <p>
            This page sets forth the terms and conditions under which <strong>MBTA BUSINESS PRIVATE LIMITED</strong> provides the information on this Website, as well as the terms and conditions governing your use of this site. By making use of this site, you shall be presumed to have agreed to the terms and conditions we have outlined below. If you do not accept these terms and conditions, do not continue to use or access this site.
          </p>
        </div>
      ),
    },
    {
      id: 'use-of-site',
      title: 'Use of Site',
      icon: ShieldCheck,
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-sm">
          <p>
            <strong>MBTA BUSINESS PRIVATE LIMITED</strong> grants you a limited, non-transferable license to use this site in accordance with the terms and conditions of this User Agreement. You may only use this site to make legitimate reservations or purchases and shall not use this site for any other purposes, including without limitation, to make any speculative, false or fraudulent reservation or any reservation in anticipation of demand. You shall not make reservation in the name of a fictitious person.
          </p>
          <p>
            You agree that you will not use any device, software or routine that would interfere or be reasonably expected to interfere with the normal working of this site. You agree that you shall not take any action that imposes a burden or load on our infrastructure that <strong>MBTA BUSINESS PRIVATE LIMITED</strong> deems in its sole discretion to be unreasonable or disproportionate to the benefits <strong>MBTA BUSINESS PRIVATE LIMITED</strong> obtains from your use of the site.
          </p>
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 space-y-2 text-xs">
            <h5 className="font-bold text-slate-900 uppercase tracking-wider">Prohibited Content &amp; Transmission</h5>
            <p className="text-slate-600">
              You are prohibited from posting or transmitting any unlawful, threatening, libelous, defamatory, obscene, indecent, inflammatory, pornographic or profane material or any material that could constitute or encourage acts or omissions that would amount to a criminal offence or attempt to commit a criminal offence, or give rise to civil liability, or otherwise violate any law.
            </p>
            <p className="text-slate-600">
              In addition, you are prohibited from posting or transmitting any information which (a) infringes the rights of others or violates their privacy or publicity rights, (b) is protected by patent, copyright, trademark or other proprietary right, unless with the express written permission of the owner of such right, (c) contains a virus, bug, worm or other harmful item or programme, or (d) is used to unlawfully collude against another person in restraint of trade or competition.
            </p>
            <p className="text-slate-700 font-semibold pt-1">
              You shall be solely liable for any damages resulting from any infringement of copyright, trademark, or other proprietary right, or any other harm resulting from your use of this site.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'age-responsibility',
      title: 'Age & Responsibility',
      icon: Award,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm">
          <p>
            If you use this site, you alone are responsible for maintaining the confidentiality of your account information and your password/s. You agree to accept responsibility for all activities that occur under your account or password.
          </p>
          <p>
            You represent that you are of age prescribed by law to be eligible to enter into contract, and use this to create binding reciprocal legal obligations, and are capable, ready and willing to discharge any liability you may incur as a result of the use of this site. You understand that you are financially responsible for all uses of this site by you and those using your login information.
          </p>
        </div>
      ),
    },
    {
      id: 'accuracy-of-information',
      title: 'Accuracy of Information',
      icon: HelpCircle,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm">
          <p>
            <strong>MBTA BUSINESS PRIVATE LIMITED</strong> does not warrant or guarantee the accuracy or completeness of the information provided on this Website. Under no circumstances will <strong>MBTA BUSINESS PRIVATE LIMITED</strong> be liable for any loss or direct, indirect, incidental, special or consequential damages caused by reliance on this information.
          </p>
          <p>
            The information on this Website may be changed or updated without notice. <strong>MBTA BUSINESS PRIVATE LIMITED</strong> may also make improvements and/or changes in the products, services and/or programs described on this site at any time without notice.
          </p>
        </div>
      ),
    },
    {
      id: 'confidentiality',
      title: 'Confidentiality',
      icon: Lock,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm">
          <p>
            Information concerning <strong>MBTA BUSINESS PRIVATE LIMITED</strong> or any of its subsidiaries, their employees, customers, agents, suppliers, franchisees, affiliates or others on whom data is collected, stored, or processed is the property of <strong>MBTA BUSINESS PRIVATE LIMITED</strong> and is confidential except for the necessary disclosures required by law.
          </p>
        </div>
      ),
    },
    {
      id: 'copyright-policy',
      title: 'Copyright Policy & Scraping Prohibition',
      icon: Scale,
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-sm">
          <p>
            <strong>MBTA BUSINESS PRIVATE LIMITED</strong> holds the copyright in respect of this site, and the content provided in this site, including the text, graphics, button icons, audio and video clips, digital downloads, data compilations and software, may not be copied, reproduced, republished, uploaded, posted, transmitted or distributed without the written permission of <strong>MBTA BUSINESS PRIVATE LIMITED</strong>, and/or its third party providers and distributors, except that you may download, display and print the materials presented on this site for your personal, non-commercial use only.
          </p>
          <div className="bg-amber-50/80 border border-amber-200/90 rounded-2xl p-4 text-xs text-amber-950 font-medium space-y-1.5">
            <p><strong>Robot &amp; Spider Restriction:</strong> You may not use any &quot;robot,&quot; &quot;spider&quot; or other automatic device, or a program, algorithm or methodology having similar processes or functionality, or any manual process, to monitor or copy any of the Web pages, data or content found on this site, in any case without the prior written permission of MBTA BUSINESS PRIVATE LIMITED.</p>
            <p>You agree that you will not transmit or otherwise transfer any Web pages, data or content found on this site to any other computer, server, Web site, or other medium for mass distribution or for use in any commercial enterprise.</p>
          </div>
          <p className="text-xs text-slate-600">
            Unauthorized use of this site and/or the materials contained on this site may violate applicable copyright, trademark or other intellectual property laws or other laws. You must retain all copyright and trademark notices, including any other proprietary notices, contained in the materials, and you must not alter, obscure or obliterate any of such notices. The use of such materials on any other Web site or in any environment of networked computers is prohibited.
          </p>
        </div>
      ),
    },
    {
      id: 'enforceability-security',
      title: 'Enforceability & Security Warnings',
      icon: AlertTriangle,
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
          <div>
            <h5 className="font-bold text-slate-900 mb-1">Enforceability of these Provisions</h5>
            <p>
              Should any of these terms and conditions be held invalid, that invalid provision shall be construed to be consistent with the applicable law, and in manner so as to remain consistent with the original intent of <strong>MBTA BUSINESS PRIVATE LIMITED</strong>. Provisions not otherwise held invalid shall remain in force.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs">
            <h5 className="font-bold text-slate-900 mb-1">Security Warnings</h5>
            <p className="text-slate-600">
              It is up to you to take precautions to ensure that whatever you select for your use is free of such items as viruses, worms, Trojan horses, malicious codes and other items of a destructive nature. In no event will <strong>MBTA BUSINESS PRIVATE LIMITED</strong> be liable to any party for any loss or direct, indirect, incidental, special or consequential damages caused by use of this website, or any other hyperlinked or interfaced website or due to accessing data residing on third party servers not belonging to <strong>MBTA BUSINESS PRIVATE LIMITED</strong>.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'products-services',
      title: 'Products & Services Terms',
      icon: Building2,
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
          <p>
            Please Note that none of the information contained in this Website should be viewed as an offer to sell or as a solicitation to purchase any of our products or services. Rather, the information on our products and services is provided to you so that you can learn what products <strong>MBTA BUSINESS PRIVATE LIMITED</strong> generally offers. The products and service statements on this Website are for general description purposes only. Furthermore, not all the products or services are available in every state or country. Send us a message via our Contact us, we will supply you with details regarding terms and conditions, exclusions, products, and services applicable to you.
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs space-y-1">
              <span className="font-bold text-slate-900 block">Hotels:</span>
              <p className="text-slate-600">
                While booking a hotel on our site please carefully go through the fact sheet in details to ensure that the amenities present are as per your requirement. <strong>MBTA BUSINESS PRIVATE LIMITED</strong> generally updates all these fact sheets however it is dependent on the hotel to provide updated information. Renovation at hotels is normally undertaken at sole discretion of hotels and not necessarily is informed to us. In case of any dispute <strong>MBTA BUSINESS PRIVATE LIMITED</strong> shall not be liable for a disruption in information.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs space-y-1">
              <span className="font-bold text-slate-900 block">Sightseeing:</span>
              <p className="text-slate-600">
                You have a choice of seat in coach sightseeing and private sightseeing tours. Please choose the same carefully. Panoramic tours do not allow you to stop at the site of the attractions. You will have to follow a schedule. Entrances to attractions are not included in city tours unless specified.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs space-y-1">
              <span className="font-bold text-slate-900 block">Airlines:</span>
              <p className="text-slate-600">
                You have a choice of full service and low cost airline options. Low cost airlines do not have all services available on board hence please choose the airlines carefully before booking. Kindly go through the fare rules and also select your class of travel. There are paper tickets and/or e-tickets that will be provided to you. Both are valid to travel by the airlines. However certain airlines do not entertain e-tickets. In such cases you will be issued paper tickets. We are only an intermediary party hence cannot be held responsible for any delay or cancellation of flight or change of route - a decision taken by the airline. You will be subject to all terms and conditions as per the airlines.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs space-y-1">
              <span className="font-bold text-slate-900 block">Holidays:</span>
              <p className="text-slate-600">
                Please refer to inclusions and exclusions carefully before booking. You can customize your holiday completely on our site if our packages do not meet your requirements.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'baggage-insurance',
      title: 'Baggage, Health and Insurance & Professional Advice',
      icon: Luggage,
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
          <div>
            <h5 className="font-bold text-slate-900 mb-1">Baggage Policy</h5>
            <p className="text-xs text-slate-600">
              You will have to limit yourself as per normal baggage policy of the airlines in the respective class that you have chosen to fly. Any excess baggage that you carry shall remain your responsibility. Any loss of baggage by the airlines or the passenger will be the sole responsibility of the airline and the passenger. Normally economy class 20kgs is permitted however if you are traveling to US/ Canada you are permitted to carry 2 pieces as check in and 1 piece as cabin baggage. You are requested to kindly refer to the baggage rules of the individual airlines as the same gets updated from time to time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 bg-emerald-50/70 border border-emerald-200/80 rounded-xl">
              <span className="font-bold text-emerald-950 block mb-1">Health and Insurance</span>
              <p className="text-emerald-900">
                It is advisable that the passenger acquires adequate insurance cover to secure their life health and property. You can purchase the same from our site. Your health and good life is of utmost importance to us.
              </p>
            </div>
            <div className="p-3.5 bg-blue-50/70 border border-blue-200/80 rounded-xl">
              <span className="font-bold text-blue-950 block mb-1">Professional Advice Disclaimer</span>
              <p className="text-blue-900">
                The information provided on this site is distributed with the understanding that <strong>MBTA BUSINESS PRIVATE LIMITED</strong> is not providing professional advice of any type. If you have a question relating to law, tax or financial planning, please seek the advice of a qualified professional in the relevant field.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'warranties-payments',
      title: 'Warranties & Payments Protocol',
      icon: Lock,
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
          <div>
            <h5 className="font-bold text-slate-900 mb-1">Warranties Disclaimer</h5>
            <p className="text-xs text-slate-600">
              <strong>MBTA BUSINESS PRIVATE LIMITED</strong> specifically disclaims all warranties with respect to this Web site or your use thereof, express, implied, or otherwise, including without limitation, all warranties of merchantability and fitness for a particular purpose. <strong>MBTA BUSINESS PRIVATE LIMITED</strong> shall not be liable for any damages resulting from the use or misuse of this site or the information on this site.
            </p>
          </div>

          <div className="bg-orange-50/80 border border-orange-200 rounded-xl p-4 text-xs text-orange-950 space-y-2 font-medium">
            <h5 className="font-bold uppercase tracking-wider text-orange-900">Secure Payments Protocol</h5>
            <p>
              All online payments that happen for any of the products booked via www.MBTA BUSINESS PRIVATE LIMITED.com site are secure. <strong>MBTA BUSINESS PRIVATE LIMITED</strong> does not store the Credit card details of any customer in their database or in any data backup system or retrieval systems. Once you are ready to transact you are transferred to the bank site. The card details are captured on the credit card site and not ours hence we cannot be held responsible for any misuse of credit card what so ever.
            </p>
            <p>
              Incase you are making the payment through the demand draft or cheque- the same needs to be drawn in the name of <strong>&quot;MBTA BUSINESS PRIVATE LIMITED,&quot;</strong>. If you choose to pay at our Collection centers - you can opt for that option also.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'refund-terms',
      title: 'Refund Determination & Timeline',
      icon: Clock,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm">
          <p>
            <strong>MBTA BUSINESS PRIVATE LIMITED</strong> reserves the right to determine the amount of refund value in case of cancellation and amendments. The decision on the quantum of refund will be final as that made by <strong>MBTA BUSINESS PRIVATE LIMITED</strong>.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="font-bold text-slate-800 block mb-1">Payee Name</span>
              <p className="text-slate-600">The refund will be made in the name of the client. In case you have booked through a Travel Agent or a Franchisee, we will still make the refund in the passenger&apos;s name.</p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="font-bold text-slate-800 block mb-1">Processing Duration</span>
              <p className="text-slate-600">It will take at most <strong>15 days</strong> to process refunds for all services. There will be no refund for unutilised services unless specified.</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 italic">
            All cancellation and amendment charges will be applicable as per principles policies on which MBTA BUSINESS PRIVATE LIMITED has no control and you will be subjected to it.
          </p>
        </div>
      ),
    },
    {
      id: 'governing-injunctive-privacy',
      title: 'Governing Law, Injunctive Relief, Privacy & Termination',
      icon: Scale,
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
          <div>
            <h5 className="font-bold text-slate-900 mb-1">Governing Law &amp; Arbitration</h5>
            <p className="text-xs text-slate-600">
              All legal disputes will be settled under the laws of Indian courts subject to laws of Republic of India. In the event of any dispute of whatever nature, arising under this Agreement, such dispute shall be settled through good faith negotiation among the parties. In case such dispute cannot be resolved by negotiation within 30 days such dispute shall be referred to binding arbitration in accordance with the provisions of the Arbitration and Conciliation Act 1996. The decision of the arbitral tribunal shall be final and binding upon the parties. In case of the dispute requiring intervention of courts, courts alone shall have exclusive jurisdiction.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs space-y-1">
            <h5 className="font-bold text-slate-900">Injunctive Relief</h5>
            <p className="text-slate-600">
              You acknowledge that a violation or attempted violation of any of this User Agreement and these terms and conditions will cause such damage to <strong>MBTA BUSINESS PRIVATE LIMITED</strong> as will be irreparable, the exact amount of which would be difficult to ascertain and for which there will be no adequate remedy at law. Accordingly, you agree that <strong>MBTA BUSINESS PRIVATE LIMITED</strong> shall be entitled as a matter of right to an injunction issued by any court of competent jurisdiction, restraining such violation or attempted violation of these terms and conditions by You, or Your affiliates, partners, or agents, as well as recover from You any and all costs and expenses sustained or incurred by <strong>MBTA BUSINESS PRIVATE LIMITED</strong> in obtaining such an injunction, including, without limitation, reasonable attorney&apos;s fees. You agree that no bond or other security shall be required in connection with such injunction.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs space-y-1">
            <h5 className="font-bold text-slate-900">Privacy Policy Incorporation</h5>
            <p className="text-slate-600">
              You have read the <strong>MBTA BUSINESS PRIVATE LIMITED</strong> <a href="#privacy" className="text-orange-600 underline font-semibold hover:text-orange-700">Privacy Policy</a>, the terms of which are incorporated herein, and agree that the terms of such policy are reasonable. You consent to the use of your personal information by <strong>MBTA BUSINESS PRIVATE LIMITED</strong> and/or its third party providers and distributors in accordance with the terms of and for the purposes set forth in the Privacy Policy.
            </p>
            <p className="text-slate-600 pt-1">
              <strong>MBTA BUSINESS PRIVATE LIMITED</strong> prompts all its users to register at one time. The details captured during registration are purely to provide better service in future. <strong>MBTA BUSINESS PRIVATE LIMITED</strong> will not be sharing these details with any other third party.
            </p>
          </div>

          <div className="p-3.5 bg-red-50/70 border border-red-200/80 rounded-xl text-xs space-y-1">
            <h5 className="font-bold text-red-950">Termination</h5>
            <p className="text-red-900">
              <strong>MBTA BUSINESS PRIVATE LIMITED</strong> may terminate this User Agreement and these terms and conditions and/or the provision of any of the services at any time for any reason, including any improper use of this site or your failure to comply with these terms and conditions. Such termination shall not affect any right to relief to which <strong>MBTA BUSINESS PRIVATE LIMITED</strong> and its third party providers and distributors may be entitled, at law or in equity. Upon termination of this User Agreement and these terms and conditions, all rights granted to you will terminate and revert to <strong>MBTA BUSINESS PRIVATE LIMITED</strong> and its third party providers or distributors, as applicable.
            </p>
          </div>
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
            <span className="font-bold text-orange-600">User Agreement</span>
          </div>

          <div className="flex items-center gap-4 text-slate-600">
            <a href="mailto:support@mbtravels.in" className="flex items-center gap-1.5 hover:text-orange-600 font-semibold transition-colors">
              <Mail size={13} className="text-orange-600" />
              <span>support@mbtravels.in</span>
            </a>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
              <ShieldCheck size={13} className="text-emerald-600" />
              Legally Binding Agreement
            </span>
          </div>
        </div>
      </div>

      {/* ── HERO BANNER: USER AGREEMENT ── */}
      <section className="relative py-12 lg:py-16 bg-gradient-to-b from-white via-orange-50/20 to-slate-50 border-b border-slate-200/70 overflow-hidden">
        <div className="absolute top-0 right-10 w-[450px] h-[450px] bg-orange-400/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-amber-400/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-xs font-bold text-orange-800 shadow-2xs mb-4">
              <FileCheck2 size={14} className="text-orange-600" />
              <span>MBTA BUSINESS PRIVATE LIMITED · USER AGREEMENT &amp; CODE OF CONDUCT</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-4">
              User Agreement
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              The terms and conditions governing your use of this Website, platform services, bookings, digital payments, and statutory legal rights.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600">
              <span className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <Building2 size={13} className="text-orange-600" />
                MBTA BUSINESS PRIVATE LIMITED
              </span>
              <span className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <Scale size={13} className="text-emerald-600" />
                Arbitration Act 1996 Governed
              </span>
              <span className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <Lock size={13} className="text-blue-600" />
                Zero Card Storage Assurance
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
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Quick Agreement Index</p>
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
                  Legal Inquiries?
                </p>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Have questions about this User Agreement or booking terms? Reach out to our legal desk:
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

