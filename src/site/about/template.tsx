// Generated from "About Us.dc.html" by scripts/convert-dc.mjs, then maintained by hand.
import React, { Fragment } from "react";
import MobileMenu from "@/components/MobileMenu";

export default function template(v: any) {
  return (
    <>
      <svg aria-hidden="true" style={{ position: "absolute", width: "0", height: "0" }}>
        <defs>
          <linearGradient id="emGL" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" style={{ stopColor: "#FF8A33" }} />
            <stop offset="1" style={{ stopColor: "#F96A02" }} />
          </linearGradient>
          <linearGradient id="emGR" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" style={{ stopColor: "#FFC94F" }} />
            <stop offset="1" style={{ stopColor: "#FFA318" }} />
          </linearGradient>
          <mask id="emMask" maskUnits="userSpaceOnUse" x="-4" y="-4" width="366" height="361">
            <path d="M39 353V132L200 243" style={{ fill: "none", stroke: "#fff", strokeWidth: "78", strokeLinejoin: "round" }} />
          </mask>
        </defs>
      </svg>
      <header onMouseLeave={v.menuClose} style={{ position: "fixed", top: "0", left: "0", right: "0", zIndex: "50", background: "rgba(255,255,255,.84)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: "1px solid #E7EAF0" }}>
        <div className="site-header-bar" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
          <a href="/" style={{ display: "flex", flexDirection: "column", gap: "4px", textDecoration: "none", color: "#202733" }}>
            <img src="/assets/emburc-logo.png" alt="eMburc Technologies" style={{ display: "block", height: "44px", width: "auto" }} />
          </a>
          <nav className="site-nav" style={{ display: "flex", alignItems: "center", gap: "32px", fontSize: "15px", flexWrap: "wrap" }}>
            <button type="button" onMouseEnter={v.menuOpen} onFocus={v.menuOpen} onClick={v.menuToggle} aria-expanded={v.menuOn} style={{ position: "relative", display: "flex", alignItems: "center", gap: "6px", height: "72px", padding: "0", background: "none", border: "none", cursor: "pointer", fontSize: "15px", color: v.menuColor, transition: "color 250ms" }}>
              {"Offerings "}
              <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", transform: `rotate(${v.menuRot ?? ""})`, transition: "transform 300ms cubic-bezier(0.22,1,0.36,1)" }}>
                <path d="m6 9 6 6 6-6" />
              </svg>
              <span style={{ position: "absolute", left: "0", right: "0", bottom: "-1px", height: "2px", background: "#FF6B00", transformOrigin: "left", transform: `scaleX(${v.menuBar ?? ""})`, transition: "transform 300ms cubic-bezier(0.22,1,0.36,1)" }} />
            </button>
            <a className="dc-hover-1einh9h" href="/talent-solutions" onMouseEnter={v.menuClose} style={{ position: "relative", display: "flex", alignItems: "center", height: "72px", textDecoration: "none", color: "#202733", transition: "color 250ms" }}>
              Talent Solutions
            </a>
            <a className="dc-hover-1einh9h" href="/industries" onMouseEnter={v.menuClose} style={{ position: "relative", display: "flex", alignItems: "center", height: "72px", textDecoration: "none", color: "#202733", transition: "color 250ms" }}>
              Industries
            </a>
            <a className="dc-hover-1einh9h" href="/case-studies" onMouseEnter={v.menuClose} style={{ position: "relative", display: "flex", alignItems: "center", height: "72px", textDecoration: "none", color: "#202733", transition: "color 250ms" }}>
              Case Studies
            </a>
            <a href="/about" aria-current="page" onMouseEnter={v.menuClose} style={{ position: "relative", display: "flex", alignItems: "center", height: "72px", textDecoration: "none", color: "#FF6B00" }}>
              About us
              <span style={{ position: "absolute", left: "0", right: "0", bottom: "-1px", height: "2px", background: "#FF6B00" }} />
            </a>
          </nav>
          <a className="dc-hover-ygs45k site-header-cta" href="#talk" onClick={v.talkOpen} style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "44px", padding: "0 20px", borderRadius: "10px", background: "#FF6B00", color: "#202733", fontWeight: "500", fontSize: "15px", textDecoration: "none", transition: "transform 250ms,box-shadow 250ms" }}>
            {"Let's Talk"}
          </a>
          <MobileMenu active="/about" onTalk={v.talkOpen} />
        </div>
        <div className="site-mega" onMouseLeave={v.menuClose} style={{ position: "absolute", left: "0", right: "0", top: "72px", pointerEvents: v.menuPe, opacity: v.menuOp, transform: `translateY(${v.menuY ?? ""})`, transition: "opacity 300ms,transform 400ms cubic-bezier(0.22,1,0.36,1)" }}>
          <div style={{ background: "#fff", borderTop: "1px solid #E7EAF0", borderBottom: "1px solid #E7EAF0", boxShadow: "0 24px 48px rgba(16,26,40,.10)" }}>
            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "36px 32px 40px", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr)) minmax(0,.9fr)", gap: "40px" }}>
              <div data-mcol="" style={{ display: "flex", flexDirection: "column", gap: "6px", opacity: v.menuOp, transform: `translateY(${v.menuColY ?? ""})`, transition: "opacity 400ms 0ms,transform 500ms cubic-bezier(0.22,1,0.36,1) 0ms" }}>
                <a className="dc-hover-1d726jp" href="/offerings#build" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", margin: "0 -12px 8px", borderRadius: "12px", textDecoration: "none", color: "#202733", transition: "background 200ms" }}>
                  <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "10px", background: "#FFF4E8", color: "#FF6B00", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <rect x="3" y="4" width="18" height="12" rx="2" />
                      <path d="M8 20h8" />
                      <path d="M12 16v4" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "16px", fontWeight: "600", letterSpacing: "-0.01em" }}>Digital Product Development</span>
                  </span>
                </a>
                <a className="dc-hover-1c6qwgo" href="/offerings#build" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  Website Development
                </a>
                <a className="dc-hover-1c6qwgo" href="/offerings#build" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  Web Application Development
                </a>
                <a className="dc-hover-1c6qwgo" href="/offerings#build" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  Mobile App Development
                </a>
                <a className="dc-hover-1c6qwgo" href="/offerings#build" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  Custom Software Development
                </a>
                <a className="dc-hover-1c6qwgo" href="/offerings#build" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  SaaS / Product Development
                </a>
              </div>
              <div data-mcol="" style={{ display: "flex", flexDirection: "column", gap: "6px", opacity: v.menuOp, transform: `translateY(${v.menuColY ?? ""})`, transition: "opacity 400ms 60ms,transform 500ms cubic-bezier(0.22,1,0.36,1) 60ms" }}>
                <a className="dc-hover-1d726jp" href="/offerings#automate" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", margin: "0 -12px 8px", borderRadius: "12px", textDecoration: "none", color: "#202733", transition: "background 200ms" }}>
                  <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "10px", background: "#FFF4E8", color: "#FF6B00", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "16px", fontWeight: "600", letterSpacing: "-0.01em" }}>{"AI & Automation"}</span>
                  </span>
                </a>
                <a className="dc-hover-1c6qwgo" href="/offerings#automate" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  {"Generative AI & LLMs"}
                </a>
                <a className="dc-hover-1c6qwgo" href="/offerings#automate" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  {"AI Services & Solutions"}
                </a>
                <a className="dc-hover-1c6qwgo" href="/offerings#automate" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  AI Consulting
                </a>
                <a className="dc-hover-1c6qwgo" href="/offerings#automate" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  {"AI Agent & Automation"}
                </a>
                <a className="dc-hover-1c6qwgo" href="/offerings#automate" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  Production Assurance
                </a>
              </div>
              <div data-mcol="" style={{ display: "flex", flexDirection: "column", gap: "6px", opacity: v.menuOp, transform: `translateY(${v.menuColY ?? ""})`, transition: "opacity 400ms 120ms,transform 500ms cubic-bezier(0.22,1,0.36,1) 120ms" }}>
                <a className="dc-hover-1d726jp" href="/offerings#modernize" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", margin: "0 -12px 8px", borderRadius: "12px", textDecoration: "none", color: "#202733", transition: "background 200ms" }}>
                  <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "10px", background: "#FFF4E8", color: "#FF6B00", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                      <path d="M21 3v5h-5" />
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                      <path d="M8 16H3v5" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "16px", fontWeight: "600", letterSpacing: "-0.01em" }}>{"Modernization & Migration"}</span>
                  </span>
                </a>
                <a className="dc-hover-1c6qwgo" href="/offerings#modernize" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  Cloud Migration
                </a>
                <a className="dc-hover-1c6qwgo" href="/offerings#modernize" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  Application Migration
                </a>
                <a className="dc-hover-1c6qwgo" href="/offerings#modernize" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  Legacy Modernization
                </a>
                <a className="dc-hover-1c6qwgo" href="/offerings#modernize" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  System Integration
                </a>
                <a className="dc-hover-1c6qwgo" href="/offerings#modernize" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  {"API & Platform Modernization"}
                </a>
              </div>
              <a href="/offerings" onClick={v.menuClose} style={{ position: "relative", borderRadius: "16px", overflow: "hidden", minHeight: "300px", background: "#101A28", color: "#fff", textDecoration: "none", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "22px", opacity: v.menuOp, transition: "opacity 400ms 180ms" }}>
                <img className="dc-hover-gmxi8p" src="/images/stock/photo-1522071820081-009f0129c71c.jpg" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: ".55", transition: "transform 900ms cubic-bezier(0.22,1,0.36,1)" }} />
                <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(16,26,40,0) 30%,rgba(16,26,40,.92))" }} />
                <span style={{ position: "relative", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "600", lineHeight: "1.25", letterSpacing: "-0.01em" }}>
                    {"Build better. Automate smarter. Modernize for what's next."}
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#FFB52E" }}>
                    {"Explore offerings "}
                    <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div data-progress="" style={{ position: "absolute", left: "0", bottom: "-1px", height: "2px", width: "100%", background: "linear-gradient(90deg,#FF6B00,#FFB52E)", transformOrigin: "left", transform: "scaleX(0)" }} />
      </header>
      <main>
        <section data-screen-label="About hero" style={{ position: "relative", minHeight: "min(92vh,760px)", padding: "128px 0 64px", display: "flex", alignItems: "center", overflow: "hidden", background: "#101A28", color: "#fff" }}>
          <div style={{ position: "absolute", inset: "0", backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)", backgroundSize: "56px 56px", WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 70% 50%,#000 10%,transparent 75%)", maskImage: "radial-gradient(ellipse 60% 70% at 70% 50%,#000 10%,transparent 75%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: "-8%", top: "50%", width: "min(48vw,640px)", aspectRatio: "1", transform: "translateY(-50%)", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
            <div style={{ position: "absolute", inset: "12%", borderRadius: "50%", background: "radial-gradient(circle,rgba(250,123,32,.22),rgba(250,123,32,0) 65%)" }} />
            <svg viewBox="-4 -4 366 361" data-heroloop="" aria-hidden="true" style={{ position: "relative", width: "62%", height: "62%", overflow: "visible", display: "block", opacity: ".4" }}>
              <g data-ml="">
                <circle cx="50" cy="40" r="39" style={{ fill: "url(#emGL)" }} />
                <path d="M39 353V132L200 243" style={{ fill: "none", stroke: "url(#emGL)", strokeWidth: "78", strokeLinejoin: "round" }} />
              </g>
              <g data-mr="">
                <circle cx="308" cy="40" r="39" style={{ fill: "url(#emGR)" }} />
                <path d="M319 353V132L158 243" style={{ fill: "none", stroke: "url(#emGR)", strokeWidth: "78", strokeLinejoin: "round" }} />
              </g>
              <path data-mo="" d="M319 353V132L158 243" mask="url(#emMask)" style={{ fill: "none", stroke: "#E4490A", strokeWidth: "78", strokeLinejoin: "round" }} />
            </svg>
          </div>
          <div style={{ position: "relative", width: "100%", maxWidth: "1240px", margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "560px" }}>
              <div data-reveal="" style={{ whiteSpace: "nowrap", display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: "10px", padding: "8px 14px 8px 10px", border: "1px solid rgba(255,255,255,.18)", borderRadius: "999px", background: "rgba(255,255,255,.04)", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#fff" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FF6B00", boxShadow: "0 0 0 4px rgba(255,107,0,.2)" }} />
                {"ABOUT eMburc "}
              </div>
              <h1 style={{ margin: "0", fontWeight: "500", fontSize: "clamp(34px,4.4vw,56px)", lineHeight: "1.04", letterSpacing: "-0.04em" }}>
                {" "}
                <span style={{ display: "block", clipPath: "inset(-0.2em -100vw 0 -100vw)", paddingBottom: ".04em" }}>
                  <span className="about-hero-line" data-rise="" data-d="80" style={{ display: "block", whiteSpace: "nowrap" }}>
                    The Technology + Talent
                  </span>
                </span>
                {" "}
                <span style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}>
                  <span data-rise="" data-d="180" style={{ display: "block" }}>
                    {"Partner Built for "}
                    <span style={{ fontWeight: "600", background: "linear-gradient(90deg,#FF6B00,#FFB52E)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      Progress
                    </span>
                  </span>
                </span>
                {" "}
              </h1>
              <p data-reveal="" data-d="300" style={{ margin: "0", maxWidth: "540px", fontSize: "18px", lineHeight: "1.6", color: "#C3CAD5", textWrap: "pretty" }}>
                We help companies hire great engineers and build websites and products that work, without the usual hiring headaches.
              </p>
              <a className="dc-hover-1d5kcib" data-reveal="" data-d="400" href="#founder" style={{ alignSelf: "flex-start", marginTop: "10px", display: "inline-flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#C3CAD5", textDecoration: "none", transition: "color 200ms" }}>
                {"SCROLL TO EXPLORE "}
                <span data-bob="" style={{ display: "inline-block" }}>↓</span>
              </a>
            </div>
          </div>
        </section>
        <section id="founder" data-screen-label="From our founder" style={{ position: "relative", padding: "120px 0", overflow: "hidden", scrollMarginTop: "72px", background: "#fff" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "56px 88px", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px", position: "sticky", top: "112px" }}>
              <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#667085" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#FF6B00" }} />
                From Our Founder
              </div>
              <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(32px,4vw,52px)", lineHeight: "1.04", letterSpacing: "-0.04em", textWrap: "balance" }}>
                {"Built on Trust. "}
                <span style={{ color: "#FF6B00" }}>Driven by Delivery.</span>
              </h2>
              <div data-vc="" data-reveal="" data-d="160" style={{ position: "relative", margin: "24px 18px 28px 0" }}>
                <div aria-hidden="true" style={{ position: "absolute", inset: "0", borderRadius: "18px", background: "linear-gradient(150deg,#FA7B20,#E4490A)", transform: "rotate(-4deg) translate(10px,14px)", boxShadow: "0 18px 40px rgba(228,73,10,.25)", display: "flex", alignItems: "flex-end", padding: "20px 24px" }} />
                <div className="founder-card" onMouseMove={v.tilt} onMouseLeave={v.untilt} onMouseEnter={v.vcPlay} style={{ position: "relative", aspectRatio: "1.75/1", borderRadius: "18px", overflow: "hidden", background: "#101A28", color: "#fff", boxShadow: "0 24px 56px rgba(16,26,40,.28)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.15fr)", transition: "transform 300ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span aria-hidden="true" style={{ position: "absolute", inset: "0", backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
                  <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px", padding: "22px 0 22px 26px", borderRight: "1px dashed rgba(255,255,255,.14)" }}>
                    <div data-comment-anchor="909a8807f6-svg" style={{ position: "relative", marginRight: "22px", aspectRatio: "1/1", borderRadius: "14px", overflow: "hidden", background: "#fff" }}>
                      <img src="/assets/founder-nidhi-kumari.png" alt="Nidhi Kumari, Founder of eMburc Technologies" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "46% 30%" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", paddingRight: "22px", font: "500 10px/1 'Geist Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase" }}>
                      <span style={{ color: "#E7EAF0" }}>Technology</span>
                      <span style={{ color: "#FFB52E" }}>Talent</span>
                    </div>
                  </div>
                  <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "16px", padding: "24px 26px" }}>
                    <img src="/assets/emburc-lockup-onDark.svg" alt="eMburc" style={{ alignSelf: "flex-end", height: "20px", width: "auto" }} />
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontSize: "clamp(18px,1.7vw,22px)", fontWeight: "600", letterSpacing: "-0.02em" }}>Nidhi Kumari</span>
                      <span style={{ fontSize: "13px", color: "#C3CAD5" }}>Founder, eMburc Technologies</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,.14)" }}>
                      <span style={{ fontSize: "13px", lineHeight: "1.45", color: "#E7EAF0", textWrap: "pretty" }}>
                        Great technology needs great talent.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "32px", paddingTop: "8px" }}>
              <span data-reveal="" aria-hidden="true" style={{ fontSize: "140px", lineHeight: ".6", height: "56px", fontWeight: "500", color: "#FF6B00" }}>
                “
              </span>
              <p data-reveal="" data-d="80" style={{ margin: "0", fontSize: "clamp(21px,2.1vw,27px)", lineHeight: "1.45", fontWeight: "500", letterSpacing: "-0.015em", color: "#202733", textWrap: "pretty" }}>
                {"I've spent my career as a project manager, leading website and app development projects from start to finish. I owned operations and delivery, which meant working just as closely with the technology as with the people building it."}
              </p>
              <p data-reveal="" data-d="140" style={{ margin: "0", paddingLeft: "24px", borderLeft: "2px solid #E7EAF0", fontSize: "18px", lineHeight: "1.7", color: "#475467", textWrap: "pretty" }}>
                {"Again and again, I saw the same problem: good ideas slowed down by the wrong people, or by teams that never quite fit. "}
                <span style={{ color: "#202733", fontWeight: "600", background: "linear-gradient(transparent 62%,#FFE2C7 62%)" }}>
                  Great technology needs great talent, and the two have to work together.
                </span>
              </p>
              <p data-reveal="" data-d="200" style={{ margin: "0", paddingLeft: "24px", borderLeft: "2px solid #FF6B00", fontSize: "18px", lineHeight: "1.7", color: "#475467", textWrap: "pretty" }}>
                {"eMburc is my answer. We match businesses with the right engineers, and we deliver projects with a project manager who owns the outcome. "}
                <span style={{ color: "#202733", fontWeight: "600" }}>
                  Every partnership starts with trust and is judged by results.
                </span>
              </p>
            </div>
          </div>
        </section>
        <section data-screen-label="Our mission" data-comment-anchor="5960d4b85d-section" style={{ padding: "88px 0", background: "#F7F8FA" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "20px 64px", alignItems: "end" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#667085" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#98A2B3" }} />
                  Our Mission
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(30px,3.6vw,44px)", lineHeight: "1.08", letterSpacing: "-0.035em" }}>
                  Turning Possibility Into Progress.
                </h2>
              </div>
              <p data-reveal="" data-d="140" style={{ margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#667085", textWrap: "pretty" }}>
                Great businesses are built by great teams. Our job is to give you the right people and the right delivery, so your ideas actually ship.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,500px),1fr))", gap: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "16px" }}>
                <div className="dc-hover-48en2q" data-reveal="" data-d="0" style={{ borderRadius: "16px", overflow: "hidden", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", transition: "box-shadow 300ms,border-color 250ms" }}>
                  <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", background: "#E7EAF0" }}>
                    <img className="dc-hover-gmxi7s" src="/images/stock/photo-1517245386807-bb43f82c33c4.jpg" alt="Team mapping out milestones" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform 600ms cubic-bezier(0.22,1,0.36,1)" }} />
                  </div>
                  <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <h3 style={{ margin: "0", fontSize: "17px", fontWeight: "600", lineHeight: "1.3", letterSpacing: "-0.02em", color: "#202733", textWrap: "balance" }}>
                      Outcomes over output.
                    </h3>
                    <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#667085", textWrap: "pretty" }}>
                      Projects are priced against milestones, so you pay for progress, not hours.
                    </p>
                  </div>
                </div>
                <div className="dc-hover-48en2q" data-reveal="" data-d="80" style={{ borderRadius: "16px", overflow: "hidden", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", transition: "box-shadow 300ms,border-color 250ms" }}>
                  <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", background: "#E7EAF0" }}>
                    <img className="dc-hover-gmxi7s" src="/images/stock/photo-1573164713714-d95e436ab8d6.jpg" alt="Senior engineer at work" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform 600ms cubic-bezier(0.22,1,0.36,1)" }} />
                  </div>
                  <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <h3 style={{ margin: "0", fontSize: "17px", fontWeight: "600", lineHeight: "1.3", letterSpacing: "-0.02em", color: "#202733", textWrap: "balance" }}>
                      Senior people, real accountability.
                    </h3>
                    <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#667085", textWrap: "pretty" }}>
                      Experienced engineers lead the work, not account managers.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "16px" }}>
                <div className="dc-hover-48en2q" data-reveal="" data-d="160" style={{ borderRadius: "16px", overflow: "hidden", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", transition: "box-shadow 300ms,border-color 250ms" }}>
                  <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", background: "#E7EAF0" }}>
                    <img className="dc-hover-gmxi7s" src="/images/stock/photo-1542744173-8e7e53415bb0.jpg" alt="Team in an open discussion" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform 600ms cubic-bezier(0.22,1,0.36,1)" }} />
                  </div>
                  <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <h3 style={{ margin: "0", fontSize: "17px", fontWeight: "600", lineHeight: "1.3", letterSpacing: "-0.02em", color: "#202733", textWrap: "balance" }}>
                      Honest communication.
                    </h3>
                    <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#667085", textWrap: "pretty" }}>
                      Weekly updates, clear timelines and no surprises.
                    </p>
                  </div>
                </div>
                <div className="dc-hover-48en2q" data-reveal="" data-d="240" style={{ borderRadius: "16px", overflow: "hidden", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", transition: "box-shadow 300ms,border-color 250ms" }}>
                  <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", background: "#E7EAF0" }}>
                    <img className="dc-hover-gmxi7s" src="/images/stock/photo-1515879218367-8466d910aaa4.jpg" alt="Clean code on screen" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform 600ms cubic-bezier(0.22,1,0.36,1)" }} />
                  </div>
                  <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <h3 style={{ margin: "0", fontSize: "17px", fontWeight: "600", lineHeight: "1.3", letterSpacing: "-0.02em", color: "#202733", textWrap: "balance" }}>
                      Built to hand over.
                    </h3>
                    <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#667085", textWrap: "pretty" }}>
                      Clean code, clear documentation and 30 days of post-launch support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="How we work" style={{ padding: "88px 0", color: "#fff", background: "#101A28" }}>
          <div data-comment-anchor="7dd3fdc074-div" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "36px 64px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "380px" }}>
              <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#C3CAD5" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#FF6B00" }} />
                How We Work
              </div>
              <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(30px,3.6vw,44px)", lineHeight: "1.08", letterSpacing: "-0.035em" }}>
                Clear Steps. No Surprises.
              </h2>
            </div>
            <div data-puzzle="" className="about-steps" style={{ gridColumn: "span 1", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "0", minWidth: "0" }}>
              <div style={{ position: "relative", zIndex: "4", minHeight: "150px", padding: "30px 40px", borderRadius: "20px 0 0 0", background: "#16233A", display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px", transform: v.pzA, opacity: v.pzOp, transition: `transform 900ms cubic-bezier(0.22,1,0.36,1) ${v.pzAD ?? ""},opacity 500ms ease ${v.pzAD ?? ""}` }}>
                <span aria-hidden="true" style={{ position: "absolute", top: "50%", right: "-20px", width: "40px", height: "40px", marginTop: "-20px", borderRadius: "50%", background: "#16233A" }} />
                <span aria-hidden="true" style={{ position: "absolute", left: "50%", bottom: "-20px", width: "40px", height: "40px", marginLeft: "-20px", borderRadius: "50%", background: "#16233A" }} />
                <span style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px", fontSize: "20px", fontWeight: "500", letterSpacing: "-0.02em", color: "#E7EAF0" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FF6B00" }} />
                  Listen.
                </span>
                <span style={{ position: "relative", maxWidth: "380px", fontSize: "15px", lineHeight: "1.6", color: "#98A2B3", textWrap: "pretty" }}>
                  {"We learn your business, your goals and what's slowing you down."}
                </span>
              </div>
              <div style={{ position: "relative", zIndex: "3", minHeight: "150px", padding: "30px 40px", borderRadius: "0 20px 0 0", background: "#1A283F", display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px", transform: v.pzB, opacity: v.pzOp, transition: `transform 900ms cubic-bezier(0.22,1,0.36,1) ${v.pzBD ?? ""},opacity 500ms ease ${v.pzBD ?? ""}` }}>
                <span aria-hidden="true" style={{ position: "absolute", left: "50%", bottom: "-20px", width: "40px", height: "40px", marginLeft: "-20px", borderRadius: "50%", background: "#1A283F" }} />
                <span style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px", fontSize: "20px", fontWeight: "500", letterSpacing: "-0.02em", color: "#E7EAF0" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FF6B00" }} />
                  Match.
                </span>
                <span style={{ position: "relative", maxWidth: "380px", fontSize: "15px", lineHeight: "1.6", color: "#98A2B3", textWrap: "pretty" }}>
                  We pick the right engineers or project team for the job.
                </span>
              </div>
              <div style={{ position: "relative", zIndex: "2", minHeight: "150px", padding: "30px 40px", borderRadius: "0 0 0 20px", background: "#1A283F", display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px", transform: v.pzC, opacity: v.pzOp, transition: `transform 900ms cubic-bezier(0.22,1,0.36,1) ${v.pzCD ?? ""},opacity 500ms ease ${v.pzCD ?? ""}` }}>
                <span aria-hidden="true" style={{ position: "absolute", top: "50%", right: "-20px", width: "40px", height: "40px", marginTop: "-20px", borderRadius: "50%", background: "#1A283F" }} />
                <span style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px", fontSize: "20px", fontWeight: "500", letterSpacing: "-0.02em", color: "#E7EAF0" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FF6B00" }} />
                  Deliver.
                </span>
                <span style={{ position: "relative", maxWidth: "380px", fontSize: "15px", lineHeight: "1.6", color: "#98A2B3", textWrap: "pretty" }}>
                  We work as part of your team, with one person owning quality and timelines.
                </span>
              </div>
              <div style={{ position: "relative", zIndex: "1", minHeight: "150px", padding: "30px 40px", borderRadius: "0 0 20px 0", background: "#16233A", display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px", transform: v.pzD, opacity: v.pzOp, transition: `transform 900ms cubic-bezier(0.22,1,0.36,1) ${v.pzDD ?? ""},opacity 500ms ease ${v.pzDD ?? ""}` }}>
                <span style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px", fontSize: "20px", fontWeight: "500", letterSpacing: "-0.02em", color: "#E7EAF0" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FF6B00" }} />
                  Grow.
                </span>
                <span style={{ position: "relative", maxWidth: "380px", fontSize: "15px", lineHeight: "1.6", color: "#98A2B3", textWrap: "pretty" }}>
                  As you grow, we add people, extend the project or hand everything over.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Our story" data-comment-anchor="29bb0274d0-section" style={{ padding: "88px 0" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "40px 80px", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "440px" }}>
              <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#667085" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#98A2B3" }} />
                Our Story
              </div>
              <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(30px,3.6vw,44px)", lineHeight: "1.08", letterSpacing: "-0.035em" }}>
                Just Getting Started.
              </h2>
              <p data-reveal="" data-d="140" style={{ margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#667085", textWrap: "pretty" }}>
                {"Our story is short, and that's the point. You get a founder-led team that's hungry to earn your trust."}
              </p>
            </div>
            <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
              <span aria-hidden="true" style={{ position: "absolute", left: "5px", top: "12px", bottom: "12px", width: "1.5px", background: "linear-gradient(180deg,#D0D5DD 0%,#D0D5DD 70%,rgba(255,107,0,.5) 100%)" }} />
              <div data-reveal="" data-d="0" style={{ position: "relative", display: "grid", gridTemplateColumns: "72px minmax(0,1fr)", gap: "6px 20px", padding: "0 0 0 32px" }}>
                <span style={{ position: "absolute", left: "0", top: "5px", width: "12px", height: "12px", borderRadius: "50%", background: "#101A28", boxShadow: "0 0 0 4px #fff" }} />
                <span style={{ font: "500 12px/1.6 'Geist Mono',monospace", letterSpacing: ".08em", color: "#667085" }}>2026</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingBottom: "28px", borderBottom: "1px solid #E7EAF0" }}>
                  <span style={{ fontSize: "19px", fontWeight: "600", lineHeight: "1.3", letterSpacing: "-0.015em", color: "#202733" }}>
                    The spark.
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#667085", textWrap: "pretty" }}>
                    eMburc is founded in India to bring talent and delivery under one roof.
                  </span>
                </div>
              </div>
              <div data-reveal="" data-d="100" style={{ position: "relative", display: "grid", gridTemplateColumns: "72px minmax(0,1fr)", gap: "6px 20px", padding: "28px 0 0 32px" }}>
                <span style={{ position: "absolute", left: "0", top: "33px", width: "12px", height: "12px", borderRadius: "50%", background: "#101A28", boxShadow: "0 0 0 4px #fff" }} />
                <span style={{ font: "500 12px/1.6 'Geist Mono',monospace", letterSpacing: ".08em", color: "#667085" }}>2026</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingBottom: "28px", borderBottom: "1px solid #E7EAF0" }}>
                  <span style={{ fontSize: "19px", fontWeight: "600", lineHeight: "1.3", letterSpacing: "-0.015em", color: "#202733" }}>
                    Building the bench.
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#667085", textWrap: "pretty" }}>
                    A network of vetted engineers across web, mobile, cloud and AI, ready to join your team.
                  </span>
                </div>
              </div>
              <div data-reveal="" data-d="200" style={{ position: "relative", display: "grid", gridTemplateColumns: "72px minmax(0,1fr)", gap: "6px 20px", padding: "28px 0 0 32px" }}>
                <span style={{ position: "absolute", left: "0", top: "33px", width: "12px", height: "12px", borderRadius: "50%", background: "#FF6B00", boxShadow: "0 0 0 4px #fff" }} />
                <span style={{ font: "500 12px/1.6 'Geist Mono',monospace", letterSpacing: ".08em", color: "#C2410C" }}>NEXT</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingBottom: "0", borderBottom: "none" }}>
                  <span style={{ fontSize: "19px", fontWeight: "600", lineHeight: "1.3", letterSpacing: "-0.015em", color: "#202733" }}>
                    The bigger picture.
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#667085", textWrap: "pretty" }}>
                    Dedicated teams, AI solutions and long-term partnerships with businesses worldwide.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Our values" style={{ padding: "112px 0", background: "#0B1320", color: "#fff" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "56px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px 64px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#C3CAD5" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#FF6B00" }} />
                  Our Values
                  <span style={{ width: "20px", height: "1.5px", background: "#FF6B00" }} />
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(32px,4vw,52px)", lineHeight: "1.06", letterSpacing: "-0.04em" }}>
                  The Principles Behind
                  <br />
                  {"Every "}
                  <span style={{ background: "linear-gradient(90deg,#FF6B00,#FFB52E)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    Partnership.
                  </span>
                </h2>
              </div>
              <p data-reveal="" data-d="140" style={{ margin: "0", maxWidth: "420px", fontSize: "17px", lineHeight: "1.6", color: "#C3CAD5" }}>
                The values that shape how we work, collaborate, and grow with our clients.
              </p>
            </div>
            <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(max(clamp(25%,(1000px - 100%) * 1000,50%),clamp(0%,(560px - 100%) * 1000,100%)),1fr))", borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,.08)" }}>
              <div style={{ position: "relative", minHeight: "300px", overflow: "hidden", background: "#1B2535" }}>
                <img className="dc-hover-gmxi8p" src="/images/stock/photo-1552664730-d307ca884978.jpg" alt="A team planning strategy at a whiteboard" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 900ms cubic-bezier(0.22,1,0.36,1)" }} />
              </div>
              <div className="dc-hover-zii6mg" style={{ minHeight: "300px", padding: "40px 36px", background: "#151F2E", display: "flex", flexDirection: "column", gap: "18px", transition: "background 300ms" }}>
                <svg viewBox="0 0 24 24" style={{ width: "30px", height: "30px", fill: "none", stroke: "#FF8A33", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <h3 style={{ margin: "20px 0 0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em", color: "#fff" }}>
                  Partner First
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#C3CAD5" }}>
                  {"We build long-term relationships by putting our clients' success at the center of every decision."}
                </p>
              </div>
              <div style={{ position: "relative", minHeight: "300px", overflow: "hidden", background: "#1B2535" }}>
                <img className="dc-hover-gmxi8p" src="/images/stock/photo-1600880292203-757bb62b4baf.jpg" alt="Colleagues in a meeting with laptops" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 900ms cubic-bezier(0.22,1,0.36,1)" }} />
              </div>
              <div className="dc-hover-zii6mg" style={{ minHeight: "300px", padding: "40px 36px", background: "#151F2E", display: "flex", flexDirection: "column", gap: "18px", transition: "background 300ms" }}>
                <svg viewBox="0 0 24 24" style={{ width: "30px", height: "30px", fill: "none", stroke: "#FF8A33", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <h3 style={{ margin: "20px 0 0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em", color: "#fff" }}>
                  Transparent Communication
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#C3CAD5" }}>
                  Clear updates, honest conversations, and complete visibility throughout every engagement.
                </p>
              </div>
              <div className="dc-hover-zii6mg" style={{ minHeight: "300px", padding: "40px 36px", background: "#151F2E", display: "flex", flexDirection: "column", gap: "18px", transition: "background 300ms" }}>
                <svg viewBox="0 0 24 24" style={{ width: "30px", height: "30px", fill: "none", stroke: "#FF8A33", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h3 style={{ margin: "20px 0 0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em", color: "#fff" }}>
                  Deep Ownership
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#C3CAD5" }}>
                  We take responsibility for outcomes, not just deliverables.
                </p>
              </div>
              <div style={{ position: "relative", minHeight: "300px", overflow: "hidden", background: "#1B2535" }}>
                <img className="dc-hover-gmxi8p" src="/images/stock/photo-1522071820081-009f0129c71c.jpg" alt="Engineers collaborating around a table" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 900ms cubic-bezier(0.22,1,0.36,1)" }} />
              </div>
              <div className="dc-hover-zii6mg" style={{ minHeight: "300px", padding: "40px 36px", background: "#151F2E", display: "flex", flexDirection: "column", gap: "18px", transition: "background 300ms" }}>
                <svg viewBox="0 0 24 24" style={{ width: "30px", height: "30px", fill: "none", stroke: "#FF8A33", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
                  <path d="M16 7h6v6" />
                </svg>
                <h3 style={{ margin: "20px 0 0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em", color: "#fff" }}>
                  Long-Term Thinking
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#C3CAD5" }}>
                  We create solutions and partnerships designed to grow with your business.
                </p>
              </div>
              <div style={{ position: "relative", minHeight: "300px", overflow: "hidden", background: "#1B2535" }}>
                <img className="dc-hover-gmxi8p" src="/images/stock/photo-1556761175-b413da4baf72.jpg" alt="A leadership team reviewing plans in a boardroom" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 900ms cubic-bezier(0.22,1,0.36,1)" }} />
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="CTA" onMouseMove={v.spot} style={{ position: "relative", padding: "120px 0", color: "#fff", background: "radial-gradient(700px circle at var(--mx,30%) var(--my,40%),rgba(255,107,0,.16),transparent 60%),#101A28", overflow: "hidden" }}>
          <svg viewBox="-4 -4 366 361" data-mark="" data-markplay="" aria-hidden="true" style={{ position: "absolute", right: "-60px", bottom: "-90px", height: "480px", width: "487px", opacity: ".08", overflow: "visible" }}>
            <g data-ml="">
              <circle cx="50" cy="40" r="39" style={{ fill: "url(#emGL)" }} />
              <path d="M39 353V132L200 243" style={{ fill: "none", stroke: "url(#emGL)", strokeWidth: "78", strokeLinejoin: "round" }} />
            </g>
            <g data-mr="">
              <circle cx="308" cy="40" r="39" style={{ fill: "url(#emGR)" }} />
              <path d="M319 353V132L158 243" style={{ fill: "none", stroke: "url(#emGR)", strokeWidth: "78", strokeLinejoin: "round" }} />
            </g>
            <path data-mo="" d="M319 353V132L158 243" mask="url(#emMask)" style={{ fill: "none", stroke: "#E4490A", strokeWidth: "78", strokeLinejoin: "round" }} />
          </svg>
          <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "22px", textAlign: "center" }}>
            <h2 data-reveal="" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(34px,4.4vw,56px)", lineHeight: "1.04", letterSpacing: "-0.04em" }}>
              {"Let's Build What's Next."}
            </h2>
            <p data-reveal="" data-d="80" style={{ margin: "0", maxWidth: "520px", fontSize: "18px", lineHeight: "1.6", color: "#C3CAD5" }}>
              {"Tell us where you're headed. We'll bring the tech and the talent."}
            </p>
            <div data-reveal="" data-d="160" style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginTop: "8px" }}>
              <a className="dc-hover-1t1tjdy" href="#talk" onClick={v.talkOpen} style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "52px", padding: "0 24px", borderRadius: "10px", background: "#FF6B00", color: "#202733", fontWeight: "500", fontSize: "16px", textDecoration: "none", transition: "transform 250ms,box-shadow 250ms" }}>
                {"Let's Talk"}
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer style={{ padding: "56px 0 28px", background: "#101A28", color: "#fff" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "40px" }}>
          <div className="site-footer-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.35fr) repeat(4,minmax(0,1fr))", gap: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "300px" }}>
              <span style={{ display: "flex", flexDirection: "column", gap: "5px", alignSelf: "flex-start" }}>
                <img src="/assets/emburc-logo-onDark.png" alt="eMburc Technologies" style={{ display: "block", height: "52px", width: "auto" }} />
              </span>
              <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.6", color: "#C3CAD5" }}>
                Technology + Talent Partner. Turning possibility into progress.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px" }}>
              <span style={{ font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#98A2B3", marginBottom: "4px" }}>
                Offerings
              </span>
              <a className="dc-hover-1eiwf5n" href="/offerings#build" style={{ color: "#E7EAF0", textDecoration: "none", lineHeight: "1.45", transition: "color 200ms" }}>
                Digital Product Development
              </a>
              <a className="dc-hover-1eiwf5n" href="/offerings#automate" style={{ color: "#E7EAF0", textDecoration: "none", lineHeight: "1.45", transition: "color 200ms" }}>
                {"AI & Automation"}
              </a>
              <a className="dc-hover-1eiwf5n" href="/offerings#modernize" style={{ color: "#E7EAF0", textDecoration: "none", lineHeight: "1.45", transition: "color 200ms" }}>
                {"Modernization & Migration"}
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px" }}>
              <span style={{ font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#98A2B3", marginBottom: "4px" }}>
                Talent Solutions
              </span>
              <a className="dc-hover-1eiwf5n" href="/talent-solutions" style={{ color: "#E7EAF0", textDecoration: "none", lineHeight: "1.45", transition: "color 200ms" }}>
                Staff Augmentation
              </a>
              <a className="dc-hover-1eiwf5n" href="/talent-solutions" style={{ color: "#E7EAF0", textDecoration: "none", lineHeight: "1.45", transition: "color 200ms" }}>
                Dedicated Development Teams
              </a>
              <a className="dc-hover-1eiwf5n" href="/talent-solutions" style={{ color: "#E7EAF0", textDecoration: "none", lineHeight: "1.45", transition: "color 200ms" }}>
                Managed Teams
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px" }}>
              <span style={{ font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#98A2B3", marginBottom: "4px" }}>
                Company
              </span>
              <a className="dc-hover-1eiwf5n" href="/about" style={{ color: "#E7EAF0", textDecoration: "none", lineHeight: "1.45", transition: "color 200ms" }}>
                About
              </a>
              <a className="dc-hover-1eiwf5n" href="/case-studies" style={{ color: "#E7EAF0", textDecoration: "none", lineHeight: "1.45", transition: "color 200ms" }}>
                Case Studies
              </a>
              <a className="dc-hover-1eiwf5n" href="/industries" style={{ color: "#E7EAF0", textDecoration: "none", lineHeight: "1.45", transition: "color 200ms" }}>
                Industries
              </a>
              <a className="dc-hover-1eiwf5n" href="#careers" onClick={v.careersOpen} style={{ color: "#E7EAF0", textDecoration: "none", lineHeight: "1.45", transition: "color 200ms" }}>
                Careers
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px" }}>
              <span style={{ font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#98A2B3", marginBottom: "4px" }}>
                Contact
              </span>
              <a className="dc-hover-1eiwf5n" href="mailto:contact@emburc.com" style={{ display: "flex", alignItems: "center", gap: "12px", marginLeft: "-44px", overflowWrap: "anywhere", color: "#E7EAF0", textDecoration: "none", transition: "color 200ms" }}>
                <span aria-hidden="true" style={{ flex: "none", width: "32px", height: "32px", borderRadius: "8px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF6B00" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <span style={{ minWidth: "0" }}>contact@emburc.com</span>
              </a>
              <span style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginLeft: "-44px", color: "#E7EAF0", lineHeight: "1.55" }}>
                <span aria-hidden="true" style={{ flex: "none", width: "32px", height: "32px", borderRadius: "8px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF6B00" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M12 22s7-6.1 7-12a7 7 0 0 0-14 0c0 5.9 7 12 7 12z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <span style={{ minWidth: "0", paddingTop: "5px" }}>HB1383, Namutola, Haludbani, Jamshedpur, JH-831002</span>
              </span>
              <span style={{ marginTop: "10px" }}>
                <span style={{ font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#98A2B3", marginBottom: "4px" }}>
                  Social
                </span>
              </span>
              <span style={{ display: "flex", gap: "10px" }}>
                <a className="dc-hover-fj0tts" href="https://www.linkedin.com/company/emburctechnologies/" target="_blank" rel="noopener" aria-label="eMburc on LinkedIn" title="LinkedIn" style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#E7EAF0", transition: "background 200ms,border-color 200ms,color 200ms" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px", fill: "currentColor" }}>
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3v-11zm6.5 0h3.83v1.5h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13v5.43h-4v-4.82c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.9h-4v-11z" />
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", paddingTop: "22px", borderTop: "1px solid rgba(255,255,255,.1)", fontSize: "13px", color: "#98A2B3" }}>
            <span>© 2026 eMburc Technologies</span>
            <span style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
              <a className="dc-hover-1eiwf5n" href="/privacy-policy" style={{ color: "#E7EAF0", textDecoration: "none", lineHeight: "1.45", transition: "color 200ms" }}>
                Privacy Policy
              </a>
              <a className="dc-hover-1eiwf5n" href="/terms-of-use" style={{ color: "#E7EAF0", textDecoration: "none", lineHeight: "1.45", transition: "color 200ms" }}>
                Terms of Use
              </a>
            </span>
          </div>
        </div>
      </footer>
      {v.talk ? (
        <>
          <div data-talk="" role="dialog" aria-modal="true" aria-label="Let's Talk" style={{ position: "fixed", inset: "0", zIndex: "300", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
            <div data-talkbg="" onClick={v.talkClose} style={{ position: "absolute", inset: "0", background: "rgba(16,26,40,.6)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }} />
            <div data-talkpanel="" style={{ position: "relative", width: "100%", maxWidth: "640px", maxHeight: "calc(100vh - 48px)", overflow: "auto", background: "#fff", borderRadius: "20px", boxShadow: "0 24px 64px rgba(0,0,0,.3)" }}>
              <div style={{ position: "sticky", top: "0", zIndex: "1", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", padding: "28px 32px 20px", background: "#fff", borderBottom: "1px solid #E7EAF0" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#D35800" }}>
                    {"Let's Talk"}
                  </span>
                  <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-0.02em", color: "#202733" }}>
                    {"Let's Build What's Next."}
                  </span>
                  <span style={{ fontSize: "14px", color: "#667085" }}>Expect a reply within 24 hrs</span>
                </div>
                <button className="dc-hover-1ypwpkf" type="button" onClick={v.talkClose} aria-label="Close" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #E7EAF0", background: "#fff", color: "#202733", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 300ms cubic-bezier(0.22,1,0.36,1),background 200ms" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }}>
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              {v.tNotSent ? (
                <>
                  <form onSubmit={v.tSubmit} noValidate style={{ padding: "24px 32px 28px", display: "flex", flexDirection: "column", gap: "18px" }}>
                    <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "500", color: "#202733" }}>
                        Name *
                      </span>
                      <input className="dc-focus-ktogc6" value={v.tName ?? ""} onChange={v.setName} placeholder="Jane Smith" autoComplete="name" style={{ height: "48px", padding: "0 14px", borderRadius: "10px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none", width: "100%", transition: "border-color 150ms,background 150ms", borderColor: v.nameBd }} />
                    </label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "14px" }}>
                      <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "500", color: "#202733" }}>
                          Email *
                        </span>
                        <input className="dc-focus-ktogc6" type="email" value={v.tEmail ?? ""} onChange={v.setEmail} placeholder="you@example.com" autoComplete="email" style={{ height: "48px", padding: "0 14px", borderRadius: "10px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none", width: "100%", transition: "border-color 150ms,background 150ms", borderColor: v.emailBd }} />
                      </label>
                      <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "500", color: "#202733" }}>
                          {"Phone "}
                          <span style={{ padding: "3px 8px", borderRadius: "999px", background: "#F2F4F7", fontSize: "11px", fontWeight: "400", color: "#667085" }}>
                            optional
                          </span>
                        </span>
                        <span style={{ display: "flex", height: "48px", borderRadius: "10px", border: "1px solid #E7EAF0", background: "#F7F8FA", overflow: "hidden" }}>
                          <select value={v.tCode ?? ""} onChange={v.setCode} aria-label="Country code" style={{ flex: "none", height: "100%", padding: "0 10px", border: "none", borderRight: "1px solid #E7EAF0", background: "transparent", fontSize: "14px", color: "#202733", outline: "none", cursor: "pointer" }}>
                            <option value="+91">🇮🇳 +91</option>
                            <option value="+44">🇬🇧 +44</option>
                            <option value="+1">🇺🇸 +1</option>
                            <option value="+971">🇦🇪 +971</option>
                            <option value="+61">🇦🇺 +61</option>
                          </select>
                          <input type="tel" value={v.tPhone ?? ""} onChange={v.setPhone} placeholder="555 000 0000" autoComplete="tel" style={{ flex: "1", minWidth: "0", height: "100%", padding: "0 14px", border: "none", background: "transparent", fontSize: "15px", color: "#202733", outline: "none" }} />
                        </span>
                      </label>
                    </div>
                    <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "500", color: "#202733" }}>
                        {"How can we help? "}
                        <span style={{ padding: "3px 8px", borderRadius: "999px", background: "#F2F4F7", fontSize: "11px", fontWeight: "400", color: "#667085" }}>
                          optional
                        </span>
                      </span>
                      <span style={{ position: "relative", display: "block" }}>
                        {" "}
                        <select className="dc-focus-ktogc6" value={v.tSvc ?? ""} onChange={v.setSvc} style={{ height: "48px", padding: "0 14px", borderRadius: "10px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", color: v.svcColor, outline: "none", width: "100%", transition: "border-color 150ms,background 150ms", appearance: "none", WebkitAppearance: "none", paddingRight: "44px", cursor: "pointer" }}>
                          <option value="">Select one</option>
                          {" "}
                          <optgroup label="Offerings">
                            {" "}
                            <option>Digital Product Development</option>
                            {" "}
                            <option>{"AI & Automation"}</option>
                            {" "}
                            <option>{"Modernization & Migration"}</option>
                            {" "}
                          </optgroup>
                          {" "}
                          <optgroup label="Talent Solutions">
                            {" "}
                            <option>Staff Augmentation</option>
                            {" "}
                            <option>Dedicated Teams / Delivery Pods</option>
                            {" "}
                            <option>Development Centers</option>
                            {" "}
                          </optgroup>
                          {" "}
                          <option value="other">{"Something else, I'll describe it"}</option>
                        </select>
                        {" "}
                        <svg viewBox="0 0 24 24" style={{ position: "absolute", right: "16px", top: "50%", width: "18px", height: "18px", marginTop: "-9px", fill: "none", stroke: "#202733", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", pointerEvents: "none" }}>
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                        {" "}
                      </span>
                    </label>
                    {v.svcOther ? (
                      <>
                        {" "}
                        <label data-other="" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "500", color: "#202733" }}>
                            Tell us the service you need
                          </span>
                          <input className="dc-focus-ktogc6" value={v.tOther ?? ""} onChange={v.setOther} placeholder="e.g. Data engineering, QA automation" style={{ height: "48px", padding: "0 14px", borderRadius: "10px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none", width: "100%", transition: "border-color 150ms,background 150ms" }} />
                        </label>
                        {" "}
                      </>
                    ) : null}
                    <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "500", color: "#202733" }}>
                        What are you building? *
                      </span>
                      <textarea className="dc-focus-ktogc6" value={v.tMsg ?? ""} onChange={v.setMsg} maxLength={2000} rows={4} placeholder="Describe your project — what it does, where you are, what you need. Any deadlines or constraints?" style={{ padding: "12px 14px", borderRadius: "10px", border: `1px solid ${v.msgBd ?? ""}`, background: "#F7F8FA", fontSize: "15px", lineHeight: "1.5", color: "#202733", outline: "none", resize: "vertical", minHeight: "110px", transition: "border-color 150ms,background 150ms" }} />
                      <span style={{ display: "block", height: "3px", borderRadius: "2px", background: "#E7EAF0", overflow: "hidden" }}>
                        <span style={{ display: "block", height: "100%", width: v.msgPct, background: "linear-gradient(90deg,#FF6B00,#FFB52E)", transition: "width 250ms" }} />
                      </span>
                      <span style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#667085" }}>
                        <span>{v.msgHint}</span>
                        <span>{v.msgCount}{" / 2000"}</span>
                      </span>
                    </label>
                    <label className="dc-hover-1einh9h" style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: "8px", fontSize: "14px", color: "#667085", cursor: "pointer", transition: "color 200ms" }}>
                      <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                      </svg>
                      <span>{v.fileLabel}</span>
                      <input type="file" onChange={v.setFile} style={{ display: "none" }} />
                    </label>
                    <button className="dc-hover-16zq6ft" type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", height: "52px", borderRadius: "10px", border: "none", background: v.submitBg, color: "#fff", fontSize: "15px", fontWeight: "500", cursor: "pointer", transition: "background 250ms,transform 250ms" }}>
                      {"Submit "}
                      <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                    {v.tError ? (
                      <>
                        {" "}
                        <span style={{ fontSize: "13px", color: "#C4320A", textAlign: "center" }}>
                          Please add your name, a valid email and at least 15 characters about your project.
                        </span>
                        {" "}
                      </>
                    ) : null}
                    <span style={{ fontSize: "12px", color: "#667085", textAlign: "center" }}>
                      {"By submitting you agree to our "}
                      <a href="/privacy-policy" style={{ color: "#202733" }}>Privacy Policy</a>
                      {" and "}
                      <a href="/terms-of-use" style={{ color: "#202733" }}>Terms of Use</a>
                      .
                    </span>
                  </form>
                </>
              ) : null}
              {v.tSent ? (
                <>
                  <div style={{ padding: "56px 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textAlign: "center" }}>
                    <span style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#FFF4E8", color: "#FF6B00", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 24 24" style={{ width: "28px", height: "28px", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-0.02em" }}>
                      {"Got it! We'll be in touch within 24 hours."}
                    </span>
                    <button type="button" onClick={v.talkClose} style={{ height: "44px", padding: "0 20px", borderRadius: "10px", border: "1.5px solid #202733", background: "#fff", color: "#202733", fontSize: "14px", fontWeight: "500", cursor: "pointer" }}>
                      Close
                    </button>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </>
      ) : null}
      {v.crOpen ? (
        <>
          <div role="dialog" aria-modal="true" aria-label="Careers at eMburc" style={{ position: "fixed", inset: "0", zIndex: "120", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
            <div onClick={v.careersClose} data-crbg="" style={{ position: "absolute", inset: "0", background: "rgba(16,26,40,.6)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }} />
            <div data-crpanel="" style={{ position: "relative", width: "min(640px,100%)", maxHeight: "calc(100vh - 40px)", overflowY: "auto", borderRadius: "28px", background: "#fff", color: "#202733", boxShadow: "0 40px 100px rgba(0,0,0,.35)" }}>
              <div style={{ position: "relative", overflow: "hidden", padding: "28px 28px 24px", background: "#101A28", color: "#fff" }}>
                <div style={{ position: "absolute", width: "320px", height: "320px", right: "-100px", top: "-170px", borderRadius: "50%", background: "radial-gradient(circle,rgba(250,123,32,.4),rgba(250,123,32,0) 65%)" }} />
                {" "}
                <button className="dc-hover-kp9gdw" type="button" onClick={v.careersClose} aria-label="Close" style={{ position: "absolute", right: "18px", top: "18px", width: "38px", height: "38px", borderRadius: "50%", border: "1px solid rgba(255,255,255,.2)", background: "rgba(255,255,255,.06)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 300ms" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", fill: "none", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round" }}>
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
                {" "}
                <span style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px", font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#FFB52E" }}>
                  <span style={{ width: "18px", height: "1.5px", background: "#FA7B20" }} />
                  CAREERS
                </span>
                {" "}
                <h3 style={{ position: "relative", margin: "12px 0 6px", fontSize: "clamp(24px,3vw,30px)", fontWeight: "500", letterSpacing: "-0.03em" }}>
                  {"Build What's Next "}
                  <span style={{ color: "#FA7B20" }}>With Us.</span>
                </h3>
                <p style={{ position: "relative", margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#C3CAD5" }}>
                  {"Tell us about yourself and the role you're interested in. We'll get back to you."}
                </p>
              </div>
              <div style={{ padding: "24px 28px 28px" }}>
                {v.crNotSent ? (
                  <>
                    <form onSubmit={v.crSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "12px" }}>
                        <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                          <span style={{ fontSize: "13px", fontWeight: "500", color: "#202733" }}>Full name *</span>
                          <input className="dc-focus-6go203" type="text" value={v.crName ?? ""} onChange={v.crSetName} placeholder="Jane Smith" autoComplete="name" style={{ height: "46px", padding: "0 14px", borderRadius: "12px", border: `1px solid ${v.crNameBd ?? ""}`, background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none" }} />
                        </label>
                        <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                          <span style={{ fontSize: "13px", fontWeight: "500", color: "#202733" }}>Email *</span>
                          <input className="dc-focus-6go203" type="email" value={v.crEmail ?? ""} onChange={v.crSetEmail} placeholder="you@email.com" autoComplete="email" style={{ height: "46px", padding: "0 14px", borderRadius: "12px", border: `1px solid ${v.crEmailBd ?? ""}`, background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none" }} />
                        </label>
                        <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                          <span style={{ fontSize: "13px", fontWeight: "500", color: "#202733" }}>Phone / WhatsApp</span>
                          <input className="dc-focus-6go203" type="tel" value={v.crPhone ?? ""} onChange={v.crSetPhone} placeholder="+91 555 000 0000" autoComplete="tel" style={{ height: "46px", padding: "0 14px", borderRadius: "12px", border: `1px solid ${v.crLine ?? ""}`, background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none" }} />
                        </label>
                        <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                          <span style={{ fontSize: "13px", fontWeight: "500", color: "#202733" }}>Role of interest *</span>
                          <span style={{ position: "relative", display: "block" }}>
                            <select value={v.crRole ?? ""} onChange={v.crSetRole} style={{ width: "100%", height: "46px", padding: "0 38px 0 14px", borderRadius: "12px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none", appearance: "none", WebkitAppearance: "none", cursor: "pointer" }}>
                              <option value="">Select a role</option>
                              <option>Frontend Developer</option>
                              <option>Backend Developer</option>
                              <option>Full-Stack Developer</option>
                              <option>Mobile Developer</option>
                              <option>AI / ML Engineer</option>
                              <option>DevOps / Cloud Engineer</option>
                              <option>QA Engineer</option>
                              <option>UI / UX Designer</option>
                              <option>Project Manager</option>
                              <option>Other</option>
                            </select>
                            <svg viewBox="0 0 24 24" style={{ position: "absolute", right: "13px", top: "50%", width: "16px", height: "16px", marginTop: "-8px", fill: "none", stroke: "#202733", strokeWidth: "2", strokeLinecap: "round", pointerEvents: "none" }}>
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </span>
                        </label>
                        <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                          <span style={{ fontSize: "13px", fontWeight: "500", color: "#202733" }}>Experience</span>
                          <span style={{ position: "relative", display: "block" }}>
                            <select value={v.crExp ?? ""} onChange={v.crSetExp} style={{ width: "100%", height: "46px", padding: "0 38px 0 14px", borderRadius: "12px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none", appearance: "none", WebkitAppearance: "none", cursor: "pointer" }}>
                              <option value="">Select</option>
                              <option>0–2 years</option>
                              <option>2–5 years</option>
                              <option>5–8 years</option>
                              <option>8+ years</option>
                            </select>
                            <svg viewBox="0 0 24 24" style={{ position: "absolute", right: "13px", top: "50%", width: "16px", height: "16px", marginTop: "-8px", fill: "none", stroke: "#202733", strokeWidth: "2", strokeLinecap: "round", pointerEvents: "none" }}>
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </span>
                        </label>
                        <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                          <span style={{ fontSize: "13px", fontWeight: "500", color: "#202733" }}>LinkedIn / portfolio</span>
                          <input className="dc-focus-6go203" type="url" value={v.crLink ?? ""} onChange={v.crSetLink} placeholder="https://" style={{ height: "46px", padding: "0 14px", borderRadius: "12px", border: `1px solid ${v.crLine ?? ""}`, background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none" }} />
                        </label>
                      </div>
                      <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "500" }}>Enquiry type</span>
                        <span style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                          {(v.crTypes || []).map((t: any, $index: number) => (
                            <Fragment key={$index}>
                              <button type="button" onClick={t?.pick} aria-pressed={t?.sel} style={{ whiteSpace: "nowrap", height: "36px", padding: "0 14px", borderRadius: "999px", border: `1px solid ${t?.bd ?? ""}`, background: t?.bg, color: t?.fg, fontSize: "13px", cursor: "pointer", transition: "all 200ms" }}>
                                {t?.label}
                              </button>
                            </Fragment>
                          ))}
                        </span>
                      </label>
                      <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "500" }}>Message</span>
                        <textarea className="dc-focus-6go203" value={v.crMsg ?? ""} onChange={v.crSetMsg} rows={3} placeholder="Anything you'd like us to know" style={{ padding: "12px 14px", borderRadius: "12px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", lineHeight: "1.5", color: "#202733", outline: "none", resize: "vertical", minHeight: "90px" }} />
                      </label>
                      <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "12px 14px", borderRadius: "12px", border: "1px dashed #D0D5DD", cursor: "pointer", fontSize: "14px", color: "#475467" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px", fill: "none", stroke: "#E4490A", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                          </svg>
                          {v.crFileLabel}
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "600", color: "#202733" }}>Browse</span>
                        <input type="file" accept=".pdf,.doc,.docx" onChange={v.crSetFile} style={{ display: "none" }} />
                      </label>
                      <button className="dc-hover-16zqy62" type="submit" style={{ height: "52px", borderRadius: "999px", background: "#FF6B00", color: "#202733", border: "none", fontSize: "15px", fontWeight: "500", cursor: "pointer", transition: "transform 250ms" }}>
                        Send application →
                      </button>
                      {v.crError ? (
                        <>
                          <span style={{ fontSize: "13px", color: "#C4320A", textAlign: "center" }}>
                            Please fill in the required fields marked *.
                          </span>
                        </>
                      ) : null}
                    </form>
                  </>
                ) : null}
                {v.crSentV ? (
                  <>
                    <div style={{ minHeight: "260px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "14px", textAlign: "center" }}>
                      <span style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg viewBox="0 0 24 24" style={{ width: "26px", height: "26px", fill: "none", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      <span style={{ fontSize: "20px", fontWeight: "600" }}>{"Thanks! We've got your details."}</span>
                      <span style={{ fontSize: "15px", color: "#667085" }}>{"Our team will be in touch if there's a match."}</span>
                      <button type="button" onClick={v.careersClose} style={{ marginTop: "6px", height: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #202733", background: "#fff", color: "#202733", fontSize: "14px", fontWeight: "500", cursor: "pointer" }}>
                        Close
                      </button>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
