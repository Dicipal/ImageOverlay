// @__NO_SIDE_EFFECTS__
function xs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ie = {}, Ft = [], ze = () => {
}, Lo = () => !1, On = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Cs = (e) => e.startsWith("onUpdate:"), ge = Object.assign, Ss = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ni = Object.prototype.hasOwnProperty, Q = (e, t) => ni.call(e, t), V = Array.isArray, Mt = (e) => cn(e) === "[object Map]", Vo = (e) => cn(e) === "[object Set]", Ys = (e) => cn(e) === "[object Date]", U = (e) => typeof e == "function", de = (e) => typeof e == "string", Ne = (e) => typeof e == "symbol", se = (e) => e !== null && typeof e == "object", Do = (e) => (se(e) || U(e)) && U(e.then) && U(e.catch), No = Object.prototype.toString, cn = (e) => No.call(e), si = (e) => cn(e).slice(8, -1), Ho = (e) => cn(e) === "[object Object]", Ts = (e) => de(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Yt = /* @__PURE__ */ xs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Rn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, oi = /-\w/g, gt = Rn(
  (e) => e.replace(oi, (t) => t.slice(1).toUpperCase())
), ri = /\B([A-Z])/g, _t = Rn(
  (e) => e.replace(ri, "-$1").toLowerCase()
), Uo = Rn((e) => e.charAt(0).toUpperCase() + e.slice(1)), _n = Rn(
  (e) => e ? `on${Uo(e)}` : ""
), ht = (e, t) => !Object.is(e, t), yn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ko = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Es = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ii = (e) => {
  const t = de(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let qs;
const Ln = () => qs || (qs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function As(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = de(s) ? ui(s) : As(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (de(e) || se(e))
    return e;
}
const li = /;(?![^(]*\))/g, ci = /:([^]+)/, ai = /\/\*[^]*?\*\//g;
function ui(e) {
  const t = {};
  return e.replace(ai, "").split(li).forEach((n) => {
    if (n) {
      const s = n.split(ci);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function rt(e) {
  let t = "";
  if (de(e))
    t = e;
  else if (V(e))
    for (let n = 0; n < e.length; n++) {
      const s = rt(e[n]);
      s && (t += s + " ");
    }
  else if (se(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const fi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", di = /* @__PURE__ */ xs(fi);
function jo(e) {
  return !!e || e === "";
}
function pi(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Is(e[s], t[s]);
  return n;
}
function Is(e, t) {
  if (e === t) return !0;
  let n = Ys(e), s = Ys(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Ne(e), s = Ne(t), n || s)
    return e === t;
  if (n = V(e), s = V(t), n || s)
    return n && s ? pi(e, t) : !1;
  if (n = se(e), s = se(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, r = Object.keys(t).length;
    if (o !== r)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (l && !c || !l && c || !Is(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Bo = (e) => !!(e && e.__v_isRef === !0), Re = (e) => de(e) ? e : e == null ? "" : V(e) || se(e) && (e.toString === No || !U(e.toString)) ? Bo(e) ? Re(e.value) : JSON.stringify(e, Ko, 2) : String(e), Ko = (e, t) => Bo(t) ? Ko(e, t.value) : Mt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[qn(s, r) + " =>"] = o, n),
    {}
  )
} : Vo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => qn(n))
} : Ne(t) ? qn(t) : se(t) && !V(t) && !Ho(t) ? String(t) : t, qn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ne(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Ie;
class hi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Ie, !t && Ie && (this.index = (Ie.scopes || (Ie.scopes = [])).push(
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
      const n = Ie;
      try {
        return Ie = this, t();
      } finally {
        Ie = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ie, Ie = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ie = this.prevScope, this.prevScope = void 0);
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
function gi() {
  return Ie;
}
let ce;
const Xn = /* @__PURE__ */ new WeakSet();
class Wo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ie && Ie.active && Ie.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Xn.has(this) && (Xn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || qo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Xs(this), Xo(this);
    const t = ce, n = De;
    ce = this, De = !0;
    try {
      return this.fn();
    } finally {
      Go(this), ce = t, De = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Fs(t);
      this.deps = this.depsTail = void 0, Xs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Xn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    is(this) && this.run();
  }
  get dirty() {
    return is(this);
  }
}
let Yo = 0, qt, Xt;
function qo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Xt, Xt = e;
    return;
  }
  e.next = qt, qt = e;
}
function $s() {
  Yo++;
}
function Ps() {
  if (--Yo > 0)
    return;
  if (Xt) {
    let t = Xt;
    for (Xt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; qt; ) {
    let t = qt;
    for (qt = void 0; t; ) {
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
function Xo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Go(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Fs(s), mi(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function is(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (zo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function zo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Zt) || (e.globalVersion = Zt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !is(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ce, s = De;
  ce = e, De = !0;
  try {
    Xo(e);
    const o = e.fn(e._value);
    (t.version === 0 || ht(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    ce = n, De = s, Go(e), e.flags &= -3;
  }
}
function Fs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Fs(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function mi(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let De = !0;
const Jo = [];
function it() {
  Jo.push(De), De = !1;
}
function lt() {
  const e = Jo.pop();
  De = e === void 0 ? !0 : e;
}
function Xs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ce;
    ce = void 0;
    try {
      t();
    } finally {
      ce = n;
    }
  }
}
let Zt = 0;
class vi {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ms {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ce || !De || ce === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ce)
      n = this.activeLink = new vi(ce, this), ce.deps ? (n.prevDep = ce.depsTail, ce.depsTail.nextDep = n, ce.depsTail = n) : ce.deps = ce.depsTail = n, Zo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ce.depsTail, n.nextDep = void 0, ce.depsTail.nextDep = n, ce.depsTail = n, ce.deps === n && (ce.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Zt++, this.notify(t);
  }
  notify(t) {
    $s();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ps();
    }
  }
}
function Zo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Zo(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ls = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ Symbol(
  ""
), cs = /* @__PURE__ */ Symbol(
  ""
), Qt = /* @__PURE__ */ Symbol(
  ""
);
function ve(e, t, n) {
  if (De && ce) {
    let s = ls.get(e);
    s || ls.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Ms()), o.map = s, o.key = n), o.track();
  }
}
function nt(e, t, n, s, o, r) {
  const i = ls.get(e);
  if (!i) {
    Zt++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if ($s(), t === "clear")
    i.forEach(l);
  else {
    const c = V(e), d = c && Ts(n);
    if (c && n === "length") {
      const u = Number(s);
      i.forEach((p, g) => {
        (g === "length" || g === Qt || !Ne(g) && g >= u) && l(p);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), d && l(i.get(Qt)), t) {
        case "add":
          c ? d && l(i.get("length")) : (l(i.get(Et)), Mt(e) && l(i.get(cs)));
          break;
        case "delete":
          c || (l(i.get(Et)), Mt(e) && l(i.get(cs)));
          break;
        case "set":
          Mt(e) && l(i.get(Et));
          break;
      }
  }
  Ps();
}
function It(e) {
  const t = /* @__PURE__ */ J(e);
  return t === e ? t : (ve(t, "iterate", Qt), /* @__PURE__ */ Le(e) ? t : t.map(He));
}
function Vn(e) {
  return ve(e = /* @__PURE__ */ J(e), "iterate", Qt), e;
}
function ft(e, t) {
  return /* @__PURE__ */ ct(e) ? Vt(/* @__PURE__ */ At(e) ? He(t) : t) : He(t);
}
const _i = {
  __proto__: null,
  [Symbol.iterator]() {
    return Gn(this, Symbol.iterator, (e) => ft(this, e));
  },
  concat(...e) {
    return It(this).concat(
      ...e.map((t) => V(t) ? It(t) : t)
    );
  },
  entries() {
    return Gn(this, "entries", (e) => (e[1] = ft(this, e[1]), e));
  },
  every(e, t) {
    return Ze(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ze(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => ft(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ze(
      this,
      "find",
      e,
      t,
      (n) => ft(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ze(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ze(
      this,
      "findLast",
      e,
      t,
      (n) => ft(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ze(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ze(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return zn(this, "includes", e);
  },
  indexOf(...e) {
    return zn(this, "indexOf", e);
  },
  join(e) {
    return It(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return zn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ze(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ut(this, "pop");
  },
  push(...e) {
    return Ut(this, "push", e);
  },
  reduce(e, ...t) {
    return Gs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Gs(this, "reduceRight", e, t);
  },
  shift() {
    return Ut(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ze(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ut(this, "splice", e);
  },
  toReversed() {
    return It(this).toReversed();
  },
  toSorted(e) {
    return It(this).toSorted(e);
  },
  toSpliced(...e) {
    return It(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ut(this, "unshift", e);
  },
  values() {
    return Gn(this, "values", (e) => ft(this, e));
  }
};
function Gn(e, t, n) {
  const s = Vn(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Le(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.done || (r.value = n(r.value)), r;
  }), o;
}
const yi = Array.prototype;
function Ze(e, t, n, s, o, r) {
  const i = Vn(e), l = i !== e && !/* @__PURE__ */ Le(e), c = i[t];
  if (c !== yi[t]) {
    const p = c.apply(e, r);
    return l ? He(p) : p;
  }
  let d = n;
  i !== e && (l ? d = function(p, g) {
    return n.call(this, ft(e, p), g, e);
  } : n.length > 2 && (d = function(p, g) {
    return n.call(this, p, g, e);
  }));
  const u = c.call(i, d, s);
  return l && o ? o(u) : u;
}
function Gs(e, t, n, s) {
  const o = Vn(e);
  let r = n;
  return o !== e && (/* @__PURE__ */ Le(e) ? n.length > 3 && (r = function(i, l, c) {
    return n.call(this, i, l, c, e);
  }) : r = function(i, l, c) {
    return n.call(this, i, ft(e, l), c, e);
  }), o[t](r, ...s);
}
function zn(e, t, n) {
  const s = /* @__PURE__ */ J(e);
  ve(s, "iterate", Qt);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Ls(n[0]) ? (n[0] = /* @__PURE__ */ J(n[0]), s[t](...n)) : o;
}
function Ut(e, t, n = []) {
  it(), $s();
  const s = (/* @__PURE__ */ J(e))[t].apply(e, n);
  return Ps(), lt(), s;
}
const bi = /* @__PURE__ */ xs("__proto__,__v_isRef,__isVue"), Qo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ne)
);
function wi(e) {
  Ne(e) || (e = String(e));
  const t = /* @__PURE__ */ J(this);
  return ve(t, "has", e), t.hasOwnProperty(e);
}
class er {
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
      return s === (o ? r ? Fi : or : r ? sr : nr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = V(t);
    if (!o) {
      let c;
      if (i && (c = _i[n]))
        return c;
      if (n === "hasOwnProperty")
        return wi;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ he(t) ? t : s
    );
    if ((Ne(n) ? Qo.has(n) : bi(n)) || (o || ve(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ he(l)) {
      const c = i && Ts(n) ? l : l.value;
      return o && se(c) ? /* @__PURE__ */ us(c) : c;
    }
    return se(l) ? o ? /* @__PURE__ */ us(l) : /* @__PURE__ */ Dn(l) : l;
  }
}
class tr extends er {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    const i = V(t) && Ts(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ ct(r);
      if (!/* @__PURE__ */ Le(s) && !/* @__PURE__ */ ct(s) && (r = /* @__PURE__ */ J(r), s = /* @__PURE__ */ J(s)), !i && /* @__PURE__ */ he(r) && !/* @__PURE__ */ he(s))
        return d || (r.value = s), !0;
    }
    const l = i ? Number(n) < t.length : Q(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ he(t) ? t : o
    );
    return t === /* @__PURE__ */ J(o) && (l ? ht(s, r) && nt(t, "set", n, s) : nt(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = Q(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && nt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ne(n) || !Qo.has(n)) && ve(t, "has", n), s;
  }
  ownKeys(t) {
    return ve(
      t,
      "iterate",
      V(t) ? "length" : Et
    ), Reflect.ownKeys(t);
  }
}
class xi extends er {
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
const Ci = /* @__PURE__ */ new tr(), Si = /* @__PURE__ */ new xi(), Ti = /* @__PURE__ */ new tr(!0);
const as = (e) => e, hn = (e) => Reflect.getPrototypeOf(e);
function Ei(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = /* @__PURE__ */ J(o), i = Mt(r), l = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, d = o[e](...s), u = n ? as : t ? Vt : He;
    return !t && ve(
      r,
      "iterate",
      c ? cs : Et
    ), ge(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: p, done: g } = d.next();
          return g ? { value: p, done: g } : {
            value: l ? [u(p[0]), u(p[1])] : u(p),
            done: g
          };
        }
      }
    );
  };
}
function gn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ai(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = /* @__PURE__ */ J(r), l = /* @__PURE__ */ J(o);
      e || (ht(o, l) && ve(i, "get", o), ve(i, "get", l));
      const { has: c } = hn(i), d = t ? as : e ? Vt : He;
      if (c.call(i, o))
        return d(r.get(o));
      if (c.call(i, l))
        return d(r.get(l));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ve(/* @__PURE__ */ J(o), "iterate", Et), o.size;
    },
    has(o) {
      const r = this.__v_raw, i = /* @__PURE__ */ J(r), l = /* @__PURE__ */ J(o);
      return e || (ht(o, l) && ve(i, "has", o), ve(i, "has", l)), o === l ? r.has(o) : r.has(o) || r.has(l);
    },
    forEach(o, r) {
      const i = this, l = i.__v_raw, c = /* @__PURE__ */ J(l), d = t ? as : e ? Vt : He;
      return !e && ve(c, "iterate", Et), l.forEach((u, p) => o.call(r, d(u), d(p), i));
    }
  };
  return ge(
    n,
    e ? {
      add: gn("add"),
      set: gn("set"),
      delete: gn("delete"),
      clear: gn("clear")
    } : {
      add(o) {
        !t && !/* @__PURE__ */ Le(o) && !/* @__PURE__ */ ct(o) && (o = /* @__PURE__ */ J(o));
        const r = /* @__PURE__ */ J(this);
        return hn(r).has.call(r, o) || (r.add(o), nt(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !/* @__PURE__ */ Le(r) && !/* @__PURE__ */ ct(r) && (r = /* @__PURE__ */ J(r));
        const i = /* @__PURE__ */ J(this), { has: l, get: c } = hn(i);
        let d = l.call(i, o);
        d || (o = /* @__PURE__ */ J(o), d = l.call(i, o));
        const u = c.call(i, o);
        return i.set(o, r), d ? ht(r, u) && nt(i, "set", o, r) : nt(i, "add", o, r), this;
      },
      delete(o) {
        const r = /* @__PURE__ */ J(this), { has: i, get: l } = hn(r);
        let c = i.call(r, o);
        c || (o = /* @__PURE__ */ J(o), c = i.call(r, o)), l && l.call(r, o);
        const d = r.delete(o);
        return c && nt(r, "delete", o, void 0), d;
      },
      clear() {
        const o = /* @__PURE__ */ J(this), r = o.size !== 0, i = o.clear();
        return r && nt(
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
    n[o] = Ei(o, e, t);
  }), n;
}
function Os(e, t) {
  const n = Ai(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    Q(n, o) && o in s ? n : s,
    o,
    r
  );
}
const Ii = {
  get: /* @__PURE__ */ Os(!1, !1)
}, $i = {
  get: /* @__PURE__ */ Os(!1, !0)
}, Pi = {
  get: /* @__PURE__ */ Os(!0, !1)
};
const nr = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), Fi = /* @__PURE__ */ new WeakMap();
function Mi(e) {
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
function Oi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Mi(si(e));
}
// @__NO_SIDE_EFFECTS__
function Dn(e) {
  return /* @__PURE__ */ ct(e) ? e : Rs(
    e,
    !1,
    Ci,
    Ii,
    nr
  );
}
// @__NO_SIDE_EFFECTS__
function Ri(e) {
  return Rs(
    e,
    !1,
    Ti,
    $i,
    sr
  );
}
// @__NO_SIDE_EFFECTS__
function us(e) {
  return Rs(
    e,
    !0,
    Si,
    Pi,
    or
  );
}
function Rs(e, t, n, s, o) {
  if (!se(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Oi(e);
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
function At(e) {
  return /* @__PURE__ */ ct(e) ? /* @__PURE__ */ At(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ct(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ls(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function J(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ J(t) : e;
}
function Li(e) {
  return !Q(e, "__v_skip") && Object.isExtensible(e) && ko(e, "__v_skip", !0), e;
}
const He = (e) => se(e) ? /* @__PURE__ */ Dn(e) : e, Vt = (e) => se(e) ? /* @__PURE__ */ us(e) : e;
// @__NO_SIDE_EFFECTS__
function he(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function te(e) {
  return Vi(e, !1);
}
function Vi(e, t) {
  return /* @__PURE__ */ he(e) ? e : new Di(e, t);
}
class Di {
  constructor(t, n) {
    this.dep = new Ms(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ J(t), this._value = n ? t : He(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Le(t) || /* @__PURE__ */ ct(t);
    t = s ? t : /* @__PURE__ */ J(t), ht(t, n) && (this._rawValue = t, this._value = s ? t : He(t), this.dep.trigger());
  }
}
function $e(e) {
  return /* @__PURE__ */ he(e) ? e.value : e;
}
const Ni = {
  get: (e, t, n) => t === "__v_raw" ? e : $e(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ he(o) && !/* @__PURE__ */ he(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function rr(e) {
  return /* @__PURE__ */ At(e) ? e : new Proxy(e, Ni);
}
class Hi {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ms(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Zt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ce !== this)
      return qo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return zo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ui(e, t, n = !1) {
  let s, o;
  return U(e) ? s = e : (s = e.get, o = e.set), new Hi(s, o, n);
}
const mn = {}, Sn = /* @__PURE__ */ new WeakMap();
let St;
function ki(e, t = !1, n = St) {
  if (n) {
    let s = Sn.get(n);
    s || Sn.set(n, s = []), s.push(e);
  }
}
function ji(e, t, n = ie) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: l, call: c } = n, d = (O) => o ? O : /* @__PURE__ */ Le(O) || o === !1 || o === 0 ? st(O, 1) : st(O);
  let u, p, g, b, M = !1, F = !1;
  if (/* @__PURE__ */ he(e) ? (p = () => e.value, M = /* @__PURE__ */ Le(e)) : /* @__PURE__ */ At(e) ? (p = () => d(e), M = !0) : V(e) ? (F = !0, M = e.some((O) => /* @__PURE__ */ At(O) || /* @__PURE__ */ Le(O)), p = () => e.map((O) => {
    if (/* @__PURE__ */ he(O))
      return O.value;
    if (/* @__PURE__ */ At(O))
      return d(O);
    if (U(O))
      return c ? c(O, 2) : O();
  })) : U(e) ? t ? p = c ? () => c(e, 2) : e : p = () => {
    if (g) {
      it();
      try {
        g();
      } finally {
        lt();
      }
    }
    const O = St;
    St = u;
    try {
      return c ? c(e, 3, [b]) : e(b);
    } finally {
      St = O;
    }
  } : p = ze, t && o) {
    const O = p, z = o === !0 ? 1 / 0 : o;
    p = () => st(O(), z);
  }
  const G = gi(), K = () => {
    u.stop(), G && G.active && Ss(G.effects, u);
  };
  if (r && t) {
    const O = t;
    t = (...z) => {
      O(...z), K();
    };
  }
  let H = F ? new Array(e.length).fill(mn) : mn;
  const B = (O) => {
    if (!(!(u.flags & 1) || !u.dirty && !O))
      if (t) {
        const z = u.run();
        if (o || M || (F ? z.some((ae, k) => ht(ae, H[k])) : ht(z, H))) {
          g && g();
          const ae = St;
          St = u;
          try {
            const k = [
              z,
              // pass undefined as the old value when it's changed for the first time
              H === mn ? void 0 : F && H[0] === mn ? [] : H,
              b
            ];
            H = z, c ? c(t, 3, k) : (
              // @ts-expect-error
              t(...k)
            );
          } finally {
            St = ae;
          }
        }
      } else
        u.run();
  };
  return l && l(B), u = new Wo(p), u.scheduler = i ? () => i(B, !1) : B, b = (O) => ki(O, !1, u), g = u.onStop = () => {
    const O = Sn.get(u);
    if (O) {
      if (c)
        c(O, 4);
      else
        for (const z of O) z();
      Sn.delete(u);
    }
  }, t ? s ? B(!0) : H = u.run() : i ? i(B.bind(null, !0), !0) : u.run(), K.pause = u.pause.bind(u), K.resume = u.resume.bind(u), K.stop = K, K;
}
function st(e, t = 1 / 0, n) {
  if (t <= 0 || !se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ he(e))
    st(e.value, t, n);
  else if (V(e))
    for (let s = 0; s < e.length; s++)
      st(e[s], t, n);
  else if (Vo(e) || Mt(e))
    e.forEach((s) => {
      st(s, t, n);
    });
  else if (Ho(e)) {
    for (const s in e)
      st(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && st(e[s], t, n);
  }
  return e;
}
function an(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Nn(o, t, n);
  }
}
function Ue(e, t, n, s) {
  if (U(e)) {
    const o = an(e, t, n, s);
    return o && Do(o) && o.catch((r) => {
      Nn(r, t, n);
    }), o;
  }
  if (V(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(Ue(e[r], t, n, s));
    return o;
  }
}
function Nn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || ie;
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
      it(), an(r, null, 10, [
        e,
        c,
        d
      ]), lt();
      return;
    }
  }
  Bi(e, n, o, s, i);
}
function Bi(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const xe = [];
let qe = -1;
const Ot = [];
let dt = null, $t = 0;
const ir = /* @__PURE__ */ Promise.resolve();
let Tn = null;
function Ki(e) {
  const t = Tn || ir;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Wi(e) {
  let t = qe + 1, n = xe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = xe[s], r = en(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Vs(e) {
  if (!(e.flags & 1)) {
    const t = en(e), n = xe[xe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= en(n) ? xe.push(e) : xe.splice(Wi(t), 0, e), e.flags |= 1, lr();
  }
}
function lr() {
  Tn || (Tn = ir.then(ar));
}
function Yi(e) {
  V(e) ? Ot.push(...e) : dt && e.id === -1 ? dt.splice($t + 1, 0, e) : e.flags & 1 || (Ot.push(e), e.flags |= 1), lr();
}
function zs(e, t, n = qe + 1) {
  for (; n < xe.length; n++) {
    const s = xe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      xe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function cr(e) {
  if (Ot.length) {
    const t = [...new Set(Ot)].sort(
      (n, s) => en(n) - en(s)
    );
    if (Ot.length = 0, dt) {
      dt.push(...t);
      return;
    }
    for (dt = t, $t = 0; $t < dt.length; $t++) {
      const n = dt[$t];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    dt = null, $t = 0;
  }
}
const en = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ar(e) {
  try {
    for (qe = 0; qe < xe.length; qe++) {
      const t = xe[qe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), an(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; qe < xe.length; qe++) {
      const t = xe[qe];
      t && (t.flags &= -2);
    }
    qe = -1, xe.length = 0, cr(), Tn = null, (xe.length || Ot.length) && ar();
  }
}
let be = null, ur = null;
function En(e) {
  const t = be;
  return be = e, ur = e && e.type.__scopeId || null, t;
}
function Pe(e, t = be, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Pn(-1);
    const r = En(t);
    let i;
    try {
      i = e(...o);
    } finally {
      En(r), s._d && Pn(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function ot(e, t) {
  if (be === null)
    return e;
  const n = Kn(be), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, l, c = ie] = t[o];
    r && (U(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && st(i), s.push({
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
function yt(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    r && (l.oldValue = r[i].value);
    let c = l.dir[s];
    c && (it(), Ue(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), lt());
  }
}
function qi(e, t) {
  if (Ce) {
    let n = Ce.provides;
    const s = Ce.parent && Ce.parent.provides;
    s === n && (n = Ce.provides = Object.create(s)), n[e] = t;
  }
}
function bn(e, t, n = !1) {
  const s = Br();
  if (s || Lt) {
    let o = Lt ? Lt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && U(t) ? t.call(s && s.proxy) : t;
  }
}
const Xi = /* @__PURE__ */ Symbol.for("v-scx"), Gi = () => bn(Xi);
function wn(e, t, n) {
  return fr(e, t, n);
}
function fr(e, t, n = ie) {
  const { immediate: s, deep: o, flush: r, once: i } = n, l = ge({}, n), c = t && s || !t && r !== "post";
  let d;
  if (on) {
    if (r === "sync") {
      const b = Gi();
      d = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!c) {
      const b = () => {
      };
      return b.stop = ze, b.resume = ze, b.pause = ze, b;
    }
  }
  const u = Ce;
  l.call = (b, M, F) => Ue(b, u, M, F);
  let p = !1;
  r === "post" ? l.scheduler = (b) => {
    Ae(b, u && u.suspense);
  } : r !== "sync" && (p = !0, l.scheduler = (b, M) => {
    M ? b() : Vs(b);
  }), l.augmentJob = (b) => {
    t && (b.flags |= 4), p && (b.flags |= 2, u && (b.id = u.uid, b.i = u));
  };
  const g = ji(e, t, l);
  return on && (d ? d.push(g) : c && g()), g;
}
function zi(e, t, n) {
  const s = this.proxy, o = de(e) ? e.includes(".") ? dr(s, e) : () => s[e] : e.bind(s, s);
  let r;
  U(t) ? r = t : (r = t.handler, n = t);
  const i = fn(this), l = fr(o, r.bind(s), n);
  return i(), l;
}
function dr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Ji = /* @__PURE__ */ Symbol("_vte"), pr = (e) => e.__isTeleport, Xe = /* @__PURE__ */ Symbol("_leaveCb"), kt = /* @__PURE__ */ Symbol("_enterCb");
function Zi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return un(() => {
    e.isMounted = !0;
  }), wr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Oe = [Function, Array], hr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Oe,
  onEnter: Oe,
  onAfterEnter: Oe,
  onEnterCancelled: Oe,
  // leave
  onBeforeLeave: Oe,
  onLeave: Oe,
  onAfterLeave: Oe,
  onLeaveCancelled: Oe,
  // appear
  onBeforeAppear: Oe,
  onAppear: Oe,
  onAfterAppear: Oe,
  onAppearCancelled: Oe
}, gr = (e) => {
  const t = e.subTree;
  return t.component ? gr(t.component) : t;
}, Qi = {
  name: "BaseTransition",
  props: hr,
  setup(e, { slots: t }) {
    const n = Br(), s = Zi();
    return () => {
      const o = t.default && _r(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = mr(o), i = /* @__PURE__ */ J(e), { mode: l } = i;
      if (s.isLeaving)
        return Jn(r);
      const c = Js(r);
      if (!c)
        return Jn(r);
      let d = fs(
        c,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (p) => d = p
      );
      c.type !== ye && tn(c, d);
      let u = n.subTree && Js(n.subTree);
      if (u && u.type !== ye && !Tt(u, c) && gr(n).type !== ye) {
        let p = fs(
          u,
          i,
          s,
          n
        );
        if (tn(u, p), l === "out-in" && c.type !== ye)
          return s.isLeaving = !0, p.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete p.afterLeave, u = void 0;
          }, Jn(r);
        l === "in-out" && c.type !== ye ? p.delayLeave = (g, b, M) => {
          const F = vr(
            s,
            u
          );
          F[String(u.key)] = u, g[Xe] = () => {
            b(), g[Xe] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            M(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function mr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ye) {
        t = n;
        break;
      }
  }
  return t;
}
const el = Qi;
function vr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function fs(e, t, n, s, o) {
  const {
    appear: r,
    mode: i,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: p,
    onBeforeLeave: g,
    onLeave: b,
    onAfterLeave: M,
    onLeaveCancelled: F,
    onBeforeAppear: G,
    onAppear: K,
    onAfterAppear: H,
    onAppearCancelled: B
  } = t, O = String(e.key), z = vr(n, e), ae = (P, j) => {
    P && Ue(
      P,
      s,
      9,
      j
    );
  }, k = (P, j) => {
    const W = j[1];
    ae(P, j), V(P) ? P.every((C) => C.length <= 1) && W() : P.length <= 1 && W();
  }, D = {
    mode: i,
    persisted: l,
    beforeEnter(P) {
      let j = c;
      if (!n.isMounted)
        if (r)
          j = G || c;
        else
          return;
      P[Xe] && P[Xe](
        !0
        /* cancelled */
      );
      const W = z[O];
      W && Tt(e, W) && W.el[Xe] && W.el[Xe](), ae(j, [P]);
    },
    enter(P) {
      let j = d, W = u, C = p;
      if (!n.isMounted)
        if (r)
          j = K || d, W = H || u, C = B || p;
        else
          return;
      let q = !1;
      P[kt] = (Se) => {
        q || (q = !0, Se ? ae(C, [P]) : ae(W, [P]), D.delayedLeave && D.delayedLeave(), P[kt] = void 0);
      };
      const ue = P[kt].bind(null, !1);
      j ? k(j, [P, ue]) : ue();
    },
    leave(P, j) {
      const W = String(e.key);
      if (P[kt] && P[kt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return j();
      ae(g, [P]);
      let C = !1;
      P[Xe] = (ue) => {
        C || (C = !0, j(), ue ? ae(F, [P]) : ae(M, [P]), P[Xe] = void 0, z[W] === e && delete z[W]);
      };
      const q = P[Xe].bind(null, !1);
      z[W] = e, b ? k(b, [P, q]) : q();
    },
    clone(P) {
      const j = fs(
        P,
        t,
        n,
        s,
        o
      );
      return o && o(j), j;
    }
  };
  return D;
}
function Jn(e) {
  if (Hn(e))
    return e = mt(e), e.children = null, e;
}
function Js(e) {
  if (!Hn(e))
    return pr(e.type) && e.children ? mr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && U(n.default))
      return n.default();
  }
}
function tn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, tn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function _r(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === _e ? (i.patchFlag & 128 && o++, s = s.concat(
      _r(i.children, t, l)
    )) : (t || i.type !== ye) && s.push(l != null ? mt(i, { key: l }) : i);
  }
  if (o > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function ke(e, t) {
  return U(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ge({ name: e.name }, t, { setup: e })
  ) : e;
}
function yr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Zs(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const An = /* @__PURE__ */ new WeakMap();
function Gt(e, t, n, s, o = !1) {
  if (V(e)) {
    e.forEach(
      (F, G) => Gt(
        F,
        t && (V(t) ? t[G] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (Rt(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Gt(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? Kn(s.component) : s.el, i = o ? null : r, { i: l, r: c } = e, d = t && t.r, u = l.refs === ie ? l.refs = {} : l.refs, p = l.setupState, g = /* @__PURE__ */ J(p), b = p === ie ? Lo : (F) => Zs(u, F) ? !1 : Q(g, F), M = (F, G) => !(G && Zs(u, G));
  if (d != null && d !== c) {
    if (Qs(t), de(d))
      u[d] = null, b(d) && (p[d] = null);
    else if (/* @__PURE__ */ he(d)) {
      const F = t;
      M(d, F.k) && (d.value = null), F.k && (u[F.k] = null);
    }
  }
  if (U(c))
    an(c, l, 12, [i, u]);
  else {
    const F = de(c), G = /* @__PURE__ */ he(c);
    if (F || G) {
      const K = () => {
        if (e.f) {
          const H = F ? b(c) ? p[c] : u[c] : M() || !e.k ? c.value : u[e.k];
          if (o)
            V(H) && Ss(H, r);
          else if (V(H))
            H.includes(r) || H.push(r);
          else if (F)
            u[c] = [r], b(c) && (p[c] = u[c]);
          else {
            const B = [r];
            M(c, e.k) && (c.value = B), e.k && (u[e.k] = B);
          }
        } else F ? (u[c] = i, b(c) && (p[c] = i)) : G && (M(c, e.k) && (c.value = i), e.k && (u[e.k] = i));
      };
      if (i) {
        const H = () => {
          K(), An.delete(e);
        };
        H.id = -1, An.set(e, H), Ae(H, n);
      } else
        Qs(e), K();
    }
  }
}
function Qs(e) {
  const t = An.get(e);
  t && (t.flags |= 8, An.delete(e));
}
Ln().requestIdleCallback;
Ln().cancelIdleCallback;
const Rt = (e) => !!e.type.__asyncLoader, Hn = (e) => e.type.__isKeepAlive;
function tl(e, t) {
  br(e, "a", t);
}
function nl(e, t) {
  br(e, "da", t);
}
function br(e, t, n = Ce) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Un(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Hn(o.parent.vnode) && sl(s, t, n, o), o = o.parent;
  }
}
function sl(e, t, n, s) {
  const o = Un(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  kn(() => {
    Ss(s[t], o);
  }, n);
}
function Un(e, t, n = Ce, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      it();
      const l = fn(n), c = Ue(t, n, e, i);
      return l(), lt(), c;
    });
    return s ? o.unshift(r) : o.push(r), r;
  }
}
const at = (e) => (t, n = Ce) => {
  (!on || e === "sp") && Un(e, (...s) => t(...s), n);
}, ol = at("bm"), un = at("m"), rl = at(
  "bu"
), il = at("u"), wr = at(
  "bum"
), kn = at("um"), ll = at(
  "sp"
), cl = at("rtg"), al = at("rtc");
function ul(e, t = Ce) {
  Un("ec", e, t);
}
const fl = /* @__PURE__ */ Symbol.for("v-ndc");
function eo(e, t, n, s) {
  let o;
  const r = n, i = V(e);
  if (i || de(e)) {
    const l = i && /* @__PURE__ */ At(e);
    let c = !1, d = !1;
    l && (c = !/* @__PURE__ */ Le(e), d = /* @__PURE__ */ ct(e), e = Vn(e)), o = new Array(e.length);
    for (let u = 0, p = e.length; u < p; u++)
      o[u] = t(
        c ? d ? Vt(He(e[u])) : He(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, r);
  } else if (se(e))
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
function In(e, t, n = {}, s, o) {
  if (be.ce || be.parent && Rt(be.parent) && be.parent.ce) {
    const d = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), ne(), Je(
      _e,
      null,
      [ee("slot", n, s)],
      d ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), ne();
  const i = r && xr(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, c = Je(
    _e,
    {
      key: (l && !Ne(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), c;
}
function xr(e) {
  return e.some((t) => sn(t) ? !(t.type === ye || t.type === _e && !xr(t.children)) : !0) ? e : null;
}
function dl(e, t) {
  const n = {};
  for (const s in e)
    n[/[A-Z]/.test(s) ? `on:${s}` : _n(s)] = e[s];
  return n;
}
const ds = (e) => e ? Kr(e) ? Kn(e) : ds(e.parent) : null, zt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ge(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ds(e.parent),
    $root: (e) => ds(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Sr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Vs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ki.bind(e.proxy)),
    $watch: (e) => zi.bind(e)
  })
), Zn = (e, t) => e !== ie && !e.__isScriptSetup && Q(e, t), pl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const g = i[t];
      if (g !== void 0)
        switch (g) {
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
        if (Zn(s, t))
          return i[t] = 1, s[t];
        if (o !== ie && Q(o, t))
          return i[t] = 2, o[t];
        if (Q(r, t))
          return i[t] = 3, r[t];
        if (n !== ie && Q(n, t))
          return i[t] = 4, n[t];
        ps && (i[t] = 0);
      }
    }
    const d = zt[t];
    let u, p;
    if (d)
      return t === "$attrs" && ve(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== ie && Q(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = c.config.globalProperties, Q(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return Zn(o, t) ? (o[t] = n, !0) : s !== ie && Q(s, t) ? (s[t] = n, !0) : Q(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: r, type: i }
  }, l) {
    let c;
    return !!(n[l] || e !== ie && l[0] !== "$" && Q(e, l) || Zn(t, l) || Q(r, l) || Q(s, l) || Q(zt, l) || Q(o.config.globalProperties, l) || (c = i.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function to(e) {
  return V(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ps = !0;
function hl(e) {
  const t = Sr(e), n = e.proxy, s = e.ctx;
  ps = !1, t.beforeCreate && no(t.beforeCreate, e, "bc");
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
    mounted: g,
    beforeUpdate: b,
    updated: M,
    activated: F,
    deactivated: G,
    beforeDestroy: K,
    beforeUnmount: H,
    destroyed: B,
    unmounted: O,
    render: z,
    renderTracked: ae,
    renderTriggered: k,
    errorCaptured: D,
    serverPrefetch: P,
    // public API
    expose: j,
    inheritAttrs: W,
    // assets
    components: C,
    directives: q,
    filters: ue
  } = t;
  if (d && gl(d, s, null), i)
    for (const X in i) {
      const oe = i[X];
      U(oe) && (s[X] = oe.bind(n));
    }
  if (o) {
    const X = o.call(n, n);
    se(X) && (e.data = /* @__PURE__ */ Dn(X));
  }
  if (ps = !0, r)
    for (const X in r) {
      const oe = r[X], S = U(oe) ? oe.bind(n, n) : U(oe.get) ? oe.get.bind(n, n) : ze, v = !U(oe) && U(oe.set) ? oe.set.bind(n) : ze, I = rn({
        get: S,
        set: v
      });
      Object.defineProperty(s, X, {
        enumerable: !0,
        configurable: !0,
        get: () => I.value,
        set: (fe) => I.value = fe
      });
    }
  if (l)
    for (const X in l)
      Cr(l[X], s, n, X);
  if (c) {
    const X = U(c) ? c.call(n) : c;
    Reflect.ownKeys(X).forEach((oe) => {
      qi(oe, X[oe]);
    });
  }
  u && no(u, e, "c");
  function Z(X, oe) {
    V(oe) ? oe.forEach((S) => X(S.bind(n))) : oe && X(oe.bind(n));
  }
  if (Z(ol, p), Z(un, g), Z(rl, b), Z(il, M), Z(tl, F), Z(nl, G), Z(ul, D), Z(al, ae), Z(cl, k), Z(wr, H), Z(kn, O), Z(ll, P), V(j))
    if (j.length) {
      const X = e.exposed || (e.exposed = {});
      j.forEach((oe) => {
        Object.defineProperty(X, oe, {
          get: () => n[oe],
          set: (S) => n[oe] = S,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  z && e.render === ze && (e.render = z), W != null && (e.inheritAttrs = W), C && (e.components = C), q && (e.directives = q), P && yr(e);
}
function gl(e, t, n = ze) {
  V(e) && (e = hs(e));
  for (const s in e) {
    const o = e[s];
    let r;
    se(o) ? "default" in o ? r = bn(
      o.from || s,
      o.default,
      !0
    ) : r = bn(o.from || s) : r = bn(o), /* @__PURE__ */ he(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r;
  }
}
function no(e, t, n) {
  Ue(
    V(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Cr(e, t, n, s) {
  let o = s.includes(".") ? dr(n, s) : () => n[s];
  if (de(e)) {
    const r = t[e];
    U(r) && wn(o, r);
  } else if (U(e))
    wn(o, e.bind(n));
  else if (se(e))
    if (V(e))
      e.forEach((r) => Cr(r, t, n, s));
    else {
      const r = U(e.handler) ? e.handler.bind(n) : t[e.handler];
      U(r) && wn(o, r, e);
    }
}
function Sr(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !o.length && !n && !s ? c = t : (c = {}, o.length && o.forEach(
    (d) => $n(c, d, i, !0)
  ), $n(c, t, i)), se(t) && r.set(t, c), c;
}
function $n(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && $n(e, r, n, !0), o && o.forEach(
    (i) => $n(e, i, n, !0)
  );
  for (const i in t)
    if (!(s && i === "expose")) {
      const l = ml[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const ml = {
  data: so,
  props: oo,
  emits: oo,
  // objects
  methods: Wt,
  computed: Wt,
  // lifecycle
  beforeCreate: we,
  created: we,
  beforeMount: we,
  mounted: we,
  beforeUpdate: we,
  updated: we,
  beforeDestroy: we,
  beforeUnmount: we,
  destroyed: we,
  unmounted: we,
  activated: we,
  deactivated: we,
  errorCaptured: we,
  serverPrefetch: we,
  // assets
  components: Wt,
  directives: Wt,
  // watch
  watch: _l,
  // provide / inject
  provide: so,
  inject: vl
};
function so(e, t) {
  return t ? e ? function() {
    return ge(
      U(e) ? e.call(this, this) : e,
      U(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function vl(e, t) {
  return Wt(hs(e), hs(t));
}
function hs(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function we(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Wt(e, t) {
  return e ? ge(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function oo(e, t) {
  return e ? V(e) && V(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ge(
    /* @__PURE__ */ Object.create(null),
    to(e),
    to(t ?? {})
  ) : t;
}
function _l(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ge(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = we(e[s], t[s]);
  return n;
}
function Tr() {
  return {
    app: null,
    config: {
      isNativeTag: Lo,
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
let yl = 0;
function bl(e, t) {
  return function(s, o = null) {
    U(s) || (s = ge({}, s)), o != null && !se(o) && (o = null);
    const r = Tr(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const d = r.app = {
      _uid: yl++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Zl,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...p) {
        return i.has(u) || (u && U(u.install) ? (i.add(u), u.install(d, ...p)) : U(u) && (i.add(u), u(d, ...p))), d;
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
      mount(u, p, g) {
        if (!c) {
          const b = d._ceVNode || ee(s, o);
          return b.appContext = r, g === !0 ? g = "svg" : g === !1 && (g = void 0), e(b, u, g), c = !0, d._container = u, u.__vue_app__ = d, Kn(b.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        c && (Ue(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, p) {
        return r.provides[u] = p, d;
      },
      runWithContext(u) {
        const p = Lt;
        Lt = d;
        try {
          return u();
        } finally {
          Lt = p;
        }
      }
    };
    return d;
  };
}
let Lt = null;
const wl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${gt(t)}Modifiers`] || e[`${_t(t)}Modifiers`];
function xl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ie;
  let o = n;
  const r = t.startsWith("update:"), i = r && wl(s, t.slice(7));
  i && (i.trim && (o = n.map((u) => de(u) ? u.trim() : u)), i.number && (o = n.map(Es)));
  let l, c = s[l = _n(t)] || // also try camelCase event handler (#2249)
  s[l = _n(gt(t))];
  !c && r && (c = s[l = _n(_t(t))]), c && Ue(
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
    e.emitted[l] = !0, Ue(
      d,
      e,
      6,
      o
    );
  }
}
const Cl = /* @__PURE__ */ new WeakMap();
function Er(e, t, n = !1) {
  const s = n ? Cl : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, l = !1;
  if (!U(e)) {
    const c = (d) => {
      const u = Er(d, t, !0);
      u && (l = !0, ge(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (se(e) && s.set(e, null), null) : (V(r) ? r.forEach((c) => i[c] = null) : ge(i, r), se(e) && s.set(e, i), i);
}
function jn(e, t) {
  return !e || !On(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Q(e, t[0].toLowerCase() + t.slice(1)) || Q(e, _t(t)) || Q(e, t));
}
function ro(e) {
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
    data: g,
    setupState: b,
    ctx: M,
    inheritAttrs: F
  } = e, G = En(e);
  let K, H;
  try {
    if (n.shapeFlag & 4) {
      const O = o || s, z = O;
      K = Ge(
        d.call(
          z,
          O,
          u,
          p,
          b,
          g,
          M
        )
      ), H = l;
    } else {
      const O = t;
      K = Ge(
        O.length > 1 ? O(
          p,
          { attrs: l, slots: i, emit: c }
        ) : O(
          p,
          null
        )
      ), H = t.props ? l : Sl(l);
    }
  } catch (O) {
    Jt.length = 0, Nn(O, e, 1), K = ee(ye);
  }
  let B = K;
  if (H && F !== !1) {
    const O = Object.keys(H), { shapeFlag: z } = B;
    O.length && z & 7 && (r && O.some(Cs) && (H = Tl(
      H,
      r
    )), B = mt(B, H, !1, !0));
  }
  return n.dirs && (B = mt(B, null, !1, !0), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition && tn(B, n.transition), K = B, En(G), K;
}
const Sl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || On(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Tl = (e, t) => {
  const n = {};
  for (const s in e)
    (!Cs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function El(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: l, patchFlag: c } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? io(s, i, d) : !!i;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        const g = u[p];
        if (Ar(i, s, g) && !jn(d, g))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? io(s, i, d) : !0 : !!i;
  return !1;
}
function io(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (Ar(t, e, r) && !jn(n, r))
      return !0;
  }
  return !1;
}
function Ar(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && se(s) && se(o) ? !Is(s, o) : s !== o;
}
function Al({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Ir = {}, $r = () => Object.create(Ir), Pr = (e) => Object.getPrototypeOf(e) === Ir;
function Il(e, t, n, s = !1) {
  const o = {}, r = $r();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Fr(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ Ri(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function $l(e, t, n, s) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = /* @__PURE__ */ J(o), [c] = e.propsOptions;
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
        let g = u[p];
        if (jn(e.emitsOptions, g))
          continue;
        const b = t[g];
        if (c)
          if (Q(r, g))
            b !== r[g] && (r[g] = b, d = !0);
          else {
            const M = gt(g);
            o[M] = gs(
              c,
              l,
              M,
              b,
              e,
              !1
            );
          }
        else
          b !== r[g] && (r[g] = b, d = !0);
      }
    }
  } else {
    Fr(e, t, o, r) && (d = !0);
    let u;
    for (const p in l)
      (!t || // for camelCase
      !Q(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = _t(p)) === p || !Q(t, u))) && (c ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[p] = gs(
        c,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete o[p]);
    if (r !== l)
      for (const p in r)
        (!t || !Q(t, p)) && (delete r[p], d = !0);
  }
  d && nt(e.attrs, "set", "");
}
function Fr(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let c in t) {
      if (Yt(c))
        continue;
      const d = t[c];
      let u;
      o && Q(o, u = gt(c)) ? !r || !r.includes(u) ? n[u] = d : (l || (l = {}))[u] = d : jn(e.emitsOptions, c) || (!(c in s) || d !== s[c]) && (s[c] = d, i = !0);
    }
  if (r) {
    const c = /* @__PURE__ */ J(n), d = l || ie;
    for (let u = 0; u < r.length; u++) {
      const p = r[u];
      n[p] = gs(
        o,
        c,
        p,
        d[p],
        e,
        !Q(d, p)
      );
    }
  }
  return i;
}
function gs(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const l = Q(i, "default");
    if (l && s === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && U(c)) {
        const { propsDefaults: d } = o;
        if (n in d)
          s = d[n];
        else {
          const u = fn(o);
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
    ] && (s === "" || s === _t(n)) && (s = !0));
  }
  return s;
}
const Pl = /* @__PURE__ */ new WeakMap();
function Mr(e, t, n = !1) {
  const s = n ? Pl : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, l = [];
  let c = !1;
  if (!U(e)) {
    const u = (p) => {
      c = !0;
      const [g, b] = Mr(p, t, !0);
      ge(i, g), b && l.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return se(e) && s.set(e, Ft), Ft;
  if (V(r))
    for (let u = 0; u < r.length; u++) {
      const p = gt(r[u]);
      lo(p) && (i[p] = ie);
    }
  else if (r)
    for (const u in r) {
      const p = gt(u);
      if (lo(p)) {
        const g = r[u], b = i[p] = V(g) || U(g) ? { type: g } : ge({}, g), M = b.type;
        let F = !1, G = !0;
        if (V(M))
          for (let K = 0; K < M.length; ++K) {
            const H = M[K], B = U(H) && H.name;
            if (B === "Boolean") {
              F = !0;
              break;
            } else B === "String" && (G = !1);
          }
        else
          F = U(M) && M.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = F, b[
          1
          /* shouldCastTrue */
        ] = G, (F || Q(b, "default")) && l.push(p);
      }
    }
  const d = [i, l];
  return se(e) && s.set(e, d), d;
}
function lo(e) {
  return e[0] !== "$" && !Yt(e);
}
const Ds = (e) => e === "_" || e === "_ctx" || e === "$stable", Ns = (e) => V(e) ? e.map(Ge) : [Ge(e)], Fl = (e, t, n) => {
  if (t._n)
    return t;
  const s = Pe((...o) => Ns(t(...o)), n);
  return s._c = !1, s;
}, Or = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Ds(o)) continue;
    const r = e[o];
    if (U(r))
      t[o] = Fl(o, r, s);
    else if (r != null) {
      const i = Ns(r);
      t[o] = () => i;
    }
  }
}, Rr = (e, t) => {
  const n = Ns(t);
  e.slots.default = () => n;
}, Lr = (e, t, n) => {
  for (const s in t)
    (n || !Ds(s)) && (e[s] = t[s]);
}, Ml = (e, t, n) => {
  const s = e.slots = $r();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Lr(s, t, n), n && ko(s, "_", o, !0)) : Or(t, s);
  } else t && Rr(e, t);
}, Ol = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = ie;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : Lr(o, t, n) : (r = !t.$stable, Or(t, o)), i = t;
  } else t && (Rr(e, t), i = { default: 1 });
  if (r)
    for (const l in o)
      !Ds(l) && i[l] == null && delete o[l];
}, Ae = Nl;
function Rl(e) {
  return Ll(e);
}
function Ll(e, t) {
  const n = Ln();
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
    nextSibling: g,
    setScopeId: b = ze,
    insertStaticContent: M
  } = e, F = (a, f, h, w = null, m = null, _ = null, E = void 0, T = null, x = !!f.dynamicChildren) => {
    if (a === f)
      return;
    a && !Tt(a, f) && (w = pn(a), fe(a, m, _, !0), a = null), f.patchFlag === -2 && (x = !1, f.dynamicChildren = null);
    const { type: y, ref: L, shapeFlag: $ } = f;
    switch (y) {
      case Bn:
        G(a, f, h, w);
        break;
      case ye:
        K(a, f, h, w);
        break;
      case es:
        a == null && H(f, h, w, E);
        break;
      case _e:
        C(
          a,
          f,
          h,
          w,
          m,
          _,
          E,
          T,
          x
        );
        break;
      default:
        $ & 1 ? z(
          a,
          f,
          h,
          w,
          m,
          _,
          E,
          T,
          x
        ) : $ & 6 ? q(
          a,
          f,
          h,
          w,
          m,
          _,
          E,
          T,
          x
        ) : ($ & 64 || $ & 128) && y.process(
          a,
          f,
          h,
          w,
          m,
          _,
          E,
          T,
          x,
          Nt
        );
    }
    L != null && m ? Gt(L, a && a.ref, _, f || a, !f) : L == null && a && a.ref != null && Gt(a.ref, null, _, a, !0);
  }, G = (a, f, h, w) => {
    if (a == null)
      s(
        f.el = l(f.children),
        h,
        w
      );
    else {
      const m = f.el = a.el;
      f.children !== a.children && d(m, f.children);
    }
  }, K = (a, f, h, w) => {
    a == null ? s(
      f.el = c(f.children || ""),
      h,
      w
    ) : f.el = a.el;
  }, H = (a, f, h, w) => {
    [a.el, a.anchor] = M(
      a.children,
      f,
      h,
      w,
      a.el,
      a.anchor
    );
  }, B = ({ el: a, anchor: f }, h, w) => {
    let m;
    for (; a && a !== f; )
      m = g(a), s(a, h, w), a = m;
    s(f, h, w);
  }, O = ({ el: a, anchor: f }) => {
    let h;
    for (; a && a !== f; )
      h = g(a), o(a), a = h;
    o(f);
  }, z = (a, f, h, w, m, _, E, T, x) => {
    if (f.type === "svg" ? E = "svg" : f.type === "math" && (E = "mathml"), a == null)
      ae(
        f,
        h,
        w,
        m,
        _,
        E,
        T,
        x
      );
    else {
      const y = a.el && a.el._isVueCE ? a.el : null;
      try {
        y && y._beginPatch(), P(
          a,
          f,
          m,
          _,
          E,
          T,
          x
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, ae = (a, f, h, w, m, _, E, T) => {
    let x, y;
    const { props: L, shapeFlag: $, transition: R, dirs: N } = a;
    if (x = a.el = i(
      a.type,
      _,
      L && L.is,
      L
    ), $ & 8 ? u(x, a.children) : $ & 16 && D(
      a.children,
      x,
      null,
      w,
      m,
      Qn(a, _),
      E,
      T
    ), N && yt(a, null, w, "created"), k(x, a, a.scopeId, E, w), L) {
      for (const le in L)
        le !== "value" && !Yt(le) && r(x, le, null, L[le], _, w);
      "value" in L && r(x, "value", null, L.value, _), (y = L.onVnodeBeforeMount) && Ye(y, w, a);
    }
    N && yt(a, null, w, "beforeMount");
    const Y = Vl(m, R);
    Y && R.beforeEnter(x), s(x, f, h), ((y = L && L.onVnodeMounted) || Y || N) && Ae(() => {
      y && Ye(y, w, a), Y && R.enter(x), N && yt(a, null, w, "mounted");
    }, m);
  }, k = (a, f, h, w, m) => {
    if (h && b(a, h), w)
      for (let _ = 0; _ < w.length; _++)
        b(a, w[_]);
    if (m) {
      let _ = m.subTree;
      if (f === _ || Hr(_.type) && (_.ssContent === f || _.ssFallback === f)) {
        const E = m.vnode;
        k(
          a,
          E,
          E.scopeId,
          E.slotScopeIds,
          m.parent
        );
      }
    }
  }, D = (a, f, h, w, m, _, E, T, x = 0) => {
    for (let y = x; y < a.length; y++) {
      const L = a[y] = T ? tt(a[y]) : Ge(a[y]);
      F(
        null,
        L,
        f,
        h,
        w,
        m,
        _,
        E,
        T
      );
    }
  }, P = (a, f, h, w, m, _, E) => {
    const T = f.el = a.el;
    let { patchFlag: x, dynamicChildren: y, dirs: L } = f;
    x |= a.patchFlag & 16;
    const $ = a.props || ie, R = f.props || ie;
    let N;
    if (h && bt(h, !1), (N = R.onVnodeBeforeUpdate) && Ye(N, h, f, a), L && yt(f, a, h, "beforeUpdate"), h && bt(h, !0), ($.innerHTML && R.innerHTML == null || $.textContent && R.textContent == null) && u(T, ""), y ? j(
      a.dynamicChildren,
      y,
      T,
      h,
      w,
      Qn(f, m),
      _
    ) : E || oe(
      a,
      f,
      T,
      null,
      h,
      w,
      Qn(f, m),
      _,
      !1
    ), x > 0) {
      if (x & 16)
        W(T, $, R, h, m);
      else if (x & 2 && $.class !== R.class && r(T, "class", null, R.class, m), x & 4 && r(T, "style", $.style, R.style, m), x & 8) {
        const Y = f.dynamicProps;
        for (let le = 0; le < Y.length; le++) {
          const re = Y[le], Te = $[re], Ee = R[re];
          (Ee !== Te || re === "value") && r(T, re, Te, Ee, m, h);
        }
      }
      x & 1 && a.children !== f.children && u(T, f.children);
    } else !E && y == null && W(T, $, R, h, m);
    ((N = R.onVnodeUpdated) || L) && Ae(() => {
      N && Ye(N, h, f, a), L && yt(f, a, h, "updated");
    }, w);
  }, j = (a, f, h, w, m, _, E) => {
    for (let T = 0; T < f.length; T++) {
      const x = a[T], y = f[T], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === _e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Tt(x, y) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 198) ? p(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      F(
        x,
        y,
        L,
        null,
        w,
        m,
        _,
        E,
        !0
      );
    }
  }, W = (a, f, h, w, m) => {
    if (f !== h) {
      if (f !== ie)
        for (const _ in f)
          !Yt(_) && !(_ in h) && r(
            a,
            _,
            f[_],
            null,
            m,
            w
          );
      for (const _ in h) {
        if (Yt(_)) continue;
        const E = h[_], T = f[_];
        E !== T && _ !== "value" && r(a, _, T, E, m, w);
      }
      "value" in h && r(a, "value", f.value, h.value, m);
    }
  }, C = (a, f, h, w, m, _, E, T, x) => {
    const y = f.el = a ? a.el : l(""), L = f.anchor = a ? a.anchor : l("");
    let { patchFlag: $, dynamicChildren: R, slotScopeIds: N } = f;
    N && (T = T ? T.concat(N) : N), a == null ? (s(y, h, w), s(L, h, w), D(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      h,
      L,
      m,
      _,
      E,
      T,
      x
    )) : $ > 0 && $ & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === R.length ? (j(
      a.dynamicChildren,
      R,
      h,
      m,
      _,
      E,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || m && f === m.subTree) && Vr(
      a,
      f,
      !0
      /* shallow */
    )) : oe(
      a,
      f,
      h,
      L,
      m,
      _,
      E,
      T,
      x
    );
  }, q = (a, f, h, w, m, _, E, T, x) => {
    f.slotScopeIds = T, a == null ? f.shapeFlag & 512 ? m.ctx.activate(
      f,
      h,
      w,
      E,
      x
    ) : ue(
      f,
      h,
      w,
      m,
      _,
      E,
      x
    ) : Se(a, f, x);
  }, ue = (a, f, h, w, m, _, E) => {
    const T = a.component = Wl(
      a,
      w,
      m
    );
    if (Hn(a) && (T.ctx.renderer = Nt), Yl(T, !1, E), T.asyncDep) {
      if (m && m.registerDep(T, Z, E), !a.el) {
        const x = T.subTree = ee(ye);
        K(null, x, f, h), a.placeholder = x.el;
      }
    } else
      Z(
        T,
        a,
        f,
        h,
        m,
        _,
        E
      );
  }, Se = (a, f, h) => {
    const w = f.component = a.component;
    if (El(a, f, h))
      if (w.asyncDep && !w.asyncResolved) {
        X(w, f, h);
        return;
      } else
        w.next = f, w.update();
    else
      f.el = a.el, w.vnode = f;
  }, Z = (a, f, h, w, m, _, E) => {
    const T = () => {
      if (a.isMounted) {
        let { next: $, bu: R, u: N, parent: Y, vnode: le } = a;
        {
          const Ke = Dr(a);
          if (Ke) {
            $ && ($.el = le.el, X(a, $, E)), Ke.asyncDep.then(() => {
              Ae(() => {
                a.isUnmounted || y();
              }, m);
            });
            return;
          }
        }
        let re = $, Te;
        bt(a, !1), $ ? ($.el = le.el, X(a, $, E)) : $ = le, R && yn(R), (Te = $.props && $.props.onVnodeBeforeUpdate) && Ye(Te, Y, $, le), bt(a, !0);
        const Ee = ro(a), Be = a.subTree;
        a.subTree = Ee, F(
          Be,
          Ee,
          // parent may have changed if it's in a teleport
          p(Be.el),
          // anchor may have changed if it's in a fragment
          pn(Be),
          a,
          m,
          _
        ), $.el = Ee.el, re === null && Al(a, Ee.el), N && Ae(N, m), (Te = $.props && $.props.onVnodeUpdated) && Ae(
          () => Ye(Te, Y, $, le),
          m
        );
      } else {
        let $;
        const { el: R, props: N } = f, { bm: Y, m: le, parent: re, root: Te, type: Ee } = a, Be = Rt(f);
        bt(a, !1), Y && yn(Y), !Be && ($ = N && N.onVnodeBeforeMount) && Ye($, re, f), bt(a, !0);
        {
          Te.ce && Te.ce._hasShadowRoot() && Te.ce._injectChildStyle(Ee);
          const Ke = a.subTree = ro(a);
          F(
            null,
            Ke,
            h,
            w,
            a,
            m,
            _
          ), f.el = Ke.el;
        }
        if (le && Ae(le, m), !Be && ($ = N && N.onVnodeMounted)) {
          const Ke = f;
          Ae(
            () => Ye($, re, Ke),
            m
          );
        }
        (f.shapeFlag & 256 || re && Rt(re.vnode) && re.vnode.shapeFlag & 256) && a.a && Ae(a.a, m), a.isMounted = !0, f = h = w = null;
      }
    };
    a.scope.on();
    const x = a.effect = new Wo(T);
    a.scope.off();
    const y = a.update = x.run.bind(x), L = a.job = x.runIfDirty.bind(x);
    L.i = a, L.id = a.uid, x.scheduler = () => Vs(L), bt(a, !0), y();
  }, X = (a, f, h) => {
    f.component = a;
    const w = a.vnode.props;
    a.vnode = f, a.next = null, $l(a, f.props, w, h), Ol(a, f.children, h), it(), zs(a), lt();
  }, oe = (a, f, h, w, m, _, E, T, x = !1) => {
    const y = a && a.children, L = a ? a.shapeFlag : 0, $ = f.children, { patchFlag: R, shapeFlag: N } = f;
    if (R > 0) {
      if (R & 128) {
        v(
          y,
          $,
          h,
          w,
          m,
          _,
          E,
          T,
          x
        );
        return;
      } else if (R & 256) {
        S(
          y,
          $,
          h,
          w,
          m,
          _,
          E,
          T,
          x
        );
        return;
      }
    }
    N & 8 ? (L & 16 && Dt(y, m, _), $ !== y && u(h, $)) : L & 16 ? N & 16 ? v(
      y,
      $,
      h,
      w,
      m,
      _,
      E,
      T,
      x
    ) : Dt(y, m, _, !0) : (L & 8 && u(h, ""), N & 16 && D(
      $,
      h,
      w,
      m,
      _,
      E,
      T,
      x
    ));
  }, S = (a, f, h, w, m, _, E, T, x) => {
    a = a || Ft, f = f || Ft;
    const y = a.length, L = f.length, $ = Math.min(y, L);
    let R;
    for (R = 0; R < $; R++) {
      const N = f[R] = x ? tt(f[R]) : Ge(f[R]);
      F(
        a[R],
        N,
        h,
        null,
        m,
        _,
        E,
        T,
        x
      );
    }
    y > L ? Dt(
      a,
      m,
      _,
      !0,
      !1,
      $
    ) : D(
      f,
      h,
      w,
      m,
      _,
      E,
      T,
      x,
      $
    );
  }, v = (a, f, h, w, m, _, E, T, x) => {
    let y = 0;
    const L = f.length;
    let $ = a.length - 1, R = L - 1;
    for (; y <= $ && y <= R; ) {
      const N = a[y], Y = f[y] = x ? tt(f[y]) : Ge(f[y]);
      if (Tt(N, Y))
        F(
          N,
          Y,
          h,
          null,
          m,
          _,
          E,
          T,
          x
        );
      else
        break;
      y++;
    }
    for (; y <= $ && y <= R; ) {
      const N = a[$], Y = f[R] = x ? tt(f[R]) : Ge(f[R]);
      if (Tt(N, Y))
        F(
          N,
          Y,
          h,
          null,
          m,
          _,
          E,
          T,
          x
        );
      else
        break;
      $--, R--;
    }
    if (y > $) {
      if (y <= R) {
        const N = R + 1, Y = N < L ? f[N].el : w;
        for (; y <= R; )
          F(
            null,
            f[y] = x ? tt(f[y]) : Ge(f[y]),
            h,
            Y,
            m,
            _,
            E,
            T,
            x
          ), y++;
      }
    } else if (y > R)
      for (; y <= $; )
        fe(a[y], m, _, !0), y++;
    else {
      const N = y, Y = y, le = /* @__PURE__ */ new Map();
      for (y = Y; y <= R; y++) {
        const Fe = f[y] = x ? tt(f[y]) : Ge(f[y]);
        Fe.key != null && le.set(Fe.key, y);
      }
      let re, Te = 0;
      const Ee = R - Y + 1;
      let Be = !1, Ke = 0;
      const Ht = new Array(Ee);
      for (y = 0; y < Ee; y++) Ht[y] = 0;
      for (y = N; y <= $; y++) {
        const Fe = a[y];
        if (Te >= Ee) {
          fe(Fe, m, _, !0);
          continue;
        }
        let We;
        if (Fe.key != null)
          We = le.get(Fe.key);
        else
          for (re = Y; re <= R; re++)
            if (Ht[re - Y] === 0 && Tt(Fe, f[re])) {
              We = re;
              break;
            }
        We === void 0 ? fe(Fe, m, _, !0) : (Ht[We - Y] = y + 1, We >= Ke ? Ke = We : Be = !0, F(
          Fe,
          f[We],
          h,
          null,
          m,
          _,
          E,
          T,
          x
        ), Te++);
      }
      const Bs = Be ? Dl(Ht) : Ft;
      for (re = Bs.length - 1, y = Ee - 1; y >= 0; y--) {
        const Fe = Y + y, We = f[Fe], Ks = f[Fe + 1], Ws = Fe + 1 < L ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ks.el || Nr(Ks)
        ) : w;
        Ht[y] === 0 ? F(
          null,
          We,
          h,
          Ws,
          m,
          _,
          E,
          T,
          x
        ) : Be && (re < 0 || y !== Bs[re] ? I(We, h, Ws, 2) : re--);
      }
    }
  }, I = (a, f, h, w, m = null) => {
    const { el: _, type: E, transition: T, children: x, shapeFlag: y } = a;
    if (y & 6) {
      I(a.component.subTree, f, h, w);
      return;
    }
    if (y & 128) {
      a.suspense.move(f, h, w);
      return;
    }
    if (y & 64) {
      E.move(a, f, h, Nt);
      return;
    }
    if (E === _e) {
      s(_, f, h);
      for (let $ = 0; $ < x.length; $++)
        I(x[$], f, h, w);
      s(a.anchor, f, h);
      return;
    }
    if (E === es) {
      B(a, f, h);
      return;
    }
    if (w !== 2 && y & 1 && T)
      if (w === 0)
        T.beforeEnter(_), s(_, f, h), Ae(() => T.enter(_), m);
      else {
        const { leave: $, delayLeave: R, afterLeave: N } = T, Y = () => {
          a.ctx.isUnmounted ? o(_) : s(_, f, h);
        }, le = () => {
          _._isLeaving && _[Xe](
            !0
            /* cancelled */
          ), $(_, () => {
            Y(), N && N();
          });
        };
        R ? R(_, Y, le) : le();
      }
    else
      s(_, f, h);
  }, fe = (a, f, h, w = !1, m = !1) => {
    const {
      type: _,
      props: E,
      ref: T,
      children: x,
      dynamicChildren: y,
      shapeFlag: L,
      patchFlag: $,
      dirs: R,
      cacheIndex: N
    } = a;
    if ($ === -2 && (m = !1), T != null && (it(), Gt(T, null, h, a, !0), lt()), N != null && (f.renderCache[N] = void 0), L & 256) {
      f.ctx.deactivate(a);
      return;
    }
    const Y = L & 1 && R, le = !Rt(a);
    let re;
    if (le && (re = E && E.onVnodeBeforeUnmount) && Ye(re, f, a), L & 6)
      ti(a.component, h, w);
    else {
      if (L & 128) {
        a.suspense.unmount(h, w);
        return;
      }
      Y && yt(a, null, f, "beforeUnmount"), L & 64 ? a.type.remove(
        a,
        f,
        h,
        Nt,
        w
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== _e || $ > 0 && $ & 64) ? Dt(
        y,
        f,
        h,
        !1,
        !0
      ) : (_ === _e && $ & 384 || !m && L & 16) && Dt(x, f, h), w && je(a);
    }
    (le && (re = E && E.onVnodeUnmounted) || Y) && Ae(() => {
      re && Ye(re, f, a), Y && yt(a, null, f, "unmounted");
    }, h);
  }, je = (a) => {
    const { type: f, el: h, anchor: w, transition: m } = a;
    if (f === _e) {
      ei(h, w);
      return;
    }
    if (f === es) {
      O(a);
      return;
    }
    const _ = () => {
      o(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (a.shapeFlag & 1 && m && !m.persisted) {
      const { leave: E, delayLeave: T } = m, x = () => E(h, _);
      T ? T(a.el, _, x) : x();
    } else
      _();
  }, ei = (a, f) => {
    let h;
    for (; a !== f; )
      h = g(a), o(a), a = h;
    o(f);
  }, ti = (a, f, h) => {
    const { bum: w, scope: m, job: _, subTree: E, um: T, m: x, a: y } = a;
    co(x), co(y), w && yn(w), m.stop(), _ && (_.flags |= 8, fe(E, a, f, h)), T && Ae(T, f), Ae(() => {
      a.isUnmounted = !0;
    }, f);
  }, Dt = (a, f, h, w = !1, m = !1, _ = 0) => {
    for (let E = _; E < a.length; E++)
      fe(a[E], f, h, w, m);
  }, pn = (a) => {
    if (a.shapeFlag & 6)
      return pn(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const f = g(a.anchor || a.el), h = f && f[Ji];
    return h ? g(h) : f;
  };
  let Yn = !1;
  const js = (a, f, h) => {
    let w;
    a == null ? f._vnode && (fe(f._vnode, null, null, !0), w = f._vnode.component) : F(
      f._vnode || null,
      a,
      f,
      null,
      null,
      null,
      h
    ), f._vnode = a, Yn || (Yn = !0, zs(w), cr(), Yn = !1);
  }, Nt = {
    p: F,
    um: fe,
    m: I,
    r: je,
    mt: ue,
    mc: D,
    pc: oe,
    pbc: j,
    n: pn,
    o: e
  };
  return {
    render: js,
    hydrate: void 0,
    createApp: bl(js)
  };
}
function Qn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function bt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Vl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Vr(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (V(s) && V(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[r] = tt(o[r]), l.el = i.el), !n && l.patchFlag !== -2 && Vr(i, l)), l.type === Bn && (l.patchFlag === -1 && (l = o[r] = tt(l)), l.el = i.el), l.type === ye && !l.el && (l.el = i.el);
    }
}
function Dl(e) {
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
function Dr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Dr(t);
}
function co(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Nr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Nr(t.subTree) : null;
}
const Hr = (e) => e.__isSuspense;
function Nl(e, t) {
  t && t.pendingBranch ? V(e) ? t.effects.push(...e) : t.effects.push(e) : Yi(e);
}
const _e = /* @__PURE__ */ Symbol.for("v-fgt"), Bn = /* @__PURE__ */ Symbol.for("v-txt"), ye = /* @__PURE__ */ Symbol.for("v-cmt"), es = /* @__PURE__ */ Symbol.for("v-stc"), Jt = [];
let Me = null;
function ne(e = !1) {
  Jt.push(Me = e ? null : []);
}
function Hl() {
  Jt.pop(), Me = Jt[Jt.length - 1] || null;
}
let nn = 1;
function Pn(e, t = !1) {
  nn += e, e < 0 && Me && t && (Me.hasOnce = !0);
}
function Ur(e) {
  return e.dynamicChildren = nn > 0 ? Me || Ft : null, Hl(), nn > 0 && Me && Me.push(e), e;
}
function pe(e, t, n, s, o, r) {
  return Ur(
    A(
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
function Je(e, t, n, s, o) {
  return Ur(
    ee(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function sn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Tt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const kr = ({ key: e }) => e ?? null, xn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? de(e) || /* @__PURE__ */ he(e) || U(e) ? { i: be, r: e, k: t, f: !!n } : e : null);
function A(e, t = null, n = null, s = 0, o = null, r = e === _e ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && kr(t),
    ref: t && xn(t),
    scopeId: ur,
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
    ctx: be
  };
  return l ? (Hs(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= de(n) ? 8 : 16), nn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Me.push(c), c;
}
const ee = Ul;
function Ul(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === fl) && (e = ye), sn(e)) {
    const l = mt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Hs(l, n), nn > 0 && !r && Me && (l.shapeFlag & 6 ? Me[Me.indexOf(e)] = l : Me.push(l)), l.patchFlag = -2, l;
  }
  if (zl(e) && (e = e.__vccOpts), t) {
    t = kl(t);
    let { class: l, style: c } = t;
    l && !de(l) && (t.class = rt(l)), se(c) && (/* @__PURE__ */ Ls(c) && !V(c) && (c = ge({}, c)), t.style = As(c));
  }
  const i = de(e) ? 1 : Hr(e) ? 128 : pr(e) ? 64 : se(e) ? 4 : U(e) ? 2 : 0;
  return A(
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
function kl(e) {
  return e ? /* @__PURE__ */ Ls(e) || Pr(e) ? ge({}, e) : e : null;
}
function mt(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: l, transition: c } = e, d = t ? jr(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && kr(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? V(r) ? r.concat(xn(t)) : [r, xn(t)] : xn(t)
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
    ssContent: e.ssContent && mt(e.ssContent),
    ssFallback: e.ssFallback && mt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && tn(
    u,
    c.clone(u)
  ), u;
}
function jl(e = " ", t = 0) {
  return ee(Bn, null, e, t);
}
function vt(e = "", t = !1) {
  return t ? (ne(), Je(ye, null, e)) : ee(ye, null, e);
}
function Ge(e) {
  return e == null || typeof e == "boolean" ? ee(ye) : V(e) ? ee(
    _e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : sn(e) ? tt(e) : ee(Bn, null, String(e));
}
function tt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : mt(e);
}
function Hs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (V(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Hs(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Pr(t) ? t._ctx = be : o === 3 && be && (be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else U(t) ? (t = { default: t, _ctx: be }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [jl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function jr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = rt([t.class, s.class]));
      else if (o === "style")
        t.style = As([t.style, s.style]);
      else if (On(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(V(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function Ye(e, t, n, s = null) {
  Ue(e, t, 7, [
    n,
    s
  ]);
}
const Bl = Tr();
let Kl = 0;
function Wl(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Bl, r = {
    uid: Kl++,
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
    scope: new hi(
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
    propsOptions: Mr(s, o),
    emitsOptions: Er(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ie,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: ie,
    data: ie,
    props: ie,
    attrs: ie,
    slots: ie,
    refs: ie,
    setupState: ie,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = xl.bind(null, r), e.ce && e.ce(r), r;
}
let Ce = null;
const Br = () => Ce || be;
let Fn, ms;
{
  const e = Ln(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  Fn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ce = n
  ), ms = t(
    "__VUE_SSR_SETTERS__",
    (n) => on = n
  );
}
const fn = (e) => {
  const t = Ce;
  return Fn(e), e.scope.on(), () => {
    e.scope.off(), Fn(t);
  };
}, ao = () => {
  Ce && Ce.scope.off(), Fn(null);
};
function Kr(e) {
  return e.vnode.shapeFlag & 4;
}
let on = !1;
function Yl(e, t = !1, n = !1) {
  t && ms(t);
  const { props: s, children: o } = e.vnode, r = Kr(e);
  Il(e, s, r, t), Ml(e, o, n || t);
  const i = r ? ql(e, t) : void 0;
  return t && ms(!1), i;
}
function ql(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, pl);
  const { setup: s } = n;
  if (s) {
    it();
    const o = e.setupContext = s.length > 1 ? Gl(e) : null, r = fn(e), i = an(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), l = Do(i);
    if (lt(), r(), (l || e.sp) && !Rt(e) && yr(e), l) {
      if (i.then(ao, ao), t)
        return i.then((c) => {
          uo(e, c);
        }).catch((c) => {
          Nn(c, e, 0);
        });
      e.asyncDep = i;
    } else
      uo(e, i);
  } else
    Wr(e);
}
function uo(e, t, n) {
  U(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : se(t) && (e.setupState = rr(t)), Wr(e);
}
function Wr(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || ze);
  {
    const o = fn(e);
    it();
    try {
      hl(e);
    } finally {
      lt(), o();
    }
  }
}
const Xl = {
  get(e, t) {
    return ve(e, "get", ""), e[t];
  }
};
function Gl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Xl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Kn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(rr(Li(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in zt)
        return zt[n](e);
    },
    has(t, n) {
      return n in t || n in zt;
    }
  })) : e.proxy;
}
function zl(e) {
  return U(e) && "__vccOpts" in e;
}
const rn = (e, t) => /* @__PURE__ */ Ui(e, t, on);
function Jl(e, t, n) {
  try {
    Pn(-1);
    const s = arguments.length;
    return s === 2 ? se(t) && !V(t) ? sn(t) ? ee(e, null, [t]) : ee(e, t) : ee(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && sn(n) && (n = [n]), ee(e, t, n));
  } finally {
    Pn(1);
  }
}
const Zl = "3.5.28";
let vs;
const fo = typeof window < "u" && window.trustedTypes;
if (fo)
  try {
    vs = /* @__PURE__ */ fo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Yr = vs ? (e) => vs.createHTML(e) : (e) => e, Ql = "http://www.w3.org/2000/svg", ec = "http://www.w3.org/1998/Math/MathML", et = typeof document < "u" ? document : null, po = et && /* @__PURE__ */ et.createElement("template"), tc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? et.createElementNS(Ql, e) : t === "mathml" ? et.createElementNS(ec, e) : n ? et.createElement(e, { is: n }) : et.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => et.createTextNode(e),
  createComment: (e) => et.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => et.querySelector(e),
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
      po.innerHTML = Yr(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = po.content;
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
}, ut = "transition", jt = "animation", ln = /* @__PURE__ */ Symbol("_vtc"), qr = {
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
}, nc = /* @__PURE__ */ ge(
  {},
  hr,
  qr
), sc = (e) => (e.displayName = "Transition", e.props = nc, e), Xr = /* @__PURE__ */ sc(
  (e, { slots: t }) => Jl(el, oc(e), t)
), wt = (e, t = []) => {
  V(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ho = (e) => e ? V(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function oc(e) {
  const t = {};
  for (const C in e)
    C in qr || (t[C] = e[C]);
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
    leaveActiveClass: g = `${n}-leave-active`,
    leaveToClass: b = `${n}-leave-to`
  } = e, M = rc(o), F = M && M[0], G = M && M[1], {
    onBeforeEnter: K,
    onEnter: H,
    onEnterCancelled: B,
    onLeave: O,
    onLeaveCancelled: z,
    onBeforeAppear: ae = K,
    onAppear: k = H,
    onAppearCancelled: D = B
  } = t, P = (C, q, ue, Se) => {
    C._enterCancelled = Se, xt(C, q ? u : l), xt(C, q ? d : i), ue && ue();
  }, j = (C, q) => {
    C._isLeaving = !1, xt(C, p), xt(C, b), xt(C, g), q && q();
  }, W = (C) => (q, ue) => {
    const Se = C ? k : H, Z = () => P(q, C, ue);
    wt(Se, [q, Z]), go(() => {
      xt(q, C ? c : r), Qe(q, C ? u : l), ho(Se) || mo(q, s, F, Z);
    });
  };
  return ge(t, {
    onBeforeEnter(C) {
      wt(K, [C]), Qe(C, r), Qe(C, i);
    },
    onBeforeAppear(C) {
      wt(ae, [C]), Qe(C, c), Qe(C, d);
    },
    onEnter: W(!1),
    onAppear: W(!0),
    onLeave(C, q) {
      C._isLeaving = !0;
      const ue = () => j(C, q);
      Qe(C, p), C._enterCancelled ? (Qe(C, g), yo(C)) : (yo(C), Qe(C, g)), go(() => {
        C._isLeaving && (xt(C, p), Qe(C, b), ho(O) || mo(C, s, G, ue));
      }), wt(O, [C, ue]);
    },
    onEnterCancelled(C) {
      P(C, !1, void 0, !0), wt(B, [C]);
    },
    onAppearCancelled(C) {
      P(C, !0, void 0, !0), wt(D, [C]);
    },
    onLeaveCancelled(C) {
      j(C), wt(z, [C]);
    }
  });
}
function rc(e) {
  if (e == null)
    return null;
  if (se(e))
    return [ts(e.enter), ts(e.leave)];
  {
    const t = ts(e);
    return [t, t];
  }
}
function ts(e) {
  return ii(e);
}
function Qe(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[ln] || (e[ln] = /* @__PURE__ */ new Set())).add(t);
}
function xt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[ln];
  n && (n.delete(t), n.size || (e[ln] = void 0));
}
function go(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ic = 0;
function mo(e, t, n, s) {
  const o = e._endId = ++ic, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: l, propCount: c } = lc(e, t);
  if (!i)
    return s();
  const d = i + "end";
  let u = 0;
  const p = () => {
    e.removeEventListener(d, g), r();
  }, g = (b) => {
    b.target === e && ++u >= c && p();
  };
  setTimeout(() => {
    u < c && p();
  }, l + 1), e.addEventListener(d, g);
}
function lc(e, t) {
  const n = window.getComputedStyle(e), s = (M) => (n[M] || "").split(", "), o = s(`${ut}Delay`), r = s(`${ut}Duration`), i = vo(o, r), l = s(`${jt}Delay`), c = s(`${jt}Duration`), d = vo(l, c);
  let u = null, p = 0, g = 0;
  t === ut ? i > 0 && (u = ut, p = i, g = r.length) : t === jt ? d > 0 && (u = jt, p = d, g = c.length) : (p = Math.max(i, d), u = p > 0 ? i > d ? ut : jt : null, g = u ? u === ut ? r.length : c.length : 0);
  const b = u === ut && /\b(?:transform|all)(?:,|$)/.test(
    s(`${ut}Property`).toString()
  );
  return {
    type: u,
    timeout: p,
    propCount: g,
    hasTransform: b
  };
}
function vo(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => _o(n) + _o(e[s])));
}
function _o(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function yo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function cc(e, t, n) {
  const s = e[ln];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Mn = /* @__PURE__ */ Symbol("_vod"), Gr = /* @__PURE__ */ Symbol("_vsh"), ac = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Mn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Bt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Bt(e, !0), s.enter(e)) : s.leave(e, () => {
      Bt(e, !1);
    }) : Bt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Bt(e, t);
  }
};
function Bt(e, t) {
  e.style.display = t ? e[Mn] : "none", e[Gr] = !t;
}
const uc = /* @__PURE__ */ Symbol(""), fc = /(?:^|;)\s*display\s*:/;
function dc(e, t, n) {
  const s = e.style, o = de(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (de(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Cn(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Cn(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), Cn(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[uc];
      i && (n += ";" + i), s.cssText = n, r = fc.test(n);
    }
  } else t && e.removeAttribute("style");
  Mn in e && (e[Mn] = r ? s.display : "", e[Gr] && (s.display = "none"));
}
const bo = /\s*!important$/;
function Cn(e, t, n) {
  if (V(n))
    n.forEach((s) => Cn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = pc(e, t);
    bo.test(n) ? e.setProperty(
      _t(s),
      n.replace(bo, ""),
      "important"
    ) : e[s] = n;
  }
}
const wo = ["Webkit", "Moz", "ms"], ns = {};
function pc(e, t) {
  const n = ns[t];
  if (n)
    return n;
  let s = gt(t);
  if (s !== "filter" && s in e)
    return ns[t] = s;
  s = Uo(s);
  for (let o = 0; o < wo.length; o++) {
    const r = wo[o] + s;
    if (r in e)
      return ns[t] = r;
  }
  return t;
}
const xo = "http://www.w3.org/1999/xlink";
function Co(e, t, n, s, o, r = di(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(xo, t.slice(6, t.length)) : e.setAttributeNS(xo, t, n) : n == null || r && !jo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ne(n) ? String(n) : n
  );
}
function So(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Yr(n) : n);
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
    l === "boolean" ? n = jo(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(o || t);
}
function Pt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function hc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const To = /* @__PURE__ */ Symbol("_vei");
function gc(e, t, n, s, o = null) {
  const r = e[To] || (e[To] = {}), i = r[t];
  if (s && i)
    i.value = s;
  else {
    const [l, c] = mc(t);
    if (s) {
      const d = r[t] = yc(
        s,
        o
      );
      Pt(e, l, d, c);
    } else i && (hc(e, l, i, c), r[t] = void 0);
  }
}
const Eo = /(?:Once|Passive|Capture)$/;
function mc(e) {
  let t;
  if (Eo.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Eo); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : _t(e.slice(2)), t];
}
let ss = 0;
const vc = /* @__PURE__ */ Promise.resolve(), _c = () => ss || (vc.then(() => ss = 0), ss = Date.now());
function yc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Ue(
      bc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = _c(), n;
}
function bc(e, t) {
  if (V(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const Ao = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, wc = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? cc(e, s, i) : t === "style" ? dc(e, n, s) : On(t) ? Cs(t) || gc(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : xc(e, t, s, i)) ? (So(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Co(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !de(s)) ? So(e, gt(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Co(e, t, s, i));
};
function xc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ao(t) && U(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Ao(t) && de(n) ? !1 : t in e;
}
const Io = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return V(t) ? (n) => yn(t, n) : t;
};
function Cc(e) {
  e.target.composing = !0;
}
function $o(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const os = /* @__PURE__ */ Symbol("_assign");
function Po(e, t, n) {
  return t && (e = e.trim()), n && (e = Es(e)), e;
}
const pt = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[os] = Io(o);
    const r = s || o.props && o.props.type === "number";
    Pt(e, t ? "change" : "input", (i) => {
      i.target.composing || e[os](Po(e.value, n, r));
    }), (n || r) && Pt(e, "change", () => {
      e.value = Po(e.value, n, r);
    }), t || (Pt(e, "compositionstart", Cc), Pt(e, "compositionend", $o), Pt(e, "change", $o));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } }, i) {
    if (e[os] = Io(i), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? Es(e.value) : e.value, c = t ?? "";
    l !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === c) || (e.value = c));
  }
}, Sc = ["ctrl", "shift", "alt", "meta"], Tc = {
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
  exact: (e, t) => Sc.some((n) => e[`${n}Key`] && !t.includes(n))
}, Fo = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const l = Tc[t[i]];
      if (l && l(o, t)) return;
    }
    return e(o, ...r);
  }));
}, Ec = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, _s = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = ((o) => {
    if (!("key" in o))
      return;
    const r = _t(o.key);
    if (t.some(
      (i) => i === r || Ec[i] === r
    ))
      return e(o);
  }));
}, Ac = /* @__PURE__ */ ge({ patchProp: wc }, tc);
let Mo;
function Ic() {
  return Mo || (Mo = Rl(Ac));
}
const $c = ((...e) => {
  const t = Ic().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = Fc(s);
    if (!o) return;
    const r = t._component;
    !U(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, Pc(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
});
function Pc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Fc(e) {
  return de(e) ? document.querySelector(e) : e;
}
const ys = /* @__PURE__ */ te(!1), Mc = /* @__PURE__ */ te(!1), bs = /* @__PURE__ */ te(!0), zr = /* @__PURE__ */ te(0.7), Jr = /* @__PURE__ */ te(1), Zr = /* @__PURE__ */ te(0);
function Oc() {
  ys.value = !ys.value;
}
function Rc() {
  bs.value = !bs.value;
}
function Lc() {
  zr.value = 0.7, Jr.value = 1, Zr.value = 0;
}
function Us() {
  return {
    opacity: zr,
    scale: Jr,
    rotation: Zr,
    isAttached: Mc,
    showControls: ys,
    overlayVisible: bs,
    resetControls: Lc,
    toggleShowControls: Oc,
    toggleOverlayVisible: Rc
  };
}
const Vc = { class: "ito-settings-menu" }, Dc = {
  key: 0,
  class: "ito-settings-panel"
}, Nc = { class: "ito-settings-header" }, Hc = { class: "ito-settings-tabs" }, Uc = {
  key: 0,
  class: "ito-settings-content"
}, kc = { class: "ito-color-field" }, jc = { class: "ito-color-input-wrapper" }, Bc = ["onKeydown"], Kc = { class: "ito-color-field" }, Wc = { class: "ito-color-input-wrapper" }, Yc = ["onKeydown"], qc = {
  key: 1,
  class: "ito-settings-content"
}, Xc = { class: "ito-theme-section" }, Gc = { class: "ito-theme-options" }, zc = ["onClick"], Jc = { class: "ito-theme-manager" }, Zc = { class: "ito-theme-row" }, Qc = ["disabled"], ea = { class: "ito-theme-list" }, ta = {
  key: 0,
  class: "ito-theme-empty"
}, na = { class: "ito-theme-name" }, sa = { class: "ito-theme-actions" }, oa = ["onClick"], ra = ["onClick"], Oo = "ito-theme-presets", Ct = "ito-last-active-preset", Kt = "ito-ui-theme", ia = /* @__PURE__ */ ke({
  __name: "SettingsMenu",
  setup(e) {
    const t = /* @__PURE__ */ te(!1), n = /* @__PURE__ */ te("general"), s = /* @__PURE__ */ te("#ffffff"), o = /* @__PURE__ */ te("#06b6d4"), r = /* @__PURE__ */ te("#ffffff"), i = /* @__PURE__ */ te("#06b6d4"), l = /* @__PURE__ */ te(""), c = /* @__PURE__ */ te([]), d = /* @__PURE__ */ te("default"), u = [
      { id: "default", label: "Default" },
      { id: "neon", label: "Neon" },
      { id: "glass", label: "Glass" }
    ], p = (S) => {
      if (!S) return "#333333";
      const v = parseInt(S.slice(1, 3), 16), I = parseInt(S.slice(3, 5), 16), fe = parseInt(S.slice(5, 7), 16);
      return (v * 299 + I * 587 + fe * 114) / 1e3 >= 150 ? "#333333" : "#ffffff";
    }, g = (S, v) => {
      document.documentElement.style.setProperty(S, v);
    }, b = (S) => {
      const v = S.trim().toUpperCase();
      if (!v) return null;
      let I = v.startsWith("#") ? v : `#${v}`;
      return /^#[0-9A-F]{3}$/.test(I) && (I = `#${I[1]}${I[1]}${I[2]}${I[2]}${I[3]}${I[3]}`), /^#[0-9A-F]{6}$/.test(I) ? I : null;
    }, M = (S) => {
      const v = S.trim().toUpperCase();
      return v ? v.startsWith("#") ? v : `#${v}` : "";
    }, F = () => {
      g("--accent-text", p(o.value));
    }, G = () => {
      if (g("--main-bg", s.value), d.value === "default") {
        const S = p(s.value);
        g("--text-color", S);
      }
      r.value = s.value.toUpperCase();
    }, K = () => {
      g("--accent-color", o.value), F(), i.value = o.value.toUpperCase();
    }, H = () => {
      const S = b(r.value);
      if (!S) {
        r.value = s.value.toUpperCase();
        return;
      }
      s.value = S, G();
    }, B = () => {
      const S = b(i.value);
      if (!S) {
        i.value = o.value.toUpperCase();
        return;
      }
      o.value = S, K();
    }, O = () => {
      r.value = M(r.value).slice(0, 7);
    }, z = () => {
      i.value = M(i.value).slice(0, 7);
    }, ae = (S, v) => {
      s.value = S, o.value = v, g("--main-bg", S), g("--accent-color", v), d.value === "default" && g("--text-color", p(S)), F(), r.value = S.toUpperCase(), i.value = v.toUpperCase();
    }, k = () => {
      try {
        localStorage.setItem(Oo, JSON.stringify(c.value));
      } catch {
      }
    }, D = () => {
      const S = typeof window < "u" ? window.chrome?.storage?.local : void 0;
      if (S)
        return new Promise((v) => {
          try {
            S.get([Ct], (I) => {
              if (window.chrome?.runtime?.lastError) {
                v(null);
                return;
              }
              const je = I?.[Ct];
              v(typeof je == "string" ? je : null);
            });
          } catch {
            v(null);
          }
        });
      try {
        const v = localStorage.getItem(Ct);
        return Promise.resolve(v || null);
      } catch {
        return Promise.resolve(null);
      }
    }, P = () => {
      const S = typeof window < "u" ? window.chrome?.storage?.local : void 0;
      if (S)
        return new Promise((v) => {
          try {
            S.get([Kt], (I) => {
              if (window.chrome?.runtime?.lastError) {
                v(null);
                return;
              }
              const je = I?.[Kt];
              v(typeof je == "string" ? je : null);
            });
          } catch {
            v(null);
          }
        });
      try {
        const v = localStorage.getItem(Kt);
        return Promise.resolve(v || null);
      } catch {
        return Promise.resolve(null);
      }
    }, j = async (S) => {
      const v = typeof window < "u" ? window.chrome?.storage?.local : void 0;
      if (v) {
        try {
          v.set({ [Kt]: S });
        } catch {
        }
        return;
      }
      try {
        localStorage.setItem(Kt, S);
      } catch {
      }
    }, W = (S) => {
      d.value = S;
      const v = document.documentElement;
      if (S === "default") {
        v.removeAttribute("data-theme");
        const I = p(s.value);
        g("--text-color", I);
      } else
        v.setAttribute("data-theme", S), v.style.removeProperty("--text-color");
      j(S);
    }, C = async (S) => {
      const v = typeof window < "u" ? window.chrome?.storage?.local : void 0;
      if (v) {
        try {
          S ? v.set({ [Ct]: S }) : v.remove(Ct);
        } catch {
        }
        return;
      }
      try {
        S ? localStorage.setItem(Ct, S) : localStorage.removeItem(Ct);
      } catch {
      }
    }, q = () => {
      try {
        const S = localStorage.getItem(Oo);
        if (!S) return;
        const v = JSON.parse(S);
        Array.isArray(v) && (c.value = v.filter((I) => I?.name && I?.mainBg && I?.accentColor));
      } catch {
      }
    }, ue = async () => {
      const S = await D();
      if (!S) return;
      const v = c.value.find(
        (I) => I.name.toLowerCase() === S.toLowerCase()
      );
      if (v) {
        ae(v.mainBg, v.accentColor);
        return;
      }
      oe();
    }, Se = () => {
      const S = l.value.trim();
      if (!S) return;
      const v = c.value.findIndex((fe) => fe.name.toLowerCase() === S.toLowerCase()), I = {
        name: S,
        mainBg: s.value,
        accentColor: o.value
      };
      v >= 0 ? c.value.splice(v, 1, I) : c.value.unshift(I), l.value = "", k(), C(S);
    }, Z = (S) => {
      ae(S.mainBg, S.accentColor), C(S.name);
    }, X = async (S) => {
      c.value = c.value.filter((I) => I.name !== S), k();
      const v = await D();
      v && v.toLowerCase() === S.toLowerCase() && await C(null);
    }, oe = () => {
      s.value = "#ffffff", o.value = "#06b6d4", g("--main-bg", "#ffffff"), g("--accent-color", "#06b6d4"), d.value === "default" && g("--text-color", "#333333"), F(), r.value = "#FFFFFF", i.value = "#06B6D4";
    };
    return un(() => {
      const S = getComputedStyle(document.documentElement).getPropertyValue("--main-bg").trim(), v = getComputedStyle(document.documentElement).getPropertyValue("--accent-color").trim();
      S && (s.value = S), v && (o.value = v), S && g("--text-color", p(S)), (v || o.value) && F(), r.value = (S || s.value).toUpperCase(), i.value = (v || o.value).toUpperCase(), q(), ue(), P().then((I) => {
        const fe = u.find((je) => je.id === I);
        W(fe?.id ?? "default");
      });
    }), (S, v) => (ne(), pe("div", Vc, [
      A("button", {
        class: "ito-settings-button",
        onClick: v[0] || (v[0] = (I) => t.value = !t.value),
        title: "Settings"
      }, [...v[9] || (v[9] = [
        A("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          class: "ito-settings-icon"
        }, [
          A("path", {
            d: "M8 2H12V4H14V5L16 6V8H18V12H16V14L14 15V16H12V18H8V16H6V15L4 14V12H2V8H4V6L6 5V4H8V2ZM10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7Z",
            fill: "currentColor"
          })
        ], -1)
      ])]),
      ee(Xr, { name: "ito-settings-transition" }, {
        default: Pe(() => [
          t.value ? (ne(), pe("div", Dc, [
            A("div", Nc, [
              A("div", Hc, [
                A("button", {
                  class: rt(["ito-settings-tab", { "ito-settings-tab--active": n.value === "general" }]),
                  onClick: v[1] || (v[1] = (I) => n.value = "general"),
                  type: "button"
                }, " General ", 2),
                A("button", {
                  class: rt(["ito-settings-tab", { "ito-settings-tab--active": n.value === "appearance" }]),
                  onClick: v[2] || (v[2] = (I) => n.value = "appearance"),
                  type: "button"
                }, " Appearance ", 2)
              ]),
              A("button", {
                class: "ito-settings-close",
                onClick: v[3] || (v[3] = (I) => t.value = !1)
              }, "×")
            ]),
            n.value === "general" ? (ne(), pe("div", Uc, [
              A("div", kc, [
                v[10] || (v[10] = A("label", { for: "main-bg-color" }, "Main Background", -1)),
                A("div", jc, [
                  ot(A("input", {
                    id: "main-bg-color",
                    type: "color",
                    "onUpdate:modelValue": v[4] || (v[4] = (I) => s.value = I),
                    onInput: G,
                    class: "ito-color-input"
                  }, null, 544), [
                    [pt, s.value]
                  ]),
                  ot(A("input", {
                    id: "main-bg-hex",
                    type: "text",
                    "onUpdate:modelValue": v[5] || (v[5] = (I) => r.value = I),
                    onInput: O,
                    onBlur: H,
                    onKeydown: _s(Fo(H, ["prevent"]), ["enter"]),
                    class: "ito-color-text-input",
                    placeholder: "#FFFFFF",
                    maxlength: "7",
                    inputmode: "text",
                    autocapitalize: "characters"
                  }, null, 40, Bc), [
                    [pt, r.value]
                  ])
                ])
              ]),
              A("div", Kc, [
                v[11] || (v[11] = A("label", { for: "accent-color" }, "Accent Color", -1)),
                A("div", Wc, [
                  ot(A("input", {
                    id: "accent-color",
                    type: "color",
                    "onUpdate:modelValue": v[6] || (v[6] = (I) => o.value = I),
                    onInput: K,
                    class: "ito-color-input"
                  }, null, 544), [
                    [pt, o.value]
                  ]),
                  ot(A("input", {
                    id: "accent-hex",
                    type: "text",
                    "onUpdate:modelValue": v[7] || (v[7] = (I) => i.value = I),
                    onInput: z,
                    onBlur: B,
                    onKeydown: _s(Fo(B, ["prevent"]), ["enter"]),
                    class: "ito-color-text-input",
                    placeholder: "#00BCD4",
                    maxlength: "7",
                    inputmode: "text",
                    autocapitalize: "characters"
                  }, null, 40, Yc), [
                    [pt, i.value]
                  ])
                ])
              ]),
              A("button", {
                class: "ito-settings-reset",
                onClick: oe
              }, "Reset to Default")
            ])) : (ne(), pe("div", qc, [
              A("div", Xc, [
                v[12] || (v[12] = A("div", { class: "ito-theme-section-title" }, "UI Themes", -1)),
                A("div", Gc, [
                  (ne(), pe(_e, null, eo(u, (I) => A("button", {
                    key: I.id,
                    class: rt(["ito-theme-option", { "ito-theme-option--active": d.value === I.id }]),
                    onClick: (fe) => W(I.id),
                    type: "button"
                  }, Re(I.label), 11, zc)), 64))
                ])
              ]),
              v[15] || (v[15] = A("div", { class: "ito-theme-divider" }, null, -1)),
              A("div", Jc, [
                v[13] || (v[13] = A("div", { class: "ito-theme-section-title" }, "Custom Presets", -1)),
                v[14] || (v[14] = A("label", { for: "ito-theme-name" }, "New Preset Name", -1)),
                A("div", Zc, [
                  ot(A("input", {
                    id: "ito-theme-name",
                    type: "text",
                    "onUpdate:modelValue": v[8] || (v[8] = (I) => l.value = I),
                    class: "ito-theme-input",
                    placeholder: "My theme"
                  }, null, 512), [
                    [pt, l.value]
                  ]),
                  A("button", {
                    class: "ito-theme-save",
                    onClick: Se,
                    disabled: !l.value.trim(),
                    type: "button"
                  }, " Save Current ", 8, Qc)
                ]),
                A("div", ea, [
                  c.value.length === 0 ? (ne(), pe("div", ta, " No presets yet. ")) : vt("", !0),
                  (ne(!0), pe(_e, null, eo(c.value, (I) => (ne(), pe("div", {
                    key: I.name,
                    class: "ito-theme-item"
                  }, [
                    A("span", na, Re(I.name), 1),
                    A("div", sa, [
                      A("button", {
                        class: "ito-theme-load",
                        onClick: (fe) => Z(I),
                        type: "button"
                      }, "Load", 8, oa),
                      A("button", {
                        class: "ito-theme-delete",
                        onClick: (fe) => X(I.name),
                        type: "button"
                      }, " Delete ", 8, ra)
                    ])
                  ]))), 128))
                ])
              ])
            ]))
          ])) : vt("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Ve = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, la = /* @__PURE__ */ Ve(ia, [["__scopeId", "data-v-476711ae"]]), ca = { class: "ito-controls-menu" }, aa = { class: "ito-controls-menu-content" }, ua = { class: "ito-controls-menu-header" }, fa = ["title"], da = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "ito-visibility-icon"
}, pa = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "ito-visibility-icon"
}, ha = { class: "ito-controls-menu-content-footer" }, ga = /* @__PURE__ */ ke({
  __name: "ControlsMenu",
  setup(e) {
    const { showControls: t, toggleShowControls: n, overlayVisible: s, toggleOverlayVisible: o } = Us();
    function r(l) {
      if (!(l instanceof HTMLElement)) return !1;
      const c = l.tagName.toLowerCase();
      return c === "input" || c === "textarea" || c === "select" ? !0 : l.isContentEditable;
    }
    function i(l) {
      !l.altKey || l.key.toLowerCase() !== "v" || l.isComposing || r(l.target) || l.repeat || l.ctrlKey || l.metaKey || l.shiftKey || (l.preventDefault(), o());
    }
    return un(() => {
      window.addEventListener("keydown", i);
    }), kn(() => {
      window.removeEventListener("keydown", i);
    }), (l, c) => (ne(), pe("div", ca, [
      ee(Xr, {
        name: "ito-menu-transition",
        mode: "out-in"
      }, {
        default: Pe(() => [
          ot(A("div", aa, [
            A("div", ua, [
              A("button", {
                class: "ito-visibility-button",
                onClick: c[0] || (c[0] = //@ts-ignore
                (...d) => $e(o) && $e(o)(...d)),
                title: $e(s) ? "Hide overlay" : "Show overlay"
              }, [
                $e(s) ? (ne(), pe("svg", da, [...c[2] || (c[2] = [
                  A("path", {
                    d: "M1.5 12C3.9 7.2 7.5 5 12 5C16.5 5 20.1 7.2 22.5 12C20.1 16.8 16.5 19 12 19C7.5 19 3.9 16.8 1.5 12Z",
                    stroke: "currentColor",
                    "stroke-width": "1.6",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, null, -1),
                  A("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3.2",
                    stroke: "currentColor",
                    "stroke-width": "1.6"
                  }, null, -1)
                ])])) : (ne(), pe("svg", pa, [...c[3] || (c[3] = [
                  A("path", {
                    d: "M3 12C5.4 7.2 9 5 12 5C15 5 18.6 7.2 21 12",
                    stroke: "currentColor",
                    "stroke-width": "1.6",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, null, -1),
                  A("path", {
                    d: "M3 12C5.4 16.8 9 19 12 19C15 19 18.6 16.8 21 12",
                    stroke: "currentColor",
                    "stroke-width": "1.6",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, null, -1),
                  A("path", {
                    d: "M4 4L20 20",
                    stroke: "currentColor",
                    "stroke-width": "1.6",
                    "stroke-linecap": "round"
                  }, null, -1)
                ])]))
              ], 8, fa),
              ee(la)
            ]),
            In(l.$slots, "default", {}, void 0, !0),
            A("div", ha, [
              In(l.$slots, "footer", {}, void 0, !0)
            ])
          ], 512), [
            [ac, $e(t)]
          ])
        ]),
        _: 3
      }),
      A("div", {
        class: rt(["ito-controls-menu-activator", { "ito-controls-menu-activator--active": $e(t) }]),
        tabindex: "0",
        onClick: c[1] || (c[1] = //@ts-ignore
        (...d) => $e(n) && $e(n)(...d))
      }, null, 2)
    ]));
  }
}), ma = /* @__PURE__ */ Ve(ga, [["__scopeId", "data-v-76f9065a"]]), va = {}, _a = { class: "ito-control-field-group" };
function ya(e, t) {
  return ne(), pe("div", _a, [
    In(e.$slots, "default", {}, void 0)
  ]);
}
const vn = /* @__PURE__ */ Ve(va, [["render", ya], ["__scopeId", "data-v-0d94bee6"]]), ks = /* @__PURE__ */ te(!1), me = /* @__PURE__ */ Dn({
  initialX: 0,
  initialY: 0,
  currentX: 0,
  currentY: 0,
  offsetX: 0,
  offsetY: 0
});
function ba(e) {
  me.initialX = e.clientX - me.offsetX, me.initialY = e.clientY - me.offsetY, ks.value = !0;
}
function wa(e) {
  ks.value && (me.currentX = e.clientX - me.initialX, me.currentY = e.clientY - me.initialY, me.offsetX = me.currentX, me.offsetY = me.currentY);
}
function xa(e) {
  me.initialX = e.clientX, me.initialY = e.clientY, ks.value = !1;
}
function Ca() {
  Object.assign(me, {
    initialX: 0,
    initialY: 0,
    currentX: 0,
    currentY: 0,
    offsetX: 0,
    offsetY: 0
  });
}
function Qr() {
  return {
    elementDrag: me,
    resetElementDrag: Ca,
    dragEvents: {
      mousedown: ba,
      mousemove: wa,
      mouseup: xa
    }
  };
}
const Sa = { class: "ito-tracer-image-wrapper" }, Ta = ["src"], Ea = /* @__PURE__ */ ke({
  __name: "TracerImage",
  props: {
    src: {}
  },
  setup(e) {
    const { showControls: t, scale: n, opacity: s, rotation: o, isAttached: r, overlayVisible: i } = Us(), { elementDrag: l, dragEvents: c } = Qr(), d = e, u = rn(() => d.src && t.value && !r.value ? {
      wheel: p,
      ...c
    } : {});
    function p(b) {
      if (b.ctrlKey) {
        const M = 0.01 * b.deltaY;
        let F = n.value;
        F -= M, n.value = parseFloat(Math.min(Math.max(F, 0.01), 8).toFixed(2));
      }
      if (b.shiftKey) {
        const M = b.deltaY > 0 ? 3 : -3;
        let F = o.value + M;
        o.value = Math.min(Math.max(F, -360), 360);
      }
      (b.shiftKey || b.ctrlKey) && b.preventDefault();
    }
    const g = rn(() => {
      const b = i.value;
      return {
        opacity: b ? s.value : 0,
        cursor: b && t.value && !r.value ? "grab" : void 0,
        pointerEvents: b && t.value && !r.value ? "auto" : "none",
        transform: `
			translate3d(${l.currentX}px, ${l.currentY}px, 0) 
			scale(${n.value}, ${n.value}) 
			rotate(${o.value}deg)
		`
      };
    });
    return (b, M) => (ne(), pe("div", Sa, [
      A("img", jr({
        src: d.src,
        style: g.value,
        draggable: "false",
        class: "ito-tracer-image"
      }, dl(u.value)), null, 16, Ta)
    ]));
  }
}), Aa = /* @__PURE__ */ Ve(Ea, [["__scopeId", "data-v-00224fb1"]]);
function ws(e) {
  return new Promise((t, n) => {
    const s = new Image();
    s.onload = () => {
      t(s.src);
    }, s.onerror = () => {
      n();
    }, s.src = e;
  });
}
function Ia(e) {
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
const $a = { class: "ito-control-field" }, Pa = {
  key: 0,
  class: "ito-control-field-label"
}, Fa = {
  key: 1,
  class: "ito-control-field-error"
}, Ma = /* @__PURE__ */ ke({
  __name: "ControlField",
  props: {
    label: {},
    error: {}
  },
  setup(e) {
    return (t, n) => (ne(), pe("div", $a, [
      e.label ? (ne(), pe("div", Pa, Re(e.label), 1)) : vt("", !0),
      In(t.$slots, "default", {}, void 0),
      e.error ? (ne(), pe("div", Fa, Re(e.error), 1)) : vt("", !0)
    ]));
  }
}), dn = /* @__PURE__ */ Ve(Ma, [["__scopeId", "data-v-57ec051f"]]), Oa = /* @__PURE__ */ ke({
  __name: "ImagePicker",
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ te(null);
    async function o(i) {
      const l = i.target, c = l.files || [], [d] = c;
      try {
        const u = await Ia(d);
        n("change", u), l.value = "";
      } catch {
      }
    }
    function r() {
      s.value?.click();
    }
    return (i, l) => (ne(), Je(dn, { label: "Upload image" }, {
      default: Pe(() => [
        A("div", {
          class: "ito-upload-button",
          onClick: r
        }, "Browse"),
        A("input", {
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
}), Ra = /* @__PURE__ */ Ve(Oa, [["__scopeId", "data-v-746fe1a3"]]), La = /* @__PURE__ */ ke({
  __name: "ImageFetcher",
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ te("");
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
          const u = await ws(d);
          n("change", u), c.value = "";
        } catch {
          s.value = "Failed to fetch image";
        }
    }
    return (l, c) => (ne(), Je(dn, {
      label: "Or paste image address",
      error: s.value
    }, {
      default: Pe(() => [
        A("input", {
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
}), Va = /* @__PURE__ */ Ve(La, [["__scopeId", "data-v-684beedb"]]), Da = { class: "ito-image-agent-controls column" }, Na = ["placeholder", "disabled"], Ha = { class: "ito-button-row" }, Ua = ["disabled"], ka = { class: "ito-nav-group" }, ja = ["disabled"], Ba = ["disabled"], Ka = {
  key: 0,
  class: "ito-nav-counter"
}, Wa = {
  key: 0,
  class: "ito-status-message"
}, Ya = /* @__PURE__ */ ke({
  __name: "ImageAgent",
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ te(!1), o = /* @__PURE__ */ te(""), r = /* @__PURE__ */ te(""), i = /* @__PURE__ */ te(""), l = /* @__PURE__ */ te("");
    let c;
    const d = /* @__PURE__ */ te(!1), u = /* @__PURE__ */ te(0), p = /* @__PURE__ */ te(""), g = /* @__PURE__ */ te(0), b = /* @__PURE__ */ te([]), M = /* @__PURE__ */ te(0);
    function F(k) {
      if (!k || !k.isConnected) return "";
      const D = k, P = window.getComputedStyle(D);
      return P.display === "none" || P.visibility === "hidden" || P.opacity === "0" || D.offsetParent === null && P.position !== "fixed" ? "" : D.textContent?.trim() || "";
    }
    function G(k) {
      return k.replace(/_/g, "").replace(/\s\s+/g, " ").trim();
    }
    function K() {
      const k = document.querySelector(".word"), D = G(F(k));
      if (D) return D;
      const P = document.querySelector("#currentWord"), j = G(F(P));
      if (j) return j;
      const W = document.querySelector("[data-word]");
      if (W && W.dataset.word) {
        const C = G(W.dataset.word);
        if (C) return C;
      }
      return null;
    }
    function H(k) {
      if (!b.value || b.value.length === 0) return;
      const D = b.value.length;
      M.value = (M.value + k + D) % D;
      const P = b.value[M.value];
      P && ws(P).then(() => {
        n("change", P), r.value = `${M.value + 1} / ${D}`, setTimeout(() => r.value = "", 1500);
      }).catch(() => {
        o.value = "Failed to load selected image.";
      });
    }
    function B() {
      const k = K(), D = Date.now(), P = i.value.trim();
      if (!k) {
        if (p.value && P === p.value) {
          i.value = "", p.value = "", l.value = "";
          return;
        }
        !P && !d.value && D > u.value && (i.value = "", p.value = "", l.value = "");
        return;
      }
      !P && !d.value && D > u.value && D > g.value && (i.value = k, p.value = k, l.value = k);
    }
    function O() {
      const k = Date.now();
      u.value = k + 2e3, p.value = "", i.value.trim() || (g.value = k + 5e3, l.value = "");
    }
    un(() => {
      B(), c = window.setInterval(B, 500), window.addEventListener("ito:clear-image", z);
    }), kn(() => {
      c !== void 0 && window.clearInterval(c), window.removeEventListener("ito:clear-image", z);
    });
    function z() {
      b.value = [], M.value = 0, r.value = "", i.value = "", l.value = "", p.value = "", g.value = 0, o.value = "";
    }
    async function ae() {
      o.value = "", r.value = "";
      const k = i.value.trim(), D = K();
      let P = "";
      if (k && (!(p.value && k === p.value) || D) && (P = k), !P && D && (P = D), !P) {
        o.value = "Could not detect word. Type it manually.";
        return;
      }
      s.value = !0;
      try {
        const j = `https://agent.typo.rip/${encodeURIComponent(P)}`, W = await fetch(j);
        if (!W.ok)
          throw new Error(`API returned ${W.status}`);
        const C = await W.json(), q = [];
        if (Array.isArray(C))
          for (const Z of C)
            Z && (typeof Z == "string" ? q.push(Z) : typeof Z == "object" && q.push(Z.url || Z.src));
        else if (typeof C == "object") {
          const Z = C.results || C.images || C.data;
          if (Array.isArray(Z))
            for (const X of Z)
              X && (typeof X == "string" ? q.push(X) : typeof X == "object" && q.push(X.url || X.src));
          else (C.url || C.src) && q.push(C.url || C.src);
        }
        const ue = q.filter(Boolean);
        if (ue.length === 0) {
          o.value = "No images found for this word";
          return;
        }
        b.value = ue, M.value = 0;
        const Se = b.value[0];
        await ws(Se), n("change", Se), r.value = `1 / ${b.value.length}`, setTimeout(() => {
          r.value = "";
        }, 2e3);
      } catch {
        o.value = "Failed to fetch image. Try another word.";
      } finally {
        s.value = !1;
      }
    }
    return (k, D) => (ne(), Je(dn, {
      label: "Image Fetch",
      error: o.value
    }, {
      default: Pe(() => [
        A("div", Da, [
          ot(A("input", {
            "onUpdate:modelValue": D[0] || (D[0] = (P) => i.value = P),
            type: "text",
            placeholder: i.value ? "Press enter or click Search" : "Type a word here...",
            class: "ito-input-control full-width",
            onInput: O,
            onFocus: D[1] || (D[1] = (P) => d.value = !0),
            onBlur: D[2] || (D[2] = (P) => d.value = !1),
            onKeydown: _s(ae, ["enter"]),
            disabled: s.value
          }, null, 40, Na), [
            [pt, i.value]
          ]),
          A("div", Ha, [
            A("button", {
              class: "ito-agent-btn",
              onClick: ae,
              disabled: s.value
            }, Re(s.value ? "Fetching..." : "🔍 Search"), 9, Ua),
            A("div", ka, [
              A("button", {
                class: "ito-nav-btn left",
                onClick: D[3] || (D[3] = (P) => H(-1)),
                disabled: b.value.length === 0
              }, "◀", 8, ja),
              A("button", {
                class: "ito-nav-btn right",
                onClick: D[4] || (D[4] = (P) => H(1)),
                disabled: b.value.length === 0
              }, "▶", 8, Ba),
              b.value.length ? (ne(), pe("span", Ka, Re(M.value + 1) + " / " + Re(b.value.length), 1)) : vt("", !0)
            ])
          ])
        ]),
        r.value ? (ne(), pe("div", Wa, Re(r.value), 1)) : vt("", !0)
      ]),
      _: 1
    }, 8, ["error"]));
  }
}), qa = /* @__PURE__ */ Ve(Ya, [["__scopeId", "data-v-7665f635"]]), Xa = { class: "control-group" }, Ga = { class: "label-row" }, za = { class: "label-text" }, Ja = ["step", "min", "max"], Za = ["min", "max", "step"], Qa = /* @__PURE__ */ ke({
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
    const n = t, s = e, o = rn({
      get: () => s.modelValue,
      set: (c) => n("update:modelValue", c)
    }), r = rn(() => s.step ?? 0.01), i = () => {
      const c = Number(o.value);
      if (Number.isNaN(c)) return;
      const d = Math.min(Math.max(c, s.min), s.max);
      d !== c && (o.value = d);
    }, l = (c) => {
      const d = c.target;
      d && d.select();
    };
    return (c, d) => (ne(), Je(dn, null, {
      default: Pe(() => [
        A("div", Xa, [
          A("div", Ga, [
            A("span", za, Re(e.label), 1),
            ot(A("input", {
              type: "number",
              "onUpdate:modelValue": d[0] || (d[0] = (u) => o.value = u),
              onFocus: l,
              onBlur: i,
              class: "stealth-input",
              step: r.value,
              min: e.min,
              max: e.max
            }, null, 40, Ja), [
              [
                pt,
                o.value,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          ot(A("input", {
            type: "range",
            "onUpdate:modelValue": d[1] || (d[1] = (u) => o.value = u),
            min: e.min,
            max: e.max,
            step: r.value,
            class: "custom-slider"
          }, null, 8, Za), [
            [
              pt,
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
}), rs = /* @__PURE__ */ Ve(Qa, [["__scopeId", "data-v-cd601400"]]), eu = /* @__PURE__ */ ke({
  __name: "TextButton",
  props: {
    label: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = t;
    return (s, o) => (ne(), pe("div", {
      class: "ito-text-button",
      onClick: o[0] || (o[0] = (r) => n("click"))
    }, Re(e.label), 1));
  }
}), Ro = /* @__PURE__ */ Ve(eu, [["__scopeId", "data-v-eba85461"]]), tu = { class: "ito-switch-field-label" }, nu = { class: "ito-switch" }, su = /* @__PURE__ */ ke({
  __name: "SwitchField",
  props: {
    label: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (ne(), Je(dn, null, {
      default: Pe(() => [
        A("div", {
          class: "ito-switch-field",
          onClick: n[0] || (n[0] = (s) => t.$emit("update:modelValue", !e.modelValue))
        }, [
          A("div", tu, Re(e.label), 1),
          A("div", nu, [
            A("div", {
              class: rt(["ito-switch-button", { "ito-switch-button--on": e.modelValue }])
            }, [...n[1] || (n[1] = [
              A("div", { class: "ito-switch-knob" }, null, -1)
            ])], 2)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), ou = /* @__PURE__ */ Ve(su, [["__scopeId", "data-v-8da1a711"]]);
function ru() {
  const e = document.getElementById("ImageTracerOverlayContainer"), t = document.querySelector(":root");
  if (!e)
    return;
  const n = e.getBoundingClientRect(), s = window.scrollY || document.documentElement.scrollTop, o = window.scrollX || document.documentElement.scrollLeft;
  t.style.setProperty("--image-tracer-overlay-attached-x", n.top + s + "px"), t.style.setProperty("--image-tracer-overlay-attached-y", n.left + o + "px");
}
const iu = { class: "ito-fixed-container" }, lu = { class: "ito-text-buttons-group" }, cu = /* @__PURE__ */ ke({
  __name: "App",
  setup(e) {
    const { opacity: t, scale: n, resetControls: s, rotation: o, isAttached: r } = Us(), { resetElementDrag: i } = Qr(), l = /* @__PURE__ */ te(void 0);
    function c() {
      l.value = void 0;
      try {
        window.dispatchEvent(new CustomEvent("ito:clear-image"));
      } catch {
      }
    }
    function d() {
      s(), i();
    }
    return wn(r, () => {
      r.value && ru();
    }), (u, p) => (ne(), pe(_e, null, [
      A("div", {
        id: "ImageTracerOverlayContainer",
        class: rt([$e(r) ? "ito-attached-container" : "ito-fixed-container"])
      }, [
        l.value ? (ne(), Je(Aa, {
          key: 0,
          src: l.value
        }, null, 8, ["src"])) : vt("", !0)
      ], 2),
      A("div", iu, [
        ee(ma, null, {
          footer: Pe(() => [...p[7] || (p[7] = [
            A("div", { class: "ito-menu-helper" }, " Tips: Position the image by dragging. Ctrl+Scroll to zoom. Shift+Scroll to rotate. Alt+V to toggle visibility. ", -1)
          ])]),
          default: Pe(() => [
            ee(vn, null, {
              default: Pe(() => [
                ee(Ra, {
                  onChange: p[0] || (p[0] = (g) => l.value = g)
                }),
                ee(Va, {
                  onChange: p[1] || (p[1] = (g) => l.value = g)
                }),
                ee(qa, {
                  onChange: p[2] || (p[2] = (g) => l.value = g)
                })
              ]),
              _: 1
            }),
            ee(vn, null, {
              default: Pe(() => [
                ee(ou, {
                  label: "Lock image position",
                  modelValue: $e(r),
                  "onUpdate:modelValue": p[3] || (p[3] = (g) => /* @__PURE__ */ he(r) ? r.value = g : null)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            ee(vn, null, {
              default: Pe(() => [
                ee(rs, {
                  label: "Opacity",
                  min: 0,
                  max: 1,
                  step: 0.01,
                  modelValue: $e(t),
                  "onUpdate:modelValue": p[4] || (p[4] = (g) => /* @__PURE__ */ he(t) ? t.value = g : null)
                }, null, 8, ["modelValue"]),
                ee(rs, {
                  label: "Scale",
                  min: 0.1,
                  max: 5,
                  step: 0.01,
                  modelValue: $e(n),
                  "onUpdate:modelValue": p[5] || (p[5] = (g) => /* @__PURE__ */ he(n) ? n.value = g : null)
                }, null, 8, ["modelValue"]),
                ee(rs, {
                  label: "Rotate",
                  min: 0,
                  max: 360,
                  step: 1,
                  modelValue: $e(o),
                  "onUpdate:modelValue": p[6] || (p[6] = (g) => /* @__PURE__ */ he(o) ? o.value = g : null)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            l.value ? (ne(), Je(vn, { key: 0 }, {
              default: Pe(() => [
                A("div", lu, [
                  ee(Ro, {
                    label: "Clear image",
                    onClick: c
                  }),
                  ee(Ro, {
                    label: "Reset image",
                    title: "Reset position, opacity, scale and rotation",
                    onClick: d
                  })
                ])
              ]),
              _: 1
            })) : vt("", !0)
          ]),
          _: 1
        })
      ])
    ], 64));
  }
}), au = /* @__PURE__ */ Ve(cu, [["__scopeId", "data-v-d794dfff"]]), Wn = document.createElement("div");
Wn.setAttribute("id", "ImageTracerOverlayMount");
Wn.style.display = "none";
document.body.appendChild(Wn);
const uu = $c(au);
uu.mount(Wn);
