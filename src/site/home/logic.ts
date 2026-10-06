// @ts-nocheck -- untyped DOM/animation code ported as-is from the prototype.
// Ported from "Emburc Homepage- Final.dc.html" (Claude Design prototype). Behaviour is kept as designed:
// the class drives the page through state + imperative Web Animations on the DOM.
import React from "react";
import { DCLogic } from "@/lib/dc";

export const defaults = {"showSplash":true,"motion":"Expressive","autoAdvance":true};

export default class HomeLogic extends DCLogic {
  [key: string]: any;
  E = 'cubic-bezier(0.22, 1, 0.36, 1)';
  CASES = [
    { tag: 'FinTech', title: 'Turning Deal Analysis into Faster Sales Decisions', challenge: 'A FinTech business needed a faster way to evaluate sales opportunities and extract useful insights from large amounts of deal information.', built: 'An AI-powered deal analysis solution that processes deal data, identifies relevant patterns, and helps teams make more informed decisions.', impact: ['Faster deal evaluation', 'More actionable sales insights', 'Improved decision-making efficiency'], sol: 'AI-powered Deal Analysis', img: 'photo-1600880292089-90a7e086ee0c', alt: 'Sales team reviewing deal data together' },
    { tag: 'Retail Investment', title: 'Making Investment Research Faster with AI', challenge: 'A retail investment research company was spending significant time manually analysing information and turning it into useful insights for investors.', built: 'An AI-driven solution that simplifies research workflows, accelerates analysis, and helps transform complex information into actionable investment insights.', impact: ['Reduced research effort', 'Faster analysis', 'More actionable insights for investors'], sol: 'AI-Driven Investment Research', img: 'photo-1642790106117-e829e14a795f', alt: 'Investment research dashboard on a laptop' },
    { tag: 'RegTech', title: 'Automating Document Verification for Compliance', challenge: 'A US-based RegTech business needed to streamline document verification and reduce the manual effort involved in licensing and compliance processes.', built: 'An automated document verification solution designed to simplify verification workflows and support faster regulatory processes.', impact: ['Reduced manual verification', 'Faster document processing', 'More efficient compliance workflows'], sol: 'Automated Compliance Verification', img: 'photo-1554224154-26032ffc0d07', alt: 'Compliance documents being checked' }
  ];
  OFFERS = [
    { n: '01', title: 'Digital Product Development', line: 'Build scalable digital products designed around your business goals.', items: ['Website Development', 'Web Application Development', 'Mobile App Development', 'Custom Software Development', 'SaaS / Product Development'], img: '/images/stock/photo-1551650975-87deedd944c3.jpg' },
    { n: '02', title: 'AI & Automation', line: 'Turn AI into practical solutions that improve products, workflows and operations.', items: ['Generative AI', 'AI Applications', 'AI Agents', 'Business Automation', 'Data & AI Solutions'], img: '/images/stock/photo-1551288049-bebda4e38f71.jpg' },
    { n: '03', title: 'Modernization & Migration', line: 'Modernize legacy technology and create a stronger foundation for growth.', items: ['Cloud Migration', 'Application Migration', 'Legacy Modernization', 'System Integration', 'API & Platform Modernization'], img: '/images/stock/photo-1558494949-ef010cbdcc31.jpg' }
  ];
  SETUPS = [
    { name: 'Staff Augmentation', line: 'Short on hands? Add vetted seniors fast.', best: 'Best for skill gaps like AI/ML and DevOps.' },
    { name: 'Dedicated Dev Teams', line: 'Your own full squad of architects, devs and QA.', best: 'Best for long-haul products.' },
    { name: 'Managed Teams', line: 'We run it end to end.', best: 'You get milestones, not micromanagement.' }
  ];
  STEPS = [
    { title: 'Understand', icon: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4.3-4.3', text: 'We learn the problem before touching code.' },
    { title: 'Align', icon: 'M4 6h16M4 12h11M4 18h7', text: 'Team, stack and milestones, sorted.' },
    { title: 'Build', icon: 'm8 6-6 6 6 6M16 6l6 6-6 6', text: 'Tight sprints. Tested code. No surprises.' },
    { title: 'Evolve', icon: 'M3 17l6-6 4 4 8-8M15 7h6v6', text: 'Launch, monitor, then scale up or down.' }
  ];
  IND = [
    ['Retail', 'photo-1441986300917-64674bd600d8'], ['Healthcare', 'photo-1576091160399-112ba8d25d1d'], ['Finance', 'photo-1554224155-6726b3ff858f'],
    ['Cybersecurity', 'photo-1550751827-4bd374c3f58b'], ['Legal', 'photo-1589829545856-d10d557cf95f'], ['Travel', 'photo-1436491865332-7a61a109cc05'], ['Pharma', 'photo-1587854692152-cbe660dbde88']
  ];
  FAQ = [
    ['What does eMburc do?', "We're a Technology + Talent Partner offering digital engineering and AI services. We build products, add AI that works in production, modernise old systems, manage your infrastructure, and supply senior engineers. Pick one, or stack them. Delivery runs across the UK and India."],
    ["What's a technology and talent partner?", "It's one partner who can both build your tech and staff your team. Hand us a full project, add engineers to your squad, or mix both. When your needs change from building to running to scaling, you don't need to change vendors."],
    ["What's the difference between staff augmentation, dedicated teams and managed teams?", 'It comes down to who runs the work. With staff augmentation, our engineers join your team and you lead them. A dedicated team is a full squad working only on your product. With a managed team, we run the squad and own delivery, and you get outcomes and weekly updates.'],
    ['Can you build it and then run it?', "Yes, and that's the sweet spot. The team that builds your product keeps it running after launch, so nothing gets lost in handover. Scale the team up later, or take it fully in-house whenever you like."],
    ['How fast can I get engineers?', "You get a vetted shortlist in 72 hours and engineers typically start in 2–4 weeks, depending on notice periods. Every engineer is technically assessed by practitioners. If someone isn't the right fit, we replace them free."],
    ['How much does it cost?', 'It depends on what you need, and we tell you upfront. Projects are quoted after a short discovery, managed services are a monthly fee, and engineers are priced by role and seniority. No plot twists.']
  ];
  NEEDS = ['Digital Product Development', 'AI & Automation', 'Modernization & Migration', 'Talent Solutions', 'Not sure yet'];
  WHENS = ['ASAP', '1–3 months', '3–6 months', 'Just exploring'];

  // Testimonials: add, edit or reorder entries here; the section layout adapts automatically.
  TESTIMONIALS = [
    { name: 'Sunil Kumar', role: 'Founder', company: 'Infronest', headline: 'They feel less like an outsourced team and more like part of our product team.', quote: "The real test of a technology partner isn't how fast they write code. It's how well they understand the problem. That's what we've valued most about eMburc. When you're building a multi-tenant platform where security, isolation and reliability can't be afterthoughts, you need people who think about architecture and long-term scale, not just the next ticket. eMburc brings that mix of technical depth, product thinking and business sense. Whether we're talking integrations, automation, AI or modernising parts of the stack, they come in with a structured, solution-first view." },
    { name: 'Shubham Anand', role: 'Founder', company: 'The Xamp Media', headline: "They've become a partner we rely on.", quote: "We brought eMburc in when our digital plans started getting more ambitious than our in-house team could handle. What stood out was how quickly they got what we were trying to do. There wasn't a long learning curve, and they genuinely worked with us rather than just taking instructions. The solutions they built have held up well as we've grown." },
    { name: 'Sagar KD', role: 'Founder', company: 'Theos', headline: 'eMburc got it right.', quote: "Our offering is broad, and we needed a website that made it feel simple. They understood our business quickly, the UX is thoughtful, and the site genuinely reflects our brand. Great team to work with." },
  ];
  tTrack = React.createRef();
  tScroll(dir) { const el = this.tTrack.current; if (!el) return; const card = el.firstElementChild; const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth; const max = el.scrollWidth - el.clientWidth; const to = el.scrollLeft + dir * step; el.scrollTo({ left: to > max + 4 ? 0 : to < -4 ? max : to, behavior: 'smooth' }); }
  state = { talk: false, tName: '', tEmail: '', tPhone: '', tCode: '+91', tSvc: '', tOther: '', tMsg: '', tFile: '', tSent: false, tTried: false, csi: 0, menu: false, hov: -1, vi: 0, splash: this.props.showSplash ?? true, offer: 0, setup: 0, step: 0, faq: 0, ind: 0, need: [], when: null, sent: false };

  componentDidMount() {
    this.rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      const bar = document.querySelector('[data-progress]');
      if (bar) bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
      if (this.rm) return;
      document.querySelectorAll('[data-parallax]').forEach(el => {
        const r = el.parentElement.getBoundingClientRect();
        el.style.transform = `translateY(${-r.top * parseFloat(el.dataset.parallax) - 20}px)`;
      });
    };
    const _os = this.onScroll;
    this.onScroll = () => {
      _os();
      const cards = [...document.querySelectorAll('[data-stack]')];
      cards.forEach((c, i) => {
        const n = cards[i + 1], inner = c.firstElementChild;
        if (!n || !inner || this.rm) return;
        const cr = c.getBoundingClientRect(), nr = n.getBoundingClientRect();
        const p = Math.max(0, Math.min(1, (cr.bottom - nr.top) / cr.height));
        inner.style.transform = 'scale(' + (1 - p * 0.06) + ')';
      });
    };
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onMove = e => { this.mxp = e.clientX; this.myp = e.clientY; this.lastMove = performance.now(); };
    window.addEventListener('mousemove', this.onMove, { passive: true });
    if (!this.rm) this.headLoop();
    this.onScroll();
    if (this.state.splash && !this.rm) this.runSplash();
    else { if (this.state.splash) this.setState({ splash: false }); this.startPage(); }
  }
  componentWillUnmount() {
    clearInterval(this.tqT);
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('mousemove', this.onMove);
    cancelAnimationFrame(this.raf); clearInterval(this.bt); clearInterval(this.vt);
    clearInterval(this.ot); clearInterval(this.st); this.onKey && window.removeEventListener('keydown', this.onKey); document.body.style.overflow = ''; this.csAnim && this.csAnim.cancel(); clearTimeout(this.sp);
    this.io && this.io.disconnect();
  }
  componentDidUpdate(pp, ps) {
    if (ps.offer !== this.state.offer) this.animOffer();
    if (ps.vi !== this.state.vi && !this.rm) { const b = document.querySelector('[data-bubble]'); b && b.animate([{ opacity: 0, transform: 'translateY(8px) scale(.9)' }, { opacity: 1, transform: 'none' }], { duration: 400, easing: this.E }); }
    if (!ps.splash && this.state.splash) this.runSplash();
    if ((pp.autoAdvance ?? true) !== (this.props.autoAdvance ?? true)) { this.restartOfferTimer(); this.restartStepTimer(); this.animOffer(); }
  }
  calm() { return this.rm || (this.props.motion ?? 'Expressive') === 'Calm'; }
  auto() { return (this.props.autoAdvance ?? true) && !this.rm; }

  playMark(svg, dist, delay = 0) {
    if (!svg || this.rm) return;
    const l = svg.querySelector('[data-ml]'), r = svg.querySelector('[data-mr]'), o = svg.querySelector('[data-mo]');
    const opt = { duration: 750, delay, easing: this.E, fill: 'backwards' };
    l && l.animate([{ transform: `translateX(${-dist}px)`, opacity: 0 }, { transform: 'translateX(0)', opacity: 1 }], opt);
    r && r.animate([{ transform: `translateX(${dist}px)`, opacity: 0 }, { transform: 'translateX(0)', opacity: 1 }], opt);
    o && o.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, delay: delay + 560, fill: 'backwards' });
  }
  runSplash(tries = 0) {
    if (tries === 0) { clearTimeout(this.splashHard); this.splashHard = setTimeout(() => { if (this.state.splash) { this.setState({ splash: false }); this.startPage(); } }, 9000); }
    const s = document.querySelector('[data-splash]');
    if (!s) { if (tries < 90) requestAnimationFrame(() => this.runSplash(tries + 1)); return; }
    if (s.dataset.run === '1') return; s.dataset.run = '1';
    const v = s.querySelector('[data-splashvid]'); let gone = false, started = false;
    const end = () => { if (gone) return; gone = true; clearTimeout(this.splashT); clearTimeout(this.splashWait); clearTimeout(this.splashHard); this.startPage(); requestAnimationFrame(() => { const an = s.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 650, easing: 'cubic-bezier(0.4,0,0.2,1)', fill: 'forwards' }); an.onfinish = () => this.setState({ splash: false }); }); };
    s.onclick = end;
    if (!v) return end();
    v.muted = true; v.defaultMuted = true; v.playsInline = true;
    const show = () => v.animate([{ opacity: 0, transform: 'scale(.98)' }, { opacity: 1, transform: 'none' }], { duration: 400, easing: 'ease-out', fill: 'forwards' });
    const go = () => {
      if (started || gone) return; started = true; clearTimeout(this.splashWait);
      try { v.currentTime = 0; } catch (e) {}
      const p = v.play();
      if (p && p.then) p.then(() => { show(); this.splashT = setTimeout(end, ((v.duration || 6) * 1000) + 1200); }).catch(() => { show(); this.splashT = setTimeout(end, 1800); });
      else { show(); this.splashT = setTimeout(end, ((v.duration || 6) * 1000) + 1200); }
    };
    v.onended = () => setTimeout(end, 150); v.onerror = end;
    if (v.readyState >= 3) go(); else { v.addEventListener('canplay', go, { once: true }); this.splashWait = setTimeout(() => (v.readyState >= 2 ? go() : end()), 3000); }
  }
  startPage() {
    if (this.started) return;
    this.started = true;
    document.querySelectorAll('[data-autoplay]').forEach(m => this.playMark(m, +(m.dataset.dist || 30), +m.dataset.autoplay || 0));
    if (!this.rm) {
      document.querySelectorAll('[data-rise]').forEach(el => el.animate([{ transform: 'translateY(105%)' }, { transform: 'none' }], { duration: 900, delay: +el.dataset.d, easing: this.E, fill: 'backwards' }));
      document.querySelectorAll('[data-hline]').forEach(el => el.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 700, delay: 1000, easing: this.E, fill: 'backwards' }));
      const sd = document.querySelector('[data-shipdot]');
      sd && sd.animate([{ transform: 'scale(0)' }, { transform: 'scale(1.4)', offset: .6 }, { transform: 'scale(1)' }], { duration: 600, delay: 1100, easing: this.E, fill: 'backwards' });
    }
    const count = el => {
      const to = parseFloat(el.dataset.count), dec = +(el.dataset.dec || 0), t0 = performance.now();
      const tick = t => { const p = Math.min(1, (t - t0) / 1400), e = 1 - Math.pow(1 - p, 3); el.textContent = (to * e).toFixed(dec); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    };
    this.io = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target; this.io.unobserve(el);
      if (el.hasAttribute('data-reveal')) {
        el.style.opacity = '';
        el.animate([{ opacity: 0, transform: 'translateY(28px)' }, { opacity: 1, transform: 'none' }], { duration: 800, delay: +(el.dataset.d || 0), easing: this.E, fill: 'backwards' });
      }
      if (el.hasAttribute('data-count')) count(el);
      if (el.hasAttribute('data-markplay')) this.playMark(el, 40, 200);
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    if (!this.rm) {
      document.querySelectorAll('[data-reveal]').forEach(el => { el.style.opacity = '0'; this.io.observe(el); });
      document.querySelectorAll('[data-count],[data-markplay]').forEach(el => this.io.observe(el));
    }
    if (!this.calm()) {
      document.querySelectorAll('[data-marquee]').forEach(el => {
        const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
        el.style.paddingLeft = '0px'; el.style.paddingRight = gap + 'px';
        el.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }], { duration: +el.dataset.marquee * 1000, iterations: Infinity, easing: 'linear' });
      });
      document.querySelectorAll('[data-float]').forEach(el => el.animate([{ transform: 'translateY(0)' }, { transform: `translateY(${-el.dataset.float}px)` }], { duration: +el.dataset.dur, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' }));
      const loop = { iterations: Infinity };
      document.querySelectorAll('[data-caprow]').forEach(c => { const ar = c.querySelector('[data-caparrow]'); c.addEventListener('mouseenter', () => { ar.style.transform = 'rotate(45deg)'; ar.style.background = '#FF6B00'; ar.style.borderColor = '#FF6B00'; }); c.addEventListener('mouseleave', () => { ar.style.transform = ''; ar.style.background = ''; ar.style.borderColor = ''; }); });
      document.querySelectorAll('[data-hm]').forEach(c => c.addEventListener('mouseenter', () => { const i = c.querySelector('[data-hmicon]'); i && i.animate([{ transform: 'none' }, { transform: 'rotate(-8deg) scale(1.08)' }, { transform: 'none' }], { duration: 500, easing: this.E }); }));
      document.querySelectorAll('[data-does] > div').forEach(c => { const bar = c.querySelector('[data-topbar]'); c.addEventListener('mouseenter', () => bar.style.transform = 'scaleX(1)'); c.addEventListener('mouseleave', () => bar.style.transform = 'scaleX(0)'); });
      document.querySelectorAll('[data-spin]').forEach(el => el.animate([{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }], { duration: 40000, ...loop }));
      document.querySelectorAll('[data-bb]').forEach((el, k) => el.animate([{ opacity: 0, transform: 'translateY(16px) scale(.96)' }, { opacity: 1, transform: 'none', offset: .18 }, { opacity: 1, transform: 'none', offset: .85 }, { opacity: 0, transform: 'scale(.98)' }], { duration: 4200, delay: (k % 4) * 220, easing: this.E, ...loop }));
      document.querySelectorAll('[data-flow]').forEach(el => el.animate([{ left: '14px' }, { left: 'calc(100% - 14px)', offset: .82 }, { left: 'calc(100% - 14px)' }], { duration: 3200, easing: 'ease-in-out', ...loop }));
      document.querySelectorAll('[data-node]').forEach((el, k) => {
        const o = k / 3 * 0.82, base = { background: '#fff', borderColor: '#E7EAF0', transform: 'scale(1)' }, hot = { background: '#FFF4E8', borderColor: '#FF6B00', transform: 'scale(1.08)' };
        const fr = [{ ...base, offset: 0 }];
        if (o > 0.04) fr.push({ ...base, offset: o - 0.04 });
        fr.push({ ...hot, offset: Math.max(o, 0.001) });
        fr.push({ ...base, offset: Math.min(o + 0.14, 0.999) }, { ...base, offset: 1 });
        el.animate(fr, { duration: 3200, easing: 'ease-in-out', ...loop });
      });
      document.querySelectorAll('[data-cell]').forEach(el => {
        const [x, y] = el.dataset.cell.split(',').map(Number), c = x / 8;
        const col = 'rgb(255,' + Math.round(107 + c * 74) + ',' + Math.round(c * 46) + ')';
        el.animate([{ backgroundColor: '#202733', transform: 'scale(1)' }, { backgroundColor: col, transform: 'scale(.86)', offset: .3 }, { backgroundColor: col, transform: 'scale(1)', offset: .6 }, { backgroundColor: '#202733' }], { duration: 3600, delay: (x + y) * 90, easing: this.E, ...loop });
      });
      document.querySelectorAll('[data-join]').forEach((el, k) => { el.style.display = 'inline-block'; el.animate([{ opacity: 0, transform: 'translateX(40px)' }, { opacity: 1, transform: 'none', offset: .2 }, { opacity: 1, transform: 'none', offset: .85 }, { opacity: 0, transform: 'translateX(0)' }], { duration: 4000, delay: k * 300, easing: this.E, ...loop }); });
      document.querySelectorAll('[data-merge]').forEach(el => el.animate([{ transform: 'scale(1)' }, { transform: 'scale(1)', offset: .45 }, { transform: 'scale(1.06)', offset: .55 }, { transform: 'scale(1)', offset: .7 }, { transform: 'scale(1)' }], { duration: 4000, delay: 300, ...loop }));
      document.querySelectorAll('[data-nudge]').forEach(el => el.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(5px)' }], { duration: 900, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' }));
    }
    this.restartOfferTimer(); this.restartStepTimer(); this.animOffer(); this.csRun();
  }
  headLoop() {
    this.cx = 0; this.cy = 0; this.lastMove = -1e9;
    const q = s => document.querySelector(s);
    const tick = t => {
      this.raf = requestAnimationFrame(tick);
      const st = q('[data-hstage]');
      if (!st) return;
      const r = st.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      let dx = 0, dy = 0;
      if (t - this.lastMove < 3000) {
        dx = (this.mxp - (r.left + r.width / 2)) / (innerWidth * 0.5);
        dy = (this.myp - (r.top + r.height / 2)) / (innerHeight * 0.5);
      } else { dx = Math.sin(t / 2200) * 0.35; dy = Math.cos(t / 2900) * 0.2; }
      dx = Math.max(-1, Math.min(1, dx)); dy = Math.max(-1, Math.min(1, dy));
      this.cx += (dx - this.cx) * 0.07; this.cy += (dy - this.cy) * 0.07;
      const cx = this.cx, cy = this.cy;
      const sp = Math.max(0, Math.min(1, -r.top / (r.height * 0.9)));
      st.style.transform = 'perspective(1200px) rotateY(' + (cx * 8) + 'deg) rotateX(' + (-cy * 6) + 'deg)';
      const hl = q('[data-hl]'), hr = q('[data-hr]'), il = q('[data-il]'), ir = q('[data-ir]');
      if (hl) hl.style.transform = 'translate(' + (-sp * 12 + cx * 1.5) + 'px,' + (cy * 1.5) + 'px)';
      if (hr) hr.style.transform = 'translate(' + (sp * 12 + cx * 3) + 'px,' + (cy * 3) + 'px)';
      if (il) il.style.transform = 'translate(' + (-cx * 3) + 'px,' + (-cy * 3) + 'px)';
      if (ir) ir.style.transform = 'translate(' + (-cx * 4) + 'px,' + (-cy * 4) + 'px)';
      document.querySelectorAll('[data-chip]').forEach(el => { const k = el.dataset.chip === 'a' ? 26 : -20; el.style.transform = 'translate(' + (cx * k) + 'px,' + (cy * k * 0.6 + sp * k * 2) + 'px)'; });
      document.querySelectorAll('[data-hlabel]').forEach(el => { const k = el.dataset.hlabel === 'l' ? -14 : 14; el.style.transform = 'translate(' + (cx * 10 + sp * k * 4) + 'px,' + (cy * 6) + 'px)'; });
    };
    this.raf = requestAnimationFrame(tick);
  }
  blink() {
    document.querySelectorAll('[data-blink]').forEach(el => el.animate([{ transform: 'scaleY(1)' }, { transform: 'scaleY(.1)', offset: .5 }, { transform: 'scaleY(1)' }], { duration: 220, easing: 'ease-in-out' }));
  }
  csRun() {
    const bar = document.querySelector('[data-csbar="' + this.state.csi + '"]');
    this.csAnim && this.csAnim.cancel();
    if (!bar || !this.auto()) return;
    this.csAnim = bar.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 7000, easing: 'linear' });
    if (this.csPaused) this.csAnim.pause();
    this.csAnim.onfinish = () => this.setState(s => ({ csi: (s.csi + 1) % 3 }), () => this.csRun());
  }
  SLOTS = ['10:00', '11:00', '12:00', '14:30', '15:30', '16:30', '17:30'];
  bookOpenFn() {
    this.setState({ book: true, menu: false, bM: 0, bDate: '', bTime: '', bSent: false, bTried: false }, () => {
      document.body.style.overflow = 'hidden';
      const bg = document.querySelector('[data-bookbg]'), p = document.querySelector('[data-bookpanel]');
      bg && bg.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300 });
      p && p.animate([{ opacity: 0, transform: 'translateY(24px) scale(.97)' }, { opacity: 1, transform: 'none' }], { duration: 450, easing: this.E || 'ease' });
    });
    if (!this.onBookKey) { this.onBookKey = e => { if (e.key === 'Escape' && this.state.book) this.bookCloseFn(); }; window.addEventListener('keydown', this.onBookKey); }
  }
  bookCloseFn() {
    const p = document.querySelector('[data-bookpanel]');
    const done = () => { document.body.style.overflow = ''; this.setState(s => ({ book: false, ...(s.bSent ? { bName: '', bEmail: '', bNote: '' } : {}) })); };
    if (p) { const a = p.animate([{ opacity: 1 }, { opacity: 0, transform: 'translateY(16px) scale(.98)' }], { duration: 220 }); a.onfinish = done; } else done();
  }
  gcalUrl(s) {
    const [hh, mm] = s.bTime.split(':').map(Number);
    const st = new Date(Date.UTC(+s.bDate.slice(0, 4), +s.bDate.slice(5, 7) - 1, +s.bDate.slice(8, 10), hh, mm) - 330 * 60000), en = new Date(st.getTime() + 30 * 60000);
    const f = d => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const details = ['30-minute scoping call with eMburc.', 'Name: ' + (s.bName || '').trim(), 'Email: ' + (s.bEmail || '').trim(), s.bNote ? 'Topic: ' + s.bNote.trim() : ''].filter(Boolean).join('\n');
    const p = new URLSearchParams({ action: 'TEMPLATE', text: 'eMburc Scoping Call: ' + (s.bName || '').trim(), dates: f(st) + '/' + f(en), details, add: 'contact@emburc.com', ctz: 'Asia/Kolkata' });
    return 'https://calendar.google.com/calendar/render?' + p.toString();
  }
  bookVals(s) {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const base = new Date(today.getFullYear(), today.getMonth() + (s.bM || 0), 1);
    const lead = (base.getDay() + 6) % 7, dim = new Date(base.getFullYear(), base.getMonth() + 1, 0).getDate();
    const iso = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    const max = new Date(today); max.setDate(max.getDate() + 60);
    const days = [];
    for (let k = 0; k < lead; k++) days.push({ label: '', dis: true, vis: 'hidden', sel: 'false', aria: '', bg: 'transparent', fg: '#202733', border: 'transparent', fw: 400, cursor: 'default', hover: 'transparent', pick: () => {} });
    for (let n = 1; n <= dim; n++) {
      const d = new Date(base.getFullYear(), base.getMonth(), n), id = iso(d), wk = d.getDay() === 0 || d.getDay() === 6;
      const off = d <= today || wk || d > max, sel = s.bDate === id;
      days.push({ label: String(n), dis: off, vis: 'visible', sel: sel ? 'true' : 'false', aria: d.toDateString(), bg: sel ? '#101A28' : off ? 'transparent' : '#F7F8FA', fg: sel ? '#fff' : off ? '#C3CAD5' : '#202733', border: sel ? '#101A28' : 'transparent', fw: sel ? 600 : 500, cursor: off ? 'default' : 'pointer', hover: off ? 'transparent' : '#FF6B00', pick: () => { if (!off) this.setState({ bDate: id, bTime: '' }); } });
    }
    const sd = s.bDate ? new Date(s.bDate + 'T00:00:00') : null;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.bEmail || ''), nameOk = !!(s.bName || '').trim();
    return {
      book: !!s.book, bForm: !s.bSent, bSent: !!s.bSent,
      bMonthLabel: base.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
      bPrevDis: (s.bM || 0) <= 0, bPrevOp: (s.bM || 0) <= 0 ? .35 : 1, bNextDis: (s.bM || 0) >= 2, bNextOp: (s.bM || 0) >= 2 ? .35 : 1,
      bPrevM: () => this.setState(st => ({ bM: Math.max(0, (st.bM || 0) - 1) })), bNextM: () => this.setState(st => ({ bM: Math.min(2, (st.bM || 0) + 1) })),
      bDays: days, bNoDate: !s.bDate, bHasDate: !!s.bDate, bHasTime: !!s.bTime && !s.bSent,
      bDateLabel: sd ? sd.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' }) : '',
      bSlots: this.SLOTS.map(t => { const on = s.bTime === t; return { t, sel: on ? 'true' : 'false', bg: on ? '#FF6B00' : '#fff', fg: '#202733', border: on ? '#FF6B00' : '#E7EAF0', pick: () => this.setState({ bTime: t }) }; }),
      bTime: s.bTime, bName: s.bName || '', bEmail: s.bEmail || '', bNote: s.bNote || '',
      bSetName: e => this.setState({ bName: e.target.value }), bSetEmail: e => this.setState({ bEmail: e.target.value }), bSetNote: e => this.setState({ bNote: e.target.value }),
      bErr: !!s.bTried && !(nameOk && emailOk), bNameBd: s.bTried && !nameOk ? '#F04438' : '#E7EAF0', bEmailBd: s.bTried && !emailOk ? '#F04438' : '#E7EAF0',
      bSubmit: e => { e.preventDefault(); if (!(nameOk && emailOk)) return this.setState({ bTried: true }); window.open(this.gcalUrl(s), '_blank', 'noopener'); this.setState({ bSent: true }); },
      bGcal: () => window.open(this.gcalUrl(s), '_blank', 'noopener'),
      bIcs: () => {
        const [hh, mm] = s.bTime.split(':').map(Number); const st = new Date(Date.UTC(+s.bDate.slice(0, 4), +s.bDate.slice(5, 7) - 1, +s.bDate.slice(8, 10), hh, mm) - 330 * 60000), en = new Date(st.getTime() + 30 * 60000);
        const f = d => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
        const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//eMburc//Scoping Call//EN', 'BEGIN:VEVENT', 'UID:' + Date.now() + '@emburc.com', 'DTSTAMP:' + f(new Date()), 'DTSTART:' + f(st), 'DTEND:' + f(en), 'SUMMARY:eMburc scoping call', 'DESCRIPTION:30-minute scoping call with eMburc. Contact: contact@emburc.com', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
        const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' })); a.download = 'emburc-scoping-call.ics'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
      },
      bookOpen: e => { e && e.preventDefault && e.preventDefault(); this.bookOpenFn(); }, bookClose: () => this.bookCloseFn(),
    };
  }
  openTalk() {
    this.setState({ talk: true, menu: false }, () => {
      document.body.style.overflow = 'hidden';
      const bg = document.querySelector('[data-talkbg]'), p = document.querySelector('[data-talkpanel]');
      bg && bg.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300 });
      p && p.animate([{ opacity: 0, transform: 'translateY(24px) scale(.97)' }, { opacity: 1, transform: 'none' }], { duration: 450, easing: this.E });
      p && p.querySelectorAll('form > *').forEach((el, k) => el.animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], { duration: 400, delay: 120 + k * 40, easing: this.E, fill: 'backwards' }));
      const f = p && p.querySelector('input'); f && f.focus({ preventScroll: true });
    });
    if (!this.onKey) { this.onKey = e => { if (e.key === 'Escape' && this.state.talk) this.closeTalk(); }; window.addEventListener('keydown', this.onKey); }
  }
  closeTalk() {
    const p = document.querySelector('[data-talkpanel]'), bg = document.querySelector('[data-talkbg]');
    const done = () => { document.body.style.overflow = ''; this.setState(s => ({ talk: false, ...(s.tSent ? { tName: '', tEmail: '', tPhone: '', tSvc: '', tOther: '', tMsg: '', tFile: '', tSent: false, tTried: false } : {}) })); };
    if (!p || this.rm) return done();
    bg && bg.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 250, fill: 'forwards' });
    p.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(16px) scale(.98)' }], { duration: 250, easing: this.E, fill: 'forwards' }).onfinish = done;
  }
  csGo(i) { this.setState({ csi: (i + 3) % 3 }, () => this.csRun()); }
  restartOfferTimer() {
    clearInterval(this.ot);

  }
  restartStepTimer() {
    clearInterval(this.st);
    if (this.auto()) this.st = setInterval(() => this.setState(s => ({ step: (s.step + 1) % 4 })), 2800);
  }
  animOffer() {
    document.querySelectorAll('[data-bar]').forEach(b => b.getAnimations().forEach(a => a.cancel()));
    const bar = document.querySelector(`[data-bar="${this.state.offer}"]`);
    bar && bar.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: this.auto() ? 6000 : 500, easing: this.auto() ? 'linear' : this.E, fill: 'forwards' });
    if (this.rm) return;
    document.querySelectorAll('[data-oi]').forEach((el, k) => el.animate([{ opacity: 0, transform: 'translateX(-16px)' }, { opacity: 1, transform: 'none' }], { duration: 500, delay: 80 + k * 60, easing: this.E, fill: 'backwards' }));
    const t = document.querySelector('[data-ot]');
    t && t.animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], { duration: 500, easing: this.E });
    const f = document.querySelector('[data-oframe]');
    if (!f) return;
    const img = f.querySelector('[data-oimg]');
    img.getAnimations().forEach(a => a.cancel());
    img.animate([{ clipPath: 'inset(0 0 0 100%)', transform: 'scale(1.18)' }, { clipPath: 'inset(0 0 0 0)', transform: 'scale(1.08)' }], { duration: 900, easing: this.E, fill: 'both' });
    if (!this.calm()) img.animate([{ transform: 'scale(1.08) translateX(0)' }, { transform: 'scale(1.16) translateX(-2%)' }], { duration: 6000, delay: 900, easing: 'linear', fill: 'forwards', composite: 'replace' });
    const chip = f.querySelector('[data-ochip]');
    chip.animate([{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }], { duration: 600, delay: 350, easing: this.E, fill: 'backwards' });
    f.querySelector('[data-oscan]').animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 1400, delay: 500, easing: this.E, fill: 'backwards' });
    f.querySelector('[data-oshine]').animate([{ transform: 'translateX(0)' }, { transform: 'translateX(350%)' }], { duration: 1200, delay: 200, easing: this.E });
  }

  renderVals() {
    const s = this.state;
    const self = this;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((s.tEmail || '').trim()), otherMissing = s.tSvc === 'other' && !(s.tOther || '').trim();
    const tValid = !!(s.tName || '').trim() && emailOk && (s.tMsg || '').trim().length >= 15 && !otherMissing;
    return {
      ...this.bookVals(s),
      testimonials: this.TESTIMONIALS.map(t => ({ ...t, ini: t.name.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase() })),
      tTrack: this.tTrack, tPrev: () => this.tScroll(-1), tNext: () => this.tScroll(1),
      splash: s.splash,
      sent: s.sent,
      notSent: !s.sent,
      replay(e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); self.setState({ splash: true }, () => self.runSplash()); },
      tilt(e) {
        if (self.calm()) return;
        const el = e.currentTarget, r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        el.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 7}deg) translateY(-4px)`;
      },
      untilt(e) { e.currentTarget.style.transform = ''; },
      spot(e) {
        const el = e.currentTarget, r = el.getBoundingClientRect();
        el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        el.style.setProperty('--my', (e.clientY - r.top) + 'px');
      },
      menuOn: s.menu ? 'true' : 'false', menuColor: s.menu ? '#FF6B00' : '#202733', menuRot: s.menu ? '180deg' : '0deg', menuBar: s.menu ? 1 : 0,
      menuOp: s.menu ? 1 : 0, menuY: s.menu ? '0px' : '-8px', menuColY: s.menu ? '0px' : '10px', menuPe: s.menu ? 'auto' : 'none',
      menuOpen: () => { clearTimeout(this.mt); this.setState({ menu: true }); },
      menuClose: () => { clearTimeout(this.mt); this.mt = setTimeout(() => this.setState({ menu: false }), 120); },
      menuToggle: () => this.setState(st => ({ menu: !st.menu })),
      crOpen: !!this.state.cr, crNotSent: !this.state.crSent, crSentV: !!this.state.crSent,
      crName: this.state.crName || '', crEmail: this.state.crEmail || '', crPhone: this.state.crPhone || '', crRole: this.state.crRole || '', crExp: this.state.crExp || '', crLink: this.state.crLink || '', crMsg: this.state.crMsg || '',
      crSetName: e => this.setState({ crName: e.target.value }), crSetEmail: e => this.setState({ crEmail: e.target.value }), crSetPhone: e => this.setState({ crPhone: e.target.value }), crSetRole: e => this.setState({ crRole: e.target.value }), crSetExp: e => this.setState({ crExp: e.target.value }), crSetLink: e => this.setState({ crLink: e.target.value }), crSetMsg: e => this.setState({ crMsg: e.target.value }),
      crSetFile: e => this.setState({ crFile: e.target.files && e.target.files[0] ? e.target.files[0].name : '' }), crFileLabel: this.state.crFile || 'Attach your CV (PDF or Word)',
      crLine: '#E7EAF0', crNameBd: this.state.crTried && !(this.state.crName || '').trim() ? '#F04438' : '#E7EAF0', crEmailBd: this.state.crTried && !/^\S+@\S+\.\S+$/.test(this.state.crEmail || '') ? '#F04438' : '#E7EAF0',
      crError: !!this.state.crTried && !((this.state.crName || '').trim() && /^\S+@\S+\.\S+$/.test(this.state.crEmail || '') && this.state.crRole),
      crTypes: ['Job application', 'Internship', 'General enquiry'].map(label => { const a = (this.state.crType || 'Job application') === label; return { label, sel: a ? 'true' : 'false', bg: a ? '#101A28' : '#fff', fg: a ? '#fff' : '#202733', bd: a ? '#101A28' : '#E7EAF0', pick: () => this.setState({ crType: label }) }; }),
      crSubmit: e => { e.preventDefault(); const ok = (this.state.crName || '').trim() && /^\S+@\S+\.\S+$/.test(this.state.crEmail || '') && this.state.crRole; this.setState(ok ? { crSent: true } : { crTried: true }); },
      careersClose: this._crc || (this._crc = () => { this.setState({ cr: false, crSent: false, crTried: false }); document.body.style.overflow = ''; window.removeEventListener('keydown', this._crk); }),
      careersOpen: this._cro || (this._cro = e => { if (e && e.preventDefault) e.preventDefault(); this.setState({ cr: true }); document.body.style.overflow = 'hidden'; this._crk = this._crk || (ev => { if (ev.key === 'Escape') this._crc(); }); window.addEventListener('keydown', this._crk); setTimeout(() => { const p = document.querySelector('[data-crpanel]'), b = document.querySelector('[data-crbg]'); if (p && p.animate) { p.animate([{ opacity: 0, transform: 'translateY(24px) scale(.97)' }, { opacity: 1, transform: 'none' }], { duration: 500, easing: 'cubic-bezier(0.22,1,0.36,1)' }); } if (b && b.animate) b.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300 }); }, 20); }),
      talk: s.talk, tSent: s.tSent, tNotSent: !s.tSent,
      talkOpen: e => { e.preventDefault(); this.openTalk(); },
      talkAug: e => { e.preventDefault(); this.setState({ tSvc: 'Staff Augmentation' }); this.openTalk(); },
      talkPod: e => { e.preventDefault(); this.setState({ tSvc: 'Dedicated Teams / Delivery Pods' }); this.openTalk(); },
      talkDc: e => { e.preventDefault(); this.setState({ tSvc: 'Development Centers' }); this.openTalk(); },
      talkClose: () => this.closeTalk(),
      tName: s.tName, tEmail: s.tEmail, tPhone: s.tPhone, tCode: s.tCode, tSvc: s.tSvc, tOther: s.tOther, tMsg: s.tMsg,
      setName: e => this.setState({ tName: e.target.value }), setEmail: e => this.setState({ tEmail: e.target.value }),
      setPhone: e => this.setState({ tPhone: e.target.value }), setCode: e => this.setState({ tCode: e.target.value }),
      setSvc: e => this.setState({ tSvc: e.target.value }), setOther: e => this.setState({ tOther: e.target.value }),
      setMsg: e => this.setState({ tMsg: e.target.value.slice(0, 2000) }),
      setFile: e => this.setState({ tFile: e.target.files && e.target.files[0] ? e.target.files[0].name : '' }),
      svcOther: s.tSvc === 'other', svcColor: s.tSvc ? '#202733' : '#667085',
      msgCount: s.tMsg.length, msgPct: Math.min(100, s.tMsg.length / 15 * 100) + '%',
      msgHint: s.tMsg.length >= 15 ? 'Looks good' : (15 - s.tMsg.length) + ' characters to unlock',
      fileLabel: s.tFile ? 'Attached: ' + s.tFile : 'Have a spec or brief? Attach it',
      nameBd: s.tTried && !s.tName.trim() ? '#F04438' : '#E7EAF0',
      emailBd: s.tTried && !emailOk ? '#F04438' : '#E7EAF0',
      msgBd: s.tTried && s.tMsg.trim().length < 15 ? '#F04438' : '#E7EAF0',
      tError: s.tTried && !tValid,
      submitBg: tValid ? '#101A28' : '#667085',
      tSubmit: e => { e.preventDefault(); if (tValid) return this.setState({ tSent: true }); this.setState({ tTried: true }); const first = !(s.tName || '').trim() ? 'name' : !emailOk ? 'email' : otherMissing ? 'other' : 'msg'; setTimeout(() => { const el = document.querySelector('[data-tf="' + first + '"]'); el && el.focus(); }, 30); },
      eName: !!s.tTried && !(s.tName || '').trim(), eNameMsg: 'Please enter your name.',
      eEmail: !!s.tTried && !emailOk, eEmailMsg: (s.tEmail || '').trim() ? 'Please enter a valid email address.' : 'Please enter your email.',
      eOther: !!s.tTried && otherMissing, eOtherMsg: 'Please tell us which service you need.',
      otherBd: s.tTried && otherMissing ? '#F04438' : '#E7EAF0',
      cases: this.CASES.map((c, i) => {
        const on = i === s.csi;
        return { ...c, i, n: '0' + (i + 1), img: '/images/stock/' + c.img + '.jpg', op: on ? 1 : 0, pe: on ? 'auto' : 'none', vis: on ? 'visible' : 'hidden', hidden: on ? 'false' : 'true', scale: on ? 1 : 1.08, ty: on ? '0px' : '16px', fill: i < s.csi || (on && !this.auto()) ? 1 : 0, labelColor: on ? '#202733' : '#98A2B3', go: () => this.csGo(i) };
      }),
      csPrev: () => this.csGo(s.csi - 1),
      csNext: () => this.csGo(s.csi + 1),
      csPause: () => { this.csPaused = true; this.csAnim && this.csAnim.pause(); },
      csResume: () => { this.csPaused = false; this.csAnim && this.csAnim.play(); },
      offers: this.OFFERS.map((o, i) => {
        const on = s.hov === i;
        return { ...o, imgOp: on ? 1 : 0, imgScale: on ? 1 : 1.08, bar: on ? 1 : 0, rot: on ? '0deg' : '45deg', ring: on ? '#FF6B00' : 'rgba(255,255,255,.2)', ringBg: on ? '#FF6B00' : 'transparent', ringFg: on ? '#202733' : '#fff',
          btnBg: on ? '#FF6B00' : 'transparent', btnFg: on ? '#202733' : '#fff', btnBd: on ? '#FF6B00' : 'rgba(255,255,255,.25)',
          list: o.items.map((label, k) => ({ label, x: on ? '4px' : '0px', dash: on ? '14px' : '0px', delay: (k * 50) + 'ms' })),
          enter: () => this.setState({ hov: i }), leave: () => this.setState({ hov: -1 }) };
      }),
      offerTabs: this.OFFERS.map((o, i) => ({ ...o, idx: i, op: i === s.offer ? 1 : .45, select: () => { this.setState({ offer: i }); this.restartOfferTimer(); } })),
      cur: this.OFFERS[s.offer],
      setups: this.SETUPS.map((x, i) => {
        const on = i === s.setup;
        return { ...x, n: '0' + (i + 1), active: on, border: on ? '#FF6B00' : '#E7EAF0', bg: on ? '#FFF4E8' : '#fff', shadow: on ? '0 12px 32px rgba(255,107,0,.12)' : '0 4px 20px rgba(16,26,40,.04)', dot: on ? 1 : 0, select: () => this.setState({ setup: i }) };
      }),
      lineW: ((s.step + 1) / 4 * 100) + '%',
      steps: this.STEPS.map((x, i) => {
        const on = i === s.step, done = i < s.step;
        return { ...x, pressed: on ? 'true' : 'false', shadow: on ? '0 16px 36px rgba(16,26,40,.18)' : 'none', bg: on ? '#101A28' : done ? '#FFF4E8' : '#F7F8FA', border: on ? '#101A28' : done ? '#FFD2AE' : '#E7EAF0', fg: on ? '#fff' : '#202733', sub: on ? '#C3CAD5' : '#667085', iconBg: on ? '#FF6B00' : done ? '#fff' : '#fff', iconFg: on ? '#101A28' : done ? '#D35800' : '#202733', glow: on ? 1 : 0, rows: on ? '1fr' : '0fr', textOp: on ? 1 : 0, select: () => { this.setState({ step: i }); this.restartStepTimer(); } };
      }),
      industries: this.IND.map(([name, id], i) => {
        const on = i === s.ind;
        return { name, n: '0' + (i + 1), img: `/images/stock/${id}.jpg`, flex: on ? 4 : 1, op: on ? 1 : 0, vop: on ? 0 : 1, ty: on ? '0px' : '10px', scale: on ? 1 : 1.12, hover: () => this.setState({ ind: i }) };
      }),
      faqs: this.FAQ.map(([q, a], i) => {
        const on = i === s.faq;
        return { q, a, rows: on ? '1fr' : '0fr', rot: on ? '45deg' : '0deg', border: on ? '#FFD2AE' : '#E7EAF0', shadow: on ? '0 12px 32px rgba(16,26,40,.06)' : 'none', iconBg: on ? '#FF6B00' : '#F7F8FA', iconColor: '#202733', toggle: () => this.setState({ faq: on ? -1 : i }) };
      }),
      needChips: this.NEEDS.map(label => {
        const on = s.need.includes(label);
        return { label, border: on ? '#FF6B00' : '#E7EAF0', bg: on ? '#FFF4E8' : '#fff', toggle: () => this.setState(st => ({ need: on ? st.need.filter(x => x !== label) : [...st.need, label] })) };
      }),
      whenChips: this.WHENS.map(label => {
        const on = s.when === label;
        return { label, border: on ? '#FF6B00' : '#E7EAF0', bg: on ? '#FFF4E8' : '#fff', toggle: () => this.setState({ when: on ? null : label }) };
      }),
      cName: s.cName || '', cEmail: s.cEmail || '',
      cSetName: e => this.setState({ cName: e.target.value }), cSetEmail: e => this.setState({ cEmail: e.target.value }),
      cNameErr: !!s.cTried && !(s.cName || '').trim(), cEmailErr: !!s.cTried && !/^\S+@\S+\.\S+$/.test((s.cEmail || '').trim()),
      cEmailMsg: (s.cEmail || '').trim() ? 'Please enter a valid email address.' : 'Please enter your email.',
      cNameBd: s.cTried && !(s.cName || '').trim() ? '#F04438' : '#E7EAF0', cEmailBd: s.cTried && !/^\S+@\S+\.\S+$/.test((s.cEmail || '').trim()) ? '#F04438' : '#E7EAF0',
      submit: e => { e.preventDefault(); if (!(s.cName || '').trim() || !/^\S+@\S+\.\S+$/.test((s.cEmail || '').trim())) return this.setState({ cTried: true }); this.setState({ sent: true }); },
      reset: () => this.setState({ sent: false, need: [], when: null, cName: '', cEmail: '', cTried: false })
    };
  }
}
