import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { siteConfig } from "./siteConfig";
import "./styles.css";

// Formatação de link direto para WhatsApp
function createWhatsappUrl(customText) {
  const text = customText || siteConfig.whatsappMessage;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

// Biblioteca de Ícones SVG inline
function Icon({ name, className = "" }) {
  switch (name) {
    case "phone":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      );
    case "ShieldCheck":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "Award":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      );
    case "FileText":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      );
    case "Package":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m7.5 4.27 9 5.15" />
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      );
    case "MapPin":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "Mail":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case "Play":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      );
    case "BarChart":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="16" />
        </svg>
      );
    case "Users":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );
    case "menu":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      );
    case "close":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    case "check":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case "facebook":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "youtube":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estado do Formulário "Formule seu NPK"
  const [npkForm, setNpkForm] = useState({
    n: "04",
    p: "14",
    k: "08",
    crop: "",
    packaging: "Big Bag de 1.000 kg",
    city: "",
    name: "",
    phone: ""
  });

  // Estado do Formulário "Seja Nosso Parceiro Comercial"
  const [partnerForm, setPartnerForm] = useState({
    name: "",
    company: "",
    role: "Representante Comercial",
    cityRegion: "",
    phone: "",
    message: ""
  });

  function handleNpkSubmit(e) {
    e.preventDefault();
    const msg =
      `Olá! Gostaria de solicitar uma *Formulação NPK Personalizada* na Vitadubo Fertilizantes:\n\n` +
      `• *Formulação NPK desejada:* ${npkForm.n} - ${npkForm.p} - ${npkForm.k} (com base de Esterco de Peru)\n` +
      `• *Cultura / Finalidade:* ${npkForm.crop || "A definir com especialista"}\n` +
      `• *Acondicionamento de preferência:* ${npkForm.packaging}\n` +
      `• *Cidade / UF:* ${npkForm.city || "Não informada"}\n` +
      `• *Nome:* ${npkForm.name || "Cliente"}\n` +
      `• *Telefone:* ${npkForm.phone || ""}`;
    window.open(createWhatsappUrl(msg), "_blank", "noopener,noreferrer");
  }

  function handlePartnerSubmit(e) {
    e.preventDefault();
    const msg =
      `Olá! Quero ser um *Parceiro Comercial da Vitadubo Fertilizantes*:\n\n` +
      `• *Nome:* ${partnerForm.name}\n` +
      `• *Empresa / Negócio:* ${partnerForm.company || "Atuação autônoma"}\n` +
      `• *Perfil de Atuação:* ${partnerForm.role}\n` +
      `• *Cidade e Região de Atuação:* ${partnerForm.cityRegion}\n` +
      `• *Telefone / WhatsApp:* ${partnerForm.phone}\n` +
      `• *Interesse Comercial:* ${partnerForm.message || "Representação / Revenda do portfólio Vitadubo"}`;
    window.open(createWhatsappUrl(msg), "_blank", "noopener,noreferrer");
  }

  // Escala máxima do gráfico (4.0% = 100% da altura útil das barras)
  const maxChartVal = 4.2;

  return (
    <div className="site-wrapper">
      {/* TOP BAR CORPORATIVA: SELO PADRÃO EXPORTAÇÃO + REDES SOCIAIS OFICIAIS */}
      <div className="top-banner">
        <div className="top-banner-inner">
          <span className="top-banner-badge">🌾 {siteConfig.companyBadge}</span>

          <div className="top-banner-socials">
            <a href={siteConfig.socials.facebookUrl} target="_blank" rel="noreferrer" className="top-social-item" aria-label="Facebook Vitadubo Fertilizantes">
              <Icon name="facebook" className="top-social-icon" />
              <span>{siteConfig.socials.facebookName}</span>
            </a>
            <span className="top-social-sep">-</span>
            <a href={siteConfig.socials.instagramUrl} target="_blank" rel="noreferrer" className="top-social-item" aria-label="Instagram Vitadubo">
              <Icon name="instagram" className="top-social-icon" />
              <span>{siteConfig.socials.instagramName}</span>
            </a>
            <span className="top-social-sep">-</span>
            <a href={siteConfig.socials.youtubeUrl} target="_blank" rel="noreferrer" className="top-social-item" aria-label="YouTube Vitadubo Fertilizantes">
              <Icon name="youtube" className="top-social-icon" />
              <span>{siteConfig.socials.youtubeName}</span>
            </a>
          </div>
        </div>
      </div>

      {/* HEADER PRINCIPAL COM LOGOMARCA OFICIAL E MENU SOLICITADO */}
      <header className="site-header">
        <div className="header-inner">
          <a href="#inicio" className="brand-logo-link" aria-label="Vitadubo Fertilizantes — Início">
            <img
              src="/vitadubo-logo-dark.svg"
              alt="VITADUBO Fertilizantes — Logomarca Oficial"
              className="brand-logo-img"
            />
          </a>

          <nav className="desktop-nav" aria-label="Navegação Principal">
            <a href="#inicio">Início</a>
            <a href="#quem-somos">Quem Somos</a>
            <a href="#esterco-de-peru">Esterco de Peru</a>
            <a href="#produtos">Nossos Produtos</a>
            <a href="#formule-npk">Formule seu NPK</a>
            <a href="#embalagens">Nossas Embalagens</a>
            <a href="#parceiro">Seja um Parceiro Comercial</a>
            <a href="#contato" className="nav-contact-pill">Contatos</a>
          </nav>

          <div className="header-actions">
            <a
              href={createWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp-header"
            >
              <Icon name="whatsapp" className="icon-btn" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir Menu de Navegação"
            >
              <Icon name={mobileMenuOpen ? "close" : "menu"} className="icon-toggle" />
            </button>
          </div>
        </div>

        {/* Menu Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <div className="mobile-drawer-inner">
              <nav className="mobile-nav-links">
                <a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Início</a>
                <a href="#quem-somos" onClick={() => setMobileMenuOpen(false)}>Quem Somos</a>
                <a href="#esterco-de-peru" onClick={() => setMobileMenuOpen(false)}>Esterco de Peru (Gráfico & Estudo)</a>
                <a href="#produtos" onClick={() => setMobileMenuOpen(false)}>Nossos Produtos</a>
                <a href="#formule-npk" onClick={() => setMobileMenuOpen(false)}>Formule seu NPK</a>
                <a href="#embalagens" onClick={() => setMobileMenuOpen(false)}>Nossas Embalagens</a>
                <a href="#especialista" onClick={() => setMobileMenuOpen(false)}>Fale com um Especialista</a>
                <a href="#parceiro" onClick={() => setMobileMenuOpen(false)}>Seja um Parceiro Comercial</a>
                <a href="#contato" onClick={() => setMobileMenuOpen(false)}>Contatos</a>
                <a
                  href={siteConfig.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-cert-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  📄 Certificado Oficial QIMA (PDF)
                </a>
              </nav>

              <div className="mobile-drawer-footer">
                <div className="mobile-contact-card">
                  <p className="mobile-card-title">Central de Atendimento Vitadubo</p>
                  <a href={`tel:${siteConfig.phoneRaw}`} className="mobile-phone-cta">
                    <Icon name="phone" className="icon-sm" />
                    <strong>{siteConfig.phoneDisplay}</strong>
                  </a>
                  <a
                    href={createWhatsappUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-full"
                  >
                    <Icon name="whatsapp" className="icon-btn" />
                    <span>Falar com Especialista no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* =================================================================
            1. SEÇÃO INÍCIO (HERO) COM LOGOMARCA VITADUBO FERTILIZANTES
            ================================================================= */}
        <section className="hero-section" id="inicio">
          <div className="hero-bg-overlay" />
          <div className="hero-glow-orb orb-1" />
          <div className="hero-glow-orb orb-2" />

          <div className="hero-container">
            <div className="hero-left">
              <div className="hero-eyebrow-pill">
                <span className="pill-dot" />
                <span>{siteConfig.hero.eyebrow}</span>
              </div>

              <h1 className="hero-heading">
                {siteConfig.hero.titleLine1}
                <span className="hero-highlight">{siteConfig.hero.titleLine2}</span>
              </h1>

              <p className="hero-description">{siteConfig.hero.paragraph1}</p>
              <p className="hero-description hero-description-strong">
                Com uma linha de fertilizantes à base de <strong className="text-gold">ESTERCO DE PERU</strong>, a Vitadubo trabalha para entregar qualidade, eficiência e alternativas que valorizam os recursos da natureza e as necessidades do produtor rural.
              </p>

              <div className="hero-slogan-banner">
                <span>🌱 {siteConfig.hero.slogan}</span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            2. SEÇÃO QUEM SOMOS + VÍDEO INSTITUCIONAL + MISSÃO, VISÃO E VALORES
            ================================================================= */}
        <section className="section section-about" id="quem-somos">
          <div className="container">
            <div className="section-head centered">
              <span className="section-tag">{siteConfig.about.tag}</span>
              <h2 className="section-title">{siteConfig.about.title}</h2>
              <p className="section-subtitle">
                Indústria brasileira sediada em Cordilheira Alta/SC, dedicada a transformar matérias-primas nobres em alta performance agrícola.
              </p>
            </div>

            <div className="about-top-grid">
              <div className="about-story-col">
                {siteConfig.about.paragraphs.map((p, idx) => (
                  <p key={idx} className="about-paragraph">{p}</p>
                ))}

                <div className="about-location-badge">
                  <Icon name="MapPin" className="icon-sm text-gold" />
                  <div>
                    <strong>Sede Industrial Própria desde 2021</strong>
                    <span>{siteConfig.address}</span>
                  </div>
                </div>
              </div>

              <div className="about-video-col">
                <div className="video-card-frame">
                  <div className="video-badge-header">
                    <span className="video-live-dot" />
                    <strong>VÍDEO INSTITUCIONAL — CONHEÇA A VITADUBO FERTILIZANTES</strong>
                  </div>
                  <div className="video-responsive-embed">
                    <iframe
                      src={siteConfig.videos.institutionalEmbed}
                      title=" Institucional Vitadubo Fertilizantes"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="video-card-footer">
                    <span>Assista e conheça nossa estrutura industrial e compromisso com o campo.</span>
                    <a
                      href={siteConfig.videos.institutionalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="video-ext-link"
                    >
                      Abrir no YouTube ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Missão & Visão */}
            <div className="mission-vision-grid">
              <div className="mv-card">
                <span className="pillar-tag-badge">PROPÓSITO INDUSTRIAL</span>
                <h3>{siteConfig.about.mission.title}</h3>
                <p>{siteConfig.about.mission.text}</p>
              </div>
              <div className="mv-card highlight-card">
                <span className="pillar-tag-badge highlight">FUTURO &amp; EXCELÊNCIA</span>
                <h3>{siteConfig.about.vision.title}</h3>
                <p>{siteConfig.about.vision.text}</p>
              </div>
            </div>

            {/* Nossos Valores (6 cards) */}
            <div className="values-block">
              <h3 className="subsection-heading centered">Nossos valores</h3>
              <div className="values-grid">
                {siteConfig.about.values.map((val, i) => (
                  <div className="value-item-card" key={i}>
                    <div className="value-check-icon">
                      <Icon name="ShieldCheck" className="icon-sm" />
                    </div>
                    <div>
                      <h4>{val.title}</h4>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nosso Compromisso */}
            <div className="commitment-banner">
              <div className="commitment-inner">
                <h3>{siteConfig.about.commitment.title}</h3>
                <p>{siteConfig.about.commitment.text}</p>
                <strong className="commitment-signature">{siteConfig.about.commitment.signature}</strong>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            3. SEÇÃO ESTERCO DE PERU: O DIFERENCIAL TECNOLÓGICO +
               INFOGRÁFICO DE AVIÁRIO + GRÁFICO E TABELA DE NUTRIENTES (RIO VERDE/GO)
            ================================================================= */}
        <section className="section section-diferencial" id="esterco-de-peru">
          <div className="container">
            <div className="section-head centered">
              <span className="section-tag">{siteConfig.turkeyManure.tag}</span>
              <h2 className="section-title">{siteConfig.turkeyManure.title}</h2>
              <p className="section-subtitle">
                <strong>{siteConfig.turkeyManure.subtitle}</strong>
              </p>
              <p className="diferencial-intro-text">{siteConfig.turkeyManure.intro}</p>
            </div>

            {/* Bloco Visual: Infográfico Oficial "Por quê o esterco de peru é melhor?" */}
            <div className="aviary-infographic-wrapper">
              <div className="aviary-infographic-header">
                <h3>{siteConfig.turkeyManure.originTitle}</h3>
                <p>{siteConfig.turkeyManure.originSubtitle}</p>
              </div>

              <div className="aviary-image-container">
                <img
                  src={siteConfig.turkeyManure.infographicImage}
                  alt="Por quê o esterco de peru é melhor? Comparação entre Galinha (5 cm), Frango (8 cm) e Peru (20 cm) sobre 10 cm de maravalha"
                  className="aviary-infographic-img"
                />
              </div>

              <div className="turkey-blocks-grid">
                {siteConfig.turkeyManure.blocks.map((b, i) => (
                  <div className="diferencial-card" key={i}>
                    <div className="dif-stat-pill">{b.badge}</div>
                    <h4 className="dif-title">{b.title}</h4>
                    <p className="dif-desc">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* =============================================================
                PAINEL CIENTÍFICO SOLICITADO PELO CLIENTE ("Colocar aqui"):
                GRÁFICO DE BARRAS + TABELA + FONTES (MENEZES ET AL., 2026)
                ============================================================= */}
            <div className="scientific-study-panel" id="grafico-nutrientes">
              <div className="study-panel-top">
                <span className="study-badge-pill">
                  <Icon name="BarChart" className="icon-sm" />
                  {siteConfig.turkeyManure.studyChart.badge}
                </span>
                <h3 className="study-main-title">{siteConfig.turkeyManure.studyChart.title}</h3>
                <p className="study-main-subtitle">{siteConfig.turkeyManure.studyChart.subtitle}</p>
              </div>

              <div className="study-chart-and-table-grid">
                {/* Coluna Esquerda: Gráfico de Barras Fiel ao Estudo de Rio Verde (GO) */}
                <div className="study-chart-card">
                  <div className="chart-legend-row">
                    <div className="chart-legend-item">
                      <span className="legend-bar-indicator chicken-color" />
                      <span>{siteConfig.turkeyManure.studyChart.legendChicken}</span>
                    </div>
                    <div className="chart-legend-item">
                      <span className="legend-bar-indicator turkey-color" />
                      <span>{siteConfig.turkeyManure.studyChart.legendTurkey}</span>
                    </div>
                  </div>

                  {/* Área de Plotagem com Linhas Pontilhadas e Barras Agrupadas */}
                  <div className="chart-plot-area">
                    <div className="chart-grid-line line-top" />
                    <div className="chart-grid-line line-mid-high" />
                    <div className="chart-grid-line line-mid-low" />
                    <div className="chart-grid-line line-bottom" />

                    <div className="chart-groups-row">
                      {siteConfig.turkeyManure.studyChart.bars.map((item, idx) => {
                        const chickenHeightPct = Math.round((item.chickenValue / maxChartVal) * 100);
                        const turkeyHeightPct = Math.round((item.turkeyValue / maxChartVal) * 100);
                        return (
                          <div className="chart-group-col" key={idx}>
                            <div className="chart-bars-pair">
                              {/* Barra Cama de Frango */}
                              <div className="bar-wrapper">
                                <span className="bar-value-label">{item.chickenDisplay}</span>
                                <div
                                  className="bar-column bar-chicken"
                                  style={{ height: `${chickenHeightPct}%` }}
                                  title={`Cama de frango — ${item.nutrient}: ${item.chickenDisplay}`}
                                />
                              </div>

                              {/* Barra Cama de Peru */}
                              <div className="bar-wrapper">
                                <span className="bar-gain-pill">{item.diff}</span>
                                <span className="bar-value-label bar-value-turkey">{item.turkeyDisplay}</span>
                                <div
                                  className="bar-column bar-turkey"
                                  style={{ height: `${turkeyHeightPct}%` }}
                                  title={`Cama de peru — ${item.nutrient}: ${item.turkeyDisplay} (${item.diff})`}
                                />
                              </div>
                            </div>
                            <span className="chart-axis-label">{item.nutrient}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <p className="chart-source-caption">
                    {siteConfig.turkeyManure.studyChart.source}
                  </p>
                </div>

                {/* Coluna Direita: Tabela Comparativa Completa + Matéria Orgânica */}
                <div className="study-table-card">
                  <div className="study-table-header">
                    <h4>Comparativo Bromatológico Direto</h4>
                    <span>Amostras analisadas em base seca — Rio Verde (GO)</span>
                  </div>

                  <div className="study-table-wrapper">
                    <table className="study-comparison-table">
                      <thead>
                        <tr>
                          <th>Nutriente</th>
                          <th>Cama de frango</th>
                          <th>Cama de peru</th>
                          <th>Diferença observada</th>
                        </tr>
                      </thead>
                      <tbody>
                        {siteConfig.turkeyManure.studyChart.tableRows.map((row, idx) => (
                          <tr key={idx}>
                            <td className="st-nutrient-cell">
                              <strong>{row.nutrient}</strong>
                            </td>
                            <td className="st-chicken-cell">{row.chicken}</td>
                            <td className="st-turkey-cell">
                              <strong>{row.turkey}</strong>
                            </td>
                            <td className="st-diff-cell">
                              <span className="st-diff-badge">{row.diff}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Barra Visual Complementar de Matéria Orgânica (34% vs 47%) */}
                  <div className="mo-comparison-box">
                    <div className="mo-box-head">
                      <strong>Densidade de Matéria Orgânica na Cama Bruta</strong>
                      <span className="mo-diff-tag">+38% superior no Peru</span>
                    </div>
                    <div className="mo-bars-stack">
                      <div className="mo-progress-row">
                        <span className="mo-label">Cama de frango</span>
                        <div className="mo-track">
                          <div className="mo-fill mo-fill-chicken" style={{ width: "62%" }} />
                        </div>
                        <strong className="mo-val">34%</strong>
                      </div>
                      <div className="mo-progress-row">
                        <span className="mo-label">Cama de peru</span>
                        <div className="mo-track">
                          <div className="mo-fill mo-fill-turkey" style={{ width: "88%" }} />
                        </div>
                        <strong className="mo-val text-gold">47%</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Cards de Relevância Agronômica + Nota Técnica e Fontes */}
              <div className="study-insights-grid">
                {siteConfig.turkeyManure.studyChart.agronomicHighlights.map((hl, i) => (
                  <div className="study-insight-card" key={i}>
                    <span className="insight-metric-pill">{hl.metric}</span>
                    <h4>{hl.title}</h4>
                    <p>{hl.desc}</p>
                  </div>
                ))}
              </div>

              <div className="study-scientific-footnote">
                <Icon name="Award" className="footnote-icon text-gold" />
                <div>
                  <strong>Referência Científica &amp; Fundamentação Agronômica:</strong>{" "}
                  <span>
                    {siteConfig.turkeyManure.studyChart.source} {siteConfig.turkeyManure.studyChart.complementarySources}
                  </span>
                </div>
              </div>
            </div>

            {/* =============================================================
                BLOCO PROCESSO INDUSTRIAL + QUADRO COMPARATIVO COM FONTE
                ============================================================= */}
            <div className="industrial-process-panel" id="processo-industrial">
              <div className="industrial-process-header">
                <span className="section-tag">{siteConfig.turkeyManure.industrialProcess.badge}</span>
                <h3 className="industrial-process-title">{siteConfig.turkeyManure.industrialProcess.title}</h3>
              </div>

              <div className="industrial-process-text-grid">
                {siteConfig.turkeyManure.industrialProcess.paragraphs.map((p, idx) => (
                  <p key={idx} className="industrial-process-paragraph">{p}</p>
                ))}
              </div>

              <div className="industrial-table-card">
                <div className="industrial-table-head">
                  <h4>{siteConfig.turkeyManure.industrialProcess.tableTitle}</h4>
                </div>

                <div className="industrial-table-wrapper">
                  <table className="industrial-comparison-table">
                    <thead>
                      <tr>
                        {siteConfig.turkeyManure.industrialProcess.tableHeaders.map((th, i) => (
                          <th key={i}>{th}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {siteConfig.turkeyManure.industrialProcess.tableRows.map((row, idx) => (
                        <tr key={idx}>
                          <td className="ind-criterion-cell">
                            <strong>{row.criterion}</strong>
                          </td>
                          <td className="ind-advantage-cell">
                            <span className="ind-check-dot">✓</span>
                            <span>{row.cooledAdvantage}</span>
                          </td>
                          <td className="ind-disadvantage-cell">
                            <span>{row.heatedDisadvantage}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="industrial-table-footnotes">
                  <p className="industrial-ref-text">
                    <strong>📚 {siteConfig.turkeyManure.industrialProcess.references}</strong>
                  </p>
                  <p className="industrial-note-text">
                    <strong>Nota técnica:</strong> {siteConfig.turkeyManure.industrialProcess.technicalNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            4. SEÇÃO NOSSOS PRODUTOS:
               - FERTILIZANTE ORGÂNICO SIMPLES CLASSE "A" + BOTÃO DE FOLDER + VÍDEO
               - VITAPHOS MAX + ARTE CERTIFICADO QIMA + PDF DECLARAÇÃO
               - FERTILIZANTES ORGANOMINERAIS CLASSE "A" (NPK PERSONALIZADO)
            ================================================================= */}
        <section className="section section-products" id="produtos">
          <div className="container">
            <div className="section-head centered">
              <span className="section-tag">{siteConfig.productsSection.eyebrow}</span>
              <h2 className="section-title">{siteConfig.productsSection.title}</h2>
              <p className="section-subtitle">{siteConfig.productsSection.subtitle}</p>
            </div>

            {/* PRODUTO 1: FERTILIZANTE ORGÂNICO SIMPLES CLASSE “A” – À BASE DE ESTERCO DE PERU */}
            <div className="product-feature-block">
              <div className="pf-header">
                <span className="pf-badge">{siteConfig.productsSection.organicSimple.badge}</span>
                <h3 className="pf-title">{siteConfig.productsSection.organicSimple.title}</h3>
                <p className="pf-subtitle">{siteConfig.productsSection.organicSimple.subtitle}</p>
                <p className="pf-desc">{siteConfig.productsSection.organicSimple.description}</p>
              </div>

              <div className="pf-organic-grid">
                <div className="pf-benefits-list-grid">
                  {siteConfig.productsSection.organicSimple.benefits.map((b, i) => (
                    <div className="pf-benefit-item" key={i}>
                      <div className="pf-check-circle">
                        <Icon name="check" className="icon-xs" />
                      </div>
                      <div>
                        <strong>{b.title}</strong> <span>{b.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Coluna Lateral: Vídeo do Produto + Botão de Folder Oficial */}
                <div className="pf-media-sidebar">
                  <div className="video-card-frame dark-frame">
                    <div className="video-badge-header">
                      <span className="video-live-dot" />
                      <strong>VÍDEO TÉCNICO — FERTILIZANTE ORGÂNICO CLASSE “A”</strong>
                    </div>
                    <div className="video-responsive-embed">
                      <iframe
                        src={siteConfig.videos.productEmbed}
                        title="Fertilizante Orgânico Simples Classe A — Vitadubo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* BOTÃO DE FOLDER OFICIAL SOLICITADO NO DOCUMENTO */}
                  <div className="folder-download-card">
                    <div className="folder-card-info">
                      <Icon name="FileText" className="folder-icon text-gold" />
                      <div>
                        <span className="folder-eyebrow">CATÁLOGO &amp; ESPECIFICAÇÕES TÉCNICAS</span>
                        <h4>Folder Oficial Vitadubo Fertilizantes</h4>
                        <p>Confira todas as informações técnicas, recomendações e detalhes da nossa linha.</p>
                      </div>
                    </div>
                    <div className="folder-card-actions">
                      <a
                        href={siteConfig.folderUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-full btn-glow"
                      >
                        <Icon name="FileText" className="icon-btn" />
                        <span>Visualizar / Baixar Folder Oficial (PDF)</span>
                      </a>
                      <a
                        href={createWhatsappUrl(
                          "Olá! Gostaria de solicitar uma cotação do Fertilizante Orgânico Simples Classe 'A' à base de Esterco de Peru."
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary btn-full"
                      >
                        <Icon name="whatsapp" className="icon-btn" />
                        <span>Solicitar Cotação deste Produto</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PRODUTO 2: FERTILIZANTE ORGANOMINERAL CLASSE “A” — VITAPHOS MAX + ARTE QIMA */}
            <div className="product-feature-block vitaphos-highlight-block">
              <div className="vitaphos-grid">
                <div className="vitaphos-content-col">
                  <span className="pf-badge gold-badge">{siteConfig.productsSection.vitaphosMax.badge}</span>
                  <h3 className="pf-title light-title">{siteConfig.productsSection.vitaphosMax.title}</h3>
                  <p className="pf-subtitle gold-subtitle">{siteConfig.productsSection.vitaphosMax.subtitle}</p>

                  {siteConfig.productsSection.vitaphosMax.paragraphs.map((p, i) => (
                    <p className="pf-desc light-desc" key={i}>{p}</p>
                  ))}

                  <h4 className="vitaphos-subhead">Principais diferenciais</h4>
                  <ul className="vitaphos-diff-list">
                    {siteConfig.productsSection.vitaphosMax.differentials.map((d, i) => (
                      <li key={i}>
                        <Icon name="check" className="icon-check text-gold" />
                        <div>
                          <strong>{d.title}</strong> <span>{d.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Bloco Certificado para uso na Agricultura Orgânica */}
                  <div className="vitaphos-qima-box">
                    <div className="vq-header">
                      <Icon name="ShieldCheck" className="vq-icon text-gold" />
                      <div>
                        <span className="vq-tag">DECLARAÇÃO Nº {siteConfig.productsSection.vitaphosMax.qimaDeclarationNumber} • {siteConfig.productsSection.vitaphosMax.mapaReg}</span>
                        <h4>{siteConfig.productsSection.vitaphosMax.certTitle}</h4>
                      </div>
                    </div>
                    <p>{siteConfig.productsSection.vitaphosMax.certText1}</p>
                    <p className="vq-highlight-quote">{siteConfig.productsSection.vitaphosMax.certText2}</p>

                    <div className="vq-norms-row">
                      <small>Normas Internacionais Aprovadas:</small>
                      <div className="vq-norm-badges">
                        {siteConfig.productsSection.vitaphosMax.approvedNorms.map((norm) => (
                          <span key={norm} className="vq-norm-pill">{norm}</span>
                        ))}
                      </div>
                    </div>

                    <div className="vq-actions">
                      <a
                        href={siteConfig.vitaphosDeclarationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-glow"
                      >
                        <Icon name="FileText" className="icon-btn" />
                        <span>Ver Declaração QIMA — Vitaphos Max (PDF)</span>
                      </a>
                      <a
                        href={siteConfig.certificateUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary"
                      >
                        <Icon name="ShieldCheck" className="icon-btn text-gold" />
                        <span>Ver Certificado Regenera QIMA (PDF)</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Arte Oficial do Produto Certificado QIMA (rId10 do documento) */}
                <div className="vitaphos-art-col">
                  <div className="vitaphos-poster-card">
                    <img
                      src={siteConfig.productsSection.vitaphosMax.artImage}
                      alt="Vitaphos Max — Insumo Aprovado para Uso na Agricultura Orgânica — Regenera QIMA"
                      className="vitaphos-poster-img"
                    />
                    <div className="vitaphos-poster-caption">
                      <span>✅ Insumo auditado e aprovado pela QIMA (Norma Regenera For Inputs &amp; Produção Orgânica)</span>
                      <a
                        href={createWhatsappUrl(
                          "Olá! Quero saber mais e solicitar cotação do *Vitaphos Max* (Fertilizante Organomineral Classe 'A' aprovado para Agricultura Orgânica - QIMA)."
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-full"
                      >
                        <Icon name="whatsapp" className="icon-btn" />
                        <span>Solicitar Cotação do Vitaphos Max</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PRODUTO 3: FERTILIZANTES ORGANOMINERAIS CLASSE “A” — VITADUBO (FORMULAÇÃO PERSONALIZADA) */}
            <div className="product-feature-block custom-organo-block">
              <div className="custom-organo-grid">
                <div>
                  <span className="pf-badge">{siteConfig.productsSection.organomineralCustom.badge}</span>
                  <h3 className="pf-title">{siteConfig.productsSection.organomineralCustom.title}</h3>
                  <p className="pf-subtitle">{siteConfig.productsSection.organomineralCustom.subtitle}</p>

                  {siteConfig.productsSection.organomineralCustom.paragraphs.map((p, i) => (
                    <p className="pf-desc" key={i}>{p}</p>
                  ))}

                  <h4 className="organo-tagline">{siteConfig.productsSection.organomineralCustom.tagline}</h4>
                  <div className="organo-highlights-grid">
                    {siteConfig.productsSection.organomineralCustom.highlights.map((h, i) => (
                      <div className="organo-hl-card" key={i}>
                        <Icon name="check" className="icon-check" />
                        <div>
                          <strong>{h.title}</strong> <span>{h.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="organo-closing-card">
                  <span className="organo-closing-tag">SOB MEDIDA PARA O SEU SOLO</span>
                  <h4>{siteConfig.productsSection.organomineralCustom.closingTitle}</h4>
                  <p>{siteConfig.productsSection.organomineralCustom.closingText}</p>
                  <strong className="organo-closing-sig">
                    {siteConfig.productsSection.organomineralCustom.closingSignature}
                  </strong>
                  <p className="organo-closing-cta-note">
                    Solicite sua formulação personalizada e converse com nossa equipe comercial.
                  </p>
                  <a href="#formule-npk" className="btn btn-primary btn-full btn-glow">
                    <span>Formular Meu NPK Agora</span>
                    <Icon name="arrow-right" className="icon-btn" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            5. SEÇÃO FORMULE SEU NPK (CONFIGURADOR & SOLICITAÇÃO SOB MEDIDA)
            ================================================================= */}
        <section className="section section-formule-npk" id="formule-npk">
          <div className="container">
            <div className="section-head centered light">
              <span className="section-tag light">{siteConfig.formulateNpk.tag}</span>
              <h2 className="section-title">{siteConfig.formulateNpk.title}</h2>
              <p className="section-subtitle light">{siteConfig.formulateNpk.subtitle}</p>
            </div>

            <div className="npk-intro-box">
              {siteConfig.formulateNpk.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* 4 Pilares da Formulação: N, P, K e Matéria Orgânica */}
            <h3 className="npk-sub-heading">{siteConfig.formulateNpk.componentsTitle}</h3>
            <div className="npk-components-grid">
              {siteConfig.formulateNpk.components.map((c, i) => (
                <div className="npk-comp-card" key={i}>
                  <div className="npk-symbol-badge">{c.symbol}</div>
                  <h4>{c.name}</h4>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>

            {/* Como funciona (4 etapas) + Configurador Interativo de NPK */}
            <div className="npk-work-and-form-grid">
              <div className="npk-steps-col">
                <h3>{siteConfig.formulateNpk.howItWorksTitle}</h3>
                <div className="npk-steps-list">
                  {siteConfig.formulateNpk.steps.map((s, i) => (
                    <div className="npk-step-item" key={i}>
                      <div className="npk-step-num">{s.step}</div>
                      <div>
                        <strong>{s.title}</strong>
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="npk-cta-text-box">
                  <h4>{siteConfig.formulateNpk.ctaTitle}</h4>
                  <p>{siteConfig.formulateNpk.ctaText}</p>
                  <strong>{siteConfig.formulateNpk.ctaSignature}</strong>
                </div>
              </div>

              {/* Card Interativo: Solicite sua Formulação Personalizada */}
              <div className="npk-builder-card glass-panel">
                <span className="contact-badge-pill">SIMULADOR DE PEDIDO • NPK + ESTERCO DE PERU</span>
                <h3>Monte e Solicite sua Formulação</h3>
                <p>Informe os teores desejados de N-P-K e envie diretamente para avaliação técnica da nossa indústria:</p>

                <form onSubmit={handleNpkSubmit} className="custom-npk-form">
                  <div className="npk-inputs-row">
                    <div className="npk-input-group">
                      <label htmlFor="npk-n">Nitrogênio (N %)</label>
                      <input
                        id="npk-n"
                        type="text"
                        value={npkForm.n}
                        onChange={(e) => setNpkForm({ ...npkForm, n: e.target.value })}
                        placeholder="Ex: 04"
                      />
                    </div>
                    <div className="npk-input-group">
                      <label htmlFor="npk-p">Fósforo (P₂O₅ %)</label>
                      <input
                        id="npk-p"
                        type="text"
                        value={npkForm.p}
                        onChange={(e) => setNpkForm({ ...npkForm, p: e.target.value })}
                        placeholder="Ex: 14"
                      />
                    </div>
                    <div className="npk-input-group">
                      <label htmlFor="npk-k">Potássio (K₂O %)</label>
                      <input
                        id="npk-k"
                        type="text"
                        value={npkForm.k}
                        onChange={(e) => setNpkForm({ ...npkForm, k: e.target.value })}
                        placeholder="Ex: 08"
                      />
                    </div>
                  </div>

                  <div className="npk-preview-strip">
                    <span>Formulação selecionada:</span>
                    <strong>NPK {npkForm.n || "00"} - {npkForm.p || "00"} - {npkForm.k || "00"} + Base Orgânica de Peru</strong>
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="npk-crop">Cultura / Finalidade Agronômica</label>
                    <input
                      id="npk-crop"
                      type="text"
                      value={npkForm.crop}
                      onChange={(e) => setNpkForm({ ...npkForm, crop: e.target.value })}
                      placeholder="Ex: Soja, Milho, Trigo, Café, Pastagem, Hortifrúti..."
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-field-group">
                      <label htmlFor="npk-pkg">Embalagem Preferida</label>
                      <select
                        id="npk-pkg"
                        value={npkForm.packaging}
                        onChange={(e) => setNpkForm({ ...npkForm, packaging: e.target.value })}
                      >
                        <option value="Saca de 25 kg">Saca de 25 kg</option>
                        <option value="Saca de 40 kg">Saca de 40 kg</option>
                        <option value="Big Bag de 1.000 kg">Big Bag de 1.000 kg</option>
                        <option value="Granel">Carga A Granel</option>
                      </select>
                    </div>
                    <div className="form-field-group">
                      <label htmlFor="npk-city">Sua Cidade / UF</label>
                      <input
                        id="npk-city"
                        type="text"
                        value={npkForm.city}
                        onChange={(e) => setNpkForm({ ...npkForm, city: e.target.value })}
                        placeholder="Ex: Chapecó - SC"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field-group">
                      <label htmlFor="npk-name">Seu Nome</label>
                      <input
                        id="npk-name"
                        type="text"
                        value={npkForm.name}
                        onChange={(e) => setNpkForm({ ...npkForm, name: e.target.value })}
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="form-field-group">
                      <label htmlFor="npk-phone">Telefone / WhatsApp</label>
                      <input
                        id="npk-phone"
                        type="text"
                        value={npkForm.phone}
                        onChange={(e) => setNpkForm({ ...npkForm, phone: e.target.value })}
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg btn-full btn-glow">
                    <Icon name="whatsapp" className="icon-btn" />
                    <span>{siteConfig.formulateNpk.ctaButton}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            6. SEÇÃO NOSSAS EMBALAGENS (25KG, 40KG, BIG BAG 1.000KG E GRANEL)
            ================================================================= */}
        <section className="section section-packaging" id="embalagens">
          <div className="container">
            <div className="section-head centered">
              <span className="section-tag">{siteConfig.packagingSection.tag}</span>
              <h2 className="section-title">{siteConfig.packagingSection.title}</h2>
              <p className="section-subtitle">{siteConfig.packagingSection.subtitle}</p>
              <p className="packaging-intro-text">{siteConfig.packagingSection.intro}</p>
            </div>

            <div className="packaging-grid">
              {siteConfig.packagingSection.options.map((pkg, i) => (
                <div className="packaging-card" key={i}>
                  <div className="pkg-icon-circle">
                    <Icon name="Package" className="icon-pkg" />
                  </div>
                  <span className="pkg-badge">{pkg.badge}</span>
                  <h3 className="pkg-title">{pkg.title}</h3>
                  <p className="pkg-desc">{pkg.desc}</p>
                </div>
              ))}
            </div>

            <div className="logistics-notice">
              <Icon name="ShieldCheck" className="logistics-icon" />
              <div>
                <strong>{siteConfig.packagingSection.closingSignature}</strong>
                <span>{siteConfig.packagingSection.closingText}</span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            7. SEÇÃO CERTIFICADOS OFICIAIS QIMA & LAUDO TÉCNICO
            ================================================================= */}
        <section className="section section-lab" id="certificados">
          <div className="container">
            <div className="section-head centered light">
              <span className="section-tag light">TRANSPARÊNCIA TOTAL &amp; COMPROVAÇÃO OFICIAL</span>
              <h2 className="section-title">Certificações QIMA — Agricultura Orgânica &amp; Regenerativa</h2>
              <p className="section-subtitle light">
                Documentos oficiais auditados pela QIMA (Programa Regenera &amp; Agricultura Orgânica) da Vitadubo Fertilizantes.
              </p>
            </div>

            <div className="qima-cert-banner glass-panel">
              <div className="qima-cert-content">
                <div className="qima-cert-badge-row">
                  <span className="qima-pill-gold">
                    <Icon name="ShieldCheck" className="icon-sm" />
                    {siteConfig.qimaCertificate.badge}
                  </span>
                  <span className="qima-pill-code">Certificado Nº {siteConfig.qimaCertificate.certNumber}</span>
                  <span className="qima-pill-code">Declaração Nº {siteConfig.qimaCertificate.declarationNumber}</span>
                  <span className="qima-pill-code">Cód. {siteConfig.qimaCertificate.companyCode}</span>
                </div>

                <h3 className="qima-cert-title">{siteConfig.qimaCertificate.title}</h3>
                <p className="qima-cert-desc">{siteConfig.qimaCertificate.description}</p>

                <div className="qima-meta-grid">
                  <div className="qima-meta-item">
                    <small>Unidade Responsável Auditada</small>
                    <strong>Vitadubo Fertilizantes Ltda (CNPJ: {siteConfig.cnpj})</strong>
                  </div>
                  <div className="qima-meta-item">
                    <small>Norma &amp; Sustentabilidade</small>
                    <strong>{siteConfig.qimaCertificate.norm}</strong>
                  </div>
                  <div className="qima-meta-item">
                    <small>Escopo &amp; Normas Orgânicas</small>
                    <strong>{siteConfig.qimaCertificate.scope}</strong>
                  </div>
                </div>
              </div>

              <div className="qima-cert-actions">
                <div className="qima-seal-box">
                  <Icon name="Award" className="qima-seal-icon" />
                  <strong>DOCUMENTOS OFICIAIS QIMA</strong>
                  <span>Clique abaixo para abrir ou baixar os PDFs autenticados</span>
                </div>
                <a
                  href={siteConfig.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-full btn-glow"
                >
                  <Icon name="FileText" className="icon-btn" />
                  <span>Certificado QIMA Regenera (PDF)</span>
                </a>
                <a
                  href={siteConfig.vitaphosDeclarationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-full"
                >
                  <Icon name="FileText" className="icon-btn text-gold" />
                  <span>Declaração Vitaphos Max Orgânico (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            8. SEÇÃO FALE COM UM ESPECIALISTA
            ================================================================= */}
        <section className="section section-specialist" id="especialista">
          <div className="container">
            <div className="specialist-banner-card">
              <div className="specialist-content">
                <span className="section-tag">{siteConfig.specialistSection.tag}</span>
                <h2 className="section-title">{siteConfig.specialistSection.title}</h2>
                <p className="specialist-lead">{siteConfig.specialistSection.subtitle}</p>

                {siteConfig.specialistSection.paragraphs.map((p, i) => (
                  <p className="specialist-p" key={i}>{p}</p>
                ))}

                <strong className="specialist-signature">{siteConfig.specialistSection.signature}</strong>
              </div>

              <div className="specialist-cta-col">
                <div className="specialist-action-box">
                  <Icon name="Users" className="spec-box-icon" />
                  <h3>Orientação Técnica Personalizada</h3>
                  <p>Converse diretamente com a equipe da Vitadubo pelo WhatsApp ou Telefone:</p>
                  <a href={`tel:${siteConfig.phoneRaw}`} className="spec-phone-big">
                    <Icon name="phone" className="icon-sm" />
                    <span>{siteConfig.phoneDisplay}</span>
                  </a>
                  <a
                    href={createWhatsappUrl(
                      "Olá! Gostaria de falar com um especialista da Vitadubo Fertilizantes para orientação nutricional da minha lavoura."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-lg btn-full btn-glow"
                  >
                    <Icon name="whatsapp" className="icon-btn" />
                    <span>{siteConfig.specialistSection.ctaButton}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            9. SEÇÃO SEJA NOSSO PARCEIRO COMERCIAL (REPRESENTANTES, REVENDAS E DISTRIBUIDORES)
            ================================================================= */}
        <section className="section section-partner" id="parceiro">
          <div className="container">
            <div className="section-head centered">
              <span className="section-tag">{siteConfig.partnerSection.tag}</span>
              <h2 className="section-title">{siteConfig.partnerSection.title}</h2>
              <p className="section-subtitle">{siteConfig.partnerSection.subtitle}</p>
            </div>

            <div className="partner-main-grid">
              <div className="partner-info-col">
                {siteConfig.partnerSection.paragraphs.map((p, i) => (
                  <p className="partner-p" key={i}>{p}</p>
                ))}

                <h3 className="partner-subhead">{siteConfig.partnerSection.whyTitle}</h3>
                <ul className="partner-reasons-list">
                  {siteConfig.partnerSection.whyReasons.map((r, i) => (
                    <li key={i}>
                      <div className="pf-check-circle">
                        <Icon name="check" className="icon-xs" />
                      </div>
                      <div>
                        <strong>{r.title}</strong> <span>{r.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="partner-who-box">
                  <h4>{siteConfig.partnerSection.whoTitle}</h4>
                  <p>{siteConfig.partnerSection.whoText1}</p>
                  <p><strong>{siteConfig.partnerSection.whoText2}</strong></p>
                </div>

                <div className="partner-grow-box">
                  <h4>{siteConfig.partnerSection.growTitle}</h4>
                  <p>{siteConfig.partnerSection.growText}</p>
                  <strong className="partner-sig">{siteConfig.partnerSection.signature}</strong>
                </div>
              </div>

              {/* Formulário de Cadastro de Parceiro Comercial */}
              <div className="partner-form-col">
                <div className="partner-form-card">
                  <span className="pf-badge">CADASTRO DE PARCEIROS COMERCIAIS</span>
                  <h3>Quero ser Parceiro Vitadubo</h3>
                  <p>Preencha seus dados abaixo para falar com nossa diretoria comercial:</p>

                  <form onSubmit={handlePartnerSubmit} className="partner-form">
                    <div className="form-field-group light-field">
                      <label htmlFor="pt-name">Seu Nome Completo *</label>
                      <input
                        id="pt-name"
                        type="text"
                        required
                        value={partnerForm.name}
                        onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                        placeholder="Digite seu nome"
                      />
                    </div>

                    <div className="form-row-2">
                      <div className="form-field-group light-field">
                        <label htmlFor="pt-company">Empresa / Revenda</label>
                        <input
                          id="pt-company"
                          type="text"
                          value={partnerForm.company}
                          onChange={(e) => setPartnerForm({ ...partnerForm, company: e.target.value })}
                          placeholder="Nome da empresa (opcional)"
                        />
                      </div>
                      <div className="form-field-group light-field">
                        <label htmlFor="pt-role">Segmento de Atuação</label>
                        <select
                          id="pt-role"
                          value={partnerForm.role}
                          onChange={(e) => setPartnerForm({ ...partnerForm, role: e.target.value })}
                        >
                          <option value="Representante Comercial">Representante Comercial</option>
                          <option value="Loja Agropecuária / Revenda">Loja Agropecuária / Revenda</option>
                          <option value="Distribuidor Agrícola">Distribuidor Agrícola</option>
                          <option value="Cooperativa">Cooperativa</option>
                          <option value="Consultor Agronômico">Consultor Agronômico</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-field-group light-field">
                        <label htmlFor="pt-city">Cidade e Região de Atuação *</label>
                        <input
                          id="pt-city"
                          type="text"
                          required
                          value={partnerForm.cityRegion}
                          onChange={(e) => setPartnerForm({ ...partnerForm, cityRegion: e.target.value })}
                          placeholder="Ex: Oeste de SC / Sudoeste do PR"
                        />
                      </div>
                      <div className="form-field-group light-field">
                        <label htmlFor="pt-phone">Telefone / WhatsApp *</label>
                        <input
                          id="pt-phone"
                          type="text"
                          required
                          value={partnerForm.phone}
                          onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                    </div>

                    <div className="form-field-group light-field">
                      <label htmlFor="pt-msg">Interesse Comercial / Mensagem</label>
                      <textarea
                        id="pt-msg"
                        rows="3"
                        value={partnerForm.message}
                        onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                        placeholder="Conte um pouco sobre sua carteira de clientes, região e interesse de parceria..."
                      />
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg btn-full btn-glow">
                      <Icon name="whatsapp" className="icon-btn" />
                      <span>{siteConfig.partnerSection.ctaButton}</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            10. SEÇÃO CONTATOS OFICIAIS
            ================================================================= */}
        <section className="section section-cta-form" id="contato">
          <div className="container">
            <div className="section-head centered light">
              <span className="section-tag light">CANAIS OFICIAIS DE ATENDIMENTO</span>
              <h2 className="section-title">Contatos Vitadubo Fertilizantes</h2>
              <p className="section-subtitle light">
                Fale diretamente com nossa sede em Cordilheira Alta/SC por telefone, WhatsApp, e-mail ou redes sociais.
              </p>
            </div>

            <div className="contacts-cards-grid">
              <a href={`tel:${siteConfig.phoneRaw}`} className="contact-channel-card glass-panel">
                <div className="cc-icon-wrap">
                  <Icon name="phone" className="cc-icon" />
                </div>
                <span className="cc-label">TELEFONE COMERCIAL</span>
                <strong className="cc-value">{siteConfig.phoneDisplay}</strong>
                <span className="cc-action">Clique para ligar agora ↗</span>
              </a>

              <a
                href={createWhatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="contact-channel-card glass-panel highlight-channel"
              >
                <div className="cc-icon-wrap whatsapp-wrap">
                  <Icon name="whatsapp" className="cc-icon" />
                </div>
                <span className="cc-label">WHATSAPP OFICIAL</span>
                <strong className="cc-value">{siteConfig.whatsappDisplay}</strong>
                <span className="cc-action">Iniciar conversa no WhatsApp ↗</span>
              </a>

              <a href={`mailto:${siteConfig.email}`} className="contact-channel-card glass-panel">
                <div className="cc-icon-wrap">
                  <Icon name="Mail" className="cc-icon" />
                </div>
                <span className="cc-label">E-MAIL CORPORATIVO</span>
                <strong className="cc-value cc-email">{siteConfig.email}</strong>
                <span className="cc-action">Enviar e-mail direto ↗</span>
              </a>

              <div className="contact-channel-card glass-panel">
                <div className="cc-icon-wrap">
                  <Icon name="MapPin" className="cc-icon" />
                </div>
                <span className="cc-label">SEDE INDUSTRIAL</span>
                <strong className="cc-value cc-address">{siteConfig.address}</strong>
                <span className="cc-action">Cordilheira Alta — Santa Catarina</span>
              </div>
            </div>

            {/* Barra de Redes Sociais Oficiais */}
            <div className="contacts-social-bar glass-panel">
              <span>Acompanhe a Vitadubo nas Redes Sociais:</span>
              <div className="contacts-social-links">
                <a href={siteConfig.socials.facebookUrl} target="_blank" rel="noreferrer" className="social-pill-btn">
                  {siteConfig.socials.facebookLabel}
                </a>
                <a href={siteConfig.socials.instagramUrl} target="_blank" rel="noreferrer" className="social-pill-btn">
                  {siteConfig.socials.instagramLabel}
                </a>
                <a href={siteConfig.socials.youtubeUrl} target="_blank" rel="noreferrer" className="social-pill-btn">
                  {siteConfig.socials.youtubeLabel}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* RODAPÉ CORPORATIVO OFICIAL COM LOGOMARCA COMPLETA */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-columns">
            <div className="footer-col-brand">
              <a href="#inicio" className="footer-logo-link">
                <img
                  src="/vitadubo-logo.svg"
                  alt="VITADUBO Fertilizantes"
                  className="footer-logo-img"
                />
              </a>
              <p className="footer-company-desc">{siteConfig.footerDescription}</p>
              <div className="footer-reg-pill">
                <span>🌾 {siteConfig.cnpjText}</span>
              </div>
            </div>

            <div className="footer-col">
              <h4>Navegação</h4>
              <ul className="footer-links-list">
                <li><a href="#inicio">Início</a></li>
                <li><a href="#quem-somos">Quem Somos</a></li>
                <li><a href="#esterco-de-peru">Esterco de Peru</a></li>
                <li><a href="#produtos">Nossos Produtos</a></li>
                <li><a href="#formule-npk">Formule seu NPK</a></li>
                <li><a href="#embalagens">Nossas Embalagens</a></li>
                <li><a href="#parceiro">Seja Nosso Parceiro</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Produtos &amp; Documentos</h4>
              <ul className="footer-links-list">
                <li><a href="#produtos">Fertilizante Orgânico Classe "A"</a></li>
                <li><a href="#produtos">Vitaphos Max Organomineral</a></li>
                <li><a href="#formule-npk">Organominerais NPK Sob Medida</a></li>
                <li><a href={siteConfig.folderUrl} target="_blank" rel="noreferrer">📄 Folder Oficial Vitadubo (PDF)</a></li>
                <li><a href={siteConfig.certificateUrl} target="_blank" rel="noreferrer">📄 Certificado QIMA Regenera (PDF)</a></li>
                <li><a href={siteConfig.vitaphosDeclarationUrl} target="_blank" rel="noreferrer">📄 Declaração QIMA Vitaphos Max (PDF)</a></li>
              </ul>
            </div>

            <div className="footer-col footer-col-contact">
              <h4>Contatos Oficiais</h4>
              <div className="footer-contact-actions">
                <a href={`tel:${siteConfig.phoneRaw}`} className="footer-phone-cta">
                  <Icon name="phone" className="icon-sm" />
                  <strong>{siteConfig.phoneDisplay}</strong>
                </a>
                <a
                  href={createWhatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp-footer"
                >
                  <Icon name="whatsapp" className="icon-btn" />
                  <span>WhatsApp {siteConfig.whatsappDisplay}</span>
                </a>
              </div>
              <p className="footer-hours">
                <strong>E-mail:</strong>{" "}
                <a href={`mailto:${siteConfig.email}`} style={{ textDecoration: "underline" }}>
                  {siteConfig.email}
                </a>
                <br />
                <strong>Sede:</strong> {siteConfig.address}
              </p>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>{siteConfig.copyright}</span>
            <span>{siteConfig.socials.facebookLabel} • {siteConfig.socials.instagramLabel} • {siteConfig.socials.youtubeLabel}</span>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DE WHATSAPP */}
      <div className="floating-whatsapp-container">
        <a
          href={createWhatsappUrl()}
          target="_blank"
          rel="noreferrer"
          className="floating-whatsapp-btn"
          aria-label="Falar com a Vitadubo Fertilizantes pelo WhatsApp"
        >
          <span className="whatsapp-ping" />
          <Icon name="whatsapp" className="floating-wa-icon" />
        </a>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
