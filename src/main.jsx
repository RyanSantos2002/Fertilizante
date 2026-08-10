import React from "react";
import { createRoot } from "react-dom/client";
import { siteConfig } from "./siteConfig";
import "./styles.css";

const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;

function LeafMark() {
  return (
    <span className="leaf-mark" aria-hidden="true">
      ◇
    </span>
  );
}

function App() {
  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#inicio" aria-label={siteConfig.companyName}>
          <span className="brand-icon"><LeafMark /></span>
          <span>
            <strong>{siteConfig.companyName}</strong>
            <small>{siteConfig.companySubtitle}</small>
          </span>
        </a>

        <nav className="nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre nós</a>
          <a href="#linhas">Nossas linhas</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="header-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
          {siteConfig.whatsappDisplay}
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">{siteConfig.heroEyebrow}</p>
            <h1>
              {siteConfig.heroTitleLine1}
              <span>{siteConfig.heroTitleLine2}</span>
            </h1>
            <p className="hero-copy">
              {siteConfig.heroDescription}
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#linhas">Conheça nossas linhas <span>→</span></a>
              <a className="button button-ghost" href={whatsappUrl} target="_blank" rel="noreferrer">
                Fale no WhatsApp
              </a>
            </div>

            <div className="hero-points">
              {siteConfig.heroPoints.map((pt, i) => (
                <div key={i}>
                  <b>{pt.icon}</b>
                  <span>
                    <strong style={{ fontSize: '13px', color: '#fff' }}>{pt.title}</strong>
                    <br />
                    <span style={{ fontSize: '11px', opacity: 0.8 }}>{pt.subtitle}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="intro section" id="sobre">
          <div className="section-heading">
            <p className="eyebrow green">{siteConfig.aboutEyebrow}</p>
            <h2>{siteConfig.aboutTitle}</h2>
            <p>{siteConfig.aboutDescription}</p>
          </div>

          <div className="intro-card">
            <div className="intro-number">{siteConfig.aboutCardNumber}</div>
            <div>
              <h3>{siteConfig.aboutCardTitle}</h3>
              <p>{siteConfig.aboutCardText}</p>
            </div>
          </div>
        </section>

        <section className="lines section" id="linhas">
          <div className="section-heading centered">
            <p className="eyebrow green">{siteConfig.linesEyebrow}</p>
            <h2>{siteConfig.linesTitle}</h2>
            <p>{siteConfig.linesDescription}</p>
          </div>

          <div className="line-grid">
            {siteConfig.lines.map((line, index) => (
              <article className={`line-card ${index === 0 ? 'organic' : 'mineral'}`} key={line.title}>
                <div className={`line-image ${index === 0 ? 'organic-image' : 'mineral-image'}`}>
                  <span>{line.badge}</span>
                </div>
                <div className="line-content">
                  <div className="mini-icon">{line.icon}</div>
                  <h3>{line.title}</h3>
                  <p>{line.description}</p>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar informações <span>→</span></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="benefits section" id="beneficios">
          <div className="section-heading centered">
            <p className="eyebrow green">{siteConfig.benefitsEyebrow}</p>
            <h2>{siteConfig.benefitsTitle}</h2>
            <p>{siteConfig.benefitsDescription}</p>
          </div>

          <div className="benefit-grid">
            {siteConfig.benefits.map((item) => (
              <article className="benefit" key={item.title}>
                <div className="benefit-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="difference">
          <div className="difference-inner">
            <div className="section-heading light centered">
              <p className="eyebrow">{siteConfig.differentiatorsEyebrow}</p>
              <h2>{siteConfig.differentiatorsTitle}</h2>
              <p>{siteConfig.differentiatorsDescription}</p>
            </div>

            <div className="difference-grid">
              {siteConfig.differentiators.map(([title, text], index) => (
                <article className="difference-card" key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta" id="contato">
          <div className="cta-overlay" />
          <div className="cta-content">
            <div>
              <p className="eyebrow">{siteConfig.ctaEyebrow}</p>
              <h2>
                {siteConfig.ctaTitleLine1}
                <span>{siteConfig.ctaTitleLine2}</span>
              </h2>
            </div>
            <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
              {siteConfig.ctaButtonText} <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#inicio">
              <span className="brand-icon"><LeafMark /></span>
              <span>
                <strong>{siteConfig.companyName}</strong>
                <small>{siteConfig.companySubtitle}</small>
              </span>
            </a>
            <p>{siteConfig.footerDescription}</p>
          </div>

          <div>
            <h4>Navegação</h4>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre nós</a>
            <a href="#linhas">Nossas linhas</a>
            <a href="#beneficios">Benefícios</a>
          </div>

          <div>
            <h4>Nossas linhas</h4>
            <a href="#linhas">Linha Orgânica</a>
            <a href="#linhas">Linha Organomineral</a>
          </div>

          <div>
            <h4>Contato &amp; Orçamento</h4>
            <p>Entre em contato conosco diretamente pelo WhatsApp:</p>
            <a className="footer-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
              {siteConfig.whatsappDisplay}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{siteConfig.copyright}</span>
          <span>Modelo White-Label Customizável</span>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        title="Falar no WhatsApp"
      >
        ☎
      </a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
