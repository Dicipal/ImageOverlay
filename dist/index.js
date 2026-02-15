// @__NO_SIDE_EFFECTS__
function bs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const re = {}, $t = [], Ye = () => {
}, Oo = () => !1, Pn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ws = (e) => e.startsWith("onUpdate:"), de = Object.assign, xs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ei = Object.prototype.hasOwnProperty, Z = (e, t) => ei.call(e, t), V = Array.isArray, Ft = (e) => on(e) === "[object Map]", Ro = (e) => on(e) === "[object Set]", Ws = (e) => on(e) === "[object Date]", H = (e) => typeof e == "function", ae = (e) => typeof e == "string", Re = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", Lo = (e) => (ee(e) || H(e)) && H(e.then) && H(e.catch), Vo = Object.prototype.toString, on = (e) => Vo.call(e), ti = (e) => on(e).slice(8, -1), Do = (e) => on(e) === "[object Object]", Cs = (e) => ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Bt = /* @__PURE__ */ bs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Mn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ni = /-\w/g, ut = Mn(
  (e) => e.replace(ni, (t) => t.slice(1).toUpperCase())
), si = /\B([A-Z])/g, ht = Mn(
  (e) => e.replace(si, "-$1").toLowerCase()
), No = Mn((e) => e.charAt(0).toUpperCase() + e.slice(1)), mn = Mn(
  (e) => e ? `on${No(e)}` : ""
), at = (e, t) => !Object.is(e, t), vn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ho = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Ss = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, oi = (e) => {
  const t = ae(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ys;
const On = () => Ys || (Ys = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ts(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = ae(s) ? ci(s) : Ts(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (ae(e) || ee(e))
    return e;
}
const ri = /;(?![^(]*\))/g, ii = /:([^]+)/, li = /\/\*[^]*?\*\//g;
function ci(e) {
  const t = {};
  return e.replace(li, "").split(ri).forEach((n) => {
    if (n) {
      const s = n.split(ii);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ft(e) {
  let t = "";
  if (ae(e))
    t = e;
  else if (V(e))
    for (let n = 0; n < e.length; n++) {
      const s = ft(e[n]);
      s && (t += s + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ai = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ui = /* @__PURE__ */ bs(ai);
function Uo(e) {
  return !!e || e === "";
}
function fi(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Es(e[s], t[s]);
  return n;
}
function Es(e, t) {
  if (e === t) return !0;
  let n = Ws(e), s = Ws(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Re(e), s = Re(t), n || s)
    return e === t;
  if (n = V(e), s = V(t), n || s)
    return n && s ? fi(e, t) : !1;
  if (n = ee(e), s = ee(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, r = Object.keys(t).length;
    if (o !== r)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (l && !c || !l && c || !Es(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const ko = (e) => !!(e && e.__v_isRef === !0), Me = (e) => ae(e) ? e : e == null ? "" : V(e) || ee(e) && (e.toString === Vo || !H(e.toString)) ? ko(e) ? Me(e.value) : JSON.stringify(e, jo, 2) : String(e), jo = (e, t) => ko(t) ? jo(e, t.value) : Ft(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[Wn(s, r) + " =>"] = o, n),
    {}
  )
} : Ro(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Wn(n))
} : Re(t) ? Wn(t) : ee(t) && !V(t) && !Do(t) ? String(t) : t, Wn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Re(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Se;
class di {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Se, !t && Se && (this.index = (Se.scopes || (Se.scopes = [])).push(
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
      const n = Se;
      try {
        return Se = this, t();
      } finally {
        Se = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Se, Se = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Se = this.prevScope, this.prevScope = void 0);
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
function pi() {
  return Se;
}
let le;
const Yn = /* @__PURE__ */ new WeakSet();
class Bo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Se && Se.active && Se.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Yn.has(this) && (Yn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Wo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, qs(this), Yo(this);
    const t = le, n = Oe;
    le = this, Oe = !0;
    try {
      return this.fn();
    } finally {
      qo(this), le = t, Oe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        $s(t);
      this.deps = this.depsTail = void 0, qs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Yn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    os(this) && this.run();
  }
  get dirty() {
    return os(this);
  }
}
let Ko = 0, Kt, Wt;
function Wo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Wt, Wt = e;
    return;
  }
  e.next = Kt, Kt = e;
}
function As() {
  Ko++;
}
function Is() {
  if (--Ko > 0)
    return;
  if (Wt) {
    let t = Wt;
    for (Wt = void 0; t; ) {
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
function Yo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function qo(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), $s(s), hi(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function os(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Xo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Xo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Gt) || (e.globalVersion = Gt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !os(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = le, s = Oe;
  le = e, Oe = !0;
  try {
    Yo(e);
    const o = e.fn(e._value);
    (t.version === 0 || at(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    le = n, Oe = s, qo(e), e.flags &= -3;
  }
}
function $s(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      $s(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function hi(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Oe = !0;
const Go = [];
function tt() {
  Go.push(Oe), Oe = !1;
}
function nt() {
  const e = Go.pop();
  Oe = e === void 0 ? !0 : e;
}
function qs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = le;
    le = void 0;
    try {
      t();
    } finally {
      le = n;
    }
  }
}
let Gt = 0;
class gi {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Fs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!le || !Oe || le === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== le)
      n = this.activeLink = new gi(le, this), le.deps ? (n.prevDep = le.depsTail, le.depsTail.nextDep = n, le.depsTail = n) : le.deps = le.depsTail = n, zo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = le.depsTail, n.nextDep = void 0, le.depsTail.nextDep = n, le.depsTail = n, le.deps === n && (le.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Gt++, this.notify(t);
  }
  notify(t) {
    As();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Is();
    }
  }
}
function zo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        zo(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const rs = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ Symbol(
  ""
), is = /* @__PURE__ */ Symbol(
  ""
), zt = /* @__PURE__ */ Symbol(
  ""
);
function he(e, t, n) {
  if (Oe && le) {
    let s = rs.get(e);
    s || rs.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Fs()), o.map = s, o.key = n), o.track();
  }
}
function Ze(e, t, n, s, o, r) {
  const i = rs.get(e);
  if (!i) {
    Gt++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (As(), t === "clear")
    i.forEach(l);
  else {
    const c = V(e), d = c && Cs(n);
    if (c && n === "length") {
      const u = Number(s);
      i.forEach((p, g) => {
        (g === "length" || g === zt || !Re(g) && g >= u) && l(p);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), d && l(i.get(zt)), t) {
        case "add":
          c ? d && l(i.get("length")) : (l(i.get(St)), Ft(e) && l(i.get(is)));
          break;
        case "delete":
          c || (l(i.get(St)), Ft(e) && l(i.get(is)));
          break;
        case "set":
          Ft(e) && l(i.get(St));
          break;
      }
  }
  Is();
}
function Et(e) {
  const t = /* @__PURE__ */ J(e);
  return t === e ? t : (he(t, "iterate", zt), /* @__PURE__ */ Fe(e) ? t : t.map(Le));
}
function Rn(e) {
  return he(e = /* @__PURE__ */ J(e), "iterate", zt), e;
}
function it(e, t) {
  return /* @__PURE__ */ st(e) ? Rt(/* @__PURE__ */ Tt(e) ? Le(t) : t) : Le(t);
}
const mi = {
  __proto__: null,
  [Symbol.iterator]() {
    return qn(this, Symbol.iterator, (e) => it(this, e));
  },
  concat(...e) {
    return Et(this).concat(
      ...e.map((t) => V(t) ? Et(t) : t)
    );
  },
  entries() {
    return qn(this, "entries", (e) => (e[1] = it(this, e[1]), e));
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
    return Xn(this, "includes", e);
  },
  indexOf(...e) {
    return Xn(this, "indexOf", e);
  },
  join(e) {
    return Et(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Xn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Xe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Nt(this, "pop");
  },
  push(...e) {
    return Nt(this, "push", e);
  },
  reduce(e, ...t) {
    return Xs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Xs(this, "reduceRight", e, t);
  },
  shift() {
    return Nt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Xe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Nt(this, "splice", e);
  },
  toReversed() {
    return Et(this).toReversed();
  },
  toSorted(e) {
    return Et(this).toSorted(e);
  },
  toSpliced(...e) {
    return Et(this).toSpliced(...e);
  },
  unshift(...e) {
    return Nt(this, "unshift", e);
  },
  values() {
    return qn(this, "values", (e) => it(this, e));
  }
};
function qn(e, t, n) {
  const s = Rn(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Fe(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.done || (r.value = n(r.value)), r;
  }), o;
}
const vi = Array.prototype;
function Xe(e, t, n, s, o, r) {
  const i = Rn(e), l = i !== e && !/* @__PURE__ */ Fe(e), c = i[t];
  if (c !== vi[t]) {
    const p = c.apply(e, r);
    return l ? Le(p) : p;
  }
  let d = n;
  i !== e && (l ? d = function(p, g) {
    return n.call(this, it(e, p), g, e);
  } : n.length > 2 && (d = function(p, g) {
    return n.call(this, p, g, e);
  }));
  const u = c.call(i, d, s);
  return l && o ? o(u) : u;
}
function Xs(e, t, n, s) {
  const o = Rn(e);
  let r = n;
  return o !== e && (/* @__PURE__ */ Fe(e) ? n.length > 3 && (r = function(i, l, c) {
    return n.call(this, i, l, c, e);
  }) : r = function(i, l, c) {
    return n.call(this, i, it(e, l), c, e);
  }), o[t](r, ...s);
}
function Xn(e, t, n) {
  const s = /* @__PURE__ */ J(e);
  he(s, "iterate", zt);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Os(n[0]) ? (n[0] = /* @__PURE__ */ J(n[0]), s[t](...n)) : o;
}
function Nt(e, t, n = []) {
  tt(), As();
  const s = (/* @__PURE__ */ J(e))[t].apply(e, n);
  return Is(), nt(), s;
}
const _i = /* @__PURE__ */ bs("__proto__,__v_isRef,__isVue"), Jo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Re)
);
function yi(e) {
  Re(e) || (e = String(e));
  const t = /* @__PURE__ */ J(this);
  return he(t, "has", e), t.hasOwnProperty(e);
}
class Zo {
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
      return s === (o ? r ? $i : nr : r ? tr : er).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = V(t);
    if (!o) {
      let c;
      if (i && (c = mi[n]))
        return c;
      if (n === "hasOwnProperty")
        return yi;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ue(t) ? t : s
    );
    if ((Re(n) ? Jo.has(n) : _i(n)) || (o || he(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ ue(l)) {
      const c = i && Cs(n) ? l : l.value;
      return o && ee(c) ? /* @__PURE__ */ cs(c) : c;
    }
    return ee(l) ? o ? /* @__PURE__ */ cs(l) : /* @__PURE__ */ Ln(l) : l;
  }
}
class Qo extends Zo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    const i = V(t) && Cs(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ st(r);
      if (!/* @__PURE__ */ Fe(s) && !/* @__PURE__ */ st(s) && (r = /* @__PURE__ */ J(r), s = /* @__PURE__ */ J(s)), !i && /* @__PURE__ */ ue(r) && !/* @__PURE__ */ ue(s))
        return d || (r.value = s), !0;
    }
    const l = i ? Number(n) < t.length : Z(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ue(t) ? t : o
    );
    return t === /* @__PURE__ */ J(o) && (l ? at(s, r) && Ze(t, "set", n, s) : Ze(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = Z(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && Ze(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Re(n) || !Jo.has(n)) && he(t, "has", n), s;
  }
  ownKeys(t) {
    return he(
      t,
      "iterate",
      V(t) ? "length" : St
    ), Reflect.ownKeys(t);
  }
}
class bi extends Zo {
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
const wi = /* @__PURE__ */ new Qo(), xi = /* @__PURE__ */ new bi(), Ci = /* @__PURE__ */ new Qo(!0);
const ls = (e) => e, dn = (e) => Reflect.getPrototypeOf(e);
function Si(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = /* @__PURE__ */ J(o), i = Ft(r), l = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, d = o[e](...s), u = n ? ls : t ? Rt : Le;
    return !t && he(
      r,
      "iterate",
      c ? is : St
    ), de(
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
function pn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ti(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = /* @__PURE__ */ J(r), l = /* @__PURE__ */ J(o);
      e || (at(o, l) && he(i, "get", o), he(i, "get", l));
      const { has: c } = dn(i), d = t ? ls : e ? Rt : Le;
      if (c.call(i, o))
        return d(r.get(o));
      if (c.call(i, l))
        return d(r.get(l));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && he(/* @__PURE__ */ J(o), "iterate", St), o.size;
    },
    has(o) {
      const r = this.__v_raw, i = /* @__PURE__ */ J(r), l = /* @__PURE__ */ J(o);
      return e || (at(o, l) && he(i, "has", o), he(i, "has", l)), o === l ? r.has(o) : r.has(o) || r.has(l);
    },
    forEach(o, r) {
      const i = this, l = i.__v_raw, c = /* @__PURE__ */ J(l), d = t ? ls : e ? Rt : Le;
      return !e && he(c, "iterate", St), l.forEach((u, p) => o.call(r, d(u), d(p), i));
    }
  };
  return de(
    n,
    e ? {
      add: pn("add"),
      set: pn("set"),
      delete: pn("delete"),
      clear: pn("clear")
    } : {
      add(o) {
        !t && !/* @__PURE__ */ Fe(o) && !/* @__PURE__ */ st(o) && (o = /* @__PURE__ */ J(o));
        const r = /* @__PURE__ */ J(this);
        return dn(r).has.call(r, o) || (r.add(o), Ze(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !/* @__PURE__ */ Fe(r) && !/* @__PURE__ */ st(r) && (r = /* @__PURE__ */ J(r));
        const i = /* @__PURE__ */ J(this), { has: l, get: c } = dn(i);
        let d = l.call(i, o);
        d || (o = /* @__PURE__ */ J(o), d = l.call(i, o));
        const u = c.call(i, o);
        return i.set(o, r), d ? at(r, u) && Ze(i, "set", o, r) : Ze(i, "add", o, r), this;
      },
      delete(o) {
        const r = /* @__PURE__ */ J(this), { has: i, get: l } = dn(r);
        let c = i.call(r, o);
        c || (o = /* @__PURE__ */ J(o), c = i.call(r, o)), l && l.call(r, o);
        const d = r.delete(o);
        return c && Ze(r, "delete", o, void 0), d;
      },
      clear() {
        const o = /* @__PURE__ */ J(this), r = o.size !== 0, i = o.clear();
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
    n[o] = Si(o, e, t);
  }), n;
}
function Ps(e, t) {
  const n = Ti(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    Z(n, o) && o in s ? n : s,
    o,
    r
  );
}
const Ei = {
  get: /* @__PURE__ */ Ps(!1, !1)
}, Ai = {
  get: /* @__PURE__ */ Ps(!1, !0)
}, Ii = {
  get: /* @__PURE__ */ Ps(!0, !1)
};
const er = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), $i = /* @__PURE__ */ new WeakMap();
function Fi(e) {
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
function Pi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Fi(ti(e));
}
// @__NO_SIDE_EFFECTS__
function Ln(e) {
  return /* @__PURE__ */ st(e) ? e : Ms(
    e,
    !1,
    wi,
    Ei,
    er
  );
}
// @__NO_SIDE_EFFECTS__
function Mi(e) {
  return Ms(
    e,
    !1,
    Ci,
    Ai,
    tr
  );
}
// @__NO_SIDE_EFFECTS__
function cs(e) {
  return Ms(
    e,
    !0,
    xi,
    Ii,
    nr
  );
}
function Ms(e, t, n, s, o) {
  if (!ee(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Pi(e);
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
function Tt(e) {
  return /* @__PURE__ */ st(e) ? /* @__PURE__ */ Tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function st(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Os(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function J(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ J(t) : e;
}
function Oi(e) {
  return !Z(e, "__v_skip") && Object.isExtensible(e) && Ho(e, "__v_skip", !0), e;
}
const Le = (e) => ee(e) ? /* @__PURE__ */ Ln(e) : e, Rt = (e) => ee(e) ? /* @__PURE__ */ cs(e) : e;
// @__NO_SIDE_EFFECTS__
function ue(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function se(e) {
  return Ri(e, !1);
}
function Ri(e, t) {
  return /* @__PURE__ */ ue(e) ? e : new Li(e, t);
}
class Li {
  constructor(t, n) {
    this.dep = new Fs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ J(t), this._value = n ? t : Le(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Fe(t) || /* @__PURE__ */ st(t);
    t = s ? t : /* @__PURE__ */ J(t), at(t, n) && (this._rawValue = t, this._value = s ? t : Le(t), this.dep.trigger());
  }
}
function Te(e) {
  return /* @__PURE__ */ ue(e) ? e.value : e;
}
const Vi = {
  get: (e, t, n) => t === "__v_raw" ? e : Te(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ ue(o) && !/* @__PURE__ */ ue(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function sr(e) {
  return /* @__PURE__ */ Tt(e) ? e : new Proxy(e, Vi);
}
class Di {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Fs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Gt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    le !== this)
      return Wo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Xo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ni(e, t, n = !1) {
  let s, o;
  return H(e) ? s = e : (s = e.get, o = e.set), new Di(s, o, n);
}
const hn = {}, xn = /* @__PURE__ */ new WeakMap();
let xt;
function Hi(e, t = !1, n = xt) {
  if (n) {
    let s = xn.get(n);
    s || xn.set(n, s = []), s.push(e);
  }
}
function Ui(e, t, n = re) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: l, call: c } = n, d = (O) => o ? O : /* @__PURE__ */ Fe(O) || o === !1 || o === 0 ? Qe(O, 1) : Qe(O);
  let u, p, g, y, M = !1, P = !1;
  if (/* @__PURE__ */ ue(e) ? (p = () => e.value, M = /* @__PURE__ */ Fe(e)) : /* @__PURE__ */ Tt(e) ? (p = () => d(e), M = !0) : V(e) ? (P = !0, M = e.some((O) => /* @__PURE__ */ Tt(O) || /* @__PURE__ */ Fe(O)), p = () => e.map((O) => {
    if (/* @__PURE__ */ ue(O))
      return O.value;
    if (/* @__PURE__ */ Tt(O))
      return d(O);
    if (H(O))
      return c ? c(O, 2) : O();
  })) : H(e) ? t ? p = c ? () => c(e, 2) : e : p = () => {
    if (g) {
      tt();
      try {
        g();
      } finally {
        nt();
      }
    }
    const O = xt;
    xt = u;
    try {
      return c ? c(e, 3, [y]) : e(y);
    } finally {
      xt = O;
    }
  } : p = Ye, t && o) {
    const O = p, G = o === !0 ? 1 / 0 : o;
    p = () => Qe(O(), G);
  }
  const z = pi(), K = () => {
    u.stop(), z && z.active && xs(z.effects, u);
  };
  if (r && t) {
    const O = t;
    t = (...G) => {
      O(...G), K();
    };
  }
  let U = P ? new Array(e.length).fill(hn) : hn;
  const W = (O) => {
    if (!(!(u.flags & 1) || !u.dirty && !O))
      if (t) {
        const G = u.run();
        if (o || M || (P ? G.some((ce, k) => at(ce, U[k])) : at(G, U))) {
          g && g();
          const ce = xt;
          xt = u;
          try {
            const k = [
              G,
              // pass undefined as the old value when it's changed for the first time
              U === hn ? void 0 : P && U[0] === hn ? [] : U,
              y
            ];
            U = G, c ? c(t, 3, k) : (
              // @ts-expect-error
              t(...k)
            );
          } finally {
            xt = ce;
          }
        }
      } else
        u.run();
  };
  return l && l(W), u = new Bo(p), u.scheduler = i ? () => i(W, !1) : W, y = (O) => Hi(O, !1, u), g = u.onStop = () => {
    const O = xn.get(u);
    if (O) {
      if (c)
        c(O, 4);
      else
        for (const G of O) G();
      xn.delete(u);
    }
  }, t ? s ? W(!0) : U = u.run() : i ? i(W.bind(null, !0), !0) : u.run(), K.pause = u.pause.bind(u), K.resume = u.resume.bind(u), K.stop = K, K;
}
function Qe(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ue(e))
    Qe(e.value, t, n);
  else if (V(e))
    for (let s = 0; s < e.length; s++)
      Qe(e[s], t, n);
  else if (Ro(e) || Ft(e))
    e.forEach((s) => {
      Qe(s, t, n);
    });
  else if (Do(e)) {
    for (const s in e)
      Qe(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Qe(e[s], t, n);
  }
  return e;
}
function rn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Vn(o, t, n);
  }
}
function Ve(e, t, n, s) {
  if (H(e)) {
    const o = rn(e, t, n, s);
    return o && Lo(o) && o.catch((r) => {
      Vn(r, t, n);
    }), o;
  }
  if (V(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(Ve(e[r], t, n, s));
    return o;
  }
}
function Vn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || re;
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
      tt(), rn(r, null, 10, [
        e,
        c,
        d
      ]), nt();
      return;
    }
  }
  ki(e, n, o, s, i);
}
function ki(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const _e = [];
let Be = -1;
const Pt = [];
let lt = null, At = 0;
const or = /* @__PURE__ */ Promise.resolve();
let Cn = null;
function ji(e) {
  const t = Cn || or;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Bi(e) {
  let t = Be + 1, n = _e.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = _e[s], r = Jt(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Rs(e) {
  if (!(e.flags & 1)) {
    const t = Jt(e), n = _e[_e.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Jt(n) ? _e.push(e) : _e.splice(Bi(t), 0, e), e.flags |= 1, rr();
  }
}
function rr() {
  Cn || (Cn = or.then(lr));
}
function Ki(e) {
  V(e) ? Pt.push(...e) : lt && e.id === -1 ? lt.splice(At + 1, 0, e) : e.flags & 1 || (Pt.push(e), e.flags |= 1), rr();
}
function Gs(e, t, n = Be + 1) {
  for (; n < _e.length; n++) {
    const s = _e[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      _e.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ir(e) {
  if (Pt.length) {
    const t = [...new Set(Pt)].sort(
      (n, s) => Jt(n) - Jt(s)
    );
    if (Pt.length = 0, lt) {
      lt.push(...t);
      return;
    }
    for (lt = t, At = 0; At < lt.length; At++) {
      const n = lt[At];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    lt = null, At = 0;
  }
}
const Jt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function lr(e) {
  try {
    for (Be = 0; Be < _e.length; Be++) {
      const t = _e[Be];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), rn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Be < _e.length; Be++) {
      const t = _e[Be];
      t && (t.flags &= -2);
    }
    Be = -1, _e.length = 0, ir(), Cn = null, (_e.length || Pt.length) && lr();
  }
}
let me = null, cr = null;
function Sn(e) {
  const t = me;
  return me = e, cr = e && e.type.__scopeId || null, t;
}
function Ee(e, t = me, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && In(-1);
    const r = Sn(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Sn(r), s._d && In(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function et(e, t) {
  if (me === null)
    return e;
  const n = jn(me), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, l, c = re] = t[o];
    r && (H(r) && (r = {
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
    c && (tt(), Ve(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), nt());
  }
}
function Wi(e, t) {
  if (be) {
    let n = be.provides;
    const s = be.parent && be.parent.provides;
    s === n && (n = be.provides = Object.create(s)), n[e] = t;
  }
}
function _n(e, t, n = !1) {
  const s = kr();
  if (s || Ot) {
    let o = Ot ? Ot._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && H(t) ? t.call(s && s.proxy) : t;
  }
}
const Yi = /* @__PURE__ */ Symbol.for("v-scx"), qi = () => _n(Yi);
function yn(e, t, n) {
  return ar(e, t, n);
}
function ar(e, t, n = re) {
  const { immediate: s, deep: o, flush: r, once: i } = n, l = de({}, n), c = t && s || !t && r !== "post";
  let d;
  if (tn) {
    if (r === "sync") {
      const y = qi();
      d = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!c) {
      const y = () => {
      };
      return y.stop = Ye, y.resume = Ye, y.pause = Ye, y;
    }
  }
  const u = be;
  l.call = (y, M, P) => Ve(y, u, M, P);
  let p = !1;
  r === "post" ? l.scheduler = (y) => {
    Ce(y, u && u.suspense);
  } : r !== "sync" && (p = !0, l.scheduler = (y, M) => {
    M ? y() : Rs(y);
  }), l.augmentJob = (y) => {
    t && (y.flags |= 4), p && (y.flags |= 2, u && (y.id = u.uid, y.i = u));
  };
  const g = Ui(e, t, l);
  return tn && (d ? d.push(g) : c && g()), g;
}
function Xi(e, t, n) {
  const s = this.proxy, o = ae(e) ? e.includes(".") ? ur(s, e) : () => s[e] : e.bind(s, s);
  let r;
  H(t) ? r = t : (r = t.handler, n = t);
  const i = cn(this), l = ar(o, r.bind(s), n);
  return i(), l;
}
function ur(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Gi = /* @__PURE__ */ Symbol("_vte"), fr = (e) => e.__isTeleport, Ke = /* @__PURE__ */ Symbol("_leaveCb"), Ht = /* @__PURE__ */ Symbol("_enterCb");
function zi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ln(() => {
    e.isMounted = !0;
  }), yr(() => {
    e.isUnmounting = !0;
  }), e;
}
const $e = [Function, Array], dr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: $e,
  onEnter: $e,
  onAfterEnter: $e,
  onEnterCancelled: $e,
  // leave
  onBeforeLeave: $e,
  onLeave: $e,
  onAfterLeave: $e,
  onLeaveCancelled: $e,
  // appear
  onBeforeAppear: $e,
  onAppear: $e,
  onAfterAppear: $e,
  onAppearCancelled: $e
}, pr = (e) => {
  const t = e.subTree;
  return t.component ? pr(t.component) : t;
}, Ji = {
  name: "BaseTransition",
  props: dr,
  setup(e, { slots: t }) {
    const n = kr(), s = zi();
    return () => {
      const o = t.default && mr(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = hr(o), i = /* @__PURE__ */ J(e), { mode: l } = i;
      if (s.isLeaving)
        return Gn(r);
      const c = zs(r);
      if (!c)
        return Gn(r);
      let d = as(
        c,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (p) => d = p
      );
      c.type !== ge && Zt(c, d);
      let u = n.subTree && zs(n.subTree);
      if (u && u.type !== ge && !Ct(u, c) && pr(n).type !== ge) {
        let p = as(
          u,
          i,
          s,
          n
        );
        if (Zt(u, p), l === "out-in" && c.type !== ge)
          return s.isLeaving = !0, p.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete p.afterLeave, u = void 0;
          }, Gn(r);
        l === "in-out" && c.type !== ge ? p.delayLeave = (g, y, M) => {
          const P = gr(
            s,
            u
          );
          P[String(u.key)] = u, g[Ke] = () => {
            y(), g[Ke] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            M(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function hr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ge) {
        t = n;
        break;
      }
  }
  return t;
}
const Zi = Ji;
function gr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function as(e, t, n, s, o) {
  const {
    appear: r,
    mode: i,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: p,
    onBeforeLeave: g,
    onLeave: y,
    onAfterLeave: M,
    onLeaveCancelled: P,
    onBeforeAppear: z,
    onAppear: K,
    onAfterAppear: U,
    onAppearCancelled: W
  } = t, O = String(e.key), G = gr(n, e), ce = ($, j) => {
    $ && Ve(
      $,
      s,
      9,
      j
    );
  }, k = ($, j) => {
    const X = j[1];
    ce($, j), V($) ? $.every((S) => S.length <= 1) && X() : $.length <= 1 && X();
  }, D = {
    mode: i,
    persisted: l,
    beforeEnter($) {
      let j = c;
      if (!n.isMounted)
        if (r)
          j = z || c;
        else
          return;
      $[Ke] && $[Ke](
        !0
        /* cancelled */
      );
      const X = G[O];
      X && Ct(e, X) && X.el[Ke] && X.el[Ke](), ce(j, [$]);
    },
    enter($) {
      let j = d, X = u, S = p;
      if (!n.isMounted)
        if (r)
          j = K || d, X = U || u, S = W || p;
        else
          return;
      let Y = !1;
      $[Ht] = (w) => {
        Y || (Y = !0, w ? ce(S, [$]) : ce(X, [$]), D.delayedLeave && D.delayedLeave(), $[Ht] = void 0);
      };
      const C = $[Ht].bind(null, !1);
      j ? k(j, [$, C]) : C();
    },
    leave($, j) {
      const X = String(e.key);
      if ($[Ht] && $[Ht](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return j();
      ce(g, [$]);
      let S = !1;
      $[Ke] = (C) => {
        S || (S = !0, j(), C ? ce(P, [$]) : ce(M, [$]), $[Ke] = void 0, G[X] === e && delete G[X]);
      };
      const Y = $[Ke].bind(null, !1);
      G[X] = e, y ? k(y, [$, Y]) : Y();
    },
    clone($) {
      const j = as(
        $,
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
function Gn(e) {
  if (Dn(e))
    return e = dt(e), e.children = null, e;
}
function zs(e) {
  if (!Dn(e))
    return fr(e.type) && e.children ? hr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && H(n.default))
      return n.default();
  }
}
function Zt(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Zt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function mr(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === ye ? (i.patchFlag & 128 && o++, s = s.concat(
      mr(i.children, t, l)
    )) : (t || i.type !== ge) && s.push(l != null ? dt(i, { key: l }) : i);
  }
  if (o > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function De(e, t) {
  return H(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    de({ name: e.name }, t, { setup: e })
  ) : e;
}
function vr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Js(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Tn = /* @__PURE__ */ new WeakMap();
function Yt(e, t, n, s, o = !1) {
  if (V(e)) {
    e.forEach(
      (P, z) => Yt(
        P,
        t && (V(t) ? t[z] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (Mt(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Yt(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? jn(s.component) : s.el, i = o ? null : r, { i: l, r: c } = e, d = t && t.r, u = l.refs === re ? l.refs = {} : l.refs, p = l.setupState, g = /* @__PURE__ */ J(p), y = p === re ? Oo : (P) => Js(u, P) ? !1 : Z(g, P), M = (P, z) => !(z && Js(u, z));
  if (d != null && d !== c) {
    if (Zs(t), ae(d))
      u[d] = null, y(d) && (p[d] = null);
    else if (/* @__PURE__ */ ue(d)) {
      const P = t;
      M(d, P.k) && (d.value = null), P.k && (u[P.k] = null);
    }
  }
  if (H(c))
    rn(c, l, 12, [i, u]);
  else {
    const P = ae(c), z = /* @__PURE__ */ ue(c);
    if (P || z) {
      const K = () => {
        if (e.f) {
          const U = P ? y(c) ? p[c] : u[c] : M() || !e.k ? c.value : u[e.k];
          if (o)
            V(U) && xs(U, r);
          else if (V(U))
            U.includes(r) || U.push(r);
          else if (P)
            u[c] = [r], y(c) && (p[c] = u[c]);
          else {
            const W = [r];
            M(c, e.k) && (c.value = W), e.k && (u[e.k] = W);
          }
        } else P ? (u[c] = i, y(c) && (p[c] = i)) : z && (M(c, e.k) && (c.value = i), e.k && (u[e.k] = i));
      };
      if (i) {
        const U = () => {
          K(), Tn.delete(e);
        };
        U.id = -1, Tn.set(e, U), Ce(U, n);
      } else
        Zs(e), K();
    }
  }
}
function Zs(e) {
  const t = Tn.get(e);
  t && (t.flags |= 8, Tn.delete(e));
}
On().requestIdleCallback;
On().cancelIdleCallback;
const Mt = (e) => !!e.type.__asyncLoader, Dn = (e) => e.type.__isKeepAlive;
function Qi(e, t) {
  _r(e, "a", t);
}
function el(e, t) {
  _r(e, "da", t);
}
function _r(e, t, n = be) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Nn(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Dn(o.parent.vnode) && tl(s, t, n, o), o = o.parent;
  }
}
function tl(e, t, n, s) {
  const o = Nn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Hn(() => {
    xs(s[t], o);
  }, n);
}
function Nn(e, t, n = be, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      tt();
      const l = cn(n), c = Ve(t, n, e, i);
      return l(), nt(), c;
    });
    return s ? o.unshift(r) : o.push(r), r;
  }
}
const ot = (e) => (t, n = be) => {
  (!tn || e === "sp") && Nn(e, (...s) => t(...s), n);
}, nl = ot("bm"), ln = ot("m"), sl = ot(
  "bu"
), ol = ot("u"), yr = ot(
  "bum"
), Hn = ot("um"), rl = ot(
  "sp"
), il = ot("rtg"), ll = ot("rtc");
function cl(e, t = be) {
  Nn("ec", e, t);
}
const al = /* @__PURE__ */ Symbol.for("v-ndc");
function ul(e, t, n, s) {
  let o;
  const r = n, i = V(e);
  if (i || ae(e)) {
    const l = i && /* @__PURE__ */ Tt(e);
    let c = !1, d = !1;
    l && (c = !/* @__PURE__ */ Fe(e), d = /* @__PURE__ */ st(e), e = Rn(e)), o = new Array(e.length);
    for (let u = 0, p = e.length; u < p; u++)
      o[u] = t(
        c ? d ? Rt(Le(e[u])) : Le(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, r);
  } else if (ee(e))
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
function En(e, t, n = {}, s, o) {
  if (me.ce || me.parent && Mt(me.parent) && me.parent.ce) {
    const d = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), oe(), qe(
      ye,
      null,
      [Q("slot", n, s)],
      d ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), oe();
  const i = r && br(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, c = qe(
    ye,
    {
      key: (l && !Re(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), c;
}
function br(e) {
  return e.some((t) => en(t) ? !(t.type === ge || t.type === ye && !br(t.children)) : !0) ? e : null;
}
function fl(e, t) {
  const n = {};
  for (const s in e)
    n[/[A-Z]/.test(s) ? `on:${s}` : mn(s)] = e[s];
  return n;
}
const us = (e) => e ? jr(e) ? jn(e) : us(e.parent) : null, qt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ de(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => us(e.parent),
    $root: (e) => us(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => xr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Rs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ji.bind(e.proxy)),
    $watch: (e) => Xi.bind(e)
  })
), zn = (e, t) => e !== re && !e.__isScriptSetup && Z(e, t), dl = {
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
        if (zn(s, t))
          return i[t] = 1, s[t];
        if (o !== re && Z(o, t))
          return i[t] = 2, o[t];
        if (Z(r, t))
          return i[t] = 3, r[t];
        if (n !== re && Z(n, t))
          return i[t] = 4, n[t];
        fs && (i[t] = 0);
      }
    }
    const d = qt[t];
    let u, p;
    if (d)
      return t === "$attrs" && he(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== re && Z(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = c.config.globalProperties, Z(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return zn(o, t) ? (o[t] = n, !0) : s !== re && Z(s, t) ? (s[t] = n, !0) : Z(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: r, type: i }
  }, l) {
    let c;
    return !!(n[l] || e !== re && l[0] !== "$" && Z(e, l) || zn(t, l) || Z(r, l) || Z(s, l) || Z(qt, l) || Z(o.config.globalProperties, l) || (c = i.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Z(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Qs(e) {
  return V(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let fs = !0;
function pl(e) {
  const t = xr(e), n = e.proxy, s = e.ctx;
  fs = !1, t.beforeCreate && eo(t.beforeCreate, e, "bc");
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
    beforeUpdate: y,
    updated: M,
    activated: P,
    deactivated: z,
    beforeDestroy: K,
    beforeUnmount: U,
    destroyed: W,
    unmounted: O,
    render: G,
    renderTracked: ce,
    renderTriggered: k,
    errorCaptured: D,
    serverPrefetch: $,
    // public API
    expose: j,
    inheritAttrs: X,
    // assets
    components: S,
    directives: Y,
    filters: C
  } = t;
  if (d && hl(d, s, null), i)
    for (const B in i) {
      const te = i[B];
      H(te) && (s[B] = te.bind(n));
    }
  if (o) {
    const B = o.call(n, n);
    ee(B) && (e.data = /* @__PURE__ */ Ln(B));
  }
  if (fs = !0, r)
    for (const B in r) {
      const te = r[B], gt = H(te) ? te.bind(n, n) : H(te.get) ? te.get.bind(n, n) : Ye, un = !H(te) && H(te.set) ? te.set.bind(n) : Ye, mt = nn({
        get: gt,
        set: un
      });
      Object.defineProperty(s, B, {
        enumerable: !0,
        configurable: !0,
        get: () => mt.value,
        set: (Ne) => mt.value = Ne
      });
    }
  if (l)
    for (const B in l)
      wr(l[B], s, n, B);
  if (c) {
    const B = H(c) ? c.call(n) : c;
    Reflect.ownKeys(B).forEach((te) => {
      Wi(te, B[te]);
    });
  }
  u && eo(u, e, "c");
  function E(B, te) {
    V(te) ? te.forEach((gt) => B(gt.bind(n))) : te && B(te.bind(n));
  }
  if (E(nl, p), E(ln, g), E(sl, y), E(ol, M), E(Qi, P), E(el, z), E(cl, D), E(ll, ce), E(il, k), E(yr, U), E(Hn, O), E(rl, $), V(j))
    if (j.length) {
      const B = e.exposed || (e.exposed = {});
      j.forEach((te) => {
        Object.defineProperty(B, te, {
          get: () => n[te],
          set: (gt) => n[te] = gt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  G && e.render === Ye && (e.render = G), X != null && (e.inheritAttrs = X), S && (e.components = S), Y && (e.directives = Y), $ && vr(e);
}
function hl(e, t, n = Ye) {
  V(e) && (e = ds(e));
  for (const s in e) {
    const o = e[s];
    let r;
    ee(o) ? "default" in o ? r = _n(
      o.from || s,
      o.default,
      !0
    ) : r = _n(o.from || s) : r = _n(o), /* @__PURE__ */ ue(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r;
  }
}
function eo(e, t, n) {
  Ve(
    V(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function wr(e, t, n, s) {
  let o = s.includes(".") ? ur(n, s) : () => n[s];
  if (ae(e)) {
    const r = t[e];
    H(r) && yn(o, r);
  } else if (H(e))
    yn(o, e.bind(n));
  else if (ee(e))
    if (V(e))
      e.forEach((r) => wr(r, t, n, s));
    else {
      const r = H(e.handler) ? e.handler.bind(n) : t[e.handler];
      H(r) && yn(o, r, e);
    }
}
function xr(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !o.length && !n && !s ? c = t : (c = {}, o.length && o.forEach(
    (d) => An(c, d, i, !0)
  ), An(c, t, i)), ee(t) && r.set(t, c), c;
}
function An(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && An(e, r, n, !0), o && o.forEach(
    (i) => An(e, i, n, !0)
  );
  for (const i in t)
    if (!(s && i === "expose")) {
      const l = gl[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const gl = {
  data: to,
  props: no,
  emits: no,
  // objects
  methods: jt,
  computed: jt,
  // lifecycle
  beforeCreate: ve,
  created: ve,
  beforeMount: ve,
  mounted: ve,
  beforeUpdate: ve,
  updated: ve,
  beforeDestroy: ve,
  beforeUnmount: ve,
  destroyed: ve,
  unmounted: ve,
  activated: ve,
  deactivated: ve,
  errorCaptured: ve,
  serverPrefetch: ve,
  // assets
  components: jt,
  directives: jt,
  // watch
  watch: vl,
  // provide / inject
  provide: to,
  inject: ml
};
function to(e, t) {
  return t ? e ? function() {
    return de(
      H(e) ? e.call(this, this) : e,
      H(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ml(e, t) {
  return jt(ds(e), ds(t));
}
function ds(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function jt(e, t) {
  return e ? de(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function no(e, t) {
  return e ? V(e) && V(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : de(
    /* @__PURE__ */ Object.create(null),
    Qs(e),
    Qs(t ?? {})
  ) : t;
}
function vl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = de(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ve(e[s], t[s]);
  return n;
}
function Cr() {
  return {
    app: null,
    config: {
      isNativeTag: Oo,
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
let _l = 0;
function yl(e, t) {
  return function(s, o = null) {
    H(s) || (s = de({}, s)), o != null && !ee(o) && (o = null);
    const r = Cr(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const d = r.app = {
      _uid: _l++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Jl,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...p) {
        return i.has(u) || (u && H(u.install) ? (i.add(u), u.install(d, ...p)) : H(u) && (i.add(u), u(d, ...p))), d;
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
          const y = d._ceVNode || Q(s, o);
          return y.appContext = r, g === !0 ? g = "svg" : g === !1 && (g = void 0), e(y, u, g), c = !0, d._container = u, u.__vue_app__ = d, jn(y.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        c && (Ve(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, p) {
        return r.provides[u] = p, d;
      },
      runWithContext(u) {
        const p = Ot;
        Ot = d;
        try {
          return u();
        } finally {
          Ot = p;
        }
      }
    };
    return d;
  };
}
let Ot = null;
const bl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ut(t)}Modifiers`] || e[`${ht(t)}Modifiers`];
function wl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || re;
  let o = n;
  const r = t.startsWith("update:"), i = r && bl(s, t.slice(7));
  i && (i.trim && (o = n.map((u) => ae(u) ? u.trim() : u)), i.number && (o = n.map(Ss)));
  let l, c = s[l = mn(t)] || // also try camelCase event handler (#2249)
  s[l = mn(ut(t))];
  !c && r && (c = s[l = mn(ht(t))]), c && Ve(
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
    e.emitted[l] = !0, Ve(
      d,
      e,
      6,
      o
    );
  }
}
const xl = /* @__PURE__ */ new WeakMap();
function Sr(e, t, n = !1) {
  const s = n ? xl : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, l = !1;
  if (!H(e)) {
    const c = (d) => {
      const u = Sr(d, t, !0);
      u && (l = !0, de(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (ee(e) && s.set(e, null), null) : (V(r) ? r.forEach((c) => i[c] = null) : de(i, r), ee(e) && s.set(e, i), i);
}
function Un(e, t) {
  return !e || !Pn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, ht(t)) || Z(e, t));
}
function so(e) {
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
    setupState: y,
    ctx: M,
    inheritAttrs: P
  } = e, z = Sn(e);
  let K, U;
  try {
    if (n.shapeFlag & 4) {
      const O = o || s, G = O;
      K = We(
        d.call(
          G,
          O,
          u,
          p,
          y,
          g,
          M
        )
      ), U = l;
    } else {
      const O = t;
      K = We(
        O.length > 1 ? O(
          p,
          { attrs: l, slots: i, emit: c }
        ) : O(
          p,
          null
        )
      ), U = t.props ? l : Cl(l);
    }
  } catch (O) {
    Xt.length = 0, Vn(O, e, 1), K = Q(ge);
  }
  let W = K;
  if (U && P !== !1) {
    const O = Object.keys(U), { shapeFlag: G } = W;
    O.length && G & 7 && (r && O.some(ws) && (U = Sl(
      U,
      r
    )), W = dt(W, U, !1, !0));
  }
  return n.dirs && (W = dt(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition && Zt(W, n.transition), K = W, Sn(z), K;
}
const Cl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Pn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Sl = (e, t) => {
  const n = {};
  for (const s in e)
    (!ws(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Tl(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: l, patchFlag: c } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? oo(s, i, d) : !!i;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        const g = u[p];
        if (Tr(i, s, g) && !Un(d, g))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? oo(s, i, d) : !0 : !!i;
  return !1;
}
function oo(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (Tr(t, e, r) && !Un(n, r))
      return !0;
  }
  return !1;
}
function Tr(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && ee(s) && ee(o) ? !Es(s, o) : s !== o;
}
function El({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Er = {}, Ar = () => Object.create(Er), Ir = (e) => Object.getPrototypeOf(e) === Er;
function Al(e, t, n, s = !1) {
  const o = {}, r = Ar();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), $r(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ Mi(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function Il(e, t, n, s) {
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
        if (Un(e.emitsOptions, g))
          continue;
        const y = t[g];
        if (c)
          if (Z(r, g))
            y !== r[g] && (r[g] = y, d = !0);
          else {
            const M = ut(g);
            o[M] = ps(
              c,
              l,
              M,
              y,
              e,
              !1
            );
          }
        else
          y !== r[g] && (r[g] = y, d = !0);
      }
    }
  } else {
    $r(e, t, o, r) && (d = !0);
    let u;
    for (const p in l)
      (!t || // for camelCase
      !Z(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = ht(p)) === p || !Z(t, u))) && (c ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[p] = ps(
        c,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete o[p]);
    if (r !== l)
      for (const p in r)
        (!t || !Z(t, p)) && (delete r[p], d = !0);
  }
  d && Ze(e.attrs, "set", "");
}
function $r(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let c in t) {
      if (Bt(c))
        continue;
      const d = t[c];
      let u;
      o && Z(o, u = ut(c)) ? !r || !r.includes(u) ? n[u] = d : (l || (l = {}))[u] = d : Un(e.emitsOptions, c) || (!(c in s) || d !== s[c]) && (s[c] = d, i = !0);
    }
  if (r) {
    const c = /* @__PURE__ */ J(n), d = l || re;
    for (let u = 0; u < r.length; u++) {
      const p = r[u];
      n[p] = ps(
        o,
        c,
        p,
        d[p],
        e,
        !Z(d, p)
      );
    }
  }
  return i;
}
function ps(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const l = Z(i, "default");
    if (l && s === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && H(c)) {
        const { propsDefaults: d } = o;
        if (n in d)
          s = d[n];
        else {
          const u = cn(o);
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
const $l = /* @__PURE__ */ new WeakMap();
function Fr(e, t, n = !1) {
  const s = n ? $l : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, l = [];
  let c = !1;
  if (!H(e)) {
    const u = (p) => {
      c = !0;
      const [g, y] = Fr(p, t, !0);
      de(i, g), y && l.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return ee(e) && s.set(e, $t), $t;
  if (V(r))
    for (let u = 0; u < r.length; u++) {
      const p = ut(r[u]);
      ro(p) && (i[p] = re);
    }
  else if (r)
    for (const u in r) {
      const p = ut(u);
      if (ro(p)) {
        const g = r[u], y = i[p] = V(g) || H(g) ? { type: g } : de({}, g), M = y.type;
        let P = !1, z = !0;
        if (V(M))
          for (let K = 0; K < M.length; ++K) {
            const U = M[K], W = H(U) && U.name;
            if (W === "Boolean") {
              P = !0;
              break;
            } else W === "String" && (z = !1);
          }
        else
          P = H(M) && M.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = P, y[
          1
          /* shouldCastTrue */
        ] = z, (P || Z(y, "default")) && l.push(p);
      }
    }
  const d = [i, l];
  return ee(e) && s.set(e, d), d;
}
function ro(e) {
  return e[0] !== "$" && !Bt(e);
}
const Ls = (e) => e === "_" || e === "_ctx" || e === "$stable", Vs = (e) => V(e) ? e.map(We) : [We(e)], Fl = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ee((...o) => Vs(t(...o)), n);
  return s._c = !1, s;
}, Pr = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Ls(o)) continue;
    const r = e[o];
    if (H(r))
      t[o] = Fl(o, r, s);
    else if (r != null) {
      const i = Vs(r);
      t[o] = () => i;
    }
  }
}, Mr = (e, t) => {
  const n = Vs(t);
  e.slots.default = () => n;
}, Or = (e, t, n) => {
  for (const s in t)
    (n || !Ls(s)) && (e[s] = t[s]);
}, Pl = (e, t, n) => {
  const s = e.slots = Ar();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Or(s, t, n), n && Ho(s, "_", o, !0)) : Pr(t, s);
  } else t && Mr(e, t);
}, Ml = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = re;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : Or(o, t, n) : (r = !t.$stable, Pr(t, o)), i = t;
  } else t && (Mr(e, t), i = { default: 1 });
  if (r)
    for (const l in o)
      !Ls(l) && i[l] == null && delete o[l];
}, Ce = Dl;
function Ol(e) {
  return Rl(e);
}
function Rl(e, t) {
  const n = On();
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
    setScopeId: y = Ye,
    insertStaticContent: M
  } = e, P = (a, f, h, b = null, m = null, v = null, A = void 0, T = null, x = !!f.dynamicChildren) => {
    if (a === f)
      return;
    a && !Ct(a, f) && (b = fn(a), Ne(a, m, v, !0), a = null), f.patchFlag === -2 && (x = !1, f.dynamicChildren = null);
    const { type: _, ref: L, shapeFlag: I } = f;
    switch (_) {
      case kn:
        z(a, f, h, b);
        break;
      case ge:
        K(a, f, h, b);
        break;
      case Zn:
        a == null && U(f, h, b, A);
        break;
      case ye:
        S(
          a,
          f,
          h,
          b,
          m,
          v,
          A,
          T,
          x
        );
        break;
      default:
        I & 1 ? G(
          a,
          f,
          h,
          b,
          m,
          v,
          A,
          T,
          x
        ) : I & 6 ? Y(
          a,
          f,
          h,
          b,
          m,
          v,
          A,
          T,
          x
        ) : (I & 64 || I & 128) && _.process(
          a,
          f,
          h,
          b,
          m,
          v,
          A,
          T,
          x,
          Vt
        );
    }
    L != null && m ? Yt(L, a && a.ref, v, f || a, !f) : L == null && a && a.ref != null && Yt(a.ref, null, v, a, !0);
  }, z = (a, f, h, b) => {
    if (a == null)
      s(
        f.el = l(f.children),
        h,
        b
      );
    else {
      const m = f.el = a.el;
      f.children !== a.children && d(m, f.children);
    }
  }, K = (a, f, h, b) => {
    a == null ? s(
      f.el = c(f.children || ""),
      h,
      b
    ) : f.el = a.el;
  }, U = (a, f, h, b) => {
    [a.el, a.anchor] = M(
      a.children,
      f,
      h,
      b,
      a.el,
      a.anchor
    );
  }, W = ({ el: a, anchor: f }, h, b) => {
    let m;
    for (; a && a !== f; )
      m = g(a), s(a, h, b), a = m;
    s(f, h, b);
  }, O = ({ el: a, anchor: f }) => {
    let h;
    for (; a && a !== f; )
      h = g(a), o(a), a = h;
    o(f);
  }, G = (a, f, h, b, m, v, A, T, x) => {
    if (f.type === "svg" ? A = "svg" : f.type === "math" && (A = "mathml"), a == null)
      ce(
        f,
        h,
        b,
        m,
        v,
        A,
        T,
        x
      );
    else {
      const _ = a.el && a.el._isVueCE ? a.el : null;
      try {
        _ && _._beginPatch(), $(
          a,
          f,
          m,
          v,
          A,
          T,
          x
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, ce = (a, f, h, b, m, v, A, T) => {
    let x, _;
    const { props: L, shapeFlag: I, transition: R, dirs: N } = a;
    if (x = a.el = i(
      a.type,
      v,
      L && L.is,
      L
    ), I & 8 ? u(x, a.children) : I & 16 && D(
      a.children,
      x,
      null,
      b,
      m,
      Jn(a, v),
      A,
      T
    ), N && vt(a, null, b, "created"), k(x, a, a.scopeId, A, b), L) {
      for (const ie in L)
        ie !== "value" && !Bt(ie) && r(x, ie, null, L[ie], v, b);
      "value" in L && r(x, "value", null, L.value, v), (_ = L.onVnodeBeforeMount) && je(_, b, a);
    }
    N && vt(a, null, b, "beforeMount");
    const q = Ll(m, R);
    q && R.beforeEnter(x), s(x, f, h), ((_ = L && L.onVnodeMounted) || q || N) && Ce(() => {
      _ && je(_, b, a), q && R.enter(x), N && vt(a, null, b, "mounted");
    }, m);
  }, k = (a, f, h, b, m) => {
    if (h && y(a, h), b)
      for (let v = 0; v < b.length; v++)
        y(a, b[v]);
    if (m) {
      let v = m.subTree;
      if (f === v || Dr(v.type) && (v.ssContent === f || v.ssFallback === f)) {
        const A = m.vnode;
        k(
          a,
          A,
          A.scopeId,
          A.slotScopeIds,
          m.parent
        );
      }
    }
  }, D = (a, f, h, b, m, v, A, T, x = 0) => {
    for (let _ = x; _ < a.length; _++) {
      const L = a[_] = T ? Je(a[_]) : We(a[_]);
      P(
        null,
        L,
        f,
        h,
        b,
        m,
        v,
        A,
        T
      );
    }
  }, $ = (a, f, h, b, m, v, A) => {
    const T = f.el = a.el;
    let { patchFlag: x, dynamicChildren: _, dirs: L } = f;
    x |= a.patchFlag & 16;
    const I = a.props || re, R = f.props || re;
    let N;
    if (h && _t(h, !1), (N = R.onVnodeBeforeUpdate) && je(N, h, f, a), L && vt(f, a, h, "beforeUpdate"), h && _t(h, !0), (I.innerHTML && R.innerHTML == null || I.textContent && R.textContent == null) && u(T, ""), _ ? j(
      a.dynamicChildren,
      _,
      T,
      h,
      b,
      Jn(f, m),
      v
    ) : A || te(
      a,
      f,
      T,
      null,
      h,
      b,
      Jn(f, m),
      v,
      !1
    ), x > 0) {
      if (x & 16)
        X(T, I, R, h, m);
      else if (x & 2 && I.class !== R.class && r(T, "class", null, R.class, m), x & 4 && r(T, "style", I.style, R.style, m), x & 8) {
        const q = f.dynamicProps;
        for (let ie = 0; ie < q.length; ie++) {
          const ne = q[ie], we = I[ne], xe = R[ne];
          (xe !== we || ne === "value") && r(T, ne, we, xe, m, h);
        }
      }
      x & 1 && a.children !== f.children && u(T, f.children);
    } else !A && _ == null && X(T, I, R, h, m);
    ((N = R.onVnodeUpdated) || L) && Ce(() => {
      N && je(N, h, f, a), L && vt(f, a, h, "updated");
    }, b);
  }, j = (a, f, h, b, m, v, A) => {
    for (let T = 0; T < f.length; T++) {
      const x = a[T], _ = f[T], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ct(x, _) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 198) ? p(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      P(
        x,
        _,
        L,
        null,
        b,
        m,
        v,
        A,
        !0
      );
    }
  }, X = (a, f, h, b, m) => {
    if (f !== h) {
      if (f !== re)
        for (const v in f)
          !Bt(v) && !(v in h) && r(
            a,
            v,
            f[v],
            null,
            m,
            b
          );
      for (const v in h) {
        if (Bt(v)) continue;
        const A = h[v], T = f[v];
        A !== T && v !== "value" && r(a, v, T, A, m, b);
      }
      "value" in h && r(a, "value", f.value, h.value, m);
    }
  }, S = (a, f, h, b, m, v, A, T, x) => {
    const _ = f.el = a ? a.el : l(""), L = f.anchor = a ? a.anchor : l("");
    let { patchFlag: I, dynamicChildren: R, slotScopeIds: N } = f;
    N && (T = T ? T.concat(N) : N), a == null ? (s(_, h, b), s(L, h, b), D(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      h,
      L,
      m,
      v,
      A,
      T,
      x
    )) : I > 0 && I & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === R.length ? (j(
      a.dynamicChildren,
      R,
      h,
      m,
      v,
      A,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || m && f === m.subTree) && Rr(
      a,
      f,
      !0
      /* shallow */
    )) : te(
      a,
      f,
      h,
      L,
      m,
      v,
      A,
      T,
      x
    );
  }, Y = (a, f, h, b, m, v, A, T, x) => {
    f.slotScopeIds = T, a == null ? f.shapeFlag & 512 ? m.ctx.activate(
      f,
      h,
      b,
      A,
      x
    ) : C(
      f,
      h,
      b,
      m,
      v,
      A,
      x
    ) : w(a, f, x);
  }, C = (a, f, h, b, m, v, A) => {
    const T = a.component = Kl(
      a,
      b,
      m
    );
    if (Dn(a) && (T.ctx.renderer = Vt), Wl(T, !1, A), T.asyncDep) {
      if (m && m.registerDep(T, E, A), !a.el) {
        const x = T.subTree = Q(ge);
        K(null, x, f, h), a.placeholder = x.el;
      }
    } else
      E(
        T,
        a,
        f,
        h,
        m,
        v,
        A
      );
  }, w = (a, f, h) => {
    const b = f.component = a.component;
    if (Tl(a, f, h))
      if (b.asyncDep && !b.asyncResolved) {
        B(b, f, h);
        return;
      } else
        b.next = f, b.update();
    else
      f.el = a.el, b.vnode = f;
  }, E = (a, f, h, b, m, v, A) => {
    const T = () => {
      if (a.isMounted) {
        let { next: I, bu: R, u: N, parent: q, vnode: ie } = a;
        {
          const Ue = Lr(a);
          if (Ue) {
            I && (I.el = ie.el, B(a, I, A)), Ue.asyncDep.then(() => {
              Ce(() => {
                a.isUnmounted || _();
              }, m);
            });
            return;
          }
        }
        let ne = I, we;
        _t(a, !1), I ? (I.el = ie.el, B(a, I, A)) : I = ie, R && vn(R), (we = I.props && I.props.onVnodeBeforeUpdate) && je(we, q, I, ie), _t(a, !0);
        const xe = so(a), He = a.subTree;
        a.subTree = xe, P(
          He,
          xe,
          // parent may have changed if it's in a teleport
          p(He.el),
          // anchor may have changed if it's in a fragment
          fn(He),
          a,
          m,
          v
        ), I.el = xe.el, ne === null && El(a, xe.el), N && Ce(N, m), (we = I.props && I.props.onVnodeUpdated) && Ce(
          () => je(we, q, I, ie),
          m
        );
      } else {
        let I;
        const { el: R, props: N } = f, { bm: q, m: ie, parent: ne, root: we, type: xe } = a, He = Mt(f);
        _t(a, !1), q && vn(q), !He && (I = N && N.onVnodeBeforeMount) && je(I, ne, f), _t(a, !0);
        {
          we.ce && we.ce._hasShadowRoot() && we.ce._injectChildStyle(xe);
          const Ue = a.subTree = so(a);
          P(
            null,
            Ue,
            h,
            b,
            a,
            m,
            v
          ), f.el = Ue.el;
        }
        if (ie && Ce(ie, m), !He && (I = N && N.onVnodeMounted)) {
          const Ue = f;
          Ce(
            () => je(I, ne, Ue),
            m
          );
        }
        (f.shapeFlag & 256 || ne && Mt(ne.vnode) && ne.vnode.shapeFlag & 256) && a.a && Ce(a.a, m), a.isMounted = !0, f = h = b = null;
      }
    };
    a.scope.on();
    const x = a.effect = new Bo(T);
    a.scope.off();
    const _ = a.update = x.run.bind(x), L = a.job = x.runIfDirty.bind(x);
    L.i = a, L.id = a.uid, x.scheduler = () => Rs(L), _t(a, !0), _();
  }, B = (a, f, h) => {
    f.component = a;
    const b = a.vnode.props;
    a.vnode = f, a.next = null, Il(a, f.props, b, h), Ml(a, f.children, h), tt(), Gs(a), nt();
  }, te = (a, f, h, b, m, v, A, T, x = !1) => {
    const _ = a && a.children, L = a ? a.shapeFlag : 0, I = f.children, { patchFlag: R, shapeFlag: N } = f;
    if (R > 0) {
      if (R & 128) {
        un(
          _,
          I,
          h,
          b,
          m,
          v,
          A,
          T,
          x
        );
        return;
      } else if (R & 256) {
        gt(
          _,
          I,
          h,
          b,
          m,
          v,
          A,
          T,
          x
        );
        return;
      }
    }
    N & 8 ? (L & 16 && Lt(_, m, v), I !== _ && u(h, I)) : L & 16 ? N & 16 ? un(
      _,
      I,
      h,
      b,
      m,
      v,
      A,
      T,
      x
    ) : Lt(_, m, v, !0) : (L & 8 && u(h, ""), N & 16 && D(
      I,
      h,
      b,
      m,
      v,
      A,
      T,
      x
    ));
  }, gt = (a, f, h, b, m, v, A, T, x) => {
    a = a || $t, f = f || $t;
    const _ = a.length, L = f.length, I = Math.min(_, L);
    let R;
    for (R = 0; R < I; R++) {
      const N = f[R] = x ? Je(f[R]) : We(f[R]);
      P(
        a[R],
        N,
        h,
        null,
        m,
        v,
        A,
        T,
        x
      );
    }
    _ > L ? Lt(
      a,
      m,
      v,
      !0,
      !1,
      I
    ) : D(
      f,
      h,
      b,
      m,
      v,
      A,
      T,
      x,
      I
    );
  }, un = (a, f, h, b, m, v, A, T, x) => {
    let _ = 0;
    const L = f.length;
    let I = a.length - 1, R = L - 1;
    for (; _ <= I && _ <= R; ) {
      const N = a[_], q = f[_] = x ? Je(f[_]) : We(f[_]);
      if (Ct(N, q))
        P(
          N,
          q,
          h,
          null,
          m,
          v,
          A,
          T,
          x
        );
      else
        break;
      _++;
    }
    for (; _ <= I && _ <= R; ) {
      const N = a[I], q = f[R] = x ? Je(f[R]) : We(f[R]);
      if (Ct(N, q))
        P(
          N,
          q,
          h,
          null,
          m,
          v,
          A,
          T,
          x
        );
      else
        break;
      I--, R--;
    }
    if (_ > I) {
      if (_ <= R) {
        const N = R + 1, q = N < L ? f[N].el : b;
        for (; _ <= R; )
          P(
            null,
            f[_] = x ? Je(f[_]) : We(f[_]),
            h,
            q,
            m,
            v,
            A,
            T,
            x
          ), _++;
      }
    } else if (_ > R)
      for (; _ <= I; )
        Ne(a[_], m, v, !0), _++;
    else {
      const N = _, q = _, ie = /* @__PURE__ */ new Map();
      for (_ = q; _ <= R; _++) {
        const Ae = f[_] = x ? Je(f[_]) : We(f[_]);
        Ae.key != null && ie.set(Ae.key, _);
      }
      let ne, we = 0;
      const xe = R - q + 1;
      let He = !1, Ue = 0;
      const Dt = new Array(xe);
      for (_ = 0; _ < xe; _++) Dt[_] = 0;
      for (_ = N; _ <= I; _++) {
        const Ae = a[_];
        if (we >= xe) {
          Ne(Ae, m, v, !0);
          continue;
        }
        let ke;
        if (Ae.key != null)
          ke = ie.get(Ae.key);
        else
          for (ne = q; ne <= R; ne++)
            if (Dt[ne - q] === 0 && Ct(Ae, f[ne])) {
              ke = ne;
              break;
            }
        ke === void 0 ? Ne(Ae, m, v, !0) : (Dt[ke - q] = _ + 1, ke >= Ue ? Ue = ke : He = !0, P(
          Ae,
          f[ke],
          h,
          null,
          m,
          v,
          A,
          T,
          x
        ), we++);
      }
      const js = He ? Vl(Dt) : $t;
      for (ne = js.length - 1, _ = xe - 1; _ >= 0; _--) {
        const Ae = q + _, ke = f[Ae], Bs = f[Ae + 1], Ks = Ae + 1 < L ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Bs.el || Vr(Bs)
        ) : b;
        Dt[_] === 0 ? P(
          null,
          ke,
          h,
          Ks,
          m,
          v,
          A,
          T,
          x
        ) : He && (ne < 0 || _ !== js[ne] ? mt(ke, h, Ks, 2) : ne--);
      }
    }
  }, mt = (a, f, h, b, m = null) => {
    const { el: v, type: A, transition: T, children: x, shapeFlag: _ } = a;
    if (_ & 6) {
      mt(a.component.subTree, f, h, b);
      return;
    }
    if (_ & 128) {
      a.suspense.move(f, h, b);
      return;
    }
    if (_ & 64) {
      A.move(a, f, h, Vt);
      return;
    }
    if (A === ye) {
      s(v, f, h);
      for (let I = 0; I < x.length; I++)
        mt(x[I], f, h, b);
      s(a.anchor, f, h);
      return;
    }
    if (A === Zn) {
      W(a, f, h);
      return;
    }
    if (b !== 2 && _ & 1 && T)
      if (b === 0)
        T.beforeEnter(v), s(v, f, h), Ce(() => T.enter(v), m);
      else {
        const { leave: I, delayLeave: R, afterLeave: N } = T, q = () => {
          a.ctx.isUnmounted ? o(v) : s(v, f, h);
        }, ie = () => {
          v._isLeaving && v[Ke](
            !0
            /* cancelled */
          ), I(v, () => {
            q(), N && N();
          });
        };
        R ? R(v, q, ie) : ie();
      }
    else
      s(v, f, h);
  }, Ne = (a, f, h, b = !1, m = !1) => {
    const {
      type: v,
      props: A,
      ref: T,
      children: x,
      dynamicChildren: _,
      shapeFlag: L,
      patchFlag: I,
      dirs: R,
      cacheIndex: N
    } = a;
    if (I === -2 && (m = !1), T != null && (tt(), Yt(T, null, h, a, !0), nt()), N != null && (f.renderCache[N] = void 0), L & 256) {
      f.ctx.deactivate(a);
      return;
    }
    const q = L & 1 && R, ie = !Mt(a);
    let ne;
    if (ie && (ne = A && A.onVnodeBeforeUnmount) && je(ne, f, a), L & 6)
      Qr(a.component, h, b);
    else {
      if (L & 128) {
        a.suspense.unmount(h, b);
        return;
      }
      q && vt(a, null, f, "beforeUnmount"), L & 64 ? a.type.remove(
        a,
        f,
        h,
        Vt,
        b
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== ye || I > 0 && I & 64) ? Lt(
        _,
        f,
        h,
        !1,
        !0
      ) : (v === ye && I & 384 || !m && L & 16) && Lt(x, f, h), b && Us(a);
    }
    (ie && (ne = A && A.onVnodeUnmounted) || q) && Ce(() => {
      ne && je(ne, f, a), q && vt(a, null, f, "unmounted");
    }, h);
  }, Us = (a) => {
    const { type: f, el: h, anchor: b, transition: m } = a;
    if (f === ye) {
      Zr(h, b);
      return;
    }
    if (f === Zn) {
      O(a);
      return;
    }
    const v = () => {
      o(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (a.shapeFlag & 1 && m && !m.persisted) {
      const { leave: A, delayLeave: T } = m, x = () => A(h, v);
      T ? T(a.el, v, x) : x();
    } else
      v();
  }, Zr = (a, f) => {
    let h;
    for (; a !== f; )
      h = g(a), o(a), a = h;
    o(f);
  }, Qr = (a, f, h) => {
    const { bum: b, scope: m, job: v, subTree: A, um: T, m: x, a: _ } = a;
    io(x), io(_), b && vn(b), m.stop(), v && (v.flags |= 8, Ne(A, a, f, h)), T && Ce(T, f), Ce(() => {
      a.isUnmounted = !0;
    }, f);
  }, Lt = (a, f, h, b = !1, m = !1, v = 0) => {
    for (let A = v; A < a.length; A++)
      Ne(a[A], f, h, b, m);
  }, fn = (a) => {
    if (a.shapeFlag & 6)
      return fn(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const f = g(a.anchor || a.el), h = f && f[Gi];
    return h ? g(h) : f;
  };
  let Kn = !1;
  const ks = (a, f, h) => {
    let b;
    a == null ? f._vnode && (Ne(f._vnode, null, null, !0), b = f._vnode.component) : P(
      f._vnode || null,
      a,
      f,
      null,
      null,
      null,
      h
    ), f._vnode = a, Kn || (Kn = !0, Gs(b), ir(), Kn = !1);
  }, Vt = {
    p: P,
    um: Ne,
    m: mt,
    r: Us,
    mt: C,
    mc: D,
    pc: te,
    pbc: j,
    n: fn,
    o: e
  };
  return {
    render: ks,
    hydrate: void 0,
    createApp: yl(ks)
  };
}
function Jn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function _t({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ll(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Rr(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (V(s) && V(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[r] = Je(o[r]), l.el = i.el), !n && l.patchFlag !== -2 && Rr(i, l)), l.type === kn && (l.patchFlag === -1 && (l = o[r] = Je(l)), l.el = i.el), l.type === ge && !l.el && (l.el = i.el);
    }
}
function Vl(e) {
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
function Lr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Lr(t);
}
function io(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Vr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Vr(t.subTree) : null;
}
const Dr = (e) => e.__isSuspense;
function Dl(e, t) {
  t && t.pendingBranch ? V(e) ? t.effects.push(...e) : t.effects.push(e) : Ki(e);
}
const ye = /* @__PURE__ */ Symbol.for("v-fgt"), kn = /* @__PURE__ */ Symbol.for("v-txt"), ge = /* @__PURE__ */ Symbol.for("v-cmt"), Zn = /* @__PURE__ */ Symbol.for("v-stc"), Xt = [];
let Ie = null;
function oe(e = !1) {
  Xt.push(Ie = e ? null : []);
}
function Nl() {
  Xt.pop(), Ie = Xt[Xt.length - 1] || null;
}
let Qt = 1;
function In(e, t = !1) {
  Qt += e, e < 0 && Ie && t && (Ie.hasOnce = !0);
}
function Nr(e) {
  return e.dynamicChildren = Qt > 0 ? Ie || $t : null, Nl(), Qt > 0 && Ie && Ie.push(e), e;
}
function fe(e, t, n, s, o, r) {
  return Nr(
    F(
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
function qe(e, t, n, s, o) {
  return Nr(
    Q(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function en(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ct(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Hr = ({ key: e }) => e ?? null, bn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ae(e) || /* @__PURE__ */ ue(e) || H(e) ? { i: me, r: e, k: t, f: !!n } : e : null);
function F(e, t = null, n = null, s = 0, o = null, r = e === ye ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Hr(t),
    ref: t && bn(t),
    scopeId: cr,
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
    ctx: me
  };
  return l ? (Ds(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= ae(n) ? 8 : 16), Qt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ie && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ie.push(c), c;
}
const Q = Hl;
function Hl(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === al) && (e = ge), en(e)) {
    const l = dt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ds(l, n), Qt > 0 && !r && Ie && (l.shapeFlag & 6 ? Ie[Ie.indexOf(e)] = l : Ie.push(l)), l.patchFlag = -2, l;
  }
  if (Gl(e) && (e = e.__vccOpts), t) {
    t = Ul(t);
    let { class: l, style: c } = t;
    l && !ae(l) && (t.class = ft(l)), ee(c) && (/* @__PURE__ */ Os(c) && !V(c) && (c = de({}, c)), t.style = Ts(c));
  }
  const i = ae(e) ? 1 : Dr(e) ? 128 : fr(e) ? 64 : ee(e) ? 4 : H(e) ? 2 : 0;
  return F(
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
function Ul(e) {
  return e ? /* @__PURE__ */ Os(e) || Ir(e) ? de({}, e) : e : null;
}
function dt(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: l, transition: c } = e, d = t ? Ur(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Hr(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? V(r) ? r.concat(bn(t)) : [r, bn(t)] : bn(t)
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
    patchFlag: t && e.type !== ye ? i === -1 ? 16 : i | 16 : i,
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
  return c && s && Zt(
    u,
    c.clone(u)
  ), u;
}
function kl(e = " ", t = 0) {
  return Q(kn, null, e, t);
}
function pt(e = "", t = !1) {
  return t ? (oe(), qe(ge, null, e)) : Q(ge, null, e);
}
function We(e) {
  return e == null || typeof e == "boolean" ? Q(ge) : V(e) ? Q(
    ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : en(e) ? Je(e) : Q(kn, null, String(e));
}
function Je(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : dt(e);
}
function Ds(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (V(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Ds(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Ir(t) ? t._ctx = me : o === 3 && me && (me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else H(t) ? (t = { default: t, _ctx: me }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [kl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ur(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = ft([t.class, s.class]));
      else if (o === "style")
        t.style = Ts([t.style, s.style]);
      else if (Pn(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(V(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function je(e, t, n, s = null) {
  Ve(e, t, 7, [
    n,
    s
  ]);
}
const jl = Cr();
let Bl = 0;
function Kl(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || jl, r = {
    uid: Bl++,
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
    scope: new di(
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
    propsOptions: Fr(s, o),
    emitsOptions: Sr(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: re,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: re,
    data: re,
    props: re,
    attrs: re,
    slots: re,
    refs: re,
    setupState: re,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = wl.bind(null, r), e.ce && e.ce(r), r;
}
let be = null;
const kr = () => be || me;
let $n, hs;
{
  const e = On(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  $n = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => be = n
  ), hs = t(
    "__VUE_SSR_SETTERS__",
    (n) => tn = n
  );
}
const cn = (e) => {
  const t = be;
  return $n(e), e.scope.on(), () => {
    e.scope.off(), $n(t);
  };
}, lo = () => {
  be && be.scope.off(), $n(null);
};
function jr(e) {
  return e.vnode.shapeFlag & 4;
}
let tn = !1;
function Wl(e, t = !1, n = !1) {
  t && hs(t);
  const { props: s, children: o } = e.vnode, r = jr(e);
  Al(e, s, r, t), Pl(e, o, n || t);
  const i = r ? Yl(e, t) : void 0;
  return t && hs(!1), i;
}
function Yl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, dl);
  const { setup: s } = n;
  if (s) {
    tt();
    const o = e.setupContext = s.length > 1 ? Xl(e) : null, r = cn(e), i = rn(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), l = Lo(i);
    if (nt(), r(), (l || e.sp) && !Mt(e) && vr(e), l) {
      if (i.then(lo, lo), t)
        return i.then((c) => {
          co(e, c);
        }).catch((c) => {
          Vn(c, e, 0);
        });
      e.asyncDep = i;
    } else
      co(e, i);
  } else
    Br(e);
}
function co(e, t, n) {
  H(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) && (e.setupState = sr(t)), Br(e);
}
function Br(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ye);
  {
    const o = cn(e);
    tt();
    try {
      pl(e);
    } finally {
      nt(), o();
    }
  }
}
const ql = {
  get(e, t) {
    return he(e, "get", ""), e[t];
  }
};
function Xl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ql),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function jn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(sr(Oi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in qt)
        return qt[n](e);
    },
    has(t, n) {
      return n in t || n in qt;
    }
  })) : e.proxy;
}
function Gl(e) {
  return H(e) && "__vccOpts" in e;
}
const nn = (e, t) => /* @__PURE__ */ Ni(e, t, tn);
function zl(e, t, n) {
  try {
    In(-1);
    const s = arguments.length;
    return s === 2 ? ee(t) && !V(t) ? en(t) ? Q(e, null, [t]) : Q(e, t) : Q(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && en(n) && (n = [n]), Q(e, t, n));
  } finally {
    In(1);
  }
}
const Jl = "3.5.28";
let gs;
const ao = typeof window < "u" && window.trustedTypes;
if (ao)
  try {
    gs = /* @__PURE__ */ ao.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Kr = gs ? (e) => gs.createHTML(e) : (e) => e, Zl = "http://www.w3.org/2000/svg", Ql = "http://www.w3.org/1998/Math/MathML", ze = typeof document < "u" ? document : null, uo = ze && /* @__PURE__ */ ze.createElement("template"), ec = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? ze.createElementNS(Zl, e) : t === "mathml" ? ze.createElementNS(Ql, e) : n ? ze.createElement(e, { is: n }) : ze.createElement(e);
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
      uo.innerHTML = Kr(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = uo.content;
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
}, rt = "transition", Ut = "animation", sn = /* @__PURE__ */ Symbol("_vtc"), Wr = {
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
}, tc = /* @__PURE__ */ de(
  {},
  dr,
  Wr
), nc = (e) => (e.displayName = "Transition", e.props = tc, e), Yr = /* @__PURE__ */ nc(
  (e, { slots: t }) => zl(Zi, sc(e), t)
), yt = (e, t = []) => {
  V(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, fo = (e) => e ? V(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function sc(e) {
  const t = {};
  for (const S in e)
    S in Wr || (t[S] = e[S]);
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
    leaveToClass: y = `${n}-leave-to`
  } = e, M = oc(o), P = M && M[0], z = M && M[1], {
    onBeforeEnter: K,
    onEnter: U,
    onEnterCancelled: W,
    onLeave: O,
    onLeaveCancelled: G,
    onBeforeAppear: ce = K,
    onAppear: k = U,
    onAppearCancelled: D = W
  } = t, $ = (S, Y, C, w) => {
    S._enterCancelled = w, bt(S, Y ? u : l), bt(S, Y ? d : i), C && C();
  }, j = (S, Y) => {
    S._isLeaving = !1, bt(S, p), bt(S, y), bt(S, g), Y && Y();
  }, X = (S) => (Y, C) => {
    const w = S ? k : U, E = () => $(Y, S, C);
    yt(w, [Y, E]), po(() => {
      bt(Y, S ? c : r), Ge(Y, S ? u : l), fo(w) || ho(Y, s, P, E);
    });
  };
  return de(t, {
    onBeforeEnter(S) {
      yt(K, [S]), Ge(S, r), Ge(S, i);
    },
    onBeforeAppear(S) {
      yt(ce, [S]), Ge(S, c), Ge(S, d);
    },
    onEnter: X(!1),
    onAppear: X(!0),
    onLeave(S, Y) {
      S._isLeaving = !0;
      const C = () => j(S, Y);
      Ge(S, p), S._enterCancelled ? (Ge(S, g), vo(S)) : (vo(S), Ge(S, g)), po(() => {
        S._isLeaving && (bt(S, p), Ge(S, y), fo(O) || ho(S, s, z, C));
      }), yt(O, [S, C]);
    },
    onEnterCancelled(S) {
      $(S, !1, void 0, !0), yt(W, [S]);
    },
    onAppearCancelled(S) {
      $(S, !0, void 0, !0), yt(D, [S]);
    },
    onLeaveCancelled(S) {
      j(S), yt(G, [S]);
    }
  });
}
function oc(e) {
  if (e == null)
    return null;
  if (ee(e))
    return [Qn(e.enter), Qn(e.leave)];
  {
    const t = Qn(e);
    return [t, t];
  }
}
function Qn(e) {
  return oi(e);
}
function Ge(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[sn] || (e[sn] = /* @__PURE__ */ new Set())).add(t);
}
function bt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[sn];
  n && (n.delete(t), n.size || (e[sn] = void 0));
}
function po(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let rc = 0;
function ho(e, t, n, s) {
  const o = e._endId = ++rc, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: l, propCount: c } = ic(e, t);
  if (!i)
    return s();
  const d = i + "end";
  let u = 0;
  const p = () => {
    e.removeEventListener(d, g), r();
  }, g = (y) => {
    y.target === e && ++u >= c && p();
  };
  setTimeout(() => {
    u < c && p();
  }, l + 1), e.addEventListener(d, g);
}
function ic(e, t) {
  const n = window.getComputedStyle(e), s = (M) => (n[M] || "").split(", "), o = s(`${rt}Delay`), r = s(`${rt}Duration`), i = go(o, r), l = s(`${Ut}Delay`), c = s(`${Ut}Duration`), d = go(l, c);
  let u = null, p = 0, g = 0;
  t === rt ? i > 0 && (u = rt, p = i, g = r.length) : t === Ut ? d > 0 && (u = Ut, p = d, g = c.length) : (p = Math.max(i, d), u = p > 0 ? i > d ? rt : Ut : null, g = u ? u === rt ? r.length : c.length : 0);
  const y = u === rt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${rt}Property`).toString()
  );
  return {
    type: u,
    timeout: p,
    propCount: g,
    hasTransform: y
  };
}
function go(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => mo(n) + mo(e[s])));
}
function mo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function vo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function lc(e, t, n) {
  const s = e[sn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Fn = /* @__PURE__ */ Symbol("_vod"), qr = /* @__PURE__ */ Symbol("_vsh"), cc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Fn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : kt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), kt(e, !0), s.enter(e)) : s.leave(e, () => {
      kt(e, !1);
    }) : kt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    kt(e, t);
  }
};
function kt(e, t) {
  e.style.display = t ? e[Fn] : "none", e[qr] = !t;
}
const ac = /* @__PURE__ */ Symbol(""), uc = /(?:^|;)\s*display\s*:/;
function fc(e, t, n) {
  const s = e.style, o = ae(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (ae(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && wn(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && wn(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), wn(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[ac];
      i && (n += ";" + i), s.cssText = n, r = uc.test(n);
    }
  } else t && e.removeAttribute("style");
  Fn in e && (e[Fn] = r ? s.display : "", e[qr] && (s.display = "none"));
}
const _o = /\s*!important$/;
function wn(e, t, n) {
  if (V(n))
    n.forEach((s) => wn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = dc(e, t);
    _o.test(n) ? e.setProperty(
      ht(s),
      n.replace(_o, ""),
      "important"
    ) : e[s] = n;
  }
}
const yo = ["Webkit", "Moz", "ms"], es = {};
function dc(e, t) {
  const n = es[t];
  if (n)
    return n;
  let s = ut(t);
  if (s !== "filter" && s in e)
    return es[t] = s;
  s = No(s);
  for (let o = 0; o < yo.length; o++) {
    const r = yo[o] + s;
    if (r in e)
      return es[t] = r;
  }
  return t;
}
const bo = "http://www.w3.org/1999/xlink";
function wo(e, t, n, s, o, r = ui(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(bo, t.slice(6, t.length)) : e.setAttributeNS(bo, t, n) : n == null || r && !Uo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Re(n) ? String(n) : n
  );
}
function xo(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Kr(n) : n);
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
    l === "boolean" ? n = Uo(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(o || t);
}
function It(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function pc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Co = /* @__PURE__ */ Symbol("_vei");
function hc(e, t, n, s, o = null) {
  const r = e[Co] || (e[Co] = {}), i = r[t];
  if (s && i)
    i.value = s;
  else {
    const [l, c] = gc(t);
    if (s) {
      const d = r[t] = _c(
        s,
        o
      );
      It(e, l, d, c);
    } else i && (pc(e, l, i, c), r[t] = void 0);
  }
}
const So = /(?:Once|Passive|Capture)$/;
function gc(e) {
  let t;
  if (So.test(e)) {
    t = {};
    let s;
    for (; s = e.match(So); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ht(e.slice(2)), t];
}
let ts = 0;
const mc = /* @__PURE__ */ Promise.resolve(), vc = () => ts || (mc.then(() => ts = 0), ts = Date.now());
function _c(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Ve(
      yc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = vc(), n;
}
function yc(e, t) {
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
const To = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, bc = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? lc(e, s, i) : t === "style" ? fc(e, n, s) : Pn(t) ? ws(t) || hc(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : wc(e, t, s, i)) ? (xo(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && wo(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ae(s)) ? xo(e, ut(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), wo(e, t, s, i));
};
function wc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && To(t) && H(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return To(t) && ae(n) ? !1 : t in e;
}
const Eo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return V(t) ? (n) => vn(t, n) : t;
};
function xc(e) {
  e.target.composing = !0;
}
function Ao(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ns = /* @__PURE__ */ Symbol("_assign");
function Io(e, t, n) {
  return t && (e = e.trim()), n && (e = Ss(e)), e;
}
const ct = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[ns] = Eo(o);
    const r = s || o.props && o.props.type === "number";
    It(e, t ? "change" : "input", (i) => {
      i.target.composing || e[ns](Io(e.value, n, r));
    }), (n || r) && It(e, "change", () => {
      e.value = Io(e.value, n, r);
    }), t || (It(e, "compositionstart", xc), It(e, "compositionend", Ao), It(e, "change", Ao));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } }, i) {
    if (e[ns] = Eo(i), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? Ss(e.value) : e.value, c = t ?? "";
    l !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === c) || (e.value = c));
  }
}, Cc = ["ctrl", "shift", "alt", "meta"], Sc = {
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
  exact: (e, t) => Cc.some((n) => e[`${n}Key`] && !t.includes(n))
}, $o = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const l = Sc[t[i]];
      if (l && l(o, t)) return;
    }
    return e(o, ...r);
  }));
}, Tc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ms = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = ((o) => {
    if (!("key" in o))
      return;
    const r = ht(o.key);
    if (t.some(
      (i) => i === r || Tc[i] === r
    ))
      return e(o);
  }));
}, Ec = /* @__PURE__ */ de({ patchProp: bc }, ec);
let Fo;
function Ac() {
  return Fo || (Fo = Ol(Ec));
}
const Ic = ((...e) => {
  const t = Ac().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = Fc(s);
    if (!o) return;
    const r = t._component;
    !H(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, $c(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
});
function $c(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Fc(e) {
  return ae(e) ? document.querySelector(e) : e;
}
const vs = /* @__PURE__ */ se(!1), Pc = /* @__PURE__ */ se(!1), _s = /* @__PURE__ */ se(!0), Xr = /* @__PURE__ */ se(0.7), Gr = /* @__PURE__ */ se(1), zr = /* @__PURE__ */ se(0);
function Mc() {
  vs.value = !vs.value;
}
function Oc() {
  _s.value = !_s.value;
}
function Rc() {
  Xr.value = 0.7, Gr.value = 1, zr.value = 0;
}
function Ns() {
  return {
    opacity: Xr,
    scale: Gr,
    rotation: zr,
    isAttached: Pc,
    showControls: vs,
    overlayVisible: _s,
    resetControls: Rc,
    toggleShowControls: Mc,
    toggleOverlayVisible: Oc
  };
}
const Lc = { class: "ito-settings-menu" }, Vc = {
  key: 0,
  class: "ito-settings-panel"
}, Dc = { class: "ito-settings-header" }, Nc = { class: "ito-settings-tabs" }, Hc = {
  key: 0,
  class: "ito-settings-content"
}, Uc = { class: "ito-color-field" }, kc = { class: "ito-color-input-wrapper" }, jc = ["onKeydown"], Bc = { class: "ito-color-field" }, Kc = { class: "ito-color-input-wrapper" }, Wc = ["onKeydown"], Yc = {
  key: 1,
  class: "ito-settings-content"
}, qc = { class: "ito-theme-manager" }, Xc = { class: "ito-theme-row" }, Gc = ["disabled"], zc = { class: "ito-theme-list" }, Jc = {
  key: 0,
  class: "ito-theme-empty"
}, Zc = { class: "ito-theme-name" }, Qc = { class: "ito-theme-actions" }, ea = ["onClick"], ta = ["onClick"], Po = "ito-theme-presets", wt = "ito-last-active-preset", na = /* @__PURE__ */ De({
  __name: "SettingsMenu",
  setup(e) {
    const t = /* @__PURE__ */ se(!1), n = /* @__PURE__ */ se("settings"), s = /* @__PURE__ */ se("#ffffff"), o = /* @__PURE__ */ se("#06b6d4"), r = /* @__PURE__ */ se("#ffffff"), i = /* @__PURE__ */ se("#06b6d4"), l = /* @__PURE__ */ se(""), c = /* @__PURE__ */ se([]), d = (C) => {
      if (!C) return "#333333";
      const w = parseInt(C.slice(1, 3), 16), E = parseInt(C.slice(3, 5), 16), B = parseInt(C.slice(5, 7), 16);
      return (w * 299 + E * 587 + B * 114) / 1e3 >= 150 ? "#333333" : "#ffffff";
    }, u = (C, w) => {
      document.documentElement.style.setProperty(C, w);
    }, p = (C) => {
      const w = C.trim().toUpperCase();
      if (!w) return null;
      let E = w.startsWith("#") ? w : `#${w}`;
      return /^#[0-9A-F]{3}$/.test(E) && (E = `#${E[1]}${E[1]}${E[2]}${E[2]}${E[3]}${E[3]}`), /^#[0-9A-F]{6}$/.test(E) ? E : null;
    }, g = (C) => {
      const w = C.trim().toUpperCase();
      return w ? w.startsWith("#") ? w : `#${w}` : "";
    }, y = () => {
      u("--accent-text", d(o.value));
    }, M = () => {
      u("--main-bg", s.value);
      const C = d(s.value);
      u("--text-color", C), r.value = s.value.toUpperCase();
    }, P = () => {
      u("--accent-color", o.value), y(), i.value = o.value.toUpperCase();
    }, z = () => {
      const C = p(r.value);
      if (!C) {
        r.value = s.value.toUpperCase();
        return;
      }
      s.value = C, M();
    }, K = () => {
      const C = p(i.value);
      if (!C) {
        i.value = o.value.toUpperCase();
        return;
      }
      o.value = C, P();
    }, U = () => {
      r.value = g(r.value).slice(0, 7);
    }, W = () => {
      i.value = g(i.value).slice(0, 7);
    }, O = (C, w) => {
      s.value = C, o.value = w, u("--main-bg", C), u("--accent-color", w), u("--text-color", d(C)), y(), r.value = C.toUpperCase(), i.value = w.toUpperCase();
    }, G = () => {
      try {
        localStorage.setItem(Po, JSON.stringify(c.value));
      } catch {
      }
    }, ce = () => {
      const C = typeof window < "u" ? window.chrome?.storage?.local : void 0;
      if (C)
        return new Promise((w) => {
          try {
            C.get([wt], (E) => {
              if (window.chrome?.runtime?.lastError) {
                w(null);
                return;
              }
              const te = E?.[wt];
              w(typeof te == "string" ? te : null);
            });
          } catch {
            w(null);
          }
        });
      try {
        const w = localStorage.getItem(wt);
        return Promise.resolve(w || null);
      } catch {
        return Promise.resolve(null);
      }
    }, k = async (C) => {
      const w = typeof window < "u" ? window.chrome?.storage?.local : void 0;
      if (w) {
        try {
          C ? w.set({ [wt]: C }) : w.remove(wt);
        } catch {
        }
        return;
      }
      try {
        C ? localStorage.setItem(wt, C) : localStorage.removeItem(wt);
      } catch {
      }
    }, D = () => {
      try {
        const C = localStorage.getItem(Po);
        if (!C) return;
        const w = JSON.parse(C);
        Array.isArray(w) && (c.value = w.filter((E) => E?.name && E?.mainBg && E?.accentColor));
      } catch {
      }
    }, $ = async () => {
      const C = await ce();
      if (!C) return;
      const w = c.value.find(
        (E) => E.name.toLowerCase() === C.toLowerCase()
      );
      if (w) {
        O(w.mainBg, w.accentColor);
        return;
      }
      Y();
    }, j = () => {
      const C = l.value.trim();
      if (!C) return;
      const w = c.value.findIndex((B) => B.name.toLowerCase() === C.toLowerCase()), E = {
        name: C,
        mainBg: s.value,
        accentColor: o.value
      };
      w >= 0 ? c.value.splice(w, 1, E) : c.value.unshift(E), l.value = "", G(), k(C);
    }, X = (C) => {
      O(C.mainBg, C.accentColor), k(C.name);
    }, S = async (C) => {
      c.value = c.value.filter((E) => E.name !== C), G();
      const w = await ce();
      w && w.toLowerCase() === C.toLowerCase() && await k(null);
    }, Y = () => {
      s.value = "#ffffff", o.value = "#06b6d4", u("--main-bg", "#ffffff"), u("--accent-color", "#06b6d4"), u("--text-color", "#333333"), y(), r.value = "#FFFFFF", i.value = "#06B6D4";
    };
    return ln(() => {
      const C = getComputedStyle(document.documentElement).getPropertyValue("--main-bg").trim(), w = getComputedStyle(document.documentElement).getPropertyValue("--accent-color").trim();
      C && (s.value = C), w && (o.value = w), C && u("--text-color", d(C)), (w || o.value) && y(), r.value = (C || s.value).toUpperCase(), i.value = (w || o.value).toUpperCase(), D(), $();
    }), (C, w) => (oe(), fe("div", Lc, [
      F("button", {
        class: "ito-settings-button",
        onClick: w[0] || (w[0] = (E) => t.value = !t.value),
        title: "Settings"
      }, [...w[9] || (w[9] = [
        F("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          class: "ito-settings-icon"
        }, [
          F("path", {
            d: "M8 2H12V4H14V5L16 6V8H18V12H16V14L14 15V16H12V18H8V16H6V15L4 14V12H2V8H4V6L6 5V4H8V2ZM10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7Z",
            fill: "currentColor"
          })
        ], -1)
      ])]),
      Q(Yr, { name: "ito-settings-transition" }, {
        default: Ee(() => [
          t.value ? (oe(), fe("div", Vc, [
            F("div", Dc, [
              F("div", Nc, [
                F("button", {
                  class: ft(["ito-settings-tab", { "ito-settings-tab--active": n.value === "settings" }]),
                  onClick: w[1] || (w[1] = (E) => n.value = "settings"),
                  type: "button"
                }, " Settings ", 2),
                F("button", {
                  class: ft(["ito-settings-tab", { "ito-settings-tab--active": n.value === "themes" }]),
                  onClick: w[2] || (w[2] = (E) => n.value = "themes"),
                  type: "button"
                }, " Themes ", 2)
              ]),
              F("button", {
                class: "ito-settings-close",
                onClick: w[3] || (w[3] = (E) => t.value = !1)
              }, "×")
            ]),
            n.value === "settings" ? (oe(), fe("div", Hc, [
              F("div", Uc, [
                w[10] || (w[10] = F("label", { for: "main-bg-color" }, "Main Background", -1)),
                F("div", kc, [
                  et(F("input", {
                    id: "main-bg-color",
                    type: "color",
                    "onUpdate:modelValue": w[4] || (w[4] = (E) => s.value = E),
                    onInput: M,
                    class: "ito-color-input"
                  }, null, 544), [
                    [ct, s.value]
                  ]),
                  et(F("input", {
                    id: "main-bg-hex",
                    type: "text",
                    "onUpdate:modelValue": w[5] || (w[5] = (E) => r.value = E),
                    onInput: U,
                    onBlur: z,
                    onKeydown: ms($o(z, ["prevent"]), ["enter"]),
                    class: "ito-color-text-input",
                    placeholder: "#FFFFFF",
                    maxlength: "7",
                    inputmode: "text",
                    autocapitalize: "characters"
                  }, null, 40, jc), [
                    [ct, r.value]
                  ])
                ])
              ]),
              F("div", Bc, [
                w[11] || (w[11] = F("label", { for: "accent-color" }, "Accent Color", -1)),
                F("div", Kc, [
                  et(F("input", {
                    id: "accent-color",
                    type: "color",
                    "onUpdate:modelValue": w[6] || (w[6] = (E) => o.value = E),
                    onInput: P,
                    class: "ito-color-input"
                  }, null, 544), [
                    [ct, o.value]
                  ]),
                  et(F("input", {
                    id: "accent-hex",
                    type: "text",
                    "onUpdate:modelValue": w[7] || (w[7] = (E) => i.value = E),
                    onInput: W,
                    onBlur: K,
                    onKeydown: ms($o(K, ["prevent"]), ["enter"]),
                    class: "ito-color-text-input",
                    placeholder: "#00BCD4",
                    maxlength: "7",
                    inputmode: "text",
                    autocapitalize: "characters"
                  }, null, 40, Wc), [
                    [ct, i.value]
                  ])
                ])
              ]),
              F("button", {
                class: "ito-settings-reset",
                onClick: Y
              }, "Reset to Default")
            ])) : (oe(), fe("div", Yc, [
              F("div", qc, [
                w[12] || (w[12] = F("label", { for: "ito-theme-name" }, "New Preset Name", -1)),
                F("div", Xc, [
                  et(F("input", {
                    id: "ito-theme-name",
                    type: "text",
                    "onUpdate:modelValue": w[8] || (w[8] = (E) => l.value = E),
                    class: "ito-theme-input",
                    placeholder: "My theme"
                  }, null, 512), [
                    [ct, l.value]
                  ]),
                  F("button", {
                    class: "ito-theme-save",
                    onClick: j,
                    disabled: !l.value.trim(),
                    type: "button"
                  }, " Save Current ", 8, Gc)
                ]),
                F("div", zc, [
                  c.value.length === 0 ? (oe(), fe("div", Jc, " No presets yet. ")) : pt("", !0),
                  (oe(!0), fe(ye, null, ul(c.value, (E) => (oe(), fe("div", {
                    key: E.name,
                    class: "ito-theme-item"
                  }, [
                    F("span", Zc, Me(E.name), 1),
                    F("div", Qc, [
                      F("button", {
                        class: "ito-theme-load",
                        onClick: (B) => X(E),
                        type: "button"
                      }, "Load", 8, ea),
                      F("button", {
                        class: "ito-theme-delete",
                        onClick: (B) => S(E.name),
                        type: "button"
                      }, " Delete ", 8, ta)
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
}), Pe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, sa = /* @__PURE__ */ Pe(na, [["__scopeId", "data-v-0976d8a4"]]), oa = { class: "ito-controls-menu" }, ra = { class: "ito-controls-menu-content" }, ia = { class: "ito-controls-menu-header" }, la = ["title"], ca = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "ito-visibility-icon"
}, aa = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "ito-visibility-icon"
}, ua = { class: "ito-controls-menu-content-footer" }, fa = /* @__PURE__ */ De({
  __name: "ControlsMenu",
  setup(e) {
    const { showControls: t, toggleShowControls: n, overlayVisible: s, toggleOverlayVisible: o } = Ns();
    function r(l) {
      if (!(l instanceof HTMLElement)) return !1;
      const c = l.tagName.toLowerCase();
      return c === "input" || c === "textarea" || c === "select" ? !0 : l.isContentEditable;
    }
    function i(l) {
      !l.altKey || l.key.toLowerCase() !== "v" || l.isComposing || r(l.target) || l.repeat || l.ctrlKey || l.metaKey || l.shiftKey || (l.preventDefault(), o());
    }
    return ln(() => {
      window.addEventListener("keydown", i);
    }), Hn(() => {
      window.removeEventListener("keydown", i);
    }), (l, c) => (oe(), fe("div", oa, [
      Q(Yr, {
        name: "ito-menu-transition",
        mode: "out-in"
      }, {
        default: Ee(() => [
          et(F("div", ra, [
            F("div", ia, [
              F("button", {
                class: "ito-visibility-button",
                onClick: c[0] || (c[0] = //@ts-ignore
                (...d) => Te(o) && Te(o)(...d)),
                title: Te(s) ? "Hide overlay" : "Show overlay"
              }, [
                Te(s) ? (oe(), fe("svg", ca, [...c[2] || (c[2] = [
                  F("path", {
                    d: "M1.5 12C3.9 7.2 7.5 5 12 5C16.5 5 20.1 7.2 22.5 12C20.1 16.8 16.5 19 12 19C7.5 19 3.9 16.8 1.5 12Z",
                    stroke: "currentColor",
                    "stroke-width": "1.6",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, null, -1),
                  F("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3.2",
                    stroke: "currentColor",
                    "stroke-width": "1.6"
                  }, null, -1)
                ])])) : (oe(), fe("svg", aa, [...c[3] || (c[3] = [
                  F("path", {
                    d: "M3 12C5.4 7.2 9 5 12 5C15 5 18.6 7.2 21 12",
                    stroke: "currentColor",
                    "stroke-width": "1.6",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, null, -1),
                  F("path", {
                    d: "M3 12C5.4 16.8 9 19 12 19C15 19 18.6 16.8 21 12",
                    stroke: "currentColor",
                    "stroke-width": "1.6",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, null, -1),
                  F("path", {
                    d: "M4 4L20 20",
                    stroke: "currentColor",
                    "stroke-width": "1.6",
                    "stroke-linecap": "round"
                  }, null, -1)
                ])]))
              ], 8, la),
              Q(sa)
            ]),
            En(l.$slots, "default", {}, void 0, !0),
            F("div", ua, [
              En(l.$slots, "footer", {}, void 0, !0)
            ])
          ], 512), [
            [cc, Te(t)]
          ])
        ]),
        _: 3
      }),
      F("div", {
        class: ft(["ito-controls-menu-activator", { "ito-controls-menu-activator--active": Te(t) }]),
        tabindex: "0",
        onClick: c[1] || (c[1] = //@ts-ignore
        (...d) => Te(n) && Te(n)(...d))
      }, null, 2)
    ]));
  }
}), da = /* @__PURE__ */ Pe(fa, [["__scopeId", "data-v-21aa0bde"]]), pa = {}, ha = { class: "ito-control-field-group" };
function ga(e, t) {
  return oe(), fe("div", ha, [
    En(e.$slots, "default", {}, void 0)
  ]);
}
const gn = /* @__PURE__ */ Pe(pa, [["render", ga], ["__scopeId", "data-v-305a1241"]]), Hs = /* @__PURE__ */ se(!1), pe = /* @__PURE__ */ Ln({
  initialX: 0,
  initialY: 0,
  currentX: 0,
  currentY: 0,
  offsetX: 0,
  offsetY: 0
});
function ma(e) {
  pe.initialX = e.clientX - pe.offsetX, pe.initialY = e.clientY - pe.offsetY, Hs.value = !0;
}
function va(e) {
  Hs.value && (pe.currentX = e.clientX - pe.initialX, pe.currentY = e.clientY - pe.initialY, pe.offsetX = pe.currentX, pe.offsetY = pe.currentY);
}
function _a(e) {
  pe.initialX = e.clientX, pe.initialY = e.clientY, Hs.value = !1;
}
function ya() {
  Object.assign(pe, {
    initialX: 0,
    initialY: 0,
    currentX: 0,
    currentY: 0,
    offsetX: 0,
    offsetY: 0
  });
}
function Jr() {
  return {
    elementDrag: pe,
    resetElementDrag: ya,
    dragEvents: {
      mousedown: ma,
      mousemove: va,
      mouseup: _a
    }
  };
}
const ba = { class: "ito-tracer-image-wrapper" }, wa = ["src"], xa = /* @__PURE__ */ De({
  __name: "TracerImage",
  props: {
    src: {}
  },
  setup(e) {
    const { showControls: t, scale: n, opacity: s, rotation: o, isAttached: r, overlayVisible: i } = Ns(), { elementDrag: l, dragEvents: c } = Jr(), d = e, u = nn(() => d.src && t.value && !r.value ? {
      wheel: p,
      ...c
    } : {});
    function p(y) {
      if (y.ctrlKey) {
        const M = 0.01 * y.deltaY;
        let P = n.value;
        P -= M, n.value = parseFloat(Math.min(Math.max(P, 0.01), 8).toFixed(2));
      }
      if (y.shiftKey) {
        const M = y.deltaY > 0 ? 3 : -3;
        let P = o.value + M;
        o.value = Math.min(Math.max(P, -360), 360);
      }
      (y.shiftKey || y.ctrlKey) && y.preventDefault();
    }
    const g = nn(() => {
      const y = i.value;
      return {
        opacity: y ? s.value : 0,
        cursor: y && t.value && !r.value ? "grab" : void 0,
        pointerEvents: y && t.value && !r.value ? "auto" : "none",
        transform: `
			translate3d(${l.currentX}px, ${l.currentY}px, 0) 
			scale(${n.value}, ${n.value}) 
			rotate(${o.value}deg)
		`
      };
    });
    return (y, M) => (oe(), fe("div", ba, [
      F("img", Ur({
        src: d.src,
        style: g.value,
        draggable: "false",
        class: "ito-tracer-image"
      }, fl(u.value)), null, 16, wa)
    ]));
  }
}), Ca = /* @__PURE__ */ Pe(xa, [["__scopeId", "data-v-00224fb1"]]);
function ys(e) {
  return new Promise((t, n) => {
    const s = new Image();
    s.onload = () => {
      t(s.src);
    }, s.onerror = () => {
      n();
    }, s.src = e;
  });
}
function Sa(e) {
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
const Ta = { class: "ito-control-field" }, Ea = {
  key: 0,
  class: "ito-control-field-label"
}, Aa = {
  key: 1,
  class: "ito-control-field-error"
}, Ia = /* @__PURE__ */ De({
  __name: "ControlField",
  props: {
    label: {},
    error: {}
  },
  setup(e) {
    return (t, n) => (oe(), fe("div", Ta, [
      e.label ? (oe(), fe("div", Ea, Me(e.label), 1)) : pt("", !0),
      En(t.$slots, "default", {}, void 0),
      e.error ? (oe(), fe("div", Aa, Me(e.error), 1)) : pt("", !0)
    ]));
  }
}), an = /* @__PURE__ */ Pe(Ia, [["__scopeId", "data-v-c4a76868"]]), $a = /* @__PURE__ */ De({
  __name: "ImagePicker",
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ se(null);
    async function o(i) {
      const l = i.target, c = l.files || [], [d] = c;
      try {
        const u = await Sa(d);
        n("change", u), l.value = "";
      } catch {
      }
    }
    function r() {
      s.value?.click();
    }
    return (i, l) => (oe(), qe(an, { label: "Upload image" }, {
      default: Ee(() => [
        F("div", {
          class: "ito-upload-button",
          onClick: r
        }, "Browse"),
        F("input", {
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
}), Fa = /* @__PURE__ */ Pe($a, [["__scopeId", "data-v-d82ff94c"]]), Pa = /* @__PURE__ */ De({
  __name: "ImageFetcher",
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ se("");
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
          const u = await ys(d);
          n("change", u), c.value = "";
        } catch {
          s.value = "Failed to fetch image";
        }
    }
    return (l, c) => (oe(), qe(an, {
      label: "Or paste image address",
      error: s.value
    }, {
      default: Ee(() => [
        F("input", {
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
}), Ma = /* @__PURE__ */ Pe(Pa, [["__scopeId", "data-v-9d153850"]]), Oa = { class: "ito-image-agent-controls column" }, Ra = ["placeholder", "disabled"], La = { class: "ito-button-row" }, Va = ["disabled"], Da = { class: "ito-nav-group" }, Na = ["disabled"], Ha = ["disabled"], Ua = {
  key: 0,
  class: "ito-nav-counter"
}, ka = {
  key: 0,
  class: "ito-status-message"
}, ja = /* @__PURE__ */ De({
  __name: "ImageAgent",
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ se(!1), o = /* @__PURE__ */ se(""), r = /* @__PURE__ */ se(""), i = /* @__PURE__ */ se(""), l = /* @__PURE__ */ se("");
    let c;
    const d = /* @__PURE__ */ se(!1), u = /* @__PURE__ */ se(0), p = /* @__PURE__ */ se(""), g = /* @__PURE__ */ se(0), y = /* @__PURE__ */ se([]), M = /* @__PURE__ */ se(0);
    function P(k) {
      if (!k || !k.isConnected) return "";
      const D = k, $ = window.getComputedStyle(D);
      return $.display === "none" || $.visibility === "hidden" || $.opacity === "0" || D.offsetParent === null && $.position !== "fixed" ? "" : D.textContent?.trim() || "";
    }
    function z(k) {
      return k.replace(/_/g, "").replace(/\s\s+/g, " ").trim();
    }
    function K() {
      const k = document.querySelector(".word"), D = z(P(k));
      if (D) return D;
      const $ = document.querySelector("#currentWord"), j = z(P($));
      if (j) return j;
      const X = document.querySelector("[data-word]");
      if (X && X.dataset.word) {
        const S = z(X.dataset.word);
        if (S) return S;
      }
      return null;
    }
    function U(k) {
      if (!y.value || y.value.length === 0) return;
      const D = y.value.length;
      M.value = (M.value + k + D) % D;
      const $ = y.value[M.value];
      $ && ys($).then(() => {
        n("change", $), r.value = `${M.value + 1} / ${D}`, setTimeout(() => r.value = "", 1500);
      }).catch(() => {
        o.value = "Failed to load selected image.";
      });
    }
    function W() {
      const k = K(), D = Date.now(), $ = i.value.trim();
      if (!k) {
        if (p.value && $ === p.value) {
          i.value = "", p.value = "", l.value = "";
          return;
        }
        !$ && !d.value && D > u.value && (i.value = "", p.value = "", l.value = "");
        return;
      }
      !$ && !d.value && D > u.value && D > g.value && (i.value = k, p.value = k, l.value = k);
    }
    function O() {
      const k = Date.now();
      u.value = k + 2e3, p.value = "", i.value.trim() || (g.value = k + 5e3, l.value = "");
    }
    ln(() => {
      W(), c = window.setInterval(W, 500), window.addEventListener("ito:clear-image", G);
    }), Hn(() => {
      c !== void 0 && window.clearInterval(c), window.removeEventListener("ito:clear-image", G);
    });
    function G() {
      y.value = [], M.value = 0, r.value = "", i.value = "", l.value = "", p.value = "", g.value = 0, o.value = "";
    }
    async function ce() {
      o.value = "", r.value = "";
      const k = i.value.trim(), D = K();
      let $ = "";
      if (k && (!(p.value && k === p.value) || D) && ($ = k), !$ && D && ($ = D), !$) {
        o.value = "Could not detect word. Type it manually.";
        return;
      }
      s.value = !0;
      try {
        const j = `https://agent.typo.rip/${encodeURIComponent($)}`, X = await fetch(j);
        if (!X.ok)
          throw new Error(`API returned ${X.status}`);
        const S = await X.json(), Y = [];
        if (Array.isArray(S))
          for (const E of S)
            E && (typeof E == "string" ? Y.push(E) : typeof E == "object" && Y.push(E.url || E.src));
        else if (typeof S == "object") {
          const E = S.results || S.images || S.data;
          if (Array.isArray(E))
            for (const B of E)
              B && (typeof B == "string" ? Y.push(B) : typeof B == "object" && Y.push(B.url || B.src));
          else (S.url || S.src) && Y.push(S.url || S.src);
        }
        const C = Y.filter(Boolean);
        if (C.length === 0) {
          o.value = "No images found for this word";
          return;
        }
        y.value = C, M.value = 0;
        const w = y.value[0];
        await ys(w), n("change", w), r.value = `1 / ${y.value.length}`, setTimeout(() => {
          r.value = "";
        }, 2e3);
      } catch {
        o.value = "Failed to fetch image. Try another word.";
      } finally {
        s.value = !1;
      }
    }
    return (k, D) => (oe(), qe(an, {
      label: "Image Fetch",
      error: o.value
    }, {
      default: Ee(() => [
        F("div", Oa, [
          et(F("input", {
            "onUpdate:modelValue": D[0] || (D[0] = ($) => i.value = $),
            type: "text",
            placeholder: i.value ? "Press enter or click Search" : "Type a word here...",
            class: "ito-input-control full-width",
            onInput: O,
            onFocus: D[1] || (D[1] = ($) => d.value = !0),
            onBlur: D[2] || (D[2] = ($) => d.value = !1),
            onKeydown: ms(ce, ["enter"]),
            disabled: s.value
          }, null, 40, Ra), [
            [ct, i.value]
          ]),
          F("div", La, [
            F("button", {
              class: "ito-agent-btn",
              onClick: ce,
              disabled: s.value
            }, Me(s.value ? "Fetching..." : "🔍 Search"), 9, Va),
            F("div", Da, [
              F("button", {
                class: "ito-nav-btn left",
                onClick: D[3] || (D[3] = ($) => U(-1)),
                disabled: y.value.length === 0
              }, "◀", 8, Na),
              F("button", {
                class: "ito-nav-btn right",
                onClick: D[4] || (D[4] = ($) => U(1)),
                disabled: y.value.length === 0
              }, "▶", 8, Ha),
              y.value.length ? (oe(), fe("span", Ua, Me(M.value + 1) + " / " + Me(y.value.length), 1)) : pt("", !0)
            ])
          ])
        ]),
        r.value ? (oe(), fe("div", ka, Me(r.value), 1)) : pt("", !0)
      ]),
      _: 1
    }, 8, ["error"]));
  }
}), Ba = /* @__PURE__ */ Pe(ja, [["__scopeId", "data-v-e07c58fc"]]), Ka = { class: "control-group" }, Wa = { class: "label-row" }, Ya = { class: "label-text" }, qa = ["step", "min", "max"], Xa = ["min", "max", "step"], Ga = /* @__PURE__ */ De({
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
    const n = t, s = e, o = nn({
      get: () => s.modelValue,
      set: (c) => n("update:modelValue", c)
    }), r = nn(() => s.step ?? 0.01), i = () => {
      const c = Number(o.value);
      if (Number.isNaN(c)) return;
      const d = Math.min(Math.max(c, s.min), s.max);
      d !== c && (o.value = d);
    }, l = (c) => {
      const d = c.target;
      d && d.select();
    };
    return (c, d) => (oe(), qe(an, null, {
      default: Ee(() => [
        F("div", Ka, [
          F("div", Wa, [
            F("span", Ya, Me(e.label), 1),
            et(F("input", {
              type: "number",
              "onUpdate:modelValue": d[0] || (d[0] = (u) => o.value = u),
              onFocus: l,
              onBlur: i,
              class: "stealth-input",
              step: r.value,
              min: e.min,
              max: e.max
            }, null, 40, qa), [
              [
                ct,
                o.value,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          et(F("input", {
            type: "range",
            "onUpdate:modelValue": d[1] || (d[1] = (u) => o.value = u),
            min: e.min,
            max: e.max,
            step: r.value,
            class: "custom-slider"
          }, null, 8, Xa), [
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
}), ss = /* @__PURE__ */ Pe(Ga, [["__scopeId", "data-v-77ed8873"]]), za = /* @__PURE__ */ De({
  __name: "TextButton",
  props: {
    label: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = t;
    return (s, o) => (oe(), fe("div", {
      class: "ito-text-button",
      onClick: o[0] || (o[0] = (r) => n("click"))
    }, Me(e.label), 1));
  }
}), Mo = /* @__PURE__ */ Pe(za, [["__scopeId", "data-v-c965233f"]]), Ja = { class: "ito-switch-field-label" }, Za = { class: "ito-switch" }, Qa = /* @__PURE__ */ De({
  __name: "SwitchField",
  props: {
    label: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (oe(), qe(an, null, {
      default: Ee(() => [
        F("div", {
          class: "ito-switch-field",
          onClick: n[0] || (n[0] = (s) => t.$emit("update:modelValue", !e.modelValue))
        }, [
          F("div", Ja, Me(e.label), 1),
          F("div", Za, [
            F("div", {
              class: ft(["ito-switch-button", { "ito-switch-button--on": e.modelValue }])
            }, [...n[1] || (n[1] = [
              F("div", { class: "ito-switch-knob" }, null, -1)
            ])], 2)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), eu = /* @__PURE__ */ Pe(Qa, [["__scopeId", "data-v-db41b143"]]);
function tu() {
  const e = document.getElementById("ImageTracerOverlayContainer"), t = document.querySelector(":root");
  if (!e)
    return;
  const n = e.getBoundingClientRect(), s = window.scrollY || document.documentElement.scrollTop, o = window.scrollX || document.documentElement.scrollLeft;
  t.style.setProperty("--image-tracer-overlay-attached-x", n.top + s + "px"), t.style.setProperty("--image-tracer-overlay-attached-y", n.left + o + "px");
}
const nu = { class: "ito-fixed-container" }, su = { class: "ito-text-buttons-group" }, ou = /* @__PURE__ */ De({
  __name: "App",
  setup(e) {
    const { opacity: t, scale: n, resetControls: s, rotation: o, isAttached: r } = Ns(), { resetElementDrag: i } = Jr(), l = /* @__PURE__ */ se(void 0);
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
    return yn(r, () => {
      r.value && tu();
    }), (u, p) => (oe(), fe(ye, null, [
      F("div", {
        id: "ImageTracerOverlayContainer",
        class: ft([Te(r) ? "ito-attached-container" : "ito-fixed-container"])
      }, [
        l.value ? (oe(), qe(Ca, {
          key: 0,
          src: l.value
        }, null, 8, ["src"])) : pt("", !0)
      ], 2),
      F("div", nu, [
        Q(da, null, {
          footer: Ee(() => [...p[7] || (p[7] = [
            F("div", { class: "ito-menu-helper" }, " Tips: Position the image by dragging. Ctrl+Scroll to zoom. Shift+Scroll to rotate. Alt+V to toggle visibility. ", -1)
          ])]),
          default: Ee(() => [
            Q(gn, null, {
              default: Ee(() => [
                Q(Fa, {
                  onChange: p[0] || (p[0] = (g) => l.value = g)
                }),
                Q(Ma, {
                  onChange: p[1] || (p[1] = (g) => l.value = g)
                }),
                Q(Ba, {
                  onChange: p[2] || (p[2] = (g) => l.value = g)
                })
              ]),
              _: 1
            }),
            Q(gn, null, {
              default: Ee(() => [
                Q(eu, {
                  label: "Lock image position",
                  modelValue: Te(r),
                  "onUpdate:modelValue": p[3] || (p[3] = (g) => /* @__PURE__ */ ue(r) ? r.value = g : null)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            Q(gn, null, {
              default: Ee(() => [
                Q(ss, {
                  label: "Opacity",
                  min: 0,
                  max: 1,
                  step: 0.01,
                  modelValue: Te(t),
                  "onUpdate:modelValue": p[4] || (p[4] = (g) => /* @__PURE__ */ ue(t) ? t.value = g : null)
                }, null, 8, ["modelValue"]),
                Q(ss, {
                  label: "Scale",
                  min: 0.1,
                  max: 5,
                  step: 0.01,
                  modelValue: Te(n),
                  "onUpdate:modelValue": p[5] || (p[5] = (g) => /* @__PURE__ */ ue(n) ? n.value = g : null)
                }, null, 8, ["modelValue"]),
                Q(ss, {
                  label: "Rotate",
                  min: 0,
                  max: 360,
                  step: 1,
                  modelValue: Te(o),
                  "onUpdate:modelValue": p[6] || (p[6] = (g) => /* @__PURE__ */ ue(o) ? o.value = g : null)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            l.value ? (oe(), qe(gn, { key: 0 }, {
              default: Ee(() => [
                F("div", su, [
                  Q(Mo, {
                    label: "Clear image",
                    onClick: c
                  }),
                  Q(Mo, {
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
}), ru = /* @__PURE__ */ Pe(ou, [["__scopeId", "data-v-6a790b35"]]), Bn = document.createElement("div");
Bn.setAttribute("id", "ImageTracerOverlayMount");
Bn.style.display = "none";
document.body.appendChild(Bn);
const iu = Ic(ru);
iu.mount(Bn);
