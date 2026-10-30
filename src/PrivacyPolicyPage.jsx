import { useState } from 'react';
import {
  ShieldCheck, Lock, Eye, Mail, Phone, MapPin, ChevronRight,
  ArrowRight, CheckCircle, Sparkles, Server, Cookie, Send,
  FileText, AlertTriangle, Building2, UserCheck, Shield, HelpCircle
} from 'lucide-react';

export default function PrivacyPolicyPage({ onNavigateHome, onNavigateTravel, onNavigateRecharge }) {
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    {
      id: 'preamble',
      title: 'Privacy Commitment & Member Benefits',
      icon: ShieldCheck,
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-sm">
          <p>
            As a registered member of <strong>MBTA BUSINESS PRIVATE LIMITED</strong>, you will be entitled to savings and benefits on airfares, hotel reservations, holiday packages and car rentals, among other travel services and Bill payment utility. In addition, look forward to receiving monthly newsletters and exclusive promotions offering special deals.
          </p>
          <p>
            That&apos;s why we&apos;ve provided this Privacy Policy, which sets forth our policies regarding the collection, use and protection of the personal information of those using the <strong>MBTA BUSINESS PRIVATE LIMITED</strong> website. Personal information means information that can be linked to a specific individual, such as name, address, telephone number, e-mail address, and credit card number.
          </p>
          <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-orange-950 font-medium text-xs sm:text-sm flex items-start gap-3">
            <Shield className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-orange-900 mb-0.5">Strict Zero-Sale Guarantee</p>
              <p className="text-orange-800">
                We encourage you to review our Privacy Policy, and become familiar with it, but you should know that we do <strong>not</strong> sell or rent our customers&apos; personal information to third parties.
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 italic">
            Please note that we review our Privacy Policy from time to time, and we may make periodic changes to the policy in connection with that review. Therefore, you may wish to bookmark this page and/or periodically review this page to make sure you have the latest version. Regardless of later updates, we will abide by the privacy practices described to you in this Privacy Policy at the time you provided us with your personal information.
          </p>
        </div>
      ),
    },
    {
      id: 'core-questions',
      title: 'Privacy Policy Structure & Core Topics',
      icon: HelpCircle,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm">
          <p className="font-semibold text-slate-900">
            This Privacy Policy explains the following key areas in detail:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm">
            {[
              'What personal information we collect from you and how we use it',
              'With whom (if anyone) your personal information is shared',
              'How you can opt-out of receiving our promotional e-mails',
              'What safeguards we have in place to protect your personal information',
              'Other important information you should know about your privacy',
              'Designated Grievance Officer and grievance redressal channels'
            ].map((topic, i) => (
              <li key={i} className="flex items-start gap-2 bg-slate-50 border border-slate-200/80 rounded-xl p-3">
                <CheckCircle size={15} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="font-medium text-slate-800">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 'information-collected',
      title: 'What Personal Information We Collect & How We Use It',
      icon: UserCheck,
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
          <p>
            When browsing our site, you are not required to provide any personal information unless and until you choose to make a purchase or sign up for one of our e-mail newsletters or other services as described below.
          </p>

          <div className="space-y-3.5 pt-1">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                Making a Purchase
              </h5>
              <p className="text-xs sm:text-sm text-slate-600">
                In order to purchase travel, utility and/or related services through our site, you must provide us with certain personal information such as your name, credit card number and expiration date, credit card billing address, telephone number, e-mail address and the name or names of the person(s) traveling (if not you). We may also ask you for other personal information, such as your frequent traveler numbers.
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                We require this information to process, fulfill and confirm your reservations / bill payment and transactions and keep you informed of each transaction&apos;s status. If you are making a reservation / bill payment for one or more, you must confirm and represent that each of these other travelers have agreed, in advance, that you may disclose their personal information to us.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                Member Registration
              </h5>
              <p className="text-xs sm:text-sm text-slate-600">
                If you choose to become a registered member of <strong>MBTA BUSINESS PRIVATE LIMITED</strong> site, you must provide your name, address, telephone number, e-mail address, a unique login name, password, password validation, and a password hint to help you remember your password. This information is collected on the registration form for several reasons including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-600 pl-2">
                <li>Personal identification</li>
                <li>To complete air, hotel, car, utility bill payment and other reservations</li>
                <li>To allow us to contact you for customer service purposes, if necessary</li>
                <li>To customize the content of our site to strive to meet your specific needs; and/or</li>
                <li>To make product or other improvements to our site.</li>
              </ul>
              <p className="text-xs text-slate-600 pt-1">
                In addition, we need your e-mail address to confirm your new member registration and each reservation you transact on our site. As a <strong>MBTA BUSINESS PRIVATE LIMITED</strong> site member you will also occasionally receive updates from us about fare sales in your area, special offers, new <strong>MBTA BUSINESS PRIVATE LIMITED</strong> services, and other noteworthy items. However, you may choose at any time to no longer receive these types of e-mail messages. Please see our Opt-Out Policy described below for details.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                Member Profile
              </h5>
              <p className="text-xs sm:text-sm text-slate-600">
                As a <strong>MBTA BUSINESS PRIVATE LIMITED</strong> site member, you can choose to complete your online profile by providing us with travel preferences, frequent-traveler or affinity numbers, credit card billing information, paper ticket delivery address, and other personal information. This information is primarily used to assist you in making reservations quickly without having to type in the same information repeatedly. For example, you can store your airline frequent-flyer numbers so that when you make a reservation on that airline, we may automatically pre-fill the frequent-flyer number input box for you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  Online Surveys
                </h5>
                <p className="text-xs text-slate-600">
                  <strong>MBTA BUSINESS PRIVATE LIMITED</strong> values opinions and comments from members, so we frequently conduct online surveys. Participation in these surveys is entirely optional. Typically, the information is aggregated, and used to make improvements to the site and its services and to develop appealing content, features and promotions for site members. Survey participants are anonymous unless otherwise stated in the survey.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  Promotions &amp; Sweepstakes
                </h5>
                <p className="text-xs text-slate-600">
                  <strong>MBTA BUSINESS PRIVATE LIMITED</strong> frequently sponsors promotions and sweepstakes to give site members the opportunity to win great travel and travel-related prizes. Information collected by us for such activities may include contact information and survey questions. We use contact information to notify contest winners and survey information to develop promotions and product improvements.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                Other Services &amp; Inquiries
              </h5>
              <p className="text-xs sm:text-sm text-slate-600">
                From time to time we may add or enhance services available on the <strong>MBTA BUSINESS PRIVATE LIMITED</strong> site. To the extent these services are provided, and used by you, we will use the information you provide to facilitate the service requested. For example, if you email us with a question, we will use your email address, name, nature of the question, etc. to respond to your question. We may also store such information to assist us in making the site better and easier to use.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'session-data',
      title: 'Automatic Logging of Session Data',
      icon: Server,
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-sm">
          <p>
            We automatically log generic information about your computer&apos;s connection to the Internet, which we call &quot;session data&quot;, that is anonymous and not linked to any personal information. Session data consists of things such as IP address, operating system and type of browser software being used and the activities conducted by the user while on <strong>MBTA BUSINESS PRIVATE LIMITED</strong>.
          </p>
          <p>
            An IP address is a number that lets computers attached to the internet, such as our web servers, know where to send data back to the user, such as the pages of the site the user wishes to view. We collect session data because it helps us analyze such things as what items visitors are likely to click on most, the way visitors are clicking through the site, how many visitors are surfing to various pages on the site, how long visitors to the site are staying and how often they are visiting.
          </p>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 space-y-2">
            <p className="font-semibold text-slate-900">Diagnostics &amp; System Administration</p>
            <p>
              It also helps us diagnose problems with our servers and lets us better administer our systems. Although such information does not identify any visitor personally, it is possible to determine from an IP address a visitor&apos;s Internet Service Provider (ISP), and the approximate geographic location of his or her point of connectivity.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking Technologies',
      icon: Cookie,
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-sm">
          <p>
            &quot;Cookies&quot; are small pieces of information that are stored by your browser on your computer&apos;s hard drive. There are many myths circulating about cookies, but you should know that cookies are only read by the server that placed them, and are unable to do such things as run programs on your computer, plant viruses or harvest your personal information. The use of cookies is very common on the Internet and <strong>MBTA BUSINESS PRIVATE LIMITED</strong>&apos;s use of cookies is similar to that of such sites as Expedia and Orbitz, as well as Yahoo!, CNN.com and other reputable online companies.
          </p>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 font-medium text-xs sm:text-sm">
            <strong>First and foremost:</strong> You can rest assured that no personally identifiable information (&quot;PII&quot;) about you (e.g., name, address, etc.) is gathered or stored in the cookies placed by the <strong>MBTA BUSINESS PRIVATE LIMITED</strong> site and, as a result, none can be passed on to any third parties.
          </div>

          <p>
            Cookies allow us to serve you better and more efficiently, and to personalize your experience at our site. <strong>MBTA BUSINESS PRIVATE LIMITED</strong> uses cookies to personalize your experience on the site, and with respect to advertisements. As to the former, these types of cookies allow you to log in without having to type your login name each time (only your password is needed). We may also use such cookies to display an advertisement to you while you are on the site or to send you a &quot;Best Day to Buy&quot; email (or similar emails — assuming you have not opted out of receiving such emails) focusing on destinations in which we think you might be interested. None of this information is passed to any third party, and is used solely by us to provide you with a better user experience.
          </p>

          <div className="space-y-2.5 text-xs text-slate-600 bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
            <h5 className="font-bold text-slate-900 text-sm">Third-Party &amp; Ad Server Cookies</h5>
            <p>
              A cookie may also be placed by our advertising server. Such cookies are used only for purposes of tracking the effectiveness of advertising served by us on our site and no PII is gathered from you by the use of these cookies, nor is this information shared with any third parties.
            </p>
            <p>
              Similarly, a cookie may be placed by our third-party advertising companies. These companies may use aggregated statistics about your visits to this and other websites in order to provide advertisements about travel-related goods and services that you may be interested in. The information they collect does not include your PII. The information is anonymous, and does not link online actions to an identifiable person.
            </p>
          </div>

          <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
            <h5 className="font-bold text-slate-900 text-sm">Controlling Cookies in Your Browser</h5>
            <p>
              Most Web browsers automatically accept cookies. Of course, by changing the options on your web browser or using certain software programs, you can control how and whether cookies will be accepted by your browser. <strong>MBTA BUSINESS PRIVATE LIMITED</strong> supports your right to block any unwanted Internet activity, especially that of unscrupulous websites.
            </p>
            <p className="font-semibold text-slate-800">
              However, blocking <strong>MBTA BUSINESS PRIVATE LIMITED</strong> cookies may disable certain features on the site, and may make it impossible to purchase or use certain services. Please note that it is possible to block cookie activity from certain websites while permitting cookies from sites you trust, like <strong>MBTA BUSINESS PRIVATE LIMITED</strong>.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'sharing',
      title: 'With Whom Your Personal Information Is Shared',
      icon: Send,
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-sm">
          <p>
            When you reserve or purchase travel services through <strong>MBTA BUSINESS PRIVATE LIMITED</strong>, we must provide certain of your personal information to the airline, hotel, car-rental agency, travel agency or other involved third party to enable the successful fulfillment of your travel arrangements.
          </p>
          <div className="p-4 rounded-2xl bg-orange-50/80 border border-orange-200 text-orange-950 text-xs sm:text-sm font-medium">
            However, we do <strong>not</strong> sell or rent individual customer names or other personal information to third parties.
          </div>
          <p>
            We use non-personally identifiable information in aggregate form to build higher quality, more useful online services by performing statistical analysis of the collective characteristics and behavior of our customers and visitors, and by measuring demographics and interests regarding specific areas of the <strong>MBTA BUSINESS PRIVATE LIMITED</strong> site. We may provide anonymous statistical information based on this data to suppliers, advertisers, affiliates and other current and potential business partners. We may also use such aggregate data to inform these third parties as to the number of people who have seen and clicked on links to their websites.
          </p>
          <p className="text-xs text-slate-600 bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
            Occasionally, <strong>MBTA BUSINESS PRIVATE LIMITED</strong> will hire a third party to act on our behalf for projects such as market-research surveys and contest-entry processing and will provide information to these third parties specifically for use in connection with these projects. The information we provide to such third parties is protected by a confidentiality agreement and is to be used solely for completing the specific project.
          </p>
        </div>
      ),
    },
    {
      id: 'opt-out',
      title: 'Opt-Out Policy for Promotional Communications',
      icon: Mail,
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-sm">
          <p>
            At any time, you may unsubscribe from our Real Deals, Insider, or other newsletter or similar services through the &quot;My Account&quot; link on the <strong>MBTA BUSINESS PRIVATE LIMITED</strong> site home page.
          </p>
          <p>
            As a member or promotion/sweepstakes entrant, you will occasionally receive e-mail updates from us about fare sales in your area, special offers, new <strong>MBTA BUSINESS PRIVATE LIMITED</strong> services, and other noteworthy items. We hope you will find these updates interesting and informative.
          </p>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs sm:text-sm">
            <p className="font-semibold text-slate-900">How to Unsubscribe:</p>
            <p className="text-slate-600">
              If you would rather not receive promotional updates, please click on the &quot;unsubscribe&quot; link or follow the instructions in each e-mail message, or send an email directly to:
            </p>
            <a href="mailto:support@mbtravels.in" className="inline-block font-bold text-orange-600 hover:underline">
              support@mbtravels.in
            </a>
          </div>
          <p className="text-xs text-slate-500 italic">
            <strong>MBTA BUSINESS PRIVATE LIMITED</strong> reserves the right to limit membership to those who will accept e-mails. Members will be notified via e-mail prior to any actions taken.
          </p>
        </div>
      ),
    },
    {
      id: 'safeguards',
      title: 'Security Safeguards & SSL Encryption',
      icon: Lock,
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-sm">
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
            <h5 className="font-bold text-emerald-900 text-sm flex items-center gap-2">
              <Lock size={16} className="text-emerald-700" />
              VeriSign SSL Encryption Standards
            </h5>
            <p className="text-xs sm:text-sm text-emerald-900">
              All payments and transmissions on the <strong>MBTA BUSINESS PRIVATE LIMITED</strong> site are VeriSign SSL secured.
            </p>
          </div>
          <p>
            This means all personal information you provide to <strong>MBTA BUSINESS PRIVATE LIMITED</strong> is transmitted using SSL (Secure Socket Layer) encryption. SSL is a proven coding system that lets your browser automatically encrypt, or scramble, data before you send it to us. The same process happens when you make travel purchases on the <strong>MBTA BUSINESS PRIVATE LIMITED</strong> site.
          </p>
        </div>
      ),
    },
    {
      id: 'other-information',
      title: 'External Links, Account Secrecy & Legal Disclosures',
      icon: Eye,
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-sm">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <h5 className="font-bold text-slate-900 text-sm">Links to Other Websites</h5>
            <p className="text-xs sm:text-sm text-slate-600">
              The <strong>MBTA BUSINESS PRIVATE LIMITED</strong> site contains links to other websites. Please note that when you click on one of these links, you are entering another website for which <strong>MBTA BUSINESS PRIVATE LIMITED</strong> has no responsibility. We encourage you to read the privacy statements of all such sites as their policies may be materially different from this Privacy Policy.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <h5 className="font-bold text-slate-900 text-sm">Password &amp; Credential Secrecy</h5>
            <p className="text-xs sm:text-sm text-slate-600">
              Of course, you are solely responsible for maintaining the secrecy of your passwords, and your <strong>MBTA BUSINESS PRIVATE LIMITED</strong> site membership account information. Please be very careful, responsible, and alert with this information, especially whenever you&apos;re online.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <h5 className="font-bold text-slate-900 text-sm">Law Enforcement &amp; Legal Disclosures</h5>
            <p className="text-xs sm:text-sm text-slate-600">
              In addition to the circumstances described above, <strong>MBTA BUSINESS PRIVATE LIMITED</strong> may disclose member information if required to do so by law, court order, as requested by other government or law enforcement authority, or in the good faith belief that disclosure is otherwise necessary or advisable including, without limitation, to protect the rights or properties of <strong>MBTA BUSINESS PRIVATE LIMITED</strong> or any or all of its affiliates, associates, employees, directors or officers or when we have reason to believe that disclosing the information is necessary to identify, contact or bring legal action against someone who may be causing interference with our rights or properties, whether intentionally or otherwise, or when anyone else could be harmed by such activities.
            </p>
            <p className="text-xs text-slate-600 pt-1">
              In addition, if <strong>MBTA BUSINESS PRIVATE LIMITED</strong> or substantially all of its assets are acquired, customer information will most likely also be transferred in connection with such acquisition.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'grievance',
      title: 'Effective Date, Inquiries & Grievance Officer',
      icon: Building2,
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Policy Inception</p>
            <p className="font-semibold text-slate-900">
              This policy is effective as of <strong>April 15, 2015</strong>.
            </p>
            <p className="text-xs text-slate-600 pt-1">
              Any material changes in the way <strong>MBTA BUSINESS PRIVATE LIMITED</strong> uses personal information will be described in future versions of this Privacy Statement. Of course, you may always submit concerns regarding our Privacy Statement or our privacy practices via email to{' '}
              <a href="mailto:support@mbtravels.in" className="font-bold text-orange-600 hover:underline">
                support@mbtravels.in
              </a>
              . Please reference the privacy policy in your subject line. <strong>MBTA BUSINESS PRIVATE LIMITED</strong> will attempt to respond to all reasonable concerns or inquiries within <strong>five business days</strong> of receipt.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-200/90 space-y-3">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-orange-600" />
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Designated Grievance Officer</h5>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Any complaints, abuse or concerns with regards to content, comment or breach of these Privacy Policies shall be immediately informed to the designated Grievance Officer as mentioned below in writing or through email signed with electronic signature to:
            </p>
            <div className="p-3.5 rounded-xl bg-white border border-orange-200/80 space-y-1 text-xs">
              <p className="font-bold text-slate-900">MBTA BUSINESS PRIVATE LIMITED</p>
              <p className="text-slate-600">
                Email:{' '}
                <a href="mailto:support@mbtravels.in" className="font-bold text-orange-600 hover:underline">
                  support@mbtravels.in
                </a>
              </p>
              <p className="text-slate-600">
                Official Address: MB Travels, Bus Stand Road, Athani, Karnataka 591304, India
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const filteredSections = sections.filter(
    (sec) =>
      sec.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sec.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-20 sm:pt-24">

      {/* ── BREADCRUMB BAR ── */}
      <div className="bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <button
              onClick={onNavigateHome}
              className="hover:text-orange-600 transition-colors font-medium cursor-pointer"
            >
              Home
            </button>
            <ChevronRight size={12} className="text-slate-400" />
            <span>Legal &amp; Policies</span>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="font-bold text-orange-600">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* ── HERO BANNER: PRIVACY POLICY ── */}
      <section className="bg-gradient-to-b from-white via-orange-50/20 to-slate-50 border-b border-slate-200/80 pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck size={14} className="text-orange-600" />
              <span>MBTA BUSINESS PRIVATE LIMITED · OFFICIAL PRIVACY POLICY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We value your trust and are committed to safeguarding your personal information. Learn how we collect, handle, protect, and fulfill your travel and utility payment requests while upholding strict non-disclosure standards.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Effective Date: April 15, 2015
              </span>
              <span>•</span>
              <span>VeriSign SSL 256-bit Encryption</span>
              <span>•</span>
              <span>Zero Customer Data Rental / Sale</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT AREA WITH STICKY SIDEBAR ── */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">

            {/* Sidebar Navigation */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 sticky top-24 space-y-4">
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Search Policy</h3>
                <input
                  type="text"
                  placeholder="Filter clauses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full text-xs px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Policy Clauses</h3>
                <nav className="space-y-1 max-h-[50vh] overflow-y-auto pr-1">
                  {filteredSections.map((sec, idx) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block text-xs font-medium text-slate-600 hover:text-orange-600 hover:bg-orange-50 px-3 py-2 rounded-xl transition-colors truncate"
                    >
                      <span className="text-orange-600 font-bold mr-1.5">{idx + 1}.</span>
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Quick Contact Desk */}
              <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200 text-xs space-y-1.5">
                <p className="font-bold text-orange-900 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-orange-600" />
                  Grievance Redressal
                </p>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Have questions or concerns about data privacy? Contact our designated Grievance Officer:
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

              {/* Corporate Legal Entity Card */}
              <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">Operating Entity</p>
                  <h3 className="text-xl font-bold">MBTA BUSINESS PRIVATE LIMITED</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Grievance Desk: support@mbtravels.in | Helpline: +91 7777885526
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

