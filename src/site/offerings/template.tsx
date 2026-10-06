// Generated from "Offerings.dc.html" by scripts/convert-dc.mjs, then maintained by hand.
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
          <linearGradient id="ofPath" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style={{ stopColor: "#FA7B20" }} />
            <stop offset="1" style={{ stopColor: "#F59A08" }} />
          </linearGradient>
        </defs>
      </svg>
      <header onMouseLeave={v.menuClose} style={{ position: "fixed", top: "0", left: "0", right: "0", zIndex: "50", background: "rgba(255,255,255,.84)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: "1px solid #E7EAF0" }}>
        <div className="site-header-bar" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
          <a href="/" style={{ display: "flex", flexDirection: "column", gap: "4px", textDecoration: "none", color: "#202733" }}>
            <img src="/assets/emburc-logo.png" alt="eMburc Technologies" style={{ display: "block", height: "44px", width: "auto" }} />
          </a>
          <nav className="site-nav" style={{ display: "flex", alignItems: "center", gap: "32px", fontSize: "15px", flexWrap: "wrap" }}>
            <button type="button" onMouseEnter={v.menuOpen} onFocus={v.menuOpen} onClick={v.menuToggle} aria-expanded={v.menuOn} aria-current="page" style={{ position: "relative", display: "flex", alignItems: "center", gap: "6px", height: "72px", padding: "0", background: "none", border: "none", cursor: "pointer", fontSize: "15px", color: "#FF6B00", transition: "color 250ms" }}>
              {"Offerings "}
              <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", transform: `rotate(${v.menuRot ?? ""})`, transition: "transform 300ms cubic-bezier(0.22,1,0.36,1)" }}>
                <path d="m6 9 6 6 6-6" />
              </svg>
              <span style={{ position: "absolute", left: "0", right: "0", bottom: "-1px", height: "2px", background: "#FF6B00", transformOrigin: "left", transform: "scaleX(1)", transition: "transform 300ms cubic-bezier(0.22,1,0.36,1)" }} />
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
          <MobileMenu active="/offerings" onTalk={v.talkOpen} />
        </div>
        <div className="site-mega" onMouseLeave={v.menuClose} style={{ position: "absolute", left: "0", right: "0", top: "72px", pointerEvents: v.menuPe, opacity: v.menuOp, transform: `translateY(${v.menuY ?? ""})`, transition: "opacity 300ms,transform 400ms cubic-bezier(0.22,1,0.36,1)" }}>
          <div style={{ background: "#fff", borderTop: "1px solid #E7EAF0", borderBottom: "1px solid #E7EAF0", boxShadow: "0 24px 48px rgba(16,26,40,.10)" }}>
            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "36px 32px 40px", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr)) minmax(0,.9fr)", gap: "40px" }}>
              <div data-mcol="" style={{ display: "flex", flexDirection: "column", gap: "6px", opacity: v.menuOp, transform: `translateY(${v.menuColY ?? ""})`, transition: "opacity 400ms 0ms,transform 500ms cubic-bezier(0.22,1,0.36,1) 0ms" }}>
                <a className="dc-hover-1d726jp" href="#build" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", margin: "0 -12px 8px", borderRadius: "12px", textDecoration: "none", color: "#202733", transition: "background 200ms" }}>
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
                <a className="dc-hover-1c6qwgo" href="#build" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  Website Development
                </a>
                <a className="dc-hover-1c6qwgo" href="#build" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  Web Application Development
                </a>
                <a className="dc-hover-1c6qwgo" href="#build" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  Mobile App Development
                </a>
                <a className="dc-hover-1c6qwgo" href="#build" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  Custom Software Development
                </a>
                <a className="dc-hover-1c6qwgo" href="#build" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  SaaS / Product Development
                </a>
              </div>
              <div data-mcol="" style={{ display: "flex", flexDirection: "column", gap: "6px", opacity: v.menuOp, transform: `translateY(${v.menuColY ?? ""})`, transition: "opacity 400ms 60ms,transform 500ms cubic-bezier(0.22,1,0.36,1) 60ms" }}>
                <a className="dc-hover-1d726jp" href="#automate" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", margin: "0 -12px 8px", borderRadius: "12px", textDecoration: "none", color: "#202733", transition: "background 200ms" }}>
                  <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "10px", background: "#FFF4E8", color: "#FF6B00", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "16px", fontWeight: "600", letterSpacing: "-0.01em" }}>{"AI & Automation"}</span>
                  </span>
                </a>
                <a className="dc-hover-1c6qwgo" href="#automate" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  {"Generative AI & LLMs"}
                </a>
                <a className="dc-hover-1c6qwgo" href="#automate" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  {"AI Services & Solutions"}
                </a>
                <a className="dc-hover-1c6qwgo" href="#automate" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  AI Consulting
                </a>
                <a className="dc-hover-1c6qwgo" href="#automate" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  {"AI Agent & Automation"}
                </a>
                <a className="dc-hover-1c6qwgo" href="#automate" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  Production Assurance
                </a>
              </div>
              <div data-mcol="" style={{ display: "flex", flexDirection: "column", gap: "6px", opacity: v.menuOp, transform: `translateY(${v.menuColY ?? ""})`, transition: "opacity 400ms 120ms,transform 500ms cubic-bezier(0.22,1,0.36,1) 120ms" }}>
                <a className="dc-hover-1d726jp" href="#modernize" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", margin: "0 -12px 8px", borderRadius: "12px", textDecoration: "none", color: "#202733", transition: "background 200ms" }}>
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
                <a className="dc-hover-1c6qwgo" href="#modernize" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  Cloud Migration
                </a>
                <a className="dc-hover-1c6qwgo" href="#modernize" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  Application Migration
                </a>
                <a className="dc-hover-1c6qwgo" href="#modernize" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  Legacy Modernization
                </a>
                <a className="dc-hover-1c6qwgo" href="#modernize" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  System Integration
                </a>
                <a className="dc-hover-1c6qwgo" href="#modernize" onClick={v.menuClose} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#667085", textDecoration: "none", transition: "color 200ms,transform 250ms cubic-bezier(0.22,1,0.36,1)" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FFB52E" }} />
                  {"API & Platform Modernization"}
                </a>
              </div>
              <a href="#top" onClick={v.menuClose} style={{ position: "relative", borderRadius: "16px", overflow: "hidden", minHeight: "300px", background: "#101A28", color: "#fff", textDecoration: "none", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "22px", opacity: v.menuOp, transition: "opacity 400ms 180ms" }}>
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
        <section data-screen-label="Offerings hero" style={{ position: "relative", minHeight: "min(92vh,720px)", display: "flex", alignItems: "flex-end", overflow: "hidden", padding: "150px 0 64px", background: "#101A28", color: "#fff" }}>
          <img data-kb="" src="/images/stock/photo-1573164713988-8665fc963095.jpg" alt="Engineer working at a multi-monitor desk" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: ".55" }} />
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg,rgba(16,26,40,.95) 0%,rgba(16,26,40,.72) 50%,rgba(16,26,40,.35) 100%),linear-gradient(0deg,rgba(16,26,40,.9) 0%,rgba(16,26,40,0) 50%)" }} />
          <div style={{ position: "relative", width: "100%", maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "22px" }}>
            <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#C3CAD5" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                OFFERINGS
              </span>
              <h1 style={{ margin: "0", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".04em", color: "#98A2B3" }}>
                · Software Development and AI Services
              </h1>
            </div>
            <p style={{ margin: "0", maxWidth: "820px", fontWeight: "500", fontSize: "clamp(40px,5.4vw,72px)", lineHeight: "1.02", letterSpacing: "-0.045em" }}>
              {" "}
              <span style={{ display: "block", overflow: "hidden", paddingBottom: ".04em" }}>
                <span data-rise="" data-d="80" style={{ display: "block" }}>Build It. Automate It.</span>
              </span>
              {" "}
              <span style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}>
                <span data-rise="" data-d="180" style={{ display: "block", color: "#FA7B20" }}>Modernize It.</span>
              </span>
              {" "}
            </p>
            <p data-reveal="" data-d="280" style={{ margin: "0", maxWidth: "560px", fontSize: "18px", lineHeight: "1.6", color: "#C3CAD5", textWrap: "pretty" }}>
              We help businesses build, automate and modernize with technology that delivers real business value. Minus the chaos.
            </p>
            <div data-reveal="" data-d="340" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ whiteSpace: "nowrap", padding: "8px 14px", borderRadius: "999px", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", fontSize: "14px" }}>
                {"Websites & Apps"}
              </span>
              <span style={{ whiteSpace: "nowrap", padding: "8px 14px", borderRadius: "999px", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", fontSize: "14px" }}>
                {"AI & Automation"}
              </span>
              <span style={{ whiteSpace: "nowrap", padding: "8px 14px", borderRadius: "999px", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", fontSize: "14px" }}>
                {"Cloud & Modernization"}
              </span>
            </div>
            <div data-reveal="" data-d="400" style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap", marginTop: "6px" }}>
              <button className="dc-hover-ebbhtq" type="button" onClick={v.talkOpen} style={{ whiteSpace: "nowrap", height: "52px", padding: "0 26px", borderRadius: "999px", background: "#FF6B00", color: "#202733", border: "none", fontSize: "15px", fontWeight: "500", cursor: "pointer", transition: "transform 250ms,box-shadow 250ms" }}>
                {"Let's Talk"}
              </button>
              <a className="dc-hover-1eiwf5n" href="#build" style={{ whiteSpace: "nowrap", fontSize: "15px", color: "#fff", textDecoration: "underline", textDecorationColor: "rgba(255,255,255,.4)", textUnderlineOffset: "6px" }}>
                See what we build ↓
              </a>
            </div>
          </div>
        </section>
        <section data-screen-label="The challenge" style={{ padding: "104px 0", background: "#fff", overflow: "hidden" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "56px 72px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#667085" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                  The Challenge
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(30px,3.8vw,48px)", lineHeight: "1.05", letterSpacing: "-0.04em", textWrap: "balance" }}>
                  {"Building Software Is Hard. "}
                  <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    We Make It Less Painful.
                  </span>
                </h2>
                <p data-reveal="" data-d="120" style={{ margin: "0", maxWidth: "460px", fontSize: "17px", lineHeight: "1.6", color: "#667085", textWrap: "pretty" }}>
                  Great software starts with a clear plan. We bring the plan, the people and the process.
                </p>
              </div>
              <div data-reveal="" data-d="160" onMouseEnter={v.chHold} style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #E7EAF0" }}>
                {(v.chList || []).map((c: any, $index: number) => (
                  <Fragment key={$index}>
                    {" "}
                    <button type="button" onMouseEnter={c?.pick} onClick={c?.pick} aria-pressed={c?.sel} style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr", gap: "4px 12px", padding: "16px 8px 18px", border: "none", borderBottom: "1px solid #E7EAF0", background: "none", textAlign: "left", cursor: "pointer", color: "#202733" }}>
                      <span style={{ fontSize: "clamp(18px,1.8vw,21px)", fontWeight: "500", letterSpacing: "-0.02em", color: c?.tC, transition: "color 300ms" }}>
                        {c?.t}
                      </span>
                      <span style={{ gridColumn: "1", display: "grid", gridTemplateRows: c?.rows, transition: "grid-template-rows 450ms cubic-bezier(0.22,1,0.36,1)" }}>
                        <span style={{ overflow: "hidden", fontSize: "15px", lineHeight: "1.55", color: "#667085" }}>{c?.d}</span>
                      </span>
                      <span style={{ position: "absolute", left: "0", right: "0", bottom: "-1px", height: "2px", overflow: "hidden" }}>
                        <span data-chbar={c?.i} style={{ display: "block", height: "100%", width: "100%", background: "#101A28", transformOrigin: "left", transform: "scaleX(0)" }} />
                      </span>
                    </button>
                    {" "}
                  </Fragment>
                ))}
              </div>
            </div>
            <div data-reveal="" data-d="120" onMouseMove={v.repel} onMouseLeave={v.unrepel} style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "660px", perspective: "1400px" }}>
              <div style={{ position: "absolute", width: "520px", height: "520px", borderRadius: "50%", background: "radial-gradient(circle,rgba(250,123,32,.20),rgba(250,123,32,0) 65%)" }} />
              <div data-ring="" style={{ position: "absolute", width: "470px", height: "470px", borderRadius: "50%", border: "1.5px dashed #E7EAF0" }} />
              <svg data-figl="" viewBox="-4 -4 250 361" aria-hidden="true" style={{ position: "absolute", left: "calc(50% - 236px)", top: "calc(50% - 30px)", width: "104px", height: "150px", overflow: "visible", transformOrigin: "50% 100%", pointerEvents: "none" }}>
                <circle cx="50" cy="40" r="39" style={{ fill: "url(#emGL)" }} />
                <path d="M39 353V132L200 243" style={{ fill: "none", stroke: "url(#emGL)", strokeWidth: "78", strokeLinecap: "round", strokeLinejoin: "round" }} />
              </svg>
              <svg data-figr="" viewBox="114 -4 250 361" aria-hidden="true" style={{ position: "absolute", left: "calc(50% + 132px)", top: "calc(50% - 30px)", width: "104px", height: "150px", overflow: "visible", transformOrigin: "50% 100%", pointerEvents: "none" }}>
                <circle cx="308" cy="40" r="39" style={{ fill: "url(#emGR)" }} />
                <path d="M319 353V132L158 243" style={{ fill: "none", stroke: "url(#emGR)", strokeWidth: "78", strokeLinecap: "round", strokeLinejoin: "round" }} />
              </svg>
              <div data-phonefloat="" style={{ position: "relative", zIndex: "2" }}>
                <div data-phone="" style={{ position: "relative", width: "300px", height: "620px", padding: "10px", borderRadius: "52px", background: "linear-gradient(145deg,#2B3A52,#101A28)", boxShadow: "0 2px 0 1px rgba(255,255,255,.06) inset,0 40px 80px rgba(16,26,40,.28),0 12px 24px rgba(16,26,40,.14)", transformStyle: "preserve-3d", transition: "transform 500ms cubic-bezier(0.22,1,0.36,1)" }}>
                  {" "}
                  <span style={{ position: "absolute", left: "-3px", top: "130px", width: "3px", height: "56px", borderRadius: "3px 0 0 3px", background: "#1B2535" }} />
                  {" "}
                  <span style={{ position: "absolute", right: "-3px", top: "170px", width: "3px", height: "80px", borderRadius: "0 3px 3px 0", background: "#1B2535" }} />
                  {" "}
                  <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "42px", overflow: "hidden", background: "#F7F8FA" }}>
                    <div style={{ position: "absolute", left: "0", right: "0", top: "0", height: "44px", padding: "0 26px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "13px", fontWeight: "600", zIndex: "3" }}>
                      <span>9:41</span>
                      <span style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                        <span style={{ width: "16px", height: "9px", borderRadius: "2px", border: "1.5px solid #202733" }} />
                      </span>
                    </div>
                    {" "}
                    <span style={{ position: "absolute", left: "50%", top: "10px", width: "92px", height: "26px", marginLeft: "-46px", borderRadius: "999px", background: "#0B111B", zIndex: "4" }} />
                    {" "}
                    <div style={{ position: "absolute", inset: "0", padding: "52px 14px 50px", display: "flex", flexDirection: "column", gap: "12px", opacity: v.chOp?.i0, transform: `translateY(${v.chY?.i0 ?? ""})`, transition: "opacity 600ms,transform 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4px" }}>
                        <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-0.01em" }}>Project check</span>
                      </div>
                      <div style={{ position: "relative", height: "150px", flex: "none", borderRadius: "20px", overflow: "hidden", background: "#E7EAF0" }}>
                        <img src="/images/stock/photo-1531403009284-440f080d1e12.jpg" alt="Sticky notes on a whiteboard" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(16,26,40,0) 40%,rgba(16,26,40,.75))" }} />
                        <span style={{ position: "absolute", left: "10px", top: "10px", padding: "5px 9px", borderRadius: "999px", background: "rgba(255,255,255,.92)", font: "500 9px/1 'Geist Mono',monospace", letterSpacing: ".1em", color: "#E4490A" }}>
                          ● THE PROBLEM
                        </span>
                        <span style={{ position: "absolute", left: "12px", right: "12px", bottom: "10px", fontSize: "18px", fontWeight: "600", letterSpacing: "-0.02em", color: "#fff" }}>
                          Vague requirements
                        </span>
                      </div>
                      <div data-fixcard="" style={{ flex: "1", padding: "16px", borderRadius: "18px", background: "#fff", border: "1px solid #EEF0F4", boxShadow: "0 8px 20px rgba(16,26,40,.05)", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 9px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#067647" }}>
                          <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#ECFDF3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "11px", height: "11px", fill: "none", stroke: "#12B76A", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          </span>
                          HOW WE FIX IT
                        </span>
                        <span style={{ fontSize: "13px", lineHeight: "1.55", color: "#202733" }}>
                          We run a short discovery workshop to pin down your users, features and priorities. You walk away with a clear scope, a roadmap and a realistic budget, before any code is written.
                        </span>
                      </div>
                    </div>
                    <div style={{ position: "absolute", inset: "0", padding: "52px 14px 50px", display: "flex", flexDirection: "column", gap: "12px", opacity: v.chOp?.i1, transform: `translateY(${v.chY?.i1 ?? ""})`, transition: "opacity 600ms,transform 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4px" }}>
                        <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-0.01em" }}>Project check</span>
                      </div>
                      <div style={{ position: "relative", height: "150px", flex: "none", borderRadius: "20px", overflow: "hidden", background: "#E7EAF0" }}>
                        <img src="/images/stock/photo-1506784983877-45594efa4cbe.jpg" alt="Calendar pages and a clock" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(16,26,40,0) 40%,rgba(16,26,40,.75))" }} />
                        <span style={{ position: "absolute", left: "10px", top: "10px", padding: "5px 9px", borderRadius: "999px", background: "rgba(255,255,255,.92)", font: "500 9px/1 'Geist Mono',monospace", letterSpacing: ".1em", color: "#E4490A" }}>
                          ● THE PROBLEM
                        </span>
                        <span style={{ position: "absolute", left: "12px", right: "12px", bottom: "10px", fontSize: "18px", fontWeight: "600", letterSpacing: "-0.02em", color: "#fff" }}>
                          Slow delivery
                        </span>
                      </div>
                      <div data-fixcard="" style={{ flex: "1", padding: "16px", borderRadius: "18px", background: "#fff", border: "1px solid #EEF0F4", boxShadow: "0 8px 20px rgba(16,26,40,.05)", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 9px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#067647" }}>
                          <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#ECFDF3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "11px", height: "11px", fill: "none", stroke: "#12B76A", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          </span>
                          HOW WE FIX IT
                        </span>
                        <span style={{ fontSize: "13px", lineHeight: "1.55", color: "#202733" }}>
                          {"We work in two-week sprints and show you working software at the end of each one. You always know what's done, what's next and when it ships."}
                        </span>
                      </div>
                    </div>
                    <div style={{ position: "absolute", inset: "0", padding: "52px 14px 50px", display: "flex", flexDirection: "column", gap: "12px", opacity: v.chOp?.i2, transform: `translateY(${v.chY?.i2 ?? ""})`, transition: "opacity 600ms,transform 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4px" }}>
                        <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-0.01em" }}>Project check</span>
                      </div>
                      <div style={{ position: "relative", height: "150px", flex: "none", borderRadius: "20px", overflow: "hidden", background: "#E7EAF0" }}>
                        <img src="/images/stock/photo-1544197150-b99a580bb7a8.jpg" alt="Server racks with blinking lights" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(16,26,40,0) 40%,rgba(16,26,40,.75))" }} />
                        <span style={{ position: "absolute", left: "10px", top: "10px", padding: "5px 9px", borderRadius: "999px", background: "rgba(255,255,255,.92)", font: "500 9px/1 'Geist Mono',monospace", letterSpacing: ".1em", color: "#E4490A" }}>
                          ● THE PROBLEM
                        </span>
                        <span style={{ position: "absolute", left: "12px", right: "12px", bottom: "10px", fontSize: "18px", fontWeight: "600", letterSpacing: "-0.02em", color: "#fff" }}>
                          Scaling pain
                        </span>
                      </div>
                      <div data-fixcard="" style={{ flex: "1", padding: "16px", borderRadius: "18px", background: "#fff", border: "1px solid #EEF0F4", boxShadow: "0 8px 20px rgba(16,26,40,.05)", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 9px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#067647" }}>
                          <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#ECFDF3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "11px", height: "11px", fill: "none", stroke: "#12B76A", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          </span>
                          HOW WE FIX IT
                        </span>
                        <span style={{ fontSize: "13px", lineHeight: "1.55", color: "#202733" }}>
                          We design for growth from day one, on cloud infrastructure that scales automatically. When traffic spikes, your app keeps running and your users keep smiling.
                        </span>
                      </div>
                    </div>
                    <div style={{ position: "absolute", inset: "0", padding: "52px 14px 50px", display: "flex", flexDirection: "column", gap: "12px", opacity: v.chOp?.i3, transform: `translateY(${v.chY?.i3 ?? ""})`, transition: "opacity 600ms,transform 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4px" }}>
                        <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-0.01em" }}>Project check</span>
                      </div>
                      <div style={{ position: "relative", height: "150px", flex: "none", borderRadius: "20px", overflow: "hidden", background: "#E7EAF0" }}>
                        <img src="/images/stock/photo-1579621970563-ebec7560ff3e.jpg" alt="Coins and a calculator on a desk" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(16,26,40,0) 40%,rgba(16,26,40,.75))" }} />
                        <span style={{ position: "absolute", left: "10px", top: "10px", padding: "5px 9px", borderRadius: "999px", background: "rgba(255,255,255,.92)", font: "500 9px/1 'Geist Mono',monospace", letterSpacing: ".1em", color: "#E4490A" }}>
                          ● THE PROBLEM
                        </span>
                        <span style={{ position: "absolute", left: "12px", right: "12px", bottom: "10px", fontSize: "18px", fontWeight: "600", letterSpacing: "-0.02em", color: "#fff" }}>
                          Budget creep
                        </span>
                      </div>
                      <div data-fixcard="" style={{ flex: "1", padding: "16px", borderRadius: "18px", background: "#fff", border: "1px solid #EEF0F4", boxShadow: "0 8px 20px rgba(16,26,40,.05)", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 9px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#067647" }}>
                          <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#ECFDF3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "11px", height: "11px", fill: "none", stroke: "#12B76A", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          </span>
                          HOW WE FIX IT
                        </span>
                        <span style={{ fontSize: "13px", lineHeight: "1.55", color: "#202733" }}>
                          We agree scope, milestones and price upfront, and bill against progress. If something changes, you see the cost before we build it, not after.
                        </span>
                      </div>
                    </div>
                    <div style={{ position: "absolute", inset: "0", padding: "52px 14px 50px", display: "flex", flexDirection: "column", gap: "12px", opacity: v.chOp?.i4, transform: `translateY(${v.chY?.i4 ?? ""})`, transition: "opacity 600ms,transform 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4px" }}>
                        <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-0.01em" }}>Project check</span>
                      </div>
                      <div style={{ position: "relative", height: "150px", flex: "none", borderRadius: "20px", overflow: "hidden", background: "#E7EAF0" }}>
                        <img src="/images/stock/photo-1522071820081-009f0129c71c.jpg" alt="Team working together at a table" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(16,26,40,0) 40%,rgba(16,26,40,.75))" }} />
                        <span style={{ position: "absolute", left: "10px", top: "10px", padding: "5px 9px", borderRadius: "999px", background: "rgba(255,255,255,.92)", font: "500 9px/1 'Geist Mono',monospace", letterSpacing: ".1em", color: "#E4490A" }}>
                          ● THE PROBLEM
                        </span>
                        <span style={{ position: "absolute", left: "12px", right: "12px", bottom: "10px", fontSize: "18px", fontWeight: "600", letterSpacing: "-0.02em", color: "#fff" }}>
                          Hiring bottlenecks
                        </span>
                      </div>
                      <div data-fixcard="" style={{ flex: "1", padding: "16px", borderRadius: "18px", background: "#fff", border: "1px solid #EEF0F4", boxShadow: "0 8px 20px rgba(16,26,40,.05)", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 9px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#067647" }}>
                          <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#ECFDF3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "11px", height: "11px", fill: "none", stroke: "#12B76A", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          </span>
                          HOW WE FIX IT
                        </span>
                        <span style={{ fontSize: "13px", lineHeight: "1.55", color: "#202733" }}>
                          Need extra hands? We add vetted engineers to your team in 72 hours. They work in your tools and sprints, and scale up or down as your needs change.
                        </span>
                      </div>
                    </div>
                    <div style={{ position: "absolute", inset: "0", padding: "52px 14px 50px", display: "flex", flexDirection: "column", gap: "12px", opacity: v.chOp?.i5, transform: `translateY(${v.chY?.i5 ?? ""})`, transition: "opacity 600ms,transform 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4px" }}>
                        <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-0.01em" }}>Project check</span>
                      </div>
                      <div style={{ position: "relative", height: "150px", flex: "none", borderRadius: "20px", overflow: "hidden", background: "#E7EAF0" }}>
                        <img src="/images/stock/photo-1518770660439-4636190af475.jpg" alt="Close-up of an old circuit board" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(16,26,40,0) 40%,rgba(16,26,40,.75))" }} />
                        <span style={{ position: "absolute", left: "10px", top: "10px", padding: "5px 9px", borderRadius: "999px", background: "rgba(255,255,255,.92)", font: "500 9px/1 'Geist Mono',monospace", letterSpacing: ".1em", color: "#E4490A" }}>
                          ● THE PROBLEM
                        </span>
                        <span style={{ position: "absolute", left: "12px", right: "12px", bottom: "10px", fontSize: "18px", fontWeight: "600", letterSpacing: "-0.02em", color: "#fff" }}>
                          Legacy lock-in
                        </span>
                      </div>
                      <div data-fixcard="" style={{ flex: "1", padding: "16px", borderRadius: "18px", background: "#fff", border: "1px solid #EEF0F4", boxShadow: "0 8px 20px rgba(16,26,40,.05)", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 9px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#067647" }}>
                          <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#ECFDF3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "11px", height: "11px", fill: "none", stroke: "#12B76A", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          </span>
                          HOW WE FIX IT
                        </span>
                        <span style={{ fontSize: "13px", lineHeight: "1.55", color: "#202733" }}>
                          We map the old system first, then move it in planned phases so the business never stops. Old code becomes modern, documented and easy to maintain.
                        </span>
                      </div>
                    </div>
                    <div style={{ position: "absolute", left: "0", right: "0", bottom: "12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", zIndex: "3" }}>
                      <div style={{ display: "flex", gap: "5px" }}>
                        {(v.chDots || []).map((d: any, $index: number) => (
                          <Fragment key={$index}>
                            <span style={{ height: "5px", width: d?.w, borderRadius: "3px", background: d?.bg, transition: "all 400ms" }} />
                          </Fragment>
                        ))}
                      </div>
                      <span style={{ width: "110px", height: "4px", borderRadius: "4px", background: "#202733" }} />
                    </div>
                  </div>
                  <div data-glare="" style={{ position: "absolute", inset: "0", borderRadius: "52px", pointerEvents: "none", background: "linear-gradient(115deg,rgba(255,255,255,.18),rgba(255,255,255,0) 40%)", opacity: "0", transition: "opacity 400ms" }} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="build" data-screen-label="What we build" style={{ scrollMarginTop: "72px", padding: "104px 0", background: "#F7F8FA" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px 48px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "660px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#667085" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                  Our Capabilities
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em", textWrap: "balance" }}>
                  {"What We "}
                  <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    Build.
                  </span>
                </h2>
              </div>
              <p data-reveal="" data-d="120" style={{ margin: "0", maxWidth: "400px", fontSize: "16px", lineHeight: "1.6", color: "#667085", textWrap: "pretty" }}>
                Websites, apps, AI and modern systems, built to solve real business problems.
              </p>
            </div>
            <div data-bento="build" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gridTemplateAreas: "'web web cus' 'web web ai' 'mob mod glob'", gap: "16px" }}>
              <div data-reveal="" style={{ gridArea: "web", position: "relative", overflow: "hidden", minHeight: "476px", padding: "8px", borderRadius: "28px", background: "#fff", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 18px 48px rgba(16,26,40,.08)", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", flex: "1", minHeight: "260px", borderRadius: "22px", overflow: "hidden", background: "#E7EAF0" }}>
                  <img className="dc-hover-gmxi6v" src="/images/stock/photo-1460925895917-afdab827c52f.jpg" alt="Analytics dashboard on a laptop screen" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform 900ms cubic-bezier(0.22,1,0.36,1)" }} />
                </div>
                <div style={{ padding: "22px 20px 18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                    <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>
                      {"Websites & Web Apps"}
                    </h3>
                  </div>
                  <p style={{ margin: "0", maxWidth: "520px", fontSize: "15px", lineHeight: "1.55", color: "#667085" }}>
                    Fast, SEO-ready sites and browser apps that turn visitors into customers.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                      Websites
                    </span>
                    <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                      Web apps
                    </span>
                    <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                      E-commerce
                    </span>
                  </div>
                </div>
              </div>
              <div className="dc-hover-1bnbz88" data-reveal="" data-d="60" style={{ gridArea: "cus", position: "relative", overflow: "hidden", minHeight: "230px", padding: "26px", borderRadius: "24px", background: "#fff", border: "1px solid #E7EAF0", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 8px 24px rgba(16,26,40,.04)", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                <svg viewBox="0 0 24 24" style={{ position: "absolute", right: "-20px", top: "-20px", width: "120px", height: "120px", stroke: "#F2F4F7", strokeWidth: "1", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                </svg>
                <span style={{ position: "relative" }}>
                  <span style={{ flex: "none", width: "46px", height: "46px", borderRadius: "14px", background: "#F4F5F7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "21px", height: "21px", stroke: "#202733", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                    </svg>
                  </span>
                </span>
                <h3 style={{ position: "relative", margin: "auto 0 0", fontSize: "19px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  {"Custom & SaaS Software"}
                </h3>
                <p style={{ position: "relative", margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                  Tools built around how you actually work, from MVP to full platform.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                    Custom software
                  </span>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                    SaaS
                  </span>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                    Dashboards
                  </span>
                </div>
              </div>
              <div className="dc-hover-1bnbz88" id="automate" data-reveal="" data-d="120" style={{ scrollMarginTop: "96px", gridArea: "ai", position: "relative", overflow: "hidden", minHeight: "230px", padding: "26px", borderRadius: "24px", background: "#fff", border: "1px solid #E7EAF0", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 8px 24px rgba(16,26,40,.04)", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                <svg viewBox="0 0 24 24" style={{ position: "absolute", right: "-20px", top: "-20px", width: "120px", height: "120px", stroke: "#F2F4F7", strokeWidth: "1", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z" />
                </svg>
                <span style={{ position: "relative" }}>
                  <span style={{ flex: "none", width: "46px", height: "46px", borderRadius: "14px", background: "#F4F5F7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "21px", height: "21px", stroke: "#202733", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z" />
                    </svg>
                  </span>
                </span>
                <h3 style={{ position: "relative", margin: "auto 0 0", fontSize: "19px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  {"AI & Automation"}
                </h3>
                <p style={{ position: "relative", margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                  AI that clocks in and does real work.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                    Gen AI
                  </span>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                    AI agents
                  </span>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                    Automation
                  </span>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                    Data
                  </span>
                </div>
              </div>
              <div className="dc-hover-1bnbz88" data-reveal="" data-d="180" style={{ gridArea: "mob", position: "relative", overflow: "hidden", minHeight: "230px", padding: "26px", borderRadius: "24px", background: "#fff", border: "1px solid #E7EAF0", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 8px 24px rgba(16,26,40,.04)", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                <svg viewBox="0 0 24 24" style={{ position: "absolute", right: "-20px", top: "-20px", width: "120px", height: "120px", stroke: "#F2F4F7", strokeWidth: "1", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2" />
                </svg>
                <span style={{ position: "relative" }}>
                  <span style={{ flex: "none", width: "46px", height: "46px", borderRadius: "14px", background: "#F4F5F7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "21px", height: "21px", stroke: "#202733", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2" />
                    </svg>
                  </span>
                </span>
                <h3 style={{ position: "relative", margin: "auto 0 0", fontSize: "19px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  Mobile Apps
                </h3>
                <p style={{ position: "relative", margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                  iOS, Android and Flutter apps people actually keep.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                    iOS
                  </span>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                    Android
                  </span>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                    Flutter
                  </span>
                </div>
              </div>
              <div className="dc-hover-buhqrl" id="modernize" data-reveal="" data-d="240" style={{ scrollMarginTop: "96px", gridArea: "mod", position: "relative", overflow: "hidden", minHeight: "230px", padding: "26px", borderRadius: "24px", background: "linear-gradient(150deg,#FA7B20,#E4490A)", color: "#101A28", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                <svg viewBox="-4 -4 366 361" aria-hidden="true" style={{ position: "absolute", right: "-30px", bottom: "-40px", width: "160px", height: "158px", opacity: ".14" }}>
                  <path d="M39 353V132L200 243M319 353V132L158 243" style={{ fill: "none", stroke: "#101A28", strokeWidth: "78", strokeLinejoin: "round" }} />
                </svg>
                <span style={{ position: "relative", flex: "none", width: "46px", height: "46px", borderRadius: "14px", background: "rgba(16,26,40,.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "21px", height: "21px", stroke: "#101A28", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M8 16H3v5" />
                  </svg>
                </span>
                <h3 style={{ position: "relative", margin: "auto 0 0", fontSize: "19px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  {"Modernization & Migration"}
                </h3>
                <p style={{ position: "relative", margin: "0", fontSize: "14px", lineHeight: "1.55" }}>
                  Your legacy stack called. It wants to retire.
                </p>
                <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "rgba(255,255,255,.85)", fontSize: "12px" }}>
                    Cloud migration
                  </span>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "rgba(255,255,255,.85)", fontSize: "12px" }}>
                    Legacy upgrades
                  </span>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "rgba(255,255,255,.85)", fontSize: "12px" }}>
                    APIs
                  </span>
                </div>
              </div>
              <div className="dc-hover-16zshmk" data-reveal="" data-d="300" style={{ gridArea: "glob", position: "relative", overflow: "hidden", minHeight: "230px", padding: "26px", borderRadius: "24px", background: "#101A28", color: "#fff", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                <svg viewBox="0 0 24 24" style={{ position: "absolute", right: "-30px", bottom: "-30px", width: "150px", height: "150px", stroke: "rgba(255,255,255,.07)", strokeWidth: "1", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
                </svg>
                <span data-globe="" style={{ position: "relative", flex: "none", width: "46px", height: "46px", borderRadius: "14px", background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "21px", height: "21px", stroke: "#FFB52E", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
                  </svg>
                </span>
                <h3 style={{ position: "relative", margin: "auto 0 0", fontSize: "19px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  Global Delivery
                </h3>
                <p style={{ position: "relative", margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#C3CAD5" }}>
                  Built in India. Working to your time zone.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Why eMburc" style={{ padding: "104px 0", background: "#fff" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px 48px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "660px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#667085" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                  {"WHY "}
                  <span style={{ textTransform: "none" }}>eMburc</span>
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em", textWrap: "balance" }}>
                  {"Why Teams Choose "}
                  <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    eMburc.
                  </span>
                </h2>
              </div>
              <p data-reveal="" data-d="120" style={{ margin: "0", maxWidth: "400px", fontSize: "16px", lineHeight: "1.6", color: "#667085", textWrap: "pretty" }}>
                Strategy, design and engineering under one roof, so nothing gets lost in translation.
              </p>
            </div>
            <div data-bento="why" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gridTemplateAreas: "'a logo b' 'c logo d'", gap: "16px" }}>
              <div className="dc-hover-1bnbz88" data-reveal="" data-d="0" style={{ gridArea: "a", minHeight: "220px", padding: "26px", borderRadius: "24px", background: "#fff", border: "1px solid #E7EAF0", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 8px 24px rgba(16,26,40,.04)", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                <span style={{ flex: "none", width: "46px", height: "46px", borderRadius: "14px", background: "#F4F5F7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "21px", height: "21px", stroke: "#202733", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M12 2 2 7l10 5 10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </span>
                <h3 style={{ margin: "auto 0 0", fontSize: "19px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  Solid foundations
                </h3>
                <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                  {"Architecture that won't crumble on launch day."}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                    Scalable
                  </span>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                    Future-ready
                  </span>
                </div>
              </div>
              <div className="dc-hover-1bnbz88" data-reveal="" data-d="70" style={{ gridArea: "b", minHeight: "220px", padding: "26px", borderRadius: "24px", background: "#fff", border: "1px solid #E7EAF0", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 8px 24px rgba(16,26,40,.04)", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                <span style={{ flex: "none", width: "46px", height: "46px", borderRadius: "14px", background: "#F4F5F7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "21px", height: "21px", stroke: "#202733", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />
                  </svg>
                </span>
                <h3 style={{ margin: "auto 0 0", fontSize: "19px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  {"Security & IP protection"}
                </h3>
                <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                  NDAs signed. Your code, your IP. Always.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                    NDA
                  </span>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                    Secure access
                  </span>
                </div>
              </div>
              <div className="dc-hover-1bnbz88" data-reveal="" data-d="140" style={{ gridArea: "c", minHeight: "220px", padding: "26px", borderRadius: "24px", background: "#fff", border: "1px solid #E7EAF0", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 8px 24px rgba(16,26,40,.04)", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                <span style={{ flex: "none", width: "46px", height: "46px", borderRadius: "14px", background: "#F4F5F7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "21px", height: "21px", stroke: "#202733", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </span>
                <h3 style={{ margin: "auto 0 0", fontSize: "19px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  Quality built in
                </h3>
                <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                  Code reviews and testing before anything ships.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                    Code reviews
                  </span>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                    Testing
                  </span>
                </div>
              </div>
              <div className="dc-hover-1bnbz88" data-reveal="" data-d="210" style={{ gridArea: "d", minHeight: "220px", padding: "26px", borderRadius: "24px", background: "#fff", border: "1px solid #E7EAF0", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 8px 24px rgba(16,26,40,.04)", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                <span style={{ flex: "none", width: "46px", height: "46px", borderRadius: "14px", background: "#F4F5F7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "21px", height: "21px", stroke: "#202733", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </span>
                <h3 style={{ margin: "auto 0 0", fontSize: "19px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  No black boxes
                </h3>
                <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                  {"Weekly demos and updates, so you're never left wondering."}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                    Weekly updates
                  </span>
                  <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "#F2F4F7", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                    Shared boards
                  </span>
                </div>
              </div>
              <div data-reveal="" style={{ gridArea: "logo", position: "relative", overflow: "hidden", minHeight: "280px", borderRadius: "24px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ position: "absolute", inset: "0", backgroundImage: "radial-gradient(rgba(255,255,255,.07) 1px,transparent 1px)", backgroundSize: "20px 20px" }} />
                <div style={{ position: "absolute", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle,rgba(250,123,32,.35),rgba(250,123,32,0) 65%)" }} />
                <div data-ring="" style={{ position: "absolute", width: "230px", height: "230px", borderRadius: "50%", border: "1.5px dashed rgba(255,255,255,.16)" }} />
                <svg viewBox="-4 -4 366 361" data-heroloop="" aria-hidden="true" style={{ position: "relative", width: "110px", height: "108px", overflow: "visible" }}>
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
            </div>
          </div>
        </section>
        <section data-screen-label="Our process" style={{ padding: "104px 0", background: "#F7F8FA" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px 48px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "660px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#667085" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                  How We Work
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em", textWrap: "balance" }}>
                  {"Our Build "}
                  <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    Process.
                  </span>
                </h2>
              </div>
              <p data-reveal="" data-d="120" style={{ margin: "0", maxWidth: "400px", fontSize: "16px", lineHeight: "1.6", color: "#667085", textWrap: "pretty" }}>
                Clear steps from first idea to launch day, and everything after.
              </p>
            </div>
            <div data-process="" style={{ position: "relative", display: "flex", flexDirection: "column", gap: "64px", paddingLeft: "64px" }}>
              <div style={{ position: "absolute", left: "15px", top: "10px", bottom: "10px", width: "2px", background: "#E7EAF0", borderRadius: "2px" }}>
                <div data-railfill="" style={{ width: "100%", height: "100%", background: "linear-gradient(#FA7B20,#F59A08)", transformOrigin: "top", transform: "scaleY(0)" }} />
              </div>
              <div data-reveal="" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "24px 56px", alignItems: "center" }}>
                <span data-node="" style={{ position: "absolute", left: "-64px", top: "4px", width: "32px", height: "32px", borderRadius: "50%", background: "#fff", border: "2px solid #D0D5DD", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px/1 'Geist Mono',monospace", color: "#667085", transition: "all 400ms" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", order: "0" }}>
                  <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                    DISCOVERY
                  </span>
                  <p style={{ margin: "0", maxWidth: "460px", fontSize: "clamp(19px,2vw,23px)", fontWeight: "500", lineHeight: "1.35", letterSpacing: "-0.02em" }}>
                    {"We start by asking annoying questions. Your users, your goals, your \"must-haves\" and your \"nice-to-haves.\""}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                      Requirements
                    </span>
                    <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                      User research
                    </span>
                    <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                      Scope
                    </span>
                    <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                      Roadmap
                    </span>
                  </div>
                </div>
                <div style={{ order: "1" }}>
                  <div style={{ padding: "8px", borderRadius: "26px", background: "#fff", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 18px 44px rgba(16,26,40,.07)" }}>
                    <div style={{ padding: "20px", borderRadius: "20px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "14px" }}>
                      <span style={{ display: "flex", gap: "6px" }}>
                        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0E4EA" }} />
                        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0E4EA" }} />
                        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0E4EA" }} />
                      </span>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "8px" }}>
                        <div style={{ padding: "12px", borderRadius: "14px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ font: "500 10px/1 'Geist Mono',monospace", letterSpacing: ".1em", color: "#667085" }}>
                            MUST-HAVES
                          </span>
                          <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                            <span style={{ width: "12px", height: "12px", borderRadius: "4px", background: "#101A28" }} />
                            <span style={{ height: "7px", borderRadius: "4px", background: "#EEF0F4", width: "80%" }} />
                          </span>
                          <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                            <span style={{ width: "12px", height: "12px", borderRadius: "4px", background: "#101A28" }} />
                            <span style={{ height: "7px", borderRadius: "4px", background: "#EEF0F4", width: "60%" }} />
                          </span>
                          <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                            <span style={{ width: "12px", height: "12px", borderRadius: "4px", background: "#101A28" }} />
                            <span style={{ height: "7px", borderRadius: "4px", background: "#EEF0F4", width: "70%" }} />
                          </span>
                        </div>
                        <div style={{ padding: "12px", borderRadius: "14px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ font: "500 10px/1 'Geist Mono',monospace", letterSpacing: ".1em", color: "#667085" }}>
                            NICE-TO-HAVES
                          </span>
                          <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                            <span style={{ width: "12px", height: "12px", borderRadius: "4px", background: "#D0D5DD" }} />
                            <span style={{ height: "7px", borderRadius: "4px", background: "#EEF0F4", width: "80%" }} />
                          </span>
                          <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                            <span style={{ width: "12px", height: "12px", borderRadius: "4px", background: "#D0D5DD" }} />
                            <span style={{ height: "7px", borderRadius: "4px", background: "#EEF0F4", width: "60%" }} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-reveal="" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "24px 56px", alignItems: "center" }}>
                <span data-node="" style={{ position: "absolute", left: "-64px", top: "4px", width: "32px", height: "32px", borderRadius: "50%", background: "#fff", border: "2px solid #D0D5DD", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px/1 'Geist Mono',monospace", color: "#667085", transition: "all 400ms" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", order: "2" }}>
                  <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>DESIGN</span>
                  <p style={{ margin: "0", maxWidth: "460px", fontSize: "clamp(19px,2vw,23px)", fontWeight: "500", lineHeight: "1.35", letterSpacing: "-0.02em" }}>
                    Every pixel has a job. Flows and screens that make sense on the first click.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                      UX flows
                    </span>
                    <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                      Wireframes
                    </span>
                    <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                      UI design
                    </span>
                    <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                      Prototype
                    </span>
                  </div>
                </div>
                <div style={{ order: "1" }}>
                  <div style={{ padding: "8px", borderRadius: "26px", background: "#fff", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 18px 44px rgba(16,26,40,.07)" }}>
                    <div style={{ padding: "20px", borderRadius: "20px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "14px" }}>
                      <span style={{ display: "flex", gap: "6px" }}>
                        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0E4EA" }} />
                        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0E4EA" }} />
                        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0E4EA" }} />
                      </span>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "8px", height: "120px" }}>
                        <span style={{ borderRadius: "12px", background: "#fff", border: "1px solid #E7EAF0", padding: "10px", display: "flex", flexDirection: "column", gap: "7px" }}>
                          <span style={{ height: "7px", width: "70%", borderRadius: "4px", background: "#101A28" }} />
                          <span style={{ height: "7px", width: "90%", borderRadius: "4px", background: "#EEF0F4" }} />
                          <span style={{ height: "7px", width: "60%", borderRadius: "4px", background: "#EEF0F4" }} />
                        </span>
                        <span style={{ borderRadius: "12px", background: "#fff", border: "1px solid #E7EAF0", padding: "10px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px" }}>
                          <span style={{ borderRadius: "8px", background: "#F2F4F7" }} />
                          <span style={{ borderRadius: "8px", background: "#F2F4F7" }} />
                          <span data-cursor="" style={{ gridColumn: "span 2", borderRadius: "8px", background: "linear-gradient(90deg,#FA7B20,#F59A08)", opacity: ".85" }} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-reveal="" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "24px 56px", alignItems: "center" }}>
                <span data-node="" style={{ position: "absolute", left: "-64px", top: "4px", width: "32px", height: "32px", borderRadius: "50%", background: "#fff", border: "2px solid #D0D5DD", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px/1 'Geist Mono',monospace", color: "#667085", transition: "all 400ms" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", order: "0" }}>
                  <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                    DEVELOPMENT
                  </span>
                  <p style={{ margin: "0", maxWidth: "460px", fontSize: "clamp(19px,2vw,23px)", fontWeight: "500", lineHeight: "1.35", letterSpacing: "-0.02em" }}>
                    Short sprints. Real demos. No vanishing acts. You see working software every two weeks.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                      Agile sprints
                    </span>
                    <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                      Code reviews
                    </span>
                    <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                      Testing
                    </span>
                  </div>
                </div>
                <div style={{ order: "1" }}>
                  <div style={{ padding: "8px", borderRadius: "26px", background: "#fff", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 18px 44px rgba(16,26,40,.07)" }}>
                    <div style={{ padding: "20px", borderRadius: "20px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "14px" }}>
                      <span style={{ display: "flex", gap: "6px" }}>
                        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0E4EA" }} />
                        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0E4EA" }} />
                        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0E4EA" }} />
                      </span>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "8px" }}>
                        <span style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span data-sprint="" style={{ height: "8px", borderRadius: "999px", background: "#101A28", transformOrigin: "left" }} />
                          <span style={{ font: "500 10px/1 'Geist Mono',monospace", color: "#667085" }}>SPRINT 1</span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                            Demo
                          </span>
                        </span>
                        <span style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span data-sprint="" style={{ height: "8px", borderRadius: "999px", background: "#101A28", transformOrigin: "left" }} />
                          <span style={{ font: "500 10px/1 'Geist Mono',monospace", color: "#667085" }}>SPRINT 2</span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                            Demo
                          </span>
                        </span>
                        <span style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span data-sprint="" style={{ height: "8px", borderRadius: "999px", background: "#101A28", transformOrigin: "left" }} />
                          <span style={{ font: "500 10px/1 'Geist Mono',monospace", color: "#667085" }}>SPRINT 3</span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                            Demo
                          </span>
                        </span>
                        <span style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span data-sprint="" style={{ height: "8px", borderRadius: "999px", background: "linear-gradient(90deg,#FA7B20,#F59A08)", transformOrigin: "left" }} />
                          <span style={{ font: "500 10px/1 'Geist Mono',monospace", color: "#667085" }}>SPRINT 4</span>
                          <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                            Demo
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-reveal="" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "24px 56px", alignItems: "center" }}>
                <span data-node="" style={{ position: "absolute", left: "-64px", top: "4px", width: "32px", height: "32px", borderRadius: "50%", background: "#fff", border: "2px solid #D0D5DD", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px/1 'Geist Mono',monospace", color: "#667085", transition: "all 400ms" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", order: "2" }}>
                  <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                    {"LAUNCH & GROW"}
                  </span>
                  <p style={{ margin: "0", maxWidth: "460px", fontSize: "clamp(19px,2vw,23px)", fontWeight: "500", lineHeight: "1.35", letterSpacing: "-0.02em" }}>
                    Go live, then get better. We deploy, monitor and keep improving, or hand it all over.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                      Deployment
                    </span>
                    <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                      Monitoring
                    </span>
                    <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                      Support
                    </span>
                    <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "999px", background: "#fff", border: "1px solid #E7EAF0", fontSize: "12px", color: "#475467" }}>
                      Handover
                    </span>
                  </div>
                </div>
                <div style={{ order: "1" }}>
                  <div style={{ padding: "8px", borderRadius: "26px", background: "#fff", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 18px 44px rgba(16,26,40,.07)" }}>
                    <div style={{ padding: "20px", borderRadius: "20px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "14px" }}>
                      <span style={{ display: "flex", gap: "6px" }}>
                        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0E4EA" }} />
                        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0E4EA" }} />
                        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0E4EA" }} />
                      </span>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ padding: "5px 10px", borderRadius: "999px", background: "#ECFDF3", color: "#067647", font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".08em" }}>
                          ● LIVE
                        </span>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", color: "#667085" }}>UPTIME</span>
                      </div>
                      <svg viewBox="0 0 200 50" preserveAspectRatio="none" style={{ width: "100%", height: "56px" }}>
                        <path data-spark="" d="M0 40 L25 34 L50 36 L75 24 L100 28 L125 16 L150 20 L175 8 L200 10" style={{ fill: "none", stroke: "#FA7B20", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }} />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Tech stack" style={{ padding: "104px 0", background: "#fff" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px 48px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "660px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#667085" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                  Technology Stack
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em", textWrap: "balance" }}>
                  {"The Stack Behind the "}
                  <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    Magic.
                  </span>
                </h2>
              </div>
              <p data-reveal="" data-d="120" style={{ margin: "0", maxWidth: "400px", fontSize: "16px", lineHeight: "1.6", color: "#667085", textWrap: "pretty" }}>
                Modern tools, picked for your project, not our comfort zone.
              </p>
            </div>
            <div data-reveal="" style={{ padding: "8px", borderRadius: "28px", background: "#fff", border: "1px solid #E7EAF0", boxShadow: "0 18px 48px rgba(16,26,40,.06)" }}>
              <div style={{ padding: "22px", borderRadius: "22px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "22px" }}>
                <div role="tablist" style={{ display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "2px" }}>
                  {(v.techTabs || []).map((t: any, $index: number) => (
                    <Fragment key={$index}>
                      {" "}
                      <button type="button" role="tab" aria-selected={t?.sel} onClick={t?.pick} style={{ whiteSpace: "nowrap", flex: "none", height: "40px", padding: "0 16px", borderRadius: "999px", border: `1px solid ${t?.bd ?? ""}`, background: t?.bg, color: t?.fg, fontSize: "14px", fontWeight: "500", cursor: "pointer", transition: "all 250ms" }}>
                        {t?.label}
                      </button>
                      {" "}
                    </Fragment>
                  ))}
                </div>
                <div data-techgrid="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(140px,1fr))", gap: "10px", minHeight: "128px" }}>
                  {(v.techTiles || []).map((t: any, $index: number) => (
                    <Fragment key={$index}>
                      <div className="dc-hover-1b8pd5f" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px", padding: "20px 10px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", textAlign: "center", transition: "transform 300ms cubic-bezier(0.22,1,0.36,1),box-shadow 300ms" }}>
                        <span style={{ position: "relative", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <img data-techlogo="" data-logo={t?.logo} alt={`${t?.n ?? ""} logo`} style={{ width: "36px", height: "36px", objectFit: "contain", display: "block" }} />
                          <span data-fallback="" style={{ display: "none", position: "absolute", inset: "0", borderRadius: "12px", background: "#101A28", color: "#fff", alignItems: "center", justifyContent: "center", font: "600 12px/1 'Geist Mono',monospace" }}>
                            {t?.i}
                          </span>
                        </span>
                        <span style={{ fontSize: "14px", fontWeight: "600" }}>{t?.n}</span>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div aria-hidden="true" style={{ overflow: "hidden", WebkitMaskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)", maskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)" }}>
              <div data-marquee="" style={{ display: "flex", gap: "12px", width: "max-content" }}>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/react/react-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/nextjs/nextjs-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/vuejs/vuejs-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/angularjs/angularjs-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/typescript/typescript-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/tailwindcss/tailwindcss-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/nodejs/nodejs-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/python/python-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/java/java-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/laravel/laravel-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/flutter/flutter-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/swift/swift-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/kotlin/kotlin-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/wordpress/wordpress-plain.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/postgresql/postgresql-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/mongodb/mongodb-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/redis/redis-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/docker/docker-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/kubernetes/kubernetes-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/terraform/terraform-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/azure/azure-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/googlecloud/googlecloud-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/react/react-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/nextjs/nextjs-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/vuejs/vuejs-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/angularjs/angularjs-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/typescript/typescript-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/tailwindcss/tailwindcss-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/nodejs/nodejs-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/python/python-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/java/java-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/laravel/laravel-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/flutter/flutter-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/swift/swift-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/kotlin/kotlin-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/wordpress/wordpress-plain.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/postgresql/postgresql-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/mongodb/mongodb-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/redis/redis-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/docker/docker-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/kubernetes/kubernetes-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/terraform/terraform-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/azure/azure-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
                <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/icons/devicon/googlecloud/googlecloud-original.svg" alt="" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
                </span>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Engagement models" style={{ padding: "104px 0", background: "#F7F8FA" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px 48px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "660px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#667085" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                  Ways to Work With Us
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em", textWrap: "balance" }}>
                  {"Pick How We "}
                  <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    Work Together.
                  </span>
                </h2>
              </div>
              <p data-reveal="" data-d="120" style={{ margin: "0", maxWidth: "400px", fontSize: "16px", lineHeight: "1.6", color: "#667085", textWrap: "pretty" }}>
                Flexible models for every stage, from first build to forever support.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "16px", alignItems: "stretch" }}>
              <div className="dc-hover-16zu132" data-reveal="" data-d="0" style={{ position: "relative", padding: "30px", borderRadius: "26px", background: "#fff", color: "#202733", border: "1px solid #E7EAF0", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 8px 24px rgba(16,26,40,.04)", display: "flex", flexDirection: "column", gap: "18px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }} />
                <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Project-Based</h3>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#667085" }}>
                  A clear scope, delivered start to finish
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "18px", borderTop: "1px solid #EEF0F4" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Fixed scope
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Predictable timeline
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Transparent pricing
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Post-launch support
                  </span>
                </div>
              </div>
              <div className="dc-hover-16zu132" data-reveal="" data-d="80" style={{ position: "relative", padding: "30px", borderRadius: "26px", background: "#101A28", color: "#fff", border: "1px solid #101A28", boxShadow: "0 24px 56px rgba(16,26,40,.22)", display: "flex", flexDirection: "column", gap: "18px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                  <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#FF6B00", color: "#202733", font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".08em" }}>
                    MOST POPULAR
                  </span>
                </div>
                <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Dedicated Team</h3>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#C3CAD5" }}>
                  Your own squad, working only on your product
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "18px", borderTop: "1px solid rgba(255,255,255,.12)" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", stroke: "#FFB52E", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Long-term focus
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", stroke: "#FFB52E", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Scale anytime
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", stroke: "#FFB52E", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Full-time team
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", stroke: "#FFB52E", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Your processes
                  </span>
                </div>
              </div>
              <div className="dc-hover-16zu132" data-reveal="" data-d="160" style={{ position: "relative", padding: "30px", borderRadius: "26px", background: "#fff", color: "#202733", border: "1px solid #E7EAF0", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 8px 24px rgba(16,26,40,.04)", display: "flex", flexDirection: "column", gap: "18px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }} />
                <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Ongoing Support</h3>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#667085" }}>
                  We keep it running, fast and fresh
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "18px", borderTop: "1px solid #EEF0F4" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Maintenance and updates
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    New features
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Performance tuning
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", stroke: "#E4490A", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Monitoring
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Industries" style={{ padding: "104px 0", background: "#fff" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: "40px 56px", alignItems: "stretch" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#667085" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                  Industry Experience
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em" }}>
                  {"Software Built for "}
                  <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    Your Industry.
                  </span>
                </h2>
                <p data-reveal="" data-d="120" style={{ margin: "0", maxWidth: "440px", fontSize: "16px", lineHeight: "1.6", color: "#667085" }}>
                  Every industry has its quirks. We learn yours before we write a single line of code.
                </p>
                <div data-reveal="" style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "8px" }}>
                  {(v.inds || []).map((d: any, $index: number) => (
                    <Fragment key={$index}>
                      {" "}
                      <button type="button" onMouseEnter={d?.pick} onClick={d?.pick} aria-pressed={d?.sel} style={{ display: "flex", alignItems: "center", gap: "14px", height: "52px", padding: "0 16px", borderRadius: "14px", border: `1px solid ${d?.bd ?? ""}`, background: d?.bg, color: d?.fg, fontSize: "16px", fontWeight: "500", textAlign: "left", cursor: "pointer", transition: "all 300ms" }}>
                        <span style={{ flex: "1" }}>{d?.name}</span>
                        <span style={{ opacity: d?.arr, transition: "opacity 300ms" }}>→</span>
                      </button>
                      {" "}
                    </Fragment>
                  ))}
                </div>
              </div>
              <div data-reveal="" style={{ position: "relative", minHeight: "520px", padding: "8px", borderRadius: "30px", background: "#fff", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 22px 56px rgba(16,26,40,.10)" }}>
                <div style={{ position: "absolute", inset: "8px", borderRadius: "24px", overflow: "hidden", background: "#101A28" }}>
                  {" "}
                  <img src="/images/stock/photo-1441986300917-64674bd600d8.jpg" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: v.indOp?.i0, transform: `scale(${v.indSc?.i0 ?? ""})`, transition: "opacity 700ms,transform 1400ms cubic-bezier(0.22,1,0.36,1)" }} />
                  {" "}
                  <img src="/images/stock/photo-1576091160399-112ba8d25d1d.jpg" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: v.indOp?.i1, transform: `scale(${v.indSc?.i1 ?? ""})`, transition: "opacity 700ms,transform 1400ms cubic-bezier(0.22,1,0.36,1)" }} />
                  {" "}
                  <img src="/images/stock/photo-1554224155-6726b3ff858f.jpg" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: v.indOp?.i2, transform: `scale(${v.indSc?.i2 ?? ""})`, transition: "opacity 700ms,transform 1400ms cubic-bezier(0.22,1,0.36,1)" }} />
                  {" "}
                  <img src="/images/stock/photo-1436491865332-7a61a109cc05.jpg" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: v.indOp?.i3, transform: `scale(${v.indSc?.i3 ?? ""})`, transition: "opacity 700ms,transform 1400ms cubic-bezier(0.22,1,0.36,1)" }} />
                  {" "}
                  <img src="/images/stock/photo-1503676260728-1c00da094a0b.jpg" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: v.indOp?.i4, transform: `scale(${v.indSc?.i4 ?? ""})`, transition: "opacity 700ms,transform 1400ms cubic-bezier(0.22,1,0.36,1)" }} />
                  {" "}
                  <img src="/images/stock/photo-1589829545856-d10d557cf95f.jpg" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: v.indOp?.i5, transform: `scale(${v.indSc?.i5 ?? ""})`, transition: "opacity 700ms,transform 1400ms cubic-bezier(0.22,1,0.36,1)" }} />
                  {" "}
                  <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(16,26,40,0) 40%,rgba(16,26,40,.9))" }} />
                  <div data-indinfo="" style={{ position: "absolute", left: "28px", right: "28px", bottom: "26px", display: "flex", flexDirection: "column", gap: "12px", color: "#fff" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#FFB52E" }}>
                      {v.ind?.name}
                    </span>
                    <span style={{ fontSize: "clamp(24px,2.6vw,32px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1.15" }}>
                      {v.ind?.line}
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {(v.ind?.tags || []).map((t: any, $index: number) => (
                        <Fragment key={$index}>
                          <span style={{ whiteSpace: "nowrap", padding: "5px 10px", borderRadius: "999px", background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.2)", fontSize: "12px" }}>
                            {t}
                          </span>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Our work" style={{ padding: "104px 0", background: "#F7F8FA" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px 48px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "660px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#667085" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                  Our Work
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em", textWrap: "balance" }}>
                  {"Things We've "}
                  <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    Built.
                  </span>
                </h2>
              </div>
            </div>
            <div data-reveal="" style={{ display: "flex", gap: "12px", height: "500px" }}>
              <div style={{ position: "relative", flex: "1", minWidth: "0", borderRadius: "28px", overflow: "hidden", background: "#101A28", color: "#fff" }}>
                {" "}
                <img src="/images/stock/photo-1521737604893-d14cc237f11d.jpg" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: v.wkOp?.i0, transform: `scale(${v.wkSc?.i0 ?? ""})`, transition: "opacity 800ms,transform 6000ms linear" }} />
                {" "}
                <img src="/images/stock/photo-1550751827-4bd374c3f58b.jpg" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: v.wkOp?.i1, transform: `scale(${v.wkSc?.i1 ?? ""})`, transition: "opacity 800ms,transform 6000ms linear" }} />
                {" "}
                <img src="/images/stock/photo-1488646953014-85cb44e25828.jpg" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: v.wkOp?.i2, transform: `scale(${v.wkSc?.i2 ?? ""})`, transition: "opacity 800ms,transform 6000ms linear" }} />
                {" "}
                <div style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg,rgba(16,26,40,.92) 0%,rgba(16,26,40,.6) 55%,rgba(16,26,40,.15))" }} />
                <div data-wkinfo="" style={{ position: "relative", height: "100%", padding: "36px", display: "flex", flexDirection: "column", gap: "16px", maxWidth: "560px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#FFB52E" }}>
                      CASE STUDY
                    </span>
                    <span style={{ padding: "4px 9px", borderRadius: "999px", background: "rgba(255,255,255,.14)", fontSize: "12px" }}>
                      {v.wk?.type}
                    </span>
                  </div>
                  <span style={{ marginTop: "auto", fontSize: "clamp(30px,3.4vw,46px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1.04" }}>
                    {v.wk?.name}
                  </span>
                  <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.5", color: "#E7EAF0" }}>{v.wk?.line}</p>
                  <button className="dc-hover-bnx3u6" type="button" onClick={v.csOpen} style={{ alignSelf: "flex-start", whiteSpace: "nowrap", height: "48px", padding: "0 22px", borderRadius: "999px", background: "#fff", color: "#101A28", border: "none", fontSize: "15px", fontWeight: "500", cursor: "pointer", transition: "transform 250ms,box-shadow 250ms" }}>
                    Read the case study →
                  </button>
                  <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
                    {(v.wkDots || []).map((d: any, $index: number) => (
                      <Fragment key={$index}>
                        <button type="button" aria-label={d?.label} onClick={d?.pick} style={{ height: "4px", width: d?.w, borderRadius: "4px", border: "none", padding: "0", background: d?.bg, cursor: "pointer", transition: "all 400ms" }} />
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
              {(v.wkPeek || []).map((p: any, $index: number) => (
                <Fragment key={$index}>
                  {" "}
                  <button className="dc-hover-9c3b7k" type="button" onClick={p?.pick} aria-label={`Show ${p?.name ?? ""}`} style={{ position: "relative", flex: "none", width: "92px", borderRadius: "24px", overflow: "hidden", border: "none", padding: "0", cursor: "pointer", background: "#101A28", transition: "width 400ms" }}>
                    {" "}
                    <img data-lazy={p?.img} alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: ".55" }} />
                    {" "}
                    <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(16,26,40,.2),rgba(16,26,40,.8))" }} />
                    {" "}
                    <span style={{ position: "absolute", left: "50%", bottom: "24px", transform: "translateX(-50%) rotate(180deg)", writingMode: "vertical-rl", whiteSpace: "nowrap", color: "#fff", fontSize: "15px", fontWeight: "600", letterSpacing: ".02em" }}>
                      {p?.name}{" · "}{p?.type}
                    </span>
                    {" "}
                  </button>
                  {" "}
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section data-screen-label="FAQ" style={{ padding: "104px 0", background: "#F7F8FA" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "32px 64px", alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#667085" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                  The FAQ
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em" }}>
                  {"Common "}
                  <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    Questions.
                  </span>
                </h2>
              </div>
              <div data-reveal="" style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: "10px" }}>
                {(v.faqs || []).map((f: any, $index: number) => (
                  <Fragment key={$index}>
                    <div style={{ borderRadius: "20px", background: "#fff", border: `1px solid ${f?.bd ?? ""}`, boxShadow: f?.sh, transition: "border-color 300ms,box-shadow 300ms" }}>
                      {" "}
                      <button type="button" onClick={f?.toggle} aria-expanded={f?.exp} style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 32px", gap: "12px", alignItems: "center", padding: "20px 22px", border: "none", background: "none", textAlign: "left", cursor: "pointer", color: "#202733" }}>
                        <span style={{ fontSize: "17px", fontWeight: "600", letterSpacing: "-0.01em" }}>{f?.q}</span>
                        <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: f?.pBg, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 300ms" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", fill: "none", stroke: f?.pFg, strokeWidth: "2.2", strokeLinecap: "round", transform: `rotate(${f?.rot ?? ""})`, transition: "transform 300ms" }}>
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </span>
                      </button>
                      {" "}
                      <div style={{ display: "grid", gridTemplateRows: f?.rows, transition: "grid-template-rows 400ms cubic-bezier(0.22,1,0.36,1)" }}>
                        <div style={{ overflow: "hidden" }}>
                          <p style={{ margin: "0", padding: "0 22px 22px 70px", fontSize: "15px", lineHeight: "1.6", color: "#667085" }}>
                            {f?.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Final CTA" style={{ padding: "104px 0", background: "#fff" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px" }}>
            <div data-reveal="" style={{ position: "relative", overflow: "hidden", padding: "clamp(32px,5vw,64px)", borderRadius: "32px", background: "#101A28", color: "#fff", display: "flex", flexDirection: "column", gap: "22px" }}>
              <div data-blob="c" style={{ position: "absolute", width: "560px", height: "560px", right: "-160px", top: "-260px", borderRadius: "50%", background: "radial-gradient(circle,rgba(250,123,32,.35),rgba(250,123,32,0) 65%)", pointerEvents: "none" }} />
              <svg viewBox="-4 -4 366 361" aria-hidden="true" style={{ position: "absolute", right: "48px", bottom: "-40px", width: "220px", height: "217px", opacity: ".12", overflow: "visible" }}>
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
              <span style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#C3CAD5" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                {"LET'S BUILD TOGETHER"}
              </span>
              <h2 style={{ position: "relative", margin: "0", maxWidth: "720px", fontWeight: "500", fontSize: "clamp(30px,4vw,52px)", lineHeight: "1.05", letterSpacing: "-0.04em" }}>
                {"Ready to Build Your "}
                <span style={{ color: "#FA7B20" }}>Next Big Thing?</span>
              </h2>
              <p style={{ position: "relative", margin: "0", maxWidth: "560px", fontSize: "17px", lineHeight: "1.6", color: "#C3CAD5" }}>
                {"Whether you're starting from scratch or rescuing a legacy system, we're ready when you are."}
              </p>
              <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: "10px 28px", fontSize: "14px", color: "#E7EAF0" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", stroke: "#FFB52E", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  72-hr team setup
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", stroke: "#FFB52E", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {"30 days' post-launch support"}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", stroke: "#FFB52E", strokeWidth: "2.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Built in India, working worldwide
                </span>
              </div>
              <button className="dc-hover-ebbhtq" type="button" onClick={v.talkOpen} style={{ position: "relative", alignSelf: "flex-start", marginTop: "6px", whiteSpace: "nowrap", height: "54px", padding: "0 28px", borderRadius: "999px", background: "#FF6B00", color: "#202733", border: "none", fontSize: "16px", fontWeight: "500", cursor: "pointer", transition: "transform 250ms,box-shadow 250ms" }}>
                Book a Free Call
              </button>
            </div>
          </div>
        </section>
        <div style={{ position: "fixed", inset: "0", zIndex: "90", pointerEvents: v.csPe }}>
          <div onClick={v.csClose} style={{ position: "absolute", inset: "0", background: "rgba(16,26,40,.55)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)", opacity: v.csOp, transition: "opacity 400ms" }} />
          <div data-csdrawer="0" role="dialog" aria-modal="true" aria-hidden={v.csH?.i0} aria-label="Case study: AI-Powered HR Automation" style={{ position: "absolute", top: "0", right: "0", bottom: "0", width: "min(760px,100%)", background: "#fff", color: "#202733", boxShadow: "-24px 0 64px rgba(16,26,40,.25)", transform: `translateX(${v.csX?.i0 ?? ""})`, transition: "transform 600ms cubic-bezier(0.22,1,0.36,1)", overflowY: "auto" }}>
            <div style={{ position: "sticky", top: "0", zIndex: "2", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "16px clamp(20px,4vw,44px)", background: "rgba(255,255,255,.92)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid #EEF0F4" }}>
              <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                CASE STUDY · HR TECHNOLOGY
              </span>
              <button className="dc-hover-sjlfp7" type="button" onClick={v.csClose} aria-label="Close case study" style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #E7EAF0", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 250ms,transform 300ms" }}>
                <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "#202733", strokeWidth: "2", strokeLinecap: "round" }}>
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div style={{ position: "relative", height: "260px", overflow: "hidden", background: "#101A28" }}>
              <img src="/images/stock/photo-1521737604893-d14cc237f11d.jpg" alt="Team collaborating around a laptop" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: ".7" }} />
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(16,26,40,.1),rgba(16,26,40,.85))" }} />
              <span style={{ position: "absolute", left: "clamp(20px,4vw,44px)", bottom: "22px", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.2)", fontSize: "13px", color: "#fff" }}>
                AI-Powered HR Automation
              </span>
            </div>
            <div style={{ padding: "32px clamp(20px,4vw,44px) 44px", display: "flex", flexDirection: "column" }}>
              <div data-cssec="" style={{ display: "flex", flexDirection: "column", gap: "16px", paddingBottom: "32px" }}>
                <h2 style={{ margin: "0", fontSize: "clamp(28px,3.4vw,38px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.1" }}>
                  {"Making Employee Support Faster with an "}
                  <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    AI-Powered HR Advisor
                  </span>
                </h2>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#667085" }}>
                  A SaaS company serving the HR sector wanted to reduce the manual effort involved in handling employee queries while improving response speed and consistency.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: "10px" }}>
                  <div style={{ padding: "20px", borderRadius: "20px", background: "#101A28", color: "#fff", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontSize: "clamp(32px,3.6vw,42px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                      <span data-cscount="85">85</span>
                      %
                    </span>
                    <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#C3CAD5" }}>
                      faster response times for employee queries
                    </span>
                  </div>
                  <div style={{ padding: "20px", borderRadius: "20px", background: "#F7F8FA", color: "#202733", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontSize: "clamp(32px,3.6vw,42px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                      <span data-cscount="75">75</span>
                      %
                    </span>
                    <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>improvement in HR process efficiency</span>
                  </div>
                </div>
              </div>
              <section data-cssec="" style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "36px 0", borderTop: "1px solid #E7EAF0" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                  <span style={{ width: "18px", height: "1.5px", background: "#FA7B20" }} />
                  THE CHALLENGE
                </span>
                <p style={{ margin: "0", fontSize: "19px", fontWeight: "500", lineHeight: "1.4", letterSpacing: "-0.015em" }}>
                  The client was dealing with increasing volumes of employee questions, creating several operational challenges for its HR advisory team.
                </p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: "4px 14px", padding: "18px 0", borderTop: "1px solid #EEF0F4" }}>
                    <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#FFF4E8", color: "#E4490A", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px/1 'Geist Mono',monospace" }} />
                    <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "17px", fontWeight: "600", letterSpacing: "-0.01em" }}>High query volumes</span>
                      <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#667085" }}>
                        Repetitive employee questions were taking significant time to resolve.
                      </span>
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: "4px 14px", padding: "18px 0", borderTop: "1px solid #EEF0F4" }}>
                    <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#FFF4E8", color: "#E4490A", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px/1 'Geist Mono',monospace" }} />
                    <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "17px", fontWeight: "600", letterSpacing: "-0.01em" }}>Manual effort</span>
                      <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#667085" }}>
                        HR teams had to respond to many queries individually.
                      </span>
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: "4px 14px", padding: "18px 0", borderTop: "1px solid #EEF0F4" }}>
                    <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#FFF4E8", color: "#E4490A", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px/1 'Geist Mono',monospace" }} />
                    <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "17px", fontWeight: "600", letterSpacing: "-0.01em" }}>Inconsistent responses</span>
                      <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#667085" }}>
                        Without a centralized knowledge source, employees could receive different answers to similar questions.
                      </span>
                    </span>
                  </div>
                </div>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#475467" }}>
                  These issues were affecting both HR productivity and the employee experience.
                </p>
              </section>
              <section data-cssec="" style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "36px 0", borderTop: "1px solid #E7EAF0" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                  <span style={{ width: "18px", height: "1.5px", background: "#FA7B20" }} />
                  THE SOLUTION
                </span>
                <p style={{ margin: "0", fontSize: "19px", fontWeight: "500", lineHeight: "1.4", letterSpacing: "-0.015em" }}>
                  We developed an AI-powered HR Advisor designed to automate routine employee support and make relevant information easier to access.
                </p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: "4px 14px", padding: "18px 0", borderTop: "1px solid #EEF0F4" }}>
                    <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#FFF4E8", color: "#E4490A", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px/1 'Geist Mono',monospace" }} />
                    <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "17px", fontWeight: "600", letterSpacing: "-0.01em" }}>AI Employee Assistant</span>
                      <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#667085" }}>
                        A conversational AI interface that provides employees with quick and accurate answers to HR-related questions.
                      </span>
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: "4px 14px", padding: "18px 0", borderTop: "1px solid #EEF0F4" }}>
                    <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#FFF4E8", color: "#E4490A", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px/1 'Geist Mono',monospace" }} />
                    <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "17px", fontWeight: "600", letterSpacing: "-0.01em" }}>
                        Intelligent Knowledge Retrieval
                      </span>
                      <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#667085" }}>
                        An NLP-powered knowledge layer that identifies and surfaces the most relevant HR information.
                      </span>
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: "4px 14px", padding: "18px 0", borderTop: "1px solid #EEF0F4" }}>
                    <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#FFF4E8", color: "#E4490A", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px/1 'Geist Mono',monospace" }} />
                    <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "17px", fontWeight: "600", letterSpacing: "-0.01em" }}>Automated HR Workflows</span>
                      <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#667085" }}>
                        AI-driven automation reduces manual intervention for repetitive HR activities and routine queries.
                      </span>
                    </span>
                  </div>
                </div>
              </section>
              <section data-cssec="" style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "36px 0", borderTop: "1px solid #E7EAF0" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                  <span style={{ width: "18px", height: "1.5px", background: "#FA7B20" }} />
                  TECHNOLOGY
                </span>
                <p style={{ margin: "0", fontSize: "19px", fontWeight: "500", lineHeight: "1.4", letterSpacing: "-0.015em" }}>
                  The solution was designed around four core technology capabilities:
                </p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "10px", paddingTop: "4px" }}>
                    <div className="dc-hover-1sghl9h" style={{ padding: "18px", borderRadius: "18px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "6px", transition: "transform 300ms,background 300ms" }}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>Natural Language Processing</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        Enables the system to understand employee questions and provide context-aware responses.
                      </span>
                    </div>
                    <div className="dc-hover-1sghl9h" style={{ padding: "18px", borderRadius: "18px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "6px", transition: "transform 300ms,background 300ms" }}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>Scalable Backend Infrastructure</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        Supports HR workflows, data processing, and system scalability.
                      </span>
                    </div>
                    <div className="dc-hover-1sghl9h" style={{ padding: "18px", borderRadius: "18px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "6px", transition: "transform 300ms,background 300ms" }}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>Secure Data Management</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        Protects sensitive employee information while supporting efficient information retrieval.
                      </span>
                    </div>
                    <div className="dc-hover-1sghl9h" style={{ padding: "18px", borderRadius: "18px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "6px", transition: "transform 300ms,background 300ms" }}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>System Integrations</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        Connects the solution with existing HR platforms and relevant third-party systems.
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              <section data-cssec="" style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "36px 0", borderTop: "1px solid #E7EAF0" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                  <span style={{ width: "18px", height: "1.5px", background: "#FA7B20" }} />
                  RESULTS
                </span>
                <p style={{ margin: "0", fontSize: "19px", fontWeight: "500", lineHeight: "1.4", letterSpacing: "-0.015em" }}>
                  The AI-powered HR Advisor delivered measurable improvements across the HR support process:
                </p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: "10px" }}>
                    <div style={{ padding: "20px", borderRadius: "20px", background: "#101A28", color: "#fff", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontSize: "clamp(32px,3.6vw,42px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                        <span data-cscount="85">85</span>
                        %
                      </span>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>Reduction</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#C3CAD5" }}>
                        in employee query response time, helping employees receive information faster.
                      </span>
                    </div>
                    <div style={{ padding: "20px", borderRadius: "20px", background: "#F7F8FA", color: "#202733", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontSize: "clamp(32px,3.6vw,42px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                        <span data-cscount="75">75</span>
                        %
                      </span>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>Increase</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        in HR process efficiency, allowing HR teams to spend more time on strategic activities.
                      </span>
                    </div>
                    <div style={{ padding: "20px", borderRadius: "20px", background: "#F7F8FA", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#FFF4E8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg viewBox="0 0 24 24" style={{ width: "22px", height: "22px", fill: "none", stroke: "#E4490A", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }}>
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" />
                        </svg>
                      </span>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>Centralized Knowledge</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        A structured knowledge base improved consistency and accuracy across employee responses.
                      </span>
                    </div>
                  </div>
                </div>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#475467" }}>
                  By automating repetitive query handling and simplifying HR workflows, the solution helped the HR team operate with greater speed, consistency, and efficiency.
                </p>
              </section>
              <div data-cssec="" style={{ position: "relative", overflow: "hidden", marginTop: "8px", padding: "32px", borderRadius: "26px", background: "#101A28", color: "#fff", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ position: "absolute", width: "360px", height: "360px", right: "-120px", top: "-180px", borderRadius: "50%", background: "radial-gradient(circle,rgba(250,123,32,.35),rgba(250,123,32,0) 65%)" }} />
                <h3 style={{ position: "relative", margin: "0", fontSize: "clamp(24px,2.6vw,30px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1.15" }}>
                  {"Ready to Automate What "}
                  <span style={{ color: "#FA7B20" }}>Slows Your Team Down?</span>
                </h3>
                <p style={{ position: "relative", margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#C3CAD5" }}>
                  From intelligent assistants to workflow automation, eMburc helps businesses turn repetitive processes into smarter, more efficient systems.
                </p>
                <button className="dc-hover-16zqy62" type="button" onClick={v.csTalk} style={{ position: "relative", alignSelf: "flex-start", whiteSpace: "nowrap", height: "50px", padding: "0 24px", borderRadius: "999px", background: "#FF6B00", color: "#202733", border: "none", fontSize: "15px", fontWeight: "500", cursor: "pointer", transition: "transform 250ms" }}>
                  {"Let's Talk →"}
                </button>
              </div>
            </div>
          </div>
          <div data-csdrawer="1" role="dialog" aria-modal="true" aria-hidden={v.csH?.i1} aria-label="Case study: AI-Powered Threat Protection" style={{ position: "absolute", top: "0", right: "0", bottom: "0", width: "min(760px,100%)", background: "#fff", color: "#202733", boxShadow: "-24px 0 64px rgba(16,26,40,.25)", transform: `translateX(${v.csX?.i1 ?? ""})`, transition: "transform 600ms cubic-bezier(0.22,1,0.36,1)", overflowY: "auto" }}>
            <div style={{ position: "sticky", top: "0", zIndex: "2", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "16px clamp(20px,4vw,44px)", background: "rgba(255,255,255,.92)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid #EEF0F4" }}>
              <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                CASE STUDY · CYBERSECURITY
              </span>
              <button className="dc-hover-sjlfp7" type="button" onClick={v.csClose} aria-label="Close case study" style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #E7EAF0", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 250ms,transform 300ms" }}>
                <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "#202733", strokeWidth: "2", strokeLinecap: "round" }}>
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div style={{ position: "relative", height: "260px", overflow: "hidden", background: "#101A28" }}>
              <img src="/images/stock/photo-1550751827-4bd374c3f58b.jpg" alt="Security code on a dark screen" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: ".7" }} />
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(16,26,40,.1),rgba(16,26,40,.85))" }} />
              <span style={{ position: "absolute", left: "clamp(20px,4vw,44px)", bottom: "22px", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.2)", fontSize: "13px", color: "#fff" }}>
                AI-Powered Threat Protection
              </span>
            </div>
            <div style={{ padding: "32px clamp(20px,4vw,44px) 44px", display: "flex", flexDirection: "column" }}>
              <div data-cssec="" style={{ display: "flex", flexDirection: "column", gap: "16px", paddingBottom: "32px" }}>
                <h2 style={{ margin: "0", fontSize: "clamp(28px,3.4vw,38px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.1" }}>
                  {"Strengthening Cybersecurity with "}
                  <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    AI-Powered Protection
                  </span>
                </h2>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#667085" }}>
                  AI is helping businesses strengthen their cybersecurity by enabling faster threat identification, automated responses, and continuous monitoring. For small and mid-sized businesses, intelligent security solutions can provide stronger protection without requiring large enterprise-level security teams.
                </p>
              </div>
              <section data-cssec="" style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "36px 0", borderTop: "1px solid #E7EAF0" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                  <span style={{ width: "18px", height: "1.5px", background: "#FA7B20" }} />
                  KEY FIGURES
                </span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: "10px" }}>
                    <div style={{ padding: "20px", borderRadius: "20px", background: "#101A28", color: "#fff", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontSize: "clamp(32px,3.6vw,42px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                        200 days
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#C3CAD5" }}>
                        faster breach detection, helping save approximately £10,000 per incident
                      </span>
                    </div>
                    <div style={{ padding: "20px", borderRadius: "20px", background: "#F7F8FA", color: "#202733", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontSize: "clamp(32px,3.6vw,42px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                        <span data-cscount="426">426</span>
                        %
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        ROI with £2.1 million in savings over 3 years through AI-powered cybersecurity
                      </span>
                    </div>
                    <div style={{ padding: "20px", borderRadius: "20px", background: "#F7F8FA", color: "#202733", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontSize: "clamp(32px,3.6vw,42px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                        <span data-cscount="20">20</span>
                        %
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        increase in security-team productivity through AI automation
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              <section data-cssec="" style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "36px 0", borderTop: "1px solid #E7EAF0" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                  <span style={{ width: "18px", height: "1.5px", background: "#FA7B20" }} />
                  AI USE CASES IN CYBERSECURITY
                </span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "10px", paddingTop: "4px" }}>
                    <div className="dc-hover-1sghl9h" style={{ padding: "18px", borderRadius: "18px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "6px", transition: "transform 300ms,background 300ms" }}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>{"Threat Detection & Prevention"}</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        AI continuously analyses network activity and user behaviour to identify suspicious patterns and potential threats earlier, helping security teams respond faster.
                      </span>
                    </div>
                    <div className="dc-hover-1sghl9h" style={{ padding: "18px", borderRadius: "18px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "6px", transition: "transform 300ms,background 300ms" }}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>{"Malware & Phishing Detection"}</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        Identify suspicious files, messages, links, and activities before they become larger security incidents.
                      </span>
                    </div>
                    <div className="dc-hover-1sghl9h" style={{ padding: "18px", borderRadius: "18px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "6px", transition: "transform 300ms,background 300ms" }}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>Automated Incident Response</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        Automate repetitive response actions to reduce the time between identifying a threat and taking corrective action.
                      </span>
                    </div>
                    <div className="dc-hover-1sghl9h" style={{ padding: "18px", borderRadius: "18px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "6px", transition: "transform 300ms,background 300ms" }}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>Security Operations Automation</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        Support security teams by automating monitoring, alert handling, and routine security operations.
                      </span>
                    </div>
                    <div className="dc-hover-1sghl9h" style={{ padding: "18px", borderRadius: "18px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "6px", transition: "transform 300ms,background 300ms" }}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>Endpoint Protection</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        Monitor devices and endpoints for unusual activity and potential security risks.
                      </span>
                    </div>
                    <div className="dc-hover-1sghl9h" style={{ padding: "18px", borderRadius: "18px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "6px", transition: "transform 300ms,background 300ms" }}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>{"Anomaly & Insider Threat Monitoring"}</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        Identify unusual behaviour and activity that may indicate compromised accounts or insider threats.
                      </span>
                    </div>
                    <div className="dc-hover-1sghl9h" style={{ padding: "18px", borderRadius: "18px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "6px", transition: "transform 300ms,background 300ms" }}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>Cyber Threat Intelligence</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        Analyse threat data to provide security teams with better visibility into emerging risks.
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              <div data-cssec="" style={{ position: "relative", overflow: "hidden", marginTop: "8px", padding: "32px", borderRadius: "26px", background: "#101A28", color: "#fff", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ position: "absolute", width: "360px", height: "360px", right: "-120px", top: "-180px", borderRadius: "50%", background: "radial-gradient(circle,rgba(250,123,32,.35),rgba(250,123,32,0) 65%)" }} />
                <h3 style={{ position: "relative", margin: "0", fontSize: "clamp(24px,2.6vw,30px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1.15" }}>
                  {"Ready to Strengthen Your "}
                  <span style={{ color: "#FA7B20" }}>Security with AI?</span>
                </h3>
                <p style={{ position: "relative", margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#C3CAD5" }}>
                  Protect your business with intelligent cybersecurity solutions designed to detect threats faster, automate response, and improve security-team efficiency.
                </p>
                <button className="dc-hover-16zqy62" type="button" onClick={v.csTalk} style={{ position: "relative", alignSelf: "flex-start", whiteSpace: "nowrap", height: "50px", padding: "0 24px", borderRadius: "999px", background: "#FF6B00", color: "#202733", border: "none", fontSize: "15px", fontWeight: "500", cursor: "pointer", transition: "transform 250ms" }}>
                  {"Let's Talk →"}
                </button>
              </div>
            </div>
          </div>
          <div data-csdrawer="2" role="dialog" aria-modal="true" aria-hidden={v.csH?.i2} aria-label="Case study: AI-Powered Travel Experiences" style={{ position: "absolute", top: "0", right: "0", bottom: "0", width: "min(760px,100%)", background: "#fff", color: "#202733", boxShadow: "-24px 0 64px rgba(16,26,40,.25)", transform: `translateX(${v.csX?.i2 ?? ""})`, transition: "transform 600ms cubic-bezier(0.22,1,0.36,1)", overflowY: "auto" }}>
            <div style={{ position: "sticky", top: "0", zIndex: "2", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "16px clamp(20px,4vw,44px)", background: "rgba(255,255,255,.92)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid #EEF0F4" }}>
              <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                {"CASE STUDY · TRAVEL & TOURISM"}
              </span>
              <button className="dc-hover-sjlfp7" type="button" onClick={v.csClose} aria-label="Close case study" style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #E7EAF0", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 250ms,transform 300ms" }}>
                <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "#202733", strokeWidth: "2", strokeLinecap: "round" }}>
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div style={{ position: "relative", height: "260px", overflow: "hidden", background: "#101A28" }}>
              <img src="/images/stock/photo-1488646953014-85cb44e25828.jpg" alt="Traveller planning a trip with a map" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: ".7" }} />
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(16,26,40,.1),rgba(16,26,40,.85))" }} />
              <span style={{ position: "absolute", left: "clamp(20px,4vw,44px)", bottom: "22px", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.2)", fontSize: "13px", color: "#fff" }}>
                AI-Powered Travel Experiences
              </span>
            </div>
            <div style={{ padding: "32px clamp(20px,4vw,44px) 44px", display: "flex", flexDirection: "column" }}>
              <div data-cssec="" style={{ display: "flex", flexDirection: "column", gap: "16px", paddingBottom: "32px" }}>
                <h2 style={{ margin: "0", fontSize: "clamp(28px,3.4vw,38px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.1" }}>
                  {"Reimagining Travel "}
                  <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    Experiences with AI
                  </span>
                </h2>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#667085" }}>
                  AI is changing the travel and tourism industry by enabling more personalised customer experiences, streamlining operations, and creating new opportunities for revenue growth. For growing travel businesses, AI can provide capabilities that were previously available mainly to larger organisations.
                </p>
              </div>
              <section data-cssec="" style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "36px 0", borderTop: "1px solid #E7EAF0" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                  <span style={{ width: "18px", height: "1.5px", background: "#FA7B20" }} />
                  KEY FIGURES
                </span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: "10px" }}>
                    <div style={{ padding: "20px", borderRadius: "20px", background: "#101A28", color: "#fff", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontSize: "clamp(32px,3.6vw,42px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                        £2.84 Billion
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#C3CAD5" }}>
                        projected generative AI travel market growth by 2032, at an 18.94% CAGR
                      </span>
                    </div>
                    <div style={{ padding: "20px", borderRadius: "20px", background: "#F7F8FA", color: "#202733", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontSize: "clamp(32px,3.6vw,42px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                        <span data-cscount="10">10</span>
                        %
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        potential revenue increase for hotels using AI-powered pricing and revenue management
                      </span>
                    </div>
                    <div style={{ padding: "20px", borderRadius: "20px", background: "#F7F8FA", color: "#202733", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontSize: "clamp(32px,3.6vw,42px)", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                        30–50%
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        potential reduction in customer-service costs through AI chatbots
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              <section data-cssec="" style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "36px 0", borderTop: "1px solid #E7EAF0" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                  <span style={{ width: "18px", height: "1.5px", background: "#FA7B20" }} />
                  AI USE CASES IN TRAVEL
                </span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "10px", paddingTop: "4px" }}>
                    <div className="dc-hover-1sghl9h" style={{ padding: "18px", borderRadius: "18px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "6px", transition: "transform 300ms,background 300ms" }}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>Personalised Travel Recommendations</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        AI analyses traveller preferences, previous trips, and individual interests to suggest relevant destinations, itineraries, and activities.
                      </span>
                    </div>
                    <div className="dc-hover-1sghl9h" style={{ padding: "18px", borderRadius: "18px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "6px", transition: "transform 300ms,background 300ms" }}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>24/7 AI Virtual Assistants</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        Provide travellers with instant assistance for common questions, bookings, itinerary information, and support requests.
                      </span>
                    </div>
                    <div className="dc-hover-1sghl9h" style={{ padding: "18px", borderRadius: "18px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "6px", transition: "transform 300ms,background 300ms" }}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>Dynamic Pricing</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        Use demand, customer behaviour, market conditions, and other data to support more responsive pricing strategies.
                      </span>
                    </div>
                    <div className="dc-hover-1sghl9h" style={{ padding: "18px", borderRadius: "18px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "6px", transition: "transform 300ms,background 300ms" }}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>Automated Expense Management</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        Simplify expense tracking and management by automating repetitive financial and administrative tasks.
                      </span>
                    </div>
                    <div className="dc-hover-1sghl9h" style={{ padding: "18px", borderRadius: "18px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "6px", transition: "transform 300ms,background 300ms" }}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>Predictive Fleet Maintenance</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        Use operational and equipment data to identify potential maintenance requirements before they become larger issues.
                      </span>
                    </div>
                    <div className="dc-hover-1sghl9h" style={{ padding: "18px", borderRadius: "18px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "6px", transition: "transform 300ms,background 300ms" }}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>Real-Time Itinerary Optimisation</span>
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                        Analyse changing conditions and traveller requirements to help optimise routes, schedules, and travel plans.
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              <div data-cssec="" style={{ position: "relative", overflow: "hidden", marginTop: "8px", padding: "32px", borderRadius: "26px", background: "#101A28", color: "#fff", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ position: "absolute", width: "360px", height: "360px", right: "-120px", top: "-180px", borderRadius: "50%", background: "radial-gradient(circle,rgba(250,123,32,.35),rgba(250,123,32,0) 65%)" }} />
                <h3 style={{ position: "relative", margin: "0", fontSize: "clamp(24px,2.6vw,30px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1.15" }}>
                  {"Ready to Accelerate Your "}
                  <span style={{ color: "#FA7B20" }}>Travel Business with AI?</span>
                </h3>
                <p style={{ position: "relative", margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#C3CAD5" }}>
                  From personalised experiences to smarter operations, AI can help travel businesses improve efficiency, reduce costs, and create more relevant customer journeys.
                </p>
                <button className="dc-hover-16zqy62" type="button" onClick={v.csTalk} style={{ position: "relative", alignSelf: "flex-start", whiteSpace: "nowrap", height: "50px", padding: "0 24px", borderRadius: "999px", background: "#FF6B00", color: "#202733", border: "none", fontSize: "15px", fontWeight: "500", cursor: "pointer", transition: "transform 250ms" }}>
                  {"Let's Talk →"}
                </button>
              </div>
            </div>
          </div>
        </div>
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
              <a className="dc-hover-1eiwf5n" href="#build" style={{ color: "#E7EAF0", textDecoration: "none", lineHeight: "1.45", transition: "color 200ms" }}>
                Digital Product Development
              </a>
              <a className="dc-hover-1eiwf5n" href="#automate" style={{ color: "#E7EAF0", textDecoration: "none", lineHeight: "1.45", transition: "color 200ms" }}>
                {"AI & Automation"}
              </a>
              <a className="dc-hover-1eiwf5n" href="#modernize" style={{ color: "#E7EAF0", textDecoration: "none", lineHeight: "1.45", transition: "color 200ms" }}>
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
