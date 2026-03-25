import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Clock,
  Cpu,
  Facebook,
  Grid3X3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sun,
  Twitter,
  User,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Speakers", href: "#speakers" },
  { label: "Register", href: "#register" },
  { label: "Contact", href: "#contact" },
];

const topics = [
  {
    icon: Zap,
    label: "Power Systems",
    desc: "Advanced power transmission & distribution",
  },
  {
    icon: Sun,
    label: "Renewable Energy",
    desc: "Solar, wind, and clean energy solutions",
  },
  {
    icon: Cpu,
    label: "Embedded Systems",
    desc: "IoT, microcontrollers & real-time systems",
  },
  {
    icon: Grid3X3,
    label: "Smart Grid",
    desc: "Intelligent grid management & automation",
  },
];

const schedule = [
  {
    time: "09:00 AM",
    title: "Inauguration Ceremony",
    venue: "Main Auditorium",
    type: "ceremony",
    speaker: "",
  },
  {
    time: "10:00 AM",
    title: "Keynote: Future of Power Systems",
    speaker: "Dr. A. Krishnamurthy",
    venue: "Main Auditorium",
    type: "keynote",
  },
  {
    time: "11:30 AM",
    title: "Paper Presentations – Track 1: Power Electronics",
    venue: "Seminar Hall A",
    type: "track",
    speaker: "",
  },
  {
    time: "11:30 AM",
    title: "Paper Presentations – Track 2: Renewable Energy",
    venue: "Seminar Hall B",
    type: "track",
    speaker: "",
  },
  {
    time: "01:00 PM",
    title: "Lunch Break",
    venue: "Canteen",
    type: "break",
    speaker: "",
  },
  {
    time: "02:00 PM",
    title: "Workshop: Smart Grid Technologies",
    venue: "Lab 1",
    type: "workshop",
    speaker: "",
  },
  {
    time: "02:00 PM",
    title: "Paper Presentations – Track 3: Embedded Systems",
    venue: "Seminar Hall A",
    type: "track",
    speaker: "",
  },
  {
    time: "04:00 PM",
    title: "Panel Discussion: Industry 4.0 & EEE",
    venue: "Main Auditorium",
    type: "panel",
    speaker: "",
  },
  {
    time: "05:00 PM",
    title: "Valedictory & Prize Distribution",
    venue: "Main Auditorium",
    type: "ceremony",
    speaker: "",
  },
];

const speakers = [
  {
    name: "Dr. A. Krishnamurthy",
    role: "Professor",
    org: "Anna University, Chennai",
    topic: "Power Systems",
    initials: "AK",
    color: "#C9A24A",
  },
  {
    name: "Dr. S. Meenakshi",
    role: "Senior Researcher",
    org: "IIT Madras",
    topic: "Renewable Energy",
    initials: "SM",
    color: "#5B8DB8",
  },
  {
    name: "Mr. R. Venkatesh",
    role: "Lead Engineer",
    org: "Siemens India",
    topic: "Smart Grid",
    initials: "RV",
    color: "#4A9A6A",
  },
  {
    name: "Dr. P. Sundaram",
    role: "Principal",
    org: "GCE Thanjavur",
    topic: "Embedded Systems",
    initials: "PS",
    color: "#9B5EA2",
  },
];

const socialIcons = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Youtube, label: "YouTube" },
];

const scheduleTypeStyle: Record<string, string> = {
  ceremony: "bg-gold/10 text-gold border-gold/30",
  keynote: "bg-blue-500/10 text-blue-300 border-blue-400/30",
  track: "bg-purple-500/10 text-purple-300 border-purple-400/30",
  break: "bg-gray-500/10 text-gray-400 border-gray-400/20",
  workshop: "bg-green-500/10 text-green-300 border-green-400/30",
  panel: "bg-orange-500/10 text-orange-300 border-orange-400/30",
};

// ─── Components ──────────────────────────────────────────────────────────────

function SectionTitle({
  children,
  light = false,
}: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="text-center mb-12">
      <h2
        className={`font-heading text-3xl md:text-4xl font-extrabold uppercase tracking-widest ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {children}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
    </div>
  );
}

function GoldDivider() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
  );
}

// ─── Main App ────────────────────────────────────────────────────────────────

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans">
      {/* ── Navbar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-navy shadow-xl" : "bg-navy/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/gce-crest-transparent.dim_200x200.png"
                alt="GCE Crest"
                className="h-10 w-10 rounded-full object-cover border-2 border-gold/50"
              />
              <div>
                <div className="font-heading text-white font-bold text-sm leading-tight tracking-wide">
                  GCE THANJAVUR
                </div>
                <div className="text-gold text-xs font-semibold tracking-wider">
                  EEE SYMPOSIUM 2026
                </div>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-6"
              data-ocid="nav.section"
            >
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  data-ocid={`nav.${link.label.toLowerCase()}.link`}
                  className="text-white/80 hover:text-gold text-sm font-semibold tracking-wide transition-colors uppercase"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Location badge */}
            <div className="hidden lg:flex items-center gap-1.5 text-white/60 text-xs">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              <span className="font-semibold tracking-widest">THANJAVUR</span>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-ocid="nav.menu.toggle"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-navy-dark border-t border-gold/20"
            >
              <div className="px-4 py-4 space-y-1" data-ocid="nav.mobile.panel">
                {navLinks.map((link) => (
                  <button
                    type="button"
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                    className="block w-full text-left text-white/80 hover:text-gold px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Hero ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "oklch(0.12 0.04 240)" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-eee-symposium.dim_1920x1080.jpg')",
          }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/70 to-transparent" />
        {/* Circuit SVG pattern */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M10 40 H70 M40 10 V70 M20 20 H60 M20 60 H60"
                stroke="#C9A24A"
                strokeWidth="0.5"
                fill="none"
              />
              <circle cx="40" cy="40" r="3" fill="#C9A24A" />
              <circle cx="20" cy="20" r="2" fill="#C9A24A" />
              <circle cx="60" cy="60" r="2" fill="#C9A24A" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold text-xs font-bold uppercase tracking-[0.3em]">
                National Symposium 2026
              </span>
            </div>

            <p className="text-white/60 text-sm uppercase tracking-widest mb-3 font-semibold">
              April 10, 2026 &nbsp;|&nbsp; Government College of Engineering,
              Thanjavur
            </p>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none mb-6">
              Innovating the
              <br />
              <span className="text-gold">Future of</span>
              <br />
              Electrical Engineering
            </h1>

            <p className="text-white/70 text-lg mb-10 max-w-xl leading-relaxed">
              National Symposium on Emerging Trends in Electrical &amp;
              Electronics Engineering — bringing together researchers,
              engineers, and students from across India.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollTo("#register")}
                data-ocid="hero.register.primary_button"
                className="bg-gold hover:bg-gold-dark text-navy-dark font-bold px-8 py-3 text-sm uppercase tracking-widest shadow-gold border-0"
              >
                Register Now
              </Button>
              <Button
                onClick={() => scrollTo("#schedule")}
                data-ocid="hero.schedule.secondary_button"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 hover:border-white font-bold px-8 py-3 text-sm uppercase tracking-widest bg-transparent"
              >
                Explore Schedule
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-14 border-t border-white/10 pt-8">
              {[
                { num: "9+", label: "Sessions" },
                { num: "4", label: "Distinguished Speakers" },
                { num: "3", label: "Technical Tracks" },
                { num: "1 Day", label: "Intensive Program" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-heading text-2xl font-black text-gold">
                    {s.num}
                  </div>
                  <div className="text-white/50 text-xs uppercase tracking-widest font-semibold">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>About the Symposium</SectionTitle>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <Badge className="bg-gold/10 text-gold-dark border-gold/30 font-semibold uppercase tracking-wider text-xs">
                Department of EEE
              </Badge>
              <h3 className="font-heading text-2xl font-bold text-navy leading-snug">
                Advancing Knowledge at the Frontier of Electrical Engineering
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The Department of Electrical and Electronics Engineering,
                Government College of Engineering Thanjavur, proudly hosts this
                National Symposium to foster academic collaboration, research
                exchange, and industry-academia synergy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The symposium brings together eminent academicians, researchers,
                and industry professionals to discuss the latest breakthroughs
                in Power Systems, Renewable Energy, Embedded Systems, and Smart
                Grid Technologies.
              </p>
              <div className="flex flex-col gap-2 pt-2">
                {[
                  "Paper presentations and peer review",
                  "Hands-on workshop on Smart Grid",
                  "Industry expert panel discussions",
                  "Networking with leading professionals",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground font-medium"
                  >
                    <ChevronRight className="h-4 w-4 text-gold flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: topic cards */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {topics.map((topic, i) => (
                <motion.div
                  key={topic.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="bg-white rounded-xl p-5 border border-border shadow-xs hover:shadow-md hover:border-gold/30 transition-all group"
                  data-ocid={`about.topic.item.${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-navy/8 flex items-center justify-center mb-3 group-hover:bg-gold/10 transition-colors">
                    <topic.icon className="h-5 w-5 text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <h4 className="font-heading font-bold text-navy text-sm mb-1">
                    {topic.label}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {topic.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ── Schedule ── */}
      <section id="schedule" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Symposium Schedule</SectionTitle>

          <div className="mb-6 text-center">
            <span className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 rounded-full px-4 py-1.5 text-xs font-bold text-navy uppercase tracking-wider">
              <Clock className="h-3.5 w-3.5" />
              April 10, 2026 — Full Day Program
            </span>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[72px] sm:left-24 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent hidden sm:block" />

            <div className="space-y-3" data-ocid="schedule.list">
              {schedule.map((item, i) => (
                <motion.div
                  key={`${item.time}-${item.title}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex gap-4 sm:gap-6 items-start"
                  data-ocid={`schedule.item.${i + 1}`}
                >
                  {/* Time */}
                  <div className="w-16 sm:w-20 flex-shrink-0 text-right">
                    <span className="text-xs font-bold text-gold tracking-wide whitespace-nowrap">
                      {item.time}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="hidden sm:flex flex-shrink-0 w-8 justify-center pt-1">
                    <div className="w-3 h-3 rounded-full border-2 border-gold bg-white shadow-sm" />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 rounded-xl border px-4 py-3 ${
                      scheduleTypeStyle[item.type] ??
                      "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="font-semibold text-sm leading-snug">
                      {item.title}
                    </div>
                    {item.speaker && (
                      <div className="flex items-center gap-1 mt-1 text-xs opacity-80">
                        <User className="h-3 w-3" />
                        {item.speaker}
                      </div>
                    )}
                    <div className="flex items-center gap-1 mt-1 text-xs opacity-70">
                      <MapPin className="h-3 w-3" />
                      {item.venue}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ── Speakers ── */}
      <section
        id="speakers"
        className="py-20"
        style={{ background: "oklch(0.15 0.04 240)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle light>Distinguished Speakers</SectionTitle>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, i) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-gold/30 transition-all group"
                data-ocid={`speakers.item.${i + 1}`}
              >
                {/* Avatar */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black text-white mx-auto mb-4 ring-2 ring-white/10 group-hover:ring-gold/50 transition-all"
                  style={{
                    backgroundColor: `${speaker.color}33`,
                    border: `2px solid ${speaker.color}66`,
                  }}
                >
                  <span style={{ color: speaker.color }}>
                    {speaker.initials}
                  </span>
                </div>

                <h4 className="font-heading font-bold text-white text-sm mb-1">
                  {speaker.name}
                </h4>
                <p className="text-white/60 text-xs mb-1">{speaker.role}</p>
                <p className="text-white/50 text-xs mb-3">{speaker.org}</p>
                <Badge
                  className="text-xs font-semibold"
                  style={{
                    backgroundColor: `${speaker.color}22`,
                    color: speaker.color,
                    border: `1px solid ${speaker.color}44`,
                  }}
                >
                  {speaker.topic}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration ── */}
      <section id="register" className="py-20 bg-[#F5F7FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Registration</SectionTitle>

          <div
            className="bg-white rounded-2xl shadow-md border border-border overflow-hidden"
            data-ocid="register.card"
          >
            {/* Closed banner */}
            <div className="bg-navy text-white text-center py-3 px-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gold">
                ⚠ Registration Closed — Event was held on April 10, 2026
              </span>
            </div>

            <div className="p-8">
              <p className="text-muted-foreground text-center mb-8 text-sm leading-relaxed">
                Thank you for your interest! The symposium has been successfully
                concluded. For enquiries regarding future events, please contact
                the department.
              </p>

              {/* Fee cards */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div
                  className="rounded-xl border border-border p-6 text-center hover:border-gold/40 transition-colors"
                  data-ocid="register.students.card"
                >
                  <div className="text-3xl font-black text-navy font-heading mb-1">
                    ₹200
                  </div>
                  <div className="font-bold text-sm text-foreground mb-3 uppercase tracking-wide">
                    Students
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>✓ Lunch included</li>
                    <li>✓ Symposium proceedings</li>
                    <li>✓ Participation certificate</li>
                  </ul>
                </div>
                <div
                  className="rounded-xl border-2 border-gold/40 p-6 text-center bg-gold/5 relative"
                  data-ocid="register.professionals.card"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gold text-navy-dark font-bold text-xs border-0">
                      POPULAR
                    </Badge>
                  </div>
                  <div className="text-3xl font-black text-navy font-heading mb-1">
                    ₹500
                  </div>
                  <div className="font-bold text-sm text-foreground mb-3 uppercase tracking-wide">
                    Professionals
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>✓ Lunch included</li>
                    <li>✓ Symposium proceedings</li>
                    <li>✓ Certificate of participation</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Button
                  disabled
                  data-ocid="register.submit_button"
                  className="bg-gold/40 text-navy/50 font-bold px-10 py-3 text-sm uppercase tracking-widest cursor-not-allowed border-0"
                >
                  Registration Closed
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ── Contact ── */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Contact Us</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                label: "Address",
                lines: [
                  "Government College of Engineering",
                  "Thanjavur – 613 402",
                  "Tamil Nadu, India",
                ],
              },
              {
                icon: Phone,
                label: "Phone",
                lines: ["+91 4362 227 999", "Department of EEE"],
              },
              {
                icon: Mail,
                label: "Email",
                lines: ["eee@gcethanjavur.ac.in", "Dr. P. Sundaram, HoD"],
              },
            ].map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-xl border border-border hover:border-gold/30 hover:shadow-sm transition-all"
                data-ocid={`contact.item.${i + 1}`}
              >
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-navy/5 flex items-center justify-center">
                  <info.icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="font-bold text-sm text-navy uppercase tracking-wide mb-1">
                    {info.label}
                  </div>
                  {info.lines.map((line) => (
                    <div key={line} className="text-sm text-muted-foreground">
                      {line}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="mt-10 rounded-2xl overflow-hidden border border-border h-48 flex items-center justify-center bg-navy/5">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-gold mx-auto mb-2" />
              <p className="text-sm font-semibold text-navy">
                Government College of Engineering
              </p>
              <p className="text-xs text-muted-foreground">
                Thanjavur, Tamil Nadu – 613 402
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {/* Left: branding */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/generated/gce-crest-transparent.dim_200x200.png"
                  alt="GCE Crest"
                  className="h-10 w-10 rounded-full border-2 border-gold/40 object-cover"
                />
                <div>
                  <div className="font-heading font-bold text-sm">
                    GCE THANJAVUR
                  </div>
                  <div className="text-gold text-xs">EEE Symposium 2026</div>
                </div>
              </div>
              <p className="text-white/50 text-xs leading-relaxed">
                Department of Electrical and Electronics Engineering,
                <br />
                Government College of Engineering, Thanjavur.
              </p>
              <div className="flex gap-3 mt-4">
                {socialIcons.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors cursor-pointer"
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                ))}
              </div>
            </div>

            {/* Center: quick links */}
            <div>
              <h5 className="font-heading font-bold text-xs uppercase tracking-widest text-gold mb-4">
                Quick Links
              </h5>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.href)}
                      className="text-white/60 hover:text-gold text-sm transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: contact */}
            <div>
              <h5 className="font-heading font-bold text-xs uppercase tracking-widest text-gold mb-4">
                Contact
              </h5>
              <div className="space-y-2 text-xs text-white/60">
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-gold mt-0.5 flex-shrink-0" />
                  <span>
                    Government College of Engineering, Thanjavur – 613 402,
                    Tamil Nadu
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-gold flex-shrink-0" />
                  <span>+91 4362 227 999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-gold flex-shrink-0" />
                  <span>eee@gcethanjavur.ac.in</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <span>
              © 2026 Department of EEE, GCE Thanjavur. All rights reserved.
            </span>
            <span>
              Built with ♥ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold/70 hover:text-gold transition-colors"
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
