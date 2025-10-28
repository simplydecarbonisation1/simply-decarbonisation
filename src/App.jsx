import './index.css';
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Leaf, CalendarDays, HandHeart, Globe2, MapPin, Phone, Mail, Youtube, Facebook, Twitter, Languages, ArrowRight, ExternalLink } from "lucide-react";

// --- Simple in-file i18n (English default). 
// NOTE: Mandinka & Wolof strings are placeholders for now; please replace with approved translations.
const strings = {
  en: {
    siteName: "Simply Decarbonisation",
    tagline: "Enabling Environmental Conservation and Protection.",
    missionTitle: "Mission",
    missionText: "To strive for a better planet for our future generations through education, advocacy, and community-led action.",
    visionTitle: "Vision",
    visionText: "Enabling Environmental Conservation and Protection.",
    nav: {
      home: "Home",
      about: "About",
      projects: "Our Work",
      getInvolved: "Get Involved",
      events: "Events",
      resources: "Resources",
      blog: "News",
      contact: "Contact",
      donate: "Donate",
    },
    hero: {
      title: "Share Our Dynamic Planet—Decarbonise Today",
      subtitle:
        "We work with individuals, households, communities, schools, policy makers, and industries to address climate change, biodiversity loss, and environmental justice.",
      ctas: { donate: "Donate", partner: "Partner with Us", learn: "Learn More" },
    },
    stats: {
      title: "What we focus on",
      items: [
        { label: "Afforestation & Rewilding", sub: "Native wild fruits & herbs restoration in The Gambia" },
        { label: "Climate Education", sub: "EN-ROADS workshops & youth champions" },
        { label: "Biodiversity", sub: "Birdlife, primates, and marine protection" },
        { label: "Sustainable Lifestyles", sub: "Reduce, repair, reuse, recycle" },
      ],
    },
    about: {
      title: "About Us",
      body:
        "Simply Decarbonisation (SD) is a non-governmental organisation advancing climate action and environmental stewardship. We complement UN Millennium & Sustainable Development Goals and champion bottom-up community engagement in The Gambia and beyond.",
      registration: "NGO Registration No. 19690 (The Gambia)",
      teamTitle: "Our Team",
      team: [
        {
          name: "Mr Samba Darbo (Founder)",
          role: "Chairperson",
          bio: "BSc Environmental Management & Technology; IATA/UFTAA Travel Consultant; Ornithologist; EN‑ROADS Facilitator; Climate activist.",
        },
        {
          name: "Dr Yankuba Sanneh",
          role: "Secretary",
          bio: "Medical Doctor; Human & Environmental Rights activist.",
        },
        {
          name: "Mrs Bintou Ceesay",
          role: "Treasurer",
          bio: "Human rights defender; Accounts operative.",
        },
        {
          name: "Abdou Manneh",
          role: "Member",
          bio: "BSc Electrical Engineering; Green energy consultant.",
        },
        {
          name: "Famara Darbo",
          role: "Member",
          bio: "Local Coordinator; Sport fishing expert (Gambia/Senegal/Guinea‑Bissau).",
        },
        {
          name: "Oumie Bah",
          role: "Member",
          bio: "Member.",
        },
      ],
    },
    projects: {
      title: "Our Work",
      cards: [
        {
          title: "Afforestation & Native Species Rewilding",
          text:
            "We collect seeds and seedlings (Casamance, Guinea‑Bissau, Abuko Nature Reserve) to restore native wild fruits and herbs that support primates, birds, and food culture.",
        },
        {
          title: "Climate Advocacy & EN‑ROADS Training",
          text:
            "We facilitate EN‑ROADS interactive workshops to empower communities and decision makers with science-based climate solutions.",
        },
        {
          title: "Youth Engagement & Capacity Building",
          text:
            "Toolbox talks in schools and villages, tailored programs (e.g., waste management), and grassroots leadership development.",
        },
        {
          title: "Biodiversity & Conservation",
          text:
            "Protecting avifauna and remaining primates (e.g., Vervet, Red Colobus, Red Patas), and promoting eco-friendly practices.",
        },
      ],
    },
    involved: {
      title: "Get Involved",
      donateTitle: "Donate",
      donateText:
        "Your support funds tree nurseries, workshops, and community programs. Choose a method below.",
      partnerTitle: "Partner with Us",
      partnerText:
        "We co-create projects with NGOs, schools, institutions, and businesses. Let’s collaborate for measurable impact.",
      volunteerTitle: "Volunteer",
      volunteerText:
        "Join local tree planting, translation, media, or training support.",
      methods: ["PayPal", "Card (Stripe)", "Bank Transfer"],
    },
    events: {
      title: "Events & Calendar",
      intro:
        "See our upcoming workshops, trainings, and community actions. Use the form below to propose or register for an event.",
    },
    resources: {
      title: "Resources & Media",
      enroads: "Explore the EN‑ROADS simulator",
      gallery: "Featured Media",
    },
    blog: { title: "News & Updates", empty: "No posts yet. Check back soon!" },
    contact: {
      title: "Contact",
      uk: {
        addressTitle: "United Kingdom",
        address: [
          "63 The Birches",
          "Three Bridges",
          "Crawley, West Sussex RH10 1RU",
          "United Kingdom",
        ],
      },
      phone: "+44 7838 783626",
      email: "sam.darbo@yahoo.com",
      socials: { youtube: "YouTube", x: "X (Twitter)", facebook: "Facebook" },
      formTitle: "Send us a message",
    },
    footer: {
      rights: "© ",
    },
  },
  // Placeholders for future translations
  mnk: {
    siteName: "Simply Decarbonisation",
    tagline: "(Mandinka translation placeholder)",
    missionTitle: "(Mission)",
    missionText: "(Mandinka translation placeholder)",
    visionTitle: "(Vision)",
    visionText: "(Mandinka translation placeholder)",
    nav: { home: "Home", about: "About", projects: "Our Work", getInvolved: "Get Involved", events: "Events", resources: "Resources", blog: "News", contact: "Contact", donate: "Donate" },
    hero: { title: "(Mandinka translation placeholder)", subtitle: "(Mandinka translation placeholder)", ctas: { donate: "Donate", partner: "Partner", learn: "Learn More" } },
    stats: { title: "(Focus Areas)", items: [] },
    about: { title: "About Us", body: "(Mandinka translation placeholder)", registration: "NGO Reg No. 19690", teamTitle: "Our Team", team: [] },
    projects: { title: "Our Work", cards: [] },
    involved: { title: "Get Involved", donateTitle: "Donate", donateText: "(Mandinka translation placeholder)", partnerTitle: "Partner with Us", partnerText: "(Mandinka translation placeholder)", volunteerTitle: "Volunteer", volunteerText: "(Mandinka translation placeholder)", methods: ["PayPal", "Card", "Bank"] },
    events: { title: "Events", intro: "(Mandinka translation placeholder)" },
    resources: { title: "Resources", enroads: "EN‑ROADS", gallery: "Media" },
    blog: { title: "News", empty: "(No posts yet)" },
    contact: { title: "Contact", uk: { addressTitle: "United Kingdom", address: [] }, phone: "+44 7838 783626", email: "sam.darbo@yahoo.com", socials: { youtube: "YouTube", x: "X", facebook: "Facebook" }, formTitle: "(Send us a message)" },
    footer: { rights: "© " },
  },
  wlf: {
    siteName: "Simply Decarbonisation",
    tagline: "(Wolof translation placeholder)",
    missionTitle: "(Mission)",
    missionText: "(Wolof translation placeholder)",
    visionTitle: "(Vision)",
    visionText: "(Wolof translation placeholder)",
    nav: { home: "Home", about: "About", projects: "Our Work", getInvolved: "Get Involved", events: "Events", resources: "Resources", blog: "News", contact: "Contact", donate: "Donate" },
    hero: { title: "(Wolof translation placeholder)", subtitle: "(Wolof translation placeholder)", ctas: { donate: "Donate", partner: "Partner", learn: "Learn More" } },
    stats: { title: "(Focus Areas)", items: [] },
    about: { title: "About Us", body: "(Wolof translation placeholder)", registration: "NGO Reg No. 19690", teamTitle: "Our Team", team: [] },
    projects: { title: "Our Work", cards: [] },
    involved: { title: "Get Involved", donateTitle: "Donate", donateText: "(Wolof translation placeholder)", partnerTitle: "Partner with Us", partnerText: "(Wolof translation placeholder)", volunteerTitle: "Volunteer", volunteerText: "(Wolof translation placeholder)", methods: ["PayPal", "Card", "Bank"] },
    events: { title: "Events", intro: "(Wolof translation placeholder)" },
    resources: { title: "Resources", enroads: "EN‑ROADS", gallery: "Media" },
    blog: { title: "News", empty: "(No posts yet)" },
    contact: { title: "Contact", uk: { addressTitle: "United Kingdom", address: [] }, phone: "+44 7838 783626", email: "sam.darbo@yahoo.com", socials: { youtube: "YouTube", x: "X", facebook: "Facebook" }, formTitle: "(Send us a message)" },
    footer: { rights: "© " },
  },
};

const Section = ({ id, children }) => (
  <section id={id} className="py-20 scroll-mt-24">
    <div className="max-w-6xl mx-auto px-4">{children}</div>
  </section>
);

export default function App() {
  const [lang, setLang] = useState("en");
  const t = useMemo(() => strings[lang] || strings.en, [lang]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo placeholder — replace with your SVG/IMG */}
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 grid place-items-center text-white">
              <Leaf className="w-6 h-6" />
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-lg">{t.siteName}</div>
              <div className="text-xs text-slate-500">{t.tagline}</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="hover:text-emerald-700">{t.nav.home}</a>
            <a href="#about" className="hover:text-emerald-700">{t.nav.about}</a>
            <a href="#projects" className="hover:text-emerald-700">{t.nav.projects}</a>
            <a href="#involved" className="hover:text-emerald-700">{t.nav.getInvolved}</a>
            <a href="#events" className="hover:text-emerald-700">{t.nav.events}</a>
            <a href="#resources" className="hover:text-emerald-700">{t.nav.resources}</a>
            <a href="#blog" className="hover:text-emerald-700">{t.nav.blog}</a>
            <a href="#contact" className="hover:text-emerald-700">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="relative">
              <select
                aria-label="Language"
                className="border rounded-xl px-3 py-1 text-sm bg-white"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
              >
                <option value="en">English</option>
                <option value="mnk">Mandinka</option>
                <option value="wlf">Wolof</option>
              </select>
            </div>

            <a
              href="#donate"
              className="hidden md:inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-2xl shadow hover:bg-emerald-700"
            >
              <HandHeart className="w-4 h-4" /> {t.nav.donate}
            </a>
            <button className="md:hidden p-2" onClick={() => setMenuOpen((s) => !s)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
              {[
                ["#home", t.nav.home],
                ["#about", t.nav.about],
                ["#projects", t.nav.projects],
                ["#involved", t.nav.getInvolved],
                ["#events", t.nav.events],
                ["#resources", t.nav.resources],
                ["#blog", t.nav.blog],
                ["#contact", t.nav.contact],
              ].map(([href, label]) => (
                <a key={href} href={href} className="py-2" onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <Section id="home">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              {t.hero.title}
            </h1>
            <p className="mt-4 text-lg text-slate-600">{t.hero.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#donate" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-2xl shadow hover:bg-emerald-700">
                <HandHeart className="w-4 h-4" /> {t.hero.ctas.donate}
              </a>
              <a href="#involved" className="inline-flex items-center gap-2 border px-4 py-2 rounded-2xl hover:bg-slate-50">
                <Globe2 className="w-4 h-4" /> {t.hero.ctas.partner}
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 underline">
                {t.hero.ctas.learn} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-sky-100 to-emerald-100 p-2">
              <div className="h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </motion.div>
        </div>

        {/* Focus grid */}
        <div className="mt-14">
          <h3 className="text-xl font-semibold mb-4">{t.stats.title}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.stats.items.map((it, idx) => (
              <div key={idx} className="rounded-2xl border p-4 shadow-sm">
                <div className="font-medium">{it.label}</div>
                <div className="text-sm text-slate-600">{it.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* About */}
      <Section id="about">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold mb-4">{t.about.title}</h2>
            <p className="text-slate-700 leading-relaxed">{t.about.body}</p>
            <ul className="mt-6 grid gap-2 text-slate-700">
              <li>• {t.missionTitle}: {t.missionText}</li>
              <li>• {t.visionTitle}: {t.visionText}</li>
              <li>• {t.about.registration}</li>
            </ul>
          </div>
          <div>
            <div className="grid gap-4">
              {t.about.team.map((m, i) => (
                <div key={i} className="border rounded-2xl p-4 shadow-sm">
                  <div className="font-medium">{m.name}</div>
                  <div className="text-sm text-emerald-700">{m.role}</div>
                  <div className="text-sm text-slate-600 mt-1">{m.bio}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <h2 className="text-3xl font-semibold mb-8">{t.projects.title}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {t.projects.cards.map((c, i) => (
            <div key={i} className="rounded-2xl border p-6 shadow-sm">
              <div className="font-semibold text-lg">{c.title}</div>
              <p className="mt-2 text-slate-700">{c.text}</p>
            </div>
          ))}
        </div>

        {/* Wild fruits/herbs sample table (short) */}
        <div className="mt-8">
          <div className="font-medium mb-2">Sample of Native Wild Fruits & Herbs (The Gambia)</div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2 pr-4">Mandinka</th>
                  <th className="py-2 pr-4">English</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Manpato", "Grey Plum"],
                  ["Tamba", "Gingerbread Fruit"],
                  ["Kutifingo", "Black Plum"],
                  ["Ninkongo", "Yellow Plum"],
                  ["Wulakono Sunkungo", "Custard Apple"],
                  ["Neto", "Locust Bean"],
                  ["Sito", "Baobab"],
                  ["Nebidaiyo", "Moringa"],
                ].map(([m, e]) => (
                  <tr key={m} className="border-b last:border-0">
                    <td className="py-2 pr-4">{m}</td>
                    <td className="py-2 pr-4">{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Get Involved / Donate */}
      <Section id="involved">
        <h2 className="text-3xl font-semibold mb-6">{t.involved.title}</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Donate */}
          <div id="donate" className="rounded-2xl border p-6 shadow-sm">
            <div className="font-semibold text-lg">{t.involved.donateTitle}</div>
            <p className="mt-2 text-slate-700">{t.involved.donateText}</p>
            <div className="mt-4 grid gap-2">
              <a className="inline-flex items-center justify-center border rounded-xl px-4 py-2 hover:bg-slate-50" href="#" target="_blank" rel="noreferrer">
                PayPal Checkout <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a className="inline-flex items-center justify-center border rounded-xl px-4 py-2 hover:bg-slate-50" href="#" target="_blank" rel="noreferrer">
                Donate by Card (Stripe) <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <details className="mt-2 border rounded-xl p-3">
                <summary className="cursor-pointer font-medium">Bank Transfer Details</summary>
                <div className="mt-2 text-sm text-slate-700">
                  <div><span className="font-medium">Account Name:</span> Simply Decarbonisation</div>
                  <div><span className="font-medium">IBAN:</span> (to be provided)</div>
                  <div><span className="font-medium">SWIFT/BIC:</span> (to be provided)</div>
                  <div><span className="font-medium">Reference:</span> SD‑DONATION‑YOURNAME</div>
                </div>
              </details>
            </div>
          </div>

          {/* Partner */}
          <div className="rounded-2xl border p-6 shadow-sm">
            <div className="font-semibold text-lg">{t.involved.partnerTitle}</div>
            <p className="mt-2 text-slate-700">{t.involved.partnerText}</p>
            <a href="#contact" className="mt-4 inline-flex items-center gap-2 underline">
              Contact us <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Volunteer */}
          <div className="rounded-2xl border p-6 shadow-sm">
            <div className="font-semibold text-lg">{t.involved.volunteerTitle}</div>
            <p className="mt-2 text-slate-700">{t.involved.volunteerText}</p>
            <a href="#contact" className="mt-4 inline-flex items-center gap-2 underline">
              Sign up <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Section>

      {/* Events */}
      <Section id="events">
        <div className="flex items-center gap-2 mb-2">
          <CalendarDays className="w-5 h-5" />
          <h2 className="text-3xl font-semibold">{t.events.title}</h2>
        </div>
        <p className="text-slate-700 mb-6">{t.events.intro}</p>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Calendar embed placeholder */}
          <div className="rounded-2xl border p-4 h-[420px] grid place-items-center text-center">
            <div>
              <div className="font-medium">Google Calendar / Event Calendar Embed</div>
              <div className="text-sm text-slate-600">Replace this box with your calendar iframe or component.</div>
            </div>
          </div>

          {/* Upcoming list (static sample) */}
          <div className="rounded-2xl border p-4">
            <div className="font-medium mb-3">Upcoming</div>
            <ul className="grid gap-3 text-sm">
              <li className="border rounded-xl p-3">
                <div className="font-medium">EN‑ROADS Workshop – Community Leaders</div>
                <div className="text-slate-600">Banjul • 15 Oct 2025 • 10:00–13:00</div>
              </li>
              <li className="border rounded-xl p-3">
                <div className="font-medium">Tree Planting – West Coast Region</div>
                <div className="text-slate-600">Brikama • 29 Oct 2025 • 08:30–12:00</div>
              </li>
              <li className="border rounded-xl p-3">
                <div className="font-medium">School Outreach – Waste Management</div>
                <div className="text-slate-600">Serekunda • 12 Nov 2025 • 09:00–11:00</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Event proposal form */}
        <div className="mt-8 rounded-2xl border p-6">
          <div className="font-semibold mb-2">Propose or Register for an Event</div>
          <form className="grid md:grid-cols-2 gap-4">
            <input className="border rounded-xl px-3 py-2" placeholder="Your Name" />
            <input className="border rounded-xl px-3 py-2" placeholder="Email" type="email" />
            <input className="border rounded-xl px-3 py-2 md:col-span-2" placeholder="Event Title / Interest" />
            <textarea className="border rounded-xl px-3 py-2 md:col-span-2" rows={4} placeholder="Message" />
            <button type="button" className="bg-emerald-600 text-white px-4 py-2 rounded-2xl w-max">Submit</button>
          </form>
        </div>
      </Section>

      {/* Resources */}
      <Section id="resources">
        <h2 className="text-3xl font-semibold mb-6">{t.resources.title}</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-6">
            <div className="font-medium mb-2">EN‑ROADS</div>
            <p className="text-slate-700">A climate solutions simulator developed by Climate Interactive, MIT Sloan, and Ventana Systems.</p>
            <a href="https://en-roads.climateinteractive.org/scenario.html" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 underline">
              {t.resources.enroads} <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="rounded-2xl border p-6">
            <div className="font-medium mb-3">{t.resources.gallery}</div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Blog / News */}
      <Section id="blog">
        <h2 className="text-3xl font-semibold mb-6">{t.blog.title}</h2>
        <div className="rounded-2xl border p-6 text-slate-600">{t.blog.empty}</div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <h2 className="text-3xl font-semibold mb-6">{t.contact.title}</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border p-6">
            <div className="font-medium">{t.contact.uk.addressTitle}</div>
            <div className="mt-2 text-sm text-slate-700">
              {t.contact.uk.address.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
            <div className="mt-4 text-sm flex items-center gap-2"><Phone className="w-4 h-4" /> {t.contact.phone}</div>
            <div className="text-sm flex items-center gap-2"><Mail className="w-4 h-4" /> {t.contact.email}</div>

            <div className="mt-4 grid gap-2">
              <a href="#" className="inline-flex items-center gap-2 underline"><Youtube className="w-4 h-4" /> {t.contact.socials.youtube}</a>
              <a href="#" className="inline-flex items-center gap-2 underline"><Twitter className="w-4 h-4" /> {t.contact.socials.x}</a>
              <a href="#" className="inline-flex items-center gap-2 underline"><Facebook className="w-4 h-4" /> {t.contact.socials.facebook}</a>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-2xl border p-6">
            <div className="font-medium mb-2">{t.contact.formTitle}</div>
            <form className="grid md:grid-cols-2 gap-4">
              <input className="border rounded-xl px-3 py-2" placeholder="Full Name" />
              <input className="border rounded-xl px-3 py-2" placeholder="Email" type="email" />
              <input className="border rounded-xl px-3 py-2 md:col-span-2" placeholder="Subject" />
              <textarea className="border rounded-xl px-3 py-2 md:col-span-2" rows={5} placeholder="Message" />
              <button type="button" className="bg-emerald-600 text-white px-4 py-2 rounded-2xl w-max">Send</button>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-16 border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            {t.footer.rights}{new Date().getFullYear()} {t.siteName}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <a href="#about" className="underline">About</a>
            <a href="#involved" className="underline">Get Involved</a>
            <a href="#contact" className="underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
