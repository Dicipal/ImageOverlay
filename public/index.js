// @__NO_SIDE_EFFECTS__
function vs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const J = {}, It = [], We = () => {
}, Mo = () => !1, Fn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), _s = (e) => e.startsWith("onUpdate:"), ce = Object.assign, bs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Zr = Object.prototype.hasOwnProperty, q = (e, t) => Zr.call(e, t), L = Array.isArray, Ft = (e) => sn(e) === "[object Map]", Po = (e) => sn(e) === "[object Set]", Ks = (e) => sn(e) === "[object Date]", D = (e) => typeof e == "function", ie = (e) => typeof e == "string", Pe = (e) => typeof e == "symbol", G = (e) => e !== null && typeof e == "object", Oo = (e) => (G(e) || D(e)) && D(e.then) && D(e.catch), Ro = Object.prototype.toString, sn = (e) => Ro.call(e), Qr = (e) => sn(e).slice(8, -1), Lo = (e) => sn(e) === "[object Object]", ys = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Bt = /* @__PURE__ */ vs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), $n = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ei = /-\w/g, ut = $n(
  (e) => e.replace(ei, (t) => t.slice(1).toUpperCase())
), ti = /\B([A-Z])/g, ht = $n(
  (e) => e.replace(ti, "-$1").toLowerCase()
), Vo = $n((e) => e.charAt(0).toUpperCase() + e.slice(1)), hn = $n(
  (e) => e ? `on${Vo(e)}` : ""
), at = (e, t) => !Object.is(e, t), gn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Do = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, xs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ni = (e) => {
  const t = ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ks;
const Mn = () => ks || (ks = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Cs(e) {
  if (L(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = ie(s) ? ii(s) : Cs(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (ie(e) || G(e))
    return e;
}
const si = /;(?![^(]*\))/g, oi = /:([^]+)/, ri = /\/\*[^]*?\*\//g;
function ii(e) {
  const t = {};
  return e.replace(ri, "").split(si).forEach((n) => {
    if (n) {
      const s = n.split(oi);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ft(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (L(e))
    for (let n = 0; n < e.length; n++) {
      const s = ft(e[n]);
      s && (t += s + " ");
    }
  else if (G(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const li = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ci = /* @__PURE__ */ vs(li);
function No(e) {
  return !!e || e === "";
}
function ai(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = ws(e[s], t[s]);
  return n;
}
function ws(e, t) {
  if (e === t) return !0;
  let n = Ks(e), s = Ks(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Pe(e), s = Pe(t), n || s)
    return e === t;
  if (n = L(e), s = L(t), n || s)
    return n && s ? ai(e, t) : !1;
  if (n = G(e), s = G(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, r = Object.keys(t).length;
    if (o !== r)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (l && !c || !l && c || !ws(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Ho = (e) => !!(e && e.__v_isRef === !0), $e = (e) => ie(e) ? e : e == null ? "" : L(e) || G(e) && (e.toString === Ro || !D(e.toString)) ? Ho(e) ? $e(e.value) : JSON.stringify(e, Uo, 2) : String(e), Uo = (e, t) => Ho(t) ? Uo(e, t.value) : Ft(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[Kn(s, r) + " =>"] = o, n),
    {}
  )
} : Po(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Kn(n))
} : Pe(t) ? Kn(t) : G(t) && !L(t) && !Lo(t) ? String(t) : t, Kn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Pe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let we;
class ui {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = we, !t && we && (this.index = (we.scopes || (we.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = we;
      try {
        return we = this, t();
      } finally {
        we = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = we, we = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (we = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function fi() {
  return we;
}
let te;
const kn = /* @__PURE__ */ new WeakSet();
class jo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, we && we.active && we.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, kn.has(this) && (kn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ko(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ws(this), ko(this);
    const t = te, n = Me;
    te = this, Me = !0;
    try {
      return this.fn();
    } finally {
      Wo(this), te = t, Me = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Es(t);
      this.deps = this.depsTail = void 0, Ws(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? kn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ns(this) && this.run();
  }
  get dirty() {
    return ns(this);
  }
}
let Bo = 0, Kt, kt;
function Ko(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = kt, kt = e;
    return;
  }
  e.next = Kt, Kt = e;
}
function Ss() {
  Bo++;
}
function Ts() {
  if (--Bo > 0)
    return;
  if (kt) {
    let t = kt;
    for (kt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Kt; ) {
    let t = Kt;
    for (Kt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ko(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Wo(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Es(s), di(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function ns(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Yo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Yo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Xt) || (e.globalVersion = Xt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ns(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = te, s = Me;
  te = e, Me = !0;
  try {
    ko(e);
    const o = e.fn(e._value);
    (t.version === 0 || at(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    te = n, Me = s, Wo(e), e.flags &= -3;
  }
}
function Es(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Es(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function di(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Me = !0;
const qo = [];
function tt() {
  qo.push(Me), Me = !1;
}
function nt() {
  const e = qo.pop();
  Me = e === void 0 ? !0 : e;
}
function Ws(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = te;
    te = void 0;
    try {
      t();
    } finally {
      te = n;
    }
  }
}
let Xt = 0;
class pi {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class As {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!te || !Me || te === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== te)
      n = this.activeLink = new pi(te, this), te.deps ? (n.prevDep = te.depsTail, te.depsTail.nextDep = n, te.depsTail = n) : te.deps = te.depsTail = n, Xo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = te.depsTail, n.nextDep = void 0, te.depsTail.nextDep = n, te.depsTail = n, te.deps === n && (te.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Xt++, this.notify(t);
  }
  notify(t) {
    Ss();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ts();
    }
  }
}
function Xo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Xo(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ss = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ Symbol(
  ""
), os = /* @__PURE__ */ Symbol(
  ""
), Gt = /* @__PURE__ */ Symbol(
  ""
);
function pe(e, t, n) {
  if (Me && te) {
    let s = ss.get(e);
    s || ss.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new As()), o.map = s, o.key = n), o.track();
  }
}
function Ze(e, t, n, s, o, r) {
  const i = ss.get(e);
  if (!i) {
    Xt++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Ss(), t === "clear")
    i.forEach(l);
  else {
    const c = L(e), d = c && ys(n);
    if (c && n === "length") {
      const u = Number(s);
      i.forEach((p, m) => {
        (m === "length" || m === Gt || !Pe(m) && m >= u) && l(p);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), d && l(i.get(Gt)), t) {
        case "add":
          c ? d && l(i.get("length")) : (l(i.get(wt)), Ft(e) && l(i.get(os)));
          break;
        case "delete":
          c || (l(i.get(wt)), Ft(e) && l(i.get(os)));
          break;
        case "set":
          Ft(e) && l(i.get(wt));
          break;
      }
  }
  Ts();
}
function Tt(e) {
  const t = /* @__PURE__ */ k(e);
  return t === e ? t : (pe(t, "iterate", Gt), /* @__PURE__ */ Ie(e) ? t : t.map(Oe));
}
function Pn(e) {
  return pe(e = /* @__PURE__ */ k(e), "iterate", Gt), e;
}
function it(e, t) {
  return /* @__PURE__ */ st(e) ? Ot(/* @__PURE__ */ St(e) ? Oe(t) : t) : Oe(t);
}
const hi = {
  __proto__: null,
  [Symbol.iterator]() {
    return Wn(this, Symbol.iterator, (e) => it(this, e));
  },
  concat(...e) {
    return Tt(this).concat(
      ...e.map((t) => L(t) ? Tt(t) : t)
    );
  },
  entries() {
    return Wn(this, "entries", (e) => (e[1] = it(this, e[1]), e));
  },
  every(e, t) {
    return Xe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Xe(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => it(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Xe(
      this,
      "find",
      e,
      t,
      (n) => it(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Xe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Xe(
      this,
      "findLast",
      e,
      t,
      (n) => it(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Xe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Xe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Yn(this, "includes", e);
  },
  indexOf(...e) {
    return Yn(this, "indexOf", e);
  },
  join(e) {
    return Tt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Yn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Xe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Dt(this, "pop");
  },
  push(...e) {
    return Dt(this, "push", e);
  },
  reduce(e, ...t) {
    return Ys(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ys(this, "reduceRight", e, t);
  },
  shift() {
    return Dt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Xe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Dt(this, "splice", e);
  },
  toReversed() {
    return Tt(this).toReversed();
  },
  toSorted(e) {
    return Tt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Tt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Dt(this, "unshift", e);
  },
  values() {
    return Wn(this, "values", (e) => it(this, e));
  }
};
function Wn(e, t, n) {
  const s = Pn(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Ie(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.done || (r.value = n(r.value)), r;
  }), o;
}
const gi = Array.prototype;
function Xe(e, t, n, s, o, r) {
  const i = Pn(e), l = i !== e && !/* @__PURE__ */ Ie(e), c = i[t];
  if (c !== gi[t]) {
    const p = c.apply(e, r);
    return l ? Oe(p) : p;
  }
  let d = n;
  i !== e && (l ? d = function(p, m) {
    return n.call(this, it(e, p), m, e);
  } : n.length > 2 && (d = function(p, m) {
    return n.call(this, p, m, e);
  }));
  const u = c.call(i, d, s);
  return l && o ? o(u) : u;
}
function Ys(e, t, n, s) {
  const o = Pn(e);
  let r = n;
  return o !== e && (/* @__PURE__ */ Ie(e) ? n.length > 3 && (r = function(i, l, c) {
    return n.call(this, i, l, c, e);
  }) : r = function(i, l, c) {
    return n.call(this, i, it(e, l), c, e);
  }), o[t](r, ...s);
}
function Yn(e, t, n) {
  const s = /* @__PURE__ */ k(e);
  pe(s, "iterate", Gt);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ $s(n[0]) ? (n[0] = /* @__PURE__ */ k(n[0]), s[t](...n)) : o;
}
function Dt(e, t, n = []) {
  tt(), Ss();
  const s = (/* @__PURE__ */ k(e))[t].apply(e, n);
  return Ts(), nt(), s;
}
const mi = /* @__PURE__ */ vs("__proto__,__v_isRef,__isVue"), Go = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pe)
);
function vi(e) {
  Pe(e) || (e = String(e));
  const t = /* @__PURE__ */ k(this);
  return pe(t, "has", e), t.hasOwnProperty(e);
}
class zo {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return s === (o ? r ? Ai : er : r ? Qo : Zo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = L(t);
    if (!o) {
      let c;
      if (i && (c = hi[n]))
        return c;
      if (n === "hasOwnProperty")
        return vi;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ le(t) ? t : s
    );
    if ((Pe(n) ? Go.has(n) : mi(n)) || (o || pe(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ le(l)) {
      const c = i && ys(n) ? l : l.value;
      return o && G(c) ? /* @__PURE__ */ is(c) : c;
    }
    return G(l) ? o ? /* @__PURE__ */ is(l) : /* @__PURE__ */ On(l) : l;
  }
}
class Jo extends zo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    const i = L(t) && ys(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ st(r);
      if (!/* @__PURE__ */ Ie(s) && !/* @__PURE__ */ st(s) && (r = /* @__PURE__ */ k(r), s = /* @__PURE__ */ k(s)), !i && /* @__PURE__ */ le(r) && !/* @__PURE__ */ le(s))
        return d || (r.value = s), !0;
    }
    const l = i ? Number(n) < t.length : q(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ le(t) ? t : o
    );
    return t === /* @__PURE__ */ k(o) && (l ? at(s, r) && Ze(t, "set", n, s) : Ze(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = q(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && Ze(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Pe(n) || !Go.has(n)) && pe(t, "has", n), s;
  }
  ownKeys(t) {
    return pe(
      t,
      "iterate",
      L(t) ? "length" : wt
    ), Reflect.ownKeys(t);
  }
}
class _i extends zo {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const bi = /* @__PURE__ */ new Jo(), yi = /* @__PURE__ */ new _i(), xi = /* @__PURE__ */ new Jo(!0);
const rs = (e) => e, un = (e) => Reflect.getPrototypeOf(e);
function Ci(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = /* @__PURE__ */ k(o), i = Ft(r), l = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, d = o[e](...s), u = n ? rs : t ? Ot : Oe;
    return !t && pe(
      r,
      "iterate",
      c ? os : wt
    ), ce(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: p, done: m } = d.next();
          return m ? { value: p, done: m } : {
            value: l ? [u(p[0]), u(p[1])] : u(p),
            done: m
          };
        }
      }
    );
  };
}
function fn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function wi(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = /* @__PURE__ */ k(r), l = /* @__PURE__ */ k(o);
      e || (at(o, l) && pe(i, "get", o), pe(i, "get", l));
      const { has: c } = un(i), d = t ? rs : e ? Ot : Oe;
      if (c.call(i, o))
        return d(r.get(o));
      if (c.call(i, l))
        return d(r.get(l));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && pe(/* @__PURE__ */ k(o), "iterate", wt), o.size;
    },
    has(o) {
      const r = this.__v_raw, i = /* @__PURE__ */ k(r), l = /* @__PURE__ */ k(o);
      return e || (at(o, l) && pe(i, "has", o), pe(i, "has", l)), o === l ? r.has(o) : r.has(o) || r.has(l);
    },
    forEach(o, r) {
      const i = this, l = i.__v_raw, c = /* @__PURE__ */ k(l), d = t ? rs : e ? Ot : Oe;
      return !e && pe(c, "iterate", wt), l.forEach((u, p) => o.call(r, d(u), d(p), i));
    }
  };
  return ce(
    n,
    e ? {
      add: fn("add"),
      set: fn("set"),
      delete: fn("delete"),
      clear: fn("clear")
    } : {
      add(o) {
        !t && !/* @__PURE__ */ Ie(o) && !/* @__PURE__ */ st(o) && (o = /* @__PURE__ */ k(o));
        const r = /* @__PURE__ */ k(this);
        return un(r).has.call(r, o) || (r.add(o), Ze(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !/* @__PURE__ */ Ie(r) && !/* @__PURE__ */ st(r) && (r = /* @__PURE__ */ k(r));
        const i = /* @__PURE__ */ k(this), { has: l, get: c } = un(i);
        let d = l.call(i, o);
        d || (o = /* @__PURE__ */ k(o), d = l.call(i, o));
        const u = c.call(i, o);
        return i.set(o, r), d ? at(r, u) && Ze(i, "set", o, r) : Ze(i, "add", o, r), this;
      },
      delete(o) {
        const r = /* @__PURE__ */ k(this), { has: i, get: l } = un(r);
        let c = i.call(r, o);
        c || (o = /* @__PURE__ */ k(o), c = i.call(r, o)), l && l.call(r, o);
        const d = r.delete(o);
        return c && Ze(r, "delete", o, void 0), d;
      },
      clear() {
        const o = /* @__PURE__ */ k(this), r = o.size !== 0, i = o.clear();
        return r && Ze(
          o,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = Ci(o, e, t);
  }), n;
}
function Is(e, t) {
  const n = wi(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    q(n, o) && o in s ? n : s,
    o,
    r
  );
}
const Si = {
  get: /* @__PURE__ */ Is(!1, !1)
}, Ti = {
  get: /* @__PURE__ */ Is(!1, !0)
}, Ei = {
  get: /* @__PURE__ */ Is(!0, !1)
};
const Zo = /* @__PURE__ */ new WeakMap(), Qo = /* @__PURE__ */ new WeakMap(), er = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap();
function Ii(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Fi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ii(Qr(e));
}
// @__NO_SIDE_EFFECTS__
function On(e) {
  return /* @__PURE__ */ st(e) ? e : Fs(
    e,
    !1,
    bi,
    Si,
    Zo
  );
}
// @__NO_SIDE_EFFECTS__
function $i(e) {
  return Fs(
    e,
    !1,
    xi,
    Ti,
    Qo
  );
}
// @__NO_SIDE_EFFECTS__
function is(e) {
  return Fs(
    e,
    !0,
    yi,
    Ei,
    er
  );
}
function Fs(e, t, n, s, o) {
  if (!G(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Fi(e);
  if (r === 0)
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const l = new Proxy(
    e,
    r === 2 ? s : n
  );
  return o.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function St(e) {
  return /* @__PURE__ */ st(e) ? /* @__PURE__ */ St(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function st(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ie(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function $s(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function k(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ k(t) : e;
}
function Mi(e) {
  return !q(e, "__v_skip") && Object.isExtensible(e) && Do(e, "__v_skip", !0), e;
}
const Oe = (e) => G(e) ? /* @__PURE__ */ On(e) : e, Ot = (e) => G(e) ? /* @__PURE__ */ is(e) : e;
// @__NO_SIDE_EFFECTS__
function le(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function oe(e) {
  return Pi(e, !1);
}
function Pi(e, t) {
  return /* @__PURE__ */ le(e) ? e : new Oi(e, t);
}
class Oi {
  constructor(t, n) {
    this.dep = new As(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ k(t), this._value = n ? t : Oe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Ie(t) || /* @__PURE__ */ st(t);
    t = s ? t : /* @__PURE__ */ k(t), at(t, n) && (this._rawValue = t, this._value = s ? t : Oe(t), this.dep.trigger());
  }
}
function ke(e) {
  return /* @__PURE__ */ le(e) ? e.value : e;
}
const Ri = {
  get: (e, t, n) => t === "__v_raw" ? e : ke(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ le(o) && !/* @__PURE__ */ le(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function tr(e) {
  return /* @__PURE__ */ St(e) ? e : new Proxy(e, Ri);
}
class Li {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new As(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Xt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    te !== this)
      return Ko(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Yo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Vi(e, t, n = !1) {
  let s, o;
  return D(e) ? s = e : (s = e.get, o = e.set), new Li(s, o, n);
}
const dn = {}, yn = /* @__PURE__ */ new WeakMap();
let xt;
function Di(e, t = !1, n = xt) {
  if (n) {
    let s = yn.get(n);
    s || yn.set(n, s = []), s.push(e);
  }
}
function Ni(e, t, n = J) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: l, call: c } = n, d = (M) => o ? M : /* @__PURE__ */ Ie(M) || o === !1 || o === 0 ? Qe(M, 1) : Qe(M);
  let u, p, m, x, I = !1, A = !1;
  if (/* @__PURE__ */ le(e) ? (p = () => e.value, I = /* @__PURE__ */ Ie(e)) : /* @__PURE__ */ St(e) ? (p = () => d(e), I = !0) : L(e) ? (A = !0, I = e.some((M) => /* @__PURE__ */ St(M) || /* @__PURE__ */ Ie(M)), p = () => e.map((M) => {
    if (/* @__PURE__ */ le(M))
      return M.value;
    if (/* @__PURE__ */ St(M))
      return d(M);
    if (D(M))
      return c ? c(M, 2) : M();
  })) : D(e) ? t ? p = c ? () => c(e, 2) : e : p = () => {
    if (m) {
      tt();
      try {
        m();
      } finally {
        nt();
      }
    }
    const M = xt;
    xt = u;
    try {
      return c ? c(e, 3, [x]) : e(x);
    } finally {
      xt = M;
    }
  } : p = We, t && o) {
    const M = p, K = o === !0 ? 1 / 0 : o;
    p = () => Qe(M(), K);
  }
  const N = fi(), U = () => {
    u.stop(), N && N.active && bs(N.effects, u);
  };
  if (r && t) {
    const M = t;
    t = (...K) => {
      M(...K), U();
    };
  }
  let O = A ? new Array(e.length).fill(dn) : dn;
  const j = (M) => {
    if (!(!(u.flags & 1) || !u.dirty && !M))
      if (t) {
        const K = u.run();
        if (o || I || (A ? K.some((W, ne) => at(W, O[ne])) : at(K, O))) {
          m && m();
          const W = xt;
          xt = u;
          try {
            const ne = [
              K,
              // pass undefined as the old value when it's changed for the first time
              O === dn ? void 0 : A && O[0] === dn ? [] : O,
              x
            ];
            O = K, c ? c(t, 3, ne) : (
              // @ts-expect-error
              t(...ne)
            );
          } finally {
            xt = W;
          }
        }
      } else
        u.run();
  };
  return l && l(j), u = new jo(p), u.scheduler = i ? () => i(j, !1) : j, x = (M) => Di(M, !1, u), m = u.onStop = () => {
    const M = yn.get(u);
    if (M) {
      if (c)
        c(M, 4);
      else
        for (const K of M) K();
      yn.delete(u);
    }
  }, t ? s ? j(!0) : O = u.run() : i ? i(j.bind(null, !0), !0) : u.run(), U.pause = u.pause.bind(u), U.resume = u.resume.bind(u), U.stop = U, U;
}
function Qe(e, t = 1 / 0, n) {
  if (t <= 0 || !G(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ le(e))
    Qe(e.value, t, n);
  else if (L(e))
    for (let s = 0; s < e.length; s++)
      Qe(e[s], t, n);
  else if (Po(e) || Ft(e))
    e.forEach((s) => {
      Qe(s, t, n);
    });
  else if (Lo(e)) {
    for (const s in e)
      Qe(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Qe(e[s], t, n);
  }
  return e;
}
function on(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Rn(o, t, n);
  }
}
function Re(e, t, n, s) {
  if (D(e)) {
    const o = on(e, t, n, s);
    return o && Oo(o) && o.catch((r) => {
      Rn(r, t, n);
    }), o;
  }
  if (L(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(Re(e[r], t, n, s));
    return o;
  }
}
function Rn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || J;
  if (t) {
    let l = t.parent;
    const c = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let p = 0; p < u.length; p++)
          if (u[p](e, c, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      tt(), on(r, null, 10, [
        e,
        c,
        d
      ]), nt();
      return;
    }
  }
  Hi(e, n, o, s, i);
}
function Hi(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const ve = [];
let je = -1;
const $t = [];
let lt = null, Et = 0;
const nr = /* @__PURE__ */ Promise.resolve();
let xn = null;
function Ui(e) {
  const t = xn || nr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ji(e) {
  let t = je + 1, n = ve.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = ve[s], r = zt(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ms(e) {
  if (!(e.flags & 1)) {
    const t = zt(e), n = ve[ve.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= zt(n) ? ve.push(e) : ve.splice(ji(t), 0, e), e.flags |= 1, sr();
  }
}
function sr() {
  xn || (xn = nr.then(rr));
}
function Bi(e) {
  L(e) ? $t.push(...e) : lt && e.id === -1 ? lt.splice(Et + 1, 0, e) : e.flags & 1 || ($t.push(e), e.flags |= 1), sr();
}
function qs(e, t, n = je + 1) {
  for (; n < ve.length; n++) {
    const s = ve[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ve.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function or(e) {
  if ($t.length) {
    const t = [...new Set($t)].sort(
      (n, s) => zt(n) - zt(s)
    );
    if ($t.length = 0, lt) {
      lt.push(...t);
      return;
    }
    for (lt = t, Et = 0; Et < lt.length; Et++) {
      const n = lt[Et];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    lt = null, Et = 0;
  }
}
const zt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function rr(e) {
  try {
    for (je = 0; je < ve.length; je++) {
      const t = ve[je];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), on(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; je < ve.length; je++) {
      const t = ve[je];
      t && (t.flags &= -2);
    }
    je = -1, ve.length = 0, or(), xn = null, (ve.length || $t.length) && rr();
  }
}
let ge = null, ir = null;
function Cn(e) {
  const t = ge;
  return ge = e, ir = e && e.type.__scopeId || null, t;
}
function Se(e, t = ge, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && En(-1);
    const r = Cn(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Cn(r), s._d && En(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function et(e, t) {
  if (ge === null)
    return e;
  const n = Un(ge), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, l, c = J] = t[o];
    r && (D(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Qe(i), s.push({
      dir: r,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function vt(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    r && (l.oldValue = r[i].value);
    let c = l.dir[s];
    c && (tt(), Re(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), nt());
  }
}
function Ki(e, t) {
  if (be) {
    let n = be.provides;
    const s = be.parent && be.parent.provides;
    s === n && (n = be.provides = Object.create(s)), n[e] = t;
  }
}
function mn(e, t, n = !1) {
  const s = Hr();
  if (s || Pt) {
    let o = Pt ? Pt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && D(t) ? t.call(s && s.proxy) : t;
  }
}
const ki = /* @__PURE__ */ Symbol.for("v-scx"), Wi = () => mn(ki);
function vn(e, t, n) {
  return lr(e, t, n);
}
function lr(e, t, n = J) {
  const { immediate: s, deep: o, flush: r, once: i } = n, l = ce({}, n), c = t && s || !t && r !== "post";
  let d;
  if (en) {
    if (r === "sync") {
      const x = Wi();
      d = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!c) {
      const x = () => {
      };
      return x.stop = We, x.resume = We, x.pause = We, x;
    }
  }
  const u = be;
  l.call = (x, I, A) => Re(x, u, I, A);
  let p = !1;
  r === "post" ? l.scheduler = (x) => {
    Ce(x, u && u.suspense);
  } : r !== "sync" && (p = !0, l.scheduler = (x, I) => {
    I ? x() : Ms(x);
  }), l.augmentJob = (x) => {
    t && (x.flags |= 4), p && (x.flags |= 2, u && (x.id = u.uid, x.i = u));
  };
  const m = Ni(e, t, l);
  return en && (d ? d.push(m) : c && m()), m;
}
function Yi(e, t, n) {
  const s = this.proxy, o = ie(e) ? e.includes(".") ? cr(s, e) : () => s[e] : e.bind(s, s);
  let r;
  D(t) ? r = t : (r = t.handler, n = t);
  const i = rn(this), l = lr(o, r.bind(s), n);
  return i(), l;
}
function cr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const qi = /* @__PURE__ */ Symbol("_vte"), ar = (e) => e.__isTeleport, Be = /* @__PURE__ */ Symbol("_leaveCb"), Nt = /* @__PURE__ */ Symbol("_enterCb");
function Xi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Dn(() => {
    e.isMounted = !0;
  }), vr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ae = [Function, Array], ur = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ae,
  onEnter: Ae,
  onAfterEnter: Ae,
  onEnterCancelled: Ae,
  // leave
  onBeforeLeave: Ae,
  onLeave: Ae,
  onAfterLeave: Ae,
  onLeaveCancelled: Ae,
  // appear
  onBeforeAppear: Ae,
  onAppear: Ae,
  onAfterAppear: Ae,
  onAppearCancelled: Ae
}, fr = (e) => {
  const t = e.subTree;
  return t.component ? fr(t.component) : t;
}, Gi = {
  name: "BaseTransition",
  props: ur,
  setup(e, { slots: t }) {
    const n = Hr(), s = Xi();
    return () => {
      const o = t.default && hr(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = dr(o), i = /* @__PURE__ */ k(e), { mode: l } = i;
      if (s.isLeaving)
        return qn(r);
      const c = Xs(r);
      if (!c)
        return qn(r);
      let d = ls(
        c,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (p) => d = p
      );
      c.type !== he && Jt(c, d);
      let u = n.subTree && Xs(n.subTree);
      if (u && u.type !== he && !Ct(u, c) && fr(n).type !== he) {
        let p = ls(
          u,
          i,
          s,
          n
        );
        if (Jt(u, p), l === "out-in" && c.type !== he)
          return s.isLeaving = !0, p.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete p.afterLeave, u = void 0;
          }, qn(r);
        l === "in-out" && c.type !== he ? p.delayLeave = (m, x, I) => {
          const A = pr(
            s,
            u
          );
          A[String(u.key)] = u, m[Be] = () => {
            x(), m[Be] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            I(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function dr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== he) {
        t = n;
        break;
      }
  }
  return t;
}
const zi = Gi;
function pr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function ls(e, t, n, s, o) {
  const {
    appear: r,
    mode: i,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: p,
    onBeforeLeave: m,
    onLeave: x,
    onAfterLeave: I,
    onLeaveCancelled: A,
    onBeforeAppear: N,
    onAppear: U,
    onAfterAppear: O,
    onAppearCancelled: j
  } = t, M = String(e.key), K = pr(n, e), W = (H, Y) => {
    H && Re(
      H,
      s,
      9,
      Y
    );
  }, ne = (H, Y) => {
    const T = Y[1];
    W(H, Y), L(H) ? H.every((g) => g.length <= 1) && T() : H.length <= 1 && T();
  }, fe = {
    mode: i,
    persisted: l,
    beforeEnter(H) {
      let Y = c;
      if (!n.isMounted)
        if (r)
          Y = N || c;
        else
          return;
      H[Be] && H[Be](
        !0
        /* cancelled */
      );
      const T = K[M];
      T && Ct(e, T) && T.el[Be] && T.el[Be](), W(Y, [H]);
    },
    enter(H) {
      let Y = d, T = u, g = p;
      if (!n.isMounted)
        if (r)
          Y = U || d, T = O || u, g = j || p;
        else
          return;
      let F = !1;
      H[Nt] = (qe) => {
        F || (F = !0, qe ? W(g, [H]) : W(T, [H]), fe.delayedLeave && fe.delayedLeave(), H[Nt] = void 0);
      };
      const re = H[Nt].bind(null, !1);
      Y ? ne(Y, [H, re]) : re();
    },
    leave(H, Y) {
      const T = String(e.key);
      if (H[Nt] && H[Nt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return Y();
      W(m, [H]);
      let g = !1;
      H[Be] = (re) => {
        g || (g = !0, Y(), re ? W(A, [H]) : W(I, [H]), H[Be] = void 0, K[T] === e && delete K[T]);
      };
      const F = H[Be].bind(null, !1);
      K[T] = e, x ? ne(x, [H, F]) : F();
    },
    clone(H) {
      const Y = ls(
        H,
        t,
        n,
        s,
        o
      );
      return o && o(Y), Y;
    }
  };
  return fe;
}
function qn(e) {
  if (Ln(e))
    return e = dt(e), e.children = null, e;
}
function Xs(e) {
  if (!Ln(e))
    return ar(e.type) && e.children ? dr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && D(n.default))
      return n.default();
  }
}
function Jt(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Jt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function hr(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === _e ? (i.patchFlag & 128 && o++, s = s.concat(
      hr(i.children, t, l)
    )) : (t || i.type !== he) && s.push(l != null ? dt(i, { key: l }) : i);
  }
  if (o > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Le(e, t) {
  return D(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ce({ name: e.name }, t, { setup: e })
  ) : e;
}
function gr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Gs(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const wn = /* @__PURE__ */ new WeakMap();
function Wt(e, t, n, s, o = !1) {
  if (L(e)) {
    e.forEach(
      (A, N) => Wt(
        A,
        t && (L(t) ? t[N] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (Mt(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Wt(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? Un(s.component) : s.el, i = o ? null : r, { i: l, r: c } = e, d = t && t.r, u = l.refs === J ? l.refs = {} : l.refs, p = l.setupState, m = /* @__PURE__ */ k(p), x = p === J ? Mo : (A) => Gs(u, A) ? !1 : q(m, A), I = (A, N) => !(N && Gs(u, N));
  if (d != null && d !== c) {
    if (zs(t), ie(d))
      u[d] = null, x(d) && (p[d] = null);
    else if (/* @__PURE__ */ le(d)) {
      const A = t;
      I(d, A.k) && (d.value = null), A.k && (u[A.k] = null);
    }
  }
  if (D(c))
    on(c, l, 12, [i, u]);
  else {
    const A = ie(c), N = /* @__PURE__ */ le(c);
    if (A || N) {
      const U = () => {
        if (e.f) {
          const O = A ? x(c) ? p[c] : u[c] : I() || !e.k ? c.value : u[e.k];
          if (o)
            L(O) && bs(O, r);
          else if (L(O))
            O.includes(r) || O.push(r);
          else if (A)
            u[c] = [r], x(c) && (p[c] = u[c]);
          else {
            const j = [r];
            I(c, e.k) && (c.value = j), e.k && (u[e.k] = j);
          }
        } else A ? (u[c] = i, x(c) && (p[c] = i)) : N && (I(c, e.k) && (c.value = i), e.k && (u[e.k] = i));
      };
      if (i) {
        const O = () => {
          U(), wn.delete(e);
        };
        O.id = -1, wn.set(e, O), Ce(O, n);
      } else
        zs(e), U();
    }
  }
}
function zs(e) {
  const t = wn.get(e);
  t && (t.flags |= 8, wn.delete(e));
}
Mn().requestIdleCallback;
Mn().cancelIdleCallback;
const Mt = (e) => !!e.type.__asyncLoader, Ln = (e) => e.type.__isKeepAlive;
function Ji(e, t) {
  mr(e, "a", t);
}
function Zi(e, t) {
  mr(e, "da", t);
}
function mr(e, t, n = be) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Vn(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Ln(o.parent.vnode) && Qi(s, t, n, o), o = o.parent;
  }
}
function Qi(e, t, n, s) {
  const o = Vn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ps(() => {
    bs(s[t], o);
  }, n);
}
function Vn(e, t, n = be, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      tt();
      const l = rn(n), c = Re(t, n, e, i);
      return l(), nt(), c;
    });
    return s ? o.unshift(r) : o.push(r), r;
  }
}
const ot = (e) => (t, n = be) => {
  (!en || e === "sp") && Vn(e, (...s) => t(...s), n);
}, el = ot("bm"), Dn = ot("m"), tl = ot(
  "bu"
), nl = ot("u"), vr = ot(
  "bum"
), Ps = ot("um"), sl = ot(
  "sp"
), ol = ot("rtg"), rl = ot("rtc");
function il(e, t = be) {
  Vn("ec", e, t);
}
const ll = /* @__PURE__ */ Symbol.for("v-ndc");
function cl(e, t, n, s) {
  let o;
  const r = n, i = L(e);
  if (i || ie(e)) {
    const l = i && /* @__PURE__ */ St(e);
    let c = !1, d = !1;
    l && (c = !/* @__PURE__ */ Ie(e), d = /* @__PURE__ */ st(e), e = Pn(e)), o = new Array(e.length);
    for (let u = 0, p = e.length; u < p; u++)
      o[u] = t(
        c ? d ? Ot(Oe(e[u])) : Oe(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, r);
  } else if (G(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, c) => t(l, c, void 0, r)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let c = 0, d = l.length; c < d; c++) {
        const u = l[c];
        o[c] = t(e[u], u, c, r);
      }
    }
  else
    o = [];
  return o;
}
function Sn(e, t, n = {}, s, o) {
  if (ge.ce || ge.parent && Mt(ge.parent) && ge.parent.ce) {
    const d = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), Z(), Ye(
      _e,
      null,
      [X("slot", n, s)],
      d ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), Z();
  const i = r && _r(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, c = Ye(
    _e,
    {
      key: (l && !Pe(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), c;
}
function _r(e) {
  return e.some((t) => Qt(t) ? !(t.type === he || t.type === _e && !_r(t.children)) : !0) ? e : null;
}
function al(e, t) {
  const n = {};
  for (const s in e)
    n[/[A-Z]/.test(s) ? `on:${s}` : hn(s)] = e[s];
  return n;
}
const cs = (e) => e ? Ur(e) ? Un(e) : cs(e.parent) : null, Yt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ce(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => cs(e.parent),
    $root: (e) => cs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => yr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ms(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ui.bind(e.proxy)),
    $watch: (e) => Yi.bind(e)
  })
), Xn = (e, t) => e !== J && !e.__isScriptSetup && q(e, t), ul = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Xn(s, t))
          return i[t] = 1, s[t];
        if (o !== J && q(o, t))
          return i[t] = 2, o[t];
        if (q(r, t))
          return i[t] = 3, r[t];
        if (n !== J && q(n, t))
          return i[t] = 4, n[t];
        as && (i[t] = 0);
      }
    }
    const d = Yt[t];
    let u, p;
    if (d)
      return t === "$attrs" && pe(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== J && q(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = c.config.globalProperties, q(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return Xn(o, t) ? (o[t] = n, !0) : s !== J && q(s, t) ? (s[t] = n, !0) : q(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: r, type: i }
  }, l) {
    let c;
    return !!(n[l] || e !== J && l[0] !== "$" && q(e, l) || Xn(t, l) || q(r, l) || q(s, l) || q(Yt, l) || q(o.config.globalProperties, l) || (c = i.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Js(e) {
  return L(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let as = !0;
function fl(e) {
  const t = yr(e), n = e.proxy, s = e.ctx;
  as = !1, t.beforeCreate && Zs(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: r,
    methods: i,
    watch: l,
    provide: c,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: p,
    mounted: m,
    beforeUpdate: x,
    updated: I,
    activated: A,
    deactivated: N,
    beforeDestroy: U,
    beforeUnmount: O,
    destroyed: j,
    unmounted: M,
    render: K,
    renderTracked: W,
    renderTriggered: ne,
    errorCaptured: fe,
    serverPrefetch: H,
    // public API
    expose: Y,
    inheritAttrs: T,
    // assets
    components: g,
    directives: F,
    filters: re
  } = t;
  if (d && dl(d, s, null), i)
    for (const se in i) {
      const Q = i[se];
      D(Q) && (s[se] = Q.bind(n));
    }
  if (o) {
    const se = o.call(n, n);
    G(se) && (e.data = /* @__PURE__ */ On(se));
  }
  if (as = !0, r)
    for (const se in r) {
      const Q = r[se], gt = D(Q) ? Q.bind(n, n) : D(Q.get) ? Q.get.bind(n, n) : We, cn = !D(Q) && D(Q.set) ? Q.set.bind(n) : We, mt = tn({
        get: gt,
        set: cn
      });
      Object.defineProperty(s, se, {
        enumerable: !0,
        configurable: !0,
        get: () => mt.value,
        set: (Ve) => mt.value = Ve
      });
    }
  if (l)
    for (const se in l)
      br(l[se], s, n, se);
  if (c) {
    const se = D(c) ? c.call(n) : c;
    Reflect.ownKeys(se).forEach((Q) => {
      Ki(Q, se[Q]);
    });
  }
  u && Zs(u, e, "c");
  function ae(se, Q) {
    L(Q) ? Q.forEach((gt) => se(gt.bind(n))) : Q && se(Q.bind(n));
  }
  if (ae(el, p), ae(Dn, m), ae(tl, x), ae(nl, I), ae(Ji, A), ae(Zi, N), ae(il, fe), ae(rl, W), ae(ol, ne), ae(vr, O), ae(Ps, M), ae(sl, H), L(Y))
    if (Y.length) {
      const se = e.exposed || (e.exposed = {});
      Y.forEach((Q) => {
        Object.defineProperty(se, Q, {
          get: () => n[Q],
          set: (gt) => n[Q] = gt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  K && e.render === We && (e.render = K), T != null && (e.inheritAttrs = T), g && (e.components = g), F && (e.directives = F), H && gr(e);
}
function dl(e, t, n = We) {
  L(e) && (e = us(e));
  for (const s in e) {
    const o = e[s];
    let r;
    G(o) ? "default" in o ? r = mn(
      o.from || s,
      o.default,
      !0
    ) : r = mn(o.from || s) : r = mn(o), /* @__PURE__ */ le(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r;
  }
}
function Zs(e, t, n) {
  Re(
    L(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function br(e, t, n, s) {
  let o = s.includes(".") ? cr(n, s) : () => n[s];
  if (ie(e)) {
    const r = t[e];
    D(r) && vn(o, r);
  } else if (D(e))
    vn(o, e.bind(n));
  else if (G(e))
    if (L(e))
      e.forEach((r) => br(r, t, n, s));
    else {
      const r = D(e.handler) ? e.handler.bind(n) : t[e.handler];
      D(r) && vn(o, r, e);
    }
}
function yr(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !o.length && !n && !s ? c = t : (c = {}, o.length && o.forEach(
    (d) => Tn(c, d, i, !0)
  ), Tn(c, t, i)), G(t) && r.set(t, c), c;
}
function Tn(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && Tn(e, r, n, !0), o && o.forEach(
    (i) => Tn(e, i, n, !0)
  );
  for (const i in t)
    if (!(s && i === "expose")) {
      const l = pl[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const pl = {
  data: Qs,
  props: eo,
  emits: eo,
  // objects
  methods: jt,
  computed: jt,
  // lifecycle
  beforeCreate: me,
  created: me,
  beforeMount: me,
  mounted: me,
  beforeUpdate: me,
  updated: me,
  beforeDestroy: me,
  beforeUnmount: me,
  destroyed: me,
  unmounted: me,
  activated: me,
  deactivated: me,
  errorCaptured: me,
  serverPrefetch: me,
  // assets
  components: jt,
  directives: jt,
  // watch
  watch: gl,
  // provide / inject
  provide: Qs,
  inject: hl
};
function Qs(e, t) {
  return t ? e ? function() {
    return ce(
      D(e) ? e.call(this, this) : e,
      D(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function hl(e, t) {
  return jt(us(e), us(t));
}
function us(e) {
  if (L(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function me(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function jt(e, t) {
  return e ? ce(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function eo(e, t) {
  return e ? L(e) && L(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ce(
    /* @__PURE__ */ Object.create(null),
    Js(e),
    Js(t ?? {})
  ) : t;
}
function gl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ce(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = me(e[s], t[s]);
  return n;
}
function xr() {
  return {
    app: null,
    config: {
      isNativeTag: Mo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let ml = 0;
function vl(e, t) {
  return function(s, o = null) {
    D(s) || (s = ce({}, s)), o != null && !G(o) && (o = null);
    const r = xr(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const d = r.app = {
      _uid: ml++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Gl,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...p) {
        return i.has(u) || (u && D(u.install) ? (i.add(u), u.install(d, ...p)) : D(u) && (i.add(u), u(d, ...p))), d;
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), d;
      },
      component(u, p) {
        return p ? (r.components[u] = p, d) : r.components[u];
      },
      directive(u, p) {
        return p ? (r.directives[u] = p, d) : r.directives[u];
      },
      mount(u, p, m) {
        if (!c) {
          const x = d._ceVNode || X(s, o);
          return x.appContext = r, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(x, u, m), c = !0, d._container = u, u.__vue_app__ = d, Un(x.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        c && (Re(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, p) {
        return r.provides[u] = p, d;
      },
      runWithContext(u) {
        const p = Pt;
        Pt = d;
        try {
          return u();
        } finally {
          Pt = p;
        }
      }
    };
    return d;
  };
}
let Pt = null;
const _l = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ut(t)}Modifiers`] || e[`${ht(t)}Modifiers`];
function bl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || J;
  let o = n;
  const r = t.startsWith("update:"), i = r && _l(s, t.slice(7));
  i && (i.trim && (o = n.map((u) => ie(u) ? u.trim() : u)), i.number && (o = n.map(xs)));
  let l, c = s[l = hn(t)] || // also try camelCase event handler (#2249)
  s[l = hn(ut(t))];
  !c && r && (c = s[l = hn(ht(t))]), c && Re(
    c,
    e,
    6,
    o
  );
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Re(
      d,
      e,
      6,
      o
    );
  }
}
const yl = /* @__PURE__ */ new WeakMap();
function Cr(e, t, n = !1) {
  const s = n ? yl : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, l = !1;
  if (!D(e)) {
    const c = (d) => {
      const u = Cr(d, t, !0);
      u && (l = !0, ce(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (G(e) && s.set(e, null), null) : (L(r) ? r.forEach((c) => i[c] = null) : ce(i, r), G(e) && s.set(e, i), i);
}
function Nn(e, t) {
  return !e || !Fn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), q(e, t[0].toLowerCase() + t.slice(1)) || q(e, ht(t)) || q(e, t));
}
function to(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [r],
    slots: i,
    attrs: l,
    emit: c,
    render: d,
    renderCache: u,
    props: p,
    data: m,
    setupState: x,
    ctx: I,
    inheritAttrs: A
  } = e, N = Cn(e);
  let U, O;
  try {
    if (n.shapeFlag & 4) {
      const M = o || s, K = M;
      U = Ke(
        d.call(
          K,
          M,
          u,
          p,
          x,
          m,
          I
        )
      ), O = l;
    } else {
      const M = t;
      U = Ke(
        M.length > 1 ? M(
          p,
          { attrs: l, slots: i, emit: c }
        ) : M(
          p,
          null
        )
      ), O = t.props ? l : xl(l);
    }
  } catch (M) {
    qt.length = 0, Rn(M, e, 1), U = X(he);
  }
  let j = U;
  if (O && A !== !1) {
    const M = Object.keys(O), { shapeFlag: K } = j;
    M.length && K & 7 && (r && M.some(_s) && (O = Cl(
      O,
      r
    )), j = dt(j, O, !1, !0));
  }
  return n.dirs && (j = dt(j, null, !1, !0), j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs), n.transition && Jt(j, n.transition), U = j, Cn(N), U;
}
const xl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Fn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Cl = (e, t) => {
  const n = {};
  for (const s in e)
    (!_s(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function wl(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: l, patchFlag: c } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? no(s, i, d) : !!i;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        const m = u[p];
        if (wr(i, s, m) && !Nn(d, m))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? no(s, i, d) : !0 : !!i;
  return !1;
}
function no(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (wr(t, e, r) && !Nn(n, r))
      return !0;
  }
  return !1;
}
function wr(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && G(s) && G(o) ? !ws(s, o) : s !== o;
}
function Sl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Sr = {}, Tr = () => Object.create(Sr), Er = (e) => Object.getPrototypeOf(e) === Sr;
function Tl(e, t, n, s = !1) {
  const o = {}, r = Tr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ar(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ $i(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function El(e, t, n, s) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = /* @__PURE__ */ k(o), [c] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        let m = u[p];
        if (Nn(e.emitsOptions, m))
          continue;
        const x = t[m];
        if (c)
          if (q(r, m))
            x !== r[m] && (r[m] = x, d = !0);
          else {
            const I = ut(m);
            o[I] = fs(
              c,
              l,
              I,
              x,
              e,
              !1
            );
          }
        else
          x !== r[m] && (r[m] = x, d = !0);
      }
    }
  } else {
    Ar(e, t, o, r) && (d = !0);
    let u;
    for (const p in l)
      (!t || // for camelCase
      !q(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = ht(p)) === p || !q(t, u))) && (c ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[p] = fs(
        c,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete o[p]);
    if (r !== l)
      for (const p in r)
        (!t || !q(t, p)) && (delete r[p], d = !0);
  }
  d && Ze(e.attrs, "set", "");
}
function Ar(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let c in t) {
      if (Bt(c))
        continue;
      const d = t[c];
      let u;
      o && q(o, u = ut(c)) ? !r || !r.includes(u) ? n[u] = d : (l || (l = {}))[u] = d : Nn(e.emitsOptions, c) || (!(c in s) || d !== s[c]) && (s[c] = d, i = !0);
    }
  if (r) {
    const c = /* @__PURE__ */ k(n), d = l || J;
    for (let u = 0; u < r.length; u++) {
      const p = r[u];
      n[p] = fs(
        o,
        c,
        p,
        d[p],
        e,
        !q(d, p)
      );
    }
  }
  return i;
}
function fs(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const l = q(i, "default");
    if (l && s === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && D(c)) {
        const { propsDefaults: d } = o;
        if (n in d)
          s = d[n];
        else {
          const u = rn(o);
          s = d[n] = c.call(
            null,
            t
          ), u();
        }
      } else
        s = c;
      o.ce && o.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !l ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === ht(n)) && (s = !0));
  }
  return s;
}
const Al = /* @__PURE__ */ new WeakMap();
function Ir(e, t, n = !1) {
  const s = n ? Al : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, l = [];
  let c = !1;
  if (!D(e)) {
    const u = (p) => {
      c = !0;
      const [m, x] = Ir(p, t, !0);
      ce(i, m), x && l.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return G(e) && s.set(e, It), It;
  if (L(r))
    for (let u = 0; u < r.length; u++) {
      const p = ut(r[u]);
      so(p) && (i[p] = J);
    }
  else if (r)
    for (const u in r) {
      const p = ut(u);
      if (so(p)) {
        const m = r[u], x = i[p] = L(m) || D(m) ? { type: m } : ce({}, m), I = x.type;
        let A = !1, N = !0;
        if (L(I))
          for (let U = 0; U < I.length; ++U) {
            const O = I[U], j = D(O) && O.name;
            if (j === "Boolean") {
              A = !0;
              break;
            } else j === "String" && (N = !1);
          }
        else
          A = D(I) && I.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = A, x[
          1
          /* shouldCastTrue */
        ] = N, (A || q(x, "default")) && l.push(p);
      }
    }
  const d = [i, l];
  return G(e) && s.set(e, d), d;
}
function so(e) {
  return e[0] !== "$" && !Bt(e);
}
const Os = (e) => e === "_" || e === "_ctx" || e === "$stable", Rs = (e) => L(e) ? e.map(Ke) : [Ke(e)], Il = (e, t, n) => {
  if (t._n)
    return t;
  const s = Se((...o) => Rs(t(...o)), n);
  return s._c = !1, s;
}, Fr = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Os(o)) continue;
    const r = e[o];
    if (D(r))
      t[o] = Il(o, r, s);
    else if (r != null) {
      const i = Rs(r);
      t[o] = () => i;
    }
  }
}, $r = (e, t) => {
  const n = Rs(t);
  e.slots.default = () => n;
}, Mr = (e, t, n) => {
  for (const s in t)
    (n || !Os(s)) && (e[s] = t[s]);
}, Fl = (e, t, n) => {
  const s = e.slots = Tr();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Mr(s, t, n), n && Do(s, "_", o, !0)) : Fr(t, s);
  } else t && $r(e, t);
}, $l = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = J;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : Mr(o, t, n) : (r = !t.$stable, Fr(t, o)), i = t;
  } else t && ($r(e, t), i = { default: 1 });
  if (r)
    for (const l in o)
      !Os(l) && i[l] == null && delete o[l];
}, Ce = Ll;
function Ml(e) {
  return Pl(e);
}
function Pl(e, t) {
  const n = Mn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: c,
    setText: d,
    setElementText: u,
    parentNode: p,
    nextSibling: m,
    setScopeId: x = We,
    insertStaticContent: I
  } = e, A = (a, f, h, y = null, v = null, _ = null, S = void 0, w = null, C = !!f.dynamicChildren) => {
    if (a === f)
      return;
    a && !Ct(a, f) && (y = an(a), Ve(a, v, _, !0), a = null), f.patchFlag === -2 && (C = !1, f.dynamicChildren = null);
    const { type: b, ref: R, shapeFlag: E } = f;
    switch (b) {
      case Hn:
        N(a, f, h, y);
        break;
      case he:
        U(a, f, h, y);
        break;
      case zn:
        a == null && O(f, h, y, S);
        break;
      case _e:
        g(
          a,
          f,
          h,
          y,
          v,
          _,
          S,
          w,
          C
        );
        break;
      default:
        E & 1 ? K(
          a,
          f,
          h,
          y,
          v,
          _,
          S,
          w,
          C
        ) : E & 6 ? F(
          a,
          f,
          h,
          y,
          v,
          _,
          S,
          w,
          C
        ) : (E & 64 || E & 128) && b.process(
          a,
          f,
          h,
          y,
          v,
          _,
          S,
          w,
          C,
          Lt
        );
    }
    R != null && v ? Wt(R, a && a.ref, _, f || a, !f) : R == null && a && a.ref != null && Wt(a.ref, null, _, a, !0);
  }, N = (a, f, h, y) => {
    if (a == null)
      s(
        f.el = l(f.children),
        h,
        y
      );
    else {
      const v = f.el = a.el;
      f.children !== a.children && d(v, f.children);
    }
  }, U = (a, f, h, y) => {
    a == null ? s(
      f.el = c(f.children || ""),
      h,
      y
    ) : f.el = a.el;
  }, O = (a, f, h, y) => {
    [a.el, a.anchor] = I(
      a.children,
      f,
      h,
      y,
      a.el,
      a.anchor
    );
  }, j = ({ el: a, anchor: f }, h, y) => {
    let v;
    for (; a && a !== f; )
      v = m(a), s(a, h, y), a = v;
    s(f, h, y);
  }, M = ({ el: a, anchor: f }) => {
    let h;
    for (; a && a !== f; )
      h = m(a), o(a), a = h;
    o(f);
  }, K = (a, f, h, y, v, _, S, w, C) => {
    if (f.type === "svg" ? S = "svg" : f.type === "math" && (S = "mathml"), a == null)
      W(
        f,
        h,
        y,
        v,
        _,
        S,
        w,
        C
      );
    else {
      const b = a.el && a.el._isVueCE ? a.el : null;
      try {
        b && b._beginPatch(), H(
          a,
          f,
          v,
          _,
          S,
          w,
          C
        );
      } finally {
        b && b._endPatch();
      }
    }
  }, W = (a, f, h, y, v, _, S, w) => {
    let C, b;
    const { props: R, shapeFlag: E, transition: P, dirs: V } = a;
    if (C = a.el = i(
      a.type,
      _,
      R && R.is,
      R
    ), E & 8 ? u(C, a.children) : E & 16 && fe(
      a.children,
      C,
      null,
      y,
      v,
      Gn(a, _),
      S,
      w
    ), V && vt(a, null, y, "created"), ne(C, a, a.scopeId, S, y), R) {
      for (const ee in R)
        ee !== "value" && !Bt(ee) && r(C, ee, null, R[ee], _, y);
      "value" in R && r(C, "value", null, R.value, _), (b = R.onVnodeBeforeMount) && Ue(b, y, a);
    }
    V && vt(a, null, y, "beforeMount");
    const B = Ol(v, P);
    B && P.beforeEnter(C), s(C, f, h), ((b = R && R.onVnodeMounted) || B || V) && Ce(() => {
      b && Ue(b, y, a), B && P.enter(C), V && vt(a, null, y, "mounted");
    }, v);
  }, ne = (a, f, h, y, v) => {
    if (h && x(a, h), y)
      for (let _ = 0; _ < y.length; _++)
        x(a, y[_]);
    if (v) {
      let _ = v.subTree;
      if (f === _ || Lr(_.type) && (_.ssContent === f || _.ssFallback === f)) {
        const S = v.vnode;
        ne(
          a,
          S,
          S.scopeId,
          S.slotScopeIds,
          v.parent
        );
      }
    }
  }, fe = (a, f, h, y, v, _, S, w, C = 0) => {
    for (let b = C; b < a.length; b++) {
      const R = a[b] = w ? Je(a[b]) : Ke(a[b]);
      A(
        null,
        R,
        f,
        h,
        y,
        v,
        _,
        S,
        w
      );
    }
  }, H = (a, f, h, y, v, _, S) => {
    const w = f.el = a.el;
    let { patchFlag: C, dynamicChildren: b, dirs: R } = f;
    C |= a.patchFlag & 16;
    const E = a.props || J, P = f.props || J;
    let V;
    if (h && _t(h, !1), (V = P.onVnodeBeforeUpdate) && Ue(V, h, f, a), R && vt(f, a, h, "beforeUpdate"), h && _t(h, !0), (E.innerHTML && P.innerHTML == null || E.textContent && P.textContent == null) && u(w, ""), b ? Y(
      a.dynamicChildren,
      b,
      w,
      h,
      y,
      Gn(f, v),
      _
    ) : S || Q(
      a,
      f,
      w,
      null,
      h,
      y,
      Gn(f, v),
      _,
      !1
    ), C > 0) {
      if (C & 16)
        T(w, E, P, h, v);
      else if (C & 2 && E.class !== P.class && r(w, "class", null, P.class, v), C & 4 && r(w, "style", E.style, P.style, v), C & 8) {
        const B = f.dynamicProps;
        for (let ee = 0; ee < B.length; ee++) {
          const z = B[ee], ye = E[z], xe = P[z];
          (xe !== ye || z === "value") && r(w, z, ye, xe, v, h);
        }
      }
      C & 1 && a.children !== f.children && u(w, f.children);
    } else !S && b == null && T(w, E, P, h, v);
    ((V = P.onVnodeUpdated) || R) && Ce(() => {
      V && Ue(V, h, f, a), R && vt(f, a, h, "updated");
    }, y);
  }, Y = (a, f, h, y, v, _, S) => {
    for (let w = 0; w < f.length; w++) {
      const C = a[w], b = f[w], R = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === _e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ct(C, b) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? p(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      A(
        C,
        b,
        R,
        null,
        y,
        v,
        _,
        S,
        !0
      );
    }
  }, T = (a, f, h, y, v) => {
    if (f !== h) {
      if (f !== J)
        for (const _ in f)
          !Bt(_) && !(_ in h) && r(
            a,
            _,
            f[_],
            null,
            v,
            y
          );
      for (const _ in h) {
        if (Bt(_)) continue;
        const S = h[_], w = f[_];
        S !== w && _ !== "value" && r(a, _, w, S, v, y);
      }
      "value" in h && r(a, "value", f.value, h.value, v);
    }
  }, g = (a, f, h, y, v, _, S, w, C) => {
    const b = f.el = a ? a.el : l(""), R = f.anchor = a ? a.anchor : l("");
    let { patchFlag: E, dynamicChildren: P, slotScopeIds: V } = f;
    V && (w = w ? w.concat(V) : V), a == null ? (s(b, h, y), s(R, h, y), fe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      h,
      R,
      v,
      _,
      S,
      w,
      C
    )) : E > 0 && E & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === P.length ? (Y(
      a.dynamicChildren,
      P,
      h,
      v,
      _,
      S,
      w
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || v && f === v.subTree) && Pr(
      a,
      f,
      !0
      /* shallow */
    )) : Q(
      a,
      f,
      h,
      R,
      v,
      _,
      S,
      w,
      C
    );
  }, F = (a, f, h, y, v, _, S, w, C) => {
    f.slotScopeIds = w, a == null ? f.shapeFlag & 512 ? v.ctx.activate(
      f,
      h,
      y,
      S,
      C
    ) : re(
      f,
      h,
      y,
      v,
      _,
      S,
      C
    ) : qe(a, f, C);
  }, re = (a, f, h, y, v, _, S) => {
    const w = a.component = Bl(
      a,
      y,
      v
    );
    if (Ln(a) && (w.ctx.renderer = Lt), Kl(w, !1, S), w.asyncDep) {
      if (v && v.registerDep(w, ae, S), !a.el) {
        const C = w.subTree = X(he);
        U(null, C, f, h), a.placeholder = C.el;
      }
    } else
      ae(
        w,
        a,
        f,
        h,
        v,
        _,
        S
      );
  }, qe = (a, f, h) => {
    const y = f.component = a.component;
    if (wl(a, f, h))
      if (y.asyncDep && !y.asyncResolved) {
        se(y, f, h);
        return;
      } else
        y.next = f, y.update();
    else
      f.el = a.el, y.vnode = f;
  }, ae = (a, f, h, y, v, _, S) => {
    const w = () => {
      if (a.isMounted) {
        let { next: E, bu: P, u: V, parent: B, vnode: ee } = a;
        {
          const Ne = Or(a);
          if (Ne) {
            E && (E.el = ee.el, se(a, E, S)), Ne.asyncDep.then(() => {
              Ce(() => {
                a.isUnmounted || b();
              }, v);
            });
            return;
          }
        }
        let z = E, ye;
        _t(a, !1), E ? (E.el = ee.el, se(a, E, S)) : E = ee, P && gn(P), (ye = E.props && E.props.onVnodeBeforeUpdate) && Ue(ye, B, E, ee), _t(a, !0);
        const xe = to(a), De = a.subTree;
        a.subTree = xe, A(
          De,
          xe,
          // parent may have changed if it's in a teleport
          p(De.el),
          // anchor may have changed if it's in a fragment
          an(De),
          a,
          v,
          _
        ), E.el = xe.el, z === null && Sl(a, xe.el), V && Ce(V, v), (ye = E.props && E.props.onVnodeUpdated) && Ce(
          () => Ue(ye, B, E, ee),
          v
        );
      } else {
        let E;
        const { el: P, props: V } = f, { bm: B, m: ee, parent: z, root: ye, type: xe } = a, De = Mt(f);
        _t(a, !1), B && gn(B), !De && (E = V && V.onVnodeBeforeMount) && Ue(E, z, f), _t(a, !0);
        {
          ye.ce && ye.ce._hasShadowRoot() && ye.ce._injectChildStyle(xe);
          const Ne = a.subTree = to(a);
          A(
            null,
            Ne,
            h,
            y,
            a,
            v,
            _
          ), f.el = Ne.el;
        }
        if (ee && Ce(ee, v), !De && (E = V && V.onVnodeMounted)) {
          const Ne = f;
          Ce(
            () => Ue(E, z, Ne),
            v
          );
        }
        (f.shapeFlag & 256 || z && Mt(z.vnode) && z.vnode.shapeFlag & 256) && a.a && Ce(a.a, v), a.isMounted = !0, f = h = y = null;
      }
    };
    a.scope.on();
    const C = a.effect = new jo(w);
    a.scope.off();
    const b = a.update = C.run.bind(C), R = a.job = C.runIfDirty.bind(C);
    R.i = a, R.id = a.uid, C.scheduler = () => Ms(R), _t(a, !0), b();
  }, se = (a, f, h) => {
    f.component = a;
    const y = a.vnode.props;
    a.vnode = f, a.next = null, El(a, f.props, y, h), $l(a, f.children, h), tt(), qs(a), nt();
  }, Q = (a, f, h, y, v, _, S, w, C = !1) => {
    const b = a && a.children, R = a ? a.shapeFlag : 0, E = f.children, { patchFlag: P, shapeFlag: V } = f;
    if (P > 0) {
      if (P & 128) {
        cn(
          b,
          E,
          h,
          y,
          v,
          _,
          S,
          w,
          C
        );
        return;
      } else if (P & 256) {
        gt(
          b,
          E,
          h,
          y,
          v,
          _,
          S,
          w,
          C
        );
        return;
      }
    }
    V & 8 ? (R & 16 && Rt(b, v, _), E !== b && u(h, E)) : R & 16 ? V & 16 ? cn(
      b,
      E,
      h,
      y,
      v,
      _,
      S,
      w,
      C
    ) : Rt(b, v, _, !0) : (R & 8 && u(h, ""), V & 16 && fe(
      E,
      h,
      y,
      v,
      _,
      S,
      w,
      C
    ));
  }, gt = (a, f, h, y, v, _, S, w, C) => {
    a = a || It, f = f || It;
    const b = a.length, R = f.length, E = Math.min(b, R);
    let P;
    for (P = 0; P < E; P++) {
      const V = f[P] = C ? Je(f[P]) : Ke(f[P]);
      A(
        a[P],
        V,
        h,
        null,
        v,
        _,
        S,
        w,
        C
      );
    }
    b > R ? Rt(
      a,
      v,
      _,
      !0,
      !1,
      E
    ) : fe(
      f,
      h,
      y,
      v,
      _,
      S,
      w,
      C,
      E
    );
  }, cn = (a, f, h, y, v, _, S, w, C) => {
    let b = 0;
    const R = f.length;
    let E = a.length - 1, P = R - 1;
    for (; b <= E && b <= P; ) {
      const V = a[b], B = f[b] = C ? Je(f[b]) : Ke(f[b]);
      if (Ct(V, B))
        A(
          V,
          B,
          h,
          null,
          v,
          _,
          S,
          w,
          C
        );
      else
        break;
      b++;
    }
    for (; b <= E && b <= P; ) {
      const V = a[E], B = f[P] = C ? Je(f[P]) : Ke(f[P]);
      if (Ct(V, B))
        A(
          V,
          B,
          h,
          null,
          v,
          _,
          S,
          w,
          C
        );
      else
        break;
      E--, P--;
    }
    if (b > E) {
      if (b <= P) {
        const V = P + 1, B = V < R ? f[V].el : y;
        for (; b <= P; )
          A(
            null,
            f[b] = C ? Je(f[b]) : Ke(f[b]),
            h,
            B,
            v,
            _,
            S,
            w,
            C
          ), b++;
      }
    } else if (b > P)
      for (; b <= E; )
        Ve(a[b], v, _, !0), b++;
    else {
      const V = b, B = b, ee = /* @__PURE__ */ new Map();
      for (b = B; b <= P; b++) {
        const Te = f[b] = C ? Je(f[b]) : Ke(f[b]);
        Te.key != null && ee.set(Te.key, b);
      }
      let z, ye = 0;
      const xe = P - B + 1;
      let De = !1, Ne = 0;
      const Vt = new Array(xe);
      for (b = 0; b < xe; b++) Vt[b] = 0;
      for (b = V; b <= E; b++) {
        const Te = a[b];
        if (ye >= xe) {
          Ve(Te, v, _, !0);
          continue;
        }
        let He;
        if (Te.key != null)
          He = ee.get(Te.key);
        else
          for (z = B; z <= P; z++)
            if (Vt[z - B] === 0 && Ct(Te, f[z])) {
              He = z;
              break;
            }
        He === void 0 ? Ve(Te, v, _, !0) : (Vt[He - B] = b + 1, He >= Ne ? Ne = He : De = !0, A(
          Te,
          f[He],
          h,
          null,
          v,
          _,
          S,
          w,
          C
        ), ye++);
      }
      const Us = De ? Rl(Vt) : It;
      for (z = Us.length - 1, b = xe - 1; b >= 0; b--) {
        const Te = B + b, He = f[Te], js = f[Te + 1], Bs = Te + 1 < R ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          js.el || Rr(js)
        ) : y;
        Vt[b] === 0 ? A(
          null,
          He,
          h,
          Bs,
          v,
          _,
          S,
          w,
          C
        ) : De && (z < 0 || b !== Us[z] ? mt(He, h, Bs, 2) : z--);
      }
    }
  }, mt = (a, f, h, y, v = null) => {
    const { el: _, type: S, transition: w, children: C, shapeFlag: b } = a;
    if (b & 6) {
      mt(a.component.subTree, f, h, y);
      return;
    }
    if (b & 128) {
      a.suspense.move(f, h, y);
      return;
    }
    if (b & 64) {
      S.move(a, f, h, Lt);
      return;
    }
    if (S === _e) {
      s(_, f, h);
      for (let E = 0; E < C.length; E++)
        mt(C[E], f, h, y);
      s(a.anchor, f, h);
      return;
    }
    if (S === zn) {
      j(a, f, h);
      return;
    }
    if (y !== 2 && b & 1 && w)
      if (y === 0)
        w.beforeEnter(_), s(_, f, h), Ce(() => w.enter(_), v);
      else {
        const { leave: E, delayLeave: P, afterLeave: V } = w, B = () => {
          a.ctx.isUnmounted ? o(_) : s(_, f, h);
        }, ee = () => {
          _._isLeaving && _[Be](
            !0
            /* cancelled */
          ), E(_, () => {
            B(), V && V();
          });
        };
        P ? P(_, B, ee) : ee();
      }
    else
      s(_, f, h);
  }, Ve = (a, f, h, y = !1, v = !1) => {
    const {
      type: _,
      props: S,
      ref: w,
      children: C,
      dynamicChildren: b,
      shapeFlag: R,
      patchFlag: E,
      dirs: P,
      cacheIndex: V
    } = a;
    if (E === -2 && (v = !1), w != null && (tt(), Wt(w, null, h, a, !0), nt()), V != null && (f.renderCache[V] = void 0), R & 256) {
      f.ctx.deactivate(a);
      return;
    }
    const B = R & 1 && P, ee = !Mt(a);
    let z;
    if (ee && (z = S && S.onVnodeBeforeUnmount) && Ue(z, f, a), R & 6)
      Jr(a.component, h, y);
    else {
      if (R & 128) {
        a.suspense.unmount(h, y);
        return;
      }
      B && vt(a, null, f, "beforeUnmount"), R & 64 ? a.type.remove(
        a,
        f,
        h,
        Lt,
        y
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== _e || E > 0 && E & 64) ? Rt(
        b,
        f,
        h,
        !1,
        !0
      ) : (_ === _e && E & 384 || !v && R & 16) && Rt(C, f, h), y && Ns(a);
    }
    (ee && (z = S && S.onVnodeUnmounted) || B) && Ce(() => {
      z && Ue(z, f, a), B && vt(a, null, f, "unmounted");
    }, h);
  }, Ns = (a) => {
    const { type: f, el: h, anchor: y, transition: v } = a;
    if (f === _e) {
      zr(h, y);
      return;
    }
    if (f === zn) {
      M(a);
      return;
    }
    const _ = () => {
      o(h), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (a.shapeFlag & 1 && v && !v.persisted) {
      const { leave: S, delayLeave: w } = v, C = () => S(h, _);
      w ? w(a.el, _, C) : C();
    } else
      _();
  }, zr = (a, f) => {
    let h;
    for (; a !== f; )
      h = m(a), o(a), a = h;
    o(f);
  }, Jr = (a, f, h) => {
    const { bum: y, scope: v, job: _, subTree: S, um: w, m: C, a: b } = a;
    oo(C), oo(b), y && gn(y), v.stop(), _ && (_.flags |= 8, Ve(S, a, f, h)), w && Ce(w, f), Ce(() => {
      a.isUnmounted = !0;
    }, f);
  }, Rt = (a, f, h, y = !1, v = !1, _ = 0) => {
    for (let S = _; S < a.length; S++)
      Ve(a[S], f, h, y, v);
  }, an = (a) => {
    if (a.shapeFlag & 6)
      return an(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const f = m(a.anchor || a.el), h = f && f[qi];
    return h ? m(h) : f;
  };
  let Bn = !1;
  const Hs = (a, f, h) => {
    let y;
    a == null ? f._vnode && (Ve(f._vnode, null, null, !0), y = f._vnode.component) : A(
      f._vnode || null,
      a,
      f,
      null,
      null,
      null,
      h
    ), f._vnode = a, Bn || (Bn = !0, qs(y), or(), Bn = !1);
  }, Lt = {
    p: A,
    um: Ve,
    m: mt,
    r: Ns,
    mt: re,
    mc: fe,
    pc: Q,
    pbc: Y,
    n: an,
    o: e
  };
  return {
    render: Hs,
    hydrate: void 0,
    createApp: vl(Hs)
  };
}
function Gn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function _t({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ol(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Pr(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (L(s) && L(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[r] = Je(o[r]), l.el = i.el), !n && l.patchFlag !== -2 && Pr(i, l)), l.type === Hn && (l.patchFlag === -1 && (l = o[r] = Je(l)), l.el = i.el), l.type === he && !l.el && (l.el = i.el);
    }
}
function Rl(e) {
  const t = e.slice(), n = [0];
  let s, o, r, i, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const d = e[s];
    if (d !== 0) {
      if (o = n[n.length - 1], e[o] < d) {
        t[s] = o, n.push(s);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < d ? r = l + 1 : i = l;
      d < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function Or(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Or(t);
}
function oo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Rr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Rr(t.subTree) : null;
}
const Lr = (e) => e.__isSuspense;
function Ll(e, t) {
  t && t.pendingBranch ? L(e) ? t.effects.push(...e) : t.effects.push(e) : Bi(e);
}
const _e = /* @__PURE__ */ Symbol.for("v-fgt"), Hn = /* @__PURE__ */ Symbol.for("v-txt"), he = /* @__PURE__ */ Symbol.for("v-cmt"), zn = /* @__PURE__ */ Symbol.for("v-stc"), qt = [];
let Ee = null;
function Z(e = !1) {
  qt.push(Ee = e ? null : []);
}
function Vl() {
  qt.pop(), Ee = qt[qt.length - 1] || null;
}
let Zt = 1;
function En(e, t = !1) {
  Zt += e, e < 0 && Ee && t && (Ee.hasOnce = !0);
}
function Vr(e) {
  return e.dynamicChildren = Zt > 0 ? Ee || It : null, Vl(), Zt > 0 && Ee && Ee.push(e), e;
}
function ue(e, t, n, s, o, r) {
  return Vr(
    $(
      e,
      t,
      n,
      s,
      o,
      r,
      !0
    )
  );
}
function Ye(e, t, n, s, o) {
  return Vr(
    X(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function Qt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ct(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Dr = ({ key: e }) => e ?? null, _n = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || /* @__PURE__ */ le(e) || D(e) ? { i: ge, r: e, k: t, f: !!n } : e : null);
function $(e, t = null, n = null, s = 0, o = null, r = e === _e ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Dr(t),
    ref: t && _n(t),
    scopeId: ir,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: ge
  };
  return l ? (Ls(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= ie(n) ? 8 : 16), Zt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ee && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ee.push(c), c;
}
const X = Dl;
function Dl(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === ll) && (e = he), Qt(e)) {
    const l = dt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ls(l, n), Zt > 0 && !r && Ee && (l.shapeFlag & 6 ? Ee[Ee.indexOf(e)] = l : Ee.push(l)), l.patchFlag = -2, l;
  }
  if (ql(e) && (e = e.__vccOpts), t) {
    t = Nl(t);
    let { class: l, style: c } = t;
    l && !ie(l) && (t.class = ft(l)), G(c) && (/* @__PURE__ */ $s(c) && !L(c) && (c = ce({}, c)), t.style = Cs(c));
  }
  const i = ie(e) ? 1 : Lr(e) ? 128 : ar(e) ? 64 : G(e) ? 4 : D(e) ? 2 : 0;
  return $(
    e,
    t,
    n,
    s,
    o,
    i,
    r,
    !0
  );
}
function Nl(e) {
  return e ? /* @__PURE__ */ $s(e) || Er(e) ? ce({}, e) : e : null;
}
function dt(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: l, transition: c } = e, d = t ? Nr(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Dr(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? L(r) ? r.concat(_n(t)) : [r, _n(t)] : _n(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== _e ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && dt(e.ssContent),
    ssFallback: e.ssFallback && dt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && Jt(
    u,
    c.clone(u)
  ), u;
}
function Hl(e = " ", t = 0) {
  return X(Hn, null, e, t);
}
function pt(e = "", t = !1) {
  return t ? (Z(), Ye(he, null, e)) : X(he, null, e);
}
function Ke(e) {
  return e == null || typeof e == "boolean" ? X(he) : L(e) ? X(
    _e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Qt(e) ? Je(e) : X(Hn, null, String(e));
}
function Je(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : dt(e);
}
function Ls(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (L(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Ls(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Er(t) ? t._ctx = ge : o === 3 && ge && (ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else D(t) ? (t = { default: t, _ctx: ge }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Hl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Nr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = ft([t.class, s.class]));
      else if (o === "style")
        t.style = Cs([t.style, s.style]);
      else if (Fn(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(L(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function Ue(e, t, n, s = null) {
  Re(e, t, 7, [
    n,
    s
  ]);
}
const Ul = xr();
let jl = 0;
function Bl(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Ul, r = {
    uid: jl++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new ui(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ir(s, o),
    emitsOptions: Cr(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: J,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: J,
    data: J,
    props: J,
    attrs: J,
    slots: J,
    refs: J,
    setupState: J,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = bl.bind(null, r), e.ce && e.ce(r), r;
}
let be = null;
const Hr = () => be || ge;
let An, ds;
{
  const e = Mn(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  An = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => be = n
  ), ds = t(
    "__VUE_SSR_SETTERS__",
    (n) => en = n
  );
}
const rn = (e) => {
  const t = be;
  return An(e), e.scope.on(), () => {
    e.scope.off(), An(t);
  };
}, ro = () => {
  be && be.scope.off(), An(null);
};
function Ur(e) {
  return e.vnode.shapeFlag & 4;
}
let en = !1;
function Kl(e, t = !1, n = !1) {
  t && ds(t);
  const { props: s, children: o } = e.vnode, r = Ur(e);
  Tl(e, s, r, t), Fl(e, o, n || t);
  const i = r ? kl(e, t) : void 0;
  return t && ds(!1), i;
}
function kl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ul);
  const { setup: s } = n;
  if (s) {
    tt();
    const o = e.setupContext = s.length > 1 ? Yl(e) : null, r = rn(e), i = on(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), l = Oo(i);
    if (nt(), r(), (l || e.sp) && !Mt(e) && gr(e), l) {
      if (i.then(ro, ro), t)
        return i.then((c) => {
          io(e, c);
        }).catch((c) => {
          Rn(c, e, 0);
        });
      e.asyncDep = i;
    } else
      io(e, i);
  } else
    jr(e);
}
function io(e, t, n) {
  D(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : G(t) && (e.setupState = tr(t)), jr(e);
}
function jr(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || We);
  {
    const o = rn(e);
    tt();
    try {
      fl(e);
    } finally {
      nt(), o();
    }
  }
}
const Wl = {
  get(e, t) {
    return pe(e, "get", ""), e[t];
  }
};
function Yl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Wl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Un(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(tr(Mi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Yt)
        return Yt[n](e);
    },
    has(t, n) {
      return n in t || n in Yt;
    }
  })) : e.proxy;
}
function ql(e) {
  return D(e) && "__vccOpts" in e;
}
const tn = (e, t) => /* @__PURE__ */ Vi(e, t, en);
function Xl(e, t, n) {
  try {
    En(-1);
    const s = arguments.length;
    return s === 2 ? G(t) && !L(t) ? Qt(t) ? X(e, null, [t]) : X(e, t) : X(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Qt(n) && (n = [n]), X(e, t, n));
  } finally {
    En(1);
  }
}
const Gl = "3.5.28";
let ps;
const lo = typeof window < "u" && window.trustedTypes;
if (lo)
  try {
    ps = /* @__PURE__ */ lo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Br = ps ? (e) => ps.createHTML(e) : (e) => e, zl = "http://www.w3.org/2000/svg", Jl = "http://www.w3.org/1998/Math/MathML", ze = typeof document < "u" ? document : null, co = ze && /* @__PURE__ */ ze.createElement("template"), Zl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? ze.createElementNS(zl, e) : t === "mathml" ? ze.createElementNS(Jl, e) : n ? ze.createElement(e, { is: n }) : ze.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => ze.createTextNode(e),
  createComment: (e) => ze.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ze.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === r || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === r || !(o = o.nextSibling)); )
        ;
    else {
      co.innerHTML = Br(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = co.content;
      if (s === "svg" || s === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, rt = "transition", Ht = "animation", nn = /* @__PURE__ */ Symbol("_vtc"), Kr = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Ql = /* @__PURE__ */ ce(
  {},
  ur,
  Kr
), ec = (e) => (e.displayName = "Transition", e.props = Ql, e), kr = /* @__PURE__ */ ec(
  (e, { slots: t }) => Xl(zi, tc(e), t)
), bt = (e, t = []) => {
  L(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ao = (e) => e ? L(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function tc(e) {
  const t = {};
  for (const g in e)
    g in Kr || (t[g] = e[g]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: o,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: c = r,
    appearActiveClass: d = i,
    appearToClass: u = l,
    leaveFromClass: p = `${n}-leave-from`,
    leaveActiveClass: m = `${n}-leave-active`,
    leaveToClass: x = `${n}-leave-to`
  } = e, I = nc(o), A = I && I[0], N = I && I[1], {
    onBeforeEnter: U,
    onEnter: O,
    onEnterCancelled: j,
    onLeave: M,
    onLeaveCancelled: K,
    onBeforeAppear: W = U,
    onAppear: ne = O,
    onAppearCancelled: fe = j
  } = t, H = (g, F, re, qe) => {
    g._enterCancelled = qe, yt(g, F ? u : l), yt(g, F ? d : i), re && re();
  }, Y = (g, F) => {
    g._isLeaving = !1, yt(g, p), yt(g, x), yt(g, m), F && F();
  }, T = (g) => (F, re) => {
    const qe = g ? ne : O, ae = () => H(F, g, re);
    bt(qe, [F, ae]), uo(() => {
      yt(F, g ? c : r), Ge(F, g ? u : l), ao(qe) || fo(F, s, A, ae);
    });
  };
  return ce(t, {
    onBeforeEnter(g) {
      bt(U, [g]), Ge(g, r), Ge(g, i);
    },
    onBeforeAppear(g) {
      bt(W, [g]), Ge(g, c), Ge(g, d);
    },
    onEnter: T(!1),
    onAppear: T(!0),
    onLeave(g, F) {
      g._isLeaving = !0;
      const re = () => Y(g, F);
      Ge(g, p), g._enterCancelled ? (Ge(g, m), go(g)) : (go(g), Ge(g, m)), uo(() => {
        g._isLeaving && (yt(g, p), Ge(g, x), ao(M) || fo(g, s, N, re));
      }), bt(M, [g, re]);
    },
    onEnterCancelled(g) {
      H(g, !1, void 0, !0), bt(j, [g]);
    },
    onAppearCancelled(g) {
      H(g, !0, void 0, !0), bt(fe, [g]);
    },
    onLeaveCancelled(g) {
      Y(g), bt(K, [g]);
    }
  });
}
function nc(e) {
  if (e == null)
    return null;
  if (G(e))
    return [Jn(e.enter), Jn(e.leave)];
  {
    const t = Jn(e);
    return [t, t];
  }
}
function Jn(e) {
  return ni(e);
}
function Ge(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[nn] || (e[nn] = /* @__PURE__ */ new Set())).add(t);
}
function yt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[nn];
  n && (n.delete(t), n.size || (e[nn] = void 0));
}
function uo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let sc = 0;
function fo(e, t, n, s) {
  const o = e._endId = ++sc, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: l, propCount: c } = oc(e, t);
  if (!i)
    return s();
  const d = i + "end";
  let u = 0;
  const p = () => {
    e.removeEventListener(d, m), r();
  }, m = (x) => {
    x.target === e && ++u >= c && p();
  };
  setTimeout(() => {
    u < c && p();
  }, l + 1), e.addEventListener(d, m);
}
function oc(e, t) {
  const n = window.getComputedStyle(e), s = (I) => (n[I] || "").split(", "), o = s(`${rt}Delay`), r = s(`${rt}Duration`), i = po(o, r), l = s(`${Ht}Delay`), c = s(`${Ht}Duration`), d = po(l, c);
  let u = null, p = 0, m = 0;
  t === rt ? i > 0 && (u = rt, p = i, m = r.length) : t === Ht ? d > 0 && (u = Ht, p = d, m = c.length) : (p = Math.max(i, d), u = p > 0 ? i > d ? rt : Ht : null, m = u ? u === rt ? r.length : c.length : 0);
  const x = u === rt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${rt}Property`).toString()
  );
  return {
    type: u,
    timeout: p,
    propCount: m,
    hasTransform: x
  };
}
function po(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => ho(n) + ho(e[s])));
}
function ho(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function go(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function rc(e, t, n) {
  const s = e[nn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const In = /* @__PURE__ */ Symbol("_vod"), Wr = /* @__PURE__ */ Symbol("_vsh"), ic = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[In] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ut(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Ut(e, !0), s.enter(e)) : s.leave(e, () => {
      Ut(e, !1);
    }) : Ut(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ut(e, t);
  }
};
function Ut(e, t) {
  e.style.display = t ? e[In] : "none", e[Wr] = !t;
}
const lc = /* @__PURE__ */ Symbol(""), cc = /(?:^|;)\s*display\s*:/;
function ac(e, t, n) {
  const s = e.style, o = ie(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (ie(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && bn(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && bn(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), bn(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[lc];
      i && (n += ";" + i), s.cssText = n, r = cc.test(n);
    }
  } else t && e.removeAttribute("style");
  In in e && (e[In] = r ? s.display : "", e[Wr] && (s.display = "none"));
}
const mo = /\s*!important$/;
function bn(e, t, n) {
  if (L(n))
    n.forEach((s) => bn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = uc(e, t);
    mo.test(n) ? e.setProperty(
      ht(s),
      n.replace(mo, ""),
      "important"
    ) : e[s] = n;
  }
}
const vo = ["Webkit", "Moz", "ms"], Zn = {};
function uc(e, t) {
  const n = Zn[t];
  if (n)
    return n;
  let s = ut(t);
  if (s !== "filter" && s in e)
    return Zn[t] = s;
  s = Vo(s);
  for (let o = 0; o < vo.length; o++) {
    const r = vo[o] + s;
    if (r in e)
      return Zn[t] = r;
  }
  return t;
}
const _o = "http://www.w3.org/1999/xlink";
function bo(e, t, n, s, o, r = ci(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(_o, t.slice(6, t.length)) : e.setAttributeNS(_o, t, n) : n == null || r && !No(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Pe(n) ? String(n) : n
  );
}
function yo(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Br(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = No(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(o || t);
}
function At(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function fc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const xo = /* @__PURE__ */ Symbol("_vei");
function dc(e, t, n, s, o = null) {
  const r = e[xo] || (e[xo] = {}), i = r[t];
  if (s && i)
    i.value = s;
  else {
    const [l, c] = pc(t);
    if (s) {
      const d = r[t] = mc(
        s,
        o
      );
      At(e, l, d, c);
    } else i && (fc(e, l, i, c), r[t] = void 0);
  }
}
const Co = /(?:Once|Passive|Capture)$/;
function pc(e) {
  let t;
  if (Co.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Co); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ht(e.slice(2)), t];
}
let Qn = 0;
const hc = /* @__PURE__ */ Promise.resolve(), gc = () => Qn || (hc.then(() => Qn = 0), Qn = Date.now());
function mc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Re(
      vc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = gc(), n;
}
function vc(e, t) {
  if (L(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const wo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, _c = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? rc(e, s, i) : t === "style" ? ac(e, n, s) : Fn(t) ? _s(t) || dc(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : bc(e, t, s, i)) ? (yo(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && bo(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ie(s)) ? yo(e, ut(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), bo(e, t, s, i));
};
function bc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && wo(t) && D(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return wo(t) && ie(n) ? !1 : t in e;
}
const So = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return L(t) ? (n) => gn(t, n) : t;
};
function yc(e) {
  e.target.composing = !0;
}
function To(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const es = /* @__PURE__ */ Symbol("_assign");
function Eo(e, t, n) {
  return t && (e = e.trim()), n && (e = xs(e)), e;
}
const ct = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[es] = So(o);
    const r = s || o.props && o.props.type === "number";
    At(e, t ? "change" : "input", (i) => {
      i.target.composing || e[es](Eo(e.value, n, r));
    }), (n || r) && At(e, "change", () => {
      e.value = Eo(e.value, n, r);
    }), t || (At(e, "compositionstart", yc), At(e, "compositionend", To), At(e, "change", To));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } }, i) {
    if (e[es] = So(i), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? xs(e.value) : e.value, c = t ?? "";
    l !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === c) || (e.value = c));
  }
}, xc = ["ctrl", "shift", "alt", "meta"], Cc = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => xc.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ao = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const l = Cc[t[i]];
      if (l && l(o, t)) return;
    }
    return e(o, ...r);
  }));
}, wc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, hs = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = ((o) => {
    if (!("key" in o))
      return;
    const r = ht(o.key);
    if (t.some(
      (i) => i === r || wc[i] === r
    ))
      return e(o);
  }));
}, Sc = /* @__PURE__ */ ce({ patchProp: _c }, Zl);
let Io;
function Tc() {
  return Io || (Io = Ml(Sc));
}
const Ec = ((...e) => {
  const t = Tc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = Ic(s);
    if (!o) return;
    const r = t._component;
    !D(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, Ac(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
});
function Ac(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ic(e) {
  return ie(e) ? document.querySelector(e) : e;
}
const gs = /* @__PURE__ */ oe(!1), Fc = /* @__PURE__ */ oe(!1), Yr = /* @__PURE__ */ oe(0.7), qr = /* @__PURE__ */ oe(1), Xr = /* @__PURE__ */ oe(0);
function $c() {
  gs.value = !gs.value;
}
function Mc() {
  Yr.value = 0.7, qr.value = 1, Xr.value = 0;
}
function Vs() {
  return {
    opacity: Yr,
    scale: qr,
    rotation: Xr,
    isAttached: Fc,
    showControls: gs,
    resetControls: Mc,
    toggleShowControls: $c
  };
}
const Pc = { class: "ito-settings-menu" }, Oc = {
  key: 0,
  class: "ito-settings-panel"
}, Rc = { class: "ito-settings-header" }, Lc = { class: "ito-settings-tabs" }, Vc = {
  key: 0,
  class: "ito-settings-content"
}, Dc = { class: "ito-color-field" }, Nc = { class: "ito-color-input-wrapper" }, Hc = ["onKeydown"], Uc = { class: "ito-color-field" }, jc = { class: "ito-color-input-wrapper" }, Bc = ["onKeydown"], Kc = {
  key: 1,
  class: "ito-settings-content"
}, kc = { class: "ito-theme-manager" }, Wc = { class: "ito-theme-row" }, Yc = ["disabled"], qc = { class: "ito-theme-list" }, Xc = {
  key: 0,
  class: "ito-theme-empty"
}, Gc = { class: "ito-theme-name" }, zc = { class: "ito-theme-actions" }, Jc = ["onClick"], Zc = ["onClick"], Fo = "ito-theme-presets", Qc = /* @__PURE__ */ Le({
  __name: "SettingsMenu",
  setup(e) {
    const t = /* @__PURE__ */ oe(!1), n = /* @__PURE__ */ oe("settings"), s = /* @__PURE__ */ oe("#ffffff"), o = /* @__PURE__ */ oe("#06b6d4"), r = /* @__PURE__ */ oe("#ffffff"), i = /* @__PURE__ */ oe("#06b6d4"), l = /* @__PURE__ */ oe(""), c = /* @__PURE__ */ oe([]), d = (T) => {
      if (!T) return "#333333";
      const g = parseInt(T.slice(1, 3), 16), F = parseInt(T.slice(3, 5), 16), re = parseInt(T.slice(5, 7), 16);
      return (g * 299 + F * 587 + re * 114) / 1e3 >= 150 ? "#333333" : "#ffffff";
    }, u = (T, g) => {
      document.documentElement.style.setProperty(T, g);
    }, p = (T) => {
      const g = T.trim().toUpperCase();
      if (!g) return null;
      let F = g.startsWith("#") ? g : `#${g}`;
      return /^#[0-9A-F]{3}$/.test(F) && (F = `#${F[1]}${F[1]}${F[2]}${F[2]}${F[3]}${F[3]}`), /^#[0-9A-F]{6}$/.test(F) ? F : null;
    }, m = (T) => {
      const g = T.trim().toUpperCase();
      return g ? g.startsWith("#") ? g : `#${g}` : "";
    }, x = () => {
      u("--accent-text", d(o.value));
    }, I = () => {
      u("--main-bg", s.value);
      const T = d(s.value);
      u("--text-color", T), r.value = s.value.toUpperCase();
    }, A = () => {
      u("--accent-color", o.value), x(), i.value = o.value.toUpperCase();
    }, N = () => {
      const T = p(r.value);
      if (!T) {
        r.value = s.value.toUpperCase();
        return;
      }
      s.value = T, I();
    }, U = () => {
      const T = p(i.value);
      if (!T) {
        i.value = o.value.toUpperCase();
        return;
      }
      o.value = T, A();
    }, O = () => {
      r.value = m(r.value).slice(0, 7);
    }, j = () => {
      i.value = m(i.value).slice(0, 7);
    }, M = (T, g) => {
      s.value = T, o.value = g, u("--main-bg", T), u("--accent-color", g), u("--text-color", d(T)), x(), r.value = T.toUpperCase(), i.value = g.toUpperCase();
    }, K = () => {
      try {
        localStorage.setItem(Fo, JSON.stringify(c.value));
      } catch (T) {
        console.warn("Failed to save presets", T);
      }
    }, W = () => {
      try {
        const T = localStorage.getItem(Fo);
        if (!T) return;
        const g = JSON.parse(T);
        Array.isArray(g) && (c.value = g.filter((F) => F?.name && F?.mainBg && F?.accentColor));
      } catch (T) {
        console.warn("Failed to load presets", T);
      }
    }, ne = () => {
      const T = l.value.trim();
      if (!T) return;
      const g = c.value.findIndex((re) => re.name.toLowerCase() === T.toLowerCase()), F = {
        name: T,
        mainBg: s.value,
        accentColor: o.value
      };
      g >= 0 ? c.value.splice(g, 1, F) : c.value.unshift(F), l.value = "", K();
    }, fe = (T) => {
      M(T.mainBg, T.accentColor);
    }, H = (T) => {
      c.value = c.value.filter((g) => g.name !== T), K();
    }, Y = () => {
      s.value = "#ffffff", o.value = "#06b6d4", u("--main-bg", "#ffffff"), u("--accent-color", "#06b6d4"), u("--text-color", "#333333"), x(), r.value = "#FFFFFF", i.value = "#06B6D4";
    };
    return Dn(() => {
      const T = getComputedStyle(document.documentElement).getPropertyValue("--main-bg").trim(), g = getComputedStyle(document.documentElement).getPropertyValue("--accent-color").trim();
      T && (s.value = T), g && (o.value = g), T && u("--text-color", d(T)), (g || o.value) && x(), r.value = (T || s.value).toUpperCase(), i.value = (g || o.value).toUpperCase(), W();
    }), (T, g) => (Z(), ue("div", Pc, [
      $("button", {
        class: "ito-settings-button",
        onClick: g[0] || (g[0] = (F) => t.value = !t.value),
        title: "Settings"
      }, [...g[9] || (g[9] = [
        $("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          class: "ito-settings-icon"
        }, [
          $("path", {
            d: "M8 2H12V4H14V5L16 6V8H18V12H16V14L14 15V16H12V18H8V16H6V15L4 14V12H2V8H4V6L6 5V4H8V2ZM10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7Z",
            fill: "currentColor"
          })
        ], -1)
      ])]),
      X(kr, { name: "ito-settings-transition" }, {
        default: Se(() => [
          t.value ? (Z(), ue("div", Oc, [
            $("div", Rc, [
              $("div", Lc, [
                $("button", {
                  class: ft(["ito-settings-tab", { "ito-settings-tab--active": n.value === "settings" }]),
                  onClick: g[1] || (g[1] = (F) => n.value = "settings"),
                  type: "button"
                }, " Settings ", 2),
                $("button", {
                  class: ft(["ito-settings-tab", { "ito-settings-tab--active": n.value === "themes" }]),
                  onClick: g[2] || (g[2] = (F) => n.value = "themes"),
                  type: "button"
                }, " Themes ", 2)
              ]),
              $("button", {
                class: "ito-settings-close",
                onClick: g[3] || (g[3] = (F) => t.value = !1)
              }, "×")
            ]),
            n.value === "settings" ? (Z(), ue("div", Vc, [
              $("div", Dc, [
                g[10] || (g[10] = $("label", { for: "main-bg-color" }, "Main Background", -1)),
                $("div", Nc, [
                  et($("input", {
                    id: "main-bg-color",
                    type: "color",
                    "onUpdate:modelValue": g[4] || (g[4] = (F) => s.value = F),
                    onInput: I,
                    class: "ito-color-input"
                  }, null, 544), [
                    [ct, s.value]
                  ]),
                  et($("input", {
                    id: "main-bg-hex",
                    type: "text",
                    "onUpdate:modelValue": g[5] || (g[5] = (F) => r.value = F),
                    onInput: O,
                    onBlur: N,
                    onKeydown: hs(Ao(N, ["prevent"]), ["enter"]),
                    class: "ito-color-text-input",
                    placeholder: "#FFFFFF",
                    maxlength: "7",
                    inputmode: "text",
                    autocapitalize: "characters"
                  }, null, 40, Hc), [
                    [ct, r.value]
                  ])
                ])
              ]),
              $("div", Uc, [
                g[11] || (g[11] = $("label", { for: "accent-color" }, "Accent Color", -1)),
                $("div", jc, [
                  et($("input", {
                    id: "accent-color",
                    type: "color",
                    "onUpdate:modelValue": g[6] || (g[6] = (F) => o.value = F),
                    onInput: A,
                    class: "ito-color-input"
                  }, null, 544), [
                    [ct, o.value]
                  ]),
                  et($("input", {
                    id: "accent-hex",
                    type: "text",
                    "onUpdate:modelValue": g[7] || (g[7] = (F) => i.value = F),
                    onInput: j,
                    onBlur: U,
                    onKeydown: hs(Ao(U, ["prevent"]), ["enter"]),
                    class: "ito-color-text-input",
                    placeholder: "#00BCD4",
                    maxlength: "7",
                    inputmode: "text",
                    autocapitalize: "characters"
                  }, null, 40, Bc), [
                    [ct, i.value]
                  ])
                ])
              ]),
              $("button", {
                class: "ito-settings-reset",
                onClick: Y
              }, "Reset to Default")
            ])) : (Z(), ue("div", Kc, [
              $("div", kc, [
                g[12] || (g[12] = $("label", { for: "ito-theme-name" }, "New Preset Name", -1)),
                $("div", Wc, [
                  et($("input", {
                    id: "ito-theme-name",
                    type: "text",
                    "onUpdate:modelValue": g[8] || (g[8] = (F) => l.value = F),
                    class: "ito-theme-input",
                    placeholder: "My theme"
                  }, null, 512), [
                    [ct, l.value]
                  ]),
                  $("button", {
                    class: "ito-theme-save",
                    onClick: ne,
                    disabled: !l.value.trim(),
                    type: "button"
                  }, " Save Current ", 8, Yc)
                ]),
                $("div", qc, [
                  c.value.length === 0 ? (Z(), ue("div", Xc, " No presets yet. ")) : pt("", !0),
                  (Z(!0), ue(_e, null, cl(c.value, (F) => (Z(), ue("div", {
                    key: F.name,
                    class: "ito-theme-item"
                  }, [
                    $("span", Gc, $e(F.name), 1),
                    $("div", zc, [
                      $("button", {
                        class: "ito-theme-load",
                        onClick: (re) => fe(F),
                        type: "button"
                      }, "Load", 8, Jc),
                      $("button", {
                        class: "ito-theme-delete",
                        onClick: (re) => H(F.name),
                        type: "button"
                      }, " Delete ", 8, Zc)
                    ])
                  ]))), 128))
                ])
              ])
            ]))
          ])) : pt("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Fe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, ea = /* @__PURE__ */ Fe(Qc, [["__scopeId", "data-v-dd9c2c1a"]]), ta = { class: "ito-controls-menu" }, na = { class: "ito-controls-menu-content" }, sa = { class: "ito-controls-menu-header" }, oa = { class: "ito-controls-menu-content-footer" }, ra = /* @__PURE__ */ Le({
  __name: "ControlsMenu",
  setup(e) {
    const { showControls: t, toggleShowControls: n } = Vs();
    return (s, o) => (Z(), ue("div", ta, [
      X(kr, {
        name: "ito-menu-transition",
        mode: "out-in"
      }, {
        default: Se(() => [
          et($("div", na, [
            $("div", sa, [
              X(ea)
            ]),
            Sn(s.$slots, "default", {}, void 0, !0),
            $("div", oa, [
              Sn(s.$slots, "footer", {}, void 0, !0)
            ])
          ], 512), [
            [ic, ke(t)]
          ])
        ]),
        _: 3
      }),
      $("div", {
        class: ft(["ito-controls-menu-activator", { "ito-controls-menu-activator--active": ke(t) }]),
        tabindex: "0",
        onClick: o[0] || (o[0] = //@ts-ignore
        (...r) => ke(n) && ke(n)(...r))
      }, null, 2)
    ]));
  }
}), ia = /* @__PURE__ */ Fe(ra, [["__scopeId", "data-v-714d48e2"]]), la = {}, ca = { class: "ito-control-field-group" };
function aa(e, t) {
  return Z(), ue("div", ca, [
    Sn(e.$slots, "default", {}, void 0)
  ]);
}
const pn = /* @__PURE__ */ Fe(la, [["render", aa], ["__scopeId", "data-v-305a1241"]]), Ds = /* @__PURE__ */ oe(!1), de = /* @__PURE__ */ On({
  initialX: 0,
  initialY: 0,
  currentX: 0,
  currentY: 0,
  offsetX: 0,
  offsetY: 0
});
function ua(e) {
  de.initialX = e.clientX - de.offsetX, de.initialY = e.clientY - de.offsetY, Ds.value = !0;
}
function fa(e) {
  Ds.value && (de.currentX = e.clientX - de.initialX, de.currentY = e.clientY - de.initialY, de.offsetX = de.currentX, de.offsetY = de.currentY);
}
function da(e) {
  de.initialX = e.clientX, de.initialY = e.clientY, Ds.value = !1;
}
function pa() {
  Object.assign(de, {
    initialX: 0,
    initialY: 0,
    currentX: 0,
    currentY: 0,
    offsetX: 0,
    offsetY: 0
  });
}
function Gr() {
  return {
    elementDrag: de,
    resetElementDrag: pa,
    dragEvents: {
      mousedown: ua,
      mousemove: fa,
      mouseup: da
    }
  };
}
const ha = { class: "ito-tracer-image-wrapper" }, ga = ["src"], ma = /* @__PURE__ */ Le({
  __name: "TracerImage",
  props: {
    src: {}
  },
  setup(e) {
    const { showControls: t, scale: n, opacity: s, rotation: o, isAttached: r } = Vs(), { elementDrag: i, dragEvents: l } = Gr(), c = e, d = tn(() => c.src && t.value && !r.value ? {
      wheel: u,
      ...l
    } : {});
    function u(m) {
      if (m.ctrlKey) {
        const x = 0.01 * m.deltaY;
        let I = n.value;
        I -= x, n.value = parseFloat(Math.min(Math.max(I, 0.01), 8).toFixed(2));
      }
      if (m.shiftKey) {
        const x = m.deltaY > 0 ? 3 : -3;
        let I = o.value + x;
        o.value = Math.min(Math.max(I, -360), 360);
      }
      (m.shiftKey || m.ctrlKey) && m.preventDefault();
    }
    const p = tn(() => ({
      opacity: s.value,
      cursor: t.value && !r.value ? "grab" : void 0,
      pointerEvents: t.value && !r.value ? "auto" : void 0,
      transform: `
			translate3d(${i.currentX}px, ${i.currentY}px, 0) 
			scale(${n.value}, ${n.value}) 
			rotate(${o.value}deg)
		`
    }));
    return (m, x) => (Z(), ue("div", ha, [
      $("img", Nr({
        src: c.src,
        style: p.value,
        draggable: "false",
        class: "ito-tracer-image"
      }, al(d.value)), null, 16, ga)
    ]));
  }
}), va = /* @__PURE__ */ Fe(ma, [["__scopeId", "data-v-fa1e17e1"]]);
function ms(e) {
  return new Promise((t, n) => {
    const s = new Image();
    s.onload = () => {
      t(s.src);
    }, s.onerror = () => {
      n();
    }, s.src = e;
  });
}
function _a(e) {
  return new Promise((t, n) => {
    const s = document.createElement("canvas"), o = s.getContext("2d"), r = new FileReader();
    r.onload = (i) => {
      const l = new Image();
      l.onload = () => {
        s.height = l.naturalHeight, s.width = l.naturalWidth, o?.drawImage(l, 0, 0), t(s.toDataURL("image/jpeg"));
      }, l.onerror = () => {
        n();
      }, i.target?.result && (l.src = i.target.result);
    }, r.readAsDataURL(e);
  });
}
const ba = { class: "ito-control-field" }, ya = {
  key: 0,
  class: "ito-control-field-label"
}, xa = {
  key: 1,
  class: "ito-control-field-error"
}, Ca = /* @__PURE__ */ Le({
  __name: "ControlField",
  props: {
    label: {},
    error: {}
  },
  setup(e) {
    return (t, n) => (Z(), ue("div", ba, [
      e.label ? (Z(), ue("div", ya, $e(e.label), 1)) : pt("", !0),
      Sn(t.$slots, "default", {}, void 0),
      e.error ? (Z(), ue("div", xa, $e(e.error), 1)) : pt("", !0)
    ]));
  }
}), ln = /* @__PURE__ */ Fe(Ca, [["__scopeId", "data-v-c4a76868"]]), wa = /* @__PURE__ */ Le({
  __name: "ImagePicker",
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ oe(null);
    async function o(i) {
      const l = i.target, c = l.files || [], [d] = c;
      try {
        const u = await _a(d);
        n("change", u), l.value = "";
      } catch {
        console.error("Failed to load file");
      }
    }
    function r() {
      s.value?.click();
    }
    return (i, l) => (Z(), Ye(ln, { label: "Upload image" }, {
      default: Se(() => [
        $("div", {
          class: "ito-upload-button",
          onClick: r
        }, "Browse"),
        $("input", {
          ref_key: "inputRef",
          ref: s,
          type: "file",
          accept: "image/*",
          style: { display: "none" },
          onChange: o
        }, null, 544)
      ]),
      _: 1
    }));
  }
}), Sa = /* @__PURE__ */ Fe(wa, [["__scopeId", "data-v-e98b6d48"]]), Ta = /* @__PURE__ */ Le({
  __name: "ImageFetcher",
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ oe("");
    function o() {
      s.value = "";
    }
    function r() {
      s.value = "";
    }
    async function i(l) {
      const c = l.target, d = c.value;
      if (d)
        try {
          const u = await ms(d);
          n("change", u), c.value = "";
        } catch {
          console.error("Failed to load file"), s.value = "Failed to fetch image";
        }
    }
    return (l, c) => (Z(), Ye(ln, {
      label: "Or paste image address",
      error: s.value
    }, {
      default: Se(() => [
        $("input", {
          type: "text",
          placeholder: "Press enter to submit",
          class: "ito-input-control",
          onInput: o,
          onChange: i,
          onPaste: r
        }, null, 32)
      ]),
      _: 1
    }, 8, ["error"]));
  }
}), Ea = /* @__PURE__ */ Fe(Ta, [["__scopeId", "data-v-7aad0edb"]]), Aa = { class: "ito-image-agent-controls column" }, Ia = ["placeholder", "disabled"], Fa = { class: "ito-button-row" }, $a = ["disabled"], Ma = { class: "ito-nav-group" }, Pa = ["disabled"], Oa = ["disabled"], Ra = {
  key: 0,
  class: "ito-nav-counter"
}, La = {
  key: 0,
  class: "ito-status-message"
}, Va = /* @__PURE__ */ Le({
  __name: "ImageAgent",
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ oe(!1), o = /* @__PURE__ */ oe(""), r = /* @__PURE__ */ oe(""), i = /* @__PURE__ */ oe(""), l = /* @__PURE__ */ oe([]), c = /* @__PURE__ */ oe(0);
    function d() {
      const x = document.querySelector(".word");
      if (x?.textContent?.trim()) {
        let N = x.textContent.trim();
        return N = N.replace(/_/g, "").replace(/\s\s+/g, " ").trim(), N;
      }
      const I = document.querySelector("#currentWord");
      if (I?.textContent?.trim()) {
        let N = I.textContent.trim();
        return N = N.replace(/_/g, "").replace(/\s\+/g, " ").trim(), N;
      }
      const A = ['[class*="prompt"]', ".phone-input", "[data-word]"];
      for (const N of A) {
        const U = document.querySelector(N);
        if (U?.textContent?.trim()) return U.textContent.trim();
      }
      return null;
    }
    function u(x) {
      if (!l.value || l.value.length === 0) return;
      const I = l.value.length;
      c.value = (c.value + x + I) % I;
      const A = l.value[c.value];
      A && ms(A).then(() => {
        n("change", A), r.value = `${c.value + 1} / ${I}`, setTimeout(() => r.value = "", 1500);
      }).catch(() => {
        o.value = "Failed to load selected image.";
      });
    }
    Dn(() => {
      const x = d();
      x && (i.value = x), window.addEventListener("ito:clear-image", p);
    }), Ps(() => {
      window.removeEventListener("ito:clear-image", p);
    });
    function p() {
      l.value = [], c.value = 0, r.value = "", i.value = "", o.value = "";
    }
    async function m() {
      o.value = "", r.value = "";
      const x = i.value.trim(), I = d(), A = x || I;
      if (!A) {
        o.value = "Could not detect word. Type it manually.";
        return;
      }
      s.value = !0;
      try {
        const N = `https://agent.typo.rip/${encodeURIComponent(A)}`, U = await fetch(N);
        if (!U.ok)
          throw new Error(`API returned ${U.status}`);
        const O = await U.json(), j = [];
        if (Array.isArray(O))
          for (const W of O)
            W && (typeof W == "string" ? j.push(W) : typeof W == "object" && j.push(W.url || W.src));
        else if (typeof O == "object") {
          const W = O.results || O.images || O.data;
          if (Array.isArray(W))
            for (const ne of W)
              ne && (typeof ne == "string" ? j.push(ne) : typeof ne == "object" && j.push(ne.url || ne.src));
          else (O.url || O.src) && j.push(O.url || O.src);
        }
        const M = j.filter(Boolean);
        if (M.length === 0) {
          o.value = "No images found for this word";
          return;
        }
        l.value = M, c.value = 0;
        const K = l.value[0];
        await ms(K), n("change", K), i.value = "", r.value = `1 / ${l.value.length}`, setTimeout(() => {
          r.value = "";
        }, 2e3);
      } catch (N) {
        console.error("Image agent error:", N), o.value = "Failed to fetch image. Try another word.";
      } finally {
        s.value = !1;
      }
    }
    return (x, I) => (Z(), Ye(ln, {
      label: "AI Image Fetch",
      error: o.value
    }, {
      default: Se(() => [
        $("div", Aa, [
          et($("input", {
            "onUpdate:modelValue": I[0] || (I[0] = (A) => i.value = A),
            type: "text",
            placeholder: i.value ? "Press enter or click Auto" : "Type a word here...",
            class: "ito-input-control full-width",
            onKeydown: hs(m, ["enter"]),
            disabled: s.value
          }, null, 40, Ia), [
            [ct, i.value]
          ]),
          $("div", Fa, [
            $("button", {
              class: "ito-agent-btn",
              onClick: m,
              disabled: s.value
            }, $e(s.value ? "Fetching..." : "🤖 Auto"), 9, $a),
            $("div", Ma, [
              $("button", {
                class: "ito-nav-btn left",
                onClick: I[1] || (I[1] = (A) => u(-1)),
                disabled: l.value.length === 0
              }, "◀", 8, Pa),
              $("button", {
                class: "ito-nav-btn right",
                onClick: I[2] || (I[2] = (A) => u(1)),
                disabled: l.value.length === 0
              }, "▶", 8, Oa),
              l.value.length ? (Z(), ue("span", Ra, $e(c.value + 1) + " / " + $e(l.value.length), 1)) : pt("", !0)
            ])
          ])
        ]),
        r.value ? (Z(), ue("div", La, $e(r.value), 1)) : pt("", !0)
      ]),
      _: 1
    }, 8, ["error"]));
  }
}), Da = /* @__PURE__ */ Fe(Va, [["__scopeId", "data-v-10c915f5"]]), Na = { class: "control-group" }, Ha = { class: "label-row" }, Ua = { class: "label-text" }, ja = ["step", "min", "max"], Ba = ["min", "max", "step"], Ka = /* @__PURE__ */ Le({
  __name: "RangeField",
  props: {
    label: {},
    modelValue: {},
    min: {},
    max: {},
    step: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, s = e, o = tn({
      get: () => s.modelValue,
      set: (c) => n("update:modelValue", c)
    }), r = tn(() => s.step ?? 0.01), i = () => {
      const c = Number(o.value);
      if (Number.isNaN(c)) return;
      const d = Math.min(Math.max(c, s.min), s.max);
      d !== c && (o.value = d);
    }, l = (c) => {
      const d = c.target;
      d && d.select();
    };
    return (c, d) => (Z(), Ye(ln, null, {
      default: Se(() => [
        $("div", Na, [
          $("div", Ha, [
            $("span", Ua, $e(e.label), 1),
            et($("input", {
              type: "number",
              "onUpdate:modelValue": d[0] || (d[0] = (u) => o.value = u),
              onFocus: l,
              onBlur: i,
              class: "stealth-input",
              step: r.value,
              min: e.min,
              max: e.max
            }, null, 40, ja), [
              [
                ct,
                o.value,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          et($("input", {
            type: "range",
            "onUpdate:modelValue": d[1] || (d[1] = (u) => o.value = u),
            min: e.min,
            max: e.max,
            step: r.value,
            class: "custom-slider"
          }, null, 8, Ba), [
            [
              ct,
              o.value,
              void 0,
              { number: !0 }
            ]
          ])
        ])
      ]),
      _: 1
    }));
  }
}), ts = /* @__PURE__ */ Fe(Ka, [["__scopeId", "data-v-77ed8873"]]), ka = /* @__PURE__ */ Le({
  __name: "TextButton",
  props: {
    label: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = t;
    return (s, o) => (Z(), ue("div", {
      class: "ito-text-button",
      onClick: o[0] || (o[0] = (r) => n("click"))
    }, $e(e.label), 1));
  }
}), $o = /* @__PURE__ */ Fe(ka, [["__scopeId", "data-v-c965233f"]]), Wa = { class: "ito-switch-field-label" }, Ya = { class: "ito-switch" }, qa = /* @__PURE__ */ Le({
  __name: "SwitchField",
  props: {
    label: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (Z(), Ye(ln, null, {
      default: Se(() => [
        $("div", {
          class: "ito-switch-field",
          onClick: n[0] || (n[0] = (s) => t.$emit("update:modelValue", !e.modelValue))
        }, [
          $("div", Wa, $e(e.label), 1),
          $("div", Ya, [
            $("div", {
              class: ft(["ito-switch-button", { "ito-switch-button--on": e.modelValue }])
            }, [...n[1] || (n[1] = [
              $("div", { class: "ito-switch-knob" }, null, -1)
            ])], 2)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Xa = /* @__PURE__ */ Fe(qa, [["__scopeId", "data-v-db41b143"]]);
function Ga() {
  const e = document.getElementById("ImageTracerOverlayContainer"), t = document.querySelector(":root");
  if (!e)
    return;
  const n = e.getBoundingClientRect(), s = window.scrollY || document.documentElement.scrollTop, o = window.scrollX || document.documentElement.scrollLeft;
  t.style.setProperty("--image-tracer-overlay-attached-x", n.top + s + "px"), t.style.setProperty("--image-tracer-overlay-attached-y", n.left + o + "px");
}
const za = { class: "ito-fixed-container" }, Ja = { class: "ito-text-buttons-group" }, Za = /* @__PURE__ */ Le({
  __name: "App",
  setup(e) {
    const { opacity: t, scale: n, resetControls: s, rotation: o, isAttached: r } = Vs(), { resetElementDrag: i } = Gr(), l = /* @__PURE__ */ oe(void 0);
    function c() {
      l.value = void 0;
      try {
        window.dispatchEvent(new CustomEvent("ito:clear-image"));
      } catch (u) {
        console.warn("Failed to dispatch ito:clear-image event", u);
      }
    }
    function d() {
      s(), i();
    }
    return vn(r, () => {
      r.value && Ga();
    }), (u, p) => (Z(), ue(_e, null, [
      $("div", {
        id: "ImageTracerOverlayContainer",
        class: ft([ke(r) ? "ito-attached-container" : "ito-fixed-container"])
      }, [
        l.value ? (Z(), Ye(va, {
          key: 0,
          src: l.value
        }, null, 8, ["src"])) : pt("", !0)
      ], 2),
      $("div", za, [
        X(ia, null, {
          footer: Se(() => [...p[7] || (p[7] = [
            $("div", { class: "ito-menu-helper" }, " Tips: Position the image by dragging. Ctrl+Scroll to change zoom. Shift+Scroll to rotate. ", -1)
          ])]),
          default: Se(() => [
            X(pn, null, {
              default: Se(() => [
                X(Sa, {
                  onChange: p[0] || (p[0] = (m) => l.value = m)
                }),
                X(Ea, {
                  onChange: p[1] || (p[1] = (m) => l.value = m)
                }),
                X(Da, {
                  onChange: p[2] || (p[2] = (m) => l.value = m)
                })
              ]),
              _: 1
            }),
            X(pn, null, {
              default: Se(() => [
                X(Xa, {
                  label: "Lock image position",
                  modelValue: ke(r),
                  "onUpdate:modelValue": p[3] || (p[3] = (m) => /* @__PURE__ */ le(r) ? r.value = m : null)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            X(pn, null, {
              default: Se(() => [
                X(ts, {
                  label: "Opacity",
                  min: 0,
                  max: 1,
                  step: 0.01,
                  modelValue: ke(t),
                  "onUpdate:modelValue": p[4] || (p[4] = (m) => /* @__PURE__ */ le(t) ? t.value = m : null)
                }, null, 8, ["modelValue"]),
                X(ts, {
                  label: "Scale",
                  min: 0.1,
                  max: 5,
                  step: 0.01,
                  modelValue: ke(n),
                  "onUpdate:modelValue": p[5] || (p[5] = (m) => /* @__PURE__ */ le(n) ? n.value = m : null)
                }, null, 8, ["modelValue"]),
                X(ts, {
                  label: "Rotate",
                  min: 0,
                  max: 360,
                  step: 1,
                  modelValue: ke(o),
                  "onUpdate:modelValue": p[6] || (p[6] = (m) => /* @__PURE__ */ le(o) ? o.value = m : null)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            l.value ? (Z(), Ye(pn, { key: 0 }, {
              default: Se(() => [
                $("div", Ja, [
                  X($o, {
                    label: "Clear image",
                    onClick: c
                  }),
                  X($o, {
                    label: "Reset image",
                    title: "Reset position, opacity, scale and rotation",
                    onClick: d
                  })
                ])
              ]),
              _: 1
            })) : pt("", !0)
          ]),
          _: 1
        })
      ])
    ], 64));
  }
}), Qa = /* @__PURE__ */ Fe(Za, [["__scopeId", "data-v-c27b8d40"]]), jn = document.createElement("div");
jn.setAttribute("id", "ImageTracerOverlayMount");
jn.style.display = "none";
document.body.appendChild(jn);
const eu = Ec(Qa);
eu.mount(jn);
