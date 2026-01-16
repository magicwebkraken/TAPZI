"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9631],
  {
    20294: (e) => {
      e.exports = function () {
        throw Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    28185: (e, t, i) => {
      i.d(t, {
        Vw: () => p,
        Fc: () => l,
        Id: () => d,
        O8: () => o,
        qv: () => c,
        po: () => f,
        Ow: () => a,
        ZJ: () => u,
        DH: () => n,
        ld: () => g,
      });
      let r =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      var s = i(61947);
      function n(e) {
        return new Uint32Array(
          e.buffer,
          e.byteOffset,
          Math.floor(e.byteLength / 4)
        );
      }
      function o(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function a(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let c = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      function l(e) {
        for (let i = 0; i < e.length; i++) {
          var t;
          e[i] =
            (((t = e[i]) << 24) & 0xff000000) |
            ((t << 8) & 0xff0000) |
            ((t >>> 8) & 65280) |
            ((t >>> 24) & 255);
        }
      }
      (e, t) => t.toString(16).padStart(2, "0");
      let h = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function u(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          (0, s.DO)(e),
          e
        );
      }
      function d(...e) {
        let t = 0;
        for (let i = 0; i < e.length; i++) {
          let r = e[i];
          (0, s.DO)(r), (t += r.length);
        }
        let i = new Uint8Array(t);
        for (let t = 0, r = 0; t < e.length; t++) {
          let s = e[t];
          i.set(s, r), (r += s.length);
        }
        return i;
      }
      class p {
        clone() {
          return this._cloneInto();
        }
      }
      function g(e) {
        let t = (t) => e().update(u(t)).digest(),
          i = e();
        return (
          (t.outputLen = i.outputLen),
          (t.blockLen = i.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function f(e = 32) {
        if (r && "function" == typeof r.getRandomValues)
          return r.getRandomValues(new Uint8Array(e));
        if (r && "function" == typeof r.randomBytes) return r.randomBytes(e);
        throw Error("crypto.getRandomValues must be defined");
      }
    },
    30565: (e, t, i) => {
      i.d(t, { Cq: () => tO, FA: () => tC, TZ: () => tA, UF: () => tS });
      var r = i(89101),
        s = i(71075);
      function n(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function o(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      let a =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0,
        c = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      function l(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          n(e),
          e
        );
      }
      class h {
        clone() {
          return this._cloneInto();
        }
      }
      function u(e = 32) {
        if (a && "function" == typeof a.getRandomValues)
          return a.getRandomValues(new Uint8Array(e));
        if (a && "function" == typeof a.randomBytes) return a.randomBytes(e);
        throw Error("crypto.getRandomValues must be defined");
      }
      class d extends h {
        constructor(e, t, i, r) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = i),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = c(this.buffer));
        }
        update(e) {
          o(this);
          let { view: t, buffer: i, blockLen: r } = this,
            s = (e = l(e)).length;
          for (let n = 0; n < s; ) {
            let o = Math.min(r - this.pos, s - n);
            if (o === r) {
              let t = c(e);
              for (; r <= s - n; n += r) this.process(t, n);
              continue;
            }
            i.set(e.subarray(n, n + o), this.pos),
              (this.pos += o),
              (n += o),
              this.pos === r && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          o(this),
            (function (e, t) {
              n(e);
              let i = t.outputLen;
              if (e.length < i)
                throw Error(
                  "digestInto() expects output buffer of length at least " + i
                );
            })(e, this),
            (this.finished = !0);
          let { buffer: t, view: i, blockLen: r, isLE: s } = this,
            { pos: a } = this;
          (t[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > r - a && (this.process(i, 0), (a = 0));
          for (let e = a; e < r; e++) t[e] = 0;
          (function (e, t, i, r) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, i, r);
            let s = BigInt(32),
              n = BigInt(0xffffffff),
              o = Number((i >> s) & n),
              a = Number(i & n),
              c = 4 * !!r,
              l = 4 * !r;
            e.setUint32(t + c, o, r), e.setUint32(t + l, a, r);
          })(i, r - 8, BigInt(8 * this.length), s),
            this.process(i, 0);
          let l = c(e),
            h = this.outputLen;
          if (h % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let u = h / 4,
            d = this.get();
          if (u > d.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < u; e++) l.setUint32(4 * e, d[e], s);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let i = e.slice(0, t);
          return this.destroy(), i;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: i,
            length: r,
            finished: s,
            destroyed: n,
            pos: o,
          } = this;
          return (
            (e.length = r),
            (e.pos = o),
            (e.finished = s),
            (e.destroyed = n),
            r % t && e.buffer.set(i),
            e
          );
        }
      }
      let p = BigInt(0x100000000 - 1),
        g = BigInt(32),
        f = {
          split: function (e, t = !1) {
            let i = new Uint32Array(e.length),
              r = new Uint32Array(e.length);
            for (let s = 0; s < e.length; s++) {
              let { h: n, l: o } = (function (e, t = !1) {
                return t
                  ? { h: Number(e & p), l: Number((e >> g) & p) }
                  : { h: 0 | Number((e >> g) & p), l: 0 | Number(e & p) };
              })(e[s], t);
              [i[s], r[s]] = [n, o];
            }
            return [i, r];
          },
          shrSH: (e, t, i) => e >>> i,
          shrSL: (e, t, i) => (e << (32 - i)) | (t >>> i),
          rotrSH: (e, t, i) => (e >>> i) | (t << (32 - i)),
          rotrSL: (e, t, i) => (e << (32 - i)) | (t >>> i),
          rotrBH: (e, t, i) => (e << (64 - i)) | (t >>> (i - 32)),
          rotrBL: (e, t, i) => (e >>> (i - 32)) | (t << (64 - i)),
          add: function (e, t, i, r) {
            let s = (t >>> 0) + (r >>> 0);
            return { h: (e + i + ((s / 0x100000000) | 0)) | 0, l: 0 | s };
          },
          add3L: (e, t, i) => (e >>> 0) + (t >>> 0) + (i >>> 0),
          add3H: (e, t, i, r) => (t + i + r + ((e / 0x100000000) | 0)) | 0,
          add4L: (e, t, i, r) => (e >>> 0) + (t >>> 0) + (i >>> 0) + (r >>> 0),
          add4H: (e, t, i, r, s) =>
            (t + i + r + s + ((e / 0x100000000) | 0)) | 0,
          add5H: (e, t, i, r, s, n) =>
            (t + i + r + s + n + ((e / 0x100000000) | 0)) | 0,
          add5L: (e, t, i, r, s) =>
            (e >>> 0) + (t >>> 0) + (i >>> 0) + (r >>> 0) + (s >>> 0),
        },
        [y, m] = f.split(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((e) => BigInt(e))
        ),
        b = new Uint32Array(80),
        w = new Uint32Array(80);
      class v extends d {
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 0x6a09e667),
            (this.Al = -0xc4336f8),
            (this.Bh = -0x4498517b),
            (this.Bl = -0x7b3558c5),
            (this.Ch = 0x3c6ef372),
            (this.Cl = -0x16b07d5),
            (this.Dh = -0x5ab00ac6),
            (this.Dl = 0x5f1d36f1),
            (this.Eh = 0x510e527f),
            (this.El = -0x52197d2f),
            (this.Fh = -0x64fa9774),
            (this.Fl = 0x2b3e6c1f),
            (this.Gh = 0x1f83d9ab),
            (this.Gl = -0x4be4295),
            (this.Hh = 0x5be0cd19),
            (this.Hl = 0x137e2179);
        }
        get() {
          let {
            Ah: e,
            Al: t,
            Bh: i,
            Bl: r,
            Ch: s,
            Cl: n,
            Dh: o,
            Dl: a,
            Eh: c,
            El: l,
            Fh: h,
            Fl: u,
            Gh: d,
            Gl: p,
            Hh: g,
            Hl: f,
          } = this;
          return [e, t, i, r, s, n, o, a, c, l, h, u, d, p, g, f];
        }
        set(e, t, i, r, s, n, o, a, c, l, h, u, d, p, g, f) {
          (this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | i),
            (this.Bl = 0 | r),
            (this.Ch = 0 | s),
            (this.Cl = 0 | n),
            (this.Dh = 0 | o),
            (this.Dl = 0 | a),
            (this.Eh = 0 | c),
            (this.El = 0 | l),
            (this.Fh = 0 | h),
            (this.Fl = 0 | u),
            (this.Gh = 0 | d),
            (this.Gl = 0 | p),
            (this.Hh = 0 | g),
            (this.Hl = 0 | f);
        }
        process(e, t) {
          for (let i = 0; i < 16; i++, t += 4)
            (b[i] = e.getUint32(t)), (w[i] = e.getUint32((t += 4)));
          for (let e = 16; e < 80; e++) {
            let t = 0 | b[e - 15],
              i = 0 | w[e - 15],
              r = f.rotrSH(t, i, 1) ^ f.rotrSH(t, i, 8) ^ f.shrSH(t, i, 7),
              s = f.rotrSL(t, i, 1) ^ f.rotrSL(t, i, 8) ^ f.shrSL(t, i, 7),
              n = 0 | b[e - 2],
              o = 0 | w[e - 2],
              a = f.rotrSH(n, o, 19) ^ f.rotrBH(n, o, 61) ^ f.shrSH(n, o, 6),
              c = f.rotrSL(n, o, 19) ^ f.rotrBL(n, o, 61) ^ f.shrSL(n, o, 6),
              l = f.add4L(s, c, w[e - 7], w[e - 16]),
              h = f.add4H(l, r, a, b[e - 7], b[e - 16]);
            (b[e] = 0 | h), (w[e] = 0 | l);
          }
          let {
            Ah: i,
            Al: r,
            Bh: s,
            Bl: n,
            Ch: o,
            Cl: a,
            Dh: c,
            Dl: l,
            Eh: h,
            El: u,
            Fh: d,
            Fl: p,
            Gh: g,
            Gl: v,
            Hh: E,
            Hl: I,
          } = this;
          for (let e = 0; e < 80; e++) {
            let t =
                f.rotrSH(h, u, 14) ^ f.rotrSH(h, u, 18) ^ f.rotrBH(h, u, 41),
              P = f.rotrSL(h, u, 14) ^ f.rotrSL(h, u, 18) ^ f.rotrBL(h, u, 41),
              _ = (h & d) ^ (~h & g),
              x = (u & p) ^ (~u & v),
              S = f.add5L(I, P, x, m[e], w[e]),
              O = f.add5H(S, E, t, _, y[e], b[e]),
              A = 0 | S,
              C = f.rotrSH(i, r, 28) ^ f.rotrBH(i, r, 34) ^ f.rotrBH(i, r, 39),
              R = f.rotrSL(i, r, 28) ^ f.rotrBL(i, r, 34) ^ f.rotrBL(i, r, 39),
              N = (i & s) ^ (i & o) ^ (s & o),
              T = (r & n) ^ (r & a) ^ (n & a);
            (E = 0 | g),
              (I = 0 | v),
              (g = 0 | d),
              (v = 0 | p),
              (d = 0 | h),
              (p = 0 | u),
              ({ h: h, l: u } = f.add(0 | c, 0 | l, 0 | O, 0 | A)),
              (c = 0 | o),
              (l = 0 | a),
              (o = 0 | s),
              (a = 0 | n),
              (s = 0 | i),
              (n = 0 | r);
            let q = f.add3L(A, R, T);
            (i = f.add3H(q, O, C, N)), (r = 0 | q);
          }
          ({ h: i, l: r } = f.add(0 | this.Ah, 0 | this.Al, 0 | i, 0 | r)),
            ({ h: s, l: n } = f.add(0 | this.Bh, 0 | this.Bl, 0 | s, 0 | n)),
            ({ h: o, l: a } = f.add(0 | this.Ch, 0 | this.Cl, 0 | o, 0 | a)),
            ({ h: c, l: l } = f.add(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | l)),
            ({ h: h, l: u } = f.add(0 | this.Eh, 0 | this.El, 0 | h, 0 | u)),
            ({ h: d, l: p } = f.add(0 | this.Fh, 0 | this.Fl, 0 | d, 0 | p)),
            ({ h: g, l: v } = f.add(0 | this.Gh, 0 | this.Gl, 0 | g, 0 | v)),
            ({ h: E, l: I } = f.add(0 | this.Hh, 0 | this.Hl, 0 | E, 0 | I)),
            this.set(i, r, s, n, o, a, c, l, h, u, d, p, g, v, E, I);
        }
        roundClean() {
          b.fill(0), w.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      let E = (function (e) {
          let t = (t) => e().update(l(t)).digest(),
            i = e();
          return (
            (t.outputLen = i.outputLen),
            (t.blockLen = i.blockLen),
            (t.create = () => e()),
            t
          );
        })(() => new v()),
        I = BigInt(0),
        P = BigInt(1),
        _ = BigInt(2);
      function x(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function S(e) {
        if (!x(e)) throw Error("Uint8Array expected");
      }
      function O(e, t) {
        if ("boolean" != typeof t)
          throw Error(e + " boolean expected, got " + t);
      }
      let A = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function C(e) {
        S(e);
        let t = "";
        for (let i = 0; i < e.length; i++) t += A[e[i]];
        return t;
      }
      function R(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return "" === e ? I : BigInt("0x" + e);
      }
      let N = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function T(e) {
        return e >= N._0 && e <= N._9
          ? e - N._0
          : e >= N.A && e <= N.F
          ? e - (N.A - 10)
          : e >= N.a && e <= N.f
          ? e - (N.a - 10)
          : void 0;
      }
      function q(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        let t = e.length,
          i = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let r = new Uint8Array(i);
        for (let t = 0, s = 0; t < i; t++, s += 2) {
          let i = T(e.charCodeAt(s)),
            n = T(e.charCodeAt(s + 1));
          if (void 0 === i || void 0 === n)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[s] + e[s + 1]) +
                '" at index ' +
                s
            );
          r[t] = 16 * i + n;
        }
        return r;
      }
      function k(e) {
        return S(e), R(C(Uint8Array.from(e).reverse()));
      }
      function j(e, t) {
        return q(e.toString(16).padStart(2 * t, "0"));
      }
      function U(e, t) {
        return j(e, t).reverse();
      }
      function D(e, t, i) {
        let r;
        if ("string" == typeof t)
          try {
            r = q(t);
          } catch (t) {
            throw Error(e + " must be hex string or Uint8Array, cause: " + t);
          }
        else if (x(t)) r = Uint8Array.from(t);
        else throw Error(e + " must be hex string or Uint8Array");
        let s = r.length;
        if ("number" == typeof i && s !== i)
          throw Error(e + " of length " + i + " expected, got " + s);
        return r;
      }
      function $(...e) {
        let t = 0;
        for (let i = 0; i < e.length; i++) {
          let r = e[i];
          S(r), (t += r.length);
        }
        let i = new Uint8Array(t);
        for (let t = 0, r = 0; t < e.length; t++) {
          let s = e[t];
          i.set(s, r), (r += s.length);
        }
        return i;
      }
      let B = (e) => "bigint" == typeof e && I <= e;
      function L(e, t, i, r) {
        if (!(B(t) && B(i) && B(r)) || !(i <= t) || !(t < r))
          throw Error(
            "expected valid " + e + ": " + i + " <= n < " + r + ", got " + t
          );
      }
      let M = (e) => (_ << BigInt(e - 1)) - P,
        z = {
          bigint: (e) => "bigint" == typeof e,
          function: (e) => "function" == typeof e,
          boolean: (e) => "boolean" == typeof e,
          string: (e) => "string" == typeof e,
          stringOrUint8Array: (e) => "string" == typeof e || x(e),
          isSafeInteger: (e) => Number.isSafeInteger(e),
          array: (e) => Array.isArray(e),
          field: (e, t) => t.Fp.isValid(e),
          hash: (e) =>
            "function" == typeof e && Number.isSafeInteger(e.outputLen),
        };
      function H(e, t, i = {}) {
        let r = (t, i, r) => {
          let s = z[i];
          if ("function" != typeof s) throw Error("invalid validator function");
          let n = e[t];
          if (!(r && void 0 === n) && !s(n, e))
            throw Error(
              "param " + String(t) + " is invalid. Expected " + i + ", got " + n
            );
        };
        for (let [e, i] of Object.entries(t)) r(e, i, !1);
        for (let [e, t] of Object.entries(i)) r(e, t, !0);
        return e;
      }
      function K(e) {
        let t = new WeakMap();
        return (i, ...r) => {
          let s = t.get(i);
          if (void 0 !== s) return s;
          let n = e(i, ...r);
          return t.set(i, n), n;
        };
      }
      let V = BigInt(0),
        F = BigInt(1),
        W = BigInt(2),
        G = BigInt(3),
        J = BigInt(4),
        Z = BigInt(5),
        Y = BigInt(8);
      function Q(e, t) {
        let i = e % t;
        return i >= V ? i : t + i;
      }
      function X(e, t, i) {
        let r = e;
        for (; t-- > V; ) (r *= r), (r %= i);
        return r;
      }
      function ee(e, t) {
        if (e === V) throw Error("invert: expected non-zero number");
        if (t <= V) throw Error("invert: expected positive modulus, got " + t);
        let i = Q(e, t),
          r = t,
          s = V,
          n = F;
        for (; i !== V; ) {
          let e = r / i,
            t = r % i,
            o = s - n * e;
          (r = i), (i = t), (s = n), (n = o);
        }
        if (r !== F) throw Error("invert: does not exist");
        return Q(s, t);
      }
      let et = (e, t) => (Q(e, t) & F) === F,
        ei = [
          "create",
          "isValid",
          "is0",
          "neg",
          "inv",
          "sqrt",
          "sqr",
          "eql",
          "add",
          "sub",
          "mul",
          "pow",
          "div",
          "addN",
          "subN",
          "mulN",
          "sqrN",
        ];
      function er(e, t) {
        let i = void 0 !== t ? t : e.toString(2).length,
          r = Math.ceil(i / 8);
        return { nBitLength: i, nByteLength: r };
      }
      function es(e, t, i = !1, r = {}) {
        let s;
        if (e <= V) throw Error("invalid field: expected ORDER > 0, got " + e);
        let { nBitLength: n, nByteLength: o } = er(e, t);
        if (o > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let a = Object.freeze({
          ORDER: e,
          isLE: i,
          BITS: n,
          BYTES: o,
          MASK: M(n),
          ZERO: V,
          ONE: F,
          create: (t) => Q(t, e),
          isValid: (t) => {
            if ("bigint" != typeof t)
              throw Error(
                "invalid field element: expected bigint, got " + typeof t
              );
            return V <= t && t < e;
          },
          is0: (e) => e === V,
          isOdd: (e) => (e & F) === F,
          neg: (t) => Q(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => Q(t * t, e),
          add: (t, i) => Q(t + i, e),
          sub: (t, i) => Q(t - i, e),
          mul: (t, i) => Q(t * i, e),
          pow: (e, t) =>
            (function (e, t, i) {
              if (i < V) throw Error("invalid exponent, negatives unsupported");
              if (i === V) return e.ONE;
              if (i === F) return t;
              let r = e.ONE,
                s = t;
              for (; i > V; )
                i & F && (r = e.mul(r, s)), (s = e.sqr(s)), (i >>= F);
              return r;
            })(a, e, t),
          div: (t, i) => Q(t * ee(i, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => ee(t, e),
          sqrt:
            r.sqrt ||
            ((t) => (
              s ||
                (s = (function (e) {
                  if (e % J === G) {
                    let t = (e + F) / J;
                    return function (e, i) {
                      let r = e.pow(i, t);
                      if (!e.eql(e.sqr(r), i))
                        throw Error("Cannot find square root");
                      return r;
                    };
                  }
                  if (e % Y === Z) {
                    let t = (e - Z) / Y;
                    return function (e, i) {
                      let r = e.mul(i, W),
                        s = e.pow(r, t),
                        n = e.mul(i, s),
                        o = e.mul(e.mul(n, W), s),
                        a = e.mul(n, e.sub(o, e.ONE));
                      if (!e.eql(e.sqr(a), i))
                        throw Error("Cannot find square root");
                      return a;
                    };
                  }
                  return (function (e) {
                    let t,
                      i,
                      r,
                      s = (e - F) / W;
                    for (t = e - F, i = 0; t % W === V; t /= W, i++);
                    for (
                      r = W;
                      r < e &&
                      (function (e, t, i) {
                        if (t < V)
                          throw Error(
                            "invalid exponent, negatives unsupported"
                          );
                        if (i <= V) throw Error("invalid modulus");
                        if (i === F) return V;
                        let r = F;
                        for (; t > V; )
                          t & F && (r = (r * e) % i),
                            (e = (e * e) % i),
                            (t >>= F);
                        return r;
                      })(r, s, e) !==
                        e - F;
                      r++
                    )
                      if (r > 1e3)
                        throw Error(
                          "Cannot find square root: likely non-prime P"
                        );
                    if (1 === i) {
                      let t = (e + F) / J;
                      return function (e, i) {
                        let r = e.pow(i, t);
                        if (!e.eql(e.sqr(r), i))
                          throw Error("Cannot find square root");
                        return r;
                      };
                    }
                    let n = (t + F) / W;
                    return function (e, o) {
                      if (e.pow(o, s) === e.neg(e.ONE))
                        throw Error("Cannot find square root");
                      let a = i,
                        c = e.pow(e.mul(e.ONE, r), t),
                        l = e.pow(o, n),
                        h = e.pow(o, t);
                      for (; !e.eql(h, e.ONE); ) {
                        if (e.eql(h, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let i = e.sqr(h); t < a && !e.eql(i, e.ONE); t++)
                          i = e.sqr(i);
                        let i = e.pow(c, F << BigInt(a - t - 1));
                        (c = e.sqr(i)),
                          (l = e.mul(l, i)),
                          (h = e.mul(h, c)),
                          (a = t);
                      }
                      return l;
                    };
                  })(e);
                })(e)),
              s(a, t)
            )),
          invertBatch: (e) =>
            (function (e, t) {
              let i = Array(t.length),
                r = t.reduce(
                  (t, r, s) => (e.is0(r) ? t : ((i[s] = t), e.mul(t, r))),
                  e.ONE
                ),
                s = e.inv(r);
              return (
                t.reduceRight(
                  (t, r, s) =>
                    e.is0(r) ? t : ((i[s] = e.mul(t, i[s])), e.mul(t, r)),
                  s
                ),
                i
              );
            })(a, e),
          cmov: (e, t, i) => (i ? t : e),
          toBytes: (e) => (i ? U(e, o) : j(e, o)),
          fromBytes: (e) => {
            if (e.length !== o)
              throw Error(
                "Field.fromBytes: expected " + o + " bytes, got " + e.length
              );
            return i ? k(e) : R(C(e));
          },
        });
        return Object.freeze(a);
      }
      let en = BigInt(0),
        eo = BigInt(1);
      function ea(e, t) {
        let i = t.negate();
        return e ? i : t;
      }
      function ec(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function el(e, t) {
        return (
          ec(e, t), { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) }
        );
      }
      let eh = new WeakMap(),
        eu = new WeakMap();
      function ed(e) {
        return eu.get(e) || 1;
      }
      let ep = BigInt(0),
        eg = BigInt(1),
        ef = BigInt(2),
        ey = BigInt(8),
        em = { zip215: !0 };
      BigInt(0), BigInt(1);
      let eb = BigInt(
          "57896044618658097711785492504343953926634992332820282019728792003956564819949"
        ),
        ew = BigInt(
          "19681161376707505956807079304988542015446066515923890162744021073123829784752"
        );
      BigInt(0);
      let ev = BigInt(1),
        eE = BigInt(2);
      BigInt(3);
      let eI = BigInt(5),
        eP = BigInt(8),
        e_ = es(eb, void 0, !0),
        ex = (function (e) {
          var t;
          let i = (function (e) {
              let t =
                (H(
                  e.Fp,
                  ei.reduce((e, t) => ((e[t] = "function"), e), {
                    ORDER: "bigint",
                    MASK: "bigint",
                    BYTES: "isSafeInteger",
                    BITS: "isSafeInteger",
                  })
                ),
                H(
                  e,
                  { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
                  { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
                ),
                Object.freeze({
                  ...er(e.n, e.nBitLength),
                  ...e,
                  p: e.Fp.ORDER,
                }));
              return (
                H(
                  e,
                  {
                    hash: "function",
                    a: "bigint",
                    d: "bigint",
                    randomBytes: "function",
                  },
                  {
                    adjustScalarBytes: "function",
                    domain: "function",
                    uvRatio: "function",
                    mapToCurve: "function",
                  }
                ),
                Object.freeze({ ...t })
              );
            })(e),
            {
              Fp: r,
              n: s,
              prehash: n,
              hash: o,
              randomBytes: a,
              nByteLength: c,
              h: l,
            } = i,
            h = ef << (BigInt(8 * c) - eg),
            u = r.create,
            d = es(i.n, i.nBitLength),
            p =
              i.uvRatio ||
              ((e, t) => {
                try {
                  return { isValid: !0, value: r.sqrt(e * r.inv(t)) };
                } catch {
                  return { isValid: !1, value: ep };
                }
              }),
            g = i.adjustScalarBytes || ((e) => e),
            f =
              i.domain ||
              ((e, t, i) => {
                if ((O("phflag", i), t.length || i))
                  throw Error("Contexts/pre-hash are not supported");
                return e;
              });
          function y(e, t) {
            L("coordinate " + e, t, ep, h);
          }
          function m(e) {
            if (!(e instanceof v)) throw Error("ExtendedPoint expected");
          }
          let b = K((e, t) => {
              let { ex: i, ey: s, ez: n } = e,
                o = e.is0();
              null == t && (t = o ? ey : r.inv(n));
              let a = u(i * t),
                c = u(s * t),
                l = u(n * t);
              if (o) return { x: ep, y: eg };
              if (l !== eg) throw Error("invZ was invalid");
              return { x: a, y: c };
            }),
            w = K((e) => {
              let { a: t, d: r } = i;
              if (e.is0()) throw Error("bad point: ZERO");
              let { ex: s, ey: n, ez: o, et: a } = e,
                c = u(s * s),
                l = u(n * n),
                h = u(o * o),
                d = u(h * h),
                p = u(c * t);
              if (u(h * u(p + l)) !== u(d + u(r * u(c * l))))
                throw Error("bad point: equation left != right (1)");
              if (u(s * n) !== u(o * a))
                throw Error("bad point: equation left != right (2)");
              return !0;
            });
          class v {
            constructor(e, t, i, r) {
              (this.ex = e),
                (this.ey = t),
                (this.ez = i),
                (this.et = r),
                y("x", e),
                y("y", t),
                y("z", i),
                y("t", r),
                Object.freeze(this);
            }
            get x() {
              return this.toAffine().x;
            }
            get y() {
              return this.toAffine().y;
            }
            static fromAffine(e) {
              if (e instanceof v) throw Error("extended point not allowed");
              let { x: t, y: i } = e || {};
              return y("x", t), y("y", i), new v(t, i, eg, u(t * i));
            }
            static normalizeZ(e) {
              let t = r.invertBatch(e.map((e) => e.ez));
              return e.map((e, i) => e.toAffine(t[i])).map(v.fromAffine);
            }
            static msm(e, t) {
              return (function (e, t, i, r) {
                if (
                  ((function (e, t) {
                    if (!Array.isArray(e)) throw Error("array expected");
                    e.forEach((e, i) => {
                      if (!(e instanceof t))
                        throw Error("invalid point at index " + i);
                    });
                  })(i, e),
                  (function (e, t) {
                    if (!Array.isArray(e))
                      throw Error("array of scalars expected");
                    e.forEach((e, i) => {
                      if (!t.isValid(e))
                        throw Error("invalid scalar at index " + i);
                    });
                  })(r, t),
                  i.length !== r.length)
                )
                  throw Error(
                    "arrays of points and scalars must have equal length"
                  );
                let s = e.ZERO,
                  n = (function (e) {
                    let t;
                    for (t = 0; e > I; e >>= P, t += 1);
                    return t;
                  })(BigInt(i.length)),
                  o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1,
                  a = (1 << o) - 1,
                  c = Array(a + 1).fill(s),
                  l = Math.floor((t.BITS - 1) / o) * o,
                  h = s;
                for (let e = l; e >= 0; e -= o) {
                  c.fill(s);
                  for (let t = 0; t < r.length; t++) {
                    let s = Number((r[t] >> BigInt(e)) & BigInt(a));
                    c[s] = c[s].add(i[t]);
                  }
                  let t = s;
                  for (let e = c.length - 1, i = s; e > 0; e--)
                    (i = i.add(c[e])), (t = t.add(i));
                  if (((h = h.add(t)), 0 !== e))
                    for (let e = 0; e < o; e++) h = h.double();
                }
                return h;
              })(v, d, e, t);
            }
            _setWindowSize(e) {
              x.setWindowSize(this, e);
            }
            assertValidity() {
              w(this);
            }
            equals(e) {
              m(e);
              let { ex: t, ey: i, ez: r } = this,
                { ex: s, ey: n, ez: o } = e,
                a = u(t * o),
                c = u(s * r),
                l = u(i * o),
                h = u(n * r);
              return a === c && l === h;
            }
            is0() {
              return this.equals(v.ZERO);
            }
            negate() {
              return new v(u(-this.ex), this.ey, this.ez, u(-this.et));
            }
            double() {
              let { a: e } = i,
                { ex: t, ey: r, ez: s } = this,
                n = u(t * t),
                o = u(r * r),
                a = u(ef * u(s * s)),
                c = u(e * n),
                l = t + r,
                h = u(u(l * l) - n - o),
                d = c + o,
                p = d - a,
                g = c - o,
                f = u(h * p),
                y = u(d * g),
                m = u(h * g);
              return new v(f, y, u(p * d), m);
            }
            add(e) {
              m(e);
              let { a: t, d: r } = i,
                { ex: s, ey: n, ez: o, et: a } = this,
                { ex: c, ey: l, ez: h, et: d } = e;
              if (t === BigInt(-1)) {
                let e = u((n - s) * (l + c)),
                  t = u((n + s) * (l - c)),
                  i = u(t - e);
                if (i === ep) return this.double();
                let r = u(o * ef * d),
                  p = u(a * ef * h),
                  g = p + r,
                  f = t + e,
                  y = p - r,
                  m = u(g * i),
                  b = u(f * y),
                  w = u(g * y);
                return new v(m, b, u(i * f), w);
              }
              let p = u(s * c),
                g = u(n * l),
                f = u(a * r * d),
                y = u(o * h),
                b = u((s + n) * (c + l) - p - g),
                w = y - f,
                E = y + f,
                I = u(g - t * p),
                P = u(b * w),
                _ = u(E * I),
                x = u(b * I);
              return new v(P, _, u(w * E), x);
            }
            subtract(e) {
              return this.add(e.negate());
            }
            wNAF(e) {
              return x.wNAFCached(this, e, v.normalizeZ);
            }
            multiply(e) {
              L("scalar", e, eg, s);
              let { p: t, f: i } = this.wNAF(e);
              return v.normalizeZ([t, i])[0];
            }
            multiplyUnsafe(e, t = v.ZERO) {
              return (
                L("scalar", e, ep, s),
                e === ep
                  ? _
                  : this.is0() || e === eg
                  ? this
                  : x.wNAFCachedUnsafe(this, e, v.normalizeZ, t)
              );
            }
            isSmallOrder() {
              return this.multiplyUnsafe(l).is0();
            }
            isTorsionFree() {
              return x.unsafeLadder(this, s).is0();
            }
            toAffine(e) {
              return b(this, e);
            }
            clearCofactor() {
              let { h: e } = i;
              return e === eg ? this : this.multiplyUnsafe(e);
            }
            static fromHex(e, t = !1) {
              let { d: s, a: n } = i,
                o = r.BYTES;
              (e = D("pointHex", e, o)), O("zip215", t);
              let a = e.slice(),
                c = e[o - 1];
              a[o - 1] = -129 & c;
              let l = k(a);
              L("pointHex.y", l, ep, t ? h : r.ORDER);
              let d = u(l * l),
                { isValid: g, value: f } = p(u(d - eg), u(s * d - n));
              if (!g) throw Error("Point.fromHex: invalid y coordinate");
              let y = (f & eg) === eg,
                m = (128 & c) != 0;
              if (!t && f === ep && m)
                throw Error("Point.fromHex: x=0 and x_0=1");
              return m !== y && (f = u(-f)), v.fromAffine({ x: f, y: l });
            }
            static fromPrivateKey(e) {
              return S(e).point;
            }
            toRawBytes() {
              let { x: e, y: t } = this.toAffine(),
                i = U(t, r.BYTES);
              return (i[i.length - 1] |= e & eg ? 128 : 0), i;
            }
            toHex() {
              return C(this.toRawBytes());
            }
          }
          (v.BASE = new v(i.Gx, i.Gy, eg, u(i.Gx * i.Gy))),
            (v.ZERO = new v(ep, eg, eg, ep));
          let { BASE: E, ZERO: _ } = v,
            x =
              ((t = 8 * c),
              {
                constTimeNegate: ea,
                hasPrecomputes: (e) => 1 !== ed(e),
                unsafeLadder(e, t, i = v.ZERO) {
                  let r = e;
                  for (; t > en; )
                    t & eo && (i = i.add(r)), (r = r.double()), (t >>= eo);
                  return i;
                },
                precomputeWindow(e, i) {
                  let { windows: r, windowSize: s } = el(i, t),
                    n = [],
                    o = e,
                    a = o;
                  for (let e = 0; e < r; e++) {
                    (a = o), n.push(a);
                    for (let e = 1; e < s; e++) (a = a.add(o)), n.push(a);
                    o = a.double();
                  }
                  return n;
                },
                wNAF(e, i, r) {
                  let { windows: s, windowSize: n } = el(e, t),
                    o = v.ZERO,
                    a = v.BASE,
                    c = BigInt(2 ** e - 1),
                    l = 2 ** e,
                    h = BigInt(e);
                  for (let e = 0; e < s; e++) {
                    let t = e * n,
                      s = Number(r & c);
                    (r >>= h), s > n && ((s -= l), (r += eo));
                    let u = t + Math.abs(s) - 1,
                      d = e % 2 != 0,
                      p = s < 0;
                    0 === s
                      ? (a = a.add(ea(d, i[t])))
                      : (o = o.add(ea(p, i[u])));
                  }
                  return { p: o, f: a };
                },
                wNAFUnsafe(e, i, r, s = v.ZERO) {
                  let { windows: n, windowSize: o } = el(e, t),
                    a = BigInt(2 ** e - 1),
                    c = 2 ** e,
                    l = BigInt(e);
                  for (let e = 0; e < n; e++) {
                    let t = e * o;
                    if (r === en) break;
                    let n = Number(r & a);
                    if (((r >>= l), n > o && ((n -= c), (r += eo)), 0 === n))
                      continue;
                    let h = i[t + Math.abs(n) - 1];
                    n < 0 && (h = h.negate()), (s = s.add(h));
                  }
                  return s;
                },
                getPrecomputes(e, t, i) {
                  let r = eh.get(t);
                  return (
                    r ||
                      ((r = this.precomputeWindow(t, e)),
                      1 !== e && eh.set(t, i(r))),
                    r
                  );
                },
                wNAFCached(e, t, i) {
                  let r = ed(e);
                  return this.wNAF(r, this.getPrecomputes(r, e, i), t);
                },
                wNAFCachedUnsafe(e, t, i, r) {
                  let s = ed(e);
                  return 1 === s
                    ? this.unsafeLadder(e, t, r)
                    : this.wNAFUnsafe(s, this.getPrecomputes(s, e, i), t, r);
                },
                setWindowSize(e, i) {
                  ec(i, t), eu.set(e, i), eh.delete(e);
                },
              });
          function S(e) {
            let t = r.BYTES;
            e = D("private key", e, t);
            let i = D("hashed private key", o(e), 2 * t),
              n = g(i.slice(0, t)),
              a = i.slice(t, 2 * t),
              c = Q(k(n), s),
              l = E.multiply(c),
              h = l.toRawBytes();
            return { head: n, prefix: a, scalar: c, point: l, pointBytes: h };
          }
          function A(e = new Uint8Array(), ...t) {
            return Q(k(o(f($(...t), D("context", e), !!n))), s);
          }
          return (
            E._setWindowSize(8),
            {
              CURVE: i,
              getPublicKey: function (e) {
                return S(e).pointBytes;
              },
              sign: function (e, t, i = {}) {
                (e = D("message", e)), n && (e = n(e));
                let { prefix: o, scalar: a, pointBytes: c } = S(t),
                  l = A(i.context, o, e),
                  h = E.multiply(l).toRawBytes(),
                  u = Q(l + A(i.context, h, c, e) * a, s);
                return (
                  L("signature.s", u, ep, s),
                  D("result", $(h, U(u, r.BYTES)), 2 * r.BYTES)
                );
              },
              verify: function (e, t, i, s = em) {
                let o,
                  a,
                  c,
                  { context: l, zip215: h } = s,
                  u = r.BYTES;
                (e = D("signature", e, 2 * u)),
                  (t = D("message", t)),
                  (i = D("publicKey", i, u)),
                  void 0 !== h && O("zip215", h),
                  n && (t = n(t));
                let d = k(e.slice(u, 2 * u));
                try {
                  (o = v.fromHex(i, h)),
                    (a = v.fromHex(e.slice(0, u), h)),
                    (c = E.multiplyUnsafe(d));
                } catch {
                  return !1;
                }
                if (!h && o.isSmallOrder()) return !1;
                let p = A(l, a.toRawBytes(), o.toRawBytes(), t);
                return a
                  .add(o.multiplyUnsafe(p))
                  .subtract(c)
                  .clearCofactor()
                  .equals(v.ZERO);
              },
              ExtendedPoint: v,
              utils: {
                getExtendedPublicKey: S,
                randomPrivateKey: () => a(r.BYTES),
                precompute: (e = 8, t = v.BASE) => (
                  t._setWindowSize(e), t.multiply(BigInt(3)), t
                ),
              },
            }
          );
        })({
          a: BigInt(-1),
          d: BigInt(
            "37095705934669439343138083508754565189542113879843219016388785533085940283555"
          ),
          Fp: e_,
          n: BigInt(
            "7237005577332262213973186563042994240857116359379907606001950938285454250989"
          ),
          h: eP,
          Gx: BigInt(
            "15112221349535400772501151409588531511454012693041857206046113283949847762202"
          ),
          Gy: BigInt(
            "46316835694926478169428394003475163141307993866256225615783033603165251855960"
          ),
          hash: E,
          randomBytes: u,
          adjustScalarBytes: function (e) {
            return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
          },
          uvRatio: function (e, t) {
            let i = Q(t * t * t, eb),
              r = (function (e) {
                let t = BigInt(10),
                  i = BigInt(20),
                  r = BigInt(40),
                  s = BigInt(80),
                  n = (((e * e) % eb) * e) % eb,
                  o = (X(n, eE, eb) * n) % eb,
                  a = (X(o, ev, eb) * e) % eb,
                  c = (X(a, eI, eb) * a) % eb,
                  l = (X(c, t, eb) * c) % eb,
                  h = (X(l, i, eb) * l) % eb,
                  u = (X(h, r, eb) * h) % eb,
                  d = (X(u, s, eb) * u) % eb,
                  p = (X(d, s, eb) * u) % eb,
                  g = (X(p, t, eb) * c) % eb;
                return { pow_p_5_8: (X(g, eE, eb) * e) % eb, b2: n };
              })(e * Q(i * i * t, eb)).pow_p_5_8,
              s = Q(e * i * r, eb),
              n = Q(t * s * s, eb),
              o = s,
              a = Q(s * ew, eb),
              c = n === e,
              l = n === Q(-e, eb),
              h = n === Q(-e * ew, eb);
            return (
              c && (s = o),
              (l || h) && (s = a),
              et(s, eb) && (s = Q(-s, eb)),
              { isValid: c || l, value: s }
            );
          },
        }),
        eS = "base64url",
        eO = "utf8",
        eA = "utf8",
        eC = "base58btc";
      function eR(e) {
        return null != globalThis.Buffer
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          : e;
      }
      function eN(e = 0) {
        return null != globalThis.Buffer &&
          null != globalThis.Buffer.allocUnsafe
          ? eR(globalThis.Buffer.allocUnsafe(e))
          : new Uint8Array(e);
      }
      function eT(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let i = eN(t),
          r = 0;
        for (let t of e) i.set(t, r), (r += t.length);
        return eR(i);
      }
      var eq = function (e, t) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var i = new Uint8Array(256), r = 0; r < i.length; r++) i[r] = 255;
        for (var s = 0; s < e.length; s++) {
          var n = e.charAt(s),
            o = n.charCodeAt(0);
          if (255 !== i[o]) throw TypeError(n + " is ambiguous");
          i[o] = s;
        }
        var a = e.length,
          c = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          h = Math.log(256) / Math.log(a);
        function u(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (" " !== e[0]) {
            for (var r = 0, s = 0; e[t] === c; ) r++, t++;
            for (
              var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n);
              e[t];

            ) {
              var h = i[e.charCodeAt(t)];
              if (255 === h) return;
              for (
                var u = 0, d = n - 1;
                (0 !== h || u < s) && -1 !== d;
                d--, u++
              )
                (h += (a * o[d]) >>> 0),
                  (o[d] = h % 256 >>> 0),
                  (h = (h / 256) >>> 0);
              if (0 !== h) throw Error("Non-zero carry");
              (s = u), t++;
            }
            if (" " !== e[t]) {
              for (var p = n - s; p !== n && 0 === o[p]; ) p++;
              for (var g = new Uint8Array(r + (n - p)), f = r; p !== n; )
                g[f++] = o[p++];
              return g;
            }
          }
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === t.length) return "";
            for (var i = 0, r = 0, s = 0, n = t.length; s !== n && 0 === t[s]; )
              s++, i++;
            for (
              var o = ((n - s) * h + 1) >>> 0, l = new Uint8Array(o);
              s !== n;

            ) {
              for (
                var u = t[s], d = 0, p = o - 1;
                (0 !== u || d < r) && -1 !== p;
                p--, d++
              )
                (u += (256 * l[p]) >>> 0),
                  (l[p] = u % a >>> 0),
                  (u = (u / a) >>> 0);
              if (0 !== u) throw Error("Non-zero carry");
              (r = d), s++;
            }
            for (var g = o - r; g !== o && 0 === l[g]; ) g++;
            for (var f = c.repeat(i); g < o; ++g) f += e.charAt(l[g]);
            return f;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var i = u(e);
            if (i) return i;
            throw Error(`Non-${t} character`);
          },
        };
      };
      let ek = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        ej = (e) => new TextEncoder().encode(e),
        eU = (e) => new TextDecoder().decode(e);
      class eD {
        constructor(e, t, i) {
          (this.name = e), (this.prefix = t), (this.baseEncode = i);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class e$ {
        constructor(e, t, i) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return eL(this, e);
        }
      }
      class eB {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return eL(this, e);
        }
        decode(e) {
          let t = e[0],
            i = this.decoders[t];
          if (i) return i.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      let eL = (e, t) =>
        new eB({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class eM {
        constructor(e, t, i, r) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = i),
            (this.baseDecode = r),
            (this.encoder = new eD(e, t, i)),
            (this.decoder = new e$(e, t, r));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let ez = ({ name: e, prefix: t, encode: i, decode: r }) =>
          new eM(e, t, i, r),
        eH = ({ prefix: e, name: t, alphabet: i }) => {
          let { encode: r, decode: s } = eq(i, t);
          return ez({ prefix: e, name: t, encode: r, decode: (e) => ek(s(e)) });
        },
        eK = (e, t, i, r) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; "=" === e[n - 1]; ) --n;
          let o = new Uint8Array(((n * i) / 8) | 0),
            a = 0,
            c = 0,
            l = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${r} character`);
            (c = (c << i) | n),
              (a += i) >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
          }
          if (a >= i || 255 & (c << (8 - a)))
            throw SyntaxError("Unexpected end of data");
          return o;
        },
        eV = (e, t, i) => {
          let r = "=" === t[t.length - 1],
            s = (1 << i) - 1,
            n = "",
            o = 0,
            a = 0;
          for (let r = 0; r < e.length; ++r)
            for (a = (a << 8) | e[r], o += 8; o > i; )
              (o -= i), (n += t[s & (a >> o)]);
          if ((o && (n += t[s & (a << (i - o))]), r))
            for (; (n.length * i) & 7; ) n += "=";
          return n;
        },
        eF = ({ name: e, prefix: t, bitsPerChar: i, alphabet: r }) =>
          ez({
            prefix: t,
            name: e,
            encode: (e) => eV(e, r, i),
            decode: (t) => eK(t, r, i, e),
          });
      var eW = Object.freeze({
          __proto__: null,
          identity: ez({
            prefix: "\0",
            name: "identity",
            encode: (e) => eU(e),
            decode: (e) => ej(e),
          }),
        }),
        eG = Object.freeze({
          __proto__: null,
          base2: eF({
            prefix: "0",
            name: "base2",
            alphabet: "01",
            bitsPerChar: 1,
          }),
        }),
        eJ = Object.freeze({
          __proto__: null,
          base8: eF({
            prefix: "7",
            name: "base8",
            alphabet: "01234567",
            bitsPerChar: 3,
          }),
        }),
        eZ = Object.freeze({
          __proto__: null,
          base10: eH({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        }),
        eY = Object.freeze({
          __proto__: null,
          base16: eF({
            prefix: "f",
            name: "base16",
            alphabet: "0123456789abcdef",
            bitsPerChar: 4,
          }),
          base16upper: eF({
            prefix: "F",
            name: "base16upper",
            alphabet: "0123456789ABCDEF",
            bitsPerChar: 4,
          }),
        });
      let eQ = eF({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        eX = eF({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        e0 = eF({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        e1 = eF({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        e2 = eF({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        e8 = eF({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        e5 = eF({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        });
      var e3 = Object.freeze({
          __proto__: null,
          base32: eQ,
          base32upper: eX,
          base32pad: e0,
          base32padupper: e1,
          base32hex: e2,
          base32hexupper: e8,
          base32hexpad: e5,
          base32hexpadupper: eF({
            prefix: "T",
            name: "base32hexpadupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
            bitsPerChar: 5,
          }),
          base32z: eF({
            prefix: "h",
            name: "base32z",
            alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
            bitsPerChar: 5,
          }),
        }),
        e6 = Object.freeze({
          __proto__: null,
          base36: eH({
            prefix: "k",
            name: "base36",
            alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
          }),
          base36upper: eH({
            prefix: "K",
            name: "base36upper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          }),
        }),
        e4 = Object.freeze({
          __proto__: null,
          base58btc: eH({
            name: "base58btc",
            prefix: "z",
            alphabet:
              "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
          }),
          base58flickr: eH({
            name: "base58flickr",
            prefix: "Z",
            alphabet:
              "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
          }),
        });
      let e9 = eF({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        e7 = eF({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        });
      var te = Object.freeze({
        __proto__: null,
        base64: e9,
        base64pad: e7,
        base64url: eF({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        base64urlpad: eF({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
      });
      let tt = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        ti = tt.reduce((e, t, i) => ((e[i] = t), e), []),
        tr = tt.reduce((e, t, i) => ((e[t.codePointAt(0)] = i), e), []);
      var ts = Object.freeze({
        __proto__: null,
        base256emoji: ez({
          prefix: "\uD83D\uDE80",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce((e, t) => (e += ti[t]), "");
          },
          decode: function (e) {
            let t = [];
            for (let i of e) {
              let e = tr[i.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${i}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        }),
      });
      function tn(e, t, i) {
        (t = t || []), (i = i || 0);
        for (var r = i; e >= 0x80000000; )
          (t[i++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[i++] = (255 & e) | 128), (e >>>= 7);
        return (t[i] = 0 | e), (tn.bytes = i - r + 1), t;
      }
      function to(e, t) {
        var i,
          r = 0,
          t = t || 0,
          s = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o)
            throw ((to.bytes = 0), RangeError("Could not decode varint"));
          (i = e[n++]),
            (r += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s)),
            (s += 7);
        } while (i >= 128);
        return (to.bytes = n - t), r;
      }
      var ta = {
        encode: tn,
        encodingLength: function (e) {
          return e < 128
            ? 1
            : e < 16384
            ? 2
            : e < 2097152
            ? 3
            : e < 0x10000000
            ? 4
            : e < 0x800000000
            ? 5
            : e < 0x40000000000
            ? 6
            : e < 0x2000000000000
            ? 7
            : e < 0x100000000000000
            ? 8
            : e < 0x8000000000000000
            ? 9
            : 10;
        },
      };
      let tc = (e, t, i = 0) => (ta.encode(e, t, i), t),
        tl = (e) => ta.encodingLength(e),
        th = (e, t) => {
          let i = t.byteLength,
            r = tl(e),
            s = r + tl(i),
            n = new Uint8Array(s + i);
          return tc(e, n, 0), tc(i, n, r), n.set(t, s), new tu(e, i, t, n);
        };
      class tu {
        constructor(e, t, i, r) {
          (this.code = e), (this.size = t), (this.digest = i), (this.bytes = r);
        }
      }
      let td = ({ name: e, code: t, encode: i }) => new tp(e, t, i);
      class tp {
        constructor(e, t, i) {
          (this.name = e), (this.code = t), (this.encode = i);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array
              ? th(this.code, t)
              : t.then((e) => th(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      let tg = (e) => async (t) =>
        new Uint8Array(await crypto.subtle.digest(e, t));
      var tf = Object.freeze({
          __proto__: null,
          sha256: td({ name: "sha2-256", code: 18, encode: tg("SHA-256") }),
          sha512: td({ name: "sha2-512", code: 19, encode: tg("SHA-512") }),
        }),
        ty = Object.freeze({
          __proto__: null,
          identity: {
            code: 0,
            name: "identity",
            encode: ek,
            digest: (e) => th(0, ek(e)),
          },
        });
      new TextEncoder(), new TextDecoder();
      let tm = {
        ...eW,
        ...eG,
        ...eJ,
        ...eZ,
        ...eY,
        ...e3,
        ...e6,
        ...e4,
        ...te,
        ...ts,
      };
      function tb(e, t, i, r) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: i },
          decoder: { decode: r },
        };
      }
      ({ ...tf, ...ty });
      let tw = tb(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        tv = tb(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
            return t;
          },
          (e) => {
            let t = eN((e = e.substring(1)).length);
            for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
            return t;
          }
        ),
        tE = {
          utf8: tw,
          "utf-8": tw,
          hex: tm.base16,
          latin1: tv,
          ascii: tv,
          binary: tv,
          ...tm,
        };
      function tI(e, t = "utf8") {
        let i = tE[t];
        if (!i) throw Error(`Unsupported encoding "${t}"`);
        return ("utf8" === t || "utf-8" === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(
              e.buffer,
              e.byteOffset,
              e.byteLength
            ).toString("utf8")
          : i.encoder.encode(e).substring(1);
      }
      function tP(e, t = "utf8") {
        let i = tE[t];
        if (!i) throw Error(`Unsupported encoding "${t}"`);
        return ("utf8" === t || "utf-8" === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? eR(globalThis.Buffer.from(e, "utf-8"))
          : i.decoder.decode(`${i.prefix}${e}`);
      }
      function t_(e) {
        return (0, s.j)(tI(tP(e, eS), eO));
      }
      function tx(e) {
        return tI(tP((0, s.h)(e), eO), eS);
      }
      function tS(e) {
        return ["did", "key", "z" + tI(eT([tP("K36", eC), e]), eC)].join(":");
      }
      function tO(e) {
        let t = e.split("."),
          i = t_(t[0]),
          r = t_(t[1]);
        return {
          header: i,
          payload: r,
          signature: tP(t[2], eS),
          data: tP(t.slice(0, 2).join("."), eA),
        };
      }
      function tA(e = u(32)) {
        let t = ex.getPublicKey(e);
        return { secretKey: eT([e, t]), publicKey: t };
      }
      async function tC(e, t, i, s, n = (0, r.fromMiliseconds)(Date.now())) {
        let o = { alg: "EdDSA", typ: "JWT" },
          a = { iss: tS(s.publicKey), sub: e, aud: t, iat: n, exp: n + i },
          c = tP(
            [tx((l = { header: o, payload: a }).header), tx(l.payload)].join(
              "."
            ),
            eA
          );
        var l,
          h = {
            header: o,
            payload: a,
            signature: ex.sign(c, s.secretKey.slice(0, 32)),
          };
        return [tx(h.header), tx(h.payload), tI(h.signature, eS)].join(".");
      }
    },
    39631: (e, t, i) => {
      i.d(t, { EthereumProvider: () => hv });
      var r = i(40662),
        s = i.n(r),
        n = i(42221),
        o = i(89101),
        a = i(621),
        c = i(28094);
      let l = "2.23.2",
        h = {
          getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: i }) =>
            t ? `${e ?? "https://viem.sh"}${t}${i ? `#${i}` : ""}` : void 0,
          version: `viem@${l}`,
        };
      class u extends Error {
        constructor(e, t = {}) {
          let i =
              t.cause instanceof u
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            r = (t.cause instanceof u && t.cause.docsPath) || t.docsPath,
            s = h.getDocsUrl?.({ ...t, docsPath: r });
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(s ? [`Docs: ${s}`] : []),
              ...(i ? [`Details: ${i}`] : []),
              ...(h.version ? [`Version: ${h.version}`] : []),
            ].join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            (this.details = i),
            (this.docsPath = r),
            (this.metaMessages = t.metaMessages),
            (this.name = t.name ?? this.name),
            (this.shortMessage = e),
            (this.version = l);
        }
        walk(e) {
          return (function e(t, i) {
            return i?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && void 0 !== t.cause
              ? e(t.cause, i)
              : i
              ? null
              : t;
          })(this, e);
        }
      }
      function d(e, { strict: t = !0 } = {}) {
        return (
          !!e &&
          "string" == typeof e &&
          (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      }
      class p extends u {
        constructor({ size: e, targetSize: t, type: i }) {
          super(
            `${i.charAt(0).toUpperCase()}${i
              .slice(1)
              .toLowerCase()} size (${e}) exceeds padding size (${t}).`,
            { name: "SizeExceedsPaddingSizeError" }
          );
        }
      }
      function g(e, { dir: t, size: i = 32 } = {}) {
        return "string" == typeof e
          ? (function (e, { dir: t, size: i = 32 } = {}) {
              if (null === i) return e;
              let r = e.replace("0x", "");
              if (r.length > 2 * i)
                throw new p({
                  size: Math.ceil(r.length / 2),
                  targetSize: i,
                  type: "hex",
                });
              return `0x${r["right" === t ? "padEnd" : "padStart"](
                2 * i,
                "0"
              )}`;
            })(e, { dir: t, size: i })
          : (function (e, { dir: t, size: i = 32 } = {}) {
              if (null === i) return e;
              if (e.length > i)
                throw new p({ size: e.length, targetSize: i, type: "bytes" });
              let r = new Uint8Array(i);
              for (let s = 0; s < i; s++) {
                let n = "right" === t;
                r[n ? s : i - s - 1] = e[n ? s : e.length - s - 1];
              }
              return r;
            })(e, { dir: t, size: i });
      }
      class f extends u {
        constructor({ max: e, min: t, signed: i, size: r, value: s }) {
          super(
            `Number "${s}" is not in safe ${
              r ? `${8 * r}-bit ${i ? "signed" : "unsigned"} ` : ""
            }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
            { name: "IntegerOutOfRangeError" }
          );
        }
      }
      class y extends u {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
            name: "SizeOverflowError",
          });
        }
      }
      function m(e) {
        return d(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
      }
      function b(e, { size: t }) {
        if (m(e) > t) throw new y({ givenSize: m(e), maxSize: t });
      }
      function w(e, t = {}) {
        let { signed: i } = t;
        t.size && b(e, { size: t.size });
        let r = BigInt(e);
        if (!i) return r;
        let s = (e.length - 2) / 2;
        return r <= (1n << (8n * BigInt(s) - 1n)) - 1n
          ? r
          : r - BigInt(`0x${"f".padStart(2 * s, "f")}`) - 1n;
      }
      let v = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function E(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? P(e, t)
          : "string" == typeof e
          ? (function (e, t = {}) {
              return I(_.encode(e), t);
            })(e, t)
          : "boolean" == typeof e
          ? (function (e, t = {}) {
              let i = `0x${Number(e)}`;
              return "number" == typeof t.size
                ? (b(i, { size: t.size }), g(i, { size: t.size }))
                : i;
            })(e, t)
          : I(e, t);
      }
      function I(e, t = {}) {
        let i = "";
        for (let t = 0; t < e.length; t++) i += v[e[t]];
        let r = `0x${i}`;
        return "number" == typeof t.size
          ? (b(r, { size: t.size }), g(r, { dir: "right", size: t.size }))
          : r;
      }
      function P(e, t = {}) {
        let i,
          { signed: r, size: s } = t,
          n = BigInt(e);
        s
          ? (i = r
              ? (1n << (8n * BigInt(s) - 1n)) - 1n
              : 2n ** (8n * BigInt(s)) - 1n)
          : "number" == typeof e && (i = BigInt(Number.MAX_SAFE_INTEGER));
        let o = "bigint" == typeof i && r ? -i - 1n : 0;
        if ((i && n > i) || n < o) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new f({
            max: i ? `${i}${t}` : void 0,
            min: `${o}${t}`,
            signed: r,
            size: s,
            value: `${e}${t}`,
          });
        }
        let a = `0x${(r && n < 0
          ? (1n << BigInt(8 * s)) + BigInt(n)
          : n
        ).toString(16)}`;
        return s ? g(a, { size: s }) : a;
      }
      let _ = new TextEncoder(),
        x = new TextEncoder(),
        S = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function O(e) {
        return e >= S.zero && e <= S.nine
          ? e - S.zero
          : e >= S.A && e <= S.F
          ? e - (S.A - 10)
          : e >= S.a && e <= S.f
          ? e - (S.a - 10)
          : void 0;
      }
      function A(e, t = {}) {
        let i = e;
        t.size &&
          (b(i, { size: t.size }), (i = g(i, { dir: "right", size: t.size })));
        let r = i.slice(2);
        r.length % 2 && (r = `0${r}`);
        let s = r.length / 2,
          n = new Uint8Array(s);
        for (let e = 0, t = 0; e < s; e++) {
          let i = O(r.charCodeAt(t++)),
            s = O(r.charCodeAt(t++));
          if (void 0 === i || void 0 === s)
            throw new u(
              `Invalid byte sequence ("${r[t - 2]}${r[t - 1]}" in "${r}").`
            );
          n[e] = 16 * i + s;
        }
        return n;
      }
      function C(e, t = {}) {
        let i = x.encode(e);
        return "number" == typeof t.size
          ? (b(i, { size: t.size }), g(i, { dir: "right", size: t.size }))
          : i;
      }
      var R = i(61947);
      let N = BigInt(0x100000000 - 1),
        T = BigInt(32),
        q = (e, t, i) => (e << i) | (t >>> (32 - i)),
        k = (e, t, i) => (t << i) | (e >>> (32 - i)),
        j = (e, t, i) => (t << (i - 32)) | (e >>> (64 - i)),
        U = (e, t, i) => (e << (i - 32)) | (t >>> (64 - i));
      var D = i(28185);
      let $ = [],
        B = [],
        L = [],
        M = BigInt(0),
        z = BigInt(1),
        H = BigInt(2),
        K = BigInt(7),
        V = BigInt(256),
        F = BigInt(113);
      for (let e = 0, t = z, i = 1, r = 0; e < 24; e++) {
        ([i, r] = [r, (2 * i + 3 * r) % 5]),
          $.push(2 * (5 * r + i)),
          B.push((((e + 1) * (e + 2)) / 2) % 64);
        let s = M;
        for (let e = 0; e < 7; e++)
          (t = ((t << z) ^ ((t >> K) * F)) % V) & H &&
            (s ^= z << ((z << BigInt(e)) - z));
        L.push(s);
      }
      let [W, G] = (function (e, t = !1) {
          let i = new Uint32Array(e.length),
            r = new Uint32Array(e.length);
          for (let s = 0; s < e.length; s++) {
            let { h: n, l: o } = (function (e, t = !1) {
              return t
                ? { h: Number(e & N), l: Number((e >> T) & N) }
                : { h: 0 | Number((e >> T) & N), l: 0 | Number(e & N) };
            })(e[s], t);
            [i[s], r[s]] = [n, o];
          }
          return [i, r];
        })(L, !0),
        J = (e, t, i) => (i > 32 ? j(e, t, i) : q(e, t, i)),
        Z = (e, t, i) => (i > 32 ? U(e, t, i) : k(e, t, i));
      class Y extends D.Vw {
        constructor(e, t, i, r = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = i),
            (this.enableXOF = r),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, R.Fe)(i),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, D.DH)(this.state));
        }
        keccak() {
          D.qv || (0, D.Fc)(this.state32),
            (function (e, t = 24) {
              let i = new Uint32Array(10);
              for (let r = 24 - t; r < 24; r++) {
                for (let t = 0; t < 10; t++)
                  i[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let r = (t + 8) % 10,
                    s = (t + 2) % 10,
                    n = i[s],
                    o = i[s + 1],
                    a = J(n, o, 1) ^ i[r],
                    c = Z(n, o, 1) ^ i[r + 1];
                  for (let i = 0; i < 50; i += 10)
                    (e[t + i] ^= a), (e[t + i + 1] ^= c);
                }
                let t = e[2],
                  s = e[3];
                for (let i = 0; i < 24; i++) {
                  let r = B[i],
                    n = J(t, s, r),
                    o = Z(t, s, r),
                    a = $[i];
                  (t = e[a]), (s = e[a + 1]), (e[a] = n), (e[a + 1] = o);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let r = 0; r < 10; r++) i[r] = e[t + r];
                  for (let r = 0; r < 10; r++)
                    e[t + r] ^= ~i[(r + 2) % 10] & i[(r + 4) % 10];
                }
                (e[0] ^= W[r]), (e[1] ^= G[r]);
              }
              i.fill(0);
            })(this.state32, this.rounds),
            D.qv || (0, D.Fc)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, R.CC)(this);
          let { blockLen: t, state: i } = this,
            r = (e = (0, D.ZJ)(e)).length;
          for (let s = 0; s < r; ) {
            let n = Math.min(t - this.pos, r - s);
            for (let t = 0; t < n; t++) i[this.pos++] ^= e[s++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: i, blockLen: r } = this;
          (e[i] ^= t),
            (128 & t) != 0 && i === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, R.CC)(this, !1), (0, R.DO)(e), this.finish();
          let t = this.state,
            { blockLen: i } = this;
          for (let r = 0, s = e.length; r < s; ) {
            this.posOut >= i && this.keccak();
            let n = Math.min(i - this.posOut, s - r);
            e.set(t.subarray(this.posOut, this.posOut + n), r),
              (this.posOut += n),
              (r += n);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, R.Fe)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, R.Ht)(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: i,
            outputLen: r,
            rounds: s,
            enableXOF: n,
          } = this;
          return (
            e || (e = new Y(t, i, r, n, s)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = s),
            (e.suffix = i),
            (e.outputLen = r),
            (e.enableXOF = n),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let Q = (0, D.ld)(() => new Y(136, 1, 32));
      function X(e, t) {
        let i = Q(
          d(e, { strict: !1 })
            ? (function (e, t = {}) {
                return "number" == typeof e || "bigint" == typeof e
                  ? A(P(e, t))
                  : "boolean" == typeof e
                  ? (function (e, t = {}) {
                      let i = new Uint8Array(1);
                      return ((i[0] = Number(e)), "number" == typeof t.size)
                        ? (b(i, { size: t.size }), g(i, { size: t.size }))
                        : i;
                    })(e, t)
                  : d(e)
                  ? A(e, t)
                  : C(e, t);
              })(e)
            : e
        );
        return "bytes" === (t || "hex") ? i : E(i);
      }
      class ee extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          let t = super.get(e);
          return (
            super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
          );
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            let e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
      let et = new ee(8192);
      async function ei({ hash: e, signature: t }) {
        let r = d(e) ? e : E(e),
          { secp256k1: s } = await i.e(1753).then(i.bind(i, 51753)),
          n = (() => {
            if ("object" == typeof t && "r" in t && "s" in t) {
              let { r: e, s: i, v: r, yParity: n } = t,
                o = er(Number(n ?? r));
              return new s.Signature(w(e), w(i)).addRecoveryBit(o);
            }
            let e = d(t) ? t : E(t),
              i = er(
                (function (e, t = {}) {
                  return Number(w(e, t));
                })(`0x${e.slice(130)}`)
              );
            return s.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(
              i
            );
          })()
            .recoverPublicKey(r.substring(2))
            .toHex(!1);
        return `0x${n}`;
      }
      function er(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error("Invalid yParityOrV value");
      }
      async function es({ hash: e, signature: t }) {
        var i = await ei({ hash: e, signature: t });
        let r = X(`0x${i.substring(4)}`).substring(26);
        return (function (e, t) {
          if (et.has(`${e}.${void 0}`)) return et.get(`${e}.${t}`);
          let i = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
            r = X(C(i), "bytes"),
            s = (t ? i.substring(`${t}0x`.length) : i).split("");
          for (let e = 0; e < 40; e += 2)
            r[e >> 1] >> 4 >= 8 && s[e] && (s[e] = s[e].toUpperCase()),
              (15 & r[e >> 1]) >= 8 &&
                s[e + 1] &&
                (s[e + 1] = s[e + 1].toUpperCase());
          let n = `0x${s.join("")}`;
          return et.set(`${e}.${t}`, n), n;
        })(`0x${r}`);
      }
      var en = i(42552),
        eo = i(30565),
        ea = i(31507),
        ec = i(10973),
        el = i(87358),
        eh = i(44134).Buffer;
      function eu(e) {
        let [t, i] = e.split(":");
        return { namespace: t, reference: i };
      }
      function ed(e) {
        let [t, i, r] = e.split(":");
        return { namespace: t, reference: i, address: r };
      }
      function ep(e, t = []) {
        let i = [];
        return (
          Object.keys(e).forEach((r) => {
            if (t.length && !t.includes(r)) return;
            let s = e[r];
            i.push(...s.accounts);
          }),
          i
        );
      }
      function eg(e, t) {
        return e.includes(":") ? [e] : t.chains || [];
      }
      var ef = Object.defineProperty,
        ey = Object.defineProperties,
        em = Object.getOwnPropertyDescriptors,
        eb = Object.getOwnPropertySymbols,
        ew = Object.prototype.hasOwnProperty,
        ev = Object.prototype.propertyIsEnumerable,
        eE = (e, t, i) =>
          t in e
            ? ef(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        eI = (e, t) => {
          for (var i in t || (t = {})) ew.call(t, i) && eE(e, i, t[i]);
          if (eb) for (var i of eb(t)) ev.call(t, i) && eE(e, i, t[i]);
          return e;
        },
        eP = (e, t) => ey(e, em(t));
      let e_ = {
        reactNative: "react-native",
        node: "node",
        browser: "browser",
        unknown: "unknown",
      };
      function ex() {
        return (
          "u" > typeof el &&
          "u" > typeof el.versions &&
          "u" > typeof el.versions.node
        );
      }
      function eS() {
        return (
          !(0, a.getDocument)() &&
          !!(0, a.getNavigator)() &&
          "ReactNative" === navigator.product
        );
      }
      function eO() {
        return !ex() && !!(0, a.getNavigator)() && !!(0, a.getDocument)();
      }
      function eA() {
        return eS()
          ? e_.reactNative
          : ex()
          ? e_.node
          : eO()
          ? e_.browser
          : e_.unknown;
      }
      function eC() {
        var e;
        try {
          return eS() &&
            "u" > typeof i.g &&
            "u" > typeof (null == i.g ? void 0 : i.g.Application)
            ? null == (e = i.g.Application)
              ? void 0
              : e.applicationId
            : void 0;
        } catch {
          return;
        }
      }
      function eR() {
        return (
          (0, c.g)() || { name: "", description: "", url: "", icons: [""] }
        );
      }
      function eN(e, t, r) {
        let s = (function () {
            if (
              eA() === e_.reactNative &&
              "u" > typeof i.g &&
              "u" > typeof (null == i.g ? void 0 : i.g.Platform)
            ) {
              let { OS: e, Version: t } = i.g.Platform;
              return [e, t].join("-");
            }
            let e = (0, n.o0)();
            if (null === e) return "unknown";
            let t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
            return "browser" === e.type
              ? [t, e.name, e.version].join("-")
              : [t, e.version].join("-");
          })(),
          o = (function () {
            var e;
            let t = eA();
            return t === e_.browser
              ? [
                  t,
                  (null == (e = (0, a.getLocation)()) ? void 0 : e.host) ||
                    "unknown",
                ].join(":")
              : t;
          })();
        return [[e, t].join("-"), ["js", r].join("-"), s, o].join("/");
      }
      function eT(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function eq(e) {
        return Object.fromEntries(e.entries());
      }
      function ek(e) {
        return new Map(Object.entries(e));
      }
      function ej(e = o.FIVE_MINUTES, t) {
        let i,
          r,
          s,
          n,
          a = (0, o.toMiliseconds)(e || o.FIVE_MINUTES);
        return {
          resolve: (e) => {
            s && i && (clearTimeout(s), i(e), (n = Promise.resolve(e)));
          },
          reject: (e) => {
            s && r && (clearTimeout(s), r(e));
          },
          done: () =>
            new Promise((e, o) => {
              if (n) return e(n);
              (s = setTimeout(() => {
                let e = Error(t);
                (n = Promise.reject(e)), o(e);
              }, a)),
                (i = e),
                (r = o);
            }),
        };
      }
      function eU(e, t, i) {
        return new Promise(async (r, s) => {
          let n = setTimeout(() => s(Error(i)), t);
          try {
            let t = await e;
            r(t);
          } catch (e) {
            s(e);
          }
          clearTimeout(n);
        });
      }
      function eD(e, t) {
        if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
        if ("topic" === e.toLowerCase()) {
          if ("string" != typeof t)
            throw Error(
              'Value must be "string" for expirer target type: topic'
            );
          return `topic:${t}`;
        }
        if ("id" === e.toLowerCase()) {
          if ("number" != typeof t)
            throw Error('Value must be "number" for expirer target type: id');
          return `id:${t}`;
        }
        throw Error(`Unknown expirer target type: ${e}`);
      }
      function e$(e) {
        let [t, i] = e.split(":"),
          r = { id: void 0, topic: void 0 };
        if ("topic" === t && "string" == typeof i) r.topic = i;
        else if ("id" === t && Number.isInteger(Number(i))) r.id = Number(i);
        else
          throw Error(
            `Invalid target, expected id:number or topic:string, got ${t}:${i}`
          );
        return r;
      }
      function eB(e, t) {
        return (0, o.fromMiliseconds)(
          (t || Date.now()) + (0, o.toMiliseconds)(e)
        );
      }
      function eL(e) {
        return Date.now() >= (0, o.toMiliseconds)(e);
      }
      function eM(e, t) {
        return `${e}${t ? `:${t}` : ""}`;
      }
      function ez(e = [], t = []) {
        return [...new Set([...e, ...t])];
      }
      async function eH({ id: e, topic: t, wcDeepLink: r }) {
        var s, n;
        try {
          if (!r) return;
          let o = "string" == typeof r ? JSON.parse(r) : r,
            c = o?.href;
          if ("string" != typeof c) return;
          let l = (function (e, t, i) {
              let r = `requestId=${t}&sessionTopic=${i}`;
              e.endsWith("/") && (e = e.slice(0, -1));
              let s = `${e}`;
              if (e.startsWith("https://t.me")) {
                let t = e.includes("?") ? "&startapp=" : "?startapp=";
                s = `${s}${t}${(function (e, t = !1) {
                  let i = eh.from(e).toString("base64");
                  return t ? i.replace(/[=]/g, "") : i;
                })(r, !0)}`;
              } else s = `${s}/wc?${r}`;
              return s;
            })(c, e, t),
            h = eA();
          if (h === e_.browser) {
            let e;
            if (!(null != (s = (0, a.getDocument)()) && s.hasFocus()))
              return void console.warn(
                "Document does not have focus, skipping deeplink."
              );
            (n = l),
              (e = "_self"),
              !(function () {
                try {
                  return window.self !== window.top;
                } catch {
                  return !1;
                }
              })()
                ? (("u" > typeof window &&
                    (window.TelegramWebviewProxy ||
                      window.Telegram ||
                      window.TelegramWebviewProxyProto)) ||
                    n.startsWith("https://") ||
                    n.startsWith("http://")) &&
                  (e = "_blank")
                : (e = "_top"),
              window.open(n, e, "noreferrer noopener");
          } else
            h === e_.reactNative &&
              "u" > typeof (null == i.g ? void 0 : i.g.Linking) &&
              (await i.g.Linking.openURL(l));
        } catch (e) {
          console.error(e);
        }
      }
      async function eK(e, t) {
        let i = "";
        try {
          if (eO() && (i = localStorage.getItem(t))) return i;
          i = await e.getItem(t);
        } catch (e) {
          console.error(e);
        }
        return i;
      }
      function eV(e, t) {
        if (!e.includes(t)) return null;
        let i = e.split(/([&,?,=])/),
          r = i.indexOf(t);
        return i[r + 2];
      }
      function eF() {
        return "u" > typeof crypto && null != crypto && crypto.randomUUID
          ? crypto.randomUUID()
          : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e) => {
              let t = (16 * Math.random()) | 0;
              return ("x" === e ? t : (3 & t) | 8).toString(16);
            });
      }
      function eW() {
        return "u" > typeof el && "true" === el.env.IS_VITEST;
      }
      function eG(e) {
        return eh.from(e, "base64").toString("utf-8");
      }
      function eJ(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function eZ(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function eY(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        eJ(e.outputLen), eJ(e.blockLen);
      }
      function eQ(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function eX(e, t) {
        eZ(e);
        let i = t.outputLen;
        if (e.length < i)
          throw Error(
            "digestInto() expects output buffer of length at least " + i
          );
      }
      let e0 = BigInt(0x100000000 - 1),
        e1 = BigInt(32),
        e2 = (e, t, i) => (e << i) | (t >>> (32 - i)),
        e8 = (e, t, i) => (t << i) | (e >>> (32 - i)),
        e5 = (e, t, i) => (t << (i - 32)) | (e >>> (64 - i)),
        e3 = (e, t, i) => (e << (i - 32)) | (t >>> (64 - i)),
        e6 =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0;
      function e4(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function e9(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let e7 = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      function te(e) {
        for (let i = 0; i < e.length; i++) {
          var t;
          e[i] =
            (((t = e[i]) << 24) & 0xff000000) |
            ((t << 8) & 0xff0000) |
            ((t >>> 8) & 65280) |
            ((t >>> 24) & 255);
        }
      }
      function tt(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          eZ(e),
          e
        );
      }
      class ti {
        clone() {
          return this._cloneInto();
        }
      }
      function tr(e) {
        let t = (t) => e().update(tt(t)).digest(),
          i = e();
        return (
          (t.outputLen = i.outputLen),
          (t.blockLen = i.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function ts(e = 32) {
        if (e6 && "function" == typeof e6.getRandomValues)
          return e6.getRandomValues(new Uint8Array(e));
        if (e6 && "function" == typeof e6.randomBytes) return e6.randomBytes(e);
        throw Error("crypto.getRandomValues must be defined");
      }
      let tn = [],
        to = [],
        ta = [],
        tc = BigInt(0),
        tl = BigInt(1),
        th = BigInt(2),
        tu = BigInt(7),
        td = BigInt(256),
        tp = BigInt(113);
      for (let e = 0, t = tl, i = 1, r = 0; e < 24; e++) {
        ([i, r] = [r, (2 * i + 3 * r) % 5]),
          tn.push(2 * (5 * r + i)),
          to.push((((e + 1) * (e + 2)) / 2) % 64);
        let s = tc;
        for (let e = 0; e < 7; e++)
          (t = ((t << tl) ^ ((t >> tu) * tp)) % td) & th &&
            (s ^= tl << ((tl << BigInt(e)) - tl));
        ta.push(s);
      }
      let [tg, tf] = (function (e, t = !1) {
          let i = new Uint32Array(e.length),
            r = new Uint32Array(e.length);
          for (let s = 0; s < e.length; s++) {
            let { h: n, l: o } = (function (e, t = !1) {
              return t
                ? { h: Number(e & e0), l: Number((e >> e1) & e0) }
                : { h: 0 | Number((e >> e1) & e0), l: 0 | Number(e & e0) };
            })(e[s], t);
            [i[s], r[s]] = [n, o];
          }
          return [i, r];
        })(ta, !0),
        ty = (e, t, i) => (i > 32 ? e5(e, t, i) : e2(e, t, i)),
        tm = (e, t, i) => (i > 32 ? e3(e, t, i) : e8(e, t, i));
      class tb extends ti {
        constructor(e, t, i, r = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = i),
            (this.enableXOF = r),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            eJ(i),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (function (e) {
              return new Uint32Array(
                e.buffer,
                e.byteOffset,
                Math.floor(e.byteLength / 4)
              );
            })(this.state));
        }
        keccak() {
          e7 || te(this.state32),
            (function (e, t = 24) {
              let i = new Uint32Array(10);
              for (let r = 24 - t; r < 24; r++) {
                for (let t = 0; t < 10; t++)
                  i[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let r = (t + 8) % 10,
                    s = (t + 2) % 10,
                    n = i[s],
                    o = i[s + 1],
                    a = ty(n, o, 1) ^ i[r],
                    c = tm(n, o, 1) ^ i[r + 1];
                  for (let i = 0; i < 50; i += 10)
                    (e[t + i] ^= a), (e[t + i + 1] ^= c);
                }
                let t = e[2],
                  s = e[3];
                for (let i = 0; i < 24; i++) {
                  let r = to[i],
                    n = ty(t, s, r),
                    o = tm(t, s, r),
                    a = tn[i];
                  (t = e[a]), (s = e[a + 1]), (e[a] = n), (e[a + 1] = o);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let r = 0; r < 10; r++) i[r] = e[t + r];
                  for (let r = 0; r < 10; r++)
                    e[t + r] ^= ~i[(r + 2) % 10] & i[(r + 4) % 10];
                }
                (e[0] ^= tg[r]), (e[1] ^= tf[r]);
              }
              i.fill(0);
            })(this.state32, this.rounds),
            e7 || te(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          eQ(this);
          let { blockLen: t, state: i } = this,
            r = (e = tt(e)).length;
          for (let s = 0; s < r; ) {
            let n = Math.min(t - this.pos, r - s);
            for (let t = 0; t < n; t++) i[this.pos++] ^= e[s++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: i, blockLen: r } = this;
          (e[i] ^= t),
            (128 & t) != 0 && i === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          eQ(this, !1), eZ(e), this.finish();
          let t = this.state,
            { blockLen: i } = this;
          for (let r = 0, s = e.length; r < s; ) {
            this.posOut >= i && this.keccak();
            let n = Math.min(i - this.posOut, s - r);
            e.set(t.subarray(this.posOut, this.posOut + n), r),
              (this.posOut += n),
              (r += n);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return eJ(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if ((eX(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: i,
            outputLen: r,
            rounds: s,
            enableXOF: n,
          } = this;
          return (
            e || (e = new tb(t, i, r, n, s)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = s),
            (e.suffix = i),
            (e.outputLen = r),
            (e.enableXOF = n),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let tw = tr(() => new tb(136, 1, 32));
      function tv(e) {
        let t = `Ethereum Signed Message:
${e.length}`,
          i = new TextEncoder().encode(t + e);
        return "0x" + eh.from(tw(i)).toString("hex");
      }
      async function tE(e, t, i, r, s, n) {
        switch (i.t) {
          case "eip191":
            return await tI(e, t, i.s);
          case "eip1271":
            return await tP(e, t, i.s, r, s, n);
          default:
            throw Error(
              `verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${i.t}`
            );
        }
      }
      async function tI(e, t, i) {
        return (
          (await es({ hash: tv(t), signature: i })).toLowerCase() ===
          e.toLowerCase()
        );
      }
      async function tP(e, t, i, r, s, n) {
        let o = eu(r);
        if (!o.namespace || !o.reference)
          throw Error(
            `isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r}`
          );
        try {
          let o = "0x1626ba7e",
            a = i.substring(2),
            c = tv(t).substring(2),
            l =
              o +
              c +
              "00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041" +
              a,
            h = await fetch(
              `${
                n || "https://rpc.walletconnect.org/v1"
              }/?chainId=${r}&projectId=${s}`,
              {
                method: "POST",
                body: JSON.stringify({
                  id: Date.now() + Math.floor(1e3 * Math.random()),
                  jsonrpc: "2.0",
                  method: "eth_call",
                  params: [{ to: e, data: l }, "latest"],
                }),
              }
            ),
            { result: u } = await h.json();
          return !!u && u.slice(0, o.length).toLowerCase() === o.toLowerCase();
        } catch (e) {
          return console.error("isValidEip1271Signature: ", e), !1;
        }
      }
      var t_ = Object.defineProperty,
        tx = Object.defineProperties,
        tS = Object.getOwnPropertyDescriptors,
        tO = Object.getOwnPropertySymbols,
        tA = Object.prototype.hasOwnProperty,
        tC = Object.prototype.propertyIsEnumerable,
        tR = (e, t, i) =>
          t in e
            ? t_(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        tN = (e, t) => {
          for (var i in t || (t = {})) tA.call(t, i) && tR(e, i, t[i]);
          if (tO) for (var i of tO(t)) tC.call(t, i) && tR(e, i, t[i]);
          return e;
        },
        tT = (e, t) => tx(e, tS(t));
      let tq = (e) => e?.split(":"),
        tk = (e) => {
          let t = e && tq(e);
          if (t) return e.includes("did:pkh:") ? t[3] : t[1];
        },
        tj = (e) => {
          let t = e && tq(e);
          if (t) return t[2] + ":" + t[3];
        },
        tU = (e) => {
          let t = e && tq(e);
          if (t) return t.pop();
        };
      async function tD(e) {
        let { cacao: t, projectId: i } = e,
          { s: r, p: s } = t,
          n = t$(s, s.iss),
          o = tU(s.iss);
        return await tE(o, n, r, tj(s.iss), i);
      }
      let t$ = (e, t) => {
        let i = `${e.domain} wants you to sign in with your Ethereum account:`,
          r = tU(t);
        if (!e.aud && !e.uri)
          throw Error(
            "Either `aud` or `uri` is required to construct the message"
          );
        let s = e.statement || void 0,
          n = `URI: ${e.aud || e.uri}`,
          o = `Version: ${e.version}`,
          a = `Chain ID: ${tk(t)}`,
          c = `Nonce: ${e.nonce}`,
          l = `Issued At: ${e.iat}`,
          h = e.exp ? `Expiration Time: ${e.exp}` : void 0,
          u = e.nbf ? `Not Before: ${e.nbf}` : void 0,
          d = e.requestId ? `Request ID: ${e.requestId}` : void 0,
          p = e.resources
            ? `Resources:${e.resources
                .map(
                  (e) => `
- ${e}`
                )
                .join("")}`
            : void 0,
          g = tK(e.resources);
        return (
          g &&
            (s = (function (e = "", t) {
              tB(t);
              let i =
                "I further authorize the stated URI to perform the following actions on my behalf: ";
              if (e.includes(i)) return e;
              let r = [],
                s = 0;
              Object.keys(t.att).forEach((e) => {
                let i = Object.keys(t.att[e]).map((e) => ({
                  ability: e.split("/")[0],
                  action: e.split("/")[1],
                }));
                i.sort((e, t) => e.action.localeCompare(t.action));
                let n = {};
                i.forEach((e) => {
                  n[e.ability] || (n[e.ability] = []),
                    n[e.ability].push(e.action);
                });
                let o = Object.keys(n).map(
                  (t) => (
                    s++, `(${s}) '${t}': '${n[t].join("', '")}' for '${e}'.`
                  )
                );
                r.push(o.join(", ").replace(".,", "."));
              });
              let n = r.join(" "),
                o = `${i}${n}`;
              return `${e ? e + " " : ""}${o}`;
            })(s, tM(g))),
          [i, r, "", s, "", n, o, a, c, l, h, u, d, p].filter((e) => null != e)
            .join(`
`)
        );
      };
      function tB(e) {
        if (!e) throw Error("No recap provided, value is undefined");
        if (!e.att) throw Error("No `att` property found");
        let t = Object.keys(e.att);
        if (!(null != t && t.length))
          throw Error("No resources found in `att` property");
        t.forEach((t) => {
          let i = e.att[t];
          if (Array.isArray(i) || "object" != typeof i)
            throw Error(`Resource must be an object: ${t}`);
          if (!Object.keys(i).length)
            throw Error(`Resource object is empty: ${t}`);
          Object.keys(i).forEach((e) => {
            let t = i[e];
            if (!Array.isArray(t))
              throw Error(
                `Ability limits ${e} must be an array of objects, found: ${t}`
              );
            if (!t.length)
              throw Error(
                `Value of ${e} is empty array, must be an array with objects`
              );
            t.forEach((t) => {
              if ("object" != typeof t)
                throw Error(
                  `Ability limits (${e}) must be an array of objects, found: ${t}`
                );
            });
          });
        });
      }
      function tL(e) {
        return (
          tB(e),
          `urn:recap:${eh
            .from(JSON.stringify(e))
            .toString("base64")
            .replace(/=/g, "")}`
        );
      }
      function tM(e) {
        var t;
        let i =
          ((t = e.replace("urn:recap:", "")),
          JSON.parse(eh.from(t, "base64").toString("utf-8")));
        return tB(i), i;
      }
      function tz(e) {
        var t;
        let i = tM(e);
        tB(i);
        let r = null == (t = i.att) ? void 0 : t.eip155;
        return r ? Object.keys(r).map((e) => e.split("/")[1]) : [];
      }
      function tH(e) {
        let t = tM(e);
        tB(t);
        let i = [];
        return (
          Object.values(t.att).forEach((e) => {
            Object.values(e).forEach((e) => {
              var t;
              null != (t = e?.[0]) && t.chains && i.push(e[0].chains);
            });
          }),
          [...new Set(i.flat())]
        );
      }
      function tK(e) {
        var t;
        if (!e) return;
        let i = e?.[e.length - 1];
        return (t = i) && t.includes("urn:recap:") ? i : void 0;
      }
      function tV(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function tF(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function tW(e, ...t) {
        if (!tF(e)) throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function tG(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function tJ(e) {
        if ("boolean" != typeof e) throw Error(`boolean expected, not ${e}`);
      }
      let tZ = (e) =>
          new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        tY = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      if (68 !== new Uint8Array(new Uint32Array([0x11223344]).buffer)[0])
        throw Error("Non little-endian hardware is not supported");
      function tQ(e) {
        if ("string" == typeof e)
          e = (function (e) {
            if ("string" != typeof e) throw Error("string expected");
            return new Uint8Array(new TextEncoder().encode(e));
          })(e);
        else if (tF(e)) e = t1(e);
        else throw Error("Uint8Array expected, got " + typeof e);
        return e;
      }
      function tX(e, t, i = !0) {
        if (void 0 === t) return new Uint8Array(e);
        if (t.length !== e)
          throw Error(
            "invalid output length, expected " + e + ", got: " + t.length
          );
        if (i && t.byteOffset % 4 != 0)
          throw Error("invalid output, must be aligned");
        return t;
      }
      function t0(e, t, i, r) {
        if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, i, r);
        let s = BigInt(32),
          n = BigInt(0xffffffff),
          o = Number((i >> s) & n),
          a = Number(i & n),
          c = 4 * !!r,
          l = 4 * !r;
        e.setUint32(t + c, o, r), e.setUint32(t + l, a, r);
      }
      function t1(e) {
        return Uint8Array.from(e);
      }
      function t2(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      let t8 = (e) => Uint8Array.from(e.split("").map((e) => e.charCodeAt(0))),
        t5 = t8("expand 16-byte k"),
        t3 = t8("expand 32-byte k"),
        t6 = tZ(t5),
        t4 = tZ(t3);
      function t9(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function t7(e) {
        return e.byteOffset % 4 == 0;
      }
      let ie = 0x100000000 - 1,
        it = new Uint32Array(),
        ii = (e, t) => (255 & e[t++]) | ((255 & e[t++]) << 8);
      class ir {
        constructor(e) {
          (this.blockLen = 16),
            (this.outputLen = 16),
            (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.pos = 0),
            (this.finished = !1),
            tW((e = tQ(e)), 32);
          let t = ii(e, 0),
            i = ii(e, 2),
            r = ii(e, 4),
            s = ii(e, 6),
            n = ii(e, 8),
            o = ii(e, 10),
            a = ii(e, 12),
            c = ii(e, 14);
          (this.r[0] = 8191 & t),
            (this.r[1] = ((t >>> 13) | (i << 3)) & 8191),
            (this.r[2] = ((i >>> 10) | (r << 6)) & 7939),
            (this.r[3] = ((r >>> 7) | (s << 9)) & 8191),
            (this.r[4] = ((s >>> 4) | (n << 12)) & 255),
            (this.r[5] = (n >>> 1) & 8190),
            (this.r[6] = ((n >>> 14) | (o << 2)) & 8191),
            (this.r[7] = ((o >>> 11) | (a << 5)) & 8065),
            (this.r[8] = ((a >>> 8) | (c << 8)) & 8191),
            (this.r[9] = (c >>> 5) & 127);
          for (let t = 0; t < 8; t++) this.pad[t] = ii(e, 16 + 2 * t);
        }
        process(e, t, i = !1) {
          let { h: r, r: s } = this,
            n = s[0],
            o = s[1],
            a = s[2],
            c = s[3],
            l = s[4],
            h = s[5],
            u = s[6],
            d = s[7],
            p = s[8],
            g = s[9],
            f = ii(e, t + 0),
            y = ii(e, t + 2),
            m = ii(e, t + 4),
            b = ii(e, t + 6),
            w = ii(e, t + 8),
            v = ii(e, t + 10),
            E = ii(e, t + 12),
            I = ii(e, t + 14),
            P = r[0] + (8191 & f),
            _ = r[1] + (((f >>> 13) | (y << 3)) & 8191),
            x = r[2] + (((y >>> 10) | (m << 6)) & 8191),
            S = r[3] + (((m >>> 7) | (b << 9)) & 8191),
            O = r[4] + (((b >>> 4) | (w << 12)) & 8191),
            A = r[5] + ((w >>> 1) & 8191),
            C = r[6] + (((w >>> 14) | (v << 2)) & 8191),
            R = r[7] + (((v >>> 11) | (E << 5)) & 8191),
            N = r[8] + (((E >>> 8) | (I << 8)) & 8191),
            T = r[9] + ((I >>> 5) | (2048 * !i)),
            q = 0,
            k = 0 + P * n + 5 * g * _ + 5 * p * x + 5 * d * S + 5 * u * O;
          (q = k >>> 13),
            (k &= 8191),
            (k += 5 * h * A + 5 * l * C + 5 * c * R + 5 * a * N + 5 * o * T),
            (q += k >>> 13),
            (k &= 8191);
          let j = q + P * o + _ * n + 5 * g * x + 5 * p * S + 5 * d * O;
          (q = j >>> 13),
            (j &= 8191),
            (j += 5 * u * A + 5 * h * C + 5 * l * R + 5 * c * N + 5 * a * T),
            (q += j >>> 13),
            (j &= 8191);
          let U = q + P * a + _ * o + x * n + 5 * g * S + 5 * p * O;
          (q = U >>> 13),
            (U &= 8191),
            (U += 5 * d * A + 5 * u * C + 5 * h * R + 5 * l * N + 5 * c * T),
            (q += U >>> 13),
            (U &= 8191);
          let D = q + P * c + _ * a + x * o + S * n + 5 * g * O;
          (q = D >>> 13),
            (D &= 8191),
            (D += 5 * p * A + 5 * d * C + 5 * u * R + 5 * h * N + 5 * l * T),
            (q += D >>> 13),
            (D &= 8191);
          let $ = q + P * l + _ * c + x * a + S * o + O * n;
          (q = $ >>> 13),
            ($ &= 8191),
            ($ += 5 * g * A + 5 * p * C + 5 * d * R + 5 * u * N + 5 * h * T),
            (q += $ >>> 13),
            ($ &= 8191);
          let B = q + P * h + _ * l + x * c + S * a + O * o;
          (q = B >>> 13),
            (B &= 8191),
            (B += A * n + 5 * g * C + 5 * p * R + 5 * d * N + 5 * u * T),
            (q += B >>> 13),
            (B &= 8191);
          let L = q + P * u + _ * h + x * l + S * c + O * a;
          (q = L >>> 13),
            (L &= 8191),
            (L += A * o + C * n + 5 * g * R + 5 * p * N + 5 * d * T),
            (q += L >>> 13),
            (L &= 8191);
          let M = q + P * d + _ * u + x * h + S * l + O * c;
          (q = M >>> 13),
            (M &= 8191),
            (M += A * a + C * o + R * n + 5 * g * N + 5 * p * T),
            (q += M >>> 13),
            (M &= 8191);
          let z = q + P * p + _ * d + x * u + S * h + O * l;
          (q = z >>> 13),
            (z &= 8191),
            (z += A * c + C * a + R * o + N * n + 5 * g * T),
            (q += z >>> 13),
            (z &= 8191);
          let H = q + P * g + _ * p + x * d + S * u + O * h;
          (q = H >>> 13),
            (H &= 8191),
            (H += A * l + C * c + R * a + N * o + T * n),
            (q += H >>> 13),
            (H &= 8191),
            (k = 8191 & (q = ((q = ((q << 2) + q) | 0) + k) | 0)),
            (q >>>= 13),
            (j += q),
            (r[0] = k),
            (r[1] = j),
            (r[2] = U),
            (r[3] = D),
            (r[4] = $),
            (r[5] = B),
            (r[6] = L),
            (r[7] = M),
            (r[8] = z),
            (r[9] = H);
        }
        finalize() {
          let { h: e, pad: t } = this,
            i = new Uint16Array(10),
            r = e[1] >>> 13;
          e[1] &= 8191;
          for (let t = 2; t < 10; t++)
            (e[t] += r), (r = e[t] >>> 13), (e[t] &= 8191);
          (e[0] += 5 * r),
            (r = e[0] >>> 13),
            (e[0] &= 8191),
            (e[1] += r),
            (r = e[1] >>> 13),
            (e[1] &= 8191),
            (e[2] += r),
            (i[0] = e[0] + 5),
            (r = i[0] >>> 13),
            (i[0] &= 8191);
          for (let t = 1; t < 10; t++)
            (i[t] = e[t] + r), (r = i[t] >>> 13), (i[t] &= 8191);
          i[9] -= 8192;
          let s = (1 ^ r) - 1;
          for (let e = 0; e < 10; e++) i[e] &= s;
          s = ~s;
          for (let t = 0; t < 10; t++) e[t] = (e[t] & s) | i[t];
          (e[0] = (e[0] | (e[1] << 13)) & 65535),
            (e[1] = ((e[1] >>> 3) | (e[2] << 10)) & 65535),
            (e[2] = ((e[2] >>> 6) | (e[3] << 7)) & 65535),
            (e[3] = ((e[3] >>> 9) | (e[4] << 4)) & 65535),
            (e[4] = ((e[4] >>> 12) | (e[5] << 1) | (e[6] << 14)) & 65535),
            (e[5] = ((e[6] >>> 2) | (e[7] << 11)) & 65535),
            (e[6] = ((e[7] >>> 5) | (e[8] << 8)) & 65535),
            (e[7] = ((e[8] >>> 8) | (e[9] << 5)) & 65535);
          let n = e[0] + t[0];
          e[0] = 65535 & n;
          for (let i = 1; i < 8; i++)
            (n = (((e[i] + t[i]) | 0) + (n >>> 16)) | 0), (e[i] = 65535 & n);
          t2(i);
        }
        update(e) {
          tG(this);
          let { buffer: t, blockLen: i } = this,
            r = (e = tQ(e)).length;
          for (let s = 0; s < r; ) {
            let n = Math.min(i - this.pos, r - s);
            if (n === i) {
              for (; i <= r - s; s += i) this.process(e, s);
              continue;
            }
            t.set(e.subarray(s, s + n), this.pos),
              (this.pos += n),
              (s += n),
              this.pos === i && (this.process(t, 0, !1), (this.pos = 0));
          }
          return this;
        }
        destroy() {
          t2(this.h, this.r, this.buffer, this.pad);
        }
        digestInto(e) {
          tG(this),
            (function (e, t) {
              tW(e);
              let i = t.outputLen;
              if (e.length < i)
                throw Error(
                  "digestInto() expects output buffer of length at least " + i
                );
            })(e, this),
            (this.finished = !0);
          let { buffer: t, h: i } = this,
            { pos: r } = this;
          if (r) {
            for (t[r++] = 1; r < 16; r++) t[r] = 0;
            this.process(t, 0, !0);
          }
          this.finalize();
          let s = 0;
          for (let t = 0; t < 8; t++)
            (e[s++] = i[t] >>> 0), (e[s++] = i[t] >>> 8);
          return e;
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let i = e.slice(0, t);
          return this.destroy(), i;
        }
      }
      let is = (function (e) {
          let t = (t, i) => e(i).update(tQ(t)).digest(),
            i = e(new Uint8Array(32));
          return (
            (t.outputLen = i.outputLen),
            (t.blockLen = i.blockLen),
            (t.create = (t) => e(t)),
            t
          );
        })((e) => new ir(e)),
        io = (function (e, t) {
          let {
            allowShortKeys: i,
            extendNonceFn: r,
            counterLength: s,
            counterRight: n,
            rounds: o,
          } = (function (e, t) {
            if (null == t || "object" != typeof t)
              throw Error("options must be defined");
            return Object.assign(e, t);
          })(
            {
              allowShortKeys: !1,
              counterLength: 8,
              counterRight: !1,
              rounds: 20,
            },
            t
          );
          if ("function" != typeof e) throw Error("core must be a function");
          return (
            tV(s),
            tV(o),
            tJ(n),
            tJ(i),
            (t, a, c, l, h = 0) => {
              tW(t), tW(a), tW(c);
              let u = c.length;
              if (
                (void 0 === l && (l = new Uint8Array(u)),
                tW(l),
                tV(h),
                h < 0 || h >= ie)
              )
                throw Error("arx: counter overflow");
              if (l.length < u)
                throw Error(
                  `arx: output (${l.length}) is shorter than data (${u})`
                );
              let d = [],
                p = t.length,
                g,
                f;
              if (32 === p) d.push((g = t1(t))), (f = t4);
              else if (16 === p && i)
                (g = new Uint8Array(32)).set(t),
                  g.set(t, 16),
                  (f = t6),
                  d.push(g);
              else throw Error(`arx: invalid 32-byte key, got length=${p}`);
              t7(a) || d.push((a = t1(a)));
              let y = tZ(g);
              if (r) {
                if (24 !== a.length)
                  throw Error("arx: extended nonce must be 24 bytes");
                r(f, y, tZ(a.subarray(0, 16)), y), (a = a.subarray(16));
              }
              let m = 16 - s;
              if (m !== a.length)
                throw Error(`arx: nonce must be ${m} or 16 bytes`);
              if (12 !== m) {
                let e = new Uint8Array(12);
                e.set(a, n ? 0 : 12 - a.length), (a = e), d.push(a);
              }
              return (
                (function (e, t, i, r, s, n, o, a) {
                  let c = s.length,
                    l = new Uint8Array(64),
                    h = tZ(l),
                    u = t7(s) && t7(n),
                    d = u ? tZ(s) : it,
                    p = u ? tZ(n) : it;
                  for (let g = 0; g < c; o++) {
                    if ((e(t, i, r, h, o, a), o >= ie))
                      throw Error("arx: counter overflow");
                    let f = Math.min(64, c - g);
                    if (u && 64 === f) {
                      let e = g / 4;
                      if (g % 4 != 0)
                        throw Error("arx: invalid block position");
                      for (let t = 0, i; t < 16; t++)
                        p[(i = e + t)] = d[i] ^ h[t];
                      g += 64;
                      continue;
                    }
                    for (let e = 0, t; e < f; e++) n[(t = g + e)] = s[t] ^ l[e];
                    g += f;
                  }
                })(e, f, y, tZ(a), c, l, h, o),
                t2(...d),
                l
              );
            }
          );
        })(
          function (e, t, i, r, s, n = 20) {
            let o = e[0],
              a = e[1],
              c = e[2],
              l = e[3],
              h = t[0],
              u = t[1],
              d = t[2],
              p = t[3],
              g = t[4],
              f = t[5],
              y = t[6],
              m = t[7],
              b = i[0],
              w = i[1],
              v = i[2],
              E = o,
              I = a,
              P = c,
              _ = l,
              x = h,
              S = u,
              O = d,
              A = p,
              C = g,
              R = f,
              N = y,
              T = m,
              q = s,
              k = b,
              j = w,
              U = v;
            for (let e = 0; e < n; e += 2)
              (C = (C + (q = t9(q ^ (E = (E + x) | 0), 16))) | 0),
                (E = (E + (x = t9(x ^ C, 12))) | 0),
                (C = (C + (q = t9(q ^ E, 8))) | 0),
                (x = t9(x ^ C, 7)),
                (R = (R + (k = t9(k ^ (I = (I + S) | 0), 16))) | 0),
                (I = (I + (S = t9(S ^ R, 12))) | 0),
                (R = (R + (k = t9(k ^ I, 8))) | 0),
                (S = t9(S ^ R, 7)),
                (N = (N + (j = t9(j ^ (P = (P + O) | 0), 16))) | 0),
                (P = (P + (O = t9(O ^ N, 12))) | 0),
                (N = (N + (j = t9(j ^ P, 8))) | 0),
                (O = t9(O ^ N, 7)),
                (T = (T + (U = t9(U ^ (_ = (_ + A) | 0), 16))) | 0),
                (_ = (_ + (A = t9(A ^ T, 12))) | 0),
                (T = (T + (U = t9(U ^ _, 8))) | 0),
                (A = t9(A ^ T, 7)),
                (N = (N + (U = t9(U ^ (E = (E + S) | 0), 16))) | 0),
                (E = (E + (S = t9(S ^ N, 12))) | 0),
                (N = (N + (U = t9(U ^ E, 8))) | 0),
                (S = t9(S ^ N, 7)),
                (T = (T + (q = t9(q ^ (I = (I + O) | 0), 16))) | 0),
                (I = (I + (O = t9(O ^ T, 12))) | 0),
                (T = (T + (q = t9(q ^ I, 8))) | 0),
                (O = t9(O ^ T, 7)),
                (C = (C + (k = t9(k ^ (P = (P + A) | 0), 16))) | 0),
                (P = (P + (A = t9(A ^ C, 12))) | 0),
                (C = (C + (k = t9(k ^ P, 8))) | 0),
                (A = t9(A ^ C, 7)),
                (R = (R + (j = t9(j ^ (_ = (_ + x) | 0), 16))) | 0),
                (_ = (_ + (x = t9(x ^ R, 12))) | 0),
                (R = (R + (j = t9(j ^ _, 8))) | 0),
                (x = t9(x ^ R, 7));
            let D = 0;
            (r[D++] = (o + E) | 0),
              (r[D++] = (a + I) | 0),
              (r[D++] = (c + P) | 0),
              (r[D++] = (l + _) | 0),
              (r[D++] = (h + x) | 0),
              (r[D++] = (u + S) | 0),
              (r[D++] = (d + O) | 0),
              (r[D++] = (p + A) | 0),
              (r[D++] = (g + C) | 0),
              (r[D++] = (f + R) | 0),
              (r[D++] = (y + N) | 0),
              (r[D++] = (m + T) | 0),
              (r[D++] = (s + q) | 0),
              (r[D++] = (b + k) | 0),
              (r[D++] = (w + j) | 0),
              (r[D++] = (v + U) | 0);
          },
          { counterRight: !1, counterLength: 4, allowShortKeys: !1 }
        ),
        ia = new Uint8Array(16),
        ic = (e, t) => {
          e.update(t);
          let i = t.length % 16;
          i && e.update(ia.subarray(i));
        },
        il = new Uint8Array(32);
      function ih(e, t, i, r, s) {
        let n = e(t, i, il),
          o = is.create(n);
        s && ic(o, s), ic(o, r);
        let a = new Uint8Array(16),
          c = tY(a);
        t0(c, 0, BigInt(s ? s.length : 0), !0),
          t0(c, 8, BigInt(r.length), !0),
          o.update(a);
        let l = o.digest();
        return t2(n, a), l;
      }
      let iu = ((e, t) => {
        function i(r, ...s) {
          if ((tW(r), void 0 !== e.nonceLength)) {
            let t = s[0];
            if (!t) throw Error("nonce / iv required");
            e.varSizeNonce ? tW(t) : tW(t, e.nonceLength);
          }
          let n = e.tagLength;
          n && void 0 !== s[1] && tW(s[1]);
          let o = t(r, ...s),
            a = (e, t) => {
              if (void 0 !== t) {
                if (2 !== e) throw Error("cipher output not supported");
                tW(t);
              }
            },
            c = !1;
          return {
            encrypt(e, t) {
              if (c)
                throw Error("cannot encrypt() twice with same key + nonce");
              return (c = !0), tW(e), a(o.encrypt.length, t), o.encrypt(e, t);
            },
            decrypt(e, t) {
              if ((tW(e), n && e.length < n))
                throw Error(
                  "invalid ciphertext length: smaller than tagLength=" + n
                );
              return a(o.decrypt.length, t), o.decrypt(e, t);
            },
          };
        }
        return Object.assign(i, e), i;
      })(
        { blockSize: 64, nonceLength: 12, tagLength: 16 },
        ((e) => (t, i, r) => ({
          encrypt(s, n) {
            let o = s.length;
            (n = tX(o + 16, n, !1)).set(s);
            let a = n.subarray(0, -16);
            e(t, i, a, a, 1);
            let c = ih(e, t, i, a, r);
            return n.set(c, o), t2(c), n;
          },
          decrypt(s, n) {
            n = tX(s.length - 16, n, !1);
            let o = s.subarray(0, -16),
              a = s.subarray(-16),
              c = ih(e, t, i, o, r);
            if (
              !(function (e, t) {
                if (e.length !== t.length) return !1;
                let i = 0;
                for (let r = 0; r < e.length; r++) i |= e[r] ^ t[r];
                return 0 === i;
              })(a, c)
            )
              throw Error("invalid tag");
            return n.set(s.subarray(0, -16)), e(t, i, n, n, 1), t2(c), n;
          },
        }))(io)
      );
      class id extends ti {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), eY(e);
          let i = tt(t);
          if (
            ((this.iHash = e.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let r = this.blockLen,
            s = new Uint8Array(r);
          s.set(i.length > r ? e.create().update(i).digest() : i);
          for (let e = 0; e < s.length; e++) s[e] ^= 54;
          this.iHash.update(s), (this.oHash = e.create());
          for (let e = 0; e < s.length; e++) s[e] ^= 106;
          this.oHash.update(s), s.fill(0);
        }
        update(e) {
          return eQ(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          eQ(this),
            eZ(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: t,
            iHash: i,
            finished: r,
            destroyed: s,
            blockLen: n,
            outputLen: o,
          } = this;
          return (
            (e.finished = r),
            (e.destroyed = s),
            (e.blockLen = n),
            (e.outputLen = o),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = i._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let ip = (e, t, i) => new id(e, t).update(i).digest();
      ip.create = (e, t) => new id(e, t);
      let ig = new Uint8Array([0]),
        iy = new Uint8Array(),
        im = (e, t, i, r, s) =>
          (function (e, t, i, r = 32) {
            if ((eY(e), eJ(r), r > 255 * e.outputLen))
              throw Error("Length should be <= 255*HashLen");
            let s = Math.ceil(r / e.outputLen);
            void 0 === i && (i = iy);
            let n = new Uint8Array(s * e.outputLen),
              o = ip.create(e, t),
              a = o._cloneInto(),
              c = new Uint8Array(o.outputLen);
            for (let t = 0; t < s; t++)
              (ig[0] = t + 1),
                a
                  .update(0 === t ? iy : c)
                  .update(i)
                  .update(ig)
                  .digestInto(c),
                n.set(c, e.outputLen * t),
                o._cloneInto(a);
            return (
              o.destroy(), a.destroy(), c.fill(0), ig.fill(0), n.slice(0, r)
            );
          })(
            e,
            (function (e, t, i) {
              return (
                eY(e),
                void 0 === i && (i = new Uint8Array(e.outputLen)),
                ip(e, tt(i), tt(t))
              );
            })(e, t, i),
            r,
            s
          );
      class ib extends ti {
        constructor(e, t, i, r) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = i),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = e4(this.buffer));
        }
        update(e) {
          eQ(this);
          let { view: t, buffer: i, blockLen: r } = this,
            s = (e = tt(e)).length;
          for (let n = 0; n < s; ) {
            let o = Math.min(r - this.pos, s - n);
            if (o === r) {
              let t = e4(e);
              for (; r <= s - n; n += r) this.process(t, n);
              continue;
            }
            i.set(e.subarray(n, n + o), this.pos),
              (this.pos += o),
              (n += o),
              this.pos === r && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          eQ(this), eX(e, this), (this.finished = !0);
          let { buffer: t, view: i, blockLen: r, isLE: s } = this,
            { pos: n } = this;
          (t[n++] = 128),
            this.buffer.subarray(n).fill(0),
            this.padOffset > r - n && (this.process(i, 0), (n = 0));
          for (let e = n; e < r; e++) t[e] = 0;
          (function (e, t, i, r) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, i, r);
            let s = BigInt(32),
              n = BigInt(0xffffffff),
              o = Number((i >> s) & n),
              a = Number(i & n),
              c = 4 * !!r,
              l = 4 * !r;
            e.setUint32(t + c, o, r), e.setUint32(t + l, a, r);
          })(i, r - 8, BigInt(8 * this.length), s),
            this.process(i, 0);
          let o = e4(e),
            a = this.outputLen;
          if (a % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let c = a / 4,
            l = this.get();
          if (c > l.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], s);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let i = e.slice(0, t);
          return this.destroy(), i;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: i,
            length: r,
            finished: s,
            destroyed: n,
            pos: o,
          } = this;
          return (
            (e.length = r),
            (e.pos = o),
            (e.finished = s),
            (e.destroyed = n),
            r % t && e.buffer.set(i),
            e
          );
        }
      }
      let iw = new Uint32Array([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        iv = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        iE = new Uint32Array(64);
      class iI extends ib {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | iv[0]),
            (this.B = 0 | iv[1]),
            (this.C = 0 | iv[2]),
            (this.D = 0 | iv[3]),
            (this.E = 0 | iv[4]),
            (this.F = 0 | iv[5]),
            (this.G = 0 | iv[6]),
            (this.H = 0 | iv[7]);
        }
        get() {
          let { A: e, B: t, C: i, D: r, E: s, F: n, G: o, H: a } = this;
          return [e, t, i, r, s, n, o, a];
        }
        set(e, t, i, r, s, n, o, a) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | i),
            (this.D = 0 | r),
            (this.E = 0 | s),
            (this.F = 0 | n),
            (this.G = 0 | o),
            (this.H = 0 | a);
        }
        process(e, t) {
          for (let i = 0; i < 16; i++, t += 4) iE[i] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = iE[e - 15],
              i = iE[e - 2],
              r = e9(t, 7) ^ e9(t, 18) ^ (t >>> 3),
              s = e9(i, 17) ^ e9(i, 19) ^ (i >>> 10);
            iE[e] = (s + iE[e - 7] + r + iE[e - 16]) | 0;
          }
          let { A: i, B: r, C: s, D: n, E: o, F: a, G: c, H: l } = this;
          for (let e = 0; e < 64; e++) {
            var h, u, d, p;
            let t =
                (l +
                  (e9(o, 6) ^ e9(o, 11) ^ e9(o, 25)) +
                  (((h = o) & a) ^ (~h & c)) +
                  iw[e] +
                  iE[e]) |
                0,
              g =
                ((e9(i, 2) ^ e9(i, 13) ^ e9(i, 22)) +
                  (((u = i) & (d = r)) ^ (u & (p = s)) ^ (d & p))) |
                0;
            (l = c),
              (c = a),
              (a = o),
              (o = (n + t) | 0),
              (n = s),
              (s = r),
              (r = i),
              (i = (t + g) | 0);
          }
          (i = (i + this.A) | 0),
            (r = (r + this.B) | 0),
            (s = (s + this.C) | 0),
            (n = (n + this.D) | 0),
            (o = (o + this.E) | 0),
            (a = (a + this.F) | 0),
            (c = (c + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(i, r, s, n, o, a, c, l);
        }
        roundClean() {
          iE.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let iP = tr(() => new iI()),
        i_ = BigInt(0),
        ix = BigInt(1),
        iS = BigInt(2);
      function iO(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function iA(e) {
        if (!iO(e)) throw Error("Uint8Array expected");
      }
      function iC(e, t) {
        if ("boolean" != typeof t)
          throw Error(e + " boolean expected, got " + t);
      }
      let iR = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function iN(e) {
        iA(e);
        let t = "";
        for (let i = 0; i < e.length; i++) t += iR[e[i]];
        return t;
      }
      function iT(e) {
        let t = e.toString(16);
        return 1 & t.length ? "0" + t : t;
      }
      function iq(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return "" === e ? i_ : BigInt("0x" + e);
      }
      let ik = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function ij(e) {
        return e >= ik._0 && e <= ik._9
          ? e - ik._0
          : e >= ik.A && e <= ik.F
          ? e - (ik.A - 10)
          : e >= ik.a && e <= ik.f
          ? e - (ik.a - 10)
          : void 0;
      }
      function iU(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        let t = e.length,
          i = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let r = new Uint8Array(i);
        for (let t = 0, s = 0; t < i; t++, s += 2) {
          let i = ij(e.charCodeAt(s)),
            n = ij(e.charCodeAt(s + 1));
          if (void 0 === i || void 0 === n)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[s] + e[s + 1]) +
                '" at index ' +
                s
            );
          r[t] = 16 * i + n;
        }
        return r;
      }
      function iD(e) {
        return iq(iN(e));
      }
      function i$(e) {
        return iA(e), iq(iN(Uint8Array.from(e).reverse()));
      }
      function iB(e, t) {
        return iU(e.toString(16).padStart(2 * t, "0"));
      }
      function iL(e, t) {
        return iB(e, t).reverse();
      }
      function iM(e, t, i) {
        let r;
        if ("string" == typeof t)
          try {
            r = iU(t);
          } catch (t) {
            throw Error(e + " must be hex string or Uint8Array, cause: " + t);
          }
        else if (iO(t)) r = Uint8Array.from(t);
        else throw Error(e + " must be hex string or Uint8Array");
        let s = r.length;
        if ("number" == typeof i && s !== i)
          throw Error(e + " of length " + i + " expected, got " + s);
        return r;
      }
      function iz(...e) {
        let t = 0;
        for (let i = 0; i < e.length; i++) {
          let r = e[i];
          iA(r), (t += r.length);
        }
        let i = new Uint8Array(t);
        for (let t = 0, r = 0; t < e.length; t++) {
          let s = e[t];
          i.set(s, r), (r += s.length);
        }
        return i;
      }
      let iH = (e) => "bigint" == typeof e && i_ <= e;
      function iK(e, t, i) {
        return iH(e) && iH(t) && iH(i) && t <= e && e < i;
      }
      function iV(e, t, i, r) {
        if (!iK(t, i, r))
          throw Error(
            "expected valid " + e + ": " + i + " <= n < " + r + ", got " + t
          );
      }
      function iF(e) {
        let t;
        for (t = 0; e > i_; e >>= ix, t += 1);
        return t;
      }
      let iW = (e) => (iS << BigInt(e - 1)) - ix,
        iG = (e) => new Uint8Array(e),
        iJ = (e) => Uint8Array.from(e);
      function iZ(e, t, i) {
        if ("number" != typeof e || e < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof t || t < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof i) throw Error("hmacFn must be a function");
        let r = iG(e),
          s = iG(e),
          n = 0,
          o = () => {
            r.fill(1), s.fill(0), (n = 0);
          },
          a = (...e) => i(s, r, ...e),
          c = (e = iG()) => {
            (s = a(iJ([0]), e)),
              (r = a()),
              0 !== e.length && ((s = a(iJ([1]), e)), (r = a()));
          },
          l = () => {
            if (n++ >= 1e3) throw Error("drbg: tried 1000 values");
            let e = 0,
              i = [];
            for (; e < t; ) {
              let t = (r = a()).slice();
              i.push(t), (e += r.length);
            }
            return iz(...i);
          };
        return (e, t) => {
          let i;
          for (o(), c(e); !(i = t(l())); ) c();
          return o(), i;
        };
      }
      let iY = {
        bigint: (e) => "bigint" == typeof e,
        function: (e) => "function" == typeof e,
        boolean: (e) => "boolean" == typeof e,
        string: (e) => "string" == typeof e,
        stringOrUint8Array: (e) => "string" == typeof e || iO(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) =>
          "function" == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function iQ(e, t, i = {}) {
        let r = (t, i, r) => {
          let s = iY[i];
          if ("function" != typeof s) throw Error("invalid validator function");
          let n = e[t];
          if (!(r && void 0 === n) && !s(n, e))
            throw Error(
              "param " + String(t) + " is invalid. Expected " + i + ", got " + n
            );
        };
        for (let [e, i] of Object.entries(t)) r(e, i, !1);
        for (let [e, t] of Object.entries(i)) r(e, t, !0);
        return e;
      }
      function iX(e) {
        let t = new WeakMap();
        return (i, ...r) => {
          let s = t.get(i);
          if (void 0 !== s) return s;
          let n = e(i, ...r);
          return t.set(i, n), n;
        };
      }
      var i0 = Object.freeze({
        __proto__: null,
        isBytes: iO,
        abytes: iA,
        abool: iC,
        bytesToHex: iN,
        numberToHexUnpadded: iT,
        hexToNumber: iq,
        hexToBytes: iU,
        bytesToNumberBE: iD,
        bytesToNumberLE: i$,
        numberToBytesBE: iB,
        numberToBytesLE: iL,
        numberToVarBytesBE: function (e) {
          return iU(iT(e));
        },
        ensureBytes: iM,
        concatBytes: iz,
        equalBytes: function (e, t) {
          if (e.length !== t.length) return !1;
          let i = 0;
          for (let r = 0; r < e.length; r++) i |= e[r] ^ t[r];
          return 0 === i;
        },
        utf8ToBytes: function (e) {
          if ("string" != typeof e) throw Error("string expected");
          return new Uint8Array(new TextEncoder().encode(e));
        },
        inRange: iK,
        aInRange: iV,
        bitLen: iF,
        bitGet: function (e, t) {
          return (e >> BigInt(t)) & ix;
        },
        bitSet: function (e, t, i) {
          return e | ((i ? ix : i_) << BigInt(t));
        },
        bitMask: iW,
        createHmacDrbg: iZ,
        validateObject: iQ,
        notImplemented: () => {
          throw Error("not implemented");
        },
        memoized: iX,
      });
      let i1 = BigInt(0),
        i2 = BigInt(1),
        i8 = BigInt(2),
        i5 = BigInt(3),
        i3 = BigInt(4),
        i6 = BigInt(5),
        i4 = BigInt(8);
      function i9(e, t) {
        let i = e % t;
        return i >= i1 ? i : t + i;
      }
      function i7(e, t, i) {
        if (t < i1) throw Error("invalid exponent, negatives unsupported");
        if (i <= i1) throw Error("invalid modulus");
        if (i === i2) return i1;
        let r = i2;
        for (; t > i1; )
          t & i2 && (r = (r * e) % i), (e = (e * e) % i), (t >>= i2);
        return r;
      }
      function re(e, t, i) {
        let r = e;
        for (; t-- > i1; ) (r *= r), (r %= i);
        return r;
      }
      function rt(e, t) {
        if (e === i1) throw Error("invert: expected non-zero number");
        if (t <= i1) throw Error("invert: expected positive modulus, got " + t);
        let i = i9(e, t),
          r = t,
          s = i1,
          n = i2;
        for (; i !== i1; ) {
          let e = r / i,
            t = r % i,
            o = s - n * e;
          (r = i), (i = t), (s = n), (n = o);
        }
        if (r !== i2) throw Error("invert: does not exist");
        return i9(s, t);
      }
      let ri = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function rr(e, t) {
        let i = void 0 !== t ? t : e.toString(2).length,
          r = Math.ceil(i / 8);
        return { nBitLength: i, nByteLength: r };
      }
      function rs(e, t, i = !1, r = {}) {
        let s;
        if (e <= i1) throw Error("invalid field: expected ORDER > 0, got " + e);
        let { nBitLength: n, nByteLength: o } = rr(e, t);
        if (o > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let a = Object.freeze({
          ORDER: e,
          isLE: i,
          BITS: n,
          BYTES: o,
          MASK: iW(n),
          ZERO: i1,
          ONE: i2,
          create: (t) => i9(t, e),
          isValid: (t) => {
            if ("bigint" != typeof t)
              throw Error(
                "invalid field element: expected bigint, got " + typeof t
              );
            return i1 <= t && t < e;
          },
          is0: (e) => e === i1,
          isOdd: (e) => (e & i2) === i2,
          neg: (t) => i9(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => i9(t * t, e),
          add: (t, i) => i9(t + i, e),
          sub: (t, i) => i9(t - i, e),
          mul: (t, i) => i9(t * i, e),
          pow: (e, t) =>
            (function (e, t, i) {
              if (i < i1)
                throw Error("invalid exponent, negatives unsupported");
              if (i === i1) return e.ONE;
              if (i === i2) return t;
              let r = e.ONE,
                s = t;
              for (; i > i1; )
                i & i2 && (r = e.mul(r, s)), (s = e.sqr(s)), (i >>= i2);
              return r;
            })(a, e, t),
          div: (t, i) => i9(t * rt(i, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => rt(t, e),
          sqrt:
            r.sqrt ||
            ((t) => (
              s ||
                (s = (function (e) {
                  if (e % i3 === i5) {
                    let t = (e + i2) / i3;
                    return function (e, i) {
                      let r = e.pow(i, t);
                      if (!e.eql(e.sqr(r), i))
                        throw Error("Cannot find square root");
                      return r;
                    };
                  }
                  if (e % i4 === i6) {
                    let t = (e - i6) / i4;
                    return function (e, i) {
                      let r = e.mul(i, i8),
                        s = e.pow(r, t),
                        n = e.mul(i, s),
                        o = e.mul(e.mul(n, i8), s),
                        a = e.mul(n, e.sub(o, e.ONE));
                      if (!e.eql(e.sqr(a), i))
                        throw Error("Cannot find square root");
                      return a;
                    };
                  }
                  return (function (e) {
                    let t,
                      i,
                      r,
                      s = (e - i2) / i8;
                    for (t = e - i2, i = 0; t % i8 === i1; t /= i8, i++);
                    for (r = i8; r < e && i7(r, s, e) !== e - i2; r++)
                      if (r > 1e3)
                        throw Error(
                          "Cannot find square root: likely non-prime P"
                        );
                    if (1 === i) {
                      let t = (e + i2) / i3;
                      return function (e, i) {
                        let r = e.pow(i, t);
                        if (!e.eql(e.sqr(r), i))
                          throw Error("Cannot find square root");
                        return r;
                      };
                    }
                    let n = (t + i2) / i8;
                    return function (e, o) {
                      if (e.pow(o, s) === e.neg(e.ONE))
                        throw Error("Cannot find square root");
                      let a = i,
                        c = e.pow(e.mul(e.ONE, r), t),
                        l = e.pow(o, n),
                        h = e.pow(o, t);
                      for (; !e.eql(h, e.ONE); ) {
                        if (e.eql(h, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let i = e.sqr(h); t < a && !e.eql(i, e.ONE); t++)
                          i = e.sqr(i);
                        let i = e.pow(c, i2 << BigInt(a - t - 1));
                        (c = e.sqr(i)),
                          (l = e.mul(l, i)),
                          (h = e.mul(h, c)),
                          (a = t);
                      }
                      return l;
                    };
                  })(e);
                })(e)),
              s(a, t)
            )),
          invertBatch: (e) =>
            (function (e, t) {
              let i = Array(t.length),
                r = t.reduce(
                  (t, r, s) => (e.is0(r) ? t : ((i[s] = t), e.mul(t, r))),
                  e.ONE
                ),
                s = e.inv(r);
              return (
                t.reduceRight(
                  (t, r, s) =>
                    e.is0(r) ? t : ((i[s] = e.mul(t, i[s])), e.mul(t, r)),
                  s
                ),
                i
              );
            })(a, e),
          cmov: (e, t, i) => (i ? t : e),
          toBytes: (e) => (i ? iL(e, o) : iB(e, o)),
          fromBytes: (e) => {
            if (e.length !== o)
              throw Error(
                "Field.fromBytes: expected " + o + " bytes, got " + e.length
              );
            return i ? i$(e) : iD(e);
          },
        });
        return Object.freeze(a);
      }
      function rn(e) {
        if ("bigint" != typeof e) throw Error("field order must be bigint");
        return Math.ceil(e.toString(2).length / 8);
      }
      function ro(e) {
        let t = rn(e);
        return t + Math.ceil(t / 2);
      }
      let ra = BigInt(0),
        rc = BigInt(1);
      function rl(e, t) {
        let i = t.negate();
        return e ? i : t;
      }
      function rh(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function ru(e, t) {
        return (
          rh(e, t), { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) }
        );
      }
      let rd = new WeakMap(),
        rp = new WeakMap();
      function rg(e) {
        return rp.get(e) || 1;
      }
      function rf(e) {
        return (
          iQ(
            e.Fp,
            ri.reduce((e, t) => ((e[t] = "function"), e), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            })
          ),
          iQ(
            e,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({ ...rr(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
        );
      }
      BigInt(0), BigInt(1), BigInt(2), BigInt(8);
      let ry = BigInt(0),
        rm = BigInt(1),
        rb = BigInt(
          "57896044618658097711785492504343953926634992332820282019728792003956564819949"
        );
      BigInt(0);
      let rw = BigInt(1),
        rv = BigInt(2),
        rE = BigInt(3),
        rI = BigInt(5);
      BigInt(8);
      let rP = (function (e) {
        let t =
            (iQ(
              e,
              { a: "bigint" },
              {
                montgomeryBits: "isSafeInteger",
                nByteLength: "isSafeInteger",
                adjustScalarBytes: "function",
                domain: "function",
                powPminus2: "function",
                Gu: "bigint",
              }
            ),
            Object.freeze({ ...e })),
          { P: i } = t,
          r = (e) => i9(e, i),
          s = t.montgomeryBits,
          n = Math.ceil(s / 8),
          o = t.nByteLength,
          a = t.adjustScalarBytes || ((e) => e),
          c = t.powPminus2 || ((e) => i7(e, i - BigInt(2), i));
        function l(e, t, i) {
          let s = r(e * (t - i));
          return [(t = r(t - s)), (i = r(i + s))];
        }
        let h = (t.a - BigInt(2)) / BigInt(4);
        function u(e, t) {
          let u = (function (e, t) {
            iV("u", e, ry, i), iV("scalar", t, ry, i);
            let n = rm,
              o = ry,
              a = e,
              u = rm,
              d = ry,
              p;
            for (let i = BigInt(s - 1); i >= ry; i--) {
              let s = (t >> i) & rm;
              (d ^= s),
                (n = (p = l(d, n, a))[0]),
                (a = p[1]),
                (o = (p = l(d, o, u))[0]),
                (u = p[1]),
                (d = s);
              let c = n + o,
                g = r(c * c),
                f = n - o,
                y = r(f * f),
                m = g - y,
                b = a + u,
                w = r((a - u) * c),
                v = r(b * f),
                E = w + v,
                I = w - v;
              (a = r(E * E)),
                (u = r(e * r(I * I))),
                (n = r(g * y)),
                (o = r(m * (g + r(h * m))));
            }
            return (
              (n = (p = l(d, n, a))[0]),
              (a = p[1]),
              (o = (p = l(d, o, u))[0]),
              (u = p[1]),
              r(n * c(o))
            );
          })(
            (function (e) {
              let t = iM("u coordinate", e, n);
              return 32 === o && (t[31] &= 127), i$(t);
            })(t),
            (function (e) {
              let t = iM("scalar", e),
                i = t.length;
              if (i !== n && i !== o)
                throw Error(
                  "invalid scalar, expected " +
                    ("" + n + " or ") +
                    o +
                    " bytes, got " +
                    i
                );
              return i$(a(t));
            })(e)
          );
          if (u === ry) throw Error("invalid private or public key received");
          return iL(r(u), n);
        }
        let d = iL(r(t.Gu), n);
        function p(e) {
          return u(e, d);
        }
        return {
          scalarMult: u,
          scalarMultBase: p,
          getSharedSecret: (e, t) => u(e, t),
          getPublicKey: (e) => p(e),
          utils: { randomPrivateKey: () => t.randomBytes(t.nByteLength) },
          GuBytes: d,
        };
      })({
        P: rb,
        a: BigInt(486662),
        montgomeryBits: 255,
        nByteLength: 32,
        Gu: BigInt(9),
        powPminus2: (e) => {
          let { pow_p_5_8: t, b2: i } = (function (e) {
            let t = BigInt(10),
              i = BigInt(20),
              r = BigInt(40),
              s = BigInt(80),
              n = (((e * e) % rb) * e) % rb,
              o = (re(n, rv, rb) * n) % rb,
              a = (re(o, rw, rb) * e) % rb,
              c = (re(a, rI, rb) * a) % rb,
              l = (re(c, t, rb) * c) % rb,
              h = (re(l, i, rb) * l) % rb,
              u = (re(h, r, rb) * h) % rb,
              d = (re(u, s, rb) * u) % rb,
              p = (re(d, s, rb) * u) % rb,
              g = (re(p, t, rb) * c) % rb;
            return { pow_p_5_8: (re(g, rv, rb) * e) % rb, b2: n };
          })(e);
          return i9(re(t, rE, rb) * i, rb);
        },
        adjustScalarBytes: function (e) {
          return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
        },
        randomBytes: ts,
      });
      function r_(e) {
        void 0 !== e.lowS && iC("lowS", e.lowS),
          void 0 !== e.prehash && iC("prehash", e.prehash);
      }
      let { bytesToNumberBE: rx, hexToBytes: rS } = i0;
      class rO extends Error {
        constructor(e = "") {
          super(e);
        }
      }
      let rA = {
          Err: rO,
          _tlv: {
            encode: (e, t) => {
              let { Err: i } = rA;
              if (e < 0 || e > 256) throw new i("tlv.encode: wrong tag");
              if (1 & t.length) throw new i("tlv.encode: unpadded data");
              let r = t.length / 2,
                s = iT(r);
              if ((s.length / 2) & 128)
                throw new i("tlv.encode: long form length too big");
              let n = r > 127 ? iT((s.length / 2) | 128) : "";
              return iT(e) + n + s + t;
            },
            decode(e, t) {
              let { Err: i } = rA,
                r = 0;
              if (e < 0 || e > 256) throw new i("tlv.encode: wrong tag");
              if (t.length < 2 || t[r++] !== e)
                throw new i("tlv.decode: wrong tlv");
              let s = t[r++],
                n = 0;
              if (128 & s) {
                let e = 127 & s;
                if (!e)
                  throw new i(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (e > 4)
                  throw new i("tlv.decode(long): byte length is too big");
                let o = t.subarray(r, r + e);
                if (o.length !== e)
                  throw new i("tlv.decode: length bytes not complete");
                if (0 === o[0])
                  throw new i("tlv.decode(long): zero leftmost byte");
                for (let e of o) n = (n << 8) | e;
                if (((r += e), n < 128))
                  throw new i("tlv.decode(long): not minimal encoding");
              } else n = s;
              let o = t.subarray(r, r + n);
              if (o.length !== n) throw new i("tlv.decode: wrong value length");
              return { v: o, l: t.subarray(r + n) };
            },
          },
          _int: {
            encode(e) {
              let { Err: t } = rA;
              if (e < rC)
                throw new t("integer: negative integers are not allowed");
              let i = iT(e);
              if (
                (8 & Number.parseInt(i[0], 16) && (i = "00" + i), 1 & i.length)
              )
                throw new t("unexpected DER parsing assertion: unpadded hex");
              return i;
            },
            decode(e) {
              let { Err: t } = rA;
              if (128 & e[0])
                throw new t("invalid signature integer: negative");
              if (0 === e[0] && !(128 & e[1]))
                throw new t(
                  "invalid signature integer: unnecessary leading zero"
                );
              return rx(e);
            },
          },
          toSig(e) {
            let { Err: t, _int: i, _tlv: r } = rA,
              s = "string" == typeof e ? rS(e) : e;
            iA(s);
            let { v: n, l: o } = r.decode(48, s);
            if (o.length)
              throw new t("invalid signature: left bytes after parsing");
            let { v: a, l: c } = r.decode(2, n),
              { v: l, l: h } = r.decode(2, c);
            if (h.length)
              throw new t("invalid signature: left bytes after parsing");
            return { r: i.decode(a), s: i.decode(l) };
          },
          hexFromSig(e) {
            let { _tlv: t, _int: i } = rA,
              r = t.encode(2, i.encode(e.r)),
              s = t.encode(2, i.encode(e.s));
            return t.encode(48, r + s);
          },
        },
        rC = BigInt(0),
        rR = BigInt(1);
      BigInt(2);
      let rN = BigInt(3);
      BigInt(4);
      let rT = rs(
          BigInt(
            "0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"
          )
        ),
        rq = (function (e, t) {
          let i = (t) =>
            (function (e) {
              let t = (function (e) {
                  let t = rf(e);
                  return (
                    iQ(
                      t,
                      {
                        hash: "hash",
                        hmac: "function",
                        randomBytes: "function",
                      },
                      {
                        bits2int: "function",
                        bits2int_modN: "function",
                        lowS: "boolean",
                      }
                    ),
                    Object.freeze({ lowS: !0, ...t })
                  );
                })(e),
                { Fp: i, n: r } = t,
                s = i.BYTES + 1,
                n = 2 * i.BYTES + 1;
              function o(e) {
                return i9(e, r);
              }
              let {
                  ProjectivePoint: a,
                  normPrivateKeyToScalar: c,
                  weierstrassEquation: l,
                  isWithinCurveOrder: h,
                } = (function (e) {
                  var t;
                  let i = (function (e) {
                      let t = rf(e);
                      iQ(
                        t,
                        { a: "field", b: "field" },
                        {
                          allowedPrivateKeyLengths: "array",
                          wrapPrivateKey: "boolean",
                          isTorsionFree: "function",
                          clearCofactor: "function",
                          allowInfinityPoint: "boolean",
                          fromBytes: "function",
                          toBytes: "function",
                        }
                      );
                      let { endo: i, Fp: r, a: s } = t;
                      if (i) {
                        if (!r.eql(s, r.ZERO))
                          throw Error(
                            "invalid endomorphism, can only be defined for Koblitz curves that have a=0"
                          );
                        if (
                          "object" != typeof i ||
                          "bigint" != typeof i.beta ||
                          "function" != typeof i.splitScalar
                        )
                          throw Error(
                            "invalid endomorphism, expected beta: bigint and splitScalar: function"
                          );
                      }
                      return Object.freeze({ ...t });
                    })(e),
                    { Fp: r } = i,
                    s = rs(i.n, i.nBitLength),
                    n =
                      i.toBytes ||
                      ((e, t, i) => {
                        let s = t.toAffine();
                        return iz(
                          Uint8Array.from([4]),
                          r.toBytes(s.x),
                          r.toBytes(s.y)
                        );
                      }),
                    o =
                      i.fromBytes ||
                      ((e) => {
                        let t = e.subarray(1);
                        return {
                          x: r.fromBytes(t.subarray(0, r.BYTES)),
                          y: r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES)),
                        };
                      });
                  function a(e) {
                    let { a: t, b: s } = i,
                      n = r.sqr(e),
                      o = r.mul(n, e);
                    return r.add(r.add(o, r.mul(e, t)), s);
                  }
                  if (!r.eql(r.sqr(i.Gy), a(i.Gx)))
                    throw Error("bad generator point: equation left != right");
                  function c(e) {
                    let t,
                      {
                        allowedPrivateKeyLengths: r,
                        nByteLength: s,
                        wrapPrivateKey: n,
                        n: o,
                      } = i;
                    if (r && "bigint" != typeof e) {
                      if (
                        (iO(e) && (e = iN(e)),
                        "string" != typeof e || !r.includes(e.length))
                      )
                        throw Error("invalid private key");
                      e = e.padStart(2 * s, "0");
                    }
                    try {
                      t =
                        "bigint" == typeof e ? e : iD(iM("private key", e, s));
                    } catch {
                      throw Error(
                        "invalid private key, expected hex or " +
                          s +
                          " bytes, got " +
                          typeof e
                      );
                    }
                    return n && (t = i9(t, o)), iV("private key", t, rR, o), t;
                  }
                  function l(e) {
                    if (!(e instanceof d))
                      throw Error("ProjectivePoint expected");
                  }
                  let h = iX((e, t) => {
                      let { px: i, py: s, pz: n } = e;
                      if (r.eql(n, r.ONE)) return { x: i, y: s };
                      let o = e.is0();
                      null == t && (t = o ? r.ONE : r.inv(n));
                      let a = r.mul(i, t),
                        c = r.mul(s, t),
                        l = r.mul(n, t);
                      if (o) return { x: r.ZERO, y: r.ZERO };
                      if (!r.eql(l, r.ONE)) throw Error("invZ was invalid");
                      return { x: a, y: c };
                    }),
                    u = iX((e) => {
                      if (e.is0()) {
                        if (i.allowInfinityPoint && !r.is0(e.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: t, y: s } = e.toAffine();
                      if (!r.isValid(t) || !r.isValid(s))
                        throw Error("bad point: x or y not FE");
                      let n = r.sqr(s),
                        o = a(t);
                      if (!r.eql(n, o))
                        throw Error("bad point: equation left != right");
                      if (!e.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                      return !0;
                    });
                  class d {
                    constructor(e, t, i) {
                      if (
                        ((this.px = e),
                        (this.py = t),
                        (this.pz = i),
                        null == e || !r.isValid(e))
                      )
                        throw Error("x required");
                      if (null == t || !r.isValid(t)) throw Error("y required");
                      if (null == i || !r.isValid(i)) throw Error("z required");
                      Object.freeze(this);
                    }
                    static fromAffine(e) {
                      let { x: t, y: i } = e || {};
                      if (!e || !r.isValid(t) || !r.isValid(i))
                        throw Error("invalid affine point");
                      if (e instanceof d)
                        throw Error("projective point not allowed");
                      let s = (e) => r.eql(e, r.ZERO);
                      return s(t) && s(i) ? d.ZERO : new d(t, i, r.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(e) {
                      let t = r.invertBatch(e.map((e) => e.pz));
                      return e
                        .map((e, i) => e.toAffine(t[i]))
                        .map(d.fromAffine);
                    }
                    static fromHex(e) {
                      let t = d.fromAffine(o(iM("pointHex", e)));
                      return t.assertValidity(), t;
                    }
                    static fromPrivateKey(e) {
                      return d.BASE.multiply(c(e));
                    }
                    static msm(e, t) {
                      return (function (e, t, i, r) {
                        if (
                          ((function (e, t) {
                            if (!Array.isArray(e))
                              throw Error("array expected");
                            e.forEach((e, i) => {
                              if (!(e instanceof t))
                                throw Error("invalid point at index " + i);
                            });
                          })(i, e),
                          (function (e, t) {
                            if (!Array.isArray(e))
                              throw Error("array of scalars expected");
                            e.forEach((e, i) => {
                              if (!t.isValid(e))
                                throw Error("invalid scalar at index " + i);
                            });
                          })(r, t),
                          i.length !== r.length)
                        )
                          throw Error(
                            "arrays of points and scalars must have equal length"
                          );
                        let s = e.ZERO,
                          n = iF(BigInt(i.length)),
                          o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1,
                          a = (1 << o) - 1,
                          c = Array(a + 1).fill(s),
                          l = Math.floor((t.BITS - 1) / o) * o,
                          h = s;
                        for (let e = l; e >= 0; e -= o) {
                          c.fill(s);
                          for (let t = 0; t < r.length; t++) {
                            let s = Number((r[t] >> BigInt(e)) & BigInt(a));
                            c[s] = c[s].add(i[t]);
                          }
                          let t = s;
                          for (let e = c.length - 1, i = s; e > 0; e--)
                            (i = i.add(c[e])), (t = t.add(i));
                          if (((h = h.add(t)), 0 !== e))
                            for (let e = 0; e < o; e++) h = h.double();
                        }
                        return h;
                      })(d, s, e, t);
                    }
                    _setWindowSize(e) {
                      g.setWindowSize(this, e);
                    }
                    assertValidity() {
                      u(this);
                    }
                    hasEvenY() {
                      let { y: e } = this.toAffine();
                      if (r.isOdd) return !r.isOdd(e);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(e) {
                      l(e);
                      let { px: t, py: i, pz: s } = this,
                        { px: n, py: o, pz: a } = e,
                        c = r.eql(r.mul(t, a), r.mul(n, s)),
                        h = r.eql(r.mul(i, a), r.mul(o, s));
                      return c && h;
                    }
                    negate() {
                      return new d(this.px, r.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: e, b: t } = i,
                        s = r.mul(t, rN),
                        { px: n, py: o, pz: a } = this,
                        c = r.ZERO,
                        l = r.ZERO,
                        h = r.ZERO,
                        u = r.mul(n, n),
                        p = r.mul(o, o),
                        g = r.mul(a, a),
                        f = r.mul(n, o);
                      return (
                        (f = r.add(f, f)),
                        (h = r.mul(n, a)),
                        (h = r.add(h, h)),
                        (c = r.mul(e, h)),
                        (l = r.mul(s, g)),
                        (l = r.add(c, l)),
                        (c = r.sub(p, l)),
                        (l = r.add(p, l)),
                        (l = r.mul(c, l)),
                        (c = r.mul(f, c)),
                        (h = r.mul(s, h)),
                        (g = r.mul(e, g)),
                        (f = r.sub(u, g)),
                        (f = r.mul(e, f)),
                        (f = r.add(f, h)),
                        (h = r.add(u, u)),
                        (u = r.add(h, u)),
                        (u = r.add(u, g)),
                        (u = r.mul(u, f)),
                        (l = r.add(l, u)),
                        (g = r.mul(o, a)),
                        (g = r.add(g, g)),
                        (u = r.mul(g, f)),
                        (c = r.sub(c, u)),
                        (h = r.mul(g, p)),
                        (h = r.add(h, h)),
                        new d(c, l, (h = r.add(h, h)))
                      );
                    }
                    add(e) {
                      l(e);
                      let { px: t, py: s, pz: n } = this,
                        { px: o, py: a, pz: c } = e,
                        h = r.ZERO,
                        u = r.ZERO,
                        p = r.ZERO,
                        g = i.a,
                        f = r.mul(i.b, rN),
                        y = r.mul(t, o),
                        m = r.mul(s, a),
                        b = r.mul(n, c),
                        w = r.add(t, s),
                        v = r.add(o, a);
                      (w = r.mul(w, v)),
                        (v = r.add(y, m)),
                        (w = r.sub(w, v)),
                        (v = r.add(t, n));
                      let E = r.add(o, c);
                      return (
                        (v = r.mul(v, E)),
                        (E = r.add(y, b)),
                        (v = r.sub(v, E)),
                        (E = r.add(s, n)),
                        (h = r.add(a, c)),
                        (E = r.mul(E, h)),
                        (h = r.add(m, b)),
                        (E = r.sub(E, h)),
                        (p = r.mul(g, v)),
                        (h = r.mul(f, b)),
                        (p = r.add(h, p)),
                        (h = r.sub(m, p)),
                        (p = r.add(m, p)),
                        (u = r.mul(h, p)),
                        (m = r.add(y, y)),
                        (m = r.add(m, y)),
                        (b = r.mul(g, b)),
                        (v = r.mul(f, v)),
                        (m = r.add(m, b)),
                        (b = r.sub(y, b)),
                        (b = r.mul(g, b)),
                        (v = r.add(v, b)),
                        (y = r.mul(m, v)),
                        (u = r.add(u, y)),
                        (y = r.mul(E, v)),
                        (h = r.mul(w, h)),
                        (h = r.sub(h, y)),
                        (y = r.mul(w, m)),
                        (p = r.mul(E, p)),
                        new d(h, u, (p = r.add(p, y)))
                      );
                    }
                    subtract(e) {
                      return this.add(e.negate());
                    }
                    is0() {
                      return this.equals(d.ZERO);
                    }
                    wNAF(e) {
                      return g.wNAFCached(this, e, d.normalizeZ);
                    }
                    multiplyUnsafe(e) {
                      let { endo: t, n: s } = i;
                      iV("scalar", e, rC, s);
                      let n = d.ZERO;
                      if (e === rC) return n;
                      if (this.is0() || e === rR) return this;
                      if (!t || g.hasPrecomputes(this))
                        return g.wNAFCachedUnsafe(this, e, d.normalizeZ);
                      let {
                          k1neg: o,
                          k1: a,
                          k2neg: c,
                          k2: l,
                        } = t.splitScalar(e),
                        h = n,
                        u = n,
                        p = this;
                      for (; a > rC || l > rC; )
                        a & rR && (h = h.add(p)),
                          l & rR && (u = u.add(p)),
                          (p = p.double()),
                          (a >>= rR),
                          (l >>= rR);
                      return (
                        o && (h = h.negate()),
                        c && (u = u.negate()),
                        (u = new d(r.mul(u.px, t.beta), u.py, u.pz)),
                        h.add(u)
                      );
                    }
                    multiply(e) {
                      let t,
                        s,
                        { endo: n, n: o } = i;
                      if ((iV("scalar", e, rR, o), n)) {
                        let {
                            k1neg: i,
                            k1: o,
                            k2neg: a,
                            k2: c,
                          } = n.splitScalar(e),
                          { p: l, f: h } = this.wNAF(o),
                          { p: u, f: p } = this.wNAF(c);
                        (l = g.constTimeNegate(i, l)),
                          (u = g.constTimeNegate(a, u)),
                          (u = new d(r.mul(u.px, n.beta), u.py, u.pz)),
                          (t = l.add(u)),
                          (s = h.add(p));
                      } else {
                        let { p: i, f: r } = this.wNAF(e);
                        (t = i), (s = r);
                      }
                      return d.normalizeZ([t, s])[0];
                    }
                    multiplyAndAddUnsafe(e, t, i) {
                      let r = d.BASE,
                        s = (e, t) =>
                          t !== rC && t !== rR && e.equals(r)
                            ? e.multiply(t)
                            : e.multiplyUnsafe(t),
                        n = s(this, t).add(s(e, i));
                      return n.is0() ? void 0 : n;
                    }
                    toAffine(e) {
                      return h(this, e);
                    }
                    isTorsionFree() {
                      let { h: e, isTorsionFree: t } = i;
                      if (e === rR) return !0;
                      if (t) return t(d, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: e, clearCofactor: t } = i;
                      return e === rR
                        ? this
                        : t
                        ? t(d, this)
                        : this.multiplyUnsafe(i.h);
                    }
                    toRawBytes(e = !0) {
                      return (
                        iC("isCompressed", e),
                        this.assertValidity(),
                        n(d, this, e)
                      );
                    }
                    toHex(e = !0) {
                      return iC("isCompressed", e), iN(this.toRawBytes(e));
                    }
                  }
                  (d.BASE = new d(i.Gx, i.Gy, r.ONE)),
                    (d.ZERO = new d(r.ZERO, r.ONE, r.ZERO));
                  let p = i.nBitLength,
                    g =
                      ((t = i.endo ? Math.ceil(p / 2) : p),
                      {
                        constTimeNegate: rl,
                        hasPrecomputes: (e) => 1 !== rg(e),
                        unsafeLadder(e, t, i = d.ZERO) {
                          let r = e;
                          for (; t > ra; )
                            t & rc && (i = i.add(r)),
                              (r = r.double()),
                              (t >>= rc);
                          return i;
                        },
                        precomputeWindow(e, i) {
                          let { windows: r, windowSize: s } = ru(i, t),
                            n = [],
                            o = e,
                            a = o;
                          for (let e = 0; e < r; e++) {
                            (a = o), n.push(a);
                            for (let e = 1; e < s; e++)
                              (a = a.add(o)), n.push(a);
                            o = a.double();
                          }
                          return n;
                        },
                        wNAF(e, i, r) {
                          let { windows: s, windowSize: n } = ru(e, t),
                            o = d.ZERO,
                            a = d.BASE,
                            c = BigInt(2 ** e - 1),
                            l = 2 ** e,
                            h = BigInt(e);
                          for (let e = 0; e < s; e++) {
                            let t = e * n,
                              s = Number(r & c);
                            (r >>= h), s > n && ((s -= l), (r += rc));
                            let u = t + Math.abs(s) - 1,
                              d = e % 2 != 0,
                              p = s < 0;
                            0 === s
                              ? (a = a.add(rl(d, i[t])))
                              : (o = o.add(rl(p, i[u])));
                          }
                          return { p: o, f: a };
                        },
                        wNAFUnsafe(e, i, r, s = d.ZERO) {
                          let { windows: n, windowSize: o } = ru(e, t),
                            a = BigInt(2 ** e - 1),
                            c = 2 ** e,
                            l = BigInt(e);
                          for (let e = 0; e < n; e++) {
                            let t = e * o;
                            if (r === ra) break;
                            let n = Number(r & a);
                            if (
                              ((r >>= l),
                              n > o && ((n -= c), (r += rc)),
                              0 === n)
                            )
                              continue;
                            let h = i[t + Math.abs(n) - 1];
                            n < 0 && (h = h.negate()), (s = s.add(h));
                          }
                          return s;
                        },
                        getPrecomputes(e, t, i) {
                          let r = rd.get(t);
                          return (
                            r ||
                              ((r = this.precomputeWindow(t, e)),
                              1 !== e && rd.set(t, i(r))),
                            r
                          );
                        },
                        wNAFCached(e, t, i) {
                          let r = rg(e);
                          return this.wNAF(r, this.getPrecomputes(r, e, i), t);
                        },
                        wNAFCachedUnsafe(e, t, i, r) {
                          let s = rg(e);
                          return 1 === s
                            ? this.unsafeLadder(e, t, r)
                            : this.wNAFUnsafe(
                                s,
                                this.getPrecomputes(s, e, i),
                                t,
                                r
                              );
                        },
                        setWindowSize(e, i) {
                          rh(i, t), rp.set(e, i), rd.delete(e);
                        },
                      });
                  return {
                    CURVE: i,
                    ProjectivePoint: d,
                    normPrivateKeyToScalar: c,
                    weierstrassEquation: a,
                    isWithinCurveOrder: function (e) {
                      return iK(e, rR, i.n);
                    },
                  };
                })({
                  ...t,
                  toBytes(e, t, r) {
                    let s = t.toAffine(),
                      n = i.toBytes(s.x);
                    return (
                      iC("isCompressed", r),
                      r
                        ? iz(Uint8Array.from([t.hasEvenY() ? 2 : 3]), n)
                        : iz(Uint8Array.from([4]), n, i.toBytes(s.y))
                    );
                  },
                  fromBytes(e) {
                    let t = e.length,
                      r = e[0],
                      o = e.subarray(1);
                    if (t === s && (2 === r || 3 === r)) {
                      let e,
                        t = iD(o);
                      if (!iK(t, rR, i.ORDER))
                        throw Error("Point is not on curve");
                      let s = l(t);
                      try {
                        e = i.sqrt(s);
                      } catch (e) {
                        throw Error(
                          "Point is not on curve" +
                            (e instanceof Error ? ": " + e.message : "")
                        );
                      }
                      return (
                        ((1 & r) == 1) != ((e & rR) === rR) && (e = i.neg(e)),
                        { x: t, y: e }
                      );
                    }
                    if (t === n && 4 === r)
                      return {
                        x: i.fromBytes(o.subarray(0, i.BYTES)),
                        y: i.fromBytes(o.subarray(i.BYTES, 2 * i.BYTES)),
                      };
                    throw Error(
                      "invalid Point, expected length of " +
                        s +
                        ", or uncompressed " +
                        n +
                        ", got " +
                        t
                    );
                  },
                }),
                u = (e) => iN(iB(e, t.nByteLength)),
                d = (e, t, i) => iD(e.slice(t, i));
              class p {
                constructor(e, t, i) {
                  (this.r = e),
                    (this.s = t),
                    (this.recovery = i),
                    this.assertValidity();
                }
                static fromCompact(e) {
                  let i = t.nByteLength;
                  return new p(
                    d((e = iM("compactSignature", e, 2 * i)), 0, i),
                    d(e, i, 2 * i)
                  );
                }
                static fromDER(e) {
                  let { r: t, s: i } = rA.toSig(iM("DER", e));
                  return new p(t, i);
                }
                assertValidity() {
                  iV("r", this.r, rR, r), iV("s", this.s, rR, r);
                }
                addRecoveryBit(e) {
                  return new p(this.r, this.s, e);
                }
                recoverPublicKey(e) {
                  let { r: s, s: n, recovery: c } = this,
                    l = y(iM("msgHash", e));
                  if (null == c || ![0, 1, 2, 3].includes(c))
                    throw Error("recovery id invalid");
                  let h = 2 === c || 3 === c ? s + t.n : s;
                  if (h >= i.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let d = (1 & c) == 0 ? "02" : "03",
                    p = a.fromHex(d + u(h)),
                    g = rt(h, r),
                    f = o(-l * g),
                    m = o(n * g),
                    b = a.BASE.multiplyAndAddUnsafe(p, f, m);
                  if (!b) throw Error("point at infinify");
                  return b.assertValidity(), b;
                }
                hasHighS() {
                  return this.s > r >> rR;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new p(this.r, o(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return iU(this.toDERHex());
                }
                toDERHex() {
                  return rA.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return iU(this.toCompactHex());
                }
                toCompactHex() {
                  return u(this.r) + u(this.s);
                }
              }
              function g(e) {
                let t = iO(e),
                  i = "string" == typeof e,
                  r = (t || i) && e.length;
                return t
                  ? r === s || r === n
                  : i
                  ? r === 2 * s || r === 2 * n
                  : e instanceof a;
              }
              let f =
                  t.bits2int ||
                  function (e) {
                    if (e.length > 8192) throw Error("input is too large");
                    let i = iD(e),
                      r = 8 * e.length - t.nBitLength;
                    return r > 0 ? i >> BigInt(r) : i;
                  },
                y =
                  t.bits2int_modN ||
                  function (e) {
                    return o(f(e));
                  },
                m = iW(t.nBitLength);
              function b(e) {
                return (
                  iV("num < 2^" + t.nBitLength, e, rC, m), iB(e, t.nByteLength)
                );
              }
              let w = { lowS: t.lowS, prehash: !1 },
                v = { lowS: t.lowS, prehash: !1 };
              return (
                a.BASE._setWindowSize(8),
                {
                  CURVE: t,
                  getPublicKey: function (e, t = !0) {
                    return a.fromPrivateKey(e).toRawBytes(t);
                  },
                  getSharedSecret: function (e, t, i = !0) {
                    if (g(e)) throw Error("first arg must be private key");
                    if (!g(t)) throw Error("second arg must be public key");
                    return a.fromHex(t).multiply(c(e)).toRawBytes(i);
                  },
                  sign: function (e, s, n = w) {
                    let { seed: l, k2sig: u } = (function (e, s, n = w) {
                      if (["recovered", "canonical"].some((e) => e in n))
                        throw Error("sign() legacy options not supported");
                      let { hash: l, randomBytes: u } = t,
                        { lowS: d, prehash: g, extraEntropy: m } = n;
                      null == d && (d = !0),
                        (e = iM("msgHash", e)),
                        r_(n),
                        g && (e = iM("prehashed msgHash", l(e)));
                      let v = y(e),
                        E = c(s),
                        I = [b(E), b(v)];
                      if (null != m && !1 !== m) {
                        let e = !0 === m ? u(i.BYTES) : m;
                        I.push(iM("extraEntropy", e));
                      }
                      return {
                        seed: iz(...I),
                        k2sig: function (e) {
                          var t;
                          let i = f(e);
                          if (!h(i)) return;
                          let s = rt(i, r),
                            n = a.BASE.multiply(i).toAffine(),
                            c = o(n.x);
                          if (c === rC) return;
                          let l = o(s * o(v + c * E));
                          if (l === rC) return;
                          let u = (2 * (n.x !== c)) | Number(n.y & rR),
                            g = l;
                          return (
                            d &&
                              l > r >> rR &&
                              ((g = (t = l) > r >> rR ? o(-t) : t), (u ^= 1)),
                            new p(c, g, u)
                          );
                        },
                      };
                    })(e, s, n);
                    return iZ(t.hash.outputLen, t.nByteLength, t.hmac)(l, u);
                  },
                  verify: function (e, i, s, n = v) {
                    let c, l;
                    (i = iM("msgHash", i)), (s = iM("publicKey", s));
                    let { lowS: h, prehash: u, format: d } = n;
                    if ((r_(n), "strict" in n))
                      throw Error("options.strict was renamed to lowS");
                    if (void 0 !== d && "compact" !== d && "der" !== d)
                      throw Error("format must be compact or der");
                    let g = "string" == typeof e || iO(e),
                      f =
                        !g &&
                        !d &&
                        "object" == typeof e &&
                        null !== e &&
                        "bigint" == typeof e.r &&
                        "bigint" == typeof e.s;
                    if (!g && !f)
                      throw Error(
                        "invalid signature, expected Uint8Array, hex string or Signature instance"
                      );
                    try {
                      if ((f && (c = new p(e.r, e.s)), g)) {
                        try {
                          "compact" !== d && (c = p.fromDER(e));
                        } catch (e) {
                          if (!(e instanceof rA.Err)) throw e;
                        }
                        c || "der" === d || (c = p.fromCompact(e));
                      }
                      l = a.fromHex(s);
                    } catch {
                      return !1;
                    }
                    if (!c || (h && c.hasHighS())) return !1;
                    u && (i = t.hash(i));
                    let { r: m, s: b } = c,
                      w = y(i),
                      E = rt(b, r),
                      I = o(w * E),
                      P = o(m * E),
                      _ = a.BASE.multiplyAndAddUnsafe(l, I, P)?.toAffine();
                    return !!_ && o(_.x) === m;
                  },
                  ProjectivePoint: a,
                  Signature: p,
                  utils: {
                    isValidPrivateKey(e) {
                      try {
                        return c(e), !0;
                      } catch {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: c,
                    randomPrivateKey: () => {
                      let e = ro(t.n);
                      return (function (e, t, i = !1) {
                        let r = e.length,
                          s = rn(t),
                          n = ro(t);
                        if (r < 16 || r < n || r > 1024)
                          throw Error(
                            "expected " + n + "-1024 bytes of input, got " + r
                          );
                        let o = i9(i ? i$(e) : iD(e), t - i2) + i2;
                        return i ? iL(o, s) : iB(o, s);
                      })(t.randomBytes(e), t.n);
                    },
                    precompute: (e = 8, t = a.BASE) => (
                      t._setWindowSize(e), t.multiply(BigInt(3)), t
                    ),
                  },
                }
              );
            })({
              ...e,
              hash: t,
              hmac: (e, ...i) =>
                ip(
                  t,
                  e,
                  (function (...e) {
                    let t = 0;
                    for (let i = 0; i < e.length; i++) {
                      let r = e[i];
                      eZ(r), (t += r.length);
                    }
                    let i = new Uint8Array(t);
                    for (let t = 0, r = 0; t < e.length; t++) {
                      let s = e[t];
                      i.set(s, r), (r += s.length);
                    }
                    return i;
                  })(...i)
                ),
              randomBytes: ts,
            });
          return { ...i(t), create: i };
        })(
          {
            a: rT.create(BigInt("-3")),
            b: BigInt(
              "0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"
            ),
            Fp: rT,
            n: BigInt(
              "0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"
            ),
            Gx: BigInt(
              "0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"
            ),
            Gy: BigInt(
              "0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"
            ),
            h: BigInt(1),
            lowS: !1,
          },
          iP
        ),
        rk = "base10",
        rj = "base16",
        rU = "base64pad",
        rD = "base64url",
        r$ = "utf8";
      function rB() {
        let e = ts(32);
        return (0, ea.dI)(e, rj);
      }
      function rL(e) {
        let t = iP((0, ea.sH)(e, rj));
        return (0, ea.dI)(t, rj);
      }
      function rM(e) {
        let t = iP((0, ea.sH)(e, r$));
        return (0, ea.dI)(t, rj);
      }
      function rz(e) {
        return (0, ea.sH)(`${e}`, rk);
      }
      function rH(e) {
        return Number((0, ea.dI)(e, rk));
      }
      function rK(e) {
        return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      }
      function rV(e) {
        let t = e.replace(/-/g, "+").replace(/_/g, "/"),
          i = (4 - (t.length % 4)) % 4;
        return t + "=".repeat(i);
      }
      function rF(e) {
        if (2 === rH(e.type))
          return (0, ea.dI)((0, ea.xW)([e.type, e.sealed]), rU);
        if (1 === rH(e.type)) {
          if (typeof e.senderPublicKey > "u")
            throw Error("Missing sender public key for type 1 envelope");
          return (0, ea.dI)(
            (0, ea.xW)([e.type, e.senderPublicKey, e.iv, e.sealed]),
            rU
          );
        }
        return (0, ea.dI)((0, ea.xW)([e.type, e.iv, e.sealed]), rU);
      }
      function rW(e) {
        let t = (e.encoding || rU) === rD ? rV(e.encoded) : e.encoded,
          i = (0, ea.sH)(t, rU),
          r = i.slice(0, 1);
        if (1 === rH(r)) {
          let e = i.slice(1, 33),
            t = i.slice(33, 45);
          return { type: r, sealed: i.slice(45), iv: t, senderPublicKey: e };
        }
        if (2 === rH(r)) return { type: r, sealed: i.slice(1), iv: ts(12) };
        let s = i.slice(1, 13);
        return { type: r, sealed: i.slice(13), iv: s };
      }
      function rG(e) {
        let t = e?.type || 0;
        if (1 === t) {
          if (typeof e?.senderPublicKey > "u")
            throw Error("missing sender public key");
          if (typeof e?.receiverPublicKey > "u")
            throw Error("missing receiver public key");
        }
        return {
          type: t,
          senderPublicKey: e?.senderPublicKey,
          receiverPublicKey: e?.receiverPublicKey,
        };
      }
      function rJ(e) {
        return (
          1 === e.type &&
          "string" == typeof e.senderPublicKey &&
          "string" == typeof e.receiverPublicKey
        );
      }
      function rZ(e) {
        return e?.relay || { protocol: "irn" };
      }
      function rY(e) {
        let t = ec.CG[e];
        if (typeof t > "u") throw Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      function rQ(e) {
        var t;
        if (!e.includes("wc:")) {
          let t = eG(e);
          null != t && t.includes("wc:") && (e = t);
        }
        let i = (e = (e = e.includes("wc://")
            ? e.replace("wc://", "")
            : e).includes("wc:")
            ? e.replace("wc:", "")
            : e).indexOf(":"),
          r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
          s = e.substring(0, i),
          n = e.substring(i + 1, r).split("@"),
          o = new URLSearchParams("u" > typeof r ? e.substring(r) : ""),
          a = {};
        o.forEach((e, t) => {
          a[t] = e;
        });
        let c = "string" == typeof a.methods ? a.methods.split(",") : void 0;
        return {
          protocol: s,
          topic: (t = n[0]).startsWith("//") ? t.substring(2) : t,
          version: parseInt(n[1], 10),
          symKey: a.symKey,
          relay: (function (e, t = "-") {
            let i = {},
              r = "relay" + t;
            return (
              Object.keys(e).forEach((t) => {
                if (t.startsWith(r)) {
                  let s = t.replace(r, ""),
                    n = e[t];
                  i[s] = n;
                }
              }),
              i
            );
          })(a),
          methods: c,
          expiryTimestamp: a.expiryTimestamp
            ? parseInt(a.expiryTimestamp, 10)
            : void 0,
        };
      }
      function rX(e) {
        let t = new URLSearchParams(),
          i = (function (e, t = "-") {
            let i = {};
            return (
              Object.keys(e).forEach((r) => {
                e[r] && (i["relay" + t + r] = e[r]);
              }),
              i
            );
          })(e.relay);
        Object.keys(i)
          .sort()
          .forEach((e) => {
            t.set(e, i[e]);
          }),
          t.set("symKey", e.symKey),
          e.expiryTimestamp &&
            t.set("expiryTimestamp", e.expiryTimestamp.toString()),
          e.methods && t.set("methods", e.methods.join(","));
        let r = t.toString();
        return `${e.protocol}:${e.topic}@${e.version}?${r}`;
      }
      function r0(e, t, i) {
        return `${e}?wc_ev=${i}&topic=${t}`;
      }
      var r1 = Object.defineProperty,
        r2 = Object.defineProperties,
        r8 = Object.getOwnPropertyDescriptors,
        r5 = Object.getOwnPropertySymbols,
        r3 = Object.prototype.hasOwnProperty,
        r6 = Object.prototype.propertyIsEnumerable,
        r4 = (e, t, i) =>
          t in e
            ? r1(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        r9 = (e, t) => {
          for (var i in t || (t = {})) r3.call(t, i) && r4(e, i, t[i]);
          if (r5) for (var i of r5(t)) r6.call(t, i) && r4(e, i, t[i]);
          return e;
        },
        r7 = (e, t) => r2(e, r8(t));
      function se(e) {
        let t = [];
        return (
          e.forEach((e) => {
            let [i, r] = e.split(":");
            t.push(`${i}:${r}`);
          }),
          t
        );
      }
      function st(e) {
        return e.includes(":");
      }
      function si(e) {
        return st(e) ? e.split(":")[0] : e;
      }
      function sr(e) {
        var t, i, r;
        let s = {};
        if (!sh(e)) return s;
        for (let [n, o] of Object.entries(e)) {
          let e = st(n) ? [n] : o.chains,
            a = o.methods || [],
            c = o.events || [],
            l = si(n);
          s[l] = r7(r9({}, s[l]), {
            chains: ez(e, null == (t = s[l]) ? void 0 : t.chains),
            methods: ez(a, null == (i = s[l]) ? void 0 : i.methods),
            events: ez(c, null == (r = s[l]) ? void 0 : r.events),
          });
        }
        return s;
      }
      function ss(e, t) {
        let i = (function (e) {
          let t = {};
          return (
            e?.forEach((e) => {
              var i;
              let [r, s] = e.split(":");
              t[r] ||
                (t[r] = { accounts: [], chains: [], events: [], methods: [] }),
                t[r].accounts.push(e),
                null == (i = t[r].chains) || i.push(`${r}:${s}`);
            }),
            t
          );
        })((t = t.map((e) => e.replace("did:pkh:", ""))));
        for (let [t, r] of Object.entries(i))
          r.methods ? (r.methods = ez(r.methods, e)) : (r.methods = e),
            (r.events = ["chainChanged", "accountsChanged"]);
        return i;
      }
      let sn = {
          INVALID_METHOD: { message: "Invalid method.", code: 1001 },
          INVALID_EVENT: { message: "Invalid event.", code: 1002 },
          INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003,
          },
          INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004,
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
          UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003,
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004,
          },
          USER_REJECTED: { message: "User rejected.", code: 5e3 },
          USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001,
          },
          USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002,
          },
          USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003,
          },
          UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
          UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
          UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
          UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103,
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104,
          },
          USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
          SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3,
          },
          WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001,
          },
        },
        so = {
          NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
          NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
          RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
          RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
          MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
          EXPIRED: { message: "Expired.", code: 6 },
          UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
          MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
          NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9,
          },
        };
      function sa(e, t) {
        let { message: i, code: r } = so[e];
        return { message: t ? `${i} ${t}` : i, code: r };
      }
      function sc(e, t) {
        let { message: i, code: r } = sn[e];
        return { message: t ? `${i} ${t}` : i, code: r };
      }
      function sl(e, t) {
        return (
          !!Array.isArray(e) && (!("u" > typeof t) || !e.length || e.every(t))
        );
      }
      function sh(e) {
        return (
          Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
        );
      }
      function su(e) {
        return typeof e > "u";
      }
      function sd(e, t) {
        return !!(t && su(e)) || ("string" == typeof e && !!e.trim().length);
      }
      function sp(e, t) {
        return !!(t && su(e)) || ("number" == typeof e && !isNaN(e));
      }
      function sg(e) {
        return !!(sd(e, !1) && e.includes(":")) && 2 === e.split(":").length;
      }
      function sf(e) {
        let t = !0;
        return (
          sl(e) ? e.length && (t = e.every((e) => sd(e, !1))) : (t = !1), t
        );
      }
      function sy(e, t) {
        let i = null;
        return (
          Object.values(e).forEach((e) => {
            var r;
            let s;
            if (i) return;
            let n =
              ((r = `${t}, namespace`),
              (s = null),
              sf(e?.methods)
                ? sf(e?.events) ||
                  (s = sc(
                    "UNSUPPORTED_EVENTS",
                    `${r}, events should be an array of strings or empty array for no events`
                  ))
                : (s = sc(
                    "UNSUPPORTED_METHODS",
                    `${r}, methods should be an array of strings or empty array for no methods`
                  )),
              s);
            n && (i = n);
          }),
          i
        );
      }
      function sm(e, t) {
        let i = null;
        if (e && sh(e)) {
          let r,
            s = sy(e, t);
          s && (i = s);
          let n =
            ((r = null),
            Object.values(e).forEach((e) => {
              var i, s;
              let n;
              if (r) return;
              let o =
                ((i = e?.accounts),
                (s = `${t} namespace`),
                (n = null),
                sl(i)
                  ? i.forEach((e) => {
                      n ||
                        (function (e) {
                          if (sd(e, !1) && e.includes(":")) {
                            let t = e.split(":");
                            if (3 === t.length) {
                              let e = t[0] + ":" + t[1];
                              return !!t[2] && sg(e);
                            }
                          }
                          return !1;
                        })(e) ||
                        (n = sc(
                          "UNSUPPORTED_ACCOUNTS",
                          `${s}, account ${e} should be a string and conform to "namespace:chainId:address" format`
                        ));
                    })
                  : (n = sc(
                      "UNSUPPORTED_ACCOUNTS",
                      `${s}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
                    )),
                n);
              o && (r = o);
            }),
            r);
          n && (i = n);
        } else
          i = sa(
            "MISSING_OR_INVALID",
            `${t}, namespaces should be an object with data`
          );
        return i;
      }
      function sb(e) {
        return sd(e.protocol, !0);
      }
      function sw(e) {
        return "u" > typeof e;
      }
      function sv(e, t) {
        return !(
          !sg(t) ||
          !(function (e) {
            let t = [];
            return (
              Object.values(e).forEach((e) => {
                t.push(...se(e.accounts));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function sE(e, t, i) {
        let r = null,
          s = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((i) => {
                var r;
                i.includes(":")
                  ? (t[i] = e[i])
                  : null == (r = e[i].chains) ||
                    r.forEach((r) => {
                      t[r] = { methods: e[i].methods, events: e[i].events };
                    });
              }),
              t
            );
          })(e),
          n = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((i) => {
                if (i.includes(":")) t[i] = e[i];
                else {
                  let r = se(e[i].accounts);
                  r?.forEach((r) => {
                    t[r] = {
                      accounts: e[i].accounts.filter((e) =>
                        e.includes(`${r}:`)
                      ),
                      methods: e[i].methods,
                      events: e[i].events,
                    };
                  });
                }
              }),
              t
            );
          })(t),
          o = Object.keys(s),
          a = Object.keys(n),
          c = sI(Object.keys(e)),
          l = sI(Object.keys(t)),
          h = c.filter((e) => !l.includes(e));
        return (
          h.length &&
            (r = sa(
              "NON_CONFORMING_NAMESPACES",
              `${i} namespaces keys don't satisfy requiredNamespaces.
      Required: ${h.toString()}
      Received: ${Object.keys(t).toString()}`
            )),
          eT(o, a) ||
            (r = sa(
              "NON_CONFORMING_NAMESPACES",
              `${i} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`
            )),
          Object.keys(t).forEach((e) => {
            if (!e.includes(":") || r) return;
            let s = se(t[e].accounts);
            s.includes(e) ||
              (r = sa(
                "NON_CONFORMING_NAMESPACES",
                `${i} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${s.toString()}`
              ));
          }),
          o.forEach((e) => {
            r ||
              (eT(s[e].methods, n[e].methods)
                ? eT(s[e].events, n[e].events) ||
                  (r = sa(
                    "NON_CONFORMING_NAMESPACES",
                    `${i} namespaces events don't satisfy namespace events for ${e}`
                  ))
                : (r = sa(
                    "NON_CONFORMING_NAMESPACES",
                    `${i} namespaces methods don't satisfy namespace methods for ${e}`
                  )));
          }),
          r
        );
      }
      function sI(e) {
        return [
          ...new Set(e.map((e) => (e.includes(":") ? e.split(":")[0] : e))),
        ];
      }
      function sP() {
        let e = eA();
        return new Promise((t) => {
          switch (e) {
            case e_.browser:
              t(eO() && navigator?.onLine);
              break;
            case e_.reactNative:
              t(s_());
              break;
            case e_.node:
            default:
              t(!0);
          }
        });
      }
      async function s_() {
        if (eS() && "u" > typeof i.g && null != i.g && i.g.NetInfo) {
          let e = await (null == i.g ? void 0 : i.g.NetInfo.fetch());
          return e?.isConnected;
        }
        return !0;
      }
      let sx = {};
      class sS {
        static get(e) {
          return sx[e];
        }
        static set(e, t) {
          sx[e] = t;
        }
        static delete(e) {
          delete sx[e];
        }
      }
      var sO = i(97061),
        sA = i(70441),
        sC = i(19655),
        sR = i(76589),
        sN = Object.defineProperty,
        sT = (e, t, i) =>
          t in e
            ? sN(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        sq = (e, t, i) => sT(e, "symbol" != typeof t ? t + "" : t, i);
      class sk extends sR.H {
        constructor(e) {
          super(),
            (this.opts = e),
            sq(this, "protocol", "wc"),
            sq(this, "version", 2);
        }
      }
      var sj = Object.defineProperty,
        sU = (e, t, i) =>
          t in e
            ? sj(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        sD = (e, t, i) => sU(e, "symbol" != typeof t ? t + "" : t, i);
      class s$ extends sR.H {
        constructor(e, t) {
          super(),
            (this.core = e),
            (this.logger = t),
            sD(this, "records", new Map());
        }
      }
      class sB {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      }
      class sL extends sR.H {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class sM extends sR.H {
        constructor(e) {
          super();
        }
      }
      class sz {
        constructor(e, t, i, r) {
          (this.core = e), (this.logger = t), (this.name = i);
        }
      }
      var sH = Object.defineProperty;
      class sK extends sR.H {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class sV extends sR.H {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      class sF {
        constructor(e, t, i) {
          (this.core = e), (this.logger = t), (this.store = i);
        }
      }
      class sW {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class sG {
        constructor(e, t, i) {
          (this.core = e), (this.logger = t), (this.telemetryEnabled = i);
        }
      }
      var sJ = Object.defineProperty,
        sZ = (e, t, i) =>
          t in e
            ? sJ(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        sY = (e, t, i) => sZ(e, "symbol" != typeof t ? t + "" : t, i);
      s();
      class sQ {
        constructor(e) {
          (this.opts = e), sY(this, "protocol", "wc"), sY(this, "version", 2);
        }
      }
      r.EventEmitter;
      class sX {
        constructor(e) {
          this.client = e;
        }
      }
      var s0 = i(71075),
        s1 = i(77226),
        s2 = i(75086),
        s8 = i(90628),
        s5 = i(44134).Buffer,
        s3 = i(87358);
      let s6 = "core",
        s4 = `wc@2:${s6}:`,
        s9 = { logger: "error" },
        s7 = { database: ":memory:" },
        ne = "client_ed25519_seed",
        nt = o.ONE_DAY,
        ni = o.SIX_HOURS,
        nr = "wss://relay.walletconnect.org",
        ns = {
          message: "relayer_message",
          message_ack: "relayer_message_ack",
          connect: "relayer_connect",
          disconnect: "relayer_disconnect",
          error: "relayer_error",
          connection_stalled: "relayer_connection_stalled",
          publish: "relayer_publish",
        },
        nn = {
          payload: "payload",
          connect: "connect",
          disconnect: "disconnect",
          error: "error",
        },
        no = "2.21.1",
        na = { link_mode: "link_mode", relay: "relay" },
        nc = { inbound: "inbound", outbound: "outbound" },
        nl = "WALLETCONNECT_LINK_MODE_APPS",
        nh = {
          created: "subscription_created",
          deleted: "subscription_deleted",
          sync: "subscription_sync",
          resubscribed: "subscription_resubscribed",
        },
        nu =
          (o.FIVE_SECONDS,
          {
            wc_pairingDelete: {
              req: { ttl: o.ONE_DAY, prompt: !1, tag: 1e3 },
              res: { ttl: o.ONE_DAY, prompt: !1, tag: 1001 },
            },
            wc_pairingPing: {
              req: { ttl: o.THIRTY_SECONDS, prompt: !1, tag: 1002 },
              res: { ttl: o.THIRTY_SECONDS, prompt: !1, tag: 1003 },
            },
            unregistered_method: {
              req: { ttl: o.ONE_DAY, prompt: !1, tag: 0 },
              res: { ttl: o.ONE_DAY, prompt: !1, tag: 0 },
            },
          }),
        nd = {
          create: "pairing_create",
          expire: "pairing_expire",
          delete: "pairing_delete",
          ping: "pairing_ping",
        },
        np = {
          created: "history_created",
          updated: "history_updated",
          deleted: "history_deleted",
          sync: "history_sync",
        },
        ng = {
          created: "expirer_created",
          deleted: "expirer_deleted",
          expired: "expirer_expired",
          sync: "expirer_sync",
        },
        nf = "https://verify.walletconnect.org",
        ny = `${nf}/v3`,
        nm = ["https://verify.walletconnect.com", nf],
        nb = {
          pairing_started: "pairing_started",
          pairing_uri_validation_success: "pairing_uri_validation_success",
          pairing_uri_not_expired: "pairing_uri_not_expired",
          store_new_pairing: "store_new_pairing",
          subscribing_pairing_topic: "subscribing_pairing_topic",
          subscribe_pairing_topic_success: "subscribe_pairing_topic_success",
          existing_pairing: "existing_pairing",
          pairing_not_expired: "pairing_not_expired",
          emit_inactive_pairing: "emit_inactive_pairing",
          emit_session_proposal: "emit_session_proposal",
        },
        nw = {
          no_internet_connection: "no_internet_connection",
          malformed_pairing_uri: "malformed_pairing_uri",
          active_pairing_already_exists: "active_pairing_already_exists",
          subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
          pairing_expired: "pairing_expired",
          proposal_listener_not_found: "proposal_listener_not_found",
        },
        nv = {
          session_approve_started: "session_approve_started",
          session_namespaces_validation_success:
            "session_namespaces_validation_success",
          subscribing_session_topic: "subscribing_session_topic",
          subscribe_session_topic_success: "subscribe_session_topic_success",
          publishing_session_approve: "publishing_session_approve",
          session_approve_publish_success: "session_approve_publish_success",
          store_session: "store_session",
          publishing_session_settle: "publishing_session_settle",
          session_settle_publish_success: "session_settle_publish_success",
        },
        nE = {
          no_internet_connection: "no_internet_connection",
          proposal_expired: "proposal_expired",
          subscribe_session_topic_failure: "subscribe_session_topic_failure",
          session_approve_publish_failure: "session_approve_publish_failure",
          session_settle_publish_failure: "session_settle_publish_failure",
          session_approve_namespace_validation_failure:
            "session_approve_namespace_validation_failure",
          proposal_not_found: "proposal_not_found",
        },
        nI = {
          authenticated_session_approve_started:
            "authenticated_session_approve_started",
          create_authenticated_session_topic:
            "create_authenticated_session_topic",
          cacaos_verified: "cacaos_verified",
          store_authenticated_session: "store_authenticated_session",
          subscribing_authenticated_session_topic:
            "subscribing_authenticated_session_topic",
          subscribe_authenticated_session_topic_success:
            "subscribe_authenticated_session_topic_success",
          publishing_authenticated_session_approve:
            "publishing_authenticated_session_approve",
        },
        nP = {
          no_internet_connection: "no_internet_connection",
          invalid_cacao: "invalid_cacao",
          subscribe_authenticated_session_topic_failure:
            "subscribe_authenticated_session_topic_failure",
          authenticated_session_approve_publish_failure:
            "authenticated_session_approve_publish_failure",
          authenticated_session_pending_request_not_found:
            "authenticated_session_pending_request_not_found",
        };
      var n_ = function (e, t) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var i = new Uint8Array(256), r = 0; r < i.length; r++) i[r] = 255;
        for (var s = 0; s < e.length; s++) {
          var n = e.charAt(s),
            o = n.charCodeAt(0);
          if (255 !== i[o]) throw TypeError(n + " is ambiguous");
          i[o] = s;
        }
        var a = e.length,
          c = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          h = Math.log(256) / Math.log(a);
        function u(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (" " !== e[0]) {
            for (var r = 0, s = 0; e[t] === c; ) r++, t++;
            for (
              var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n);
              e[t];

            ) {
              var h = i[e.charCodeAt(t)];
              if (255 === h) return;
              for (
                var u = 0, d = n - 1;
                (0 !== h || u < s) && -1 !== d;
                d--, u++
              )
                (h += (a * o[d]) >>> 0),
                  (o[d] = h % 256 >>> 0),
                  (h = (h / 256) >>> 0);
              if (0 !== h) throw Error("Non-zero carry");
              (s = u), t++;
            }
            if (" " !== e[t]) {
              for (var p = n - s; p !== n && 0 === o[p]; ) p++;
              for (var g = new Uint8Array(r + (n - p)), f = r; p !== n; )
                g[f++] = o[p++];
              return g;
            }
          }
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === t.length) return "";
            for (var i = 0, r = 0, s = 0, n = t.length; s !== n && 0 === t[s]; )
              s++, i++;
            for (
              var o = ((n - s) * h + 1) >>> 0, l = new Uint8Array(o);
              s !== n;

            ) {
              for (
                var u = t[s], d = 0, p = o - 1;
                (0 !== u || d < r) && -1 !== p;
                p--, d++
              )
                (u += (256 * l[p]) >>> 0),
                  (l[p] = u % a >>> 0),
                  (u = (u / a) >>> 0);
              if (0 !== u) throw Error("Non-zero carry");
              (r = d), s++;
            }
            for (var g = o - r; g !== o && 0 === l[g]; ) g++;
            for (var f = c.repeat(i); g < o; ++g) f += e.charAt(l[g]);
            return f;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var i = u(e);
            if (i) return i;
            throw Error(`Non-${t} character`);
          },
        };
      };
      let nx = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        nS = (e) => new TextEncoder().encode(e),
        nO = (e) => new TextDecoder().decode(e);
      class nA {
        constructor(e, t, i) {
          (this.name = e), (this.prefix = t), (this.baseEncode = i);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class nC {
        constructor(e, t, i) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return nN(this, e);
        }
      }
      class nR {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return nN(this, e);
        }
        decode(e) {
          let t = e[0],
            i = this.decoders[t];
          if (i) return i.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      let nN = (e, t) =>
        new nR({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class nT {
        constructor(e, t, i, r) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = i),
            (this.baseDecode = r),
            (this.encoder = new nA(e, t, i)),
            (this.decoder = new nC(e, t, r));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let nq = ({ name: e, prefix: t, encode: i, decode: r }) =>
          new nT(e, t, i, r),
        nk = ({ prefix: e, name: t, alphabet: i }) => {
          let { encode: r, decode: s } = n_(i, t);
          return nq({ prefix: e, name: t, encode: r, decode: (e) => nx(s(e)) });
        },
        nj = (e, t, i, r) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; "=" === e[n - 1]; ) --n;
          let o = new Uint8Array(((n * i) / 8) | 0),
            a = 0,
            c = 0,
            l = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${r} character`);
            (c = (c << i) | n),
              (a += i) >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
          }
          if (a >= i || 255 & (c << (8 - a)))
            throw SyntaxError("Unexpected end of data");
          return o;
        },
        nU = (e, t, i) => {
          let r = "=" === t[t.length - 1],
            s = (1 << i) - 1,
            n = "",
            o = 0,
            a = 0;
          for (let r = 0; r < e.length; ++r)
            for (a = (a << 8) | e[r], o += 8; o > i; )
              (o -= i), (n += t[s & (a >> o)]);
          if ((o && (n += t[s & (a << (i - o))]), r))
            for (; (n.length * i) & 7; ) n += "=";
          return n;
        },
        nD = ({ name: e, prefix: t, bitsPerChar: i, alphabet: r }) =>
          nq({
            prefix: t,
            name: e,
            encode: (e) => nU(e, r, i),
            decode: (t) => nj(t, r, i, e),
          });
      var n$ = Object.freeze({
          __proto__: null,
          identity: nq({
            prefix: "\0",
            name: "identity",
            encode: (e) => nO(e),
            decode: (e) => nS(e),
          }),
        }),
        nB = Object.freeze({
          __proto__: null,
          base2: nD({
            prefix: "0",
            name: "base2",
            alphabet: "01",
            bitsPerChar: 1,
          }),
        }),
        nL = Object.freeze({
          __proto__: null,
          base8: nD({
            prefix: "7",
            name: "base8",
            alphabet: "01234567",
            bitsPerChar: 3,
          }),
        }),
        nM = Object.freeze({
          __proto__: null,
          base10: nk({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        }),
        nz = Object.freeze({
          __proto__: null,
          base16: nD({
            prefix: "f",
            name: "base16",
            alphabet: "0123456789abcdef",
            bitsPerChar: 4,
          }),
          base16upper: nD({
            prefix: "F",
            name: "base16upper",
            alphabet: "0123456789ABCDEF",
            bitsPerChar: 4,
          }),
        });
      let nH = nD({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        nK = nD({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        nV = nD({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        nF = nD({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        nW = nD({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        nG = nD({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        nJ = nD({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        });
      var nZ = Object.freeze({
          __proto__: null,
          base32: nH,
          base32upper: nK,
          base32pad: nV,
          base32padupper: nF,
          base32hex: nW,
          base32hexupper: nG,
          base32hexpad: nJ,
          base32hexpadupper: nD({
            prefix: "T",
            name: "base32hexpadupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
            bitsPerChar: 5,
          }),
          base32z: nD({
            prefix: "h",
            name: "base32z",
            alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
            bitsPerChar: 5,
          }),
        }),
        nY = Object.freeze({
          __proto__: null,
          base36: nk({
            prefix: "k",
            name: "base36",
            alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
          }),
          base36upper: nk({
            prefix: "K",
            name: "base36upper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          }),
        }),
        nQ = Object.freeze({
          __proto__: null,
          base58btc: nk({
            name: "base58btc",
            prefix: "z",
            alphabet:
              "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
          }),
          base58flickr: nk({
            name: "base58flickr",
            prefix: "Z",
            alphabet:
              "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
          }),
        });
      let nX = nD({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        n0 = nD({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        });
      var n1 = Object.freeze({
        __proto__: null,
        base64: nX,
        base64pad: n0,
        base64url: nD({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        base64urlpad: nD({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
      });
      let n2 = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        n8 = n2.reduce((e, t, i) => ((e[i] = t), e), []),
        n5 = n2.reduce((e, t, i) => ((e[t.codePointAt(0)] = i), e), []);
      var n3 = Object.freeze({
        __proto__: null,
        base256emoji: nq({
          prefix: "\uD83D\uDE80",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce((e, t) => (e += n8[t]), "");
          },
          decode: function (e) {
            let t = [];
            for (let i of e) {
              let e = n5[i.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${i}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        }),
      });
      function n6(e, t, i) {
        (t = t || []), (i = i || 0);
        for (var r = i; e >= 0x80000000; )
          (t[i++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[i++] = (255 & e) | 128), (e >>>= 7);
        return (t[i] = 0 | e), (n6.bytes = i - r + 1), t;
      }
      function n4(e, t) {
        var i,
          r = 0,
          t = t || 0,
          s = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o)
            throw ((n4.bytes = 0), RangeError("Could not decode varint"));
          (i = e[n++]),
            (r += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s)),
            (s += 7);
        } while (i >= 128);
        return (n4.bytes = n - t), r;
      }
      var n9 = {
        encode: n6,
        encodingLength: function (e) {
          return e < 128
            ? 1
            : e < 16384
            ? 2
            : e < 2097152
            ? 3
            : e < 0x10000000
            ? 4
            : e < 0x800000000
            ? 5
            : e < 0x40000000000
            ? 6
            : e < 0x2000000000000
            ? 7
            : e < 0x100000000000000
            ? 8
            : e < 0x8000000000000000
            ? 9
            : 10;
        },
      };
      let n7 = (e, t, i = 0) => (n9.encode(e, t, i), t),
        oe = (e) => n9.encodingLength(e),
        ot = (e, t) => {
          let i = t.byteLength,
            r = oe(e),
            s = r + oe(i),
            n = new Uint8Array(s + i);
          return n7(e, n, 0), n7(i, n, r), n.set(t, s), new oi(e, i, t, n);
        };
      class oi {
        constructor(e, t, i, r) {
          (this.code = e), (this.size = t), (this.digest = i), (this.bytes = r);
        }
      }
      let or = ({ name: e, code: t, encode: i }) => new os(e, t, i);
      class os {
        constructor(e, t, i) {
          (this.name = e), (this.code = t), (this.encode = i);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array
              ? ot(this.code, t)
              : t.then((e) => ot(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      let on = (e) => async (t) =>
        new Uint8Array(await crypto.subtle.digest(e, t));
      var oo = Object.freeze({
          __proto__: null,
          sha256: or({ name: "sha2-256", code: 18, encode: on("SHA-256") }),
          sha512: or({ name: "sha2-512", code: 19, encode: on("SHA-512") }),
        }),
        oa = Object.freeze({
          __proto__: null,
          identity: {
            code: 0,
            name: "identity",
            encode: nx,
            digest: (e) => ot(0, nx(e)),
          },
        });
      new TextEncoder(), new TextDecoder();
      let oc = {
        ...n$,
        ...nB,
        ...nL,
        ...nM,
        ...nz,
        ...nZ,
        ...nY,
        ...nQ,
        ...n1,
        ...n3,
      };
      function ol(e, t, i, r) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: i },
          decoder: { decode: r },
        };
      }
      ({ ...oo, ...oa });
      let oh = ol(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        ou = ol(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
            return t;
          },
          (e) => {
            let t = (function (e = 0) {
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? globalThis.Buffer.allocUnsafe(e)
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
            return t;
          }
        ),
        od = {
          utf8: oh,
          "utf-8": oh,
          hex: oc.base16,
          latin1: ou,
          ascii: ou,
          binary: ou,
          ...oc,
        };
      var op = Object.defineProperty,
        og = (e, t, i) =>
          t in e
            ? op(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        of = (e, t, i) => og(e, "symbol" != typeof t ? t + "" : t, i);
      class oy {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            of(this, "keychain", new Map()),
            of(this, "name", "keychain"),
            of(this, "version", "0.3"),
            of(this, "initialized", !1),
            of(this, "storagePrefix", s4),
            of(this, "init", async () => {
              if (!this.initialized) {
                let e = await this.getKeyChain();
                "u" > typeof e && (this.keychain = e), (this.initialized = !0);
              }
            }),
            of(
              this,
              "has",
              (e) => (this.isInitialized(), this.keychain.has(e))
            ),
            of(this, "set", async (e, t) => {
              this.isInitialized(),
                this.keychain.set(e, t),
                await this.persist();
            }),
            of(this, "get", (e) => {
              this.isInitialized();
              let t = this.keychain.get(e);
              if (typeof t > "u") {
                let { message: t } = sa(
                  "NO_MATCHING_KEY",
                  `${this.name}: ${e}`
                );
                throw Error(t);
              }
              return t;
            }),
            of(this, "del", async (e) => {
              this.isInitialized(),
                this.keychain.delete(e),
                await this.persist();
            }),
            (this.core = e),
            (this.logger = (0, sC.U5)(t, this.name));
        }
        get context() {
          return (0, sC.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, eq(e));
        }
        async getKeyChain() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? ek(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = sa("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var om = Object.defineProperty,
        ob = (e, t, i) =>
          t in e
            ? om(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        ow = (e, t, i) => ob(e, "symbol" != typeof t ? t + "" : t, i);
      class ov {
        constructor(e, t, i) {
          (this.core = e),
            (this.logger = t),
            ow(this, "name", "crypto"),
            ow(this, "keychain"),
            ow(this, "randomSessionIdentifier", rB()),
            ow(this, "initialized", !1),
            ow(this, "init", async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            ow(
              this,
              "hasKeys",
              (e) => (this.isInitialized(), this.keychain.has(e))
            ),
            ow(this, "getClientId", async () => {
              this.isInitialized();
              let e = await this.getClientSeed(),
                t = eo.TZ(e);
              return eo.UF(t.publicKey);
            }),
            ow(this, "generateKeyPair", () => {
              this.isInitialized();
              let e = (function () {
                let e = rP.utils.randomPrivateKey(),
                  t = rP.getPublicKey(e);
                return {
                  privateKey: (0, ea.dI)(e, rj),
                  publicKey: (0, ea.dI)(t, rj),
                };
              })();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            ow(this, "signJWT", async (e) => {
              this.isInitialized();
              let t = await this.getClientSeed(),
                i = eo.TZ(t),
                r = this.randomSessionIdentifier;
              return await eo.FA(r, e, nt, i);
            }),
            ow(this, "generateSharedKey", (e, t, i) => {
              this.isInitialized();
              let r = (function (e, t) {
                let i = im(
                  iP,
                  rP.getSharedSecret((0, ea.sH)(e, rj), (0, ea.sH)(t, rj)),
                  void 0,
                  void 0,
                  32
                );
                return (0, ea.dI)(i, rj);
              })(this.getPrivateKey(e), t);
              return this.setSymKey(r, i);
            }),
            ow(this, "setSymKey", async (e, t) => {
              this.isInitialized();
              let i = t || rL(e);
              return await this.keychain.set(i, e), i;
            }),
            ow(this, "deleteKeyPair", async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            ow(this, "deleteSymKey", async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            ow(this, "encode", async (e, t, i) => {
              this.isInitialized();
              let r = rG(i),
                s = (0, s0.h)(t);
              if (2 === r.type)
                return (function (e, t) {
                  let i = rz(2),
                    r = ts(12),
                    s = rF({ type: i, sealed: (0, ea.sH)(e, r$), iv: r });
                  return t === rD ? rK(s) : s;
                })(s, i?.encoding);
              if (rJ(r)) {
                let t = r.senderPublicKey,
                  i = r.receiverPublicKey;
                e = await this.generateSharedKey(t, i);
              }
              let n = this.getSymKey(e),
                { type: o, senderPublicKey: a } = r;
              return (function (e) {
                let t = rz("u" > typeof e.type ? e.type : 0);
                if (1 === rH(t) && typeof e.senderPublicKey > "u")
                  throw Error("Missing sender public key for type 1 envelope");
                let i =
                    "u" > typeof e.senderPublicKey
                      ? (0, ea.sH)(e.senderPublicKey, rj)
                      : void 0,
                  r = "u" > typeof e.iv ? (0, ea.sH)(e.iv, rj) : ts(12),
                  s = rF({
                    type: t,
                    sealed: iu((0, ea.sH)(e.symKey, rj), r).encrypt(
                      (0, ea.sH)(e.message, r$)
                    ),
                    iv: r,
                    senderPublicKey: i,
                  });
                return e.encoding === rD ? rK(s) : s;
              })({
                type: o,
                symKey: n,
                message: s,
                senderPublicKey: a,
                encoding: i?.encoding,
              });
            }),
            ow(this, "decode", async (e, t, i) => {
              this.isInitialized();
              let r = (function (e, t) {
                let i = rW({ encoded: e, encoding: t?.encoding });
                return rG({
                  type: rH(i.type),
                  senderPublicKey:
                    "u" > typeof i.senderPublicKey
                      ? (0, ea.dI)(i.senderPublicKey, rj)
                      : void 0,
                  receiverPublicKey: t?.receiverPublicKey,
                });
              })(t, i);
              if (2 === r.type) {
                let e = (function (e, t) {
                  let { sealed: i } = rW({ encoded: e, encoding: t });
                  return (0, ea.dI)(i, r$);
                })(t, i?.encoding);
                return (0, s0.j)(e);
              }
              if (rJ(r)) {
                let t = r.receiverPublicKey,
                  i = r.senderPublicKey;
                e = await this.generateSharedKey(t, i);
              }
              try {
                let r = this.getSymKey(e),
                  s = (function (e) {
                    let t = (0, ea.sH)(e.symKey, rj),
                      { sealed: i, iv: r } = rW({
                        encoded: e.encoded,
                        encoding: e.encoding,
                      }),
                      s = iu(t, r).decrypt(i);
                    if (null === s) throw Error("Failed to decrypt");
                    return (0, ea.dI)(s, r$);
                  })({ symKey: r, encoded: t, encoding: i?.encoding });
                return (0, s0.j)(s);
              } catch (t) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(t);
              }
            }),
            ow(this, "getPayloadType", (e, t = rU) =>
              rH(rW({ encoded: e, encoding: t }).type)
            ),
            ow(this, "getPayloadSenderPublicKey", (e, t = rU) => {
              let i = rW({ encoded: e, encoding: t });
              return i.senderPublicKey
                ? (0, ea.dI)(i.senderPublicKey, rj)
                : void 0;
            }),
            (this.core = e),
            (this.logger = (0, sC.U5)(t, this.name)),
            (this.keychain = i || new oy(this.core, this.logger));
        }
        get context() {
          return (0, sC.oI)(this.logger);
        }
        async setPrivateKey(e, t) {
          return await this.keychain.set(e, t), e;
        }
        getPrivateKey(e) {
          return this.keychain.get(e);
        }
        async getClientSeed() {
          let e = "";
          try {
            e = this.keychain.get(ne);
          } catch {
            (e = rB()), await this.keychain.set(ne, e);
          }
          return (function (e, t = "utf8") {
            let i = od[t];
            if (!i) throw Error(`Unsupported encoding "${t}"`);
            return ("utf8" === t || "utf-8" === t) &&
              null != globalThis.Buffer &&
              null != globalThis.Buffer.from
              ? globalThis.Buffer.from(e, "utf8")
              : i.decoder.decode(`${i.prefix}${e}`);
          })(e, "base16");
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = sa("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var oE = Object.defineProperty,
        oI = Object.defineProperties,
        oP = Object.getOwnPropertyDescriptors,
        o_ = Object.getOwnPropertySymbols,
        ox = Object.prototype.hasOwnProperty,
        oS = Object.prototype.propertyIsEnumerable,
        oO = (e, t, i) =>
          t in e
            ? oE(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        oA = (e, t) => {
          for (var i in t || (t = {})) ox.call(t, i) && oO(e, i, t[i]);
          if (o_) for (var i of o_(t)) oS.call(t, i) && oO(e, i, t[i]);
          return e;
        },
        oC = (e, t) => oI(e, oP(t)),
        oR = (e, t, i) => oO(e, "symbol" != typeof t ? t + "" : t, i);
      class oN extends sB {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            oR(this, "messages", new Map()),
            oR(this, "messagesWithoutClientAck", new Map()),
            oR(this, "name", "messages"),
            oR(this, "version", "0.3"),
            oR(this, "initialized", !1),
            oR(this, "storagePrefix", s4),
            oR(this, "init", async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  let e = await this.getRelayerMessages();
                  "u" > typeof e && (this.messages = e);
                  let t = await this.getRelayerMessagesWithoutClientAck();
                  "u" > typeof t && (this.messagesWithoutClientAck = t),
                    this.logger.debug(
                      `Successfully Restored records for ${this.name}`
                    ),
                    this.logger.trace({
                      type: "method",
                      method: "restore",
                      size: this.messages.size,
                    });
                } catch (e) {
                  this.logger.debug(
                    `Failed to Restore records for ${this.name}`
                  ),
                    this.logger.error(e);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            oR(this, "set", async (e, t, i) => {
              this.isInitialized();
              let r = rM(t),
                s = this.messages.get(e);
              if ((typeof s > "u" && (s = {}), "u" > typeof s[r])) return r;
              if (((s[r] = t), this.messages.set(e, s), i === nc.inbound)) {
                let i = this.messagesWithoutClientAck.get(e) || {};
                this.messagesWithoutClientAck.set(e, oC(oA({}, i), { [r]: t }));
              }
              return await this.persist(), r;
            }),
            oR(this, "get", (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > "u" && (t = {}), t;
            }),
            oR(this, "getWithoutAck", (e) => {
              this.isInitialized();
              let t = {};
              for (let i of e) {
                let e = this.messagesWithoutClientAck.get(i) || {};
                t[i] = Object.values(e);
              }
              return t;
            }),
            oR(
              this,
              "has",
              (e, t) => (this.isInitialized(), "u" > typeof this.get(e)[rM(t)])
            ),
            oR(this, "ack", async (e, t) => {
              this.isInitialized();
              let i = this.messagesWithoutClientAck.get(e);
              if (typeof i > "u") return;
              let r = rM(t);
              delete i[r],
                0 === Object.keys(i).length
                  ? this.messagesWithoutClientAck.delete(e)
                  : this.messagesWithoutClientAck.set(e, i),
                await this.persist();
            }),
            oR(this, "del", async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                this.messagesWithoutClientAck.delete(e),
                await this.persist();
            }),
            (this.logger = (0, sC.U5)(e, this.name)),
            (this.core = t);
        }
        get context() {
          return (0, sC.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get storageKeyWithoutClientAck() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name +
            "_withoutClientAck"
          );
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, eq(e));
        }
        async setRelayerMessagesWithoutClientAck(e) {
          await this.core.storage.setItem(
            this.storageKeyWithoutClientAck,
            eq(e)
          );
        }
        async getRelayerMessages() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? ek(e) : void 0;
        }
        async getRelayerMessagesWithoutClientAck() {
          let e = await this.core.storage.getItem(
            this.storageKeyWithoutClientAck
          );
          return "u" > typeof e ? ek(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages),
            await this.setRelayerMessagesWithoutClientAck(
              this.messagesWithoutClientAck
            );
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = sa("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var oT = Object.defineProperty,
        oq = Object.defineProperties,
        ok = Object.getOwnPropertyDescriptors,
        oj = Object.getOwnPropertySymbols,
        oU = Object.prototype.hasOwnProperty,
        oD = Object.prototype.propertyIsEnumerable,
        o$ = (e, t, i) =>
          t in e
            ? oT(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        oB = (e, t) => {
          for (var i in t || (t = {})) oU.call(t, i) && o$(e, i, t[i]);
          if (oj) for (var i of oj(t)) oD.call(t, i) && o$(e, i, t[i]);
          return e;
        },
        oL = (e, t) => oq(e, ok(t)),
        oM = (e, t, i) => o$(e, "symbol" != typeof t ? t + "" : t, i);
      class oz extends sL {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            oM(this, "events", new r.EventEmitter()),
            oM(this, "name", "publisher"),
            oM(this, "queue", new Map()),
            oM(this, "publishTimeout", (0, o.toMiliseconds)(o.ONE_MINUTE)),
            oM(
              this,
              "initialPublishTimeout",
              (0, o.toMiliseconds)(15 * o.ONE_SECOND)
            ),
            oM(this, "needsTransportRestart", !1),
            oM(this, "publish", async (e, t, i) => {
              var r;
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: e, message: t, opts: i },
                });
              let s = i?.ttl || ni,
                n = rZ(i),
                o = i?.prompt || !1,
                a = i?.tag || 0,
                c = i?.id || (0, s2.getBigIntRpcId)().toString(),
                l = {
                  topic: e,
                  message: t,
                  opts: {
                    ttl: s,
                    relay: n,
                    prompt: o,
                    tag: a,
                    id: c,
                    attestation: i?.attestation,
                    tvf: i?.tvf,
                  },
                },
                h = `Failed to publish payload, please try again. id:${c} tag:${a}`;
              try {
                let r = new Promise(async (r) => {
                  let n = ({ id: e }) => {
                    l.opts.id === e &&
                      (this.removeRequestFromQueue(e),
                      this.relayer.events.removeListener(ns.publish, n),
                      r(l));
                  };
                  this.relayer.events.on(ns.publish, n);
                  let h = eU(
                    new Promise((r, n) => {
                      this.rpcPublish({
                        topic: e,
                        message: t,
                        ttl: s,
                        prompt: o,
                        tag: a,
                        id: c,
                        attestation: i?.attestation,
                        tvf: i?.tvf,
                      })
                        .then(r)
                        .catch((e) => {
                          this.logger.warn(e, e?.message), n(e);
                        });
                    }),
                    this.initialPublishTimeout,
                    `Failed initial publish, retrying.... id:${c} tag:${a}`
                  );
                  try {
                    await h, this.events.removeListener(ns.publish, n);
                  } catch (e) {
                    this.queue.set(c, oL(oB({}, l), { attempt: 1 })),
                      this.logger.warn(e, e?.message);
                  }
                });
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { id: c, topic: e, message: t, opts: i },
                }),
                  await eU(r, this.publishTimeout, h);
              } catch (e) {
                if (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(e),
                  null != (r = i?.internal) && r.throwOnFailedPublish)
                )
                  throw e;
              } finally {
                this.queue.delete(c);
              }
            }),
            oM(this, "on", (e, t) => {
              this.events.on(e, t);
            }),
            oM(this, "once", (e, t) => {
              this.events.once(e, t);
            }),
            oM(this, "off", (e, t) => {
              this.events.off(e, t);
            }),
            oM(this, "removeListener", (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = (0, sC.U5)(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, sC.oI)(this.logger);
        }
        async rpcPublish(e) {
          var t, i, r, s;
          let {
              topic: n,
              message: o,
              ttl: a = ni,
              prompt: c,
              tag: l,
              id: h,
              attestation: u,
              tvf: d,
            } = e,
            p = {
              method: rY(rZ().protocol).publish,
              params: oB(
                {
                  topic: n,
                  message: o,
                  ttl: a,
                  prompt: c,
                  tag: l,
                  attestation: u,
                },
                d
              ),
              id: h,
            };
          su(null == (t = p.params) ? void 0 : t.prompt) &&
            (null == (i = p.params) || delete i.prompt),
            su(null == (r = p.params) ? void 0 : r.tag) &&
              (null == (s = p.params) || delete s.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: p,
            });
          let g = await this.relayer.request(p);
          return (
            this.relayer.events.emit(ns.publish, e),
            this.logger.debug("Successfully Published Payload"),
            g
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e, t) => {
            let i = e.attempt + 1;
            this.queue.set(t, oL(oB({}, e), { attempt: i }));
            let { topic: r, message: s, opts: n, attestation: o } = e;
            this.logger.warn(
              {},
              `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${i}`
            ),
              await this.rpcPublish(
                oL(oB({}, e), {
                  topic: r,
                  message: s,
                  ttl: n.ttl,
                  prompt: n.prompt,
                  tag: n.tag,
                  id: n.id,
                  attestation: o,
                  tvf: n.tvf,
                })
              ),
              this.logger.warn({}, `Publisher: queue->published: ${e.opts.id}`);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(sO.li.pulse, () => {
            if (this.needsTransportRestart) {
              (this.needsTransportRestart = !1),
                this.relayer.events.emit(ns.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(ns.message_ack, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      var oH = Object.defineProperty,
        oK = (e, t, i) =>
          t in e
            ? oH(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        oV = (e, t, i) => oK(e, "symbol" != typeof t ? t + "" : t, i);
      class oF {
        constructor() {
          oV(this, "map", new Map()),
            oV(this, "set", (e, t) => {
              let i = this.get(e);
              this.exists(e, t) || this.map.set(e, [...i, t]);
            }),
            oV(this, "get", (e) => this.map.get(e) || []),
            oV(this, "exists", (e, t) => this.get(e).includes(t)),
            oV(this, "delete", (e, t) => {
              if (typeof t > "u") return void this.map.delete(e);
              if (!this.map.has(e)) return;
              let i = this.get(e);
              if (!this.exists(e, t)) return;
              let r = i.filter((e) => e !== t);
              if (!r.length) return void this.map.delete(e);
              this.map.set(e, r);
            }),
            oV(this, "clear", () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var oW = Object.defineProperty,
        oG = Object.defineProperties,
        oJ = Object.getOwnPropertyDescriptors,
        oZ = Object.getOwnPropertySymbols,
        oY = Object.prototype.hasOwnProperty,
        oQ = Object.prototype.propertyIsEnumerable,
        oX = (e, t, i) =>
          t in e
            ? oW(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        o0 = (e, t) => {
          for (var i in t || (t = {})) oY.call(t, i) && oX(e, i, t[i]);
          if (oZ) for (var i of oZ(t)) oQ.call(t, i) && oX(e, i, t[i]);
          return e;
        },
        o1 = (e, t) => oG(e, oJ(t)),
        o2 = (e, t, i) => oX(e, "symbol" != typeof t ? t + "" : t, i);
      class o8 extends sK {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            o2(this, "subscriptions", new Map()),
            o2(this, "topicMap", new oF()),
            o2(this, "events", new r.EventEmitter()),
            o2(this, "name", "subscription"),
            o2(this, "version", "0.3"),
            o2(this, "pending", new Map()),
            o2(this, "cached", []),
            o2(this, "initialized", !1),
            o2(this, "storagePrefix", s4),
            o2(this, "subscribeTimeout", (0, o.toMiliseconds)(o.ONE_MINUTE)),
            o2(
              this,
              "initialSubscribeTimeout",
              (0, o.toMiliseconds)(15 * o.ONE_SECOND)
            ),
            o2(this, "clientId"),
            o2(this, "batchSubscribeTopicsLimit", 500),
            o2(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                this.registerEventListeners(),
                await this.restore()),
                (this.initialized = !0);
            }),
            o2(this, "subscribe", async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: e, opts: t },
                });
              try {
                let i = rZ(t),
                  r = { topic: e, relay: i, transportType: t?.transportType };
                this.pending.set(e, r);
                let s = await this.rpcSubscribe(e, i, t);
                return (
                  "string" == typeof s &&
                    (this.onSubscribe(s, r),
                    this.logger.debug("Successfully Subscribed Topic"),
                    this.logger.trace({
                      type: "method",
                      method: "subscribe",
                      params: { topic: e, opts: t },
                    })),
                  s
                );
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Subscribe Topic"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            o2(this, "unsubscribe", async (e, t) => {
              this.isInitialized(),
                "u" > typeof t?.id
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            o2(
              this,
              "isSubscribed",
              (e) =>
                new Promise((t) => {
                  t(this.topicMap.topics.includes(e));
                })
            ),
            o2(
              this,
              "isKnownTopic",
              (e) =>
                new Promise((t) => {
                  t(
                    this.topicMap.topics.includes(e) ||
                      this.pending.has(e) ||
                      this.cached.some((t) => t.topic === e)
                  );
                })
            ),
            o2(this, "on", (e, t) => {
              this.events.on(e, t);
            }),
            o2(this, "once", (e, t) => {
              this.events.once(e, t);
            }),
            o2(this, "off", (e, t) => {
              this.events.off(e, t);
            }),
            o2(this, "removeListener", (e, t) => {
              this.events.removeListener(e, t);
            }),
            o2(this, "start", async () => {
              await this.onConnect();
            }),
            o2(this, "stop", async () => {
              await this.onDisconnect();
            }),
            o2(this, "restart", async () => {
              await this.restore(), await this.onRestart();
            }),
            o2(this, "checkPending", async () => {
              if (
                0 === this.pending.size &&
                (!this.initialized || !this.relayer.connected)
              )
                return;
              let e = [];
              this.pending.forEach((t) => {
                e.push(t);
              }),
                await this.batchSubscribe(e);
            }),
            o2(this, "registerEventListeners", () => {
              this.relayer.core.heartbeat.on(sO.li.pulse, async () => {
                await this.checkPending();
              }),
                this.events.on(nh.created, async (e) => {
                  let t = nh.created;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: "event", event: t, data: e }),
                    await this.persist();
                }),
                this.events.on(nh.deleted, async (e) => {
                  let t = nh.deleted;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: "event", event: t, data: e }),
                    await this.persist();
                });
            }),
            (this.relayer = e),
            (this.logger = (0, sC.U5)(t, this.name)),
            (this.clientId = "");
        }
        get context() {
          return (0, sC.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.relayer.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        get hasAnyTopics() {
          return (
            this.topicMap.topics.length > 0 ||
            this.pending.size > 0 ||
            this.cached.length > 0 ||
            this.subscriptions.size > 0
          );
        }
        hasSubscription(e, t) {
          let i = !1;
          try {
            i = this.getSubscription(e).topic === t;
          } catch {}
          return i;
        }
        reset() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          this.values.length > 0 && (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          let i = this.topicMap.get(e);
          await Promise.all(
            i.map(async (i) => await this.unsubscribeById(e, i, t))
          );
        }
        async unsubscribeById(e, t, i) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: e, id: t, opts: i },
            });
          try {
            let r = rZ(i);
            await this.restartToComplete({ topic: e, id: t, relay: r }),
              await this.rpcUnsubscribe(e, t, r);
            let s = sc("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, s),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: e, id: t, opts: i },
              });
          } catch (e) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(e),
              e)
            );
          }
        }
        async rpcSubscribe(e, t, i) {
          var r;
          (i && i?.transportType !== na.relay) ||
            (await this.restartToComplete({ topic: e, id: e, relay: t }));
          let s = { method: rY(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: s,
            });
          let n = null == (r = i?.internal) ? void 0 : r.throwOnFailedPublish;
          try {
            let t = await this.getSubscriptionId(e);
            if (i?.transportType === na.link_mode)
              return (
                setTimeout(() => {
                  (this.relayer.connected || this.relayer.connecting) &&
                    this.relayer.request(s).catch((e) => this.logger.warn(e));
                }, (0, o.toMiliseconds)(o.ONE_SECOND)),
                t
              );
            let r = new Promise(async (t) => {
                let i = (r) => {
                  r.topic === e &&
                    (this.events.removeListener(nh.created, i), t(r.id));
                };
                this.events.on(nh.created, i);
                try {
                  let r = await eU(
                    new Promise((e, t) => {
                      this.relayer
                        .request(s)
                        .catch((e) => {
                          this.logger.warn(e, e?.message), t(e);
                        })
                        .then(e);
                    }),
                    this.initialSubscribeTimeout,
                    `Subscribing to ${e} failed, please try again`
                  );
                  this.events.removeListener(nh.created, i), t(r);
                } catch {}
              }),
              a = await eU(
                r,
                this.subscribeTimeout,
                `Subscribing to ${e} failed, please try again`
              );
            if (!a && n)
              throw Error(`Subscribing to ${e} failed, please try again`);
            return a ? t : null;
          } catch (e) {
            if (
              (this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(ns.connection_stalled),
              n)
            )
              throw e;
          }
          return null;
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          let t = {
            method: rY(e[0].relay.protocol).batchSubscribe,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: t,
            });
          try {
            await await eU(
              new Promise((e) => {
                this.relayer
                  .request(t)
                  .catch((e) => this.logger.warn(e))
                  .then(e);
              }),
              this.subscribeTimeout,
              "rpcBatchSubscribe failed, please try again"
            );
          } catch {
            this.relayer.events.emit(ns.connection_stalled);
          }
        }
        async rpcBatchFetchMessages(e) {
          let t;
          if (!e.length) return;
          let i = {
            method: rY(e[0].relay.protocol).batchFetchMessages,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: i,
            });
          try {
            t = await await eU(
              new Promise((e, t) => {
                this.relayer
                  .request(i)
                  .catch((e) => {
                    this.logger.warn(e), t(e);
                  })
                  .then(e);
              }),
              this.subscribeTimeout,
              "rpcBatchFetchMessages failed, please try again"
            );
          } catch {
            this.relayer.events.emit(ns.connection_stalled);
          }
          return t;
        }
        rpcUnsubscribe(e, t, i) {
          let r = {
            method: rY(i.protocol).unsubscribe,
            params: { topic: e, id: t },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            }),
            this.relayer.request(r)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, o1(o0({}, t), { id: e })),
            this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, o0({}, e)),
                this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, i) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, i),
            await this.relayer.messages.del(e);
        }
        async setRelayerSubscriptions(e) {
          await this.relayer.core.storage.setItem(this.storageKey, e);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(e, t) {
          this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: e,
              subscription: t,
            }),
            this.addSubscription(e, t);
        }
        addSubscription(e, t) {
          this.subscriptions.set(e, o0({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(nh.created, t);
        }
        getSubscription(e) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: e,
            });
          let t = this.subscriptions.get(e);
          if (!t) {
            let { message: t } = sa("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: e,
              reason: t,
            });
          let i = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(i.topic, e),
            this.events.emit(nh.deleted, o1(o0({}, i), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values),
            this.events.emit(nh.sync);
        }
        async onRestart() {
          if (this.cached.length) {
            let e = [...this.cached],
              t = Math.ceil(
                this.cached.length / this.batchSubscribeTopicsLimit
              );
            for (let i = 0; i < t; i++) {
              let t = e.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(t);
            }
          }
          this.events.emit(nh.resubscribed);
        }
        async restore() {
          try {
            let e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
              let { message: e } = sa("RESTORE_WILL_OVERRIDE", this.name);
              throw (
                (this.logger.error(e),
                this.logger.error(
                  `${this.name}: ${JSON.stringify(this.values)}`
                ),
                Error(e))
              );
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored subscriptions for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values,
              });
          } catch (e) {
            this.logger.debug(
              `Failed to Restore subscriptions for ${this.name}`
            ),
              this.logger.error(e);
          }
        }
        async batchSubscribe(e) {
          e.length &&
            (await this.rpcBatchSubscribe(e),
            this.onBatchSubscribe(
              await Promise.all(
                e.map(async (e) =>
                  o1(o0({}, e), { id: await this.getSubscriptionId(e.topic) })
                )
              )
            ));
        }
        async batchFetchMessages(e) {
          var t;
          if (!e.length) return;
          this.logger.trace(
            `Fetching batch messages for ${e.length} subscriptions`
          );
          let i = await this.rpcBatchFetchMessages(e);
          i &&
            i.messages &&
            (await ((t = (0, o.toMiliseconds)(o.ONE_SECOND)),
            new Promise((e) => setTimeout(e, t))),
            await this.relayer.handleBatchMessageEvents(i.messages));
        }
        async onConnect() {
          await this.restart(), this.reset();
        }
        onDisconnect() {
          this.onDisable();
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = sa("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async restartToComplete(e) {
          this.relayer.connected ||
            this.relayer.connecting ||
            (this.cached.push(e), await this.relayer.transportOpen());
        }
        async getClientId() {
          return (
            this.clientId ||
              (this.clientId = await this.relayer.core.crypto.getClientId()),
            this.clientId
          );
        }
        async getSubscriptionId(e) {
          return rM(e + (await this.getClientId()));
        }
      }
      var o5 = Object.defineProperty,
        o3 = Object.getOwnPropertySymbols,
        o6 = Object.prototype.hasOwnProperty,
        o4 = Object.prototype.propertyIsEnumerable,
        o9 = (e, t, i) =>
          t in e
            ? o5(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        o7 = (e, t) => {
          for (var i in t || (t = {})) o6.call(t, i) && o9(e, i, t[i]);
          if (o3) for (var i of o3(t)) o4.call(t, i) && o9(e, i, t[i]);
          return e;
        },
        ae = (e, t, i) => o9(e, "symbol" != typeof t ? t + "" : t, i);
      class at extends sM {
        constructor(e) {
          super(e),
            ae(this, "protocol", "wc"),
            ae(this, "version", 2),
            ae(this, "core"),
            ae(this, "logger"),
            ae(this, "events", new r.EventEmitter()),
            ae(this, "provider"),
            ae(this, "messages"),
            ae(this, "subscriber"),
            ae(this, "publisher"),
            ae(this, "name", "relayer"),
            ae(this, "transportExplicitlyClosed", !1),
            ae(this, "initialized", !1),
            ae(this, "connectionAttemptInProgress", !1),
            ae(this, "relayUrl"),
            ae(this, "projectId"),
            ae(this, "packageName"),
            ae(this, "bundleId"),
            ae(this, "hasExperiencedNetworkDisruption", !1),
            ae(this, "pingTimeout"),
            ae(
              this,
              "heartBeatTimeout",
              (0, o.toMiliseconds)(o.THIRTY_SECONDS + o.FIVE_SECONDS)
            ),
            ae(this, "reconnectTimeout"),
            ae(this, "connectPromise"),
            ae(this, "reconnectInProgress", !1),
            ae(this, "requestsInFlight", []),
            ae(this, "connectTimeout", (0, o.toMiliseconds)(15 * o.ONE_SECOND)),
            ae(this, "request", async (e) => {
              var t, i;
              this.logger.debug("Publishing Request Payload");
              let r = e.id || (0, s2.getBigIntRpcId)().toString();
              await this.toEstablishConnection();
              try {
                this.logger.trace(
                  {
                    id: r,
                    method: e.method,
                    topic: null == (t = e.params) ? void 0 : t.topic,
                  },
                  "relayer.request - publishing..."
                );
                let s = `${r}:${
                  (null == (i = e.params) ? void 0 : i.tag) || ""
                }`;
                this.requestsInFlight.push(s);
                let n = await this.provider.request(e);
                return (
                  (this.requestsInFlight = this.requestsInFlight.filter(
                    (e) => e !== s
                  )),
                  n
                );
              } catch (e) {
                throw (this.logger.debug(`Failed to Publish Request: ${r}`), e);
              }
            }),
            ae(this, "resetPingTimeout", () => {
              ex() &&
                (clearTimeout(this.pingTimeout),
                (this.pingTimeout = setTimeout(() => {
                  var e, t, i, r;
                  try {
                    this.logger.debug(
                      {},
                      "pingTimeout: Connection stalled, terminating..."
                    ),
                      null ==
                        (r =
                          null ==
                          (i =
                            null ==
                            (t =
                              null == (e = this.provider)
                                ? void 0
                                : e.connection)
                              ? void 0
                              : t.socket)
                            ? void 0
                            : i.terminate) || r.call(i);
                  } catch (e) {
                    this.logger.warn(e, e?.message);
                  }
                }, this.heartBeatTimeout)));
            }),
            ae(this, "onPayloadHandler", (e) => {
              this.onProviderPayload(e), this.resetPingTimeout();
            }),
            ae(this, "onConnectHandler", () => {
              this.logger.warn({}, "Relayer connected \uD83D\uDEDC"),
                this.startPingTimeout(),
                this.events.emit(ns.connect);
            }),
            ae(this, "onDisconnectHandler", () => {
              this.logger.warn({}, "Relayer disconnected \uD83D\uDED1"),
                (this.requestsInFlight = []),
                this.onProviderDisconnect();
            }),
            ae(this, "onProviderErrorHandler", (e) => {
              this.logger.fatal(`Fatal socket error: ${e.message}`),
                this.events.emit(ns.error, e),
                this.logger.fatal(
                  "Fatal socket error received, closing transport"
                ),
                this.transportClose();
            }),
            ae(this, "registerProviderListeners", () => {
              this.provider.on(nn.payload, this.onPayloadHandler),
                this.provider.on(nn.connect, this.onConnectHandler),
                this.provider.on(nn.disconnect, this.onDisconnectHandler),
                this.provider.on(nn.error, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              "u" > typeof e.logger && "string" != typeof e.logger
                ? (0, sC.U5)(e.logger, this.name)
                : (0, sC.h6)((0, sC.iP)({ level: e.logger || "error" }))),
            (this.messages = new oN(this.logger, e.core)),
            (this.subscriber = new o8(this, this.logger)),
            (this.publisher = new oz(this, this.logger)),
            (this.relayUrl = e?.relayUrl || nr),
            (this.projectId = e.projectId),
            eS() &&
            "u" > typeof i.g &&
            "u" > typeof (null == i.g ? void 0 : i.g.Platform) &&
            (null == i.g ? void 0 : i.g.Platform.OS) === "android"
              ? (this.packageName = eC())
              : eS() &&
                "u" > typeof i.g &&
                "u" > typeof (null == i.g ? void 0 : i.g.Platform) &&
                (null == i.g ? void 0 : i.g.Platform.OS) === "ios" &&
                (this.bundleId = eC()),
            (this.provider = {});
        }
        async init() {
          if (
            (this.logger.trace("Initialized"),
            this.registerEventListeners(),
            await Promise.all([this.messages.init(), this.subscriber.init()]),
            (this.initialized = !0),
            this.subscriber.hasAnyTopics)
          )
            try {
              await this.transportOpen();
            } catch (e) {
              this.logger.warn(e, e?.message);
            }
        }
        get context() {
          return (0, sC.oI)(this.logger);
        }
        get connected() {
          var e, t, i;
          return (
            (null ==
            (i =
              null == (t = null == (e = this.provider) ? void 0 : e.connection)
                ? void 0
                : t.socket)
              ? void 0
              : i.readyState) === 1
          );
        }
        get connecting() {
          var e, t, i;
          return (
            (null ==
            (i =
              null == (t = null == (e = this.provider) ? void 0 : e.connection)
                ? void 0
                : t.socket)
              ? void 0
              : i.readyState) === 0 || void 0 !== this.connectPromise
          );
        }
        async publish(e, t, i) {
          this.isInitialized(),
            await this.publisher.publish(e, t, i),
            await this.recordMessageEvent(
              {
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: na.relay,
              },
              nc.outbound
            );
        }
        async subscribe(e, t) {
          var i, r, s;
          this.isInitialized(),
            (null != t && t.transportType && t?.transportType !== "relay") ||
              (await this.toEstablishConnection());
          let n =
              typeof (null == (i = t?.internal)
                ? void 0
                : i.throwOnFailedPublish) > "u" ||
              (null == (r = t?.internal) ? void 0 : r.throwOnFailedPublish),
            o =
              (null == (s = this.subscriber.topicMap.get(e)) ? void 0 : s[0]) ||
              "",
            a,
            c = (t) => {
              t.topic === e && (this.subscriber.off(nh.created, c), a());
            };
          return (
            await Promise.all([
              new Promise((e) => {
                (a = e), this.subscriber.on(nh.created, c);
              }),
              new Promise(async (i, r) => {
                (o =
                  (await this.subscriber
                    .subscribe(
                      e,
                      o7({ internal: { throwOnFailedPublish: n } }, t)
                    )
                    .catch((e) => {
                      n && r(e);
                    })) || o),
                  i();
              }),
            ]),
            o
          );
        }
        async unsubscribe(e, t) {
          this.isInitialized(), await this.subscriber.unsubscribe(e, t);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async transportDisconnect() {
          this.provider.disconnect &&
          (this.hasExperiencedNetworkDisruption || this.connected)
            ? await eU(
                this.provider.disconnect(),
                2e3,
                "provider.disconnect()"
              ).catch(() => this.onProviderDisconnect())
            : this.onProviderDisconnect();
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0),
            await this.transportDisconnect();
        }
        async transportOpen(e) {
          if (!this.subscriber.hasAnyTopics)
            return void this.logger.warn(
              "Starting WS connection skipped because the client has no topics to work with."
            );
          if (
            (this.connectPromise
              ? (this.logger.debug(
                  {},
                  "Waiting for existing connection attempt to resolve..."
                ),
                await this.connectPromise,
                this.logger.debug({}, "Existing connection attempt resolved"))
              : ((this.connectPromise = new Promise(async (t, i) => {
                  await this.connect(e)
                    .then(t)
                    .catch(i)
                    .finally(() => {
                      this.connectPromise = void 0;
                    });
                })),
                await this.connectPromise),
            !this.connected)
          )
            throw Error(
              `Couldn't establish socket connection to the relay server: ${this.relayUrl}`
            );
        }
        async restartTransport(e) {
          this.logger.debug({}, "Restarting transport..."),
            this.connectionAttemptInProgress ||
              ((this.relayUrl = e || this.relayUrl),
              await this.confirmOnlineStateOrThrow(),
              await this.transportClose(),
              await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await sP()))
            throw Error(
              "No internet connection detected. Please restart your network and try again."
            );
        }
        async handleBatchMessageEvents(e) {
          if (e?.length === 0)
            return void this.logger.trace(
              "Batch message events is empty. Ignoring..."
            );
          let t = e.sort((e, t) => e.publishedAt - t.publishedAt);
          for (let e of (this.logger.debug(
            `Batch of ${t.length} message events sorted`
          ),
          t))
            try {
              await this.onMessageEvent(e);
            } catch (e) {
              this.logger.warn(
                e,
                "Error while processing batch message event: " + e?.message
              );
            }
          this.logger.trace(`Batch of ${t.length} message events processed`);
        }
        async onLinkMessageEvent(e, t) {
          let { topic: i } = e;
          if (!t.sessionExists) {
            let e = eB(o.FIVE_MINUTES);
            await this.core.pairing.pairings.set(i, {
              topic: i,
              expiry: e,
              relay: { protocol: "irn" },
              active: !1,
            });
          }
          this.events.emit(ns.message, e),
            await this.recordMessageEvent(e, nc.inbound);
        }
        async connect(e) {
          await this.confirmOnlineStateOrThrow(),
            e &&
              e !== this.relayUrl &&
              ((this.relayUrl = e), await this.transportDisconnect()),
            (this.connectionAttemptInProgress = !0),
            (this.transportExplicitlyClosed = !1);
          let t = 1;
          for (; t < 6; ) {
            try {
              if (this.transportExplicitlyClosed) break;
              this.logger.debug(
                {},
                `Connecting to ${this.relayUrl}, attempt: ${t}...`
              ),
                await this.createProvider(),
                await new Promise(async (e, t) => {
                  let i = () => {
                    t(
                      Error("Connection interrupted while trying to subscribe")
                    );
                  };
                  this.provider.once(nn.disconnect, i),
                    await eU(
                      new Promise((e, t) => {
                        this.provider.connect().then(e).catch(t);
                      }),
                      this.connectTimeout,
                      `Socket stalled when trying to connect to ${this.relayUrl}`
                    )
                      .catch((e) => {
                        t(e);
                      })
                      .finally(() => {
                        this.provider.off(nn.disconnect, i),
                          clearTimeout(this.reconnectTimeout);
                      }),
                    await new Promise(async (e, t) => {
                      let i = () => {
                        t(
                          Error(
                            "Connection interrupted while trying to subscribe"
                          )
                        );
                      };
                      this.provider.once(nn.disconnect, i),
                        await this.subscriber
                          .start()
                          .then(e)
                          .catch(t)
                          .finally(() => {
                            this.provider.off(nn.disconnect, i);
                          });
                    }),
                    (this.hasExperiencedNetworkDisruption = !1),
                    e();
                });
            } catch (e) {
              await this.subscriber.stop(),
                this.logger.warn({}, e.message),
                (this.hasExperiencedNetworkDisruption = !0);
            } finally {
              this.connectionAttemptInProgress = !1;
            }
            if (this.connected) {
              this.logger.debug(
                {},
                `Connected to ${this.relayUrl} successfully on attempt: ${t}`
              );
              break;
            }
            await new Promise((e) => setTimeout(e, (0, o.toMiliseconds)(+t))),
              t++;
          }
        }
        startPingTimeout() {
          var e, t, i, r, s;
          if (ex())
            try {
              null !=
                (t = null == (e = this.provider) ? void 0 : e.connection) &&
                t.socket &&
                (null ==
                  (s =
                    null ==
                    (r = null == (i = this.provider) ? void 0 : i.connection)
                      ? void 0
                      : r.socket) ||
                  s.on("ping", () => {
                    this.resetPingTimeout();
                  })),
                this.resetPingTimeout();
            } catch (e) {
              this.logger.warn(e, e?.message);
            }
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          let e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new s1.F(
            new s8.A(
              (function ({
                protocol: e,
                version: t,
                relayUrl: i,
                sdkVersion: r,
                auth: s,
                projectId: n,
                useOnCloseEvent: o,
                bundleId: a,
                packageName: c,
              }) {
                let l = i.split("?"),
                  h = eN(e, t, r),
                  u = (function (e, t) {
                    let i = new URLSearchParams(e);
                    for (let e of Object.keys(t).sort())
                      if (t.hasOwnProperty(e)) {
                        let r = t[e];
                        void 0 !== r && i.set(e, r);
                      }
                    return i.toString();
                  })(l[1] || "", {
                    auth: s,
                    ua: h,
                    projectId: n,
                    useOnCloseEvent: o || void 0,
                    packageName: c || void 0,
                    bundleId: a || void 0,
                  });
                return l[0] + "?" + u;
              })({
                sdkVersion: no,
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
                bundleId: this.bundleId,
                packageName: this.packageName,
              })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(e, t) {
          let { topic: i, message: r } = e;
          await this.messages.set(i, r, t);
        }
        async shouldIgnoreMessageEvent(e) {
          let { topic: t, message: i } = e;
          if (!i || 0 === i.length)
            return this.logger.warn(`Ignoring invalid/empty message: ${i}`), !0;
          if (!(await this.subscriber.isKnownTopic(t)))
            return (
              this.logger.warn(`Ignoring message for unknown topic ${t}`), !0
            );
          let r = this.messages.has(t, i);
          return r && this.logger.warn(`Ignoring duplicate message: ${i}`), r;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: e,
            }),
            (0, s2.isJsonRpcRequest)(e))
          ) {
            if (!e.method.endsWith("_subscription")) return;
            let t = e.params,
              { topic: i, message: r, publishedAt: s, attestation: n } = t.data,
              o = {
                topic: i,
                message: r,
                publishedAt: s,
                transportType: na.relay,
                attestation: n,
              };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(o7({ type: "event", event: t.id }, o)),
              this.events.emit(t.id, o),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(o);
          } else
            (0, s2.isJsonRpcResponse)(e) && this.events.emit(ns.message_ack, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (await this.recordMessageEvent(e, nc.inbound),
            this.events.emit(ns.message, e));
        }
        async acknowledgePayload(e) {
          let t = (0, s2.formatJsonRpcResult)(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(nn.payload, this.onPayloadHandler),
            this.provider.off(nn.connect, this.onConnectHandler),
            this.provider.off(nn.disconnect, this.onDisconnectHandler),
            this.provider.off(nn.error, this.onProviderErrorHandler),
            clearTimeout(this.pingTimeout);
        }
        async registerEventListeners() {
          let e = await sP();
          (function (e) {
            var t, r;
            switch (eA()) {
              case e_.browser:
                (t = e),
                  !eS() &&
                    eO() &&
                    (window.addEventListener("online", () => t(!0)),
                    window.addEventListener("offline", () => t(!1)));
                break;
              case e_.reactNative:
                (r = e),
                  eS() &&
                    "u" > typeof i.g &&
                    null != i.g &&
                    i.g.NetInfo &&
                    i.g?.NetInfo.addEventListener((e) => r(e?.isConnected));
              case e_.node:
            }
          })(async (t) => {
            e !== t &&
              ((e = t),
              t
                ? await this.transportOpen().catch((e) =>
                    this.logger.error(e, e?.message)
                  )
                : ((this.hasExperiencedNetworkDisruption = !0),
                  await this.transportDisconnect(),
                  (this.transportExplicitlyClosed = !1)));
          }),
            this.core.heartbeat.on(sO.li.pulse, async () => {
              var e;
              if (
                !this.transportExplicitlyClosed &&
                !this.connected &&
                (!(eO() && (0, a.getDocument)()) ||
                  (null == (e = (0, a.getDocument)())
                    ? void 0
                    : e.visibilityState) === "visible")
              )
                try {
                  await this.confirmOnlineStateOrThrow(),
                    await this.transportOpen();
                } catch (e) {
                  this.logger.warn(e, e?.message);
                }
            });
        }
        async onProviderDisconnect() {
          clearTimeout(this.pingTimeout),
            this.events.emit(ns.disconnect),
            (this.connectionAttemptInProgress = !1),
            !this.reconnectInProgress &&
              ((this.reconnectInProgress = !0),
              await this.subscriber.stop(),
              this.subscriber.hasAnyTopics &&
                (this.transportExplicitlyClosed ||
                  (this.reconnectTimeout = setTimeout(async () => {
                    await this.transportOpen().catch((e) =>
                      this.logger.error(e, e?.message)
                    ),
                      (this.reconnectTimeout = void 0),
                      (this.reconnectInProgress = !1);
                  }, (0, o.toMiliseconds)(0.1)))));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = sa("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async toEstablishConnection() {
          if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
            if (this.connectPromise) return void (await this.connectPromise);
            await this.connect();
          }
        }
      }
      function ai() {}
      function ar(e) {
        if (!e || "object" != typeof e) return !1;
        let t = Object.getPrototypeOf(e);
        return (
          (null === t ||
            t === Object.prototype ||
            null === Object.getPrototypeOf(t)) &&
          "[object Object]" === Object.prototype.toString.call(e)
        );
      }
      function as(e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }
      function an(e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : Object.prototype.toString.call(e);
      }
      let ao = "[object Arguments]",
        aa = "[object Object]";
      var ac = Object.defineProperty,
        al = Object.getOwnPropertySymbols,
        ah = Object.prototype.hasOwnProperty,
        au = Object.prototype.propertyIsEnumerable,
        ad = (e, t, i) =>
          t in e
            ? ac(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        ap = (e, t) => {
          for (var i in t || (t = {})) ah.call(t, i) && ad(e, i, t[i]);
          if (al) for (var i of al(t)) au.call(t, i) && ad(e, i, t[i]);
          return e;
        },
        ag = (e, t, i) => ad(e, "symbol" != typeof t ? t + "" : t, i);
      class af extends sz {
        constructor(e, t, i, r = s4, s) {
          super(e, t, i, r),
            (this.core = e),
            (this.logger = t),
            (this.name = i),
            ag(this, "map", new Map()),
            ag(this, "version", "0.3"),
            ag(this, "cached", []),
            ag(this, "initialized", !1),
            ag(this, "getKey"),
            ag(this, "storagePrefix", s4),
            ag(this, "recentlyDeleted", []),
            ag(this, "recentlyDeletedLimit", 200),
            ag(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !su(e)
                    ? this.map.set(this.getKey(e), e)
                    : (function (e) {
                        var t;
                        return null == (t = e?.proposer) ? void 0 : t.publicKey;
                      })(e)
                    ? this.map.set(e.id, e)
                    : e?.topic && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            ag(this, "set", async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug("Setting value"),
                    this.logger.trace({
                      type: "method",
                      method: "set",
                      key: e,
                      value: t,
                    }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            ag(
              this,
              "get",
              (e) => (
                this.isInitialized(),
                this.logger.debug("Getting value"),
                this.logger.trace({ type: "method", method: "get", key: e }),
                this.getData(e)
              )
            ),
            ag(
              this,
              "getAll",
              (e) => (
                this.isInitialized(),
                e
                  ? this.values.filter((t) =>
                      Object.keys(e).every((i) => {
                        var r;
                        return (
                          (r = t[i]),
                          (function e(t, i, r, s, n, o, a) {
                            let c = a(t, i, r, s, n, o);
                            if (void 0 !== c) return c;
                            if (typeof t == typeof i)
                              switch (typeof t) {
                                case "bigint":
                                case "string":
                                case "boolean":
                                case "symbol":
                                case "undefined":
                                case "function":
                                  return t === i;
                                case "number":
                                  return t === i || Object.is(t, i);
                              }
                            return (function t(i, r, s, n) {
                              if (Object.is(i, r)) return !0;
                              let o = an(i),
                                a = an(r);
                              if (
                                (o === ao && (o = aa),
                                a === ao && (a = aa),
                                o !== a)
                              )
                                return !1;
                              switch (o) {
                                case "[object String]":
                                  return i.toString() === r.toString();
                                case "[object Number]": {
                                  let e = i.valueOf(),
                                    t = r.valueOf();
                                  return (
                                    e === t ||
                                    (Number.isNaN(e) && Number.isNaN(t))
                                  );
                                }
                                case "[object Boolean]":
                                case "[object Date]":
                                case "[object Symbol]":
                                  return Object.is(i.valueOf(), r.valueOf());
                                case "[object RegExp]":
                                  return (
                                    i.source === r.source && i.flags === r.flags
                                  );
                                case "[object Function]":
                                  return i === r;
                              }
                              let c = (s = s ?? new Map()).get(i),
                                l = s.get(r);
                              if (null != c && null != l) return c === r;
                              s.set(i, r), s.set(r, i);
                              try {
                                switch (o) {
                                  case "[object Map]":
                                    if (i.size !== r.size) return !1;
                                    for (let [t, o] of i.entries())
                                      if (
                                        !r.has(t) ||
                                        !e(o, r.get(t), t, i, r, s, n)
                                      )
                                        return !1;
                                    return !0;
                                  case "[object Set]": {
                                    if (i.size !== r.size) return !1;
                                    let t = Array.from(i.values()),
                                      o = Array.from(r.values());
                                    for (let a = 0; a < t.length; a++) {
                                      let c = t[a],
                                        l = o.findIndex((t) =>
                                          e(c, t, void 0, i, r, s, n)
                                        );
                                      if (-1 === l) return !1;
                                      o.splice(l, 1);
                                    }
                                    return !0;
                                  }
                                  case "[object Array]":
                                  case "[object Uint8Array]":
                                  case "[object Uint8ClampedArray]":
                                  case "[object Uint16Array]":
                                  case "[object Uint32Array]":
                                  case "[object BigUint64Array]":
                                  case "[object Int8Array]":
                                  case "[object Int16Array]":
                                  case "[object Int32Array]":
                                  case "[object BigInt64Array]":
                                  case "[object Float32Array]":
                                  case "[object Float64Array]":
                                    if (
                                      ("u" > typeof s5 &&
                                        s5.isBuffer(i) !== s5.isBuffer(r)) ||
                                      i.length !== r.length
                                    )
                                      return !1;
                                    for (let t = 0; t < i.length; t++)
                                      if (!e(i[t], r[t], t, i, r, s, n))
                                        return !1;
                                    return !0;
                                  case "[object ArrayBuffer]":
                                    return (
                                      i.byteLength === r.byteLength &&
                                      t(
                                        new Uint8Array(i),
                                        new Uint8Array(r),
                                        s,
                                        n
                                      )
                                    );
                                  case "[object DataView]":
                                    return (
                                      i.byteLength === r.byteLength &&
                                      i.byteOffset === r.byteOffset &&
                                      t(
                                        new Uint8Array(i),
                                        new Uint8Array(r),
                                        s,
                                        n
                                      )
                                    );
                                  case "[object Error]":
                                    return (
                                      i.name === r.name &&
                                      i.message === r.message
                                    );
                                  case aa: {
                                    if (
                                      !(
                                        t(i.constructor, r.constructor, s, n) ||
                                        (ar(i) && ar(r))
                                      )
                                    )
                                      return !1;
                                    let o = [...Object.keys(i), ...as(i)],
                                      a = [...Object.keys(r), ...as(r)];
                                    if (o.length !== a.length) return !1;
                                    for (let t = 0; t < o.length; t++) {
                                      let a = o[t],
                                        c = i[a];
                                      if (!Object.hasOwn(r, a)) return !1;
                                      let l = r[a];
                                      if (!e(c, l, a, i, r, s, n)) return !1;
                                    }
                                    return !0;
                                  }
                                  default:
                                    return !1;
                                }
                              } finally {
                                s.delete(i), s.delete(r);
                              }
                            })(t, i, o, a);
                          })(r, e[i], void 0, void 0, void 0, void 0, ai)
                        );
                      })
                    )
                  : this.values
              )
            ),
            ag(this, "update", async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: e,
                  update: t,
                });
              let i = ap(ap({}, this.getData(e)), t);
              this.map.set(e, i), await this.persist();
            }),
            ag(this, "delete", async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug("Deleting value"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: e,
                    reason: t,
                  }),
                  this.map.delete(e),
                  this.addToRecentlyDeleted(e),
                  await this.persist());
            }),
            (this.logger = (0, sC.U5)(t, this.name)),
            (this.storagePrefix = r),
            (this.getKey = s);
        }
        get context() {
          return (0, sC.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        addToRecentlyDeleted(e) {
          this.recentlyDeleted.push(e),
            this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
              this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
        }
        async setDataStore(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(e) {
          let t = this.map.get(e);
          if (!t) {
            if (this.recentlyDeleted.includes(e)) {
              let { message: t } = sa(
                "MISSING_OR_INVALID",
                `Record was recently deleted - ${this.name}: ${e}`
              );
              throw (this.logger.error(t), Error(t));
            }
            let { message: t } = sa("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.error(t), Error(t));
          }
          return t;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            let e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
              let { message: e } = sa("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
              this.logger.error(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = sa("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var ay = Object.defineProperty,
        am = (e, t, i) =>
          t in e
            ? ay(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        ab = (e, t, i) => am(e, "symbol" != typeof t ? t + "" : t, i);
      class aw {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            ab(this, "name", "pairing"),
            ab(this, "version", "0.3"),
            ab(this, "events", new (s())()),
            ab(this, "pairings"),
            ab(this, "initialized", !1),
            ab(this, "storagePrefix", s4),
            ab(this, "ignoredPayloadTypes", [1]),
            ab(this, "registeredMethods", []),
            ab(this, "init", async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            ab(this, "register", ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...e]),
                ]);
            }),
            ab(this, "create", async (e) => {
              this.isInitialized();
              let t = rB(),
                i = await this.core.crypto.setSymKey(t),
                r = eB(o.FIVE_MINUTES),
                s = { protocol: "irn" },
                n = {
                  topic: i,
                  expiry: r,
                  relay: s,
                  active: !1,
                  methods: e?.methods,
                },
                a = rX({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: i,
                  symKey: t,
                  relay: s,
                  expiryTimestamp: r,
                  methods: e?.methods,
                });
              return (
                this.events.emit(nd.create, n),
                this.core.expirer.set(i, r),
                await this.pairings.set(i, n),
                await this.core.relayer.subscribe(i, {
                  transportType: e?.transportType,
                }),
                { topic: i, uri: a }
              );
            }),
            ab(this, "pair", async (e) => {
              let t;
              this.isInitialized();
              let i = this.core.eventClient.createEvent({
                properties: { topic: e?.uri, trace: [nb.pairing_started] },
              });
              this.isValidPair(e, i);
              let {
                topic: r,
                symKey: s,
                relay: n,
                expiryTimestamp: a,
                methods: c,
              } = rQ(e.uri);
              if (
                ((i.props.properties.topic = r),
                i.addTrace(nb.pairing_uri_validation_success),
                i.addTrace(nb.pairing_uri_not_expired),
                this.pairings.keys.includes(r))
              ) {
                if (
                  ((t = this.pairings.get(r)),
                  i.addTrace(nb.existing_pairing),
                  t.active)
                )
                  throw (
                    (i.setError(nw.active_pairing_already_exists),
                    Error(
                      `Pairing already exists: ${r}. Please try again with a new connection URI.`
                    ))
                  );
                i.addTrace(nb.pairing_not_expired);
              }
              let l = a || eB(o.FIVE_MINUTES),
                h = { topic: r, relay: n, expiry: l, active: !1, methods: c };
              this.core.expirer.set(r, l),
                await this.pairings.set(r, h),
                i.addTrace(nb.store_new_pairing),
                e.activatePairing && (await this.activate({ topic: r })),
                this.events.emit(nd.create, h),
                i.addTrace(nb.emit_inactive_pairing),
                this.core.crypto.keychain.has(r) ||
                  (await this.core.crypto.setSymKey(s, r)),
                i.addTrace(nb.subscribing_pairing_topic);
              try {
                await this.core.relayer.confirmOnlineStateOrThrow();
              } catch {
                i.setError(nw.no_internet_connection);
              }
              try {
                await this.core.relayer.subscribe(r, { relay: n });
              } catch (e) {
                throw (i.setError(nw.subscribe_pairing_topic_failure), e);
              }
              return i.addTrace(nb.subscribe_pairing_topic_success), h;
            }),
            ab(this, "activate", async ({ topic: e }) => {
              this.isInitialized();
              let t = eB(o.FIVE_MINUTES);
              this.core.expirer.set(e, t),
                await this.pairings.update(e, { active: !0, expiry: t });
            }),
            ab(this, "ping", async (e) => {
              this.isInitialized(),
                await this.isValidPing(e),
                this.logger.warn(
                  "ping() is deprecated and will be removed in the next major release."
                );
              let { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                let e = await this.sendRequest(t, "wc_pairingPing", {}),
                  { done: i, resolve: r, reject: s } = ej();
                this.events.once(eM("pairing_ping", e), ({ error: e }) => {
                  e ? s(e) : r();
                }),
                  await i();
              }
            }),
            ab(this, "updateExpiry", async ({ topic: e, expiry: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { expiry: t });
            }),
            ab(this, "updateMetadata", async ({ topic: e, metadata: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { peerMetadata: t });
            }),
            ab(
              this,
              "getPairings",
              () => (this.isInitialized(), this.pairings.values)
            ),
            ab(this, "disconnect", async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(
                  t,
                  "wc_pairingDelete",
                  sc("USER_DISCONNECTED")
                ),
                await this.deletePairing(t));
            }),
            ab(this, "formatUriFromPairing", (e) => {
              this.isInitialized();
              let { topic: t, relay: i, expiry: r, methods: s } = e,
                n = this.core.crypto.keychain.get(t);
              return rX({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: t,
                symKey: n,
                relay: i,
                expiryTimestamp: r,
                methods: s,
              });
            }),
            ab(this, "sendRequest", async (e, t, i) => {
              let r = (0, s2.formatJsonRpcRequest)(t, i),
                s = await this.core.crypto.encode(e, r),
                n = nu[t].req;
              return (
                this.core.history.set(e, r),
                this.core.relayer.publish(e, s, n),
                r.id
              );
            }),
            ab(this, "sendResult", async (e, t, i) => {
              let r = (0, s2.formatJsonRpcResult)(e, i),
                s = await this.core.crypto.encode(t, r),
                n = nu[(await this.core.history.get(t, e)).request.method].res;
              await this.core.relayer.publish(t, s, n),
                await this.core.history.resolve(r);
            }),
            ab(this, "sendError", async (e, t, i) => {
              let r = (0, s2.formatJsonRpcError)(e, i),
                s = await this.core.crypto.encode(t, r),
                n = (await this.core.history.get(t, e)).request.method,
                o = nu[n] ? nu[n].res : nu.unregistered_method.res;
              await this.core.relayer.publish(t, s, o),
                await this.core.history.resolve(r);
            }),
            ab(this, "deletePairing", async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, sc("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            ab(this, "cleanup", async () => {
              let e = this.pairings.getAll().filter((e) => eL(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            ab(this, "onRelayEventRequest", async (e) => {
              let { topic: t, payload: i } = e;
              switch (i.method) {
                case "wc_pairingPing":
                  return await this.onPairingPingRequest(t, i);
                case "wc_pairingDelete":
                  return await this.onPairingDeleteRequest(t, i);
                default:
                  return await this.onUnknownRpcMethodRequest(t, i);
              }
            }),
            ab(this, "onRelayEventResponse", async (e) => {
              let { topic: t, payload: i } = e,
                r = (await this.core.history.get(t, i.id)).request.method;
              return "wc_pairingPing" === r
                ? this.onPairingPingResponse(t, i)
                : this.onUnknownRpcMethodResponse(r);
            }),
            ab(this, "onPairingPingRequest", async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(i, e, !0),
                  this.events.emit(nd.ping, { id: i, topic: e });
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            ab(this, "onPairingPingResponse", (e, t) => {
              let { id: i } = t;
              setTimeout(() => {
                (0, s2.isJsonRpcResult)(t)
                  ? this.events.emit(eM("pairing_ping", i), {})
                  : (0, s2.isJsonRpcError)(t) &&
                    this.events.emit(eM("pairing_ping", i), { error: t.error });
              }, 500);
            }),
            ab(this, "onPairingDeleteRequest", async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(nd.delete, { id: i, topic: e });
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            ab(this, "onUnknownRpcMethodRequest", async (e, t) => {
              let { id: i, method: r } = t;
              try {
                if (this.registeredMethods.includes(r)) return;
                let t = sc("WC_METHOD_UNSUPPORTED", r);
                await this.sendError(i, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            ab(this, "onUnknownRpcMethodResponse", (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error(sc("WC_METHOD_UNSUPPORTED", e));
            }),
            ab(this, "isValidPair", (e, t) => {
              var i;
              if (!sw(e)) {
                let { message: i } = sa(
                  "MISSING_OR_INVALID",
                  `pair() params: ${e}`
                );
                throw (t.setError(nw.malformed_pairing_uri), Error(i));
              }
              if (
                !(function (e) {
                  function t(e) {
                    try {
                      return "u" > typeof new URL(e);
                    } catch {
                      return !1;
                    }
                  }
                  try {
                    if (sd(e, !1)) {
                      if (t(e)) return !0;
                      let i = eG(e);
                      return t(i);
                    }
                  } catch {}
                  return !1;
                })(e.uri)
              ) {
                let { message: i } = sa(
                  "MISSING_OR_INVALID",
                  `pair() uri: ${e.uri}`
                );
                throw (t.setError(nw.malformed_pairing_uri), Error(i));
              }
              let r = rQ(e?.uri);
              if (!(null != (i = r?.relay) && i.protocol)) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  "pair() uri#relay-protocol"
                );
                throw (t.setError(nw.malformed_pairing_uri), Error(e));
              }
              if (!(null != r && r.symKey)) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  "pair() uri#symKey"
                );
                throw (t.setError(nw.malformed_pairing_uri), Error(e));
              }
              if (
                null != r &&
                r.expiryTimestamp &&
                (0, o.toMiliseconds)(r?.expiryTimestamp) < Date.now()
              ) {
                t.setError(nw.pairing_expired);
                let { message: e } = sa(
                  "EXPIRED",
                  "pair() URI has expired. Please try again with a new connection URI."
                );
                throw Error(e);
              }
            }),
            ab(this, "isValidPing", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            ab(this, "isValidDisconnect", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            ab(this, "isValidPairingTopic", async (e) => {
              if (!sd(e, !1)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `pairing topic should be a string: ${e}`
                );
                throw Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                let { message: t } = sa(
                  "NO_MATCHING_KEY",
                  `pairing topic doesn't exist: ${e}`
                );
                throw Error(t);
              }
              if (eL(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                let { message: t } = sa("EXPIRED", `pairing topic: ${e}`);
                throw Error(t);
              }
            }),
            (this.core = e),
            (this.logger = (0, sC.U5)(t, this.name)),
            (this.pairings = new af(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix
            ));
        }
        get context() {
          return (0, sC.oI)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = sa("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(ns.message, async (e) => {
            let { topic: t, message: i, transportType: r } = e;
            if (
              this.pairings.keys.includes(t) &&
              r !== na.link_mode &&
              !this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(i)
              )
            )
              try {
                let e = await this.core.crypto.decode(t, i);
                (0, s2.isJsonRpcRequest)(e)
                  ? (this.core.history.set(t, e),
                    await this.onRelayEventRequest({ topic: t, payload: e }))
                  : (0, s2.isJsonRpcResponse)(e) &&
                    (await this.core.history.resolve(e),
                    await this.onRelayEventResponse({ topic: t, payload: e }),
                    this.core.history.delete(t, e.id)),
                  await this.core.relayer.messages.ack(t, i);
              } catch (e) {
                this.logger.error(e);
              }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(ng.expired, async (e) => {
            let { topic: t } = e$(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0),
              this.events.emit(nd.expire, { topic: t }));
          });
        }
      }
      var av = Object.defineProperty,
        aE = (e, t, i) =>
          t in e
            ? av(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        aI = (e, t, i) => aE(e, "symbol" != typeof t ? t + "" : t, i);
      class aP extends s$ {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            aI(this, "records", new Map()),
            aI(this, "events", new r.EventEmitter()),
            aI(this, "name", "history"),
            aI(this, "version", "0.3"),
            aI(this, "cached", []),
            aI(this, "initialized", !1),
            aI(this, "storagePrefix", s4),
            aI(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            aI(this, "set", (e, t, i) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: e,
                  request: t,
                  chainId: i,
                }),
                this.records.has(t.id))
              )
                return;
              let r = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: i,
                expiry: eB(o.THIRTY_DAYS),
              };
              this.records.set(r.id, r),
                this.persist(),
                this.events.emit(np.created, r);
            }),
            aI(this, "resolve", async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Updating JSON-RPC response history record"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  response: e,
                }),
                !this.records.has(e.id))
              )
                return;
              let t = await this.getRecord(e.id);
              typeof t.response > "u" &&
                ((t.response = (0, s2.isJsonRpcError)(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.persist(),
                this.events.emit(np.updated, t));
            }),
            aI(
              this,
              "get",
              async (e, t) => (
                this.isInitialized(),
                this.logger.debug("Getting record"),
                this.logger.trace({
                  type: "method",
                  method: "get",
                  topic: e,
                  id: t,
                }),
                await this.getRecord(t)
              )
            ),
            aI(this, "delete", (e, t) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: t }),
                this.values.forEach((i) => {
                  i.topic === e &&
                    (("u" > typeof t && i.id !== t) ||
                      (this.records.delete(i.id),
                      this.events.emit(np.deleted, i)));
                }),
                this.persist();
            }),
            aI(
              this,
              "exists",
              async (e, t) => (
                this.isInitialized(),
                !!this.records.has(t) && (await this.getRecord(t)).topic === e
              )
            ),
            aI(this, "on", (e, t) => {
              this.events.on(e, t);
            }),
            aI(this, "once", (e, t) => {
              this.events.once(e, t);
            }),
            aI(this, "off", (e, t) => {
              this.events.off(e, t);
            }),
            aI(this, "removeListener", (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, sC.U5)(t, this.name));
        }
        get context() {
          return (0, sC.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          let e = [];
          return (
            this.values.forEach((t) => {
              if ("u" > typeof t.response) return;
              let i = {
                topic: t.topic,
                request: (0, s2.formatJsonRpcRequest)(
                  t.request.method,
                  t.request.params,
                  t.id
                ),
                chainId: t.chainId,
              };
              return e.push(i);
            }),
            e
          );
        }
        async setJsonRpcRecords(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(e) {
          this.isInitialized();
          let t = this.records.get(e);
          if (!t) {
            let { message: t } = sa("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(np.sync);
        }
        async restore() {
          try {
            let e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
              let { message: e } = sa("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(e);
          }
        }
        registerEventListeners() {
          this.events.on(np.created, (e) => {
            let t = np.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: "event", event: t, record: e });
          }),
            this.events.on(np.updated, (e) => {
              let t = np.updated;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e });
            }),
            this.events.on(np.deleted, (e) => {
              let t = np.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e });
            }),
            this.core.heartbeat.on(sO.li.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.isInitialized();
            let e = !1;
            this.records.forEach((t) => {
              (0, o.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.records.delete(t.id),
                this.events.emit(np.deleted, t, !1),
                (e = !0));
            }),
              e && this.persist();
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = sa("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var a_ = Object.defineProperty,
        ax = (e, t, i) =>
          t in e
            ? a_(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        aS = (e, t, i) => ax(e, "symbol" != typeof t ? t + "" : t, i);
      class aO extends sV {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            aS(this, "expirations", new Map()),
            aS(this, "events", new r.EventEmitter()),
            aS(this, "name", "expirer"),
            aS(this, "version", "0.3"),
            aS(this, "cached", []),
            aS(this, "initialized", !1),
            aS(this, "storagePrefix", s4),
            aS(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            aS(this, "has", (e) => {
              try {
                let t = this.formatTarget(e);
                return "u" > typeof this.getExpiration(t);
              } catch {
                return !1;
              }
            }),
            aS(this, "set", (e, t) => {
              this.isInitialized();
              let i = this.formatTarget(e),
                r = { target: i, expiry: t };
              this.expirations.set(i, r),
                this.checkExpiry(i, r),
                this.events.emit(ng.created, { target: i, expiration: r });
            }),
            aS(this, "get", (e) => {
              this.isInitialized();
              let t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            aS(this, "del", (e) => {
              if ((this.isInitialized(), this.has(e))) {
                let t = this.formatTarget(e),
                  i = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(ng.deleted, { target: t, expiration: i });
              }
            }),
            aS(this, "on", (e, t) => {
              this.events.on(e, t);
            }),
            aS(this, "once", (e, t) => {
              this.events.once(e, t);
            }),
            aS(this, "off", (e, t) => {
              this.events.off(e, t);
            }),
            aS(this, "removeListener", (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, sC.U5)(t, this.name));
        }
        get context() {
          return (0, sC.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(e) {
          if ("string" == typeof e) return eD("topic", e);
          if ("number" == typeof e) return eD("id", e);
          let { message: t } = sa("UNKNOWN_TYPE", `Target type: ${typeof e}`);
          throw Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(ng.sync);
        }
        async restore() {
          try {
            let e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
              let { message: e } = sa("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored expirations for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(e);
          }
        }
        getExpiration(e) {
          let t = this.expirations.get(e);
          if (!t) {
            let { message: t } = sa("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.warn(t), Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          let { expiry: i } = t;
          (0, o.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e),
            this.events.emit(ng.expired, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(sO.li.pulse, () => this.checkExpirations()),
            this.events.on(ng.created, (e) => {
              let t = ng.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(ng.expired, (e) => {
              let t = ng.expired;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(ng.deleted, (e) => {
              let t = ng.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = sa("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var aA = Object.defineProperty,
        aC = (e, t, i) =>
          t in e
            ? aA(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        aR = (e, t, i) => aC(e, "symbol" != typeof t ? t + "" : t, i);
      class aN extends sF {
        constructor(e, t, i) {
          super(e, t, i),
            (this.core = e),
            (this.logger = t),
            (this.store = i),
            aR(this, "name", "verify-api"),
            aR(this, "abortController"),
            aR(this, "isDevEnv"),
            aR(this, "verifyUrlV3", ny),
            aR(this, "storagePrefix", s4),
            aR(this, "version", 2),
            aR(this, "publicKey"),
            aR(this, "fetchPromise"),
            aR(this, "init", async () => {
              var e;
              this.isDevEnv ||
                ((this.publicKey = await this.store.getItem(this.storeKey)),
                this.publicKey &&
                  (0, o.toMiliseconds)(
                    null == (e = this.publicKey) ? void 0 : e.expiresAt
                  ) < Date.now() &&
                  (this.logger.debug("verify v2 public key expired"),
                  await this.removePublicKey()));
            }),
            aR(this, "register", async (e) => {
              if (!eO() || this.isDevEnv) return;
              let t = window.location.origin,
                { id: i, decryptedId: r } = e,
                s = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${i}&decryptedId=${r}`;
              try {
                let e = (0, a.getDocument)(),
                  t = this.startAbortTimer(5 * o.ONE_SECOND),
                  r = await new Promise((r, n) => {
                    let o = () => {
                      window.removeEventListener("message", c),
                        e.body.removeChild(a),
                        n("attestation aborted");
                    };
                    this.abortController.signal.addEventListener("abort", o);
                    let a = e.createElement("iframe");
                    (a.src = s),
                      (a.style.display = "none"),
                      a.addEventListener("error", o, {
                        signal: this.abortController.signal,
                      });
                    let c = (s) => {
                      if (s.data && "string" == typeof s.data)
                        try {
                          let n = JSON.parse(s.data);
                          if ("verify_attestation" === n.type) {
                            if ((0, eo.Cq)(n.attestation).payload.id !== i)
                              return;
                            clearInterval(t),
                              e.body.removeChild(a),
                              this.abortController.signal.removeEventListener(
                                "abort",
                                o
                              ),
                              window.removeEventListener("message", c),
                              r(null === n.attestation ? "" : n.attestation);
                          }
                        } catch (e) {
                          this.logger.warn(e);
                        }
                    };
                    e.body.appendChild(a),
                      window.addEventListener("message", c, {
                        signal: this.abortController.signal,
                      });
                  });
                return this.logger.debug("jwt attestation", r), r;
              } catch (e) {
                this.logger.warn(e);
              }
              return "";
            }),
            aR(this, "resolve", async (e) => {
              if (this.isDevEnv) return "";
              let { attestationId: t, hash: i, encryptedId: r } = e;
              if ("" === t)
                return void this.logger.debug(
                  "resolve: attestationId is empty, skipping"
                );
              if (t) {
                if ((0, eo.Cq)(t).payload.id !== r) return;
                let e = await this.isValidJwtAttestation(t);
                if (e)
                  return e.isVerified
                    ? e
                    : void this.logger.warn(
                        "resolve: jwt attestation: origin url not verified"
                      );
              }
              if (!i) return;
              let s = this.getVerifyUrl(e?.verifyUrl);
              return this.fetchAttestation(i, s);
            }),
            aR(this, "fetchAttestation", async (e, t) => {
              this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
              let i = this.startAbortTimer(5 * o.ONE_SECOND),
                r = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
                  signal: this.abortController.signal,
                });
              return (
                clearTimeout(i), 200 === r.status ? await r.json() : void 0
              );
            }),
            aR(this, "getVerifyUrl", (e) => {
              let t = e || nf;
              return (
                nm.includes(t) ||
                  (this.logger.info(
                    `verify url: ${t}, not included in trusted list, assigning default: ${nf}`
                  ),
                  (t = nf)),
                t
              );
            }),
            aR(this, "fetchPublicKey", async () => {
              try {
                this.logger.debug(
                  `fetching public key from: ${this.verifyUrlV3}`
                );
                let e = this.startAbortTimer(o.FIVE_SECONDS),
                  t = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal,
                  });
                return clearTimeout(e), await t.json();
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            aR(this, "persistPublicKey", async (e) => {
              this.logger.debug("persisting public key to local storage", e),
                await this.store.setItem(this.storeKey, e),
                (this.publicKey = e);
            }),
            aR(this, "removePublicKey", async () => {
              this.logger.debug("removing verify v2 public key from storage"),
                await this.store.removeItem(this.storeKey),
                (this.publicKey = void 0);
            }),
            aR(this, "isValidJwtAttestation", async (e) => {
              let t = await this.getPublicKey();
              try {
                if (t) return this.validateAttestation(e, t);
              } catch (e) {
                this.logger.error(e),
                  this.logger.warn("error validating attestation");
              }
              let i = await this.fetchAndPersistPublicKey();
              try {
                if (i) return this.validateAttestation(e, i);
              } catch (e) {
                this.logger.error(e),
                  this.logger.warn("error validating attestation");
              }
            }),
            aR(this, "getPublicKey", async () =>
              this.publicKey
                ? this.publicKey
                : await this.fetchAndPersistPublicKey()
            ),
            aR(this, "fetchAndPersistPublicKey", async () => {
              if (this.fetchPromise)
                return await this.fetchPromise, this.publicKey;
              this.fetchPromise = new Promise(async (e) => {
                let t = await this.fetchPublicKey();
                t && (await this.persistPublicKey(t), e(t));
              });
              let e = await this.fetchPromise;
              return (this.fetchPromise = void 0), e;
            }),
            aR(this, "validateAttestation", (e, t) => {
              let i = (function (e, t) {
                  let [i, r, s] = e.split("."),
                    n = eh.from(rV(s), "base64");
                  if (64 !== n.length) throw Error("Invalid signature length");
                  let o = n.slice(0, 32),
                    a = n.slice(32, 64),
                    c = iP(`${i}.${r}`),
                    l = (function (e) {
                      let t = eh.from(e.x, "base64"),
                        i = eh.from(e.y, "base64");
                      return (0, ea.xW)([new Uint8Array([4]), t, i]);
                    })(t);
                  if (!rq.verify((0, ea.xW)([o, a]), c, l))
                    throw Error("Invalid signature");
                  return (0, eo.Cq)(e).payload;
                })(e, t.publicKey),
                r = {
                  hasExpired: (0, o.toMiliseconds)(i.exp) < Date.now(),
                  payload: i,
                };
              if (r.hasExpired)
                throw (
                  (this.logger.warn("resolve: jwt attestation expired"),
                  Error("JWT attestation expired"))
                );
              return {
                origin: r.payload.origin,
                isScam: r.payload.isScam,
                isVerified: r.payload.isVerified,
              };
            }),
            (this.logger = (0, sC.U5)(t, this.name)),
            (this.abortController = new AbortController()),
            (this.isDevEnv = eW()),
            this.init();
        }
        get storeKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//verify:public:key"
          );
        }
        get context() {
          return (0, sC.oI)(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(
              () => this.abortController.abort(),
              (0, o.toMiliseconds)(e)
            )
          );
        }
      }
      var aT = Object.defineProperty,
        aq = (e, t, i) =>
          t in e
            ? aT(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        ak = (e, t, i) => aq(e, "symbol" != typeof t ? t + "" : t, i);
      class aj extends sW {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            ak(this, "context", "echo"),
            ak(this, "registerDeviceToken", async (e) => {
              let {
                  clientId: t,
                  token: i,
                  notificationType: r,
                  enableEncrypted: s = !1,
                } = e,
                n = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await fetch(n, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  client_id: t,
                  type: r,
                  token: i,
                  always_raw: s,
                }),
              });
            }),
            (this.logger = (0, sC.U5)(t, this.context));
        }
      }
      var aU = Object.defineProperty,
        aD = Object.getOwnPropertySymbols,
        a$ = Object.prototype.hasOwnProperty,
        aB = Object.prototype.propertyIsEnumerable,
        aL = (e, t, i) =>
          t in e
            ? aU(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        aM = (e, t) => {
          for (var i in t || (t = {})) a$.call(t, i) && aL(e, i, t[i]);
          if (aD) for (var i of aD(t)) aB.call(t, i) && aL(e, i, t[i]);
          return e;
        },
        az = (e, t, i) => aL(e, "symbol" != typeof t ? t + "" : t, i);
      class aH extends sG {
        constructor(e, t, i = !0) {
          super(e, t, i),
            (this.core = e),
            (this.logger = t),
            az(this, "context", "event-client"),
            az(this, "storagePrefix", s4),
            az(this, "storageVersion", 0.1),
            az(this, "events", new Map()),
            az(this, "shouldPersist", !1),
            az(this, "init", async () => {
              if (!eW())
                try {
                  let e = {
                    eventId: eF(),
                    timestamp: Date.now(),
                    domain: this.getAppDomain(),
                    props: {
                      event: "INIT",
                      type: "",
                      properties: {
                        client_id: await this.core.crypto.getClientId(),
                        user_agent: eN(
                          this.core.relayer.protocol,
                          this.core.relayer.version,
                          no
                        ),
                      },
                    },
                  };
                  await this.sendEvent([e]);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            az(this, "createEvent", (e) => {
              let {
                  event: t = "ERROR",
                  type: i = "",
                  properties: { topic: r, trace: s },
                } = e,
                n = eF(),
                o = this.core.projectId || "",
                a = aM(
                  {
                    eventId: n,
                    timestamp: Date.now(),
                    props: {
                      event: t,
                      type: i,
                      properties: { topic: r, trace: s },
                    },
                    bundleId: o,
                    domain: this.getAppDomain(),
                  },
                  this.setMethods(n)
                );
              return (
                this.telemetryEnabled &&
                  (this.events.set(n, a), (this.shouldPersist = !0)),
                a
              );
            }),
            az(this, "getEvent", (e) => {
              let { eventId: t, topic: i } = e;
              if (t) return this.events.get(t);
              let r = Array.from(this.events.values()).find(
                (e) => e.props.properties.topic === i
              );
              if (r) return aM(aM({}, r), this.setMethods(r.eventId));
            }),
            az(this, "deleteEvent", (e) => {
              let { eventId: t } = e;
              this.events.delete(t), (this.shouldPersist = !0);
            }),
            az(this, "setEventListeners", () => {
              this.core.heartbeat.on(sO.li.pulse, async () => {
                this.shouldPersist && (await this.persist()),
                  this.events.forEach((e) => {
                    (0, o.fromMiliseconds)(Date.now()) -
                      (0, o.fromMiliseconds)(e.timestamp) >
                      86400 &&
                      (this.events.delete(e.eventId),
                      (this.shouldPersist = !0));
                  });
              });
            }),
            az(this, "setMethods", (e) => ({
              addTrace: (t) => this.addTrace(e, t),
              setError: (t) => this.setError(e, t),
            })),
            az(this, "addTrace", (e, t) => {
              let i = this.events.get(e);
              i &&
                (i.props.properties.trace.push(t),
                this.events.set(e, i),
                (this.shouldPersist = !0));
            }),
            az(this, "setError", (e, t) => {
              let i = this.events.get(e);
              i &&
                ((i.props.type = t),
                (i.timestamp = Date.now()),
                this.events.set(e, i),
                (this.shouldPersist = !0));
            }),
            az(this, "persist", async () => {
              await this.core.storage.setItem(
                this.storageKey,
                Array.from(this.events.values())
              ),
                (this.shouldPersist = !1);
            }),
            az(this, "restore", async () => {
              try {
                let e =
                  (await this.core.storage.getItem(this.storageKey)) || [];
                if (!e.length) return;
                e.forEach((e) => {
                  this.events.set(
                    e.eventId,
                    aM(aM({}, e), this.setMethods(e.eventId))
                  );
                });
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            az(this, "submit", async () => {
              if (!this.telemetryEnabled || 0 === this.events.size) return;
              let e = [];
              for (let [t, i] of this.events) i.props.type && e.push(i);
              if (0 !== e.length)
                try {
                  if ((await this.sendEvent(e)).ok)
                    for (let t of e)
                      this.events.delete(t.eventId), (this.shouldPersist = !0);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            az(this, "sendEvent", async (e) => {
              let t = this.getAppDomain() ? "" : "&sp=desktop";
              return await fetch(
                `https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${no}${t}`,
                { method: "POST", body: JSON.stringify(e) }
              );
            }),
            az(this, "getAppDomain", () => eR().url),
            (this.logger = (0, sC.U5)(t, this.context)),
            (this.telemetryEnabled = i),
            i
              ? this.restore().then(async () => {
                  await this.submit(), this.setEventListeners();
                })
              : this.persist();
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.storageVersion +
            this.core.customStoragePrefix +
            "//" +
            this.context
          );
        }
      }
      var aK = Object.defineProperty,
        aV = Object.getOwnPropertySymbols,
        aF = Object.prototype.hasOwnProperty,
        aW = Object.prototype.propertyIsEnumerable,
        aG = (e, t, i) =>
          t in e
            ? aK(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        aJ = (e, t) => {
          for (var i in t || (t = {})) aF.call(t, i) && aG(e, i, t[i]);
          if (aV) for (var i of aV(t)) aW.call(t, i) && aG(e, i, t[i]);
          return e;
        },
        aZ = (e, t, i) => aG(e, "symbol" != typeof t ? t + "" : t, i);
      class aY extends sk {
        constructor(e) {
          var t;
          super(e),
            aZ(this, "protocol", "wc"),
            aZ(this, "version", 2),
            aZ(this, "name", s6),
            aZ(this, "relayUrl"),
            aZ(this, "projectId"),
            aZ(this, "customStoragePrefix"),
            aZ(this, "events", new r.EventEmitter()),
            aZ(this, "logger"),
            aZ(this, "heartbeat"),
            aZ(this, "relayer"),
            aZ(this, "crypto"),
            aZ(this, "storage"),
            aZ(this, "history"),
            aZ(this, "expirer"),
            aZ(this, "pairing"),
            aZ(this, "verify"),
            aZ(this, "echoClient"),
            aZ(this, "linkModeSupportedApps"),
            aZ(this, "eventClient"),
            aZ(this, "initialized", !1),
            aZ(this, "logChunkController"),
            aZ(this, "on", (e, t) => this.events.on(e, t)),
            aZ(this, "once", (e, t) => this.events.once(e, t)),
            aZ(this, "off", (e, t) => this.events.off(e, t)),
            aZ(this, "removeListener", (e, t) =>
              this.events.removeListener(e, t)
            ),
            aZ(
              this,
              "dispatchEnvelope",
              ({ topic: e, message: t, sessionExists: i }) => {
                if (!e || !t) return;
                let r = {
                  topic: e,
                  message: t,
                  publishedAt: Date.now(),
                  transportType: na.link_mode,
                };
                this.relayer.onLinkMessageEvent(r, { sessionExists: i });
              }
            );
          let i = this.getGlobalCore(e?.customStoragePrefix);
          if (i)
            try {
              return (
                (this.customStoragePrefix = i.customStoragePrefix),
                (this.logger = i.logger),
                (this.heartbeat = i.heartbeat),
                (this.crypto = i.crypto),
                (this.history = i.history),
                (this.expirer = i.expirer),
                (this.storage = i.storage),
                (this.relayer = i.relayer),
                (this.pairing = i.pairing),
                (this.verify = i.verify),
                (this.echoClient = i.echoClient),
                (this.linkModeSupportedApps = i.linkModeSupportedApps),
                (this.eventClient = i.eventClient),
                (this.initialized = i.initialized),
                (this.logChunkController = i.logChunkController),
                i
              );
            } catch (e) {
              console.warn("Failed to copy global core", e);
            }
          (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || nr),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix
                ? `:${e.customStoragePrefix}`
                : "");
          let s = (0, sC.iP)({
              level:
                "string" == typeof e?.logger && e.logger ? e.logger : s9.logger,
              name: s6,
            }),
            { logger: n, chunkLoggerController: o } = (0, sC.D5)({
              opts: s,
              maxSizeInBytes: e?.maxLogBlobSizeInBytes,
              loggerOverride: e?.logger,
            });
          (this.logChunkController = o),
            null != (t = this.logChunkController) &&
              t.downloadLogsBlobInBrowser &&
              (window.downloadLogsBlobInBrowser = async () => {
                var e, t;
                null != (e = this.logChunkController) &&
                  e.downloadLogsBlobInBrowser &&
                  (null == (t = this.logChunkController) ||
                    t.downloadLogsBlobInBrowser({
                      clientId: await this.crypto.getClientId(),
                    }));
              }),
            (this.logger = (0, sC.U5)(n, this.name)),
            (this.heartbeat = new sO.VH()),
            (this.crypto = new ov(this, this.logger, e?.keychain)),
            (this.history = new aP(this, this.logger)),
            (this.expirer = new aO(this, this.logger)),
            (this.storage =
              null != e && e.storage
                ? e.storage
                : new sA.A(aJ(aJ({}, s7), e?.storageOptions))),
            (this.relayer = new at({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new aw(this, this.logger)),
            (this.verify = new aN(this, this.logger, this.storage)),
            (this.echoClient = new aj(this.projectId || "", this.logger)),
            (this.linkModeSupportedApps = []),
            (this.eventClient = new aH(this, this.logger, e?.telemetryEnabled)),
            this.setGlobalCore(this);
        }
        static async init(e) {
          let t = new aY(e);
          await t.initialize();
          let i = await t.crypto.getClientId();
          return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", i), t;
        }
        get context() {
          return (0, sC.oI)(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async getLogsBlob() {
          var e;
          return null == (e = this.logChunkController)
            ? void 0
            : e.logsToBlob({ clientId: await this.crypto.getClientId() });
        }
        async addLinkModeSupportedApp(e) {
          this.linkModeSupportedApps.includes(e) ||
            (this.linkModeSupportedApps.push(e),
            await this.storage.setItem(nl, this.linkModeSupportedApps));
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.linkModeSupportedApps =
                (await this.storage.getItem(nl)) || []),
              (this.initialized = !0),
              this.logger.info("Core Initialization Success");
          } catch (e) {
            throw (
              (this.logger.warn(
                `Core Initialization Failure at epoch ${Date.now()}`,
                e
              ),
              this.logger.error(e.message),
              e)
            );
          }
        }
        getGlobalCore(e = "") {
          try {
            if (this.isGlobalCoreDisabled()) return;
            let t = `_walletConnectCore_${e}`,
              i = `${t}_count`;
            return (
              (globalThis[i] = (globalThis[i] || 0) + 1),
              globalThis[i] > 1 &&
                console.warn(
                  `WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i]} times.`
                ),
              globalThis[t]
            );
          } catch (e) {
            console.warn("Failed to get global WalletConnect core", e);
            return;
          }
        }
        setGlobalCore(e) {
          var t;
          try {
            if (this.isGlobalCoreDisabled()) return;
            let i = `_walletConnectCore_${
              (null == (t = e.opts) ? void 0 : t.customStoragePrefix) || ""
            }`;
            globalThis[i] = e;
          } catch (e) {
            console.warn("Failed to set global WalletConnect core", e);
          }
        }
        isGlobalCoreDisabled() {
          try {
            return "u" > typeof s3 && "true" === s3.env.DISABLE_GLOBAL_CORE;
          } catch {
            return !0;
          }
        }
      }
      let aQ = "client",
        aX = `wc@2:${aQ}:`,
        a0 = { name: aQ, logger: "error" },
        a1 = "WALLETCONNECT_DEEPLINK_CHOICE",
        a2 = "Proposal expired",
        a8 = o.SEVEN_DAYS,
        a5 = {
          wc_sessionPropose: {
            req: { ttl: o.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1101 },
            reject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1120 },
            autoReject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1121 },
          },
          wc_sessionSettle: {
            req: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: o.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: o.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: o.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: o.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: o.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: o.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: o.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: o.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: o.ONE_DAY, prompt: !1, tag: 1114 },
            res: { ttl: o.ONE_DAY, prompt: !1, tag: 1115 },
          },
          wc_sessionAuthenticate: {
            req: { ttl: o.ONE_HOUR, prompt: !0, tag: 1116 },
            res: { ttl: o.ONE_HOUR, prompt: !1, tag: 1117 },
            reject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1118 },
            autoReject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1119 },
          },
        },
        a3 = { min: o.FIVE_MINUTES, max: o.SEVEN_DAYS },
        a6 = { idle: "IDLE", active: "ACTIVE" },
        a4 = {
          eth_sendTransaction: { key: "" },
          eth_sendRawTransaction: { key: "" },
          wallet_sendCalls: { key: "" },
          solana_signTransaction: { key: "signature" },
          solana_signAllTransactions: { key: "transactions" },
          solana_signAndSendTransaction: { key: "signature" },
        },
        a9 = [
          "wc_sessionPropose",
          "wc_sessionRequest",
          "wc_authRequest",
          "wc_sessionAuthenticate",
        ],
        a7 = "wc@1.5:auth:",
        ce = `${a7}:PUB_KEY`;
      var ct = Object.defineProperty,
        ci = Object.defineProperties,
        cr = Object.getOwnPropertyDescriptors,
        cs = Object.getOwnPropertySymbols,
        cn = Object.prototype.hasOwnProperty,
        co = Object.prototype.propertyIsEnumerable,
        ca = (e, t, i) =>
          t in e
            ? ct(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        cc = (e, t) => {
          for (var i in t || (t = {})) cn.call(t, i) && ca(e, i, t[i]);
          if (cs) for (var i of cs(t)) co.call(t, i) && ca(e, i, t[i]);
          return e;
        },
        cl = (e, t) => ci(e, cr(t)),
        ch = (e, t, i) => ca(e, "symbol" != typeof t ? t + "" : t, i);
      class cu extends sX {
        constructor(e) {
          super(e),
            ch(this, "name", "engine"),
            ch(this, "events", new (s())()),
            ch(this, "initialized", !1),
            ch(this, "requestQueue", { state: a6.idle, queue: [] }),
            ch(this, "sessionRequestQueue", { state: a6.idle, queue: [] }),
            ch(this, "requestQueueDelay", o.ONE_SECOND),
            ch(this, "expectedPairingMethodMap", new Map()),
            ch(this, "recentlyDeletedMap", new Map()),
            ch(this, "recentlyDeletedLimit", 200),
            ch(this, "relayMessageCache", []),
            ch(this, "pendingSessions", new Map()),
            ch(this, "init", async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                await this.registerLinkModeListeners(),
                this.client.core.pairing.register({ methods: Object.keys(a5) }),
                (this.initialized = !0),
                setTimeout(async () => {
                  await this.processPendingMessageEvents(),
                    (this.sessionRequestQueue.queue =
                      this.getPendingSessionRequests()),
                    this.processSessionRequestQueue();
                }, (0, o.toMiliseconds)(this.requestQueueDelay)));
            }),
            ch(this, "connect", async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              let t = cl(cc({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(t),
                (t.optionalNamespaces = (function (e, t) {
                  var i, r, s, n, o, a;
                  let c = sr(e),
                    l = sr(t),
                    h = {};
                  for (let e of Object.keys(c).concat(Object.keys(l)))
                    h[e] = {
                      chains: ez(
                        null == (i = c[e]) ? void 0 : i.chains,
                        null == (r = l[e]) ? void 0 : r.chains
                      ),
                      methods: ez(
                        null == (s = c[e]) ? void 0 : s.methods,
                        null == (n = l[e]) ? void 0 : n.methods
                      ),
                      events: ez(
                        null == (o = c[e]) ? void 0 : o.events,
                        null == (a = l[e]) ? void 0 : a.events
                      ),
                    };
                  return h;
                })(t.requiredNamespaces, t.optionalNamespaces)),
                (t.requiredNamespaces = {});
              let {
                  pairingTopic: i,
                  requiredNamespaces: r,
                  optionalNamespaces: s,
                  sessionProperties: n,
                  scopedProperties: a,
                  relays: c,
                } = t,
                l = i,
                h,
                u = !1;
              try {
                if (l) {
                  let e = this.client.core.pairing.pairings.get(l);
                  this.client.logger.warn(
                    "connect() with existing pairing topic is deprecated and will be removed in the next major release."
                  ),
                    (u = e.active);
                }
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `connect() -> pairing.get(${l}) failed`
                  ),
                  e)
                );
              }
              if (!l || !u) {
                let { topic: e, uri: t } =
                  await this.client.core.pairing.create();
                (l = e), (h = t);
              }
              if (!l) {
                let { message: e } = sa(
                  "NO_MATCHING_KEY",
                  `connect() pairing topic: ${l}`
                );
                throw Error(e);
              }
              let d = await this.client.core.crypto.generateKeyPair(),
                p = a5.wc_sessionPropose.req.ttl || o.FIVE_MINUTES,
                g = eB(p),
                f = cl(
                  cc(
                    cc(
                      {
                        requiredNamespaces: r,
                        optionalNamespaces: s,
                        relays: c ?? [{ protocol: "irn" }],
                        proposer: {
                          publicKey: d,
                          metadata: this.client.metadata,
                        },
                        expiryTimestamp: g,
                        pairingTopic: l,
                      },
                      n && { sessionProperties: n }
                    ),
                    a && { scopedProperties: a }
                  ),
                  { id: (0, s2.payloadId)() }
                ),
                y = eM("session_connect", f.id),
                { reject: m, resolve: b, done: w } = ej(p, a2),
                v = ({ id: e }) => {
                  e === f.id &&
                    (this.client.events.off("proposal_expire", v),
                    this.pendingSessions.delete(f.id),
                    this.events.emit(y, { error: { message: a2, code: 0 } }));
                };
              return (
                this.client.events.on("proposal_expire", v),
                this.events.once(y, ({ error: e, session: t }) => {
                  this.client.events.off("proposal_expire", v),
                    e ? m(e) : t && b(t);
                }),
                await this.sendRequest({
                  topic: l,
                  method: "wc_sessionPropose",
                  params: f,
                  throwOnFailedPublish: !0,
                  clientRpcId: f.id,
                }),
                await this.setProposal(f.id, f),
                { uri: h, approval: w }
              );
            }),
            ch(this, "pair", async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                return await this.client.core.pairing.pair(e);
              } catch (e) {
                throw (this.client.logger.error("pair() failed"), e);
              }
            }),
            ch(this, "approve", async (e) => {
              var t, i, r;
              let s = this.client.core.eventClient.createEvent({
                properties: {
                  topic: null == (t = e?.id) ? void 0 : t.toString(),
                  trace: [nv.session_approve_started],
                },
              });
              try {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
              } catch (e) {
                throw (s.setError(nE.no_internet_connection), e);
              }
              try {
                await this.isValidProposalId(e?.id);
              } catch (t) {
                throw (
                  (this.client.logger.error(
                    `approve() -> proposal.get(${e?.id}) failed`
                  ),
                  s.setError(nE.proposal_not_found),
                  t)
                );
              }
              try {
                await this.isValidApprove(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "approve() -> isValidApprove() failed"
                  ),
                  s.setError(nE.session_approve_namespace_validation_failure),
                  e)
                );
              }
              let {
                  id: n,
                  relayProtocol: o,
                  namespaces: a,
                  sessionProperties: c,
                  scopedProperties: l,
                  sessionConfig: h,
                } = e,
                u = this.client.proposal.get(n);
              this.client.core.eventClient.deleteEvent({ eventId: s.eventId });
              let {
                  pairingTopic: d,
                  proposer: p,
                  requiredNamespaces: g,
                  optionalNamespaces: f,
                } = u,
                y =
                  null == (i = this.client.core.eventClient)
                    ? void 0
                    : i.getEvent({ topic: d });
              y ||
                (y =
                  null == (r = this.client.core.eventClient)
                    ? void 0
                    : r.createEvent({
                        type: nv.session_approve_started,
                        properties: {
                          topic: d,
                          trace: [
                            nv.session_approve_started,
                            nv.session_namespaces_validation_success,
                          ],
                        },
                      }));
              let m = await this.client.core.crypto.generateKeyPair(),
                b = p.publicKey,
                w = await this.client.core.crypto.generateSharedKey(m, b),
                v = cc(
                  cc(
                    cc(
                      {
                        relay: { protocol: o ?? "irn" },
                        namespaces: a,
                        controller: {
                          publicKey: m,
                          metadata: this.client.metadata,
                        },
                        expiry: eB(a8),
                      },
                      c && { sessionProperties: c }
                    ),
                    l && { scopedProperties: l }
                  ),
                  h && { sessionConfig: h }
                ),
                E = na.relay;
              y.addTrace(nv.subscribing_session_topic);
              try {
                await this.client.core.relayer.subscribe(w, {
                  transportType: E,
                });
              } catch (e) {
                throw (y.setError(nE.subscribe_session_topic_failure), e);
              }
              y.addTrace(nv.subscribe_session_topic_success);
              let I = cl(cc({}, v), {
                topic: w,
                requiredNamespaces: g,
                optionalNamespaces: f,
                pairingTopic: d,
                acknowledged: !1,
                self: v.controller,
                peer: { publicKey: p.publicKey, metadata: p.metadata },
                controller: m,
                transportType: na.relay,
              });
              await this.client.session.set(w, I), y.addTrace(nv.store_session);
              try {
                y.addTrace(nv.publishing_session_settle),
                  await this.sendRequest({
                    topic: w,
                    method: "wc_sessionSettle",
                    params: v,
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (y?.setError(nE.session_settle_publish_failure), e);
                  }),
                  y.addTrace(nv.session_settle_publish_success),
                  y.addTrace(nv.publishing_session_approve),
                  await this.sendResult({
                    id: n,
                    topic: d,
                    result: {
                      relay: { protocol: o ?? "irn" },
                      responderPublicKey: m,
                    },
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (y?.setError(nE.session_approve_publish_failure), e);
                  }),
                  y.addTrace(nv.session_approve_publish_success);
              } catch (e) {
                throw (
                  (this.client.logger.error(e),
                  this.client.session.delete(w, sc("USER_DISCONNECTED")),
                  await this.client.core.relayer.unsubscribe(w),
                  e)
                );
              }
              return (
                this.client.core.eventClient.deleteEvent({
                  eventId: y.eventId,
                }),
                await this.client.core.pairing.updateMetadata({
                  topic: d,
                  metadata: p.metadata,
                }),
                await this.client.proposal.delete(n, sc("USER_DISCONNECTED")),
                await this.client.core.pairing.activate({ topic: d }),
                await this.setExpiry(w, eB(a8)),
                {
                  topic: w,
                  acknowledged: () =>
                    Promise.resolve(this.client.session.get(w)),
                }
              );
            }),
            ch(this, "reject", async (e) => {
              let t;
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidReject(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "reject() -> isValidReject() failed"
                  ),
                  e)
                );
              }
              let { id: i, reason: r } = e;
              try {
                t = this.client.proposal.get(i).pairingTopic;
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `reject() -> proposal.get(${i}) failed`
                  ),
                  e)
                );
              }
              t &&
                (await this.sendError({
                  id: i,
                  topic: t,
                  error: r,
                  rpcOpts: a5.wc_sessionPropose.reject,
                }),
                await this.client.proposal.delete(i, sc("USER_DISCONNECTED")));
            }),
            ch(this, "update", async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidUpdate(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "update() -> isValidUpdate() failed"
                  ),
                  e)
                );
              }
              let { topic: t, namespaces: i } = e,
                { done: r, resolve: s, reject: n } = ej(),
                o = (0, s2.payloadId)(),
                a = (0, s2.getBigIntRpcId)().toString(),
                c = this.client.session.get(t).namespaces;
              return (
                this.events.once(eM("session_update", o), ({ error: e }) => {
                  e ? n(e) : s();
                }),
                await this.client.session.update(t, { namespaces: i }),
                await this.sendRequest({
                  topic: t,
                  method: "wc_sessionUpdate",
                  params: { namespaces: i },
                  throwOnFailedPublish: !0,
                  clientRpcId: o,
                  relayRpcId: a,
                }).catch((e) => {
                  this.client.logger.error(e),
                    this.client.session.update(t, { namespaces: c }),
                    n(e);
                }),
                { acknowledged: r }
              );
            }),
            ch(this, "extend", async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidExtend(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "extend() -> isValidExtend() failed"
                  ),
                  e)
                );
              }
              let { topic: t } = e,
                i = (0, s2.payloadId)(),
                { done: r, resolve: s, reject: n } = ej();
              return (
                this.events.once(eM("session_extend", i), ({ error: e }) => {
                  e ? n(e) : s();
                }),
                await this.setExpiry(t, eB(a8)),
                this.sendRequest({
                  topic: t,
                  method: "wc_sessionExtend",
                  params: {},
                  clientRpcId: i,
                  throwOnFailedPublish: !0,
                }).catch((e) => {
                  n(e);
                }),
                { acknowledged: r }
              );
            }),
            ch(this, "request", async (e) => {
              this.isInitialized();
              try {
                await this.isValidRequest(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "request() -> isValidRequest() failed"
                  ),
                  e)
                );
              }
              let {
                  chainId: t,
                  request: i,
                  topic: r,
                  expiry: s = a5.wc_sessionRequest.req.ttl,
                } = e,
                n = this.client.session.get(r);
              n?.transportType === na.relay &&
                (await this.confirmOnlineStateOrThrow());
              let o = (0, s2.payloadId)(),
                a = (0, s2.getBigIntRpcId)().toString(),
                {
                  done: c,
                  resolve: l,
                  reject: h,
                } = ej(s, "Request expired. Please try again.");
              this.events.once(
                eM("session_request", o),
                ({ error: e, result: t }) => {
                  e ? h(e) : l(t);
                }
              );
              let u = "wc_sessionRequest",
                d = this.getAppLinkIfEnabled(n.peer.metadata, n.transportType);
              if (d)
                return (
                  await this.sendRequest({
                    clientRpcId: o,
                    relayRpcId: a,
                    topic: r,
                    method: u,
                    params: {
                      request: cl(cc({}, i), { expiryTimestamp: eB(s) }),
                      chainId: t,
                    },
                    expiry: s,
                    throwOnFailedPublish: !0,
                    appLink: d,
                  }).catch((e) => h(e)),
                  this.client.events.emit("session_request_sent", {
                    topic: r,
                    request: i,
                    chainId: t,
                    id: o,
                  }),
                  await c()
                );
              let p = {
                  request: cl(cc({}, i), { expiryTimestamp: eB(s) }),
                  chainId: t,
                },
                g = this.shouldSetTVF(u, p);
              return await Promise.all([
                new Promise(async (e) => {
                  await this.sendRequest(
                    cc(
                      {
                        clientRpcId: o,
                        relayRpcId: a,
                        topic: r,
                        method: u,
                        params: p,
                        expiry: s,
                        throwOnFailedPublish: !0,
                      },
                      g && { tvf: this.getTVFParams(o, p) }
                    )
                  ).catch((e) => h(e)),
                    this.client.events.emit("session_request_sent", {
                      topic: r,
                      request: i,
                      chainId: t,
                      id: o,
                    }),
                    e();
                }),
                new Promise(async (e) => {
                  var t;
                  if (!(null != (t = n.sessionConfig) && t.disableDeepLink)) {
                    let e = await eK(this.client.core.storage, a1);
                    await eH({ id: o, topic: r, wcDeepLink: e });
                  }
                  e();
                }),
                c(),
              ]).then((e) => e[2]);
            }),
            ch(this, "respond", async (e) => {
              this.isInitialized(), await this.isValidRespond(e);
              let { topic: t, response: i } = e,
                { id: r } = i,
                s = this.client.session.get(t);
              s.transportType === na.relay &&
                (await this.confirmOnlineStateOrThrow());
              let n = this.getAppLinkIfEnabled(
                s.peer.metadata,
                s.transportType
              );
              (0, s2.isJsonRpcResult)(i)
                ? await this.sendResult({
                    id: r,
                    topic: t,
                    result: i.result,
                    throwOnFailedPublish: !0,
                    appLink: n,
                  })
                : (0, s2.isJsonRpcError)(i) &&
                  (await this.sendError({
                    id: r,
                    topic: t,
                    error: i.error,
                    appLink: n,
                  })),
                this.cleanupAfterResponse(e);
            }),
            ch(this, "ping", async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidPing(e);
              } catch (e) {
                throw (
                  (this.client.logger.error("ping() -> isValidPing() failed"),
                  e)
                );
              }
              let { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                let e = (0, s2.payloadId)(),
                  i = (0, s2.getBigIntRpcId)().toString(),
                  { done: r, resolve: s, reject: n } = ej();
                this.events.once(eM("session_ping", e), ({ error: e }) => {
                  e ? n(e) : s();
                }),
                  await Promise.all([
                    this.sendRequest({
                      topic: t,
                      method: "wc_sessionPing",
                      params: {},
                      throwOnFailedPublish: !0,
                      clientRpcId: e,
                      relayRpcId: i,
                    }),
                    r(),
                  ]);
              } else
                this.client.core.pairing.pairings.keys.includes(t) &&
                  (this.client.logger.warn(
                    "ping() on pairing topic is deprecated and will be removed in the next major release."
                  ),
                  await this.client.core.pairing.ping({ topic: t }));
            }),
            ch(this, "emit", async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidEmit(e);
              let { topic: t, event: i, chainId: r } = e,
                s = (0, s2.getBigIntRpcId)().toString(),
                n = (0, s2.payloadId)();
              await this.sendRequest({
                topic: t,
                method: "wc_sessionEvent",
                params: { event: i, chainId: r },
                throwOnFailedPublish: !0,
                relayRpcId: s,
                clientRpcId: n,
              });
            }),
            ch(this, "disconnect", async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidDisconnect(e);
              let { topic: t } = e;
              if (this.client.session.keys.includes(t))
                await this.sendRequest({
                  topic: t,
                  method: "wc_sessionDelete",
                  params: sc("USER_DISCONNECTED"),
                  throwOnFailedPublish: !0,
                }),
                  await this.deleteSession({ topic: t, emitEvent: !1 });
              else if (this.client.core.pairing.pairings.keys.includes(t))
                await this.client.core.pairing.disconnect({ topic: t });
              else {
                let { message: e } = sa(
                  "MISMATCHED_TOPIC",
                  `Session or pairing topic not found: ${t}`
                );
                throw Error(e);
              }
            }),
            ch(
              this,
              "find",
              (e) => (
                this.isInitialized(),
                this.client.session.getAll().filter((t) =>
                  (function (e, t) {
                    let { requiredNamespaces: i } = t,
                      r = Object.keys(e.namespaces),
                      s = Object.keys(i),
                      n = !0;
                    return (
                      !!eT(s, r) &&
                      (r.forEach((t) => {
                        let {
                            accounts: r,
                            methods: s,
                            events: o,
                          } = e.namespaces[t],
                          a = se(r),
                          c = i[t];
                        (eT(eg(t, c), a) &&
                          eT(c.methods, s) &&
                          eT(c.events, o)) ||
                          (n = !1);
                      }),
                      n)
                    );
                  })(t, e)
                )
              )
            ),
            ch(this, "getPendingSessionRequests", () =>
              this.client.pendingRequest.getAll()
            ),
            ch(this, "authenticate", async (e, t) => {
              var i, r, s;
              let n;
              this.isInitialized(), this.isValidAuthenticate(e);
              let o =
                  t &&
                  this.client.core.linkModeSupportedApps.includes(t) &&
                  (null == (i = this.client.metadata.redirect)
                    ? void 0
                    : i.linkMode),
                a = o ? na.link_mode : na.relay;
              a === na.relay && (await this.confirmOnlineStateOrThrow());
              let {
                  chains: c,
                  statement: l = "",
                  uri: h,
                  domain: u,
                  nonce: d,
                  type: p,
                  exp: g,
                  nbf: f,
                  methods: y = [],
                  expiry: m,
                } = e,
                b = [...(e.resources || [])],
                { topic: w, uri: v } = await this.client.core.pairing.create({
                  methods: ["wc_sessionAuthenticate"],
                  transportType: a,
                });
              this.client.logger.info({
                message: "Generated new pairing",
                pairing: { topic: w, uri: v },
              });
              let E = await this.client.core.crypto.generateKeyPair(),
                I = rL(E);
              if (
                (await Promise.all([
                  this.client.auth.authKeys.set(ce, {
                    responseTopic: I,
                    publicKey: E,
                  }),
                  this.client.auth.pairingTopics.set(I, {
                    topic: I,
                    pairingTopic: w,
                  }),
                ]),
                await this.client.core.relayer.subscribe(I, {
                  transportType: a,
                }),
                this.client.logger.info(
                  `sending request to new pairing topic: ${w}`
                ),
                y.length > 0)
              ) {
                let { namespace: e } = eu(c[0]),
                  t = tL(
                    (function (e, t, i, r = {}) {
                      return (
                        i?.sort((e, t) => e.localeCompare(t)),
                        {
                          att: {
                            [e]: (function (e, t, i = {}) {
                              return Object.assign(
                                {},
                                ...(t = t?.sort((e, t) =>
                                  e.localeCompare(t)
                                )).map((t) => ({ [`${e}/${t}`]: [i] }))
                              );
                            })(t, i, r),
                          },
                        }
                      );
                    })(e, "request", y)
                  );
                tK(b) &&
                  ((r = t),
                  (s = b.pop()),
                  (t = tL(
                    (function (e, t) {
                      tB(e), tB(t);
                      let i = Object.keys(e.att)
                          .concat(Object.keys(t.att))
                          .sort((e, t) => e.localeCompare(t)),
                        r = { att: {} };
                      return (
                        i.forEach((i) => {
                          var s, n;
                          Object.keys(
                            (null == (s = e.att) ? void 0 : s[i]) || {}
                          )
                            .concat(
                              Object.keys(
                                (null == (n = t.att) ? void 0 : n[i]) || {}
                              )
                            )
                            .sort((e, t) => e.localeCompare(t))
                            .forEach((s) => {
                              var n, o;
                              r.att[i] = tT(tN({}, r.att[i]), {
                                [s]:
                                  (null == (n = e.att[i]) ? void 0 : n[s]) ||
                                  (null == (o = t.att[i]) ? void 0 : o[s]),
                              });
                            });
                        }),
                        r
                      );
                    })(tM(r), tM(s))
                  ))),
                  b.push(t);
              }
              let P =
                  m && m > a5.wc_sessionAuthenticate.req.ttl
                    ? m
                    : a5.wc_sessionAuthenticate.req.ttl,
                _ = {
                  authPayload: {
                    type: p ?? "caip122",
                    chains: c,
                    statement: l,
                    aud: h,
                    domain: u,
                    version: "1",
                    nonce: d,
                    iat: new Date().toISOString(),
                    exp: g,
                    nbf: f,
                    resources: b,
                  },
                  requester: { publicKey: E, metadata: this.client.metadata },
                  expiryTimestamp: eB(P),
                },
                x = {
                  requiredNamespaces: {},
                  optionalNamespaces: {
                    eip155: {
                      chains: c,
                      methods: [...new Set(["personal_sign", ...y])],
                      events: ["chainChanged", "accountsChanged"],
                    },
                  },
                  relays: [{ protocol: "irn" }],
                  pairingTopic: w,
                  proposer: { publicKey: E, metadata: this.client.metadata },
                  expiryTimestamp: eB(a5.wc_sessionPropose.req.ttl),
                  id: (0, s2.payloadId)(),
                },
                { done: S, resolve: O, reject: A } = ej(P, "Request expired"),
                C = (0, s2.payloadId)(),
                R = eM("session_connect", x.id),
                N = eM("session_request", C),
                T = async ({ error: e, session: t }) => {
                  this.events.off(N, q), e ? A(e) : t && O({ session: t });
                },
                q = async (e) => {
                  var i, r, s;
                  let n;
                  if (
                    (await this.deletePendingAuthRequest(C, {
                      message: "fulfilled",
                      code: 0,
                    }),
                    e.error)
                  ) {
                    let t = sc(
                      "WC_METHOD_UNSUPPORTED",
                      "wc_sessionAuthenticate"
                    );
                    return e.error.code === t.code
                      ? void 0
                      : (this.events.off(R, T), A(e.error.message));
                  }
                  await this.deleteProposal(x.id), this.events.off(R, T);
                  let { cacaos: o, responder: c } = e.result,
                    l = [],
                    h = [];
                  for (let e of o) {
                    (await tD({
                      cacao: e,
                      projectId: this.client.core.projectId,
                    })) ||
                      (this.client.logger.error(
                        e,
                        "Signature verification failed"
                      ),
                      A(
                        sc(
                          "SESSION_SETTLEMENT_FAILED",
                          "Signature verification failed"
                        )
                      ));
                    let { p: t } = e,
                      i = tK(t.resources),
                      r = [tj(t.iss)],
                      s = tU(t.iss);
                    if (i) {
                      let e = tz(i),
                        t = tH(i);
                      l.push(...e), r.push(...t);
                    }
                    for (let e of r) h.push(`${e}:${s}`);
                  }
                  let u = await this.client.core.crypto.generateSharedKey(
                    E,
                    c.publicKey
                  );
                  l.length > 0 &&
                    ((n = {
                      topic: u,
                      acknowledged: !0,
                      self: { publicKey: E, metadata: this.client.metadata },
                      peer: c,
                      controller: c.publicKey,
                      expiry: eB(a8),
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      relay: { protocol: "irn" },
                      pairingTopic: w,
                      namespaces: ss([...new Set(l)], [...new Set(h)]),
                      transportType: a,
                    }),
                    await this.client.core.relayer.subscribe(u, {
                      transportType: a,
                    }),
                    await this.client.session.set(u, n),
                    w &&
                      (await this.client.core.pairing.updateMetadata({
                        topic: w,
                        metadata: c.metadata,
                      })),
                    (n = this.client.session.get(u))),
                    null != (i = this.client.metadata.redirect) &&
                      i.linkMode &&
                      null != (r = c.metadata.redirect) &&
                      r.linkMode &&
                      null != (s = c.metadata.redirect) &&
                      s.universal &&
                      t &&
                      (this.client.core.addLinkModeSupportedApp(
                        c.metadata.redirect.universal
                      ),
                      this.client.session.update(u, {
                        transportType: na.link_mode,
                      })),
                    O({ auths: o, session: n });
                };
              this.events.once(R, T), this.events.once(N, q);
              try {
                if (o) {
                  let e = (0, s2.formatJsonRpcRequest)(
                    "wc_sessionAuthenticate",
                    _,
                    C
                  );
                  this.client.core.history.set(w, e);
                  let i = await this.client.core.crypto.encode("", e, {
                    type: 2,
                    encoding: rD,
                  });
                  n = r0(t, w, i);
                } else
                  await Promise.all([
                    this.sendRequest({
                      topic: w,
                      method: "wc_sessionAuthenticate",
                      params: _,
                      expiry: e.expiry,
                      throwOnFailedPublish: !0,
                      clientRpcId: C,
                    }),
                    this.sendRequest({
                      topic: w,
                      method: "wc_sessionPropose",
                      params: x,
                      expiry: a5.wc_sessionPropose.req.ttl,
                      throwOnFailedPublish: !0,
                      clientRpcId: x.id,
                    }),
                  ]);
              } catch (e) {
                throw (this.events.off(R, T), this.events.off(N, q), e);
              }
              return (
                await this.setProposal(x.id, x),
                await this.setAuthRequest(C, {
                  request: cl(cc({}, _), { verifyContext: {} }),
                  pairingTopic: w,
                  transportType: a,
                }),
                { uri: n ?? v, response: S }
              );
            }),
            ch(this, "approveSessionAuthenticate", async (e) => {
              let t,
                { id: i, auths: r } = e,
                s = this.client.core.eventClient.createEvent({
                  properties: {
                    topic: i.toString(),
                    trace: [nI.authenticated_session_approve_started],
                  },
                });
              try {
                this.isInitialized();
              } catch (e) {
                throw (s.setError(nP.no_internet_connection), e);
              }
              let n = this.getPendingAuthRequest(i);
              if (!n)
                throw (
                  (s.setError(
                    nP.authenticated_session_pending_request_not_found
                  ),
                  Error(`Could not find pending auth request with id ${i}`))
                );
              let o = n.transportType || na.relay;
              o === na.relay && (await this.confirmOnlineStateOrThrow());
              let a = n.requester.publicKey,
                c = await this.client.core.crypto.generateKeyPair(),
                l = rL(a),
                h = { type: 1, receiverPublicKey: a, senderPublicKey: c },
                u = [],
                d = [];
              for (let e of r) {
                if (
                  !(await tD({
                    cacao: e,
                    projectId: this.client.core.projectId,
                  }))
                ) {
                  s.setError(nP.invalid_cacao);
                  let e = sc(
                    "SESSION_SETTLEMENT_FAILED",
                    "Signature verification failed"
                  );
                  throw (
                    (await this.sendError({
                      id: i,
                      topic: l,
                      error: e,
                      encodeOpts: h,
                    }),
                    Error(e.message))
                  );
                }
                s.addTrace(nI.cacaos_verified);
                let { p: t } = e,
                  r = tK(t.resources),
                  n = [tj(t.iss)],
                  o = tU(t.iss);
                if (r) {
                  let e = tz(r),
                    t = tH(r);
                  u.push(...e), n.push(...t);
                }
                for (let e of n) d.push(`${e}:${o}`);
              }
              let p = await this.client.core.crypto.generateSharedKey(c, a);
              if (
                (s.addTrace(nI.create_authenticated_session_topic),
                u?.length > 0)
              ) {
                (t = {
                  topic: p,
                  acknowledged: !0,
                  self: { publicKey: c, metadata: this.client.metadata },
                  peer: { publicKey: a, metadata: n.requester.metadata },
                  controller: a,
                  expiry: eB(a8),
                  authentication: r,
                  requiredNamespaces: {},
                  optionalNamespaces: {},
                  relay: { protocol: "irn" },
                  pairingTopic: n.pairingTopic,
                  namespaces: ss([...new Set(u)], [...new Set(d)]),
                  transportType: o,
                }),
                  s.addTrace(nI.subscribing_authenticated_session_topic);
                try {
                  await this.client.core.relayer.subscribe(p, {
                    transportType: o,
                  });
                } catch (e) {
                  throw (
                    (s.setError(
                      nP.subscribe_authenticated_session_topic_failure
                    ),
                    e)
                  );
                }
                s.addTrace(nI.subscribe_authenticated_session_topic_success),
                  await this.client.session.set(p, t),
                  s.addTrace(nI.store_authenticated_session),
                  await this.client.core.pairing.updateMetadata({
                    topic: n.pairingTopic,
                    metadata: n.requester.metadata,
                  });
              }
              s.addTrace(nI.publishing_authenticated_session_approve);
              try {
                await this.sendResult({
                  topic: l,
                  id: i,
                  result: {
                    cacaos: r,
                    responder: { publicKey: c, metadata: this.client.metadata },
                  },
                  encodeOpts: h,
                  throwOnFailedPublish: !0,
                  appLink: this.getAppLinkIfEnabled(n.requester.metadata, o),
                });
              } catch (e) {
                throw (
                  (s.setError(nP.authenticated_session_approve_publish_failure),
                  e)
                );
              }
              return (
                await this.client.auth.requests.delete(i, {
                  message: "fulfilled",
                  code: 0,
                }),
                await this.client.core.pairing.activate({
                  topic: n.pairingTopic,
                }),
                this.client.core.eventClient.deleteEvent({
                  eventId: s.eventId,
                }),
                { session: t }
              );
            }),
            ch(this, "rejectSessionAuthenticate", async (e) => {
              this.isInitialized();
              let { id: t, reason: i } = e,
                r = this.getPendingAuthRequest(t);
              if (!r)
                throw Error(`Could not find pending auth request with id ${t}`);
              r.transportType === na.relay &&
                (await this.confirmOnlineStateOrThrow());
              let s = r.requester.publicKey,
                n = await this.client.core.crypto.generateKeyPair(),
                o = rL(s);
              await this.sendError({
                id: t,
                topic: o,
                error: i,
                encodeOpts: {
                  type: 1,
                  receiverPublicKey: s,
                  senderPublicKey: n,
                },
                rpcOpts: a5.wc_sessionAuthenticate.reject,
                appLink: this.getAppLinkIfEnabled(
                  r.requester.metadata,
                  r.transportType
                ),
              }),
                await this.client.auth.requests.delete(t, {
                  message: "rejected",
                  code: 0,
                }),
                await this.client.proposal.delete(t, sc("USER_DISCONNECTED"));
            }),
            ch(this, "formatAuthMessage", (e) => {
              this.isInitialized();
              let { request: t, iss: i } = e;
              return t$(t, i);
            }),
            ch(this, "processRelayMessageCache", () => {
              setTimeout(async () => {
                if (0 !== this.relayMessageCache.length)
                  for (; this.relayMessageCache.length > 0; )
                    try {
                      let e = this.relayMessageCache.shift();
                      e && (await this.onRelayMessage(e));
                    } catch (e) {
                      this.client.logger.error(e);
                    }
              }, 50);
            }),
            ch(this, "cleanupDuplicatePairings", async (e) => {
              if (e.pairingTopic)
                try {
                  let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                    i = this.client.core.pairing.pairings
                      .getAll()
                      .filter((i) => {
                        var r, s;
                        return (
                          (null == (r = i.peerMetadata) ? void 0 : r.url) &&
                          (null == (s = i.peerMetadata) ? void 0 : s.url) ===
                            e.peer.metadata.url &&
                          i.topic &&
                          i.topic !== t.topic
                        );
                      });
                  if (0 === i.length) return;
                  this.client.logger.info(
                    `Cleaning up ${i.length} duplicate pairing(s)`
                  ),
                    await Promise.all(
                      i.map((e) =>
                        this.client.core.pairing.disconnect({ topic: e.topic })
                      )
                    ),
                    this.client.logger.info(
                      "Duplicate pairings clean up finished"
                    );
                } catch (e) {
                  this.client.logger.error(e);
                }
            }),
            ch(this, "deleteSession", async (e) => {
              var t;
              let {
                  topic: i,
                  expirerHasDeleted: r = !1,
                  emitEvent: s = !0,
                  id: n = 0,
                } = e,
                { self: o } = this.client.session.get(i);
              await this.client.core.relayer.unsubscribe(i),
                await this.client.session.delete(i, sc("USER_DISCONNECTED")),
                this.addToRecentlyDeleted(i, "session"),
                this.client.core.crypto.keychain.has(o.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(o.publicKey)),
                this.client.core.crypto.keychain.has(i) &&
                  (await this.client.core.crypto.deleteSymKey(i)),
                r || this.client.core.expirer.del(i),
                this.client.core.storage
                  .removeItem(a1)
                  .catch((e) => this.client.logger.warn(e)),
                this.getPendingSessionRequests().forEach((e) => {
                  e.topic === i &&
                    this.deletePendingSessionRequest(
                      e.id,
                      sc("USER_DISCONNECTED")
                    );
                }),
                i ===
                  (null == (t = this.sessionRequestQueue.queue[0])
                    ? void 0
                    : t.topic) && (this.sessionRequestQueue.state = a6.idle),
                s &&
                  this.client.events.emit("session_delete", {
                    id: n,
                    topic: i,
                  });
            }),
            ch(this, "deleteProposal", async (e, t) => {
              if (t)
                try {
                  let t = this.client.proposal.get(e),
                    i = this.client.core.eventClient.getEvent({
                      topic: t.pairingTopic,
                    });
                  i?.setError(nE.proposal_expired);
                } catch {}
              await Promise.all([
                this.client.proposal.delete(e, sc("USER_DISCONNECTED")),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, "proposal");
            }),
            ch(this, "deletePendingSessionRequest", async (e, t, i = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(e, t),
                i ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, "request"),
                (this.sessionRequestQueue.queue =
                  this.sessionRequestQueue.queue.filter((t) => t.id !== e)),
                i &&
                  ((this.sessionRequestQueue.state = a6.idle),
                  this.client.events.emit("session_request_expire", { id: e }));
            }),
            ch(this, "deletePendingAuthRequest", async (e, t, i = !1) => {
              await Promise.all([
                this.client.auth.requests.delete(e, t),
                i ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            ch(this, "setExpiry", async (e, t) => {
              this.client.session.keys.includes(e) &&
                (this.client.core.expirer.set(e, t),
                await this.client.session.update(e, { expiry: t }));
            }),
            ch(this, "setProposal", async (e, t) => {
              this.client.core.expirer.set(e, eB(a5.wc_sessionPropose.req.ttl)),
                await this.client.proposal.set(e, t);
            }),
            ch(this, "setAuthRequest", async (e, t) => {
              let {
                request: i,
                pairingTopic: r,
                transportType: s = na.relay,
              } = t;
              this.client.core.expirer.set(e, i.expiryTimestamp),
                await this.client.auth.requests.set(e, {
                  authPayload: i.authPayload,
                  requester: i.requester,
                  expiryTimestamp: i.expiryTimestamp,
                  id: e,
                  pairingTopic: r,
                  verifyContext: i.verifyContext,
                  transportType: s,
                });
            }),
            ch(this, "setPendingSessionRequest", async (e) => {
              let { id: t, topic: i, params: r, verifyContext: s } = e,
                n =
                  r.request.expiryTimestamp || eB(a5.wc_sessionRequest.req.ttl);
              this.client.core.expirer.set(t, n),
                await this.client.pendingRequest.set(t, {
                  id: t,
                  topic: i,
                  params: r,
                  verifyContext: s,
                });
            }),
            ch(this, "sendRequest", async (e) => {
              let t,
                r,
                {
                  topic: s,
                  method: n,
                  params: o,
                  expiry: a,
                  relayRpcId: c,
                  clientRpcId: l,
                  throwOnFailedPublish: h,
                  appLink: u,
                  tvf: d,
                } = e,
                p = (0, s2.formatJsonRpcRequest)(n, o, l),
                g = !!u;
              try {
                let e = g ? rD : rU;
                t = await this.client.core.crypto.encode(s, p, { encoding: e });
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendRequest() -> core.crypto.encode() for topic ${s} failed`
                  ),
                  e)
                );
              }
              if (a9.includes(n)) {
                let e = rM(JSON.stringify(p)),
                  i = rM(t);
                r = await this.client.core.verify.register({
                  id: i,
                  decryptedId: e,
                });
              }
              let f = a5[n].req;
              if (
                ((f.attestation = r),
                a && (f.ttl = a),
                c && (f.id = c),
                this.client.core.history.set(s, p),
                g)
              ) {
                let e = r0(u, s, t);
                await i.g.Linking.openURL(e, this.client.name);
              } else {
                let e = a5[n].req;
                a && (e.ttl = a),
                  c && (e.id = c),
                  (e.tvf = cl(cc({}, d), { correlationId: p.id })),
                  h
                    ? ((e.internal = cl(cc({}, e.internal), {
                        throwOnFailedPublish: !0,
                      })),
                      await this.client.core.relayer.publish(s, t, e))
                    : this.client.core.relayer
                        .publish(s, t, e)
                        .catch((e) => this.client.logger.error(e));
              }
              return p.id;
            }),
            ch(this, "sendResult", async (e) => {
              let t,
                r,
                s,
                {
                  id: n,
                  topic: o,
                  result: a,
                  throwOnFailedPublish: c,
                  encodeOpts: l,
                  appLink: h,
                } = e,
                u = (0, s2.formatJsonRpcResult)(n, a),
                d = h && "u" > typeof (null == i.g ? void 0 : i.g.Linking);
              try {
                let e = d ? rD : rU;
                t = await this.client.core.crypto.encode(
                  o,
                  u,
                  cl(cc({}, l || {}), { encoding: e })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendResult() -> core.crypto.encode() for topic ${o} failed`
                  ),
                  e)
                );
              }
              try {
                let e = (r = await this.client.core.history.get(o, n)).request;
                try {
                  this.shouldSetTVF(e.method, e.params) &&
                    (s = this.getTVFParams(n, e.params, a));
                } catch (e) {
                  this.client.logger.warn(
                    "sendResult() -> getTVFParams() failed",
                    e
                  );
                }
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `sendResult() -> history.get(${o}, ${n}) failed`
                  ),
                  e)
                );
              }
              if (d) {
                let e = r0(h, o, t);
                await i.g.Linking.openURL(e, this.client.name);
              } else {
                let e = a5[r.request.method].res;
                (e.tvf = cl(cc({}, s), { correlationId: n })),
                  c
                    ? ((e.internal = cl(cc({}, e.internal), {
                        throwOnFailedPublish: !0,
                      })),
                      await this.client.core.relayer.publish(o, t, e))
                    : this.client.core.relayer
                        .publish(o, t, e)
                        .catch((e) => this.client.logger.error(e));
              }
              await this.client.core.history.resolve(u);
            }),
            ch(this, "sendError", async (e) => {
              let t,
                r,
                {
                  id: s,
                  topic: n,
                  error: o,
                  encodeOpts: a,
                  rpcOpts: c,
                  appLink: l,
                } = e,
                h = (0, s2.formatJsonRpcError)(s, o),
                u = l && "u" > typeof (null == i.g ? void 0 : i.g.Linking);
              try {
                let e = u ? rD : rU;
                t = await this.client.core.crypto.encode(
                  n,
                  h,
                  cl(cc({}, a || {}), { encoding: e })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendError() -> core.crypto.encode() for topic ${n} failed`
                  ),
                  e)
                );
              }
              try {
                r = await this.client.core.history.get(n, s);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `sendError() -> history.get(${n}, ${s}) failed`
                  ),
                  e)
                );
              }
              if (u) {
                let e = r0(l, n, t);
                await i.g.Linking.openURL(e, this.client.name);
              } else {
                let e = r.request.method,
                  i = c || a5[e].res;
                this.client.core.relayer.publish(n, t, i);
              }
              await this.client.core.history.resolve(h);
            }),
            ch(this, "cleanup", async () => {
              let e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                let i = !1;
                eL(t.expiry) && (i = !0),
                  this.client.core.crypto.keychain.has(t.topic) || (i = !0),
                  i && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  eL(e.expiryTimestamp) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession({ topic: e })),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            ch(this, "onProviderMessageEvent", async (e) => {
              !this.initialized || this.relayMessageCache.length > 0
                ? this.relayMessageCache.push(e)
                : await this.onRelayMessage(e);
            }),
            ch(this, "onRelayEventRequest", async (e) => {
              this.requestQueue.queue.push(e),
                await this.processRequestsQueue();
            }),
            ch(this, "processRequestsQueue", async () => {
              if (this.requestQueue.state === a6.active)
                return void this.client.logger.info(
                  "Request queue already active, skipping..."
                );
              for (
                this.client.logger.info(
                  `Request queue starting with ${this.requestQueue.queue.length} requests`
                );
                this.requestQueue.queue.length > 0;

              ) {
                this.requestQueue.state = a6.active;
                let e = this.requestQueue.queue.shift();
                if (e)
                  try {
                    await this.processRequest(e);
                  } catch (e) {
                    this.client.logger.warn(e);
                  }
              }
              this.requestQueue.state = a6.idle;
            }),
            ch(this, "processRequest", async (e) => {
              let {
                  topic: t,
                  payload: i,
                  attestation: r,
                  transportType: s,
                  encryptedId: n,
                } = e,
                o = i.method;
              if (
                !this.shouldIgnorePairingRequest({ topic: t, requestMethod: o })
              )
                switch (o) {
                  case "wc_sessionPropose":
                    return await this.onSessionProposeRequest({
                      topic: t,
                      payload: i,
                      attestation: r,
                      encryptedId: n,
                    });
                  case "wc_sessionSettle":
                    return await this.onSessionSettleRequest(t, i);
                  case "wc_sessionUpdate":
                    return await this.onSessionUpdateRequest(t, i);
                  case "wc_sessionExtend":
                    return await this.onSessionExtendRequest(t, i);
                  case "wc_sessionPing":
                    return await this.onSessionPingRequest(t, i);
                  case "wc_sessionDelete":
                    return await this.onSessionDeleteRequest(t, i);
                  case "wc_sessionRequest":
                    return await this.onSessionRequest({
                      topic: t,
                      payload: i,
                      attestation: r,
                      encryptedId: n,
                      transportType: s,
                    });
                  case "wc_sessionEvent":
                    return await this.onSessionEventRequest(t, i);
                  case "wc_sessionAuthenticate":
                    return await this.onSessionAuthenticateRequest({
                      topic: t,
                      payload: i,
                      attestation: r,
                      encryptedId: n,
                      transportType: s,
                    });
                  default:
                    return this.client.logger.info(
                      `Unsupported request method ${o}`
                    );
                }
            }),
            ch(this, "onRelayEventResponse", async (e) => {
              let { topic: t, payload: i, transportType: r } = e,
                s = (await this.client.core.history.get(t, i.id)).request
                  .method;
              switch (s) {
                case "wc_sessionPropose":
                  return this.onSessionProposeResponse(t, i, r);
                case "wc_sessionSettle":
                  return this.onSessionSettleResponse(t, i);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateResponse(t, i);
                case "wc_sessionExtend":
                  return this.onSessionExtendResponse(t, i);
                case "wc_sessionPing":
                  return this.onSessionPingResponse(t, i);
                case "wc_sessionRequest":
                  return this.onSessionRequestResponse(t, i);
                case "wc_sessionAuthenticate":
                  return this.onSessionAuthenticateResponse(t, i);
                default:
                  return this.client.logger.info(
                    `Unsupported response method ${s}`
                  );
              }
            }),
            ch(this, "onRelayEventUnknownPayload", (e) => {
              let { topic: t } = e,
                { message: i } = sa(
                  "MISSING_OR_INVALID",
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`
                );
              throw Error(i);
            }),
            ch(this, "shouldIgnorePairingRequest", (e) => {
              let { topic: t, requestMethod: i } = e,
                r = this.expectedPairingMethodMap.get(t);
              return (
                !(!r || r.includes(i)) &&
                !!(
                  r.includes("wc_sessionAuthenticate") &&
                  this.client.events.listenerCount("session_authenticate") > 0
                )
              );
            }),
            ch(this, "onSessionProposeRequest", async (e) => {
              let { topic: t, payload: i, attestation: r, encryptedId: s } = e,
                { params: n, id: o } = i;
              try {
                let e = this.client.core.eventClient.getEvent({ topic: t });
                0 === this.client.events.listenerCount("session_proposal") &&
                  (console.warn("No listener for session_proposal event"),
                  e?.setError(nw.proposal_listener_not_found)),
                  this.isValidConnect(cc({}, i.params));
                let a = n.expiryTimestamp || eB(a5.wc_sessionPropose.req.ttl),
                  c = cc({ id: o, pairingTopic: t, expiryTimestamp: a }, n);
                await this.setProposal(o, c);
                let l = await this.getVerifyContext({
                  attestationId: r,
                  hash: rM(JSON.stringify(i)),
                  encryptedId: s,
                  metadata: c.proposer.metadata,
                });
                e?.addTrace(nb.emit_session_proposal),
                  this.client.events.emit("session_proposal", {
                    id: o,
                    params: c,
                    verifyContext: l,
                  });
              } catch (e) {
                await this.sendError({
                  id: o,
                  topic: t,
                  error: e,
                  rpcOpts: a5.wc_sessionPropose.autoReject,
                }),
                  this.client.logger.error(e);
              }
            }),
            ch(this, "onSessionProposeResponse", async (e, t, i) => {
              let { id: r } = t;
              if ((0, s2.isJsonRpcResult)(t)) {
                let { result: s } = t;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: s,
                });
                let n = this.client.proposal.get(r);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: n,
                });
                let o = n.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: o,
                });
                let a = s.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: a,
                });
                let c = await this.client.core.crypto.generateSharedKey(o, a);
                this.pendingSessions.set(r, {
                  sessionTopic: c,
                  pairingTopic: e,
                  proposalId: r,
                  publicKey: o,
                });
                let l = await this.client.core.relayer.subscribe(c, {
                  transportType: i,
                });
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: l,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else if ((0, s2.isJsonRpcError)(t)) {
                await this.client.proposal.delete(r, sc("USER_DISCONNECTED"));
                let e = eM("session_connect", r);
                if (0 === this.events.listenerCount(e))
                  throw Error(`emitting ${e} without any listeners, 954`);
                this.events.emit(e, { error: t.error });
              }
            }),
            ch(this, "onSessionSettleRequest", async (e, t) => {
              let { id: i, params: r } = t;
              try {
                this.isValidSessionSettleRequest(r);
                let {
                    relay: i,
                    controller: s,
                    expiry: n,
                    namespaces: o,
                    sessionProperties: a,
                    scopedProperties: c,
                    sessionConfig: l,
                  } = t.params,
                  h = [...this.pendingSessions.values()].find(
                    (t) => t.sessionTopic === e
                  );
                if (!h)
                  return this.client.logger.error(
                    `Pending session not found for topic ${e}`
                  );
                let u = this.client.proposal.get(h.proposalId),
                  d = cl(
                    cc(
                      cc(
                        cc(
                          {
                            topic: e,
                            relay: i,
                            expiry: n,
                            namespaces: o,
                            acknowledged: !0,
                            pairingTopic: h.pairingTopic,
                            requiredNamespaces: u.requiredNamespaces,
                            optionalNamespaces: u.optionalNamespaces,
                            controller: s.publicKey,
                            self: {
                              publicKey: h.publicKey,
                              metadata: this.client.metadata,
                            },
                            peer: {
                              publicKey: s.publicKey,
                              metadata: s.metadata,
                            },
                          },
                          a && { sessionProperties: a }
                        ),
                        c && { scopedProperties: c }
                      ),
                      l && { sessionConfig: l }
                    ),
                    { transportType: na.relay }
                  );
                await this.client.session.set(d.topic, d),
                  await this.setExpiry(d.topic, d.expiry),
                  await this.client.core.pairing.updateMetadata({
                    topic: h.pairingTopic,
                    metadata: d.peer.metadata,
                  }),
                  this.client.events.emit("session_connect", { session: d }),
                  this.events.emit(eM("session_connect", h.proposalId), {
                    session: d,
                  }),
                  this.pendingSessions.delete(h.proposalId),
                  this.deleteProposal(h.proposalId, !1),
                  this.cleanupDuplicatePairings(d),
                  await this.sendResult({
                    id: t.id,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            ch(this, "onSessionSettleResponse", async (e, t) => {
              let { id: i } = t;
              (0, s2.isJsonRpcResult)(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit(eM("session_approve", i), {}))
                : (0, s2.isJsonRpcError)(t) &&
                  (await this.client.session.delete(e, sc("USER_DISCONNECTED")),
                  this.events.emit(eM("session_approve", i), {
                    error: t.error,
                  }));
            }),
            ch(this, "onSessionUpdateRequest", async (e, t) => {
              let { params: i, id: r } = t;
              try {
                let t = `${e}_session_update`,
                  s = sS.get(t);
                if (s && this.isRequestOutOfSync(s, r)) {
                  this.client.logger.warn(
                    `Discarding out of sync request - ${r}`
                  ),
                    this.sendError({
                      id: r,
                      topic: e,
                      error: sc("INVALID_UPDATE_REQUEST"),
                    });
                  return;
                }
                this.isValidUpdate(cc({ topic: e }, i));
                try {
                  sS.set(t, r),
                    await this.client.session.update(e, {
                      namespaces: i.namespaces,
                    }),
                    await this.sendResult({
                      id: r,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    });
                } catch (e) {
                  throw (sS.delete(t), e);
                }
                this.client.events.emit("session_update", {
                  id: r,
                  topic: e,
                  params: i,
                });
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            ch(
              this,
              "isRequestOutOfSync",
              (e, t) => t.toString().slice(0, -3) < e.toString().slice(0, -3)
            ),
            ch(this, "onSessionUpdateResponse", (e, t) => {
              let { id: i } = t,
                r = eM("session_update", i);
              if (0 === this.events.listenerCount(r))
                throw Error(`emitting ${r} without any listeners`);
              (0, s2.isJsonRpcResult)(t)
                ? this.events.emit(eM("session_update", i), {})
                : (0, s2.isJsonRpcError)(t) &&
                  this.events.emit(eM("session_update", i), { error: t.error });
            }),
            ch(this, "onSessionExtendRequest", async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, eB(a8)),
                  await this.sendResult({
                    id: i,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.client.events.emit("session_extend", {
                    id: i,
                    topic: e,
                  });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            ch(this, "onSessionExtendResponse", (e, t) => {
              let { id: i } = t,
                r = eM("session_extend", i);
              if (0 === this.events.listenerCount(r))
                throw Error(`emitting ${r} without any listeners`);
              (0, s2.isJsonRpcResult)(t)
                ? this.events.emit(eM("session_extend", i), {})
                : (0, s2.isJsonRpcError)(t) &&
                  this.events.emit(eM("session_extend", i), { error: t.error });
            }),
            ch(this, "onSessionPingRequest", async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({
                    id: i,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.client.events.emit("session_ping", { id: i, topic: e });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            ch(this, "onSessionPingResponse", (e, t) => {
              let { id: i } = t,
                r = eM("session_ping", i);
              setTimeout(() => {
                if (0 === this.events.listenerCount(r))
                  throw Error(`emitting ${r} without any listeners 2176`);
                (0, s2.isJsonRpcResult)(t)
                  ? this.events.emit(eM("session_ping", i), {})
                  : (0, s2.isJsonRpcError)(t) &&
                    this.events.emit(eM("session_ping", i), { error: t.error });
              }, 500);
            }),
            ch(this, "onSessionDeleteRequest", async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(ns.publish, async () => {
                        t(await this.deleteSession({ topic: e, id: i }));
                      });
                    }),
                    this.sendResult({
                      id: i,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    }),
                    this.cleanupPendingSentRequestsForTopic({
                      topic: e,
                      error: sc("USER_DISCONNECTED"),
                    }),
                  ]).catch((e) => this.client.logger.error(e));
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            ch(this, "onSessionRequest", async (e) => {
              var t, i, r;
              let {
                  topic: s,
                  payload: n,
                  attestation: o,
                  encryptedId: a,
                  transportType: c,
                } = e,
                { id: l, params: h } = n;
              try {
                await this.isValidRequest(cc({ topic: s }, h));
                let e = this.client.session.get(s),
                  n = await this.getVerifyContext({
                    attestationId: o,
                    hash: rM(
                      JSON.stringify(
                        (0, s2.formatJsonRpcRequest)("wc_sessionRequest", h, l)
                      )
                    ),
                    encryptedId: a,
                    metadata: e.peer.metadata,
                    transportType: c,
                  }),
                  u = { id: l, topic: s, params: h, verifyContext: n };
                await this.setPendingSessionRequest(u),
                  c === na.link_mode &&
                    null != (t = e.peer.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      null == (i = e.peer.metadata.redirect)
                        ? void 0
                        : i.universal
                    ),
                  null != (r = this.client.signConfig) && r.disableRequestQueue
                    ? this.emitSessionRequest(u)
                    : (this.addSessionRequestToSessionRequestQueue(u),
                      this.processSessionRequestQueue());
              } catch (e) {
                await this.sendError({ id: l, topic: s, error: e }),
                  this.client.logger.error(e);
              }
            }),
            ch(this, "onSessionRequestResponse", (e, t) => {
              let { id: i } = t,
                r = eM("session_request", i);
              if (0 === this.events.listenerCount(r))
                throw Error(`emitting ${r} without any listeners`);
              (0, s2.isJsonRpcResult)(t)
                ? this.events.emit(eM("session_request", i), {
                    result: t.result,
                  })
                : (0, s2.isJsonRpcError)(t) &&
                  this.events.emit(eM("session_request", i), {
                    error: t.error,
                  });
            }),
            ch(this, "onSessionEventRequest", async (e, t) => {
              let { id: i, params: r } = t;
              try {
                let t = `${e}_session_event_${r.event.name}`,
                  s = sS.get(t);
                if (s && this.isRequestOutOfSync(s, i))
                  return void this.client.logger.info(
                    `Discarding out of sync request - ${i}`
                  );
                this.isValidEmit(cc({ topic: e }, r)),
                  this.client.events.emit("session_event", {
                    id: i,
                    topic: e,
                    params: r,
                  }),
                  sS.set(t, i);
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            ch(this, "onSessionAuthenticateResponse", (e, t) => {
              let { id: i } = t;
              this.client.logger.trace({
                type: "method",
                method: "onSessionAuthenticateResponse",
                topic: e,
                payload: t,
              }),
                (0, s2.isJsonRpcResult)(t)
                  ? this.events.emit(eM("session_request", i), {
                      result: t.result,
                    })
                  : (0, s2.isJsonRpcError)(t) &&
                    this.events.emit(eM("session_request", i), {
                      error: t.error,
                    });
            }),
            ch(this, "onSessionAuthenticateRequest", async (e) => {
              var t;
              let {
                topic: i,
                payload: r,
                attestation: s,
                encryptedId: n,
                transportType: o,
              } = e;
              try {
                let {
                    requester: e,
                    authPayload: a,
                    expiryTimestamp: c,
                  } = r.params,
                  l = await this.getVerifyContext({
                    attestationId: s,
                    hash: rM(JSON.stringify(r)),
                    encryptedId: n,
                    metadata: e.metadata,
                    transportType: o,
                  }),
                  h = {
                    requester: e,
                    pairingTopic: i,
                    id: r.id,
                    authPayload: a,
                    verifyContext: l,
                    expiryTimestamp: c,
                  };
                await this.setAuthRequest(r.id, {
                  request: h,
                  pairingTopic: i,
                  transportType: o,
                }),
                  o === na.link_mode &&
                    null != (t = e.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      e.metadata.redirect.universal
                    ),
                  this.client.events.emit("session_authenticate", {
                    topic: i,
                    params: r.params,
                    id: r.id,
                    verifyContext: l,
                  });
              } catch (n) {
                this.client.logger.error(n);
                let e = r.params.requester.publicKey,
                  t = await this.client.core.crypto.generateKeyPair(),
                  s = this.getAppLinkIfEnabled(r.params.requester.metadata, o);
                await this.sendError({
                  id: r.id,
                  topic: i,
                  error: n,
                  encodeOpts: {
                    type: 1,
                    receiverPublicKey: e,
                    senderPublicKey: t,
                  },
                  rpcOpts: a5.wc_sessionAuthenticate.autoReject,
                  appLink: s,
                });
              }
            }),
            ch(this, "addSessionRequestToSessionRequestQueue", (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            ch(this, "cleanupAfterResponse", (e) => {
              this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0,
              }),
                setTimeout(() => {
                  (this.sessionRequestQueue.state = a6.idle),
                    this.processSessionRequestQueue();
                }, (0, o.toMiliseconds)(this.requestQueueDelay));
            }),
            ch(
              this,
              "cleanupPendingSentRequestsForTopic",
              ({ topic: e, error: t }) => {
                let i = this.client.core.history.pending;
                i.length > 0 &&
                  i
                    .filter(
                      (t) =>
                        t.topic === e &&
                        "wc_sessionRequest" === t.request.method
                    )
                    .forEach((e) => {
                      let i = eM("session_request", e.request.id);
                      if (0 === this.events.listenerCount(i))
                        throw Error(`emitting ${i} without any listeners`);
                      this.events.emit(eM("session_request", e.request.id), {
                        error: t,
                      });
                    });
              }
            ),
            ch(this, "processSessionRequestQueue", () => {
              if (this.sessionRequestQueue.state === a6.active)
                return void this.client.logger.info(
                  "session request queue is already active."
                );
              let e = this.sessionRequestQueue.queue[0];
              if (!e)
                return void this.client.logger.info(
                  "session request queue is empty."
                );
              try {
                (this.sessionRequestQueue.state = a6.active),
                  this.emitSessionRequest(e);
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            ch(this, "emitSessionRequest", (e) => {
              this.client.events.emit("session_request", e);
            }),
            ch(this, "onPairingCreated", (e) => {
              if (
                (e.methods &&
                  this.expectedPairingMethodMap.set(e.topic, e.methods),
                e.active)
              )
                return;
              let t = this.client.proposal
                .getAll()
                .find((t) => t.pairingTopic === e.topic);
              t &&
                this.onSessionProposeRequest({
                  topic: e.topic,
                  payload: (0, s2.formatJsonRpcRequest)(
                    "wc_sessionPropose",
                    cl(cc({}, t), {
                      requiredNamespaces: t.requiredNamespaces,
                      optionalNamespaces: t.optionalNamespaces,
                      relays: t.relays,
                      proposer: t.proposer,
                      sessionProperties: t.sessionProperties,
                      scopedProperties: t.scopedProperties,
                    }),
                    t.id
                  ),
                });
            }),
            ch(this, "isValidConnect", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `connect() params: ${JSON.stringify(e)}`
                );
                throw Error(t);
              }
              let {
                pairingTopic: t,
                requiredNamespaces: i,
                optionalNamespaces: r,
                sessionProperties: s,
                scopedProperties: n,
                relays: o,
              } = e;
              if (
                (su(t) || (await this.isValidPairingTopic(t)),
                !(function (e, t) {
                  let i = !1;
                  return (
                    t && !e
                      ? (i = !0)
                      : e &&
                        sl(e) &&
                        e.length &&
                        e.forEach((e) => {
                          i = sb(e);
                        }),
                    i
                  );
                })(o, !0))
              ) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `connect() relays: ${o}`
                );
                throw Error(e);
              }
              if (!su(i) && 0 !== sh(i)) {
                let e =
                  "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
                ["fatal", "error", "silent"].includes(this.client.logger.level)
                  ? console.warn(e)
                  : this.client.logger.warn(e),
                  this.validateNamespaces(i, "requiredNamespaces");
              }
              if (
                (su(r) ||
                  0 === sh(r) ||
                  this.validateNamespaces(r, "optionalNamespaces"),
                su(s) || this.validateSessionProps(s, "sessionProperties"),
                !su(n))
              ) {
                this.validateSessionProps(n, "scopedProperties");
                let e = Object.keys(i || {}).concat(Object.keys(r || {}));
                if (!Object.keys(n).every((t) => e.includes(t)))
                  throw Error(
                    `Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(
                      n
                    )}, required/optional namespaces: ${JSON.stringify(e)}`
                  );
              }
            }),
            ch(this, "validateNamespaces", (e, t) => {
              let i = (function (e, t, i) {
                let r = null;
                if (e && sh(e)) {
                  let s,
                    n = sy(e, t);
                  n && (r = n);
                  let o =
                    ((s = null),
                    Object.entries(e).forEach(([e, r]) => {
                      var n, o;
                      let a;
                      if (s) return;
                      let c =
                        ((n = eg(e, r)),
                        (o = `${t} ${i}`),
                        (a = null),
                        sl(n) && n.length
                          ? n.forEach((e) => {
                              a ||
                                sg(e) ||
                                (a = sc(
                                  "UNSUPPORTED_CHAINS",
                                  `${o}, chain ${e} should be a string and conform to "namespace:chainId" format`
                                ));
                            })
                          : sg(e) ||
                            (a = sc(
                              "UNSUPPORTED_CHAINS",
                              `${o}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
                            )),
                        a);
                      c && (s = c);
                    }),
                    s);
                  o && (r = o);
                } else
                  r = sa(
                    "MISSING_OR_INVALID",
                    `${t}, ${i} should be an object with data`
                  );
                return r;
              })(e, "connect()", t);
              if (i) throw Error(i.message);
            }),
            ch(this, "isValidApprove", async (e) => {
              if (!sw(e))
                throw Error(
                  sa("MISSING_OR_INVALID", `approve() params: ${e}`).message
                );
              let {
                id: t,
                namespaces: i,
                relayProtocol: r,
                sessionProperties: s,
                scopedProperties: n,
              } = e;
              this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
              let o = this.client.proposal.get(t),
                a = sm(i, "approve()");
              if (a) throw Error(a.message);
              let c = sE(o.requiredNamespaces, i, "approve()");
              if (c) throw Error(c.message);
              if (!sd(r, !0)) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `approve() relayProtocol: ${r}`
                );
                throw Error(e);
              }
              if (
                (su(s) || this.validateSessionProps(s, "sessionProperties"),
                !su(n))
              ) {
                this.validateSessionProps(n, "scopedProperties");
                let e = new Set(Object.keys(i));
                if (!Object.keys(n).every((t) => e.has(t)))
                  throw Error(
                    `Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(
                      n
                    )}, approved namespaces: ${Array.from(e).join(", ")}`
                  );
              }
            }),
            ch(this, "isValidReject", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `reject() params: ${e}`
                );
                throw Error(t);
              }
              let { id: t, reason: i } = e;
              if (
                (this.checkRecentlyDeleted(t),
                await this.isValidProposalId(t),
                !(function (e) {
                  return !(
                    !e ||
                    "object" != typeof e ||
                    !e.code ||
                    !sp(e.code, !1) ||
                    !e.message ||
                    !sd(e.message, !1)
                  );
                })(i))
              ) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `reject() reason: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
            }),
            ch(this, "isValidSessionSettleRequest", (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `onSessionSettleRequest() params: ${e}`
                );
                throw Error(t);
              }
              let { relay: t, controller: i, namespaces: r, expiry: s } = e;
              if (!sb(t)) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string"
                );
                throw Error(e);
              }
              let n = (function (e, t) {
                let i = null;
                return (
                  sd(e?.publicKey, !1) ||
                    (i = sa(
                      "MISSING_OR_INVALID",
                      `${t} controller public key should be a string`
                    )),
                  i
                );
              })(i, "onSessionSettleRequest()");
              if (n) throw Error(n.message);
              let o = sm(r, "onSessionSettleRequest()");
              if (o) throw Error(o.message);
              if (eL(s)) {
                let { message: e } = sa("EXPIRED", "onSessionSettleRequest()");
                throw Error(e);
              }
            }),
            ch(this, "isValidUpdate", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `update() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, namespaces: i } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              let r = this.client.session.get(t),
                s = sm(i, "update()");
              if (s) throw Error(s.message);
              let n = sE(r.requiredNamespaces, i, "update()");
              if (n) throw Error(n.message);
            }),
            ch(this, "isValidExtend", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `extend() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
            }),
            ch(this, "isValidRequest", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `request() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, request: i, chainId: r, expiry: s } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              let { namespaces: n } = this.client.session.get(t);
              if (!sv(n, r)) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `request() chainId: ${r}`
                );
                throw Error(e);
              }
              if (
                !(function (e) {
                  return !(su(e) || !sd(e.method, !1));
                })(i)
              ) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `request() ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
              if (
                !(function (e, t, i) {
                  return (
                    !!sd(i, !1) &&
                    (function (e, t) {
                      let i = [];
                      return (
                        Object.values(e).forEach((e) => {
                          se(e.accounts).includes(t) && i.push(...e.methods);
                        }),
                        i
                      );
                    })(e, t).includes(i)
                  );
                })(n, r, i.method)
              ) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `request() method: ${i.method}`
                );
                throw Error(e);
              }
              if (
                s &&
                !(function (e, t) {
                  return sp(e, !1) && e <= t.max && e >= t.min;
                })(s, a3)
              ) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `request() expiry: ${s}. Expiry must be a number (in seconds) between ${a3.min} and ${a3.max}`
                );
                throw Error(e);
              }
            }),
            ch(this, "isValidRespond", async (e) => {
              var t;
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `respond() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: i, response: r } = e;
              try {
                await this.isValidSessionTopic(i);
              } catch (i) {
                throw (
                  (null != (t = e?.response) &&
                    t.id &&
                    this.cleanupAfterResponse(e),
                  i)
                );
              }
              if (
                !(function (e) {
                  return !(
                    su(e) ||
                    (su(e.result) && su(e.error)) ||
                    !sp(e.id, !1) ||
                    !sd(e.jsonrpc, !1)
                  );
                })(r)
              ) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `respond() response: ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
            }),
            ch(this, "isValidPing", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            ch(this, "isValidEmit", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `emit() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, event: i, chainId: r } = e;
              await this.isValidSessionTopic(t);
              let { namespaces: s } = this.client.session.get(t);
              if (!sv(s, r)) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `emit() chainId: ${r}`
                );
                throw Error(e);
              }
              if (
                !(function (e) {
                  return !(su(e) || !sd(e.name, !1));
                })(i) ||
                !(function (e, t, i) {
                  return (
                    !!sd(i, !1) &&
                    (function (e, t) {
                      let i = [];
                      return (
                        Object.values(e).forEach((e) => {
                          se(e.accounts).includes(t) && i.push(...e.events);
                        }),
                        i
                      );
                    })(e, t).includes(i)
                  );
                })(s, r, i.name)
              ) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
            }),
            ch(this, "isValidDisconnect", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            ch(this, "isValidAuthenticate", (e) => {
              let { chains: t, uri: i, domain: r, nonce: s } = e;
              if (!Array.isArray(t) || 0 === t.length)
                throw Error("chains is required and must be a non-empty array");
              if (!sd(i, !1)) throw Error("uri is required parameter");
              if (!sd(r, !1)) throw Error("domain is required parameter");
              if (!sd(s, !1)) throw Error("nonce is required parameter");
              if ([...new Set(t.map((e) => eu(e).namespace))].length > 1)
                throw Error(
                  "Multi-namespace requests are not supported. Please request single namespace only."
                );
              let { namespace: n } = eu(t[0]);
              if ("eip155" !== n)
                throw Error(
                  "Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains."
                );
            }),
            ch(this, "getVerifyContext", async (e) => {
              let {
                  attestationId: t,
                  hash: i,
                  encryptedId: r,
                  metadata: s,
                  transportType: n,
                } = e,
                o = {
                  verified: {
                    verifyUrl: s.verifyUrl || nf,
                    validation: "UNKNOWN",
                    origin: s.url || "",
                  },
                };
              try {
                if (n === na.link_mode) {
                  let e = this.getAppLinkIfEnabled(s, n);
                  return (
                    (o.verified.validation =
                      e && new URL(e).origin === new URL(s.url).origin
                        ? "VALID"
                        : "INVALID"),
                    o
                  );
                }
                let e = await this.client.core.verify.resolve({
                  attestationId: t,
                  hash: i,
                  encryptedId: r,
                  verifyUrl: s.verifyUrl,
                });
                e &&
                  ((o.verified.origin = e.origin),
                  (o.verified.isScam = e.isScam),
                  (o.verified.validation =
                    e.origin === new URL(s.url).origin ? "VALID" : "INVALID"));
              } catch (e) {
                this.client.logger.warn(e);
              }
              return (
                this.client.logger.debug(
                  `Verify context: ${JSON.stringify(o)}`
                ),
                o
              );
            }),
            ch(this, "validateSessionProps", (e, t) => {
              Object.values(e).forEach((i, r) => {
                if (null == i) {
                  let { message: s } = sa(
                    "MISSING_OR_INVALID",
                    `${t} must contain an existing value for each key. Received: ${i} for key ${
                      Object.keys(e)[r]
                    }`
                  );
                  throw Error(s);
                }
              });
            }),
            ch(this, "getPendingAuthRequest", (e) => {
              let t = this.client.auth.requests.get(e);
              return "object" == typeof t ? t : void 0;
            }),
            ch(this, "addToRecentlyDeleted", (e, t) => {
              if (
                (this.recentlyDeletedMap.set(e, t),
                this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
              ) {
                let e = 0,
                  t = this.recentlyDeletedLimit / 2;
                for (let i of this.recentlyDeletedMap.keys()) {
                  if (e++ >= t) break;
                  this.recentlyDeletedMap.delete(i);
                }
              }
            }),
            ch(this, "checkRecentlyDeleted", (e) => {
              let t = this.recentlyDeletedMap.get(e);
              if (t) {
                let { message: i } = sa(
                  "MISSING_OR_INVALID",
                  `Record was recently deleted - ${t}: ${e}`
                );
                throw Error(i);
              }
            }),
            ch(this, "isLinkModeEnabled", (e, t) => {
              var r, s, n, o, a, c, l, h, u;
              return (
                !!e &&
                t === na.link_mode &&
                (null ==
                (s = null == (r = this.client.metadata) ? void 0 : r.redirect)
                  ? void 0
                  : s.linkMode) === !0 &&
                (null ==
                (o = null == (n = this.client.metadata) ? void 0 : n.redirect)
                  ? void 0
                  : o.universal) !== void 0 &&
                (null ==
                (c = null == (a = this.client.metadata) ? void 0 : a.redirect)
                  ? void 0
                  : c.universal) !== "" &&
                (null == (l = e?.redirect) ? void 0 : l.universal) !== void 0 &&
                (null == (h = e?.redirect) ? void 0 : h.universal) !== "" &&
                (null == (u = e?.redirect) ? void 0 : u.linkMode) === !0 &&
                this.client.core.linkModeSupportedApps.includes(
                  e.redirect.universal
                ) &&
                "u" > typeof (null == i.g ? void 0 : i.g.Linking)
              );
            }),
            ch(this, "getAppLinkIfEnabled", (e, t) => {
              var i;
              return this.isLinkModeEnabled(e, t)
                ? null == (i = e?.redirect)
                  ? void 0
                  : i.universal
                : void 0;
            }),
            ch(this, "handleLinkModeMessage", ({ url: e }) => {
              if (!e || !e.includes("wc_ev") || !e.includes("topic")) return;
              let t = eV(e, "topic") || "",
                i = decodeURIComponent(eV(e, "wc_ev") || ""),
                r = this.client.session.keys.includes(t);
              r &&
                this.client.session.update(t, { transportType: na.link_mode }),
                this.client.core.dispatchEnvelope({
                  topic: t,
                  message: i,
                  sessionExists: r,
                });
            }),
            ch(this, "registerLinkModeListeners", async () => {
              var e;
              if (
                eW() ||
                (eS() &&
                  null != (e = this.client.metadata.redirect) &&
                  e.linkMode)
              ) {
                let e = null == i.g ? void 0 : i.g.Linking;
                if ("u" > typeof e) {
                  e.addEventListener(
                    "url",
                    this.handleLinkModeMessage,
                    this.client.name
                  );
                  let t = await e.getInitialURL();
                  t &&
                    setTimeout(() => {
                      this.handleLinkModeMessage({ url: t });
                    }, 50);
                }
              }
            }),
            ch(this, "shouldSetTVF", (e, t) => {
              if (!t || "wc_sessionRequest" !== e) return !1;
              let { request: i } = t;
              return Object.keys(a4).includes(i.method);
            }),
            ch(this, "getTVFParams", (e, t, i) => {
              var r, s;
              try {
                let n = t.request.method,
                  o = this.extractTxHashesFromResult(n, i);
                return cl(
                  cc(
                    { correlationId: e, rpcMethods: [n], chainId: t.chainId },
                    this.isValidContractData(t.request.params) && {
                      contractAddresses: [
                        null ==
                        (s = null == (r = t.request.params) ? void 0 : r[0])
                          ? void 0
                          : s.to,
                      ],
                    }
                  ),
                  { txHashes: o }
                );
              } catch (e) {
                this.client.logger.warn("Error getting TVF params", e);
              }
              return {};
            }),
            ch(this, "isValidContractData", (e) => {
              var t;
              if (!e) return !1;
              try {
                let i = e?.data || (null == (t = e?.[0]) ? void 0 : t.data);
                if (!i.startsWith("0x")) return !1;
                let r = i.slice(2);
                return !!/^[0-9a-fA-F]*$/.test(r) && r.length % 2 == 0;
              } catch {}
              return !1;
            }),
            ch(this, "extractTxHashesFromResult", (e, t) => {
              try {
                let i = a4[e];
                if ("string" == typeof t) return [t];
                let r = t[i.key];
                if (sl(r))
                  return "solana_signAllTransactions" === e
                    ? r.map((e) =>
                        (function (e) {
                          let t = atob(e),
                            i = new Uint8Array(t.length);
                          for (let e = 0; e < t.length; e++)
                            i[e] = t.charCodeAt(e);
                          let r = i[0];
                          if (0 === r) throw Error("No signatures found");
                          if (i.length < 1 + 64 * r)
                            throw Error(
                              "Transaction data too short for claimed signature count"
                            );
                          if (i.length < 100)
                            throw Error("Transaction too short");
                          let s = eh.from(e, "base64").slice(1, 65);
                          return en.A.encode(s);
                        })(e)
                      )
                    : r;
                if ("string" == typeof r) return [r];
              } catch (e) {
                this.client.logger.warn(
                  "Error extracting tx hashes from result",
                  e
                );
              }
              return [];
            });
        }
        async processPendingMessageEvents() {
          try {
            let e = this.client.session.keys,
              t = this.client.core.relayer.messages.getWithoutAck(e);
            for (let [e, i] of Object.entries(t))
              for (let t of i)
                try {
                  await this.onProviderMessageEvent({
                    topic: e,
                    message: t,
                    publishedAt: Date.now(),
                  });
                } catch {
                  this.client.logger.warn(
                    `Error processing pending message event for topic: ${e}, message: ${t}`
                  );
                }
          } catch (e) {
            this.client.logger.warn("processPendingMessageEvents failed", e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = sa("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async confirmOnlineStateOrThrow() {
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(ns.message, (e) => {
            this.onProviderMessageEvent(e);
          });
        }
        async onRelayMessage(e) {
          let { topic: t, message: i, attestation: r, transportType: s } = e,
            { publicKey: n } = this.client.auth.authKeys.keys.includes(ce)
              ? this.client.auth.authKeys.get(ce)
              : { responseTopic: void 0, publicKey: void 0 };
          try {
            let e = await this.client.core.crypto.decode(t, i, {
              receiverPublicKey: n,
              encoding: s === na.link_mode ? rD : rU,
            });
            (0, s2.isJsonRpcRequest)(e)
              ? (this.client.core.history.set(t, e),
                await this.onRelayEventRequest({
                  topic: t,
                  payload: e,
                  attestation: r,
                  transportType: s,
                  encryptedId: rM(i),
                }))
              : (0, s2.isJsonRpcResponse)(e)
              ? (await this.client.core.history.resolve(e),
                await this.onRelayEventResponse({
                  topic: t,
                  payload: e,
                  transportType: s,
                }),
                this.client.core.history.delete(t, e.id))
              : await this.onRelayEventUnknownPayload({
                  topic: t,
                  payload: e,
                  transportType: s,
                }),
              await this.client.core.relayer.messages.ack(t, i);
          } catch (e) {
            this.client.logger.error(e);
          }
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(ng.expired, async (e) => {
            let { topic: t, id: i } = e$(e.target);
            return i && this.client.pendingRequest.keys.includes(i)
              ? await this.deletePendingSessionRequest(i, sa("EXPIRED"), !0)
              : i && this.client.auth.requests.keys.includes(i)
              ? await this.deletePendingAuthRequest(i, sa("EXPIRED"), !0)
              : void (t
                  ? this.client.session.keys.includes(t) &&
                    (await this.deleteSession({
                      topic: t,
                      expirerHasDeleted: !0,
                    }),
                    this.client.events.emit("session_expire", { topic: t }))
                  : i &&
                    (await this.deleteProposal(i, !0),
                    this.client.events.emit("proposal_expire", { id: i })));
          });
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on(nd.create, (e) =>
            this.onPairingCreated(e)
          ),
            this.client.core.pairing.events.on(nd.delete, (e) => {
              this.addToRecentlyDeleted(e.topic, "pairing");
            });
        }
        isValidPairingTopic(e) {
          if (!sd(e, !1)) {
            let { message: t } = sa(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            let { message: t } = sa(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if (eL(this.client.core.pairing.pairings.get(e).expiry)) {
            let { message: t } = sa("EXPIRED", `pairing topic: ${e}`);
            throw Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!sd(e, !1)) {
            let { message: t } = sa(
              "MISSING_OR_INVALID",
              `session topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (
            (this.checkRecentlyDeleted(e),
            !this.client.session.keys.includes(e))
          ) {
            let { message: t } = sa(
              "NO_MATCHING_KEY",
              `session topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if (eL(this.client.session.get(e).expiry)) {
            await this.deleteSession({ topic: e });
            let { message: t } = sa("EXPIRED", `session topic: ${e}`);
            throw Error(t);
          }
          if (!this.client.core.crypto.keychain.has(e)) {
            let { message: t } = sa(
              "MISSING_OR_INVALID",
              `session topic does not exist in keychain: ${e}`
            );
            throw (await this.deleteSession({ topic: e }), Error(t));
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if (
            (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e))
          )
            await this.isValidSessionTopic(e);
          else if (this.client.core.pairing.pairings.keys.includes(e))
            this.isValidPairingTopic(e);
          else if (sd(e, !1)) {
            let { message: t } = sa(
              "NO_MATCHING_KEY",
              `session or pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          } else {
            let { message: t } = sa(
              "MISSING_OR_INVALID",
              `session or pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
        }
        async isValidProposalId(e) {
          if ("number" != typeof e) {
            let { message: t } = sa(
              "MISSING_OR_INVALID",
              `proposal id should be a number: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            let { message: t } = sa(
              "NO_MATCHING_KEY",
              `proposal id doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if (eL(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            let { message: t } = sa("EXPIRED", `proposal id: ${e}`);
            throw Error(t);
          }
        }
      }
      class cd extends af {
        constructor(e, t) {
          super(e, t, "proposal", aX), (this.core = e), (this.logger = t);
        }
      }
      class cp extends af {
        constructor(e, t) {
          super(e, t, "session", aX), (this.core = e), (this.logger = t);
        }
      }
      class cg extends af {
        constructor(e, t) {
          super(e, t, "request", aX, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      class cf extends af {
        constructor(e, t) {
          super(e, t, "authKeys", a7, () => ce),
            (this.core = e),
            (this.logger = t);
        }
      }
      class cy extends af {
        constructor(e, t) {
          super(e, t, "pairingTopics", a7), (this.core = e), (this.logger = t);
        }
      }
      class cm extends af {
        constructor(e, t) {
          super(e, t, "requests", a7, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      var cb = Object.defineProperty,
        cw = (e, t, i) =>
          t in e
            ? cb(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        cv = (e, t, i) => cw(e, "symbol" != typeof t ? t + "" : t, i);
      class cE {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            cv(this, "authKeys"),
            cv(this, "pairingTopics"),
            cv(this, "requests"),
            (this.authKeys = new cf(this.core, this.logger)),
            (this.pairingTopics = new cy(this.core, this.logger)),
            (this.requests = new cm(this.core, this.logger));
        }
        async init() {
          await this.authKeys.init(),
            await this.pairingTopics.init(),
            await this.requests.init();
        }
      }
      var cI = Object.defineProperty,
        cP = (e, t, i) =>
          t in e
            ? cI(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        c_ = (e, t, i) => cP(e, "symbol" != typeof t ? t + "" : t, i);
      class cx extends sQ {
        constructor(e) {
          super(e),
            c_(this, "protocol", "wc"),
            c_(this, "version", 2),
            c_(this, "name", a0.name),
            c_(this, "metadata"),
            c_(this, "core"),
            c_(this, "logger"),
            c_(this, "events", new r.EventEmitter()),
            c_(this, "engine"),
            c_(this, "session"),
            c_(this, "proposal"),
            c_(this, "pendingRequest"),
            c_(this, "auth"),
            c_(this, "signConfig"),
            c_(this, "on", (e, t) => this.events.on(e, t)),
            c_(this, "once", (e, t) => this.events.once(e, t)),
            c_(this, "off", (e, t) => this.events.off(e, t)),
            c_(this, "removeListener", (e, t) =>
              this.events.removeListener(e, t)
            ),
            c_(this, "removeAllListeners", (e) =>
              this.events.removeAllListeners(e)
            ),
            c_(this, "connect", async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            c_(this, "pair", async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            c_(this, "approve", async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            c_(this, "reject", async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            c_(this, "update", async (e) => {
              try {
                return await this.engine.update(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            c_(this, "extend", async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            c_(this, "request", async (e) => {
              try {
                return await this.engine.request(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            c_(this, "respond", async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            c_(this, "ping", async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            c_(this, "emit", async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            c_(this, "disconnect", async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            c_(this, "find", (e) => {
              try {
                return this.engine.find(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            c_(this, "getPendingSessionRequests", () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            c_(this, "authenticate", async (e, t) => {
              try {
                return await this.engine.authenticate(e, t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            c_(this, "formatAuthMessage", (e) => {
              try {
                return this.engine.formatAuthMessage(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            c_(this, "approveSessionAuthenticate", async (e) => {
              try {
                return await this.engine.approveSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            c_(this, "rejectSessionAuthenticate", async (e) => {
              try {
                return await this.engine.rejectSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = e?.name || a0.name),
            (this.metadata = (function (e) {
              var t, i;
              let r = eR();
              try {
                return (
                  null != e &&
                    e.url &&
                    r.url &&
                    new URL(e.url).host !== new URL(r.url).host &&
                    (console.warn(
                      `The configured WalletConnect 'metadata.url':${e.url} differs from the actual page url:${r.url}. This is probably unintended and can lead to issues.`
                    ),
                    (e.url = r.url)),
                  null != (t = e?.icons) &&
                    t.length &&
                    e.icons.length > 0 &&
                    (e.icons = e.icons.filter((e) => "" !== e)),
                  eP(eI(eI({}, r), e), {
                    url: e?.url || r.url,
                    name: e?.name || r.name,
                    description: e?.description || r.description,
                    icons:
                      null != (i = e?.icons) && i.length && e.icons.length > 0
                        ? e.icons
                        : r.icons,
                  })
                );
              } catch (t) {
                return console.warn("Error populating app metadata", t), e || r;
              }
            })(e?.metadata)),
            (this.signConfig = e?.signConfig);
          let t =
            "u" > typeof e?.logger && "string" != typeof e?.logger
              ? e.logger
              : (0, sC.h6)((0, sC.iP)({ level: e?.logger || a0.logger }));
          (this.core = e?.core || new aY(e)),
            (this.logger = (0, sC.U5)(t, this.name)),
            (this.session = new cp(this.core, this.logger)),
            (this.proposal = new cd(this.core, this.logger)),
            (this.pendingRequest = new cg(this.core, this.logger)),
            (this.engine = new cu(this)),
            (this.auth = new cE(this.core, this.logger));
        }
        static async init(e) {
          let t = new cx(e);
          return await t.initialize(), t;
        }
        get context() {
          return (0, sC.oI)(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.auth.init(),
              await this.engine.init(),
              this.logger.info("SignClient Initialization Success"),
              setTimeout(() => {
                this.engine.processRelayMessageCache();
              }, (0, o.toMiliseconds)(o.ONE_SECOND));
          } catch (e) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      var cS = i(24630),
        cO = i(44134).Buffer;
      let cA = "error",
        cC = "wc@2:universal_provider:",
        cR = "https://rpc.walletconnect.org/v1/",
        cN = "generic",
        cT = `${cR}bundler`,
        cq = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
      function ck() {}
      function cj(e) {
        return null == e || ("object" != typeof e && "function" != typeof e);
      }
      function cU(e) {
        return ArrayBuffer.isView(e) && !(e instanceof DataView);
      }
      function cD(e) {
        return "object" == typeof e && null !== e;
      }
      function c$(e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }
      function cB(e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : Object.prototype.toString.call(e);
      }
      let cL = "[object String]",
        cM = "[object Number]",
        cz = "[object Boolean]",
        cH = "[object Arguments]";
      function cK(e, t, i, r = new Map(), s) {
        let n = s?.(e, t, i, r);
        if (null != n) return n;
        if (cj(e)) return e;
        if (r.has(e)) return r.get(e);
        if (Array.isArray(e)) {
          let t = Array(e.length);
          r.set(e, t);
          for (let n = 0; n < e.length; n++) t[n] = cK(e[n], n, i, r, s);
          return (
            Object.hasOwn(e, "index") && (t.index = e.index),
            Object.hasOwn(e, "input") && (t.input = e.input),
            t
          );
        }
        if (e instanceof Date) return new Date(e.getTime());
        if (e instanceof RegExp) {
          let t = new RegExp(e.source, e.flags);
          return (t.lastIndex = e.lastIndex), t;
        }
        if (e instanceof Map) {
          let t = new Map();
          for (let [n, o] of (r.set(e, t), e)) t.set(n, cK(o, n, i, r, s));
          return t;
        }
        if (e instanceof Set) {
          let t = new Set();
          for (let n of (r.set(e, t), e)) t.add(cK(n, void 0, i, r, s));
          return t;
        }
        if ("u" > typeof cO && cO.isBuffer(e)) return e.subarray();
        if (cU(e)) {
          let t = new (Object.getPrototypeOf(e).constructor)(e.length);
          r.set(e, t);
          for (let n = 0; n < e.length; n++) t[n] = cK(e[n], n, i, r, s);
          return t;
        }
        if (
          e instanceof ArrayBuffer ||
          ("u" > typeof SharedArrayBuffer && e instanceof SharedArrayBuffer)
        )
          return e.slice(0);
        if (e instanceof DataView) {
          let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
          return r.set(e, t), cV(t, e, i, r, s), t;
        }
        if ("u" > typeof File && e instanceof File) {
          let t = new File([e], e.name, { type: e.type });
          return r.set(e, t), cV(t, e, i, r, s), t;
        }
        if (e instanceof Blob) {
          let t = new Blob([e], { type: e.type });
          return r.set(e, t), cV(t, e, i, r, s), t;
        }
        if (e instanceof Error) {
          let t = new e.constructor();
          return (
            r.set(e, t),
            (t.message = e.message),
            (t.name = e.name),
            (t.stack = e.stack),
            (t.cause = e.cause),
            cV(t, e, i, r, s),
            t
          );
        }
        if (
          "object" == typeof e &&
          (function (e) {
            switch (cB(e)) {
              case cH:
              case "[object Array]":
              case "[object ArrayBuffer]":
              case "[object DataView]":
              case cz:
              case "[object Date]":
              case "[object Float32Array]":
              case "[object Float64Array]":
              case "[object Int8Array]":
              case "[object Int16Array]":
              case "[object Int32Array]":
              case "[object Map]":
              case cM:
              case "[object Object]":
              case "[object RegExp]":
              case "[object Set]":
              case cL:
              case "[object Symbol]":
              case "[object Uint8Array]":
              case "[object Uint8ClampedArray]":
              case "[object Uint16Array]":
              case "[object Uint32Array]":
                return !0;
              default:
                return !1;
            }
          })(e)
        ) {
          let t = Object.create(Object.getPrototypeOf(e));
          return r.set(e, t), cV(t, e, i, r, s), t;
        }
        return e;
      }
      function cV(e, t, i = e, r, s) {
        let n = [...Object.keys(t), ...c$(t)];
        for (let o = 0; o < n.length; o++) {
          let a = n[o],
            c = Object.getOwnPropertyDescriptor(e, a);
          (null == c || c.writable) && (e[a] = cK(t[a], a, i, r, s));
        }
      }
      function cF(e) {
        var t;
        return (
          (t = (t, i, r, s) => {
            let n = void 0;
            if (null != n) return n;
            if ("object" == typeof e)
              switch (Object.prototype.toString.call(e)) {
                case cM:
                case cL:
                case cz: {
                  let t = new e.constructor(e?.valueOf());
                  return cV(t, e), t;
                }
                case cH: {
                  let t = {};
                  return (
                    cV(t, e),
                    (t.length = e.length),
                    (t[Symbol.iterator] = e[Symbol.iterator]),
                    t
                  );
                }
                default:
                  return;
              }
          }),
          cK(e, void 0, e, new Map(), t)
        );
      }
      function cW(e) {
        return (
          null !== e && "object" == typeof e && "[object Arguments]" === cB(e)
        );
      }
      var cG = Object.defineProperty,
        cJ = Object.defineProperties,
        cZ = Object.getOwnPropertyDescriptors,
        cY = Object.getOwnPropertySymbols,
        cQ = Object.prototype.hasOwnProperty,
        cX = Object.prototype.propertyIsEnumerable,
        c0 = (e, t, i) =>
          t in e
            ? cG(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        c1 = (e, t) => {
          for (var i in t || (t = {})) cQ.call(t, i) && c0(e, i, t[i]);
          if (cY) for (var i of cY(t)) cX.call(t, i) && c0(e, i, t[i]);
          return e;
        },
        c2 = (e, t) => cJ(e, cZ(t));
      function c8(e, t, i) {
        var r;
        let s = eu(e);
        return (
          (null == (r = t.rpcMap) ? void 0 : r[s.reference]) ||
          `${cR}?chainId=${s.namespace}:${s.reference}&projectId=${i}`
        );
      }
      function c5(e) {
        return e.includes(":") ? e.split(":")[1] : e;
      }
      function c3(e) {
        return e.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
      }
      function c6(e = {}, t = {}) {
        return (function (e, ...t) {
          return (function (e, ...t) {
            let i = t.slice(0, -1),
              r = t[t.length - 1],
              s = e;
            for (let e = 0; e < i.length; e++)
              s = (function e(t, i, r, s) {
                if (
                  (cj(t) && (t = Object(t)), null == i || "object" != typeof i)
                )
                  return t;
                if (s.has(i))
                  return (function (e) {
                    if (cj(e)) return e;
                    if (
                      Array.isArray(e) ||
                      cU(e) ||
                      e instanceof ArrayBuffer ||
                      ("u" > typeof SharedArrayBuffer &&
                        e instanceof SharedArrayBuffer)
                    )
                      return e.slice(0);
                    let t = Object.getPrototypeOf(e),
                      i = t.constructor;
                    if (
                      e instanceof Date ||
                      e instanceof Map ||
                      e instanceof Set
                    )
                      return new i(e);
                    if (e instanceof RegExp) {
                      let t = new i(e);
                      return (t.lastIndex = e.lastIndex), t;
                    }
                    if (e instanceof DataView) return new i(e.buffer.slice(0));
                    if (e instanceof Error) {
                      let t = new i(e.message);
                      return (
                        (t.stack = e.stack),
                        (t.name = e.name),
                        (t.cause = e.cause),
                        t
                      );
                    }
                    return "u" > typeof File && e instanceof File
                      ? new i([e], e.name, {
                          type: e.type,
                          lastModified: e.lastModified,
                        })
                      : "object" == typeof e
                      ? Object.assign(Object.create(t), e)
                      : e;
                  })(s.get(i));
                if ((s.set(i, t), Array.isArray(i))) {
                  i = i.slice();
                  for (let e = 0; e < i.length; e++) i[e] = i[e] ?? void 0;
                }
                let n = [...Object.keys(i), ...c$(i)];
                for (let o = 0; o < n.length; o++) {
                  let a = n[o],
                    c = i[a],
                    l = t[a];
                  if (
                    (cW(c) && (c = { ...c }),
                    cW(l) && (l = { ...l }),
                    "u" > typeof cO && cO.isBuffer(c) && (c = cF(c)),
                    Array.isArray(c))
                  )
                    if ("object" == typeof l && null != l) {
                      let e = [],
                        t = Reflect.ownKeys(l);
                      for (let i = 0; i < t.length; i++) {
                        let r = t[i];
                        e[r] = l[r];
                      }
                      l = e;
                    } else l = [];
                  let h = r(l, c, a, t, i, s);
                  null != h
                    ? (t[a] = h)
                    : Array.isArray(c) || (cD(l) && cD(c))
                    ? (t[a] = e(l, c, r, s))
                    : null == l &&
                      (function (e) {
                        if ("object" != typeof e || null == e) return !1;
                        if (null === Object.getPrototypeOf(e)) return !0;
                        if (
                          "[object Object]" !==
                          Object.prototype.toString.call(e)
                        ) {
                          let t = e[Symbol.toStringTag];
                          return (
                            null != t &&
                            !!Object.getOwnPropertyDescriptor(
                              e,
                              Symbol.toStringTag
                            )?.writable &&
                            e.toString() === `[object ${t}]`
                          );
                        }
                        let t = e;
                        for (; null !== Object.getPrototypeOf(t); )
                          t = Object.getPrototypeOf(t);
                        return Object.getPrototypeOf(e) === t;
                      })(c)
                    ? (t[a] = e({}, c, r, s))
                    : null == l && cU(c)
                    ? (t[a] = cF(c))
                    : (void 0 === l || void 0 !== c) && (t[a] = c);
                }
                return t;
              })(s, i[e], r, new Map());
            return s;
          })(e, ...t, ck);
        })(c4(e), c4(t));
      }
      function c4(e) {
        var t, i, r, s, n;
        let o = {};
        if (!sh(e)) return o;
        for (let [a, c] of Object.entries(e)) {
          let e = st(a) ? [a] : c.chains,
            l = c.methods || [],
            h = c.events || [],
            u = c.rpcMap || {},
            d = si(a);
          (o[d] = c2(c1(c1({}, o[d]), c), {
            chains: ez(e, null == (t = o[d]) ? void 0 : t.chains),
            methods: ez(l, null == (i = o[d]) ? void 0 : i.methods),
            events: ez(h, null == (r = o[d]) ? void 0 : r.events),
          })),
            (sh(u) || sh((null == (s = o[d]) ? void 0 : s.rpcMap) || {})) &&
              (o[d].rpcMap = c1(
                c1({}, u),
                null == (n = o[d]) ? void 0 : n.rpcMap
              ));
        }
        return o;
      }
      function c9(e) {
        return e.includes(":") ? e.split(":")[2] : e;
      }
      function c7(e) {
        let t = {};
        for (let [i, r] of Object.entries(e)) {
          let e = r.methods || [],
            s = r.events || [],
            n = r.accounts || [],
            o = st(i) ? [i] : r.chains ? r.chains : c3(r.accounts);
          t[i] = { chains: o, methods: e, events: s, accounts: n };
        }
        return t;
      }
      function le(e) {
        return "number" == typeof e
          ? e
          : e.includes("0x")
          ? parseInt(e, 16)
          : isNaN(Number((e = e.includes(":") ? e.split(":")[1] : e)))
          ? e
          : Number(e);
      }
      let lt = {},
        li = (e) => lt[e],
        lr = (e, t) => {
          lt[e] = t;
        };
      var ls = Object.defineProperty,
        ln = (e, t, i) =>
          t in e
            ? ls(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        lo = (e, t, i) => ln(e, "symbol" != typeof t ? t + "" : t, i);
      class la {
        constructor(e) {
          lo(this, "name", "polkadot"),
            lo(this, "client"),
            lo(this, "httpProviders"),
            lo(this, "events"),
            lo(this, "namespace"),
            lo(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = li("events")),
            (this.client = li("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(cq.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = c5(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || c8(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new s1.F(new cS.A(i, li("disableProviderPing")));
        }
      }
      var lc = Object.defineProperty,
        ll = Object.defineProperties,
        lh = Object.getOwnPropertyDescriptors,
        lu = Object.getOwnPropertySymbols,
        ld = Object.prototype.hasOwnProperty,
        lp = Object.prototype.propertyIsEnumerable,
        lg = (e, t, i) =>
          t in e
            ? lc(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        lf = (e, t) => {
          for (var i in t || (t = {})) ld.call(t, i) && lg(e, i, t[i]);
          if (lu) for (var i of lu(t)) lp.call(t, i) && lg(e, i, t[i]);
          return e;
        },
        ly = (e, t) => ll(e, lh(t)),
        lm = (e, t, i) => lg(e, "symbol" != typeof t ? t + "" : t, i);
      class lb {
        constructor(e) {
          lm(this, "name", "eip155"),
            lm(this, "client"),
            lm(this, "chainId"),
            lm(this, "namespace"),
            lm(this, "httpProviders"),
            lm(this, "events"),
            (this.namespace = e.namespace),
            (this.events = li("events")),
            (this.client = li("client")),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(e) {
          switch (e.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
              return this.getAccounts();
            case "wallet_switchEthereumChain":
              return await this.handleSwitchChain(e);
            case "eth_chainId":
              return parseInt(this.getDefaultChain());
            case "wallet_getCapabilities":
              return await this.getCapabilities(e);
            case "wallet_getCallsStatus":
              return await this.getCallStatus(e);
          }
          return this.namespace.methods.includes(e.request.method)
            ? await this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
            (this.chainId = parseInt(e)),
            this.events.emit(cq.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        createHttpProvider(e, t) {
          let i =
            t ||
            c8(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new s1.F(new cS.V(i, li("disableProviderPing")));
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = parseInt(c5(t));
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        getHttpProvider() {
          let e = this.chainId,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        async handleSwitchChain(e) {
          var t, i;
          let r = e.request.params
              ? null == (t = e.request.params[0])
                ? void 0
                : t.chainId
              : "0x0",
            s = parseInt((r = r.startsWith("0x") ? r : `0x${r}`), 16);
          if (this.isChainApproved(s)) this.setDefaultChain(`${s}`);
          else if (
            this.namespace.methods.includes("wallet_switchEthereumChain")
          )
            await this.client.request({
              topic: e.topic,
              request: { method: e.request.method, params: [{ chainId: r }] },
              chainId: null == (i = this.namespace.chains) ? void 0 : i[0],
            }),
              this.setDefaultChain(`${s}`);
          else
            throw Error(
              `Failed to switch to chain 'eip155:${s}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
            );
          return null;
        }
        isChainApproved(e) {
          return this.namespace.chains.includes(`${this.name}:${e}`);
        }
        async getCapabilities(e) {
          var t, i, r, s, n;
          let o =
              null == (i = null == (t = e.request) ? void 0 : t.params)
                ? void 0
                : i[0],
            a =
              (null == (s = null == (r = e.request) ? void 0 : r.params)
                ? void 0
                : s[1]) || [],
            c = `${o}${a.join(",")}`;
          if (!o)
            throw Error(
              "Missing address parameter in `wallet_getCapabilities` request"
            );
          let l = this.client.session.get(e.topic),
            h =
              (null == (n = l?.sessionProperties) ? void 0 : n.capabilities) ||
              {};
          if (null != h && h[c]) return h?.[c];
          let u = await this.client.request(e);
          try {
            await this.client.session.update(e.topic, {
              sessionProperties: ly(lf({}, l.sessionProperties || {}), {
                capabilities: ly(lf({}, h || {}), { [c]: u }),
              }),
            });
          } catch (e) {
            console.warn("Failed to update session with capabilities", e);
          }
          return u;
        }
        async getCallStatus(e) {
          var t, i;
          let r = this.client.session.get(e.topic),
            s = null == (t = r.sessionProperties) ? void 0 : t.bundler_name;
          if (s) {
            let t = this.getBundlerUrl(e.chainId, s);
            try {
              return await this.getUserOperationReceipt(t, e);
            } catch (e) {
              console.warn("Failed to fetch call status from bundler", e, t);
            }
          }
          let n = null == (i = r.sessionProperties) ? void 0 : i.bundler_url;
          if (n)
            try {
              return await this.getUserOperationReceipt(n, e);
            } catch (e) {
              console.warn(
                "Failed to fetch call status from custom bundler",
                e,
                n
              );
            }
          if (this.namespace.methods.includes(e.request.method))
            return await this.client.request(e);
          throw Error("Fetching call status not approved by the wallet.");
        }
        async getUserOperationReceipt(e, t) {
          var i;
          let r = new URL(e),
            s = await fetch(r, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(
                (0, s2.formatJsonRpcRequest)("eth_getUserOperationReceipt", [
                  null == (i = t.request.params) ? void 0 : i[0],
                ])
              ),
            });
          if (!s.ok)
            throw Error(`Failed to fetch user operation receipt - ${s.status}`);
          return await s.json();
        }
        getBundlerUrl(e, t) {
          return `${cT}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${t}`;
        }
      }
      var lw = Object.defineProperty,
        lv = (e, t, i) =>
          t in e
            ? lw(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        lE = (e, t, i) => lv(e, "symbol" != typeof t ? t + "" : t, i);
      class lI {
        constructor(e) {
          lE(this, "name", "solana"),
            lE(this, "client"),
            lE(this, "httpProviders"),
            lE(this, "events"),
            lE(this, "namespace"),
            lE(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = li("events")),
            (this.client = li("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(cq.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = c5(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || c8(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new s1.F(new cS.A(i, li("disableProviderPing")));
        }
      }
      var lP = Object.defineProperty,
        l_ = (e, t, i) =>
          t in e
            ? lP(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        lx = (e, t, i) => l_(e, "symbol" != typeof t ? t + "" : t, i);
      class lS {
        constructor(e) {
          lx(this, "name", "cosmos"),
            lx(this, "client"),
            lx(this, "httpProviders"),
            lx(this, "events"),
            lx(this, "namespace"),
            lx(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = li("events")),
            (this.client = li("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(
              cq.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = c5(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || c8(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new s1.F(new cS.A(i, li("disableProviderPing")));
        }
      }
      var lO = Object.defineProperty,
        lA = (e, t, i) =>
          t in e
            ? lO(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        lC = (e, t, i) => lA(e, "symbol" != typeof t ? t + "" : t, i);
      class lR {
        constructor(e) {
          lC(this, "name", "algorand"),
            lC(this, "client"),
            lC(this, "httpProviders"),
            lC(this, "events"),
            lC(this, "namespace"),
            lC(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = li("events")),
            (this.client = li("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (!this.httpProviders[e]) {
            let i =
              t ||
              c8(
                `${this.name}:${e}`,
                this.namespace,
                this.client.core.projectId
              );
            if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i);
          }
          (this.chainId = e),
            this.events.emit(
              cq.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              e[t] = this.createHttpProvider(
                t,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || c8(e, this.namespace, this.client.core.projectId);
          return typeof i > "u"
            ? void 0
            : new s1.F(new cS.A(i, li("disableProviderPing")));
        }
      }
      var lN = Object.defineProperty,
        lT = (e, t, i) =>
          t in e
            ? lN(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        lq = (e, t, i) => lT(e, "symbol" != typeof t ? t + "" : t, i);
      class lk {
        constructor(e) {
          lq(this, "name", "cip34"),
            lq(this, "client"),
            lq(this, "httpProviders"),
            lq(this, "events"),
            lq(this, "namespace"),
            lq(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = li("events")),
            (this.client = li("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(
              cq.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              let i = this.getCardanoRPCUrl(t),
                r = c5(t);
              e[r] = this.createHttpProvider(r, i);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        getCardanoRPCUrl(e) {
          let t = this.namespace.rpcMap;
          if (t) return t[e];
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || this.getCardanoRPCUrl(e);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new s1.F(new cS.A(i, li("disableProviderPing")));
        }
      }
      var lj = Object.defineProperty,
        lU = (e, t, i) =>
          t in e
            ? lj(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        lD = (e, t, i) => lU(e, "symbol" != typeof t ? t + "" : t, i);
      class l$ {
        constructor(e) {
          lD(this, "name", "elrond"),
            lD(this, "client"),
            lD(this, "httpProviders"),
            lD(this, "events"),
            lD(this, "namespace"),
            lD(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = li("events")),
            (this.client = li("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(cq.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = c5(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || c8(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new s1.F(new cS.A(i, li("disableProviderPing")));
        }
      }
      var lB = Object.defineProperty,
        lL = (e, t, i) =>
          t in e
            ? lB(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        lM = (e, t, i) => lL(e, "symbol" != typeof t ? t + "" : t, i);
      class lz {
        constructor(e) {
          lM(this, "name", "multiversx"),
            lM(this, "client"),
            lM(this, "httpProviders"),
            lM(this, "events"),
            lM(this, "namespace"),
            lM(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = li("events")),
            (this.client = li("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(cq.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = c5(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || c8(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new s1.F(new cS.A(i, li("disableProviderPing")));
        }
      }
      var lH = Object.defineProperty,
        lK = (e, t, i) =>
          t in e
            ? lH(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        lV = (e, t, i) => lK(e, "symbol" != typeof t ? t + "" : t, i);
      class lF {
        constructor(e) {
          lV(this, "name", "near"),
            lV(this, "client"),
            lV(this, "httpProviders"),
            lV(this, "events"),
            lV(this, "namespace"),
            lV(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = li("events")),
            (this.client = li("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            let i = t || c8(`${this.name}:${e}`, this.namespace);
            if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i);
          }
          this.events.emit(
            cq.DEFAULT_CHAIN_CHANGED,
            `${this.name}:${this.chainId}`
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              e[t] = this.createHttpProvider(
                t,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || c8(e, this.namespace);
          return typeof i > "u"
            ? void 0
            : new s1.F(new cS.A(i, li("disableProviderPing")));
        }
      }
      var lW = Object.defineProperty,
        lG = (e, t, i) =>
          t in e
            ? lW(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        lJ = (e, t, i) => lG(e, "symbol" != typeof t ? t + "" : t, i);
      class lZ {
        constructor(e) {
          lJ(this, "name", "tezos"),
            lJ(this, "client"),
            lJ(this, "httpProviders"),
            lJ(this, "events"),
            lJ(this, "namespace"),
            lJ(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = li("events")),
            (this.client = li("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            let i = t || c8(`${this.name}:${e}`, this.namespace);
            if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i);
          }
          this.events.emit(
            cq.DEFAULT_CHAIN_CHANGED,
            `${this.name}:${this.chainId}`
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              e[t] = this.createHttpProvider(t);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || c8(e, this.namespace);
          return typeof i > "u" ? void 0 : new s1.F(new cS.A(i));
        }
      }
      var lY = Object.defineProperty,
        lQ = (e, t, i) =>
          t in e
            ? lY(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        lX = (e, t, i) => lQ(e, "symbol" != typeof t ? t + "" : t, i);
      class l0 {
        constructor(e) {
          lX(this, "name", cN),
            lX(this, "client"),
            lX(this, "httpProviders"),
            lX(this, "events"),
            lX(this, "namespace"),
            lX(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = li("events")),
            (this.client = li("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          (this.namespace.chains = [
            ...new Set((this.namespace.chains || []).concat(e.chains || [])),
          ]),
            (this.namespace.accounts = [
              ...new Set(
                (this.namespace.accounts || []).concat(e.accounts || [])
              ),
            ]),
            (this.namespace.methods = [
              ...new Set(
                (this.namespace.methods || []).concat(e.methods || [])
              ),
            ]),
            (this.namespace.events = [
              ...new Set((this.namespace.events || []).concat(e.events || [])),
            ]),
            (this.httpProviders = this.createHttpProviders());
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider(e.chainId).request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(cq.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          var e, t;
          let i = {};
          return (
            null == (t = null == (e = this.namespace) ? void 0 : e.accounts) ||
              t.forEach((e) => {
                let t = eu(e);
                i[`${t.namespace}:${t.reference}`] = this.createHttpProvider(e);
              }),
            i
          );
        }
        getHttpProvider(e) {
          let t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || c8(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new s1.F(new cS.A(i, li("disableProviderPing")));
        }
      }
      var l1 = Object.defineProperty,
        l2 = Object.defineProperties,
        l8 = Object.getOwnPropertyDescriptors,
        l5 = Object.getOwnPropertySymbols,
        l3 = Object.prototype.hasOwnProperty,
        l6 = Object.prototype.propertyIsEnumerable,
        l4 = (e, t, i) =>
          t in e
            ? l1(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        l9 = (e, t) => {
          for (var i in t || (t = {})) l3.call(t, i) && l4(e, i, t[i]);
          if (l5) for (var i of l5(t)) l6.call(t, i) && l4(e, i, t[i]);
          return e;
        },
        l7 = (e, t) => l2(e, l8(t)),
        he = (e, t, i) => l4(e, "symbol" != typeof t ? t + "" : t, i);
      class ht {
        constructor(e) {
          he(this, "client"),
            he(this, "namespaces"),
            he(this, "optionalNamespaces"),
            he(this, "sessionProperties"),
            he(this, "scopedProperties"),
            he(this, "events", new (s())()),
            he(this, "rpcProviders", {}),
            he(this, "session"),
            he(this, "providerOpts"),
            he(this, "logger"),
            he(this, "uri"),
            he(this, "disableProviderPing", !1),
            (this.providerOpts = e),
            (this.logger =
              "u" > typeof e?.logger && "string" != typeof e?.logger
                ? e.logger
                : (0, sC.h6)((0, sC.iP)({ level: e?.logger || cA }))),
            (this.disableProviderPing = e?.disableProviderPing || !1);
        }
        static async init(e) {
          let t = new ht(e);
          return await t.initialize(), t;
        }
        async request(e, t, i) {
          let [r, s] = this.validateChain(t);
          if (!this.session)
            throw Error("Please call connect() before request()");
          return await this.getProvider(r).request({
            request: l9({}, e),
            chainId: `${r}:${s}`,
            topic: this.session.topic,
            expiry: i,
          });
        }
        sendAsync(e, t, i, r) {
          let s = new Date().getTime();
          this.request(e, i, r)
            .then((e) => t(null, (0, s2.formatJsonRpcResult)(s, e)))
            .catch((e) => t(e, void 0));
        }
        async enable() {
          if (!this.client) throw Error("Sign Client not initialized");
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
                scopedProperties: this.scopedProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var e;
          if (!this.session)
            throw Error("Please call connect() before enable()");
          await this.client.disconnect({
            topic: null == (e = this.session) ? void 0 : e.topic,
            reason: sc("USER_DISCONNECTED"),
          }),
            await this.cleanup();
        }
        async connect(e) {
          if (!this.client) throw Error("Sign Client not initialized");
          if (
            (this.setNamespaces(e),
            await this.cleanupPendingPairings(),
            !e.skipPairing)
          )
            return await this.pair(e.pairingTopic);
        }
        async authenticate(e, t) {
          if (!this.client) throw Error("Sign Client not initialized");
          this.setNamespaces(e), await this.cleanupPendingPairings();
          let { uri: i, response: r } = await this.client.authenticate(e, t);
          i && ((this.uri = i), this.events.emit("display_uri", i));
          let s = await r();
          if (((this.session = s.session), this.session)) {
            let e = c7(this.session.namespaces);
            (this.namespaces = c6(this.namespaces, e)),
              await this.persist("namespaces", this.namespaces),
              this.onConnect();
          }
          return s;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(e) {
          let { uri: t, approval: i } = await this.client.connect({
            pairingTopic: e,
            requiredNamespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties,
            scopedProperties: this.scopedProperties,
          });
          t && ((this.uri = t), this.events.emit("display_uri", t));
          let r = await i();
          this.session = r;
          let s = c7(r.namespaces);
          return (
            (this.namespaces = c6(this.namespaces, s)),
            await this.persist("namespaces", this.namespaces),
            await this.persist("optionalNamespaces", this.optionalNamespaces),
            this.onConnect(),
            this.session
          );
        }
        setDefaultChain(e, t) {
          try {
            if (!this.session) return;
            let [i, r] = this.validateChain(e),
              s = this.getProvider(i);
            s.name === cN
              ? s.setDefaultChain(`${i}:${r}`, t)
              : s.setDefaultChain(r, t);
          } catch (e) {
            if (!/Please call connect/.test(e.message)) throw e;
          }
        }
        async cleanupPendingPairings(e = {}) {
          this.logger.info("Cleaning up inactive pairings...");
          let t = this.client.pairing.getAll();
          if (sl(t)) {
            for (let i of t)
              e.deletePairings
                ? this.client.core.expirer.set(i.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(
                    i.topic
                  );
            this.logger.info(`Inactive pairings cleared: ${t.length}`);
          }
        }
        abortPairingAttempt() {
          this.logger.warn(
            "abortPairingAttempt is deprecated. This is now a no-op."
          );
        }
        async checkStorage() {
          (this.namespaces = (await this.getFromStore("namespaces")) || {}),
            (this.optionalNamespaces =
              (await this.getFromStore("optionalNamespaces")) || {}),
            this.session && this.createProviders();
        }
        async initialize() {
          this.logger.trace("Initialized"),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          var e, t;
          if (
            ((this.client =
              this.providerOpts.client ||
              (await cx.init({
                core: this.providerOpts.core,
                logger: this.providerOpts.logger || cA,
                relayUrl:
                  this.providerOpts.relayUrl || "wss://relay.walletconnect.org",
                projectId: this.providerOpts.projectId,
                metadata: this.providerOpts.metadata,
                storageOptions: this.providerOpts.storageOptions,
                storage: this.providerOpts.storage,
                name: this.providerOpts.name,
                customStoragePrefix: this.providerOpts.customStoragePrefix,
                telemetryEnabled: this.providerOpts.telemetryEnabled,
              }))),
            this.providerOpts.session)
          )
            try {
              this.session = this.client.session.get(
                this.providerOpts.session.topic
              );
            } catch (i) {
              throw (
                (this.logger.error("Failed to get session", i),
                Error(
                  `The provided session: ${
                    null ==
                    (t = null == (e = this.providerOpts) ? void 0 : e.session)
                      ? void 0
                      : t.topic
                  } doesn't exist in the Sign client`
                ))
              );
            }
          else {
            let e = this.client.session.getAll();
            this.session = e[0];
          }
          this.logger.trace("SignClient Initialized");
        }
        createProviders() {
          if (!this.client) throw Error("Sign Client not initialized");
          if (!this.session)
            throw Error(
              "Session not initialized. Please call connect() before enable()"
            );
          let e = [
            ...new Set(Object.keys(this.session.namespaces).map((e) => si(e))),
          ];
          lr("client", this.client),
            lr("events", this.events),
            lr("disableProviderPing", this.disableProviderPing),
            e.forEach((e) => {
              if (!this.session) return;
              let t = (function (e, t) {
                  let i = Object.keys(t.namespaces).filter((t) =>
                    t.includes(e)
                  );
                  if (!i.length) return [];
                  let r = [];
                  return (
                    i.forEach((e) => {
                      let i = t.namespaces[e].accounts;
                      r.push(...i);
                    }),
                    r
                  );
                })(e, this.session),
                i = c3(t),
                r = l7(
                  l9({}, c6(this.namespaces, this.optionalNamespaces)[e]),
                  { accounts: t, chains: i }
                );
              switch (e) {
                case "eip155":
                  this.rpcProviders[e] = new lb({ namespace: r });
                  break;
                case "algorand":
                  this.rpcProviders[e] = new lR({ namespace: r });
                  break;
                case "solana":
                  this.rpcProviders[e] = new lI({ namespace: r });
                  break;
                case "cosmos":
                  this.rpcProviders[e] = new lS({ namespace: r });
                  break;
                case "polkadot":
                  this.rpcProviders[e] = new la({ namespace: r });
                  break;
                case "cip34":
                  this.rpcProviders[e] = new lk({ namespace: r });
                  break;
                case "elrond":
                  this.rpcProviders[e] = new l$({ namespace: r });
                  break;
                case "multiversx":
                  this.rpcProviders[e] = new lz({ namespace: r });
                  break;
                case "near":
                  this.rpcProviders[e] = new lF({ namespace: r });
                  break;
                case "tezos":
                  this.rpcProviders[e] = new lZ({ namespace: r });
                  break;
                default:
                  this.rpcProviders[cN]
                    ? this.rpcProviders[cN].updateNamespace(r)
                    : (this.rpcProviders[cN] = new l0({ namespace: r }));
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > "u")
            throw Error("Sign Client is not initialized");
          this.client.on("session_ping", (e) => {
            var t;
            let { topic: i } = e;
            i === (null == (t = this.session) ? void 0 : t.topic) &&
              this.events.emit("session_ping", e);
          }),
            this.client.on("session_event", (e) => {
              var t;
              let { params: i, topic: r } = e;
              if (r !== (null == (t = this.session) ? void 0 : t.topic)) return;
              let { event: s } = i;
              if ("accountsChanged" === s.name) {
                let e = s.data;
                e && sl(e) && this.events.emit("accountsChanged", e.map(c9));
              } else if ("chainChanged" === s.name) {
                let e = i.chainId,
                  t = i.event.data,
                  r = si(e),
                  s = le(e) !== le(t) ? `${r}:${le(t)}` : e;
                this.onChainChanged(s);
              } else this.events.emit(s.name, s.data);
              this.events.emit("session_event", e);
            }),
            this.client.on("session_update", ({ topic: e, params: t }) => {
              var i, r;
              if (e !== (null == (i = this.session) ? void 0 : i.topic)) return;
              let { namespaces: s } = t,
                n = null == (r = this.client) ? void 0 : r.session.get(e);
              (this.session = l7(l9({}, n), { namespaces: s })),
                this.onSessionUpdate(),
                this.events.emit("session_update", { topic: e, params: t });
            }),
            this.client.on("session_delete", async (e) => {
              var t;
              e.topic === (null == (t = this.session) ? void 0 : t.topic) &&
                (await this.cleanup(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  l7(l9({}, sc("USER_DISCONNECTED")), { data: e.topic })
                ));
            }),
            this.on(cq.DEFAULT_CHAIN_CHANGED, (e) => {
              this.onChainChanged(e, !0);
            });
        }
        getProvider(e) {
          return this.rpcProviders[e] || this.rpcProviders[cN];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((e) => {
            var t;
            this.getProvider(e).updateNamespace(
              null == (t = this.session) ? void 0 : t.namespaces[e]
            );
          });
        }
        setNamespaces(e) {
          let {
            namespaces: t = {},
            optionalNamespaces: i = {},
            sessionProperties: r,
            scopedProperties: s,
          } = e;
          (this.optionalNamespaces = c6(t, i)),
            (this.sessionProperties = r),
            (this.scopedProperties = s);
        }
        validateChain(e) {
          let [t, i] = e?.split(":") || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, i];
          if (
            t &&
            !Object.keys(this.namespaces || {})
              .map((e) => si(e))
              .includes(t)
          )
            throw Error(
              `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
            );
          if (t && i) return [t, i];
          let r = si(Object.keys(this.namespaces)[0]),
            s = this.rpcProviders[r].getDefaultChain();
          return [r, s];
        }
        async requestAccounts() {
          let [e] = this.validateChain();
          return await this.getProvider(e).requestAccounts();
        }
        async onChainChanged(e, t = !1) {
          if (!this.namespaces) return;
          let [i, r] = this.validateChain(e);
          if (!r) return;
          this.updateNamespaceChain(i, r), this.events.emit("chainChanged", r);
          let s = this.getProvider(i).getDefaultChain();
          t || this.getProvider(i).setDefaultChain(r),
            this.emitAccountsChangedOnChainChange({
              namespace: i,
              previousChainId: s,
              newChainId: e,
            }),
            await this.persist("namespaces", this.namespaces);
        }
        emitAccountsChangedOnChainChange({
          namespace: e,
          previousChainId: t,
          newChainId: i,
        }) {
          var r, s;
          try {
            if (t === i) return;
            let n =
              null ==
              (s = null == (r = this.session) ? void 0 : r.namespaces[e])
                ? void 0
                : s.accounts;
            if (!n) return;
            let o = n.filter((e) => e.includes(`${i}:`)).map(c9);
            if (!sl(o)) return;
            this.events.emit("accountsChanged", o);
          } catch (e) {
            this.logger.warn(
              "Failed to emit accountsChanged on chain change",
              e
            );
          }
        }
        updateNamespaceChain(e, t) {
          if (!this.namespaces) return;
          let i = this.namespaces[e] ? e : `${e}:${t}`;
          this.namespaces[i]
            ? this.namespaces[i] && (this.namespaces[i].defaultChain = t)
            : (this.namespaces[i] = {
                chains: [],
                methods: [],
                events: [],
                defaultChain: t,
              });
        }
        onConnect() {
          this.createProviders(),
            this.events.emit("connect", { session: this.session });
        }
        async cleanup() {
          (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            await this.deleteFromStore("namespaces"),
            await this.deleteFromStore("optionalNamespaces"),
            await this.deleteFromStore("sessionProperties"),
            (this.session = void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 }),
            await this.cleanupStorage();
        }
        async persist(e, t) {
          var i;
          let r = (null == (i = this.session) ? void 0 : i.topic) || "";
          await this.client.core.storage.setItem(`${cC}/${e}${r}`, t);
        }
        async getFromStore(e) {
          var t;
          let i = (null == (t = this.session) ? void 0 : t.topic) || "";
          return await this.client.core.storage.getItem(`${cC}/${e}${i}`);
        }
        async deleteFromStore(e) {
          var t;
          let i = (null == (t = this.session) ? void 0 : t.topic) || "";
          await this.client.core.storage.removeItem(`${cC}/${e}${i}`);
        }
        async cleanupStorage() {
          var e;
          try {
            if ((null == (e = this.client) ? void 0 : e.session.length) > 0)
              return;
            for (let e of await this.client.core.storage.getKeys())
              e.startsWith(cC) &&
                (await this.client.core.storage.removeItem(e));
          } catch (e) {
            this.logger.warn("Failed to cleanup storage", e);
          }
        }
      }
      let hi = ["eth_sendTransaction", "personal_sign"],
        hr = [
          "eth_accounts",
          "eth_requestAccounts",
          "eth_sendRawTransaction",
          "eth_sign",
          "eth_signTransaction",
          "eth_signTypedData",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "eth_sendTransaction",
          "personal_sign",
          "wallet_switchEthereumChain",
          "wallet_addEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
          "wallet_sendCalls",
          "wallet_getCapabilities",
          "wallet_getCallsStatus",
          "wallet_showCallsStatus",
        ],
        hs = ["chainChanged", "accountsChanged"],
        hn = [
          "chainChanged",
          "accountsChanged",
          "message",
          "disconnect",
          "connect",
        ],
        ho = async () => {
          let { createAppKit: e } = await i.e(7006).then(i.bind(i, 17006));
          return e;
        };
      var ha = Object.defineProperty,
        hc = Object.defineProperties,
        hl = Object.getOwnPropertyDescriptors,
        hh = Object.getOwnPropertySymbols,
        hu = Object.prototype.hasOwnProperty,
        hd = Object.prototype.propertyIsEnumerable,
        hp = (e, t, i) =>
          t in e
            ? ha(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        hg = (e, t) => {
          for (var i in t || (t = {})) hu.call(t, i) && hp(e, i, t[i]);
          if (hh) for (var i of hh(t)) hd.call(t, i) && hp(e, i, t[i]);
          return e;
        },
        hf = (e, t) => hc(e, hl(t)),
        hy = (e, t, i) => hp(e, "symbol" != typeof t ? t + "" : t, i);
      function hm(e) {
        return Number(e[0].split(":")[1]);
      }
      function hb(e) {
        return `0x${e.toString(16)}`;
      }
      class hw {
        constructor() {
          hy(this, "events", new r.EventEmitter()),
            hy(this, "namespace", "eip155"),
            hy(this, "accounts", []),
            hy(this, "signer"),
            hy(this, "chainId", 1),
            hy(this, "modal"),
            hy(this, "rpc"),
            hy(this, "STORAGE_KEY", "wc@2:ethereum_provider:"),
            hy(this, "on", (e, t) => (this.events.on(e, t), this)),
            hy(this, "once", (e, t) => (this.events.once(e, t), this)),
            hy(
              this,
              "removeListener",
              (e, t) => (this.events.removeListener(e, t), this)
            ),
            hy(this, "off", (e, t) => (this.events.off(e, t), this)),
            hy(this, "parseAccount", (e) =>
              this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e
            ),
            (this.signer = {}),
            (this.rpc = {});
        }
        static async init(e) {
          let t = new hw();
          return await t.initialize(e), t;
        }
        async request(e, t) {
          return await this.signer.request(
            e,
            this.formatChainId(this.chainId),
            t
          );
        }
        sendAsync(e, t, i) {
          this.signer.sendAsync(e, t, this.formatChainId(this.chainId), i);
        }
        get connected() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connected
          );
        }
        get connecting() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connecting
          );
        }
        async enable() {
          return (
            this.session || (await this.connect()),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async connect(e) {
          var t;
          if (!this.signer.client)
            throw Error("Provider not initialized. Call init() first");
          this.loadConnectOpts(e);
          let { required: i, optional: r } = (function (e) {
            let {
              chains: t,
              optionalChains: i,
              methods: r,
              optionalMethods: s,
              events: n,
              optionalEvents: o,
              rpcMap: a,
            } = e;
            if (!sl(t)) throw Error("Invalid chains");
            let c = {
                chains: t,
                methods: r || hi,
                events: n || hs,
                rpcMap: hg({}, t.length ? { [hm(t)]: a[hm(t)] } : {}),
              },
              l = n?.filter((e) => !hs.includes(e)),
              h = r?.filter((e) => !hi.includes(e));
            if (
              !i &&
              !o &&
              !s &&
              !(null != l && l.length) &&
              !(null != h && h.length)
            )
              return { required: t.length ? c : void 0 };
            let u = {
              chains: [
                ...new Set(
                  (l?.length && h?.length) || !i ? c.chains.concat(i || []) : i
                ),
              ],
              methods: [
                ...new Set(c.methods.concat(null != s && s.length ? s : hr)),
              ],
              events: [
                ...new Set(c.events.concat(null != o && o.length ? o : hn)),
              ],
              rpcMap: a,
            };
            return {
              required: t.length ? c : void 0,
              optional: i.length ? u : void 0,
            };
          })(this.rpc);
          try {
            let t = await new Promise(async (t, s) => {
              var n, o;
              this.rpc.showQrModal &&
                (null == (n = this.modal) || n.open(),
                null == (o = this.modal) ||
                  o.subscribeState((e) => {
                    e.open ||
                      this.signer.session ||
                      (this.signer.abortPairingAttempt(),
                      s(Error("Connection request reset. Please try again.")));
                  }));
              let a =
                null != e && e.scopedProperties
                  ? { [this.namespace]: e.scopedProperties }
                  : void 0;
              await this.signer
                .connect(
                  hf(
                    hg(
                      { namespaces: hg({}, i && { [this.namespace]: i }) },
                      r && { optionalNamespaces: { [this.namespace]: r } }
                    ),
                    { pairingTopic: e?.pairingTopic, scopedProperties: a }
                  )
                )
                .then((e) => {
                  t(e);
                })
                .catch((e) => {
                  var t;
                  null == (t = this.modal) ||
                    t.showErrorMessage("Unable to connect"),
                    s(Error(e.message));
                });
            });
            if (!t) return;
            let s = ep(t.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : s),
              this.setAccounts(s),
              this.events.emit("connect", { chainId: hb(this.chainId) });
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            null == (t = this.modal) || t.close();
          }
        }
        async authenticate(e, t) {
          var i;
          if (!this.signer.client)
            throw Error("Provider not initialized. Call init() first");
          this.loadConnectOpts({ chains: e?.chains });
          try {
            let i = await new Promise(async (i, r) => {
                var s, n;
                this.rpc.showQrModal &&
                  (null == (s = this.modal) || s.open(),
                  null == (n = this.modal) ||
                    n.subscribeState((e) => {
                      e.open ||
                        this.signer.session ||
                        (this.signer.abortPairingAttempt(),
                        r(
                          Error("Connection request reset. Please try again.")
                        ));
                    })),
                  await this.signer
                    .authenticate(hf(hg({}, e), { chains: this.rpc.chains }), t)
                    .then((e) => {
                      i(e);
                    })
                    .catch((e) => {
                      var t;
                      null == (t = this.modal) ||
                        t.showErrorMessage("Unable to connect"),
                        r(Error(e.message));
                    });
              }),
              r = i.session;
            if (r) {
              let e = ep(r.namespaces, [this.namespace]);
              this.setChainIds(this.rpc.chains.length ? this.rpc.chains : e),
                this.setAccounts(e),
                this.events.emit("connect", { chainId: hb(this.chainId) });
            }
            return i;
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            null == (i = this.modal) || i.close();
          }
        }
        async disconnect() {
          this.session && (await this.signer.disconnect()), this.reset();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on("session_event", (e) => {
            let { params: t } = e,
              { event: i } = t;
            "accountsChanged" === i.name
              ? ((this.accounts = this.parseAccounts(i.data)),
                this.events.emit("accountsChanged", this.accounts))
              : "chainChanged" === i.name
              ? this.setChainId(this.formatChainId(i.data))
              : this.events.emit(i.name, i.data),
              this.events.emit("session_event", e);
          }),
            this.signer.on("accountsChanged", (e) => {
              (this.accounts = this.parseAccounts(e)),
                this.events.emit("accountsChanged", this.accounts);
            }),
            this.signer.on("chainChanged", (e) => {
              let t = parseInt(e);
              (this.chainId = t),
                this.events.emit("chainChanged", hb(this.chainId)),
                this.persist();
            }),
            this.signer.on("session_update", (e) => {
              this.events.emit("session_update", e);
            }),
            this.signer.on("session_delete", (e) => {
              this.reset(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  hf(hg({}, sc("USER_DISCONNECTED")), {
                    data: e.topic,
                    name: "USER_DISCONNECTED",
                  })
                );
            }),
            this.signer.on("display_uri", (e) => {
              this.events.emit("display_uri", e);
            });
        }
        switchEthereumChain(e) {
          this.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: e.toString(16) }],
          });
        }
        isCompatibleChainId(e) {
          return "string" == typeof e && e.startsWith(`${this.namespace}:`);
        }
        formatChainId(e) {
          return `${this.namespace}:${e}`;
        }
        parseChainId(e) {
          return Number(e.split(":")[1]);
        }
        setChainIds(e) {
          let t = e
            .filter((e) => this.isCompatibleChainId(e))
            .map((e) => this.parseChainId(e));
          t.length &&
            ((this.chainId = t[0]),
            this.events.emit("chainChanged", hb(this.chainId)),
            this.persist());
        }
        setChainId(e) {
          if (this.isCompatibleChainId(e)) {
            let t = this.parseChainId(e);
            (this.chainId = t), this.switchEthereumChain(t);
          }
        }
        parseAccountId(e) {
          let [t, i, r] = e.split(":");
          return { chainId: `${t}:${i}`, address: r };
        }
        setAccounts(e) {
          (this.accounts = e
            .filter(
              (e) =>
                this.parseChainId(this.parseAccountId(e).chainId) ===
                this.chainId
            )
            .map((e) => this.parseAccountId(e).address)),
            this.events.emit("accountsChanged", this.accounts);
        }
        getRpcConfig(e) {
          var t, i;
          let r = null != (t = e?.chains) ? t : [],
            s = null != (i = e?.optionalChains) ? i : [],
            n = r.concat(s);
          if (!n.length)
            throw Error(
              "No chains specified in either `chains` or `optionalChains`"
            );
          let o = r.length ? e?.methods || hi : [],
            a = r.length ? e?.events || hs : [],
            c = e?.optionalMethods || [],
            l = e?.optionalEvents || [],
            h = e?.rpcMap || this.buildRpcMap(n, e.projectId),
            u = e?.qrModalOptions || void 0;
          return {
            chains: r?.map((e) => this.formatChainId(e)),
            optionalChains: s.map((e) => this.formatChainId(e)),
            methods: o,
            events: a,
            optionalMethods: c,
            optionalEvents: l,
            rpcMap: h,
            showQrModal: !!(null != e && e.showQrModal),
            qrModalOptions: u,
            projectId: e.projectId,
            metadata: e.metadata,
          };
        }
        buildRpcMap(e, t) {
          let i = {};
          return (
            e.forEach((e) => {
              i[e] = this.getRpcUrl(e, t);
            }),
            i
          );
        }
        async initialize(e) {
          if (
            ((this.rpc = this.getRpcConfig(e)),
            (this.chainId = this.rpc.chains.length
              ? hm(this.rpc.chains)
              : hm(this.rpc.optionalChains)),
            (this.signer = await ht.init({
              projectId: this.rpc.projectId,
              metadata: this.rpc.metadata,
              disableProviderPing: e.disableProviderPing,
              relayUrl: e.relayUrl,
              storage: e.storage,
              storageOptions: e.storageOptions,
              customStoragePrefix: e.customStoragePrefix,
              telemetryEnabled: e.telemetryEnabled,
              logger: e.logger,
            })),
            this.registerEventListeners(),
            await this.loadPersistedSession(),
            this.rpc.showQrModal)
          ) {
            let e;
            try {
              let t = await ho(),
                { convertWCMToAppKitOptions: i } = await Promise.resolve().then(
                  function () {
                    return hT;
                  }
                ),
                r = i(
                  hf(hg({}, this.rpc.qrModalOptions), {
                    chains: [
                      ...new Set([
                        ...this.rpc.chains,
                        ...this.rpc.optionalChains,
                      ]),
                    ],
                    metadata: this.rpc.metadata,
                    projectId: this.rpc.projectId,
                  })
                );
              if (!r.networks.length)
                throw Error("No networks found for WalletConnect\xb7");
              e = t(
                hf(hg({}, r), {
                  universalProvider: this.signer,
                  manualWCControl: !0,
                })
              );
            } catch (e) {
              throw (
                (console.warn(e),
                Error("To use QR modal, please install @reown/appkit package"))
              );
            }
            if (e)
              try {
                this.modal = e;
              } catch (e) {
                throw (
                  (this.signer.logger.error(e),
                  Error("Could not generate WalletConnectModal Instance"))
                );
              }
          }
        }
        loadConnectOpts(e) {
          if (!e) return;
          let { chains: t, optionalChains: i, rpcMap: r } = e;
          t &&
            sl(t) &&
            ((this.rpc.chains = t.map((e) => this.formatChainId(e))),
            t.forEach((e) => {
              this.rpc.rpcMap[e] = r?.[e] || this.getRpcUrl(e);
            })),
            i &&
              sl(i) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains = i?.map((e) => this.formatChainId(e))),
              i.forEach((e) => {
                this.rpc.rpcMap[e] = r?.[e] || this.getRpcUrl(e);
              }));
        }
        getRpcUrl(e, t) {
          var i;
          return (
            (null == (i = this.rpc.rpcMap) ? void 0 : i[e]) ||
            `https://rpc.walletconnect.org/v1/?chainId=eip155:${e}&projectId=${
              t || this.rpc.projectId
            }`
          );
        }
        async loadPersistedSession() {
          if (this.session)
            try {
              let e = await this.signer.client.core.storage.getItem(
                  `${this.STORAGE_KEY}/chainId`
                ),
                t = this.session.namespaces[`${this.namespace}:${e}`]
                  ? this.session.namespaces[`${this.namespace}:${e}`]
                  : this.session.namespaces[this.namespace];
              this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
                this.setAccounts(t?.accounts);
            } catch (e) {
              this.signer.logger.error(
                "Failed to load persisted session, clearing state..."
              ),
                this.signer.logger.error(e),
                await this.disconnect().catch((e) =>
                  this.signer.logger.warn(e)
                );
            }
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session &&
            this.signer.client.core.storage.setItem(
              `${this.STORAGE_KEY}/chainId`,
              this.chainId
            );
        }
        parseAccounts(e) {
          return "string" == typeof e || e instanceof String
            ? [this.parseAccount(e)]
            : e.map((e) => this.parseAccount(e));
        }
      }
      let hv = hw;
      var hE = Object.defineProperty,
        hI = Object.defineProperties,
        hP = Object.getOwnPropertyDescriptors,
        h_ = Object.getOwnPropertySymbols,
        hx = Object.prototype.hasOwnProperty,
        hS = Object.prototype.propertyIsEnumerable,
        hO = (e, t, i) =>
          t in e
            ? hE(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        hA = (e, t) => {
          for (var i in t || (t = {})) hx.call(t, i) && hO(e, i, t[i]);
          if (h_) for (var i of h_(t)) hS.call(t, i) && hO(e, i, t[i]);
          return e;
        },
        hC = (e, t) => hI(e, hP(t));
      let hR = (e) => {
        let [t, i] = e.split(":");
        return hN({
          id: i,
          caipNetworkId: e,
          chainNamespace: t,
          name: "",
          nativeCurrency: { name: "", symbol: "", decimals: 8 },
          rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
        });
      };
      function hN(e) {
        return hA({ formatters: void 0, fees: void 0, serializers: void 0 }, e);
      }
      var hT = Object.freeze({
        __proto__: null,
        convertWCMToAppKitOptions: function (e) {
          var t, i, r, s, n, o, a;
          let c = null == (t = e.chains) ? void 0 : t.map(hR).filter(Boolean);
          if (0 === c.length)
            throw Error("At least one chain must be specified");
          let l = c.find((t) => {
              var i;
              return t.id === (null == (i = e.defaultChain) ? void 0 : i.id);
            }),
            h = {
              projectId: e.projectId,
              networks: c,
              themeMode: e.themeMode,
              themeVariables: (function (e) {
                if (e)
                  return {
                    "--w3m-font-family": e["--wcm-font-family"],
                    "--w3m-accent": e["--wcm-accent-color"],
                    "--w3m-color-mix": e["--wcm-background-color"],
                    "--w3m-z-index": e["--wcm-z-index"]
                      ? Number(e["--wcm-z-index"])
                      : void 0,
                    "--w3m-qr-color": e["--wcm-accent-color"],
                    "--w3m-font-size-master":
                      e["--wcm-text-medium-regular-size"],
                    "--w3m-border-radius-master":
                      e["--wcm-container-border-radius"],
                    "--w3m-color-mix-strength": 0,
                  };
              })(e.themeVariables),
              chainImages: e.chainImages,
              connectorImages: e.walletImages,
              defaultNetwork: l,
              metadata: hC(hA({}, e.metadata), {
                name:
                  (null == (i = e.metadata) ? void 0 : i.name) ||
                  "WalletConnect",
                description:
                  (null == (r = e.metadata) ? void 0 : r.description) ||
                  "Connect to WalletConnect-compatible wallets",
                url:
                  (null == (s = e.metadata) ? void 0 : s.url) ||
                  "https://walletconnect.org",
                icons: (null == (n = e.metadata) ? void 0 : n.icons) || [
                  "https://walletconnect.org/walletconnect-logo.png",
                ],
              }),
              showWallets: !0,
              featuredWalletIds:
                "NONE" === e.explorerRecommendedWalletIds
                  ? []
                  : Array.isArray(e.explorerRecommendedWalletIds)
                  ? e.explorerRecommendedWalletIds
                  : [],
              excludeWalletIds:
                "ALL" === e.explorerExcludedWalletIds
                  ? []
                  : Array.isArray(e.explorerExcludedWalletIds)
                  ? e.explorerExcludedWalletIds
                  : [],
              enableEIP6963: !1,
              enableInjected: !1,
              enableCoinbase: !0,
              enableWalletConnect: !0,
              features: { email: !1, socials: !1 },
            };
          if (
            (null != (o = e.mobileWallets) && o.length) ||
            (null != (a = e.desktopWallets) && a.length)
          ) {
            let t = [
                ...(e.mobileWallets || []).map((e) => ({
                  id: e.id,
                  name: e.name,
                  links: e.links,
                })),
                ...(e.desktopWallets || []).map((e) => ({
                  id: e.id,
                  name: e.name,
                  links: {
                    native: e.links.native,
                    universal: e.links.universal,
                  },
                })),
              ],
              i = [
                ...(h.featuredWalletIds || []),
                ...(h.excludeWalletIds || []),
              ],
              r = t.filter((e) => !i.includes(e.id));
            r.length && (h.customWallets = r);
          }
          return h;
        },
        defineChain: hN,
      });
    },
    42221: (e, t, i) => {
      i.d(t, { o0: () => p });
      var r = i(87358),
        s = function (e, t, i) {
          if (i || 2 == arguments.length)
            for (var r, s = 0, n = t.length; s < n; s++)
              (!r && s in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, s)), (r[s] = t[s]));
          return e.concat(r || Array.prototype.slice.call(t));
        },
        n = function (e, t, i) {
          (this.name = e),
            (this.version = t),
            (this.os = i),
            (this.type = "browser");
        },
        o = function (e) {
          (this.version = e),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = r.platform);
        },
        a = function (e, t, i, r) {
          (this.name = e),
            (this.version = t),
            (this.os = i),
            (this.bot = r),
            (this.type = "bot-device");
        },
        c = function () {
          (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        l = function () {
          (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        h =
          /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        u = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /EdgA?\/([0-9\.]+)/],
          [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
          ],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            "pie",
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
          ],
          ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FB[AS]V\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ["curl", /^curl\/([0-9\.]+)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        d = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function p(e) {
        return e
          ? g(e)
          : "undefined" == typeof document &&
            "undefined" != typeof navigator &&
            "ReactNative" === navigator.product
          ? new l()
          : "undefined" != typeof navigator
          ? g(navigator.userAgent)
          : void 0 !== r && r.version
          ? new o(r.version.slice(1))
          : null;
      }
      function g(e) {
        var t,
          i =
            "" !== (t = e) &&
            u.reduce(function (e, i) {
              var r = i[0],
                s = i[1];
              if (e) return e;
              var n = s.exec(t);
              return !!n && [r, n];
            }, !1);
        if (!i) return null;
        var r = i[0],
          o = i[1];
        if ("searchbot" === r) return new c();
        var l = o[1] && o[1].split(".").join("_").split("_").slice(0, 3);
        l
          ? l.length < 3 &&
            (l = s(
              s([], l, !0),
              (function (e) {
                for (var t = [], i = 0; i < e; i++) t.push("0");
                return t;
              })(3 - l.length),
              !0
            ))
          : (l = []);
        var p = l.join("."),
          g = (function (e) {
            for (var t = 0, i = d.length; t < i; t++) {
              var r = d[t],
                s = r[0];
              if (r[1].exec(e)) return s;
            }
            return null;
          })(e),
          f = h.exec(e);
        return f && f[1] ? new a(r, p, g, f[1]) : new n(r, p, g);
      }
    },
    42552: (e, t, i) => {
      i.d(t, { A: () => r });
      let r = (function (e) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        let t = new Uint8Array(256);
        for (let e = 0; e < t.length; e++) t[e] = 255;
        for (let i = 0; i < e.length; i++) {
          let r = e.charAt(i),
            s = r.charCodeAt(0);
          if (255 !== t[s]) throw TypeError(r + " is ambiguous");
          t[s] = i;
        }
        let i = e.length,
          r = e.charAt(0),
          s = Math.log(i) / Math.log(256),
          n = Math.log(256) / Math.log(i);
        function o(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          let n = 0,
            o = 0,
            a = 0;
          for (; e[n] === r; ) o++, n++;
          let c = ((e.length - n) * s + 1) >>> 0,
            l = new Uint8Array(c);
          for (; n < e.length; ) {
            let r = e.charCodeAt(n);
            if (r > 255) return;
            let s = t[r];
            if (255 === s) return;
            let o = 0;
            for (let e = c - 1; (0 !== s || o < a) && -1 !== e; e--, o++)
              (s += (i * l[e]) >>> 0),
                (l[e] = s % 256 >>> 0),
                (s = (s / 256) >>> 0);
            if (0 !== s) throw Error("Non-zero carry");
            (a = o), n++;
          }
          let h = c - a;
          for (; h !== c && 0 === l[h]; ) h++;
          let u = new Uint8Array(o + (c - h)),
            d = o;
          for (; h !== c; ) u[d++] = l[h++];
          return u;
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === t.length) return "";
            let s = 0,
              o = 0,
              a = 0,
              c = t.length;
            for (; a !== c && 0 === t[a]; ) a++, s++;
            let l = ((c - a) * n + 1) >>> 0,
              h = new Uint8Array(l);
            for (; a !== c; ) {
              let e = t[a],
                r = 0;
              for (let t = l - 1; (0 !== e || r < o) && -1 !== t; t--, r++)
                (e += (256 * h[t]) >>> 0),
                  (h[t] = e % i >>> 0),
                  (e = (e / i) >>> 0);
              if (0 !== e) throw Error("Non-zero carry");
              (o = r), a++;
            }
            let u = l - o;
            for (; u !== l && 0 === h[u]; ) u++;
            let d = r.repeat(s);
            for (; u < l; ++u) d += e.charAt(h[u]);
            return d;
          },
          decodeUnsafe: o,
          decode: function (e) {
            let t = o(e);
            if (t) return t;
            throw Error("Non-base" + i + " character");
          },
        };
      })("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
    },
    61947: (e, t, i) => {
      function r(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function s(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function n(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        r(e.outputLen), r(e.blockLen);
      }
      function o(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function a(e, t) {
        s(e);
        let i = t.outputLen;
        if (e.length < i)
          throw Error(
            "digestInto() expects output buffer of length at least " + i
          );
      }
      i.d(t, {
        CC: () => o,
        DO: () => s,
        Fe: () => r,
        Ht: () => a,
        sd: () => n,
      });
    },
    70441: (e, t, i) => {
      let r;
      i.d(t, { A: () => N });
      let s =
          /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
        n =
          /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
        o = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
      function a(e, t) {
        var i;
        return "__proto__" === e ||
          ("constructor" === e && t && "object" == typeof t && "prototype" in t)
          ? void ((i = e),
            console.warn(
              `[destr] Dropping "${i}" key to prevent prototype pollution.`
            ))
          : t;
      }
      function c(e, t = {}) {
        if ("string" != typeof e) return e;
        if ('"' === e[0] && '"' === e[e.length - 1] && -1 === e.indexOf("\\"))
          return e.slice(1, -1);
        let i = e.trim();
        if (i.length <= 9)
          switch (i.toLowerCase()) {
            case "true":
              return !0;
            case "false":
              return !1;
            case "undefined":
              return;
            case "null":
              return null;
            case "nan":
              return Number.NaN;
            case "infinity":
              return Number.POSITIVE_INFINITY;
            case "-infinity":
              return Number.NEGATIVE_INFINITY;
          }
        if (!o.test(e)) {
          if (t.strict) throw SyntaxError("[destr] Invalid JSON");
          return e;
        }
        try {
          if (s.test(e) || n.test(e)) {
            if (t.strict) throw Error("[destr] Possible prototype pollution");
            return JSON.parse(e, a);
          }
          return JSON.parse(e);
        } catch (i) {
          if (t.strict) throw i;
          return e;
        }
      }
      var l = i(44134).Buffer;
      function h(e, ...t) {
        try {
          var i;
          return (i = e(...t)) && "function" == typeof i.then
            ? i
            : Promise.resolve(i);
        } catch (e) {
          return Promise.reject(e);
        }
      }
      function u(e) {
        if (
          (function (e) {
            let t = typeof e;
            return null === e || ("object" !== t && "function" !== t);
          })(e)
        )
          return String(e);
        if (
          (function (e) {
            let t = Object.getPrototypeOf(e);
            return !t || t.isPrototypeOf(Object);
          })(e) ||
          Array.isArray(e)
        )
          return JSON.stringify(e);
        if ("function" == typeof e.toJSON) return u(e.toJSON());
        throw Error("[unstorage] Cannot stringify value!");
      }
      let d = "base64:";
      function p(e) {
        return (
          (e &&
            e
              .split("?")[0]
              ?.replace(/[/\\]/g, ":")
              .replace(/:+/g, ":")
              .replace(/^:|:$/g, "")) ||
          ""
        );
      }
      function g(e) {
        return (e = p(e)) ? e + ":" : "";
      }
      let f = () => {
        let e = new Map();
        return {
          name: "memory",
          getInstance: () => e,
          hasItem: (t) => e.has(t),
          getItem: (t) => e.get(t) ?? null,
          getItemRaw: (t) => e.get(t) ?? null,
          setItem(t, i) {
            e.set(t, i);
          },
          setItemRaw(t, i) {
            e.set(t, i);
          },
          removeItem(t) {
            e.delete(t);
          },
          getKeys: () => [...e.keys()],
          clear() {
            e.clear();
          },
          dispose() {
            e.clear();
          },
        };
      };
      function y(e, t, i) {
        return e.watch ? e.watch((e, r) => t(e, i + r)) : () => {};
      }
      async function m(e) {
        "function" == typeof e.dispose && (await h(e.dispose));
      }
      function b(e) {
        return new Promise((t, i) => {
          (e.oncomplete = e.onsuccess = () => t(e.result)),
            (e.onabort = e.onerror = () => i(e.error));
        });
      }
      function w(e, t) {
        let i,
          r = () => {
            if (i) return i;
            let r = indexedDB.open(e);
            return (
              (r.onupgradeneeded = () => r.result.createObjectStore(t)),
              (i = b(r)).then(
                (e) => {
                  e.onclose = () => (i = void 0);
                },
                () => {}
              ),
              i
            );
          };
        return (e, i) => r().then((r) => i(r.transaction(t, e).objectStore(t)));
      }
      function v() {
        return r || (r = w("keyval-store", "keyval")), r;
      }
      function E(e, t = v()) {
        return t("readonly", (t) => b(t.get(e)));
      }
      var I = i(71075),
        P = (e = {}) => {
          let t,
            i = e.base && e.base.length > 0 ? `${e.base}:` : "",
            r = (e) => i + e;
          return (
            e.dbName && e.storeName && (t = w(e.dbName, e.storeName)),
            {
              name: "idb-keyval",
              options: e,
              hasItem: async (e) => !(typeof (await E(r(e), t)) > "u"),
              getItem: async (e) => (await E(r(e), t)) ?? null,
              setItem: (e, i) =>
                (function (e, t, i = v()) {
                  return i("readwrite", (i) => (i.put(t, e), b(i.transaction)));
                })(r(e), i, t),
              removeItem: (e) =>
                (function (e, t = v()) {
                  return t("readwrite", (t) => (t.delete(e), b(t.transaction)));
                })(r(e), t),
              getKeys: () =>
                (function (e = v()) {
                  return e("readonly", (e) => {
                    var t, i;
                    if (e.getAllKeys) return b(e.getAllKeys());
                    let r = [];
                    return ((t = e),
                    (i = (e) => r.push(e.key)),
                    (t.openCursor().onsuccess = function () {
                      this.result && (i(this.result), this.result.continue());
                    }),
                    b(t.transaction)).then(() => r);
                  });
                })(t),
              clear: () =>
                (function (e = v()) {
                  return e("readwrite", (e) => (e.clear(), b(e.transaction)));
                })(t),
            }
          );
        };
      class _ {
        constructor() {
          this.indexedDb = (function (e = {}) {
            let t = {
                mounts: { "": e.driver || f() },
                mountpoints: [""],
                watching: !1,
                watchListeners: [],
                unwatch: {},
              },
              i = (e) => {
                for (let i of t.mountpoints)
                  if (e.startsWith(i))
                    return {
                      base: i,
                      relativeKey: e.slice(i.length),
                      driver: t.mounts[i],
                    };
                return { base: "", relativeKey: e, driver: t.mounts[""] };
              },
              r = (e, i) =>
                t.mountpoints
                  .filter((t) => t.startsWith(e) || (i && e.startsWith(t)))
                  .map((i) => ({
                    relativeBase:
                      e.length > i.length ? e.slice(i.length) : void 0,
                    mountpoint: i,
                    driver: t.mounts[i],
                  })),
              s = (e, i) => {
                if (t.watching)
                  for (let r of ((i = p(i)), t.watchListeners)) r(e, i);
              },
              n = async () => {
                if (!t.watching)
                  for (let e in ((t.watching = !0), t.mounts))
                    t.unwatch[e] = await y(t.mounts[e], s, e);
              },
              o = async () => {
                if (t.watching) {
                  for (let e in t.unwatch) await t.unwatch[e]();
                  (t.unwatch = {}), (t.watching = !1);
                }
              },
              a = (e, t, r) => {
                let s = new Map(),
                  n = (e) => {
                    let t = s.get(e.base);
                    return (
                      t ||
                        ((t = { driver: e.driver, base: e.base, items: [] }),
                        s.set(e.base, t)),
                      t
                    );
                  };
                for (let r of e) {
                  let e = "string" == typeof r,
                    s = p(e ? r : r.key),
                    o = e ? void 0 : r.value,
                    a = e || !r.options ? t : { ...t, ...r.options },
                    c = i(s);
                  n(c).items.push({
                    key: s,
                    value: o,
                    relativeKey: c.relativeKey,
                    options: a,
                  });
                }
                return Promise.all([...s.values()].map((e) => r(e))).then((e) =>
                  e.flat()
                );
              },
              b = {
                hasItem(e, t = {}) {
                  let { relativeKey: r, driver: s } = i((e = p(e)));
                  return h(s.hasItem, r, t);
                },
                getItem(e, t = {}) {
                  let { relativeKey: r, driver: s } = i((e = p(e)));
                  return h(s.getItem, r, t).then((e) => c(e));
                },
                getItems: (e, t = {}) =>
                  a(e, t, (e) =>
                    e.driver.getItems
                      ? h(
                          e.driver.getItems,
                          e.items.map((e) => ({
                            key: e.relativeKey,
                            options: e.options,
                          })),
                          t
                        ).then((t) =>
                          t.map((t) => ({
                            key: (function (...e) {
                              return p(e.join(":"));
                            })(e.base, t.key),
                            value: c(t.value),
                          }))
                        )
                      : Promise.all(
                          e.items.map((t) =>
                            h(e.driver.getItem, t.relativeKey, t.options).then(
                              (e) => ({ key: t.key, value: c(e) })
                            )
                          )
                        )
                  ),
                getItemRaw(e, t = {}) {
                  let { relativeKey: r, driver: s } = i((e = p(e)));
                  return s.getItemRaw
                    ? h(s.getItemRaw, r, t)
                    : h(s.getItem, r, t).then((e) => {
                        var t;
                        return "string" == typeof e && e.startsWith(d)
                          ? ((t = e.slice(d.length)),
                            globalThis.Buffer
                              ? l.from(t, "base64")
                              : Uint8Array.from(globalThis.atob(t), (e) =>
                                  e.codePointAt(0)
                                ))
                          : e;
                      });
                },
                async setItem(e, t, r = {}) {
                  if (void 0 === t) return b.removeItem(e);
                  let { relativeKey: n, driver: o } = i((e = p(e)));
                  o.setItem &&
                    (await h(o.setItem, n, u(t), r), o.watch || s("update", e));
                },
                async setItems(e, t) {
                  await a(e, t, async (e) => {
                    if (e.driver.setItems)
                      return h(
                        e.driver.setItems,
                        e.items.map((e) => ({
                          key: e.relativeKey,
                          value: u(e.value),
                          options: e.options,
                        })),
                        t
                      );
                    e.driver.setItem &&
                      (await Promise.all(
                        e.items.map((t) =>
                          h(
                            e.driver.setItem,
                            t.relativeKey,
                            u(t.value),
                            t.options
                          )
                        )
                      ));
                  });
                },
                async setItemRaw(e, t, r = {}) {
                  if (void 0 === t) return b.removeItem(e, r);
                  let { relativeKey: n, driver: o } = i((e = p(e)));
                  if (o.setItemRaw) await h(o.setItemRaw, n, t, r);
                  else {
                    var a;
                    if (!o.setItem) return;
                    await h(
                      o.setItem,
                      n,
                      "string" == typeof t
                        ? t
                        : d +
                            ((a = t),
                            globalThis.Buffer
                              ? l.from(a).toString("base64")
                              : globalThis.btoa(String.fromCodePoint(...a))),
                      r
                    );
                  }
                  o.watch || s("update", e);
                },
                async removeItem(e, t = {}) {
                  "boolean" == typeof t && (t = { removeMeta: t });
                  let { relativeKey: r, driver: n } = i((e = p(e)));
                  n.removeItem &&
                    (await h(n.removeItem, r, t),
                    (t.removeMeta || t.removeMata) &&
                      (await h(n.removeItem, r + "$", t)),
                    n.watch || s("remove", e));
                },
                async getMeta(e, t = {}) {
                  "boolean" == typeof t && (t = { nativeOnly: t });
                  let { relativeKey: r, driver: s } = i((e = p(e))),
                    n = Object.create(null);
                  if (
                    (s.getMeta && Object.assign(n, await h(s.getMeta, r, t)),
                    !t.nativeOnly)
                  ) {
                    let e = await h(s.getItem, r + "$", t).then((e) => c(e));
                    e &&
                      "object" == typeof e &&
                      ("string" == typeof e.atime &&
                        (e.atime = new Date(e.atime)),
                      "string" == typeof e.mtime &&
                        (e.mtime = new Date(e.mtime)),
                      Object.assign(n, e));
                  }
                  return n;
                },
                setMeta(e, t, i = {}) {
                  return this.setItem(e + "$", t, i);
                },
                removeMeta(e, t = {}) {
                  return this.removeItem(e + "$", t);
                },
                async getKeys(e, t = {}) {
                  let i = r((e = g(e)), !0),
                    s = [],
                    n = [],
                    o = !0;
                  for (let e of i) {
                    for (let i of (e.driver.flags?.maxDepth || (o = !1),
                    await h(e.driver.getKeys, e.relativeBase, t))) {
                      let t = e.mountpoint + p(i);
                      s.some((e) => t.startsWith(e)) || n.push(t);
                    }
                    s = [
                      e.mountpoint,
                      ...s.filter((t) => !t.startsWith(e.mountpoint)),
                    ];
                  }
                  let a = void 0 !== t.maxDepth && !o;
                  return n.filter((i) => {
                    var r;
                    return (
                      (!a ||
                        (function (e, t) {
                          if (void 0 === t) return !0;
                          let i = 0,
                            r = e.indexOf(":");
                          for (; r > -1; ) i++, (r = e.indexOf(":", r + 1));
                          return i <= t;
                        })(i, t.maxDepth)) &&
                      ((r = e)
                        ? i.startsWith(r) && "$" !== i[i.length - 1]
                        : "$" !== i[i.length - 1])
                    );
                  });
                },
                async clear(e, t = {}) {
                  (e = g(e)),
                    await Promise.all(
                      r(e, !1).map(async (e) =>
                        e.driver.clear
                          ? h(e.driver.clear, e.relativeBase, t)
                          : e.driver.removeItem
                          ? Promise.all(
                              (
                                await e.driver.getKeys(e.relativeBase || "", t)
                              ).map((i) => e.driver.removeItem(i, t))
                            )
                          : void 0
                      )
                    );
                },
                async dispose() {
                  await Promise.all(Object.values(t.mounts).map((e) => m(e)));
                },
                watch: async (e) => (
                  await n(),
                  t.watchListeners.push(e),
                  async () => {
                    (t.watchListeners = t.watchListeners.filter(
                      (t) => t !== e
                    )),
                      0 === t.watchListeners.length && (await o());
                  }
                ),
                async unwatch() {
                  (t.watchListeners = []), await o();
                },
                mount(e, i) {
                  if ((e = g(e)) && t.mounts[e])
                    throw Error(`already mounted at ${e}`);
                  return (
                    e &&
                      (t.mountpoints.push(e),
                      t.mountpoints.sort((e, t) => t.length - e.length)),
                    (t.mounts[e] = i),
                    t.watching &&
                      Promise.resolve(y(i, s, e))
                        .then((i) => {
                          t.unwatch[e] = i;
                        })
                        .catch(console.error),
                    b
                  );
                },
                async unmount(e, i = !0) {
                  (e = g(e)) &&
                    t.mounts[e] &&
                    (t.watching &&
                      e in t.unwatch &&
                      (t.unwatch[e]?.(), delete t.unwatch[e]),
                    i && (await m(t.mounts[e])),
                    (t.mountpoints = t.mountpoints.filter((t) => t !== e)),
                    delete t.mounts[e]);
                },
                getMount(e = "") {
                  let t = i((e = p(e) + ":"));
                  return { driver: t.driver, base: t.base };
                },
                getMounts: (e = "", t = {}) =>
                  r((e = p(e)), t.parents).map((e) => ({
                    driver: e.driver,
                    base: e.mountpoint,
                  })),
                keys: (e, t = {}) => b.getKeys(e, t),
                get: (e, t = {}) => b.getItem(e, t),
                set: (e, t, i = {}) => b.setItem(e, t, i),
                has: (e, t = {}) => b.hasItem(e, t),
                del: (e, t = {}) => b.removeItem(e, t),
                remove: (e, t = {}) => b.removeItem(e, t),
              };
            return b;
          })({
            driver: P({
              dbName: "WALLET_CONNECT_V2_INDEXED_DB",
              storeName: "keyvaluestorage",
            }),
          });
        }
        async getKeys() {
          return this.indexedDb.getKeys();
        }
        async getEntries() {
          return (
            await this.indexedDb.getItems(await this.indexedDb.getKeys())
          ).map((e) => [e.key, e.value]);
        }
        async getItem(e) {
          let t = await this.indexedDb.getItem(e);
          if (null !== t) return t;
        }
        async setItem(e, t) {
          await this.indexedDb.setItem(e, (0, I.h)(t));
        }
        async removeItem(e) {
          await this.indexedDb.removeItem(e);
        }
      }
      var x =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof i.g
            ? i.g
            : "u" > typeof self
            ? self
            : {},
        S = { exports: {} };
      function O(e) {
        var t;
        return [e[0], (0, I.j)(null != (t = e[1]) ? t : "")];
      }
      !(function () {
        function e() {}
        (e.prototype.getItem = function (e) {
          return this.hasOwnProperty(e) ? String(this[e]) : null;
        }),
          (e.prototype.setItem = function (e, t) {
            this[e] = String(t);
          }),
          (e.prototype.removeItem = function (e) {
            delete this[e];
          }),
          (e.prototype.clear = function () {
            let e = this;
            Object.keys(e).forEach(function (t) {
              (e[t] = void 0), delete e[t];
            });
          }),
          (e.prototype.key = function (e) {
            return (e = e || 0), Object.keys(this)[e];
          }),
          e.prototype.__defineGetter__("length", function () {
            return Object.keys(this).length;
          }),
          "u" > typeof x && x.localStorage
            ? (S.exports = x.localStorage)
            : "u" > typeof window && window.localStorage
            ? (S.exports = window.localStorage)
            : (S.exports = new e());
      })();
      class A {
        constructor() {
          this.localStorage = S.exports;
        }
        async getKeys() {
          return Object.keys(this.localStorage);
        }
        async getEntries() {
          return Object.entries(this.localStorage).map(O);
        }
        async getItem(e) {
          let t = this.localStorage.getItem(e);
          if (null !== t) return (0, I.j)(t);
        }
        async setItem(e, t) {
          this.localStorage.setItem(e, (0, I.h)(t));
        }
        async removeItem(e) {
          this.localStorage.removeItem(e);
        }
      }
      let C = async (e, t, i) => {
          let r = "wc_storage_version",
            s = await t.getItem(r);
          if (s && s >= 1) return void i(t);
          let n = await e.getKeys();
          if (!n.length) return void i(t);
          let o = [];
          for (; n.length; ) {
            let i = n.shift();
            if (!i) continue;
            let r = i.toLowerCase();
            if (
              r.includes("wc@") ||
              r.includes("walletconnect") ||
              r.includes("wc_") ||
              r.includes("wallet_connect")
            ) {
              let r = await e.getItem(i);
              await t.setItem(i, r), o.push(i);
            }
          }
          await t.setItem(r, 1), i(t), R(e, o);
        },
        R = async (e, t) => {
          t.length &&
            t.forEach(async (t) => {
              await e.removeItem(t);
            });
        };
      class N {
        constructor() {
          (this.initialized = !1),
            (this.setInitialized = (e) => {
              (this.storage = e), (this.initialized = !0);
            });
          let e = new A();
          this.storage = e;
          try {
            let t = new _();
            C(e, t, this.setInitialized);
          } catch {
            this.initialized = !0;
          }
        }
        async getKeys() {
          return await this.initialize(), this.storage.getKeys();
        }
        async getEntries() {
          return await this.initialize(), this.storage.getEntries();
        }
        async getItem(e) {
          return await this.initialize(), this.storage.getItem(e);
        }
        async setItem(e, t) {
          return await this.initialize(), this.storage.setItem(e, t);
        }
        async removeItem(e) {
          return await this.initialize(), this.storage.removeItem(e);
        }
        async initialize() {
          this.initialized ||
            (await new Promise((e) => {
              let t = setInterval(() => {
                this.initialized && (clearInterval(t), e());
              }, 20);
            }));
        }
      }
    },
    76589: (e, t, i) => {
      i.d(t, { H: () => r });
      class r {}
    },
    90628: (e, t, i) => {
      i.d(t, { A: () => l });
      var r = i(40662),
        s = i(71075),
        n = i(75086);
      let o = () =>
          "u" > typeof WebSocket ||
          ("u" > typeof i.g && "u" > typeof i.g.WebSocket) ||
          ("u" > typeof window && "u" > typeof window.WebSocket) ||
          ("u" > typeof self && "u" > typeof self.WebSocket),
        a = (e) => e.split("?")[0],
        c =
          "u" > typeof WebSocket
            ? WebSocket
            : "u" > typeof i.g && "u" > typeof i.g.WebSocket
            ? i.g.WebSocket
            : "u" > typeof window && "u" > typeof window.WebSocket
            ? window.WebSocket
            : "u" > typeof self && "u" > typeof self.WebSocket
            ? self.WebSocket
            : i(20294);
      class l {
        constructor(e) {
          if (
            ((this.url = e),
            (this.events = new r.EventEmitter()),
            (this.registering = !1),
            !(0, n.isWsUrl)(e))
          )
            throw Error(
              `Provided URL is not compatible with WebSocket connection: ${e}`
            );
          this.url = e;
        }
        get connected() {
          return "u" > typeof this.socket;
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open(e = this.url) {
          await this.register(e);
        }
        async close() {
          return new Promise((e, t) => {
            if (typeof this.socket > "u")
              return void t(Error("Connection already closed"));
            (this.socket.onclose = (t) => {
              this.onClose(t), e();
            }),
              this.socket.close();
          });
        }
        async send(e) {
          typeof this.socket > "u" && (this.socket = await this.register());
          try {
            this.socket.send((0, s.h)(e));
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        register(e = this.url) {
          if (!(0, n.isWsUrl)(e))
            throw Error(
              `Provided URL is not compatible with WebSocket connection: ${e}`
            );
          if (this.registering) {
            let e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= e ||
                this.events.listenerCount("open") >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once("register_error", (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once("open", () => {
                    if ((this.resetMaxListeners(), typeof this.socket > "u"))
                      return t(
                        Error("WebSocket connection is missing or invalid")
                      );
                    e(this.socket);
                  });
              })
            );
          }
          return (
            (this.url = e),
            (this.registering = !0),
            new Promise((t, i) => {
              let r = (0, n.isReactNative)()
                  ? void 0
                  : { rejectUnauthorized: !(0, n.isLocalhostUrl)(e) },
                s = new c(e, [], r);
              o()
                ? (s.onerror = (e) => {
                    i(this.emitError(e.error));
                  })
                : s.on("error", (e) => {
                    i(this.emitError(e));
                  }),
                (s.onopen = () => {
                  this.onOpen(s), t(s);
                });
            })
          );
        }
        onOpen(e) {
          (e.onmessage = (e) => this.onPayload(e)),
            (e.onclose = (e) => this.onClose(e)),
            (this.socket = e),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose(e) {
          (this.socket = void 0),
            (this.registering = !1),
            this.events.emit("close", e);
        }
        onPayload(e) {
          if (typeof e.data > "u") return;
          let t = "string" == typeof e.data ? (0, s.j)(e.data) : e.data;
          this.events.emit("payload", t);
        }
        onError(e, t) {
          let i = this.parseError(t),
            r = i.message || i.toString(),
            s = (0, n.formatJsonRpcError)(e, r);
          this.events.emit("payload", s);
        }
        parseError(e, t = this.url) {
          return (0, n.parseConnectionError)(e, a(t), "WS");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
        emitError(e) {
          let t = this.parseError(
            Error(
              e?.message ||
                `WebSocket connection failed for host: ${a(this.url)}`
            )
          );
          return this.events.emit("register_error", t), t;
        }
      }
    },
    97061: (e, t, i) => {
      i.d(t, { VH: () => l, li: () => c });
      var r = i(40662),
        s = i(89101),
        n = i(76589);
      class o extends n.H {
        constructor(e) {
          super();
        }
      }
      let a = s.FIVE_SECONDS,
        c = { pulse: "heartbeat_pulse" };
      class l extends o {
        constructor(e) {
          super(e),
            (this.events = new r.EventEmitter()),
            (this.interval = a),
            (this.interval = e?.interval || a);
        }
        static async init(e) {
          let t = new l(e);
          return await t.init(), t;
        }
        async init() {
          await this.initialize();
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async initialize() {
          this.intervalRef = setInterval(
            () => this.pulse(),
            (0, s.toMiliseconds)(this.interval)
          );
        }
        pulse() {
          this.events.emit(c.pulse);
        }
      }
    },
  },
]);
