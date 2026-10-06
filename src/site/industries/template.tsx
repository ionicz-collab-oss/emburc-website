// Generated from "Industries.dc.html" by scripts/convert-dc.mjs, then maintained by hand.
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
            <a href="/industries" aria-current="page" onMouseEnter={v.menuClose} style={{ position: "relative", display: "flex", alignItems: "center", height: "72px", textDecoration: "none", color: "#FF6B00" }}>
              Industries
              <span style={{ position: "absolute", left: "0", right: "0", bottom: "-1px", height: "2px", background: "#FF6B00" }} />
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
          <MobileMenu active="/industries" onTalk={v.talkOpen} />
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
        <section data-screen-label="Industries hero" style={{ position: "relative", minHeight: "min(80vh,620px)", display: "flex", alignItems: "flex-end", overflow: "hidden", padding: "150px 0 72px", background: "#101A28", color: "#fff" }}>
          <img data-kb="" src="/images/stock/photo-1581091226825-a6a2a5aee158.jpg" alt="Engineer monitoring systems on a modern factory floor" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: ".5" }} />
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg,rgba(16,26,40,.96) 0%,rgba(16,26,40,.72) 50%,rgba(16,26,40,.3) 100%),linear-gradient(0deg,rgba(16,26,40,.85) 0%,rgba(16,26,40,0) 50%)" }} />
          <div style={{ position: "relative", width: "100%", maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "22px" }}>
            <nav data-reveal="" aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#C3CAD5" }}>
              <a className="dc-hover-1d5kcib" href="/" style={{ color: "#C3CAD5", textDecoration: "none" }}>Home</a>
              <span>›</span>
              <span style={{ color: "#fff" }}>Industries</span>
            </nav>
            <h1 style={{ margin: "0", maxWidth: "900px", fontWeight: "500", fontSize: "clamp(36px,4.8vw,62px)", lineHeight: "1.02", letterSpacing: "-0.045em" }}>
              {" "}
              <span style={{ display: "block", overflow: "hidden", paddingBottom: ".04em" }}>
                <span data-rise="" data-d="80" style={{ display: "block" }}>Software, AI and Talent</span>
              </span>
              {" "}
              <span style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}>
                <span data-rise="" data-d="180" style={{ display: "block" }}>
                  {"Solutions for "}
                  <span style={{ color: "#FA7B20" }}>Every Industry</span>
                </span>
              </span>
              {" "}
            </h1>
            <p data-reveal="" data-d="260" style={{ margin: "0", maxWidth: "540px", fontSize: "18px", lineHeight: "1.6", color: "#C3CAD5" }}>
              Websites, apps, AI, modernization and dedicated engineers, built around how your industry actually works.
            </p>
            <button className="dc-hover-ebbhtq" data-reveal="" data-d="340" type="button" onClick={v.talkOpen} style={{ alignSelf: "flex-start", whiteSpace: "nowrap", height: "52px", padding: "0 26px", borderRadius: "999px", background: "#FF6B00", color: "#202733", border: "none", fontSize: "15px", fontWeight: "500", cursor: "pointer", transition: "transform 250ms,box-shadow 250ms" }}>
              {"Let's Talk"}
            </button>
          </div>
        </section>
        <section data-screen-label="Intro" style={{ padding: "104px 0 64px" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
              <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                INDUSTRIES
                <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
              </div>
              <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(34px,4.6vw,60px)", lineHeight: "1.02", letterSpacing: "-0.045em", textWrap: "balance" }}>
                {"Every Industry Has Its Own Story. "}
                <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  We Speak Them All.
                </span>
              </h2>
              <p data-reveal="" data-d="140" style={{ margin: "0", maxWidth: "720px", fontSize: "18px", lineHeight: "1.65", color: "#475467", textWrap: "pretty" }}>
                {"A bank and a boutique hotel don't need the same software, or the same engineers. At eMburc, we learn how your industry runs, then bring the right mix: digital products that customers love, AI and automation that save time, modernization that fixes old systems, and dedicated talent to keep it all moving."}
              </p>
              <p data-reveal="" data-d="180" style={{ margin: "0", display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: "500" }}>
                {"Pick your industry and see what we build, automate, modernize and staff for it. "}
                <span data-bob="" style={{ display: "inline-block" }}>↓</span>
              </p>
            </div>
            <div data-reveal="" data-d="120" onMouseLeave={v.hovOff} style={{ display: "flex", gap: "10px", height: "400px", overflowX: "auto", scrollbarWidth: "none" }}>
              {(v.tiles || []).map((t: any, $index: number) => (
                <Fragment key={$index}>
                  {" "}
                  <a className={t?.flex === "4 1 0%" ? "ind-tile is-active" : "ind-tile"} href={t?.href} onMouseEnter={t?.on} onFocus={t?.on} style={{ position: "relative", flex: t?.flex, minWidth: "96px", borderRadius: "24px", overflow: "hidden", background: "#101A28", color: "#fff", textDecoration: "none", transition: "flex 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                    {" "}
                    <img data-lazy={t?.img} alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transform: `scale(${t?.sc ?? ""})`, transition: "transform 1200ms cubic-bezier(0.22,1,0.36,1)" }} />
                    {" "}
                    <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(16,26,40,.15) 30%,rgba(16,26,40,.92))", opacity: t?.shade, transition: "opacity 500ms" }} />
                    {" "}
                    <span style={{ position: "absolute", left: "20px", bottom: "24px", transform: "rotate(180deg)", writingMode: "vertical-rl", whiteSpace: "nowrap", fontSize: "17px", fontWeight: "600", opacity: t?.vOp, transition: "opacity 300ms" }}>
                      {t?.name}
                    </span>
                    {" "}
                    <span style={{ position: "absolute", left: "24px", right: "24px", bottom: "24px", display: "flex", flexDirection: "column", gap: "8px", opacity: t?.hOp, transform: `translateY(${t?.hY ?? ""})`, transition: "opacity 500ms 150ms,transform 600ms 150ms cubic-bezier(0.22,1,0.36,1)" }}>
                      <span style={{ fontSize: "clamp(24px,2.4vw,32px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1.05" }}>
                        {t?.name}
                      </span>
                      <span style={{ fontSize: "15px", lineHeight: "1.45", color: "#E7EAF0", maxWidth: "340px" }}>{t?.tag}</span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "4px", fontSize: "13px", fontWeight: "500", color: "#FFB52E", whiteSpace: "nowrap" }}>
                        See use cases ↓
                      </span>
                    </span>
                    {" "}
                  </a>
                  {" "}
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section id="ind-1" data-screen-label="Retail & E-commerce" style={{ scrollMarginTop: "72px", padding: "48px 0 40px" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px", borderRadius: "999px", background: "#101A28" }}>
              <button className="dc-hover-4vnbz7" type="button" onClick={v.stripL} aria-label="Scroll solutions left" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(255,255,255,.2)", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 250ms" }}>
                <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <div data-strip="" style={{ flex: "1", minWidth: "0", display: "flex", gap: "8px", overflowX: "auto", scrollbarWidth: "none", scrollSnapType: "x mandatory" }}>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  E-commerce Stores
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Mobile Shopping Apps
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  AI Recommendations
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  {"POS & ERP Integration"}
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Dedicated Dev Teams
                </span>
              </div>
            </div>
            <div data-row="" data-flip="0" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "32px 64px", alignItems: "center" }}>
              <div data-rowimg="" data-reveal="" style={{ position: "relative", height: "420px", borderRadius: "28px", overflow: "hidden", background: "#E7EAF0" }}>
                {" "}
                <img data-par="" src="/images/stock/photo-1441986300917-64674bd600d8.jpg" alt="Modern retail store with digital screens" style={{ position: "absolute", left: "0", top: "-30px", width: "100%", height: "calc(100% + 60px)", objectFit: "cover", transform: "scale(1.12)" }} />
                {" "}
              </div>
              <div data-reveal="" data-d="120" style={{ display: "flex", flexDirection: "column", gap: "14px", order: "1" }}>
                <h2 style={{ margin: "0", fontWeight: "500", fontSize: "clamp(34px,4vw,52px)", lineHeight: "1.02", letterSpacing: "-0.045em", color: "#FA7B20" }}>
                  {"Retail & E-commerce"}
                </h2>
                <span style={{ font: "500 12px/1.4 'Geist Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#667085" }}>
                  {"Retail Technology & Talent"}
                </span>
                <p style={{ margin: "6px 0 0", fontSize: "clamp(22px,2.4vw,28px)", fontWeight: "500", lineHeight: "1.25", letterSpacing: "-0.025em" }}>
                  Turn browsers into buyers.
                </p>
                <p style={{ margin: "0", maxWidth: "500px", fontSize: "16px", lineHeight: "1.65", color: "#667085", textWrap: "pretty" }}>
                  We build online stores and shopping apps that convert, add AI that personalises every visit, connect your POS and inventory systems, and give you developers when the season gets busy.
                </p>
                <button type="button" onClick={v.ddT?.i0} aria-expanded={v.ddE?.i0} style={{ alignSelf: "flex-start", marginTop: "6px", display: "inline-flex", alignItems: "center", gap: "10px", padding: "0", border: "none", background: "none", cursor: "pointer", fontSize: "15px", fontWeight: "600", color: "#202733" }}>
                  <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: v.ddB?.i0, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 300ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", fill: "none", stroke: v.ddF?.i0, strokeWidth: "2.2", strokeLinecap: "round", transform: `rotate(${v.ddR?.i0 ?? ""})`, transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)" }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                  {v.ddL?.i0}{" "}
                </button>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateRows: v.ddRows?.i0, transition: "grid-template-rows 700ms cubic-bezier(0.22,1,0.36,1)" }}>
              <div style={{ overflow: "hidden" }}>
                <div data-dd="0" style={{ marginTop: "8px", padding: "clamp(22px,3.4vw,44px)", borderRadius: "28px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "32px" }}>
                  <div data-ddp="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "20px 48px", alignItems: "end" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                        DEEP DIVE · RETAIL
                      </span>
                      <h3 style={{ margin: "0", fontSize: "clamp(26px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.08" }}>
                        Build, Automate and Scale Your Retail Business
                      </h3>
                    </div>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#475467" }}>
                      Shoppers want stores that just get them, online and in person. We build the stores and apps they love, add AI that makes every visit personal, connect the systems behind the scenes, and give you extra developers when sales season hits.
                    </p>
                  </div>
                  <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                      HOW WE HELP RETAIL
                    </span>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "10px" }}>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Build</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          E-commerce stores, mobile shopping apps and loyalty platforms that convert.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Automate</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          AI recommendations, demand forecasting and 24/7 shopping assistants.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M8 16H3v5" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Modernize</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          POS, ERP and inventory systems connected and moved to the cloud.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#FF6B00", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#101A28", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Talent</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Shopify, React and data engineers who join your team in 72 hours.
                        </span>
                      </div>
                    </div>
                  </div>
                  <p data-ddp="" style={{ margin: "0", paddingTop: "24px", borderTop: "1px solid #E7EAF0", fontSize: "clamp(18px,1.8vw,21px)", fontWeight: "500", lineHeight: "1.45", letterSpacing: "-0.015em" }}>
                    {"Ready to turn browsers into buyers? Let's find where to start: build, automate, modernize or staff."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ind-2" data-screen-label="Healthcare" style={{ scrollMarginTop: "72px", padding: "40px 0 40px" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px", borderRadius: "999px", background: "#101A28" }}>
              <button className="dc-hover-4vnbz7" type="button" onClick={v.stripL} aria-label="Scroll solutions left" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(255,255,255,.2)", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 250ms" }}>
                <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <div data-strip="" style={{ flex: "1", minWidth: "0", display: "flex", gap: "8px", overflowX: "auto", scrollbarWidth: "none", scrollSnapType: "x mandatory" }}>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Patient Portals
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Telehealth Apps
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Clinical Note Automation
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Legacy System Migration
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Healthcare Developers
                </span>
              </div>
            </div>
            <div data-row="" data-flip="1" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "32px 64px", alignItems: "center" }}>
              <div data-rowimg="" data-reveal="" style={{ position: "relative", height: "420px", borderRadius: "28px", overflow: "hidden", background: "#E7EAF0" }}>
                {" "}
                <img data-par="" src="/images/stock/photo-1576091160399-112ba8d25d1d.jpg" alt="Doctor reviewing information on a tablet" style={{ position: "absolute", left: "0", top: "-30px", width: "100%", height: "calc(100% + 60px)", objectFit: "cover", transform: "scale(1.12)" }} />
                {" "}
              </div>
              <div data-reveal="" data-d="120" style={{ display: "flex", flexDirection: "column", gap: "14px", order: "1" }}>
                <h2 style={{ margin: "0", fontWeight: "500", fontSize: "clamp(34px,4vw,52px)", lineHeight: "1.02", letterSpacing: "-0.045em", color: "#FA7B20" }}>
                  Healthcare
                </h2>
                <span style={{ font: "500 12px/1.4 'Geist Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#667085" }}>
                  {"Healthcare Software & Talent"}
                </span>
                <p style={{ margin: "6px 0 0", fontSize: "clamp(22px,2.4vw,28px)", fontWeight: "500", lineHeight: "1.25", letterSpacing: "-0.025em" }}>
                  Less admin. Faster care.
                </p>
                <p style={{ margin: "0", maxWidth: "500px", fontSize: "16px", lineHeight: "1.65", color: "#667085", textWrap: "pretty" }}>
                  From patient portals and booking apps to automated admin and secure cloud migrations, we help care teams spend less time on paperwork. Need more hands? Our engineers join your team.
                </p>
                <button type="button" onClick={v.ddT?.i1} aria-expanded={v.ddE?.i1} style={{ alignSelf: "flex-start", marginTop: "6px", display: "inline-flex", alignItems: "center", gap: "10px", padding: "0", border: "none", background: "none", cursor: "pointer", fontSize: "15px", fontWeight: "600", color: "#202733" }}>
                  <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: v.ddB?.i1, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 300ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", fill: "none", stroke: v.ddF?.i1, strokeWidth: "2.2", strokeLinecap: "round", transform: `rotate(${v.ddR?.i1 ?? ""})`, transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)" }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                  {v.ddL?.i1}{" "}
                </button>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateRows: v.ddRows?.i1, transition: "grid-template-rows 700ms cubic-bezier(0.22,1,0.36,1)" }}>
              <div style={{ overflow: "hidden" }}>
                <div data-dd="1" style={{ marginTop: "8px", padding: "clamp(22px,3.4vw,44px)", borderRadius: "28px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "32px" }}>
                  <div data-ddp="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "20px 48px", alignItems: "end" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                        DEEP DIVE · HEALTHCARE
                      </span>
                      <h3 style={{ margin: "0", fontSize: "clamp(26px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.08" }}>
                        Better Care, Powered by Better Tech
                      </h3>
                    </div>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#475467" }}>
                      Clinicians should be caring for patients, not fighting paperwork. We build patient-friendly apps and portals, automate the admin, move ageing systems to secure modern platforms, and add engineers who respect how sensitive health data is.
                    </p>
                  </div>
                  <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                      HOW WE HELP HEALTHCARE
                    </span>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "10px" }}>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Build</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Patient portals, telehealth apps and online booking systems.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Automate</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Clinical note automation, triage bots and smart scheduling.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M8 16H3v5" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Modernize</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Secure migration of legacy records systems, with integrations between clinical tools.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#FF6B00", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#101A28", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Talent</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Developers experienced with healthcare data, privacy and security.
                        </span>
                      </div>
                    </div>
                  </div>
                  <p data-ddp="" style={{ margin: "0", paddingTop: "24px", borderTop: "1px solid #E7EAF0", fontSize: "clamp(18px,1.8vw,21px)", fontWeight: "500", lineHeight: "1.45", letterSpacing: "-0.015em" }}>
                    {"Ready to give your clinicians their time back? Let's talk about what fits."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ind-3" data-screen-label="Finance" style={{ scrollMarginTop: "72px", padding: "40px 0 40px" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px", borderRadius: "999px", background: "#101A28" }}>
              <button className="dc-hover-4vnbz7" type="button" onClick={v.stripL} aria-label="Scroll solutions left" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(255,255,255,.2)", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 250ms" }}>
                <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <div data-strip="" style={{ flex: "1", minWidth: "0", display: "flex", gap: "8px", overflowX: "auto", scrollbarWidth: "none", scrollSnapType: "x mandatory" }}>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Fintech Apps
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Payment Platforms
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Fraud Detection
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Core System Modernization
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Fintech Engineers
                </span>
              </div>
            </div>
            <div data-row="" data-flip="0" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "32px 64px", alignItems: "center" }}>
              <div data-rowimg="" data-reveal="" style={{ position: "relative", height: "420px", borderRadius: "28px", overflow: "hidden", background: "#E7EAF0" }}>
                {" "}
                <img data-par="" src="/images/stock/photo-1563013544-824ae1b704d3.jpg" alt="Digital payment on a phone" style={{ position: "absolute", left: "0", top: "-30px", width: "100%", height: "calc(100% + 60px)", objectFit: "cover", transform: "scale(1.12)" }} />
                {" "}
              </div>
              <div data-reveal="" data-d="120" style={{ display: "flex", flexDirection: "column", gap: "14px", order: "1" }}>
                <h2 style={{ margin: "0", fontWeight: "500", fontSize: "clamp(34px,4vw,52px)", lineHeight: "1.02", letterSpacing: "-0.045em", color: "#FA7B20" }}>
                  Finance
                </h2>
                <span style={{ font: "500 12px/1.4 'Geist Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#667085" }}>
                  {"Fintech Development & Talent"}
                </span>
                <p style={{ margin: "6px 0 0", fontSize: "clamp(22px,2.4vw,28px)", fontWeight: "500", lineHeight: "1.25", letterSpacing: "-0.025em" }}>
                  Move money faster. Catch fraud sooner.
                </p>
                <p style={{ margin: "0", maxWidth: "500px", fontSize: "16px", lineHeight: "1.65", color: "#667085", textWrap: "pretty" }}>
                  We build secure fintech apps and payment platforms, automate KYC and fraud checks, modernize legacy banking systems, and supply engineers who understand regulated work.
                </p>
                <button type="button" onClick={v.ddT?.i2} aria-expanded={v.ddE?.i2} style={{ alignSelf: "flex-start", marginTop: "6px", display: "inline-flex", alignItems: "center", gap: "10px", padding: "0", border: "none", background: "none", cursor: "pointer", fontSize: "15px", fontWeight: "600", color: "#202733" }}>
                  <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: v.ddB?.i2, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 300ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", fill: "none", stroke: v.ddF?.i2, strokeWidth: "2.2", strokeLinecap: "round", transform: `rotate(${v.ddR?.i2 ?? ""})`, transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)" }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                  {v.ddL?.i2}{" "}
                </button>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateRows: v.ddRows?.i2, transition: "grid-template-rows 700ms cubic-bezier(0.22,1,0.36,1)" }}>
              <div style={{ overflow: "hidden" }}>
                <div data-dd="2" style={{ marginTop: "8px", padding: "clamp(22px,3.4vw,44px)", borderRadius: "28px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "32px" }}>
                  <div data-ddp="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "20px 48px", alignItems: "end" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                        DEEP DIVE · FINANCE
                      </span>
                      <h3 style={{ margin: "0", fontSize: "clamp(26px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.08" }}>
                        Fintech That Moves Fast and Stays Safe
                      </h3>
                    </div>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#475467" }}>
                      In finance, speed and trust are everything. We build secure fintech apps and payment platforms, automate the checks that slow you down, modernize legacy banking systems, and supply engineers who know regulated work.
                    </p>
                  </div>
                  <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                      HOW WE HELP FINANCE
                    </span>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "10px" }}>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Build</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Fintech apps, payment platforms and customer dashboards.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Automate</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Fraud detection, automated KYC and credit risk scoring.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M8 16H3v5" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Modernize</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Legacy core systems moved to secure cloud, with clean APIs.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#FF6B00", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#101A28", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Talent</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Java, .NET, cloud and security engineers for regulated projects.
                        </span>
                      </div>
                    </div>
                  </div>
                  <p data-ddp="" style={{ margin: "0", paddingTop: "24px", borderTop: "1px solid #E7EAF0", fontSize: "clamp(18px,1.8vw,21px)", fontWeight: "500", lineHeight: "1.45", letterSpacing: "-0.015em" }}>
                    {"Ready to move money faster and safer? Let's map out your first win."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ind-4" data-screen-label="Cybersecurity" style={{ scrollMarginTop: "72px", padding: "40px 0 40px" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px", borderRadius: "999px", background: "#101A28" }}>
              <button className="dc-hover-4vnbz7" type="button" onClick={v.stripL} aria-label="Scroll solutions left" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(255,255,255,.2)", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 250ms" }}>
                <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <div data-strip="" style={{ flex: "1", minWidth: "0", display: "flex", gap: "8px", overflowX: "auto", scrollbarWidth: "none", scrollSnapType: "x mandatory" }}>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Security Dashboards
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  AI Threat Detection
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  DevSecOps Pipelines
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Secure Cloud Migration
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Security Engineers
                </span>
              </div>
            </div>
            <div data-row="" data-flip="1" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "32px 64px", alignItems: "center" }}>
              <div data-rowimg="" data-reveal="" style={{ position: "relative", height: "420px", borderRadius: "28px", overflow: "hidden", background: "#E7EAF0" }}>
                {" "}
                <img data-par="" src="/images/stock/photo-1550751827-4bd374c3f58b.jpg" alt="Security operations code on a dark screen" style={{ position: "absolute", left: "0", top: "-30px", width: "100%", height: "calc(100% + 60px)", objectFit: "cover", transform: "scale(1.12)" }} />
                {" "}
              </div>
              <div data-reveal="" data-d="120" style={{ display: "flex", flexDirection: "column", gap: "14px", order: "1" }}>
                <h2 style={{ margin: "0", fontWeight: "500", fontSize: "clamp(34px,4vw,52px)", lineHeight: "1.02", letterSpacing: "-0.045em", color: "#FA7B20" }}>
                  Cybersecurity
                </h2>
                <span style={{ font: "500 12px/1.4 'Geist Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#667085" }}>
                  {"Security Engineering & Talent"}
                </span>
                <p style={{ margin: "6px 0 0", fontSize: "clamp(22px,2.4vw,28px)", fontWeight: "500", lineHeight: "1.25", letterSpacing: "-0.025em" }}>
                  Spot threats before they become headlines.
                </p>
                <p style={{ margin: "0", maxWidth: "500px", fontSize: "16px", lineHeight: "1.65", color: "#667085", textWrap: "pretty" }}>
                  We build security tools and dashboards, automate threat detection and response, harden your cloud and pipelines, and add DevSecOps and cloud security experts to your team.
                </p>
                <button type="button" onClick={v.ddT?.i3} aria-expanded={v.ddE?.i3} style={{ alignSelf: "flex-start", marginTop: "6px", display: "inline-flex", alignItems: "center", gap: "10px", padding: "0", border: "none", background: "none", cursor: "pointer", fontSize: "15px", fontWeight: "600", color: "#202733" }}>
                  <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: v.ddB?.i3, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 300ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", fill: "none", stroke: v.ddF?.i3, strokeWidth: "2.2", strokeLinecap: "round", transform: `rotate(${v.ddR?.i3 ?? ""})`, transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)" }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                  {v.ddL?.i3}{" "}
                </button>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateRows: v.ddRows?.i3, transition: "grid-template-rows 700ms cubic-bezier(0.22,1,0.36,1)" }}>
              <div style={{ overflow: "hidden" }}>
                <div data-dd="3" style={{ marginTop: "8px", padding: "clamp(22px,3.4vw,44px)", borderRadius: "28px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "32px" }}>
                  <div data-ddp="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "20px 48px", alignItems: "end" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                        DEEP DIVE · CYBERSECURITY
                      </span>
                      <h3 style={{ margin: "0", fontSize: "clamp(26px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.08" }}>
                        Build Secure. Stay Secure.
                      </h3>
                    </div>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#475467" }}>
                      {"Hackers don't sleep, and neither should your defences. We build security tools and dashboards, automate threat detection and response, harden your cloud and delivery pipelines, and add security engineers without an enterprise-sized hiring budget."}
                    </p>
                  </div>
                  <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                      HOW WE HELP CYBERSECURITY
                    </span>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "10px" }}>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Build</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Security dashboards, access portals and compliance tools.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Automate</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          AI threat detection, automated incident response and alert triage.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M8 16H3v5" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Modernize</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Secure cloud migration, hardened infrastructure and DevSecOps pipelines.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#FF6B00", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#101A28", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Talent</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          DevSecOps, cloud security and security operations engineers on demand.
                        </span>
                      </div>
                    </div>
                  </div>
                  <p data-ddp="" style={{ margin: "0", paddingTop: "24px", borderTop: "1px solid #E7EAF0", fontSize: "clamp(18px,1.8vw,21px)", fontWeight: "500", lineHeight: "1.45", letterSpacing: "-0.015em" }}>
                    {"Ready to stay one step ahead of attackers? Let's talk security."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ind-5" data-screen-label="Legal" style={{ scrollMarginTop: "72px", padding: "40px 0 40px" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px", borderRadius: "999px", background: "#101A28" }}>
              <button className="dc-hover-4vnbz7" type="button" onClick={v.stripL} aria-label="Scroll solutions left" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(255,255,255,.2)", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 250ms" }}>
                <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <div data-strip="" style={{ flex: "1", minWidth: "0", display: "flex", gap: "8px", overflowX: "auto", scrollbarWidth: "none", scrollSnapType: "x mandatory" }}>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Client Portals
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Case Management Systems
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Contract Review AI
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Document System Migration
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Legal Tech Developers
                </span>
              </div>
            </div>
            <div data-row="" data-flip="0" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "32px 64px", alignItems: "center" }}>
              <div data-rowimg="" data-reveal="" style={{ position: "relative", height: "420px", borderRadius: "28px", overflow: "hidden", background: "#E7EAF0" }}>
                {" "}
                <img data-par="" src="/images/stock/photo-1589829545856-d10d557cf95f.jpg" alt="Legal documents beside a laptop" style={{ position: "absolute", left: "0", top: "-30px", width: "100%", height: "calc(100% + 60px)", objectFit: "cover", transform: "scale(1.12)" }} />
                {" "}
              </div>
              <div data-reveal="" data-d="120" style={{ display: "flex", flexDirection: "column", gap: "14px", order: "1" }}>
                <h2 style={{ margin: "0", fontWeight: "500", fontSize: "clamp(34px,4vw,52px)", lineHeight: "1.02", letterSpacing: "-0.045em", color: "#FA7B20" }}>
                  Legal
                </h2>
                <span style={{ font: "500 12px/1.4 'Geist Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#667085" }}>
                  {"Legal Tech Solutions & Talent"}
                </span>
                <p style={{ margin: "6px 0 0", fontSize: "clamp(22px,2.4vw,28px)", fontWeight: "500", lineHeight: "1.25", letterSpacing: "-0.025em" }}>
                  Hours of paperwork, done in minutes.
                </p>
                <p style={{ margin: "0", maxWidth: "500px", fontSize: "16px", lineHeight: "1.65", color: "#667085", textWrap: "pretty" }}>
                  From client portals and case management systems to AI contract review and cloud document search, we help legal teams work faster, backed by developers who get legal workflows.
                </p>
                <button type="button" onClick={v.ddT?.i4} aria-expanded={v.ddE?.i4} style={{ alignSelf: "flex-start", marginTop: "6px", display: "inline-flex", alignItems: "center", gap: "10px", padding: "0", border: "none", background: "none", cursor: "pointer", fontSize: "15px", fontWeight: "600", color: "#202733" }}>
                  <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: v.ddB?.i4, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 300ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", fill: "none", stroke: v.ddF?.i4, strokeWidth: "2.2", strokeLinecap: "round", transform: `rotate(${v.ddR?.i4 ?? ""})`, transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)" }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                  {v.ddL?.i4}{" "}
                </button>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateRows: v.ddRows?.i4, transition: "grid-template-rows 700ms cubic-bezier(0.22,1,0.36,1)" }}>
              <div style={{ overflow: "hidden" }}>
                <div data-dd="4" style={{ marginTop: "8px", padding: "clamp(22px,3.4vw,44px)", borderRadius: "28px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "32px" }}>
                  <div data-ddp="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "20px 48px", alignItems: "end" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                        DEEP DIVE · LEGAL
                      </span>
                      <h3 style={{ margin: "0", fontSize: "clamp(26px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.08" }}>
                        Legal Tech That Gives You Your Evenings Back
                      </h3>
                    </div>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#475467" }}>
                      {"Lawyers didn't go to law school to read 400-page contracts at midnight. We build client portals and case management systems, add AI that reviews and drafts documents, move old files into searchable cloud systems, and supply developers who understand legal workflows."}
                    </p>
                  </div>
                  <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                      HOW WE HELP LEGAL
                    </span>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "10px" }}>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Build</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Client portals, case management systems and firm websites.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Automate</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Contract review, legal research assistants and document drafting.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M8 16H3v5" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Modernize</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Old document systems moved to secure, searchable cloud storage.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#FF6B00", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#101A28", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Talent</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Developers and data engineers for legal tech builds.
                        </span>
                      </div>
                    </div>
                  </div>
                  <p data-ddp="" style={{ margin: "0", paddingTop: "24px", borderTop: "1px solid #E7EAF0", fontSize: "clamp(18px,1.8vw,21px)", fontWeight: "500", lineHeight: "1.45", letterSpacing: "-0.015em" }}>
                    {"Ready to turn hours of paperwork into minutes? Let's talk legal tech."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ind-6" data-screen-label="Travel & Hospitality" style={{ scrollMarginTop: "72px", padding: "40px 0 40px" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px", borderRadius: "999px", background: "#101A28" }}>
              <button className="dc-hover-4vnbz7" type="button" onClick={v.stripL} aria-label="Scroll solutions left" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(255,255,255,.2)", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 250ms" }}>
                <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <div data-strip="" style={{ flex: "1", minWidth: "0", display: "flex", gap: "8px", overflowX: "auto", scrollbarWidth: "none", scrollSnapType: "x mandatory" }}>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Booking Engines
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Travel Apps
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Dynamic Pricing
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  {"GDS & Channel Integrations"}
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Travel Tech Developers
                </span>
              </div>
            </div>
            <div data-row="" data-flip="1" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "32px 64px", alignItems: "center" }}>
              <div data-rowimg="" data-reveal="" style={{ position: "relative", height: "420px", borderRadius: "28px", overflow: "hidden", background: "#E7EAF0" }}>
                {" "}
                <img data-par="" src="/images/stock/photo-1566073771259-6a8506099945.jpg" alt="Bright hotel lobby" style={{ position: "absolute", left: "0", top: "-30px", width: "100%", height: "calc(100% + 60px)", objectFit: "cover", transform: "scale(1.12)" }} />
                {" "}
              </div>
              <div data-reveal="" data-d="120" style={{ display: "flex", flexDirection: "column", gap: "14px", order: "1" }}>
                <h2 style={{ margin: "0", fontWeight: "500", fontSize: "clamp(34px,4vw,52px)", lineHeight: "1.02", letterSpacing: "-0.045em", color: "#FA7B20" }}>
                  {"Travel & Hospitality"}
                </h2>
                <span style={{ font: "500 12px/1.4 'Geist Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#667085" }}>
                  {"Travel Technology & Talent"}
                </span>
                <p style={{ margin: "6px 0 0", fontSize: "clamp(22px,2.4vw,28px)", fontWeight: "500", lineHeight: "1.25", letterSpacing: "-0.025em" }}>
                  Smarter bookings. Happier travellers.
                </p>
                <p style={{ margin: "0", maxWidth: "500px", fontSize: "16px", lineHeight: "1.65", color: "#667085", textWrap: "pretty" }}>
                  We build booking engines and travel apps, add AI for pricing and 24/7 support, connect your GDS and channel managers, and scale your team for peak season.
                </p>
                <button type="button" onClick={v.ddT?.i5} aria-expanded={v.ddE?.i5} style={{ alignSelf: "flex-start", marginTop: "6px", display: "inline-flex", alignItems: "center", gap: "10px", padding: "0", border: "none", background: "none", cursor: "pointer", fontSize: "15px", fontWeight: "600", color: "#202733" }}>
                  <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: v.ddB?.i5, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 300ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", fill: "none", stroke: v.ddF?.i5, strokeWidth: "2.2", strokeLinecap: "round", transform: `rotate(${v.ddR?.i5 ?? ""})`, transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)" }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                  {v.ddL?.i5}{" "}
                </button>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateRows: v.ddRows?.i5, transition: "grid-template-rows 700ms cubic-bezier(0.22,1,0.36,1)" }}>
              <div style={{ overflow: "hidden" }}>
                <div data-dd="5" style={{ marginTop: "8px", padding: "clamp(22px,3.4vw,44px)", borderRadius: "28px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "32px" }}>
                  <div data-ddp="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "20px 48px", alignItems: "end" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                        DEEP DIVE · TRAVEL
                      </span>
                      <h3 style={{ margin: "0", fontSize: "clamp(26px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.08" }}>
                        Travel Tech That Takes You Places
                      </h3>
                    </div>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#475467" }}>
                      Travellers want trips that feel made for them, booked in a few taps. We build booking engines and travel apps, add AI for pricing and 24/7 support, connect the systems behind every booking, and scale your team for peak season.
                    </p>
                  </div>
                  <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                      HOW WE HELP TRAVEL
                    </span>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "10px" }}>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Build</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Booking engines, travel apps and hotel or tour websites.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Automate</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Personalised recommendations, dynamic pricing and 24/7 virtual assistants.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M8 16H3v5" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Modernize</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          GDS, payment and channel manager integrations, plus moves to the cloud.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#FF6B00", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#101A28", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Talent</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Full-stack and mobile developers experienced in booking systems.
                        </span>
                      </div>
                    </div>
                  </div>
                  <p data-ddp="" style={{ margin: "0", paddingTop: "24px", borderTop: "1px solid #E7EAF0", fontSize: "clamp(18px,1.8vw,21px)", fontWeight: "500", lineHeight: "1.45", letterSpacing: "-0.015em" }}>
                    {"Ready to fill more rooms and seats? Let's plan your next build."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ind-7" data-screen-label="Pharma & Life Sciences" style={{ scrollMarginTop: "72px", padding: "40px 0 104px" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px", borderRadius: "999px", background: "#101A28" }}>
              <button className="dc-hover-4vnbz7" type="button" onClick={v.stripL} aria-label="Scroll solutions left" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(255,255,255,.2)", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 250ms" }}>
                <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <div data-strip="" style={{ flex: "1", minWidth: "0", display: "flex", gap: "8px", overflowX: "auto", scrollbarWidth: "none", scrollSnapType: "x mandatory" }}>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Research Portals
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  HCP Apps
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Research Data AI
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  Lab System Integration
                </span>
                <span className="dc-hover-14te8ou" data-chip="" style={{ flex: "none", scrollSnapAlign: "start", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 16px", borderRadius: "999px", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: "14px", transition: "background 250ms,border-color 250ms" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FA7B20" }} />
                  {"Data & QA Engineers"}
                </span>
              </div>
            </div>
            <div data-row="" data-flip="0" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "32px 64px", alignItems: "center" }}>
              <div data-rowimg="" data-reveal="" style={{ position: "relative", height: "420px", borderRadius: "28px", overflow: "hidden", background: "#E7EAF0" }}>
                {" "}
                <img data-par="" src="/images/stock/photo-1532187863486-abf9dbad1b69.jpg" alt="Laboratory with digital research data" style={{ position: "absolute", left: "0", top: "-30px", width: "100%", height: "calc(100% + 60px)", objectFit: "cover", transform: "scale(1.12)" }} />
                {" "}
              </div>
              <div data-reveal="" data-d="120" style={{ display: "flex", flexDirection: "column", gap: "14px", order: "1" }}>
                <h2 style={{ margin: "0", fontWeight: "500", fontSize: "clamp(34px,4vw,52px)", lineHeight: "1.02", letterSpacing: "-0.045em", color: "#FA7B20" }}>
                  {"Pharma & Life Sciences"}
                </h2>
                <span style={{ font: "500 12px/1.4 'Geist Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#667085" }}>
                  {"Pharma Software & Talent"}
                </span>
                <p style={{ margin: "6px 0 0", fontSize: "clamp(22px,2.4vw,28px)", fontWeight: "500", lineHeight: "1.25", letterSpacing: "-0.025em" }}>
                  From lab data to faster decisions.
                </p>
                <p style={{ margin: "0", maxWidth: "500px", fontSize: "16px", lineHeight: "1.65", color: "#667085", textWrap: "pretty" }}>
                  We build research portals and HCP apps, automate data analysis and regulatory paperwork, integrate lab and manufacturing systems, and provide data and validation specialists.
                </p>
                <button type="button" onClick={v.ddT?.i6} aria-expanded={v.ddE?.i6} style={{ alignSelf: "flex-start", marginTop: "6px", display: "inline-flex", alignItems: "center", gap: "10px", padding: "0", border: "none", background: "none", cursor: "pointer", fontSize: "15px", fontWeight: "600", color: "#202733" }}>
                  <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: v.ddB?.i6, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 300ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", fill: "none", stroke: v.ddF?.i6, strokeWidth: "2.2", strokeLinecap: "round", transform: `rotate(${v.ddR?.i6 ?? ""})`, transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)" }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                  {v.ddL?.i6}{" "}
                </button>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateRows: v.ddRows?.i6, transition: "grid-template-rows 700ms cubic-bezier(0.22,1,0.36,1)" }}>
              <div style={{ overflow: "hidden" }}>
                <div data-dd="6" style={{ marginTop: "8px", padding: "clamp(22px,3.4vw,44px)", borderRadius: "28px", background: "#F7F8FA", border: "1px solid #EEF0F4", display: "flex", flexDirection: "column", gap: "32px" }}>
                  <div data-ddp="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "20px 48px", alignItems: "end" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#E4490A" }}>
                        DEEP DIVE · PHARMA
                      </span>
                      <h3 style={{ margin: "0", fontSize: "clamp(26px,3vw,38px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1.08" }}>
                        From Lab to Launch, Faster
                      </h3>
                    </div>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#475467" }}>
                      Pharma runs on data, deadlines and strict rules. We build research portals and apps for healthcare professionals, automate data analysis and regulatory paperwork, integrate lab and manufacturing systems, and provide the data and validation specialists to keep it all compliant.
                    </p>
                  </div>
                  <div data-ddp="" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                      HOW WE HELP PHARMA
                    </span>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "10px" }}>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Build</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Research portals, HCP apps and compliance dashboards.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Automate</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Research data analysis, clinical trial insights and regulatory document automation.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M8 16H3v5" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Modernize</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Lab and manufacturing system integration, and validated cloud migration.
                        </span>
                      </div>
                      <div className="dc-hover-153b81g" style={{ padding: "22px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "14px", background: "#FF6B00", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "#101A28", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.01em" }}>Talent</span>
                        <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                          Data engineers, QA and validation specialists.
                        </span>
                      </div>
                    </div>
                  </div>
                  <p data-ddp="" style={{ margin: "0", paddingTop: "24px", borderTop: "1px solid #E7EAF0", fontSize: "clamp(18px,1.8vw,21px)", fontWeight: "500", lineHeight: "1.45", letterSpacing: "-0.015em" }}>
                    {"Ready to speed up your pharma business? From research portals to regulatory automation, let's find where to start."}
                  </p>
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
        <section data-screen-label="Methodology" style={{ padding: "104px 0", background: "#F7F8FA" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px 48px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                  HOW WE WORK
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em" }}>
                  {"Our "}
                  <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    Methodology
                  </span>
                </h2>
              </div>
              <p data-reveal="" data-d="120" style={{ margin: "0", maxWidth: "420px", fontSize: "16px", lineHeight: "1.6", color: "#667085" }}>
                A simple, collaborative approach to bringing the right technology and talent into your business, from first idea to full scale.
              </p>
            </div>
            <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", borderRadius: "26px", background: "#fff", border: "1px solid #E7EAF0", overflow: "hidden" }}>
              {(v.method || []).map((m: any, $index: number) => (
                <Fragment key={$index}>
                  <div className="dc-hover-1d3je6w" style={{ position: "relative", padding: "28px 24px", borderLeft: "1px solid #EEF0F4", marginLeft: "-1px", display: "flex", flexDirection: "column", gap: "14px", transition: "background 300ms" }}>
                    <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg viewBox="0 0 24 24" style={{ width: "22px", height: "22px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }}>
                          <path d={m?.icon} />
                        </svg>
                      </span>
                    </span>
                    <h3 style={{ margin: "10px 0 0", fontSize: "18px", fontWeight: "600", letterSpacing: "-0.015em" }}>{m?.t}</h3>
                    <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>{m?.d}</p>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section data-screen-label="Ways to engage" style={{ padding: "104px 0" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px 48px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                  ENGAGEMENT MODELS
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em" }}>
                  {"Three Ways to "}
                  <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    Engage
                  </span>
                </h2>
              </div>
              <p data-reveal="" data-d="120" style={{ margin: "0", maxWidth: "440px", fontSize: "16px", lineHeight: "1.6", color: "#667085" }}>
                Pick the model that fits. Security, delivery standards and IP protection stay the same in every one.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "16px", alignItems: "stretch" }}>
              {(v.engage || []).map((e: any, $index: number) => (
                <Fragment key={$index}>
                  <div className="dc-hover-16zu132" data-reveal="" style={{ padding: "30px", borderRadius: "26px", background: e?.bg, color: e?.fg, border: `1px solid ${e?.bd ?? ""}`, boxShadow: e?.sh, display: "flex", flexDirection: "column", gap: "16px", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)" }}>
                    <span style={{ alignSelf: "flex-start", padding: "6px 12px", borderRadius: "999px", background: e?.lBg, color: e?.lFg, font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".08em" }}>
                      {e?.label}
                    </span>
                    <h3 style={{ margin: "4px 0 0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>{e?.t}</h3>
                    <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: e?.mute }}>{e?.s}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "18px", borderTop: `1px solid ${e?.line ?? ""}` }}>
                      {(e?.pts || []).map((p: any, $index: number) => (
                        <Fragment key={$index}>
                          {" "}
                          <span style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: "10px", fontSize: "14px", lineHeight: "1.5" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginTop: "2px", fill: "none", stroke: e?.ck, strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>{p}</span>
                          </span>
                          {" "}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section data-screen-label="How delivery works" style={{ position: "relative", overflow: "hidden", padding: "112px 0", background: "#101A28", color: "#fff" }}>
          {" "}
          <span aria-hidden="true" style={{ position: "absolute", inset: "0", pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)", backgroundSize: "40px 40px", WebkitMaskImage: "radial-gradient(80% 70% at 30% 30%,#000,transparent 75%)", maskImage: "radial-gradient(80% 70% at 30% 30%,#000,transparent 75%)" }} />
          {" "}
          <span aria-hidden="true" style={{ position: "absolute", left: "-160px", top: "-160px", width: "560px", height: "560px", borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(250,123,32,.16),transparent 65%)" }} />
          {" "}
          <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: "48px 80px", alignItems: "start" }}>
            <div style={{ position: "sticky", top: "112px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#C3CAD5" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
                DELIVERY
              </div>
              <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.035em" }}>
                {"How Delivery "}
                <span style={{ color: "#FA7B20" }}>Works</span>
              </h2>
              <p data-reveal="" data-d="120" style={{ margin: "0", maxWidth: "420px", fontSize: "16px", lineHeight: "1.6", color: "#C3CAD5" }}>
                {"The same rhythm on every project, so you always know what's happening and what's next."}
              </p>
              <div data-reveal="" data-d="160" style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "28px", padding: "24px", borderRadius: "24px", background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", maxWidth: "440px" }}>
                <span style={{ position: "relative", flex: "none", width: "132px", height: "132px" }}>
                  {" "}
                  <svg viewBox="0 0 132 132" aria-hidden="true" style={{ width: "132px", height: "132px", transform: "rotate(-90deg)" }}>
                    <defs>
                      <linearGradient id="dlg" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#FFB52E" />
                        <stop offset="1" stopColor="#FA7B20" />
                      </linearGradient>
                    </defs>
                    <circle cx="66" cy="66" r="56" style={{ fill: "none", stroke: "rgba(255,255,255,.1)", strokeWidth: "10" }} />
                    <circle data-dlring="" cx="66" cy="66" r="56" style={{ fill: "none", stroke: "url(#dlg)", strokeWidth: "10", strokeLinecap: "round", strokeDasharray: "351.86", strokeDashoffset: "351.86", transition: "stroke-dashoffset 250ms linear" }} />
                  </svg>
                  {" "}
                  <span style={{ position: "absolute", inset: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                    <span data-dlpct="" style={{ fontSize: "30px", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                      0%
                    </span>
                    <span style={{ font: "500 10px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#98A2B3" }}>PROGRESS</span>
                  </span>
                  {" "}
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                  <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", color: "#98A2B3" }}>NOW</span>
                  <span data-dlnow="" style={{ fontSize: "20px", fontWeight: "600", letterSpacing: "-0.02em" }}>Kickoff</span>
                  <span style={{ display: "flex", gap: "4px" }}>
                    {(v.steps || []).map((s: any, $index: number) => (
                      <Fragment key={$index}>
                        <span data-dlseg="" style={{ width: "22px", height: "4px", borderRadius: "2px", background: "rgba(255,255,255,.14)", transition: "background 300ms" }} />
                      </Fragment>
                    ))}
                  </span>
                </span>
              </div>
            </div>
            <div data-dltrack="" style={{ position: "relative", display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "72px" }}>
              <span aria-hidden="true" style={{ position: "absolute", left: "23px", top: "24px", bottom: "24px", width: "2px", borderRadius: "2px", background: "rgba(255,255,255,.1)" }}>
                <span data-dlfill="" style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "0", borderRadius: "2px", background: "linear-gradient(180deg,#FFB52E,#FA7B20)", boxShadow: "0 0 12px rgba(250,123,32,.6)" }} />
              </span>
              {(v.steps || []).map((s: any, $index: number) => (
                <Fragment key={$index}>
                  <div data-dlstep="" style={{ position: "relative", padding: "24px 26px", borderRadius: "20px", background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", display: "flex", flexDirection: "column", gap: "10px", opacity: ".55", transform: "translateX(8px)", transition: "opacity 400ms,transform 500ms cubic-bezier(0.22,1,0.36,1),background 400ms,border-color 400ms" }}>
                    <span data-dldot="" style={{ position: "absolute", left: "-72px", top: "18px", width: "48px", height: "48px", borderRadius: "50%", background: "#101A28", border: "2px solid rgba(255,255,255,.2)", color: "#98A2B3", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 400ms,border-color 400ms,color 400ms,box-shadow 400ms" }}>
                      <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: "20px", height: "20px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d={s?.icon} />
                      </svg>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "19px", fontWeight: "600", letterSpacing: "-0.015em" }}>{s?.t}</span>
                      <span data-dlstat="" style={{ padding: "5px 10px", borderRadius: "999px", background: "rgba(255,255,255,.06)", color: "#98A2B3", font: "500 10px/1 'Geist Mono',monospace", letterSpacing: ".1em", transition: "background 300ms,color 300ms" }}>
                        UP NEXT
                      </span>
                    </span>
                    <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#C3CAD5", textWrap: "pretty" }}>{s?.d}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" data-screen-label="Let's talk" style={{ scrollMarginTop: "72px", padding: "104px 0", background: "#F7F8FA" }}>
          <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "28px", textAlign: "center" }}>
            <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#667085" }}>
              <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
              CONTACT
              <span style={{ width: "20px", height: "1.5px", background: "#FA7B20" }} />
            </div>
            <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(32px,4vw,52px)", lineHeight: "1.04", letterSpacing: "-0.04em" }}>
              {"Let's "}
              <span style={{ background: "linear-gradient(90deg,#FA7B20,#E4490A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Talk
              </span>
            </h2>
            <div data-reveal="" data-d="120" style={{ width: "100%", padding: "8px", borderRadius: "30px", background: "#fff", boxShadow: "0 1px 2px rgba(16,26,40,.04),0 22px 56px rgba(16,26,40,.08)", textAlign: "left" }}>
              <div style={{ padding: "clamp(20px,4vw,32px)", borderRadius: "24px", background: "#fff" }}>
                {v.notSent ? (
                  <>
                    <form onSubmit={v.submit} noValidate style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "14px" }}>
                        <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "13px", fontWeight: "500" }}>First Name</span>
                          <input className="dc-focus-6go203" value={v.fFirst ?? ""} onChange={v.setFirst} placeholder="Jane" autoComplete="given-name" style={{ height: "48px", padding: "0 14px", borderRadius: "12px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none" }} />
                        </label>
                        <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "13px", fontWeight: "500" }}>Email *</span>
                          <input className="dc-focus-6go203" type="email" value={v.fEmail ?? ""} onChange={v.setEmail} placeholder="you@company.com" autoComplete="email" style={{ height: "48px", padding: "0 14px", borderRadius: "12px", border: `1px solid ${v.emailBd ?? ""}`, background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none" }} />
                        </label>
                        <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "13px", fontWeight: "500" }}>Industry</span>
                          <span style={{ position: "relative", display: "block" }}>
                            <select value={v.fInd ?? ""} onChange={v.setInd} style={{ width: "100%", height: "48px", padding: "0 40px 0 14px", borderRadius: "12px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none", appearance: "none", WebkitAppearance: "none", cursor: "pointer" }}>
                              <option value="">Select industry</option>
                              <option>Retail</option>
                              <option>Healthcare</option>
                              <option>Finance</option>
                              <option>Cybersecurity</option>
                              <option>Legal</option>
                              <option>Travel</option>
                              <option>Pharma</option>
                              <option>Other</option>
                            </select>
                            <svg viewBox="0 0 24 24" style={{ position: "absolute", right: "14px", top: "50%", width: "16px", height: "16px", marginTop: "-8px", fill: "none", stroke: "#202733", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", pointerEvents: "none" }}>
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </span>
                        </label>
                        <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "13px", fontWeight: "500" }}>Engagement model</span>
                          <span style={{ position: "relative", display: "block" }}>
                            <select value={v.fModel ?? ""} onChange={v.setModel} style={{ width: "100%", height: "48px", padding: "0 40px 0 14px", borderRadius: "12px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none", appearance: "none", WebkitAppearance: "none", cursor: "pointer" }}>
                              <option value="">Select model</option>
                              <option>Team Extension</option>
                              <option>Delivery Pod</option>
                              <option>Discovery Sprint</option>
                              <option>Not sure</option>
                            </select>
                            <svg viewBox="0 0 24 24" style={{ position: "absolute", right: "14px", top: "50%", width: "16px", height: "16px", marginTop: "-8px", fill: "none", stroke: "#202733", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", pointerEvents: "none" }}>
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </span>
                        </label>
                      </div>
                      <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "500" }}>Message</span>
                        <textarea className="dc-focus-6go203" value={v.fMsg ?? ""} onChange={v.setMsg} rows={4} placeholder="Tell us what you'd like to build" style={{ padding: "12px 14px", borderRadius: "12px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", lineHeight: "1.5", color: "#202733", outline: "none", resize: "vertical", minHeight: "110px" }} />
                      </label>
                      <button className="dc-hover-jt0d2h" type="submit" style={{ height: "54px", borderRadius: "999px", background: "#FF6B00", color: "#202733", border: "none", fontSize: "16px", fontWeight: "500", cursor: "pointer", transition: "transform 250ms,box-shadow 250ms" }}>
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
                    <div style={{ minHeight: "300px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "14px", textAlign: "center" }}>
                      <span style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#101A28", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg viewBox="0 0 24 24" style={{ width: "26px", height: "26px", fill: "none", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
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
