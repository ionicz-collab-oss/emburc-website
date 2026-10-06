// @ts-nocheck -- untyped DOM/animation code ported as-is from the prototype.
// Ported from "Industries.dc.html" (Claude Design prototype). Behaviour is kept as designed:
// the class drives the page through state + imperative Web Animations on the DOM.
import React from "react";
import { DCLogic } from "@/lib/dc";

export const defaults = {};

export default class IndustriesLogic extends DCLogic {
  [key: string]: any;
  E = 'cubic-bezier(0.22, 1, 0.36, 1)';
  WK = [["AI-Powered HR Advisor","HR Technology","/images/stock/photo-1521737604893-d14cc237f11d.jpg","85% faster response times · 75% higher HR efficiency"],["AI-Powered Threat Protection","Cybersecurity","/images/stock/photo-1550751827-4bd374c3f58b.jpg","200 days faster breach detection · 20% productivity improvement"],["AI-Powered Travel Experiences","Travel & Tourism","/images/stock/photo-1488646953014-85cb44e25828.jpg","Personalisation · Virtual Assistants · Dynamic Pricing"]];
  IND = ['Retail', 'Healthcare', 'Finance', 'Cybersecurity', 'Legal', 'Travel & Hospitality', 'Pharma'];
  state = { dd: -1, wk: 0, cs: -1, hov: 0, menu: false, fFirst: '', fEmail: '', fInd: '', fModel: '', fMsg: '', sent: false, tried: false,
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

  componentDidMount() {
    this.onDl = () => {
      const tr = document.querySelector('[data-dltrack]'); if (!tr) return;
      const r = tr.getBoundingClientRect(), p = Math.max(0, Math.min(1, (innerHeight * 0.62 - r.top) / r.height));
      const fill = tr.querySelector('[data-dlfill]'); if (fill) fill.style.height = (p * 100).toFixed(1) + '%';
      const steps = [...tr.querySelectorAll('[data-dlstep]')], mark = innerHeight * 0.62; let act = 0;
      steps.forEach((el, k) => {
        const b = el.getBoundingClientRect(), done = b.bottom < mark, on = !done && b.top < mark;
        if (on || done) act = k;
        const dot = el.querySelector('[data-dldot]'), st = el.querySelector('[data-dlstat]'), state = done ? 'done' : on ? 'on' : 'next';
        if (el.dataset.s === state) return; el.dataset.s = state;
        el.style.opacity = state === 'next' ? '.55' : '1'; el.style.transform = state === 'next' ? 'translateX(8px)' : 'none';
        el.style.background = state === 'on' ? 'rgba(250,123,32,.08)' : 'rgba(255,255,255,.03)'; el.style.borderColor = state === 'on' ? 'rgba(250,123,32,.45)' : 'rgba(255,255,255,.08)';
        if (dot) { dot.style.background = state === 'next' ? '#101A28' : '#FA7B20'; dot.style.borderColor = state === 'next' ? 'rgba(255,255,255,.2)' : '#FA7B20'; dot.style.color = state === 'next' ? '#98A2B3' : '#101A28'; dot.style.boxShadow = state === 'on' ? '0 0 0 8px rgba(250,123,32,.16)' : 'none'; if (state === 'on' && !this.rm) dot.animate([{ transform: 'scale(.85)' }, { transform: 'scale(1.08)' }, { transform: 'scale(1)' }], { duration: 500, easing: 'ease-out' }); }
        if (st) { st.textContent = state === 'done' ? 'DONE' : state === 'on' ? 'IN PROGRESS' : 'UP NEXT'; st.style.background = state === 'done' ? 'rgba(255,181,46,.14)' : state === 'on' ? '#FA7B20' : 'rgba(255,255,255,.06)'; st.style.color = state === 'done' ? '#FFB52E' : state === 'on' ? '#101A28' : '#98A2B3'; }
      });
      const pct = Math.round(p * 100), ring = document.querySelector('[data-dlring]'), pe = document.querySelector('[data-dlpct]'), now = document.querySelector('[data-dlnow]');
      if (ring) ring.style.strokeDashoffset = (351.86 * (1 - p)).toFixed(1);
      if (pe) pe.textContent = pct + '%';
      if (now) { const name = pct >= 100 ? 'Live and improving' : (steps[act] && steps[act].querySelector('span > span') || {}).textContent || ''; if (now.textContent !== name) { now.textContent = name; if (!this.rm) now.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: 350, easing: 'ease-out' }); } }
      document.querySelectorAll('[data-dlseg]').forEach((sg, k) => { sg.style.background = k < act || pct >= 100 ? '#FA7B20' : k === act && p > 0 ? '#FFB52E' : 'rgba(255,255,255,.14)'; });
    };
    window.addEventListener('scroll', this.onDl, { passive: true }); window.addEventListener('resize', this.onDl); setTimeout(this.onDl, 300);
    this.rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const q = s => document.querySelector(s), qa = s => document.querySelectorAll(s);
    this.onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight, b = q('[data-progress]'); if (b) b.style.transform = 'scaleX(' + (h > 0 ? scrollY / h : 0) + ')';
      if (!this.rm) qa('[data-par]').forEach(img => { const r = img.parentElement.getBoundingClientRect(); const p = (r.top + r.height / 2 - innerHeight / 2) / innerHeight; img.style.transform = 'translateY(' + (p * -40).toFixed(1) + 'px) scale(1.12)'; });
    };
    window.addEventListener('scroll', this.onScroll, { passive: true }); this.onScroll();
    this.onResize = () => { const w = innerWidth, g = q('[data-stepgrid]'), l = q('[data-stepline]'); if (g) g.style.gridTemplateColumns = w < 760 ? 'minmax(0,1fr)' : w < 1100 ? 'repeat(3,minmax(0,1fr))' : 'repeat(6,minmax(0,1fr))'; if (l) l.style.display = w < 1100 ? 'none' : ''; qa('[data-row]').forEach(r => { const img = r.querySelector('[data-rowimg]'); if (img) img.style.order = w < 900 ? '0' : r.dataset.flip === '1' ? '2' : '0'; }); };
    window.addEventListener('resize', this.onResize); this.onResize();
    this.onCsKey = e => { if (e.key === 'Escape' && this.state.cs >= 0) this.closeCs(); }; window.addEventListener('keydown', this.onCsKey);
    this._wk = this.state.wk;
    setTimeout(() => this.bindImgs(), 0);
    this.io = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return; const el = en.target; this.io.unobserve(el);
      el.style.opacity = ''; if (this.rm) return;
      el.animate([{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'none' }], { duration: 750, delay: +(el.dataset.d || 0), easing: this.E, fill: 'backwards' });
      if (el.hasAttribute('data-rowimg')) el.animate([{ clipPath: 'inset(0 0 100% 0 round 28px)' }, { clipPath: 'inset(0 0 0 0 round 28px)' }], { duration: 1100, easing: this.E, fill: 'backwards' });
      if (el.hasAttribute('data-steps')) {
        const f = el.querySelector('[data-stepfill]'); f && f.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 2400, delay: 300, easing: 'ease-in-out', fill: 'forwards' });
        el.querySelectorAll('[data-stepdot]').forEach((d, k) => setTimeout(() => { d.style.background = '#FA7B20'; d.style.borderColor = '#FA7B20'; d.style.color = '#101A28'; }, 300 + k * 420));
      }
      el.querySelectorAll('[data-chip]').forEach((c, k) => c.animate([{ opacity: 0, transform: 'translateX(-12px)' }, { opacity: 1, transform: 'none' }], { duration: 500, delay: 200 + k * 70, easing: this.E, fill: 'backwards' }));
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    setTimeout(() => qa('[data-reveal]').forEach(el => { if (!this.rm && el.getBoundingClientRect().top > innerHeight) el.style.opacity = '0'; this.io.observe(el); }), 0);
    if (this.rm) return;
    this.wkt = setInterval(() => this.setState(s => ({ wk: (s.wk + 1) % this.WK.length })), 6000);
    this.hovT = setInterval(() => this.setState(s => ({ hov: (s.hov + 1) % 7 })), 3200);
    const bob = q('[data-bob]'); bob && bob.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(4px)' }], { duration: 900, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' });
    const kb = q('[data-kb]'); kb && kb.animate([{ transform: 'scale(1.02)' }, { transform: 'scale(1.1)' }], { duration: 22000, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' });
    qa('[data-rise]').forEach(el => el.animate([{ transform: 'translateY(105%)' }, { transform: 'none' }], { duration: 900, delay: +el.dataset.d, easing: this.E, fill: 'backwards' }));
    qa('[data-autoplay]').forEach(svg => { const o = { duration: 800, easing: this.E, fill: 'backwards' }; const l = svg.querySelector('[data-ml]'), r = svg.querySelector('[data-mr]'), m = svg.querySelector('[data-mo]'); l && l.animate([{ transform: 'translateX(-30px)', opacity: 0 }, { transform: 'none', opacity: 1 }], o); r && r.animate([{ transform: 'translateX(30px)', opacity: 0 }, { transform: 'none', opacity: 1 }], o); m && m.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, delay: 600, fill: 'backwards' }); });
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
  bindImgs() { document.querySelectorAll('img[data-lazy]').forEach(img => { const u = img.dataset.lazy; if (u && !u.includes('{{') && img.getAttribute('src') !== u) img.src = u; }); }
  componentDidUpdate() { this.bindImgs(); if (this._dd !== this.state.dd) { this._dd = this.state.dd; if (this.state.dd >= 0 && !this.rm) { const d = document.querySelector('[data-dd="' + this.state.dd + '"]'); d && d.querySelectorAll('[data-ddp]').forEach((el, k) => el.animate([{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }], { duration: 600, delay: 200 + k * 110, easing: this.E, fill: 'backwards' })); } } if (this._wk !== this.state.wk) { this._wk = this.state.wk; if (!this.rm) { const el = document.querySelector('[data-wkinfo]'); el && el.animate([{ opacity: 0, transform: 'translateX(-16px)' }, { opacity: 1, transform: 'none' }], { duration: 450, easing: this.E }); } } }
  componentWillUnmount() { window.removeEventListener('scroll', this.onDl); window.removeEventListener('resize', this.onDl); clearInterval(this.hovT); clearInterval(this.wkt); window.removeEventListener('keydown', this.onCsKey); window.removeEventListener('scroll', this.onScroll); window.removeEventListener('resize', this.onResize); this.onKey && window.removeEventListener('keydown', this.onKey); document.body.style.overflow = ''; this.io && this.io.disconnect(); }
  renderVals() {
    const s = this.state;
    const emailOk = /^\S+@\S+\.\S+$/.test(s.fEmail);
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
      wkOp: ix(3, i => s.wk === i ? 1 : 0), wkSc: ix(3, i => s.wk === i ? 1.06 : 1),
      wk: { n: '0' + (s.wk + 1), name: this.WK[s.wk][0], type: this.WK[s.wk][1], line: this.WK[s.wk][3] },
      wkDots: this.WK.map(([name], i) => ({ label: 'Show ' + name, w: s.wk === i ? '36px' : '14px', bg: s.wk === i ? '#FA7B20' : 'rgba(255,255,255,.35)', pick: () => { clearInterval(this.wkt); this.setState({ wk: i }); } })),
      wkPeek: [1, 2].map(k => { const i = (s.wk + k) % this.WK.length, [name, type, img] = this.WK[i]; return { name, type, img, pick: () => { clearInterval(this.wkt); this.setState({ wk: i }); } }; }),
      csOpen: () => this.openCs(s.wk), csClose: () => this.closeCs(), csTalk: e => { this.closeCs(); out.talkOpen(e); },
      csX: ix(3, i => s.cs === i ? '0%' : '105%'), csH: ix(3, i => s.cs === i ? 'false' : 'true'), csOp: s.cs >= 0 ? 1 : 0, csPe: s.cs >= 0 ? 'auto' : 'none',
      ddRows: ix(7, i => s.dd === i ? '1fr' : '0fr'), ddE: ix(7, i => s.dd === i ? 'true' : 'false'), ddR: ix(7, i => s.dd === i ? '45deg' : '0deg'), ddB: ix(7, i => s.dd === i ? '#101A28' : '#F2F4F7'), ddF: ix(7, i => s.dd === i ? '#fff' : '#202733'),
      ddL: ix(7, i => s.dd === i ? 'Close deep dive' : 'Explore the ' + ["Retail","Healthcare","Finance","Cybersecurity","Legal","Travel","Pharma"][i] + ' deep dive'), ddT: ix(7, i => () => this.setState({ dd: s.dd === i ? -1 : i })),
      tiles: [["Retail & E-commerce","photo-1441986300917-64674bd600d8","Turn browsers into buyers."],["Healthcare","photo-1576091160399-112ba8d25d1d","Less admin. Faster care."],["Finance","photo-1563013544-824ae1b704d3","Move money faster. Catch fraud sooner."],["Cybersecurity","photo-1550751827-4bd374c3f58b","Spot threats before they become headlines."],["Legal","photo-1589829545856-d10d557cf95f","Hours of reading, done in minutes."],["Travel & Hospitality","photo-1566073771259-6a8506099945","Smarter bookings. Happier travellers."],["Pharma & Life Sciences","photo-1532187863486-abf9dbad1b69","From lab data to faster decisions."]].map(([name, img, tag], i) => { const a = s.hov === i; return { name, tag, n: '0' + (i + 1), href: '#ind-' + (i + 1), img: '/images/stock/' + img + '.jpg', flex: a ? '4 1 0%' : '1 1 0%', sc: a ? 1.02 : 1.12, shade: a ? 1 : .85, vOp: a ? 0 : 1, hOp: a ? 1 : 0, hY: a ? '0px' : '12px', on: () => { clearInterval(this.hovT); if (s.hov !== i) this.setState({ hov: i }); } }; }),
      hovOff: () => {},
      stripL: e => { const st = e.currentTarget.parentElement.querySelector('[data-strip]'); st && st.scrollBy({ left: -240, behavior: 'smooth' }); },
      stripR: e => { const st = e.currentTarget.parentElement.querySelector('[data-strip]'); st && st.scrollBy({ left: 240, behavior: 'smooth' }); },
      method: [['Discovery & Assessment', 'We study your workflows, systems and team to find what to build, automate, modernize or staff first.', 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3'], ['Plan & Prototype', 'A clear plan and a focused prototype, proving the value before the full build.', 'M9 2h6M10 2v6L4 20a1 1 0 0 0 .9 1.5h14.2A1 1 0 0 0 20 20L14 8V2M7 15h10'], ['Build & Integrate', 'Our engineers build the full solution and connect it to your existing systems.', 'M9 17H7A5 5 0 0 1 7 7h2M15 7h2a5 5 0 1 1 0 10h-2M8 12h8'], ['Launch & Handover', 'We deploy securely and hand over clear documentation your team can own.', 'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1zM12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2zM9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5'], ['Support & Scale', 'Ongoing support, improvements and extra engineers as you grow.', 'M3 3v18h18M7 16l4-5 3 3 5-7']].map(([t, d, icon], i) => ({ t, d, icon, n: '0' + (i + 1) })),
      engage: [['YOU LEAD DELIVERY', 'Team Extension', 'You run the project. We add engineers who fit in fast.', ['Works inside your sprints, tools and security rules', 'Engineers matched to your industry and stack before you see profiles', 'NDA signed before code access. Your IP from day one.']], ['EMBURC LEADS DELIVERY', 'Delivery Pod', 'We run the project. You decide what ships.', ['A dedicated delivery lead manages execution, QA and governance', 'Weekly progress reports straight from your tools, not slide decks', 'Security and compliance reviewed before kickoff', 'Milestone or fixed-price billing after a Discovery Sprint'], true], ['PLAN BEFORE YOU BUILD', 'Discovery Sprint', 'A short, focused sprint to map scope, risks and costs before the build.', ['Business and compliance needs mapped before any tech decisions', 'Security and data requirements documented upfront', 'A delivery roadmap with estimates, milestones and a clear plan', 'Required before any fixed-price project']]].map(([label, t, sm, pts, f]) => ({ label: label.replace('EMBURC', 'eMburc'), t, s: sm, pts, bg: f ? '#101A28' : '#fff', fg: f ? '#fff' : '#202733', bd: f ? '#101A28' : '#E7EAF0', sh: f ? '0 24px 56px rgba(16,26,40,.22)' : '0 1px 2px rgba(16,26,40,.04),0 8px 24px rgba(16,26,40,.04)', mute: f ? '#C3CAD5' : '#667085', line: f ? 'rgba(255,255,255,.12)' : '#EEF0F4', ck: f ? '#FFB52E' : '#E4490A', lBg: f ? '#FF6B00' : '#F2F4F7', lFg: f ? '#202733' : '#475467' })),
      steps: [['Kickoff', '', 'Goals, team, tools and access agreed, with one named point of contact.'], ['Sprint planning', '', 'We prioritise the backlog with you, so the most valuable work ships first.'], ['Build & review', '', 'Two-week sprints with code reviews and testing built in.'], ['Demo & report', '', 'A live demo every sprint and a written update every week.'], ['Release', '', 'Deployment with a checklist and a rollback plan, just in case.'], ['Improve', '', 'A short retrospective after each sprint, so every sprint beats the last.']].map(([t, w, d], i) => ({ t, w, d, icon: ["M4 22V4M4 4h12l-2 4 2 4H4","M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01","m8 6-6 6 6 6M16 6l6 6-6 6","M3 4h18v12H3zM8 20h8M12 16v4","M12 2c3 2 5 6 5 10l-2 4H9l-2-4c0-4 2-8 5-10zM9 20h6","M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5"][i] })),
      notSent: !s.sent, sent: s.sent, fFirst: s.fFirst, fEmail: s.fEmail, fInd: s.fInd, fModel: s.fModel, fMsg: s.fMsg,
      setFirst: e => this.setState({ fFirst: e.target.value }), setEmail: e => this.setState({ fEmail: e.target.value }), setInd: e => this.setState({ fInd: e.target.value }), setModel: e => this.setState({ fModel: e.target.value }), setMsg: e => this.setState({ fMsg: e.target.value }),
      emailBd: s.tried && !emailOk ? '#F04438' : '#E7EAF0', fError: s.tried && !emailOk,
      submit: e => { e.preventDefault(); this.setState(emailOk ? { sent: true } : { tried: true }); },
      reset: () => this.setState({ sent: false, tried: false, fFirst: '', fEmail: '', fInd: '', fModel: '', fMsg: '' })
    };
    return out;
  }
}
