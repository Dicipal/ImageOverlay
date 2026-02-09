// @__NO_SIDE_EFFECTS__
function ds(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const X = {}, wt = [], Ue = () => {
}, Tr = () => !1, An = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), hs = (e) => e.startsWith("onUpdate:"), ie = Object.assign, ps = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, qo = Object.prototype.hasOwnProperty, U = (e, t) => qo.call(e, t), M = Array.isArray, St = (e) => en(e) === "[object Map]", Er = (e) => en(e) === "[object Set]", js = (e) => en(e) === "[object Date]", R = (e) => typeof e == "function", oe = (e) => typeof e == "string", Fe = (e) => typeof e == "symbol", W = (e) => e !== null && typeof e == "object", Ar = (e) => (W(e) || R(e)) && R(e.then) && R(e.catch), Ir = Object.prototype.toString, en = (e) => Ir.call(e), Xo = (e) => en(e).slice(8, -1), Pr = (e) => en(e) === "[object Object]", gs = (e) => oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ht = /* @__PURE__ */ ds(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), In = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Go = /-\w/g, lt = In(
  (e) => e.replace(Go, (t) => t.slice(1).toUpperCase())
), Jo = /\B([A-Z])/g, ut = In(
  (e) => e.replace(Jo, "-$1").toLowerCase()
), Fr = In((e) => e.charAt(0).toUpperCase() + e.slice(1)), an = In(
  (e) => e ? `on${Fr(e)}` : ""
), it = (e, t) => !Object.is(e, t), dn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Or = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, ms = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, zo = (e) => {
  const t = oe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Us;
const Pn = () => Us || (Us = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function _s(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = oe(s) ? ti(s) : _s(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (oe(e) || W(e))
    return e;
}
const Zo = /;(?![^(]*\))/g, Qo = /:([^]+)/, ei = /\/\*[^]*?\*\//g;
function ti(e) {
  const t = {};
  return e.replace(ei, "").split(Zo).forEach((n) => {
    if (n) {
      const s = n.split(Qo);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Ft(e) {
  let t = "";
  if (oe(e))
    t = e;
  else if (M(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ft(e[n]);
      s && (t += s + " ");
    }
  else if (W(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ni = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", si = /* @__PURE__ */ ds(ni);
function Mr(e) {
  return !!e || e === "";
}
function ri(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = vs(e[s], t[s]);
  return n;
}
function vs(e, t) {
  if (e === t) return !0;
  let n = js(e), s = js(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Fe(e), s = Fe(t), n || s)
    return e === t;
  if (n = M(e), s = M(t), n || s)
    return n && s ? ri(e, t) : !1;
  if (n = W(e), s = W(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, o = Object.keys(t).length;
    if (r !== o)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (l && !c || !l && c || !vs(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const $r = (e) => !!(e && e.__v_isRef === !0), Ze = (e) => oe(e) ? e : e == null ? "" : M(e) || W(e) && (e.toString === Ir || !R(e.toString)) ? $r(e) ? Ze(e.value) : JSON.stringify(e, Rr, 2) : String(e), Rr = (e, t) => $r(t) ? Rr(e, t.value) : St(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[Hn(s, o) + " =>"] = r, n),
    {}
  )
} : Er(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Hn(n))
} : Fe(t) ? Hn(t) : W(t) && !M(t) && !Pr(t) ? String(t) : t, Hn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Fe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let xe;
class oi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = xe, !t && xe && (this.index = (xe.scopes || (xe.scopes = [])).push(
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
      const n = xe;
      try {
        return xe = this, t();
      } finally {
        xe = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = xe, xe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (xe = this.prevScope, this.prevScope = void 0);
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
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ii() {
  return xe;
}
let z;
const jn = /* @__PURE__ */ new WeakSet();
class Dr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, xe && xe.active && xe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, jn.has(this) && (jn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Nr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Bs(this), Vr(this);
    const t = z, n = Ie;
    z = this, Ie = !0;
    try {
      return this.fn();
    } finally {
      Hr(this), z = t, Ie = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        xs(t);
      this.deps = this.depsTail = void 0, Bs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? jn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Zn(this) && this.run();
  }
  get dirty() {
    return Zn(this);
  }
}
let Lr = 0, jt, Ut;
function Nr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ut, Ut = e;
    return;
  }
  e.next = jt, jt = e;
}
function bs() {
  Lr++;
}
function ys() {
  if (--Lr > 0)
    return;
  if (Ut) {
    let t = Ut;
    for (Ut = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; jt; ) {
    let t = jt;
    for (jt = void 0; t; ) {
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
function Vr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Hr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), xs(s), li(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Zn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (jr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function jr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === kt) || (e.globalVersion = kt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Zn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = z, s = Ie;
  z = e, Ie = !0;
  try {
    Vr(e);
    const r = e.fn(e._value);
    (t.version === 0 || it(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    z = n, Ie = s, Hr(e), e.flags &= -3;
  }
}
function xs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      xs(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function li(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ie = !0;
const Ur = [];
function Qe() {
  Ur.push(Ie), Ie = !1;
}
function et() {
  const e = Ur.pop();
  Ie = e === void 0 ? !0 : e;
}
function Bs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = z;
    z = void 0;
    try {
      t();
    } finally {
      z = n;
    }
  }
}
let kt = 0;
class ci {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Cs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!z || !Ie || z === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== z)
      n = this.activeLink = new ci(z, this), z.deps ? (n.prevDep = z.depsTail, z.depsTail.nextDep = n, z.depsTail = n) : z.deps = z.depsTail = n, Br(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = z.depsTail, n.nextDep = void 0, z.depsTail.nextDep = n, z.depsTail = n, z.deps === n && (z.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, kt++, this.notify(t);
  }
  notify(t) {
    bs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ys();
    }
  }
}
function Br(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Br(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Qn = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ Symbol(
  ""
), es = /* @__PURE__ */ Symbol(
  ""
), Yt = /* @__PURE__ */ Symbol(
  ""
);
function ue(e, t, n) {
  if (Ie && z) {
    let s = Qn.get(e);
    s || Qn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new Cs()), r.map = s, r.key = n), r.track();
  }
}
function Je(e, t, n, s, r, o) {
  const i = Qn.get(e);
  if (!i) {
    kt++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (bs(), t === "clear")
    i.forEach(l);
  else {
    const c = M(e), d = c && gs(n);
    if (c && n === "length") {
      const u = Number(s);
      i.forEach((h, g) => {
        (g === "length" || g === Yt || !Fe(g) && g >= u) && l(h);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), d && l(i.get(Yt)), t) {
        case "add":
          c ? d && l(i.get("length")) : (l(i.get(bt)), St(e) && l(i.get(es)));
          break;
        case "delete":
          c || (l(i.get(bt)), St(e) && l(i.get(es)));
          break;
        case "set":
          St(e) && l(i.get(bt));
          break;
      }
  }
  ys();
}
function yt(e) {
  const t = /* @__PURE__ */ j(e);
  return t === e ? t : (ue(t, "iterate", Yt), /* @__PURE__ */ Pe(e) ? t : t.map(tt));
}
function ws(e) {
  return ue(e = /* @__PURE__ */ j(e), "iterate", Yt), e;
}
function rt(e, t) {
  return /* @__PURE__ */ ct(e) ? qt(/* @__PURE__ */ Tt(e) ? tt(t) : t) : tt(t);
}
const fi = {
  __proto__: null,
  [Symbol.iterator]() {
    return Un(this, Symbol.iterator, (e) => rt(this, e));
  },
  concat(...e) {
    return yt(this).concat(
      ...e.map((t) => M(t) ? yt(t) : t)
    );
  },
  entries() {
    return Un(this, "entries", (e) => (e[1] = rt(this, e[1]), e));
  },
  every(e, t) {
    return Ye(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ye(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => rt(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ye(
      this,
      "find",
      e,
      t,
      (n) => rt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ye(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ye(
      this,
      "findLast",
      e,
      t,
      (n) => rt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ye(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ye(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Bn(this, "includes", e);
  },
  indexOf(...e) {
    return Bn(this, "indexOf", e);
  },
  join(e) {
    return yt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Bn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ye(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Rt(this, "pop");
  },
  push(...e) {
    return Rt(this, "push", e);
  },
  reduce(e, ...t) {
    return Ks(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ks(this, "reduceRight", e, t);
  },
  shift() {
    return Rt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ye(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Rt(this, "splice", e);
  },
  toReversed() {
    return yt(this).toReversed();
  },
  toSorted(e) {
    return yt(this).toSorted(e);
  },
  toSpliced(...e) {
    return yt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Rt(this, "unshift", e);
  },
  values() {
    return Un(this, "values", (e) => rt(this, e));
  }
};
function Un(e, t, n) {
  const s = ws(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ Pe(e) && (r._next = r.next, r.next = () => {
    const o = r._next();
    return o.done || (o.value = n(o.value)), o;
  }), r;
}
const ui = Array.prototype;
function Ye(e, t, n, s, r, o) {
  const i = ws(e), l = i !== e && !/* @__PURE__ */ Pe(e), c = i[t];
  if (c !== ui[t]) {
    const h = c.apply(e, o);
    return l ? tt(h) : h;
  }
  let d = n;
  i !== e && (l ? d = function(h, g) {
    return n.call(this, rt(e, h), g, e);
  } : n.length > 2 && (d = function(h, g) {
    return n.call(this, h, g, e);
  }));
  const u = c.call(i, d, s);
  return l && r ? r(u) : u;
}
function Ks(e, t, n, s) {
  const r = ws(e);
  let o = n;
  return r !== e && (/* @__PURE__ */ Pe(e) ? n.length > 3 && (o = function(i, l, c) {
    return n.call(this, i, l, c, e);
  }) : o = function(i, l, c) {
    return n.call(this, i, rt(e, l), c, e);
  }), r[t](o, ...s);
}
function Bn(e, t, n) {
  const s = /* @__PURE__ */ j(e);
  ue(s, "iterate", Yt);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ Es(n[0]) ? (n[0] = /* @__PURE__ */ j(n[0]), s[t](...n)) : r;
}
function Rt(e, t, n = []) {
  Qe(), bs();
  const s = (/* @__PURE__ */ j(e))[t].apply(e, n);
  return ys(), et(), s;
}
const ai = /* @__PURE__ */ ds("__proto__,__v_isRef,__isVue"), Kr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Fe)
);
function di(e) {
  Fe(e) || (e = String(e));
  const t = /* @__PURE__ */ j(this);
  return ue(t, "has", e), t.hasOwnProperty(e);
}
class Wr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (r ? o ? Ci : Xr : o ? qr : Yr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = M(t);
    if (!r) {
      let c;
      if (i && (c = fi[n]))
        return c;
      if (n === "hasOwnProperty")
        return di;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ se(t) ? t : s
    );
    if ((Fe(n) ? Kr.has(n) : ai(n)) || (r || ue(t, "get", n), o))
      return l;
    if (/* @__PURE__ */ se(l)) {
      const c = i && gs(n) ? l : l.value;
      return r && W(c) ? /* @__PURE__ */ ns(c) : c;
    }
    return W(l) ? r ? /* @__PURE__ */ ns(l) : /* @__PURE__ */ Fn(l) : l;
  }
}
class kr extends Wr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    const i = M(t) && gs(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ ct(o);
      if (!/* @__PURE__ */ Pe(s) && !/* @__PURE__ */ ct(s) && (o = /* @__PURE__ */ j(o), s = /* @__PURE__ */ j(s)), !i && /* @__PURE__ */ se(o) && !/* @__PURE__ */ se(s))
        return d || (o.value = s), !0;
    }
    const l = i ? Number(n) < t.length : U(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ se(t) ? t : r
    );
    return t === /* @__PURE__ */ j(r) && (l ? it(s, o) && Je(t, "set", n, s) : Je(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = U(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Je(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Fe(n) || !Kr.has(n)) && ue(t, "has", n), s;
  }
  ownKeys(t) {
    return ue(
      t,
      "iterate",
      M(t) ? "length" : bt
    ), Reflect.ownKeys(t);
  }
}
class hi extends Wr {
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
const pi = /* @__PURE__ */ new kr(), gi = /* @__PURE__ */ new hi(), mi = /* @__PURE__ */ new kr(!0);
const ts = (e) => e, ln = (e) => Reflect.getPrototypeOf(e);
function _i(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = /* @__PURE__ */ j(r), i = St(o), l = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, d = r[e](...s), u = n ? ts : t ? qt : tt;
    return !t && ue(
      o,
      "iterate",
      c ? es : bt
    ), ie(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: g } = d.next();
          return g ? { value: h, done: g } : {
            value: l ? [u(h[0]), u(h[1])] : u(h),
            done: g
          };
        }
      }
    );
  };
}
function cn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function vi(e, t) {
  const n = {
    get(r) {
      const o = this.__v_raw, i = /* @__PURE__ */ j(o), l = /* @__PURE__ */ j(r);
      e || (it(r, l) && ue(i, "get", r), ue(i, "get", l));
      const { has: c } = ln(i), d = t ? ts : e ? qt : tt;
      if (c.call(i, r))
        return d(o.get(r));
      if (c.call(i, l))
        return d(o.get(l));
      o !== i && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && ue(/* @__PURE__ */ j(r), "iterate", bt), r.size;
    },
    has(r) {
      const o = this.__v_raw, i = /* @__PURE__ */ j(o), l = /* @__PURE__ */ j(r);
      return e || (it(r, l) && ue(i, "has", r), ue(i, "has", l)), r === l ? o.has(r) : o.has(r) || o.has(l);
    },
    forEach(r, o) {
      const i = this, l = i.__v_raw, c = /* @__PURE__ */ j(l), d = t ? ts : e ? qt : tt;
      return !e && ue(c, "iterate", bt), l.forEach((u, h) => r.call(o, d(u), d(h), i));
    }
  };
  return ie(
    n,
    e ? {
      add: cn("add"),
      set: cn("set"),
      delete: cn("delete"),
      clear: cn("clear")
    } : {
      add(r) {
        !t && !/* @__PURE__ */ Pe(r) && !/* @__PURE__ */ ct(r) && (r = /* @__PURE__ */ j(r));
        const o = /* @__PURE__ */ j(this);
        return ln(o).has.call(o, r) || (o.add(r), Je(o, "add", r, r)), this;
      },
      set(r, o) {
        !t && !/* @__PURE__ */ Pe(o) && !/* @__PURE__ */ ct(o) && (o = /* @__PURE__ */ j(o));
        const i = /* @__PURE__ */ j(this), { has: l, get: c } = ln(i);
        let d = l.call(i, r);
        d || (r = /* @__PURE__ */ j(r), d = l.call(i, r));
        const u = c.call(i, r);
        return i.set(r, o), d ? it(o, u) && Je(i, "set", r, o) : Je(i, "add", r, o), this;
      },
      delete(r) {
        const o = /* @__PURE__ */ j(this), { has: i, get: l } = ln(o);
        let c = i.call(o, r);
        c || (r = /* @__PURE__ */ j(r), c = i.call(o, r)), l && l.call(o, r);
        const d = o.delete(r);
        return c && Je(o, "delete", r, void 0), d;
      },
      clear() {
        const r = /* @__PURE__ */ j(this), o = r.size !== 0, i = r.clear();
        return o && Je(
          r,
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
  ].forEach((r) => {
    n[r] = _i(r, e, t);
  }), n;
}
function Ss(e, t) {
  const n = vi(e, t);
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    U(n, r) && r in s ? n : s,
    r,
    o
  );
}
const bi = {
  get: /* @__PURE__ */ Ss(!1, !1)
}, yi = {
  get: /* @__PURE__ */ Ss(!1, !0)
}, xi = {
  get: /* @__PURE__ */ Ss(!0, !1)
};
const Yr = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap();
function wi(e) {
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
function Si(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : wi(Xo(e));
}
// @__NO_SIDE_EFFECTS__
function Fn(e) {
  return /* @__PURE__ */ ct(e) ? e : Ts(
    e,
    !1,
    pi,
    bi,
    Yr
  );
}
// @__NO_SIDE_EFFECTS__
function Ti(e) {
  return Ts(
    e,
    !1,
    mi,
    yi,
    qr
  );
}
// @__NO_SIDE_EFFECTS__
function ns(e) {
  return Ts(
    e,
    !0,
    gi,
    xi,
    Xr
  );
}
function Ts(e, t, n, s, r) {
  if (!W(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = Si(e);
  if (o === 0)
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Tt(e) {
  return /* @__PURE__ */ ct(e) ? /* @__PURE__ */ Tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ct(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Es(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function j(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ j(t) : e;
}
function Ei(e) {
  return !U(e, "__v_skip") && Object.isExtensible(e) && Or(e, "__v_skip", !0), e;
}
const tt = (e) => W(e) ? /* @__PURE__ */ Fn(e) : e, qt = (e) => W(e) ? /* @__PURE__ */ ns(e) : e;
// @__NO_SIDE_EFFECTS__
function se(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return Ai(e, !1);
}
function Ai(e, t) {
  return /* @__PURE__ */ se(e) ? e : new Ii(e, t);
}
class Ii {
  constructor(t, n) {
    this.dep = new Cs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ j(t), this._value = n ? t : tt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Pe(t) || /* @__PURE__ */ ct(t);
    t = s ? t : /* @__PURE__ */ j(t), it(t, n) && (this._rawValue = t, this._value = s ? t : tt(t), this.dep.trigger());
  }
}
function Se(e) {
  return /* @__PURE__ */ se(e) ? e.value : e;
}
const Pi = {
  get: (e, t, n) => t === "__v_raw" ? e : Se(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ se(r) && !/* @__PURE__ */ se(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Gr(e) {
  return /* @__PURE__ */ Tt(e) ? e : new Proxy(e, Pi);
}
class Fi {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Cs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = kt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    z !== this)
      return Nr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return jr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Oi(e, t, n = !1) {
  let s, r;
  return R(e) ? s = e : (s = e.get, r = e.set), new Fi(s, r, n);
}
const fn = {}, _n = /* @__PURE__ */ new WeakMap();
let _t;
function Mi(e, t = !1, n = _t) {
  if (n) {
    let s = _n.get(n);
    s || _n.set(n, s = []), s.push(e);
  }
}
function $i(e, t, n = X) {
  const { immediate: s, deep: r, once: o, scheduler: i, augmentJob: l, call: c } = n, d = (I) => r ? I : /* @__PURE__ */ Pe(I) || r === !1 || r === 0 ? ze(I, 1) : ze(I);
  let u, h, g, y, A = !1, T = !1;
  if (/* @__PURE__ */ se(e) ? (h = () => e.value, A = /* @__PURE__ */ Pe(e)) : /* @__PURE__ */ Tt(e) ? (h = () => d(e), A = !0) : M(e) ? (T = !0, A = e.some((I) => /* @__PURE__ */ Tt(I) || /* @__PURE__ */ Pe(I)), h = () => e.map((I) => {
    if (/* @__PURE__ */ se(I))
      return I.value;
    if (/* @__PURE__ */ Tt(I))
      return d(I);
    if (R(I))
      return c ? c(I, 2) : I();
  })) : R(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (g) {
      Qe();
      try {
        g();
      } finally {
        et();
      }
    }
    const I = _t;
    _t = u;
    try {
      return c ? c(e, 3, [y]) : e(y);
    } finally {
      _t = I;
    }
  } : h = Ue, t && r) {
    const I = h, B = r === !0 ? 1 / 0 : r;
    h = () => ze(I(), B);
  }
  const L = ii(), V = () => {
    u.stop(), L && L.active && ps(L.effects, u);
  };
  if (o && t) {
    const I = t;
    t = (...B) => {
      I(...B), V();
    };
  }
  let O = T ? new Array(e.length).fill(fn) : fn;
  const N = (I) => {
    if (!(!(u.flags & 1) || !u.dirty && !I))
      if (t) {
        const B = u.run();
        if (r || A || (T ? B.some((k, ne) => it(k, O[ne])) : it(B, O))) {
          g && g();
          const k = _t;
          _t = u;
          try {
            const ne = [
              B,
              // pass undefined as the old value when it's changed for the first time
              O === fn ? void 0 : T && O[0] === fn ? [] : O,
              y
            ];
            O = B, c ? c(t, 3, ne) : (
              // @ts-expect-error
              t(...ne)
            );
          } finally {
            _t = k;
          }
        }
      } else
        u.run();
  };
  return l && l(N), u = new Dr(h), u.scheduler = i ? () => i(N, !1) : N, y = (I) => Mi(I, !1, u), g = u.onStop = () => {
    const I = _n.get(u);
    if (I) {
      if (c)
        c(I, 4);
      else
        for (const B of I) B();
      _n.delete(u);
    }
  }, t ? s ? N(!0) : O = u.run() : i ? i(N.bind(null, !0), !0) : u.run(), V.pause = u.pause.bind(u), V.resume = u.resume.bind(u), V.stop = V, V;
}
function ze(e, t = 1 / 0, n) {
  if (t <= 0 || !W(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ se(e))
    ze(e.value, t, n);
  else if (M(e))
    for (let s = 0; s < e.length; s++)
      ze(e[s], t, n);
  else if (Er(e) || St(e))
    e.forEach((s) => {
      ze(s, t, n);
    });
  else if (Pr(e)) {
    for (const s in e)
      ze(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && ze(e[s], t, n);
  }
  return e;
}
function tn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    On(r, t, n);
  }
}
function Oe(e, t, n, s) {
  if (R(e)) {
    const r = tn(e, t, n, s);
    return r && Ar(r) && r.catch((o) => {
      On(o, t, n);
    }), r;
  }
  if (M(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(Oe(e[o], t, n, s));
    return r;
  }
}
function On(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || X;
  if (t) {
    let l = t.parent;
    const c = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](e, c, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      Qe(), tn(o, null, 10, [
        e,
        c,
        d
      ]), et();
      return;
    }
  }
  Ri(e, n, r, s, i);
}
function Ri(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ge = [];
let Ve = -1;
const Et = [];
let ot = null, xt = 0;
const Jr = /* @__PURE__ */ Promise.resolve();
let vn = null;
function Di(e) {
  const t = vn || Jr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Li(e) {
  let t = Ve + 1, n = ge.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = ge[s], o = Xt(r);
    o < e || o === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function As(e) {
  if (!(e.flags & 1)) {
    const t = Xt(e), n = ge[ge.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Xt(n) ? ge.push(e) : ge.splice(Li(t), 0, e), e.flags |= 1, zr();
  }
}
function zr() {
  vn || (vn = Jr.then(Qr));
}
function Ni(e) {
  M(e) ? Et.push(...e) : ot && e.id === -1 ? ot.splice(xt + 1, 0, e) : e.flags & 1 || (Et.push(e), e.flags |= 1), zr();
}
function Ws(e, t, n = Ve + 1) {
  for (; n < ge.length; n++) {
    const s = ge[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ge.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Zr(e) {
  if (Et.length) {
    const t = [...new Set(Et)].sort(
      (n, s) => Xt(n) - Xt(s)
    );
    if (Et.length = 0, ot) {
      ot.push(...t);
      return;
    }
    for (ot = t, xt = 0; xt < ot.length; xt++) {
      const n = ot[xt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ot = null, xt = 0;
  }
}
const Xt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qr(e) {
  try {
    for (Ve = 0; Ve < ge.length; Ve++) {
      const t = ge[Ve];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), tn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ve < ge.length; Ve++) {
      const t = ge[Ve];
      t && (t.flags &= -2);
    }
    Ve = -1, ge.length = 0, Zr(), vn = null, (ge.length || Et.length) && Qr();
  }
}
let de = null, eo = null;
function bn(e) {
  const t = de;
  return de = e, eo = e && e.type.__scopeId || null, t;
}
function Te(e, t = de, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && wn(-1);
    const o = bn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      bn(o), s._d && wn(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function to(e, t) {
  if (de === null)
    return e;
  const n = Ln(de), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, i, l, c = X] = t[r];
    o && (R(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && ze(i), s.push({
      dir: o,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function ht(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let c = l.dir[s];
    c && (Qe(), Oe(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), et());
  }
}
function Vi(e, t) {
  if (me) {
    let n = me.provides;
    const s = me.parent && me.parent.provides;
    s === n && (n = me.provides = Object.create(s)), n[e] = t;
  }
}
function hn(e, t, n = !1) {
  const s = Do();
  if (s || It) {
    let r = It ? It._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && R(t) ? t.call(s && s.proxy) : t;
  }
}
const Hi = /* @__PURE__ */ Symbol.for("v-scx"), ji = () => hn(Hi);
function pn(e, t, n) {
  return no(e, t, n);
}
function no(e, t, n = X) {
  const { immediate: s, deep: r, flush: o, once: i } = n, l = ie({}, n), c = t && s || !t && o !== "post";
  let d;
  if (Zt) {
    if (o === "sync") {
      const y = ji();
      d = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!c) {
      const y = () => {
      };
      return y.stop = Ue, y.resume = Ue, y.pause = Ue, y;
    }
  }
  const u = me;
  l.call = (y, A, T) => Oe(y, u, A, T);
  let h = !1;
  o === "post" ? l.scheduler = (y) => {
    ye(y, u && u.suspense);
  } : o !== "sync" && (h = !0, l.scheduler = (y, A) => {
    A ? y() : As(y);
  }), l.augmentJob = (y) => {
    t && (y.flags |= 4), h && (y.flags |= 2, u && (y.id = u.uid, y.i = u));
  };
  const g = $i(e, t, l);
  return Zt && (d ? d.push(g) : c && g()), g;
}
function Ui(e, t, n) {
  const s = this.proxy, r = oe(e) ? e.includes(".") ? so(s, e) : () => s[e] : e.bind(s, s);
  let o;
  R(t) ? o = t : (o = t.handler, n = t);
  const i = nn(this), l = no(r, o.bind(s), n);
  return i(), l;
}
function so(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const Bi = /* @__PURE__ */ Symbol("_vte"), ro = (e) => e.__isTeleport, He = /* @__PURE__ */ Symbol("_leaveCb"), Dt = /* @__PURE__ */ Symbol("_enterCb");
function Ki() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Is(() => {
    e.isMounted = !0;
  }), ho(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ae = [Function, Array], oo = {
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
}, io = (e) => {
  const t = e.subTree;
  return t.component ? io(t.component) : t;
}, Wi = {
  name: "BaseTransition",
  props: oo,
  setup(e, { slots: t }) {
    const n = Do(), s = Ki();
    return () => {
      const r = t.default && fo(t.default(), !0);
      if (!r || !r.length)
        return;
      const o = lo(r), i = /* @__PURE__ */ j(e), { mode: l } = i;
      if (s.isLeaving)
        return Kn(o);
      const c = ks(o);
      if (!c)
        return Kn(o);
      let d = ss(
        c,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => d = h
      );
      c.type !== ae && Gt(c, d);
      let u = n.subTree && ks(n.subTree);
      if (u && u.type !== ae && !vt(u, c) && io(n).type !== ae) {
        let h = ss(
          u,
          i,
          s,
          n
        );
        if (Gt(u, h), l === "out-in" && c.type !== ae)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, Kn(o);
        l === "in-out" && c.type !== ae ? h.delayLeave = (g, y, A) => {
          const T = co(
            s,
            u
          );
          T[String(u.key)] = u, g[He] = () => {
            y(), g[He] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            A(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return o;
    };
  }
};
function lo(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ae) {
        t = n;
        break;
      }
  }
  return t;
}
const ki = Wi;
function co(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function ss(e, t, n, s, r) {
  const {
    appear: o,
    mode: i,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: h,
    onBeforeLeave: g,
    onLeave: y,
    onAfterLeave: A,
    onLeaveCancelled: T,
    onBeforeAppear: L,
    onAppear: V,
    onAfterAppear: O,
    onAppearCancelled: N
  } = t, I = String(e.key), B = co(n, e), k = (D, Y) => {
    D && Oe(
      D,
      s,
      9,
      Y
    );
  }, ne = (D, Y) => {
    const ee = Y[1];
    k(D, Y), M(D) ? D.every((E) => E.length <= 1) && ee() : D.length <= 1 && ee();
  }, _e = {
    mode: i,
    persisted: l,
    beforeEnter(D) {
      let Y = c;
      if (!n.isMounted)
        if (o)
          Y = L || c;
        else
          return;
      D[He] && D[He](
        !0
        /* cancelled */
      );
      const ee = B[I];
      ee && vt(e, ee) && ee.el[He] && ee.el[He](), k(Y, [D]);
    },
    enter(D) {
      let Y = d, ee = u, E = h;
      if (!n.isMounted)
        if (o)
          Y = V || d, ee = O || u, E = N || h;
        else
          return;
      let Q = !1;
      D[Dt] = (ke) => {
        Q || (Q = !0, ke ? k(E, [D]) : k(ee, [D]), _e.delayedLeave && _e.delayedLeave(), D[Dt] = void 0);
      };
      const ce = D[Dt].bind(null, !1);
      Y ? ne(Y, [D, ce]) : ce();
    },
    leave(D, Y) {
      const ee = String(e.key);
      if (D[Dt] && D[Dt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return Y();
      k(g, [D]);
      let E = !1;
      D[He] = (ce) => {
        E || (E = !0, Y(), ce ? k(T, [D]) : k(A, [D]), D[He] = void 0, B[ee] === e && delete B[ee]);
      };
      const Q = D[He].bind(null, !1);
      B[ee] = e, y ? ne(y, [D, Q]) : Q();
    },
    clone(D) {
      const Y = ss(
        D,
        t,
        n,
        s,
        r
      );
      return r && r(Y), Y;
    }
  };
  return _e;
}
function Kn(e) {
  if (Mn(e))
    return e = ft(e), e.children = null, e;
}
function ks(e) {
  if (!Mn(e))
    return ro(e.type) && e.children ? lo(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && R(n.default))
      return n.default();
  }
}
function Gt(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Gt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function fo(e, t = !1, n) {
  let s = [], r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === Ce ? (i.patchFlag & 128 && r++, s = s.concat(
      fo(i.children, t, l)
    )) : (t || i.type !== ae) && s.push(l != null ? ft(i, { key: l }) : i);
  }
  if (r > 1)
    for (let o = 0; o < s.length; o++)
      s[o].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function We(e, t) {
  return R(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ie({ name: e.name }, t, { setup: e })
  ) : e;
}
function uo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ys(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const yn = /* @__PURE__ */ new WeakMap();
function Bt(e, t, n, s, r = !1) {
  if (M(e)) {
    e.forEach(
      (T, L) => Bt(
        T,
        t && (M(t) ? t[L] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (At(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Bt(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? Ln(s.component) : s.el, i = r ? null : o, { i: l, r: c } = e, d = t && t.r, u = l.refs === X ? l.refs = {} : l.refs, h = l.setupState, g = /* @__PURE__ */ j(h), y = h === X ? Tr : (T) => Ys(u, T) ? !1 : U(g, T), A = (T, L) => !(L && Ys(u, L));
  if (d != null && d !== c) {
    if (qs(t), oe(d))
      u[d] = null, y(d) && (h[d] = null);
    else if (/* @__PURE__ */ se(d)) {
      const T = t;
      A(d, T.k) && (d.value = null), T.k && (u[T.k] = null);
    }
  }
  if (R(c))
    tn(c, l, 12, [i, u]);
  else {
    const T = oe(c), L = /* @__PURE__ */ se(c);
    if (T || L) {
      const V = () => {
        if (e.f) {
          const O = T ? y(c) ? h[c] : u[c] : A() || !e.k ? c.value : u[e.k];
          if (r)
            M(O) && ps(O, o);
          else if (M(O))
            O.includes(o) || O.push(o);
          else if (T)
            u[c] = [o], y(c) && (h[c] = u[c]);
          else {
            const N = [o];
            A(c, e.k) && (c.value = N), e.k && (u[e.k] = N);
          }
        } else T ? (u[c] = i, y(c) && (h[c] = i)) : L && (A(c, e.k) && (c.value = i), e.k && (u[e.k] = i));
      };
      if (i) {
        const O = () => {
          V(), yn.delete(e);
        };
        O.id = -1, yn.set(e, O), ye(O, n);
      } else
        qs(e), V();
    }
  }
}
function qs(e) {
  const t = yn.get(e);
  t && (t.flags |= 8, yn.delete(e));
}
Pn().requestIdleCallback;
Pn().cancelIdleCallback;
const At = (e) => !!e.type.__asyncLoader, Mn = (e) => e.type.__isKeepAlive;
function Yi(e, t) {
  ao(e, "a", t);
}
function qi(e, t) {
  ao(e, "da", t);
}
function ao(e, t, n = me) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if ($n(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Mn(r.parent.vnode) && Xi(s, t, n, r), r = r.parent;
  }
}
function Xi(e, t, n, s) {
  const r = $n(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ps(() => {
    ps(s[t], r);
  }, n);
}
function $n(e, t, n = me, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      Qe();
      const l = nn(n), c = Oe(t, n, e, i);
      return l(), et(), c;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const nt = (e) => (t, n = me) => {
  (!Zt || e === "sp") && $n(e, (...s) => t(...s), n);
}, Gi = nt("bm"), Is = nt("m"), Ji = nt(
  "bu"
), zi = nt("u"), ho = nt(
  "bum"
), Ps = nt("um"), Zi = nt(
  "sp"
), Qi = nt("rtg"), el = nt("rtc");
function tl(e, t = me) {
  $n("ec", e, t);
}
const nl = /* @__PURE__ */ Symbol.for("v-ndc");
function xn(e, t, n = {}, s, r) {
  if (de.ce || de.parent && At(de.parent) && de.parent.ce) {
    const d = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), re(), Ke(
      Ce,
      null,
      [q("slot", n, s)],
      d ? -2 : 64
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1), re();
  const i = o && po(o(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, c = Ke(
    Ce,
    {
      key: (l && !Fe(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return o && o._c && (o._d = !0), c;
}
function po(e) {
  return e.some((t) => zt(t) ? !(t.type === ae || t.type === Ce && !po(t.children)) : !0) ? e : null;
}
function sl(e, t) {
  const n = {};
  for (const s in e)
    n[/[A-Z]/.test(s) ? `on:${s}` : an(s)] = e[s];
  return n;
}
const rs = (e) => e ? Lo(e) ? Ln(e) : rs(e.parent) : null, Kt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ie(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => rs(e.parent),
    $root: (e) => rs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => mo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      As(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Di.bind(e.proxy)),
    $watch: (e) => Ui.bind(e)
  })
), Wn = (e, t) => e !== X && !e.__isScriptSetup && U(e, t), rl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const g = i[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Wn(s, t))
          return i[t] = 1, s[t];
        if (r !== X && U(r, t))
          return i[t] = 2, r[t];
        if (U(o, t))
          return i[t] = 3, o[t];
        if (n !== X && U(n, t))
          return i[t] = 4, n[t];
        os && (i[t] = 0);
      }
    }
    const d = Kt[t];
    let u, h;
    if (d)
      return t === "$attrs" && ue(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== X && U(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = c.config.globalProperties, U(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return Wn(r, t) ? (r[t] = n, !0) : s !== X && U(s, t) ? (s[t] = n, !0) : U(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: o, type: i }
  }, l) {
    let c;
    return !!(n[l] || e !== X && l[0] !== "$" && U(e, l) || Wn(t, l) || U(o, l) || U(s, l) || U(Kt, l) || U(r.config.globalProperties, l) || (c = i.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : U(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Xs(e) {
  return M(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let os = !0;
function ol(e) {
  const t = mo(e), n = e.proxy, s = e.ctx;
  os = !1, t.beforeCreate && Gs(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: c,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: h,
    mounted: g,
    beforeUpdate: y,
    updated: A,
    activated: T,
    deactivated: L,
    beforeDestroy: V,
    beforeUnmount: O,
    destroyed: N,
    unmounted: I,
    render: B,
    renderTracked: k,
    renderTriggered: ne,
    errorCaptured: _e,
    serverPrefetch: D,
    // public API
    expose: Y,
    inheritAttrs: ee,
    // assets
    components: E,
    directives: Q,
    filters: ce
  } = t;
  if (d && il(d, s, null), i)
    for (const te in i) {
      const G = i[te];
      R(G) && (s[te] = G.bind(n));
    }
  if (r) {
    const te = r.call(n, n);
    W(te) && (e.data = /* @__PURE__ */ Fn(te));
  }
  if (os = !0, o)
    for (const te in o) {
      const G = o[te], at = R(G) ? G.bind(n, n) : R(G.get) ? G.get.bind(n, n) : Ue, rn = !R(G) && R(G.set) ? G.set.bind(n) : Ue, dt = Tn({
        get: at,
        set: rn
      });
      Object.defineProperty(s, te, {
        enumerable: !0,
        configurable: !0,
        get: () => dt.value,
        set: ($e) => dt.value = $e
      });
    }
  if (l)
    for (const te in l)
      go(l[te], s, n, te);
  if (c) {
    const te = R(c) ? c.call(n) : c;
    Reflect.ownKeys(te).forEach((G) => {
      Vi(G, te[G]);
    });
  }
  u && Gs(u, e, "c");
  function le(te, G) {
    M(G) ? G.forEach((at) => te(at.bind(n))) : G && te(G.bind(n));
  }
  if (le(Gi, h), le(Is, g), le(Ji, y), le(zi, A), le(Yi, T), le(qi, L), le(tl, _e), le(el, k), le(Qi, ne), le(ho, O), le(Ps, I), le(Zi, D), M(Y))
    if (Y.length) {
      const te = e.exposed || (e.exposed = {});
      Y.forEach((G) => {
        Object.defineProperty(te, G, {
          get: () => n[G],
          set: (at) => n[G] = at,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  B && e.render === Ue && (e.render = B), ee != null && (e.inheritAttrs = ee), E && (e.components = E), Q && (e.directives = Q), D && uo(e);
}
function il(e, t, n = Ue) {
  M(e) && (e = is(e));
  for (const s in e) {
    const r = e[s];
    let o;
    W(r) ? "default" in r ? o = hn(
      r.from || s,
      r.default,
      !0
    ) : o = hn(r.from || s) : o = hn(r), /* @__PURE__ */ se(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[s] = o;
  }
}
function Gs(e, t, n) {
  Oe(
    M(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function go(e, t, n, s) {
  let r = s.includes(".") ? so(n, s) : () => n[s];
  if (oe(e)) {
    const o = t[e];
    R(o) && pn(r, o);
  } else if (R(e))
    pn(r, e.bind(n));
  else if (W(e))
    if (M(e))
      e.forEach((o) => go(o, t, n, s));
    else {
      const o = R(e.handler) ? e.handler.bind(n) : t[e.handler];
      R(o) && pn(r, o, e);
    }
}
function mo(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = o.get(t);
  let c;
  return l ? c = l : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach(
    (d) => Cn(c, d, i, !0)
  ), Cn(c, t, i)), W(t) && o.set(t, c), c;
}
function Cn(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && Cn(e, o, n, !0), r && r.forEach(
    (i) => Cn(e, i, n, !0)
  );
  for (const i in t)
    if (!(s && i === "expose")) {
      const l = ll[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const ll = {
  data: Js,
  props: zs,
  emits: zs,
  // objects
  methods: Vt,
  computed: Vt,
  // lifecycle
  beforeCreate: he,
  created: he,
  beforeMount: he,
  mounted: he,
  beforeUpdate: he,
  updated: he,
  beforeDestroy: he,
  beforeUnmount: he,
  destroyed: he,
  unmounted: he,
  activated: he,
  deactivated: he,
  errorCaptured: he,
  serverPrefetch: he,
  // assets
  components: Vt,
  directives: Vt,
  // watch
  watch: fl,
  // provide / inject
  provide: Js,
  inject: cl
};
function Js(e, t) {
  return t ? e ? function() {
    return ie(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function cl(e, t) {
  return Vt(is(e), is(t));
}
function is(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function he(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Vt(e, t) {
  return e ? ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function zs(e, t) {
  return e ? M(e) && M(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ie(
    /* @__PURE__ */ Object.create(null),
    Xs(e),
    Xs(t ?? {})
  ) : t;
}
function fl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ie(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = he(e[s], t[s]);
  return n;
}
function _o() {
  return {
    app: null,
    config: {
      isNativeTag: Tr,
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
let ul = 0;
function al(e, t) {
  return function(s, r = null) {
    R(s) || (s = ie({}, s)), r != null && !W(r) && (r = null);
    const o = _o(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const d = o.app = {
      _uid: ul++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Kl,
      get config() {
        return o.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return i.has(u) || (u && R(u.install) ? (i.add(u), u.install(d, ...h)) : R(u) && (i.add(u), u(d, ...h))), d;
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), d;
      },
      component(u, h) {
        return h ? (o.components[u] = h, d) : o.components[u];
      },
      directive(u, h) {
        return h ? (o.directives[u] = h, d) : o.directives[u];
      },
      mount(u, h, g) {
        if (!c) {
          const y = d._ceVNode || q(s, r);
          return y.appContext = o, g === !0 ? g = "svg" : g === !1 && (g = void 0), e(y, u, g), c = !0, d._container = u, u.__vue_app__ = d, Ln(y.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        c && (Oe(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, h) {
        return o.provides[u] = h, d;
      },
      runWithContext(u) {
        const h = It;
        It = d;
        try {
          return u();
        } finally {
          It = h;
        }
      }
    };
    return d;
  };
}
let It = null;
const dl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${lt(t)}Modifiers`] || e[`${ut(t)}Modifiers`];
function hl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || X;
  let r = n;
  const o = t.startsWith("update:"), i = o && dl(s, t.slice(7));
  i && (i.trim && (r = n.map((u) => oe(u) ? u.trim() : u)), i.number && (r = n.map(ms)));
  let l, c = s[l = an(t)] || // also try camelCase event handler (#2249)
  s[l = an(lt(t))];
  !c && o && (c = s[l = an(ut(t))]), c && Oe(
    c,
    e,
    6,
    r
  );
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Oe(
      d,
      e,
      6,
      r
    );
  }
}
const pl = /* @__PURE__ */ new WeakMap();
function vo(e, t, n = !1) {
  const s = n ? pl : t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, l = !1;
  if (!R(e)) {
    const c = (d) => {
      const u = vo(d, t, !0);
      u && (l = !0, ie(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !o && !l ? (W(e) && s.set(e, null), null) : (M(o) ? o.forEach((c) => i[c] = null) : ie(i, o), W(e) && s.set(e, i), i);
}
function Rn(e, t) {
  return !e || !An(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), U(e, t[0].toLowerCase() + t.slice(1)) || U(e, ut(t)) || U(e, t));
}
function Zs(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [o],
    slots: i,
    attrs: l,
    emit: c,
    render: d,
    renderCache: u,
    props: h,
    data: g,
    setupState: y,
    ctx: A,
    inheritAttrs: T
  } = e, L = bn(e);
  let V, O;
  try {
    if (n.shapeFlag & 4) {
      const I = r || s, B = I;
      V = je(
        d.call(
          B,
          I,
          u,
          h,
          y,
          g,
          A
        )
      ), O = l;
    } else {
      const I = t;
      V = je(
        I.length > 1 ? I(
          h,
          { attrs: l, slots: i, emit: c }
        ) : I(
          h,
          null
        )
      ), O = t.props ? l : gl(l);
    }
  } catch (I) {
    Wt.length = 0, On(I, e, 1), V = q(ae);
  }
  let N = V;
  if (O && T !== !1) {
    const I = Object.keys(O), { shapeFlag: B } = N;
    I.length && B & 7 && (o && I.some(hs) && (O = ml(
      O,
      o
    )), N = ft(N, O, !1, !0));
  }
  return n.dirs && (N = ft(N, null, !1, !0), N.dirs = N.dirs ? N.dirs.concat(n.dirs) : n.dirs), n.transition && Gt(N, n.transition), V = N, bn(L), V;
}
const gl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || An(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ml = (e, t) => {
  const n = {};
  for (const s in e)
    (!hs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function _l(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: l, patchFlag: c } = t, d = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? Qs(s, i, d) : !!i;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const g = u[h];
        if (bo(i, s, g) && !Rn(d, g))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? Qs(s, i, d) : !0 : !!i;
  return !1;
}
function Qs(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (bo(t, e, o) && !Rn(n, o))
      return !0;
  }
  return !1;
}
function bo(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && W(s) && W(r) ? !vs(s, r) : s !== r;
}
function vl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const yo = {}, xo = () => Object.create(yo), Co = (e) => Object.getPrototypeOf(e) === yo;
function bl(e, t, n, s = !1) {
  const r = {}, o = xo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), wo(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ Ti(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function yl(e, t, n, s) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, l = /* @__PURE__ */ j(r), [c] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let g = u[h];
        if (Rn(e.emitsOptions, g))
          continue;
        const y = t[g];
        if (c)
          if (U(o, g))
            y !== o[g] && (o[g] = y, d = !0);
          else {
            const A = lt(g);
            r[A] = ls(
              c,
              l,
              A,
              y,
              e,
              !1
            );
          }
        else
          y !== o[g] && (o[g] = y, d = !0);
      }
    }
  } else {
    wo(e, t, r, o) && (d = !0);
    let u;
    for (const h in l)
      (!t || // for camelCase
      !U(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = ut(h)) === h || !U(t, u))) && (c ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[h] = ls(
        c,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete r[h]);
    if (o !== l)
      for (const h in o)
        (!t || !U(t, h)) && (delete o[h], d = !0);
  }
  d && Je(e.attrs, "set", "");
}
function wo(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let c in t) {
      if (Ht(c))
        continue;
      const d = t[c];
      let u;
      r && U(r, u = lt(c)) ? !o || !o.includes(u) ? n[u] = d : (l || (l = {}))[u] = d : Rn(e.emitsOptions, c) || (!(c in s) || d !== s[c]) && (s[c] = d, i = !0);
    }
  if (o) {
    const c = /* @__PURE__ */ j(n), d = l || X;
    for (let u = 0; u < o.length; u++) {
      const h = o[u];
      n[h] = ls(
        r,
        c,
        h,
        d[h],
        e,
        !U(d, h)
      );
    }
  }
  return i;
}
function ls(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = U(i, "default");
    if (l && s === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && R(c)) {
        const { propsDefaults: d } = r;
        if (n in d)
          s = d[n];
        else {
          const u = nn(r);
          s = d[n] = c.call(
            null,
            t
          ), u();
        }
      } else
        s = c;
      r.ce && r.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (o && !l ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === ut(n)) && (s = !0));
  }
  return s;
}
const xl = /* @__PURE__ */ new WeakMap();
function So(e, t, n = !1) {
  const s = n ? xl : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, l = [];
  let c = !1;
  if (!R(e)) {
    const u = (h) => {
      c = !0;
      const [g, y] = So(h, t, !0);
      ie(i, g), y && l.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !c)
    return W(e) && s.set(e, wt), wt;
  if (M(o))
    for (let u = 0; u < o.length; u++) {
      const h = lt(o[u]);
      er(h) && (i[h] = X);
    }
  else if (o)
    for (const u in o) {
      const h = lt(u);
      if (er(h)) {
        const g = o[u], y = i[h] = M(g) || R(g) ? { type: g } : ie({}, g), A = y.type;
        let T = !1, L = !0;
        if (M(A))
          for (let V = 0; V < A.length; ++V) {
            const O = A[V], N = R(O) && O.name;
            if (N === "Boolean") {
              T = !0;
              break;
            } else N === "String" && (L = !1);
          }
        else
          T = R(A) && A.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = T, y[
          1
          /* shouldCastTrue */
        ] = L, (T || U(y, "default")) && l.push(h);
      }
    }
  const d = [i, l];
  return W(e) && s.set(e, d), d;
}
function er(e) {
  return e[0] !== "$" && !Ht(e);
}
const Fs = (e) => e === "_" || e === "_ctx" || e === "$stable", Os = (e) => M(e) ? e.map(je) : [je(e)], Cl = (e, t, n) => {
  if (t._n)
    return t;
  const s = Te((...r) => Os(t(...r)), n);
  return s._c = !1, s;
}, To = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Fs(r)) continue;
    const o = e[r];
    if (R(o))
      t[r] = Cl(r, o, s);
    else if (o != null) {
      const i = Os(o);
      t[r] = () => i;
    }
  }
}, Eo = (e, t) => {
  const n = Os(t);
  e.slots.default = () => n;
}, Ao = (e, t, n) => {
  for (const s in t)
    (n || !Fs(s)) && (e[s] = t[s]);
}, wl = (e, t, n) => {
  const s = e.slots = xo();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Ao(s, t, n), n && Or(s, "_", r, !0)) : To(t, s);
  } else t && Eo(e, t);
}, Sl = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = X;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : Ao(r, t, n) : (o = !t.$stable, To(t, r)), i = t;
  } else t && (Eo(e, t), i = { default: 1 });
  if (o)
    for (const l in r)
      !Fs(l) && i[l] == null && delete r[l];
}, ye = Pl;
function Tl(e) {
  return El(e);
}
function El(e, t) {
  const n = Pn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: o,
    createElement: i,
    createText: l,
    createComment: c,
    setText: d,
    setElementText: u,
    parentNode: h,
    nextSibling: g,
    setScopeId: y = Ue,
    insertStaticContent: A
  } = e, T = (f, a, p, b = null, m = null, _ = null, w = void 0, C = null, x = !!a.dynamicChildren) => {
    if (f === a)
      return;
    f && !vt(f, a) && (b = on(f), $e(f, m, _, !0), f = null), a.patchFlag === -2 && (x = !1, a.dynamicChildren = null);
    const { type: v, ref: F, shapeFlag: S } = a;
    switch (v) {
      case Dn:
        L(f, a, p, b);
        break;
      case ae:
        V(f, a, p, b);
        break;
      case Yn:
        f == null && O(a, p, b, w);
        break;
      case Ce:
        E(
          f,
          a,
          p,
          b,
          m,
          _,
          w,
          C,
          x
        );
        break;
      default:
        S & 1 ? B(
          f,
          a,
          p,
          b,
          m,
          _,
          w,
          C,
          x
        ) : S & 6 ? Q(
          f,
          a,
          p,
          b,
          m,
          _,
          w,
          C,
          x
        ) : (S & 64 || S & 128) && v.process(
          f,
          a,
          p,
          b,
          m,
          _,
          w,
          C,
          x,
          Mt
        );
    }
    F != null && m ? Bt(F, f && f.ref, _, a || f, !a) : F == null && f && f.ref != null && Bt(f.ref, null, _, f, !0);
  }, L = (f, a, p, b) => {
    if (f == null)
      s(
        a.el = l(a.children),
        p,
        b
      );
    else {
      const m = a.el = f.el;
      a.children !== f.children && d(m, a.children);
    }
  }, V = (f, a, p, b) => {
    f == null ? s(
      a.el = c(a.children || ""),
      p,
      b
    ) : a.el = f.el;
  }, O = (f, a, p, b) => {
    [f.el, f.anchor] = A(
      f.children,
      a,
      p,
      b,
      f.el,
      f.anchor
    );
  }, N = ({ el: f, anchor: a }, p, b) => {
    let m;
    for (; f && f !== a; )
      m = g(f), s(f, p, b), f = m;
    s(a, p, b);
  }, I = ({ el: f, anchor: a }) => {
    let p;
    for (; f && f !== a; )
      p = g(f), r(f), f = p;
    r(a);
  }, B = (f, a, p, b, m, _, w, C, x) => {
    if (a.type === "svg" ? w = "svg" : a.type === "math" && (w = "mathml"), f == null)
      k(
        a,
        p,
        b,
        m,
        _,
        w,
        C,
        x
      );
    else {
      const v = f.el && f.el._isVueCE ? f.el : null;
      try {
        v && v._beginPatch(), D(
          f,
          a,
          m,
          _,
          w,
          C,
          x
        );
      } finally {
        v && v._endPatch();
      }
    }
  }, k = (f, a, p, b, m, _, w, C) => {
    let x, v;
    const { props: F, shapeFlag: S, transition: P, dirs: $ } = f;
    if (x = f.el = i(
      f.type,
      _,
      F && F.is,
      F
    ), S & 8 ? u(x, f.children) : S & 16 && _e(
      f.children,
      x,
      null,
      b,
      m,
      kn(f, _),
      w,
      C
    ), $ && ht(f, null, b, "created"), ne(x, f, f.scopeId, w, b), F) {
      for (const J in F)
        J !== "value" && !Ht(J) && o(x, J, null, F[J], _, b);
      "value" in F && o(x, "value", null, F.value, _), (v = F.onVnodeBeforeMount) && Ne(v, b, f);
    }
    $ && ht(f, null, b, "beforeMount");
    const H = Al(m, P);
    H && P.beforeEnter(x), s(x, a, p), ((v = F && F.onVnodeMounted) || H || $) && ye(() => {
      v && Ne(v, b, f), H && P.enter(x), $ && ht(f, null, b, "mounted");
    }, m);
  }, ne = (f, a, p, b, m) => {
    if (p && y(f, p), b)
      for (let _ = 0; _ < b.length; _++)
        y(f, b[_]);
    if (m) {
      let _ = m.subTree;
      if (a === _ || Oo(_.type) && (_.ssContent === a || _.ssFallback === a)) {
        const w = m.vnode;
        ne(
          f,
          w,
          w.scopeId,
          w.slotScopeIds,
          m.parent
        );
      }
    }
  }, _e = (f, a, p, b, m, _, w, C, x = 0) => {
    for (let v = x; v < f.length; v++) {
      const F = f[v] = C ? Ge(f[v]) : je(f[v]);
      T(
        null,
        F,
        a,
        p,
        b,
        m,
        _,
        w,
        C
      );
    }
  }, D = (f, a, p, b, m, _, w) => {
    const C = a.el = f.el;
    let { patchFlag: x, dynamicChildren: v, dirs: F } = a;
    x |= f.patchFlag & 16;
    const S = f.props || X, P = a.props || X;
    let $;
    if (p && pt(p, !1), ($ = P.onVnodeBeforeUpdate) && Ne($, p, a, f), F && ht(a, f, p, "beforeUpdate"), p && pt(p, !0), (S.innerHTML && P.innerHTML == null || S.textContent && P.textContent == null) && u(C, ""), v ? Y(
      f.dynamicChildren,
      v,
      C,
      p,
      b,
      kn(a, m),
      _
    ) : w || G(
      f,
      a,
      C,
      null,
      p,
      b,
      kn(a, m),
      _,
      !1
    ), x > 0) {
      if (x & 16)
        ee(C, S, P, p, m);
      else if (x & 2 && S.class !== P.class && o(C, "class", null, P.class, m), x & 4 && o(C, "style", S.style, P.style, m), x & 8) {
        const H = a.dynamicProps;
        for (let J = 0; J < H.length; J++) {
          const K = H[J], ve = S[K], be = P[K];
          (be !== ve || K === "value") && o(C, K, ve, be, m, p);
        }
      }
      x & 1 && f.children !== a.children && u(C, a.children);
    } else !w && v == null && ee(C, S, P, p, m);
    (($ = P.onVnodeUpdated) || F) && ye(() => {
      $ && Ne($, p, a, f), F && ht(a, f, p, "updated");
    }, b);
  }, Y = (f, a, p, b, m, _, w) => {
    for (let C = 0; C < a.length; C++) {
      const x = f[C], v = a[C], F = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === Ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !vt(x, v) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 198) ? h(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      T(
        x,
        v,
        F,
        null,
        b,
        m,
        _,
        w,
        !0
      );
    }
  }, ee = (f, a, p, b, m) => {
    if (a !== p) {
      if (a !== X)
        for (const _ in a)
          !Ht(_) && !(_ in p) && o(
            f,
            _,
            a[_],
            null,
            m,
            b
          );
      for (const _ in p) {
        if (Ht(_)) continue;
        const w = p[_], C = a[_];
        w !== C && _ !== "value" && o(f, _, C, w, m, b);
      }
      "value" in p && o(f, "value", a.value, p.value, m);
    }
  }, E = (f, a, p, b, m, _, w, C, x) => {
    const v = a.el = f ? f.el : l(""), F = a.anchor = f ? f.anchor : l("");
    let { patchFlag: S, dynamicChildren: P, slotScopeIds: $ } = a;
    $ && (C = C ? C.concat($) : $), f == null ? (s(v, p, b), s(F, p, b), _e(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      a.children || [],
      p,
      F,
      m,
      _,
      w,
      C,
      x
    )) : S > 0 && S & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === P.length ? (Y(
      f.dynamicChildren,
      P,
      p,
      m,
      _,
      w,
      C
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (a.key != null || m && a === m.subTree) && Io(
      f,
      a,
      !0
      /* shallow */
    )) : G(
      f,
      a,
      p,
      F,
      m,
      _,
      w,
      C,
      x
    );
  }, Q = (f, a, p, b, m, _, w, C, x) => {
    a.slotScopeIds = C, f == null ? a.shapeFlag & 512 ? m.ctx.activate(
      a,
      p,
      b,
      w,
      x
    ) : ce(
      a,
      p,
      b,
      m,
      _,
      w,
      x
    ) : ke(f, a, x);
  }, ce = (f, a, p, b, m, _, w) => {
    const C = f.component = Ll(
      f,
      b,
      m
    );
    if (Mn(f) && (C.ctx.renderer = Mt), Nl(C, !1, w), C.asyncDep) {
      if (m && m.registerDep(C, le, w), !f.el) {
        const x = C.subTree = q(ae);
        V(null, x, a, p), f.placeholder = x.el;
      }
    } else
      le(
        C,
        f,
        a,
        p,
        m,
        _,
        w
      );
  }, ke = (f, a, p) => {
    const b = a.component = f.component;
    if (_l(f, a, p))
      if (b.asyncDep && !b.asyncResolved) {
        te(b, a, p);
        return;
      } else
        b.next = a, b.update();
    else
      a.el = f.el, b.vnode = a;
  }, le = (f, a, p, b, m, _, w) => {
    const C = () => {
      if (f.isMounted) {
        let { next: S, bu: P, u: $, parent: H, vnode: J } = f;
        {
          const De = Po(f);
          if (De) {
            S && (S.el = J.el, te(f, S, w)), De.asyncDep.then(() => {
              ye(() => {
                f.isUnmounted || v();
              }, m);
            });
            return;
          }
        }
        let K = S, ve;
        pt(f, !1), S ? (S.el = J.el, te(f, S, w)) : S = J, P && dn(P), (ve = S.props && S.props.onVnodeBeforeUpdate) && Ne(ve, H, S, J), pt(f, !0);
        const be = Zs(f), Re = f.subTree;
        f.subTree = be, T(
          Re,
          be,
          // parent may have changed if it's in a teleport
          h(Re.el),
          // anchor may have changed if it's in a fragment
          on(Re),
          f,
          m,
          _
        ), S.el = be.el, K === null && vl(f, be.el), $ && ye($, m), (ve = S.props && S.props.onVnodeUpdated) && ye(
          () => Ne(ve, H, S, J),
          m
        );
      } else {
        let S;
        const { el: P, props: $ } = a, { bm: H, m: J, parent: K, root: ve, type: be } = f, Re = At(a);
        pt(f, !1), H && dn(H), !Re && (S = $ && $.onVnodeBeforeMount) && Ne(S, K, a), pt(f, !0);
        {
          ve.ce && ve.ce._hasShadowRoot() && ve.ce._injectChildStyle(be);
          const De = f.subTree = Zs(f);
          T(
            null,
            De,
            p,
            b,
            f,
            m,
            _
          ), a.el = De.el;
        }
        if (J && ye(J, m), !Re && (S = $ && $.onVnodeMounted)) {
          const De = a;
          ye(
            () => Ne(S, K, De),
            m
          );
        }
        (a.shapeFlag & 256 || K && At(K.vnode) && K.vnode.shapeFlag & 256) && f.a && ye(f.a, m), f.isMounted = !0, a = p = b = null;
      }
    };
    f.scope.on();
    const x = f.effect = new Dr(C);
    f.scope.off();
    const v = f.update = x.run.bind(x), F = f.job = x.runIfDirty.bind(x);
    F.i = f, F.id = f.uid, x.scheduler = () => As(F), pt(f, !0), v();
  }, te = (f, a, p) => {
    a.component = f;
    const b = f.vnode.props;
    f.vnode = a, f.next = null, yl(f, a.props, b, p), Sl(f, a.children, p), Qe(), Ws(f), et();
  }, G = (f, a, p, b, m, _, w, C, x = !1) => {
    const v = f && f.children, F = f ? f.shapeFlag : 0, S = a.children, { patchFlag: P, shapeFlag: $ } = a;
    if (P > 0) {
      if (P & 128) {
        rn(
          v,
          S,
          p,
          b,
          m,
          _,
          w,
          C,
          x
        );
        return;
      } else if (P & 256) {
        at(
          v,
          S,
          p,
          b,
          m,
          _,
          w,
          C,
          x
        );
        return;
      }
    }
    $ & 8 ? (F & 16 && Ot(v, m, _), S !== v && u(p, S)) : F & 16 ? $ & 16 ? rn(
      v,
      S,
      p,
      b,
      m,
      _,
      w,
      C,
      x
    ) : Ot(v, m, _, !0) : (F & 8 && u(p, ""), $ & 16 && _e(
      S,
      p,
      b,
      m,
      _,
      w,
      C,
      x
    ));
  }, at = (f, a, p, b, m, _, w, C, x) => {
    f = f || wt, a = a || wt;
    const v = f.length, F = a.length, S = Math.min(v, F);
    let P;
    for (P = 0; P < S; P++) {
      const $ = a[P] = x ? Ge(a[P]) : je(a[P]);
      T(
        f[P],
        $,
        p,
        null,
        m,
        _,
        w,
        C,
        x
      );
    }
    v > F ? Ot(
      f,
      m,
      _,
      !0,
      !1,
      S
    ) : _e(
      a,
      p,
      b,
      m,
      _,
      w,
      C,
      x,
      S
    );
  }, rn = (f, a, p, b, m, _, w, C, x) => {
    let v = 0;
    const F = a.length;
    let S = f.length - 1, P = F - 1;
    for (; v <= S && v <= P; ) {
      const $ = f[v], H = a[v] = x ? Ge(a[v]) : je(a[v]);
      if (vt($, H))
        T(
          $,
          H,
          p,
          null,
          m,
          _,
          w,
          C,
          x
        );
      else
        break;
      v++;
    }
    for (; v <= S && v <= P; ) {
      const $ = f[S], H = a[P] = x ? Ge(a[P]) : je(a[P]);
      if (vt($, H))
        T(
          $,
          H,
          p,
          null,
          m,
          _,
          w,
          C,
          x
        );
      else
        break;
      S--, P--;
    }
    if (v > S) {
      if (v <= P) {
        const $ = P + 1, H = $ < F ? a[$].el : b;
        for (; v <= P; )
          T(
            null,
            a[v] = x ? Ge(a[v]) : je(a[v]),
            p,
            H,
            m,
            _,
            w,
            C,
            x
          ), v++;
      }
    } else if (v > P)
      for (; v <= S; )
        $e(f[v], m, _, !0), v++;
    else {
      const $ = v, H = v, J = /* @__PURE__ */ new Map();
      for (v = H; v <= P; v++) {
        const we = a[v] = x ? Ge(a[v]) : je(a[v]);
        we.key != null && J.set(we.key, v);
      }
      let K, ve = 0;
      const be = P - H + 1;
      let Re = !1, De = 0;
      const $t = new Array(be);
      for (v = 0; v < be; v++) $t[v] = 0;
      for (v = $; v <= S; v++) {
        const we = f[v];
        if (ve >= be) {
          $e(we, m, _, !0);
          continue;
        }
        let Le;
        if (we.key != null)
          Le = J.get(we.key);
        else
          for (K = H; K <= P; K++)
            if ($t[K - H] === 0 && vt(we, a[K])) {
              Le = K;
              break;
            }
        Le === void 0 ? $e(we, m, _, !0) : ($t[Le - H] = v + 1, Le >= De ? De = Le : Re = !0, T(
          we,
          a[Le],
          p,
          null,
          m,
          _,
          w,
          C,
          x
        ), ve++);
      }
      const Ns = Re ? Il($t) : wt;
      for (K = Ns.length - 1, v = be - 1; v >= 0; v--) {
        const we = H + v, Le = a[we], Vs = a[we + 1], Hs = we + 1 < F ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Vs.el || Fo(Vs)
        ) : b;
        $t[v] === 0 ? T(
          null,
          Le,
          p,
          Hs,
          m,
          _,
          w,
          C,
          x
        ) : Re && (K < 0 || v !== Ns[K] ? dt(Le, p, Hs, 2) : K--);
      }
    }
  }, dt = (f, a, p, b, m = null) => {
    const { el: _, type: w, transition: C, children: x, shapeFlag: v } = f;
    if (v & 6) {
      dt(f.component.subTree, a, p, b);
      return;
    }
    if (v & 128) {
      f.suspense.move(a, p, b);
      return;
    }
    if (v & 64) {
      w.move(f, a, p, Mt);
      return;
    }
    if (w === Ce) {
      s(_, a, p);
      for (let S = 0; S < x.length; S++)
        dt(x[S], a, p, b);
      s(f.anchor, a, p);
      return;
    }
    if (w === Yn) {
      N(f, a, p);
      return;
    }
    if (b !== 2 && v & 1 && C)
      if (b === 0)
        C.beforeEnter(_), s(_, a, p), ye(() => C.enter(_), m);
      else {
        const { leave: S, delayLeave: P, afterLeave: $ } = C, H = () => {
          f.ctx.isUnmounted ? r(_) : s(_, a, p);
        }, J = () => {
          _._isLeaving && _[He](
            !0
            /* cancelled */
          ), S(_, () => {
            H(), $ && $();
          });
        };
        P ? P(_, H, J) : J();
      }
    else
      s(_, a, p);
  }, $e = (f, a, p, b = !1, m = !1) => {
    const {
      type: _,
      props: w,
      ref: C,
      children: x,
      dynamicChildren: v,
      shapeFlag: F,
      patchFlag: S,
      dirs: P,
      cacheIndex: $
    } = f;
    if (S === -2 && (m = !1), C != null && (Qe(), Bt(C, null, p, f, !0), et()), $ != null && (a.renderCache[$] = void 0), F & 256) {
      a.ctx.deactivate(f);
      return;
    }
    const H = F & 1 && P, J = !At(f);
    let K;
    if (J && (K = w && w.onVnodeBeforeUnmount) && Ne(K, a, f), F & 6)
      Yo(f.component, p, b);
    else {
      if (F & 128) {
        f.suspense.unmount(p, b);
        return;
      }
      H && ht(f, null, a, "beforeUnmount"), F & 64 ? f.type.remove(
        f,
        a,
        p,
        Mt,
        b
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Ce || S > 0 && S & 64) ? Ot(
        v,
        a,
        p,
        !1,
        !0
      ) : (_ === Ce && S & 384 || !m && F & 16) && Ot(x, a, p), b && Ds(f);
    }
    (J && (K = w && w.onVnodeUnmounted) || H) && ye(() => {
      K && Ne(K, a, f), H && ht(f, null, a, "unmounted");
    }, p);
  }, Ds = (f) => {
    const { type: a, el: p, anchor: b, transition: m } = f;
    if (a === Ce) {
      ko(p, b);
      return;
    }
    if (a === Yn) {
      I(f);
      return;
    }
    const _ = () => {
      r(p), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (f.shapeFlag & 1 && m && !m.persisted) {
      const { leave: w, delayLeave: C } = m, x = () => w(p, _);
      C ? C(f.el, _, x) : x();
    } else
      _();
  }, ko = (f, a) => {
    let p;
    for (; f !== a; )
      p = g(f), r(f), f = p;
    r(a);
  }, Yo = (f, a, p) => {
    const { bum: b, scope: m, job: _, subTree: w, um: C, m: x, a: v } = f;
    tr(x), tr(v), b && dn(b), m.stop(), _ && (_.flags |= 8, $e(w, f, a, p)), C && ye(C, a), ye(() => {
      f.isUnmounted = !0;
    }, a);
  }, Ot = (f, a, p, b = !1, m = !1, _ = 0) => {
    for (let w = _; w < f.length; w++)
      $e(f[w], a, p, b, m);
  }, on = (f) => {
    if (f.shapeFlag & 6)
      return on(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const a = g(f.anchor || f.el), p = a && a[Bi];
    return p ? g(p) : a;
  };
  let Vn = !1;
  const Ls = (f, a, p) => {
    let b;
    f == null ? a._vnode && ($e(a._vnode, null, null, !0), b = a._vnode.component) : T(
      a._vnode || null,
      f,
      a,
      null,
      null,
      null,
      p
    ), a._vnode = f, Vn || (Vn = !0, Ws(b), Zr(), Vn = !1);
  }, Mt = {
    p: T,
    um: $e,
    m: dt,
    r: Ds,
    mt: ce,
    mc: _e,
    pc: G,
    pbc: Y,
    n: on,
    o: e
  };
  return {
    render: Ls,
    hydrate: void 0,
    createApp: al(Ls)
  };
}
function kn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function pt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Al(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Io(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (M(s) && M(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = Ge(r[o]), l.el = i.el), !n && l.patchFlag !== -2 && Io(i, l)), l.type === Dn && (l.patchFlag === -1 && (l = r[o] = Ge(l)), l.el = i.el), l.type === ae && !l.el && (l.el = i.el);
    }
}
function Il(e) {
  const t = e.slice(), n = [0];
  let s, r, o, i, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const d = e[s];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[s] = r, n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        l = o + i >> 1, e[n[l]] < d ? o = l + 1 : i = l;
      d < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function Po(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Po(t);
}
function tr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Fo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Fo(t.subTree) : null;
}
const Oo = (e) => e.__isSuspense;
function Pl(e, t) {
  t && t.pendingBranch ? M(e) ? t.effects.push(...e) : t.effects.push(e) : Ni(e);
}
const Ce = /* @__PURE__ */ Symbol.for("v-fgt"), Dn = /* @__PURE__ */ Symbol.for("v-txt"), ae = /* @__PURE__ */ Symbol.for("v-cmt"), Yn = /* @__PURE__ */ Symbol.for("v-stc"), Wt = [];
let Ee = null;
function re(e = !1) {
  Wt.push(Ee = e ? null : []);
}
function Fl() {
  Wt.pop(), Ee = Wt[Wt.length - 1] || null;
}
let Jt = 1;
function wn(e, t = !1) {
  Jt += e, e < 0 && Ee && t && (Ee.hasOnce = !0);
}
function Mo(e) {
  return e.dynamicChildren = Jt > 0 ? Ee || wt : null, Fl(), Jt > 0 && Ee && Ee.push(e), e;
}
function Be(e, t, n, s, r, o) {
  return Mo(
    Z(
      e,
      t,
      n,
      s,
      r,
      o,
      !0
    )
  );
}
function Ke(e, t, n, s, r) {
  return Mo(
    q(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function zt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function vt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const $o = ({ key: e }) => e ?? null, gn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? oe(e) || /* @__PURE__ */ se(e) || R(e) ? { i: de, r: e, k: t, f: !!n } : e : null);
function Z(e, t = null, n = null, s = 0, r = null, o = e === Ce ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && $o(t),
    ref: t && gn(t),
    scopeId: eo,
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
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: de
  };
  return l ? (Ms(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= oe(n) ? 8 : 16), Jt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ee && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ee.push(c), c;
}
const q = Ol;
function Ol(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === nl) && (e = ae), zt(e)) {
    const l = ft(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ms(l, n), Jt > 0 && !o && Ee && (l.shapeFlag & 6 ? Ee[Ee.indexOf(e)] = l : Ee.push(l)), l.patchFlag = -2, l;
  }
  if (Ul(e) && (e = e.__vccOpts), t) {
    t = Ml(t);
    let { class: l, style: c } = t;
    l && !oe(l) && (t.class = Ft(l)), W(c) && (/* @__PURE__ */ Es(c) && !M(c) && (c = ie({}, c)), t.style = _s(c));
  }
  const i = oe(e) ? 1 : Oo(e) ? 128 : ro(e) ? 64 : W(e) ? 4 : R(e) ? 2 : 0;
  return Z(
    e,
    t,
    n,
    s,
    r,
    i,
    o,
    !0
  );
}
function Ml(e) {
  return e ? /* @__PURE__ */ Es(e) || Co(e) ? ie({}, e) : e : null;
}
function ft(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: l, transition: c } = e, d = t ? Ro(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && $o(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? M(o) ? o.concat(gn(t)) : [o, gn(t)] : gn(t)
    ) : o,
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
    patchFlag: t && e.type !== Ce ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && ft(e.ssContent),
    ssFallback: e.ssFallback && ft(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && Gt(
    u,
    c.clone(u)
  ), u;
}
function $l(e = " ", t = 0) {
  return q(Dn, null, e, t);
}
function Pt(e = "", t = !1) {
  return t ? (re(), Ke(ae, null, e)) : q(ae, null, e);
}
function je(e) {
  return e == null || typeof e == "boolean" ? q(ae) : M(e) ? q(
    Ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : zt(e) ? Ge(e) : q(Dn, null, String(e));
}
function Ge(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ft(e);
}
function Ms(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (M(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ms(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Co(t) ? t._ctx = de : r === 3 && de && (de.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else R(t) ? (t = { default: t, _ctx: de }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [$l(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ro(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Ft([t.class, s.class]));
      else if (r === "style")
        t.style = _s([t.style, s.style]);
      else if (An(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(M(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Ne(e, t, n, s = null) {
  Oe(e, t, 7, [
    n,
    s
  ]);
}
const Rl = _o();
let Dl = 0;
function Ll(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Rl, o = {
    uid: Dl++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new oi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: So(s, r),
    emitsOptions: vo(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: X,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: X,
    data: X,
    props: X,
    attrs: X,
    slots: X,
    refs: X,
    setupState: X,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = hl.bind(null, o), e.ce && e.ce(o), o;
}
let me = null;
const Do = () => me || de;
let Sn, cs;
{
  const e = Pn(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  Sn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => me = n
  ), cs = t(
    "__VUE_SSR_SETTERS__",
    (n) => Zt = n
  );
}
const nn = (e) => {
  const t = me;
  return Sn(e), e.scope.on(), () => {
    e.scope.off(), Sn(t);
  };
}, nr = () => {
  me && me.scope.off(), Sn(null);
};
function Lo(e) {
  return e.vnode.shapeFlag & 4;
}
let Zt = !1;
function Nl(e, t = !1, n = !1) {
  t && cs(t);
  const { props: s, children: r } = e.vnode, o = Lo(e);
  bl(e, s, o, t), wl(e, r, n || t);
  const i = o ? Vl(e, t) : void 0;
  return t && cs(!1), i;
}
function Vl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, rl);
  const { setup: s } = n;
  if (s) {
    Qe();
    const r = e.setupContext = s.length > 1 ? jl(e) : null, o = nn(e), i = tn(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Ar(i);
    if (et(), o(), (l || e.sp) && !At(e) && uo(e), l) {
      if (i.then(nr, nr), t)
        return i.then((c) => {
          sr(e, c);
        }).catch((c) => {
          On(c, e, 0);
        });
      e.asyncDep = i;
    } else
      sr(e, i);
  } else
    No(e);
}
function sr(e, t, n) {
  R(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : W(t) && (e.setupState = Gr(t)), No(e);
}
function No(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ue);
  {
    const r = nn(e);
    Qe();
    try {
      ol(e);
    } finally {
      et(), r();
    }
  }
}
const Hl = {
  get(e, t) {
    return ue(e, "get", ""), e[t];
  }
};
function jl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Hl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ln(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Gr(Ei(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Kt)
        return Kt[n](e);
    },
    has(t, n) {
      return n in t || n in Kt;
    }
  })) : e.proxy;
}
function Ul(e) {
  return R(e) && "__vccOpts" in e;
}
const Tn = (e, t) => /* @__PURE__ */ Oi(e, t, Zt);
function Bl(e, t, n) {
  try {
    wn(-1);
    const s = arguments.length;
    return s === 2 ? W(t) && !M(t) ? zt(t) ? q(e, null, [t]) : q(e, t) : q(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && zt(n) && (n = [n]), q(e, t, n));
  } finally {
    wn(1);
  }
}
const Kl = "3.5.28";
let fs;
const rr = typeof window < "u" && window.trustedTypes;
if (rr)
  try {
    fs = /* @__PURE__ */ rr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Vo = fs ? (e) => fs.createHTML(e) : (e) => e, Wl = "http://www.w3.org/2000/svg", kl = "http://www.w3.org/1998/Math/MathML", Xe = typeof document < "u" ? document : null, or = Xe && /* @__PURE__ */ Xe.createElement("template"), Yl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? Xe.createElementNS(Wl, e) : t === "mathml" ? Xe.createElementNS(kl, e) : n ? Xe.createElement(e, { is: n }) : Xe.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => Xe.createTextNode(e),
  createComment: (e) => Xe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Xe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      or.innerHTML = Vo(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = or.content;
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
}, st = "transition", Lt = "animation", Qt = /* @__PURE__ */ Symbol("_vtc"), Ho = {
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
}, ql = /* @__PURE__ */ ie(
  {},
  oo,
  Ho
), Xl = (e) => (e.displayName = "Transition", e.props = ql, e), Gl = /* @__PURE__ */ Xl(
  (e, { slots: t }) => Bl(ki, Jl(e), t)
), gt = (e, t = []) => {
  M(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ir = (e) => e ? M(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Jl(e) {
  const t = {};
  for (const E in e)
    E in Ho || (t[E] = e[E]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: r,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: c = o,
    appearActiveClass: d = i,
    appearToClass: u = l,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: g = `${n}-leave-active`,
    leaveToClass: y = `${n}-leave-to`
  } = e, A = zl(r), T = A && A[0], L = A && A[1], {
    onBeforeEnter: V,
    onEnter: O,
    onEnterCancelled: N,
    onLeave: I,
    onLeaveCancelled: B,
    onBeforeAppear: k = V,
    onAppear: ne = O,
    onAppearCancelled: _e = N
  } = t, D = (E, Q, ce, ke) => {
    E._enterCancelled = ke, mt(E, Q ? u : l), mt(E, Q ? d : i), ce && ce();
  }, Y = (E, Q) => {
    E._isLeaving = !1, mt(E, h), mt(E, y), mt(E, g), Q && Q();
  }, ee = (E) => (Q, ce) => {
    const ke = E ? ne : O, le = () => D(Q, E, ce);
    gt(ke, [Q, le]), lr(() => {
      mt(Q, E ? c : o), qe(Q, E ? u : l), ir(ke) || cr(Q, s, T, le);
    });
  };
  return ie(t, {
    onBeforeEnter(E) {
      gt(V, [E]), qe(E, o), qe(E, i);
    },
    onBeforeAppear(E) {
      gt(k, [E]), qe(E, c), qe(E, d);
    },
    onEnter: ee(!1),
    onAppear: ee(!0),
    onLeave(E, Q) {
      E._isLeaving = !0;
      const ce = () => Y(E, Q);
      qe(E, h), E._enterCancelled ? (qe(E, g), ar(E)) : (ar(E), qe(E, g)), lr(() => {
        E._isLeaving && (mt(E, h), qe(E, y), ir(I) || cr(E, s, L, ce));
      }), gt(I, [E, ce]);
    },
    onEnterCancelled(E) {
      D(E, !1, void 0, !0), gt(N, [E]);
    },
    onAppearCancelled(E) {
      D(E, !0, void 0, !0), gt(_e, [E]);
    },
    onLeaveCancelled(E) {
      Y(E), gt(B, [E]);
    }
  });
}
function zl(e) {
  if (e == null)
    return null;
  if (W(e))
    return [qn(e.enter), qn(e.leave)];
  {
    const t = qn(e);
    return [t, t];
  }
}
function qn(e) {
  return zo(e);
}
function qe(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Qt] || (e[Qt] = /* @__PURE__ */ new Set())).add(t);
}
function mt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Qt];
  n && (n.delete(t), n.size || (e[Qt] = void 0));
}
function lr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Zl = 0;
function cr(e, t, n, s) {
  const r = e._endId = ++Zl, o = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: i, timeout: l, propCount: c } = Ql(e, t);
  if (!i)
    return s();
  const d = i + "end";
  let u = 0;
  const h = () => {
    e.removeEventListener(d, g), o();
  }, g = (y) => {
    y.target === e && ++u >= c && h();
  };
  setTimeout(() => {
    u < c && h();
  }, l + 1), e.addEventListener(d, g);
}
function Ql(e, t) {
  const n = window.getComputedStyle(e), s = (A) => (n[A] || "").split(", "), r = s(`${st}Delay`), o = s(`${st}Duration`), i = fr(r, o), l = s(`${Lt}Delay`), c = s(`${Lt}Duration`), d = fr(l, c);
  let u = null, h = 0, g = 0;
  t === st ? i > 0 && (u = st, h = i, g = o.length) : t === Lt ? d > 0 && (u = Lt, h = d, g = c.length) : (h = Math.max(i, d), u = h > 0 ? i > d ? st : Lt : null, g = u ? u === st ? o.length : c.length : 0);
  const y = u === st && /\b(?:transform|all)(?:,|$)/.test(
    s(`${st}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: g,
    hasTransform: y
  };
}
function fr(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => ur(n) + ur(e[s])));
}
function ur(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ar(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function ec(e, t, n) {
  const s = e[Qt];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const En = /* @__PURE__ */ Symbol("_vod"), jo = /* @__PURE__ */ Symbol("_vsh"), tc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[En] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Nt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Nt(e, !0), s.enter(e)) : s.leave(e, () => {
      Nt(e, !1);
    }) : Nt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Nt(e, t);
  }
};
function Nt(e, t) {
  e.style.display = t ? e[En] : "none", e[jo] = !t;
}
const nc = /* @__PURE__ */ Symbol(""), sc = /(?:^|;)\s*display\s*:/;
function rc(e, t, n) {
  const s = e.style, r = oe(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if (oe(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && mn(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && mn(s, i, "");
    for (const i in n)
      i === "display" && (o = !0), mn(s, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = s[nc];
      i && (n += ";" + i), s.cssText = n, o = sc.test(n);
    }
  } else t && e.removeAttribute("style");
  En in e && (e[En] = o ? s.display : "", e[jo] && (s.display = "none"));
}
const dr = /\s*!important$/;
function mn(e, t, n) {
  if (M(n))
    n.forEach((s) => mn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = oc(e, t);
    dr.test(n) ? e.setProperty(
      ut(s),
      n.replace(dr, ""),
      "important"
    ) : e[s] = n;
  }
}
const hr = ["Webkit", "Moz", "ms"], Xn = {};
function oc(e, t) {
  const n = Xn[t];
  if (n)
    return n;
  let s = lt(t);
  if (s !== "filter" && s in e)
    return Xn[t] = s;
  s = Fr(s);
  for (let r = 0; r < hr.length; r++) {
    const o = hr[r] + s;
    if (o in e)
      return Xn[t] = o;
  }
  return t;
}
const pr = "http://www.w3.org/1999/xlink";
function gr(e, t, n, s, r, o = si(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(pr, t.slice(6, t.length)) : e.setAttributeNS(pr, t, n) : n == null || o && !Mr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Fe(n) ? String(n) : n
  );
}
function mr(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Vo(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
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
    l === "boolean" ? n = Mr(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(r || t);
}
function Ct(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function ic(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const _r = /* @__PURE__ */ Symbol("_vei");
function lc(e, t, n, s, r = null) {
  const o = e[_r] || (e[_r] = {}), i = o[t];
  if (s && i)
    i.value = s;
  else {
    const [l, c] = cc(t);
    if (s) {
      const d = o[t] = ac(
        s,
        r
      );
      Ct(e, l, d, c);
    } else i && (ic(e, l, i, c), o[t] = void 0);
  }
}
const vr = /(?:Once|Passive|Capture)$/;
function cc(e) {
  let t;
  if (vr.test(e)) {
    t = {};
    let s;
    for (; s = e.match(vr); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ut(e.slice(2)), t];
}
let Gn = 0;
const fc = /* @__PURE__ */ Promise.resolve(), uc = () => Gn || (fc.then(() => Gn = 0), Gn = Date.now());
function ac(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Oe(
      dc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = uc(), n;
}
function dc(e, t) {
  if (M(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const br = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, hc = (e, t, n, s, r, o) => {
  const i = r === "svg";
  t === "class" ? ec(e, s, i) : t === "style" ? rc(e, n, s) : An(t) ? hs(t) || lc(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : pc(e, t, s, i)) ? (mr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && gr(e, t, s, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !oe(s)) ? mr(e, lt(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), gr(e, t, s, i));
};
function pc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && br(t) && R(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return br(t) && oe(n) ? !1 : t in e;
}
const yr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return M(t) ? (n) => dn(t, n) : t;
};
function gc(e) {
  e.target.composing = !0;
}
function xr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Jn = /* @__PURE__ */ Symbol("_assign");
function Cr(e, t, n) {
  return t && (e = e.trim()), n && (e = ms(e)), e;
}
const mc = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Jn] = yr(r);
    const o = s || r.props && r.props.type === "number";
    Ct(e, t ? "change" : "input", (i) => {
      i.target.composing || e[Jn](Cr(e.value, n, o));
    }), (n || o) && Ct(e, "change", () => {
      e.value = Cr(e.value, n, o);
    }), t || (Ct(e, "compositionstart", gc), Ct(e, "compositionend", xr), Ct(e, "change", xr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: o } }, i) {
    if (e[Jn] = yr(i), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? ms(e.value) : e.value, c = t ?? "";
    l !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === c) || (e.value = c));
  }
}, _c = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, vc = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = ((r) => {
    if (!("key" in r))
      return;
    const o = ut(r.key);
    if (t.some(
      (i) => i === o || _c[i] === o
    ))
      return e(r);
  }));
}, bc = /* @__PURE__ */ ie({ patchProp: hc }, Yl);
let wr;
function yc() {
  return wr || (wr = Tl(bc));
}
const xc = ((...e) => {
  const t = yc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = wc(s);
    if (!r) return;
    const o = t._component;
    !R(o) && !o.render && !o.template && (o.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, Cc(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
});
function Cc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function wc(e) {
  return oe(e) ? document.querySelector(e) : e;
}
const us = /* @__PURE__ */ pe(!1), Sc = /* @__PURE__ */ pe(!1), Uo = /* @__PURE__ */ pe(0.7), Bo = /* @__PURE__ */ pe(1), Ko = /* @__PURE__ */ pe(0);
function Tc() {
  us.value = !us.value;
}
function Ec() {
  Uo.value = 0.7, Bo.value = 1, Ko.value = 0;
}
function $s() {
  return {
    opacity: Uo,
    scale: Bo,
    rotation: Ko,
    isAttached: Sc,
    showControls: us,
    resetControls: Ec,
    toggleShowControls: Tc
  };
}
const Ac = { class: "ito-controls-menu" }, Ic = { class: "ito-controls-menu-content" }, Pc = { class: "ito-controls-menu-content-footer" }, Fc = /* @__PURE__ */ We({
  __name: "ControlsMenu",
  setup(e) {
    const { showControls: t, toggleShowControls: n } = $s();
    return (s, r) => (re(), Be("div", Ac, [
      q(Gl, {
        name: "ito-menu-transition",
        mode: "out-in"
      }, {
        default: Te(() => [
          to(Z("div", Ic, [
            xn(s.$slots, "default", {}, void 0, !0),
            Z("div", Pc, [
              xn(s.$slots, "footer", {}, void 0, !0)
            ])
          ], 512), [
            [tc, Se(t)]
          ])
        ]),
        _: 3
      }),
      Z("div", {
        class: Ft(["ito-controls-menu-activator", { "ito-controls-menu-activator--active": Se(t) }]),
        tabindex: "0",
        onClick: r[0] || (r[0] = //@ts-ignore
        (...o) => Se(n) && Se(n)(...o))
      }, null, 2)
    ]));
  }
}), Me = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, Oc = /* @__PURE__ */ Me(Fc, [["__scopeId", "data-v-2553df42"]]), Mc = {}, $c = { class: "ito-control-field-group" };
function Rc(e, t) {
  return re(), Be("div", $c, [
    xn(e.$slots, "default", {}, void 0)
  ]);
}
const un = /* @__PURE__ */ Me(Mc, [["render", Rc], ["__scopeId", "data-v-305a1241"]]), Rs = /* @__PURE__ */ pe(!1), fe = /* @__PURE__ */ Fn({
  initialX: 0,
  initialY: 0,
  currentX: 0,
  currentY: 0,
  offsetX: 0,
  offsetY: 0
});
function Dc(e) {
  fe.initialX = e.clientX - fe.offsetX, fe.initialY = e.clientY - fe.offsetY, Rs.value = !0;
}
function Lc(e) {
  Rs.value && (fe.currentX = e.clientX - fe.initialX, fe.currentY = e.clientY - fe.initialY, fe.offsetX = fe.currentX, fe.offsetY = fe.currentY);
}
function Nc(e) {
  fe.initialX = e.clientX, fe.initialY = e.clientY, Rs.value = !1;
}
function Vc() {
  Object.assign(fe, {
    initialX: 0,
    initialY: 0,
    currentX: 0,
    currentY: 0,
    offsetX: 0,
    offsetY: 0
  });
}
function Wo() {
  return {
    elementDrag: fe,
    resetElementDrag: Vc,
    dragEvents: {
      mousedown: Dc,
      mousemove: Lc,
      mouseup: Nc
    }
  };
}
const Hc = { class: "ito-tracer-image-wrapper" }, jc = ["src"], Uc = /* @__PURE__ */ We({
  __name: "TracerImage",
  props: {
    src: {}
  },
  setup(e) {
    const { showControls: t, scale: n, opacity: s, rotation: r, isAttached: o } = $s(), { elementDrag: i, dragEvents: l } = Wo(), c = e, d = Tn(() => c.src && t.value && !o.value ? {
      wheel: u,
      ...l
    } : {});
    function u(g) {
      if (g.ctrlKey) {
        const y = 0.01 * g.deltaY;
        let A = n.value;
        A -= y, n.value = parseFloat(Math.min(Math.max(A, 0.01), 8).toFixed(2));
      }
      if (g.shiftKey) {
        const y = g.deltaY > 0 ? 3 : -3;
        let A = r.value + y;
        r.value = Math.min(Math.max(A, -360), 360);
      }
      (g.shiftKey || g.ctrlKey) && g.preventDefault();
    }
    const h = Tn(() => ({
      opacity: s.value,
      cursor: t.value && !o.value ? "grab" : void 0,
      pointerEvents: t.value && !o.value ? "auto" : void 0,
      transform: `
			translate3d(${i.currentX}px, ${i.currentY}px, 0) 
			scale(${n.value}, ${n.value}) 
			rotate(${r.value}deg)
		`
    }));
    return (g, y) => (re(), Be("div", Hc, [
      Z("img", Ro({
        src: c.src,
        style: h.value,
        draggable: "false",
        class: "ito-tracer-image"
      }, sl(d.value)), null, 16, jc)
    ]));
  }
}), Bc = /* @__PURE__ */ Me(Uc, [["__scopeId", "data-v-fa1e17e1"]]);
function as(e) {
  return new Promise((t, n) => {
    const s = new Image();
    s.onload = () => {
      t(s.src);
    }, s.onerror = () => {
      n();
    }, s.src = e;
  });
}
function Kc(e) {
  return new Promise((t, n) => {
    const s = document.createElement("canvas"), r = s.getContext("2d"), o = new FileReader();
    o.onload = (i) => {
      const l = new Image();
      l.onload = () => {
        s.height = l.naturalHeight, s.width = l.naturalWidth, r?.drawImage(l, 0, 0), t(s.toDataURL("image/jpeg"));
      }, l.onerror = () => {
        n();
      }, i.target?.result && (l.src = i.target.result);
    }, o.readAsDataURL(e);
  });
}
const Wc = { class: "ito-control-field" }, kc = {
  key: 0,
  class: "ito-control-field-label"
}, Yc = {
  key: 1,
  class: "ito-control-field-error"
}, qc = /* @__PURE__ */ We({
  __name: "ControlField",
  props: {
    label: {},
    error: {}
  },
  setup(e) {
    return (t, n) => (re(), Be("div", Wc, [
      e.label ? (re(), Be("div", kc, Ze(e.label), 1)) : Pt("", !0),
      xn(t.$slots, "default", {}, void 0),
      e.error ? (re(), Be("div", Yc, Ze(e.error), 1)) : Pt("", !0)
    ]));
  }
}), sn = /* @__PURE__ */ Me(qc, [["__scopeId", "data-v-4cddcc2f"]]), Xc = /* @__PURE__ */ We({
  __name: "ImagePicker",
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ pe(null);
    async function r(i) {
      const l = i.target, c = l.files || [], [d] = c;
      try {
        const u = await Kc(d);
        n("change", u), l.value = "";
      } catch {
        console.error("Failed to load file");
      }
    }
    function o() {
      s.value?.click();
    }
    return (i, l) => (re(), Ke(sn, { label: "Upload image" }, {
      default: Te(() => [
        Z("div", {
          class: "ito-upload-button",
          onClick: o
        }, "Browse"),
        Z("input", {
          ref_key: "inputRef",
          ref: s,
          type: "file",
          accept: "image/*",
          style: { display: "none" },
          onChange: r
        }, null, 544)
      ]),
      _: 1
    }));
  }
}), Gc = /* @__PURE__ */ Me(Xc, [["__scopeId", "data-v-7aac8931"]]), Jc = /* @__PURE__ */ We({
  __name: "ImageFetcher",
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ pe("");
    function r() {
      s.value = "";
    }
    function o() {
      s.value = "";
    }
    async function i(l) {
      const c = l.target, d = c.value;
      if (d)
        try {
          const u = await as(d);
          n("change", u), c.value = "";
        } catch {
          console.error("Failed to load file"), s.value = "Failed to fetch image";
        }
    }
    return (l, c) => (re(), Ke(sn, {
      label: "Or paste image address",
      error: s.value
    }, {
      default: Te(() => [
        Z("input", {
          type: "text",
          placeholder: "Press enter to submit",
          class: "ito-input-control",
          onInput: r,
          onChange: i,
          onPaste: o
        }, null, 32)
      ]),
      _: 1
    }, 8, ["error"]));
  }
}), zc = /* @__PURE__ */ Me(Jc, [["__scopeId", "data-v-422d0df5"]]), Zc = { class: "ito-image-agent-controls column" }, Qc = ["placeholder", "disabled"], ef = { class: "ito-button-row" }, tf = ["disabled"], nf = { class: "ito-nav-group" }, sf = ["disabled"], rf = ["disabled"], of = {
  key: 0,
  class: "ito-nav-counter"
}, lf = {
  key: 0,
  class: "ito-status-message"
}, cf = /* @__PURE__ */ We({
  __name: "ImageAgent",
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ pe(!1), r = /* @__PURE__ */ pe(""), o = /* @__PURE__ */ pe(""), i = /* @__PURE__ */ pe(""), l = /* @__PURE__ */ pe([]), c = /* @__PURE__ */ pe(0);
    function d() {
      const y = document.querySelector(".word");
      if (y?.textContent?.trim()) {
        let L = y.textContent.trim();
        return L = L.replace(/_/g, "").replace(/\s\s+/g, " ").trim(), L;
      }
      const A = document.querySelector("#currentWord");
      if (A?.textContent?.trim()) {
        let L = A.textContent.trim();
        return L = L.replace(/_/g, "").replace(/\s\+/g, " ").trim(), L;
      }
      const T = ['[class*="prompt"]', ".phone-input", "[data-word]"];
      for (const L of T) {
        const V = document.querySelector(L);
        if (V?.textContent?.trim()) return V.textContent.trim();
      }
      return null;
    }
    function u(y) {
      if (!l.value || l.value.length === 0) return;
      const A = l.value.length;
      c.value = (c.value + y + A) % A;
      const T = l.value[c.value];
      T && as(T).then(() => {
        n("change", T), o.value = `${c.value + 1} / ${A}`, setTimeout(() => o.value = "", 1500);
      }).catch(() => {
        r.value = "Failed to load selected image.";
      });
    }
    Is(() => {
      const y = d();
      y && (i.value = y), window.addEventListener("ito:clear-image", h);
    }), Ps(() => {
      window.removeEventListener("ito:clear-image", h);
    });
    function h() {
      l.value = [], c.value = 0, o.value = "", i.value = "", r.value = "";
    }
    async function g() {
      r.value = "", o.value = "";
      const y = i.value.trim(), A = d(), T = y || A;
      if (!T) {
        r.value = "Could not detect word. Type it manually.";
        return;
      }
      s.value = !0;
      try {
        const L = `https://agent.typo.rip/${encodeURIComponent(T)}`, V = await fetch(L);
        if (!V.ok)
          throw new Error(`API returned ${V.status}`);
        const O = await V.json(), N = [];
        if (Array.isArray(O))
          for (const k of O)
            k && (typeof k == "string" ? N.push(k) : typeof k == "object" && N.push(k.url || k.src));
        else if (typeof O == "object") {
          const k = O.results || O.images || O.data;
          if (Array.isArray(k))
            for (const ne of k)
              ne && (typeof ne == "string" ? N.push(ne) : typeof ne == "object" && N.push(ne.url || ne.src));
          else (O.url || O.src) && N.push(O.url || O.src);
        }
        const I = N.filter(Boolean);
        if (I.length === 0) {
          r.value = "No images found for this word";
          return;
        }
        l.value = I, c.value = 0;
        const B = l.value[0];
        await as(B), n("change", B), i.value = "", o.value = `1 / ${l.value.length}`, setTimeout(() => {
          o.value = "";
        }, 2e3);
      } catch (L) {
        console.error("Image agent error:", L), r.value = "Failed to fetch image. Try another word.";
      } finally {
        s.value = !1;
      }
    }
    return (y, A) => (re(), Ke(sn, {
      label: "AI Image Fetch",
      error: r.value
    }, {
      default: Te(() => [
        Z("div", Zc, [
          to(Z("input", {
            "onUpdate:modelValue": A[0] || (A[0] = (T) => i.value = T),
            type: "text",
            placeholder: i.value ? "Press enter or click Auto" : "Type a word here...",
            class: "ito-input-control full-width",
            onKeydown: vc(g, ["enter"]),
            disabled: s.value
          }, null, 40, Qc), [
            [mc, i.value]
          ]),
          Z("div", ef, [
            Z("button", {
              class: "ito-agent-btn",
              onClick: g,
              disabled: s.value
            }, Ze(s.value ? "Fetching..." : "🤖 Auto"), 9, tf),
            Z("div", nf, [
              Z("button", {
                class: "ito-nav-btn left",
                onClick: A[1] || (A[1] = (T) => u(-1)),
                disabled: l.value.length === 0
              }, "◀", 8, sf),
              Z("button", {
                class: "ito-nav-btn right",
                onClick: A[2] || (A[2] = (T) => u(1)),
                disabled: l.value.length === 0
              }, "▶", 8, rf),
              l.value.length ? (re(), Be("span", of, Ze(c.value + 1) + " / " + Ze(l.value.length), 1)) : Pt("", !0)
            ])
          ])
        ]),
        o.value ? (re(), Be("div", lf, Ze(o.value), 1)) : Pt("", !0)
      ]),
      _: 1
    }, 8, ["error"]));
  }
}), ff = /* @__PURE__ */ Me(cf, [["__scopeId", "data-v-a440992a"]]), uf = ["min", "max", "value"], af = /* @__PURE__ */ We({
  __name: "RangeField",
  props: {
    label: {},
    modelValue: {},
    min: {},
    max: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, s = e, r = Tn(() => s.modelValue * 100);
    function o(i) {
      const l = i.target;
      n("update:modelValue", Number(l.value) / 100);
    }
    return (i, l) => (re(), Ke(sn, { label: e.label }, {
      default: Te(() => [
        Z("input", {
          type: "range",
          class: "ito-range-control",
          min: s.min,
          max: s.max,
          value: r.value,
          onInput: o
        }, null, 40, uf)
      ]),
      _: 1
    }, 8, ["label"]));
  }
}), zn = /* @__PURE__ */ Me(af, [["__scopeId", "data-v-5fca2c0f"]]), df = /* @__PURE__ */ We({
  __name: "TextButton",
  props: {
    label: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = t;
    return (s, r) => (re(), Be("div", {
      class: "ito-text-button",
      onClick: r[0] || (r[0] = (o) => n("click"))
    }, Ze(e.label), 1));
  }
}), Sr = /* @__PURE__ */ Me(df, [["__scopeId", "data-v-c965233f"]]), hf = { class: "ito-switch-field-label" }, pf = { class: "ito-switch" }, gf = /* @__PURE__ */ We({
  __name: "SwitchField",
  props: {
    label: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (re(), Ke(sn, null, {
      default: Te(() => [
        Z("div", {
          class: "ito-switch-field",
          onClick: n[0] || (n[0] = (s) => t.$emit("update:modelValue", !e.modelValue))
        }, [
          Z("div", hf, Ze(e.label), 1),
          Z("div", pf, [
            Z("div", {
              class: Ft(["ito-switch-button", { "ito-switch-button--on": e.modelValue }])
            }, [...n[1] || (n[1] = [
              Z("div", { class: "ito-switch-knob" }, null, -1)
            ])], 2)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), mf = /* @__PURE__ */ Me(gf, [["__scopeId", "data-v-32f8a04c"]]);
function _f() {
  const e = document.getElementById("ImageTracerOverlayContainer"), t = document.querySelector(":root");
  if (!e)
    return;
  const n = e.getBoundingClientRect(), s = window.scrollY || document.documentElement.scrollTop, r = window.scrollX || document.documentElement.scrollLeft;
  t.style.setProperty("--image-tracer-overlay-attached-x", n.top + s + "px"), t.style.setProperty("--image-tracer-overlay-attached-y", n.left + r + "px");
}
const vf = { class: "ito-fixed-container" }, bf = { class: "ito-text-buttons-group" }, yf = /* @__PURE__ */ We({
  __name: "App",
  setup(e) {
    const { opacity: t, scale: n, resetControls: s, rotation: r, isAttached: o } = $s(), { resetElementDrag: i } = Wo(), l = /* @__PURE__ */ pe(void 0);
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
    return pn(o, () => {
      o.value && _f();
    }), (u, h) => (re(), Be(Ce, null, [
      Z("div", {
        id: "ImageTracerOverlayContainer",
        class: Ft([Se(o) ? "ito-attached-container" : "ito-fixed-container"])
      }, [
        l.value ? (re(), Ke(Bc, {
          key: 0,
          src: l.value
        }, null, 8, ["src"])) : Pt("", !0)
      ], 2),
      Z("div", vf, [
        q(Oc, null, {
          footer: Te(() => [...h[7] || (h[7] = [
            Z("div", { class: "ito-menu-helper" }, " Tips: Position the image by dragging. Ctrl+Scroll to change zoom. Shift+Scroll to rotate. ", -1)
          ])]),
          default: Te(() => [
            q(un, null, {
              default: Te(() => [
                q(Gc, {
                  onChange: h[0] || (h[0] = (g) => l.value = g)
                }),
                q(zc, {
                  onChange: h[1] || (h[1] = (g) => l.value = g)
                }),
                q(ff, {
                  onChange: h[2] || (h[2] = (g) => l.value = g)
                })
              ]),
              _: 1
            }),
            q(un, null, {
              default: Te(() => [
                q(mf, {
                  label: "Lock image position",
                  modelValue: Se(o),
                  "onUpdate:modelValue": h[3] || (h[3] = (g) => /* @__PURE__ */ se(o) ? o.value = g : null)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            q(un, null, {
              default: Te(() => [
                q(zn, {
                  label: `Opacity ${Se(t)}`,
                  min: 0,
                  max: 100,
                  modelValue: Se(t),
                  "onUpdate:modelValue": h[4] || (h[4] = (g) => /* @__PURE__ */ se(t) ? t.value = g : null)
                }, null, 8, ["label", "modelValue"]),
                q(zn, {
                  label: `Scale ${Se(n)}x`,
                  min: 1,
                  max: 800,
                  modelValue: Se(n),
                  "onUpdate:modelValue": h[5] || (h[5] = (g) => /* @__PURE__ */ se(n) ? n.value = g : null)
                }, null, 8, ["label", "modelValue"]),
                q(zn, {
                  label: `Rotate ${Se(r)}deg`,
                  min: -36e3,
                  max: 36e3,
                  modelValue: Se(r),
                  "onUpdate:modelValue": h[6] || (h[6] = (g) => /* @__PURE__ */ se(r) ? r.value = g : null)
                }, null, 8, ["label", "modelValue"])
              ]),
              _: 1
            }),
            l.value ? (re(), Ke(un, { key: 0 }, {
              default: Te(() => [
                Z("div", bf, [
                  q(Sr, {
                    label: "Clear image",
                    onClick: c
                  }),
                  q(Sr, {
                    label: "Reset image",
                    title: "Reset position, opacity, scale and rotation",
                    onClick: d
                  })
                ])
              ]),
              _: 1
            })) : Pt("", !0)
          ]),
          _: 1
        })
      ])
    ], 64));
  }
}), xf = /* @__PURE__ */ Me(yf, [["__scopeId", "data-v-ee877f2b"]]), Nn = document.createElement("div");
Nn.setAttribute("id", "ImageTracerOverlayMount");
Nn.style.display = "none";
document.body.appendChild(Nn);
const Cf = xc(xf);
Cf.mount(Nn);
