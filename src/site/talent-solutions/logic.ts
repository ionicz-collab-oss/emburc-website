// @ts-nocheck -- untyped DOM/animation code ported as-is from the prototype.
// Ported from "Talent Solutions.dc.html" (Claude Design prototype). Behaviour is kept as designed:
// the class drives the page through state + imperative Web Animations on the DOM.
import React from "react";
import { DCLogic } from "@/lib/dc";

export const defaults = {};

export default class TalentSolutionsLogic extends DCLogic {
  [key: string]: any;
  E = 'cubic-bezier(0.22, 1, 0.36, 1)';
  ROT = ['AI Engineers', 'DevOps Pros', 'Flutter Devs', 'Data Engineers', 'Full-Stack Devs'];
  HERO_CHIPS = [['AI / ML', 'AI / ML Engineers'], ['Full-Stack', 'Full-Stack Developers'], ['Mobile', 'Mobile App Developers'], ['Cloud & DevOps', 'Cloud & DevOps Engineers'], ['Data', 'Data Engineers'], ['Something else', 'Something else']];
  CARDS = [
    ['Senior AI Engineer', '8 yrs · Python, LLMs, RAG', 'Available in 2 wks', 'SA'],
    ['Cloud & DevOps Engineer', '6 yrs · Azure, Kubernetes, Terraform', 'Available now', 'CD'],
    ['Flutter Developer', '5 yrs · iOS and Android', 'Available in 1 wk', 'FD']
  ];
  ROLES = [
    ['AI / ML Engineers', 'AI', 'Build models, LLM apps and AI agents that work in production', ['Python', 'LLMs', 'RAG', 'MLOps']],
    ['Data Engineers', 'DE', 'Build the pipelines and data platforms AI depends on', ['SQL', 'Spark', 'Databricks', 'Snowflake']],
    ['Full-Stack Developers', 'FS', 'Ship complete features, from UI to database', ['React', 'Node.js', 'TypeScript']],
    ['Backend Developers', 'BE', 'Build fast, secure APIs and services that scale', ['Node.js', 'Python', 'Java', '.NET']],
    ['Frontend Developers', 'FE', 'Craft interfaces users actually enjoy', ['React', 'Next.js', 'Vue']],
    ['Mobile App Developers', 'MO', 'Build iOS, Android and cross-platform apps', ['Flutter', 'Swift', 'Kotlin', 'React Native']],
    ['Cloud & DevOps Engineers', 'CD', 'Automate infrastructure, releases and uptime', ['AWS', 'Azure', 'Kubernetes', 'Terraform']],
    ['QA & Test Automation', 'QA', 'Catch bugs before your users do', ['Selenium', 'Cypress', 'Playwright']]
  ];
  STACK = [
    ['Full Stack', 'M16 18l6-6-6-6M8 6l-6 6 6 6', [['Stacks', ['MEAN Stack', 'MERN Stack']], ['Frontend', ['React', 'Next.js', 'Angular', 'Vue', 'TypeScript']], ['Backend', ['Node.js', 'Python', 'Java', '.NET', 'PHP', 'Go']]]],
    ['Mobile App Development', 'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2', [['iOS', ['Swift', 'SwiftUI', 'Xcode']], ['Android', ['Java', 'Kotlin', 'Android Studio']], ['Cross-Platform', ['Flutter', 'React Native']]]],
    ['AI and ML', 'M12 2a4 4 0 0 1 4 4v1a3 3 0 0 1 3 3v1a3 3 0 0 1-1 5.8V18a4 4 0 0 1-8 0 4 4 0 0 1-8 0v-1.2A3 3 0 0 1 1 11v-1a3 3 0 0 1 3-3V6a4 4 0 0 1 8-4z', [['Frameworks', ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn']], ['LLMs & GenAI', ['OpenAI', 'LangChain', 'Hugging Face']]]],
    ['DevOps', 'M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M8 16H3v5', [['Cloud', ['AWS', 'Azure', 'Google Cloud']], ['Containers & IaC', ['Docker', 'Kubernetes', 'Terraform', 'Ansible']], ['CI/CD', ['GitHub Actions', 'Jenkins', 'GitLab']]]],
    ['Database', 'M12 8c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3zM4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3', [['Relational', ['MySQL', 'MSSQL', 'PostgreSQL', 'SQLite', 'Oracle']], ['NoSQL & Cache', ['MongoDB', 'Redis']]]],
    ['Data & Analytics', 'M3 3v18h18M7 14l4-4 4 4 5-5', [['Big Data', ['Spark', 'Databricks', 'Snowflake']], ['BI & Reporting', ['Power BI', 'SQL']]]],
    ['QA & Testing', 'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11', [['Automation', ['Selenium', 'Cypress', 'Playwright']], ['Unit & API', ['Jest', 'Postman']]]],
    ['E-commerce', 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0', [['Platforms', ['Shopify', 'WooCommerce', 'Magento']], ['CRM', ['Salesforce']]]]
  ];
  SETUPS = [
    ['Staff Augmentation', 'Staff Augmentation', 'Short on hands? Add vetted seniors fast.', 'Add engineers', [['Best for', 'Skill gaps like AI/ML and DevOps'], ['Who manages', 'You'], ['Team size', '1–5 engineers'], ['Billing', 'Monthly, per engineer'], ['Minimum term', '1 month']]],
    ['Dedicated Dev Teams', 'Dedicated Team', 'Your own full squad: architects, devs and QA.', 'Build my team', [['Best for', 'Long-haul products'], ['Who manages', 'You, with our delivery support'], ['Team size', '3–10+ engineers'], ['Billing', 'Monthly, per team'], ['Minimum term', '3 months']], true],
    ['Managed Teams', 'Managed Team', 'We run it end to end.', 'Hand it over', [['Best for', 'Outcomes without the management load'], ['Who manages', 'eMburc'], ['Team size', 'Full team, scoped to the goal'], ['Billing', 'Fixed price, per milestone'], ['Minimum term', 'Per project']]]
  ];
  STEPS = [
    ['Brief', 'day 1', 'A 20-minute call covering role, stack, seniority and time zone.'],
    ['Shortlist', '72 hrs', 'Three to five vetted profiles, each with an assessment summary.'],
    ['Interview', 'your call', 'You meet them. You pick. No pressure.'],
    ['Onboard', '2 wks', 'Your engineer joins your standups, tools and sprints.']
  ];
  VET = [
    ['Profile check', 'real experience, real projects, verified references'],
    ['Technical test', 'a hands-on task in the actual stack you use'],
    ['Live interview', 'coding, system design and problem-solving with a senior engineer'],
    ['Team fit', 'clear communication, fluent English and remote-work readiness']
  ];
  COMPARE = [
    ['Time to first profile', '72 hrs', 'Weeks of sourcing', 'Days, but unvetted'],
    ['Vetting', 'Multi-stage technical vetting', "Your team's time", "You're on your own"],
    ['Upfront costs', 'None', 'Recruiter fees and onboarding', 'Low'],
    ["If it's not a fit", 'Free replacement', 'Restart the hiring process', 'Start searching again'],
    ['Scale up or down', "Anytime, with 2 weeks' notice", 'Slow and costly', 'Hit or miss'],
    ['Continuity and accountability', 'Backed by eMburc', 'High', 'Low']
  ];

  state = { menu: false, ri: 0, co: 0, role: 0, stackCat: 'Full Stack', step: 0, hero: 'AI / ML Engineers', fName: '', fEmail: '', fCompany: '', fPhone: '', fRoles: [], fCount: '', fModel: '', fStart: '', fDetails: '', fConsent: false, sent: false, tried: false,
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
    return ({ 'Python': D + 'python/python-original.svg', 'PyTorch': D + 'pytorch/pytorch-original.svg', 'OpenAI': V + 'openai-v9.svg', 'LangChain': S + 'langchain-1C3C3C.svg', 'Hugging Face': S + 'huggingface.svg', 'React': D + 'react/react-original.svg', 'Next.js': D + 'nextjs/nextjs-original.svg', 'Vue': D + 'vuejs/vuejs-original.svg', 'TypeScript': D + 'typescript/typescript-original.svg', 'Node.js': D + 'nodejs/nodejs-original.svg', 'Java': D + 'java/java-original.svg', '.NET': D + 'dotnetcore/dotnetcore-original.svg', 'Go': D + 'go/go-original-wordmark.svg', 'Flutter': D + 'flutter/flutter-original.svg', 'Swift (iOS)': D + 'swift/swift-original.svg', 'Kotlin (Android)': D + 'kotlin/kotlin-original.svg', 'React Native': D + 'react/react-original.svg', 'AWS': D + 'amazonwebservices/amazonwebservices-original-wordmark.svg', 'Azure': D + 'azure/azure-original.svg', 'Google Cloud': D + 'googlecloud/googlecloud-original.svg', 'Kubernetes': D + 'kubernetes/kubernetes-original.svg', 'Terraform': D + 'terraform/terraform-original.svg', 'CI/CD': D + 'githubactions/githubactions-original.svg', 'SQL': D + 'postgresql/postgresql-original.svg', 'Spark': D + 'apachespark/apachespark-original.svg', 'Databricks': S + 'databricks.svg', 'Snowflake': S + 'snowflake.svg', 'Power BI': V + 'powerbi-v9.svg', 'Angular': D + 'angularjs/angularjs-original.svg', 'PHP': D + 'php/php-original.svg', 'SwiftUI': D + 'swift/swift-original.svg', 'Xcode': D + 'xcode/xcode-original.svg', 'Android Studio': D + 'androidstudio/androidstudio-original.svg', 'TensorFlow': D + 'tensorflow/tensorflow-original.svg', 'scikit-learn': D + 'scikitlearn/scikitlearn-original.svg', 'Docker': D + 'docker/docker-original.svg', 'Ansible': D + 'ansible/ansible-original.svg', 'GitHub Actions': D + 'githubactions/githubactions-original.svg', 'Jenkins': D + 'jenkins/jenkins-original.svg', 'GitLab': D + 'gitlab/gitlab-original.svg', 'MySQL': D + 'mysql/mysql-original.svg', 'MSSQL': D + 'microsoftsqlserver/microsoftsqlserver-original.svg', 'PostgreSQL': D + 'postgresql/postgresql-original.svg', 'SQLite': D + 'sqlite/sqlite-original.svg', 'Oracle': D + 'oracle/oracle-original.svg', 'MongoDB': D + 'mongodb/mongodb-original.svg', 'Redis': D + 'redis/redis-original.svg', 'Selenium': D + 'selenium/selenium-original.svg', 'Cypress': D + 'cypressio/cypressio-original.svg', 'Playwright': D + 'playwright/playwright-original.svg', 'Jest': D + 'jest/jest-plain.svg', 'Postman': D + 'postman/postman-original.svg', 'Shopify': V + 'shopify-v9.svg', 'WooCommerce': D + 'woocommerce/woocommerce-original.svg', 'Magento': D + 'magento/magento-original.svg', 'Salesforce': D + 'salesforce/salesforce-original.svg', 'Java': D + 'java/java-original.svg', 'Swift': D + 'swift/swift-original.svg', 'Kotlin': D + 'kotlin/kotlin-original.svg' })[n] || '';
  }
  bindLogos() {
    document.querySelectorAll('[data-techlogo]').forEach(img => {
      const want = img.dataset.logo;
      if (want !== undefined && want === '' && img.dataset.src !== 'none') { img.dataset.src = 'none'; img.style.display = 'none'; const f0 = img.nextElementSibling; if (f0) f0.style.display = 'flex'; return; }
      if (!want || want.includes('{{') || img.dataset.src === want) return;
      img.dataset.src = want;
      img.style.display = ''; const fb = img.nextElementSibling; if (fb) fb.style.display = 'none';
      img.onerror = () => { img.style.display = 'none'; if (fb) fb.style.display = 'flex'; };
      img.src = want;
    });
  }
  animOrbit() {
    this.bindLogos();
    if (this.rm) return;
    document.querySelectorAll('[data-orb]').forEach((el, k) => {
      el.animate([{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }], { duration: 480, delay: k * 90, easing: this.E, fill: 'backwards' });
    });
    const hub = document.querySelector('[data-hub]'); hub && hub.animate([{ transform: 'scale(.9)' }, { transform: 'scale(1)' }], { duration: 500, easing: this.E });
    document.querySelectorAll('[data-catbar]').forEach(b => { b.getAnimations().forEach(x => x.cancel()); });
    const bar = document.querySelector('[data-catbar="' + this.state.stackCat + '"]');
    if (bar && this.skt) bar.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 5000, easing: 'linear', fill: 'forwards' });
  }
  componentDidMount() {
    this.rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const q = s => document.querySelector(s), qa = s => document.querySelectorAll(s);
    this.onScroll = () => { const h = document.documentElement.scrollHeight - innerHeight, b = q('[data-progress]'); if (b) b.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`; };
    window.addEventListener('scroll', this.onScroll, { passive: true }); this.onScroll();
    const count = el => { const to = +el.dataset.count, t0 = performance.now(); const tick = t => { const p = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); };
    this.io = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return; const el = en.target; this.io.unobserve(el);
      if (el.hasAttribute('data-reveal')) { el.style.opacity = ''; el.animate([{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'none' }], { duration: 750, delay: +(el.dataset.d || 0), easing: this.E, fill: 'backwards' }); }
      if (el.hasAttribute('data-count')) count(el);
      if (el.hasAttribute('data-funnel')) el.querySelectorAll('[data-vet]').forEach((v, k) => v.animate([{ opacity: 0, transform: 'translateX(-24px)' }, { opacity: 1, transform: 'none' }], { duration: 700, delay: k * 140, easing: this.E, fill: 'backwards' }));
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    this._role = this.state.role; this._ri = this.state.ri; this._cat = this.state.stackCat;
    setTimeout(() => {
      if (!this.rm) {
        qa('[data-reveal]').forEach(el => { if (el.getBoundingClientRect().top > innerHeight) el.style.opacity = '0'; this.io.observe(el); });
        qa('[data-count],[data-funnel]').forEach(el => this.io.observe(el));
        qa('[data-float]').forEach(el => el.animate([{ transform: 'translateY(0)' }, { transform: `translateY(${-el.dataset.float}px)` }], { duration: +el.dataset.dur, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' }));
        const kb = q('[data-kb]'); kb && kb.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.08)' }], { duration: 20000, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' });
        const rg = q('[data-ring]'); rg && rg.animate([{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }], { duration: 50000, iterations: Infinity, easing: 'linear' });
        [['a', -80, 60, 12000], ['b', 80, -60, 10000], ['c', -60, 60, 11000], ['d', -80, 50, 12000]].forEach(([k, x, y, d]) => { const el = q('[data-blob="' + k + '"]'); el && el.animate([{ transform: 'translate(0,0) scale(1)' }, { transform: `translate(${x}px,${y}px) scale(1.12)` }], { duration: d, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' }); });
      }
      this.animOrbit();
    }, 0);
    if (!this.rm) {
      qa('[data-rise]').forEach(el => el.animate([{ transform: 'translateY(105%)' }, { transform: 'none' }], { duration: 900, delay: +el.dataset.d, easing: this.E, fill: 'backwards' }));
      qa('[data-autoplay]').forEach(svg => { const o = { duration: 800, easing: this.E, fill: 'backwards' }; const l = svg.querySelector('[data-ml]'), r = svg.querySelector('[data-mr]'), m = svg.querySelector('[data-mo]'); l && l.animate([{ transform: 'translateX(-30px)', opacity: 0 }, { transform: 'none', opacity: 1 }], o); r && r.animate([{ transform: 'translateX(30px)', opacity: 0 }, { transform: 'none', opacity: 1 }], o); m && m.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, delay: 600, fill: 'backwards' }); });
      this.rt = setInterval(() => this.setState(s => ({ ri: (s.ri + 1) % this.ROT.length })), 2000);
      this.rlt = setInterval(() => this.setState(s => ({ role: (s.role + 1) % this.ROLES.length })), 3500);
      this.skt = setInterval(() => this.setState(s => { const i = this.STACK.findIndex(x => x[0] === s.stackCat); return { stackCat: this.STACK[(i + 1) % this.STACK.length][0] }; }), 5000);
      this.stt = setInterval(() => this.setState(s => ({ step: (s.step + 1) % 4 })), 2600);
    }
  }
  componentDidUpdate() {
    const s = this.state;
    if (this._cat !== s.stackCat) { this._cat = s.stackCat; this.animOrbit(); }
    if (this._role !== s.role) { this._role = s.role; if (!this.rm) { const el = document.querySelector('[data-roledetail]'); el && el.animate([{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }], { duration: 450, easing: this.E }); } }
    if (this._ri !== s.ri) { this._ri = s.ri; if (!this.rm) { const el = document.querySelector('[data-rot]'); el && el.animate([{ transform: 'translateY(100%)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 450, easing: this.E }); } }
  }
  componentWillUnmount() { window.removeEventListener('scroll', this.onScroll); this.onKey && window.removeEventListener('keydown', this.onKey); document.body.style.overflow = ''; this.io && this.io.disconnect(); [this.rt, this.ct, this.rlt, this.skt, this.stt].forEach(clearInterval); }
  toContact(patch) {
    this.setState({ ...patch, sent: false });
    const el = document.getElementById('contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 72, behavior: 'smooth' });
  }
  renderVals() {
    const s = this.state;
    const emailOk = /^\S+@\S+\.\S+$/.test(s.fEmail);
    const valid = s.fName.trim() && emailOk && s.fRoles.length && s.fCount && s.fConsent;
    const on = { bd: '#101A28', bg: '#101A28', fg: '#fff' }, off = { bd: '#E7EAF0', bg: '#fff', fg: '#202733' };
    return {
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
      spot(e) { const el = e.currentTarget, r = el.getBoundingClientRect(); el.style.setProperty('--mx', (e.clientX - r.left) + 'px'); el.style.setProperty('--my', (e.clientY - r.top) + 'px'); },
      goContact: e => { e && e.preventDefault && e.preventDefault(); this.toContact({}); },
      rotWord: this.ROT[s.ri],
      heroChips: this.HERO_CHIPS.map(([label, role]) => { const a = s.hero === role; return { label, pressed: a ? 'true' : 'false', ...(a ? on : off), pick: () => this.setState({ hero: role }) }; }),
      showEngineers: () => this.toContact({ fRoles: [s.hero] }),
      heroCards: this.CARDS.map(([role, meta, avail, ini], i) => { const slot = (i - s.co + 3) % 3; return { role, meta, avail, ini, avBg: ['#101A28', '#344054', '#475467'][i], ...[{ y: '-150px', s: 1, z: 3, o: 1 }, { y: '-44px', s: .96, z: 2, o: .95 }, { y: '62px', s: .92, z: 1, o: .88 }][slot] }; }),
      roles: this.ROLES.map(([name], i) => { const a = s.role === i; return { name, n: '0' + (i + 1), pressed: a ? 'true' : 'false', bg: a ? '#F7F8FA' : '#fff', bar: a ? 1 : 0, fw: a ? 600 : 500, numC: a ? '#FF6B00' : '#98A2B3', arrC: a ? '#202733' : '#D0D5DD', arrX: a ? '0px' : '-4px', pick: () => { if (s.role !== i) this.setState({ role: i }); } }; }),
      cur: (() => { const [name, abbr, what, skills] = this.ROLES[s.role]; return { name, abbr, what, skills, n: '0' + (s.role + 1), hire: () => this.toContact({ fRoles: [name] }) }; })(),
      roleHold: () => { clearInterval(this.rlt); this.rlt = null; },
      tapCount: this.STACK.length,
      tapTotal: new Set(this.STACK.flatMap(c => c[2].flatMap(g => g[1]))).size,
      stackTabs: this.STACK.map(([key, icon, groups]) => { const a = s.stackCat === key; return { label: key, key, icon, count: String(groups.reduce((n, g) => n + g[1].length, 0)).padStart(2, '0'), pressed: a ? 'true' : 'false', bg: a ? '#101A28' : '#fff', fg: a ? '#fff' : '#202733', bd: a ? '#101A28' : '#E7EAF0', icBg: a ? 'rgba(255,255,255,.1)' : '#F2F4F7', icFg: a ? '#FF8A33' : '#202733', pick: () => { if (s.stackCat !== key) this.setState({ stackCat: key }); } }; }),
      stackHold: () => { clearInterval(this.skt); this.skt = null; document.querySelectorAll('[data-catbar]').forEach(b => b.getAnimations().forEach(x => x.cancel())); },
      tapGroups: this.STACK.find(x => x[0] === s.stackCat)[2].map(([name, items]) => ({ name, count: items.length + (items.length === 1 ? ' technology' : ' technologies'), items: items.map(n => ({ n, logo: this.logo(n), i: n.replace(/[^A-Za-z.]/g, '').slice(0, 2) })) })),
      setups: this.SETUPS.map(([name, model, line, cta, rows, f]) => ({ name, line, cta, rows: rows.map(([k, v]) => ({ k, v })),
        bg: f ? '#101A28' : '#fff', fg: f ? '#fff' : '#202733', mute: f ? '#C3CAD5' : '#667085', bd: f ? '#101A28' : '#E7EAF0', sh: f ? '0 24px 56px rgba(16,26,40,.22)' : 'none',
        tbl: f ? 'rgba(255,255,255,.06)' : '#F7F8FA', line2: f ? 'rgba(255,255,255,.1)' : '#E7EAF0', btnBg: f ? '#FF6B00' : '#fff', btnBd: f ? 'none' : '1.5px solid #202733',
        pick: () => this.toContact({ fModel: model }) })),
      stepW: (s.step / 3 * 100) + '%',
      steps: this.STEPS.map(([title, when, text], i) => ({ title, when, text, n: '0' + (i + 1), cBg: i <= s.step ? '#FF6B00' : 'transparent', cFg: i <= s.step ? '#101A28' : '#C3CAD5', cBd: i <= s.step ? '#FF6B00' : 'rgba(255,255,255,.25)', go: () => { clearInterval(this.stt); if (s.step !== i) this.setState({ step: i }); } })),
      vet: this.VET.map(([title, text], i) => ({ title, text, n: '0' + (i + 1), h: [260, 228, 196, 164][i] + 'px', bg: ['#fff', '#F7F8FA', '#EEF0F4', '#101A28'][i], fg: i === 3 ? '#fff' : '#202733', mute: i === 3 ? '#C3CAD5' : '#475467', nC: i === 3 ? '#FFB52E' : '#98A2B3', bd: ['#E7EAF0', '#E7EAF0', '#E0E4EA', '#101A28'][i] })),
      compare: this.COMPARE.map(([k, e, i, f]) => ({ k, e, i, f })),
      whyList: ['72-hr shortlist', 'vetted seniors', 'free replacement', 'no upfront fees'],
      notSent: !s.sent, sent: s.sent,
      fName: s.fName, fEmail: s.fEmail, fCompany: s.fCompany, fPhone: s.fPhone, fModel: s.fModel, fDetails: s.fDetails, fConsent: s.fConsent,
      setFName: e => this.setState({ fName: e.target.value }), setFEmail: e => this.setState({ fEmail: e.target.value }),
      setFCompany: e => this.setState({ fCompany: e.target.value }), setFPhone: e => this.setState({ fPhone: e.target.value }),
      setFModel: e => this.setState({ fModel: e.target.value }), setFDetails: e => this.setState({ fDetails: e.target.value }),
      setFConsent: e => this.setState({ fConsent: e.target.checked }),
      roleChips: [...this.ROLES.map(r => r[0]), 'Something else'].map(label => { const a = s.fRoles.includes(label); return { label, pressed: a ? 'true' : 'false', ...(a ? on : off), toggle: () => this.setState(st => ({ fRoles: a ? st.fRoles.filter(x => x !== label) : [...st.fRoles, label] })) }; }),
      countOpts: ['1', '2–5', '6+'].map(label => { const a = s.fCount === label; return { label, pressed: a ? 'true' : 'false', bg: a ? '#101A28' : 'transparent', fg: a ? '#fff' : '#202733', pick: () => this.setState({ fCount: label }) }; }),
      startOpts: ['ASAP', 'This month', 'Next quarter'].map(label => { const a = s.fStart === label; return { label, pressed: a ? 'true' : 'false', ...(a ? on : off), pick: () => this.setState({ fStart: a ? '' : label }) }; }),
      nameBd: s.tried && !s.fName.trim() ? '#F04438' : '#E7EAF0',
      emailBd: s.tried && !emailOk ? '#F04438' : '#E7EAF0',
      rolesBd: s.tried && !s.fRoles.length ? '#F04438' : 'transparent', rolesPad: s.tried && !s.fRoles.length ? '10px' : '0px',
      countBd: s.tried && !s.fCount ? '#F04438' : '#E7EAF0',
      consentOl: s.tried && !s.fConsent ? '2px solid #F04438' : 'none',
      fError: s.tried && !valid,
      submit: e => { e.preventDefault(); this.setState(valid ? { sent: true } : { tried: true }); },
      reset: () => this.setState({ sent: false, tried: false, fName: '', fEmail: '', fCompany: '', fPhone: '', fRoles: [], fCount: '', fModel: '', fStart: '', fDetails: '', fConsent: false })
    };
  }
}
