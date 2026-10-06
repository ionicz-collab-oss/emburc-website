// Generated from "Emburc Homepage- Final.dc.html" by scripts/convert-dc.mjs, then maintained by hand.
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
          <linearGradient id="emLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" style={{ stopColor: "#FF6B00" }} />
            <stop offset="1" style={{ stopColor: "#FFB52E" }} />
          </linearGradient>
          <mask id="emMask" maskUnits="userSpaceOnUse" x="-4" y="-4" width="366" height="361">
            <path d="M39 353V132L200 243" style={{ fill: "none", stroke: "#fff", strokeWidth: "78", strokeLinejoin: "round" }} />
          </mask>
        </defs>
      </svg>
      {v.splash ? (
        <>
          <div data-splash="" style={{ position: "fixed", inset: "0", zIndex: "200", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
            <video data-splashvid="" src="/assets/emburc-logo-animation.mp4" muted playsInline preload="auto" disablePictureInPicture aria-label="eMburc logo animation" style={{ opacity: "0", willChange: "opacity,transform", transform: "translateZ(0)", display: "block", width: "min(720px,90vw)", maxHeight: "80vh", height: "auto", objectFit: "contain" }} />
          </div>
        </>
      ) : null}
      <header onMouseLeave={v.menuClose} style={{ position: "fixed", top: "0", left: "0", right: "0", zIndex: "50", background: "rgba(255,255,255,.84)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: "1px solid #E7EAF0" }}>
        <div className="site-header-bar" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
          <a href="#top" onClick={v.replay} title="Replay intro" style={{ display: "flex", flexDirection: "column", gap: "4px", textDecoration: "none", color: "#202733" }}>
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
          <a className="dc-hover-ygs45k site-header-cta" href="#contact" onClick={v.talkOpen} style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "44px", padding: "0 20px", borderRadius: "10px", background: "#FF6B00", color: "#202733", fontWeight: "500", fontSize: "15px", textDecoration: "none", transition: "transform 250ms,box-shadow 250ms" }}>
            {"Let's Talk"}
          </a>
          <MobileMenu active="/" onTalk={v.talkOpen} />
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
      <main id="top">
        <section data-hero="" style={{ position: "relative", padding: "152px 0 0", overflow: "hidden", background: "#fff" }}>
          <svg aria-hidden="true" style={{ position: "absolute", width: "0", height: "0" }}>
            <defs>
              <mask id="hmL" maskUnits="userSpaceOnUse" x="-60" y="-60" width="480" height="480">
                <path d="M39 353V132L200 243" style={{ fill: "none", stroke: "#fff", strokeWidth: "78", strokeLinejoin: "round" }} />
              </mask>
              <mask id="hmR" maskUnits="userSpaceOnUse" x="-60" y="-60" width="480" height="480">
                <path d="M319 353V132L158 243" style={{ fill: "none", stroke: "#fff", strokeWidth: "78", strokeLinejoin: "round" }} />
              </mask>
            </defs>
          </svg>
          <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,480px),1fr))", gap: "40px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px", position: "relative", zIndex: "2" }}>
              <div data-reveal="" data-d="0" style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: "10px", padding: "8px 14px 8px 10px", border: "1px solid #E7EAF0", borderRadius: "999px", background: "#fff", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#202733" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FF6B00", boxShadow: "0 0 0 4px #FFF4E8" }} />
                {" Technology + Talent Partner "}
              </div>
              <h1 style={{ margin: "0", fontWeight: "500", fontSize: "clamp(34px,4.6vw,62px)", lineHeight: "1", letterSpacing: "-0.045em", color: "#202733" }}>
                {" "}
                <span style={{ display: "block", overflow: "hidden", paddingBottom: ".04em" }}>
                  <span data-rise="" data-d="100" style={{ display: "block" }}>Digital Engineering</span>
                </span>
                {" "}
                <span style={{ display: "block", overflow: "hidden", paddingBottom: ".04em" }}>
                  <span data-rise="" data-d="200" style={{ display: "block" }}>and AI Services That</span>
                </span>
                {" "}
                <span style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}>
                  <span data-rise="" data-d="300" style={{ display: "inline-flex", alignItems: "center", gap: ".2em", fontWeight: "600", background: "linear-gradient(90deg,#FF6B00,#FFB52E)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    Actually Ship
                  </span>
                </span>
                {" "}
              </h1>
              <p data-reveal="" data-d="420" style={{ margin: "0", maxWidth: "500px", fontSize: "18px", lineHeight: "1.55", color: "#667085", textWrap: "pretty" }}>
                Ideas are easy. Shipping is the hard part. We build it, automate it, modernize it, and bring the engineers to scale it.
              </p>
              <div data-reveal="" data-d="500" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a className="dc-hover-1w2imkx" href="#contact" onClick={v.talkOpen} style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "52px", padding: "0 24px", borderRadius: "10px", background: "#FF6B00", color: "#202733", fontWeight: "500", fontSize: "16px", textDecoration: "none", transition: "transform 250ms,box-shadow 250ms" }}>
                  {"Let's Talk "}
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <a className="dc-hover-5rdcqz" href="/talent-solutions" style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 24px", borderRadius: "10px", border: "1.5px solid #202733", color: "#202733", fontWeight: "500", fontSize: "16px", textDecoration: "none", transition: "color 250ms,border-color 250ms" }}>
                  Hire engineers
                </a>
              </div>
              <div data-reveal="" data-d="580" style={{ display: "flex", alignItems: "center", gap: "12px", font: "400 14px/1 'Geist Mono',monospace", color: "#202733" }}>
                <span style={{ width: "28px", height: "1.5px", background: "linear-gradient(90deg,#FF6B00,#FFB52E)" }} />
                {" Turning possibility into progress. "}
              </div>
            </div>
            <div data-reveal="" data-d="150" style={{ position: "relative", height: "580px" }}>
              <div style={{ position: "absolute", left: "50%", top: "50%", width: "440px", height: "440px", margin: "-220px 0 0 -220px", borderRadius: "50%", background: "radial-gradient(circle,#FFF4E8 0%,rgba(255,244,232,0) 70%)" }} />
              <div data-hstage="" style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="-30 -40 420 420" data-mark="" data-autoplay="300" data-dist="80" role="img" aria-label="The Emburc M, one half showing a business team, the other showing code" style={{ height: "520px", maxHeight: "100%", width: "auto", maxWidth: "100%", overflow: "visible", display: "block" }}>
                  <g data-ml="">
                    <g data-hl="">
                      <g mask="url(#hmL)">
                        <rect x="-10" y="70" width="260" height="310" style={{ fill: "#202733" }} />
                        <image data-il="" href="/images/stock/photo-1600880292203-757bb62b4baf.jpg" x="-20" y="80" width="270" height="300" preserveAspectRatio="xMidYMid slice" />
                        <rect x="-10" y="70" width="260" height="310" style={{ fill: "#FF6B00", opacity: ".12" }} />
                      </g>
                      <circle cx="50" cy="40" r="39" style={{ fill: "url(#emGL)" }} />
                    </g>
                  </g>
                  <g data-mr="">
                    <g data-hr="">
                      <g mask="url(#hmR)">
                        <rect x="110" y="70" width="260" height="310" style={{ fill: "#101A28" }} />
                        <image data-ir="" href="/images/stock/photo-1555949963-aa79dcee981c.jpg" x="110" y="80" width="270" height="300" preserveAspectRatio="xMidYMid slice" />
                        <rect x="110" y="70" width="260" height="310" style={{ fill: "#FFB52E", opacity: ".14" }} />
                      </g>
                      <circle cx="308" cy="40" r="39" style={{ fill: "url(#emGR)" }} />
                    </g>
                  </g>
                  <path data-mo="" d="M319 353V132L158 243" mask="url(#emMask)" style={{ fill: "none", stroke: "#E4490A", strokeWidth: "78", strokeLinejoin: "round", opacity: ".92" }} />
                </svg>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "56px", borderTop: "1px solid #E7EAF0", borderBottom: "1px solid #E7EAF0", display: "flex", alignItems: "center", overflow: "hidden" }}>
            <div style={{ flex: "none", padding: "22px 28px 22px 32px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#98A2B3", background: "#fff", position: "relative", zIndex: "1", borderRight: "1px solid #E7EAF0" }}>
              Fluent in
            </div>
            <div style={{ overflow: "hidden", flex: "1", WebkitMaskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)", maskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)" }}>
              <div data-marquee="34" style={{ display: "flex", width: "max-content", gap: "56px", padding: "22px 28px", fontSize: "18px", fontWeight: "500", color: "#667085", whiteSpace: "nowrap" }}>
                <span>Azure</span>
                <span>AWS</span>
                <span>Google Cloud</span>
                <span>Databricks</span>
                <span>Snowflake</span>
                <span>Kubernetes</span>
                <span>Terraform</span>
                <span>Azure</span>
                <span>AWS</span>
                <span>Google Cloud</span>
                <span>Databricks</span>
                <span>Snowflake</span>
                <span>Kubernetes</span>
                <span>Terraform</span>
                <span>Azure</span>
                <span>AWS</span>
                <span>Google Cloud</span>
                <span>Databricks</span>
                <span>Snowflake</span>
                <span>Kubernetes</span>
                <span>Terraform</span>
                <span>Azure</span>
                <span>AWS</span>
                <span>Google Cloud</span>
                <span>Databricks</span>
                <span>Snowflake</span>
                <span>Kubernetes</span>
                <span>Terraform</span>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: "96px 0" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "36px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", flexWrap: "wrap" }}>
              <h2 data-reveal="" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(29px,2.9vw,34px)", lineHeight: "1.05", letterSpacing: "-0.035em" }}>
                What eMburc Does
              </h2>
              <p data-reveal="" data-d="100" style={{ margin: "0", font: "400 15px/1 'Geist Mono',monospace", color: "#667085" }}>
                Four verbs. Zero fluff.
              </p>
            </div>
            <div data-does="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: "1px", background: "#E7EAF0", border: "1px solid #E7EAF0", borderRadius: "20px", overflow: "hidden" }}>
              <div className="dc-hover-1d726jp" data-reveal="" style={{ position: "relative", background: "#fff", padding: "24px", display: "flex", flexDirection: "column", gap: "20px", transition: "background 250ms" }}>
                <span data-topbar="" style={{ position: "absolute", left: "0", right: "0", top: "0", height: "2px", background: "linear-gradient(90deg,#FF6B00,#FFB52E)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)" }} />
                <div style={{ height: "88px", borderRadius: "12px", background: "#F7F8FA", border: "1px solid #E7EAF0", overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "absolute", inset: "12px", display: "grid", gridTemplateColumns: "1fr 1.6fr", gridTemplateRows: "14px 1fr", gap: "6px" }}>
                    <span data-bb="" style={{ gridColumn: "1/3", borderRadius: "4px", background: "#fff", border: "1px solid #E7EAF0" }} />
                    <span data-bb="" style={{ borderRadius: "6px", background: "#101A28" }} />
                    <span style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                      <span data-bb="" style={{ borderRadius: "6px", background: "linear-gradient(135deg,#FF6B00,#FFB52E)" }} />
                      <span data-bb="" style={{ borderRadius: "6px", background: "#fff", border: "1px solid #E7EAF0" }} />
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                    <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-0.02em" }}>Build.</span>
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#667085" }}>
                    Digital products your users actually want.
                  </span>
                </div>
              </div>
              <div className="dc-hover-1d726jp" data-reveal="" data-d="80" style={{ position: "relative", background: "#fff", padding: "24px", display: "flex", flexDirection: "column", gap: "20px", transition: "background 250ms" }}>
                <span data-topbar="" style={{ position: "absolute", left: "0", right: "0", top: "0", height: "2px", background: "linear-gradient(90deg,#FF6B00,#FFB52E)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)" }} />
                <div style={{ height: "88px", borderRadius: "12px", background: "#F7F8FA", border: "1px solid #E7EAF0", overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "absolute", left: "16px", right: "16px", top: "50%", transform: "translateY(-50%)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ position: "absolute", left: "14px", right: "14px", top: "13px", height: "1.5px", background: "#E7EAF0" }} />
                    <span data-flow="" style={{ position: "absolute", left: "14px", top: "10px", width: "8px", height: "8px", marginLeft: "-4px", borderRadius: "50%", background: "#FF6B00", boxShadow: "0 0 0 4px rgba(255,107,0,.18)", zIndex: "2" }} />
                    <span data-node="" style={{ position: "relative", zIndex: "1", width: "28px", height: "28px", borderRadius: "8px", background: "#fff", border: "1.5px solid #E7EAF0", color: "#202733", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M22 12h-6l-2 3h-4l-2-3H2" />
                      </svg>
                    </span>
                    <span data-node="" style={{ position: "relative", zIndex: "1", width: "28px", height: "28px", borderRadius: "8px", background: "#fff", border: "1.5px solid #E7EAF0", color: "#202733", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <rect x="5" y="5" width="14" height="14" rx="2" />
                        <rect x="9" y="9" width="6" height="6" />
                      </svg>
                    </span>
                    <span data-node="" style={{ position: "relative", zIndex: "1", width: "28px", height: "28px", borderRadius: "8px", background: "#fff", border: "1.5px solid #E7EAF0", color: "#202733", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <circle cx="12" cy="12" r="3" />
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      </svg>
                    </span>
                    <span data-node="" style={{ position: "relative", zIndex: "1", width: "28px", height: "28px", borderRadius: "8px", background: "#fff", border: "1.5px solid #E7EAF0", color: "#202733", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                    <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-0.02em" }}>Automate.</span>
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#667085" }}>
                    {"AI that takes real work off your team's plate."}
                  </span>
                </div>
              </div>
              <div className="dc-hover-1d726jp" data-reveal="" data-d="160" style={{ position: "relative", background: "#fff", padding: "24px", display: "flex", flexDirection: "column", gap: "20px", transition: "background 250ms" }}>
                <span data-topbar="" style={{ position: "absolute", left: "0", right: "0", top: "0", height: "2px", background: "linear-gradient(90deg,#FF6B00,#FFB52E)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)" }} />
                <div style={{ height: "88px", borderRadius: "12px", background: "#101A28", border: "1px solid #101A28", overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "absolute", inset: "12px", display: "grid", gridTemplateColumns: "repeat(9,1fr)", gridTemplateRows: "repeat(3,1fr)", gap: "5px" }}>
                    <span data-cell="0,0" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="1,0" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="2,0" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="3,0" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="4,0" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="5,0" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="6,0" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="7,0" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="8,0" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="0,1" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="1,1" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="2,1" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="3,1" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="4,1" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="5,1" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="6,1" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="7,1" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="8,1" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="0,2" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="1,2" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="2,2" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="3,2" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="4,2" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="5,2" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="6,2" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="7,2" style={{ borderRadius: "3px", background: "#202733" }} />
                    <span data-cell="8,2" style={{ borderRadius: "3px", background: "#202733" }} />
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                    <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-0.02em" }}>Modernize.</span>
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#667085" }}>
                    Old systems out, modern stack in, with no downtime drama.
                  </span>
                </div>
              </div>
              <div className="dc-hover-1d726jp" data-reveal="" data-d="240" style={{ position: "relative", background: "#fff", padding: "24px", display: "flex", flexDirection: "column", gap: "20px", transition: "background 250ms" }}>
                <span data-topbar="" style={{ position: "absolute", left: "0", right: "0", top: "0", height: "2px", background: "linear-gradient(90deg,#FF6B00,#FFB52E)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)" }} />
                <div style={{ height: "88px", borderRadius: "12px", background: "#F7F8FA", border: "1px solid #E7EAF0", overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                    <div style={{ display: "flex", paddingLeft: "10px" }}>
                      <img src="/images/stock/photo-1507003211169-0a1dd7228f2d.jpg" alt="" style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover", border: "2px solid #fff", marginLeft: "-10px", background: "#E7EAF0", display: "block" }} />
                      <img src="/images/stock/photo-1494790108377-be9c29b29330.jpg" alt="" style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover", border: "2px solid #fff", marginLeft: "-10px", background: "#E7EAF0", display: "block" }} />
                      <img src="/images/stock/photo-1472099645785-5658abf4ff4e.jpg" alt="" style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover", border: "2px solid #fff", marginLeft: "-10px", background: "#E7EAF0", display: "block" }} />
                    </div>
                    <span style={{ fontSize: "16px", color: "#98A2B3" }}>+</span>
                    <div style={{ display: "flex", paddingLeft: "10px" }}>
                      <span data-join="">
                        <img src="/images/stock/photo-1573496359142-b8d87734a5a2.jpg" alt="" style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover", border: "2px solid #FF6B00", marginLeft: "-10px", background: "#E7EAF0", display: "block" }} />
                      </span>
                      <span data-join="">
                        <img src="/images/stock/photo-1500648767791-00dcc994a43e.jpg" alt="" style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover", border: "2px solid #FFB52E", marginLeft: "-10px", background: "#E7EAF0", display: "block" }} />
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                    <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-0.02em" }}>Extend.</span>
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#667085" }}>
                    Senior engineers who plug into your team, fast.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="offerings" onMouseMove={v.spot} style={{ scrollMarginTop: "72px", position: "relative", padding: "112px 0", color: "#fff", background: "radial-gradient(640px circle at var(--mx,50%) var(--my,0%),rgba(255,107,0,.1),transparent 60%),#101A28", overflow: "hidden" }}>
          <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "48px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "32px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "680px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#FFB52E" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#FFB52E" }} />
                  Offerings
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(24px,2.8vw,34px)", lineHeight: "1.2", letterSpacing: "-0.025em", textWrap: "balance" }}>
                  We help businesses build, automate and modernize with technology that delivers real business value.
                </h2>
              </div>
            </div>
            <div data-reveal="" data-d="120" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "1px", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.1)", borderRadius: "20px", overflow: "hidden" }}>
              {(v.offers || []).map((o: any, $index: number) => (
                <Fragment key={$index}>
                  <div onMouseEnter={o?.enter} onMouseLeave={o?.leave} style={{ position: "relative", minHeight: "500px", padding: "32px", background: "#101A28", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                    <img src={o?.img} alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: o?.imgOp, transform: `scale(${o?.imgScale ?? ""})`, transition: "opacity 600ms cubic-bezier(0.22,1,0.36,1),transform 1200ms cubic-bezier(0.22,1,0.36,1)" }} />
                    <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(16,26,40,.55) 0%,rgba(16,26,40,.82) 45%,#101A28 85%)", opacity: o?.imgOp, transition: "opacity 600ms" }} />
                    <span style={{ position: "absolute", left: "0", right: "0", top: "0", height: "2px", background: "linear-gradient(90deg,#FF6B00,#FFB52E)", transformOrigin: "left", transform: `scaleX(${o?.bar ?? ""})`, transition: "transform 600ms cubic-bezier(0.22,1,0.36,1)" }} />
                    <div style={{ position: "relative", flex: "1", display: "flex", flexDirection: "column", gap: "18px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span />
                        <span style={{ width: "40px", height: "40px", borderRadius: "50%", border: `1px solid ${o?.ring ?? ""}`, background: o?.ringBg, color: o?.ringFg, display: "flex", alignItems: "center", justifyContent: "center", transform: `rotate(${o?.rot ?? ""})`, transition: "all 400ms cubic-bezier(0.22,1,0.36,1)" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M7 17 17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </span>
                      </div>
                      <h3 style={{ margin: "24px 0 0", fontSize: "24px", fontWeight: "600", lineHeight: "1.2", letterSpacing: "-0.02em", maxWidth: "300px" }}>
                        {o?.title}
                      </h3>
                      <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#C3CAD5", maxWidth: "320px" }}>
                        {o?.line}
                      </p>
                      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column" }}>
                        {(o?.list || []).map((it: any, $index: number) => (
                          <Fragment key={$index}>
                            {" "}
                            <a className="dc-hover-1eiwf5n" href="#contact" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderTop: "1px solid rgba(255,255,255,.1)", color: "#fff", textDecoration: "none", fontSize: "15px", transform: `translateX(${it?.x ?? ""})`, transition: `transform 500ms cubic-bezier(0.22,1,0.36,1) ${it?.delay ?? ""},color 250ms` }}>
                              <span style={{ width: it?.dash, height: "1.5px", background: "#FF6B00", transition: `width 500ms cubic-bezier(0.22,1,0.36,1) ${it?.delay ?? ""}` }} />
                              {it?.label}{" "}
                            </a>
                            {" "}
                          </Fragment>
                        ))}
                      </div>
                      <a href="/offerings" style={{ alignSelf: "flex-start", marginTop: "12px", display: "inline-flex", alignItems: "center", gap: "8px", height: "44px", padding: "0 18px", borderRadius: "10px", background: o?.btnBg, color: o?.btnFg, border: `1px solid ${o?.btnBd ?? ""}`, fontSize: "14px", fontWeight: "500", textDecoration: "none", transition: "all 300ms" }}>
                        {"Explore "}
                        <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section style={{ padding: "112px 0" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "48px", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", position: "sticky", top: "120px" }}>
              <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#D35800" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#FF6B00" }} />
                How we deliver
              </div>
              <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.08", letterSpacing: "-0.03em", textWrap: "balance" }}>
                Three capabilities. One delivery standard.
              </h2>
              <p data-reveal="" data-d="140" style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#667085", maxWidth: "380px" }}>
                From new products to intelligent automation and legacy transformation, eMburc helps teams turn technology into measurable progress.
              </p>
            </div>
            <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", borderBottom: "1px solid #E7EAF0" }}>
              <a className="dc-hover-1d726jp" href="#contact" data-reveal="" data-caprow="" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "24px 40px", padding: "32px 28px", borderTop: "1px solid #E7EAF0", color: "#202733", textDecoration: "none", borderRadius: "16px", transition: "background 300ms" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ font: "500 11px/1.4 'Geist Mono',monospace", letterSpacing: ".12em", color: "#D35800" }}>
                    01 — DIGITAL PRODUCT DEVELOPMENT
                  </span>
                  <h3 style={{ margin: "0", fontSize: "26px", fontWeight: "600", lineHeight: "1.15", letterSpacing: "-0.025em" }}>
                    Build What Matters
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#667085", maxWidth: "360px" }}>
                    From idea to launch, we design and engineer digital products built around real user needs.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                      <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", fill: "none", stroke: "#FF6B00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {"Product strategy, UX & UI"}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                      <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", fill: "none", stroke: "#FF6B00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {"Web & mobile application development"}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                      <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", fill: "none", stroke: "#FF6B00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {"Scalable architecture & integrations"}
                    </span>
                  </div>
                  <p style={{ margin: "0", paddingTop: "14px", borderTop: "1px dashed #E7EAF0", fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                    <strong style={{ fontWeight: "600", color: "#202733" }}>Best for:</strong>
                    {" New products, product launches, and digital experiences."}
                  </p>
                </div>
                <span data-caparrow="" style={{ position: "absolute", top: "32px", right: "28px", width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center", color: "#202733", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),background 250ms,border-color 250ms" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </a>
              <a className="dc-hover-1d726jp" href="#contact" data-reveal="" data-d="80" data-caprow="" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "24px 40px", padding: "32px 28px", borderTop: "1px solid #E7EAF0", color: "#202733", textDecoration: "none", borderRadius: "16px", transition: "background 300ms" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ font: "500 11px/1.4 'Geist Mono',monospace", letterSpacing: ".12em", color: "#D35800" }}>
                    {"02 — AI & AUTOMATION"}
                  </span>
                  <h3 style={{ margin: "0", fontSize: "26px", fontWeight: "600", lineHeight: "1.15", letterSpacing: "-0.025em" }}>
                    Make Work Intelligent
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#667085", maxWidth: "360px" }}>
                    Turn repetitive processes into intelligent workflows with practical AI and automation.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                      <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", fill: "none", stroke: "#FF6B00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {"Generative AI & AI agents"}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                      <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", fill: "none", stroke: "#FF6B00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Workflow and process automation
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                      <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", fill: "none", stroke: "#FF6B00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      AI-powered business solutions
                    </span>
                  </div>
                  <p style={{ margin: "0", paddingTop: "14px", borderTop: "1px dashed #E7EAF0", fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                    <strong style={{ fontWeight: "600", color: "#202733" }}>Best for:</strong>
                    {" Teams looking to reduce manual work and unlock new capabilities."}
                  </p>
                </div>
                <span data-caparrow="" style={{ position: "absolute", top: "32px", right: "28px", width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center", color: "#202733", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),background 250ms,border-color 250ms" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </a>
              <a className="dc-hover-1d726jp" href="#contact" data-reveal="" data-d="160" data-caprow="" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "24px 40px", padding: "32px 28px", borderTop: "1px solid #E7EAF0", color: "#202733", textDecoration: "none", borderRadius: "16px", transition: "background 300ms" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ font: "500 11px/1.4 'Geist Mono',monospace", letterSpacing: ".12em", color: "#D35800" }}>
                    {"03 — MODERNIZATION & MIGRATION"}
                  </span>
                  <h3 style={{ margin: "0", fontSize: "26px", fontWeight: "600", lineHeight: "1.15", letterSpacing: "-0.025em" }}>
                    Move Forward Without the Disruption
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#667085", maxWidth: "360px" }}>
                    Modernize legacy platforms and infrastructure without putting your business on hold.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                      <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", fill: "none", stroke: "#FF6B00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Legacy application modernization
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                      <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", fill: "none", stroke: "#FF6B00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {"Cloud & platform migration"}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                      <svg viewBox="0 0 24 24" style={{ flex: "none", width: "16px", height: "16px", fill: "none", stroke: "#FF6B00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {"Architecture, performance & scalability"}
                    </span>
                  </div>
                  <p style={{ margin: "0", paddingTop: "14px", borderTop: "1px dashed #E7EAF0", fontSize: "14px", lineHeight: "1.55", color: "#667085" }}>
                    <strong style={{ fontWeight: "600", color: "#202733" }}>Best for:</strong>
                    {" Businesses dealing with aging systems, technical debt, or scaling challenges."}
                  </p>
                </div>
                <span data-caparrow="" style={{ position: "absolute", top: "32px", right: "28px", width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #E7EAF0", display: "flex", alignItems: "center", justifyContent: "center", color: "#202733", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),background 250ms,border-color 250ms" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>
        <section style={{ padding: "36px 0", overflow: "hidden", borderBottom: "1px solid #E7EAF0" }}>
          <div data-marquee="40" style={{ display: "flex", width: "max-content", alignItems: "center", gap: "40px", fontSize: "clamp(25px,2.6vw,34px)", fontWeight: "500", letterSpacing: "-0.04em", whiteSpace: "nowrap" }}>
            <span>Build better.</span>
            <span style={{ color: "#FF6B00" }}>Automate smarter.</span>
            <span>{"Modernize for what's next."}</span>
            <svg viewBox="-4 -4 366 361" style={{ height: ".7em", width: ".71em", overflow: "visible" }}>
              <g>
                <circle cx="50" cy="40" r="39" style={{ fill: "url(#emGL)" }} />
                <path d="M39 353V132L200 243" style={{ fill: "none", stroke: "url(#emGL)", strokeWidth: "78", strokeLinejoin: "round" }} />
              </g>
              <g>
                <circle cx="308" cy="40" r="39" style={{ fill: "url(#emGR)" }} />
                <path d="M319 353V132L158 243" style={{ fill: "none", stroke: "url(#emGR)", strokeWidth: "78", strokeLinejoin: "round" }} />
              </g>
              <path d="M319 353V132L158 243" mask="url(#emMask)" style={{ fill: "none", stroke: "#E4490A", strokeWidth: "78", strokeLinejoin: "round" }} />
            </svg>
            <span>Build better.</span>
            <span style={{ color: "#FF6B00" }}>Automate smarter.</span>
            <span>{"Modernize for what's next."}</span>
            <svg viewBox="-4 -4 366 361" style={{ height: ".7em", width: ".71em", overflow: "visible" }}>
              <g>
                <circle cx="50" cy="40" r="39" style={{ fill: "url(#emGL)" }} />
                <path d="M39 353V132L200 243" style={{ fill: "none", stroke: "url(#emGL)", strokeWidth: "78", strokeLinejoin: "round" }} />
              </g>
              <g>
                <circle cx="308" cy="40" r="39" style={{ fill: "url(#emGR)" }} />
                <path d="M319 353V132L158 243" style={{ fill: "none", stroke: "url(#emGR)", strokeWidth: "78", strokeLinejoin: "round" }} />
              </g>
              <path d="M319 353V132L158 243" mask="url(#emMask)" style={{ fill: "none", stroke: "#E4490A", strokeWidth: "78", strokeLinejoin: "round" }} />
            </svg>
            <span>Build better.</span>
            <span style={{ color: "#FF6B00" }}>Automate smarter.</span>
            <span>{"Modernize for what's next."}</span>
            <svg viewBox="-4 -4 366 361" style={{ height: ".7em", width: ".71em", overflow: "visible" }}>
              <g>
                <circle cx="50" cy="40" r="39" style={{ fill: "url(#emGL)" }} />
                <path d="M39 353V132L200 243" style={{ fill: "none", stroke: "url(#emGL)", strokeWidth: "78", strokeLinejoin: "round" }} />
              </g>
              <g>
                <circle cx="308" cy="40" r="39" style={{ fill: "url(#emGR)" }} />
                <path d="M319 353V132L158 243" style={{ fill: "none", stroke: "url(#emGR)", strokeWidth: "78", strokeLinejoin: "round" }} />
              </g>
              <path d="M319 353V132L158 243" mask="url(#emMask)" style={{ fill: "none", stroke: "#E4490A", strokeWidth: "78", strokeLinejoin: "round" }} />
            </svg>
            <span>Build better.</span>
            <span style={{ color: "#FF6B00" }}>Automate smarter.</span>
            <span>{"Modernize for what's next."}</span>
            <svg viewBox="-4 -4 366 361" style={{ height: ".7em", width: ".71em", overflow: "visible" }}>
              <g>
                <circle cx="50" cy="40" r="39" style={{ fill: "url(#emGL)" }} />
                <path d="M39 353V132L200 243" style={{ fill: "none", stroke: "url(#emGL)", strokeWidth: "78", strokeLinejoin: "round" }} />
              </g>
              <g>
                <circle cx="308" cy="40" r="39" style={{ fill: "url(#emGR)" }} />
                <path d="M319 353V132L158 243" style={{ fill: "none", stroke: "url(#emGR)", strokeWidth: "78", strokeLinejoin: "round" }} />
              </g>
              <path d="M319 353V132L158 243" mask="url(#emMask)" style={{ fill: "none", stroke: "#E4490A", strokeWidth: "78", strokeLinejoin: "round" }} />
            </svg>
          </div>
        </section>
        <section id="talent" style={{ scrollMarginTop: "72px", padding: "128px 0", background: "#F7F8FA" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "64px", alignItems: "stretch" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#D35800" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#FF6B00" }} />
                Talent Solutions
              </div>
              <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(32px,3.5vw,44px)", lineHeight: "1.04", letterSpacing: "-0.035em", textWrap: "balance" }}>
                Need Engineers? Skip the Hiring Hunger Games.
              </h2>
              <p data-reveal="" data-d="160" style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#667085", maxWidth: "480px" }}>
                Senior talent that plugs into your team and ships from sprint one.
              </p>
              <div data-reveal="" data-d="220" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", borderTop: "1px solid #E7EAF0", borderBottom: "1px solid #E7EAF0" }}>
                <div style={{ padding: "22px 16px 22px 0", display: "flex", flexDirection: "column", gap: "6px", borderRight: "1px solid #E7EAF0" }}>
                  <span style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span data-count="72" style={{ fontSize: "31px", fontWeight: "500", letterSpacing: "-0.03em" }}>72</span>
                    <span style={{ fontSize: "16px", color: "#667085" }}>hrs</span>
                  </span>
                  <span style={{ fontSize: "14px", color: "#667085" }}>to shortlist</span>
                </div>
                <div style={{ padding: "22px 16px", display: "flex", flexDirection: "column", gap: "6px", borderRight: "1px solid #E7EAF0" }}>
                  <span style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
                    <span data-count="500" style={{ fontSize: "31px", fontWeight: "500", letterSpacing: "-0.03em" }}>500</span>
                    <span style={{ fontSize: "25px", color: "#FF6B00" }}>+</span>
                  </span>
                  <span style={{ fontSize: "14px", color: "#667085" }}>engineers in our network</span>
                </div>
                <div style={{ padding: "22px 0 22px 16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span data-count="2" style={{ fontSize: "31px", fontWeight: "500", letterSpacing: "-0.03em" }}>2</span>
                    <span style={{ fontSize: "16px", color: "#667085" }}>wks</span>
                  </span>
                  <span style={{ fontSize: "14px", color: "#667085" }}>to start</span>
                </div>
              </div>
              <div data-reveal="" data-d="280" onMouseMove={v.spot} style={{ padding: "28px", borderRadius: "20px", color: "#fff", background: "radial-gradient(360px circle at var(--mx,80%) var(--my,0%),rgba(255,107,0,.18),transparent 65%),#101A28", display: "flex", flexDirection: "column", gap: "18px" }}>
                <span style={{ font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#FFB52E" }}>
                  Talent on tap
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  <span className="dc-hover-gw6e3v" style={{ padding: "9px 14px", borderRadius: "999px", border: "1px solid rgba(255,255,255,.18)", fontSize: "14px", transition: "border-color 250ms,background 250ms" }}>
                    AI/ML
                  </span>
                  <span className="dc-hover-gw6e3v" style={{ padding: "9px 14px", borderRadius: "999px", border: "1px solid rgba(255,255,255,.18)", fontSize: "14px", transition: "border-color 250ms,background 250ms" }}>
                    Full-stack
                  </span>
                  <span className="dc-hover-gw6e3v" style={{ padding: "9px 14px", borderRadius: "999px", border: "1px solid rgba(255,255,255,.18)", fontSize: "14px", transition: "border-color 250ms,background 250ms" }}>
                    {"Web & mobile (React, Node, Flutter, iOS, Android)"}
                  </span>
                  <span className="dc-hover-gw6e3v" style={{ padding: "9px 14px", borderRadius: "999px", border: "1px solid rgba(255,255,255,.18)", fontSize: "14px", transition: "border-color 250ms,background 250ms" }}>
                    {"Cloud & DevOps (AWS, Azure, Kubernetes)"}
                  </span>
                </div>
                <a className="dc-hover-njdrz6" href="#contact" onClick={v.talkOpen} style={{ alignSelf: "flex-start", marginTop: "6px", display: "inline-flex", alignItems: "center", gap: "10px", height: "48px", padding: "0 22px", borderRadius: "10px", background: "#FF6B00", color: "#202733", fontWeight: "500", fontSize: "15px", textDecoration: "none", transition: "transform 250ms" }}>
                  {"Hire engineers "}
                  <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div data-reveal="" data-d="120" style={{ position: "relative", minHeight: "520px", height: "100%", borderRadius: "20px", overflow: "hidden", background: "#E7EAF0" }}>
              {" "}
              <img className="dc-hover-gmxi6v" src="/images/stock/photo-1519389950473-47ba0277781c.jpg" alt="A distributed engineering team working together" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform 1200ms cubic-bezier(0.22,1,0.36,1)" }} />
              {" "}
            </div>
          </div>
          <div style={{ maxWidth: "1240px", margin: "96px auto 0", padding: "0 32px", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", textAlign: "center" }}>
              <h3 data-reveal="" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(26px,3vw,38px)", lineHeight: "1.1", letterSpacing: "-0.03em" }}>
                Our Hiring Models
              </h3>
              <p data-reveal="" data-d="80" style={{ margin: "0", maxWidth: "760px", fontSize: "16px", lineHeight: "1.6", color: "#667085", textWrap: "pretty" }}>
                Choose how you want work to move - added hands, owned delivery, or your dedicated engineering hub. Each model is designed to remove friction, speed up progress, and keep accountability clear.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "20px", alignItems: "stretch" }}>
              <div className="dc-hover-bl8t2s" data-reveal="" data-hm="" style={{ position: "relative", display: "flex", flexDirection: "column", gap: "18px", padding: "28px", borderRadius: "16px", background: "#fff", border: "1px solid #E7EAF0", boxShadow: "0 4px 20px rgba(16,26,40,.04)", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms,border-color 250ms" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span data-hmicon="" style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#FFF4E8", color: "#FF6B00", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "22px", height: "22px", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M19 8v6" />
                      <path d="M22 11h-6" />
                    </svg>
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h4 style={{ margin: "0", fontSize: "20px", fontWeight: "600", letterSpacing: "-0.02em", lineHeight: "1.25" }}>
                    Staff Augmentation/Team Extension
                  </h4>
                  <span style={{ fontSize: "14px", fontWeight: "500", color: "#D35800" }}>Expand your team. Maintain control</span>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#667085" }}>
                    Add engineering capacity without changing how you deliver.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "16px", borderRadius: "12px", background: "#F7F8FA" }}>
                  <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#667085" }}>
                    What it is:
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "14px", lineHeight: "1.45" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "18px", height: "18px", marginTop: "2px" }}>
                      <circle cx="12" cy="12" r="10" style={{ fill: "#FFF4E8" }} />
                      <path d="m8 12 3 3 5-6" style={{ fill: "none", stroke: "#FF6B00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }} />
                    </svg>
                    <span>Individual engineers or groups (1-3)</span>
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "14px", lineHeight: "1.45" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "18px", height: "18px", marginTop: "2px" }}>
                      <circle cx="12" cy="12" r="10" style={{ fill: "#FFF4E8" }} />
                      <path d="m8 12 3 3 5-6" style={{ fill: "none", stroke: "#FF6B00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }} />
                    </svg>
                    <span>Integrate into your existing team</span>
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "14px", lineHeight: "1.45" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "18px", height: "18px", marginTop: "2px" }}>
                      <circle cx="12" cy="12" r="10" style={{ fill: "#FFF4E8" }} />
                      <path d="m8 12 3 3 5-6" style={{ fill: "none", stroke: "#FF6B00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }} />
                    </svg>
                    <span>You manage priorities, we handle employment</span>
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                  <span><strong style={{ fontWeight: "600", color: "#202733" }}>Billing:</strong>{" Time & Material, Retainer"}</span>
                  <span>
                    <strong style={{ fontWeight: "600", color: "#202733" }}>Best for:</strong>
                    {" Specific skill gaps, capacity crunches"}
                  </span>
                  <span>
                    <strong style={{ fontWeight: "600", color: "#202733" }}>How it works:</strong>
                    {" You interview & select. Scale up/down with 30 days notice."}
                  </span>
                </div>
                <a className="dc-hover-g6c68k" href="#contact" onClick={v.talkAug} style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", height: "46px", borderRadius: "999px", border: "1.5px solid #202733", color: "#202733", fontSize: "14px", fontWeight: "500", textDecoration: "none", transition: "background 250ms,border-color 250ms,color 250ms" }}>
                  {"Request Profiles "}
                  <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="dc-hover-bl8t2s" data-reveal="" data-d="90" data-hm="" style={{ position: "relative", display: "flex", flexDirection: "column", gap: "18px", padding: "28px", borderRadius: "16px", background: "#fff", border: "1px solid #E7EAF0", boxShadow: "0 4px 20px rgba(16,26,40,.04)", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms,border-color 250ms" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span data-hmicon="" style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#101A28", color: "#FFB52E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "22px", height: "22px", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h4 style={{ margin: "0", fontSize: "20px", fontWeight: "600", letterSpacing: "-0.02em", lineHeight: "1.25" }}>
                    Dedicated Teams/Delivery Pods
                  </h4>
                  <span style={{ fontSize: "14px", fontWeight: "500", color: "#D35800" }}>
                    Cross-Functional Teams That Own Delivery
                  </span>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#667085" }}>
                    Dedicated teams accountable for predictable sprint outcomes.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "16px", borderRadius: "12px", background: "#F7F8FA" }}>
                  <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#667085" }}>
                    What it is:
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "14px", lineHeight: "1.45" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "18px", height: "18px", marginTop: "2px" }}>
                      <circle cx="12" cy="12" r="10" style={{ fill: "#FFF4E8" }} />
                      <path d="m8 12 3 3 5-6" style={{ fill: "none", stroke: "#FF6B00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }} />
                    </svg>
                    <span>Dedicated squad (4-10 people)</span>
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "14px", lineHeight: "1.45" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "18px", height: "18px", marginTop: "2px" }}>
                      <circle cx="12" cy="12" r="10" style={{ fill: "#FFF4E8" }} />
                      <path d="m8 12 3 3 5-6" style={{ fill: "none", stroke: "#FF6B00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }} />
                    </svg>
                    <span>Tech Lead + Engineers + QA</span>
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "14px", lineHeight: "1.45" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "18px", height: "18px", marginTop: "2px" }}>
                      <circle cx="12" cy="12" r="10" style={{ fill: "#FFF4E8" }} />
                      <path d="m8 12 3 3 5-6" style={{ fill: "none", stroke: "#FF6B00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }} />
                    </svg>
                    <span>Shared accountability for predictable sprint delivery</span>
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                  <span>
                    <strong style={{ fontWeight: "600", color: "#202733" }}>Billing:</strong>
                    {" Milestone-based, T&M with commitments, or Fixed-Cost"}
                  </span>
                  <span>
                    <strong style={{ fontWeight: "600", color: "#202733" }}>Best for:</strong>
                    {" Products needing speed, cross-team coordination"}
                  </span>
                  <span>
                    <strong style={{ fontWeight: "600", color: "#202733" }}>How it works:</strong>
                    {" We own sprint delivery metrics. Weekly demos."}
                  </span>
                </div>
                <a className="dc-hover-g6c68k" href="#contact" onClick={v.talkPod} style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", height: "46px", borderRadius: "999px", border: "1.5px solid #202733", color: "#202733", fontSize: "14px", fontWeight: "500", textDecoration: "none", transition: "background 250ms,border-color 250ms,color 250ms" }}>
                  {"Get a Pod Proposal "}
                  <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="dc-hover-bl8t2s" data-reveal="" data-d="180" data-hm="" style={{ position: "relative", display: "flex", flexDirection: "column", gap: "18px", padding: "28px", borderRadius: "16px", background: "#fff", border: "1px solid #E7EAF0", boxShadow: "0 4px 20px rgba(16,26,40,.04)", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),box-shadow 400ms,border-color 250ms" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span data-hmicon="" style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#FF6B00", color: "#202733", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "22px", height: "22px", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h4 style={{ margin: "0", fontSize: "20px", fontWeight: "600", letterSpacing: "-0.02em", lineHeight: "1.25" }}>
                    Development Centers
                  </h4>
                  <span style={{ fontSize: "14px", fontWeight: "500", color: "#D35800" }}>Your Dedicated Engineering Hub</span>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#667085" }}>
                    Build your secure, scalable engineering hub, operated by us, owned by you.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "16px", borderRadius: "12px", background: "#F7F8FA" }}>
                  <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#667085" }}>
                    What it is:
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "14px", lineHeight: "1.45" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "18px", height: "18px", marginTop: "2px" }}>
                      <circle cx="12" cy="12" r="10" style={{ fill: "#FFF4E8" }} />
                      <path d="m8 12 3 3 5-6" style={{ fill: "none", stroke: "#FF6B00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }} />
                    </svg>
                    <span>Long-term, scaled teams (10-100+)</span>
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "14px", lineHeight: "1.45" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "18px", height: "18px", marginTop: "2px" }}>
                      <circle cx="12" cy="12" r="10" style={{ fill: "#FFF4E8" }} />
                      <path d="m8 12 3 3 5-6" style={{ fill: "none", stroke: "#FF6B00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }} />
                    </svg>
                    <span>Your branding, culture, processes</span>
                  </span>
                  <span style={{ display: "flex", gap: "10px", fontSize: "14px", lineHeight: "1.45" }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "none", width: "18px", height: "18px", marginTop: "2px" }}>
                      <circle cx="12" cy="12" r="10" style={{ fill: "#FFF4E8" }} />
                      <path d="m8 12 3 3 5-6" style={{ fill: "none", stroke: "#FF6B00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }} />
                    </svg>
                    <span>{"Full infrastructure, HR, security & compliance"}</span>
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", lineHeight: "1.5", color: "#667085" }}>
                  <span>
                    <strong style={{ fontWeight: "600", color: "#202733" }}>Billing:</strong>
                    {" Long-term retainer, BOT (Build-Operate-Transfer)"}
                  </span>
                  <span>
                    <strong style={{ fontWeight: "600", color: "#202733" }}>Best for:</strong>
                    {" Enterprises needing sustained large-scale capacity, cost optimization"}
                  </span>
                  <span>
                    <strong style={{ fontWeight: "600", color: "#202733" }}>How it works:</strong>
                    {" Multi-year partnerships. BOT (Build-Operate-Transfer) options."}
                  </span>
                </div>
                <a className="dc-hover-g6c68k" href="#contact" onClick={v.talkDc} style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", height: "46px", borderRadius: "999px", border: "1.5px solid #202733", color: "#202733", fontSize: "14px", fontWeight: "500", textDecoration: "none", transition: "background 250ms,border-color 250ms,color 250ms" }}>
                  {"Book a Consultation "}
                  <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="How we engage" style={{ padding: "96px 0" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "40px 64px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "440px" }}>
              <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#D35800" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#FF6B00" }} />
                How we engage
              </div>
              <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(31px,3.4vw,41px)", lineHeight: "1.05", letterSpacing: "-0.035em", textWrap: "balance" }}>
                Idea → Production. Four Steps.
              </h2>
              <div data-reveal="" data-d="120" style={{ marginTop: "14px", display: "flex", alignItems: "center", gap: "14px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#667085" }}>
                <span>Idea</span>
                <span style={{ position: "relative", flex: "1", height: "2px", borderRadius: "2px", background: "#E7EAF0", overflow: "hidden" }}>
                  <span style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: v.lineW, background: "linear-gradient(90deg,#FF6B00,#FFB52E)", transition: "width 700ms cubic-bezier(0.22,1,0.36,1)" }} />
                </span>
                <span style={{ color: "#202733" }}>Production</span>
              </div>
            </div>
            <div data-reveal="" data-d="140" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: "14px", gridColumn: "span 1", minWidth: "0" }}>
              {(v.steps || []).map((st: any, $index: number) => (
                <Fragment key={$index}>
                  {" "}
                  <button type="button" onClick={st?.select} onMouseEnter={st?.select} aria-pressed={st?.pressed} style={{ position: "relative", overflow: "hidden", padding: "22px", borderRadius: "18px", border: `1px solid ${st?.border ?? ""}`, background: st?.bg, color: st?.fg, boxShadow: st?.shadow, cursor: "pointer", textAlign: "left", font: "inherit", display: "flex", flexDirection: "column", gap: "12px", transition: "background 400ms,border-color 400ms,color 400ms,box-shadow 400ms" }}>
                    <span aria-hidden="true" style={{ position: "absolute", right: "-70px", top: "-70px", width: "200px", aspectRatio: "1", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,107,0,.3),transparent 65%)", opacity: st?.glow, transition: "opacity 500ms", pointerEvents: "none" }} />
                    <span style={{ position: "relative", display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "12px", background: st?.iconBg, color: st?.iconFg, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 400ms,color 400ms" }}>
                        <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                          <path d={st?.icon} />
                        </svg>
                      </span>
                      <span style={{ fontSize: "20px", fontWeight: "600", letterSpacing: "-0.02em", lineHeight: "1.1" }}>{st?.title}</span>
                    </span>
                    <span style={{ position: "relative", fontSize: "15px", lineHeight: "1.55", color: st?.sub, transition: "color 400ms", textWrap: "pretty" }}>
                      {st?.text}
                    </span>
                  </button>
                  {" "}
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section id="industries" onMouseMove={v.spot} style={{ scrollMarginTop: "72px", padding: "128px 0", color: "#fff", background: "radial-gradient(640px circle at var(--mx,20%) var(--my,20%),rgba(255,107,0,.12),transparent 60%),#101A28" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "48px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", flexWrap: "wrap" }}>
              <h2 data-reveal="" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(31px,3.4vw,41px)", lineHeight: "1.05", letterSpacing: "-0.035em" }}>
                Industries We Build For
              </h2>
            </div>
            <div data-reveal="" data-d="120" style={{ display: "flex", gap: "12px", height: "460px", overflowX: "auto" }}>
              {(v.industries || []).map((ind: any, $index: number) => (
                <Fragment key={$index}>
                  {" "}
                  <a href="/industries" onMouseEnter={ind?.hover} onFocus={ind?.hover} style={{ position: "relative", flex: ind?.flex, minWidth: "112px", borderRadius: "16px", overflow: "hidden", textDecoration: "none", color: "#fff", background: "#202733", transition: "flex 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                    {" "}
                    <img src={ind?.img} alt={ind?.name} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transform: `scale(${ind?.scale ?? ""})`, transition: "transform 900ms cubic-bezier(0.22,1,0.36,1)" }} />
                    {" "}
                    <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(16,26,40,.1) 30%,rgba(16,26,40,.92))" }} />
                    {" "}
                    <span aria-hidden="true" style={{ position: "absolute", left: "50%", bottom: "24px", writingMode: "vertical-rl", transform: "translateX(-50%) rotate(180deg)", whiteSpace: "nowrap", fontSize: "20px", fontWeight: "600", letterSpacing: "-0.01em", opacity: ind?.vop, transition: "opacity 300ms" }}>
                      {ind?.name}
                    </span>
                    {" "}
                    <span style={{ position: "absolute", left: "20px", right: "20px", bottom: "22px", display: "flex", flexDirection: "column", gap: "14px", opacity: ind?.op, transition: "opacity 400ms 150ms" }}>
                      <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
                        {ind?.name}
                      </span>
                      <span style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: "999px", background: "#FF6B00", color: "#202733", fontSize: "14px", fontWeight: "500", whiteSpace: "nowrap", opacity: ind?.op, transform: `translateY(${ind?.ty ?? ""})`, transition: "opacity 400ms,transform 500ms cubic-bezier(0.22,1,0.36,1)" }}>
                        {"Read more "}
                        <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
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
        <section id="cases" style={{ scrollMarginTop: "72px", padding: "128px 0", background: "#F7F8FA" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "48px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <h2 data-reveal="" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(31px,3.4vw,41px)", lineHeight: "1.05", letterSpacing: "-0.035em", textWrap: "balance" }}>
                  Case Studies: Receipts, Not Promises
                </h2>
                <p data-reveal="" data-d="80" style={{ margin: "0", fontSize: "16px", color: "#667085" }}>
                  Real projects. Real results. Short reads.
                </p>
              </div>
            </div>
            <div data-reveal="" onMouseEnter={v.csPause} onMouseLeave={v.csResume} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 20px rgba(16,26,40,.06)" }}>
                {(v.cases || []).map((c: any, $index: number) => (
                  <Fragment key={$index}>
                    <div aria-hidden={c?.hidden} style={{ gridArea: "1/1", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", opacity: c?.op, pointerEvents: c?.pe, visibility: c?.vis, transition: "opacity 600ms cubic-bezier(0.22,1,0.36,1),visibility 600ms" }}>
                      <div style={{ position: "relative", minHeight: "520px", overflow: "hidden", background: "#E7EAF0" }}>
                        {" "}
                        <img src={c?.img} alt={c?.alt} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transform: `scale(${c?.scale ?? ""})`, transition: "transform 1400ms cubic-bezier(0.22,1,0.36,1)" }} />
                        {" "}
                        <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(16,26,40,0) 50%,rgba(16,26,40,.7))" }} />
                        {" "}
                        <span style={{ position: "absolute", left: "20px", top: "20px", padding: "8px 12px", borderRadius: "999px", background: "rgba(16,26,40,.78)", backdropFilter: "blur(8px)", color: "#fff", font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em" }}>
                          {c?.tag}
                        </span>
                        {" "}
                        <span style={{ position: "absolute", left: "24px", right: "24px", bottom: "24px", display: "inline-flex", alignItems: "center", gap: "8px", color: "#fff", fontSize: "16px", fontWeight: "500" }}>
                          {c?.sol}{" "}
                          <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "#FFB52E", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </span>
                        {" "}
                      </div>
                      <div style={{ padding: "44px", display: "flex", flexDirection: "column", gap: "24px", transform: `translateY(${c?.ty ?? ""})`, transition: "transform 700ms cubic-bezier(0.22,1,0.36,1)" }}>
                        <h3 style={{ margin: "0", fontSize: "clamp(22px,2.2vw,28px)", fontWeight: "600", lineHeight: "1.2", letterSpacing: "-0.025em", textWrap: "balance" }}>
                          {c?.title}
                        </h3>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "20px" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#D35800" }}>
                              The Challenge
                            </span>
                            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#667085" }}>{c?.challenge}</p>
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#D35800" }}>
                              What We Built
                            </span>
                            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#667085" }}>{c?.built}</p>
                          </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "18px 20px", borderRadius: "14px", background: "#F7F8FA" }}>
                          <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".12em", textTransform: "uppercase", color: "#202733" }}>
                            The Impact
                          </span>
                          {(c?.impact || []).map((im: any, $index: number) => (
                            <Fragment key={$index}>
                              {" "}
                              <span style={{ display: "flex", gap: "10px", fontSize: "15px", lineHeight: "1.45" }}>
                                <svg viewBox="0 0 24 24" style={{ flex: "none", width: "18px", height: "18px", marginTop: "1px" }}>
                                  <circle cx="12" cy="12" r="10" style={{ fill: "#FFF4E8" }} />
                                  <path d="m8 12 3 3 5-6" style={{ fill: "none", stroke: "#FF6B00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }} />
                                </svg>
                                <span>{im}</span>
                              </span>
                              {" "}
                            </Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", gap: "10px", flex: "1", minWidth: "280px" }}>
                  {(v.cases || []).map((c: any, $index: number) => (
                    <Fragment key={$index}>
                      {" "}
                      <button onClick={c?.go} style={{ flex: "1", display: "flex", flexDirection: "column", gap: "10px", padding: "0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <span style={{ position: "relative", display: "block", height: "3px", borderRadius: "2px", background: "#E7EAF0", overflow: "hidden" }}>
                          <span data-csbar={c?.i} style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg,#FF6B00,#FFB52E)", transformOrigin: "left", transform: `scaleX(${c?.fill ?? ""})` }} />
                        </span>
                        <span style={{ font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".08em", color: c?.labelColor, transition: "color 250ms" }}>
                          {c?.tag}
                        </span>
                      </button>
                      {" "}
                    </Fragment>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button className="dc-hover-75qo4s" onClick={v.csPrev} aria-label="Previous case study" style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1.5px solid #202733", background: "#fff", color: "#202733", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 250ms,color 250ms,border-color 250ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M19 12H5" />
                      <path d="m12 19-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="dc-hover-75qo4s" onClick={v.csNext} aria-label="Next case study" style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1.5px solid #202733", background: "#202733", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 250ms,border-color 250ms" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: "128px 0" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "56px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "760px" }}>
              <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", color: "#D35800" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#FF6B00" }} />
                THE eMburc ADVANTAGE
              </div>
              <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(32px,3.7vw,47px)", lineHeight: "1.02", letterSpacing: "-0.04em" }}>
                Tech + Talent.
                <br />
                Same Team. Same Goal.
              </h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              <div data-reveal="" style={{ flex: "2 1 560px", position: "relative", height: "540px", borderRadius: "24px", overflow: "hidden", background: "#E7EAF0" }}>
                {" "}
                <img className="dc-hover-gmxi7s" src="/images/stock/photo-1552664730-d307ca884978.jpg" alt="Team planning on a whiteboard" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform 900ms cubic-bezier(0.22,1,0.36,1)" }} />
                {" "}
                <div style={{ position: "absolute", left: "0", bottom: "0", width: "66%", background: "#fff", borderTopRightRadius: "28px", padding: "60px 32px 4px 22px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ position: "absolute", top: "-28px", left: "0", width: "28px", height: "28px", background: "radial-gradient(circle at 100% 0,transparent 27.5px,#fff 28px)" }} />
                  <span style={{ position: "absolute", bottom: "0", right: "-28px", width: "28px", height: "28px", background: "radial-gradient(circle at 100% 0,transparent 27.5px,#fff 28px)" }} />
                  <span style={{ position: "absolute", left: "22px", top: "-40px", width: "80px", height: "80px", borderRadius: "18px", background: "#FF6B00", color: "#202733", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 32px rgba(16,26,40,.18)" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "34px", height: "34px", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                    <span style={{ fontSize: "29px", fontWeight: "600", letterSpacing: "-0.025em" }}>No over-engineering.</span>
                  </span>
                  <span style={{ fontSize: "17px", lineHeight: "1.55", color: "#667085", paddingLeft: "34px" }}>
                    We build what moves your business.
                  </span>
                </div>
              </div>
              <div data-reveal="" data-d="90" style={{ flex: "1 1 340px", position: "relative", height: "540px", borderRadius: "24px", overflow: "hidden", background: "#E7EAF0" }}>
                {" "}
                <img className="dc-hover-gmxi7s" src="/images/stock/photo-1581091226825-a6a2a5aee158.jpg" alt="Engineer reviewing code" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform 900ms cubic-bezier(0.22,1,0.36,1)" }} />
                {" "}
                <div style={{ position: "absolute", left: "0", bottom: "0", width: "82%", background: "#fff", borderTopRightRadius: "28px", padding: "56px 24px 4px 22px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ position: "absolute", top: "-28px", left: "0", width: "28px", height: "28px", background: "radial-gradient(circle at 100% 0,transparent 27.5px,#fff 28px)" }} />
                  <span style={{ position: "absolute", bottom: "0", right: "-28px", width: "28px", height: "28px", background: "radial-gradient(circle at 100% 0,transparent 27.5px,#fff 28px)" }} />
                  <span style={{ position: "absolute", left: "22px", top: "-40px", width: "68px", height: "68px", borderRadius: "18px", background: "#101A28", color: "#FFB52E", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 32px rgba(16,26,40,.18)" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "28px", height: "28px", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                    <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-0.025em" }}>Vetted, not just hired.</span>
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#667085", paddingLeft: "34px" }}>
                    Senior engineers who write clean code and actually communicate.
                  </span>
                </div>
              </div>
              <div data-reveal="" style={{ flex: "1 1 340px", position: "relative", height: "440px", borderRadius: "24px", overflow: "hidden", background: "#E7EAF0" }}>
                {" "}
                <img className="dc-hover-gmxi7s" src="/images/stock/photo-1498050108023-c5249f4df085.jpg" alt="Documented code on a laptop" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform 900ms cubic-bezier(0.22,1,0.36,1)" }} />
                {" "}
                <div style={{ position: "absolute", left: "0", bottom: "0", width: "82%", background: "#fff", borderTopRightRadius: "28px", padding: "56px 24px 4px 22px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ position: "absolute", top: "-28px", left: "0", width: "28px", height: "28px", background: "radial-gradient(circle at 100% 0,transparent 27.5px,#fff 28px)" }} />
                  <span style={{ position: "absolute", bottom: "0", right: "-28px", width: "28px", height: "28px", background: "radial-gradient(circle at 100% 0,transparent 27.5px,#fff 28px)" }} />
                  <span style={{ position: "absolute", left: "22px", top: "-40px", width: "68px", height: "68px", borderRadius: "18px", background: "#101A28", color: "#FFB52E", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 32px rgba(16,26,40,.18)" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "28px", height: "28px", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="M10 9H8" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                    <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-0.025em" }}>Built to last.</span>
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#667085", paddingLeft: "34px" }}>
                    Documented code your team can run without us.
                  </span>
                </div>
              </div>
              <div data-reveal="" data-d="90" style={{ flex: "2 1 560px", position: "relative", height: "440px", borderRadius: "24px", overflow: "hidden", background: "#E7EAF0" }}>
                {" "}
                <img className="dc-hover-gmxi7s" src="/images/stock/photo-1551434678-e076c223a692.jpg" alt="Team reviewing a live sprint dashboard" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transition: "transform 900ms cubic-bezier(0.22,1,0.36,1)" }} />
                {" "}
                <div style={{ position: "absolute", left: "0", bottom: "0", width: "66%", background: "#fff", borderTopRightRadius: "28px", padding: "60px 32px 4px 22px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ position: "absolute", top: "-28px", left: "0", width: "28px", height: "28px", background: "radial-gradient(circle at 100% 0,transparent 27.5px,#fff 28px)" }} />
                  <span style={{ position: "absolute", bottom: "0", right: "-28px", width: "28px", height: "28px", background: "radial-gradient(circle at 100% 0,transparent 27.5px,#fff 28px)" }} />
                  <span style={{ position: "absolute", left: "22px", top: "-40px", width: "80px", height: "80px", borderRadius: "18px", background: "#FF6B00", color: "#202733", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 32px rgba(16,26,40,.18)" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "34px", height: "34px", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                    <span style={{ fontSize: "29px", fontWeight: "600", letterSpacing: "-0.025em" }}>Zero black boxes.</span>
                  </span>
                  <span style={{ fontSize: "17px", lineHeight: "1.55", color: "#667085", paddingLeft: "34px" }}>
                    A live view of sprints, PRs and budget.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" data-screen-label="Testimonials" style={{ position: "relative", overflow: "hidden", padding: "112px 0 128px", scrollMarginTop: "72px", background: "#F7F8FA" }}>
          <div data-comment-anchor="01999e2da6-div" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "640px" }}>
                <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#D35800" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "#FF6B00" }} />
                  Validated Execution
                </div>
                <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(31px,3.4vw,41px)", lineHeight: "1.05", letterSpacing: "-0.035em", textWrap: "balance" }}>
                  {"Don't Take Our Word for It."}
                </h2>
              </div>
              <div data-reveal="" data-d="120" style={{ display: "flex", gap: "10px" }}>
                <button className="dc-hover-iwz2xz" type="button" aria-label="Previous testimonials" onClick={v.tPrev} style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1px solid #D0D5DD", background: "#fff", color: "#202733", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background 200ms,border-color 200ms,color 200ms" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button className="dc-hover-iwz2xz" type="button" aria-label="Next testimonials" onClick={v.tNext} style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1px solid #D0D5DD", background: "#fff", color: "#202733", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background 200ms,border-color 200ms,color 200ms" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
            <div data-reveal="" data-d="140" ref={v.tTrack} style={{ display: "flex", gap: "20px", overflowX: "auto", scrollSnapType: "x mandatory", scrollPaddingLeft: "0", scrollbarWidth: "none", padding: "4px 2px 8px", margin: "-4px -2px -8px" }}>
              {(v.testimonials || []).map((q: any, $index: number) => (
                <Fragment key={$index}>
                  <figure className="dc-hover-97b42t" style={{ position: "relative", overflow: "hidden", flex: "0 0 min(100%,392px)", scrollSnapAlign: "start", margin: "0", padding: "32px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", display: "flex", flexDirection: "column", gap: "20px", transition: "border-color 250ms,box-shadow 300ms" }}>
                    <svg viewBox="0 0 32 24" aria-hidden="true" style={{ position: "relative", width: "32px", height: "24px", fill: "#FF6B00" }}>
                      <path d="M0 24V14C0 6 4.5 1.2 12 0l1.4 3.6C9 5 7 8 6.8 11H12v13H0zm18 0V14c0-8 4.5-12.8 12-14l1.4 3.6C27 5 25 8 24.8 11H30v13H18z" />
                    </svg>
                    <p style={{ position: "relative", margin: "0", fontSize: "20px", lineHeight: "1.35", fontWeight: "500", letterSpacing: "-0.02em", color: "#202733", textWrap: "pretty" }}>
                      {q?.headline}
                    </p>
                    <blockquote style={{ position: "relative", margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#475467", textWrap: "pretty" }}>
                      {q?.quote}
                    </blockquote>
                    <figcaption style={{ position: "relative", marginTop: "auto", display: "flex", alignItems: "center", gap: "14px", paddingTop: "20px", borderTop: "1px solid #E7EAF0" }}>
                      <span style={{ flex: "none", width: "44px", height: "44px", borderRadius: "50%", background: "#101A28", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", font: "600 13px/1 'Geist Mono',monospace" }}>
                        {q?.ini}
                      </span>
                      <span style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                        <span style={{ fontWeight: "600", color: "#202733" }}>{q?.name}</span>
                        <span style={{ fontSize: "14px", color: "#667085" }}>{q?.role}{", "}{q?.company}</span>
                      </span>
                    </figcaption>
                  </figure>
                </Fragment>
              ))}
            </div>
            <div data-reveal="" data-d="180" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px 48px", padding: "28px 32px", borderRadius: "20px", background: "#fff", border: "1px solid #E7EAF0", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px 48px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "37px", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1", color: "#FF6B00" }}>
                    <span data-count="98">98</span>
                    %
                  </span>
                  <span style={{ fontSize: "14px", color: "#667085" }}>on-time delivery</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "37px", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                    <span data-count="25">25</span>
                    +
                  </span>
                  <span style={{ fontSize: "14px", color: "#667085" }}>production launches</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span data-count="6" style={{ fontSize: "37px", fontWeight: "500", letterSpacing: "-0.04em", lineHeight: "1" }}>
                    6
                  </span>
                  <span style={{ fontSize: "14px", color: "#667085" }}>countries served</span>
                </div>
              </div>
              <div style={{ flex: "1 1 420px", display: "flex", flexWrap: "wrap", gap: "14px 28px", maxWidth: "640px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "15px" }}>
                  <span style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#fff", border: "1px solid #E7EAF0", flex: "none", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF6B00" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11" />
                    </svg>
                  </span>
                  Microsoft Azure certified engineers
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "15px" }}>
                  <span style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#fff", border: "1px solid #E7EAF0", flex: "none", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF6B00" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </span>
                  ISO 27001-aligned processes
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "15px" }}>
                  <span style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#fff", border: "1px solid #E7EAF0", flex: "none", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF6B00" }}>
                    <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </span>
                  <span>
                    <strong style={{ fontWeight: "600" }}>Safe by default:</strong>
                    {" NDAs signed, IP is yours, data handled to GDPR standards."}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" style={{ scrollMarginTop: "72px", padding: "128px 0", background: "#F7F8FA" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "56px", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", position: "sticky", top: "120px" }}>
              <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#D35800" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#FF6B00" }} />
                FAQ
              </div>
              <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(31px,3.4vw,41px)", lineHeight: "1.05", letterSpacing: "-0.035em" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div data-reveal="" style={{ display: "flex", flexDirection: "column", gap: "12px", gridColumn: "span 2" }}>
              {(v.faqs || []).map((f: any, $index: number) => (
                <Fragment key={$index}>
                  <div style={{ borderRadius: "16px", background: "#fff", border: `1px solid ${f?.border ?? ""}`, boxShadow: f?.shadow, transition: "border-color 250ms,box-shadow 250ms" }}>
                    {" "}
                    <button onClick={f?.toggle} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "24px", padding: "24px 28px", background: "none", border: "none", cursor: "pointer", textAlign: "left", color: "#202733", fontSize: "17px", fontWeight: "500", letterSpacing: "-0.01em" }}>
                      {f?.q}{" "}
                      <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", background: f?.iconBg, color: f?.iconColor, display: "flex", alignItems: "center", justifyContent: "center", transform: `rotate(${f?.rot ?? ""})`, transition: "transform 400ms cubic-bezier(0.22,1,0.36,1),background 250ms" }}>
                        <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }}>
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </span>
                    </button>
                    {" "}
                    <div style={{ display: "grid", gridTemplateRows: f?.rows, transition: "grid-template-rows 450ms cubic-bezier(0.22,1,0.36,1)" }}>
                      <div style={{ overflow: "hidden" }}>
                        <p style={{ margin: "0", padding: "0 28px 26px", fontSize: "16px", lineHeight: "1.65", color: "#667085", maxWidth: "720px" }}>
                          {f?.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" onMouseMove={v.spot} style={{ scrollMarginTop: "72px", position: "relative", padding: "128px 0", color: "#fff", background: "radial-gradient(700px circle at var(--mx,30%) var(--my,40%),rgba(255,107,0,.14),transparent 60%),#101A28", overflow: "hidden" }}>
          <svg viewBox="-4 -4 366 361" data-mark="" data-markplay="" aria-hidden="true" style={{ position: "absolute", right: "-60px", bottom: "-80px", height: "560px", width: "568px", opacity: ".08", overflow: "visible" }}>
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
          <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "64px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div data-reveal="" style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 12px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#FFB52E" }}>
                <span style={{ width: "20px", height: "1.5px", background: "#FFB52E" }} />
                Get Started
              </div>
              <h2 data-reveal="" data-d="80" style={{ margin: "0", fontWeight: "500", fontSize: "clamp(31px,4.3vw,56px)", lineHeight: "1", letterSpacing: "-0.04em" }}>
                So… What Are We Building?
              </h2>
              <p data-reveal="" data-d="160" style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#C3CAD5", maxWidth: "480px" }}>
                {"A product, some AI, a modernization, or more hands on deck? We're in. Expect a reply within 24 hrs"}
              </p>
              <span data-reveal="" data-d="220" style={{ display: "flex", alignItems: "center", gap: "10px", font: "400 14px/1.4 'Geist Mono',monospace", color: "#98A2B3" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#3DD68C" }} />
                No sales pressure. Just a real chat with real engineers.
              </span>
            </div>
            <div data-reveal="" data-d="120" style={{ background: "#fff", color: "#202733", borderRadius: "20px", padding: "36px", boxShadow: "0 24px 64px rgba(0,0,0,.3)" }}>
              {v.notSent ? (
                <>
                  <form onSubmit={v.submit} noValidate style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "14px" }}>
                      <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", fontWeight: "500", color: "#667085" }}>
                        {"Name "}
                        <input className="dc-focus-ktogc6" required placeholder="Your name" value={v.cName ?? ""} onChange={v.cSetName} style={{ height: "48px", padding: "0 14px", borderRadius: "10px", border: `1px solid ${v.cNameBd ?? ""}`, background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none", transition: "border-color 150ms,background 150ms" }} />
                        {v.cNameErr ? (
                          <>
                            <span style={{ fontSize: "12px", fontWeight: "400", color: "#C4320A" }}>Please enter your name.</span>
                          </>
                        ) : null}
                      </label>
                      <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", fontWeight: "500", color: "#667085" }}>
                        {"Work email "}
                        <input className="dc-focus-ktogc6" required type="email" placeholder="you@company.com" value={v.cEmail ?? ""} onChange={v.cSetEmail} style={{ height: "48px", padding: "0 14px", borderRadius: "10px", border: `1px solid ${v.cEmailBd ?? ""}`, background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none", transition: "border-color 150ms,background 150ms" }} />
                        {v.cEmailErr ? (
                          <>
                            <span style={{ fontSize: "12px", fontWeight: "400", color: "#C4320A" }}>{v.cEmailMsg}</span>
                          </>
                        ) : null}
                      </label>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span style={{ fontSize: "13px", fontWeight: "500", color: "#667085" }}>What do you need?</span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {(v.needChips || []).map((c: any, $index: number) => (
                          <Fragment key={$index}>
                            {" "}
                            <button type="button" onClick={c?.toggle} style={{ padding: "9px 14px", borderRadius: "999px", border: `1px solid ${c?.border ?? ""}`, background: c?.bg, color: "#202733", fontSize: "14px", cursor: "pointer", transition: "all 150ms" }}>
                              {c?.label}
                            </button>
                            {" "}
                          </Fragment>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span style={{ fontSize: "13px", fontWeight: "500", color: "#667085" }}>When?</span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {(v.whenChips || []).map((c: any, $index: number) => (
                          <Fragment key={$index}>
                            {" "}
                            <button type="button" onClick={c?.toggle} style={{ padding: "9px 14px", borderRadius: "999px", border: `1px solid ${c?.border ?? ""}`, background: c?.bg, color: "#202733", fontSize: "14px", cursor: "pointer", transition: "all 150ms" }}>
                              {c?.label}
                            </button>
                            {" "}
                          </Fragment>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "6px" }}>
                      <button className="dc-hover-jt0d2h" type="submit" style={{ display: "inline-flex", alignItems: "center", height: "50px", padding: "0 24px", borderRadius: "10px", border: "none", background: "#FF6B00", color: "#202733", fontWeight: "500", fontSize: "15px", cursor: "pointer", transition: "transform 250ms,box-shadow 250ms" }}>
                        {"Let's Talk"}
                      </button>
                      <button className="dc-hover-5rdcqz" type="button" onClick={v.bookOpen} style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "50px", padding: "0 22px", borderRadius: "10px", border: "1.5px solid #202733", background: "transparent", color: "#202733", fontWeight: "500", fontSize: "15px", cursor: "pointer", transition: "color 250ms,border-color 250ms" }}>
                        <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: "18px", height: "18px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                          <rect x="3" y="5" width="18" height="16" rx="2" />
                          <path d="M16 3v4M8 3v4M3 10h18" />
                        </svg>
                        Book a Scoping Call
                      </button>
                    </div>
                  </form>
                </>
              ) : null}
              {v.sent ? (
                <>
                  <div style={{ minHeight: "360px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "18px", textAlign: "center" }}>
                    <span style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#FFF4E8", color: "#FF6B00", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 24 24" style={{ width: "28px", height: "28px", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "23px", fontWeight: "500", letterSpacing: "-0.02em" }}>
                      {"Got it! We'll be in touch within 24 hours."}
                    </span>
                    <button onClick={v.reset} style={{ background: "none", border: "none", color: "#667085", fontSize: "14px", cursor: "pointer", textDecoration: "underline", textDecorationColor: "#FF6B00", textUnderlineOffset: "4px" }}>
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
      {v.book ? (
        <>
          <div role="dialog" aria-modal="true" aria-label="Book a scoping call" style={{ position: "fixed", inset: "0", zIndex: "310", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
            <div data-bookbg="" onClick={v.bookClose} style={{ position: "absolute", inset: "0", background: "rgba(16,26,40,.6)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }} />
            <div data-bookpanel="" style={{ position: "relative", width: "100%", maxWidth: "880px", maxHeight: "calc(100vh - 48px)", overflow: "auto", background: "#fff", borderRadius: "20px", boxShadow: "0 24px 64px rgba(0,0,0,.3)" }}>
              <div style={{ position: "sticky", top: "0", zIndex: "1", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", padding: "26px 32px 20px", background: "#fff", borderBottom: "1px solid #E7EAF0" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".14em", textTransform: "uppercase", color: "#D35800" }}>
                    Book a Scoping Call
                  </span>
                  <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-0.02em", color: "#202733" }}>
                    Pick a Time That Works for You
                  </span>
                  <span style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", fontSize: "14px", color: "#667085" }}>
                    <span>30 minutes</span>
                    <span>Video call</span>
                    <span>Times in IST (GMT+5:30)</span>
                  </span>
                </div>
                <button className="dc-hover-1cwh004" type="button" onClick={v.bookClose} aria-label="Close" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #E7EAF0", background: "#fff", color: "#202733", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 200ms" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round" }}>
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {v.bForm ? (
                <>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "28px 36px", padding: "28px 32px 32px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                        <span style={{ fontSize: "17px", fontWeight: "600", color: "#202733" }}>{v.bMonthLabel}</span>
                        <span style={{ display: "flex", gap: "6px" }}>
                          <button className="dc-hover-vpkagg" type="button" onClick={v.bPrevM} disabled={v.bPrevDis} aria-label="Previous month" style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #E7EAF0", background: "#fff", color: "#202733", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", opacity: v.bPrevOp }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M15 18l-6-6 6-6" />
                            </svg>
                          </button>
                          <button className="dc-hover-vpkagg" type="button" onClick={v.bNextM} disabled={v.bNextDis} aria-label="Next month" style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #E7EAF0", background: "#fff", color: "#202733", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", opacity: v.bNextOp }}>
                            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M9 18l6-6-6-6" />
                            </svg>
                          </button>
                        </span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,minmax(0,1fr))", gap: "6px", textAlign: "center", font: "500 11px/1 'Geist Mono',monospace", letterSpacing: ".08em", textTransform: "uppercase", color: "#98A2B3" }}>
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,minmax(0,1fr))", gap: "6px" }}>
                        {(v.bDays || []).map((d: any, $index: number) => (
                          <Fragment key={$index}>
                            {" "}
                            <button className="dc-hover-8woejs" type="button" onClick={d?.pick} disabled={d?.dis} aria-pressed={d?.sel} aria-label={d?.aria} style={{ aspectRatio: "1", minHeight: "40px", borderRadius: "12px", border: `1px solid ${d?.border ?? ""}`, background: d?.bg, color: d?.fg, fontSize: "15px", fontWeight: d?.fw, cursor: d?.cursor, visibility: d?.vis, transition: "background 200ms,border-color 200ms,color 200ms", "--dc-pv1": d?.hover } as React.CSSProperties}>
                              {d?.label}
                            </button>
                            {" "}
                          </Fragment>
                        ))}
                      </div>
                      <span style={{ fontSize: "13px", color: "#667085" }}>Calls run Monday to Friday.</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "18px", minWidth: "0" }}>
                      {v.bNoDate ? (
                        <>
                          <div style={{ flex: "1", minHeight: "220px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px", padding: "24px", borderRadius: "16px", border: "1px dashed #D0D5DD", background: "#F7F8FA", textAlign: "center", color: "#667085", fontSize: "15px" }}>
                            <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: "28px", height: "28px", fill: "none", stroke: "#98A2B3", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <rect x="3" y="5" width="18" height="16" rx="2" />
                              <path d="M16 3v4M8 3v4M3 10h18" />
                            </svg>
                            {" Choose a date to see available times. "}
                          </div>
                        </>
                      ) : null}
                      {v.bHasDate ? (
                        <>
                          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            <span style={{ fontSize: "15px", fontWeight: "600", color: "#202733" }}>{v.bDateLabel}</span>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(96px,1fr))", gap: "8px" }}>
                              {(v.bSlots || []).map((sl: any, $index: number) => (
                                <Fragment key={$index}>
                                  {" "}
                                  <button className="dc-hover-vpkagg" type="button" onClick={sl?.pick} aria-pressed={sl?.sel} style={{ height: "44px", borderRadius: "10px", border: `1px solid ${sl?.border ?? ""}`, background: sl?.bg, color: sl?.fg, fontSize: "14px", fontWeight: "500", cursor: "pointer", transition: "all 200ms" }}>
                                    {sl?.t}
                                  </button>
                                  {" "}
                                </Fragment>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : null}
                      {v.bHasTime ? (
                        <>
                          <form onSubmit={v.bSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "18px", borderTop: "1px solid #E7EAF0" }}>
                            <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                              <span style={{ fontSize: "13px", fontWeight: "500", color: "#202733" }}>Full name *</span>
                              <input className="dc-focus-ktogc6" type="text" value={v.bName ?? ""} onChange={v.bSetName} placeholder="Your name" autoComplete="name" style={{ height: "46px", padding: "0 14px", borderRadius: "10px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none", fontFamily: "inherit", borderColor: v.bNameBd }} />
                            </label>
                            <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                              <span style={{ fontSize: "13px", fontWeight: "500", color: "#202733" }}>Work email *</span>
                              <input className="dc-focus-ktogc6" type="email" value={v.bEmail ?? ""} onChange={v.bSetEmail} placeholder="you@company.com" autoComplete="email" style={{ height: "46px", padding: "0 14px", borderRadius: "10px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none", fontFamily: "inherit", borderColor: v.bEmailBd }} />
                            </label>
                            <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                              <span style={{ fontSize: "13px", fontWeight: "500", color: "#202733" }}>What would you like to discuss?</span>
                              <textarea className="dc-focus-ktogc6" value={v.bNote ?? ""} onChange={v.bSetNote} rows={3} placeholder="A line or two about your project" style={{ padding: "12px 14px", borderRadius: "10px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none", fontFamily: "inherit", resize: "vertical" }} />
                            </label>
                            {v.bErr ? (
                              <>
                                <span style={{ fontSize: "13px", color: "#C4320A" }}>Please add your name and a valid email.</span>
                              </>
                            ) : null}
                            <button className="dc-hover-jt0d2h" type="submit" style={{ height: "50px", borderRadius: "10px", border: "none", background: "#FF6B00", color: "#202733", fontWeight: "500", fontSize: "15px", cursor: "pointer", transition: "transform 250ms,box-shadow 250ms" }}>
                              {"Book "}{v.bTime}{" in Google Calendar"}
                            </button>
                          </form>
                        </>
                      ) : null}
                    </div>
                  </div>
                </>
              ) : null}
              {v.bSent ? (
                <>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "48px 32px 44px", textAlign: "center" }}>
                    <span style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#FFF4E8", color: "#D35800", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 24 24" style={{ width: "28px", height: "28px", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-0.02em", color: "#202733" }}>Almost Done</span>
                    <span style={{ fontSize: "16px", color: "#202733" }}>{v.bDateLabel}{" · "}{v.bTime}{" IST"}</span>
                    <span style={{ maxWidth: "440px", fontSize: "15px", lineHeight: "1.6", color: "#667085" }}>
                      Google Calendar has opened in a new tab with your slot filled in. Save the event there to send the invite to contact@emburc.com.
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginTop: "8px" }}>
                      <button className="dc-hover-bfwk17" type="button" onClick={v.bGcal} style={{ height: "46px", padding: "0 20px", borderRadius: "10px", border: "1.5px solid #202733", background: "#fff", color: "#202733", fontWeight: "500", fontSize: "15px", cursor: "pointer" }}>
                        Reopen Google Calendar
                      </button>
                      <button className="dc-hover-ibxlr1" type="button" onClick={v.bIcs} style={{ height: "46px", padding: "0 20px", borderRadius: "10px", border: "1.5px solid #E7EAF0", background: "#fff", color: "#202733", fontWeight: "500", fontSize: "15px", cursor: "pointer" }}>
                        Other Calendar (.ics)
                      </button>
                      <button type="button" onClick={v.bookClose} style={{ height: "46px", padding: "0 20px", borderRadius: "10px", border: "none", background: "#101A28", color: "#fff", fontWeight: "500", fontSize: "15px", cursor: "pointer" }}>
                        Done
                      </button>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </>
      ) : null}
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
                    So… What Are We Building?
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
                      <input className="dc-focus-ktogc6" data-tf="name" value={v.tName ?? ""} onChange={v.setName} placeholder="Jane Smith" autoComplete="name" style={{ height: "48px", padding: "0 14px", borderRadius: "10px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none", width: "100%", transition: "border-color 150ms,background 150ms", borderColor: v.nameBd }} />
                      {v.eName ? (
                        <>
                          <span style={{ fontSize: "12px", color: "#C4320A" }}>{v.eNameMsg}</span>
                        </>
                      ) : null}
                    </label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "14px" }}>
                      <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "500", color: "#202733" }}>
                          Email *
                        </span>
                        <input className="dc-focus-ktogc6" data-tf="email" type="email" value={v.tEmail ?? ""} onChange={v.setEmail} placeholder="you@example.com" autoComplete="email" style={{ height: "48px", padding: "0 14px", borderRadius: "10px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none", width: "100%", transition: "border-color 150ms,background 150ms", borderColor: v.emailBd }} />
                        {v.eEmail ? (
                          <>
                            <span style={{ fontSize: "12px", color: "#C4320A" }}>{v.eEmailMsg}</span>
                          </>
                        ) : null}
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
                            Tell us the service you need *
                          </span>
                          <input className="dc-focus-ktogc6" data-tf="other" value={v.tOther ?? ""} onChange={v.setOther} placeholder="e.g. Data engineering, QA automation" style={{ height: "48px", padding: "0 14px", borderRadius: "10px", border: "1px solid #E7EAF0", background: "#F7F8FA", fontSize: "15px", color: "#202733", outline: "none", width: "100%", transition: "border-color 150ms,background 150ms", borderColor: v.otherBd }} />
                          {v.eOther ? (
                            <>
                              <span style={{ fontSize: "12px", color: "#C4320A" }}>{v.eOtherMsg}</span>
                            </>
                          ) : null}
                        </label>
                        {" "}
                      </>
                    ) : null}
                    <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "500", color: "#202733" }}>
                        What are you building? *
                      </span>
                      <textarea className="dc-focus-ktogc6" data-tf="msg" value={v.tMsg ?? ""} onChange={v.setMsg} maxLength={2000} rows={4} placeholder="Describe your project — what it does, where you are, what you need. Any deadlines or constraints?" style={{ padding: "12px 14px", borderRadius: "10px", border: `1px solid ${v.msgBd ?? ""}`, background: "#F7F8FA", fontSize: "15px", lineHeight: "1.5", color: "#202733", outline: "none", resize: "vertical", minHeight: "110px", transition: "border-color 150ms,background 150ms" }} />
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
                          Please fill in the highlighted fields to submit.
                        </span>
                        {" "}
                      </>
                    ) : null}
                    <span style={{ fontSize: "12px", color: "#667085", textAlign: "center" }}>
                      {"By submitting you agree to our "}
                      <a href="/privacy-policy" style={{ color: "#202733" }}>Privacy Policy</a>
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
