// @ts-nocheck -- untyped DOM/animation code ported as-is from the prototype.
// Ported from "Case Studies.dc.html" (Claude Design prototype). Behaviour is kept as designed:
// the class drives the page through state + imperative Web Animations on the DOM.
import React from "react";
import { DCLogic } from "@/lib/dc";

export const defaults = {};

export default class CaseStudiesLogic extends DCLogic {
  [key: string]: any;
  E = 'cubic-bezier(0.22, 1, 0.36, 1)';
  CAT = [['All', 'all'], ['AI & Automation', 'ai'], ['Websites & Apps', 'web'], ['Talent Solutions', 'talent'], ['Fintech & Banking', 'fin'], ['Insurance', 'ins'], ['More industries', 'more']];
  TAGS = [["ai","more"],["ai","more"],["ai","more"],["ai","fin"],["ai","fin"],["ai","more"],["ai","fin"],["ai","ins"],["web","talent","ins"],["talent","more"],["web","fin"]];
  INDS = ["HR Technology","Cybersecurity","Travel & Tourism","Fintech","Retail Investing","RegTech","Banking","Insurance","Insurance","Real Estate","Financial Services"];
  INDLIST = ["HR Technology","Cybersecurity","Travel & Tourism","Fintech","Retail Investing","RegTech","Banking","Insurance","Real Estate","Financial Services"];
  state = { mt: 0, menu: false, cat: 'all', open: -1, q: 0, fFirst: '', fEmail: '', fMsg: '', sent: false, tried: false,
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

  bindImgs() { document.querySelectorAll('img[data-lazy]').forEach(img => { const u = img.dataset.lazy; if (u && img.getAttribute('src') !== u) img.src = u; }); }
  openStory(i) { this.setState({ open: i, cat: 'all' }); setTimeout(() => { const el = document.getElementById('story-' + (i + 1)); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 90, behavior: 'smooth' }); }, 60); }
  filterTo(k) { this.setState({ cat: k, open: -1 }); const el = document.getElementById('stories'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 72, behavior: 'smooth' }); }
  goQ(d) { const n = (this.state.q + d + 3) % 3; this.setState({ q: n }); const c = document.querySelector('[data-quotes]'); if (c && c.children[n]) c.scrollTo({ left: c.children[n].offsetLeft - c.children[0].offsetLeft, behavior: 'smooth' }); }
  componentDidMount() {
    this.onPb = () => {
      const tr = document.querySelector('[data-pbtrack]'); if (!tr) return;
      const cards = [...tr.querySelectorAll('[data-pbcard]')], n = cards.length;
      cards.forEach((c, k) => {
        const nx = cards[k + 1]; let ov = 0;
        if (nx) { const r = c.getBoundingClientRect(), nr = nx.getBoundingClientRect(); ov = Math.max(0, Math.min(1, (r.bottom - nr.top) / r.height)); }
        if (!this.rm) { c.style.transform = 'scale(' + (1 - ov * 0.04).toFixed(4) + ')'; c.style.opacity = (1 - ov * 0.35).toFixed(3); }
      });
      const first = cards[0].getBoundingClientRect(), last = cards[n - 1].getBoundingClientRect();
      const span = (cards[n - 1].offsetTop - cards[0].offsetTop) || 1;
      const p = Math.max(0, Math.min(1, (innerHeight * 0.75 - first.top) / (span + innerHeight * 0.35)));
      const done = last.top <= 110 + (n - 1) * 24 + 2 ? 1 : p;
      let act = 0; cards.forEach((c, k) => { if (c.getBoundingClientRect().top <= 110 + k * 24 + 2 || (k === 0 && first.top < innerHeight * 0.75)) act = k; });
      const fill = document.querySelector('[data-pbfill]'), pct = document.querySelector('[data-pbpct]');
      if (fill) fill.style.width = (done * 100).toFixed(1) + '%'; if (pct) pct.textContent = Math.round(done * 100) + '%';
      document.querySelectorAll('[data-pbstep]').forEach((st, k) => { const on = k <= act && first.top < innerHeight * 0.75, cur = on && k === act; st.style.color = cur ? '#202733' : on ? '#475467' : '#98A2B3'; const d = st.querySelector('[data-pbdot]'); if (d) { d.style.background = on ? '#FA7B20' : '#fff'; d.style.borderColor = on ? '#FA7B20' : '#D0D5DD'; d.style.boxShadow = cur ? '0 0 0 5px rgba(250,123,32,.18)' : 'none'; } });
    };
    window.addEventListener('scroll', this.onPb, { passive: true }); window.addEventListener('resize', this.onPb); setTimeout(this.onPb, 300);
    this.rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const q = s => document.querySelector(s), qa = s => document.querySelectorAll(s);
    this.onScroll = () => { const h = document.documentElement.scrollHeight - innerHeight, b = q('[data-progress]'); if (b) b.style.transform = 'scaleX(' + (h > 0 ? scrollY / h : 0) + ')'; };
    window.addEventListener('scroll', this.onScroll, { passive: true }); this.onScroll();
    const count = el => { const to = +el.dataset.count, t0 = performance.now(); const tick = t => { const p = Math.min(1, (t - t0) / 1600); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); };
    this.io = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return; const el = en.target; this.io.unobserve(el);
      el.style.opacity = ''; if (this.rm) return;
      el.animate([{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'none' }], { duration: 750, delay: +(el.dataset.d || 0), easing: this.E, fill: 'backwards' });
      el.querySelectorAll('[data-count]').forEach(count);
      el.querySelectorAll('[data-playfill]').forEach(f => f.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 1600, delay: 200, easing: 'ease-in-out', fill: 'forwards' }));
      el.querySelectorAll('[data-pstep]').forEach((s, k) => s.animate([{ opacity: 0, transform: 'translateX(-20px)' }, { opacity: 1, transform: 'none' }], { duration: 600, delay: 150 + k * 150, easing: this.E, fill: 'backwards' }));
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    setTimeout(() => { this.bindImgs(); qa('[data-reveal]').forEach(el => { if (!this.rm && el.getBoundingClientRect().top > innerHeight) el.style.opacity = '0'; this.io.observe(el); }); }, 0);
    const cv = q('[data-wave]');
    if (cv) { const ctx = cv.getContext('2d'); let t = 0; const draw = () => { const w = cv.clientWidth, hh = cv.clientHeight, dpr = Math.min(2, devicePixelRatio || 1); if (cv.width !== w * dpr) { cv.width = w * dpr; cv.height = hh * dpr; } ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, hh); for (let r = 0; r < 22; r++) { const depth = r / 21; for (let c = 0; c < 70; c++) { const x = (c / 69) * w * 1.1 - w * .05; const y = hh * (.42 + depth * .5) + Math.sin(c * .22 + t + r * .35) * (18 + depth * 34) + Math.cos(c * .08 - t * .6) * 14; const a = .12 + depth * .7; ctx.fillStyle = 'rgba(' + (250 - depth * 20) + ',' + (123 + (1 - depth) * 60) + ',32,' + a + ')'; ctx.beginPath(); ctx.arc(x, y, .6 + depth * 1.6, 0, 6.283); ctx.fill(); } } if (!this.rm) { t += .012; this.raf = requestAnimationFrame(draw); } }; draw(); }
    if (this.rm) return;
    qa('[data-rise]').forEach(el => el.animate([{ transform: 'translateY(105%)' }, { transform: 'none' }], { duration: 900, delay: +el.dataset.d, easing: this.E, fill: 'backwards' }));
    qa('[data-autoplay]').forEach(svg => { const o = { duration: 800, easing: this.E, fill: 'backwards' }; const l = svg.querySelector('[data-ml]'), r = svg.querySelector('[data-mr]'), m = svg.querySelector('[data-mo]'); l && l.animate([{ transform: 'translateX(-30px)', opacity: 0 }, { transform: 'none', opacity: 1 }], o); r && r.animate([{ transform: 'translateX(30px)', opacity: 0 }, { transform: 'none', opacity: 1 }], o); m && m.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, delay: 600, fill: 'backwards' }); });
    const fp = q('[data-fphone]'); fp && fp.animate([{ transform: 'translateY(0) rotate(-2deg)' }, { transform: 'translateY(-12px) rotate(1deg)' }], { duration: 3600, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' });
    qa('[data-dot]').forEach((d, i) => d.animate([{ opacity: .3, transform: 'translateY(0)' }, { opacity: 1, transform: 'translateY(-3px)' }], { duration: 450, delay: (i % 3) * 150, direction: 'alternate', iterations: Infinity }));
    qa('[data-fb]').forEach((b, k) => b.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 0, transform: 'translateY(8px)', offset: k * .15 }, { opacity: 1, transform: 'none', offset: k * .15 + .08 }, { opacity: 1, transform: 'none', offset: .92 }, { opacity: 0, transform: 'none' }], { duration: 7000, iterations: Infinity }));
    this.mtT = setInterval(() => this.setState(s => ({ mt: (s.mt + 1) % 3 })), 4000);
    qa('[data-pring]').forEach((p, k) => p.animate([{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }], { duration: 18000 + k * 2000, iterations: Infinity, easing: 'linear' }));
    this.onPR = () => { const w = innerWidth, l = q('[data-playline]'), g = q('[data-playgrid]'); if (g) g.style.gridTemplateColumns = w < 520 ? 'minmax(0,1fr)' : w < 760 ? 'repeat(2,minmax(0,1fr))' : 'repeat(4,minmax(0,1fr))'; if (l) l.style.display = w < 760 ? 'none' : ''; }; window.addEventListener('resize', this.onPR); this.onPR();
  }
  componentDidUpdate() {
    if (this._mt !== this.state.mt) { this._mt = this.state.mt; if (!this.rm) document.querySelectorAll('[data-mitem]').forEach((el, k) => el.animate([{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }], { duration: 450, delay: k * 80, easing: this.E, fill: 'backwards' })); }
    if (this._open !== this.state.open) { this._open = this.state.open; if (this.state.open >= 0 && !this.rm) { const d = document.querySelector('[data-dd="' + this.state.open + '"]'); d && d.querySelectorAll('[data-ddp]').forEach((el, k) => el.animate([{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }], { duration: 600, delay: 200 + k * 100, easing: this.E, fill: 'backwards' })); } }
  }
  componentWillUnmount() { window.removeEventListener('scroll', this.onPb); window.removeEventListener('resize', this.onPb); window.removeEventListener('scroll', this.onScroll); this.onKey && window.removeEventListener('keydown', this.onKey); document.body.style.overflow = ''; this.io && this.io.disconnect(); cancelAnimationFrame(this.raf); clearInterval(this.mtT); window.removeEventListener('resize', this.onPR); }
  renderVals() {
    const s = this.state;
    const emailOk = /^\S+@\S+\.\S+$/.test(s.fEmail);
    const ix = (n, fn) => Object.fromEntries(Array.from({ length: n }, (_, i) => ['i' + i, fn(i)]));
    const show = i => s.cat === 'all' || (s.cat.startsWith('ind:') ? this.INDS[i] === s.cat.slice(4) : this.TAGS[i].includes(s.cat));
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
      mTabs: ["For builds","For AI & automation","For talent"].map((label, k) => { const a = s.mt === k; return { label, n: '0' + (k + 1), sel: a ? 'true' : 'false', bg: a ? '#101A28' : '#fff', fg: a ? '#fff' : '#202733', bd: a ? '#101A28' : '#E7EAF0', pick: () => { if (s.mt !== k) this.setState({ mt: k }); } }; }),
      mHold: () => { clearInterval(this.mtT); },
      mCur: (() => { const m = [["For builds","BUILDS",[["Launch on time","M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2"],["Page speed","M13 2 3 14h9l-1 8 10-12h-9z"],["Conversions","M3 3v18h18M7 16l4-5 3 3 5-7"]]],["For AI & automation","AI & AUTOMATION",[["Hours saved","M5 22h14M5 2h14M17 22v-4.2a2 2 0 0 0-.6-1.4L12 12l-4.4 4.4a2 2 0 0 0-.6 1.4V22M7 2v4.2a2 2 0 0 0 .6 1.4L12 12l4.4-4.4a2 2 0 0 0 .6-1.4V2"],["Error rate","M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"],["Response time","M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"]]],["For talent","TALENT",[["Time to shortlist","M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"],["Time to productive","M22 12h-4l-3 9L9 3l-3 9H2"],["Retention","M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 8v6M22 11h-6"]]]][s.mt]; return { label: m[0], eb: 'SUCCESS METRICS · ' + m[1], items: m[2].map(([t, icon]) => ({ t, icon })) }; })(),
      chips: this.CAT.map(([label, k]) => { const a = s.cat === k; return { label, sel: a ? 'true' : 'false', bg: a ? '#101A28' : '#fff', fg: a ? '#fff' : '#202733', bd: a ? '#101A28' : '#E7EAF0', pick: () => this.setState({ cat: k, open: -1 }) }; }),
      vis: ix(11, i => show(i) ? 'block' : 'none'), countLabel: (() => { const n = this.TAGS.filter((_, i) => show(i)).length; return n + (n === 1 ? ' STORY' : ' STORIES'); })(),
      tog: ix(11, i => () => this.setState({ open: s.open === i ? -1 : i })), exp: ix(11, i => s.open === i ? 'true' : 'false'),
      gr: ix(11, i => s.open === i ? '1fr' : '0fr'), tr: ix(11, i => s.open === i ? '45deg' : '0deg'), tb: ix(11, i => s.open === i ? '#101A28' : '#F2F4F7'), tf: ix(11, i => s.open === i ? '#fff' : '#202733'),
      openFeatured: () => this.openStory(0), see: ix(11, i => () => this.openStory(i)), indPick: ix(10, i => () => this.filterTo('ind:' + this.INDLIST[i])),
      qPrev: () => { clearInterval(this.qt); this.goQ(-1); }, qNext: () => { clearInterval(this.qt); this.goQ(1); },
      notSent: !s.sent, sent: s.sent, fFirst: s.fFirst, fEmail: s.fEmail, fMsg: s.fMsg,
      setFirst: e => this.setState({ fFirst: e.target.value }), setEmail: e => this.setState({ fEmail: e.target.value }), setMsg: e => this.setState({ fMsg: e.target.value }),
      emailBd: s.tried && !emailOk ? '#F04438' : '#E7EAF0', fError: s.tried && !emailOk,
      submit: e => { e.preventDefault(); this.setState(emailOk ? { sent: true } : { tried: true }); },
      reset: () => this.setState({ sent: false, tried: false, fFirst: '', fEmail: '', fMsg: '' })
    };
    return out;
  }
}
