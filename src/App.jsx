import React, { useEffect, useState } from "react";

export default function ESGEvraSite() {
  const [lang, setLang] = useState("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [docFilter, setDocFilter] = useState({ type: "ALL", lang: "ALL" });

  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── i18n dictionaries (unchanged) ─────────────────────────────────────────
  const tAll = {
    en: {
      nav: {
        profile: "Company Profile",
        pillars: "Advantages",
        services: "Services",
        org: "Organization",
        clients: "Partners",
        projects: "Projects",
        geo: "Expansion & KPIs",
        documents: "Documents",
        contact: "Contact",
        imprint: "Imprint",
      },
      hero: {
        kicker: "ESG • Circular • Traceable",
        title: "ESG Evra",
        subtitle:
          "Circular food systems: direct sourcing, traceability, and low-carbon logistics from acquistion to salt.",
        cta1: "Request Deck",
        cta2: "Partner With Us",
      },
      profile: {
        title: "Company Profile",
        blurb:
          "We align capital, supply chains, and hospitality to raise product quality, pay producers fairly, and reduce emissions.",
      },
      advantages: {
        title: "Competitive Advantage",
        cols: [
          {
            h: "Problem",
            p: "High food costs, opaque provenance, fragmented logistics, scope-3 blind spots.",
          },
          {
            h: "Solution",
            p: "Direct producer network, pre-buy programs, verified traceability, optimized cold chain.",
          },
          {
            h: "Result",
            p: "Better margins, fewer stockouts, measurable ESG, and superior guest experience.",
          },
        ],
      },
      services: {
        title: "Services",
        items: [
          { h: "Sourcing & Pre-buy", p: "Seasonal lots of cheese, grains, and oil financed upfront by members." },
          { h: "Traceability", p: "Item-level QR with producer, lot, route, and certifications." },
          { h: "Hospitality Ops", p: "Monti • Mare • Farina sharing one circular backbone and data layer." },
          { h: "Distribution", p: "Temperature-controlled last-mile and city consolidation." },
        ],
      },
      org: {
        title: "Organization",
        people: [
          { name: "William Toscano", role: "Operations", note: "Beverly Hills fine-dining GM; end-to-end ops." },
          { name: "David Toscano", role: "Sourcing & ESG", note: "Direct network of Italian producers." },
        ],
      },
      clients: {
        title: "Partners & Producers",
        blurb: "Selected Italian producers and logistics partners supporting Geneva operations.",
      },
      projects: {
        title: "Projects",
        cards: [
          { h: "Monti", p: "Wood-fire meats; Geneva CBD; lunch casual, dinner fine dining.", tag: "2026" },
          { h: "Mare", p: "Mediterranean seafood with optimized cold chain.", tag: "Phase 2" },
          { h: "Farina", p: "Pizza & pasta; long fermentation; Italian grain provenance.", tag: "Phase 3" },
        ],
      },
      geo: {
        title: "Expansion & KPIs",
        bullets: [
          "Phase-in: 1 → 3 restaurants in 5 years",
          "Food cost advantage via direct sourcing",
          "Traceability adoption rate and waste reduction",
          "Member pre-buy volume and repeat rate",
        ],
      },
      docs: {
        title: "Documents",
        hint: "Place files in /public/docs or /public/deck.",
        filters: { type: "Type", lang: "Language", all: "All" },
      },
      contact: {
        title: "Contact",
        blurb: "Request the investor deck or propose a partnership.",
        fields: { name: "Name", email: "Email", msg: "Message", submit: "Send" },
      },
      footer: { left: "© " + new Date().getFullYear() + " ESG Evra", right: "Geneva • Los Angeles" },
    },
    it: {
      nav: {
        profile: "Profilo Aziendale",
        pillars: "Vantaggi",
        services: "Servizi",
        org: "Organizzazione",
        clients: "Partner",
        projects: "Progetti",
        geo: "Espansione & KPI",
        documents: "Documenti",
        contact: "Contatti",
        imprint: "Impressum",
      },
      hero: {
        kicker: "ESG • Circolare • Tracciabile",
        title: "ESG Evra",
        subtitle: "Sistemi alimentari circolari: approvvigionamento diretto, tracciabilità e basse emissioni.",
        cta1: "Richiedi il Deck",
        cta2: "Diventa Partner",
      },
      profile: { title: "Profilo Aziendale", blurb: "Allineiamo capitale, filiere e ristorazione per qualità, equità e basse emissioni." },
      advantages: {
        title: "Vantaggio Competitivo",
        cols: [
          { h: "Problema", p: "Costi alti, provenienza opaca, logistica frammentata, scope-3." },
          { h: "Soluzione", p: "Rete di produttori, pre-acquisti, tracciabilità verificata, cold chain ottimizzata." },
          { h: "Risultato", p: "Margini migliori, meno sprechi, ESG misurabile, esperienza superiore." },
        ],
      },
      services: {
        title: "Servizi",
        items: [
          { h: "Sourcing & Pre-acquisto", p: "Lotti stagionali finanziati in anticipo." },
          { h: "Tracciabilità", p: "QR a livello articolo con produttore, lotto, rotta, certificazioni." },
          { h: "Operazioni", p: "Monti • Mare • Farina su spina dorsale unica." },
          { h: "Distribuzione", p: "Ultimo miglio a temperatura controllata." },
        ],
      },
      org: {
        title: "Organizzazione",
        people: [
          { name: "William Toscano", role: "Operazioni", note: "GM fine dining a Beverly Hills." },
          { name: "David Toscano", role: "Sourcing & ESG", note: "Rete diretta di produttori italiani." },
        ],
      },
      clients: { title: "Partner & Produttori", blurb: "Selezione di produttori italiani e partner logistici." },
      projects: {
        title: "Progetti",
        cards: [
          { h: "Monti", p: "Carni alla brace; centro di Ginevra.", tag: "2026" },
          { h: "Mare", p: "Seafood mediterraneo.", tag: "Fase 2" },
          { h: "Farina", p: "Pizza & pasta.", tag: "Fase 3" },
        ],
      },
      geo: {
        title: "Espansione & KPI",
        bullets: ["Da 1 a 3 ristoranti in 5 anni", "Vantaggio sul food cost", "Adozione tracciabilità e riduzione sprechi", "Volume pre-acquisti e retention"],
      },
      docs: { title: "Documenti", hint: "Metti i file in /public/docs o /public/deck.", filters: { type: "Tipo", lang: "Lingua", all: "Tutti" } },
      contact: { title: "Contatti", blurb: "Chiedi il deck o proponi una partnership.", fields: { name: "Nome", email: "Email", msg: "Messaggio", submit: "Invia" } },
      footer: { left: "© " + new Date().getFullYear() + " ESG Evra", right: "Ginevra • Los Angeles" },
    },
    fr: {
      nav: {
        profile: "Profil d’Entreprise",
        pillars: "Avantages",
        services: "Services",
        org: "Organisation",
        clients: "Partenaires",
        projects: "Projets",
        geo: "Expansion & KPI",
        documents: "Documents",
        contact: "Contact",
        imprint: "Mentions Légales",
      },
      hero: {
        kicker: "ESG • Circulaire • Traçable",
        title: "ESG Evra",
        subtitle: "Systèmes alimentaires circulaires: sourcing direct, traçabilité et opérations bas carbone.",
        cta1: "Demander le Dossier",
        cta2: "Devenir Partenaire",
      },
      profile: { title: "Profil d’Entreprise", blurb: "Nous alignons capital, chaînes d’approvisionnement et hôtellerie pour qualité, équité et bas carbone." },
      advantages: {
        title: "Avantage Concurrentiel",
        cols: [
          { h: "Problème", p: "Coûts élevés, provenance opaque, logistique fragmentée, scope-3." },
          { h: "Solution", p: "Réseau de producteurs, pré-achats, traçabilité vérifiée, chaîne du froid optimisée." },
          { h: "Résultat", p: "Meilleures marges, moins de pertes, ESG mesurable, expérience supérieure." },
        ],
      },
      services: {
        title: "Services",
        items: [
          { h: "Approvisionnement & Pré-achat", p: "Lots saisonniers financés à l’avance." },
          { h: "Traçabilité", p: "QR par article: producteur, lot, trajet, certifications." },
          { h: "Opérations", p: "Monti • Mare • Farina sur une base commune." },
          { h: "Distribution", p: "Dernier km à température contrôlée." },
        ],
      },
      org: {
        title: "Organisation",
        people: [
          { name: "William Toscano", role: "Opérations", note: "Direction de restaurants haut de gamme." },
          { name: "David Toscano", role: "Sourcing & ESG", note: "Réseau direct de producteurs italiens." },
        ],
      },
      clients: { title: "Partenaires & Producteurs", blurb: "Producteurs italiens et partenaires logistiques." },
      projects: {
        title: "Projets",
        cards: [
          { h: "Monti", p: "Viandes au feu de bois; Genève centre.", tag: "2026" },
          { h: "Mare", p: "Produits de la mer méditerranéens.", tag: "Phase 2" },
          { h: "Farina", p: "Pizza & pâtes.", tag: "Phase 3" },
        ],
      },
      geo: {
        title: "Expansion & KPI",
        bullets: ["1 → 3 restaurants en 5 ans", "Avantage coût matière", "Adoption traçabilité et réduction des déchets", "Volume de pré-achat et rétention"],
      },
      docs: { title: "Documents", hint: "Déposez les fichiers dans /public/docs ou /public/deck.", filters: { type: "Type", lang: "Langue", all: "Tous" } },
      contact: { title: "Contact", blurb: "Demandez le dossier ou proposez un partenariat.", fields: { name: "Nom", email: "Email", msg: "Message", submit: "Envoyer" } },
      footer: { left: "© " + new Date().getFullYear() + " ESG Evra", right: "Genève • Los Angeles" },
    },
  };

  const t = tAll[lang];

  // ── documents manifest ─────────────────────────────────────────────────────
  const docsManifest = [
    { title: "Investor Deck", path: "/deck/EVRA-Investor-Pitch-Deck.pdf", type: "PDF", lang: "EN", date: "2025-11-07" },
    { title: "Executive Summary", path: "/deck/Executive_Summary_EN.pdf", type: "PDF", lang: "EN", date: "2025-11-07" },
    { title: "Synthèse Exécutive", path: "/deck/Resume_Executif_FR.pdf", type: "PDF", lang: "FR", date: "2025-11-07" },
    { title: "Sintesi Esecutiva", path: "/deck/Sintesi_Esecutiva_IT.pdf", type: "PDF", lang: "IT", date: "2025-11-07" },
    { title: "Business Plan", path: "/docs/Business_Plan_ESG_Evra.docx", type: "DOCX", lang: "EN", date: "2025-11-07" },
    { title: "Financial Model", path: "/docs/Financial_Model.xlsx", type: "XLSX", lang: "EN", date: "2025-11-07" },
    { title: "Product Catalog", path: "/deck/Product_Catalog.pdf", type: "PDF", lang: "EN", date: "2025-11-07" },
  ];

  const filteredDocs = docsManifest.filter(
    (d) =>
      (docFilter.type === "ALL" || d.type === docFilter.type) &&
      (docFilter.lang === "ALL" || d.lang === docFilter.lang)
  );

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Header */}
      <header
        className={`top-0 z-30 sticky backdrop-blur border-b ${shadow ? "bg-[color-mix(in_oklab,var(--bg),#ffffff_10%)]" : "bg-[color-mix(in_oklab,var(--bg),#ffffff_6%)]"} border-muted`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg" style={{ background: "var(--brand)" }} aria-hidden />
            <span className="font-semibold tracking-tight">ESG Evra</span>
          </a>

          <nav className="hidden md:flex gap-6 text-sm uppercase tracking-wide text-sub">
            <a href="#documents" className="hover:text-[var(--text)]">Documents</a>
            <a href="#brands" className="hover:text-[var(--text)]">Brands</a>
            <a href="#contact" className="hover:text-[var(--text)]">Contact</a>
          </nav>

          {/* right controls */}
          <div className="flex items-center gap-2">
            <LangSwitcher lang={lang} setLang={setLang} />
            <button
              className="md:hidden rounded-lg border border-muted text-sub px-3 py-1 text-xs"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-muted bg-panel">
            <div className="mx-auto max-w-7xl px-4 py-3 grid grid-cols-2 gap-3 text-sm">
              {[
                ["#profile", t.nav.profile],
                ["#advantages", t.nav.pillars],
                ["#services", t.nav.services],
                ["#org", t.nav.org],
                ["#clients", t.nav.clients],
                ["#projects", t.nav.projects],
                ["#geo", t.nav.geo],
                ["#documents", t.nav.documents],
                ["#contact", t.nav.contact],
                ["#imprint", t.nav.imprint],
              ].map(([href, label]) => (
                <a key={href} href={href} className="py-2 rounded-lg hover:bg-muted px-2">
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative h-[56vh] min-h-[420px] rounded-3xl overflow-hidden bg-muted">
            <img src="/images/hero.webp" alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--bg)]" />
            <div className="relative z-10 p-8 sm:p-12">
              <p className="text-xs tracking-widest uppercase text-sub">{t.hero.kicker}</p>
              <h1 className="mt-3 text-5xl sm:text-6xl font-semibold tracking-tight max-w-3xl">{t.hero.title}</h1>
              <p className="mt-4 max-w-xl text-sub">{t.hero.subtitle}</p>
              <div className="mt-8 flex gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition bg-[var(--brand)] text-black hover:opacity-90"
                >
                  {t.hero.cta1}
                </a>
                <a
                  href="#documents"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition border border-muted text-[var(--text)] hover:bg-muted"
                >
                  View Documents
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile */}
      <Section id="profile" title={t.profile.title} blurb={t.profile.blurb}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard h="Direct Producers" p="20+ core partners across Tuscany & Umbria" />
          <StatCard h="Traceable SKUs" p="100% item-level QR by go-live" />
          <StatCard h="Waste" p=">15% reduction target in year 1" />
        </div>
      </Section>

      {/* Advantages */}
      <Section id="advantages" title={t.advantages.title}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.advantages.cols.map((c, i) => (
            <div key={i} className="rounded-2xl border border-muted p-6 bg-panel shadow-soft hover:shadow-lg transition">
              <div className="text-xs uppercase tracking-widest text-sub">{c.h}</div>
              <h3 className="mt-1 font-semibold">{c.h}</h3>
              <p className="mt-2 text-sm text-sub">{c.p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section id="services" title={t.services.title}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((s, i) => (
            <div key={i} className="rounded-2xl border border-muted p-6 bg-panel shadow-soft hover:shadow-lg transition">
              <div className="h-8 w-8 rounded-xl bg-muted" aria-hidden />
              <h3 className="mt-3 font-semibold">{s.h}</h3>
              <p className="mt-2 text-sm text-sub">{s.p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Organization */}
      <Section id="org" title={t.org.title}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.org.people.map((p, i) => (
            <div key={i} className="rounded-2xl border border-muted p-6 bg-panel shadow-soft hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-muted" aria-hidden />
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-sub">{p.role}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-sub">{p.note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Partners / Clients */}
      <Section id="clients" title={t.clients.title} blurb={t.clients.blurb}>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-12 rounded-xl bg-muted" aria-label="logo placeholder" />
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title={t.projects.title}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.projects.cards.map((c, i) => (
            <div key={i} className="rounded-2xl border border-muted p-6 bg-panel shadow-soft hover:shadow-lg transition">
              <div className="text-xs uppercase tracking-widest text-sub">{c.tag}</div>
              <h3 className="mt-2 font-semibold">{c.h}</h3>
              <p className="mt-2 text-sm text-sub">{c.p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Expansion & KPIs */}
      <Section id="geo" title={t.geo.title}>
        <ul className="mt-4 list-disc pl-6 text-sm text-sub space-y-2">
          {t.geo.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </Section>

      {/* Brands */}
      <Section id="brands" title="Brands">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
          <BrandCard
            name="Monti"
            tagline="Wood-fire meats • Geneva"
            img="/brands/monti.png"
          />
          <BrandCard
            name="Mare"
            tagline="Mediterranean seafood • Cold chain optimized"
            img="/brands/mare.png"
          />
          <BrandCard
            name="Farina"
            tagline="Slow-rise pizza & pasta • Grain provenance"
            img="/brands/farina.png"
          />
        </div>
      </Section>


      {/* Documents with filters */}
      <Section id="documents" title={t.docs.title} blurb={t.docs.hint}>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="flex gap-3">
            <Select
              label={t.docs.filters.type}
              value={docFilter.type}
              onChange={(v) => setDocFilter((s) => ({ ...s, type: v }))}
              options={["ALL", "PDF", "DOCX", "XLSX"]}
            />
            <Select
              label={t.docs.filters.lang}
              value={docFilter.lang}
              onChange={(v) => setDocFilter((s) => ({ ...s, lang: v }))}
              options={["ALL", "EN", "IT", "FR"]}
            />
          </div>
          <div className="text-xs text-sub">{filteredDocs.length} file(s)</div>
        </div>
        <div className="mt-6" />
        <DocsTable files={filteredDocs} />
      </Section>

      {/* Brands / Concepts */}
      <section id="brands" className="bg-[var(--bg)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight">Brands</h2>
            <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-neutral-200 to-transparent" />
          </div>

          <p className="mt-2 text-neutral-700 max-w-3xl">
            Monti, Mare, and Farina operate as a unified circular system for sourcing, logistics, and traceability.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-10 items-center">

            {/* Monti */}
            <div className="flex flex-col items-center gap-3">
              <img
                src="/images/brands/monti.png"
                alt="Monti Logo"
                className="h-40 w-auto object-contain"
              />
              <span className="text-sm text-neutral-700">
                 Monti — Wood-fire grilled meats
              </span>
            </div>

            {/* Mare */}
             <div className="flex flex-col items-center gap-3">
              <img
                 src="/images/brands/mare.png"
                 alt="Mare Logo"
                 className="h-40 w-auto object-contain"
              />
              <span className="text-sm text-neutral-700">
                 Mare — Mediterranean seafood
              </span>
             </div>

            {/* Farina */}
             <div className="flex flex-col items-center gap-3">
              <img
                 src="/images/brands/farina.png"
                 alt="Farina Logo"
                 className="h-40 w-auto object-contain"
              />
              <span className="text-sm text-neutral-700">
                 Farina — Slow-fermented pizza & pasta
              </span>
             </div>

          </div>
        </div>
      </section>


      {/* Contact */}
      <Section id="contact" title={t.contact.title} blurb={t.contact.blurb}>
        <form
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-panel p-6 rounded-2xl border border-muted shadow-soft"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = {
              name: form.elements['name'].value.trim(),
              email: form.elements['email'].value.trim(),
              message: form.elements['message'].value.trim(),
              honeypot: form.elements['company']?.value || '',  
            };

            const r = await fetch('/api/contact', {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify(data),
            });

            const j = await r.json();
            if (j.ok) { alert('Thank you. We will reply shortly.'); form.reset(); }
            else { alert('Error sending message. Please try again.'); }
          }}
          >
          <label className="block">
            <span className="text-sm">{t.contact.fields.name}</span>
            <input
              name="name"
              required
              className="mt-1 w-full rounded-xl border border-muted bg-[var(--bg)] text-[var(--text)] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30"
              placeholder="Jane Doe"
            />
          </label>
          <label className="block">
            <span className="text-sm">{t.contact.fields.email}</span>
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-muted bg-[var(--bg)] text-[var(--text)] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30"
              placeholder="jane@domain.com"
            />
            <input
              type="text"
              name="company"
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

          </label>
          <label className="block sm:col-span-2">
            <span className="text-sm">{t.contact.fields.msg}</span>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1 w-full rounded-xl border border-muted bg-[var(--bg)] text-[var(--text)] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30"
              placeholder="Tell us a bit about your interest…"
            />
          </label>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-2xl bg-[var(--brand)] text-black px-5 py-3 text-sm hover:opacity-90"
            >
              {t.contact.fields.submit}
            </button>
          </div>
        </form>
      </Section>

      {/* Imprint */}
      <section id="imprint" className="bg-panel">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold">{t.nav.imprint}</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-sub">
            <div>
              <p><span className="font-medium">Company:</span> ESG Evra Sàrl (pending)</p>
              <p><span className="font-medium">Registered Office:</span> Rue Example 10, 1200 Genève, Switzerland</p>
              <p><span className="font-medium">Commercial Registry:</span> CHE-000.000.000 (placeholder)</p>
              <p><span className="font-medium">Managing Directors:</span> William Toscano, David Toscano</p>
              <p><span className="font-medium">Contact:</span> info@esgevra.ch</p>
            </div>
            <div>
              <p><span className="font-medium">Data Protection:</span> privacy@esgevra.ch</p>
              <p><span className="font-medium">Law:</span> GDPR (EU) & nFADP (CH)</p>
              <p><span className="font-medium">Hosting:</span> Vercel/Netlify</p>
              <p className="mt-2">Update with final legal details after incorporation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-muted bg-panel">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm text-sub">
          <div>{t.footer.left}</div>
          <div>{t.footer.right}</div>
        </div>
      </footer>
    </div>
  );
}

/* ── Reusable UI ─────────────────────────────────────────────────────────── */

function LangSwitcher({ lang, setLang }) {
  const next = lang === "en" ? "it" : lang === "it" ? "fr" : "en";
  const label = lang === "en" ? "IT" : lang === "it" ? "FR" : "EN";
  return (
    <button
      onClick={() => setLang(next)}
      className="rounded-lg border border-muted text-sub px-3 py-1 text-xs hover:bg-muted"
      aria-label="Switch language"
      title="Switch language"
    >
      {label}
    </button>
  );
}

function Section({ id, title, blurb, children }) {
  return (
    <section id={id} className="bg-panel border-t border-b border-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-muted to-transparent" />
        </div>
        {blurb ? <p className="mt-2 text-sub max-w-3xl">{blurb}</p> : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function StatCard({ h, p }) {
  return (
    <div className="rounded-2xl border border-muted p-6 bg-panel shadow-soft">
      <div className="text-xs uppercase tracking-widest text-sub">KPI</div>
      <h3 className="mt-1 font-semibold">{h}</h3>
      <p className="mt-2 text-sm text-sub">{p}</p>
    </div>
  );
}

function BrandCard({ name, tagline, img }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center">
      <div className="h-16 w-16 rounded-2xl bg-neutral-100 flex items-center justify-center overflow-hidden">
        <img
          src={img}
          alt={name}
          className="h-12 w-12 object-contain"
        />
      </div>
      <h3 className="mt-4 font-semibold">{name}</h3>
      <p className="mt-2 text-sm text-neutral-700">{tagline}</p>
    </div>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <label className="text-sm inline-flex items-center gap-2">
      <span className="text-sub">{label}</span>
      <select
        className="rounded-lg border border-muted px-3 py-2 bg-panel text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function DocsTable({ files }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left border-b border-muted">
            <th className="py-2 pr-4">Title</th>
            <th className="py-2 pr-4">Type</th>
            <th className="py-2 pr-4">Lang</th>
            <th className="py-2 pr-4">Date</th>
            <th className="py-2 pr-4">Link</th>
          </tr>
        </thead>
        <tbody>
          {files.map((f, idx) => (
            <tr key={idx} className="border-b border-muted hover:bg-muted/40">
              <td className="py-2 pr-4">{f.title}</td>
              <td className="py-2 pr-4">{f.type}</td>
              <td className="py-2 pr-4">{f.lang || "-"}</td>
              <td className="py-2 pr-4">{f.date || "-"}</td>
              <td className="py-2 pr-4">
                <a className="inline-flex items-center gap-1 underline" href={encodeURI(f.path)} target="_blank" rel="noreferrer">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
