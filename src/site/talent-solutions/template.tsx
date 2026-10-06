// Generated from "Talent Solutions.dc.html" by scripts/convert-dc.mjs, then maintained by hand.
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
            <a href="/talent-solutions" aria-current="page" onMouseEnter={v.menuClose} style={{ position: "relative", display: "flex", alignItems: "center", height: "72px", textDecoration: "none", color: "#FF6B00" }}>
              Talent Solutions
              <span style={{ position: "absolute", left: "0", right: "0", bottom: "-1px", height: "2px", background: "#FF6B00" }} />
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
          <MobileMenu active="/talent-solutions" onTalk={v.talkOpen} />
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
        <section data-screen-label="Hero" style={{ position: "relative", padding: "128px 0 0", overflow: "hidden" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,480px),1fr))", gap: "48px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <h1 style={{ margin: "0", fontWeight: "500", fontSize: "clamp(40px,5vw,64px)", lineHeight: "1.02", letterSpacing: "-0.045em" }}>
                {" "}
                <span style={{ display: "block", overflow: "hidden", paddingBottom: ".04em" }}>
                  <span data-rise="" data-d="80" style={{ display: "block" }}>Great Engineers.</span>
                </span>
                {" "}
                <span style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}>
                  <span data-rise="" data-d="180" style={{ display: "block", background: "linear-gradient(90deg,#FF6B00,#FFB52E)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    Zero Hiring Drama.
                  </span>
                </span>
                {" "}
              </h1>
              <p data-reveal="" data-d="260" style={{ margin: "0", fontSize: "19px", lineHeight: "1.5", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                {"Hire vetted "}
                <span style={{ display: "inline-flex", overflow: "hidden", height: "34px", alignItems: "center", padding: "0 12px", borderRadius: "8px", background: "#101A28" }}>
                  <span data-rot="" style={{ display: "block", fontWeight: "600", color: "#fff", whiteSpace: "nowrap" }}>
                    {v.rotWord}
                  </span>
                </span>
                {" in 72 hours."}
              </p>
              <p data-reveal="" data-d="320" style={{ margin: "0", maxWidth: "500px", fontSize: "17px", lineHeight: "1.6", color: "#667085" }}>
                Tell us who you need. Meet senior talent in days. Ship together in two weeks.
              </p>
              <div data-reveal="" data-d="380" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".06em", color: "#667085" }}>
                  I need a…
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {(v.heroChips || []).map((c: any, $index: number) => (
                    <Fragment key={$index}>
                      {" "}
                      <button type="button" onClick={c?.pick} aria-pressed={c?.pressed} style={{ whiteSpace: "nowrap", height: "38px", padding: "0 14px", borderRadius: "999px", border: `1px solid ${c?.bd ?? ""}`, background: c?.bg, color: c?.fg, fontSize: "14px", cursor: "pointer", transition: "all 200ms" }}>
                        {c?.label}
                      </button>
                      {" "}
                    </Fragment>
                  ))}
                </div>
              </div>
              <div data-reveal="" data-d="440" style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", marginTop: "4px" }}>
                <button className="dc-hover-ebbh28" type="button" onClick={v.showEngineers} style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "52px", padding: "0 24px", borderRadius: "12px", background: "#FF6B00", color: "#202733", border: "none", fontSize: "15px", fontWeight: "500", cursor: "pointer", transition: "transform 250ms,box-shadow 250ms" }}>
                  Show me engineers →
                </button>
                <a href="#models" style={{ fontSize: "15px", color: "#202733", textDecoration: "underline", textDecorationColor: "#98A2B3", textUnderlineOffset: "5px" }}>
                  See hiring models ↓
                </a>
              </div>
            </div>
            <div data-reveal="" data-d="150" style={{ position: "relative", height: "500px", borderRadius: "28px", overflow: "hidden", background: "#E7EAF0" }}>
              {" "}
              <img data-kb="" src="/images/stock/photo-1531482615713-2afd69097998.jpg" alt="Engineers collaborating around a laptop" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              {" "}
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(16,26,40,0) 55%,rgba(16,26,40,.55))" }} />
              {" "}
              <span style={{ position: "absolute", left: "24px", bottom: "22px", display: "flex", alignItems: "center", gap: "8px", font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#fff" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#12B76A" }} />
                VETTED ENGINEERS · SHORTLIST IN 72 HRS
              </span>
              {" "}
            </div>
          </div>
          <div style={{ maxWidth: "1240px", margin: "48px auto 0", padding: "0 32px" }}>
            <div data-reveal="" style={{ display: "flex", flexWrap: "wrap", gap: "12px 48px", padding: "22px 0", borderTop: "1px solid #E7EAF0", borderBottom: "1px solid #E7EAF0" }}>
              <span style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontSize: "24px", fontWeight: "500", letterSpacing: "-0.02em" }}>72 hrs</span>
                <span style={{ fontSize: "14px", color: "#667085" }}>to shortlist</span>
              </span>
              <span style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontSize: "24px", fontWeight: "500", letterSpacing: "-0.02em" }}>500+</span>
                <span style={{ fontSize: "14px", color: "#667085" }}>engineers in our network</span>
              </span>
              <span style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontSize: "24px", fontWeight: "500", letterSpacing: "-0.02em" }}>2 wks</span>
                <span style={{ fontSize: "14px", color: "#667085" }}>to start</span>
              </span>
            </div>
          </div>
        </section>
        <section id="roles" data-screen-label="Hire by role" style={{ scrollMarginTop: "72px", padding: "104px 0" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#667085" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#98A2B3" }} />
                  Hire by Role
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em" }}>
                  Pick a Role. Meet Your Shortlist.
                </h2>
              </div>
              <p data-reveal="" data-d="120" style={{ margin: "0", maxWidth: "400px", fontSize: "15px", lineHeight: "1.6", color: "#667085" }}>
                Every role card shows what the engineer does, key skills, and a Hire button.
              </p>
            </div>
            <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "20px", alignItems: "stretch" }}>
              <div onMouseEnter={v.roleHold} style={{ display: "flex", flexDirection: "column", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", overflow: "hidden" }}>
                {(v.roles || []).map((r: any, $index: number) => (
                  <Fragment key={$index}>
                    {" "}
                    <button type="button" onMouseEnter={r?.pick} onClick={r?.pick} aria-pressed={r?.pressed} style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr auto", gap: "14px", alignItems: "center", padding: "16px 22px", border: "none", borderBottom: "1px solid #EEF0F4", background: r?.bg, textAlign: "left", cursor: "pointer", transition: "background 250ms" }}>
                      <span style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "3px", background: "#FF6B00", transform: `scaleY(${r?.bar ?? ""})`, transition: "transform 300ms cubic-bezier(0.22,1,0.36,1)" }} />
                      <span style={{ fontSize: "17px", fontWeight: r?.fw, letterSpacing: "-0.01em", color: "#202733" }}>{r?.name}</span>
                      <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: r?.arrC, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", transform: `translateX(${r?.arrX ?? ""})`, transition: "transform 300ms,stroke 300ms" }}>
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                    {" "}
                  </Fragment>
                ))}
                <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", padding: "16px 22px", background: "#F7F8FA" }}>
                  <span style={{ fontSize: "15px", color: "#667085" }}>{"Don't see your role?"}</span>
                  <button className="dc-hover-ebbh28" type="button" onClick={v.talkOpen} style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "44px", padding: "0 18px", borderRadius: "10px", background: "#FF6B00", color: "#202733", border: "none", fontSize: "14px", fontWeight: "500", cursor: "pointer", transition: "transform 250ms,box-shadow 250ms" }}>
                    Tell us what you need →
                  </button>
                </div>
              </div>
              <div style={{ position: "relative", minHeight: "460px", borderRadius: "20px", background: "#101A28", color: "#fff", overflow: "hidden", display: "flex" }}>
                <div data-blob="c" style={{ position: "absolute", width: "420px", height: "420px", right: "-120px", top: "-140px", borderRadius: "50%", background: "radial-gradient(circle,rgba(250,123,32,.28),rgba(250,123,32,0) 65%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", inset: "0", backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
                <div data-roledetail="" style={{ position: "relative", flex: "1", padding: "40px", display: "flex", flexDirection: "column", gap: "22px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
                    <span style={{ width: "64px", height: "64px", borderRadius: "18px", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.14)", display: "flex", alignItems: "center", justifyContent: "center", font: "600 18px/1 'Geist Mono',monospace", color: "#FFB52E" }}>
                      {v.cur?.abbr}
                    </span>
                  </div>
                  <h3 style={{ margin: "18px 0 0", fontSize: "clamp(28px,3vw,40px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.08" }}>
                    {v.cur?.name}
                  </h3>
                  <p style={{ margin: "0", maxWidth: "440px", fontSize: "18px", lineHeight: "1.55", color: "#C3CAD5" }}>
                    {v.cur?.what}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#98A2B3" }}>
                      KEY SKILLS
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {(v.cur?.skills || []).map((sk: any, $index: number) => (
                        <Fragment key={$index}>
                          {" "}
                          <span style={{ padding: "8px 14px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.14)", fontSize: "14px" }}>
                            {sk}
                          </span>
                          {" "}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginTop: "auto", paddingTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", borderTop: "1px solid rgba(255,255,255,.1)" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#C3CAD5" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#12B76A", boxShadow: "0 0 0 4px rgba(18,183,106,.18)" }} />
                      Shortlist in 72 hrs
                    </span>
                    <button className="dc-hover-ebbhtq" type="button" onClick={v.cur?.hire} style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "50px", padding: "0 24px", borderRadius: "12px", background: "#FF6B00", color: "#202733", border: "none", fontSize: "15px", fontWeight: "500", cursor: "pointer", transition: "transform 250ms,box-shadow 250ms" }}>
                      Hire →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Talent on tap" style={{ padding: "104px 0", background: "#F7F8FA" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#667085" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#98A2B3" }} />
                  Talent on Tap
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em", textWrap: "balance" }}>
                  The Stack You Use. The People Who Know It.
                </h2>
              </div>
              <span data-reveal="" data-d="120" style={{ fontSize: "15px", color: "#667085" }}>
                {v.tapTotal}{" technologies across "}{v.tapCount}{" practice areas"}
              </span>
            </div>
            <div data-reveal="" style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
              <div onMouseEnter={v.stackHold} style={{ flex: "1 1 260px", maxWidth: "320px", minWidth: "min(100%,260px)", display: "flex", flexDirection: "column", gap: "8px" }}>
                {(v.stackTabs || []).map((c: any, $index: number) => (
                  <Fragment key={$index}>
                    {" "}
                    <button type="button" onClick={c?.pick} aria-pressed={c?.pressed} style={{ position: "relative", overflow: "hidden", display: "flex", alignItems: "center", gap: "14px", minHeight: "60px", padding: "0 16px", borderRadius: "14px", border: `1px solid ${c?.bd ?? ""}`, background: c?.bg, color: c?.fg, textAlign: "left", cursor: "pointer", transition: "background 300ms,color 300ms,border-color 300ms" }}>
                      <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "10px", background: c?.icBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px", fill: "none", stroke: c?.icFg, strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                          <path d={c?.icon} />
                        </svg>
                      </span>
                      <span style={{ flex: "1", fontSize: "16px", fontWeight: "600" }}>{c?.label}</span>
                      <span style={{ font: "500 11px/1 'Geist Mono',monospace", opacity: ".6" }}>{c?.count}</span>
                      <span data-catbar={c?.key} style={{ position: "absolute", left: "0", bottom: "0", height: "3px", width: "100%", background: "#FF6B00", transformOrigin: "left", transform: "scaleX(0)" }} />
                    </button>
                    {" "}
                  </Fragment>
                ))}
              </div>
              <div data-tappanel="" style={{ flex: "3 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
                {(v.tapGroups || []).map((g: any, $index: number) => (
                  <Fragment key={$index}>
                    <div data-orb="" style={{ padding: "24px 26px", borderRadius: "18px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "18px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingBottom: "14px", borderBottom: "1px solid #EEF0F4" }}>
                        <h3 style={{ margin: "0", fontSize: "19px", fontWeight: "600", letterSpacing: "-0.015em" }}>{g?.name}</h3>
                        <span style={{ font: "500 11px/1 'Geist Mono',monospace", color: "#98A2B3" }}>{g?.count}</span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(104px,1fr))", gap: "8px" }}>
                        {(g?.items || []).map((t: any, $index: number) => (
                          <Fragment key={$index}>
                            <div className="dc-hover-1tatxv9" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "14px 6px", borderRadius: "14px", textAlign: "center", transition: "background 250ms,transform 300ms cubic-bezier(0.22,1,0.36,1)" }}>
                              <span style={{ position: "relative", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <img data-techlogo="" data-logo={t?.logo} alt={`${t?.n ?? ""} logo`} style={{ width: "40px", height: "40px", objectFit: "contain", display: "block" }} />
                                <span data-fallback="" style={{ display: "none", position: "absolute", inset: "0", borderRadius: "12px", background: "#101A28", color: "#fff", alignItems: "center", justifyContent: "center", font: "600 12px/1 'Geist Mono',monospace" }}>
                                  {t?.i}
                                </span>
                              </span>
                              <span style={{ fontSize: "13px", fontWeight: "600", lineHeight: "1.3" }}>{t?.n}</span>
                            </div>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="models" data-screen-label="Pick your setup" style={{ scrollMarginTop: "72px", padding: "104px 0" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textAlign: "center" }}>
              <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#667085" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#98A2B3" }} />
                Pick Your Setup
                <span style={{ width: "20px", height: "1.5px", background: "#98A2B3" }} />
              </div>
              <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em", textWrap: "balance" }}>
                Three Ways to Hire. Zero Recruiting Headaches.
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "20px", alignItems: "stretch" }}>
              {(v.setups || []).map((m: any, $index: number) => (
                <Fragment key={$index}>
                  <div className="dc-hover-16zu132" data-reveal="" style={{ padding: "28px", borderRadius: "22px", background: m?.bg, color: m?.fg, border: `1px solid ${m?.bd ?? ""}`, boxShadow: m?.sh, display: "flex", flexDirection: "column", gap: "18px", transition: "transform 300ms cubic-bezier(0.22,1,0.36,1)" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <h3 style={{ margin: "0", fontSize: "22px", fontWeight: "600", letterSpacing: "-0.02em" }}>{m?.name}</h3>
                      <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: m?.mute }}>{m?.line}</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", borderRadius: "12px", background: m?.tbl, padding: "4px 16px" }}>
                      {(m?.rows || []).map((row: any, $index: number) => (
                        <Fragment key={$index}>
                          <div style={{ display: "grid", gridTemplateColumns: "104px 1fr", gap: "12px", padding: "11px 0", borderBottom: `1px solid ${m?.line2 ?? ""}`, fontSize: "14px", lineHeight: "1.45" }}>
                            <span style={{ color: m?.mute }}>{row?.k}</span>
                            <span>{row?.v}</span>
                          </div>
                        </Fragment>
                      ))}
                    </div>
                    <button className="dc-hover-16zqy62" type="button" onClick={m?.pick} style={{ marginTop: "auto", height: "48px", borderRadius: "10px", border: m?.btnBd, background: m?.btnBg, color: "#202733", fontSize: "15px", fontWeight: "500", cursor: "pointer", transition: "transform 250ms" }}>
                      {m?.cta}
                    </button>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section data-screen-label="How hiring works" style={{ padding: "104px 0", background: "#101A28", color: "#fff" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#C3CAD5" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#FF6B00" }} />
                  How Hiring Works
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em" }}>
                  From Brief to Build in Four Steps.
                </h2>
              </div>
            </div>
            <div data-reveal="" style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: "0", right: "0", top: "23px", height: "2px", background: "rgba(255,255,255,.12)" }}>
                <div style={{ height: "100%", width: v.stepW, background: "linear-gradient(90deg,#FF6B00,#FFB52E)", transition: "width 800ms cubic-bezier(0.22,1,0.36,1)" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,230px),1fr))", gap: "24px" }}>
                {(v.steps || []).map((s: any, $index: number) => (
                  <Fragment key={$index}>
                    {" "}
                    <button type="button" onMouseEnter={s?.go} onClick={s?.go} style={{ textAlign: "left", padding: "0", background: "none", border: "none", color: "#fff", cursor: "pointer", display: "flex", flexDirection: "column", gap: "14px" }}>
                      <span style={{ width: "48px", height: "48px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", font: "600 14px/1 'Geist Mono',monospace", background: s?.cBg, color: s?.cFg, border: `1.5px solid ${s?.cBd ?? ""}`, transition: "all 400ms" }} />
                      <span style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                        <span style={{ fontSize: "20px", fontWeight: "600", letterSpacing: "-0.015em" }}>{s?.title}</span>
                        <span style={{ padding: "4px 9px", borderRadius: "999px", background: "rgba(255,255,255,.08)", font: "500 11px/1 'Geist Mono',monospace", color: "#FFB52E" }}>
                          {s?.when}
                        </span>
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "1.6", color: "#C3CAD5" }}>{s?.text}</span>
                    </button>
                    {" "}
                  </Fragment>
                ))}
              </div>
            </div>
            <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "18px 22px", borderRadius: "16px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", fontSize: "16px", lineHeight: "1.5" }}>
              <span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "10px", background: "rgba(255,107,0,.16)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FF8A33", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </span>
              <span>
                <strong style={{ fontWeight: "600" }}>Safety net:</strong>
                {" "}
                <span style={{ color: "#C3CAD5" }}>{"Not the right fit? We'll replace them free within 30 days."}</span>
              </span>
            </div>
          </div>
        </section>
        <section data-screen-label="How we vet" style={{ padding: "104px 0" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textAlign: "center" }}>
              <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#667085" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#98A2B3" }} />
                How We Vet
                <span style={{ width: "20px", height: "1.5px", background: "#98A2B3" }} />
              </div>
              <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em" }}>
                Only the Top 5% Make the Cut.
              </h2>
            </div>
            <div data-funnel="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,230px),1fr))", gap: "12px", alignItems: "center" }}>
              {(v.vet || []).map((v: any, $index: number) => (
                <Fragment key={$index}>
                  <div data-vet="" style={{ height: v?.h, borderRadius: "18px", background: v?.bg, color: v?.fg, border: `1px solid ${v?.bd ?? ""}`, padding: "22px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                    <span style={{ fontSize: "18px", fontWeight: "600" }}>{v?.title}</span>
                    <span style={{ fontSize: "14px", lineHeight: "1.5", color: v?.mute }}>{v?.text}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section data-screen-label="Comparison" style={{ padding: "104px 0", background: "#F7F8FA" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textAlign: "center" }}>
              <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#667085" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#98A2B3" }} />
                eMburc vs In-House vs Freelancers
                <span style={{ width: "20px", height: "1.5px", background: "#98A2B3" }} />
              </div>
              <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em" }}>
                The Honest Comparison.
              </h2>
            </div>
            <div data-reveal="" style={{ overflowX: "auto", borderRadius: "20px", border: "1px solid #E7EAF0", background: "#fff" }}>
              <div style={{ minWidth: "760px", display: "grid", gridTemplateColumns: "1.1fr 1.2fr 1fr 1fr" }}>
                <span style={{ padding: "18px 20px", borderBottom: "1px solid #E7EAF0" }} />
                <span style={{ padding: "18px 20px", fontSize: "15px", fontWeight: "600", background: "#101A28", color: "#fff" }}>
                  eMburc
                </span>
                <span style={{ padding: "18px 20px", fontSize: "15px", fontWeight: "600", borderBottom: "1px solid #E7EAF0" }}>
                  In-house hiring
                </span>
                <span style={{ padding: "18px 20px", fontSize: "15px", fontWeight: "600", borderBottom: "1px solid #E7EAF0" }}>
                  Freelancers
                </span>
                {(v.compare || []).map((c: any, $index: number) => (
                  <Fragment key={$index}>
                    {" "}
                    <span style={{ padding: "16px 20px", fontSize: "14px", color: "#667085", borderBottom: "1px solid #E7EAF0" }}>
                      {c?.k}
                    </span>
                    {" "}
                    <span style={{ padding: "16px 20px", fontSize: "14px", fontWeight: "500", background: "#F7F8FA", borderBottom: "1px solid #E7EAF0", display: "flex", alignItems: "center", gap: "8px" }}>
                      <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", fill: "none", stroke: "#FF6B00", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {c?.e}
                    </span>
                    {" "}
                    <span style={{ padding: "16px 20px", fontSize: "14px", color: "#667085", borderBottom: "1px solid #E7EAF0" }}>
                      {c?.i}
                    </span>
                    {" "}
                    <span style={{ padding: "16px 20px", fontSize: "14px", color: "#667085", borderBottom: "1px solid #E7EAF0" }}>
                      {c?.f}
                    </span>
                    {" "}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="CTA banner" style={{ padding: "104px 0" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px" }}>
            <div data-reveal="" style={{ position: "relative", overflow: "hidden", padding: "56px", borderRadius: "24px", background: "#101A28", color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "28px", flexWrap: "wrap" }}>
              <div data-blob="d" style={{ position: "absolute", width: "480px", height: "480px", right: "-120px", top: "-220px", borderRadius: "50%", background: "radial-gradient(circle,rgba(250,123,32,.3),rgba(250,123,32,0) 65%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "10px" }}>
                <h2 style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em" }}>
                  Your Next Hire Is 72 Hours Away.
                </h2>
                <p style={{ margin: "0", fontSize: "17px", color: "#C3CAD5" }}>
                  {"Tell us who you need. We'll send the shortlist."}
                </p>
              </div>
              <div style={{ position: "relative", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button className="dc-hover-16zqy62" type="button" onClick={v.goContact} style={{ height: "50px", padding: "0 22px", borderRadius: "10px", border: "none", background: "#FF6B00", color: "#202733", fontSize: "15px", fontWeight: "500", cursor: "pointer", transition: "transform 250ms" }}>
                  Hire engineers
                </button>
                <button className="dc-hover-4vnbz7" type="button" onClick={v.talkOpen} style={{ height: "50px", padding: "0 22px", borderRadius: "10px", border: "1.5px solid rgba(255,255,255,.4)", background: "transparent", color: "#fff", fontSize: "15px", fontWeight: "500", cursor: "pointer", transition: "background 250ms" }}>
                  Book a call →
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" data-screen-label="Contact" style={{ scrollMarginTop: "72px", padding: "104px 0", background: "#F7F8FA" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "48px", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#98A2B3" }} />
                {"LET'S TALK"}
              </div>
              <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(30px,3.8vw,48px)", lineHeight: "1.04", letterSpacing: "-0.04em" }}>
                Tell Us Who You Need.
              </h2>
              <div data-reveal="" data-d="140" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "24px", borderRadius: "16px", background: "#fff", border: "1px solid #E7EAF0" }}>
                <span style={{ fontSize: "15px", fontWeight: "600" }}>Why teams hire with eMburc:</span>
                {(v.whyList || []).map((w: any, $index: number) => (
                  <Fragment key={$index}>
                    {" "}
                    <span style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "15px" }}>
                      <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", fill: "none", stroke: "#202733", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {w}
                    </span>
                    {" "}
                  </Fragment>
                ))}
              </div>
            </div>
            <div data-reveal="" data-d="120" style={{ padding: "32px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", boxShadow: "0 12px 32px rgba(16,26,40,.06)" }}>
              {v.notSent ? (
                <>
                  <form onSubmit={v.submit} noValidate style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "14px" }}>
                      <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "500" }}>Full name *</span>
                        <input className="dc-focus-6go203" value={v.fName ?? ""} onChange={v.setFName} placeholder="Jane Smith" autoComplete="name" style={{ height: "46px", padding: "0 14px", borderRadius: "10px", border: `1px solid ${v.nameBd ?? ""}`, background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none" }} />
                      </label>
                      <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "500" }}>Work email *</span>
                        <input className="dc-focus-6go203" type="email" value={v.fEmail ?? ""} onChange={v.setFEmail} placeholder="you@company.com" autoComplete="email" style={{ height: "46px", padding: "0 14px", borderRadius: "10px", border: `1px solid ${v.emailBd ?? ""}`, background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none" }} />
                      </label>
                      <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "500" }}>Company</span>
                        <input className="dc-focus-6go203" value={v.fCompany ?? ""} onChange={v.setFCompany} placeholder="Company name" autoComplete="organization" style={{ height: "46px", padding: "0 14px", borderRadius: "10px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none" }} />
                      </label>
                      <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "500" }}>Phone / WhatsApp</span>
                        <input className="dc-focus-6go203" type="tel" value={v.fPhone ?? ""} onChange={v.setFPhone} placeholder="+91 555 000 0000" autoComplete="tel" style={{ height: "46px", padding: "0 14px", borderRadius: "10px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none" }} />
                      </label>
                    </div>
                    <div data-rolefield="" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span style={{ fontSize: "13px", fontWeight: "500" }}>Role(s) needed *</span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", padding: v.rolesPad, borderRadius: "12px", border: `1px solid ${v.rolesBd ?? ""}` }}>
                        {(v.roleChips || []).map((c: any, $index: number) => (
                          <Fragment key={$index}>
                            {" "}
                            <button type="button" onClick={c?.toggle} aria-pressed={c?.pressed} style={{ whiteSpace: "nowrap", height: "34px", padding: "0 12px", borderRadius: "999px", border: `1px solid ${c?.bd ?? ""}`, background: c?.bg, color: c?.fg, fontSize: "13px", cursor: "pointer", transition: "all 200ms" }}>
                              {c?.label}
                            </button>
                            {" "}
                          </Fragment>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "14px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "500" }}>Number of engineers *</span>
                        <div style={{ display: "flex", gap: "6px", padding: "4px", borderRadius: "12px", background: "#F7F8FA", border: `1px solid ${v.countBd ?? ""}` }}>
                          {(v.countOpts || []).map((c: any, $index: number) => (
                            <Fragment key={$index}>
                              {" "}
                              <button type="button" onClick={c?.pick} aria-pressed={c?.pressed} style={{ flex: "1", height: "36px", borderRadius: "8px", border: "none", background: c?.bg, color: c?.fg, fontSize: "14px", fontWeight: "500", cursor: "pointer", transition: "background 200ms" }}>
                                {c?.label}
                              </button>
                              {" "}
                            </Fragment>
                          ))}
                        </div>
                      </div>
                      <label style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "500" }}>Hiring model</span>
                        <span style={{ position: "relative", display: "block" }}>
                          {" "}
                          <select value={v.fModel ?? ""} onChange={v.setFModel} style={{ width: "100%", height: "46px", padding: "0 40px 0 14px", borderRadius: "10px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none", appearance: "none", WebkitAppearance: "none", cursor: "pointer" }}>
                            <option value="">Select one</option>
                            <option>Staff Augmentation</option>
                            <option>Dedicated Team</option>
                            <option>Managed Team</option>
                            <option>Not sure</option>
                          </select>
                          {" "}
                          <svg viewBox="0 0 24 24" style={{ position: "absolute", right: "14px", top: "50%", width: "16px", height: "16px", marginTop: "-8px", fill: "none", stroke: "#202733", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", pointerEvents: "none" }}>
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                          {" "}
                        </span>
                      </label>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span style={{ fontSize: "13px", fontWeight: "500" }}>Start date</span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {(v.startOpts || []).map((c: any, $index: number) => (
                          <Fragment key={$index}>
                            {" "}
                            <button type="button" onClick={c?.pick} aria-pressed={c?.pressed} style={{ whiteSpace: "nowrap", height: "34px", padding: "0 14px", borderRadius: "999px", border: `1px solid ${c?.bd ?? ""}`, background: c?.bg, color: c?.fg, fontSize: "13px", cursor: "pointer", transition: "all 200ms" }}>
                              {c?.label}
                            </button>
                            {" "}
                          </Fragment>
                        ))}
                      </div>
                    </div>
                    <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontSize: "13px", fontWeight: "500" }}>Project details</span>
                      <textarea className="dc-focus-6go203" value={v.fDetails ?? ""} onChange={v.setFDetails} rows={3} placeholder="Stack, seniority, time zone, anything else we should know" style={{ padding: "12px 14px", borderRadius: "10px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", lineHeight: "1.5", color: "#202733", outline: "none", resize: "vertical", minHeight: "96px" }} />
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", cursor: "pointer" }}>
                      <input type="checkbox" checked={v.fConsent ?? false} onChange={v.setFConsent} style={{ width: "18px", height: "18px", accentColor: "#101A28", outline: v.consentOl }} />
                      <span>{"I agree to eMburc's "}<a href="/privacy-policy" style={{ color: "#202733" }}>Privacy Policy</a>{" *"}</span>
                    </label>
                    <button className="dc-hover-ebbh28" type="submit" style={{ height: "52px", borderRadius: "10px", background: "#FF6B00", color: "#202733", border: "none", fontSize: "15px", fontWeight: "500", cursor: "pointer", transition: "transform 250ms,box-shadow 250ms" }}>
                      Get my shortlist →
                    </button>
                    <span style={{ fontSize: "13px", color: "#667085", textAlign: "center" }}>No spam. No sales pressure.</span>
                    {v.fError ? (
                      <>
                        <span style={{ fontSize: "13px", color: "#C4320A", textAlign: "center" }}>
                          Please fill in the required fields marked *.
                        </span>
                      </>
                    ) : null}
                  </form>
                </>
              ) : null}
              {v.sent ? (
                <>
                  <div style={{ minHeight: "420px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px", textAlign: "center" }}>
                    <span style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 24 24" style={{ width: "28px", height: "28px", fill: "none", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-0.02em" }}>
                      Nice! Your shortlist is on its way. Expect it within 72 hrs.
                    </span>
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
