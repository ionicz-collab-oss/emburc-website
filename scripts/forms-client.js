(function () {
  if (window.__ems) return;
  window.__emf = window.__emf || {};
  var RULES = {
    'lets-talk': { p: /^t[A-Z]/, skip: /^t(Sent|Tried|NotSent|Error|Valid)$/, file: 't' },
    'careers': { p: /^cr[A-Z]/, skip: /^cr(Sent|Tried|NotSent|Error)$/, file: 'cr', defaults: { crType: 'Job application' } },
    'scoping-call': { keys: ['bName', 'bEmail', 'bNote', 'bDate', 'bTime'] },
    'contact': { p: /^[cf][A-Z]/, skip: /^cTried$/, extra: ['need', 'when'] }
  };
  function clean(v) {
    if (v == null) return v;
    var t = typeof v;
    if (t === 'string' || t === 'number' || t === 'boolean') return v;
    if (Array.isArray(v)) return v.filter(function (x) { return typeof x !== 'object' && typeof x !== 'function'; });
    return undefined;
  }
  window.__ems = function (form, state, el) {
    try {
      var r = RULES[form]; if (!r || !state) return;
      var src = Object.assign({}, r.defaults || {}, state), out = {};
      Object.keys(src).forEach(function (k) {
        var take = r.keys ? r.keys.indexOf(k) > -1 : ((r.p.test(k) && !(r.skip && r.skip.test(k))) || (r.extra && r.extra.indexOf(k) > -1));
        if (!take) return;
        var v = clean(src[k]); if (v === undefined) return;
        var nk = k.replace(/^(cr|t|b|c|f)(?=[A-Z])/, ''); nk = nk.charAt(0).toLowerCase() + nk.slice(1);
        if (nk in out) nk = k;
        out[nk] = v;
      });
      if (el && el.querySelectorAll) {
        var have = Object.keys(out).map(function (k) { return String(out[k]); });
        el.querySelectorAll('input,textarea,select').forEach(function (i) {
          if (i.type === 'file' || i.type === 'checkbox' || i.type === 'radio' || i.type === 'hidden' || i.type === 'submit') return;
          var v = (i.value || '').trim(); if (!v || have.indexOf(v) > -1) return;
          var ac = i.getAttribute('autocomplete') || '';
          var k = ac === 'organization' ? 'company' : (i.tagName === 'TEXTAREA' && !('message' in out) && !('msg' in out)) ? 'message' : (ac && ac !== 'off' ? ac : (i.name || i.placeholder || i.getAttribute('aria-label') || 'field'));
          k = String(k).slice(0, 40); if (k in out) k = k + ' (form)';
          out[k] = v; have.push(v);
        });
      }
      var fd = new FormData();
      fd.append('form', form);
      fd.append('page', location.pathname);
      fd.append('fields', JSON.stringify(out));
      var f = r.file && window.__emf[r.file];
      if (f) fd.append('file', f, f.name);
      fetch('/api/lead', { method: 'POST', body: fd }).then(function (res) {
        if (!res.ok) console.error('[forms] submit failed', res.status);
        if (r.file) window.__emf[r.file] = null;
      }).catch(function (e) { console.error('[forms] submit failed', e); });
    } catch (e) { console.error('[forms]', e); }
  };
})();
