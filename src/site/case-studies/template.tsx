// Generated from "Case Studies.dc.html" by scripts/convert-dc.mjs, then maintained by hand.
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
            <a href="/case-studies" aria-current="page" onMouseEnter={v.menuClose} style={{ position: "relative", display: "flex", alignItems: "center", height: "72px", textDecoration: "none", color: "#FF6B00" }}>
              Case Studies
              <span style={{ position: "absolute", left: "0", right: "0", bottom: "-1px", height: "2px", background: "#FF6B00" }} />
            </a>
            <a className="dc-hover-1einh9h" href="/about" onMouseEnter={v.menuClose} style={{ position: "relative", display: "flex", alignItems: "center", height: "72px", textDecoration: "none", color: "#202733", transition: "color 250ms" }}>
              About us
            </a>
          </nav>
          <a className="dc-hover-ygs45k site-header-cta" href="#talk" onClick={v.talkOpen} style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "44px", padding: "0 20px", borderRadius: "10px", background: "#FF6B00", color: "#202733", fontWeight: "500", fontSize: "15px", textDecoration: "none", transition: "transform 250ms,box-shadow 250ms" }}>
            {"Let's Talk"}
          </a>
          <MobileMenu active="/case-studies" onTalk={v.talkOpen} />
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
      <main style={{ background: "#fff", color: "#202733" }}>
        <section data-screen-label="Case studies hero" style={{ position: "relative", minHeight: "min(78vh,600px)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "140px 0 88px", background: "#0E1622", color: "#fff", textAlign: "center" }}>
          <canvas data-wave="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }} />
          <div style={{ position: "absolute", inset: "0", background: "radial-gradient(ellipse 60% 55% at 50% 45%,rgba(14,22,34,.85),rgba(14,22,34,.2) 70%,rgba(14,22,34,0))" }} />
          <div style={{ position: "relative", maxWidth: "880px", padding: "0 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "22px" }}>
            <h1 style={{ margin: "0", fontWeight: "500", fontSize: "clamp(38px,5.2vw,68px)", lineHeight: "1.02", letterSpacing: "-0.045em" }}>
              {" "}
              <span style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}>
                <span data-rise="" data-d="180" style={{ display: "block" }}>
                  {"Real Builds. "}
                  <span style={{ color: "#FA7B20" }}>Real Results.</span>
                </span>
              </span>
              {" "}
            </h1>
            <p data-reveal="" data-d="260" style={{ margin: "0", maxWidth: "600px", fontSize: "18px", lineHeight: "1.6", color: "#C3CAD5" }}>
              Real problems. The solutions we built. What changed after. See what could work for you.
            </p>
            <button className="dc-hover-ebbhtq" data-reveal="" data-d="340" type="button" onClick={v.talkOpen} style={{ whiteSpace: "nowrap", height: "52px", padding: "0 26px", borderRadius: "999px", background: "#FF6B00", color: "#202733", border: "none", fontSize: "15px", fontWeight: "500", cursor: "pointer", transition: "transform 250ms,box-shadow 250ms" }}>
              {"Let's Talk"}
            </button>
          </div>
        </section>
        <section data-screen-label="Scoreboard" style={{ padding: "96px 0" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                IMPACT AT A GLANCE
              </div>
              <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em", textWrap: "balance" }}>
                {"The "}
                <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  Scoreboard.
                </span>
              </h2>
            </div>
            <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", borderTop: "1px solid #E7EAF0", borderBottom: "1px solid #E7EAF0" }}>
              <div style={{ padding: "32px 24px", borderLeft: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontSize: "clamp(40px,4.6vw,60px)", fontWeight: "500", letterSpacing: "-0.05em", lineHeight: "1" }}>
                  <span data-count="85">85</span>
                  %
                </span>
                <span style={{ fontSize: "15px", color: "#667085" }}>faster HR response times</span>
              </div>
              <div style={{ padding: "32px 24px", borderLeft: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontSize: "clamp(40px,4.6vw,60px)", fontWeight: "500", letterSpacing: "-0.05em", lineHeight: "1" }}>
                  <span data-count="200">200</span>
                  {" days"}
                </span>
                <span style={{ fontSize: "15px", color: "#667085" }}>faster breach detection</span>
              </div>
              <div style={{ padding: "32px 24px", borderLeft: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontSize: "clamp(40px,4.6vw,60px)", fontWeight: "500", letterSpacing: "-0.05em", lineHeight: "1" }}>
                  30–50%
                </span>
                <span style={{ fontSize: "15px", color: "#667085" }}>lower support costs in travel</span>
              </div>
              <div style={{ padding: "32px 24px", borderLeft: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontSize: "clamp(40px,4.6vw,60px)", fontWeight: "500", letterSpacing: "-0.05em", lineHeight: "1" }}>
                  <span data-count="11">11</span>
                </span>
                <span style={{ fontSize: "15px", color: "#667085" }}>case studies across 10 industries</span>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Featured story" style={{ padding: "0 0 96px" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <button className="dc-hover-oeg8f0" data-reveal="" type="button" onClick={v.openFeatured} style={{ position: "relative", overflow: "hidden", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "32px", alignItems: "center", padding: "clamp(28px,4vw,52px)", borderRadius: "32px", border: "none", background: "#101A28", color: "#fff", textAlign: "left", cursor: "pointer", transition: "transform 500ms cubic-bezier(0.22,1,0.36,1),box-shadow 500ms" }}>
              <div style={{ position: "absolute", width: "520px", height: "520px", right: "-120px", top: "-200px", borderRadius: "50%", background: "radial-gradient(circle,rgba(250,123,32,.32),rgba(250,123,32,0) 65%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "18px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#FFB52E" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                  STORY OF THE MONTH
                </span>
                <span style={{ fontSize: "clamp(26px,3.2vw,40px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.1" }}>
                  AI-Powered HR Advisor: HR Answers in Seconds, Not Days
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#C3CAD5", maxWidth: "520px" }}>
                  {"An HR platform's experts were stuck answering the same questions all day. Our AI advisor took the repetitive work off their plate, so they could focus on the cases that matter."}
                </span>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ whiteSpace: "nowrap", padding: "8px 14px", borderRadius: "999px", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", fontSize: "14px" }}>
                    85% faster response times
                  </span>
                  <span style={{ whiteSpace: "nowrap", padding: "8px 14px", borderRadius: "999px", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", fontSize: "14px" }}>
                    75% higher HR efficiency
                  </span>
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "500", color: "#FFB52E" }}>
                  Read the story ↓
                </span>
              </div>
              <div data-fphone="" style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                <div style={{ position: "relative", width: "230px", height: "470px", padding: "8px", borderRadius: "40px", background: "linear-gradient(145deg,#2B3A52,#101A28)", boxShadow: "0 30px 60px rgba(0,0,0,.35)" }}>
                  <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "32px", overflow: "hidden", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "10px", padding: "44px 12px 16px" }}>
                    <span style={{ position: "absolute", left: "50%", top: "9px", width: "70px", height: "20px", marginLeft: "-35px", borderRadius: "999px", background: "#0B111B" }} />
                    <span style={{ fontSize: "13px", fontWeight: "600" }}>HR Advisor</span>
                    <span data-fb="" style={{ alignSelf: "flex-end", maxWidth: "85%", padding: "9px 11px", borderRadius: "12px 12px 3px 12px", background: "#101A28", color: "#fff", fontSize: "11px" }}>
                      How many leave days do I have left?
                    </span>
                    <span data-fb="" style={{ alignSelf: "flex-start", maxWidth: "88%", padding: "9px 11px", borderRadius: "12px 12px 12px 3px", background: "#fff", border: "1px solid #EEF0F4", fontSize: "11px", lineHeight: "1.4" }}>
                      You have 12 days of annual leave left this year.
                      <span style={{ display: "block", marginTop: "5px", font: "500 8px/1 'Geist Mono',monospace", color: "#E4490A" }}>
                        SOURCE · LEAVE POLICY
                      </span>
                    </span>
                    <span data-fb="" style={{ alignSelf: "flex-end", maxWidth: "85%", padding: "9px 11px", borderRadius: "12px 12px 3px 12px", background: "#101A28", color: "#fff", fontSize: "11px" }}>
                      Can I carry any over?
                    </span>
                    <span data-fb="" style={{ alignSelf: "flex-start", display: "flex", gap: "4px", padding: "10px 12px", borderRadius: "12px", background: "#fff", border: "1px solid #EEF0F4" }}>
                      <span data-dot="" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#98A2B3" }} />
                      <span data-dot="" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#98A2B3" }} />
                      <span data-dot="" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#98A2B3" }} />
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </section>
        <section id="stories" data-screen-label="Story list" style={{ scrollMarginTop: "72px", padding: "0 0 96px" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "28px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                CASE STUDIES
              </div>
              <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em" }}>
                {"Stories We're "}
                <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  Proud Of.
                </span>
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
              <div role="tablist" style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {(v.chips || []).map((c: any, $index: number) => (
                  <Fragment key={$index}>
                    <button type="button" role="tab" aria-selected={c?.sel} onClick={c?.pick} style={{ whiteSpace: "nowrap", height: "40px", padding: "0 16px", borderRadius: "999px", border: `1px solid ${c?.bd ?? ""}`, background: c?.bg, color: c?.fg, fontSize: "14px", fontWeight: "500", cursor: "pointer", transition: "all 250ms" }}>
                      {c?.label}
                    </button>
                  </Fragment>
                ))}
              </div>
              <span style={{ font: "500 12px/1 'Geist Mono',monospace", color: "#98A2B3" }}>{v.countLabel}</span>
            </div>
            <div style={{ borderTop: "1px solid #E7EAF0" }}>
              <div id="story-1" style={{ display: v.vis?.i0, scrollMarginTop: "90px", borderBottom: "1px solid #E7EAF0" }}>
                {" "}
                <button className="dc-hover-1xxsvk6" type="button" onClick={v.tog?.i0} aria-expanded={v.exp?.i0} style={{ width: "100%", display: "grid", gridTemplateColumns: "64px 1fr auto", gap: "20px", alignItems: "center", padding: "24px 8px", border: "none", background: "none", textAlign: "left", cursor: "pointer", color: "#202733", transition: "padding 400ms cubic-bezier(0.22,1,0.36,1),background 300ms" }}>
                  <span style={{ width: "56px", height: "56px", borderRadius: "18px", border: "1.5px solid #D0D5DD", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "24px", height: "24px", stroke: "#202733", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM9 9h.01M12 9h.01M15 9h.01" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#E4490A" }}>
                      HR TECHNOLOGY
                    </span>
                    <span style={{ fontSize: "clamp(19px,2.1vw,25px)", fontWeight: "500", letterSpacing: "-0.025em" }}>
                      AI-Powered HR Advisor
                    </span>
                    <span style={{ fontSize: "15px", color: "#667085" }}>85% faster response times · 75% higher HR efficiency</span>
                  </span>
                  <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: v.tb?.i0, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 300ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", stroke: v.tf?.i0, strokeWidth: "2.2", transform: `rotate(${v.tr?.i0 ?? ""})`, transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {" "}
                <div style={{ display: "grid", gridTemplateRows: v.gr?.i0, transition: "grid-template-rows 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <div style={{ overflow: "hidden" }}>
                    <div data-dd="0" style={{ margin: "0 0 28px", padding: "clamp(20px,3vw,36px)", borderRadius: "26px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "22px" }}>
                      <div data-ddp="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "24px 40px", alignItems: "center" }}>
                        <div style={{ position: "relative", height: "240px", borderRadius: "22px", overflow: "hidden", background: "#E7EAF0" }}>
                          <img data-lazy="/images/stock/photo-1521737604893-d14cc237f11d.jpg" alt="Team collaborating around a laptop" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                          <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                            SUCCESS STORIES
                          </span>
                          <h3 style={{ margin: "0", fontSize: "clamp(24px,2.8vw,34px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.1" }}>
                            AI-Powered HR Advisor: HR Answers in Seconds, Not Days
                          </h3>
                          <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#475467" }}>
                            {"An HR SaaS company's advisory team was drowning in repetitive employee questions about policies, leave and compliance. Our AI-powered HR advisor answers routine queries instantly, sends complex cases to the right expert and automates the follow-up. Response times dropped by 85%."}
                          </p>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "10px" }}>
                        <div style={{ padding: "20px", borderRadius: "20px", background: "#101A28", color: "#fff", border: "1px solid #101A28", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                            85%
                          </span>
                          <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#C3CAD5" }}>faster response times</span>
                        </div>
                        <div style={{ padding: "20px", borderRadius: "20px", background: "#fff", color: "#202733", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                            75%
                          </span>
                          <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>higher HR team efficiency</span>
                        </div>
                        <div style={{ padding: "20px", borderRadius: "20px", background: "#fff", color: "#202733", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                            24/7
                          </span>
                          <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>answers for employees, any time</span>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          ABOUT THE CLIENT
                        </span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          The client is an HR technology provider offering HR advisory and compliance support to businesses and their employees. Their team helps companies stay on the right side of employment rules while keeping staff happy and informed.
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          THE CHALLENGE
                        </span>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "10px" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4px 12px", padding: "16px", borderRadius: "16px", background: "#fff", border: "1px solid #EEF0F4" }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <span style={{ fontSize: "15px", fontWeight: "600" }}>Query overload</span>
                              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                                Advisors answered the same policy and compliance questions dozens of times a day.
                              </span>
                            </span>
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4px 12px", padding: "16px", borderRadius: "16px", background: "#fff", border: "1px solid #EEF0F4" }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <span style={{ fontSize: "15px", fontWeight: "600" }}>Slow responses</span>
                              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                                Employees waited hours, sometimes days, for simple answers.
                              </span>
                            </span>
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4px 12px", padding: "16px", borderRadius: "16px", background: "#fff", border: "1px solid #EEF0F4" }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <span style={{ fontSize: "15px", fontWeight: "600" }}>Expert time wasted</span>
                              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                                Skilled advisors spent most of their day on routine replies instead of complex cases.
                              </span>
                            </span>
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4px 12px", padding: "16px", borderRadius: "16px", background: "#fff", border: "1px solid #EEF0F4" }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <span style={{ fontSize: "15px", fontWeight: "600" }}>Inconsistent answers</span>
                              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                                Different advisors sometimes gave different answers to the same question.
                              </span>
                            </span>
                          </div>
                        </div>
                        <p style={{ margin: "0", fontSize: "15px", fontWeight: "500" }}>
                          {"The result? Frustrated employees, stretched advisors and a support model that couldn't scale."}
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          THE SOLUTION
                        </span>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "10px" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4px 12px", padding: "16px", borderRadius: "16px", background: "#fff", border: "1px solid #EEF0F4" }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <span style={{ fontSize: "15px", fontWeight: "600" }}>AI HR advisor</span>
                              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                                {"A large language model trained on the client's policies and employment guidance, answering in plain, friendly language."}
                              </span>
                            </span>
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4px 12px", padding: "16px", borderRadius: "16px", background: "#fff", border: "1px solid #EEF0F4" }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <span style={{ fontSize: "15px", fontWeight: "600" }}>Smart routing</span>
                              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                                Complex or sensitive queries go straight to the right human expert, with context attached.
                              </span>
                            </span>
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4px 12px", padding: "16px", borderRadius: "16px", background: "#fff", border: "1px solid #EEF0F4" }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <span style={{ fontSize: "15px", fontWeight: "600" }}>Workflow automation</span>
                              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                                Follow-ups, reminders and case updates happen automatically.
                              </span>
                            </span>
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4px 12px", padding: "16px", borderRadius: "16px", background: "#fff", border: "1px solid #EEF0F4" }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <span style={{ fontSize: "15px", fontWeight: "600" }}>Source-backed answers</span>
                              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                                Every reply links to the policy it came from, so employees and advisors can trust it.
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          TECHNOLOGY STACK
                        </span>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>Large language models (LLMs)</strong>
                              <span style={{ color: "#667085" }}>: for natural, accurate answers</span>
                            </span>
                          </span>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>Retrieval with a vector database</strong>
                              <span style={{ color: "#667085" }}>{": so answers come from the client's own documents"}</span>
                            </span>
                          </span>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>Workflow automation</strong>
                              <span style={{ color: "#667085" }}>: for routing, follow-ups and case tracking</span>
                            </span>
                          </span>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>Helpdesk and HR system integration</strong>
                              <span style={{ color: "#667085" }}>: so it fits the tools the team already uses</span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>RESULTS</span>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>85% faster response times</strong>
                              <span style={{ color: "#667085" }}>: employees get answers in seconds, not days</span>
                            </span>
                          </span>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>75% higher HR efficiency</strong>
                              <span style={{ color: "#667085" }}>: advisors handle more cases with the same team</span>
                            </span>
                          </span>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>Consistent, trusted answers</strong>
                              <span style={{ color: "#667085" }}>: everyone gets the same accurate information</span>
                            </span>
                          </span>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>Happier experts</strong>
                              <span style={{ color: "#667085" }}>: advisors spend their time on the work that needs them</span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="story-2" style={{ display: v.vis?.i1, scrollMarginTop: "90px", borderBottom: "1px solid #E7EAF0" }}>
                {" "}
                <button className="dc-hover-1xxsvk6" type="button" onClick={v.tog?.i1} aria-expanded={v.exp?.i1} style={{ width: "100%", display: "grid", gridTemplateColumns: "64px 1fr auto", gap: "20px", alignItems: "center", padding: "24px 8px", border: "none", background: "none", textAlign: "left", cursor: "pointer", color: "#202733", transition: "padding 400ms cubic-bezier(0.22,1,0.36,1),background 300ms" }}>
                  <span style={{ width: "56px", height: "56px", borderRadius: "18px", border: "1.5px solid #D0D5DD", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "24px", height: "24px", stroke: "#202733", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#E4490A" }}>
                      CYBERSECURITY
                    </span>
                    <span style={{ fontSize: "clamp(19px,2.1vw,25px)", fontWeight: "500", letterSpacing: "-0.025em" }}>
                      AI-Powered Threat Protection
                    </span>
                    <span style={{ fontSize: "15px", color: "#667085" }}>
                      200 days faster breach detection · 20% productivity improvement
                    </span>
                  </span>
                  <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: v.tb?.i1, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 300ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", stroke: v.tf?.i1, strokeWidth: "2.2", transform: `rotate(${v.tr?.i1 ?? ""})`, transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {" "}
                <div style={{ display: "grid", gridTemplateRows: v.gr?.i1, transition: "grid-template-rows 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <div style={{ overflow: "hidden" }}>
                    <div data-dd="1" style={{ margin: "0 0 28px", padding: "clamp(20px,3vw,36px)", borderRadius: "26px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "22px" }}>
                      <div data-ddp="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "24px 40px", alignItems: "center" }}>
                        <div style={{ position: "relative", height: "240px", borderRadius: "22px", overflow: "hidden", background: "#E7EAF0" }}>
                          <img data-lazy="/images/stock/photo-1550751827-4bd374c3f58b.jpg" alt="Security code on a dark screen" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                          <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                            CYBERSECURITY
                          </span>
                          <h3 style={{ margin: "0", fontSize: "clamp(24px,2.8vw,34px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.1" }}>
                            Strengthening Cybersecurity with AI-Powered Protection
                          </h3>
                          <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#475467" }}>
                            {"Hackers don't sleep, and neither does AI. AI helps businesses strengthen their cybersecurity with faster threat detection, automated responses and round-the-clock monitoring. For small and mid-sized businesses, intelligent security delivers stronger protection without an enterprise-sized security team."}
                          </p>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "10px" }}>
                        <div style={{ padding: "20px", borderRadius: "20px", background: "#101A28", color: "#fff", border: "1px solid #101A28", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                            200 days
                          </span>
                          <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#C3CAD5" }}>
                            faster breach detection, saving around £10,000 per incident
                          </span>
                        </div>
                        <div style={{ padding: "20px", borderRadius: "20px", background: "#fff", color: "#202733", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                            426%
                          </span>
                          <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                            ROI, with £2.1 million saved over 3 years through AI-powered cybersecurity
                          </span>
                        </div>
                        <div style={{ padding: "20px", borderRadius: "20px", background: "#fff", color: "#202733", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                            20%
                          </span>
                          <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                            more productive security teams through AI automation
                          </span>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          AI USE CASES IN CYBERSECURITY
                        </span>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>{"Threat detection & prevention"}</strong>
                              <span style={{ color: "#667085" }}>
                                : AI watches network activity and user behaviour around the clock, spotting suspicious patterns early so your team can act fast.
                              </span>
                            </span>
                          </span>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>{"Malware & phishing detection"}</strong>
                              <span style={{ color: "#667085" }}>
                                : Catch dodgy files, messages and links before they turn into bigger incidents.
                              </span>
                            </span>
                          </span>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>Automated incident response</strong>
                              <span style={{ color: "#667085" }}>
                                : Automate the repetitive steps and shrink the gap between spotting a threat and fixing it.
                              </span>
                            </span>
                          </span>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>Security operations automation</strong>
                              <span style={{ color: "#667085" }}>
                                {": Hand routine monitoring and alert handling to AI, so your team isn't buried in alerts."}
                              </span>
                            </span>
                          </span>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>Endpoint protection</strong>
                              <span style={{ color: "#667085" }}>: Keep an eye on every laptop, phone and device for unusual activity.</span>
                            </span>
                          </span>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>{"Anomaly & insider threat monitoring"}</strong>
                              <span style={{ color: "#667085" }}>: Flag odd behaviour that could mean a hacked account or an inside job.</span>
                            </span>
                          </span>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>Cyber threat intelligence</strong>
                              <span style={{ color: "#667085" }}>: Turn threat data into clear visibility on emerging risks.</span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div data-ddp="" style={{ position: "relative", overflow: "hidden", padding: "28px", borderRadius: "24px", background: "#101A28", color: "#fff", display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ position: "absolute", width: "320px", height: "320px", right: "-100px", top: "-160px", borderRadius: "50%", background: "radial-gradient(circle,rgba(250,123,32,.35),rgba(250,123,32,0) 65%)" }} />
                        <h4 style={{ position: "relative", margin: "0", fontSize: "clamp(22px,2.4vw,28px)", fontWeight: "500", letterSpacing: "-0.03em" }}>
                          {"Ready to Strengthen Your "}
                          <span style={{ color: "#FA7B20" }}>Security with AI?</span>
                        </h4>
                        <p style={{ position: "relative", margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#C3CAD5" }}>
                          Protect your business with intelligent cybersecurity that detects threats faster, automates the response and makes your security team more efficient.
                        </p>
                        <button className="dc-hover-16zqy62" type="button" onClick={v.talkOpen} style={{ position: "relative", alignSelf: "flex-start", whiteSpace: "nowrap", height: "48px", padding: "0 22px", borderRadius: "999px", background: "#FF6B00", color: "#202733", border: "none", fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>
                          {"Let's Talk →"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="story-3" style={{ display: v.vis?.i2, scrollMarginTop: "90px", borderBottom: "1px solid #E7EAF0" }}>
                {" "}
                <button className="dc-hover-1xxsvk6" type="button" onClick={v.tog?.i2} aria-expanded={v.exp?.i2} style={{ width: "100%", display: "grid", gridTemplateColumns: "64px 1fr auto", gap: "20px", alignItems: "center", padding: "24px 8px", border: "none", background: "none", textAlign: "left", cursor: "pointer", color: "#202733", transition: "padding 400ms cubic-bezier(0.22,1,0.36,1),background 300ms" }}>
                  <span style={{ width: "56px", height: "56px", borderRadius: "18px", border: "1.5px solid #D0D5DD", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "24px", height: "24px", stroke: "#202733", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#E4490A" }}>
                      {"TRAVEL & TOURISM"}
                    </span>
                    <span style={{ fontSize: "clamp(19px,2.1vw,25px)", fontWeight: "500", letterSpacing: "-0.025em" }}>
                      AI-Powered Travel Experiences
                    </span>
                    <span style={{ fontSize: "15px", color: "#667085" }}>Personalisation · Virtual assistants · Dynamic pricing</span>
                  </span>
                  <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: v.tb?.i2, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 300ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", stroke: v.tf?.i2, strokeWidth: "2.2", transform: `rotate(${v.tr?.i2 ?? ""})`, transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {" "}
                <div style={{ display: "grid", gridTemplateRows: v.gr?.i2, transition: "grid-template-rows 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <div style={{ overflow: "hidden" }}>
                    <div data-dd="2" style={{ margin: "0 0 28px", padding: "clamp(20px,3vw,36px)", borderRadius: "26px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "22px" }}>
                      <div data-ddp="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "24px 40px", alignItems: "center" }}>
                        <div style={{ position: "relative", height: "240px", borderRadius: "22px", overflow: "hidden", background: "#E7EAF0" }}>
                          <img data-lazy="/images/stock/photo-1488646953014-85cb44e25828.jpg" alt="Traveller planning a trip with a map" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                          <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                            {"TRAVEL & TOURISM"}
                          </span>
                          <h3 style={{ margin: "0", fontSize: "clamp(24px,2.8vw,34px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.1" }}>
                            Reimagining Travel Experiences with AI
                          </h3>
                          <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#475467" }}>
                            {"Travellers want trips that feel made for them, and AI makes that possible at scale. It's changing travel and tourism by personalising customer experiences, streamlining operations and opening new ways to grow revenue. For growing travel businesses, AI unlocks capabilities that used to be reserved for the big players."}
                          </p>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "10px" }}>
                        <div style={{ padding: "20px", borderRadius: "20px", background: "#101A28", color: "#fff", border: "1px solid #101A28", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                            £2.84 billion
                          </span>
                          <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#C3CAD5" }}>
                            projected generative AI travel market by 2032, growing at an 18.94% CAGR
                          </span>
                        </div>
                        <div style={{ padding: "20px", borderRadius: "20px", background: "#fff", color: "#202733", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                            10%
                          </span>
                          <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                            potential revenue increase for hotels using AI-powered pricing and revenue management
                          </span>
                        </div>
                        <div style={{ padding: "20px", borderRadius: "20px", background: "#fff", color: "#202733", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                            30–50%
                          </span>
                          <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                            potential reduction in customer service costs through AI chatbots
                          </span>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          AI USE CASES IN TRAVEL
                        </span>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>Personalised travel recommendations</strong>
                              <span style={{ color: "#667085" }}>
                                : AI learns what each traveller loves, from past trips to interests, and suggests destinations, itineraries and activities that fit.
                              </span>
                            </span>
                          </span>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>24/7 AI virtual assistants</strong>
                              <span style={{ color: "#667085" }}>
                                : Instant help with questions, bookings, itineraries and support, even at 3 a.m.
                              </span>
                            </span>
                          </span>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>Dynamic pricing</strong>
                              <span style={{ color: "#667085" }}>
                                : Prices that respond to demand, customer behaviour and market conditions in real time.
                              </span>
                            </span>
                          </span>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>Automated expense management</strong>
                              <span style={{ color: "#667085" }}>: Let AI handle the repetitive finance and admin work behind every trip.</span>
                            </span>
                          </span>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>Predictive fleet maintenance</strong>
                              <span style={{ color: "#667085" }}>: Spot maintenance needs from equipment data before they become breakdowns.</span>
                            </span>
                          </span>
                          <span style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: "10px", fontSize: "15px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "3px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>
                              <strong style={{ fontWeight: "600" }}>Real-time itinerary optimisation</strong>
                              <span style={{ color: "#667085" }}>: Adjust routes, schedules and plans as conditions change.</span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div data-ddp="" style={{ position: "relative", overflow: "hidden", padding: "28px", borderRadius: "24px", background: "#101A28", color: "#fff", display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ position: "absolute", width: "320px", height: "320px", right: "-100px", top: "-160px", borderRadius: "50%", background: "radial-gradient(circle,rgba(250,123,32,.35),rgba(250,123,32,0) 65%)" }} />
                        <h4 style={{ position: "relative", margin: "0", fontSize: "clamp(22px,2.4vw,28px)", fontWeight: "500", letterSpacing: "-0.03em" }}>
                          {"Ready to Accelerate Your "}
                          <span style={{ color: "#FA7B20" }}>Travel Business with AI?</span>
                        </h4>
                        <p style={{ position: "relative", margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#C3CAD5" }}>
                          From personalised experiences to smarter operations, AI helps travel businesses work more efficiently, cut costs and create customer journeys that feel personal.
                        </p>
                        <button className="dc-hover-16zqy62" type="button" onClick={v.talkOpen} style={{ position: "relative", alignSelf: "flex-start", whiteSpace: "nowrap", height: "48px", padding: "0 22px", borderRadius: "999px", background: "#FF6B00", color: "#202733", border: "none", fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>
                          {"Let's Talk →"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="story-4" style={{ display: v.vis?.i3, scrollMarginTop: "90px", borderBottom: "1px solid #E7EAF0" }}>
                {" "}
                <button className="dc-hover-1xxsvk6" type="button" onClick={v.tog?.i3} aria-expanded={v.exp?.i3} style={{ width: "100%", display: "grid", gridTemplateColumns: "64px 1fr auto", gap: "20px", alignItems: "center", padding: "24px 8px", border: "none", background: "none", textAlign: "left", cursor: "pointer", color: "#202733", transition: "padding 400ms cubic-bezier(0.22,1,0.36,1),background 300ms" }}>
                  <span style={{ width: "56px", height: "56px", borderRadius: "18px", border: "1.5px solid #D0D5DD", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "24px", height: "24px", stroke: "#202733", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M3 3v18h18M11 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16 17l-2.8-2.8" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#E4490A" }}>FINTECH</span>
                    <span style={{ fontSize: "clamp(19px,2.1vw,25px)", fontWeight: "500", letterSpacing: "-0.025em" }}>
                      AI Deal Analysis That Closes More Sales
                    </span>
                    <span style={{ fontSize: "15px", color: "#667085" }}>
                      60% faster decisions · 20% higher win rates · 40-min analysis
                    </span>
                  </span>
                  <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: v.tb?.i3, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 300ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", stroke: v.tf?.i3, strokeWidth: "2.2", transform: `rotate(${v.tr?.i3 ?? ""})`, transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {" "}
                <div style={{ display: "grid", gridTemplateRows: v.gr?.i3, transition: "grid-template-rows 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <div style={{ overflow: "hidden" }}>
                    <div data-dd="3" style={{ margin: "0 0 28px", padding: "clamp(20px,3vw,36px)", borderRadius: "26px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "22px" }}>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "820px" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>FINTECH</span>
                        <h3 style={{ margin: "0", fontSize: "clamp(24px,2.8vw,34px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.1" }}>
                          AI Deal Analysis That Closes More Sales
                        </h3>
                        <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#475467" }}>
                          A subscription billing and revenue platform was losing hours on every lost deal, manually combing through call transcripts. Our AI deal analyser cut that to 40 minutes and turned every call into clear, usable insight.
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "10px" }}>
                        <div style={{ padding: "20px", borderRadius: "20px", background: "#101A28", color: "#fff", border: "1px solid #101A28", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                            60%
                          </span>
                          <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#C3CAD5" }}>faster decision-making</span>
                        </div>
                        <div style={{ padding: "20px", borderRadius: "20px", background: "#fff", color: "#202733", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                            20%
                          </span>
                          <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>increase in deal win rates</span>
                        </div>
                        <div style={{ padding: "20px", borderRadius: "20px", background: "#fff", color: "#202733", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                            40 mins
                          </span>
                          <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>of analysis time, down from 6–8 hours</span>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          THE CHALLENGE
                        </span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          Reviewing lost deals meant watching and reading hours of call transcripts, averaging 2–3 hours per deal. Insights were hard to pull out, and answering simple business questions took forever.
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          THE SOLUTION
                        </span>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "10px" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4px 12px", padding: "16px", borderRadius: "16px", background: "#fff", border: "1px solid #EEF0F4" }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <span style={{ fontSize: "15px", fontWeight: "600" }}>Smart summaries</span>
                              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                                LLMs summarise every call transcript automatically.
                              </span>
                            </span>
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4px 12px", padding: "16px", borderRadius: "16px", background: "#fff", border: "1px solid #EEF0F4" }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <span style={{ fontSize: "15px", fontWeight: "600" }}>One view per deal</span>
                              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                                Summaries roll up into a single picture of why a deal was won or lost.
                              </span>
                            </span>
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4px 12px", padding: "16px", borderRadius: "16px", background: "#fff", border: "1px solid #EEF0F4" }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <span style={{ fontSize: "15px", fontWeight: "600" }}>Plug-and-play integration</span>
                              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                                {"A data layer connects to the client's existing tools and data."}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>TECH</span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            LLMs
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            NLP
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            Vector databases
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            Data integration layer
                          </span>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>RESULTS</span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          60% faster decisions, 20% more deals won, analysis time cut from hours to 40 minutes, and instant answers to specific sales questions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="story-5" style={{ display: v.vis?.i4, scrollMarginTop: "90px", borderBottom: "1px solid #E7EAF0" }}>
                {" "}
                <button className="dc-hover-1xxsvk6" type="button" onClick={v.tog?.i4} aria-expanded={v.exp?.i4} style={{ width: "100%", display: "grid", gridTemplateColumns: "64px 1fr auto", gap: "20px", alignItems: "center", padding: "24px 8px", border: "none", background: "none", textAlign: "left", cursor: "pointer", color: "#202733", transition: "padding 400ms cubic-bezier(0.22,1,0.36,1),background 300ms" }}>
                  <span style={{ width: "56px", height: "56px", borderRadius: "18px", border: "1.5px solid #D0D5DD", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "24px", height: "24px", stroke: "#202733", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M9 5v4M9 15v4M7 9h4v6H7zM17 3v3M17 14v4M15 6h4v8h-4z" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#E4490A" }}>
                      RETAIL INVESTING
                    </span>
                    <span style={{ fontSize: "clamp(19px,2.1vw,25px)", fontWeight: "500", letterSpacing: "-0.025em" }}>
                      AI That Makes Investing Simple
                    </span>
                    <span style={{ fontSize: "15px", color: "#667085" }}>90% time saved · 40% more engagement · 75% fewer errors</span>
                  </span>
                  <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: v.tb?.i4, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 300ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", stroke: v.tf?.i4, strokeWidth: "2.2", transform: `rotate(${v.tr?.i4 ?? ""})`, transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {" "}
                <div style={{ display: "grid", gridTemplateRows: v.gr?.i4, transition: "grid-template-rows 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <div style={{ overflow: "hidden" }}>
                    <div data-dd="4" style={{ margin: "0 0 28px", padding: "clamp(20px,3vw,36px)", borderRadius: "26px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "22px" }}>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "820px" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                          RETAIL INVESTING
                        </span>
                        <h3 style={{ margin: "0", fontSize: "clamp(24px,2.8vw,34px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.1" }}>
                          AI That Makes Investing Simple
                        </h3>
                        <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#475467" }}>
                          {"A retail investment platform's users were drowning in complex financial data. Our AI platform turned it into simple, actionable insights, so investors could decide with confidence."}
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "10px" }}>
                        <div style={{ padding: "20px", borderRadius: "20px", background: "#101A28", color: "#fff", border: "1px solid #101A28", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                            90%
                          </span>
                          <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#C3CAD5" }}>time saved on investment research</span>
                        </div>
                        <div style={{ padding: "20px", borderRadius: "20px", background: "#fff", color: "#202733", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                            40%
                          </span>
                          <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>increase in user engagement</span>
                        </div>
                        <div style={{ padding: "20px", borderRadius: "20px", background: "#fff", color: "#202733", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                            75%
                          </span>
                          <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>fewer decision-making errors</span>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          THE CHALLENGE
                        </span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          Financial data was confusing, manual analysis was slow, and users often made choices they later regretted, which hurt trust in the platform.
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          THE SOLUTION
                        </span>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "10px" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4px 12px", padding: "16px", borderRadius: "16px", background: "#fff", border: "1px solid #EEF0F4" }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <span style={{ fontSize: "15px", fontWeight: "600" }}>Stock parameter analysis</span>
                              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>AI analyses 25 key stock parameters.</span>
                            </span>
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4px 12px", padding: "16px", borderRadius: "16px", background: "#fff", border: "1px solid #EEF0F4" }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <span style={{ fontSize: "15px", fontWeight: "600" }}>Simplified metrics</span>
                              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                                Complex data becomes easy-to-read scores.
                              </span>
                            </span>
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4px 12px", padding: "16px", borderRadius: "16px", background: "#fff", border: "1px solid #EEF0F4" }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <span style={{ fontSize: "15px", fontWeight: "600" }}>Report summaries</span>
                              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                                Long financial reports become short, clear takeaways.
                              </span>
                            </span>
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4px 12px", padding: "16px", borderRadius: "16px", background: "#fff", border: "1px solid #EEF0F4" }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <span style={{ fontSize: "15px", fontWeight: "600" }}>Actionable insights</span>
                              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>Clear next steps instead of guesswork.</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>TECH</span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            ML algorithms
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            NLP
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            Real-time financial data APIs
                          </span>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>RESULTS</span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          {"Research time down 90%, engagement up 40% and decision errors down 75%, with investors who trust what they're seeing."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="story-6" style={{ display: v.vis?.i5, scrollMarginTop: "90px", borderBottom: "1px solid #E7EAF0" }}>
                {" "}
                <button className="dc-hover-1xxsvk6" type="button" onClick={v.tog?.i5} aria-expanded={v.exp?.i5} style={{ width: "100%", display: "grid", gridTemplateColumns: "64px 1fr auto", gap: "20px", alignItems: "center", padding: "24px 8px", border: "none", background: "none", textAlign: "left", cursor: "pointer", color: "#202733", transition: "padding 400ms cubic-bezier(0.22,1,0.36,1),background 300ms" }}>
                  <span style={{ width: "56px", height: "56px", borderRadius: "18px", border: "1.5px solid #D0D5DD", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "24px", height: "24px", stroke: "#202733", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M12 18v-6M9 15l3-3 3 3" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#E4490A" }}>REGTECH</span>
                    <span style={{ fontSize: "clamp(19px,2.1vw,25px)", fontWeight: "500", letterSpacing: "-0.025em" }}>
                      Licensing Paperwork, Verified on Autopilot
                    </span>
                    <span style={{ fontSize: "15px", color: "#667085" }}>Faster approvals · Fewer errors</span>
                  </span>
                  <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: v.tb?.i5, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 300ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", stroke: v.tf?.i5, strokeWidth: "2.2", transform: `rotate(${v.tr?.i5 ?? ""})`, transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {" "}
                <div style={{ display: "grid", gridTemplateRows: v.gr?.i5, transition: "grid-template-rows 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <div style={{ overflow: "hidden" }}>
                    <div data-dd="5" style={{ margin: "0 0 28px", padding: "clamp(20px,3vw,36px)", borderRadius: "26px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "22px" }}>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "820px" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>REGTECH</span>
                        <h3 style={{ margin: "0", fontSize: "clamp(24px,2.8vw,34px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.1" }}>
                          Licensing Paperwork, Verified on Autopilot
                        </h3>
                        <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#475467" }}>
                          A US-based RegTech startup was verifying licensing documents by hand. We automated it end to end.
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          THE CHALLENGE
                        </span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          Manual document checks were slow and error-prone, and they capped how many applications the team could handle.
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          THE SOLUTION
                        </span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          AI reads each document, extracts the key fields, checks them against the rules and flags only what needs a human.
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>TECH</span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            OCR
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            LLMs
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            Rules engine
                          </span>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>RESULTS</span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          Faster licence approvals, fewer errors and far more applications handled by the same team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="story-7" style={{ display: v.vis?.i6, scrollMarginTop: "90px", borderBottom: "1px solid #E7EAF0" }}>
                {" "}
                <button className="dc-hover-1xxsvk6" type="button" onClick={v.tog?.i6} aria-expanded={v.exp?.i6} style={{ width: "100%", display: "grid", gridTemplateColumns: "64px 1fr auto", gap: "20px", alignItems: "center", padding: "24px 8px", border: "none", background: "none", textAlign: "left", cursor: "pointer", color: "#202733", transition: "padding 400ms cubic-bezier(0.22,1,0.36,1),background 300ms" }}>
                  <span style={{ width: "56px", height: "56px", borderRadius: "18px", border: "1.5px solid #D0D5DD", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "24px", height: "24px", stroke: "#202733", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 3 7h18z" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#E4490A" }}>BANKING</span>
                    <span style={{ fontSize: "clamp(19px,2.1vw,25px)", fontWeight: "500", letterSpacing: "-0.025em" }}>
                      A Chatbot That Actually Helps Bankers Decide
                    </span>
                    <span style={{ fontSize: "15px", color: "#667085" }}>Quicker decisions · Consistent answers</span>
                  </span>
                  <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: v.tb?.i6, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 300ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", stroke: v.tf?.i6, strokeWidth: "2.2", transform: `rotate(${v.tr?.i6 ?? ""})`, transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {" "}
                <div style={{ display: "grid", gridTemplateRows: v.gr?.i6, transition: "grid-template-rows 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <div style={{ overflow: "hidden" }}>
                    <div data-dd="6" style={{ margin: "0 0 28px", padding: "clamp(20px,3vw,36px)", borderRadius: "26px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "22px" }}>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "820px" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>BANKING</span>
                        <h3 style={{ margin: "0", fontSize: "clamp(24px,2.8vw,34px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.1" }}>
                          A Chatbot That Actually Helps Bankers Decide
                        </h3>
                        <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#475467" }}>
                          Staff at a multinational European bank spent hours hunting for answers across policies and reports. We gave them an AI assistant that answers in seconds.
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          THE CHALLENGE
                        </span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          Information was scattered, searches were slow, and teams sometimes gave different answers to the same question.
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          THE SOLUTION
                        </span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          {"A secure internal AI assistant trained on the bank's own documents. It answers in plain language and shows its sources."}
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>TECH</span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            LLMs
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            RAG
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            Secure cloud
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            Access controls
                          </span>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>RESULTS</span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          Quicker decisions, less time searching and consistent answers across teams.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="story-8" style={{ display: v.vis?.i7, scrollMarginTop: "90px", borderBottom: "1px solid #E7EAF0" }}>
                {" "}
                <button className="dc-hover-1xxsvk6" type="button" onClick={v.tog?.i7} aria-expanded={v.exp?.i7} style={{ width: "100%", display: "grid", gridTemplateColumns: "64px 1fr auto", gap: "20px", alignItems: "center", padding: "24px 8px", border: "none", background: "none", textAlign: "left", cursor: "pointer", color: "#202733", transition: "padding 400ms cubic-bezier(0.22,1,0.36,1),background 300ms" }}>
                  <span style={{ width: "56px", height: "56px", borderRadius: "18px", border: "1.5px solid #D0D5DD", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "24px", height: "24px", stroke: "#202733", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1zM16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 14l2 2 4-4" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#E4490A" }}>
                      INSURANCE
                    </span>
                    <span style={{ fontSize: "clamp(19px,2.1vw,25px)", fontWeight: "500", letterSpacing: "-0.025em" }}>
                      Regulatory Reports, Minus the All-Nighters
                    </span>
                    <span style={{ fontSize: "15px", color: "#667085" }}>Shorter reporting cycles · Full audit trail</span>
                  </span>
                  <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: v.tb?.i7, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 300ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", stroke: v.tf?.i7, strokeWidth: "2.2", transform: `rotate(${v.tr?.i7 ?? ""})`, transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {" "}
                <div style={{ display: "grid", gridTemplateRows: v.gr?.i7, transition: "grid-template-rows 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <div style={{ overflow: "hidden" }}>
                    <div data-dd="7" style={{ margin: "0 0 28px", padding: "clamp(20px,3vw,36px)", borderRadius: "26px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "22px" }}>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "820px" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                          INSURANCE
                        </span>
                        <h3 style={{ margin: "0", fontSize: "clamp(24px,2.8vw,34px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.1" }}>
                          Regulatory Reports, Minus the All-Nighters
                        </h3>
                        <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#475467" }}>
                          For an insurance carrier, every reporting deadline meant late nights and giant spreadsheets. We automated the whole process.
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          THE CHALLENGE
                        </span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          Regulatory reporting was manual and risky. One small error could mean rework or a compliance headache.
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          THE SOLUTION
                        </span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          An automation pipeline that collects the data, validates it and generates regulator-ready reports, with a full audit trail.
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>TECH</span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            Python
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            Data pipelines
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            Automated reporting
                          </span>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>RESULTS</span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          Shorter reporting cycles, fewer errors, and a compliance team that finally sleeps at night.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="story-9" style={{ display: v.vis?.i8, scrollMarginTop: "90px", borderBottom: "1px solid #E7EAF0" }}>
                {" "}
                <button className="dc-hover-1xxsvk6" type="button" onClick={v.tog?.i8} aria-expanded={v.exp?.i8} style={{ width: "100%", display: "grid", gridTemplateColumns: "64px 1fr auto", gap: "20px", alignItems: "center", padding: "24px 8px", border: "none", background: "none", textAlign: "left", cursor: "pointer", color: "#202733", transition: "padding 400ms cubic-bezier(0.22,1,0.36,1),background 300ms" }}>
                  <span style={{ width: "56px", height: "56px", borderRadius: "18px", border: "1.5px solid #D0D5DD", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "24px", height: "24px", stroke: "#202733", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM12 7l3 1.2V11c0 2-3 3-3 3s-3-1-3-3V8.2z" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#E4490A" }}>
                      INSURANCE
                    </span>
                    <span style={{ fontSize: "clamp(19px,2.1vw,25px)", fontWeight: "500", letterSpacing: "-0.025em" }}>
                      One Super App for Sales, Policies and Claims
                    </span>
                    <span style={{ fontSize: "15px", color: "#667085" }}>3 apps unified · Claims automated</span>
                  </span>
                  <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: v.tb?.i8, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 300ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", stroke: v.tf?.i8, strokeWidth: "2.2", transform: `rotate(${v.tr?.i8 ?? ""})`, transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {" "}
                <div style={{ display: "grid", gridTemplateRows: v.gr?.i8, transition: "grid-template-rows 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <div style={{ overflow: "hidden" }}>
                    <div data-dd="8" style={{ margin: "0 0 28px", padding: "clamp(20px,3vw,36px)", borderRadius: "26px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "22px" }}>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "820px" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                          INSURANCE
                        </span>
                        <h3 style={{ margin: "0", fontSize: "clamp(24px,2.8vw,34px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.1" }}>
                          One Super App for Sales, Policies and Claims
                        </h3>
                        <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#475467" }}>
                          {"A leading insurer's agents juggled separate tools for quotes, incentives and claims. We gave them one super app and automated motor claims too."}
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          OUR PROCESS
                        </span>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                          <span style={{ whiteSpace: "nowrap", padding: "8px 14px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "14px" }}>
                            <span style={{ font: "500 11px/1 'Geist Mono',monospace", color: "#E4490A", marginRight: "6px" }}>1</span>
                            Requirement workshops
                          </span>
                          <span style={{ color: "#98A2B3" }}>→</span>
                          <span style={{ whiteSpace: "nowrap", padding: "8px 14px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "14px" }}>
                            <span style={{ font: "500 11px/1 'Geist Mono',monospace", color: "#E4490A", marginRight: "6px" }}>2</span>
                            Unified super app
                          </span>
                          <span style={{ color: "#98A2B3" }}>→</span>
                          <span style={{ whiteSpace: "nowrap", padding: "8px 14px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "14px" }}>
                            <span style={{ font: "500 11px/1 'Geist Mono',monospace", color: "#E4490A", marginRight: "6px" }}>3</span>
                            Claims system automation
                          </span>
                          <span style={{ color: "#98A2B3" }}>→</span>
                          <span style={{ whiteSpace: "nowrap", padding: "8px 14px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "14px" }}>
                            <span style={{ font: "500 11px/1 'Geist Mono',monospace", color: "#E4490A", marginRight: "6px" }}>4</span>
                            Dedicated agent app
                          </span>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          THE CHALLENGE
                        </span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          Building one app that does everything without feeling cluttered, and automating a manual motor claims process without disrupting the business.
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          THE SOLUTION
                        </span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          {"A super app for quotes, policies and incentives. An automated claims system for own-damage and third-party motor claims. An agent app for selling, tracking targets and getting manager feedback. Our engineers joined the client's team through staff augmentation."}
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>RESULTS</span>
                        <div data-ddp="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "10px" }}>
                          <div style={{ padding: "20px", borderRadius: "20px", background: "#101A28", color: "#fff", border: "1px solid #101A28", display: "flex", flexDirection: "column", gap: "8px" }}>
                            <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#C3CAD5" }}>Everything in one app</span>
                          </div>
                          <div style={{ padding: "20px", borderRadius: "20px", background: "#fff", color: "#202733", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "8px" }}>
                            <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>Faster claims with fewer errors</span>
                          </div>
                          <div style={{ padding: "20px", borderRadius: "20px", background: "#fff", color: "#202733", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "8px" }}>
                            <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                              More productive agents with real-time feedback
                            </span>
                          </div>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>OUR ROLE</span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            Requirement Gathering
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            Super App Development
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            Claims Automation
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            Agent App Development
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="story-10" style={{ display: v.vis?.i9, scrollMarginTop: "90px", borderBottom: "1px solid #E7EAF0" }}>
                {" "}
                <button className="dc-hover-1xxsvk6" type="button" onClick={v.tog?.i9} aria-expanded={v.exp?.i9} style={{ width: "100%", display: "grid", gridTemplateColumns: "64px 1fr auto", gap: "20px", alignItems: "center", padding: "24px 8px", border: "none", background: "none", textAlign: "left", cursor: "pointer", color: "#202733", transition: "padding 400ms cubic-bezier(0.22,1,0.36,1),background 300ms" }}>
                  <span style={{ width: "56px", height: "56px", borderRadius: "18px", border: "1.5px solid #D0D5DD", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "24px", height: "24px", stroke: "#202733", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M3 10 12 3l9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#E4490A" }}>
                      10 · REAL ESTATE
                    </span>
                    <span style={{ fontSize: "clamp(19px,2.1vw,25px)", fontWeight: "500", letterSpacing: "-0.025em" }}>
                      From One DevOps Engineer to a Full Dev Hub
                    </span>
                    <span style={{ fontSize: "15px", color: "#667085" }}>Staff augmentation · Long-term partnership</span>
                  </span>
                  <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: v.tb?.i9, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 300ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", stroke: v.tf?.i9, strokeWidth: "2.2", transform: `rotate(${v.tr?.i9 ?? ""})`, transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {" "}
                <div style={{ display: "grid", gridTemplateRows: v.gr?.i9, transition: "grid-template-rows 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <div style={{ overflow: "hidden" }}>
                    <div data-dd="9" style={{ margin: "0 0 28px", padding: "clamp(20px,3vw,36px)", borderRadius: "26px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "22px" }}>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "820px" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                          REAL ESTATE
                        </span>
                        <h3 style={{ margin: "0", fontSize: "clamp(24px,2.8vw,34px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.1" }}>
                          From One DevOps Engineer to a Full Dev Hub
                        </h3>
                        <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#475467" }}>
                          A leading UK construction and real estate developer asked for one DevOps engineer. As their needs grew, so did our team.
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          THE CHALLENGE
                        </span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          {"Departments weren't in sync, which caused delays and financial losses. They needed flexible talent across DevOps, front-end and back-end, fast."}
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          THE SOLUTION
                        </span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          Our engineers worked side by side with their in-house team. We built a platform for client communication, modernised the legacy parts slowing them down, and set up a reliable support system.
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>TECH</span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            DevOps
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            CI/CD
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            Cloud
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            Front-end
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            Back-end
                          </span>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>RESULTS</span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          Digitised operations, faster delivery and a long-term partnership, with a team that scales as the business changes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="story-11" style={{ display: v.vis?.i10, scrollMarginTop: "90px", borderBottom: "1px solid #E7EAF0" }}>
                {" "}
                <button className="dc-hover-1xxsvk6" type="button" onClick={v.tog?.i10} aria-expanded={v.exp?.i10} style={{ width: "100%", display: "grid", gridTemplateColumns: "64px 1fr auto", gap: "20px", alignItems: "center", padding: "24px 8px", border: "none", background: "none", textAlign: "left", cursor: "pointer", color: "#202733", transition: "padding 400ms cubic-bezier(0.22,1,0.36,1),background 300ms" }}>
                  <span style={{ width: "56px", height: "56px", borderRadius: "18px", border: "1.5px solid #D0D5DD", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "24px", height: "24px", stroke: "#202733", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M4 5h16v10H4zM2 19h20M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#E4490A" }}>
                      11 · FINANCIAL SERVICES
                    </span>
                    <span style={{ fontSize: "clamp(19px,2.1vw,25px)", fontWeight: "500", letterSpacing: "-0.025em" }}>
                      A Legacy Website, Rebuilt for Millions
                    </span>
                    <span style={{ fontSize: "15px", color: "#667085" }}>More page views · Lower bounce rate</span>
                  </span>
                  <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: v.tb?.i10, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 300ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", stroke: v.tf?.i10, strokeWidth: "2.2", transform: `rotate(${v.tr?.i10 ?? ""})`, transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {" "}
                <div style={{ display: "grid", gridTemplateRows: v.gr?.i10, transition: "grid-template-rows 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <div style={{ overflow: "hidden" }}>
                    <div data-dd="10" style={{ margin: "0 0 28px", padding: "clamp(20px,3vw,36px)", borderRadius: "26px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "22px" }}>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "820px" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                          FINANCIAL SERVICES
                        </span>
                        <h3 style={{ margin: "0", fontSize: "clamp(24px,2.8vw,34px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.1" }}>
                          A Legacy Website, Rebuilt for Millions
                        </h3>
                        <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#475467" }}>
                          A retirement planning provider serving millions of customers needed a website that matched its reputation.
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          THE CHALLENGE
                        </span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          A basic, hard-to-edit CMS. No HTTPS. GDPR gaps. Weak calls to action and a clunky mobile experience.
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                          THE SOLUTION
                        </span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          A move to a flexible WordPress setup with easy content publishing, redesigned navigation and layouts built around real user pain points, and a secure, GDPR-ready site.
                        </p>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>TECH</span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            WordPress
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            Custom plugins
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            UX design
                          </span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "13px", color: "#475467" }}>
                            Security
                          </span>
                        </div>
                      </div>
                      <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>RESULTS</span>
                        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#475467" }}>
                          A fresh, on-brand site with more page views, longer visits and a much lower bounce rate. New features keep rolling out.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Solutions" style={{ padding: "96px 0", background: "#F7F8FA" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px 48px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                  SOLUTIONS BEHIND THE STORIES
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em", textWrap: "balance" }}>
                  {"Liked a Story? "}
                  <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    The Solution Is Reusable.
                  </span>
                </h2>
              </div>
              <p data-reveal="" data-d="120" style={{ margin: "0", maxWidth: "400px", fontSize: "16px", lineHeight: "1.6", color: "#667085" }}>
                Every project above started as a custom build. Now each one is a proven solution we can shape around your business.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "16px" }}>
              <div className="dc-hover-fbwvww" data-reveal="" data-d="0" style={{ padding: "26px", borderRadius: "24px", background: "#fff", border: "1px solid #E7EAF0", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 8px 24px rgba(16,26,40,.04)", display: "flex", flexDirection: "column", gap: "14px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ width: "46px", height: "46px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "21px", height: "21px", stroke: "#FFB52E", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM9 9h.01M12 9h.01M15 9h.01" />
                    </svg>
                  </span>
                </span>
                <h3 style={{ margin: "8px 0 0", fontSize: "19px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  AI Assistants
                </h3>
                <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                  Answer staff or customer questions instantly, with sources
                </p>
                <span style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", paddingTop: "14px", borderTop: "1px solid #EEF0F4" }}>
                  <span style={{ whiteSpace: "nowrap", padding: "4px 10px", borderRadius: "999px", background: "#F2F4F7", fontSize: "12px", color: "#475467" }}>
                    {"AI & Automation"}
                  </span>
                  <button type="button" onClick={v.see?.i0} style={{ whiteSpace: "nowrap", padding: "0", border: "none", background: "none", cursor: "pointer", fontSize: "14px", fontWeight: "600", color: "#E4490A" }}>
                    See the story →
                  </button>
                </span>
              </div>
              <div className="dc-hover-fbwvww" data-reveal="" data-d="70" style={{ padding: "26px", borderRadius: "24px", background: "#fff", border: "1px solid #E7EAF0", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 8px 24px rgba(16,26,40,.04)", display: "flex", flexDirection: "column", gap: "14px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ width: "46px", height: "46px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "21px", height: "21px", stroke: "#FFB52E", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />
                    </svg>
                  </span>
                </span>
                <h3 style={{ margin: "8px 0 0", fontSize: "19px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  AI Threat Protection
                </h3>
                <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                  Spots threats early and automates the response
                </p>
                <span style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", paddingTop: "14px", borderTop: "1px solid #EEF0F4" }}>
                  <span style={{ whiteSpace: "nowrap", padding: "4px 10px", borderRadius: "999px", background: "#F2F4F7", fontSize: "12px", color: "#475467" }}>
                    {"AI & Automation"}
                  </span>
                  <button type="button" onClick={v.see?.i1} style={{ whiteSpace: "nowrap", padding: "0", border: "none", background: "none", cursor: "pointer", fontSize: "14px", fontWeight: "600", color: "#E4490A" }}>
                    See the story →
                  </button>
                </span>
              </div>
              <div className="dc-hover-fbwvww" data-reveal="" data-d="140" style={{ padding: "26px", borderRadius: "24px", background: "#fff", border: "1px solid #E7EAF0", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 8px 24px rgba(16,26,40,.04)", display: "flex", flexDirection: "column", gap: "14px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ width: "46px", height: "46px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "21px", height: "21px", stroke: "#FFB52E", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M3 3v18h18M11 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16 17l-2.8-2.8" />
                    </svg>
                  </span>
                </span>
                <h3 style={{ margin: "8px 0 0", fontSize: "19px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  {"AI Insights & Analysis"}
                </h3>
                <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                  Turns deals, calls and financial data into clear decisions
                </p>
                <span style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", paddingTop: "14px", borderTop: "1px solid #EEF0F4" }}>
                  <span style={{ whiteSpace: "nowrap", padding: "4px 10px", borderRadius: "999px", background: "#F2F4F7", fontSize: "12px", color: "#475467" }}>
                    {"AI & Automation"}
                  </span>
                  <button type="button" onClick={v.see?.i3} style={{ whiteSpace: "nowrap", padding: "0", border: "none", background: "none", cursor: "pointer", fontSize: "14px", fontWeight: "600", color: "#E4490A" }}>
                    See the story →
                  </button>
                </span>
              </div>
              <div className="dc-hover-fbwvww" data-reveal="" data-d="210" style={{ padding: "26px", borderRadius: "24px", background: "#fff", border: "1px solid #E7EAF0", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 8px 24px rgba(16,26,40,.04)", display: "flex", flexDirection: "column", gap: "14px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ width: "46px", height: "46px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "21px", height: "21px", stroke: "#FFB52E", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M12 18v-6M9 15l3-3 3 3" />
                    </svg>
                  </span>
                </span>
                <h3 style={{ margin: "8px 0 0", fontSize: "19px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  {"Document & Reporting Automation"}
                </h3>
                <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                  Verifies documents and generates compliant reports
                </p>
                <span style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", paddingTop: "14px", borderTop: "1px solid #EEF0F4" }}>
                  <span style={{ whiteSpace: "nowrap", padding: "4px 10px", borderRadius: "999px", background: "#F2F4F7", fontSize: "12px", color: "#475467" }}>
                    {"AI & Automation"}
                  </span>
                  <button type="button" onClick={v.see?.i5} style={{ whiteSpace: "nowrap", padding: "0", border: "none", background: "none", cursor: "pointer", fontSize: "14px", fontWeight: "600", color: "#E4490A" }}>
                    See the story →
                  </button>
                </span>
              </div>
              <div className="dc-hover-fbwvww" data-reveal="" data-d="0" style={{ padding: "26px", borderRadius: "24px", background: "#fff", border: "1px solid #E7EAF0", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 8px 24px rgba(16,26,40,.04)", display: "flex", flexDirection: "column", gap: "14px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ width: "46px", height: "46px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "21px", height: "21px", stroke: "#FFB52E", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM12 7l3 1.2V11c0 2-3 3-3 3s-3-1-3-3V8.2z" />
                    </svg>
                  </span>
                </span>
                <h3 style={{ margin: "8px 0 0", fontSize: "19px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  {"Booking & Business Apps"}
                </h3>
                <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                  Booking platforms and super apps that replace a pile of tools
                </p>
                <span style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", paddingTop: "14px", borderTop: "1px solid #EEF0F4" }}>
                  <span style={{ whiteSpace: "nowrap", padding: "4px 10px", borderRadius: "999px", background: "#F2F4F7", fontSize: "12px", color: "#475467" }}>
                    {"Websites & Apps"}
                  </span>
                  <button type="button" onClick={v.see?.i2} style={{ whiteSpace: "nowrap", padding: "0", border: "none", background: "none", cursor: "pointer", fontSize: "14px", fontWeight: "600", color: "#E4490A" }}>
                    See the story →
                  </button>
                </span>
              </div>
              <div className="dc-hover-fbwvww" data-reveal="" data-d="70" style={{ padding: "26px", borderRadius: "24px", background: "#fff", border: "1px solid #E7EAF0", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 8px 24px rgba(16,26,40,.04)", display: "flex", flexDirection: "column", gap: "14px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ width: "46px", height: "46px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "21px", height: "21px", stroke: "#FFB52E", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M4 5h16v10H4zM2 19h20M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                    </svg>
                  </span>
                </span>
                <h3 style={{ margin: "8px 0 0", fontSize: "19px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  Website Modernization
                </h3>
                <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                  Old sites rebuilt to be fast, secure and easy to edit
                </p>
                <span style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", paddingTop: "14px", borderTop: "1px solid #EEF0F4" }}>
                  <span style={{ whiteSpace: "nowrap", padding: "4px 10px", borderRadius: "999px", background: "#F2F4F7", fontSize: "12px", color: "#475467" }}>
                    {"Websites & Apps"}
                  </span>
                  <button type="button" onClick={v.see?.i10} style={{ whiteSpace: "nowrap", padding: "0", border: "none", background: "none", cursor: "pointer", fontSize: "14px", fontWeight: "600", color: "#E4490A" }}>
                    See the story →
                  </button>
                </span>
              </div>
              <div className="dc-hover-fbwvww" data-reveal="" data-d="140" style={{ padding: "26px", borderRadius: "24px", background: "#fff", border: "1px solid #E7EAF0", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 8px 24px rgba(16,26,40,.04)", display: "flex", flexDirection: "column", gap: "14px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ width: "46px", height: "46px", borderRadius: "14px", background: "#FF6B00", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "21px", height: "21px", stroke: "#101A28", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
                    </svg>
                  </span>
                </span>
                <h3 style={{ margin: "8px 0 0", fontSize: "19px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  Team Extension
                </h3>
                <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                  Senior engineers who join your team and scale as you grow
                </p>
                <span style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", paddingTop: "14px", borderTop: "1px solid #EEF0F4" }}>
                  <span style={{ whiteSpace: "nowrap", padding: "4px 10px", borderRadius: "999px", background: "#F2F4F7", fontSize: "12px", color: "#475467" }}>
                    Talent Solutions
                  </span>
                  <button type="button" onClick={v.see?.i8} style={{ whiteSpace: "nowrap", padding: "0", border: "none", background: "none", cursor: "pointer", fontSize: "14px", fontWeight: "600", color: "#E4490A" }}>
                    See the story →
                  </button>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Measure" data-comment-anchor="bad4169769-section" style={{ padding: "96px 0" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "40px 64px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                HOW WE MEASURE SUCCESS
              </div>
              <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em", textWrap: "balance" }}>
                {"If We Can't Measure It, "}
                <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  {"It Didn't Happen."}
                </span>
              </h2>
              <p data-reveal="" data-d="120" style={{ margin: "0", maxWidth: "440px", fontSize: "16px", lineHeight: "1.6", color: "#667085" }}>
                {"Every project starts by agreeing what \"success\" means. Then we track it."}
              </p>
              <div data-reveal="" data-d="160" onMouseEnter={v.mHold} style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
                {(v.mTabs || []).map((t: any, $index: number) => (
                  <Fragment key={$index}>
                    {" "}
                    <button type="button" onClick={t?.pick} onMouseEnter={t?.pick} aria-pressed={t?.sel} style={{ position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", height: "60px", padding: "0 20px", borderRadius: "16px", border: `1px solid ${t?.bd ?? ""}`, background: t?.bg, color: t?.fg, fontSize: "17px", fontWeight: "600", textAlign: "left", cursor: "pointer", transition: "all 300ms" }}>
                      <span>{t?.label}</span>
                    </button>
                    {" "}
                  </Fragment>
                ))}
              </div>
            </div>
            <div data-reveal="" data-d="120" style={{ padding: "8px", borderRadius: "32px", background: "#fff", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 24px 60px rgba(16,26,40,.10)" }}>
              <div data-mpanel="" style={{ padding: "clamp(22px,3vw,32px)", borderRadius: "26px", background: "linear-gradient(160deg,#F7F8FA,#FFF4E8)", display: "flex", flexDirection: "column", gap: "14px", minHeight: "380px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                    {v.mCur?.eb}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px", font: "500 11px/1 'Geist Mono',monospace", color: "#067647" }}>
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#12B76A" }} />
                    TRACKED
                  </span>
                </div>
                <span style={{ fontSize: "clamp(24px,2.6vw,32px)", fontWeight: "500", letterSpacing: "-0.03em" }}>
                  {v.mCur?.label}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "auto" }}>
                  {(v.mCur?.items || []).map((m: any, $index: number) => (
                    <Fragment key={$index}>
                      <div className="dc-hover-1gbjvxs" data-mitem="" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "18px", borderRadius: "20px", background: "#fff", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 8px 20px rgba(16,26,40,.05)", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)" }}>
                        <span style={{ flex: "none", width: "48px", height: "48px", borderRadius: "16px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "22px", height: "22px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d={m?.icon} />
                          </svg>
                        </span>
                        <span style={{ flex: "1", fontSize: "17px", fontWeight: "600" }}>{m?.t}</span>
                        <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#ECFDF3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", fill: "none", stroke: "#12B76A", strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Playbook" data-comment-anchor="eba49fa432-section" style={{ padding: "96px 0 120px", background: "#fff" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "40px 64px", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px", position: "sticky", top: "110px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                  BEHIND EVERY BUILD
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(32px,4vw,52px)", lineHeight: "1.02", letterSpacing: "-0.045em" }}>
                  {"The Same Playbook, "}
                  <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    Every Time.
                  </span>
                </h2>
              </div>
              <div data-reveal="" data-d="140" style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "340px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#667085" }}>
                  <span>PROGRESS</span>
                  <span data-pbpct="" style={{ color: "#202733" }}>0%</span>
                </div>
                <span style={{ position: "relative", height: "4px", borderRadius: "4px", background: "#EEF0F4", overflow: "hidden" }}>
                  <span data-pbfill="" style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "0", borderRadius: "4px", background: "linear-gradient(90deg,#FA7B20,#FFB52E)" }} />
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "6px" }}>
                  <span data-pbstep="" style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "16px", fontWeight: "500", color: "#98A2B3", transition: "color 300ms" }}>
                    <span data-pbdot="" style={{ flex: "none", width: "12px", height: "12px", borderRadius: "50%", border: "2px solid #D0D5DD", background: "#fff", transition: "all 300ms" }} />
                    Listen
                  </span>
                  <span data-pbstep="" style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "16px", fontWeight: "500", color: "#98A2B3", transition: "color 300ms" }}>
                    <span data-pbdot="" style={{ flex: "none", width: "12px", height: "12px", borderRadius: "50%", border: "2px solid #D0D5DD", background: "#fff", transition: "all 300ms" }} />
                    Plan
                  </span>
                  <span data-pbstep="" style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "16px", fontWeight: "500", color: "#98A2B3", transition: "color 300ms" }}>
                    <span data-pbdot="" style={{ flex: "none", width: "12px", height: "12px", borderRadius: "50%", border: "2px solid #D0D5DD", background: "#fff", transition: "all 300ms" }} />
                    Ship
                  </span>
                  <span data-pbstep="" style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "16px", fontWeight: "500", color: "#98A2B3", transition: "color 300ms" }}>
                    <span data-pbdot="" style={{ flex: "none", width: "12px", height: "12px", borderRadius: "50%", border: "2px solid #D0D5DD", background: "#fff", transition: "all 300ms" }} />
                    Stick around
                  </span>
                </div>
              </div>
            </div>
            <div data-pbtrack="" style={{ gridColumn: "span 2", minWidth: "0", display: "flex", flexDirection: "column", gap: "28px" }}>
              <div data-pbcard="" data-comment-anchor="8759a985e4-div" style={{ position: "sticky", top: "110px", minHeight: "0", padding: "22px 26px", borderRadius: "22px", background: "#fff", color: "#202733", border: "1px solid #E7EAF0", boxShadow: "0 -8px 28px rgba(16,26,40,.05)", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "16px", overflow: "hidden", transformOrigin: "50% 0", willChange: "transform" }}>
                <span style={{ position: "relative", width: "48px", height: "48px", borderRadius: "14px", background: "#FFF4E8", color: "#E4490A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: "22px", height: "22px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12z" />
                  </svg>
                </span>
                <span style={{ position: "relative", display: "flex", flexDirection: "column", gap: "10px", maxWidth: "520px" }}>
                  <span style={{ fontSize: "clamp(24px,2.4vw,30px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
                    Listen.
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#667085", textWrap: "pretty" }}>
                    We learn the problem before touching the keyboard.
                  </span>
                </span>
              </div>
              <div data-pbcard="" style={{ position: "sticky", top: "134px", minHeight: "0", padding: "22px 26px", borderRadius: "22px", background: "#fff", color: "#202733", border: "1px solid #E7EAF0", boxShadow: "0 -8px 28px rgba(16,26,40,.05)", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "16px", overflow: "hidden", transformOrigin: "50% 0", willChange: "transform" }}>
                <span style={{ position: "relative", width: "48px", height: "48px", borderRadius: "14px", background: "#FFF4E8", color: "#E4490A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: "22px", height: "22px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M9 4h6v3H9zM7 5H5v16h14V5h-2M9 12h6M9 16h4" />
                  </svg>
                </span>
                <span style={{ position: "relative", display: "flex", flexDirection: "column", gap: "10px", maxWidth: "520px" }}>
                  <span style={{ fontSize: "clamp(24px,2.4vw,30px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
                    Plan.
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#667085", textWrap: "pretty" }}>
                    Scope, team, timeline and price, agreed upfront.
                  </span>
                </span>
              </div>
              <div data-pbcard="" style={{ position: "sticky", top: "158px", minHeight: "0", padding: "22px 26px", borderRadius: "22px", background: "#fff", color: "#202733", border: "1px solid #E7EAF0", boxShadow: "0 -8px 28px rgba(16,26,40,.05)", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "16px", overflow: "hidden", transformOrigin: "50% 0", willChange: "transform" }}>
                <span style={{ position: "relative", width: "48px", height: "48px", borderRadius: "14px", background: "#FFF4E8", color: "#E4490A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: "22px", height: "22px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M12 2c3 2 5 6 5 10l-2 4H9l-2-4c0-4 2-8 5-10zM9 20h6M12 9h.01" />
                  </svg>
                </span>
                <span style={{ position: "relative", display: "flex", flexDirection: "column", gap: "10px", maxWidth: "520px" }}>
                  <span style={{ fontSize: "clamp(24px,2.4vw,30px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
                    Ship.
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#667085", textWrap: "pretty" }}>
                    Short sprints and real demos.
                  </span>
                </span>
              </div>
              <div data-pbcard="" style={{ position: "sticky", top: "182px", minHeight: "0", padding: "22px 26px", borderRadius: "22px", background: "#fff", color: "#202733", border: "1px solid #E7EAF0", boxShadow: "0 -8px 28px rgba(16,26,40,.05)", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "16px", overflow: "hidden", transformOrigin: "50% 0", willChange: "transform" }}>
                <span style={{ position: "relative", width: "48px", height: "48px", borderRadius: "14px", background: "#FFF4E8", color: "#E4490A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: "22px", height: "22px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z" />
                  </svg>
                </span>
                <span style={{ position: "relative", display: "flex", flexDirection: "column", gap: "10px", maxWidth: "520px" }}>
                  <span style={{ fontSize: "clamp(24px,2.4vw,30px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
                    Stick around.
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#667085", textWrap: "pretty" }}>
                    Support, improvements and a clean handover.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Industries worked across" style={{ padding: "72px 0" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <span data-reveal="" style={{ fontSize: "20px", fontWeight: "500", letterSpacing: "-0.02em" }}>
              {"Industries We've Worked Across"}
            </span>
            <div data-reveal="" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <button className="dc-hover-1y3ffdz" type="button" onClick={v.indPick?.i0} style={{ whiteSpace: "nowrap", height: "44px", padding: "0 18px", borderRadius: "999px", border: "1px solid #E7EAF0", background: "#fff", fontSize: "15px", color: "#202733", cursor: "pointer", transition: "all 250ms" }}>
                HR Technology
              </button>
              <button className="dc-hover-1y3ffdz" type="button" onClick={v.indPick?.i1} style={{ whiteSpace: "nowrap", height: "44px", padding: "0 18px", borderRadius: "999px", border: "1px solid #E7EAF0", background: "#fff", fontSize: "15px", color: "#202733", cursor: "pointer", transition: "all 250ms" }}>
                Cybersecurity
              </button>
              <button className="dc-hover-1y3ffdz" type="button" onClick={v.indPick?.i2} style={{ whiteSpace: "nowrap", height: "44px", padding: "0 18px", borderRadius: "999px", border: "1px solid #E7EAF0", background: "#fff", fontSize: "15px", color: "#202733", cursor: "pointer", transition: "all 250ms" }}>
                {"Travel & Tourism"}
              </button>
              <button className="dc-hover-1y3ffdz" type="button" onClick={v.indPick?.i3} style={{ whiteSpace: "nowrap", height: "44px", padding: "0 18px", borderRadius: "999px", border: "1px solid #E7EAF0", background: "#fff", fontSize: "15px", color: "#202733", cursor: "pointer", transition: "all 250ms" }}>
                Fintech
              </button>
              <button className="dc-hover-1y3ffdz" type="button" onClick={v.indPick?.i4} style={{ whiteSpace: "nowrap", height: "44px", padding: "0 18px", borderRadius: "999px", border: "1px solid #E7EAF0", background: "#fff", fontSize: "15px", color: "#202733", cursor: "pointer", transition: "all 250ms" }}>
                Retail Investing
              </button>
              <button className="dc-hover-1y3ffdz" type="button" onClick={v.indPick?.i5} style={{ whiteSpace: "nowrap", height: "44px", padding: "0 18px", borderRadius: "999px", border: "1px solid #E7EAF0", background: "#fff", fontSize: "15px", color: "#202733", cursor: "pointer", transition: "all 250ms" }}>
                RegTech
              </button>
              <button className="dc-hover-1y3ffdz" type="button" onClick={v.indPick?.i6} style={{ whiteSpace: "nowrap", height: "44px", padding: "0 18px", borderRadius: "999px", border: "1px solid #E7EAF0", background: "#fff", fontSize: "15px", color: "#202733", cursor: "pointer", transition: "all 250ms" }}>
                Banking
              </button>
              <button className="dc-hover-1y3ffdz" type="button" onClick={v.indPick?.i7} style={{ whiteSpace: "nowrap", height: "44px", padding: "0 18px", borderRadius: "999px", border: "1px solid #E7EAF0", background: "#fff", fontSize: "15px", color: "#202733", cursor: "pointer", transition: "all 250ms" }}>
                Insurance
              </button>
              <button className="dc-hover-1y3ffdz" type="button" onClick={v.indPick?.i8} style={{ whiteSpace: "nowrap", height: "44px", padding: "0 18px", borderRadius: "999px", border: "1px solid #E7EAF0", background: "#fff", fontSize: "15px", color: "#202733", cursor: "pointer", transition: "all 250ms" }}>
                Real Estate
              </button>
              <button className="dc-hover-1y3ffdz" type="button" onClick={v.indPick?.i9} style={{ whiteSpace: "nowrap", height: "44px", padding: "0 18px", borderRadius: "999px", border: "1px solid #E7EAF0", background: "#fff", fontSize: "15px", color: "#202733", cursor: "pointer", transition: "all 250ms" }}>
                Financial Services
              </button>
            </div>
          </div>
        </section>
        <section data-screen-label="Standards" style={{ padding: "96px 0" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                WHAT EVERY STORY HAS IN COMMON
              </div>
              <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em", textWrap: "balance" }}>
                {"Different Problems. "}
                <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  Same Standards.
                </span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,230px),1fr))", gap: "12px" }}>
              <div className="dc-hover-1e2lqo6" data-reveal="" data-d="0" style={{ padding: "24px", borderRadius: "22px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),background 300ms" }}>
                <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", stroke: "#E4490A", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4" />
                  </svg>
                </span>
                <span style={{ fontSize: "17px", fontWeight: "600" }}>NDA first</span>
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>Your code, data and IP stay yours.</span>
              </div>
              <div className="dc-hover-1e2lqo6" data-reveal="" data-d="70" style={{ padding: "24px", borderRadius: "22px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),background 300ms" }}>
                <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", stroke: "#E4490A", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8.2 13.9 7 22l5-3 5 3-1.2-8.1" />
                  </svg>
                </span>
                <span style={{ fontSize: "17px", fontWeight: "600" }}>Senior engineers</span>
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>No juniors learning on your project.</span>
              </div>
              <div className="dc-hover-1e2lqo6" data-reveal="" data-d="140" style={{ padding: "24px", borderRadius: "22px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),background 300ms" }}>
                <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", stroke: "#E4490A", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                  </svg>
                </span>
                <span style={{ fontSize: "17px", fontWeight: "600" }}>Weekly updates</span>
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                  {"You always know what's done and what's next."}
                </span>
              </div>
              <div className="dc-hover-1e2lqo6" data-reveal="" data-d="210" style={{ padding: "24px", borderRadius: "22px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),background 300ms" }}>
                <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", stroke: "#E4490A", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M9 15l2 2 4-4" />
                  </svg>
                </span>
                <span style={{ fontSize: "17px", fontWeight: "600" }}>Clean handover</span>
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                  Documented, tested and ready for your team to own.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Explore services" style={{ padding: "0 0 96px" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "16px" }}>
              <div data-reveal="" data-d="0" style={{ position: "relative", overflow: "hidden", minHeight: "280px", padding: "clamp(28px,4vw,44px)", borderRadius: "28px", background: "#101A28", color: "#fff", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ position: "absolute", width: "360px", height: "360px", right: "-120px", bottom: "-180px", borderRadius: "50%", background: "radial-gradient(circle,rgba(250,123,32,.28),rgba(250,123,32,0) 65%)" }} />
                <span style={{ position: "relative", fontSize: "clamp(24px,2.6vw,32px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1.15" }}>
                  Want to build something like this?
                </span>
                <span style={{ position: "relative", fontSize: "16px", lineHeight: "1.6", color: "#C3CAD5" }}>
                  Websites, apps, AI and modernization, built around your goals.
                </span>
                <a className="dc-hover-itu66w" href="/offerings" data-comment-anchor="f3a44d385a-a" style={{ position: "relative", marginTop: "auto", alignSelf: "flex-start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", height: "50px", padding: "0 22px", borderRadius: "999px", border: "1.5px solid #FA7B20", color: "#fff", fontSize: "15px", fontWeight: "500", textDecoration: "none", transition: "background 250ms,color 250ms" }}>
                  Explore Our Services →
                </a>
              </div>
              <div data-reveal="" data-d="90" style={{ position: "relative", overflow: "hidden", minHeight: "280px", padding: "clamp(28px,4vw,44px)", borderRadius: "28px", background: "#101A28", color: "#fff", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ position: "absolute", width: "360px", height: "360px", right: "-120px", bottom: "-180px", borderRadius: "50%", background: "radial-gradient(circle,rgba(250,123,32,.28),rgba(250,123,32,0) 65%)" }} />
                <span style={{ position: "relative", fontSize: "clamp(24px,2.6vw,32px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1.15" }}>
                  Need engineers, not a project?
                </span>
                <span style={{ position: "relative", fontSize: "16px", lineHeight: "1.6", color: "#C3CAD5" }}>
                  Vetted developers who join your team in 72 hours.
                </span>
                <a className="dc-hover-itu66w" href="/talent-solutions" data-comment-anchor="ab5f74628c-a" style={{ position: "relative", marginTop: "auto", alignSelf: "flex-start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", height: "50px", padding: "0 22px", borderRadius: "999px", border: "1.5px solid #FA7B20", color: "#fff", fontSize: "15px", fontWeight: "500", textDecoration: "none", transition: "background 250ms,color 250ms" }}>
                  Explore Talent Solutions →
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" data-screen-label="Contact" style={{ scrollMarginTop: "72px", padding: "96px 0", background: "#F7F8FA" }}>
          <div style={{ maxWidth: "620px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "28px", textAlign: "center" }}>
            <h2 data-reveal="" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(32px,4vw,50px)", lineHeight: "1.04", letterSpacing: "-0.04em" }}>
              {"Your Story Could "}
              <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Be Next.
              </span>
            </h2>
            <div data-reveal="" data-d="100" style={{ width: "100%", padding: "clamp(20px,4vw,32px)", borderRadius: "28px", background: "#fff", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 22px 56px rgba(16,26,40,.08)", textAlign: "left" }}>
              {v.notSent ? (
                <>
                  <form onSubmit={v.submit} noValidate style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "14px" }}>
                      <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "500" }}>First Name</span>
                        <input className="dc-focus-6go203" value={v.fFirst ?? ""} onChange={v.setFirst} placeholder="Jane" autoComplete="given-name" style={{ height: "48px", padding: "0 14px", borderRadius: "12px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none" }} />
                      </label>
                      <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "500" }}>Email *</span>
                        <input className="dc-focus-6go203" type="email" value={v.fEmail ?? ""} onChange={v.setEmail} placeholder="you@company.com" autoComplete="email" style={{ height: "48px", padding: "0 14px", borderRadius: "12px", border: `1px solid ${v.emailBd ?? ""}`, background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none" }} />
                      </label>
                    </div>
                    <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontSize: "13px", fontWeight: "500" }}>Message</span>
                      <textarea className="dc-focus-6go203" value={v.fMsg ?? ""} onChange={v.setMsg} rows={4} placeholder="Tell us about your project" style={{ padding: "12px 14px", borderRadius: "12px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", lineHeight: "1.5", color: "#202733", outline: "none", resize: "vertical", minHeight: "110px" }} />
                    </label>
                    <button className="dc-hover-16zqy62" type="submit" style={{ height: "54px", borderRadius: "999px", background: "#FF6B00", color: "#202733", border: "none", fontSize: "16px", fontWeight: "500", cursor: "pointer", transition: "transform 250ms" }}>
                      {"Let's Talk"}
                    </button>
                    {v.fError ? (
                      <>
                        <span style={{ fontSize: "13px", color: "#C4320A", textAlign: "center" }}>Please enter a valid email.</span>
                      </>
                    ) : null}
                  </form>
                </>
              ) : null}
              {v.sent ? (
                <>
                  <div style={{ minHeight: "240px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "14px", textAlign: "center" }}>
                    <span style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 24 24" style={{ width: "26px", height: "26px", stroke: "#fff", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "20px", fontWeight: "600" }}>{"Thanks! We'll be in touch soon."}</span>
                    <button type="button" onClick={v.reset} style={{ background: "none", border: "none", color: "#667085", fontSize: "14px", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "4px" }}>
                      Send another
                    </button>
                  </div>
                </>
              ) : null}
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
              <a className="dc-hover-1eiwf5n" href="/#cases" style={{ color: "#E7EAF0", textDecoration: "none", lineHeight: "1.45", transition: "color 200ms" }}>
                Case Studies
              </a>
              <a className="dc-hover-1eiwf5n" href="/industries" style={{ color: "#E7EAF0", textDecoration: "none", lineHeight: "1.45", transition: "color 200ms" }}>
                Industries
              </a>
              <a className="dc-hover-1eiwf5n" href="#careers" onClick={v.careersOpen} data-comment-anchor="9a8b937d6a-a" style={{ color: "#E7EAF0", textDecoration: "none", lineHeight: "1.45", transition: "color 200ms" }}>
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
