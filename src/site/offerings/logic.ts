// @ts-nocheck -- untyped DOM/animation code ported as-is from the prototype.
// Ported from "Offerings.dc.html" (Claude Design prototype). Behaviour is kept as designed:
// the class drives the page through state + imperative Web Animations on the DOM.
import React from "react";
import { DCLogic } from "@/lib/dc";

export const defaults = {};

export default class OfferingsLogic extends DCLogic {
  [key: string]: any;
  E = 'cubic-bezier(0.22, 1, 0.36, 1)';
  TECH = [['Frontend', ['React', 'Next.js', 'Vue', 'Angular', 'TypeScript', 'Tailwind']], ['Backend', ['Node.js', 'Python', 'Java', '.NET', 'PHP / Laravel']], ['Mobile', ['Flutter', 'React Native', 'Swift', 'Kotlin']], ['CMS & E-commerce', ['WordPress', 'Webflow', 'Shopify', 'WooCommerce']], ['Database', ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']], ['Cloud & DevOps', ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform']], ['AI & Automation', ['OpenAI', 'LangChain', 'Python ML', 'Vector databases']]];
  IND = [["Retail & E-commerce","Stores that sell while you sleep",["Shopify","Marketplaces"]],["Healthcare","Less admin, more care",["Appointments","Patient portals"]],["Finance","Apps that move money safely",["Payments","KYC"]],["Travel","Bookings without the headache",["Search","Payments"]],["Education","Learning, minus the loading screen",["Courses","Mobile apps"]],["Legal & Pharma","Paperwork, handled by software",["Document workflows","AI search"]]];
  WK = [["AI-Powered HR Advisor","HR Technology","/images/stock/photo-1521737604893-d14cc237f11d.jpg","85% faster response times · 75% higher HR efficiency"],["AI-Powered Threat Protection","Cybersecurity","/images/stock/photo-1550751827-4bd374c3f58b.jpg","200 days faster breach detection · 20% productivity improvement"],["AI-Powered Travel Experiences","Travel & Tourism","/images/stock/photo-1488646953014-85cb44e25828.jpg","Personalisation · Virtual Assistants · Dynamic Pricing"]];
  FAQ = [['How long does a project take?', 'A website takes 3–6 weeks and an MVP 6–10 weeks. Bigger builds get a phased plan upfront.'], ['Who owns the code?', 'You do. Every line, every file, backed by an NDA.'], ['Can you work with our existing team?', 'Yes. We slot into your tools, standups and sprints.'], ['Do you support after launch?', 'Yes. Every project includes 30 days of support, with ongoing plans after that.'], ['What technologies do you use?', 'Whatever fits your project best. See the stack above.'], ['How do we get started?', "Book a free call. We'll ask the annoying questions, then send a plan."]];
  state = { cs: -1, ch: 0, menu: false, tab: 0, ind: 0, wk: 0, faq: 0,
    talk: false, tName: '', tEmail: '', tPhone: '', tCode: '+91', tSvc: '', tOther: '', tMsg: '', tFile: '', tSent: false, tTried: false };

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

  logo(n) {
    const D = '/icons/devicon/', S = '/icons/si/', V = '/icons/si/';
    return ({ 'React': D + 'react/react-original.svg', 'Next.js': D + 'nextjs/nextjs-original.svg', 'Vue': D + 'vuejs/vuejs-original.svg', 'Angular': D + 'angularjs/angularjs-original.svg', 'TypeScript': D + 'typescript/typescript-original.svg', 'Tailwind': D + 'tailwindcss/tailwindcss-original.svg', 'Node.js': D + 'nodejs/nodejs-original.svg', 'Python': D + 'python/python-original.svg', 'Java': D + 'java/java-original.svg', '.NET': D + 'dotnetcore/dotnetcore-original.svg', 'PHP / Laravel': D + 'laravel/laravel-original.svg', 'Flutter': D + 'flutter/flutter-original.svg', 'React Native': D + 'react/react-original.svg', 'Swift': D + 'swift/swift-original.svg', 'Kotlin': D + 'kotlin/kotlin-original.svg', 'WordPress': D + 'wordpress/wordpress-plain.svg', 'Webflow': S + 'webflow.svg', 'Shopify': V + 'shopify-v9.svg', 'WooCommerce': D + 'woocommerce/woocommerce-original.svg', 'PostgreSQL': D + 'postgresql/postgresql-original.svg', 'MySQL': D + 'mysql/mysql-original.svg', 'MongoDB': D + 'mongodb/mongodb-original.svg', 'Redis': D + 'redis/redis-original.svg', 'AWS': D + 'amazonwebservices/amazonwebservices-original-wordmark.svg', 'Azure': D + 'azure/azure-original.svg', 'Google Cloud': D + 'googlecloud/googlecloud-original.svg', 'Docker': D + 'docker/docker-original.svg', 'Kubernetes': D + 'kubernetes/kubernetes-original.svg', 'Terraform': D + 'terraform/terraform-original.svg', 'OpenAI': V + 'openai-v9.svg', 'LangChain': S + 'langchain.svg', 'Python ML': D + 'python/python-original.svg' })[n] || '';
  }
  bindImgs() {
    document.querySelectorAll('img[data-lazy]').forEach(img => { const u = img.dataset.lazy; if (u && !u.includes('{{') && img.getAttribute('src') !== u) img.src = u; });
    document.querySelectorAll('[data-techlogo]').forEach(img => {
      const want = img.dataset.logo, fb = img.nextElementSibling;
      if (want === '' && img.dataset.src !== 'none') { img.dataset.src = 'none'; img.style.display = 'none'; if (fb) fb.style.display = 'flex'; return; }
      if (!want || want.includes('{{') || img.dataset.src === want) return;
      img.dataset.src = want; img.style.display = ''; if (fb) fb.style.display = 'none';
      img.onerror = () => { img.style.display = 'none'; if (fb) fb.style.display = 'flex'; };
      img.src = want;
    });
  }
  playFan(card) {
    if (!card || this.rm) return;
    const E = this.E;
    card.querySelectorAll('[data-mini]').forEach(m => { m.getAnimations().forEach(x => x.cancel()); const i = +m.dataset.mini; m.animate([{ transform: 'translate(-50%,40px) rotate(0deg) scale(.86)', opacity: 0 }, { transform: 'translate(-50%,6px) rotate(0deg) scale(.96)', opacity: 1, offset: .35 }, { transform: m.dataset.final, opacity: 1 }], { duration: 1100, delay: i === 1 ? 0 : 120, easing: E, fill: 'backwards' }); });
    const c = card.querySelector('[data-curve]'); if (c) { const L = c.getTotalLength(); c.style.strokeDasharray = L; c.getAnimations().forEach(x => x.cancel()); c.animate([{ strokeDashoffset: L }, { strokeDashoffset: 0 }], { duration: 900, delay: 650, easing: 'ease-in-out', fill: 'backwards' }); }
    const t = card.querySelector('[data-fantext]'); if (t) [...t.children].forEach((el, k) => { el.getAnimations().forEach(x => x.cancel()); el.animate([{ opacity: 0, filter: 'blur(8px)', transform: 'translateY(8px)' }, { opacity: 1, filter: 'blur(0)', transform: 'none' }], { duration: 700, delay: 900 + k * 150, easing: E, fill: 'backwards' }); });
  }
  componentDidMount() {
    this.rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const q = s => document.querySelector(s), qa = s => document.querySelectorAll(s);
    this._tab = this.state.tab; this._ind = this.state.ind; this._wk = this.state.wk;
    this.goHash = () => { const id = decodeURIComponent(location.hash.slice(1)); const el = id && document.getElementById(id); if (!el) return; window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 96, behavior: 'smooth' }); if (id !== 'build') el.animate([{ boxShadow: '0 0 0 0 rgba(250,123,32,0)' }, { boxShadow: '0 0 0 4px rgba(250,123,32,.55)' }, { boxShadow: '0 0 0 0 rgba(250,123,32,0)' }], { duration: 1600, delay: 500, easing: 'ease-in-out' }); };
    addEventListener('hashchange', this.goHash); if (location.hash) setTimeout(this.goHash, 350);
    this.onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight, b = q('[data-progress]'); if (b) b.style.transform = 'scaleX(' + (h > 0 ? scrollY / h : 0) + ')';
      const pr = q('[data-process]'), fill = q('[data-railfill]');
      if (pr && fill) { const r = pr.getBoundingClientRect(); fill.style.transform = 'scaleY(' + Math.max(0, Math.min(1, (innerHeight * 0.6 - r.top) / r.height)) + ')'; }
      qa('[data-node]').forEach(n => { const on = n.getBoundingClientRect().top < innerHeight * 0.6; n.style.background = on ? '#FA7B20' : '#fff'; n.style.borderColor = on ? '#FA7B20' : '#D0D5DD'; n.style.color = on ? '#101A28' : '#667085'; });
    };
    window.addEventListener('scroll', this.onScroll, { passive: true }); this.onScroll();
    this.onCsKey = e => { if (e.key === 'Escape' && this.state.cs >= 0) this.closeCs(); }; window.addEventListener('keydown', this.onCsKey);
    const L = { build: [["'web web cus' 'web web ai' 'mob mod glob'", 3], ["'web web' 'cus ai' 'mob mod' 'glob glob'", 2], ["'web' 'cus' 'ai' 'mob' 'mod' 'glob'", 1]], why: [["'a logo b' 'c logo d'", 3], ["'logo logo' 'a b' 'c d'", 2], ["'logo' 'a' 'b' 'c' 'd'", 1]] };
    this.onResize = () => { const k = innerWidth < 760 ? 2 : innerWidth < 1000 ? 1 : 0; qa('[data-bento]').forEach(g => { const [a, c] = L[g.dataset.bento][k]; g.style.gridTemplateAreas = a; g.style.gridTemplateColumns = 'repeat(' + c + ',minmax(0,1fr))'; }); };
    const baseResize = this.onResize;
    this.onResize = () => { baseResize(); const w = innerWidth; qa('[data-crow]').forEach(el => { el.style.gridTemplateColumns = w < 760 ? 'minmax(0,1fr)' : w < 1000 ? 'minmax(0,40px) minmax(0,1fr) minmax(0,1fr)' : 'minmax(0,56px) minmax(0,1.1fr) minmax(0,1fr) minmax(0,300px)'; const vis = el.lastElementChild; if (vis) { vis.style.gridColumn = w < 1000 && w >= 760 ? '2 / span 2' : ''; vis.style.justifyContent = w < 1000 ? 'flex-start' : 'flex-end'; } }); };
    window.addEventListener('resize', this.onResize); this.onResize();
    this.io = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return; const el = en.target; this.io.unobserve(el);
      if (el.hasAttribute('data-fancard')) this.playFan(el);
      el.style.opacity = ''; el.animate([{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'none' }], { duration: 750, delay: +(el.dataset.d || 0), easing: this.E, fill: 'backwards' });
      el.querySelectorAll('[data-sprint]').forEach((s, k) => s.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 600, delay: 300 + k * 250, easing: this.E, fill: 'backwards' }));
      el.querySelectorAll('[data-spark]').forEach(p => { const len = p.getTotalLength(); p.style.strokeDasharray = len; p.animate([{ strokeDashoffset: len }, { strokeDashoffset: 0 }], { duration: 1400, delay: 300, easing: 'ease-in-out', fill: 'backwards' }); });
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    setTimeout(() => this.bindImgs(), 0);
    if (this.rm) return;
    setTimeout(() => { qa('[data-reveal]').forEach(el => { if (el.getBoundingClientRect().top > innerHeight) { el.style.opacity = '0'; this.io.observe(el); } }); }, 0);
    const kb = q('[data-kb]'); kb && kb.animate([{ transform: 'scale(1.02)' }, { transform: 'scale(1.1)' }], { duration: 22000, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' });
    const mq = q('[data-marquee]'); mq && mq.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(calc(-50% - 6px))' }], { duration: 40000, iterations: Infinity, easing: 'linear' });
    const rg = q('[data-ring]'); rg && rg.animate([{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }], { duration: 40000, iterations: Infinity, easing: 'linear' });
    const bl = q('[data-blob="c"]'); bl && bl.animate([{ transform: 'translate(0,0) scale(1)' }, { transform: 'translate(-80px,60px) scale(1.12)' }], { duration: 12000, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' });
    const hl = q('[data-heroloop]');
    if (hl) { const l = hl.querySelector('[data-ml]'), r = hl.querySelector('[data-mr]'), o = hl.querySelector('[data-mo]'); const kf = d => [{ transform: 'translateX(' + d + 'px)', opacity: .3 }, { transform: 'translateX(0)', opacity: 1, offset: .35 }, { transform: 'translateX(0)', opacity: 1, offset: .75 }, { transform: 'translateX(' + d + 'px)', opacity: .3 }]; const op = { duration: 6000, iterations: Infinity, easing: 'cubic-bezier(0.65,0,0.35,1)' }; l.animate(kf(-90), op); r.animate(kf(90), op); o.animate([{ opacity: 0 }, { opacity: 0, offset: .33 }, { opacity: 1, offset: .37 }, { opacity: 1, offset: .73 }, { opacity: 0, offset: .77 }, { opacity: 0 }], { duration: 6000, iterations: Infinity }); }
    qa('[data-rise]').forEach(el => el.animate([{ transform: 'translateY(105%)' }, { transform: 'none' }], { duration: 900, delay: +el.dataset.d, easing: this.E, fill: 'backwards' }));
    qa('[data-autoplay]').forEach(svg => { const o = { duration: 800, easing: this.E, fill: 'backwards' }; const l = svg.querySelector('[data-ml]'), r = svg.querySelector('[data-mr]'), m = svg.querySelector('[data-mo]'); l && l.animate([{ transform: 'translateX(-30px)', opacity: 0 }, { transform: 'none', opacity: 1 }], o); r && r.animate([{ transform: 'translateX(30px)', opacity: 0 }, { transform: 'none', opacity: 1 }], o); m && m.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, delay: 600, fill: 'backwards' }); });
    const pu = q('[data-pulse]'); pu && pu.animate([{ boxShadow: '0 0 0 0 rgba(250,123,32,.5)' }, { boxShadow: '0 0 0 8px rgba(250,123,32,0)' }], { duration: 1400, iterations: Infinity });
    let tick = 0; const users = q('[data-users]'), load = q('[data-load]'), ltxt = q('[data-loadtxt]'), mon = q('[data-month]');
    this.cht = setInterval(() => {
      tick = (tick + 1) % 20; const p = tick < 12 ? tick / 11 : 1;
      const u = Math.round(100 + 900 * p * p);
      if (users) users.textContent = u.toLocaleString('en-US');
      if (load) { load.style.width = (10 + 90 * p) + '%'; load.style.background = p > .8 ? '#E4490A' : p > .5 ? '#FA7B20' : '#101A28'; }
      if (ltxt) { ltxt.textContent = p > .8 ? 'SERVER STRUGGLING' : p > .5 ? 'SLOWING DOWN' : 'SERVER OK'; ltxt.style.color = p > .8 ? '#E4490A' : p > .5 ? '#B84A00' : '#12B76A'; }
      if (mon && tick % 4 === 0) mon.textContent = String(6 + Math.floor(tick / 4));
    }, 350);
    const pf = q('[data-phonefloat]'); pf && pf.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-12px)' }], { duration: 3200, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' });
    const PO = { duration: 5200, iterations: Infinity, easing: 'cubic-bezier(0.45,0,0.25,1)' };
    pf && pf.animate([{ translate: '0 0', offset: 0 }, { translate: '0 0', offset: .16 }, { translate: '18px 0', offset: .3 }, { translate: '0 0', offset: .46 }, { translate: '0 0', offset: .56 }, { translate: '-18px 0', offset: .7 }, { translate: '0 0', offset: .86 }, { translate: '0 0', offset: 1 }], PO);
    const fl = q('[data-figl]'), fr = q('[data-figr]');
    fl && fl.animate([
      { transform: 'translateX(-22px) rotate(0deg) scaleY(1)', offset: 0 },
      { transform: 'translateX(0px) rotate(4deg) scaleY(1)', offset: .16 },
      { transform: 'translateX(18px) rotate(11deg) scaleY(.94)', offset: .3 },
      { transform: 'translateX(-6px) rotate(0deg) scaleY(1)', offset: .46 },
      { transform: 'translateX(-36px) rotate(-5deg) scaleY(1)', offset: .7 },
      { transform: 'translateX(-22px) rotate(0deg) scaleY(1)', offset: 1 }], PO);
    fr && fr.animate([
      { transform: 'translateX(22px) rotate(0deg) scaleY(1)', offset: 0 },
      { transform: 'translateX(36px) rotate(5deg) scaleY(1)', offset: .3 },
      { transform: 'translateX(6px) rotate(0deg) scaleY(1)', offset: .46 },
      { transform: 'translateX(0px) rotate(-4deg) scaleY(1)', offset: .56 },
      { transform: 'translateX(-18px) rotate(-11deg) scaleY(.94)', offset: .7 },
      { transform: 'translateX(22px) rotate(0deg) scaleY(1)', offset: 1 }], PO);
    this.cht2 = setInterval(() => this.setState(s => ({ ch: (s.ch + 1) % 6 })), 5000);
    this.chBar();
    this.wkt = setInterval(() => this.setState(s => ({ wk: (s.wk + 1) % this.WK.length })), 6000);
  }
  chBar() {
    document.querySelectorAll('[data-chbar]').forEach(b => { b.getAnimations().forEach(x => x.cancel()); b.style.transform = 'scaleX(0)'; });
    const b = document.querySelector('[data-chbar="' + this.state.ch + '"]');
    if (b && this.cht2 && !this.rm) b.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 5000, easing: 'linear', fill: 'forwards' });
  }
  componentDidUpdate() {
    this.bindImgs();
    if (this._ch !== this.state.ch) { this._ch = this.state.ch; this.chBar(); if (!this.rm) { const fc = document.querySelectorAll('[data-fixcard]')[this.state.ch]; fc && fc.animate([{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }], { duration: 600, delay: 250, easing: this.E, fill: 'backwards' }); } }
    const s = this.state; if (this.rm) { this._tab = s.tab; this._ind = s.ind; this._wk = s.wk; return; }
    const pop = (sel, kf) => { const el = document.querySelector(sel); el && el.animate(kf, { duration: 450, easing: this.E }); };
    if (this._tab !== s.tab) { this._tab = s.tab; document.querySelectorAll('[data-techgrid] > *').forEach((el, k) => el.animate([{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }], { duration: 420, delay: k * 40, easing: this.E, fill: 'backwards' })); }
    if (this._ind !== s.ind) { this._ind = s.ind; pop('[data-indinfo]', [{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }]); }
    if (this._wk !== s.wk) { this._wk = s.wk; pop('[data-wkinfo]', [{ opacity: 0, transform: 'translateX(-16px)' }, { opacity: 1, transform: 'none' }]); }
  }
  openCs(i) {
    this.setState({ cs: i }); document.body.style.overflow = 'hidden'; clearInterval(this.wkt);
    const d = document.querySelector('[data-csdrawer="' + i + '"]'); if (d) d.scrollTop = 0;
    if (this.rm) return;
    setTimeout(() => {
      d && d.querySelectorAll('[data-cssec]').forEach((el, k) => el.animate([{ opacity: 0, transform: 'translateY(20px)' }, { opacity: 1, transform: 'none' }], { duration: 600, delay: 150 + k * 90, easing: this.E, fill: 'backwards' }));
      d && d.querySelectorAll('[data-cscount]').forEach(el => { const to = +el.dataset.cscount, t0 = performance.now(); const tick = t => { const p = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); });
    }, 60);
  }
  closeCs() { this.setState({ cs: -1 }); document.body.style.overflow = ''; }
  componentWillUnmount() { window.removeEventListener('keydown', this.onCsKey); window.removeEventListener('scroll', this.onScroll); window.removeEventListener('resize', this.onResize); this.onKey && window.removeEventListener('keydown', this.onKey); document.body.style.overflow = ''; this.io && this.io.disconnect(); clearInterval(this.wkt); clearInterval(this.cht); clearInterval(this.cht2); }
  renderVals() {
    const s = this.state;
    const ix = (n, fn) => Object.fromEntries(Array.from({ length: n }, (_, i) => ['i' + i, fn(i)]));
    const out = {
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
      emailBd: s.tTried && !/^\S+@\S+\.\S+$/.test(s.tEmail) ? '#F04438' : '#E7EAF0',
      msgBd: s.tTried && s.tMsg.trim().length < 15 ? '#F04438' : '#E7EAF0',
      tError: s.tTried && !(s.tName.trim() && /^\S+@\S+\.\S+$/.test(s.tEmail) && s.tMsg.trim().length >= 15),
      submitBg: s.tName.trim() && /^\S+@\S+\.\S+$/.test(s.tEmail) && s.tMsg.trim().length >= 15 ? '#101A28' : '#667085',
      tSubmit: e => { e.preventDefault(); const ok = s.tName.trim() && /^\S+@\S+\.\S+$/.test(s.tEmail) && s.tMsg.trim().length >= 15; this.setState(ok ? { tSent: true } : { tTried: true }); },
      menuOn: s.menu ? 'true' : 'false', menuColor: s.menu ? '#FF6B00' : '#202733', menuRot: s.menu ? '180deg' : '0deg', menuBar: s.menu ? 1 : 0,
      menuOp: s.menu ? 1 : 0, menuY: s.menu ? '0px' : '-8px', menuColY: s.menu ? '0px' : '10px', menuPe: s.menu ? 'auto' : 'none',
      menuOpen: () => { clearTimeout(this.mt); this.setState({ menu: true }); },
      menuClose: () => { clearTimeout(this.mt); this.mt = setTimeout(() => this.setState({ menu: false }), 120); },
      menuToggle: () => this.setState(st => ({ menu: !st.menu })),
      replayFan: e => { const c = e.currentTarget; if (c._fanT && Date.now() - c._fanT < 2200) return; c._fanT = Date.now(); this.playFan(c); },
      csOpen: () => this.openCs(s.wk), csClose: () => this.closeCs(), csTalk: e => { this.closeCs(); out.talkOpen(e); },
      csX: ix(3, i => s.cs === i ? '0%' : '105%'), csH: ix(3, i => s.cs === i ? 'false' : 'true'), csOp: s.cs >= 0 ? 1 : 0, csPe: s.cs >= 0 ? 'auto' : 'none',
      chList: [["Vague requirements","Everyone wants \"something like Uber, but for X.\" Nobody's written it down."],["Slow delivery","Six months in, and the demo still says \"coming soon.\""],["Scaling pain","It worked great for 100 users. Then 1,000 showed up."],["Budget creep","The quote said three months. The invoice says otherwise."],["Hiring bottlenecks","Your best developer is also your only developer."],["Legacy lock-in","Nobody touches the old system. Nobody knows how it works."]].map(([t, d], i) => { const a = s.ch === i; return { t, d, i: String(i), n: '0' + (i + 1), sel: a ? 'true' : 'false', nC: a ? '#E4490A' : '#98A2B3', tC: a ? '#202733' : '#98A2B3', rows: a ? '1fr' : '0fr', pick: () => { if (s.ch !== i) this.setState({ ch: i }); } }; }),
      chHold: () => { clearInterval(this.cht2); this.cht2 = null; this.chBar(); },
      chOp: ix(6, i => s.ch === i ? 1 : 0), chY: ix(6, i => s.ch === i ? '0px' : '14px'),
      chDots: [0, 1, 2, 3, 4, 5].map(i => ({ w: s.ch === i ? '18px' : '5px', bg: s.ch === i ? '#202733' : '#D0D5DD' })),
      repel: e => {
        if (this.rm) return; const zone = e.currentTarget, ph = zone.querySelector('[data-phone]'); if (!ph) return;
        const r = ph.getBoundingClientRect(), cx = r.left + r.width / 2 - (parseFloat(ph.dataset.tx) || 0), cy = r.top + r.height / 2 - (parseFloat(ph.dataset.ty) || 0);
        const dx = e.clientX - cx, dy = e.clientY - cy, dist = Math.hypot(dx, dy) || 1, reach = 420;
        const f = Math.max(0, 1 - dist / reach), push = 110 * f * f;
        const tx = -dx / dist * push, ty = -dy / dist * push * .7;
        ph.dataset.tx = tx; ph.dataset.ty = ty;
        ph.style.transition = 'transform 500ms cubic-bezier(0.22,1,0.36,1)';
        ph.style.transform = 'translate(' + tx.toFixed(1) + 'px,' + ty.toFixed(1) + 'px) rotateY(' + (-dx / dist * 18 * f).toFixed(2) + 'deg) rotateX(' + (dy / dist * 12 * f).toFixed(2) + 'deg) rotateZ(' + (-dx / dist * 4 * f).toFixed(2) + 'deg)';
        const g = ph.querySelector('[data-glare]'); if (g) g.style.opacity = f;
      },
      unrepel: e => { const ph = e.currentTarget.querySelector('[data-phone]'); if (!ph) return; ph.dataset.tx = 0; ph.dataset.ty = 0; ph.style.transition = 'transform 900ms cubic-bezier(0.34,1.56,0.64,1)'; ph.style.transform = ''; const g = ph.querySelector('[data-glare]'); if (g) g.style.opacity = 0; },
      tilt: e => { if (this.rm) return; const el = e.currentTarget, r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; el.style.transition = 'transform 120ms ease-out'; el.style.transform = 'rotateY(' + (x * 22) + 'deg) rotateX(' + (-y * 16) + 'deg) scale(1.03)'; const g = el.querySelector('[data-glare]'); if (g) { g.style.opacity = 1; g.style.background = 'linear-gradient(' + (115 + x * 60) + 'deg,rgba(255,255,255,.22),rgba(255,255,255,0) 45%)'; } },
      untilt: e => { const el = e.currentTarget; el.style.transition = 'transform 700ms cubic-bezier(0.22,1,0.36,1)'; el.style.transform = 'rotateY(-8deg) rotateX(4deg)'; setTimeout(() => { el.style.transform = ''; }, 350); const g = el.querySelector('[data-glare]'); if (g) g.style.opacity = 0; },
      techTabs: this.TECH.map(([label], i) => { const a = s.tab === i; return { label, sel: a ? 'true' : 'false', bg: a ? '#101A28' : '#fff', fg: a ? '#fff' : '#202733', bd: a ? '#101A28' : '#E7EAF0', pick: () => { if (s.tab !== i) this.setState({ tab: i }); } }; }),
      techTiles: this.TECH[s.tab][1].map(n => ({ n, logo: this.logo(n), i: n.replace(/[^A-Za-z.]/g, '').slice(0, 2) })),
      inds: this.IND.map(([name], i) => { const a = s.ind === i; return { name, n: '0' + (i + 1), sel: a ? 'true' : 'false', bg: a ? '#101A28' : '#fff', fg: a ? '#fff' : '#202733', bd: a ? '#101A28' : '#E7EAF0', arr: a ? 1 : 0, pick: () => { if (s.ind !== i) this.setState({ ind: i }); } }; }),
      ind: { name: this.IND[s.ind][0].toUpperCase(), line: this.IND[s.ind][1], tags: this.IND[s.ind][2] },
      indOp: ix(6, i => s.ind === i ? 1 : 0), indSc: ix(6, i => s.ind === i ? 1 : 1.06),
      wkOp: ix(3, i => s.wk === i ? 1 : 0), wkSc: ix(3, i => s.wk === i ? 1.06 : 1),
      wk: { n: '0' + (s.wk + 1), name: this.WK[s.wk][0], type: this.WK[s.wk][1], line: this.WK[s.wk][3] },
      wkDots: this.WK.map(([name], i) => ({ label: 'Show ' + name, w: s.wk === i ? '36px' : '14px', bg: s.wk === i ? '#FA7B20' : 'rgba(255,255,255,.35)', pick: () => { clearInterval(this.wkt); this.setState({ wk: i }); } })),
      wkPeek: [1, 2].map(k => { const i = (s.wk + k) % this.WK.length, [name, type, img] = this.WK[i]; return { name, type, img, pick: () => { clearInterval(this.wkt); this.setState({ wk: i }); } }; }),
      faqs: this.FAQ.map(([q, a], i) => { const o = s.faq === i; return { q, a, n: '0' + (i + 1), exp: o ? 'true' : 'false', rows: o ? '1fr' : '0fr', rot: o ? '45deg' : '0deg', bd: o ? '#D0D5DD' : '#E7EAF0', sh: o ? '0 12px 32px rgba(16,26,40,.06)' : 'none', nC: o ? '#E4490A' : '#98A2B3', pBg: o ? '#101A28' : '#F2F4F7', pFg: o ? '#fff' : '#202733', toggle: () => this.setState({ faq: o ? -1 : i }) }; })
    };
    return out;
  }
}
