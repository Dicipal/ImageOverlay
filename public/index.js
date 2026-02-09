// @__NO_SIDE_EFFECTS__
function as(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const k = {}, St = [], Ue = () => {
}, Cr = () => !1, An = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ds = (e) => e.startsWith("onUpdate:"), re = Object.assign, hs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Xo = Object.prototype.hasOwnProperty, H = (e, t) => Xo.call(e, t), O = Array.isArray, wt = (e) => en(e) === "[object Map]", Sr = (e) => en(e) === "[object Set]", Ns = (e) => en(e) === "[object Date]", $ = (e) => typeof e == "function", ne = (e) => typeof e == "string", Oe = (e) => typeof e == "symbol", B = (e) => e !== null && typeof e == "object", wr = (e) => (B(e) || $(e)) && $(e.then) && $(e.catch), Tr = Object.prototype.toString, en = (e) => Tr.call(e), qo = (e) => en(e).slice(8, -1), Er = (e) => en(e) === "[object Object]", ps = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Vt = /* @__PURE__ */ as(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), In = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Go = /-\w/g, it = In(
  (e) => e.replace(Go, (t) => t.slice(1).toUpperCase())
), Jo = /\B([A-Z])/g, ft = In(
  (e) => e.replace(Jo, "-$1").toLowerCase()
), Ar = In((e) => e.charAt(0).toUpperCase() + e.slice(1)), an = In(
  (e) => e ? `on${Ar(e)}` : ""
), ot = (e, t) => !Object.is(e, t), dn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ir = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, gs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, zo = (e) => {
  const t = ne(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Vs;
const Pn = () => Vs || (Vs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ms(e) {
  if (O(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ne(s) ? ti(s) : ms(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (ne(e) || B(e))
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
function Pt(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (O(e))
    for (let n = 0; n < e.length; n++) {
      const s = Pt(e[n]);
      s && (t += s + " ");
    }
  else if (B(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ni = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", si = /* @__PURE__ */ as(ni);
function Pr(e) {
  return !!e || e === "";
}
function ri(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = _s(e[s], t[s]);
  return n;
}
function _s(e, t) {
  if (e === t) return !0;
  let n = Ns(e), s = Ns(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Oe(e), s = Oe(t), n || s)
    return e === t;
  if (n = O(e), s = O(t), n || s)
    return n && s ? ri(e, t) : !1;
  if (n = B(e), s = B(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, o = Object.keys(t).length;
    if (r !== o)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (l && !c || !l && c || !_s(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Or = (e) => !!(e && e.__v_isRef === !0), bt = (e) => ne(e) ? e : e == null ? "" : O(e) || B(e) && (e.toString === Tr || !$(e.toString)) ? Or(e) ? bt(e.value) : JSON.stringify(e, Fr, 2) : String(e), Fr = (e, t) => Or(t) ? Fr(e, t.value) : wt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[Hn(s, o) + " =>"] = r, n),
    {}
  )
} : Sr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Hn(n))
} : Oe(t) ? Hn(t) : B(t) && !O(t) && !Er(t) ? String(t) : t, Hn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Oe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let ye;
class oi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = ye, !t && ye && (this.index = (ye.scopes || (ye.scopes = [])).push(
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
      const n = ye;
      try {
        return ye = this, t();
      } finally {
        ye = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ye, ye = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ye = this.prevScope, this.prevScope = void 0);
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
  return ye;
}
let G;
const jn = /* @__PURE__ */ new WeakSet();
class Mr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ye && ye.active && ye.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Rr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Hs(this), Dr(this);
    const t = G, n = Ie;
    G = this, Ie = !0;
    try {
      return this.fn();
    } finally {
      Lr(this), G = t, Ie = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ys(t);
      this.deps = this.depsTail = void 0, Hs(this), this.onStop && this.onStop(), this.flags &= -2;
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
let $r = 0, Ht, jt;
function Rr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = jt, jt = e;
    return;
  }
  e.next = Ht, Ht = e;
}
function vs() {
  $r++;
}
function bs() {
  if (--$r > 0)
    return;
  if (jt) {
    let t = jt;
    for (jt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ht; ) {
    let t = Ht;
    for (Ht = void 0; t; ) {
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
function Dr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Lr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), ys(s), li(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Zn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Nr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Nr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wt) || (e.globalVersion = Wt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Zn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = G, s = Ie;
  G = e, Ie = !0;
  try {
    Dr(e);
    const r = e.fn(e._value);
    (t.version === 0 || ot(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    G = n, Ie = s, Lr(e), e.flags &= -3;
  }
}
function ys(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      ys(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function li(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ie = !0;
const Vr = [];
function Ze() {
  Vr.push(Ie), Ie = !1;
}
function Qe() {
  const e = Vr.pop();
  Ie = e === void 0 ? !0 : e;
}
function Hs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = G;
    G = void 0;
    try {
      t();
    } finally {
      G = n;
    }
  }
}
let Wt = 0;
class ci {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class xs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!G || !Ie || G === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== G)
      n = this.activeLink = new ci(G, this), G.deps ? (n.prevDep = G.depsTail, G.depsTail.nextDep = n, G.depsTail = n) : G.deps = G.depsTail = n, Hr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = G.depsTail, n.nextDep = void 0, G.depsTail.nextDep = n, G.depsTail = n, G.deps === n && (G.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Wt++, this.notify(t);
  }
  notify(t) {
    vs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      bs();
    }
  }
}
function Hr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Hr(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Qn = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ Symbol(
  ""
), es = /* @__PURE__ */ Symbol(
  ""
), kt = /* @__PURE__ */ Symbol(
  ""
);
function fe(e, t, n) {
  if (Ie && G) {
    let s = Qn.get(e);
    s || Qn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new xs()), r.map = s, r.key = n), r.track();
  }
}
function Ge(e, t, n, s, r, o) {
  const i = Qn.get(e);
  if (!i) {
    Wt++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (vs(), t === "clear")
    i.forEach(l);
  else {
    const c = O(e), h = c && ps(n);
    if (c && n === "length") {
      const u = Number(s);
      i.forEach((d, g) => {
        (g === "length" || g === kt || !Oe(g) && g >= u) && l(d);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), h && l(i.get(kt)), t) {
        case "add":
          c ? h && l(i.get("length")) : (l(i.get(vt)), wt(e) && l(i.get(es)));
          break;
        case "delete":
          c || (l(i.get(vt)), wt(e) && l(i.get(es)));
          break;
        case "set":
          wt(e) && l(i.get(vt));
          break;
      }
  }
  bs();
}
function yt(e) {
  const t = /* @__PURE__ */ N(e);
  return t === e ? t : (fe(t, "iterate", kt), /* @__PURE__ */ Pe(e) ? t : t.map(et));
}
function Cs(e) {
  return fe(e = /* @__PURE__ */ N(e), "iterate", kt), e;
}
function st(e, t) {
  return /* @__PURE__ */ lt(e) ? Yt(/* @__PURE__ */ Tt(e) ? et(t) : t) : et(t);
}
const fi = {
  __proto__: null,
  [Symbol.iterator]() {
    return Un(this, Symbol.iterator, (e) => st(this, e));
  },
  concat(...e) {
    return yt(this).concat(
      ...e.map((t) => O(t) ? yt(t) : t)
    );
  },
  entries() {
    return Un(this, "entries", (e) => (e[1] = st(this, e[1]), e));
  },
  every(e, t) {
    return ke(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ke(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => st(this, s)),
      arguments
    );
  },
  find(e, t) {
    return ke(
      this,
      "find",
      e,
      t,
      (n) => st(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ke(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ke(
      this,
      "findLast",
      e,
      t,
      (n) => st(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ke(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ke(this, "forEach", e, t, void 0, arguments);
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
    return ke(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return $t(this, "pop");
  },
  push(...e) {
    return $t(this, "push", e);
  },
  reduce(e, ...t) {
    return js(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return js(this, "reduceRight", e, t);
  },
  shift() {
    return $t(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ke(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return $t(this, "splice", e);
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
    return $t(this, "unshift", e);
  },
  values() {
    return Un(this, "values", (e) => st(this, e));
  }
};
function Un(e, t, n) {
  const s = Cs(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ Pe(e) && (r._next = r.next, r.next = () => {
    const o = r._next();
    return o.done || (o.value = n(o.value)), o;
  }), r;
}
const ui = Array.prototype;
function ke(e, t, n, s, r, o) {
  const i = Cs(e), l = i !== e && !/* @__PURE__ */ Pe(e), c = i[t];
  if (c !== ui[t]) {
    const d = c.apply(e, o);
    return l ? et(d) : d;
  }
  let h = n;
  i !== e && (l ? h = function(d, g) {
    return n.call(this, st(e, d), g, e);
  } : n.length > 2 && (h = function(d, g) {
    return n.call(this, d, g, e);
  }));
  const u = c.call(i, h, s);
  return l && r ? r(u) : u;
}
function js(e, t, n, s) {
  const r = Cs(e);
  let o = n;
  return r !== e && (/* @__PURE__ */ Pe(e) ? n.length > 3 && (o = function(i, l, c) {
    return n.call(this, i, l, c, e);
  }) : o = function(i, l, c) {
    return n.call(this, i, st(e, l), c, e);
  }), r[t](o, ...s);
}
function Bn(e, t, n) {
  const s = /* @__PURE__ */ N(e);
  fe(s, "iterate", kt);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ Ts(n[0]) ? (n[0] = /* @__PURE__ */ N(n[0]), s[t](...n)) : r;
}
function $t(e, t, n = []) {
  Ze(), vs();
  const s = (/* @__PURE__ */ N(e))[t].apply(e, n);
  return bs(), Qe(), s;
}
const ai = /* @__PURE__ */ as("__proto__,__v_isRef,__isVue"), jr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Oe)
);
function di(e) {
  Oe(e) || (e = String(e));
  const t = /* @__PURE__ */ N(this);
  return fe(t, "has", e), t.hasOwnProperty(e);
}
class Ur {
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
      return s === (r ? o ? Ci : kr : o ? Wr : Kr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = O(t);
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
      /* @__PURE__ */ te(t) ? t : s
    );
    if ((Oe(n) ? jr.has(n) : ai(n)) || (r || fe(t, "get", n), o))
      return l;
    if (/* @__PURE__ */ te(l)) {
      const c = i && ps(n) ? l : l.value;
      return r && B(c) ? /* @__PURE__ */ ns(c) : c;
    }
    return B(l) ? r ? /* @__PURE__ */ ns(l) : /* @__PURE__ */ On(l) : l;
  }
}
class Br extends Ur {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    const i = O(t) && ps(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ lt(o);
      if (!/* @__PURE__ */ Pe(s) && !/* @__PURE__ */ lt(s) && (o = /* @__PURE__ */ N(o), s = /* @__PURE__ */ N(s)), !i && /* @__PURE__ */ te(o) && !/* @__PURE__ */ te(s))
        return h || (o.value = s), !0;
    }
    const l = i ? Number(n) < t.length : H(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ te(t) ? t : r
    );
    return t === /* @__PURE__ */ N(r) && (l ? ot(s, o) && Ge(t, "set", n, s) : Ge(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = H(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Ge(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Oe(n) || !jr.has(n)) && fe(t, "has", n), s;
  }
  ownKeys(t) {
    return fe(
      t,
      "iterate",
      O(t) ? "length" : vt
    ), Reflect.ownKeys(t);
  }
}
class hi extends Ur {
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
const pi = /* @__PURE__ */ new Br(), gi = /* @__PURE__ */ new hi(), mi = /* @__PURE__ */ new Br(!0);
const ts = (e) => e, ln = (e) => Reflect.getPrototypeOf(e);
function _i(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = /* @__PURE__ */ N(r), i = wt(o), l = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, h = r[e](...s), u = n ? ts : t ? Yt : et;
    return !t && fe(
      o,
      "iterate",
      c ? es : vt
    ), re(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: d, done: g } = h.next();
          return g ? { value: d, done: g } : {
            value: l ? [u(d[0]), u(d[1])] : u(d),
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
      const o = this.__v_raw, i = /* @__PURE__ */ N(o), l = /* @__PURE__ */ N(r);
      e || (ot(r, l) && fe(i, "get", r), fe(i, "get", l));
      const { has: c } = ln(i), h = t ? ts : e ? Yt : et;
      if (c.call(i, r))
        return h(o.get(r));
      if (c.call(i, l))
        return h(o.get(l));
      o !== i && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && fe(/* @__PURE__ */ N(r), "iterate", vt), r.size;
    },
    has(r) {
      const o = this.__v_raw, i = /* @__PURE__ */ N(o), l = /* @__PURE__ */ N(r);
      return e || (ot(r, l) && fe(i, "has", r), fe(i, "has", l)), r === l ? o.has(r) : o.has(r) || o.has(l);
    },
    forEach(r, o) {
      const i = this, l = i.__v_raw, c = /* @__PURE__ */ N(l), h = t ? ts : e ? Yt : et;
      return !e && fe(c, "iterate", vt), l.forEach((u, d) => r.call(o, h(u), h(d), i));
    }
  };
  return re(
    n,
    e ? {
      add: cn("add"),
      set: cn("set"),
      delete: cn("delete"),
      clear: cn("clear")
    } : {
      add(r) {
        !t && !/* @__PURE__ */ Pe(r) && !/* @__PURE__ */ lt(r) && (r = /* @__PURE__ */ N(r));
        const o = /* @__PURE__ */ N(this);
        return ln(o).has.call(o, r) || (o.add(r), Ge(o, "add", r, r)), this;
      },
      set(r, o) {
        !t && !/* @__PURE__ */ Pe(o) && !/* @__PURE__ */ lt(o) && (o = /* @__PURE__ */ N(o));
        const i = /* @__PURE__ */ N(this), { has: l, get: c } = ln(i);
        let h = l.call(i, r);
        h || (r = /* @__PURE__ */ N(r), h = l.call(i, r));
        const u = c.call(i, r);
        return i.set(r, o), h ? ot(o, u) && Ge(i, "set", r, o) : Ge(i, "add", r, o), this;
      },
      delete(r) {
        const o = /* @__PURE__ */ N(this), { has: i, get: l } = ln(o);
        let c = i.call(o, r);
        c || (r = /* @__PURE__ */ N(r), c = i.call(o, r)), l && l.call(o, r);
        const h = o.delete(r);
        return c && Ge(o, "delete", r, void 0), h;
      },
      clear() {
        const r = /* @__PURE__ */ N(this), o = r.size !== 0, i = r.clear();
        return o && Ge(
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
    H(n, r) && r in s ? n : s,
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
const Kr = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap();
function Si(e) {
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
function wi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Si(qo(e));
}
// @__NO_SIDE_EFFECTS__
function On(e) {
  return /* @__PURE__ */ lt(e) ? e : ws(
    e,
    !1,
    pi,
    bi,
    Kr
  );
}
// @__NO_SIDE_EFFECTS__
function Ti(e) {
  return ws(
    e,
    !1,
    mi,
    yi,
    Wr
  );
}
// @__NO_SIDE_EFFECTS__
function ns(e) {
  return ws(
    e,
    !0,
    gi,
    xi,
    kr
  );
}
function ws(e, t, n, s, r) {
  if (!B(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = wi(e);
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
  return /* @__PURE__ */ lt(e) ? /* @__PURE__ */ Tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function lt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ts(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function N(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ N(t) : e;
}
function Ei(e) {
  return !H(e, "__v_skip") && Object.isExtensible(e) && Ir(e, "__v_skip", !0), e;
}
const et = (e) => B(e) ? /* @__PURE__ */ On(e) : e, Yt = (e) => B(e) ? /* @__PURE__ */ ns(e) : e;
// @__NO_SIDE_EFFECTS__
function te(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return Ai(e, !1);
}
function Ai(e, t) {
  return /* @__PURE__ */ te(e) ? e : new Ii(e, t);
}
class Ii {
  constructor(t, n) {
    this.dep = new xs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ N(t), this._value = n ? t : et(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Pe(t) || /* @__PURE__ */ lt(t);
    t = s ? t : /* @__PURE__ */ N(t), ot(t, n) && (this._rawValue = t, this._value = s ? t : et(t), this.dep.trigger());
  }
}
function Se(e) {
  return /* @__PURE__ */ te(e) ? e.value : e;
}
const Pi = {
  get: (e, t, n) => t === "__v_raw" ? e : Se(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ te(r) && !/* @__PURE__ */ te(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Yr(e) {
  return /* @__PURE__ */ Tt(e) ? e : new Proxy(e, Pi);
}
class Oi {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new xs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    G !== this)
      return Rr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Nr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Fi(e, t, n = !1) {
  let s, r;
  return $(e) ? s = e : (s = e.get, r = e.set), new Oi(s, r, n);
}
const fn = {}, _n = /* @__PURE__ */ new WeakMap();
let mt;
function Mi(e, t = !1, n = mt) {
  if (n) {
    let s = _n.get(n);
    s || _n.set(n, s = []), s.push(e);
  }
}
function $i(e, t, n = k) {
  const { immediate: s, deep: r, once: o, scheduler: i, augmentJob: l, call: c } = n, h = (A) => r ? A : /* @__PURE__ */ Pe(A) || r === !1 || r === 0 ? Je(A, 1) : Je(A);
  let u, d, g, C, F = !1, P = !1;
  if (/* @__PURE__ */ te(e) ? (d = () => e.value, F = /* @__PURE__ */ Pe(e)) : /* @__PURE__ */ Tt(e) ? (d = () => h(e), F = !0) : O(e) ? (P = !0, F = e.some((A) => /* @__PURE__ */ Tt(A) || /* @__PURE__ */ Pe(A)), d = () => e.map((A) => {
    if (/* @__PURE__ */ te(A))
      return A.value;
    if (/* @__PURE__ */ Tt(A))
      return h(A);
    if ($(A))
      return c ? c(A, 2) : A();
  })) : $(e) ? t ? d = c ? () => c(e, 2) : e : d = () => {
    if (g) {
      Ze();
      try {
        g();
      } finally {
        Qe();
      }
    }
    const A = mt;
    mt = u;
    try {
      return c ? c(e, 3, [C]) : e(C);
    } finally {
      mt = A;
    }
  } : d = Ue, t && r) {
    const A = d, Y = r === !0 ? 1 / 0 : r;
    d = () => Je(A(), Y);
  }
  const J = ii(), j = () => {
    u.stop(), J && J.active && hs(J.effects, u);
  };
  if (o && t) {
    const A = t;
    t = (...Y) => {
      A(...Y), j();
    };
  }
  let D = P ? new Array(e.length).fill(fn) : fn;
  const V = (A) => {
    if (!(!(u.flags & 1) || !u.dirty && !A))
      if (t) {
        const Y = u.run();
        if (r || F || (P ? Y.some((oe, de) => ot(oe, D[de])) : ot(Y, D))) {
          g && g();
          const oe = mt;
          mt = u;
          try {
            const de = [
              Y,
              // pass undefined as the old value when it's changed for the first time
              D === fn ? void 0 : P && D[0] === fn ? [] : D,
              C
            ];
            D = Y, c ? c(t, 3, de) : (
              // @ts-expect-error
              t(...de)
            );
          } finally {
            mt = oe;
          }
        }
      } else
        u.run();
  };
  return l && l(V), u = new Mr(d), u.scheduler = i ? () => i(V, !1) : V, C = (A) => Mi(A, !1, u), g = u.onStop = () => {
    const A = _n.get(u);
    if (A) {
      if (c)
        c(A, 4);
      else
        for (const Y of A) Y();
      _n.delete(u);
    }
  }, t ? s ? V(!0) : D = u.run() : i ? i(V.bind(null, !0), !0) : u.run(), j.pause = u.pause.bind(u), j.resume = u.resume.bind(u), j.stop = j, j;
}
function Je(e, t = 1 / 0, n) {
  if (t <= 0 || !B(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ te(e))
    Je(e.value, t, n);
  else if (O(e))
    for (let s = 0; s < e.length; s++)
      Je(e[s], t, n);
  else if (Sr(e) || wt(e))
    e.forEach((s) => {
      Je(s, t, n);
    });
  else if (Er(e)) {
    for (const s in e)
      Je(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Je(e[s], t, n);
  }
  return e;
}
function tn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Fn(r, t, n);
  }
}
function Fe(e, t, n, s) {
  if ($(e)) {
    const r = tn(e, t, n, s);
    return r && wr(r) && r.catch((o) => {
      Fn(o, t, n);
    }), r;
  }
  if (O(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(Fe(e[o], t, n, s));
    return r;
  }
}
function Fn(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || k;
  if (t) {
    let l = t.parent;
    const c = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, c, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      Ze(), tn(o, null, 10, [
        e,
        c,
        h
      ]), Qe();
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
const pe = [];
let Ve = -1;
const Et = [];
let rt = null, xt = 0;
const Xr = /* @__PURE__ */ Promise.resolve();
let vn = null;
function Di(e) {
  const t = vn || Xr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Li(e) {
  let t = Ve + 1, n = pe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = pe[s], o = Xt(r);
    o < e || o === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Es(e) {
  if (!(e.flags & 1)) {
    const t = Xt(e), n = pe[pe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Xt(n) ? pe.push(e) : pe.splice(Li(t), 0, e), e.flags |= 1, qr();
  }
}
function qr() {
  vn || (vn = Xr.then(Jr));
}
function Ni(e) {
  O(e) ? Et.push(...e) : rt && e.id === -1 ? rt.splice(xt + 1, 0, e) : e.flags & 1 || (Et.push(e), e.flags |= 1), qr();
}
function Us(e, t, n = Ve + 1) {
  for (; n < pe.length; n++) {
    const s = pe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      pe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Gr(e) {
  if (Et.length) {
    const t = [...new Set(Et)].sort(
      (n, s) => Xt(n) - Xt(s)
    );
    if (Et.length = 0, rt) {
      rt.push(...t);
      return;
    }
    for (rt = t, xt = 0; xt < rt.length; xt++) {
      const n = rt[xt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    rt = null, xt = 0;
  }
}
const Xt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Jr(e) {
  try {
    for (Ve = 0; Ve < pe.length; Ve++) {
      const t = pe[Ve];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), tn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ve < pe.length; Ve++) {
      const t = pe[Ve];
      t && (t.flags &= -2);
    }
    Ve = -1, pe.length = 0, Gr(), vn = null, (pe.length || Et.length) && Jr();
  }
}
let ae = null, zr = null;
function bn(e) {
  const t = ae;
  return ae = e, zr = e && e.type.__scopeId || null, t;
}
function we(e, t = ae, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Sn(-1);
    const o = bn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      bn(o), s._d && Sn(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Zr(e, t) {
  if (ae === null)
    return e;
  const n = Ln(ae), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, i, l, c = k] = t[r];
    o && ($(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Je(i), s.push({
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
function dt(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let c = l.dir[s];
    c && (Ze(), Fe(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Qe());
  }
}
function Vi(e, t) {
  if (ge) {
    let n = ge.provides;
    const s = ge.parent && ge.parent.provides;
    s === n && (n = ge.provides = Object.create(s)), n[e] = t;
  }
}
function hn(e, t, n = !1) {
  const s = Ro();
  if (s || It) {
    let r = It ? It._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(s && s.proxy) : t;
  }
}
const Hi = /* @__PURE__ */ Symbol.for("v-scx"), ji = () => hn(Hi);
function pn(e, t, n) {
  return Qr(e, t, n);
}
function Qr(e, t, n = k) {
  const { immediate: s, deep: r, flush: o, once: i } = n, l = re({}, n), c = t && s || !t && o !== "post";
  let h;
  if (Zt) {
    if (o === "sync") {
      const C = ji();
      h = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!c) {
      const C = () => {
      };
      return C.stop = Ue, C.resume = Ue, C.pause = Ue, C;
    }
  }
  const u = ge;
  l.call = (C, F, P) => Fe(C, u, F, P);
  let d = !1;
  o === "post" ? l.scheduler = (C) => {
    be(C, u && u.suspense);
  } : o !== "sync" && (d = !0, l.scheduler = (C, F) => {
    F ? C() : Es(C);
  }), l.augmentJob = (C) => {
    t && (C.flags |= 4), d && (C.flags |= 2, u && (C.id = u.uid, C.i = u));
  };
  const g = $i(e, t, l);
  return Zt && (h ? h.push(g) : c && g()), g;
}
function Ui(e, t, n) {
  const s = this.proxy, r = ne(e) ? e.includes(".") ? eo(s, e) : () => s[e] : e.bind(s, s);
  let o;
  $(t) ? o = t : (o = t.handler, n = t);
  const i = nn(this), l = Qr(r, o.bind(s), n);
  return i(), l;
}
function eo(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const Bi = /* @__PURE__ */ Symbol("_vte"), to = (e) => e.__isTeleport, He = /* @__PURE__ */ Symbol("_leaveCb"), Rt = /* @__PURE__ */ Symbol("_enterCb");
function Ki() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return fo(() => {
    e.isMounted = !0;
  }), uo(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ae = [Function, Array], no = {
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
}, so = (e) => {
  const t = e.subTree;
  return t.component ? so(t.component) : t;
}, Wi = {
  name: "BaseTransition",
  props: no,
  setup(e, { slots: t }) {
    const n = Ro(), s = Ki();
    return () => {
      const r = t.default && io(t.default(), !0);
      if (!r || !r.length)
        return;
      const o = ro(r), i = /* @__PURE__ */ N(e), { mode: l } = i;
      if (s.isLeaving)
        return Kn(o);
      const c = Bs(o);
      if (!c)
        return Kn(o);
      let h = ss(
        c,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => h = d
      );
      c.type !== ue && qt(c, h);
      let u = n.subTree && Bs(n.subTree);
      if (u && u.type !== ue && !_t(u, c) && so(n).type !== ue) {
        let d = ss(
          u,
          i,
          s,
          n
        );
        if (qt(u, d), l === "out-in" && c.type !== ue)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
          }, Kn(o);
        l === "in-out" && c.type !== ue ? d.delayLeave = (g, C, F) => {
          const P = oo(
            s,
            u
          );
          P[String(u.key)] = u, g[He] = () => {
            C(), g[He] = void 0, delete h.delayedLeave, u = void 0;
          }, h.delayedLeave = () => {
            F(), delete h.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return o;
    };
  }
};
function ro(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ue) {
        t = n;
        break;
      }
  }
  return t;
}
const ki = Wi;
function oo(e, t) {
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
    onEnter: h,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: g,
    onLeave: C,
    onAfterLeave: F,
    onLeaveCancelled: P,
    onBeforeAppear: J,
    onAppear: j,
    onAfterAppear: D,
    onAppearCancelled: V
  } = t, A = String(e.key), Y = oo(n, e), oe = (R, K) => {
    R && Fe(
      R,
      s,
      9,
      K
    );
  }, de = (R, K) => {
    const Z = K[1];
    oe(R, K), O(R) ? R.every((T) => T.length <= 1) && Z() : R.length <= 1 && Z();
  }, me = {
    mode: i,
    persisted: l,
    beforeEnter(R) {
      let K = c;
      if (!n.isMounted)
        if (o)
          K = J || c;
        else
          return;
      R[He] && R[He](
        !0
        /* cancelled */
      );
      const Z = Y[A];
      Z && _t(e, Z) && Z.el[He] && Z.el[He](), oe(K, [R]);
    },
    enter(R) {
      let K = h, Z = u, T = d;
      if (!n.isMounted)
        if (o)
          K = j || h, Z = D || u, T = V || d;
        else
          return;
      let z = !1;
      R[Rt] = (We) => {
        z || (z = !0, We ? oe(T, [R]) : oe(Z, [R]), me.delayedLeave && me.delayedLeave(), R[Rt] = void 0);
      };
      const le = R[Rt].bind(null, !1);
      K ? de(K, [R, le]) : le();
    },
    leave(R, K) {
      const Z = String(e.key);
      if (R[Rt] && R[Rt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return K();
      oe(g, [R]);
      let T = !1;
      R[He] = (le) => {
        T || (T = !0, K(), le ? oe(P, [R]) : oe(F, [R]), R[He] = void 0, Y[Z] === e && delete Y[Z]);
      };
      const z = R[He].bind(null, !1);
      Y[Z] = e, C ? de(C, [R, z]) : z();
    },
    clone(R) {
      const K = ss(
        R,
        t,
        n,
        s,
        r
      );
      return r && r(K), K;
    }
  };
  return me;
}
function Kn(e) {
  if (Mn(e))
    return e = ct(e), e.children = null, e;
}
function Bs(e) {
  if (!Mn(e))
    return to(e.type) && e.children ? ro(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && $(n.default))
      return n.default();
  }
}
function qt(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, qt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function io(e, t = !1, n) {
  let s = [], r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === xe ? (i.patchFlag & 128 && r++, s = s.concat(
      io(i.children, t, l)
    )) : (t || i.type !== ue) && s.push(l != null ? ct(i, { key: l }) : i);
  }
  if (r > 1)
    for (let o = 0; o < s.length; o++)
      s[o].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Ke(e, t) {
  return $(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    re({ name: e.name }, t, { setup: e })
  ) : e;
}
function lo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ks(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const yn = /* @__PURE__ */ new WeakMap();
function Ut(e, t, n, s, r = !1) {
  if (O(e)) {
    e.forEach(
      (P, J) => Ut(
        P,
        t && (O(t) ? t[J] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (At(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Ut(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? Ln(s.component) : s.el, i = r ? null : o, { i: l, r: c } = e, h = t && t.r, u = l.refs === k ? l.refs = {} : l.refs, d = l.setupState, g = /* @__PURE__ */ N(d), C = d === k ? Cr : (P) => Ks(u, P) ? !1 : H(g, P), F = (P, J) => !(J && Ks(u, J));
  if (h != null && h !== c) {
    if (Ws(t), ne(h))
      u[h] = null, C(h) && (d[h] = null);
    else if (/* @__PURE__ */ te(h)) {
      const P = t;
      F(h, P.k) && (h.value = null), P.k && (u[P.k] = null);
    }
  }
  if ($(c))
    tn(c, l, 12, [i, u]);
  else {
    const P = ne(c), J = /* @__PURE__ */ te(c);
    if (P || J) {
      const j = () => {
        if (e.f) {
          const D = P ? C(c) ? d[c] : u[c] : F() || !e.k ? c.value : u[e.k];
          if (r)
            O(D) && hs(D, o);
          else if (O(D))
            D.includes(o) || D.push(o);
          else if (P)
            u[c] = [o], C(c) && (d[c] = u[c]);
          else {
            const V = [o];
            F(c, e.k) && (c.value = V), e.k && (u[e.k] = V);
          }
        } else P ? (u[c] = i, C(c) && (d[c] = i)) : J && (F(c, e.k) && (c.value = i), e.k && (u[e.k] = i));
      };
      if (i) {
        const D = () => {
          j(), yn.delete(e);
        };
        D.id = -1, yn.set(e, D), be(D, n);
      } else
        Ws(e), j();
    }
  }
}
function Ws(e) {
  const t = yn.get(e);
  t && (t.flags |= 8, yn.delete(e));
}
Pn().requestIdleCallback;
Pn().cancelIdleCallback;
const At = (e) => !!e.type.__asyncLoader, Mn = (e) => e.type.__isKeepAlive;
function Yi(e, t) {
  co(e, "a", t);
}
function Xi(e, t) {
  co(e, "da", t);
}
function co(e, t, n = ge) {
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
      Mn(r.parent.vnode) && qi(s, t, n, r), r = r.parent;
  }
}
function qi(e, t, n, s) {
  const r = $n(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  ao(() => {
    hs(s[t], r);
  }, n);
}
function $n(e, t, n = ge, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      Ze();
      const l = nn(n), c = Fe(t, n, e, i);
      return l(), Qe(), c;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const tt = (e) => (t, n = ge) => {
  (!Zt || e === "sp") && $n(e, (...s) => t(...s), n);
}, Gi = tt("bm"), fo = tt("m"), Ji = tt(
  "bu"
), zi = tt("u"), uo = tt(
  "bum"
), ao = tt("um"), Zi = tt(
  "sp"
), Qi = tt("rtg"), el = tt("rtc");
function tl(e, t = ge) {
  $n("ec", e, t);
}
const nl = /* @__PURE__ */ Symbol.for("v-ndc");
function xn(e, t, n = {}, s, r) {
  if (ae.ce || ae.parent && At(ae.parent) && ae.parent.ce) {
    const h = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), se(), Be(
      xe,
      null,
      [W("slot", n, s)],
      h ? -2 : 64
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1), se();
  const i = o && ho(o(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, c = Be(
    xe,
    {
      key: (l && !Oe(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return o && o._c && (o._d = !0), c;
}
function ho(e) {
  return e.some((t) => Jt(t) ? !(t.type === ue || t.type === xe && !ho(t.children)) : !0) ? e : null;
}
function sl(e, t) {
  const n = {};
  for (const s in e)
    n[/[A-Z]/.test(s) ? `on:${s}` : an(s)] = e[s];
  return n;
}
const rs = (e) => e ? Do(e) ? Ln(e) : rs(e.parent) : null, Bt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ re(/* @__PURE__ */ Object.create(null), {
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
    $options: (e) => go(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Es(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Di.bind(e.proxy)),
    $watch: (e) => Ui.bind(e)
  })
), Wn = (e, t) => e !== k && !e.__isScriptSetup && H(e, t), rl = {
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
        if (r !== k && H(r, t))
          return i[t] = 2, r[t];
        if (H(o, t))
          return i[t] = 3, o[t];
        if (n !== k && H(n, t))
          return i[t] = 4, n[t];
        os && (i[t] = 0);
      }
    }
    const h = Bt[t];
    let u, d;
    if (h)
      return t === "$attrs" && fe(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== k && H(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      d = c.config.globalProperties, H(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return Wn(r, t) ? (r[t] = n, !0) : s !== k && H(s, t) ? (s[t] = n, !0) : H(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: o, type: i }
  }, l) {
    let c;
    return !!(n[l] || e !== k && l[0] !== "$" && H(e, l) || Wn(t, l) || H(o, l) || H(s, l) || H(Bt, l) || H(r.config.globalProperties, l) || (c = i.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ks(e) {
  return O(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let os = !0;
function ol(e) {
  const t = go(e), n = e.proxy, s = e.ctx;
  os = !1, t.beforeCreate && Ys(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: c,
    inject: h,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: g,
    beforeUpdate: C,
    updated: F,
    activated: P,
    deactivated: J,
    beforeDestroy: j,
    beforeUnmount: D,
    destroyed: V,
    unmounted: A,
    render: Y,
    renderTracked: oe,
    renderTriggered: de,
    errorCaptured: me,
    serverPrefetch: R,
    // public API
    expose: K,
    inheritAttrs: Z,
    // assets
    components: T,
    directives: z,
    filters: le
  } = t;
  if (h && il(h, s, null), i)
    for (const Q in i) {
      const X = i[Q];
      $(X) && (s[Q] = X.bind(n));
    }
  if (r) {
    const Q = r.call(n, n);
    B(Q) && (e.data = /* @__PURE__ */ On(Q));
  }
  if (os = !0, o)
    for (const Q in o) {
      const X = o[Q], ut = $(X) ? X.bind(n, n) : $(X.get) ? X.get.bind(n, n) : Ue, rn = !$(X) && $(X.set) ? X.set.bind(n) : Ue, at = Tn({
        get: ut,
        set: rn
      });
      Object.defineProperty(s, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => at.value,
        set: ($e) => at.value = $e
      });
    }
  if (l)
    for (const Q in l)
      po(l[Q], s, n, Q);
  if (c) {
    const Q = $(c) ? c.call(n) : c;
    Reflect.ownKeys(Q).forEach((X) => {
      Vi(X, Q[X]);
    });
  }
  u && Ys(u, e, "c");
  function ie(Q, X) {
    O(X) ? X.forEach((ut) => Q(ut.bind(n))) : X && Q(X.bind(n));
  }
  if (ie(Gi, d), ie(fo, g), ie(Ji, C), ie(zi, F), ie(Yi, P), ie(Xi, J), ie(tl, me), ie(el, oe), ie(Qi, de), ie(uo, D), ie(ao, A), ie(Zi, R), O(K))
    if (K.length) {
      const Q = e.exposed || (e.exposed = {});
      K.forEach((X) => {
        Object.defineProperty(Q, X, {
          get: () => n[X],
          set: (ut) => n[X] = ut,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  Y && e.render === Ue && (e.render = Y), Z != null && (e.inheritAttrs = Z), T && (e.components = T), z && (e.directives = z), R && lo(e);
}
function il(e, t, n = Ue) {
  O(e) && (e = is(e));
  for (const s in e) {
    const r = e[s];
    let o;
    B(r) ? "default" in r ? o = hn(
      r.from || s,
      r.default,
      !0
    ) : o = hn(r.from || s) : o = hn(r), /* @__PURE__ */ te(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[s] = o;
  }
}
function Ys(e, t, n) {
  Fe(
    O(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function po(e, t, n, s) {
  let r = s.includes(".") ? eo(n, s) : () => n[s];
  if (ne(e)) {
    const o = t[e];
    $(o) && pn(r, o);
  } else if ($(e))
    pn(r, e.bind(n));
  else if (B(e))
    if (O(e))
      e.forEach((o) => po(o, t, n, s));
    else {
      const o = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(o) && pn(r, o, e);
    }
}
function go(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = o.get(t);
  let c;
  return l ? c = l : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach(
    (h) => Cn(c, h, i, !0)
  ), Cn(c, t, i)), B(t) && o.set(t, c), c;
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
  data: Xs,
  props: qs,
  emits: qs,
  // objects
  methods: Nt,
  computed: Nt,
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
  components: Nt,
  directives: Nt,
  // watch
  watch: fl,
  // provide / inject
  provide: Xs,
  inject: cl
};
function Xs(e, t) {
  return t ? e ? function() {
    return re(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function cl(e, t) {
  return Nt(is(e), is(t));
}
function is(e) {
  if (O(e)) {
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
function Nt(e, t) {
  return e ? re(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function qs(e, t) {
  return e ? O(e) && O(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : re(
    /* @__PURE__ */ Object.create(null),
    ks(e),
    ks(t ?? {})
  ) : t;
}
function fl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = re(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = he(e[s], t[s]);
  return n;
}
function mo() {
  return {
    app: null,
    config: {
      isNativeTag: Cr,
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
    $(s) || (s = re({}, s)), r != null && !B(r) && (r = null);
    const o = mo(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const h = o.app = {
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
      use(u, ...d) {
        return i.has(u) || (u && $(u.install) ? (i.add(u), u.install(h, ...d)) : $(u) && (i.add(u), u(h, ...d))), h;
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), h;
      },
      component(u, d) {
        return d ? (o.components[u] = d, h) : o.components[u];
      },
      directive(u, d) {
        return d ? (o.directives[u] = d, h) : o.directives[u];
      },
      mount(u, d, g) {
        if (!c) {
          const C = h._ceVNode || W(s, r);
          return C.appContext = o, g === !0 ? g = "svg" : g === !1 && (g = void 0), e(C, u, g), c = !0, h._container = u, u.__vue_app__ = h, Ln(C.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        c && (Fe(
          l,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(u, d) {
        return o.provides[u] = d, h;
      },
      runWithContext(u) {
        const d = It;
        It = h;
        try {
          return u();
        } finally {
          It = d;
        }
      }
    };
    return h;
  };
}
let It = null;
const dl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${it(t)}Modifiers`] || e[`${ft(t)}Modifiers`];
function hl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || k;
  let r = n;
  const o = t.startsWith("update:"), i = o && dl(s, t.slice(7));
  i && (i.trim && (r = n.map((u) => ne(u) ? u.trim() : u)), i.number && (r = n.map(gs)));
  let l, c = s[l = an(t)] || // also try camelCase event handler (#2249)
  s[l = an(it(t))];
  !c && o && (c = s[l = an(ft(t))]), c && Fe(
    c,
    e,
    6,
    r
  );
  const h = s[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Fe(
      h,
      e,
      6,
      r
    );
  }
}
const pl = /* @__PURE__ */ new WeakMap();
function _o(e, t, n = !1) {
  const s = n ? pl : t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, l = !1;
  if (!$(e)) {
    const c = (h) => {
      const u = _o(h, t, !0);
      u && (l = !0, re(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !o && !l ? (B(e) && s.set(e, null), null) : (O(o) ? o.forEach((c) => i[c] = null) : re(i, o), B(e) && s.set(e, i), i);
}
function Rn(e, t) {
  return !e || !An(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, ft(t)) || H(e, t));
}
function Gs(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [o],
    slots: i,
    attrs: l,
    emit: c,
    render: h,
    renderCache: u,
    props: d,
    data: g,
    setupState: C,
    ctx: F,
    inheritAttrs: P
  } = e, J = bn(e);
  let j, D;
  try {
    if (n.shapeFlag & 4) {
      const A = r || s, Y = A;
      j = je(
        h.call(
          Y,
          A,
          u,
          d,
          C,
          g,
          F
        )
      ), D = l;
    } else {
      const A = t;
      j = je(
        A.length > 1 ? A(
          d,
          { attrs: l, slots: i, emit: c }
        ) : A(
          d,
          null
        )
      ), D = t.props ? l : gl(l);
    }
  } catch (A) {
    Kt.length = 0, Fn(A, e, 1), j = W(ue);
  }
  let V = j;
  if (D && P !== !1) {
    const A = Object.keys(D), { shapeFlag: Y } = V;
    A.length && Y & 7 && (o && A.some(ds) && (D = ml(
      D,
      o
    )), V = ct(V, D, !1, !0));
  }
  return n.dirs && (V = ct(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && qt(V, n.transition), j = V, bn(J), j;
}
const gl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || An(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ml = (e, t) => {
  const n = {};
  for (const s in e)
    (!ds(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function _l(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: l, patchFlag: c } = t, h = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? Js(s, i, h) : !!i;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const g = u[d];
        if (vo(i, s, g) && !Rn(h, g))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? Js(s, i, h) : !0 : !!i;
  return !1;
}
function Js(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (vo(t, e, o) && !Rn(n, o))
      return !0;
  }
  return !1;
}
function vo(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && B(s) && B(r) ? !_s(s, r) : s !== r;
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
const bo = {}, yo = () => Object.create(bo), xo = (e) => Object.getPrototypeOf(e) === bo;
function bl(e, t, n, s = !1) {
  const r = {}, o = yo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Co(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ Ti(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function yl(e, t, n, s) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, l = /* @__PURE__ */ N(r), [c] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let g = u[d];
        if (Rn(e.emitsOptions, g))
          continue;
        const C = t[g];
        if (c)
          if (H(o, g))
            C !== o[g] && (o[g] = C, h = !0);
          else {
            const F = it(g);
            r[F] = ls(
              c,
              l,
              F,
              C,
              e,
              !1
            );
          }
        else
          C !== o[g] && (o[g] = C, h = !0);
      }
    }
  } else {
    Co(e, t, r, o) && (h = !0);
    let u;
    for (const d in l)
      (!t || // for camelCase
      !H(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = ft(d)) === d || !H(t, u))) && (c ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[d] = ls(
        c,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (o !== l)
      for (const d in o)
        (!t || !H(t, d)) && (delete o[d], h = !0);
  }
  h && Ge(e.attrs, "set", "");
}
function Co(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let c in t) {
      if (Vt(c))
        continue;
      const h = t[c];
      let u;
      r && H(r, u = it(c)) ? !o || !o.includes(u) ? n[u] = h : (l || (l = {}))[u] = h : Rn(e.emitsOptions, c) || (!(c in s) || h !== s[c]) && (s[c] = h, i = !0);
    }
  if (o) {
    const c = /* @__PURE__ */ N(n), h = l || k;
    for (let u = 0; u < o.length; u++) {
      const d = o[u];
      n[d] = ls(
        r,
        c,
        d,
        h[d],
        e,
        !H(h, d)
      );
    }
  }
  return i;
}
function ls(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = H(i, "default");
    if (l && s === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && $(c)) {
        const { propsDefaults: h } = r;
        if (n in h)
          s = h[n];
        else {
          const u = nn(r);
          s = h[n] = c.call(
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
    ] && (s === "" || s === ft(n)) && (s = !0));
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
  if (!$(e)) {
    const u = (d) => {
      c = !0;
      const [g, C] = So(d, t, !0);
      re(i, g), C && l.push(...C);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !c)
    return B(e) && s.set(e, St), St;
  if (O(o))
    for (let u = 0; u < o.length; u++) {
      const d = it(o[u]);
      zs(d) && (i[d] = k);
    }
  else if (o)
    for (const u in o) {
      const d = it(u);
      if (zs(d)) {
        const g = o[u], C = i[d] = O(g) || $(g) ? { type: g } : re({}, g), F = C.type;
        let P = !1, J = !0;
        if (O(F))
          for (let j = 0; j < F.length; ++j) {
            const D = F[j], V = $(D) && D.name;
            if (V === "Boolean") {
              P = !0;
              break;
            } else V === "String" && (J = !1);
          }
        else
          P = $(F) && F.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = P, C[
          1
          /* shouldCastTrue */
        ] = J, (P || H(C, "default")) && l.push(d);
      }
    }
  const h = [i, l];
  return B(e) && s.set(e, h), h;
}
function zs(e) {
  return e[0] !== "$" && !Vt(e);
}
const As = (e) => e === "_" || e === "_ctx" || e === "$stable", Is = (e) => O(e) ? e.map(je) : [je(e)], Cl = (e, t, n) => {
  if (t._n)
    return t;
  const s = we((...r) => Is(t(...r)), n);
  return s._c = !1, s;
}, wo = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (As(r)) continue;
    const o = e[r];
    if ($(o))
      t[r] = Cl(r, o, s);
    else if (o != null) {
      const i = Is(o);
      t[r] = () => i;
    }
  }
}, To = (e, t) => {
  const n = Is(t);
  e.slots.default = () => n;
}, Eo = (e, t, n) => {
  for (const s in t)
    (n || !As(s)) && (e[s] = t[s]);
}, Sl = (e, t, n) => {
  const s = e.slots = yo();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Eo(s, t, n), n && Ir(s, "_", r, !0)) : wo(t, s);
  } else t && To(e, t);
}, wl = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = k;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : Eo(r, t, n) : (o = !t.$stable, wo(t, r)), i = t;
  } else t && (To(e, t), i = { default: 1 });
  if (o)
    for (const l in r)
      !As(l) && i[l] == null && delete r[l];
}, be = Pl;
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
    setText: h,
    setElementText: u,
    parentNode: d,
    nextSibling: g,
    setScopeId: C = Ue,
    insertStaticContent: F
  } = e, P = (f, a, p, b = null, m = null, _ = null, S = void 0, x = null, y = !!a.dynamicChildren) => {
    if (f === a)
      return;
    f && !_t(f, a) && (b = on(f), $e(f, m, _, !0), f = null), a.patchFlag === -2 && (y = !1, a.dynamicChildren = null);
    const { type: v, ref: I, shapeFlag: w } = a;
    switch (v) {
      case Dn:
        J(f, a, p, b);
        break;
      case ue:
        j(f, a, p, b);
        break;
      case Yn:
        f == null && D(a, p, b, S);
        break;
      case xe:
        T(
          f,
          a,
          p,
          b,
          m,
          _,
          S,
          x,
          y
        );
        break;
      default:
        w & 1 ? Y(
          f,
          a,
          p,
          b,
          m,
          _,
          S,
          x,
          y
        ) : w & 6 ? z(
          f,
          a,
          p,
          b,
          m,
          _,
          S,
          x,
          y
        ) : (w & 64 || w & 128) && v.process(
          f,
          a,
          p,
          b,
          m,
          _,
          S,
          x,
          y,
          Ft
        );
    }
    I != null && m ? Ut(I, f && f.ref, _, a || f, !a) : I == null && f && f.ref != null && Ut(f.ref, null, _, f, !0);
  }, J = (f, a, p, b) => {
    if (f == null)
      s(
        a.el = l(a.children),
        p,
        b
      );
    else {
      const m = a.el = f.el;
      a.children !== f.children && h(m, a.children);
    }
  }, j = (f, a, p, b) => {
    f == null ? s(
      a.el = c(a.children || ""),
      p,
      b
    ) : a.el = f.el;
  }, D = (f, a, p, b) => {
    [f.el, f.anchor] = F(
      f.children,
      a,
      p,
      b,
      f.el,
      f.anchor
    );
  }, V = ({ el: f, anchor: a }, p, b) => {
    let m;
    for (; f && f !== a; )
      m = g(f), s(f, p, b), f = m;
    s(a, p, b);
  }, A = ({ el: f, anchor: a }) => {
    let p;
    for (; f && f !== a; )
      p = g(f), r(f), f = p;
    r(a);
  }, Y = (f, a, p, b, m, _, S, x, y) => {
    if (a.type === "svg" ? S = "svg" : a.type === "math" && (S = "mathml"), f == null)
      oe(
        a,
        p,
        b,
        m,
        _,
        S,
        x,
        y
      );
    else {
      const v = f.el && f.el._isVueCE ? f.el : null;
      try {
        v && v._beginPatch(), R(
          f,
          a,
          m,
          _,
          S,
          x,
          y
        );
      } finally {
        v && v._endPatch();
      }
    }
  }, oe = (f, a, p, b, m, _, S, x) => {
    let y, v;
    const { props: I, shapeFlag: w, transition: E, dirs: M } = f;
    if (y = f.el = i(
      f.type,
      _,
      I && I.is,
      I
    ), w & 8 ? u(y, f.children) : w & 16 && me(
      f.children,
      y,
      null,
      b,
      m,
      kn(f, _),
      S,
      x
    ), M && dt(f, null, b, "created"), de(y, f, f.scopeId, S, b), I) {
      for (const q in I)
        q !== "value" && !Vt(q) && o(y, q, null, I[q], _, b);
      "value" in I && o(y, "value", null, I.value, _), (v = I.onVnodeBeforeMount) && Ne(v, b, f);
    }
    M && dt(f, null, b, "beforeMount");
    const L = Al(m, E);
    L && E.beforeEnter(y), s(y, a, p), ((v = I && I.onVnodeMounted) || L || M) && be(() => {
      v && Ne(v, b, f), L && E.enter(y), M && dt(f, null, b, "mounted");
    }, m);
  }, de = (f, a, p, b, m) => {
    if (p && C(f, p), b)
      for (let _ = 0; _ < b.length; _++)
        C(f, b[_]);
    if (m) {
      let _ = m.subTree;
      if (a === _ || Oo(_.type) && (_.ssContent === a || _.ssFallback === a)) {
        const S = m.vnode;
        de(
          f,
          S,
          S.scopeId,
          S.slotScopeIds,
          m.parent
        );
      }
    }
  }, me = (f, a, p, b, m, _, S, x, y = 0) => {
    for (let v = y; v < f.length; v++) {
      const I = f[v] = x ? qe(f[v]) : je(f[v]);
      P(
        null,
        I,
        a,
        p,
        b,
        m,
        _,
        S,
        x
      );
    }
  }, R = (f, a, p, b, m, _, S) => {
    const x = a.el = f.el;
    let { patchFlag: y, dynamicChildren: v, dirs: I } = a;
    y |= f.patchFlag & 16;
    const w = f.props || k, E = a.props || k;
    let M;
    if (p && ht(p, !1), (M = E.onVnodeBeforeUpdate) && Ne(M, p, a, f), I && dt(a, f, p, "beforeUpdate"), p && ht(p, !0), (w.innerHTML && E.innerHTML == null || w.textContent && E.textContent == null) && u(x, ""), v ? K(
      f.dynamicChildren,
      v,
      x,
      p,
      b,
      kn(a, m),
      _
    ) : S || X(
      f,
      a,
      x,
      null,
      p,
      b,
      kn(a, m),
      _,
      !1
    ), y > 0) {
      if (y & 16)
        Z(x, w, E, p, m);
      else if (y & 2 && w.class !== E.class && o(x, "class", null, E.class, m), y & 4 && o(x, "style", w.style, E.style, m), y & 8) {
        const L = a.dynamicProps;
        for (let q = 0; q < L.length; q++) {
          const U = L[q], _e = w[U], ve = E[U];
          (ve !== _e || U === "value") && o(x, U, _e, ve, m, p);
        }
      }
      y & 1 && f.children !== a.children && u(x, a.children);
    } else !S && v == null && Z(x, w, E, p, m);
    ((M = E.onVnodeUpdated) || I) && be(() => {
      M && Ne(M, p, a, f), I && dt(a, f, p, "updated");
    }, b);
  }, K = (f, a, p, b, m, _, S) => {
    for (let x = 0; x < a.length; x++) {
      const y = f[x], v = a[x], I = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !_t(y, v) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 198) ? d(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      P(
        y,
        v,
        I,
        null,
        b,
        m,
        _,
        S,
        !0
      );
    }
  }, Z = (f, a, p, b, m) => {
    if (a !== p) {
      if (a !== k)
        for (const _ in a)
          !Vt(_) && !(_ in p) && o(
            f,
            _,
            a[_],
            null,
            m,
            b
          );
      for (const _ in p) {
        if (Vt(_)) continue;
        const S = p[_], x = a[_];
        S !== x && _ !== "value" && o(f, _, x, S, m, b);
      }
      "value" in p && o(f, "value", a.value, p.value, m);
    }
  }, T = (f, a, p, b, m, _, S, x, y) => {
    const v = a.el = f ? f.el : l(""), I = a.anchor = f ? f.anchor : l("");
    let { patchFlag: w, dynamicChildren: E, slotScopeIds: M } = a;
    M && (x = x ? x.concat(M) : M), f == null ? (s(v, p, b), s(I, p, b), me(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      a.children || [],
      p,
      I,
      m,
      _,
      S,
      x,
      y
    )) : w > 0 && w & 64 && E && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === E.length ? (K(
      f.dynamicChildren,
      E,
      p,
      m,
      _,
      S,
      x
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (a.key != null || m && a === m.subTree) && Ao(
      f,
      a,
      !0
      /* shallow */
    )) : X(
      f,
      a,
      p,
      I,
      m,
      _,
      S,
      x,
      y
    );
  }, z = (f, a, p, b, m, _, S, x, y) => {
    a.slotScopeIds = x, f == null ? a.shapeFlag & 512 ? m.ctx.activate(
      a,
      p,
      b,
      S,
      y
    ) : le(
      a,
      p,
      b,
      m,
      _,
      S,
      y
    ) : We(f, a, y);
  }, le = (f, a, p, b, m, _, S) => {
    const x = f.component = Ll(
      f,
      b,
      m
    );
    if (Mn(f) && (x.ctx.renderer = Ft), Nl(x, !1, S), x.asyncDep) {
      if (m && m.registerDep(x, ie, S), !f.el) {
        const y = x.subTree = W(ue);
        j(null, y, a, p), f.placeholder = y.el;
      }
    } else
      ie(
        x,
        f,
        a,
        p,
        m,
        _,
        S
      );
  }, We = (f, a, p) => {
    const b = a.component = f.component;
    if (_l(f, a, p))
      if (b.asyncDep && !b.asyncResolved) {
        Q(b, a, p);
        return;
      } else
        b.next = a, b.update();
    else
      a.el = f.el, b.vnode = a;
  }, ie = (f, a, p, b, m, _, S) => {
    const x = () => {
      if (f.isMounted) {
        let { next: w, bu: E, u: M, parent: L, vnode: q } = f;
        {
          const De = Io(f);
          if (De) {
            w && (w.el = q.el, Q(f, w, S)), De.asyncDep.then(() => {
              be(() => {
                f.isUnmounted || v();
              }, m);
            });
            return;
          }
        }
        let U = w, _e;
        ht(f, !1), w ? (w.el = q.el, Q(f, w, S)) : w = q, E && dn(E), (_e = w.props && w.props.onVnodeBeforeUpdate) && Ne(_e, L, w, q), ht(f, !0);
        const ve = Gs(f), Re = f.subTree;
        f.subTree = ve, P(
          Re,
          ve,
          // parent may have changed if it's in a teleport
          d(Re.el),
          // anchor may have changed if it's in a fragment
          on(Re),
          f,
          m,
          _
        ), w.el = ve.el, U === null && vl(f, ve.el), M && be(M, m), (_e = w.props && w.props.onVnodeUpdated) && be(
          () => Ne(_e, L, w, q),
          m
        );
      } else {
        let w;
        const { el: E, props: M } = a, { bm: L, m: q, parent: U, root: _e, type: ve } = f, Re = At(a);
        ht(f, !1), L && dn(L), !Re && (w = M && M.onVnodeBeforeMount) && Ne(w, U, a), ht(f, !0);
        {
          _e.ce && _e.ce._hasShadowRoot() && _e.ce._injectChildStyle(ve);
          const De = f.subTree = Gs(f);
          P(
            null,
            De,
            p,
            b,
            f,
            m,
            _
          ), a.el = De.el;
        }
        if (q && be(q, m), !Re && (w = M && M.onVnodeMounted)) {
          const De = a;
          be(
            () => Ne(w, U, De),
            m
          );
        }
        (a.shapeFlag & 256 || U && At(U.vnode) && U.vnode.shapeFlag & 256) && f.a && be(f.a, m), f.isMounted = !0, a = p = b = null;
      }
    };
    f.scope.on();
    const y = f.effect = new Mr(x);
    f.scope.off();
    const v = f.update = y.run.bind(y), I = f.job = y.runIfDirty.bind(y);
    I.i = f, I.id = f.uid, y.scheduler = () => Es(I), ht(f, !0), v();
  }, Q = (f, a, p) => {
    a.component = f;
    const b = f.vnode.props;
    f.vnode = a, f.next = null, yl(f, a.props, b, p), wl(f, a.children, p), Ze(), Us(f), Qe();
  }, X = (f, a, p, b, m, _, S, x, y = !1) => {
    const v = f && f.children, I = f ? f.shapeFlag : 0, w = a.children, { patchFlag: E, shapeFlag: M } = a;
    if (E > 0) {
      if (E & 128) {
        rn(
          v,
          w,
          p,
          b,
          m,
          _,
          S,
          x,
          y
        );
        return;
      } else if (E & 256) {
        ut(
          v,
          w,
          p,
          b,
          m,
          _,
          S,
          x,
          y
        );
        return;
      }
    }
    M & 8 ? (I & 16 && Ot(v, m, _), w !== v && u(p, w)) : I & 16 ? M & 16 ? rn(
      v,
      w,
      p,
      b,
      m,
      _,
      S,
      x,
      y
    ) : Ot(v, m, _, !0) : (I & 8 && u(p, ""), M & 16 && me(
      w,
      p,
      b,
      m,
      _,
      S,
      x,
      y
    ));
  }, ut = (f, a, p, b, m, _, S, x, y) => {
    f = f || St, a = a || St;
    const v = f.length, I = a.length, w = Math.min(v, I);
    let E;
    for (E = 0; E < w; E++) {
      const M = a[E] = y ? qe(a[E]) : je(a[E]);
      P(
        f[E],
        M,
        p,
        null,
        m,
        _,
        S,
        x,
        y
      );
    }
    v > I ? Ot(
      f,
      m,
      _,
      !0,
      !1,
      w
    ) : me(
      a,
      p,
      b,
      m,
      _,
      S,
      x,
      y,
      w
    );
  }, rn = (f, a, p, b, m, _, S, x, y) => {
    let v = 0;
    const I = a.length;
    let w = f.length - 1, E = I - 1;
    for (; v <= w && v <= E; ) {
      const M = f[v], L = a[v] = y ? qe(a[v]) : je(a[v]);
      if (_t(M, L))
        P(
          M,
          L,
          p,
          null,
          m,
          _,
          S,
          x,
          y
        );
      else
        break;
      v++;
    }
    for (; v <= w && v <= E; ) {
      const M = f[w], L = a[E] = y ? qe(a[E]) : je(a[E]);
      if (_t(M, L))
        P(
          M,
          L,
          p,
          null,
          m,
          _,
          S,
          x,
          y
        );
      else
        break;
      w--, E--;
    }
    if (v > w) {
      if (v <= E) {
        const M = E + 1, L = M < I ? a[M].el : b;
        for (; v <= E; )
          P(
            null,
            a[v] = y ? qe(a[v]) : je(a[v]),
            p,
            L,
            m,
            _,
            S,
            x,
            y
          ), v++;
      }
    } else if (v > E)
      for (; v <= w; )
        $e(f[v], m, _, !0), v++;
    else {
      const M = v, L = v, q = /* @__PURE__ */ new Map();
      for (v = L; v <= E; v++) {
        const Ce = a[v] = y ? qe(a[v]) : je(a[v]);
        Ce.key != null && q.set(Ce.key, v);
      }
      let U, _e = 0;
      const ve = E - L + 1;
      let Re = !1, De = 0;
      const Mt = new Array(ve);
      for (v = 0; v < ve; v++) Mt[v] = 0;
      for (v = M; v <= w; v++) {
        const Ce = f[v];
        if (_e >= ve) {
          $e(Ce, m, _, !0);
          continue;
        }
        let Le;
        if (Ce.key != null)
          Le = q.get(Ce.key);
        else
          for (U = L; U <= E; U++)
            if (Mt[U - L] === 0 && _t(Ce, a[U])) {
              Le = U;
              break;
            }
        Le === void 0 ? $e(Ce, m, _, !0) : (Mt[Le - L] = v + 1, Le >= De ? De = Le : Re = !0, P(
          Ce,
          a[Le],
          p,
          null,
          m,
          _,
          S,
          x,
          y
        ), _e++);
      }
      const Rs = Re ? Il(Mt) : St;
      for (U = Rs.length - 1, v = ve - 1; v >= 0; v--) {
        const Ce = L + v, Le = a[Ce], Ds = a[Ce + 1], Ls = Ce + 1 < I ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ds.el || Po(Ds)
        ) : b;
        Mt[v] === 0 ? P(
          null,
          Le,
          p,
          Ls,
          m,
          _,
          S,
          x,
          y
        ) : Re && (U < 0 || v !== Rs[U] ? at(Le, p, Ls, 2) : U--);
      }
    }
  }, at = (f, a, p, b, m = null) => {
    const { el: _, type: S, transition: x, children: y, shapeFlag: v } = f;
    if (v & 6) {
      at(f.component.subTree, a, p, b);
      return;
    }
    if (v & 128) {
      f.suspense.move(a, p, b);
      return;
    }
    if (v & 64) {
      S.move(f, a, p, Ft);
      return;
    }
    if (S === xe) {
      s(_, a, p);
      for (let w = 0; w < y.length; w++)
        at(y[w], a, p, b);
      s(f.anchor, a, p);
      return;
    }
    if (S === Yn) {
      V(f, a, p);
      return;
    }
    if (b !== 2 && v & 1 && x)
      if (b === 0)
        x.beforeEnter(_), s(_, a, p), be(() => x.enter(_), m);
      else {
        const { leave: w, delayLeave: E, afterLeave: M } = x, L = () => {
          f.ctx.isUnmounted ? r(_) : s(_, a, p);
        }, q = () => {
          _._isLeaving && _[He](
            !0
            /* cancelled */
          ), w(_, () => {
            L(), M && M();
          });
        };
        E ? E(_, L, q) : q();
      }
    else
      s(_, a, p);
  }, $e = (f, a, p, b = !1, m = !1) => {
    const {
      type: _,
      props: S,
      ref: x,
      children: y,
      dynamicChildren: v,
      shapeFlag: I,
      patchFlag: w,
      dirs: E,
      cacheIndex: M
    } = f;
    if (w === -2 && (m = !1), x != null && (Ze(), Ut(x, null, p, f, !0), Qe()), M != null && (a.renderCache[M] = void 0), I & 256) {
      a.ctx.deactivate(f);
      return;
    }
    const L = I & 1 && E, q = !At(f);
    let U;
    if (q && (U = S && S.onVnodeBeforeUnmount) && Ne(U, a, f), I & 6)
      Yo(f.component, p, b);
    else {
      if (I & 128) {
        f.suspense.unmount(p, b);
        return;
      }
      L && dt(f, null, a, "beforeUnmount"), I & 64 ? f.type.remove(
        f,
        a,
        p,
        Ft,
        b
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== xe || w > 0 && w & 64) ? Ot(
        v,
        a,
        p,
        !1,
        !0
      ) : (_ === xe && w & 384 || !m && I & 16) && Ot(y, a, p), b && Ms(f);
    }
    (q && (U = S && S.onVnodeUnmounted) || L) && be(() => {
      U && Ne(U, a, f), L && dt(f, null, a, "unmounted");
    }, p);
  }, Ms = (f) => {
    const { type: a, el: p, anchor: b, transition: m } = f;
    if (a === xe) {
      ko(p, b);
      return;
    }
    if (a === Yn) {
      A(f);
      return;
    }
    const _ = () => {
      r(p), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (f.shapeFlag & 1 && m && !m.persisted) {
      const { leave: S, delayLeave: x } = m, y = () => S(p, _);
      x ? x(f.el, _, y) : y();
    } else
      _();
  }, ko = (f, a) => {
    let p;
    for (; f !== a; )
      p = g(f), r(f), f = p;
    r(a);
  }, Yo = (f, a, p) => {
    const { bum: b, scope: m, job: _, subTree: S, um: x, m: y, a: v } = f;
    Zs(y), Zs(v), b && dn(b), m.stop(), _ && (_.flags |= 8, $e(S, f, a, p)), x && be(x, a), be(() => {
      f.isUnmounted = !0;
    }, a);
  }, Ot = (f, a, p, b = !1, m = !1, _ = 0) => {
    for (let S = _; S < f.length; S++)
      $e(f[S], a, p, b, m);
  }, on = (f) => {
    if (f.shapeFlag & 6)
      return on(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const a = g(f.anchor || f.el), p = a && a[Bi];
    return p ? g(p) : a;
  };
  let Vn = !1;
  const $s = (f, a, p) => {
    let b;
    f == null ? a._vnode && ($e(a._vnode, null, null, !0), b = a._vnode.component) : P(
      a._vnode || null,
      f,
      a,
      null,
      null,
      null,
      p
    ), a._vnode = f, Vn || (Vn = !0, Us(b), Gr(), Vn = !1);
  }, Ft = {
    p: P,
    um: $e,
    m: at,
    r: Ms,
    mt: le,
    mc: me,
    pc: X,
    pbc: K,
    n: on,
    o: e
  };
  return {
    render: $s,
    hydrate: void 0,
    createApp: al($s)
  };
}
function kn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ht({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Al(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ao(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (O(s) && O(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = qe(r[o]), l.el = i.el), !n && l.patchFlag !== -2 && Ao(i, l)), l.type === Dn && (l.patchFlag === -1 && (l = r[o] = qe(l)), l.el = i.el), l.type === ue && !l.el && (l.el = i.el);
    }
}
function Il(e) {
  const t = e.slice(), n = [0];
  let s, r, o, i, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const h = e[s];
    if (h !== 0) {
      if (r = n[n.length - 1], e[r] < h) {
        t[s] = r, n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        l = o + i >> 1, e[n[l]] < h ? o = l + 1 : i = l;
      h < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function Io(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Io(t);
}
function Zs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Po(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Po(t.subTree) : null;
}
const Oo = (e) => e.__isSuspense;
function Pl(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : Ni(e);
}
const xe = /* @__PURE__ */ Symbol.for("v-fgt"), Dn = /* @__PURE__ */ Symbol.for("v-txt"), ue = /* @__PURE__ */ Symbol.for("v-cmt"), Yn = /* @__PURE__ */ Symbol.for("v-stc"), Kt = [];
let Ee = null;
function se(e = !1) {
  Kt.push(Ee = e ? null : []);
}
function Ol() {
  Kt.pop(), Ee = Kt[Kt.length - 1] || null;
}
let Gt = 1;
function Sn(e, t = !1) {
  Gt += e, e < 0 && Ee && t && (Ee.hasOnce = !0);
}
function Fo(e) {
  return e.dynamicChildren = Gt > 0 ? Ee || St : null, Ol(), Gt > 0 && Ee && Ee.push(e), e;
}
function ze(e, t, n, s, r, o) {
  return Fo(
    ee(
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
function Be(e, t, n, s, r) {
  return Fo(
    W(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Jt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function _t(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Mo = ({ key: e }) => e ?? null, gn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || /* @__PURE__ */ te(e) || $(e) ? { i: ae, r: e, k: t, f: !!n } : e : null);
function ee(e, t = null, n = null, s = 0, r = null, o = e === xe ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Mo(t),
    ref: t && gn(t),
    scopeId: zr,
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
    ctx: ae
  };
  return l ? (Ps(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= ne(n) ? 8 : 16), Gt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ee && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ee.push(c), c;
}
const W = Fl;
function Fl(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === nl) && (e = ue), Jt(e)) {
    const l = ct(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ps(l, n), Gt > 0 && !o && Ee && (l.shapeFlag & 6 ? Ee[Ee.indexOf(e)] = l : Ee.push(l)), l.patchFlag = -2, l;
  }
  if (Ul(e) && (e = e.__vccOpts), t) {
    t = Ml(t);
    let { class: l, style: c } = t;
    l && !ne(l) && (t.class = Pt(l)), B(c) && (/* @__PURE__ */ Ts(c) && !O(c) && (c = re({}, c)), t.style = ms(c));
  }
  const i = ne(e) ? 1 : Oo(e) ? 128 : to(e) ? 64 : B(e) ? 4 : $(e) ? 2 : 0;
  return ee(
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
  return e ? /* @__PURE__ */ Ts(e) || xo(e) ? re({}, e) : e : null;
}
function ct(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: l, transition: c } = e, h = t ? $o(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Mo(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? O(o) ? o.concat(gn(t)) : [o, gn(t)] : gn(t)
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
    patchFlag: t && e.type !== xe ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && ct(e.ssContent),
    ssFallback: e.ssFallback && ct(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && qt(
    u,
    c.clone(u)
  ), u;
}
function $l(e = " ", t = 0) {
  return W(Dn, null, e, t);
}
function zt(e = "", t = !1) {
  return t ? (se(), Be(ue, null, e)) : W(ue, null, e);
}
function je(e) {
  return e == null || typeof e == "boolean" ? W(ue) : O(e) ? W(
    xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Jt(e) ? qe(e) : W(Dn, null, String(e));
}
function qe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ct(e);
}
function Ps(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (O(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ps(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !xo(t) ? t._ctx = ae : r === 3 && ae && (ae.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: ae }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [$l(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function $o(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Pt([t.class, s.class]));
      else if (r === "style")
        t.style = ms([t.style, s.style]);
      else if (An(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(O(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Ne(e, t, n, s = null) {
  Fe(e, t, 7, [
    n,
    s
  ]);
}
const Rl = mo();
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
    emitsOptions: _o(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: k,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: k,
    data: k,
    props: k,
    attrs: k,
    slots: k,
    refs: k,
    setupState: k,
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
let ge = null;
const Ro = () => ge || ae;
let wn, cs;
{
  const e = Pn(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  wn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ge = n
  ), cs = t(
    "__VUE_SSR_SETTERS__",
    (n) => Zt = n
  );
}
const nn = (e) => {
  const t = ge;
  return wn(e), e.scope.on(), () => {
    e.scope.off(), wn(t);
  };
}, Qs = () => {
  ge && ge.scope.off(), wn(null);
};
function Do(e) {
  return e.vnode.shapeFlag & 4;
}
let Zt = !1;
function Nl(e, t = !1, n = !1) {
  t && cs(t);
  const { props: s, children: r } = e.vnode, o = Do(e);
  bl(e, s, o, t), Sl(e, r, n || t);
  const i = o ? Vl(e, t) : void 0;
  return t && cs(!1), i;
}
function Vl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, rl);
  const { setup: s } = n;
  if (s) {
    Ze();
    const r = e.setupContext = s.length > 1 ? jl(e) : null, o = nn(e), i = tn(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = wr(i);
    if (Qe(), o(), (l || e.sp) && !At(e) && lo(e), l) {
      if (i.then(Qs, Qs), t)
        return i.then((c) => {
          er(e, c);
        }).catch((c) => {
          Fn(c, e, 0);
        });
      e.asyncDep = i;
    } else
      er(e, i);
  } else
    Lo(e);
}
function er(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : B(t) && (e.setupState = Yr(t)), Lo(e);
}
function Lo(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ue);
  {
    const r = nn(e);
    Ze();
    try {
      ol(e);
    } finally {
      Qe(), r();
    }
  }
}
const Hl = {
  get(e, t) {
    return fe(e, "get", ""), e[t];
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
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Yr(Ei(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Bt)
        return Bt[n](e);
    },
    has(t, n) {
      return n in t || n in Bt;
    }
  })) : e.proxy;
}
function Ul(e) {
  return $(e) && "__vccOpts" in e;
}
const Tn = (e, t) => /* @__PURE__ */ Fi(e, t, Zt);
function Bl(e, t, n) {
  try {
    Sn(-1);
    const s = arguments.length;
    return s === 2 ? B(t) && !O(t) ? Jt(t) ? W(e, null, [t]) : W(e, t) : W(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Jt(n) && (n = [n]), W(e, t, n));
  } finally {
    Sn(1);
  }
}
const Kl = "3.5.28";
let fs;
const tr = typeof window < "u" && window.trustedTypes;
if (tr)
  try {
    fs = /* @__PURE__ */ tr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const No = fs ? (e) => fs.createHTML(e) : (e) => e, Wl = "http://www.w3.org/2000/svg", kl = "http://www.w3.org/1998/Math/MathML", Xe = typeof document < "u" ? document : null, nr = Xe && /* @__PURE__ */ Xe.createElement("template"), Yl = {
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
      nr.innerHTML = No(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = nr.content;
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
}, nt = "transition", Dt = "animation", Qt = /* @__PURE__ */ Symbol("_vtc"), Vo = {
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
}, Xl = /* @__PURE__ */ re(
  {},
  no,
  Vo
), ql = (e) => (e.displayName = "Transition", e.props = Xl, e), Gl = /* @__PURE__ */ ql(
  (e, { slots: t }) => Bl(ki, Jl(e), t)
), pt = (e, t = []) => {
  O(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, sr = (e) => e ? O(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Jl(e) {
  const t = {};
  for (const T in e)
    T in Vo || (t[T] = e[T]);
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
    appearActiveClass: h = i,
    appearToClass: u = l,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: g = `${n}-leave-active`,
    leaveToClass: C = `${n}-leave-to`
  } = e, F = zl(r), P = F && F[0], J = F && F[1], {
    onBeforeEnter: j,
    onEnter: D,
    onEnterCancelled: V,
    onLeave: A,
    onLeaveCancelled: Y,
    onBeforeAppear: oe = j,
    onAppear: de = D,
    onAppearCancelled: me = V
  } = t, R = (T, z, le, We) => {
    T._enterCancelled = We, gt(T, z ? u : l), gt(T, z ? h : i), le && le();
  }, K = (T, z) => {
    T._isLeaving = !1, gt(T, d), gt(T, C), gt(T, g), z && z();
  }, Z = (T) => (z, le) => {
    const We = T ? de : D, ie = () => R(z, T, le);
    pt(We, [z, ie]), rr(() => {
      gt(z, T ? c : o), Ye(z, T ? u : l), sr(We) || or(z, s, P, ie);
    });
  };
  return re(t, {
    onBeforeEnter(T) {
      pt(j, [T]), Ye(T, o), Ye(T, i);
    },
    onBeforeAppear(T) {
      pt(oe, [T]), Ye(T, c), Ye(T, h);
    },
    onEnter: Z(!1),
    onAppear: Z(!0),
    onLeave(T, z) {
      T._isLeaving = !0;
      const le = () => K(T, z);
      Ye(T, d), T._enterCancelled ? (Ye(T, g), cr(T)) : (cr(T), Ye(T, g)), rr(() => {
        T._isLeaving && (gt(T, d), Ye(T, C), sr(A) || or(T, s, J, le));
      }), pt(A, [T, le]);
    },
    onEnterCancelled(T) {
      R(T, !1, void 0, !0), pt(V, [T]);
    },
    onAppearCancelled(T) {
      R(T, !0, void 0, !0), pt(me, [T]);
    },
    onLeaveCancelled(T) {
      K(T), pt(Y, [T]);
    }
  });
}
function zl(e) {
  if (e == null)
    return null;
  if (B(e))
    return [Xn(e.enter), Xn(e.leave)];
  {
    const t = Xn(e);
    return [t, t];
  }
}
function Xn(e) {
  return zo(e);
}
function Ye(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Qt] || (e[Qt] = /* @__PURE__ */ new Set())).add(t);
}
function gt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Qt];
  n && (n.delete(t), n.size || (e[Qt] = void 0));
}
function rr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Zl = 0;
function or(e, t, n, s) {
  const r = e._endId = ++Zl, o = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: i, timeout: l, propCount: c } = Ql(e, t);
  if (!i)
    return s();
  const h = i + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(h, g), o();
  }, g = (C) => {
    C.target === e && ++u >= c && d();
  };
  setTimeout(() => {
    u < c && d();
  }, l + 1), e.addEventListener(h, g);
}
function Ql(e, t) {
  const n = window.getComputedStyle(e), s = (F) => (n[F] || "").split(", "), r = s(`${nt}Delay`), o = s(`${nt}Duration`), i = ir(r, o), l = s(`${Dt}Delay`), c = s(`${Dt}Duration`), h = ir(l, c);
  let u = null, d = 0, g = 0;
  t === nt ? i > 0 && (u = nt, d = i, g = o.length) : t === Dt ? h > 0 && (u = Dt, d = h, g = c.length) : (d = Math.max(i, h), u = d > 0 ? i > h ? nt : Dt : null, g = u ? u === nt ? o.length : c.length : 0);
  const C = u === nt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${nt}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: g,
    hasTransform: C
  };
}
function ir(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => lr(n) + lr(e[s])));
}
function lr(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function cr(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function ec(e, t, n) {
  const s = e[Qt];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const En = /* @__PURE__ */ Symbol("_vod"), Ho = /* @__PURE__ */ Symbol("_vsh"), tc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[En] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Lt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Lt(e, !0), s.enter(e)) : s.leave(e, () => {
      Lt(e, !1);
    }) : Lt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Lt(e, t);
  }
};
function Lt(e, t) {
  e.style.display = t ? e[En] : "none", e[Ho] = !t;
}
const nc = /* @__PURE__ */ Symbol(""), sc = /(?:^|;)\s*display\s*:/;
function rc(e, t, n) {
  const s = e.style, r = ne(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if (ne(t))
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
  En in e && (e[En] = o ? s.display : "", e[Ho] && (s.display = "none"));
}
const fr = /\s*!important$/;
function mn(e, t, n) {
  if (O(n))
    n.forEach((s) => mn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = oc(e, t);
    fr.test(n) ? e.setProperty(
      ft(s),
      n.replace(fr, ""),
      "important"
    ) : e[s] = n;
  }
}
const ur = ["Webkit", "Moz", "ms"], qn = {};
function oc(e, t) {
  const n = qn[t];
  if (n)
    return n;
  let s = it(t);
  if (s !== "filter" && s in e)
    return qn[t] = s;
  s = Ar(s);
  for (let r = 0; r < ur.length; r++) {
    const o = ur[r] + s;
    if (o in e)
      return qn[t] = o;
  }
  return t;
}
const ar = "http://www.w3.org/1999/xlink";
function dr(e, t, n, s, r, o = si(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ar, t.slice(6, t.length)) : e.setAttributeNS(ar, t, n) : n == null || o && !Pr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Oe(n) ? String(n) : n
  );
}
function hr(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? No(n) : n);
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
    l === "boolean" ? n = Pr(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
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
const pr = /* @__PURE__ */ Symbol("_vei");
function lc(e, t, n, s, r = null) {
  const o = e[pr] || (e[pr] = {}), i = o[t];
  if (s && i)
    i.value = s;
  else {
    const [l, c] = cc(t);
    if (s) {
      const h = o[t] = ac(
        s,
        r
      );
      Ct(e, l, h, c);
    } else i && (ic(e, l, i, c), o[t] = void 0);
  }
}
const gr = /(?:Once|Passive|Capture)$/;
function cc(e) {
  let t;
  if (gr.test(e)) {
    t = {};
    let s;
    for (; s = e.match(gr); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ft(e.slice(2)), t];
}
let Gn = 0;
const fc = /* @__PURE__ */ Promise.resolve(), uc = () => Gn || (fc.then(() => Gn = 0), Gn = Date.now());
function ac(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Fe(
      dc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = uc(), n;
}
function dc(e, t) {
  if (O(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const mr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, hc = (e, t, n, s, r, o) => {
  const i = r === "svg";
  t === "class" ? ec(e, s, i) : t === "style" ? rc(e, n, s) : An(t) ? ds(t) || lc(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : pc(e, t, s, i)) ? (hr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && dr(e, t, s, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ne(s)) ? hr(e, it(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), dr(e, t, s, i));
};
function pc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && mr(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return mr(t) && ne(n) ? !1 : t in e;
}
const _r = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return O(t) ? (n) => dn(t, n) : t;
};
function gc(e) {
  e.target.composing = !0;
}
function vr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Jn = /* @__PURE__ */ Symbol("_assign");
function br(e, t, n) {
  return t && (e = e.trim()), n && (e = gs(e)), e;
}
const mc = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Jn] = _r(r);
    const o = s || r.props && r.props.type === "number";
    Ct(e, t ? "change" : "input", (i) => {
      i.target.composing || e[Jn](br(e.value, n, o));
    }), (n || o) && Ct(e, "change", () => {
      e.value = br(e.value, n, o);
    }), t || (Ct(e, "compositionstart", gc), Ct(e, "compositionend", vr), Ct(e, "change", vr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: o } }, i) {
    if (e[Jn] = _r(i), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? gs(e.value) : e.value, c = t ?? "";
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
    const o = ft(r.key);
    if (t.some(
      (i) => i === o || _c[i] === o
    ))
      return e(r);
  }));
}, bc = /* @__PURE__ */ re({ patchProp: hc }, Yl);
let yr;
function yc() {
  return yr || (yr = Tl(bc));
}
const xc = ((...e) => {
  const t = yc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Sc(s);
    if (!r) return;
    const o = t._component;
    !$(o) && !o.render && !o.template && (o.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
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
function Sc(e) {
  return ne(e) ? document.querySelector(e) : e;
}
const us = /* @__PURE__ */ Te(!1), wc = /* @__PURE__ */ Te(!1), jo = /* @__PURE__ */ Te(0.7), Uo = /* @__PURE__ */ Te(1), Bo = /* @__PURE__ */ Te(0);
function Tc() {
  us.value = !us.value;
}
function Ec() {
  jo.value = 0.7, Uo.value = 1, Bo.value = 0;
}
function Os() {
  return {
    opacity: jo,
    scale: Uo,
    rotation: Bo,
    isAttached: wc,
    showControls: us,
    resetControls: Ec,
    toggleShowControls: Tc
  };
}
const Ac = { class: "ito-controls-menu" }, Ic = { class: "ito-controls-menu-content" }, Pc = { class: "ito-controls-menu-content-footer" }, Oc = /* @__PURE__ */ Ke({
  __name: "ControlsMenu",
  setup(e) {
    const { showControls: t, toggleShowControls: n } = Os();
    return (s, r) => (se(), ze("div", Ac, [
      W(Gl, {
        name: "ito-menu-transition",
        mode: "out-in"
      }, {
        default: we(() => [
          Zr(ee("div", Ic, [
            xn(s.$slots, "default", {}, void 0, !0),
            ee("div", Pc, [
              xn(s.$slots, "footer", {}, void 0, !0)
            ])
          ], 512), [
            [tc, Se(t)]
          ])
        ]),
        _: 3
      }),
      ee("div", {
        class: Pt(["ito-controls-menu-activator", { "ito-controls-menu-activator--active": Se(t) }]),
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
}, Fc = /* @__PURE__ */ Me(Oc, [["__scopeId", "data-v-2553df42"]]), Mc = {}, $c = { class: "ito-control-field-group" };
function Rc(e, t) {
  return se(), ze("div", $c, [
    xn(e.$slots, "default", {}, void 0)
  ]);
}
const un = /* @__PURE__ */ Me(Mc, [["render", Rc], ["__scopeId", "data-v-305a1241"]]), Fs = /* @__PURE__ */ Te(!1), ce = /* @__PURE__ */ On({
  initialX: 0,
  initialY: 0,
  currentX: 0,
  currentY: 0,
  offsetX: 0,
  offsetY: 0
});
function Dc(e) {
  ce.initialX = e.clientX - ce.offsetX, ce.initialY = e.clientY - ce.offsetY, Fs.value = !0;
}
function Lc(e) {
  Fs.value && (ce.currentX = e.clientX - ce.initialX, ce.currentY = e.clientY - ce.initialY, ce.offsetX = ce.currentX, ce.offsetY = ce.currentY);
}
function Nc(e) {
  ce.initialX = e.clientX, ce.initialY = e.clientY, Fs.value = !1;
}
function Vc() {
  Object.assign(ce, {
    initialX: 0,
    initialY: 0,
    currentX: 0,
    currentY: 0,
    offsetX: 0,
    offsetY: 0
  });
}
function Ko() {
  return {
    elementDrag: ce,
    resetElementDrag: Vc,
    dragEvents: {
      mousedown: Dc,
      mousemove: Lc,
      mouseup: Nc
    }
  };
}
const Hc = { class: "ito-tracer-image-wrapper" }, jc = ["src"], Uc = /* @__PURE__ */ Ke({
  __name: "TracerImage",
  props: {
    src: {}
  },
  setup(e) {
    const { showControls: t, scale: n, opacity: s, rotation: r, isAttached: o } = Os(), { elementDrag: i, dragEvents: l } = Ko(), c = e, h = Tn(() => c.src && t.value && !o.value ? {
      wheel: u,
      ...l
    } : {});
    function u(g) {
      if (g.ctrlKey) {
        const C = 0.01 * g.deltaY;
        let F = n.value;
        F -= C, n.value = parseFloat(Math.min(Math.max(F, 0.01), 8).toFixed(2));
      }
      if (g.shiftKey) {
        const C = g.deltaY > 0 ? 3 : -3;
        let F = r.value + C;
        r.value = Math.min(Math.max(F, -360), 360);
      }
      (g.shiftKey || g.ctrlKey) && g.preventDefault();
    }
    const d = Tn(() => ({
      opacity: s.value,
      cursor: t.value && !o.value ? "grab" : void 0,
      pointerEvents: t.value && !o.value ? "auto" : void 0,
      transform: `
			translate3d(${i.currentX}px, ${i.currentY}px, 0) 
			scale(${n.value}, ${n.value}) 
			rotate(${r.value}deg)
		`
    }));
    return (g, C) => (se(), ze("div", Hc, [
      ee("img", $o({
        src: c.src,
        style: d.value,
        draggable: "false",
        class: "ito-tracer-image"
      }, sl(h.value)), null, 16, jc)
    ]));
  }
}), Bc = /* @__PURE__ */ Me(Uc, [["__scopeId", "data-v-fa1e17e1"]]);
function Wo(e) {
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
}, Xc = /* @__PURE__ */ Ke({
  __name: "ControlField",
  props: {
    label: {},
    error: {}
  },
  setup(e) {
    return (t, n) => (se(), ze("div", Wc, [
      e.label ? (se(), ze("div", kc, bt(e.label), 1)) : zt("", !0),
      xn(t.$slots, "default", {}, void 0),
      e.error ? (se(), ze("div", Yc, bt(e.error), 1)) : zt("", !0)
    ]));
  }
}), sn = /* @__PURE__ */ Me(Xc, [["__scopeId", "data-v-4cddcc2f"]]), qc = /* @__PURE__ */ Ke({
  __name: "ImagePicker",
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ Te(null);
    async function r(i) {
      const l = i.target, c = l.files || [], [h] = c;
      try {
        const u = await Kc(h);
        n("change", u), l.value = "";
      } catch {
        console.error("Failed to load file");
      }
    }
    function o() {
      s.value?.click();
    }
    return (i, l) => (se(), Be(sn, { label: "Upload image" }, {
      default: we(() => [
        ee("div", {
          class: "ito-upload-button",
          onClick: o
        }, "Browse"),
        ee("input", {
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
}), Gc = /* @__PURE__ */ Me(qc, [["__scopeId", "data-v-7aac8931"]]), Jc = /* @__PURE__ */ Ke({
  __name: "ImageFetcher",
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ Te("");
    function r() {
      s.value = "";
    }
    function o() {
      s.value = "";
    }
    async function i(l) {
      const c = l.target, h = c.value;
      if (h)
        try {
          const u = await Wo(h);
          n("change", u), c.value = "";
        } catch {
          console.error("Failed to load file"), s.value = "Failed to fetch image";
        }
    }
    return (l, c) => (se(), Be(sn, {
      label: "Or paste image address",
      error: s.value
    }, {
      default: we(() => [
        ee("input", {
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
}), zc = /* @__PURE__ */ Me(Jc, [["__scopeId", "data-v-422d0df5"]]), Zc = { class: "ito-image-agent-controls" }, Qc = ["disabled", "title"], ef = ["placeholder", "disabled"], tf = {
  key: 0,
  class: "ito-status-message"
}, nf = /* @__PURE__ */ Ke({
  __name: "ImageAgent",
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ Te(!1), r = /* @__PURE__ */ Te(""), o = /* @__PURE__ */ Te(""), i = /* @__PURE__ */ Te("test");
    function l() {
      const h = document.querySelector("#currentWord");
      if (h?.textContent?.trim())
        return h.textContent.trim().replace(/_/g, "").replace(/\s+/g, "").trim();
      const u = [
        '[class*="prompt"]',
        // Common pattern for prompt/word displays
        ".phone-input",
        // Input field might contain word hints
        "[data-word]"
      ];
      for (const C of u) {
        const F = document.querySelector(C);
        if (F?.textContent?.trim())
          return F.textContent.trim();
      }
      const g = document.body.innerText.match(/Draw:?\s+(\w+)/i);
      return g?.[1] ? g[1] : null;
    }
    async function c() {
      r.value = "", o.value = "";
      const h = i.value.trim() || l();
      if (!h) {
        r.value = "Could not detect word. Type it manually.";
        return;
      }
      s.value = !0;
      try {
        const u = await fetch(
          `https://agent.typo.rip/${encodeURIComponent(h)}`
        );
        if (!u.ok)
          throw new Error(`API returned ${u.status}`);
        const d = await u.json(), g = Array.isArray(d) ? d[0]?.url || d[0]?.src : d?.url || d?.src || d?.[0]?.url;
        if (!g) {
          r.value = "No images found for this word";
          return;
        }
        await Wo(g), n("change", g), i.value = "", o.value = "✓ Image loaded", setTimeout(() => {
          o.value = "";
        }, 2e3);
      } catch (u) {
        console.error("Image agent error:", u), r.value = "Failed to fetch image. Try another word.";
      } finally {
        s.value = !1;
      }
    }
    return (h, u) => (se(), Be(sn, {
      label: "AI Image Fetch",
      error: r.value
    }, {
      default: we(() => [
        ee("div", Zc, [
          ee("button", {
            class: "ito-agent-btn",
            onClick: c,
            disabled: s.value,
            title: `Fetch image for: ${i.value || "No word detected"}`
          }, bt(s.value ? "Fetching..." : "🤖 Auto"), 9, Qc),
          Zr(ee("input", {
            "onUpdate:modelValue": u[0] || (u[0] = (d) => i.value = d),
            type: "text",
            placeholder: i.value ? "Press enter or click Auto..." : "Type a word...",
            class: "ito-input-control",
            onKeydown: vc(c, ["enter"]),
            disabled: s.value
          }, null, 40, ef), [
            [mc, i.value]
          ])
        ]),
        o.value ? (se(), ze("div", tf, bt(o.value), 1)) : zt("", !0)
      ]),
      _: 1
    }, 8, ["error"]));
  }
}), sf = /* @__PURE__ */ Me(nf, [["__scopeId", "data-v-e65925d6"]]), rf = ["min", "max", "value"], of = /* @__PURE__ */ Ke({
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
    return (i, l) => (se(), Be(sn, { label: e.label }, {
      default: we(() => [
        ee("input", {
          type: "range",
          class: "ito-range-control",
          min: s.min,
          max: s.max,
          value: r.value,
          onInput: o
        }, null, 40, rf)
      ]),
      _: 1
    }, 8, ["label"]));
  }
}), zn = /* @__PURE__ */ Me(of, [["__scopeId", "data-v-5fca2c0f"]]), lf = /* @__PURE__ */ Ke({
  __name: "TextButton",
  props: {
    label: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = t;
    return (s, r) => (se(), ze("div", {
      class: "ito-text-button",
      onClick: r[0] || (r[0] = (o) => n("click"))
    }, bt(e.label), 1));
  }
}), xr = /* @__PURE__ */ Me(lf, [["__scopeId", "data-v-c965233f"]]), cf = { class: "ito-switch-field-label" }, ff = { class: "ito-switch" }, uf = /* @__PURE__ */ Ke({
  __name: "SwitchField",
  props: {
    label: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (se(), Be(sn, null, {
      default: we(() => [
        ee("div", {
          class: "ito-switch-field",
          onClick: n[0] || (n[0] = (s) => t.$emit("update:modelValue", !e.modelValue))
        }, [
          ee("div", cf, bt(e.label), 1),
          ee("div", ff, [
            ee("div", {
              class: Pt(["ito-switch-button", { "ito-switch-button--on": e.modelValue }])
            }, [...n[1] || (n[1] = [
              ee("div", { class: "ito-switch-knob" }, null, -1)
            ])], 2)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), af = /* @__PURE__ */ Me(uf, [["__scopeId", "data-v-32f8a04c"]]);
function df() {
  const e = document.getElementById("ImageTracerOverlayContainer"), t = document.querySelector(":root");
  if (!e)
    return;
  const n = e.getBoundingClientRect(), s = window.scrollY || document.documentElement.scrollTop, r = window.scrollX || document.documentElement.scrollLeft;
  t.style.setProperty("--image-tracer-overlay-attached-x", n.top + s + "px"), t.style.setProperty("--image-tracer-overlay-attached-y", n.left + r + "px");
}
const hf = { class: "ito-fixed-container" }, pf = { class: "ito-text-buttons-group" }, gf = /* @__PURE__ */ Ke({
  __name: "App",
  setup(e) {
    const { opacity: t, scale: n, resetControls: s, rotation: r, isAttached: o } = Os(), { resetElementDrag: i } = Ko(), l = /* @__PURE__ */ Te(void 0);
    function c() {
      l.value = void 0;
    }
    function h() {
      s(), i();
    }
    return pn(o, () => {
      o.value && df();
    }), (u, d) => (se(), ze(xe, null, [
      ee("div", {
        id: "ImageTracerOverlayContainer",
        class: Pt([Se(o) ? "ito-attached-container" : "ito-fixed-container"])
      }, [
        l.value ? (se(), Be(Bc, {
          key: 0,
          src: l.value
        }, null, 8, ["src"])) : zt("", !0)
      ], 2),
      ee("div", hf, [
        W(Fc, null, {
          footer: we(() => [...d[7] || (d[7] = [
            ee("div", { class: "ito-menu-helper" }, " Tips: Position the image by dragging. Ctrl+Scroll to change zoom. Shift+Scroll to rotate. ", -1)
          ])]),
          default: we(() => [
            W(un, null, {
              default: we(() => [
                W(Gc, {
                  onChange: d[0] || (d[0] = (g) => l.value = g)
                }),
                W(zc, {
                  onChange: d[1] || (d[1] = (g) => l.value = g)
                }),
                W(sf, {
                  onChange: d[2] || (d[2] = (g) => l.value = g)
                })
              ]),
              _: 1
            }),
            W(un, null, {
              default: we(() => [
                W(af, {
                  label: "Lock image position",
                  modelValue: Se(o),
                  "onUpdate:modelValue": d[3] || (d[3] = (g) => /* @__PURE__ */ te(o) ? o.value = g : null)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            W(un, null, {
              default: we(() => [
                W(zn, {
                  label: `Opacity ${Se(t)}`,
                  min: 0,
                  max: 100,
                  modelValue: Se(t),
                  "onUpdate:modelValue": d[4] || (d[4] = (g) => /* @__PURE__ */ te(t) ? t.value = g : null)
                }, null, 8, ["label", "modelValue"]),
                W(zn, {
                  label: `Scale ${Se(n)}x`,
                  min: 1,
                  max: 800,
                  modelValue: Se(n),
                  "onUpdate:modelValue": d[5] || (d[5] = (g) => /* @__PURE__ */ te(n) ? n.value = g : null)
                }, null, 8, ["label", "modelValue"]),
                W(zn, {
                  label: `Rotate ${Se(r)}deg`,
                  min: -36e3,
                  max: 36e3,
                  modelValue: Se(r),
                  "onUpdate:modelValue": d[6] || (d[6] = (g) => /* @__PURE__ */ te(r) ? r.value = g : null)
                }, null, 8, ["label", "modelValue"])
              ]),
              _: 1
            }),
            l.value ? (se(), Be(un, { key: 0 }, {
              default: we(() => [
                ee("div", pf, [
                  W(xr, {
                    label: "Clear image",
                    onClick: c
                  }),
                  W(xr, {
                    label: "Reset image",
                    title: "Reset position, opacity, scale and rotation",
                    onClick: h
                  })
                ])
              ]),
              _: 1
            })) : zt("", !0)
          ]),
          _: 1
        })
      ])
    ], 64));
  }
}), mf = /* @__PURE__ */ Me(gf, [["__scopeId", "data-v-c0a2719e"]]), Nn = document.createElement("div");
Nn.setAttribute("id", "ImageTracerOverlayMount");
Nn.style.display = "none";
document.body.appendChild(Nn);
const _f = xc(mf);
_f.mount(Nn);
