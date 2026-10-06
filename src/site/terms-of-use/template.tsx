// Generated from "Terms of Use.dc.html" by scripts/convert-dc.mjs, then maintained by hand.
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
            <a className="dc-hover-1einh9h" href="/about" onMouseEnter={v.menuClose} style={{ position: "relative", display: "flex", alignItems: "center", height: "72px", textDecoration: "none", color: "#202733", transition: "color 250ms" }}>
              About us
            </a>
          </nav>
          <a className="dc-hover-ygs45k site-header-cta" href="#talk" onClick={v.talkOpen} style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "44px", padding: "0 20px", borderRadius: "10px", background: "#FF6B00", color: "#202733", fontWeight: "500", fontSize: "15px", textDecoration: "none", transition: "transform 250ms,box-shadow 250ms" }}>
            {"Let's Talk"}
          </a>
          <MobileMenu active="/terms-of-use" onTalk={v.talkOpen} />
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
        <section data-screen-label="Privacy Policy hero" style={{ padding: "152px 0 64px", background: "#101A28", color: "#fff", position: "relative", overflow: "hidden" }}>
          {" "}
          <img src="/assets/emburc-mark.svg" alt="" aria-hidden="true" style={{ position: "absolute", right: "-60px", bottom: "-90px", width: "340px", opacity: ".06", pointerEvents: "none" }} />
          {" "}
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#98A2B3" }}>
              <span style={{ width: "20px", height: "1.5px", background: "#FF6B00" }} />
              Legal
            </div>
            <h1 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(40px,5.4vw,72px)", lineHeight: "1", letterSpacing: "-0.045em" }}>
              {"Terms of "}
              <span style={{ color: "#FF6B00" }}>Use</span>
            </h1>
            <p data-reveal="" data-d="160" style={{ margin: "0", maxWidth: "560px", fontSize: "18px", lineHeight: "1.6", color: "#C3CAD5", textWrap: "pretty" }}>
              Emburc Technologies Private Limited
            </p>
          </div>
        </section>
        <section style={{ padding: "80px 0 128px", background: "#fff", color: "#202733" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexWrap: "wrap", gap: "48px 72px", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 auto", minWidth: "0", maxWidth: "820px", display: "flex", flexDirection: "column", gap: "96px" }}>
              <article id="terms" data-screen-label="Terms of Use" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                <section data-reveal="" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "4px 16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", lineHeight: "1.7", color: "#475467", textWrap: "pretty" }}>
                      <p style={{ margin: "0" }}>
                        {"These Terms of Use govern your use of the Emburc website and services. By accessing "}
                        <a className="dc-hover-98xtwf" href="https://www.emburc.com" target="_blank" rel="noopener" style={{ color: "#FF6B00", textDecoration: "none" }}>
                          www.emburc.com
                        </a>
                        , you agree to these terms.
                      </p>
                    </div>
                  </div>
                </section>
                <section data-reveal="" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "4px 16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "600", letterSpacing: "-0.02em", color: "#202733" }}>
                      Introduction
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", lineHeight: "1.7", color: "#475467", textWrap: "pretty" }}>
                      <p style={{ margin: "0" }}>
                        {"Emburc Technologies Private Limited provides digital product development, AI & automation, modernization, migration, and talent solutions."}
                      </p>
                      <p style={{ margin: "0" }}>
                        By using our website or services, you agree to use them responsibly and in accordance with applicable laws.
                      </p>
                    </div>
                  </div>
                </section>
                <section data-reveal="" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "4px 16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "600", letterSpacing: "-0.02em", color: "#202733" }}>
                      Use of Website
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", lineHeight: "1.7", color: "#475467", textWrap: "pretty" }}>
                      <p style={{ margin: "0" }}>You may use the Emburc website for lawful business and informational purposes.</p>
                      <p style={{ margin: "0" }}>You must not:</p>
                      <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <li style={{ display: "flex", gap: "12px" }}>
                          <span style={{ flex: "none", width: "6px", height: "6px", marginTop: "11px", borderRadius: "50%", background: "#FF6B00" }} />
                          <span>Misuse or damage the website.</span>
                        </li>
                        <li style={{ display: "flex", gap: "12px" }}>
                          <span style={{ flex: "none", width: "6px", height: "6px", marginTop: "11px", borderRadius: "50%", background: "#FF6B00" }} />
                          <span>Attempt unauthorized access.</span>
                        </li>
                        <li style={{ display: "flex", gap: "12px" }}>
                          <span style={{ flex: "none", width: "6px", height: "6px", marginTop: "11px", borderRadius: "50%", background: "#FF6B00" }} />
                          <span>Upload malicious software or harmful content.</span>
                        </li>
                        <li style={{ display: "flex", gap: "12px" }}>
                          <span style={{ flex: "none", width: "6px", height: "6px", marginTop: "11px", borderRadius: "50%", background: "#FF6B00" }} />
                          <span>Copy or reproduce our content without permission.</span>
                        </li>
                        <li style={{ display: "flex", gap: "12px" }}>
                          <span style={{ flex: "none", width: "6px", height: "6px", marginTop: "11px", borderRadius: "50%", background: "#FF6B00" }} />
                          <span>Use the website for illegal activities.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section data-reveal="" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "4px 16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "600", letterSpacing: "-0.02em", color: "#202733" }}>
                      Our Services
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", lineHeight: "1.7", color: "#475467", textWrap: "pretty" }}>
                      <p style={{ margin: "0" }}>
                        Information about our services on the website is provided for general information. Specific project scope, pricing, timelines, deliverables, and responsibilities will be agreed separately with the client.
                      </p>
                    </div>
                  </div>
                </section>
                <section data-reveal="" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "4px 16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "600", letterSpacing: "-0.02em", color: "#202733" }}>
                      Intellectual Property
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", lineHeight: "1.7", color: "#475467", textWrap: "pretty" }}>
                      <p style={{ margin: "0" }}>
                        The Emburc name, logo, website content, designs, text, graphics, and other materials are owned by or licensed to Emburc.
                      </p>
                      <p style={{ margin: "0" }}>
                        You may not copy, modify, distribute, or use our intellectual property without written permission.
                      </p>
                      <p style={{ margin: "0" }}>Client-owned content and materials remain the property of the respective client.</p>
                    </div>
                  </div>
                </section>
                <section data-reveal="" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "4px 16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "600", letterSpacing: "-0.02em", color: "#202733" }}>
                      Payments
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", lineHeight: "1.7", color: "#475467", textWrap: "pretty" }}>
                      <p style={{ margin: "0" }}>
                        Service fees, payment schedules, and other commercial terms will be agreed upon separately through a proposal, quotation, Statement of Work, or service agreement.
                      </p>
                    </div>
                  </div>
                </section>
                <section data-reveal="" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "4px 16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "600", letterSpacing: "-0.02em", color: "#202733" }}>
                      Confidentiality
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", lineHeight: "1.7", color: "#475467", textWrap: "pretty" }}>
                      <p style={{ margin: "0" }}>
                        Information shared by clients during a project will be treated confidentially in accordance with the applicable agreement or confidentiality terms.
                      </p>
                    </div>
                  </div>
                </section>
                <section data-reveal="" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "4px 16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "600", letterSpacing: "-0.02em", color: "#202733" }}>
                      Privacy
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", lineHeight: "1.7", color: "#475467", textWrap: "pretty" }}>
                      <p style={{ margin: "0" }}>
                        {"Your use of our website is also subject to our "}
                        <a className="dc-hover-98xtwf" href="/privacy-policy" style={{ color: "#FF6B00", textDecoration: "none" }}>
                          Privacy Policy
                        </a>
                        , which explains how Emburc collects and uses personal information.
                      </p>
                    </div>
                  </div>
                </section>
                <section data-reveal="" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "4px 16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "600", letterSpacing: "-0.02em", color: "#202733" }}>
                      Third-Party Links
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", lineHeight: "1.7", color: "#475467", textWrap: "pretty" }}>
                      <p style={{ margin: "0" }}>
                        Our website may contain links to third-party websites. Emburc is not responsible for the content, security, or privacy practices of those websites.
                      </p>
                    </div>
                  </div>
                </section>
                <section data-reveal="" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "4px 16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "600", letterSpacing: "-0.02em", color: "#202733" }}>
                      Disclaimer
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", lineHeight: "1.7", color: "#475467", textWrap: "pretty" }}>
                      <p style={{ margin: "0" }}>
                        We make reasonable efforts to keep our website and information accurate and available. However, we do not guarantee that the website will always be error-free, uninterrupted, or available.
                      </p>
                    </div>
                  </div>
                </section>
                <section data-reveal="" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "4px 16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "600", letterSpacing: "-0.02em", color: "#202733" }}>
                      Limitation of Liability
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", lineHeight: "1.7", color: "#475467", textWrap: "pretty" }}>
                      <p style={{ margin: "0" }}>
                        To the extent permitted by applicable law, Emburc will not be responsible for indirect or consequential losses arising from the use of our website or services.
                      </p>
                      <p style={{ margin: "0" }}>Specific client engagements may have separate liability terms.</p>
                    </div>
                  </div>
                </section>
                <section data-reveal="" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "4px 16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "600", letterSpacing: "-0.02em", color: "#202733" }}>
                      Termination
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", lineHeight: "1.7", color: "#475467", textWrap: "pretty" }}>
                      <p style={{ margin: "0" }}>
                        Emburc may restrict or terminate access to the website if these Terms are violated or if required for security or legal reasons.
                      </p>
                    </div>
                  </div>
                </section>
                <section data-reveal="" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "4px 16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "600", letterSpacing: "-0.02em", color: "#202733" }}>
                      Changes to These Terms
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", lineHeight: "1.7", color: "#475467", textWrap: "pretty" }}>
                      <p style={{ margin: "0" }}>
                        Emburc may update these Terms from time to time. Updated Terms will be published on this page with a revised Last Updated date.
                      </p>
                    </div>
                  </div>
                </section>
                <section data-reveal="" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "4px 16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "600", letterSpacing: "-0.02em", color: "#202733" }}>
                      Governing Law
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", lineHeight: "1.7", color: "#475467", textWrap: "pretty" }}>
                      <p style={{ margin: "0" }}>These Terms are governed by the laws of the Republic of India.</p>
                    </div>
                  </div>
                </section>
              </article>
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
