import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { siteConfig } from "./siteConfig";
import "./styles.css";

// Formatação do link direto para WhatsApp
function createWhatsappUrl(customText) {
  const text = customText || siteConfig.whatsappMessage;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

// Biblioteca de Ícones SVG inline com acabamento elegante
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
    case "Droplets":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
          <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
        </svg>
      );
    case "TrendingUp":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
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
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
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
    case "arrow-right":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
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
    case "calculator":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="16" y1="14" x2="16" y2="18" />
          <path d="M16 10h.01" />
          <path d="M12 10h.01" />
          <path d="M8 10h.01" />
          <path d="M12 14h.01" />
          <path d="M8 14h.01" />
          <path d="M12 18h.01" />
          <path d="M8 18h.01" />
        </svg>
      );
    default:
      return null;
  }
}

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeCropId, setActiveCropId] = useState(siteConfig.simulatorCrops[0].id);
  const [hectares, setHectares] = useState(120);

  const currentCrop =
    siteConfig.simulatorCrops.find((c) => c.id === activeCropId) || siteConfig.simulatorCrops[0];

  // Cálculo estimado de ganho total
  const estimatedGainTotal = Math.round(currentCrop.baseGain * hectares);

  const handleSimulatorWhatsapp = () => {
    const msg = `Olá Vitadubo! Estive no simulador da landing page:\n• Cultura: ${currentCrop.name}\n• Área estimada: ${hectares} hectares\n• Estimativa de Ganho: +${estimatedGainTotal} ${currentCrop.unit} (+${currentCrop.baseGain} ${currentCrop.unit}/ha)\n• Recomendação: ${currentCrop.recommendation}\n\nGostaria de receber uma cotação direta da fábrica com frete para a minha propriedade.`;
    window.open(createWhatsappUrl(msg), "_blank");
  };

  return (
    <div className="site-wrapper">
      {/* Top Banner Informativo da Indústria */}
      <div className="top-banner">
        <div className="top-banner-content">
          <span className="top-banner-pill">🌾 {siteConfig.companyBadge}</span>
          <span className="top-banner-text">
            <strong>VITADUBO Fertilizantes:</strong> Linha COLHA+ Classe "A". Atendimento e Vendas Direto da Fábrica:{" "}
            <a href={`tel:${siteConfig.phoneRaw}`} className="top-banner-link">
              <strong>{siteConfig.phoneDisplay}</strong>
            </a>
          </span>
          <a
            href={createWhatsappUrl("Olá! Gostaria de falar com o time comercial da Vitadubo Fertilizantes e consultar preços do COLHA+ Classe A.")}
            target="_blank"
            rel="noreferrer"
            className="top-banner-cta"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* Header Sticky com Glassmorphism e Logotipo Oficial */}
      <header className="site-header">
        <div className="header-inner">
          <a href="#inicio" className="brand-logo-link" aria-label="Vitadubo Fertilizantes - Início">
            <img
              src="/vitadubo-logo-horizontal.svg"
              alt="VITADUBO Fertilizantes — Logotipo Oficial"
              className="brand-logo-img"
            />
          </a>

          <nav className="desktop-nav" aria-label="Navegação Principal">
            <a href="#inicio">Início</a>
            <a href="#diferencial">Esterco de Peru</a>
            <a href="#produtos">Produtos</a>
            <a href="#colha-plus">COLHA+</a>
            <a href="#laudo">Laudo &amp; Certificados</a>
            <a href="#granulometria">Granulometria</a>
            <a href="#simulador">Simulador</a>
            <a href="#embalagens">Embalagens</a>
            <a href="#empresa">Empresa</a>
            <a href="#faq">Dúvidas</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="header-actions">
            <a href={`tel:${siteConfig.phoneRaw}`} className="header-phone-link" title="Ligue para a Vitadubo">
              <Icon name="phone" className="icon-phone" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={createWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp-header"
            >
              <Icon name="whatsapp" className="icon-btn" />
              <span>Cotação WhatsApp</span>
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
                <a href="#diferencial" onClick={() => setMobileMenuOpen(false)}>O Segredo do Esterco de Peru</a>
                <a href="#produtos" onClick={() => setMobileMenuOpen(false)}>Linhas de Produtos (Vitaphos / Vitaplus)</a>
                <a href="#colha-plus" onClick={() => setMobileMenuOpen(false)}>Linha COLHA+ Classe "A"</a>
                <a href="#laudo" onClick={() => setMobileMenuOpen(false)}>Laudo &amp; Certificado QIMA Regenera</a>
                <a href="#granulometria" onClick={() => setMobileMenuOpen(false)}>Granulometria (Peletizado / Farelado)</a>
                <a href="#simulador" onClick={() => setMobileMenuOpen(false)}>Simulador de Safra</a>
                <a href="#embalagens" onClick={() => setMobileMenuOpen(false)}>Embalagens &amp; Logística</a>
                <a href="#empresa" onClick={() => setMobileMenuOpen(false)}>Nossa Missão &amp; Valores</a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)}>Dúvidas Frequentes</a>
                <a href="#contato" onClick={() => setMobileMenuOpen(false)}>Falar Conosco</a>
                <a
                  href={siteConfig.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-cert-link"
                >
                  📄 Ver Certificado Oficial QIMA (PDF)
                </a>
              </nav>

              <div className="mobile-drawer-footer">
                <div className="mobile-contact-card">
                  <p className="mobile-card-title">Central Direta da Fábrica</p>
                  <a href={`tel:${siteConfig.phoneRaw}`} className="mobile-phone-cta">
                    <Icon name="phone" className="icon-sm" />
                    <strong>{siteConfig.phoneDisplay}</strong>
                  </a>
                  <a
                    href={createWhatsappUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-full mt-2"
                  >
                    <Icon name="whatsapp" className="icon-btn" />
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION ELEGANTE COM TONS DOURADOS E TERROSOS */}
        <section className="hero-section" id="inicio">
          <div className="hero-backdrop" />
          <div className="hero-grid-pattern" />

          <div className="hero-container">
            <div className="hero-left">
              <div className="hero-eyebrow-pill">
                <span className="pill-dot" />
                <span>{siteConfig.heroEyebrow}</span>
              </div>

              <h1 className="hero-heading">
                {siteConfig.heroTitleLine1}
                <span className="hero-highlight"> {siteConfig.heroTitleLine2}</span>
              </h1>

              <p className="hero-description">{siteConfig.heroDescription}</p>

              <div className="hero-cta-group">
                <a
                  href={createWhatsappUrl("Olá! Gostaria de falar com um consultor técnico da Vitadubo Fertilizantes e conhecer as linhas de produtos.")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-glow"
                >
                  <Icon name="whatsapp" className="icon-btn" />
                  <span>Falar com um Consultor</span>
                </a>
                <a href="#produtos" className="btn btn-secondary">
                  <Icon name="Package" className="icon-btn" />
                  <span>Ver Linhas de Produtos</span>
                </a>
                <a
                  href={siteConfig.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-cert-hero"
                >
                  <Icon name="FileText" className="icon-btn text-gold" />
                  <span>Ver Certificado Oficial</span>
                </a>
              </div>

              <div className="hero-trust-bar">
                <div className="trust-item">
                  <Icon name="phone" className="trust-icon" />
                  <div>
                    <small>Atendimento Comercial Direto</small>
                    <a href={`tel:${siteConfig.phoneRaw}`} className="trust-phone">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="trust-divider" />
                <div className="trust-item">
                  <Icon name="ShieldCheck" className="trust-icon text-gold" />
                  <div>
                    <small>Conformidade &amp; Certificações Oficiais</small>
                    <a
                      href={siteConfig.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="trust-cert-link"
                    >
                      <strong>QIMA Regenera • MAPA • IMA • IBD ↗</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <div className="hero-feature-card glass-panel">
                <div className="card-logo-emblem">
                  <img
                    src="/vitadubo-emblem.svg"
                    alt="Emblema Vitadubo"
                    className="emblem-img"
                  />
                  <div>
                    <span className="emblem-eyebrow">TECNOLOGIA INDUSTRIAL</span>
                    <strong className="emblem-product-title">COLHA+ Classe "A"</strong>
                  </div>
                </div>

                <div className="hero-metrics-list">
                  {siteConfig.heroStats.map((st, i) => (
                    <div className="stat-card-row" key={i}>
                      <div className="stat-val-circle">{st.value}</div>
                      <div className="stat-text-info">
                        <strong>{st.label}</strong>
                        <span>{st.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="feature-card-footer">
                  <div className="footer-pill-notice">
                    <span>🌾 {siteConfig.heroQuickPill}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION O GRANDE DIFERENCIAL: O SEGREDO DO ESTERCO DE PERU */}
        <section className="section section-diferencial" id="diferencial">
          <div className="container">
            <div className="section-head centered">
              <span className="section-tag">{siteConfig.turkeyManureDifferentiator.tag}</span>
              <h2 className="section-title">{siteConfig.turkeyManureDifferentiator.title}</h2>
              <p className="section-subtitle">
                {siteConfig.turkeyManureDifferentiator.subtitle}
              </p>
            </div>

            <div className="diferencial-grid">
              {siteConfig.turkeyManureDifferentiator.perks.map((p, idx) => (
                <div className="diferencial-card" key={idx}>
                  <div className="diferencial-icon-wrap">
                    <Icon name={p.icon} className="diferencial-icon" />
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION PORTFÓLIO DE PRODUTOS OFICIAIS VITADUBO */}
        <section className="section section-products" id="produtos">
          <div className="container">
            <div className="section-head centered">
              <span className="section-tag">SOLUÇÕES FARELADAS E PELETIZADAS</span>
              <h2 className="section-title">Portfólio de Alta Performance Vitadubo</h2>
              <p className="section-subtitle">
                Conheça nossas formulações desenvolvidas a partir de tecnologia termofílica com esterco de peru rastreado para atender da agricultura orgânica certificada às grandes extensões de grãos.
              </p>
            </div>

            <div className="products-grid">
              {siteConfig.productCatalog.map((prod) => (
                <div
                  className={`product-card ${prod.badgeType === "gold" ? "product-card-gold" : ""}`}
                  key={prod.id}
                >
                  <div className="product-badge-line">
                    <span className="product-line-label">{prod.line}</span>
                    <span className="product-tag-pill">{prod.tag}</span>
                  </div>

                  <h3 className="product-title">{prod.name}</h3>
                  <p className="product-summary">{prod.summary}</p>

                  <ul className="product-features-list">
                    {prod.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <Icon name="check" className="icon-check text-gold" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="product-ideal-box">
                    <small>Culturas Indicadas:</small>
                    <strong>{prod.ideal}</strong>
                  </div>

                  <a
                    href={createWhatsappUrl(prod.ctaMsg)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-full"
                  >
                    <Icon name="whatsapp" className="icon-btn" />
                    <span>Cotar {prod.name}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION CARRO-CHEFE: FERTILIZANTE ORGÂNICO SIMPLES CLASSE "A" - COLHA+ */}
        <section className="section section-colha" id="colha-plus">
          <div className="container">
            <div className="section-head centered">
              <span className="section-tag">TECNOLOGIA &amp; EXCELÊNCIA AGRONÔMICA</span>
              <h2 className="section-title">Fertilizante Orgânico Simples Classe "A" – COLHA+</h2>
              <p className="section-subtitle">
                O insumo de alta performance da Vitadubo desenvolvido a partir de cama e esterco de aves selecionados, atuando como fertilizante, condicionador e corretivo biológico do solo.
              </p>
            </div>

            <div className="colha-showcase-grid">
              {/* Card visual da embalagem oficial */}
              <div className="colha-visual-card">
                <div className="colha-sack-mockup">
                  <div className="sack-badge-export">EXPORTAÇÃO &amp; BRASIL</div>
                  <div className="sack-inner">
                    <img
                      src="/vitadubo-emblem.svg"
                      alt="Vitadubo"
                      className="sack-emblem-img"
                    />
                    <span className="sack-brand">VITADUBO</span>
                    <h3 className="sack-title">FERTILIZANTE ORGÂNICO SIMPLES</h3>
                    <div className="sack-class">CLASSE "A"</div>
                    <div className="sack-product-name">COLHA+</div>
                    <p className="sack-specs">Matéria Orgânica Nobre 73% • Compostagem Termofílica</p>
                    <div className="sack-weights">Sacas de 40 kg • Big Bags 500kg / 1.000kg • A Granel</div>
                  </div>
                </div>
                <div className="colha-app-badge">
                  <Icon name="check" className="icon-check text-gold" />
                  <span>Aplicação em distribuidores de calcário, a lanço e plantadeiras de precisão</span>
                </div>
              </div>

              {/* 6 Benefícios Comprovados */}
              <div className="colha-benefits-list">
                {siteConfig.flagshipBenefits.map((b, idx) => (
                  <div className="colha-benefit-item" key={idx}>
                    <div className="colha-benefit-num">0{idx + 1}</div>
                    <div>
                      <h4 className="colha-benefit-title">{b.title}</h4>
                      <p className="colha-benefit-desc">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="colha-cta-bar">
              <div className="colha-cta-text">
                <strong>Quer saber a dosagem exata para a sua lavoura?</strong>
                <span>Nossos agrônomos calculam a recomendação agronômica ideal para a sua análise de solo.</span>
              </div>
              <a
                href={createWhatsappUrl("Olá! Gostaria de consultar a dosagem recomendada do Fertilizante Orgânico Classe A COLHA+ para a minha propriedade.")}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <Icon name="whatsapp" className="icon-btn" />
                <span>Consultar Dosagem no WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION LAUDO LABORATORIAL OFICIAL E CERTIFICAÇÕES */}
        <section className="section section-lab" id="laudo">
          <div className="container">
            <div className="section-head centered light">
              <span className="section-tag light">TRANSPARÊNCIA TOTAL &amp; COMPROVAÇÃO CIENTÍFICA</span>
              <h2 className="section-title">Laudo Técnico &amp; Certificações Oficiais</h2>
              <p className="section-subtitle light">
                Amostra Nº 036278/2022 • Fertilizante Orgânico Simples Classe "A" – COLHA+ • Empresa Auditada QIMA Regenera
              </p>
            </div>

            {/* Destaque Oficial: Certificado QIMA Programa Regenera */}
            <div className="qima-cert-banner glass-panel" id="certificados">
              <div className="qima-cert-content">
                <div className="qima-cert-badge-row">
                  <span className="qima-pill-gold">
                    <Icon name="ShieldCheck" className="icon-sm" />
                    {siteConfig.qimaCertificate.badge}
                  </span>
                  <span className="qima-pill-code">Certificado Nº {siteConfig.qimaCertificate.certNumber}</span>
                  <span className="qima-pill-code">Cód. {siteConfig.qimaCertificate.companyCode}</span>
                </div>

                <h3 className="qima-cert-title">{siteConfig.qimaCertificate.title}</h3>
                <p className="qima-cert-desc">{siteConfig.qimaCertificate.description}</p>

                <div className="qima-meta-grid">
                  <div className="qima-meta-item">
                    <small>Empresa Certificada</small>
                    <strong>Vitadubo Fertilizantes Ltda (CNPJ: {siteConfig.cnpj})</strong>
                  </div>
                  <div className="qima-meta-item">
                    <small>Norma &amp; Sustentabilidade</small>
                    <strong>{siteConfig.qimaCertificate.norm}</strong>
                  </div>
                  <div className="qima-meta-item">
                    <small>Validade Oficial</small>
                    <strong>{siteConfig.qimaCertificate.validity}</strong>
                  </div>
                </div>
              </div>

              <div className="qima-cert-actions">
                <a
                  href={siteConfig.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-glow btn-full"
                >
                  <Icon name="FileText" className="icon-btn" />
                  <span>Visualizar Certificado (PDF)</span>
                </a>
                <a
                  href={siteConfig.certificateUrl}
                  download="Certificado-Conformidade-QIMA-Vitadubo.pdf"
                  className="btn btn-secondary btn-full"
                >
                  <Icon name="Award" className="icon-btn text-gold" />
                  <span>Baixar Certificado Oficial</span>
                </a>
                <small className="qima-verify-note">
                  ✓ Documento oficial assinado digitalmente com QR Code de autenticidade QIMA
                </small>
              </div>
            </div>

            <div className="lab-panel-wrapper glass-panel">
              <div className="lab-header-info">
                <div>
                  <span className="lab-meta-label">EMPRESA:</span>
                  <strong>Vitadubo Fertilizantes Ltda</strong>
                </div>
                <div>
                  <span className="lab-meta-label">LOCAL DA FÁBRICA:</span>
                  <span>{siteConfig.address}</span>
                </div>
                <div>
                  <span className="lab-meta-label">AMOSTRA AUDITADA:</span>
                  <span className="lab-sample-pill">Nº {siteConfig.labReport.sampleId}</span>
                </div>
              </div>

              <div className="lab-table-container">
                <table className="lab-table">
                  <thead>
                    <tr>
                      <th>Ensaio / Parâmetro</th>
                      <th>Resultado Encontrado</th>
                      <th>Diferencial Agronômico</th>
                    </tr>
                  </thead>
                  <tbody>
                    {siteConfig.labReport.parameters.map((param, index) => (
                      <tr key={index} className={param.highlight ? "highlight-row" : ""}>
                        <td className="param-name">
                          <strong>{param.name}</strong>
                        </td>
                        <td className="param-value">
                          <span className="val-badge">{param.value}</span>
                        </td>
                        <td className="param-note">{param.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="lab-footer-note">
                <Icon name="Award" className="lab-footer-icon" />
                <p>
                  <strong>Micronutrientes presentes na formulação:</strong> {siteConfig.labReport.micros}
                </p>
              </div>
            </div>

            {/* Certificações de Autoridade */}
            <div className="certifications-grid">
              {siteConfig.certifications.map((c, i) => (
                <div className="cert-card" key={i}>
                  <div className="cert-badge">{c.name}</div>
                  <h4>{c.role}</h4>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION GRANULOMETRIAS & FORMAS DE APLICAÇÃO */}
        <section className="section section-granulometry" id="granulometria">
          <div className="container">
            <div className="section-head centered">
              <span className="section-tag">TECNOLOGIA DE APLICAÇÃO</span>
              <h2 className="section-title">Granulometrias Sob Medida para o Seu Maquinário</h2>
              <p className="section-subtitle">
                O Fertilizante Orgânico Classe "A" COLHA+ é processado em diferentes granulometrias para atender com máxima fluidez e eficiência a sua operação no campo.
              </p>
            </div>

            <div className="granulometry-grid">
              {siteConfig.granulometries.map((g, idx) => (
                <div className="gran-card" key={idx}>
                  <div className="gran-header">
                    <span className="gran-tag">{g.tag}</span>
                    <h3 className="gran-title">{g.type}</h3>
                  </div>
                  <p className="gran-desc">{g.desc}</p>
                  <div className="gran-ideal">
                    <strong>Culturas &amp; Aplicação Recomendada:</strong>
                    <p>{g.ideal}</p>
                  </div>
                  <a
                    href={createWhatsappUrl(`Olá! Gostaria de consultar cotação do COLHA+ na granulometria ${g.type}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline btn-full"
                  >
                    <span>Cotar {g.type}</span>
                    <Icon name="arrow-right" className="icon-sm" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION SIMULADOR INTERATIVO */}
        <section className="section section-simulator" id="simulador">
          <div className="container">
            <div className="section-head centered">
              <span className="section-tag">SIMULADOR OFICIAL VITADUBO</span>
              <h2 className="section-title">Calcule a Rentabilidade da Sua Lavoura</h2>
              <p className="section-subtitle">
                Selecione a cultura e o tamanho da sua área para visualizar o ganho estimado e a tecnologia COLHA+ recomendada.
              </p>
            </div>

            <div className="simulator-box">
              {/* Seletor de Cultura */}
              <div className="crop-selector-tabs">
                {siteConfig.simulatorCrops.map((crop) => (
                  <button
                    key={crop.id}
                    className={`crop-tab-btn ${activeCropId === crop.id ? "active" : ""}`}
                    onClick={() => setActiveCropId(crop.id)}
                  >
                    <span>{crop.name}</span>
                  </button>
                ))}
              </div>

              <div className="simulator-interactive-area">
                <div className="sim-slider-block">
                  <div className="slider-header">
                    <label htmlFor="area-slider">Área de Plantio:</label>
                    <span className="slider-value-display">
                      <strong>{hectares}</strong> hectares
                    </span>
                  </div>

                  <input
                    id="area-slider"
                    type="range"
                    min="10"
                    max="1500"
                    step="10"
                    value={hectares}
                    onChange={(e) => setHectares(Number(e.target.value))}
                    className="range-input"
                  />

                  <div className="range-presets">
                    {[30, 80, 150, 300, 600, 1000].map((val) => (
                      <button
                        key={val}
                        className={`preset-btn ${hectares === val ? "active" : ""}`}
                        onClick={() => setHectares(val)}
                      >
                        {val} ha
                      </button>
                    ))}
                  </div>

                  <div className="sim-recommendation-card">
                    <span className="rec-eyebrow">Manejo Vitadubo Indicado:</span>
                    <h4 className="rec-title">{currentCrop.recommendation}</h4>
                    <p className="rec-desc">{currentCrop.summary}</p>
                  </div>
                </div>

                <div className="sim-results-block">
                  <div className="results-card">
                    <span className="results-tag">ESTIMATIVA PARA {hectares} HECTARES</span>

                    <div className="result-highlight">
                      <span className="result-number">+{estimatedGainTotal}</span>
                      <span className="result-unit">{currentCrop.unit}</span>
                      <p className="result-caption">
                        Estimativa média de ganho adicional em produtividade na colheita
                      </p>
                    </div>

                    <div className="result-perks-grid">
                      <div className="perk-box">
                        <Icon name="Droplets" className="perk-icon" />
                        <div>
                          <strong>{currentCrop.waterRetention}</strong>
                          <small>Retenção Hídrica no Solo</small>
                        </div>
                      </div>
                      <div className="perk-box">
                        <Icon name="TrendingUp" className="perk-icon" />
                        <div>
                          <strong>{currentCrop.rootDepth}</strong>
                          <small>Enraizamento &amp; CTC 592</small>
                        </div>
                      </div>
                    </div>

                    <button onClick={handleSimulatorWhatsapp} className="btn btn-primary btn-full mt-4">
                      <Icon name="whatsapp" className="icon-btn" />
                      <span>Receber Cotação Deste Cálculo</span>
                    </button>
                    <small className="results-disclaimer">
                      * Estimativas baseadas em histórico de ensaios agronômicos e dados de laudo laboratorial.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION EMBALAGENS & LOGÍSTICA */}
        <section className="section section-packagings" id="embalagens">
          <div className="container">
            <div className="section-head centered">
              <span className="section-tag">LOGÍSTICA &amp; PRATICIDADE</span>
              <h2 className="section-title">Opções de Embalagens Direto da Indústria</h2>
              <p className="section-subtitle">
                Atendemos desde propriedades familiares até grandes grupos agrícolas com logística rápida e opções flexíveis de carregamento.
              </p>
            </div>

            <div className="packaging-grid">
              {siteConfig.packagings.map((pkg, i) => (
                <div className="pkg-card" key={i}>
                  <div className="pkg-icon-wrap">
                    <Icon name="Package" className="pkg-icon" />
                  </div>
                  <span className="pkg-badge">{pkg.badge}</span>
                  <h3 className="pkg-title">{pkg.title}</h3>
                  <p className="pkg-desc">{pkg.note}</p>
                </div>
              ))}
            </div>

            <div className="logistics-notice">
              <Icon name="MapPin" className="logistics-icon" />
              <div>
                <strong>Fábrica em Santa Catarina com Atendimento Nacional e Exportação:</strong>
                <span>
                  {siteConfig.address} • Entregas programadas para coincidir com a janela ideal de plantio na sua região.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION A INDÚSTRIA: MISSÃO, VISÃO & VALORES */}
        <section className="section section-company" id="empresa">
          <div className="container">
            <div className="section-head centered">
              <span className="section-tag">NOSSA HISTÓRIA &amp; PROPÓSITO</span>
              <h2 className="section-title">Vitadubo Fertilizantes: Feita Para o Agro</h2>
              <p className="section-subtitle">
                Uma empresa 100% brasileira, apaixonada pelo campo e comprometida em atender o produtor rural com excelência técnica, humildade e integridade.
              </p>
            </div>

            <div className="company-pillars-grid">
              <div className="company-pillar-card">
                <span className="pillar-tag-badge">PROPÓSITO</span>
                <h3>{siteConfig.mission.title}</h3>
                <p>{siteConfig.mission.text}</p>
              </div>

              <div className="company-pillar-card">
                <span className="pillar-tag-badge">FUTURO</span>
                <h3>{siteConfig.vision.title}</h3>
                <p>{siteConfig.vision.text}</p>
              </div>

              <div className="company-pillar-card highlight-card">
                <span className="pillar-tag-badge highlight">CONDUTA</span>
                <h3>{siteConfig.values.title}</h3>
                <p>{siteConfig.values.text}</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION FAQ (PERGUNTAS FREQUENTES) */}
        <section className="section section-faq" id="faq">
          <div className="container">
            <div className="section-head centered">
              <span className="section-tag">ESCLAREÇA SUAS DÚVIDAS</span>
              <h2 className="section-title">Perguntas Frequentes sobre o COLHA+</h2>
              <p className="section-subtitle">
                Tudo o que você precisa saber sobre aplicação, retenção de água, compatibilidade com máquinas e logística.
              </p>
            </div>

            <div className="faq-accordion-wrapper">
              {siteConfig.faq.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div className={`faq-card ${isOpen ? "open" : ""}`} key={index}>
                    <button
                      className="faq-question-btn"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <Icon
                        name="chevron-down"
                        className={`faq-icon ${isOpen ? "rotate" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="faq-answer-content">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="faq-extra-help">
              <p>Precisa de um esclarecimento técnico específico para o seu talhão?</p>
              <a
                href={createWhatsappUrl("Olá! Gostaria de tirar uma dúvida técnica sobre a aplicação do COLHA+ na minha lavoura.")}
                target="_blank"
                rel="noreferrer"
                className="faq-help-link"
              >
                Falar diretamente com nosso agrônomo no WhatsApp (49) 3199-2722 <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION CENTRAL DE VENDAS DIRETO DA FÁBRICA */}
        <section className="section section-cta-form" id="contato">
          <div className="container">
            <div className="cta-form-container">
              <div className="cta-info-side">
                <span className="section-tag light">ATENDIMENTO DIRETO DA INDÚSTRIA</span>
                <h2 className="cta-title">
                  Pronto para colher mais sacas <br />
                  <span className="text-gold">por hectare na sua lavoura?</span>
                </h2>
                <p className="cta-desc">
                  Compre direto da fábrica em Cordilheira Alta (SC) com frete programado e suporte técnico agronômico para a sua safra. Fale agora com a nossa equipe comercial:
                </p>

                <div className="cta-perks-list">
                  <div className="c-perk">
                    <Icon name="check" className="icon-check text-gold" />
                    <span>Faturamento direto da indústria sem intermediários</span>
                  </div>
                  <div className="c-perk">
                    <Icon name="check" className="icon-check text-gold" />
                    <span>Embalagens em Sacas de 25kg, 40kg, Big Bags de 1.000kg e Granel</span>
                  </div>
                  <div className="c-perk">
                    <Icon name="check" className="icon-check text-gold" />
                    <span>Entrega programada para a janela ideal de plantio na sua região</span>
                  </div>
                  <div className="c-perk">
                    <Icon name="check" className="icon-check text-gold" />
                    <span>Linhas oficiais: Vitaphos Max, Vitaphos Max Pro, Vitaplus Max Plus e COLHA+</span>
                  </div>
                  <div className="c-perk">
                    <Icon name="check" className="icon-check text-gold" />
                    <span>Certificado Oficial de Conformidade QIMA Regenera, MAPA, IMA e IBD</span>
                  </div>
                </div>
              </div>

              <div className="cta-form-side">
                <div className="quote-form-card glass-panel">
                  <div className="contact-card-header">
                    <span className="contact-badge-pill">FÁBRICA CORDILHEIRA ALTA • SC</span>
                    <h3>Central de Vendas &amp; Cotação Direta</h3>
                    <p>Atendimento comercial imediato para produtores rurais, cooperativas e revendas:</p>
                  </div>

                  <div className="contact-card-actions">
                    <a
                      href={createWhatsappUrl("Olá! Gostaria de falar com o time comercial da Vitadubo Fertilizantes e solicitar uma cotação direta da fábrica.")}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-full btn-lg btn-glow"
                    >
                      <Icon name="whatsapp" className="icon-btn" />
                      <span>Falar no WhatsApp (49) 3199-2722</span>
                    </a>

                    <a
                      href={siteConfig.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-full mt-2"
                    >
                      <Icon name="FileText" className="icon-btn text-gold" />
                      <span>Ver Certificado de Conformidade QIMA (PDF)</span>
                    </a>

                    <div className="direct-call-box mt-4">
                      <span className="call-title">Ligação Telefônica Direta:</span>
                      <a href={`tel:${siteConfig.phoneRaw}`} className="call-number-link">
                        <Icon name="phone" className="icon-call" />
                        <strong>{siteConfig.phoneDisplay}</strong>
                      </a>
                      <small>Horário de Atendimento: {siteConfig.operatingHours}</small>
                      <small className="factory-location-note">
                        📍 <strong>Endereço da Indústria:</strong> {siteConfig.address}
                      </small>
                    </div>

                    <div className="field-visit-note">
                      <Icon name="ShieldCheck" className="icon-sm text-gold" />
                      <span>Nossos agrônomos atendem produtores direto em suas propriedades com monitoramento de produtividade.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* RODAPÉ CORPORATIVO OFICIAL COM LOGO COMPLETO */}
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
                <li><a href="#diferencial">Esterco de Peru</a></li>
                <li><a href="#produtos">Linhas de Produtos</a></li>
                <li><a href="#colha-plus">COLHA+ Classe "A"</a></li>
                <li><a href="#laudo">Laudo &amp; Certificados</a></li>
                <li><a href={siteConfig.certificateUrl} target="_blank" rel="noopener noreferrer">Certificado QIMA (PDF) ↗</a></li>
                <li><a href="#simulador">Simulador de Safra</a></li>
                <li><a href="#embalagens">Embalagens</a></li>
                <li><a href="#contato">Central de Vendas</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Produtos Vitadubo</h4>
              <ul className="footer-links-list">
                <li><a href="#produtos">Vitaphos Max (Orgânico)</a></li>
                <li><a href="#produtos">Vitaphos Max Pro</a></li>
                <li><a href="#produtos">Vitaplus Max Plus</a></li>
                <li><a href="#colha-plus">COLHA+ Classe "A"</a></li>
                <li><a href="#embalagens">Sacas de 25kg e 40kg</a></li>
                <li><a href="#embalagens">Big Bags 1.000kg e Granel</a></li>
              </ul>
            </div>

            <div className="footer-col footer-col-contact">
              <h4>Fale com a Indústria</h4>
              <p>Ligue ou envie mensagem para atendimento imediato:</p>
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
                  <span>WhatsApp Comercial</span>
                </a>
              </div>
              <p className="footer-hours">
                <strong>Localização da Fábrica:</strong>
                <br />
                {siteConfig.address}
                <br />
                <strong>Horário:</strong> {siteConfig.operatingHours}
              </p>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>{siteConfig.copyright}</span>
            <span>Central Comercial: {siteConfig.phoneDisplay} • Cordilheira Alta - SC</span>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DE WHATSAPP COM BALÃO DE MENSAGEM */}
      <div className="floating-whatsapp-container">
        <a
          href={createWhatsappUrl()}
          target="_blank"
          rel="noreferrer"
          className="floating-whatsapp-btn"
          aria-label="Falar com Agrônomo da Vitadubo no WhatsApp"
          title="Falar no WhatsApp (49) 3199-2722"
        >
          <span className="floating-pulse-ring" />
          <Icon name="whatsapp" className="floating-whatsapp-icon" />
          <span className="floating-online-dot" />
        </a>

        <div className="floating-tooltip">
          <div className="tooltip-header">
            <span className="tooltip-dot" />
            <span>Vitadubo Fertilizantes Online</span>
          </div>
          <p className="tooltip-text">
            Precisa de cotação do <strong>COLHA+ Classe A</strong> para a sua safra? Fale conosco no <strong>(49) 3199-2722</strong>!
          </p>
          <a
            href={createWhatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="tooltip-link"
          >
            Iniciar Conversa <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
