// @ts-nocheck -- untyped DOM/animation code ported as-is from the prototype.
// Ported from "Terms of Use.dc.html" (Claude Design prototype). Behaviour is kept as designed:
// the class drives the page through state + imperative Web Animations on the DOM.
import React from "react";
import { DCLogic } from "@/lib/dc";

export const defaults = {};

export default class TermsOfUseLogic extends DCLogic {
  [key: string]: any;
  E = 'cubic-bezier(0.22, 1, 0.36, 1)';
  state = { talk: false, menu: false, tName: '', tEmail: '', tPhone: '', tCode: '+91', tSvc: '', tOther: '', tMsg: '', tFile: '', tSent: false, tTried: false, vc: false };
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
    this.rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const q = s => document.querySelector(s), qa = s => document.querySelectorAll(s);
    this.goHash = () => { const el = location.hash && document.getElementById(location.hash.slice(1)); el && window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 96, behavior: 'smooth' }); };
    addEventListener('hashchange', this.goHash); if (location.hash) setTimeout(this.goHash, 350);
    const vcEl = q('[data-vc]'); if (vcEl) { this.vcIo = new IntersectionObserver(en => { if (en[0].isIntersecting) { setTimeout(() => { const v = q('[data-vcvid]'); v && v.play().catch(() => {}); }, 450); this.vcIo.disconnect(); } }, { threshold: .5 }); this.vcIo.observe(vcEl); }
    this.onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      const bar = q('[data-progress]');
      if (bar) bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
      const sec = q('[data-join-sec]');
      if (sec) {
        const r = sec.getBoundingClientRect();
        const p = Math.max(0, Math.min(1, (innerHeight - r.top) / (innerHeight * 0.9)));
        const e = this.rm ? 1 : 1 - Math.pow(1 - p, 2), d = (1 - e) * 90;
        const l = q('[data-jl]'), rr = q('[data-jr]'), o = q('[data-jo]'), jb = q('[data-jbar]');
        if (l) l.style.transform = `translateX(${-d}px) rotate(${-(1 - e) * 8}deg)`;
        if (rr) rr.style.transform = `translateX(${d}px) rotate(${(1 - e) * 8}deg)`;
        if (l) l.style.transformOrigin = rr.style.transformOrigin = 'center';
        if (l) l.style.transformBox = rr.style.transformBox = 'fill-box';
        if (o) o.style.opacity = e > 0.96 ? 1 : 0;
        if (jb) jb.style.transform = `scaleX(${e})`;
      }
      const hero = q('[data-tag="l"]');
      if (hero && !this.rm) {
        const k = Math.min(1, scrollY / 500);
        hero.style.transform = `translateX(${-k * 40}px)`;
        const t = q('[data-tag="r"]'); if (t) t.style.transform = `translateX(${k * 40}px)`;
      }
    };
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();
    const count = el => {
      const to = parseFloat(el.dataset.count), t0 = performance.now();
      const tick = t => { const p = Math.min(1, (t - t0) / 1400), e = 1 - Math.pow(1 - p, 3); el.textContent = Math.round(to * e); if (p < 1) requestAnimationFrame(tick); };
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
      qa('[data-reveal]').forEach(el => { el.style.opacity = '0'; this.io.observe(el); });
      qa('[data-count],[data-markplay]').forEach(el => this.io.observe(el));
      qa('[data-rise]').forEach(el => el.animate([{ transform: 'translateY(105%)' }, { transform: 'none' }], { duration: 900, delay: +el.dataset.d, easing: this.E, fill: 'backwards' }));
      qa('[data-autoplay]').forEach(m => this.playMark(m, +(m.dataset.dist || 30), +m.dataset.autoplay || 0));
      qa('[data-float]').forEach(el => el.animate([{ transform: 'translateY(0)' }, { transform: `translateY(${-el.dataset.float}px)` }], { duration: +el.dataset.dur, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' }));
      const hl = q('[data-heroloop]');
      if (hl) {
        const l = hl.querySelector('[data-ml]'), rr = hl.querySelector('[data-mr]'), o = hl.querySelector('[data-mo]');
        const kf = d => [{ transform: 'translateX(' + d + 'px)', opacity: .25 }, { transform: 'translateX(0)', opacity: 1, offset: .35 }, { transform: 'translateX(0)', opacity: 1, offset: .75 }, { transform: 'translateX(' + d + 'px)', opacity: .25 }];
        const opt = { duration: 6000, iterations: Infinity, easing: 'cubic-bezier(0.65,0,0.35,1)' };
        l.animate(kf(-110), opt); rr.animate(kf(110), opt);
        o.animate([{ opacity: 0 }, { opacity: 0, offset: .33 }, { opacity: 1, offset: .37 }, { opacity: 1, offset: .73 }, { opacity: 0, offset: .77 }, { opacity: 0 }], { duration: 6000, iterations: Infinity });
      }
      const bob = q('[data-bob]'); bob && bob.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(4px)' }], { duration: 900, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' });
      const sb = q('[data-storybar]'); if (sb) { const so = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { so.disconnect(); sb.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 1400, easing: this.E, fill: 'forwards' }); } }), { threshold: .4 }); so.observe(sb); }
      const gl = q('[data-gapl]'), gr = q('[data-gapr]'), gd = q('[data-gapdot]');
      gl && gl.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-10px)' }], { duration: 2200, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' });
      gr && gr.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(10px)' }], { duration: 2200, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' });
      gd && gd.animate([{ left: '0%', opacity: 0 }, { opacity: 1, offset: .2 }, { opacity: 1, offset: .5 }, { left: '45%', opacity: 0, offset: .7 }, { left: '45%', opacity: 0 }], { duration: 2400, iterations: Infinity, easing: 'ease-in-out' });
    }
  }
  componentWillUnmount() { window.removeEventListener('scroll', this.onScroll); this.onKey && window.removeEventListener('keydown', this.onKey); document.body.style.overflow = ''; this.io && this.io.disconnect(); }
  playMark(svg, dist, delay = 0) {
    if (!svg || this.rm) return;
    const l = svg.querySelector('[data-ml]'), r = svg.querySelector('[data-mr]'), o = svg.querySelector('[data-mo]');
    const opt = { duration: 800, delay, easing: this.E, fill: 'backwards' };
    l && l.animate([{ transform: `translateX(${-dist}px)`, opacity: 0 }, { transform: 'none', opacity: 1 }], opt);
    r && r.animate([{ transform: `translateX(${dist}px)`, opacity: 0 }, { transform: 'none', opacity: 1 }], opt);
    o && o.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, delay: delay + 600, fill: 'backwards' });
  }
  renderVals() {
    const s = this.state;
    return {
      vcL: s.vc ? 'translateX(0px)' : 'translateX(-70px)', vcR: s.vc ? 'translateX(0px)' : 'translateX(70px)',
      vcPlay: this._vcp || (this._vcp = () => { const v = document.querySelector('[data-vcvid]'); if (v && v.paused) { v.currentTime = 0; v.play().catch(() => {}); } }),
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

      spot(e) { const el = e.currentTarget, r = el.getBoundingClientRect(); el.style.setProperty('--mx', (e.clientX - r.left) + 'px'); el.style.setProperty('--my', (e.clientY - r.top) + 'px'); },
      tilt: e => { if (this.rm) return; const el = e.currentTarget, r = el.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; el.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 6}deg) translateY(-4px)`; },
      untilt: e => { e.currentTarget.style.transform = ''; }
    };
  }
}
