(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5716],
  {
    771: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                (!i ||
                  ("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(t, n) ||
                r(t, e, n);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(n(1581), t),
        i(n(39419), t),
        i(n(4863), t),
        i(n(9260), t),
        i(n(45491), t);
    },
    1581: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SolanaSignAndSendTransaction = void 0),
        (t.SolanaSignAndSendTransaction = "solana:signAndSendTransaction");
    },
    4062: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SOLANA_CHAINS =
          t.SOLANA_LOCALNET_CHAIN =
          t.SOLANA_TESTNET_CHAIN =
          t.SOLANA_DEVNET_CHAIN =
          t.SOLANA_MAINNET_CHAIN =
            void 0),
        (t.isSolanaChain = function (e) {
          return t.SOLANA_CHAINS.includes(e);
        }),
        (t.SOLANA_MAINNET_CHAIN = "solana:mainnet"),
        (t.SOLANA_DEVNET_CHAIN = "solana:devnet"),
        (t.SOLANA_TESTNET_CHAIN = "solana:testnet"),
        (t.SOLANA_LOCALNET_CHAIN = "solana:localnet"),
        (t.SOLANA_CHAINS = [
          t.SOLANA_MAINNET_CHAIN,
          t.SOLANA_DEVNET_CHAIN,
          t.SOLANA_TESTNET_CHAIN,
          t.SOLANA_LOCALNET_CHAIN,
        ]);
    },
    4863: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SolanaSignMessage = void 0),
        (t.SolanaSignMessage = "solana:signMessage");
    },
    5068: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha384 =
          t.sha512_256 =
          t.sha512_224 =
          t.sha512 =
          t.SHA384 =
          t.SHA512_256 =
          t.SHA512_224 =
          t.SHA512 =
            void 0);
      let r = n(40622),
        i = n(52136),
        o = n(12315),
        [a, s] = i.default.split(
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
        l = new Uint32Array(80),
        c = new Uint32Array(80);
      class d extends r.HashMD {
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
            Bh: n,
            Bl: r,
            Ch: i,
            Cl: o,
            Dh: a,
            Dl: s,
            Eh: l,
            El: c,
            Fh: d,
            Fl: u,
            Gh: f,
            Gl: h,
            Hh: p,
            Hl: g,
          } = this;
          return [e, t, n, r, i, o, a, s, l, c, d, u, f, h, p, g];
        }
        set(e, t, n, r, i, o, a, s, l, c, d, u, f, h, p, g) {
          (this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | n),
            (this.Bl = 0 | r),
            (this.Ch = 0 | i),
            (this.Cl = 0 | o),
            (this.Dh = 0 | a),
            (this.Dl = 0 | s),
            (this.Eh = 0 | l),
            (this.El = 0 | c),
            (this.Fh = 0 | d),
            (this.Fl = 0 | u),
            (this.Gh = 0 | f),
            (this.Gl = 0 | h),
            (this.Hh = 0 | p),
            (this.Hl = 0 | g);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4)
            (l[n] = e.getUint32(t)), (c[n] = e.getUint32((t += 4)));
          for (let e = 16; e < 80; e++) {
            let t = 0 | l[e - 15],
              n = 0 | c[e - 15],
              r =
                i.default.rotrSH(t, n, 1) ^
                i.default.rotrSH(t, n, 8) ^
                i.default.shrSH(t, n, 7),
              o =
                i.default.rotrSL(t, n, 1) ^
                i.default.rotrSL(t, n, 8) ^
                i.default.shrSL(t, n, 7),
              a = 0 | l[e - 2],
              s = 0 | c[e - 2],
              d =
                i.default.rotrSH(a, s, 19) ^
                i.default.rotrBH(a, s, 61) ^
                i.default.shrSH(a, s, 6),
              u =
                i.default.rotrSL(a, s, 19) ^
                i.default.rotrBL(a, s, 61) ^
                i.default.shrSL(a, s, 6),
              f = i.default.add4L(o, u, c[e - 7], c[e - 16]),
              h = i.default.add4H(f, r, d, l[e - 7], l[e - 16]);
            (l[e] = 0 | h), (c[e] = 0 | f);
          }
          let {
            Ah: n,
            Al: r,
            Bh: o,
            Bl: d,
            Ch: u,
            Cl: f,
            Dh: h,
            Dl: p,
            Eh: g,
            El: m,
            Fh: y,
            Fl: w,
            Gh: v,
            Gl: b,
            Hh: E,
            Hl: x,
          } = this;
          for (let e = 0; e < 80; e++) {
            let t =
                i.default.rotrSH(g, m, 14) ^
                i.default.rotrSH(g, m, 18) ^
                i.default.rotrBH(g, m, 41),
              S =
                i.default.rotrSL(g, m, 14) ^
                i.default.rotrSL(g, m, 18) ^
                i.default.rotrBL(g, m, 41),
              A = (g & y) ^ (~g & v),
              T = (m & w) ^ (~m & b),
              I = i.default.add5L(x, S, T, s[e], c[e]),
              _ = i.default.add5H(I, E, t, A, a[e], l[e]),
              O = 0 | I,
              B =
                i.default.rotrSH(n, r, 28) ^
                i.default.rotrBH(n, r, 34) ^
                i.default.rotrBH(n, r, 39),
              N =
                i.default.rotrSL(n, r, 28) ^
                i.default.rotrBL(n, r, 34) ^
                i.default.rotrBL(n, r, 39),
              C = (n & o) ^ (n & u) ^ (o & u),
              M = (r & d) ^ (r & f) ^ (d & f);
            (E = 0 | v),
              (x = 0 | b),
              (v = 0 | y),
              (b = 0 | w),
              (y = 0 | g),
              (w = 0 | m),
              ({ h: g, l: m } = i.default.add(0 | h, 0 | p, 0 | _, 0 | O)),
              (h = 0 | u),
              (p = 0 | f),
              (u = 0 | o),
              (f = 0 | d),
              (o = 0 | n),
              (d = 0 | r);
            let L = i.default.add3L(O, N, M);
            (n = i.default.add3H(L, _, B, C)), (r = 0 | L);
          }
          ({ h: n, l: r } = i.default.add(
            0 | this.Ah,
            0 | this.Al,
            0 | n,
            0 | r
          )),
            ({ h: o, l: d } = i.default.add(
              0 | this.Bh,
              0 | this.Bl,
              0 | o,
              0 | d
            )),
            ({ h: u, l: f } = i.default.add(
              0 | this.Ch,
              0 | this.Cl,
              0 | u,
              0 | f
            )),
            ({ h: h, l: p } = i.default.add(
              0 | this.Dh,
              0 | this.Dl,
              0 | h,
              0 | p
            )),
            ({ h: g, l: m } = i.default.add(
              0 | this.Eh,
              0 | this.El,
              0 | g,
              0 | m
            )),
            ({ h: y, l: w } = i.default.add(
              0 | this.Fh,
              0 | this.Fl,
              0 | y,
              0 | w
            )),
            ({ h: v, l: b } = i.default.add(
              0 | this.Gh,
              0 | this.Gl,
              0 | v,
              0 | b
            )),
            ({ h: E, l: x } = i.default.add(
              0 | this.Hh,
              0 | this.Hl,
              0 | E,
              0 | x
            )),
            this.set(n, r, o, d, u, f, h, p, g, m, y, w, v, b, E, x);
        }
        roundClean() {
          l.fill(0), c.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      t.SHA512 = d;
      class u extends d {
        constructor() {
          super(),
            (this.Ah = -0x73c2c838),
            (this.Al = 0x19544da2),
            (this.Bh = 0x73e19966),
            (this.Bl = -0x76232b2a),
            (this.Ch = 0x1dfab7ae),
            (this.Cl = 0x32ff9c82),
            (this.Dh = 0x679dd514),
            (this.Dl = 0x582f9fcf),
            (this.Eh = 0xf6d2b69),
            (this.El = 0x7bd44da8),
            (this.Fh = 0x77e36f73),
            (this.Fl = 0x4c48942),
            (this.Gh = 0x3f9d85a8),
            (this.Gl = 0x6a1d36c8),
            (this.Hh = 0x1112e6ad),
            (this.Hl = -0x6e296d5f),
            (this.outputLen = 28);
        }
      }
      t.SHA512_224 = u;
      class f extends d {
        constructor() {
          super(),
            (this.Ah = 0x22312194),
            (this.Al = -0x3d408d4),
            (this.Bh = -0x60aaa05d),
            (this.Bl = -0x37b39b3e),
            (this.Ch = 0x2393b86b),
            (this.Cl = 0x6f53b151),
            (this.Dh = -0x69c788e7),
            (this.Dl = 0x5940eabd),
            (this.Eh = -0x69d7c11e),
            (this.El = -0x5771001d),
            (this.Fh = -0x41a1e1db),
            (this.Fl = 0x53863992),
            (this.Gh = 0x2b0199fc),
            (this.Gl = 0x2c85b8aa),
            (this.Hh = 0xeb72ddc),
            (this.Hl = -0x7e3ad35e),
            (this.outputLen = 32);
        }
      }
      t.SHA512_256 = f;
      class h extends d {
        constructor() {
          super(),
            (this.Ah = -0x344462a3),
            (this.Al = -0x3efa6128),
            (this.Bh = 0x629a292a),
            (this.Bl = 0x367cd507),
            (this.Ch = -0x6ea6fea6),
            (this.Cl = 0x3070dd17),
            (this.Dh = 0x152fecd8),
            (this.Dl = -0x8f1a6c7),
            (this.Eh = 0x67332667),
            (this.El = -4191439),
            (this.Fh = -0x714bb579),
            (this.Fl = 0x68581511),
            (this.Gh = -0x24f3d1f3),
            (this.Gl = 0x64f98fa7),
            (this.Hh = 0x47b5481d),
            (this.Hl = -0x4105b05c),
            (this.outputLen = 48);
        }
      }
      (t.SHA384 = h),
        (t.sha512 = (0, o.wrapConstructor)(() => new d())),
        (t.sha512_224 = (0, o.wrapConstructor)(() => new u())),
        (t.sha512_256 = (0, o.wrapConstructor)(() => new f())),
        (t.sha384 = (0, o.wrapConstructor)(() => new h()));
    },
    5952: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.expand_message_xmd = l),
        (t.expand_message_xof = c),
        (t.hash_to_field = d),
        (t.isogenyMap = function (e, t) {
          let n = t.map((e) => Array.from(e).reverse());
          return (t, r) => {
            let [i, o, a, s] = n.map((n) =>
              n.reduce((n, r) => e.add(e.mul(n, t), r))
            );
            return (
              (t = e.div(i, o)), (r = e.mul(r, e.div(a, s))), { x: t, y: r }
            );
          };
        }),
        (t.createHasher = function (e, t, n) {
          if ("function" != typeof t)
            throw Error("mapToCurve() must be defined");
          return {
            hashToCurve(r, i) {
              let o = d(r, 2, { ...n, DST: n.DST, ...i }),
                a = e.fromAffine(t(o[0])),
                s = e.fromAffine(t(o[1])),
                l = a.add(s).clearCofactor();
              return l.assertValidity(), l;
            },
            encodeToCurve(r, i) {
              let o = d(r, 1, { ...n, DST: n.encodeDST, ...i }),
                a = e.fromAffine(t(o[0])).clearCofactor();
              return a.assertValidity(), a;
            },
            mapToCurve(n) {
              if (!Array.isArray(n))
                throw Error("mapToCurve: expected array of bigints");
              for (let e of n)
                if ("bigint" != typeof e)
                  throw Error("mapToCurve: expected array of bigints");
              let r = e.fromAffine(t(n)).clearCofactor();
              return r.assertValidity(), r;
            },
          };
        });
      let r = n(43286),
        i = n(44045),
        o = i.bytesToNumberBE;
      function a(e, t) {
        if ((s(e), s(t), e < 0 || e >= 1 << (8 * t)))
          throw Error("invalid I2OSP input: " + e);
        let n = Array.from({ length: t }).fill(0);
        for (let r = t - 1; r >= 0; r--) (n[r] = 255 & e), (e >>>= 8);
        return new Uint8Array(n);
      }
      function s(e) {
        if (!Number.isSafeInteger(e)) throw Error("number expected");
      }
      function l(e, t, n, r) {
        (0, i.abytes)(e),
          (0, i.abytes)(t),
          s(n),
          t.length > 255 &&
            (t = r(
              (0, i.concatBytes)((0, i.utf8ToBytes)("H2C-OVERSIZE-DST-"), t)
            ));
        let { outputLen: o, blockLen: l } = r,
          c = Math.ceil(n / o);
        if (n > 65535 || c > 255)
          throw Error("expand_message_xmd: invalid lenInBytes");
        let d = (0, i.concatBytes)(t, a(t.length, 1)),
          u = a(0, l),
          f = a(n, 2),
          h = Array(c),
          p = r((0, i.concatBytes)(u, e, f, a(0, 1), d));
        h[0] = r((0, i.concatBytes)(p, a(1, 1), d));
        for (let e = 1; e <= c; e++) {
          let t = [
            (function (e, t) {
              let n = new Uint8Array(e.length);
              for (let r = 0; r < e.length; r++) n[r] = e[r] ^ t[r];
              return n;
            })(p, h[e - 1]),
            a(e + 1, 1),
            d,
          ];
          h[e] = r((0, i.concatBytes)(...t));
        }
        return (0, i.concatBytes)(...h).slice(0, n);
      }
      function c(e, t, n, r, o) {
        if (((0, i.abytes)(e), (0, i.abytes)(t), s(n), t.length > 255)) {
          let e = Math.ceil((2 * r) / 8);
          t = o
            .create({ dkLen: e })
            .update((0, i.utf8ToBytes)("H2C-OVERSIZE-DST-"))
            .update(t)
            .digest();
        }
        if (n > 65535 || t.length > 255)
          throw Error("expand_message_xof: invalid lenInBytes");
        return o
          .create({ dkLen: n })
          .update(e)
          .update(a(n, 2))
          .update(t)
          .update(a(t.length, 1))
          .digest();
      }
      function d(e, t, n) {
        let a;
        (0, i.validateObject)(n, {
          DST: "stringOrUint8Array",
          p: "bigint",
          m: "isSafeInteger",
          k: "isSafeInteger",
          hash: "hash",
        });
        let { p: d, k: u, m: f, hash: h, expand: p, DST: g } = n;
        (0, i.abytes)(e), s(t);
        let m = "string" == typeof g ? (0, i.utf8ToBytes)(g) : g,
          y = Math.ceil((d.toString(2).length + u) / 8),
          w = t * f * y;
        if ("xmd" === p) a = l(e, m, w, h);
        else if ("xof" === p) a = c(e, m, w, u, h);
        else if ("_internal_pass" === p) a = e;
        else throw Error('expand must be "xmd" or "xof"');
        let v = Array(t);
        for (let e = 0; e < t; e++) {
          let t = Array(f);
          for (let n = 0; n < f; n++) {
            let i = y * (n + e * f),
              s = a.subarray(i, i + y);
            t[n] = (0, r.mod)(o(s), d);
          }
          v[e] = t;
        }
        return v;
      }
    },
    6068: (e, t, n) => {
      "use strict";
      function r(e) {
        return "version" in e;
      }
      n.d(t, { Y: () => r });
    },
    7586: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => eh });
      var r = n(98693),
        i = n(19989);
      let o = BigInt(0),
        a = BigInt(1);
      function s(e, t) {
        if ("boolean" != typeof t)
          throw Error(e + " boolean expected, got " + t);
      }
      function l(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return "" === e ? o : BigInt("0x" + e);
      }
      function c(e) {
        return (0, i.DO)(e), l((0, i.My)(Uint8Array.from(e).reverse()));
      }
      function d(e, t) {
        return (0, i.aT)(e.toString(16).padStart(2 * t, "0"));
      }
      function u(e, t) {
        return d(e, t).reverse();
      }
      function f(e, t, n) {
        let r;
        if ("string" == typeof t)
          try {
            r = (0, i.aT)(t);
          } catch (t) {
            throw Error(e + " must be hex string or Uint8Array, cause: " + t);
          }
        else if ((0, i.aY)(t)) r = Uint8Array.from(t);
        else throw Error(e + " must be hex string or Uint8Array");
        let o = r.length;
        if ("number" == typeof n && o !== n)
          throw Error(e + " of length " + n + " expected, got " + o);
        return r;
      }
      let h = (e) => "bigint" == typeof e && o <= e;
      function p(e, t, n, r) {
        if (!(h(t) && h(n) && h(r)) || !(n <= t) || !(t < r))
          throw Error(
            "expected valid " + e + ": " + n + " <= n < " + r + ", got " + t
          );
      }
      let g = (e) => (a << BigInt(e)) - a;
      function m(e, t, n = {}) {
        if (!e || "object" != typeof e)
          throw Error("expected valid options object");
        function r(t, n, r) {
          let i = e[t];
          if (r && void 0 === i) return;
          let o = typeof i;
          if (o !== n || null === i)
            throw Error(`param "${t}" is invalid: expected ${n}, got ${o}`);
        }
        Object.entries(t).forEach(([e, t]) => r(e, t, !1)),
          Object.entries(n).forEach(([e, t]) => r(e, t, !0));
      }
      function y(e) {
        let t = new WeakMap();
        return (n, ...r) => {
          let i = t.get(n);
          if (void 0 !== i) return i;
          let o = e(n, ...r);
          return t.set(n, o), o;
        };
      }
      let w = BigInt(0),
        v = BigInt(1),
        b = BigInt(2),
        E = BigInt(3),
        x = BigInt(4),
        S = BigInt(5),
        A = BigInt(8);
      function T(e, t) {
        let n = e % t;
        return n >= w ? n : t + n;
      }
      function I(e, t, n) {
        let r = e;
        for (; t-- > w; ) (r *= r), (r %= n);
        return r;
      }
      function _(e, t) {
        if (e === w) throw Error("invert: expected non-zero number");
        if (t <= w) throw Error("invert: expected positive modulus, got " + t);
        let n = T(e, t),
          r = t,
          i = w,
          o = v,
          a = v,
          s = w;
        for (; n !== w; ) {
          let e = r / n,
            t = r % n,
            l = i - a * e,
            c = o - s * e;
          (r = n), (n = t), (i = a), (o = s), (a = l), (s = c);
        }
        if (r !== v) throw Error("invert: does not exist");
        return T(i, t);
      }
      function O(e, t) {
        let n = (e.ORDER + v) / x,
          r = e.pow(t, n);
        if (!e.eql(e.sqr(r), t)) throw Error("Cannot find square root");
        return r;
      }
      function B(e, t) {
        let n = (e.ORDER - S) / A,
          r = e.mul(t, b),
          i = e.pow(r, n),
          o = e.mul(t, i),
          a = e.mul(e.mul(o, b), i),
          s = e.mul(o, e.sub(a, e.ONE));
        if (!e.eql(e.sqr(s), t)) throw Error("Cannot find square root");
        return s;
      }
      let N = (e, t) => (T(e, t) & v) === v,
        C = [
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
      function M(e, t, n = !1) {
        let r = Array(t.length).fill(n ? e.ZERO : void 0),
          i = t.reduce(
            (t, n, i) => (e.is0(n) ? t : ((r[i] = t), e.mul(t, n))),
            e.ONE
          ),
          o = e.inv(i);
        return (
          t.reduceRight(
            (t, n, i) =>
              e.is0(n) ? t : ((r[i] = e.mul(t, r[i])), e.mul(t, n)),
            o
          ),
          r
        );
      }
      function L(e, t) {
        let n = (e.ORDER - v) / b,
          r = e.pow(t, n),
          i = e.eql(r, e.ONE),
          o = e.eql(r, e.ZERO),
          a = e.eql(r, e.neg(e.ONE));
        if (!i && !o && !a) throw Error("invalid Legendre symbol result");
        return i ? 1 : o ? 0 : -1;
      }
      function R(e, t, n = !1, r = {}) {
        let o, a, s;
        if (e <= w) throw Error("invalid field: expected ORDER > 0, got " + e);
        if ("object" == typeof t && null != t) {
          if (r.sqrt || n) throw Error("cannot specify opts in two arguments");
          t.BITS && (a = t.BITS),
            t.sqrt && (s = t.sqrt),
            "boolean" == typeof t.isLE && (n = t.isLE);
        } else "number" == typeof t && (a = t), r.sqrt && (s = r.sqrt);
        let { nBitLength: f, nByteLength: h } = (function (e, t) {
          void 0 !== t && (0, i.Fe)(t);
          let n = void 0 !== t ? t : e.toString(2).length,
            r = Math.ceil(n / 8);
          return { nBitLength: n, nByteLength: r };
        })(e, a);
        if (h > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let p = Object.freeze({
          ORDER: e,
          isLE: n,
          BITS: f,
          BYTES: h,
          MASK: g(f),
          ZERO: w,
          ONE: v,
          create: (t) => T(t, e),
          isValid: (t) => {
            if ("bigint" != typeof t)
              throw Error(
                "invalid field element: expected bigint, got " + typeof t
              );
            return w <= t && t < e;
          },
          is0: (e) => e === w,
          isValidNot0: (e) => !p.is0(e) && p.isValid(e),
          isOdd: (e) => (e & v) === v,
          neg: (t) => T(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => T(t * t, e),
          add: (t, n) => T(t + n, e),
          sub: (t, n) => T(t - n, e),
          mul: (t, n) => T(t * n, e),
          pow: (e, t) =>
            (function (e, t, n) {
              if (n < w) throw Error("invalid exponent, negatives unsupported");
              if (n === w) return e.ONE;
              if (n === v) return t;
              let r = e.ONE,
                i = t;
              for (; n > w; )
                n & v && (r = e.mul(r, i)), (i = e.sqr(i)), (n >>= v);
              return r;
            })(p, e, t),
          div: (t, n) => T(t * _(n, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => _(t, e),
          sqrt:
            s ||
            ((t) => (
              o ||
                (o =
                  e % x === E
                    ? O
                    : e % A === S
                    ? B
                    : (function (e) {
                        if (e < BigInt(3))
                          throw Error("sqrt is not defined for small field");
                        let t = e - v,
                          n = 0;
                        for (; t % b === w; ) (t /= b), n++;
                        let r = b,
                          i = R(e);
                        for (; 1 === L(i, r); )
                          if (r++ > 1e3)
                            throw Error(
                              "Cannot find square root: probably non-prime P"
                            );
                        if (1 === n) return O;
                        let o = i.pow(r, t),
                          a = (t + v) / b;
                        return function (e, r) {
                          if (e.is0(r)) return r;
                          if (1 !== L(e, r))
                            throw Error("Cannot find square root");
                          let i = n,
                            s = e.mul(e.ONE, o),
                            l = e.pow(r, t),
                            c = e.pow(r, a);
                          for (; !e.eql(l, e.ONE); ) {
                            if (e.is0(l)) return e.ZERO;
                            let t = 1,
                              n = e.sqr(l);
                            for (; !e.eql(n, e.ONE); )
                              if ((t++, (n = e.sqr(n)), t === i))
                                throw Error("Cannot find square root");
                            let r = v << BigInt(i - t - 1),
                              o = e.pow(s, r);
                            (i = t),
                              (s = e.sqr(o)),
                              (l = e.mul(l, s)),
                              (c = e.mul(c, o));
                          }
                          return c;
                        };
                      })(e)),
              o(p, t)
            )),
          toBytes: (e) => (n ? u(e, h) : d(e, h)),
          fromBytes: (e) => {
            if (e.length !== h)
              throw Error(
                "Field.fromBytes: expected " + h + " bytes, got " + e.length
              );
            return n ? c(e) : l((0, i.My)(e));
          },
          invertBatch: (e) => M(p, e),
          cmov: (e, t, n) => (n ? t : e),
        });
        return Object.freeze(p);
      }
      let k = BigInt(0),
        W = BigInt(1);
      function P(e, t) {
        let n = t.negate();
        return e ? n : t;
      }
      function U(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function D(e, t) {
        U(e, t);
        let n = Math.ceil(t / e) + 1,
          r = 2 ** (e - 1),
          i = 2 ** e;
        return {
          windows: n,
          windowSize: r,
          mask: g(e),
          maxNumber: i,
          shiftBy: BigInt(e),
        };
      }
      function j(e, t, n) {
        let { windowSize: r, mask: i, maxNumber: o, shiftBy: a } = n,
          s = Number(e & i),
          l = e >> a;
        s > r && ((s -= o), (l += W));
        let c = t * r,
          d = c + Math.abs(s) - 1,
          u = 0 === s;
        return {
          nextN: l,
          offset: d,
          isZero: u,
          isNeg: s < 0,
          isNegF: t % 2 != 0,
          offsetF: c,
        };
      }
      let z = new WeakMap(),
        H = new WeakMap();
      function F(e) {
        return H.get(e) || 1;
      }
      function q(e) {
        if (e !== k) throw Error("invalid wNAF");
      }
      function V(e, t) {
        if (!t) return R(e);
        if (t.ORDER !== e)
          throw Error("Field.ORDER must match order: Fp == p, Fn == n");
        return (
          m(
            t,
            C.reduce((e, t) => ((e[t] = "function"), e), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "number",
              BITS: "number",
            })
          ),
          t
        );
      }
      let K = BigInt(0),
        G = BigInt(1),
        Z = BigInt(2),
        $ = BigInt(8),
        Y = { zip215: !0 };
      BigInt(0);
      let Q = BigInt(1),
        J = BigInt(2);
      BigInt(3);
      let X = BigInt(5),
        ee = BigInt(8),
        et = {
          p: BigInt(
            "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"
          ),
          n: BigInt(
            "0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"
          ),
          h: ee,
          a: BigInt(
            "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"
          ),
          d: BigInt(
            "0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"
          ),
          Gx: BigInt(
            "0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"
          ),
          Gy: BigInt(
            "0x6666666666666666666666666666666666666666666666666666666666666658"
          ),
        },
        en = BigInt(
          "19681161376707505956807079304988542015446066515923890162744021073123829784752"
        ),
        er = R(et.p, void 0, !0),
        ei = (function (e) {
          let {
              CURVE: t,
              curveOpts: n,
              eddsaOpts: r,
            } = (function (e) {
              let t = {
                  a: e.a,
                  d: e.d,
                  p: e.Fp.ORDER,
                  n: e.n,
                  h: e.h,
                  Gx: e.Gx,
                  Gy: e.Gy,
                },
                n = {
                  Fp: e.Fp,
                  Fn: R(t.n, e.nBitLength, !0),
                  uvRatio: e.uvRatio,
                };
              return {
                CURVE: t,
                curveOpts: n,
                eddsaOpts: {
                  hash: e.hash,
                  randomBytes: e.randomBytes,
                  adjustScalarBytes: e.adjustScalarBytes,
                  domain: e.domain,
                  prehash: e.prehash,
                  mapToCurve: e.mapToCurve,
                },
              };
            })(e),
            l = (function (e, t) {
              m(
                t,
                { hash: "function" },
                {
                  adjustScalarBytes: "function",
                  randomBytes: "function",
                  domain: "function",
                  prehash: "function",
                  mapToCurve: "function",
                }
              );
              let { prehash: n, hash: r } = t,
                { BASE: o, Fp: a, Fn: l } = e,
                d = l.ORDER,
                h = t.randomBytes || i.po,
                g = t.adjustScalarBytes || ((e) => e),
                y =
                  t.domain ||
                  ((e, t, n) => {
                    if ((s("phflag", n), t.length || n))
                      throw Error("Contexts/pre-hash are not supported");
                    return e;
                  });
              function w(e) {
                var t;
                return (t = c(e)), l.create(t);
              }
              function v(e) {
                let {
                    head: t,
                    prefix: n,
                    scalar: i,
                  } = (function (e) {
                    let t = a.BYTES;
                    e = f("private key", e, t);
                    let n = f("hashed private key", r(e), 2 * t),
                      i = g(n.slice(0, t)),
                      o = n.slice(t, 2 * t),
                      s = w(i);
                    return { head: i, prefix: o, scalar: s };
                  })(e),
                  s = o.multiply(i),
                  l = s.toBytes();
                return {
                  head: t,
                  prefix: n,
                  scalar: i,
                  point: s,
                  pointBytes: l,
                };
              }
              function b(e = Uint8Array.of(), ...t) {
                return w(r(y((0, i.Id)(...t), f("context", e), !!n)));
              }
              return (
                o.precompute(8),
                {
                  getPublicKey: function (e) {
                    return v(e).pointBytes;
                  },
                  sign: function (e, t, r = {}) {
                    var s;
                    (e = f("message", e)), n && (e = n(e));
                    let { prefix: c, scalar: h, pointBytes: g } = v(t),
                      m = b(r.context, c, e),
                      y = o.multiply(m).toBytes(),
                      w = ((s = m + b(r.context, y, g, e) * h), l.create(s));
                    p("signature.s", w, K, d);
                    let E = a.BYTES;
                    return f("result", (0, i.Id)(y, u(w, E)), 2 * E);
                  },
                  verify: function (t, r, i, l = Y) {
                    let d,
                      u,
                      h,
                      { context: p, zip215: g } = l,
                      m = a.BYTES;
                    (t = f("signature", t, 2 * m)),
                      (r = f("message", r)),
                      (i = f("publicKey", i, m)),
                      void 0 !== g && s("zip215", g),
                      n && (r = n(r));
                    let y = c(t.slice(m, 2 * m));
                    try {
                      (d = e.fromHex(i, g)),
                        (u = e.fromHex(t.slice(0, m), g)),
                        (h = o.multiplyUnsafe(y));
                    } catch (e) {
                      return !1;
                    }
                    if (!g && d.isSmallOrder()) return !1;
                    let w = b(p, u.toBytes(), d.toBytes(), r);
                    return u
                      .add(d.multiplyUnsafe(w))
                      .subtract(h)
                      .clearCofactor()
                      .is0();
                  },
                  utils: {
                    getExtendedPublicKey: v,
                    randomPrivateKey: () => h(a.BYTES),
                    precompute: (t = 8, n = e.BASE) => n.precompute(t, !1),
                  },
                  Point: e,
                }
              );
            })(
              (function (e, t = {}) {
                var n;
                let { Fp: r, Fn: l } = (function (e, t, n = {}) {
                    if (!t || "object" != typeof t)
                      throw Error(`expected valid ${e} CURVE object`);
                    for (let e of ["p", "n", "h"]) {
                      let n = t[e];
                      if (!("bigint" == typeof n && n > k))
                        throw Error(`CURVE.${e} must be positive bigint`);
                    }
                    let r = V(t.p, n.Fp),
                      i = V(t.n, n.Fn);
                    for (let n of [
                      "Gx",
                      "Gy",
                      "a",
                      "weierstrass" === e ? "b" : "d",
                    ])
                      if (!r.isValid(t[n]))
                        throw Error(
                          `CURVE.${n} must be valid field element of CURVE.Fp`
                        );
                    return { Fp: r, Fn: i };
                  })("edwards", e, t),
                  { h: d, n: h } = e;
                m(t, {}, { uvRatio: "function" });
                let w = Z << (BigInt(8 * l.BYTES) - G),
                  v = (e) => r.create(e),
                  b =
                    t.uvRatio ||
                    ((e, t) => {
                      try {
                        return { isValid: !0, value: r.sqrt(r.div(e, t)) };
                      } catch (e) {
                        return { isValid: !1, value: K };
                      }
                    });
                if (
                  !(function (e, t, n, r) {
                    let i = e.sqr(n),
                      o = e.sqr(r),
                      a = e.add(e.mul(t.a, i), o),
                      s = e.add(e.ONE, e.mul(t.d, e.mul(i, o)));
                    return e.eql(a, s);
                  })(r, e, e.Gx, e.Gy)
                )
                  throw Error("bad curve params: generator point");
                function E(e, t, n = !1) {
                  return p("coordinate " + e, t, n ? G : K, w), t;
                }
                function x(e) {
                  if (!(e instanceof T)) throw Error("ExtendedPoint expected");
                }
                let S = y((e, t) => {
                    let { ex: n, ey: i, ez: o } = e,
                      a = e.is0();
                    null == t && (t = a ? $ : r.inv(o));
                    let s = v(n * t),
                      l = v(i * t),
                      c = v(o * t);
                    if (a) return { x: K, y: G };
                    if (c !== G) throw Error("invZ was invalid");
                    return { x: s, y: l };
                  }),
                  A = y((t) => {
                    let { a: n, d: r } = e;
                    if (t.is0()) throw Error("bad point: ZERO");
                    let { ex: i, ey: o, ez: a, et: s } = t,
                      l = v(i * i),
                      c = v(o * o),
                      d = v(a * a),
                      u = v(d * d),
                      f = v(l * n);
                    if (v(d * v(f + c)) !== v(u + v(r * v(l * c))))
                      throw Error("bad point: equation left != right (1)");
                    if (v(i * o) !== v(a * s))
                      throw Error("bad point: equation left != right (2)");
                    return !0;
                  });
                class T {
                  constructor(e, t, n, r) {
                    (this.ex = E("x", e)),
                      (this.ey = E("y", t)),
                      (this.ez = E("z", n, !0)),
                      (this.et = E("t", r)),
                      Object.freeze(this);
                  }
                  get x() {
                    return this.toAffine().x;
                  }
                  get y() {
                    return this.toAffine().y;
                  }
                  static fromAffine(e) {
                    if (e instanceof T)
                      throw Error("extended point not allowed");
                    let { x: t, y: n } = e || {};
                    return E("x", t), E("y", n), new T(t, n, G, v(t * n));
                  }
                  static normalizeZ(e) {
                    let t = M(
                      T.Fp,
                      e.map((e) => e.ez)
                    );
                    return e.map((e, n) => e.toAffine(t[n])).map(T.fromAffine);
                  }
                  static msm(e, t) {
                    return (function (e, t, n, r) {
                      (function (e, t) {
                        if (!Array.isArray(e)) throw Error("array expected");
                        e.forEach((e, n) => {
                          if (!(e instanceof t))
                            throw Error("invalid point at index " + n);
                        });
                      })(n, e),
                        (function (e, t) {
                          if (!Array.isArray(e))
                            throw Error("array of scalars expected");
                          e.forEach((e, n) => {
                            if (!t.isValid(e))
                              throw Error("invalid scalar at index " + n);
                          });
                        })(r, t);
                      let i = n.length,
                        s = r.length;
                      if (i !== s)
                        throw Error(
                          "arrays of points and scalars must have equal length"
                        );
                      let l = e.ZERO,
                        c = (function (e) {
                          let t;
                          for (t = 0; e > o; e >>= a, t += 1);
                          return t;
                        })(BigInt(i)),
                        d = 1;
                      c > 12
                        ? (d = c - 3)
                        : c > 4
                        ? (d = c - 2)
                        : c > 0 && (d = 2);
                      let u = g(d),
                        f = Array(Number(u) + 1).fill(l),
                        h = Math.floor((t.BITS - 1) / d) * d,
                        p = l;
                      for (let e = h; e >= 0; e -= d) {
                        f.fill(l);
                        for (let t = 0; t < s; t++) {
                          let i = Number((r[t] >> BigInt(e)) & u);
                          f[i] = f[i].add(n[t]);
                        }
                        let t = l;
                        for (let e = f.length - 1, n = l; e > 0; e--)
                          (n = n.add(f[e])), (t = t.add(n));
                        if (((p = p.add(t)), 0 !== e))
                          for (let e = 0; e < d; e++) p = p.double();
                      }
                      return p;
                    })(T, l, e, t);
                  }
                  _setWindowSize(e) {
                    this.precompute(e);
                  }
                  precompute(e = 8, t = !0) {
                    return (
                      I.setWindowSize(this, e), t || this.multiply(Z), this
                    );
                  }
                  assertValidity() {
                    A(this);
                  }
                  equals(e) {
                    x(e);
                    let { ex: t, ey: n, ez: r } = this,
                      { ex: i, ey: o, ez: a } = e,
                      s = v(t * a),
                      l = v(i * r),
                      c = v(n * a),
                      d = v(o * r);
                    return s === l && c === d;
                  }
                  is0() {
                    return this.equals(T.ZERO);
                  }
                  negate() {
                    return new T(v(-this.ex), this.ey, this.ez, v(-this.et));
                  }
                  double() {
                    let { a: t } = e,
                      { ex: n, ey: r, ez: i } = this,
                      o = v(n * n),
                      a = v(r * r),
                      s = v(Z * v(i * i)),
                      l = v(t * o),
                      c = n + r,
                      d = v(v(c * c) - o - a),
                      u = l + a,
                      f = u - s,
                      h = l - a,
                      p = v(d * f),
                      g = v(u * h),
                      m = v(d * h);
                    return new T(p, g, v(f * u), m);
                  }
                  add(t) {
                    x(t);
                    let { a: n, d: r } = e,
                      { ex: i, ey: o, ez: a, et: s } = this,
                      { ex: l, ey: c, ez: d, et: u } = t,
                      f = v(i * l),
                      h = v(o * c),
                      p = v(s * r * u),
                      g = v(a * d),
                      m = v((i + o) * (l + c) - f - h),
                      y = g - p,
                      w = g + p,
                      b = v(h - n * f),
                      E = v(m * y),
                      S = v(w * b),
                      A = v(m * b);
                    return new T(E, S, v(y * w), A);
                  }
                  subtract(e) {
                    return this.add(e.negate());
                  }
                  multiply(e) {
                    p("scalar", e, G, h);
                    let { p: t, f: n } = I.wNAFCached(this, e, T.normalizeZ);
                    return T.normalizeZ([t, n])[0];
                  }
                  multiplyUnsafe(e, t = T.ZERO) {
                    return (p("scalar", e, K, h), e === K)
                      ? T.ZERO
                      : this.is0() || e === G
                      ? this
                      : I.wNAFCachedUnsafe(this, e, T.normalizeZ, t);
                  }
                  isSmallOrder() {
                    return this.multiplyUnsafe(d).is0();
                  }
                  isTorsionFree() {
                    return I.wNAFCachedUnsafe(this, h).is0();
                  }
                  toAffine(e) {
                    return S(this, e);
                  }
                  clearCofactor() {
                    return d === G ? this : this.multiplyUnsafe(d);
                  }
                  static fromBytes(e, t = !1) {
                    return (0, i.DO)(e), this.fromHex(e, t);
                  }
                  static fromHex(t, n = !1) {
                    let { d: i, a: o } = e,
                      a = r.BYTES;
                    (t = f("pointHex", t, a)), s("zip215", n);
                    let l = t.slice(),
                      d = t[a - 1];
                    l[a - 1] = -129 & d;
                    let u = c(l);
                    p("pointHex.y", u, K, n ? w : r.ORDER);
                    let h = v(u * u),
                      { isValid: g, value: m } = b(v(h - G), v(i * h - o));
                    if (!g) throw Error("Point.fromHex: invalid y coordinate");
                    let y = (m & G) === G,
                      E = (128 & d) != 0;
                    if (!n && m === K && E)
                      throw Error("Point.fromHex: x=0 and x_0=1");
                    return E !== y && (m = v(-m)), T.fromAffine({ x: m, y: u });
                  }
                  static fromPrivateScalar(e) {
                    return T.BASE.multiply(e);
                  }
                  toBytes() {
                    let { x: e, y: t } = this.toAffine(),
                      n = u(t, r.BYTES);
                    return (n[n.length - 1] |= e & G ? 128 : 0), n;
                  }
                  toRawBytes() {
                    return this.toBytes();
                  }
                  toHex() {
                    return (0, i.My)(this.toBytes());
                  }
                  toString() {
                    return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
                  }
                }
                (T.BASE = new T(e.Gx, e.Gy, G, v(e.Gx * e.Gy))),
                  (T.ZERO = new T(K, G, G, K)),
                  (T.Fp = r),
                  (T.Fn = l);
                let I =
                  ((n = 8 * l.BYTES),
                  {
                    constTimeNegate: P,
                    hasPrecomputes: (e) => 1 !== F(e),
                    unsafeLadder(e, t, n = T.ZERO) {
                      let r = e;
                      for (; t > k; )
                        t & W && (n = n.add(r)), (r = r.double()), (t >>= W);
                      return n;
                    },
                    precomputeWindow(e, t) {
                      let { windows: r, windowSize: i } = D(t, n),
                        o = [],
                        a = e,
                        s = a;
                      for (let e = 0; e < r; e++) {
                        (s = a), o.push(s);
                        for (let e = 1; e < i; e++) (s = s.add(a)), o.push(s);
                        a = s.double();
                      }
                      return o;
                    },
                    wNAF(e, t, r) {
                      let i = T.ZERO,
                        o = T.BASE,
                        a = D(e, n);
                      for (let e = 0; e < a.windows; e++) {
                        let {
                          nextN: n,
                          offset: s,
                          isZero: l,
                          isNeg: c,
                          isNegF: d,
                          offsetF: u,
                        } = j(r, e, a);
                        (r = n),
                          l ? (o = o.add(P(d, t[u]))) : (i = i.add(P(c, t[s])));
                      }
                      return q(r), { p: i, f: o };
                    },
                    wNAFUnsafe(e, t, r, i = T.ZERO) {
                      let o = D(e, n);
                      for (let e = 0; e < o.windows && r !== k; e++) {
                        let {
                          nextN: n,
                          offset: a,
                          isZero: s,
                          isNeg: l,
                        } = j(r, e, o);
                        if (((r = n), !s)) {
                          let e = t[a];
                          i = i.add(l ? e.negate() : e);
                        }
                      }
                      return q(r), i;
                    },
                    getPrecomputes(e, t, n) {
                      let r = z.get(t);
                      return (
                        r ||
                          ((r = this.precomputeWindow(t, e)),
                          1 !== e &&
                            ("function" == typeof n && (r = n(r)),
                            z.set(t, r))),
                        r
                      );
                    },
                    wNAFCached(e, t, n) {
                      let r = F(e);
                      return this.wNAF(r, this.getPrecomputes(r, e, n), t);
                    },
                    wNAFCachedUnsafe(e, t, n, r) {
                      let i = F(e);
                      return 1 === i
                        ? this.unsafeLadder(e, t, r)
                        : this.wNAFUnsafe(
                            i,
                            this.getPrecomputes(i, e, n),
                            t,
                            r
                          );
                    },
                    setWindowSize(e, t) {
                      U(t, n), H.set(e, t), z.delete(e);
                    },
                  });
                return T;
              })(t, n),
              r
            );
          return Object.assign({}, l, { ExtendedPoint: l.Point, CURVE: e });
        })({
          ...et,
          Fp: er,
          hash: r.Zf,
          adjustScalarBytes: function (e) {
            return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
          },
          uvRatio: function (e, t) {
            let n = et.p,
              r = T(t * t * t, n),
              i = (function (e) {
                let t = BigInt(10),
                  n = BigInt(20),
                  r = BigInt(40),
                  i = BigInt(80),
                  o = et.p,
                  a = (((e * e) % o) * e) % o,
                  s = (I(a, J, o) * a) % o,
                  l = (I(s, Q, o) * e) % o,
                  c = (I(l, X, o) * l) % o,
                  d = (I(c, t, o) * c) % o,
                  u = (I(d, n, o) * d) % o,
                  f = (I(u, r, o) * u) % o,
                  h = (I(f, i, o) * f) % o,
                  p = (I(h, i, o) * f) % o,
                  g = (I(p, t, o) * c) % o;
                return { pow_p_5_8: (I(g, J, o) * e) % o, b2: a };
              })(e * T(r * r * t, n)).pow_p_5_8,
              o = T(e * r * i, n),
              a = T(t * o * o, n),
              s = o,
              l = T(o * en, n),
              c = a === e,
              d = a === T(-e, n),
              u = a === T(-e * en, n);
            return (
              c && (o = s),
              (d || u) && (o = l),
              N(o, n) && (o = T(-o, n)),
              { isValid: c || d, value: o }
            );
          },
        });
      var eo = n(17399),
        ea = n(12131),
        es = n(6068);
      class el extends eo.Ce {
        async sendTransaction(e, t, n = {}) {
          let r = !0;
          try {
            if ((0, es.Y)(e)) {
              if (!this.supportedTransactionVersions)
                throw new ea.UF(
                  "Sending versioned transactions isn't supported by this wallet"
                );
              if (!this.supportedTransactionVersions.has(e.version))
                throw new ea.UF(
                  `Sending transaction version ${e.version} isn't supported by this wallet`
                );
              try {
                let r = (e = await this.signTransaction(e)).serialize();
                return await t.sendRawTransaction(r, n);
              } catch (e) {
                if (e instanceof ea.z4) throw ((r = !1), e);
                throw new ea.UF(e?.message, e);
              }
            }
            try {
              let { signers: r, ...i } = n;
              (e = await this.prepareTransaction(e, t, i)),
                r?.length && e.partialSign(...r);
              let o = (e = await this.signTransaction(e)).serialize();
              return await t.sendRawTransaction(o, i);
            } catch (e) {
              if (e instanceof ea.z4) throw ((r = !1), e);
              throw new ea.UF(e?.message, e);
            }
          } catch (e) {
            throw (r && this.emit("error", e), e);
          }
        }
        async signAllTransactions(e) {
          for (let t of e)
            if ((0, es.Y)(t)) {
              if (!this.supportedTransactionVersions)
                throw new ea.z4(
                  "Signing versioned transactions isn't supported by this wallet"
                );
              if (!this.supportedTransactionVersions.has(t.version))
                throw new ea.z4(
                  `Signing transaction version ${t.version} isn't supported by this wallet`
                );
            }
          let t = [];
          for (let n of e) t.push(await this.signTransaction(n));
          return t;
        }
      }
      class ec extends el {}
      class ed extends ec {}
      let eu = `(?:\\nURI: (?<uri>[^\\n]+))?(?:\\nVersion: (?<version>[^\\n]+))?(?:\\nChain ID: (?<chainId>[^\\n]+))?(?:\\nNonce: (?<nonce>[^\\n]+))?(?:\\nIssued At: (?<issuedAt>[^\\n]+))?(?:\\nExpiration Time: (?<expirationTime>[^\\n]+))?(?:\\nNot Before: (?<notBefore>[^\\n]+))?(?:\\nRequest ID: (?<requestId>[^\\n]+))?(?:\\nResources:(?<resources>(?:\\n- [^\\n]+)*))?`;
      RegExp(
        `^(?<domain>[^\\n]+?) wants you to sign in with your Solana account:\\n(?<address>[^\\n]+)(?:\\n|$)(?:\\n(?<statement>[\\S\\s]*?)(?:\\n|$))??${eu}\\n*$`
      );
      var ef = n(23570);
      class eh extends ed {
        constructor() {
          super(),
            (this.name = "Burner Wallet"),
            (this.url = "https://github.com/anza-xyz/wallet-adapter#usage"),
            (this.icon =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNCAxMC42djIuN2wtOS41IDE2LjVoLTQuNmw2LTEwLjVhMi4xIDIuMSAwIDEgMCAyLTMuNGw0LjgtOC4zYTQgNCAwIDAgMSAxLjMgM1ptLTQuMyAxOS4xaC0uNmw0LjktOC40djQuMmMwIDIuMy0yIDQuMy00LjMgNC4zWm0yLTI4LjRjLS4zLS44LTEtMS4zLTItMS4zaC0xLjlsLTIuNCA0LjNIMzBsMS43LTNabS0zIDVoLTQuNkwxMC42IDI5LjhoNC43TDI4LjggNi40Wk0xOC43IDBoNC42bC0yLjUgNC4zaC00LjZMMTguNiAwWk0xNSA2LjRoNC42TDYgMjkuOEg0LjJjLS44IDAtMS43LS4zLTIuNC0uOEwxNSA2LjRaTTE0IDBIOS40TDcgNC4zaDQuNkwxNCAwWm0tMy42IDYuNEg1LjdMMCAxNi4ydjhMMTAuMyA2LjRaTTQuMyAwaC40TDAgOC4ydi00QzAgMiAxLjkgMCA0LjMgMFoiIGZpbGw9IiM5OTQ1RkYiLz48L3N2Zz4="),
            (this.supportedTransactionVersions = new Set(["legacy", 0])),
            (this._keypair = null),
            console.warn(
              "Your application is presently configured to use the `UnsafeBurnerWalletAdapter`. Find and remove it, then replace it with a list of adapters for wallets you would like your application to support. See https://github.com/anza-xyz/wallet-adapter#usage for an example."
            );
        }
        get connecting() {
          return !1;
        }
        get publicKey() {
          return this._keypair && this._keypair.publicKey;
        }
        get readyState() {
          return eo.Ok.Loadable;
        }
        async connect() {
          (this._keypair = new ef.Keypair()),
            this.emit("connect", this._keypair.publicKey);
        }
        async disconnect() {
          (this._keypair = null), this.emit("disconnect");
        }
        async signTransaction(e) {
          if (!this._keypair) throw new ea.kW();
          return (
            (0, es.Y)(e)
              ? e.sign([this._keypair])
              : e.partialSign(this._keypair),
            e
          );
        }
        async signMessage(e) {
          if (!this._keypair) throw new ea.kW();
          return ei.sign(e, this._keypair.secretKey.slice(0, 32));
        }
        async signIn(e = {}) {
          let { publicKey: t, secretKey: n } =
              this._keypair || (this._keypair = new ef.Keypair()),
            r = e.domain || window.location.host,
            i = e.address || t.toBase58(),
            o = (function (e) {
              let t = (function (e) {
                let t = `${e.domain} wants you to sign in with your Solana account:
`;
                (t += `${e.address}`),
                  e.statement &&
                    (t += `

${e.statement}`);
                let n = [];
                if (
                  (e.uri && n.push(`URI: ${e.uri}`),
                  e.version && n.push(`Version: ${e.version}`),
                  e.chainId && n.push(`Chain ID: ${e.chainId}`),
                  e.nonce && n.push(`Nonce: ${e.nonce}`),
                  e.issuedAt && n.push(`Issued At: ${e.issuedAt}`),
                  e.expirationTime &&
                    n.push(`Expiration Time: ${e.expirationTime}`),
                  e.notBefore && n.push(`Not Before: ${e.notBefore}`),
                  e.requestId && n.push(`Request ID: ${e.requestId}`),
                  e.resources)
                )
                  for (let t of (n.push("Resources:"), e.resources))
                    n.push(`- ${t}`);
                return (
                  n.length &&
                    (t += `

${n.join("\n")}`),
                  t
                );
              })(e);
              return new TextEncoder().encode(t);
            })({ ...e, domain: r, address: i }),
            a = ei.sign(o, n.slice(0, 32));
          return (
            this.emit("connect", t),
            {
              account: {
                address: i,
                publicKey: t.toBytes(),
                chains: [],
                features: [],
              },
              signedMessage: o,
              signature: a,
            }
          );
        }
      }
    },
    7719: (e) => {
      "use strict";
      e.exports = function (e) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var t = new Uint8Array(256), n = 0; n < t.length; n++) t[n] = 255;
        for (var r = 0; r < e.length; r++) {
          var i = e.charAt(r),
            o = i.charCodeAt(0);
          if (255 !== t[o]) throw TypeError(i + " is ambiguous");
          t[o] = r;
        }
        var a = e.length,
          s = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          c = Math.log(256) / Math.log(a);
        function d(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          for (var n = 0, r = 0, i = 0; e[n] === s; ) r++, n++;
          for (
            var o = ((e.length - n) * l + 1) >>> 0, c = new Uint8Array(o);
            e[n];

          ) {
            var d = e.charCodeAt(n);
            if (d > 255) return;
            var u = t[d];
            if (255 === u) return;
            for (var f = 0, h = o - 1; (0 !== u || f < i) && -1 !== h; h--, f++)
              (u += (a * c[h]) >>> 0),
                (c[h] = u % 256 >>> 0),
                (u = (u / 256) >>> 0);
            if (0 !== u) throw Error("Non-zero carry");
            (i = f), n++;
          }
          for (var p = o - i; p !== o && 0 === c[p]; ) p++;
          for (var g = new Uint8Array(r + (o - p)), m = r; p !== o; )
            g[m++] = c[p++];
          return g;
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
            for (var n = 0, r = 0, i = 0, o = t.length; i !== o && 0 === t[i]; )
              i++, n++;
            for (
              var l = ((o - i) * c + 1) >>> 0, d = new Uint8Array(l);
              i !== o;

            ) {
              for (
                var u = t[i], f = 0, h = l - 1;
                (0 !== u || f < r) && -1 !== h;
                h--, f++
              )
                (u += (256 * d[h]) >>> 0),
                  (d[h] = u % a >>> 0),
                  (u = (u / a) >>> 0);
              if (0 !== u) throw Error("Non-zero carry");
              (r = f), i++;
            }
            for (var p = l - r; p !== l && 0 === d[p]; ) p++;
            for (var g = s.repeat(n); p < l; ++p) g += e.charAt(d[p]);
            return g;
          },
          decodeUnsafe: d,
          decode: function (e) {
            var t = d(e);
            if (t) return t;
            throw Error("Non-base" + a + " character");
          },
        };
      };
    },
    8189: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LOCALNET_ENDPOINT =
          t.TESTNET_ENDPOINT =
          t.DEVNET_ENDPOINT =
          t.MAINNET_ENDPOINT =
            void 0),
        (t.getChainForEndpoint = function (e) {
          return e.includes(t.MAINNET_ENDPOINT)
            ? r.SOLANA_MAINNET_CHAIN
            : /\bdevnet\b/i.test(e)
            ? r.SOLANA_DEVNET_CHAIN
            : /\btestnet\b/i.test(e)
            ? r.SOLANA_TESTNET_CHAIN
            : /\blocalhost\b/i.test(e) || /\b127\.0\.0\.1\b/.test(e)
            ? r.SOLANA_LOCALNET_CHAIN
            : r.SOLANA_MAINNET_CHAIN;
        }),
        (t.getEndpointForChain = function (e, n) {
          return (
            n ||
            (e === r.SOLANA_MAINNET_CHAIN
              ? t.MAINNET_ENDPOINT
              : e === r.SOLANA_DEVNET_CHAIN
              ? t.DEVNET_ENDPOINT
              : e === r.SOLANA_TESTNET_CHAIN
              ? t.TESTNET_ENDPOINT
              : e === r.SOLANA_LOCALNET_CHAIN
              ? t.LOCALNET_ENDPOINT
              : t.MAINNET_ENDPOINT)
          );
        });
      let r = n(4062);
      (t.MAINNET_ENDPOINT = "https://api.mainnet-beta.solana.com"),
        (t.DEVNET_ENDPOINT = "https://api.devnet.solana.com"),
        (t.TESTNET_ENDPOINT = "https://api.testnet.solana.com"),
        (t.LOCALNET_ENDPOINT = "http://localhost:8899");
    },
    9260: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SolanaSignTransaction = void 0),
        (t.SolanaSignTransaction = "solana:signTransaction");
    },
    9796: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Disconnect = t.StandardDisconnect = void 0),
        (t.StandardDisconnect = "standard:disconnect"),
        (t.Disconnect = t.StandardDisconnect);
    },
    12315: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Hash =
          t.nextTick =
          t.byteSwapIfBE =
          t.byteSwap =
          t.isLE =
          t.rotl =
          t.rotr =
          t.createView =
          t.u32 =
          t.u8 =
            void 0),
        (t.isBytes = function (e) {
          return (
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          );
        }),
        (t.byteSwap32 = function (e) {
          for (let n = 0; n < e.length; n++) e[n] = (0, t.byteSwap)(e[n]);
        }),
        (t.bytesToHex = function (e) {
          (0, i.abytes)(e);
          let t = "";
          for (let n = 0; n < e.length; n++) t += o[e[n]];
          return t;
        }),
        (t.hexToBytes = function (e) {
          if ("string" != typeof e)
            throw Error("hex string expected, got " + typeof e);
          let t = e.length,
            n = t / 2;
          if (t % 2)
            throw Error("hex string expected, got unpadded hex of length " + t);
          let r = new Uint8Array(n);
          for (let t = 0, i = 0; t < n; t++, i += 2) {
            let n = s(e.charCodeAt(i)),
              o = s(e.charCodeAt(i + 1));
            if (void 0 === n || void 0 === o)
              throw Error(
                'hex string expected, got non-hex character "' +
                  (e[i] + e[i + 1]) +
                  '" at index ' +
                  i
              );
            r[t] = 16 * n + o;
          }
          return r;
        }),
        (t.asyncLoop = l),
        (t.utf8ToBytes = c),
        (t.toBytes = d),
        (t.concatBytes = function (...e) {
          let t = 0;
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            (0, i.abytes)(r), (t += r.length);
          }
          let n = new Uint8Array(t);
          for (let t = 0, r = 0; t < e.length; t++) {
            let i = e[t];
            n.set(i, r), (r += i.length);
          }
          return n;
        }),
        (t.checkOpts = function (e, t) {
          if (void 0 !== t && "[object Object]" !== {}.toString.call(t))
            throw Error("Options should be object or undefined");
          return Object.assign(e, t);
        }),
        (t.wrapConstructor = function (e) {
          let t = (t) => e().update(d(t)).digest(),
            n = e();
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = () => e()),
            t
          );
        }),
        (t.wrapConstructorWithOpts = function (e) {
          let t = (t, n) => e(n).update(d(t)).digest(),
            n = e({});
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = (t) => e(t)),
            t
          );
        }),
        (t.wrapXOFConstructorWithOpts = function (e) {
          let t = (t, n) => e(n).update(d(t)).digest(),
            n = e({});
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = (t) => e(t)),
            t
          );
        }),
        (t.randomBytes = function (e = 32) {
          if (r.crypto && "function" == typeof r.crypto.getRandomValues)
            return r.crypto.getRandomValues(new Uint8Array(e));
          if (r.crypto && "function" == typeof r.crypto.randomBytes)
            return r.crypto.randomBytes(e);
          throw Error("crypto.getRandomValues must be defined");
        });
      let r = n(86327),
        i = n(26773);
      (t.u8 = (e) => new Uint8Array(e.buffer, e.byteOffset, e.byteLength)),
        (t.u32 = (e) =>
          new Uint32Array(
            e.buffer,
            e.byteOffset,
            Math.floor(e.byteLength / 4)
          )),
        (t.createView = (e) =>
          new DataView(e.buffer, e.byteOffset, e.byteLength)),
        (t.rotr = (e, t) => (e << (32 - t)) | (e >>> t)),
        (t.rotl = (e, t) => (e << t) | ((e >>> (32 - t)) >>> 0)),
        (t.isLE =
          68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]),
        (t.byteSwap = (e) =>
          ((e << 24) & 0xff000000) |
          ((e << 8) & 0xff0000) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255)),
        (t.byteSwapIfBE = t.isLE ? (e) => e : (e) => (0, t.byteSwap)(e));
      let o = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        ),
        a = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function s(e) {
        return e >= a._0 && e <= a._9
          ? e - a._0
          : e >= a.A && e <= a.F
          ? e - (a.A - 10)
          : e >= a.a && e <= a.f
          ? e - (a.a - 10)
          : void 0;
      }
      async function l(e, n, r) {
        let i = Date.now();
        for (let o = 0; o < e; o++) {
          r(o);
          let e = Date.now() - i;
          (e >= 0 && e < n) || (await (0, t.nextTick)(), (i += e));
        }
      }
      function c(e) {
        if ("string" != typeof e)
          throw Error("utf8ToBytes expected string, got " + typeof e);
        return new Uint8Array(new TextEncoder().encode(e));
      }
      function d(e) {
        return "string" == typeof e && (e = c(e)), (0, i.abytes)(e), e;
      }
      t.nextTick = async () => {};
      class u {
        clone() {
          return this._cloneInto();
        }
      }
      t.Hash = u;
    },
    14858: (e, t, n) => {
      let r = n(84583),
        i = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function o(e) {
        (this.mode = r.ALPHANUMERIC), (this.data = e);
      }
      (o.getBitsLength = function (e) {
        return 11 * Math.floor(e / 2) + (e % 2) * 6;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          let t;
          for (t = 0; t + 2 <= this.data.length; t += 2) {
            let n = 45 * i.indexOf(this.data[t]);
            (n += i.indexOf(this.data[t + 1])), e.put(n, 11);
          }
          this.data.length % 2 && e.put(i.indexOf(this.data[t]), 6);
        }),
        (e.exports = o);
    },
    15554: (e) => {
      e.exports = function () {
        return (
          "function" == typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    17103: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function a(e) {
                try {
                  l(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                try {
                  l(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value) instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })
                    ).then(a, s);
              }
              l((r = r.apply(e, t || [])).next());
            });
          },
        i =
          (this && this.__rest) ||
          function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var i = 0, r = Object.getOwnPropertySymbols(e);
                i < r.length;
                i++
              )
                0 > t.indexOf(r[i]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                  (n[r[i]] = e[r[i]]);
            return n;
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BaseSignInMessageSignerWalletAdapter =
          t.BaseMessageSignerWalletAdapter =
          t.BaseSignerWalletAdapter =
            void 0);
      let o = n(89584),
        a = n(25546),
        s = n(70907);
      class l extends o.BaseWalletAdapter {
        sendTransaction(e, t) {
          return r(this, arguments, void 0, function* (e, t, n = {}) {
            let r = !0;
            try {
              if ((0, s.isVersionedTransaction)(e)) {
                if (!this.supportedTransactionVersions)
                  throw new a.WalletSendTransactionError(
                    "Sending versioned transactions isn't supported by this wallet"
                  );
                if (!this.supportedTransactionVersions.has(e.version))
                  throw new a.WalletSendTransactionError(
                    `Sending transaction version ${e.version} isn't supported by this wallet`
                  );
                try {
                  let r = (e = yield this.signTransaction(e)).serialize();
                  return yield t.sendRawTransaction(r, n);
                } catch (e) {
                  if (e instanceof a.WalletSignTransactionError)
                    throw ((r = !1), e);
                  throw new a.WalletSendTransactionError(
                    null == e ? void 0 : e.message,
                    e
                  );
                }
              }
              try {
                let { signers: r } = n,
                  o = i(n, ["signers"]);
                (e = yield this.prepareTransaction(e, t, o)),
                  (null == r ? void 0 : r.length) && e.partialSign(...r);
                let a = (e = yield this.signTransaction(e)).serialize();
                return yield t.sendRawTransaction(a, o);
              } catch (e) {
                if (e instanceof a.WalletSignTransactionError)
                  throw ((r = !1), e);
                throw new a.WalletSendTransactionError(
                  null == e ? void 0 : e.message,
                  e
                );
              }
            } catch (e) {
              throw (r && this.emit("error", e), e);
            }
          });
        }
        signAllTransactions(e) {
          return r(this, void 0, void 0, function* () {
            for (let t of e)
              if ((0, s.isVersionedTransaction)(t)) {
                if (!this.supportedTransactionVersions)
                  throw new a.WalletSignTransactionError(
                    "Signing versioned transactions isn't supported by this wallet"
                  );
                if (!this.supportedTransactionVersions.has(t.version))
                  throw new a.WalletSignTransactionError(
                    `Signing transaction version ${t.version} isn't supported by this wallet`
                  );
              }
            let t = [];
            for (let n of e) t.push(yield this.signTransaction(n));
            return t;
          });
        }
      }
      t.BaseSignerWalletAdapter = l;
      class c extends l {}
      t.BaseMessageSignerWalletAdapter = c;
      class d extends c {}
      t.BaseSignInMessageSignerWalletAdapter = d;
    },
    17144: (e, t, n) => {
      let r = n(74181);
      (t.render = function (e, t, n) {
        var i;
        let o = n,
          a = t;
        void 0 !== o || (t && t.getContext) || ((o = t), (t = void 0)),
          t ||
            (a = (function () {
              try {
                return document.createElement("canvas");
              } catch (e) {
                throw Error("You need to specify a canvas element");
              }
            })()),
          (o = r.getOptions(o));
        let s = r.getImageWidth(e.modules.size, o),
          l = a.getContext("2d"),
          c = l.createImageData(s, s);
        return (
          r.qrToImageData(c.data, e, o),
          (i = a),
          l.clearRect(0, 0, i.width, i.height),
          i.style || (i.style = {}),
          (i.height = s),
          (i.width = s),
          (i.style.height = s + "px"),
          (i.style.width = s + "px"),
          l.putImageData(c, 0, 0),
          a
        );
      }),
        (t.renderToDataURL = function (e, n, r) {
          let i = r;
          void 0 !== i || (n && n.getContext) || ((i = n), (n = void 0)),
            i || (i = {});
          let o = t.render(e, n, i),
            a = i.type || "image/png",
            s = i.rendererOpts || {};
          return o.toDataURL(a, s.quality);
        });
    },
    17399: (e, t, n) => {
      "use strict";
      n.d(t, { Ce: () => a, Ok: () => r });
      var r,
        i = n(15484),
        o = n(12131);
      !(function (e) {
        (e.Installed = "Installed"),
          (e.NotDetected = "NotDetected"),
          (e.Loadable = "Loadable"),
          (e.Unsupported = "Unsupported");
      })(r || (r = {}));
      class a extends i.A {
        get connected() {
          return !!this.publicKey;
        }
        async autoConnect() {
          await this.connect();
        }
        async prepareTransaction(e, t, n = {}) {
          let r = this.publicKey;
          if (!r) throw new o.kW();
          return (
            (e.feePayer = e.feePayer || r),
            (e.recentBlockhash =
              e.recentBlockhash ||
              (
                await t.getLatestBlockhash({
                  commitment: n.preflightCommitment,
                  minContextSlot: n.minContextSlot,
                })
              ).blockhash),
            e
          );
        }
      }
    },
    17735: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.montgomery = function (e) {
          let t =
              ((0, i.validateObject)(
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
            { P: n } = t,
            s = (e) => (0, r.mod)(e, n),
            l = t.montgomeryBits,
            c = Math.ceil(l / 8),
            d = t.nByteLength,
            u = t.adjustScalarBytes || ((e) => e),
            f = t.powPminus2 || ((e) => (0, r.pow)(e, n - BigInt(2), n));
          function h(e, t, n) {
            let r = s(e * (t - n));
            return [(t = s(t - r)), (n = s(n + r))];
          }
          let p = (t.a - BigInt(2)) / BigInt(4);
          function g(e) {
            return (0, i.numberToBytesLE)(s(e), c);
          }
          function m(e, t) {
            let r = (function (e, t) {
              let r;
              (0, i.aInRange)("u", e, o, n), (0, i.aInRange)("scalar", t, o, n);
              let c = a,
                d = o,
                u = e,
                g = a,
                m = o;
              for (let n = BigInt(l - 1); n >= o; n--) {
                let i = (t >> n) & a;
                (m ^= i),
                  (c = (r = h(m, c, u))[0]),
                  (u = r[1]),
                  (d = (r = h(m, d, g))[0]),
                  (g = r[1]),
                  (m = i);
                let o = c + d,
                  l = s(o * o),
                  f = c - d,
                  y = s(f * f),
                  w = l - y,
                  v = u + g,
                  b = s((u - g) * o),
                  E = s(v * f),
                  x = b + E,
                  S = b - E;
                (u = s(x * x)),
                  (g = s(e * s(S * S))),
                  (c = s(l * y)),
                  (d = s(w * (l + s(p * w))));
              }
              return (
                (c = (r = h(m, c, u))[0]),
                (u = r[1]),
                (d = (r = h(m, d, g))[0]),
                (g = r[1]),
                s(c * f(d))
              );
            })(
              (function (e) {
                let t = (0, i.ensureBytes)("u coordinate", e, c);
                return 32 === d && (t[31] &= 127), (0, i.bytesToNumberLE)(t);
              })(t),
              (function (e) {
                let t = (0, i.ensureBytes)("scalar", e),
                  n = t.length;
                if (n !== c && n !== d)
                  throw Error(
                    "invalid scalar, expected " +
                      ("" + c + " or ") +
                      d +
                      " bytes, got " +
                      n
                  );
                return (0, i.bytesToNumberLE)(u(t));
              })(e)
            );
            if (r === o) throw Error("invalid private or public key received");
            return g(r);
          }
          let y = g(t.Gu);
          function w(e) {
            return m(e, y);
          }
          return {
            scalarMult: m,
            scalarMultBase: w,
            getSharedSecret: (e, t) => m(e, t),
            getPublicKey: (e) => w(e),
            utils: { randomPrivateKey: () => t.randomBytes(t.nByteLength) },
            GuBytes: y,
          };
        });
      let r = n(43286),
        i = n(44045),
        o = BigInt(0),
        a = BigInt(1);
    },
    23669: () => {},
    24851: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Events = t.StandardEvents = void 0),
        (t.StandardEvents = "standard:events"),
        (t.Events = t.StandardEvents);
    },
    25546: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletWindowClosedError =
          t.WalletWindowBlockedError =
          t.WalletTimeoutError =
          t.WalletSignInError =
          t.WalletSignMessageError =
          t.WalletSignTransactionError =
          t.WalletSendTransactionError =
          t.WalletNotConnectedError =
          t.WalletKeypairError =
          t.WalletPublicKeyError =
          t.WalletAccountError =
          t.WalletDisconnectionError =
          t.WalletDisconnectedError =
          t.WalletConnectionError =
          t.WalletConfigError =
          t.WalletLoadError =
          t.WalletNotReadyError =
          t.WalletError =
            void 0);
      class n extends Error {
        constructor(e, t) {
          super(e), (this.error = t);
        }
      }
      t.WalletError = n;
      class r extends n {
        constructor() {
          super(...arguments), (this.name = "WalletNotReadyError");
        }
      }
      t.WalletNotReadyError = r;
      class i extends n {
        constructor() {
          super(...arguments), (this.name = "WalletLoadError");
        }
      }
      t.WalletLoadError = i;
      class o extends n {
        constructor() {
          super(...arguments), (this.name = "WalletConfigError");
        }
      }
      t.WalletConfigError = o;
      class a extends n {
        constructor() {
          super(...arguments), (this.name = "WalletConnectionError");
        }
      }
      t.WalletConnectionError = a;
      class s extends n {
        constructor() {
          super(...arguments), (this.name = "WalletDisconnectedError");
        }
      }
      t.WalletDisconnectedError = s;
      class l extends n {
        constructor() {
          super(...arguments), (this.name = "WalletDisconnectionError");
        }
      }
      t.WalletDisconnectionError = l;
      class c extends n {
        constructor() {
          super(...arguments), (this.name = "WalletAccountError");
        }
      }
      t.WalletAccountError = c;
      class d extends n {
        constructor() {
          super(...arguments), (this.name = "WalletPublicKeyError");
        }
      }
      t.WalletPublicKeyError = d;
      class u extends n {
        constructor() {
          super(...arguments), (this.name = "WalletKeypairError");
        }
      }
      t.WalletKeypairError = u;
      class f extends n {
        constructor() {
          super(...arguments), (this.name = "WalletNotConnectedError");
        }
      }
      t.WalletNotConnectedError = f;
      class h extends n {
        constructor() {
          super(...arguments), (this.name = "WalletSendTransactionError");
        }
      }
      t.WalletSendTransactionError = h;
      class p extends n {
        constructor() {
          super(...arguments), (this.name = "WalletSignTransactionError");
        }
      }
      t.WalletSignTransactionError = p;
      class g extends n {
        constructor() {
          super(...arguments), (this.name = "WalletSignMessageError");
        }
      }
      t.WalletSignMessageError = g;
      class m extends n {
        constructor() {
          super(...arguments), (this.name = "WalletSignInError");
        }
      }
      t.WalletSignInError = m;
      class y extends n {
        constructor() {
          super(...arguments), (this.name = "WalletTimeoutError");
        }
      }
      t.WalletTimeoutError = y;
      class w extends n {
        constructor() {
          super(...arguments), (this.name = "WalletWindowBlockedError");
        }
      }
      t.WalletWindowBlockedError = w;
      class v extends n {
        constructor() {
          super(...arguments), (this.name = "WalletWindowClosedError");
        }
      }
      t.WalletWindowClosedError = v;
    },
    25880: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isWalletAdapterCompatibleStandardWallet = function (e) {
          return (
            i.StandardConnect in e.features &&
            i.StandardEvents in e.features &&
            (r.SolanaSignAndSendTransaction in e.features ||
              r.SolanaSignTransaction in e.features)
          );
        });
      let r = n(771),
        i = n(49018);
    },
    26578: (e, t, n) => {
      let r = n(84583),
        i = n(32098),
        o = n(14858),
        a = n(56057),
        s = n(98082),
        l = n(85555),
        c = n(77105),
        d = n(98521);
      function u(e) {
        return unescape(encodeURIComponent(e)).length;
      }
      function f(e, t, n) {
        let r,
          i = [];
        for (; null !== (r = e.exec(n)); )
          i.push({ data: r[0], index: r.index, mode: t, length: r[0].length });
        return i;
      }
      function h(e) {
        let t,
          n,
          i = f(l.NUMERIC, r.NUMERIC, e),
          o = f(l.ALPHANUMERIC, r.ALPHANUMERIC, e);
        return (
          c.isKanjiModeEnabled()
            ? ((t = f(l.BYTE, r.BYTE, e)), (n = f(l.KANJI, r.KANJI, e)))
            : ((t = f(l.BYTE_KANJI, r.BYTE, e)), (n = [])),
          i
            .concat(o, t, n)
            .sort(function (e, t) {
              return e.index - t.index;
            })
            .map(function (e) {
              return { data: e.data, mode: e.mode, length: e.length };
            })
        );
      }
      function p(e, t) {
        switch (t) {
          case r.NUMERIC:
            return i.getBitsLength(e);
          case r.ALPHANUMERIC:
            return o.getBitsLength(e);
          case r.KANJI:
            return s.getBitsLength(e);
          case r.BYTE:
            return a.getBitsLength(e);
        }
      }
      function g(e, t) {
        let n,
          l = r.getBestModeForData(e);
        if ((n = r.from(t, l)) !== r.BYTE && n.bit < l.bit)
          throw Error(
            '"' +
              e +
              '" cannot be encoded with mode ' +
              r.toString(n) +
              ".\n Suggested mode is: " +
              r.toString(l)
          );
        switch ((n === r.KANJI && !c.isKanjiModeEnabled() && (n = r.BYTE), n)) {
          case r.NUMERIC:
            return new i(e);
          case r.ALPHANUMERIC:
            return new o(e);
          case r.KANJI:
            return new s(e);
          case r.BYTE:
            return new a(e);
        }
      }
      (t.fromArray = function (e) {
        return e.reduce(function (e, t) {
          return (
            "string" == typeof t
              ? e.push(g(t, null))
              : t.data && e.push(g(t.data, t.mode)),
            e
          );
        }, []);
      }),
        (t.fromString = function (e, n) {
          let i = (function (e, t) {
              let n = {},
                i = { start: {} },
                o = ["start"];
              for (let a = 0; a < e.length; a++) {
                let s = e[a],
                  l = [];
                for (let e = 0; e < s.length; e++) {
                  let c = s[e],
                    d = "" + a + e;
                  l.push(d), (n[d] = { node: c, lastCount: 0 }), (i[d] = {});
                  for (let e = 0; e < o.length; e++) {
                    let a = o[e];
                    n[a] && n[a].node.mode === c.mode
                      ? ((i[a][d] =
                          p(n[a].lastCount + c.length, c.mode) -
                          p(n[a].lastCount, c.mode)),
                        (n[a].lastCount += c.length))
                      : (n[a] && (n[a].lastCount = c.length),
                        (i[a][d] =
                          p(c.length, c.mode) +
                          4 +
                          r.getCharCountIndicator(c.mode, t)));
                  }
                }
                o = l;
              }
              for (let e = 0; e < o.length; e++) i[o[e]].end = 0;
              return { map: i, table: n };
            })(
              (function (e) {
                let t = [];
                for (let n = 0; n < e.length; n++) {
                  let i = e[n];
                  switch (i.mode) {
                    case r.NUMERIC:
                      t.push([
                        i,
                        {
                          data: i.data,
                          mode: r.ALPHANUMERIC,
                          length: i.length,
                        },
                        { data: i.data, mode: r.BYTE, length: i.length },
                      ]);
                      break;
                    case r.ALPHANUMERIC:
                      t.push([
                        i,
                        { data: i.data, mode: r.BYTE, length: i.length },
                      ]);
                      break;
                    case r.KANJI:
                      t.push([
                        i,
                        { data: i.data, mode: r.BYTE, length: u(i.data) },
                      ]);
                      break;
                    case r.BYTE:
                      t.push([
                        { data: i.data, mode: r.BYTE, length: u(i.data) },
                      ]);
                  }
                }
                return t;
              })(h(e, c.isKanjiModeEnabled())),
              n
            ),
            o = d.find_path(i.map, "start", "end"),
            a = [];
          for (let e = 1; e < o.length - 1; e++) a.push(i.table[o[e]].node);
          return t.fromArray(
            a.reduce(function (e, t) {
              let n = e.length - 1 >= 0 ? e[e.length - 1] : null;
              return (
                n && n.mode === t.mode
                  ? (e[e.length - 1].data += t.data)
                  : e.push(t),
                e
              );
            }, [])
          );
        }),
        (t.rawSplit = function (e) {
          return t.fromArray(h(e, c.isKanjiModeEnabled()));
        });
    },
    26773: (e, t) => {
      "use strict";
      function n(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function r(e, ...t) {
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.anumber = n),
        (t.abytes = r),
        (t.ahash = function (e) {
          if ("function" != typeof e || "function" != typeof e.create)
            throw Error("Hash should be wrapped by utils.wrapConstructor");
          n(e.outputLen), n(e.blockLen);
        }),
        (t.aexists = function (e, t = !0) {
          if (e.destroyed) throw Error("Hash instance has been destroyed");
          if (t && e.finished)
            throw Error("Hash#digest() has already been called");
        }),
        (t.aoutput = function (e, t) {
          r(e);
          let n = t.outputLen;
          if (e.length < n)
            throw Error(
              "digestInto() expects output buffer of length at least " + n
            );
        });
    },
    27228: (e, t, n) => {
      e.exports = n(51559)(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      );
    },
    31154: (e, t, n) => {
      let r = n(77105),
        i = r.getBCHDigit(1335);
      t.getEncodedBits = function (e, t) {
        let n = (e.bit << 3) | t,
          o = n << 10;
        for (; r.getBCHDigit(o) - i >= 0; ) o ^= 1335 << (r.getBCHDigit(o) - i);
        return ((n << 10) | o) ^ 21522;
      };
    },
    32098: (e, t, n) => {
      let r = n(84583);
      function i(e) {
        (this.mode = r.NUMERIC), (this.data = e.toString());
      }
      (i.getBitsLength = function (e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (e) {
          let t, n, r;
          for (t = 0; t + 3 <= this.data.length; t += 3)
            (r = parseInt(this.data.substr(t, 3), 10)), e.put(r, 10);
          let i = this.data.length - t;
          i > 0 &&
            ((r = parseInt(this.data.substr(t), 10)), e.put(r, 3 * i + 1));
        }),
        (e.exports = i);
    },
    36232: (e, t) => {
      "use strict";
      function n(e, t) {
        if (e === t) return !0;
        let n = e.length;
        if (n !== t.length) return !1;
        for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.arraysEqual = n),
        (t.bytesEqual = function (e, t) {
          return n(e, t);
        });
    },
    37627: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        i,
        o,
        a,
        s,
        l,
        c,
        d,
        u,
        f,
        h,
        p,
        g,
        m,
        y,
        w,
        v,
        b,
        E,
        x,
        S,
        A,
        T,
        I,
        _,
        O,
        B,
        N,
        C,
        M,
        L,
        R,
        k,
        W,
        P,
        U,
        D,
        j,
        z,
        H,
        F,
        q,
        V,
        K,
        G,
        Z,
        $,
        Y,
        Q,
        J,
        X,
        ee,
        et,
        en,
        er,
        ei,
        eo,
        ea,
        es,
        el,
        ec,
        ed,
        eu,
        ef,
        eh,
        ep,
        eg,
        em,
        ey,
        ew,
        ev,
        eb,
        eE,
        ex,
        eS,
        eA,
        eT,
        eI,
        e_,
        eO = n(771),
        eB = n(23570),
        eN = n(50944),
        eC = n(49018),
        eM = n(4062),
        eL = n(63762),
        eR = n(27228);
      function ek(e) {
        return e && "object" == typeof e && "default" in e ? e : { default: e };
      }
      var eW = ek(eN),
        eP = ek(eR);
      function eU(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(a, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      }
      function eD(e, t, n, r) {
        if ("a" === n && !r)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      }
      function ej(e, t, n, r, i) {
        if ("m" === r) throw TypeError("Private method is not writable");
        if ("a" === r && !i)
          throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !i : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
      }
      let ez = `
<div class="mobile-wallet-adapter-embedded-modal-container" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div data-modal-close style="position: absolute; width: 100%; height: 100%;"></div>
	<div class="mobile-wallet-adapter-embedded-modal-card">
		<div>
			<button data-modal-close class="mobile-wallet-adapter-embedded-modal-close">
				<svg width="14" height="14">
					<path d="M 6.7125,8.3036995 1.9082,13.108199 c -0.2113,0.2112 -0.4765,0.3168 -0.7957,0.3168 -0.3192,0 -0.5844,-0.1056 -0.7958,-0.3168 C 0.1056,12.896899 0,12.631699 0,12.312499 c 0,-0.3192 0.1056,-0.5844 0.3167,-0.7958 L 5.1212,6.7124995 0.3167,1.9082 C 0.1056,1.6969 0,1.4317 0,1.1125 0,0.7933 0.1056,0.5281 0.3167,0.3167 0.5281,0.1056 0.7933,0 1.1125,0 1.4317,0 1.6969,0.1056 1.9082,0.3167 L 6.7125,5.1212 11.5167,0.3167 C 11.7281,0.1056 11.9933,0 12.3125,0 c 0.3192,0 0.5844,0.1056 0.7957,0.3167 0.2112,0.2114 0.3168,0.4766 0.3168,0.7958 0,0.3192 -0.1056,0.5844 -0.3168,0.7957 L 8.3037001,6.7124995 13.1082,11.516699 c 0.2112,0.2114 0.3168,0.4766 0.3168,0.7958 0,0.3192 -0.1056,0.5844 -0.3168,0.7957 -0.2113,0.2112 -0.4765,0.3168 -0.7957,0.3168 -0.3192,0 -0.5844,-0.1056 -0.7958,-0.3168 z" />
				</svg>
			</button>
		</div>
		<div class="mobile-wallet-adapter-embedded-modal-content"></div>
	</div>
</div>
`,
        eH = `
.mobile-wallet-adapter-embedded-modal-container {
    display: flex; /* Use flexbox to center content */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    overflow-y: auto; /* enable scrolling */
}

.mobile-wallet-adapter-embedded-modal-card {
    display: flex;
    flex-direction: column;
    margin: auto 20px;
    max-width: 780px;
    padding: 20px;
    border-radius: 24px;
    background: #ffffff;
    font-family: "Inter Tight", "PT Sans", Calibri, sans-serif;
    transform: translateY(-200%);
    animation: slide-in 0.5s forwards;
}

@keyframes slide-in {
    100% { transform: translateY(0%); }
}

.mobile-wallet-adapter-embedded-modal-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    background: #e4e9e9;
    border: none;
    border-radius: 50%;
}

.mobile-wallet-adapter-embedded-modal-close:focus-visible {
    outline-color: red;
}

.mobile-wallet-adapter-embedded-modal-close svg {
    fill: #546266;
    transition: fill 200ms ease 0s;
}

.mobile-wallet-adapter-embedded-modal-close:hover svg {
    fill: #fff;
}
`,
        eF = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
`;
      class eq {
        constructor() {
          r.add(this),
            i.set(this, null),
            o.set(this, {}),
            a.set(this, !1),
            (this.dom = null),
            (this.open = () => {
              console.debug("Modal open"),
                eD(this, r, "m", l).call(this),
                eD(this, i, "f") && (eD(this, i, "f").style.display = "flex");
            }),
            (this.close = (e) => {
              var t;
              console.debug("Modal close"),
                eD(this, r, "m", c).call(this),
                eD(this, i, "f") && (eD(this, i, "f").style.display = "none"),
                null == (t = eD(this, o, "f").close) || t.forEach((t) => t(e));
            }),
            d.set(this, (e) => {
              "Escape" === e.key && this.close(e);
            }),
            (this.init = this.init.bind(this)),
            ej(
              this,
              i,
              document.getElementById("mobile-wallet-adapter-embedded-root-ui"),
              "f"
            );
        }
        init() {
          return eU(this, void 0, void 0, function* () {
            console.log("Injecting modal"), eD(this, r, "m", s).call(this);
          });
        }
        addEventListener(e, t) {
          var n;
          return (
            (null == (n = eD(this, o, "f")[e]) ? void 0 : n.push(t)) ||
              (eD(this, o, "f")[e] = [t]),
            () => this.removeEventListener(e, t)
          );
        }
        removeEventListener(e, t) {
          var n;
          eD(this, o, "f")[e] =
            null == (n = eD(this, o, "f")[e])
              ? void 0
              : n.filter((e) => t !== e);
        }
      }
      (i = new WeakMap()),
        (o = new WeakMap()),
        (a = new WeakMap()),
        (d = new WeakMap()),
        (r = new WeakSet()),
        (s = function () {
          if (
            document.getElementById("mobile-wallet-adapter-embedded-root-ui")
          ) {
            eD(this, i, "f") ||
              ej(
                this,
                i,
                document.getElementById(
                  "mobile-wallet-adapter-embedded-root-ui"
                ),
                "f"
              );
            return;
          }
          ej(this, i, document.createElement("div"), "f"),
            (eD(this, i, "f").id = "mobile-wallet-adapter-embedded-root-ui"),
            (eD(this, i, "f").innerHTML = ez),
            (eD(this, i, "f").style.display = "none");
          let e = eD(this, i, "f").querySelector(
            ".mobile-wallet-adapter-embedded-modal-content"
          );
          e && (e.innerHTML = this.contentHtml);
          let t = document.createElement("style");
          (t.id = "mobile-wallet-adapter-embedded-modal-styles"),
            (t.textContent = eH + this.contentStyles);
          let n = document.createElement("div");
          (n.innerHTML = eF),
            (this.dom = n.attachShadow({ mode: "closed" })),
            this.dom.appendChild(t),
            this.dom.appendChild(eD(this, i, "f")),
            document.body.appendChild(n);
        }),
        (l = function () {
          !eD(this, i, "f") ||
            eD(this, a, "f") ||
            ([
              ...eD(this, i, "f").querySelectorAll("[data-modal-close]"),
            ].forEach((e) =>
              null == e ? void 0 : e.addEventListener("click", this.close)
            ),
            window.addEventListener("load", this.close),
            document.addEventListener("keydown", eD(this, d, "f")),
            ej(this, a, !0, "f"));
        }),
        (c = function () {
          if (eD(this, a, "f"))
            window.removeEventListener("load", this.close),
              document.removeEventListener("keydown", eD(this, d, "f")),
              eD(this, i, "f") &&
                ([
                  ...eD(this, i, "f").querySelectorAll("[data-modal-close]"),
                ].forEach((e) =>
                  null == e
                    ? void 0
                    : e.removeEventListener("click", this.close)
                ),
                ej(this, a, !1, "f"));
        });
      class eV extends eq {
        constructor() {
          super(...arguments),
            (this.contentStyles = eG),
            (this.contentHtml = eK);
        }
        initWithQR(e) {
          let t = Object.create(null, { init: { get: () => super.init } });
          return eU(this, void 0, void 0, function* () {
            t.init.call(this), this.populateQRCode(e);
          });
        }
        populateQRCode(e) {
          var t;
          return eU(this, void 0, void 0, function* () {
            let n =
              null == (t = this.dom)
                ? void 0
                : t.getElementById(
                    "mobile-wallet-adapter-embedded-modal-qr-code-container"
                  );
            if (n) {
              let t = yield eW.default.toCanvas(e, { width: 200, margin: 0 });
              null !== n.firstElementChild
                ? n.replaceChild(t, n.firstElementChild)
                : n.appendChild(t);
            } else console.error("QRCode Container not found");
          });
        }
      }
      let eK = `
<div class="mobile-wallet-adapter-embedded-modal-qr-content">
    <div>
        <svg class="mobile-wallet-adapter-embedded-modal-icon" width="100%" height="100%">
            <circle r="52" cx="53" cy="53" fill="#99b3be" stroke="#000000" stroke-width="2"/>
            <path d="m 53,82.7305 c -3.3116,0 -6.1361,-1.169 -8.4735,-3.507 -2.338,-2.338 -3.507,-5.1625 -3.507,-8.4735 0,-3.3116 1.169,-6.1364 3.507,-8.4744 2.3374,-2.338 5.1619,-3.507 8.4735,-3.507 3.3116,0 6.1361,1.169 8.4735,3.507 2.338,2.338 3.507,5.1628 3.507,8.4744 0,3.311 -1.169,6.1355 -3.507,8.4735 -2.3374,2.338 -5.1619,3.507 -8.4735,3.507 z m 0.007,-5.25 c 1.8532,0 3.437,-0.6598 4.7512,-1.9793 1.3149,-1.3195 1.9723,-2.9058 1.9723,-4.7591 0,-1.8526 -0.6598,-3.4364 -1.9793,-4.7512 -1.3195,-1.3149 -2.9055,-1.9723 -4.7582,-1.9723 -1.8533,0 -3.437,0.6598 -4.7513,1.9793 -1.3148,1.3195 -1.9722,2.9058 -1.9722,4.7591 0,1.8527 0.6597,3.4364 1.9792,4.7512 1.3195,1.3149 2.9056,1.9723 4.7583,1.9723 z m -28,-33.5729 -3.85,-3.6347 c 4.1195,-4.025 8.8792,-7.1984 14.2791,-9.52 5.4005,-2.3223 11.2551,-3.4834 17.5639,-3.4834 6.3087,0 12.1634,1.1611 17.5639,3.4834 5.3999,2.3216 10.1596,5.495 14.2791,9.52 l -3.85,3.6347 C 77.2999,40.358 73.0684,37.5726 68.2985,35.5514 63.5292,33.5301 58.4296,32.5195 53,32.5195 c -5.4297,0 -10.5292,1.0106 -15.2985,3.0319 -4.7699,2.0212 -9.0014,4.8066 -12.6945,8.3562 z m 44.625,10.8771 c -2.2709,-2.1046 -4.7962,-3.7167 -7.5758,-4.8361 -2.7795,-1.12 -5.7983,-1.68 -9.0562,-1.68 -3.2579,0 -6.2621,0.56 -9.0125,1.68 -2.7504,1.1194 -5.2903,2.7315 -7.6195,4.8361 L 32.5189,51.15 c 2.8355,-2.6028 5.9777,-4.6086 9.4263,-6.0174 3.4481,-1.4087 7.133,-2.1131 11.0548,-2.1131 3.9217,0 7.5979,0.7044 11.0285,2.1131 3.43,1.4088 6.5631,3.4146 9.3992,6.0174 z"/>
        </svg>
        <div class="mobile-wallet-adapter-embedded-modal-title">Remote Mobile Wallet Adapter</div>
    </div>
    <div>
        <div>
            <h4 class="mobile-wallet-adapter-embedded-modal-qr-label">
                Open your wallet and scan this code
            </h4>
        </div>
        <div id="mobile-wallet-adapter-embedded-modal-qr-code-container" class="mobile-wallet-adapter-embedded-modal-qr-code-container"></div>
    </div>
</div>
<div class="mobile-wallet-adapter-embedded-modal-divider"><hr></div>
<div class="mobile-wallet-adapter-embedded-modal-footer">
    <div class="mobile-wallet-adapter-embedded-modal-subtitle">
        Follow the instructions on your device. When you're finished, this screen will update.
    </div>
    <div class="mobile-wallet-adapter-embedded-modal-progress-badge">
        <div>
            <div class="spinner">
                <div class="leftWrapper">
                    <div class="left">
                        <div class="circle"></div>
                    </div>
                </div>
                <div class="rightWrapper">
                    <div class="right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
        </div>
        <div>Waiting for scan</div>
    </div>
</div>
`,
        eG = `
.mobile-wallet-adapter-embedded-modal-qr-content {
    display: flex; 
    margin-top: 10px;
    padding: 10px;
}

.mobile-wallet-adapter-embedded-modal-qr-content > div:first-child {
    display: flex;
    flex-direction: column;
    flex: 2;
    margin-top: auto;
    margin-right: 30px;
}

.mobile-wallet-adapter-embedded-modal-qr-content > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: auto;
}

.mobile-wallet-adapter-embedded-modal-footer {
    display: flex;
    padding: 10px;
}

.mobile-wallet-adapter-embedded-modal-icon {}

.mobile-wallet-adapter-embedded-modal-title {
    color: #000000;
    font-size: 2.5em;
    font-weight: 600;
}

.mobile-wallet-adapter-embedded-modal-qr-label {
    text-align: right;
    color: #000000;
}

.mobile-wallet-adapter-embedded-modal-qr-code-container {
    margin-left: auto;
}

.mobile-wallet-adapter-embedded-modal-divider {
    margin-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
}

.mobile-wallet-adapter-embedded-modal-divider hr {
    border-top: 1px solid #D9DEDE;
}

.mobile-wallet-adapter-embedded-modal-subtitle {
    margin: auto;
    margin-right: 60px;
    padding: 20px;
    color: #6E8286;
}

.mobile-wallet-adapter-embedded-modal-progress-badge {
    display: flex;
    background: #F7F8F8;
    height: 56px;
    min-width: 200px;
    margin: auto;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 18px;
    color: #A8B6B8;
    align-items: center;
}

.mobile-wallet-adapter-embedded-modal-progress-badge > div:first-child {
    margin-left: auto;
    margin-right: 20px;
}

.mobile-wallet-adapter-embedded-modal-progress-badge > div:nth-child(2) {
    margin-right: auto;
}

/* Smaller screens */
@media all and (max-width: 600px) {
    .mobile-wallet-adapter-embedded-modal-card {
        text-align: center;
    }
    .mobile-wallet-adapter-embedded-modal-qr-content {
        flex-direction: column;
    }
    .mobile-wallet-adapter-embedded-modal-qr-content > div:first-child {
        margin: auto;
    }
    .mobile-wallet-adapter-embedded-modal-qr-content > div:nth-child(2) {
        margin: auto;
        flex: 2 auto;
    }
    .mobile-wallet-adapter-embedded-modal-footer {
        flex-direction: column;
    }
    .mobile-wallet-adapter-embedded-modal-icon {
        display: none;
    }
    .mobile-wallet-adapter-embedded-modal-title {
        font-size: 1.5em;
    }
    .mobile-wallet-adapter-embedded-modal-subtitle {
        margin-right: unset;
    }
    .mobile-wallet-adapter-embedded-modal-qr-label {
        text-align: center;
    }
    .mobile-wallet-adapter-embedded-modal-qr-code-container {
        margin: auto;
    }
}

/* Spinner */
@keyframes spinLeft {
    0% {
        transform: rotate(20deg);
    }
    50% {
        transform: rotate(160deg);
    }
    100% {
        transform: rotate(20deg);
    }
}
@keyframes spinRight {
    0% {
        transform: rotate(160deg);
    }
    50% {
        transform: rotate(20deg);
    }
    100% {
        transform: rotate(160deg);
    }
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(2520deg);
    }
}

.spinner {
    position: relative;
    width: 1.5em;
    height: 1.5em;
    margin: auto;
    animation: spin 10s linear infinite;
}
.spinner::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.right, .rightWrapper, .left, .leftWrapper {
    position: absolute;
    top: 0;
    overflow: hidden;
    width: .75em;
    height: 1.5em;
}
.left, .leftWrapper {
    left: 0;
}
.right {
    left: -12px;
}
.rightWrapper {
    right: 0;
}
.circle {
    border: .125em solid #A8B6B8;
    width: 1.25em; /* 1.5em - 2*0.125em border */
    height: 1.25em; /* 1.5em - 2*0.125em border */
    border-radius: 0.75em; /* 0.5*1.5em spinner size 8 */
}
.left {
    transform-origin: 100% 50%;
    animation: spinLeft 2.5s cubic-bezier(.2,0,.8,1) infinite;
}
.right {
    transform-origin: 100% 50%;
    animation: spinRight 2.5s cubic-bezier(.2,0,.8,1) infinite;
}
`,
        eZ =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03IDIuNUgxN0MxNy44Mjg0IDIuNSAxOC41IDMuMTcxNTcgMTguNSA0VjIwQzE4LjUgMjAuODI4NCAxNy44Mjg0IDIxLjUgMTcgMjEuNUg3QzYuMTcxNTcgMjEuNSA1LjUgMjAuODI4NCA1LjUgMjBWNEM1LjUgMy4xNzE1NyA2LjE3MTU3IDIuNSA3IDIuNVpNMyA0QzMgMS43OTA4NiA0Ljc5MDg2IDAgNyAwSDE3QzE5LjIwOTEgMCAyMSAxLjc5MDg2IDIxIDRWMjBDMjEgMjIuMjA5MSAxOS4yMDkxIDI0IDE3IDI0SDdDNC43OTA4NiAyNCAzIDIyLjIwOTEgMyAyMFY0Wk0xMSA0LjYxNTM4QzEwLjQ0NzcgNC42MTUzOCAxMCA1LjA2MzEgMTAgNS42MTUzOFY2LjM4NDYyQzEwIDYuOTM2OSAxMC40NDc3IDcuMzg0NjIgMTEgNy4zODQ2MkgxM0MxMy41NTIzIDcuMzg0NjIgMTQgNi45MzY5IDE0IDYuMzg0NjJWNS42MTUzOEMxNCA1LjA2MzEgMTMuNTUyMyA0LjYxNTM4IDEzIDQuNjE1MzhIMTFaIiBmaWxsPSIjRENCOEZGIi8+Cjwvc3ZnPgo=";
      function e$(e) {
        return "version" in e;
      }
      function eY(e) {
        return window.btoa(String.fromCharCode.call(null, ...e));
      }
      function eQ(e) {
        return new Uint8Array(
          window
            .atob(e)
            .split("")
            .map((e) => e.charCodeAt(0))
        );
      }
      let eJ = "Mobile Wallet Adapter",
        eX = [
          eO.SolanaSignAndSendTransaction,
          eO.SolanaSignTransaction,
          eO.SolanaSignMessage,
          eO.SolanaSignIn,
        ];
      class e0 {
        constructor(e) {
          u.add(this),
            f.set(this, {}),
            h.set(this, "1.0.0"),
            p.set(this, eJ),
            g.set(this, "https://solanamobile.com/wallets"),
            m.set(this, eZ),
            y.set(this, void 0),
            w.set(this, void 0),
            v.set(this, void 0),
            b.set(this, !1),
            E.set(this, 0),
            x.set(this, []),
            S.set(this, void 0),
            A.set(this, void 0),
            T.set(this, void 0),
            I.set(this, (e, t) => {
              var n;
              return (
                (null == (n = eD(this, f, "f")[e]) ? void 0 : n.push(t)) ||
                  (eD(this, f, "f")[e] = [t]),
                () => eD(this, u, "m", O).call(this, e, t)
              );
            }),
            B.set(this, ({ silent: e } = {}) =>
              eU(this, void 0, void 0, function* () {
                if (eD(this, b, "f") || this.connected)
                  return { accounts: this.accounts };
                ej(this, b, !0, "f");
                try {
                  if (e) {
                    let e = yield eD(this, v, "f").get();
                    if (!e) return { accounts: this.accounts };
                    yield eD(this, C, "f").call(this, e);
                  } else yield eD(this, N, "f").call(this);
                } catch (e) {
                  throw Error(
                    (e instanceof Error && e.message) || "Unknown error"
                  );
                } finally {
                  ej(this, b, !1, "f");
                }
                return { accounts: this.accounts };
              })
            ),
            N.set(this, (e) =>
              eU(this, void 0, void 0, function* () {
                try {
                  let t = yield eD(this, v, "f").get();
                  if (t) return eD(this, C, "f").call(this, t), t;
                  let n = yield eD(this, S, "f").select(eD(this, x, "f"));
                  return yield eD(this, k, "f").call(this, (t) =>
                    eU(this, void 0, void 0, function* () {
                      let [r, i] = yield Promise.all([
                          t.getCapabilities(),
                          t.authorize({
                            chain: n,
                            identity: eD(this, y, "f"),
                            sign_in_payload: e,
                          }),
                        ]),
                        o = eD(this, P, "f").call(this, i.accounts),
                        a = Object.assign(Object.assign({}, i), {
                          accounts: o,
                          chain: n,
                        });
                      return (
                        Promise.all([
                          eD(this, M, "f").call(this, r),
                          eD(this, v, "f").set(a),
                          eD(this, C, "f").call(this, a),
                        ]),
                        a
                      );
                    })
                  );
                } catch (e) {
                  throw Error(
                    (e instanceof Error && e.message) || "Unknown error"
                  );
                }
              })
            ),
            C.set(this, (e) =>
              eU(this, void 0, void 0, function* () {
                var t;
                let n =
                  null == eD(this, w, "f") ||
                  (null == (t = eD(this, w, "f"))
                    ? void 0
                    : t.accounts.length) !== e.accounts.length ||
                  eD(this, w, "f").accounts.some(
                    (t, n) => t.address !== e.accounts[n].address
                  );
                ej(this, w, e, "f"),
                  n &&
                    eD(this, u, "m", _).call(this, "change", {
                      accounts: this.accounts,
                    });
              })
            ),
            M.set(this, (e) =>
              eU(this, void 0, void 0, function* () {
                let t = e.features.includes("solana:signTransactions"),
                  n = e.supports_sign_and_send_transactions,
                  r =
                    eO.SolanaSignAndSendTransaction in this.features !== n ||
                    eO.SolanaSignTransaction in this.features !== t;
                ej(
                  this,
                  A,
                  Object.assign(
                    Object.assign(
                      {},
                      (n || (!n && !t)) && {
                        [eO.SolanaSignAndSendTransaction]: {
                          version: "1.0.0",
                          supportedTransactionVersions: ["legacy", 0],
                          signAndSendTransaction: eD(this, j, "f"),
                        },
                      }
                    ),
                    t && {
                      [eO.SolanaSignTransaction]: {
                        version: "1.0.0",
                        supportedTransactionVersions: ["legacy", 0],
                        signTransaction: eD(this, z, "f"),
                      },
                    }
                  ),
                  "f"
                ),
                  r &&
                    eD(this, u, "m", _).call(this, "change", {
                      features: this.features,
                    });
              })
            ),
            L.set(this, (e, t, n) =>
              eU(this, void 0, void 0, function* () {
                try {
                  let r = yield e.authorize({
                      auth_token: t,
                      identity: eD(this, y, "f"),
                      chain: n,
                    }),
                    i = eD(this, P, "f").call(this, r.accounts),
                    o = Object.assign(Object.assign({}, r), {
                      accounts: i,
                      chain: n,
                    });
                  Promise.all([
                    eD(this, v, "f").set(o),
                    eD(this, C, "f").call(this, o),
                  ]);
                } catch (e) {
                  throw (
                    (eD(this, R, "f").call(this),
                    Error((e instanceof Error && e.message) || "Unknown error"))
                  );
                }
              })
            ),
            R.set(this, () =>
              eU(this, void 0, void 0, function* () {
                var e;
                eD(this, v, "f").clear(),
                  ej(this, b, !1, "f"),
                  ej(this, E, ((e = eD(this, E, "f")), ++e), "f"),
                  ej(this, w, void 0, "f"),
                  eD(this, u, "m", _).call(this, "change", {
                    accounts: this.accounts,
                  });
              })
            ),
            k.set(this, (e) =>
              eU(this, void 0, void 0, function* () {
                var t;
                let n =
                    null == (t = eD(this, w, "f")) ? void 0 : t.wallet_uri_base,
                  r = eD(this, E, "f");
                try {
                  return yield eL.transact(e, n ? { baseUri: n } : void 0);
                } catch (e) {
                  throw (
                    (eD(this, E, "f") !== r && (yield new Promise(() => {})),
                    e instanceof Error &&
                      "SolanaMobileWalletAdapterError" === e.name &&
                      "ERROR_WALLET_NOT_FOUND" === e.code &&
                      (yield eD(this, T, "f").call(this, this)),
                    e)
                  );
                }
              })
            ),
            W.set(this, () => {
              if (!eD(this, w, "f")) throw Error("Wallet not connected");
              return {
                authToken: eD(this, w, "f").auth_token,
                chain: eD(this, w, "f").chain,
              };
            }),
            P.set(this, (e) =>
              e.map((e) => {
                var t, n;
                let r = eQ(e.address);
                return {
                  address: eP.default.encode(r),
                  publicKey: r,
                  label: e.label,
                  icon: e.icon,
                  chains: null != (t = e.chains) ? t : eD(this, x, "f"),
                  features: null != (n = e.features) ? n : eX,
                };
              })
            ),
            U.set(this, (e) =>
              eU(this, void 0, void 0, function* () {
                let { authToken: t, chain: n } = eD(this, W, "f").call(this);
                try {
                  return yield eD(this, k, "f").call(this, (r) =>
                    eU(this, void 0, void 0, function* () {
                      return (
                        yield eD(this, L, "f").call(this, r, t, n),
                        yield r.signTransactions({ transactions: e })
                      );
                    })
                  );
                } catch (e) {
                  throw Error(
                    (e instanceof Error && e.message) || "Unknown error"
                  );
                }
              })
            ),
            D.set(this, (e, t) =>
              eU(this, void 0, void 0, function* () {
                let { authToken: n, chain: r } = eD(this, W, "f").call(this);
                try {
                  return yield eD(this, k, "f").call(this, (i) =>
                    eU(this, void 0, void 0, function* () {
                      let [o, a] = yield Promise.all([
                        i.getCapabilities(),
                        eD(this, L, "f").call(this, i, n, r),
                      ]);
                      if (o.supports_sign_and_send_transactions)
                        return (yield i.signAndSendTransactions(
                          Object.assign(Object.assign({}, t), {
                            transactions: [e],
                          })
                        ))[0];
                      throw Error(
                        "connected wallet does not support signAndSendTransaction"
                      );
                    })
                  );
                } catch (e) {
                  throw Error(
                    (e instanceof Error && e.message) || "Unknown error"
                  );
                }
              })
            ),
            j.set(this, (...e) =>
              eU(this, void 0, void 0, function* () {
                let t = [];
                for (let n of e) {
                  let e = eB.VersionedTransaction.deserialize(n.transaction),
                    r = yield eD(this, D, "f").call(this, e, n.options);
                  t.push({ signature: eP.default.decode(r) });
                }
                return t;
              })
            ),
            z.set(this, (...e) =>
              eU(this, void 0, void 0, function* () {
                let t = e.map(({ transaction: e }) =>
                  eB.VersionedTransaction.deserialize(e)
                );
                return (yield eD(this, U, "f").call(this, t)).map((e) => ({
                  signedTransaction: e$(e)
                    ? e.serialize()
                    : new Uint8Array(
                        e.serialize({
                          requireAllSignatures: !1,
                          verifySignatures: !1,
                        })
                      ),
                }));
              })
            ),
            H.set(this, (...e) =>
              eU(this, void 0, void 0, function* () {
                let { authToken: t, chain: n } = eD(this, W, "f").call(this),
                  r = e.map(({ account: e }) => eY(e.publicKey)),
                  i = e.map(({ message: e }) => e);
                try {
                  return yield eD(this, k, "f").call(this, (e) =>
                    eU(this, void 0, void 0, function* () {
                      return (
                        yield eD(this, L, "f").call(this, e, t, n),
                        (yield e.signMessages({
                          addresses: r,
                          payloads: i,
                        })).map((e) => ({
                          signedMessage: e,
                          signature: e.slice(-64),
                        }))
                      );
                    })
                  );
                } catch (e) {
                  throw Error(
                    (e instanceof Error && e.message) || "Unknown error"
                  );
                }
              })
            ),
            F.set(this, (...e) =>
              eU(this, void 0, void 0, function* () {
                let t = [];
                if (!(e.length > 1))
                  return [yield eD(this, q, "f").call(this, e[0])];
                for (let n of e) t.push(yield eD(this, q, "f").call(this, n));
                return t;
              })
            ),
            q.set(this, (e) =>
              eU(this, void 0, void 0, function* () {
                var t, n;
                ej(this, b, !0, "f");
                try {
                  let r = yield eD(this, N, "f").call(
                    this,
                    Object.assign(Object.assign({}, e), {
                      domain:
                        null != (t = null == e ? void 0 : e.domain)
                          ? t
                          : window.location.host,
                    })
                  );
                  if (!r.sign_in_result)
                    throw Error(
                      "Sign in failed, no sign in result returned by wallet"
                    );
                  let i = r.sign_in_result.address;
                  return {
                    account: Object.assign(
                      Object.assign(
                        {},
                        null != (n = r.accounts.find((e) => e.address == i))
                          ? n
                          : { address: i }
                      ),
                      { publicKey: eQ(i) }
                    ),
                    signedMessage: eQ(r.sign_in_result.signed_message),
                    signature: eQ(r.sign_in_result.signature),
                  };
                } catch (e) {
                  throw Error(
                    (e instanceof Error && e.message) || "Unknown error"
                  );
                } finally {
                  ej(this, b, !1, "f");
                }
              })
            ),
            ej(this, v, e.authorizationCache, "f"),
            ej(this, y, e.appIdentity, "f"),
            ej(this, x, e.chains, "f"),
            ej(this, S, e.chainSelector, "f"),
            ej(this, T, e.onWalletNotFound, "f"),
            ej(
              this,
              A,
              {
                [eO.SolanaSignAndSendTransaction]: {
                  version: "1.0.0",
                  supportedTransactionVersions: ["legacy", 0],
                  signAndSendTransaction: eD(this, j, "f"),
                },
              },
              "f"
            );
        }
        get version() {
          return eD(this, h, "f");
        }
        get name() {
          return eD(this, p, "f");
        }
        get url() {
          return eD(this, g, "f");
        }
        get icon() {
          return eD(this, m, "f");
        }
        get chains() {
          return eD(this, x, "f");
        }
        get features() {
          return Object.assign(
            {
              [eC.StandardConnect]: {
                version: "1.0.0",
                connect: eD(this, B, "f"),
              },
              [eC.StandardDisconnect]: {
                version: "1.0.0",
                disconnect: eD(this, R, "f"),
              },
              [eC.StandardEvents]: { version: "1.0.0", on: eD(this, I, "f") },
              [eO.SolanaSignMessage]: {
                version: "1.0.0",
                signMessage: eD(this, H, "f"),
              },
              [eO.SolanaSignIn]: { version: "1.0.0", signIn: eD(this, F, "f") },
            },
            eD(this, A, "f")
          );
        }
        get accounts() {
          var e, t;
          return null !=
            (t = null == (e = eD(this, w, "f")) ? void 0 : e.accounts)
            ? t
            : [];
        }
        get connected() {
          return !!eD(this, w, "f");
        }
        get isAuthorized() {
          return !!eD(this, w, "f");
        }
        get currentAuthorization() {
          return eD(this, w, "f");
        }
        get cachedAuthorizationResult() {
          return eD(this, v, "f").get();
        }
      }
      (f = new WeakMap()),
        (h = new WeakMap()),
        (p = new WeakMap()),
        (g = new WeakMap()),
        (m = new WeakMap()),
        (y = new WeakMap()),
        (w = new WeakMap()),
        (v = new WeakMap()),
        (b = new WeakMap()),
        (E = new WeakMap()),
        (x = new WeakMap()),
        (S = new WeakMap()),
        (A = new WeakMap()),
        (T = new WeakMap()),
        (I = new WeakMap()),
        (B = new WeakMap()),
        (N = new WeakMap()),
        (C = new WeakMap()),
        (M = new WeakMap()),
        (L = new WeakMap()),
        (R = new WeakMap()),
        (k = new WeakMap()),
        (W = new WeakMap()),
        (P = new WeakMap()),
        (U = new WeakMap()),
        (D = new WeakMap()),
        (j = new WeakMap()),
        (z = new WeakMap()),
        (H = new WeakMap()),
        (F = new WeakMap()),
        (q = new WeakMap()),
        (u = new WeakSet()),
        (_ = function (e, ...t) {
          var n;
          null == (n = eD(this, f, "f")[e]) ||
            n.forEach((e) => e.apply(null, t));
        }),
        (O = function (e, t) {
          var n;
          eD(this, f, "f")[e] =
            null == (n = eD(this, f, "f")[e])
              ? void 0
              : n.filter((e) => t !== e);
        });
      class e1 {
        constructor(e) {
          V.add(this),
            K.set(this, {}),
            G.set(this, "1.0.0"),
            Z.set(this, eJ),
            $.set(this, "https://solanamobile.com/wallets"),
            Y.set(this, eZ),
            Q.set(this, void 0),
            J.set(this, void 0),
            X.set(this, void 0),
            ee.set(this, !1),
            et.set(this, 0),
            en.set(this, []),
            er.set(this, void 0),
            ei.set(this, void 0),
            eo.set(this, void 0),
            ea.set(this, void 0),
            es.set(this, void 0),
            el.set(this, (e, t) => {
              var n;
              return (
                (null == (n = eD(this, K, "f")[e]) ? void 0 : n.push(t)) ||
                  (eD(this, K, "f")[e] = [t]),
                () => eD(this, V, "m", ed).call(this, e, t)
              );
            }),
            eu.set(this, ({ silent: e } = {}) =>
              eU(this, void 0, void 0, function* () {
                if (eD(this, ee, "f") || this.connected)
                  return { accounts: this.accounts };
                ej(this, ee, !0, "f");
                try {
                  yield eD(this, ef, "f").call(this);
                } catch (e) {
                  throw Error(
                    (e instanceof Error && e.message) || "Unknown error"
                  );
                } finally {
                  ej(this, ee, !1, "f");
                }
                return { accounts: this.accounts };
              })
            ),
            ef.set(this, (e) =>
              eU(this, void 0, void 0, function* () {
                try {
                  let t = yield eD(this, X, "f").get();
                  if (t) return eD(this, eh, "f").call(this, t), t;
                  eD(this, es, "f") && ej(this, es, void 0, "f");
                  let n = yield eD(this, er, "f").select(eD(this, en, "f"));
                  return yield eD(this, ey, "f").call(this, (t) =>
                    eU(this, void 0, void 0, function* () {
                      let [r, i] = yield Promise.all([
                          t.getCapabilities(),
                          t.authorize({
                            chain: n,
                            identity: eD(this, Q, "f"),
                            sign_in_payload: e,
                          }),
                        ]),
                        o = eD(this, ev, "f").call(this, i.accounts),
                        a = Object.assign(Object.assign({}, i), {
                          accounts: o,
                          chain: n,
                        });
                      return (
                        Promise.all([
                          eD(this, ep, "f").call(this, r),
                          eD(this, X, "f").set(a),
                          eD(this, eh, "f").call(this, a),
                        ]),
                        a
                      );
                    })
                  );
                } catch (e) {
                  throw Error(
                    (e instanceof Error && e.message) || "Unknown error"
                  );
                }
              })
            ),
            eh.set(this, (e) =>
              eU(this, void 0, void 0, function* () {
                var t;
                let n =
                  null == eD(this, J, "f") ||
                  (null == (t = eD(this, J, "f"))
                    ? void 0
                    : t.accounts.length) !== e.accounts.length ||
                  eD(this, J, "f").accounts.some(
                    (t, n) => t.address !== e.accounts[n].address
                  );
                ej(this, J, e, "f"),
                  n &&
                    eD(this, V, "m", ec).call(this, "change", {
                      accounts: this.accounts,
                    });
              })
            ),
            ep.set(this, (e) =>
              eU(this, void 0, void 0, function* () {
                let t = e.features.includes("solana:signTransactions"),
                  n =
                    e.supports_sign_and_send_transactions ||
                    e.features.includes("solana:signAndSendTransaction"),
                  r =
                    eO.SolanaSignAndSendTransaction in this.features !== n ||
                    eO.SolanaSignTransaction in this.features !== t;
                ej(
                  this,
                  ei,
                  Object.assign(
                    Object.assign(
                      {},
                      n && {
                        [eO.SolanaSignAndSendTransaction]: {
                          version: "1.0.0",
                          supportedTransactionVersions:
                            e.supported_transaction_versions,
                          signAndSendTransaction: eD(this, ex, "f"),
                        },
                      }
                    ),
                    t && {
                      [eO.SolanaSignTransaction]: {
                        version: "1.0.0",
                        supportedTransactionVersions:
                          e.supported_transaction_versions,
                        signTransaction: eD(this, eS, "f"),
                      },
                    }
                  ),
                  "f"
                ),
                  r &&
                    eD(this, V, "m", ec).call(this, "change", {
                      features: this.features,
                    });
              })
            ),
            eg.set(this, (e, t, n) =>
              eU(this, void 0, void 0, function* () {
                try {
                  let r = yield e.authorize({
                      auth_token: t,
                      identity: eD(this, Q, "f"),
                    }),
                    i = eD(this, ev, "f").call(this, r.accounts),
                    o = Object.assign(Object.assign({}, r), {
                      accounts: i,
                      chain: n,
                    });
                  Promise.all([
                    eD(this, X, "f").set(o),
                    eD(this, eh, "f").call(this, o),
                  ]);
                } catch (e) {
                  throw (
                    (eD(this, em, "f").call(this),
                    Error((e instanceof Error && e.message) || "Unknown error"))
                  );
                }
              })
            ),
            em.set(this, () =>
              eU(this, void 0, void 0, function* () {
                var e, t;
                null == (e = eD(this, es, "f")) || e.close(),
                  eD(this, X, "f").clear(),
                  ej(this, ee, !1, "f"),
                  ej(this, et, ((t = eD(this, et, "f")), ++t), "f"),
                  ej(this, J, void 0, "f"),
                  ej(this, es, void 0, "f"),
                  eD(this, V, "m", ec).call(this, "change", {
                    accounts: this.accounts,
                  });
              })
            ),
            ey.set(this, (e) =>
              eU(this, void 0, void 0, function* () {
                var t;
                let n =
                    null == (t = eD(this, J, "f")) ? void 0 : t.wallet_uri_base,
                  r = Object.assign(
                    Object.assign({}, n ? { baseUri: n } : void 0),
                    { remoteHostAuthority: eD(this, ea, "f") }
                  ),
                  i = eD(this, et, "f"),
                  o = new eV();
                if (eD(this, es, "f")) return e(eD(this, es, "f").wallet);
                try {
                  let {
                      associationUrl: t,
                      close: n,
                      wallet: i,
                    } = yield eL.startRemoteScenario(r),
                    a = o.addEventListener("close", (e) => {
                      e && n();
                    });
                  return (
                    o.initWithQR(t.toString()),
                    o.open(),
                    ej(this, es, { close: n, wallet: yield i }, "f"),
                    a(),
                    o.close(),
                    yield e(eD(this, es, "f").wallet)
                  );
                } catch (e) {
                  throw (
                    (o.close(),
                    eD(this, et, "f") !== i && (yield new Promise(() => {})),
                    e instanceof Error &&
                      "SolanaMobileWalletAdapterError" === e.name &&
                      "ERROR_WALLET_NOT_FOUND" === e.code &&
                      (yield eD(this, eo, "f").call(this, this)),
                    e)
                  );
                }
              })
            ),
            ew.set(this, () => {
              if (!eD(this, J, "f")) throw Error("Wallet not connected");
              return {
                authToken: eD(this, J, "f").auth_token,
                chain: eD(this, J, "f").chain,
              };
            }),
            ev.set(this, (e) =>
              e.map((e) => {
                var t, n;
                let r = eQ(e.address);
                return {
                  address: eP.default.encode(r),
                  publicKey: r,
                  label: e.label,
                  icon: e.icon,
                  chains: null != (t = e.chains) ? t : eD(this, en, "f"),
                  features: null != (n = e.features) ? n : eX,
                };
              })
            ),
            eb.set(this, (e) =>
              eU(this, void 0, void 0, function* () {
                let { authToken: t, chain: n } = eD(this, ew, "f").call(this);
                try {
                  return yield eD(this, ey, "f").call(this, (r) =>
                    eU(this, void 0, void 0, function* () {
                      return (
                        yield eD(this, eg, "f").call(this, r, t, n),
                        yield r.signTransactions({ transactions: e })
                      );
                    })
                  );
                } catch (e) {
                  throw Error(
                    (e instanceof Error && e.message) || "Unknown error"
                  );
                }
              })
            ),
            eE.set(this, (e, t) =>
              eU(this, void 0, void 0, function* () {
                let { authToken: n, chain: r } = eD(this, ew, "f").call(this);
                try {
                  return yield eD(this, ey, "f").call(this, (i) =>
                    eU(this, void 0, void 0, function* () {
                      let [o, a] = yield Promise.all([
                        i.getCapabilities(),
                        eD(this, eg, "f").call(this, i, n, r),
                      ]);
                      if (o.supports_sign_and_send_transactions)
                        return (yield i.signAndSendTransactions(
                          Object.assign(Object.assign({}, t), {
                            transactions: [e],
                          })
                        ))[0];
                      throw Error(
                        "connected wallet does not support signAndSendTransaction"
                      );
                    })
                  );
                } catch (e) {
                  throw Error(
                    (e instanceof Error && e.message) || "Unknown error"
                  );
                }
              })
            ),
            ex.set(this, (...e) =>
              eU(this, void 0, void 0, function* () {
                let t = [];
                for (let n of e) {
                  let e = eB.VersionedTransaction.deserialize(n.transaction),
                    r = yield eD(this, eE, "f").call(this, e, n.options);
                  t.push({ signature: eP.default.decode(r) });
                }
                return t;
              })
            ),
            eS.set(this, (...e) =>
              eU(this, void 0, void 0, function* () {
                let t = e.map(({ transaction: e }) =>
                  eB.VersionedTransaction.deserialize(e)
                );
                return (yield eD(this, eb, "f").call(this, t)).map((e) => ({
                  signedTransaction: e$(e)
                    ? e.serialize()
                    : new Uint8Array(
                        e.serialize({
                          requireAllSignatures: !1,
                          verifySignatures: !1,
                        })
                      ),
                }));
              })
            ),
            eA.set(this, (...e) =>
              eU(this, void 0, void 0, function* () {
                let { authToken: t, chain: n } = eD(this, ew, "f").call(this),
                  r = e.map(({ account: e }) => eY(e.publicKey)),
                  i = e.map(({ message: e }) => e);
                try {
                  return yield eD(this, ey, "f").call(this, (e) =>
                    eU(this, void 0, void 0, function* () {
                      return (
                        yield eD(this, eg, "f").call(this, e, t, n),
                        (yield e.signMessages({
                          addresses: r,
                          payloads: i,
                        })).map((e) => ({
                          signedMessage: e,
                          signature: e.slice(-64),
                        }))
                      );
                    })
                  );
                } catch (e) {
                  throw Error(
                    (e instanceof Error && e.message) || "Unknown error"
                  );
                }
              })
            ),
            eT.set(this, (...e) =>
              eU(this, void 0, void 0, function* () {
                let t = [];
                if (!(e.length > 1))
                  return [yield eD(this, eI, "f").call(this, e[0])];
                for (let n of e) t.push(yield eD(this, eI, "f").call(this, n));
                return t;
              })
            ),
            eI.set(this, (e) =>
              eU(this, void 0, void 0, function* () {
                var t, n;
                ej(this, ee, !0, "f");
                try {
                  let r = yield eD(this, ef, "f").call(
                    this,
                    Object.assign(Object.assign({}, e), {
                      domain:
                        null != (t = null == e ? void 0 : e.domain)
                          ? t
                          : window.location.host,
                    })
                  );
                  if (!r.sign_in_result)
                    throw Error(
                      "Sign in failed, no sign in result returned by wallet"
                    );
                  let i = r.sign_in_result.address;
                  return {
                    account: Object.assign(
                      Object.assign(
                        {},
                        null != (n = r.accounts.find((e) => e.address == i))
                          ? n
                          : { address: i }
                      ),
                      { publicKey: eQ(i) }
                    ),
                    signedMessage: eQ(r.sign_in_result.signed_message),
                    signature: eQ(r.sign_in_result.signature),
                  };
                } catch (e) {
                  throw Error(
                    (e instanceof Error && e.message) || "Unknown error"
                  );
                } finally {
                  ej(this, ee, !1, "f");
                }
              })
            ),
            ej(this, X, e.authorizationCache, "f"),
            ej(this, Q, e.appIdentity, "f"),
            ej(this, en, e.chains, "f"),
            ej(this, er, e.chainSelector, "f"),
            ej(this, ea, e.remoteHostAuthority, "f"),
            ej(this, eo, e.onWalletNotFound, "f"),
            ej(
              this,
              ei,
              {
                [eO.SolanaSignAndSendTransaction]: {
                  version: "1.0.0",
                  supportedTransactionVersions: ["legacy", 0],
                  signAndSendTransaction: eD(this, ex, "f"),
                },
              },
              "f"
            );
        }
        get version() {
          return eD(this, G, "f");
        }
        get name() {
          return eD(this, Z, "f");
        }
        get url() {
          return eD(this, $, "f");
        }
        get icon() {
          return eD(this, Y, "f");
        }
        get chains() {
          return eD(this, en, "f");
        }
        get features() {
          return Object.assign(
            {
              [eC.StandardConnect]: {
                version: "1.0.0",
                connect: eD(this, eu, "f"),
              },
              [eC.StandardDisconnect]: {
                version: "1.0.0",
                disconnect: eD(this, em, "f"),
              },
              [eC.StandardEvents]: { version: "1.0.0", on: eD(this, el, "f") },
              [eO.SolanaSignMessage]: {
                version: "1.0.0",
                signMessage: eD(this, eA, "f"),
              },
              [eO.SolanaSignIn]: {
                version: "1.0.0",
                signIn: eD(this, eT, "f"),
              },
            },
            eD(this, ei, "f")
          );
        }
        get accounts() {
          var e, t;
          return null !=
            (t = null == (e = eD(this, J, "f")) ? void 0 : e.accounts)
            ? t
            : [];
        }
        get connected() {
          return !!eD(this, es, "f") && !!eD(this, J, "f");
        }
        get isAuthorized() {
          return !!eD(this, J, "f");
        }
        get currentAuthorization() {
          return eD(this, J, "f");
        }
        get cachedAuthorizationResult() {
          return eD(this, X, "f").get();
        }
      }
      (K = new WeakMap()),
        (G = new WeakMap()),
        (Z = new WeakMap()),
        ($ = new WeakMap()),
        (Y = new WeakMap()),
        (Q = new WeakMap()),
        (J = new WeakMap()),
        (X = new WeakMap()),
        (ee = new WeakMap()),
        (et = new WeakMap()),
        (en = new WeakMap()),
        (er = new WeakMap()),
        (ei = new WeakMap()),
        (eo = new WeakMap()),
        (ea = new WeakMap()),
        (es = new WeakMap()),
        (el = new WeakMap()),
        (eu = new WeakMap()),
        (ef = new WeakMap()),
        (eh = new WeakMap()),
        (ep = new WeakMap()),
        (eg = new WeakMap()),
        (em = new WeakMap()),
        (ey = new WeakMap()),
        (ew = new WeakMap()),
        (ev = new WeakMap()),
        (eb = new WeakMap()),
        (eE = new WeakMap()),
        (ex = new WeakMap()),
        (eS = new WeakMap()),
        (eA = new WeakMap()),
        (eT = new WeakMap()),
        (eI = new WeakMap()),
        (V = new WeakSet()),
        (ec = function (e, ...t) {
          var n;
          null == (n = eD(this, K, "f")[e]) ||
            n.forEach((e) => e.apply(null, t));
        }),
        (ed = function (e, t) {
          var n;
          eD(this, K, "f")[e] =
            null == (n = eD(this, K, "f")[e])
              ? void 0
              : n.filter((e) => t !== e);
        });
      var e2 = function (e, t, n, r, i) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
        },
        e5 = function (e, t, n, r) {
          if ("a" === n && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        };
      function e3(e) {
        let t = ({ register: t }) => t(e);
        try {
          window.dispatchEvent(new e8(t));
        } catch (e) {
          console.error(
            "wallet-standard:register-wallet event could not be dispatched\n",
            e
          );
        }
        try {
          window.addEventListener(
            "wallet-standard:app-ready",
            ({ detail: e }) => t(e)
          );
        } catch (e) {
          console.error(
            "wallet-standard:app-ready event listener could not be added\n",
            e
          );
        }
      }
      class e8 extends Event {
        constructor(e) {
          super("wallet-standard:register-wallet", {
            bubbles: !1,
            cancelable: !1,
            composed: !1,
          }),
            e_.set(this, void 0),
            e2(this, e_, e, "f");
        }
        get detail() {
          return e5(this, e_, "f");
        }
        get type() {
          return "wallet-standard:register-wallet";
        }
        preventDefault() {
          throw Error("preventDefault cannot be called");
        }
        stopImmediatePropagation() {
          throw Error("stopImmediatePropagation cannot be called");
        }
        stopPropagation() {
          throw Error("stopPropagation cannot be called");
        }
      }
      e_ = new WeakMap();
      class e6 extends eq {
        constructor() {
          super(...arguments),
            (this.contentStyles = e7),
            (this.contentHtml = e4);
        }
        initWithError(e) {
          super.init(), this.populateError(e);
        }
        populateError(e) {
          var t, n;
          let r =
              null == (t = this.dom)
                ? void 0
                : t.getElementById("mobile-wallet-adapter-error-message"),
            i =
              null == (n = this.dom)
                ? void 0
                : n.getElementById("mobile-wallet-adapter-error-action");
          if (r) {
            if ("SolanaMobileWalletAdapterError" === e.name)
              switch (e.code) {
                case "ERROR_WALLET_NOT_FOUND":
                  (r.innerHTML =
                    "To use mobile wallet adapter, you must have a compatible mobile wallet application installed on your device."),
                    i &&
                      i.addEventListener("click", () => {
                        window.location.href =
                          "https://solanamobile.com/wallets";
                      });
                  return;
                case "ERROR_BROWSER_NOT_SUPPORTED":
                  (r.innerHTML =
                    "This browser appears to be incompatible with mobile wallet adapter. Open this page in a compatible mobile browser app and try again."),
                    i && (i.style.display = "none");
                  return;
              }
            r.innerHTML = `An unexpected error occurred: ${e.message}`;
          } else console.log("Failed to locate error dialog element");
        }
      }
      let e4 = `
<svg class="mobile-wallet-adapter-embedded-modal-error-icon" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000"><path d="M 280,-80 Q 197,-80 138.5,-138.5 80,-197 80,-280 80,-363 138.5,-421.5 197,-480 280,-480 q 83,0 141.5,58.5 58.5,58.5 58.5,141.5 0,83 -58.5,141.5 Q 363,-80 280,-80 Z M 824,-120 568,-376 Q 556,-389 542.5,-402.5 529,-416 516,-428 q 38,-24 61,-64 23,-40 23,-88 0,-75 -52.5,-127.5 Q 495,-760 420,-760 345,-760 292.5,-707.5 240,-655 240,-580 q 0,6 0.5,11.5 0.5,5.5 1.5,11.5 -18,2 -39.5,8 -21.5,6 -38.5,14 -2,-11 -3,-22 -1,-11 -1,-23 0,-109 75.5,-184.5 Q 311,-840 420,-840 q 109,0 184.5,75.5 75.5,75.5 75.5,184.5 0,43 -13.5,81.5 Q 653,-460 629,-428 l 251,252 z m -615,-61 71,-71 70,71 29,-28 -71,-71 71,-71 -28,-28 -71,71 -71,-71 -28,28 71,71 -71,71 z"/></svg>
<div class="mobile-wallet-adapter-embedded-modal-title">We can't find a wallet.</div>
<div id="mobile-wallet-adapter-error-message" class="mobile-wallet-adapter-embedded-modal-subtitle"></div>
<div>
    <button data-error-action id="mobile-wallet-adapter-error-action" class="mobile-wallet-adapter-embedded-modal-error-action">
        Find a wallet
    </button>
</div>
`,
        e7 = `
.mobile-wallet-adapter-embedded-modal-content {
    text-align: center;
}

.mobile-wallet-adapter-embedded-modal-error-icon {
    margin-top: 24px;
}

.mobile-wallet-adapter-embedded-modal-title {
    margin: 18px 100px auto 100px;
    color: #000000;
    font-size: 2.75em;
    font-weight: 600;
}

.mobile-wallet-adapter-embedded-modal-subtitle {
    margin: 30px 60px 40px 60px;
    color: #000000;
    font-size: 1.25em;
    font-weight: 400;
}

.mobile-wallet-adapter-embedded-modal-error-action {
    display: block;
    width: 100%;
    height: 56px;
    /*margin-top: 40px;*/
    font-size: 1.25em;
    /*line-height: 24px;*/
    /*letter-spacing: -1%;*/
    background: #000000;
    color: #FFFFFF;
    border-radius: 18px;
}

/* Smaller screens */
@media all and (max-width: 600px) {
    .mobile-wallet-adapter-embedded-modal-title {
        font-size: 1.5em;
        margin-right: 12px;
        margin-left: 12px;
    }
    .mobile-wallet-adapter-embedded-modal-subtitle {
        margin-right: 12px;
        margin-left: 12px;
    }
}
`;
      function e9() {
        return eU(this, void 0, void 0, function* () {
          if ("undefined" != typeof window) {
            let e = window.navigator.userAgent.toLowerCase(),
              t = new e6();
            e.includes("wv")
              ? t.initWithError({
                  name: "SolanaMobileWalletAdapterError",
                  code: "ERROR_BROWSER_NOT_SUPPORTED",
                  message: "",
                })
              : t.initWithError({
                  name: "SolanaMobileWalletAdapterError",
                  code: "ERROR_WALLET_NOT_FOUND",
                  message: "",
                }),
              t.open();
          }
        });
      }
      let te = "SolanaMobileWalletAdapterDefaultAuthorizationCache";
      (t.LocalSolanaMobileWalletAdapterWallet = e0),
        (t.RemoteSolanaMobileWalletAdapterWallet = e1),
        (t.SolanaMobileWalletAdapterWalletName = eJ),
        (t.createDefaultAuthorizationCache = function () {
          let e;
          try {
            e = window.localStorage;
          } catch (e) {}
          return {
            clear() {
              return eU(this, void 0, void 0, function* () {
                if (e)
                  try {
                    e.removeItem(te);
                  } catch (e) {}
              });
            },
            get() {
              return eU(this, void 0, void 0, function* () {
                if (e)
                  try {
                    let t = JSON.parse(e.getItem(te));
                    if (!t || !t.accounts) return t || void 0;
                    {
                      let e = t.accounts.map((e) =>
                        Object.assign(Object.assign({}, e), {
                          publicKey:
                            "publicKey" in e
                              ? new Uint8Array(Object.values(e.publicKey))
                              : new eB.PublicKey(e.address).toBytes(),
                        })
                      );
                      return Object.assign(Object.assign({}, t), {
                        accounts: e,
                      });
                    }
                  } catch (e) {}
              });
            },
            set(t) {
              return eU(this, void 0, void 0, function* () {
                if (e)
                  try {
                    e.setItem(te, JSON.stringify(t));
                  } catch (e) {}
              });
            },
          };
        }),
        (t.createDefaultChainSelector = function () {
          return {
            select(e) {
              return eU(this, void 0, void 0, function* () {
                return 1 === e.length
                  ? e[0]
                  : e.includes(eM.SOLANA_MAINNET_CHAIN)
                  ? eM.SOLANA_MAINNET_CHAIN
                  : e[0];
              });
            },
          };
        }),
        (t.createDefaultWalletNotFoundHandler = function () {
          return () =>
            eU(this, void 0, void 0, function* () {
              e9();
            });
        }),
        (t.defaultErrorModalWalletNotFoundHandler = e9),
        (t.registerMwa = function (e) {
          "undefined" != typeof window &&
          window.isSecureContext &&
          "undefined" != typeof document &&
          /android/i.test(navigator.userAgent)
            ? e3(new e0(e))
            : "undefined" != typeof window &&
              window.isSecureContext &&
              "undefined" != typeof document &&
              !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              ) &&
              void 0 !== e.remoteHostAuthority &&
              e3(
                new e1(
                  Object.assign(Object.assign({}, e), {
                    remoteHostAuthority: e.remoteHostAuthority,
                  })
                )
              );
        });
    },
    39419: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SolanaSignIn = void 0),
        (t.SolanaSignIn = "solana:signIn");
    },
    40622: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HashMD = t.Maj = t.Chi = void 0),
        (t.setBigUint64 = o);
      let r = n(26773),
        i = n(12315);
      function o(e, t, n, r) {
        if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, n, r);
        let i = BigInt(32),
          o = BigInt(0xffffffff),
          a = Number((n >> i) & o),
          s = Number(n & o),
          l = 4 * !!r,
          c = 4 * !r;
        e.setUint32(t + l, a, r), e.setUint32(t + c, s, r);
      }
      (t.Chi = (e, t, n) => (e & t) ^ (~e & n)),
        (t.Maj = (e, t, n) => (e & t) ^ (e & n) ^ (t & n));
      class a extends i.Hash {
        constructor(e, t, n, r) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, i.createView)(this.buffer));
        }
        update(e) {
          (0, r.aexists)(this);
          let { view: t, buffer: n, blockLen: o } = this,
            a = (e = (0, i.toBytes)(e)).length;
          for (let r = 0; r < a; ) {
            let s = Math.min(o - this.pos, a - r);
            if (s === o) {
              let t = (0, i.createView)(e);
              for (; o <= a - r; r += o) this.process(t, r);
              continue;
            }
            n.set(e.subarray(r, r + s), this.pos),
              (this.pos += s),
              (r += s),
              this.pos === o && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, r.aexists)(this), (0, r.aoutput)(e, this), (this.finished = !0);
          let { buffer: t, view: n, blockLen: a, isLE: s } = this,
            { pos: l } = this;
          (t[l++] = 128),
            this.buffer.subarray(l).fill(0),
            this.padOffset > a - l && (this.process(n, 0), (l = 0));
          for (let e = l; e < a; e++) t[e] = 0;
          o(n, a - 8, BigInt(8 * this.length), s), this.process(n, 0);
          let c = (0, i.createView)(e),
            d = this.outputLen;
          if (d % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let u = d / 4,
            f = this.get();
          if (u > f.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < u; e++) c.setUint32(4 * e, f[e], s);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: n,
            length: r,
            finished: i,
            destroyed: o,
            pos: a,
          } = this;
          return (
            (e.length = r),
            (e.pos = a),
            (e.finished = i),
            (e.destroyed = o),
            r % t && e.buffer.set(n),
            e
          );
        }
      }
      t.HashMD = a;
    },
    41210: (e, t) => {
      (t.L = { bit: 1 }),
        (t.M = { bit: 0 }),
        (t.Q = { bit: 3 }),
        (t.H = { bit: 2 }),
        (t.isValid = function (e) {
          return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4;
        }),
        (t.from = function (e, n) {
          if (t.isValid(e)) return e;
          try {
            if ("string" != typeof e) throw Error("Param is not a string");
            switch (e.toLowerCase()) {
              case "l":
              case "low":
                return t.L;
              case "m":
              case "medium":
                return t.M;
              case "q":
              case "quartile":
                return t.Q;
              case "h":
              case "high":
                return t.H;
              default:
                throw Error("Unknown EC Level: " + e);
            }
          } catch (e) {
            return n;
          }
        });
    },
    42432: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.twistedEdwards = function (e) {
          let t = (function (e) {
              let t = (0, r.validateBasic)(e);
              return (
                o.validateObject(
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
              Fp: n,
              n: f,
              prehash: h,
              hash: p,
              randomBytes: g,
              nByteLength: m,
              h: y,
            } = t,
            w = c << (BigInt(8 * m) - l),
            v = n.create,
            b = (0, i.Field)(t.n, t.nBitLength),
            E =
              t.uvRatio ||
              ((e, t) => {
                try {
                  return { isValid: !0, value: n.sqrt(e * n.inv(t)) };
                } catch (e) {
                  return { isValid: !1, value: s };
                }
              }),
            x = t.adjustScalarBytes || ((e) => e),
            S =
              t.domain ||
              ((e, t, n) => {
                if (((0, a.abool)("phflag", n), t.length || n))
                  throw Error("Contexts/pre-hash are not supported");
                return e;
              });
          function A(e, t) {
            o.aInRange("coordinate " + e, t, s, w);
          }
          function T(e) {
            if (!(e instanceof O)) throw Error("ExtendedPoint expected");
          }
          let I = (0, a.memoized)((e, t) => {
              let { ex: r, ey: i, ez: o } = e,
                a = e.is0();
              null == t && (t = a ? d : n.inv(o));
              let c = v(r * t),
                u = v(i * t),
                f = v(o * t);
              if (a) return { x: s, y: l };
              if (f !== l) throw Error("invZ was invalid");
              return { x: c, y: u };
            }),
            _ = (0, a.memoized)((e) => {
              let { a: n, d: r } = t;
              if (e.is0()) throw Error("bad point: ZERO");
              let { ex: i, ey: o, ez: a, et: s } = e,
                l = v(i * i),
                c = v(o * o),
                d = v(a * a),
                u = v(d * d),
                f = v(l * n);
              if (v(d * v(f + c)) !== v(u + v(r * v(l * c))))
                throw Error("bad point: equation left != right (1)");
              if (v(i * o) !== v(a * s))
                throw Error("bad point: equation left != right (2)");
              return !0;
            });
          class O {
            constructor(e, t, n, r) {
              (this.ex = e),
                (this.ey = t),
                (this.ez = n),
                (this.et = r),
                A("x", e),
                A("y", t),
                A("z", n),
                A("t", r),
                Object.freeze(this);
            }
            get x() {
              return this.toAffine().x;
            }
            get y() {
              return this.toAffine().y;
            }
            static fromAffine(e) {
              if (e instanceof O) throw Error("extended point not allowed");
              let { x: t, y: n } = e || {};
              return A("x", t), A("y", n), new O(t, n, l, v(t * n));
            }
            static normalizeZ(e) {
              let t = n.invertBatch(e.map((e) => e.ez));
              return e.map((e, n) => e.toAffine(t[n])).map(O.fromAffine);
            }
            static msm(e, t) {
              return (0, r.pippenger)(O, b, e, t);
            }
            _setWindowSize(e) {
              C.setWindowSize(this, e);
            }
            assertValidity() {
              _(this);
            }
            equals(e) {
              T(e);
              let { ex: t, ey: n, ez: r } = this,
                { ex: i, ey: o, ez: a } = e,
                s = v(t * a),
                l = v(i * r),
                c = v(n * a),
                d = v(o * r);
              return s === l && c === d;
            }
            is0() {
              return this.equals(O.ZERO);
            }
            negate() {
              return new O(v(-this.ex), this.ey, this.ez, v(-this.et));
            }
            double() {
              let { a: e } = t,
                { ex: n, ey: r, ez: i } = this,
                o = v(n * n),
                a = v(r * r),
                s = v(c * v(i * i)),
                l = v(e * o),
                d = n + r,
                u = v(v(d * d) - o - a),
                f = l + a,
                h = f - s,
                p = l - a,
                g = v(u * h),
                m = v(f * p),
                y = v(u * p);
              return new O(g, m, v(h * f), y);
            }
            add(e) {
              T(e);
              let { a: n, d: r } = t,
                { ex: i, ey: o, ez: a, et: l } = this,
                { ex: d, ey: u, ez: f, et: h } = e;
              if (n === BigInt(-1)) {
                let e = v((o - i) * (u + d)),
                  t = v((o + i) * (u - d)),
                  n = v(t - e);
                if (n === s) return this.double();
                let r = v(a * c * h),
                  p = v(l * c * f),
                  g = p + r,
                  m = t + e,
                  y = p - r,
                  w = v(g * n),
                  b = v(m * y),
                  E = v(g * y);
                return new O(w, b, v(n * m), E);
              }
              let p = v(i * d),
                g = v(o * u),
                m = v(l * r * h),
                y = v(a * f),
                w = v((i + o) * (d + u) - p - g),
                b = y - m,
                E = y + m,
                x = v(g - n * p),
                S = v(w * b),
                A = v(E * x),
                I = v(w * x);
              return new O(S, A, v(b * E), I);
            }
            subtract(e) {
              return this.add(e.negate());
            }
            wNAF(e) {
              return C.wNAFCached(this, e, O.normalizeZ);
            }
            multiply(e) {
              o.aInRange("scalar", e, l, f);
              let { p: t, f: n } = this.wNAF(e);
              return O.normalizeZ([t, n])[0];
            }
            multiplyUnsafe(e, t = O.ZERO) {
              return (o.aInRange("scalar", e, s, f), e === s)
                ? N
                : this.is0() || e === l
                ? this
                : C.wNAFCachedUnsafe(this, e, O.normalizeZ, t);
            }
            isSmallOrder() {
              return this.multiplyUnsafe(y).is0();
            }
            isTorsionFree() {
              return C.unsafeLadder(this, f).is0();
            }
            toAffine(e) {
              return I(this, e);
            }
            clearCofactor() {
              let { h: e } = t;
              return e === l ? this : this.multiplyUnsafe(e);
            }
            static fromHex(e, r = !1) {
              let { d: i, a: c } = t,
                d = n.BYTES;
              (e = (0, a.ensureBytes)("pointHex", e, d)),
                (0, a.abool)("zip215", r);
              let u = e.slice(),
                f = e[d - 1];
              u[d - 1] = -129 & f;
              let h = o.bytesToNumberLE(u),
                p = r ? w : n.ORDER;
              o.aInRange("pointHex.y", h, s, p);
              let g = v(h * h),
                { isValid: m, value: y } = E(v(g - l), v(i * g - c));
              if (!m) throw Error("Point.fromHex: invalid y coordinate");
              let b = (y & l) === l,
                x = (128 & f) != 0;
              if (!r && y === s && x)
                throw Error("Point.fromHex: x=0 and x_0=1");
              return x !== b && (y = v(-y)), O.fromAffine({ x: y, y: h });
            }
            static fromPrivateKey(e) {
              return R(e).point;
            }
            toRawBytes() {
              let { x: e, y: t } = this.toAffine(),
                r = o.numberToBytesLE(t, n.BYTES);
              return (r[r.length - 1] |= e & l ? 128 : 0), r;
            }
            toHex() {
              return o.bytesToHex(this.toRawBytes());
            }
          }
          (O.BASE = new O(t.Gx, t.Gy, l, v(t.Gx * t.Gy))),
            (O.ZERO = new O(s, l, l, s));
          let { BASE: B, ZERO: N } = O,
            C = (0, r.wNAF)(O, 8 * m);
          function M(e) {
            return (0, i.mod)(e, f);
          }
          function L(e) {
            return M(o.bytesToNumberLE(e));
          }
          function R(e) {
            let t = n.BYTES;
            e = (0, a.ensureBytes)("private key", e, t);
            let r = (0, a.ensureBytes)("hashed private key", p(e), 2 * t),
              i = x(r.slice(0, t)),
              o = r.slice(t, 2 * t),
              s = L(i),
              l = B.multiply(s),
              c = l.toRawBytes();
            return { head: i, prefix: o, scalar: s, point: l, pointBytes: c };
          }
          function k(e = new Uint8Array(), ...t) {
            return L(
              p(S(o.concatBytes(...t), (0, a.ensureBytes)("context", e), !!h))
            );
          }
          return (
            B._setWindowSize(8),
            {
              CURVE: t,
              getPublicKey: function (e) {
                return R(e).pointBytes;
              },
              sign: function (e, t, r = {}) {
                (e = (0, a.ensureBytes)("message", e)), h && (e = h(e));
                let { prefix: i, scalar: l, pointBytes: c } = R(t),
                  d = k(r.context, i, e),
                  u = B.multiply(d).toRawBytes(),
                  p = M(d + k(r.context, u, c, e) * l);
                o.aInRange("signature.s", p, s, f);
                let g = o.concatBytes(u, o.numberToBytesLE(p, n.BYTES));
                return (0, a.ensureBytes)("result", g, 2 * n.BYTES);
              },
              verify: function (e, t, r, i = u) {
                let s,
                  l,
                  c,
                  { context: d, zip215: f } = i,
                  p = n.BYTES;
                (e = (0, a.ensureBytes)("signature", e, 2 * p)),
                  (t = (0, a.ensureBytes)("message", t)),
                  (r = (0, a.ensureBytes)("publicKey", r, p)),
                  void 0 !== f && (0, a.abool)("zip215", f),
                  h && (t = h(t));
                let g = o.bytesToNumberLE(e.slice(p, 2 * p));
                try {
                  (s = O.fromHex(r, f)),
                    (l = O.fromHex(e.slice(0, p), f)),
                    (c = B.multiplyUnsafe(g));
                } catch (e) {
                  return !1;
                }
                if (!f && s.isSmallOrder()) return !1;
                let m = k(d, l.toRawBytes(), s.toRawBytes(), t);
                return l
                  .add(s.multiplyUnsafe(m))
                  .subtract(c)
                  .clearCofactor()
                  .equals(O.ZERO);
              },
              ExtendedPoint: O,
              utils: {
                getExtendedPublicKey: R,
                randomPrivateKey: () => g(n.BYTES),
                precompute: (e = 8, t = O.BASE) => (
                  t._setWindowSize(e), t.multiply(BigInt(3)), t
                ),
              },
            }
          );
        });
      let r = n(57479),
        i = n(43286),
        o = n(44045),
        a = n(44045),
        s = BigInt(0),
        l = BigInt(1),
        c = BigInt(2),
        d = BigInt(8),
        u = { zip215: !0 };
    },
    42552: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (function (e) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        let t = new Uint8Array(256);
        for (let e = 0; e < t.length; e++) t[e] = 255;
        for (let n = 0; n < e.length; n++) {
          let r = e.charAt(n),
            i = r.charCodeAt(0);
          if (255 !== t[i]) throw TypeError(r + " is ambiguous");
          t[i] = n;
        }
        let n = e.length,
          r = e.charAt(0),
          i = Math.log(n) / Math.log(256),
          o = Math.log(256) / Math.log(n);
        function a(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          let o = 0,
            a = 0,
            s = 0;
          for (; e[o] === r; ) a++, o++;
          let l = ((e.length - o) * i + 1) >>> 0,
            c = new Uint8Array(l);
          for (; o < e.length; ) {
            let r = e.charCodeAt(o);
            if (r > 255) return;
            let i = t[r];
            if (255 === i) return;
            let a = 0;
            for (let e = l - 1; (0 !== i || a < s) && -1 !== e; e--, a++)
              (i += (n * c[e]) >>> 0),
                (c[e] = i % 256 >>> 0),
                (i = (i / 256) >>> 0);
            if (0 !== i) throw Error("Non-zero carry");
            (s = a), o++;
          }
          let d = l - s;
          for (; d !== l && 0 === c[d]; ) d++;
          let u = new Uint8Array(a + (l - d)),
            f = a;
          for (; d !== l; ) u[f++] = c[d++];
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
            let i = 0,
              a = 0,
              s = 0,
              l = t.length;
            for (; s !== l && 0 === t[s]; ) s++, i++;
            let c = ((l - s) * o + 1) >>> 0,
              d = new Uint8Array(c);
            for (; s !== l; ) {
              let e = t[s],
                r = 0;
              for (let t = c - 1; (0 !== e || r < a) && -1 !== t; t--, r++)
                (e += (256 * d[t]) >>> 0),
                  (d[t] = e % n >>> 0),
                  (e = (e / n) >>> 0);
              if (0 !== e) throw Error("Non-zero carry");
              (a = r), s++;
            }
            let u = c - a;
            for (; u !== c && 0 === d[u]; ) u++;
            let f = r.repeat(i);
            for (; u < c; ++u) f += e.charAt(d[u]);
            return f;
          },
          decodeUnsafe: a,
          decode: function (e) {
            let t = a(e);
            if (t) return t;
            throw Error("Non-base" + n + " character");
          },
        };
      })("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
    },
    42669: (e, t) => {
      t.isValid = function (e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
    },
    43286: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isNegativeLE = void 0),
        (t.mod = u),
        (t.pow = f),
        (t.pow2 = function (e, t, n) {
          let r = e;
          for (; t-- > i; ) (r *= r), (r %= n);
          return r;
        }),
        (t.invert = h),
        (t.tonelliShanks = p),
        (t.FpSqrt = g),
        (t.validateField = function (e) {
          let t = m.reduce((e, t) => ((e[t] = "function"), e), {
            ORDER: "bigint",
            MASK: "bigint",
            BYTES: "isSafeInteger",
            BITS: "isSafeInteger",
          });
          return (0, r.validateObject)(e, t);
        }),
        (t.FpPow = y),
        (t.FpInvertBatch = w),
        (t.FpDiv = function (e, t, n) {
          return e.mul(t, "bigint" == typeof n ? h(n, e.ORDER) : e.inv(n));
        }),
        (t.FpLegendre = v),
        (t.FpIsSquare = function (e) {
          let t = v(e.ORDER);
          return (n) => {
            let r = t(e, n);
            return e.eql(r, e.ZERO) || e.eql(r, e.ONE);
          };
        }),
        (t.nLength = b),
        (t.Field = function (e, t, n = !1, a = {}) {
          let s;
          if (e <= i)
            throw Error("invalid field: expected ORDER > 0, got " + e);
          let { nBitLength: l, nByteLength: c } = b(e, t);
          if (c > 2048)
            throw Error("invalid field: expected ORDER of <= 2048 bytes");
          let d = Object.freeze({
            ORDER: e,
            isLE: n,
            BITS: l,
            BYTES: c,
            MASK: (0, r.bitMask)(l),
            ZERO: i,
            ONE: o,
            create: (t) => u(t, e),
            isValid: (t) => {
              if ("bigint" != typeof t)
                throw Error(
                  "invalid field element: expected bigint, got " + typeof t
                );
              return i <= t && t < e;
            },
            is0: (e) => e === i,
            isOdd: (e) => (e & o) === o,
            neg: (t) => u(-t, e),
            eql: (e, t) => e === t,
            sqr: (t) => u(t * t, e),
            add: (t, n) => u(t + n, e),
            sub: (t, n) => u(t - n, e),
            mul: (t, n) => u(t * n, e),
            pow: (e, t) => y(d, e, t),
            div: (t, n) => u(t * h(n, e), e),
            sqrN: (e) => e * e,
            addN: (e, t) => e + t,
            subN: (e, t) => e - t,
            mulN: (e, t) => e * t,
            inv: (t) => h(t, e),
            sqrt: a.sqrt || ((t) => (s || (s = g(e)), s(d, t))),
            invertBatch: (e) => w(d, e),
            cmov: (e, t, n) => (n ? t : e),
            toBytes: (e) =>
              n ? (0, r.numberToBytesLE)(e, c) : (0, r.numberToBytesBE)(e, c),
            fromBytes: (e) => {
              if (e.length !== c)
                throw Error(
                  "Field.fromBytes: expected " + c + " bytes, got " + e.length
                );
              return n ? (0, r.bytesToNumberLE)(e) : (0, r.bytesToNumberBE)(e);
            },
          });
          return Object.freeze(d);
        }),
        (t.FpSqrtOdd = function (e, t) {
          if (!e.isOdd) throw Error("Field doesn't have isOdd");
          let n = e.sqrt(t);
          return e.isOdd(n) ? n : e.neg(n);
        }),
        (t.FpSqrtEven = function (e, t) {
          if (!e.isOdd) throw Error("Field doesn't have isOdd");
          let n = e.sqrt(t);
          return e.isOdd(n) ? e.neg(n) : n;
        }),
        (t.hashToPrivateScalar = function (e, t, n = !1) {
          let i = (e = (0, r.ensureBytes)("privateHash", e)).length,
            a = b(t).nByteLength + 8;
          if (a < 24 || i < a || i > 1024)
            throw Error(
              "hashToPrivateScalar: expected " +
                a +
                "-1024 bytes of input, got " +
                i
            );
          return (
            u(
              n ? (0, r.bytesToNumberLE)(e) : (0, r.bytesToNumberBE)(e),
              t - o
            ) + o
          );
        }),
        (t.getFieldBytesLength = E),
        (t.getMinHashLength = x),
        (t.mapHashToField = function (e, t, n = !1) {
          let i = e.length,
            a = E(t),
            s = x(t);
          if (i < 16 || i < s || i > 1024)
            throw Error("expected " + s + "-1024 bytes of input, got " + i);
          let l =
            u(
              n ? (0, r.bytesToNumberLE)(e) : (0, r.bytesToNumberBE)(e),
              t - o
            ) + o;
          return n
            ? (0, r.numberToBytesLE)(l, a)
            : (0, r.numberToBytesBE)(l, a);
        });
      let r = n(44045),
        i = BigInt(0),
        o = BigInt(1),
        a = BigInt(2),
        s = BigInt(3),
        l = BigInt(4),
        c = BigInt(5),
        d = BigInt(8);
      function u(e, t) {
        let n = e % t;
        return n >= i ? n : t + n;
      }
      function f(e, t, n) {
        if (t < i) throw Error("invalid exponent, negatives unsupported");
        if (n <= i) throw Error("invalid modulus");
        if (n === o) return i;
        let r = o;
        for (; t > i; )
          t & o && (r = (r * e) % n), (e = (e * e) % n), (t >>= o);
        return r;
      }
      function h(e, t) {
        if (e === i) throw Error("invert: expected non-zero number");
        if (t <= i) throw Error("invert: expected positive modulus, got " + t);
        let n = u(e, t),
          r = t,
          a = i,
          s = o,
          l = o,
          c = i;
        for (; n !== i; ) {
          let e = r / n,
            t = r % n,
            i = a - l * e,
            o = s - c * e;
          (r = n), (n = t), (a = l), (s = c), (l = i), (c = o);
        }
        if (r !== o) throw Error("invert: does not exist");
        return u(a, t);
      }
      function p(e) {
        let t,
          n,
          r,
          s = (e - o) / a;
        for (t = e - o, n = 0; t % a === i; t /= a, n++);
        for (r = a; r < e && f(r, s, e) !== e - o; r++)
          if (r > 1e3)
            throw Error("Cannot find square root: likely non-prime P");
        if (1 === n) {
          let t = (e + o) / l;
          return function (e, n) {
            let r = e.pow(n, t);
            if (!e.eql(e.sqr(r), n)) throw Error("Cannot find square root");
            return r;
          };
        }
        let c = (t + o) / a;
        return function (e, i) {
          if (e.pow(i, s) === e.neg(e.ONE))
            throw Error("Cannot find square root");
          let a = n,
            l = e.pow(e.mul(e.ONE, r), t),
            d = e.pow(i, c),
            u = e.pow(i, t);
          for (; !e.eql(u, e.ONE); ) {
            if (e.eql(u, e.ZERO)) return e.ZERO;
            let t = 1;
            for (let n = e.sqr(u); t < a && !e.eql(n, e.ONE); t++) n = e.sqr(n);
            let n = e.pow(l, o << BigInt(a - t - 1));
            (l = e.sqr(n)), (d = e.mul(d, n)), (u = e.mul(u, l)), (a = t);
          }
          return d;
        };
      }
      function g(e) {
        if (e % l === s) {
          let t = (e + o) / l;
          return function (e, n) {
            let r = e.pow(n, t);
            if (!e.eql(e.sqr(r), n)) throw Error("Cannot find square root");
            return r;
          };
        }
        if (e % d === c) {
          let t = (e - c) / d;
          return function (e, n) {
            let r = e.mul(n, a),
              i = e.pow(r, t),
              o = e.mul(n, i),
              s = e.mul(e.mul(o, a), i),
              l = e.mul(o, e.sub(s, e.ONE));
            if (!e.eql(e.sqr(l), n)) throw Error("Cannot find square root");
            return l;
          };
        }
        return p(e);
      }
      t.isNegativeLE = (e, t) => (u(e, t) & o) === o;
      let m = [
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
      function y(e, t, n) {
        if (n < i) throw Error("invalid exponent, negatives unsupported");
        if (n === i) return e.ONE;
        if (n === o) return t;
        let r = e.ONE,
          a = t;
        for (; n > i; ) n & o && (r = e.mul(r, a)), (a = e.sqr(a)), (n >>= o);
        return r;
      }
      function w(e, t) {
        let n = Array(t.length),
          r = t.reduce(
            (t, r, i) => (e.is0(r) ? t : ((n[i] = t), e.mul(t, r))),
            e.ONE
          ),
          i = e.inv(r);
        return (
          t.reduceRight(
            (t, r, i) =>
              e.is0(r) ? t : ((n[i] = e.mul(t, n[i])), e.mul(t, r)),
            i
          ),
          n
        );
      }
      function v(e) {
        let t = (e - o) / a;
        return (e, n) => e.pow(n, t);
      }
      function b(e, t) {
        let n = void 0 !== t ? t : e.toString(2).length,
          r = Math.ceil(n / 8);
        return { nBitLength: n, nByteLength: r };
      }
      function E(e) {
        if ("bigint" != typeof e) throw Error("field order must be bigint");
        return Math.ceil(e.toString(2).length / 8);
      }
      function x(e) {
        let t = E(e);
        return t + Math.ceil(t / 2);
      }
    },
    44045: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.notImplemented = t.bitMask = void 0),
        (t.isBytes = o),
        (t.abytes = a),
        (t.abool = function (e, t) {
          if ("boolean" != typeof t)
            throw Error(e + " boolean expected, got " + t);
        }),
        (t.bytesToHex = l),
        (t.numberToHexUnpadded = c),
        (t.hexToNumber = d),
        (t.hexToBytes = h),
        (t.bytesToNumberBE = function (e) {
          return d(l(e));
        }),
        (t.bytesToNumberLE = function (e) {
          return a(e), d(l(Uint8Array.from(e).reverse()));
        }),
        (t.numberToBytesBE = p),
        (t.numberToBytesLE = function (e, t) {
          return p(e, t).reverse();
        }),
        (t.numberToVarBytesBE = function (e) {
          return h(c(e));
        }),
        (t.ensureBytes = function (e, t, n) {
          let r;
          if ("string" == typeof t)
            try {
              r = h(t);
            } catch (t) {
              throw Error(e + " must be hex string or Uint8Array, cause: " + t);
            }
          else if (o(t)) r = Uint8Array.from(t);
          else throw Error(e + " must be hex string or Uint8Array");
          let i = r.length;
          if ("number" == typeof n && i !== n)
            throw Error(e + " of length " + n + " expected, got " + i);
          return r;
        }),
        (t.concatBytes = g),
        (t.equalBytes = function (e, t) {
          if (e.length !== t.length) return !1;
          let n = 0;
          for (let r = 0; r < e.length; r++) n |= e[r] ^ t[r];
          return 0 === n;
        }),
        (t.utf8ToBytes = function (e) {
          if ("string" != typeof e) throw Error("string expected");
          return new Uint8Array(new TextEncoder().encode(e));
        }),
        (t.inRange = y),
        (t.aInRange = function (e, t, n, r) {
          if (!y(t, n, r))
            throw Error(
              "expected valid " + e + ": " + n + " <= n < " + r + ", got " + t
            );
        }),
        (t.bitLen = function (e) {
          let t;
          for (t = 0; e > n; e >>= r, t += 1);
          return t;
        }),
        (t.bitGet = function (e, t) {
          return (e >> BigInt(t)) & r;
        }),
        (t.bitSet = function (e, t, i) {
          return e | ((i ? r : n) << BigInt(t));
        }),
        (t.createHmacDrbg = function (e, t, n) {
          if ("number" != typeof e || e < 2)
            throw Error("hashLen must be a number");
          if ("number" != typeof t || t < 2)
            throw Error("qByteLen must be a number");
          if ("function" != typeof n) throw Error("hmacFn must be a function");
          let r = w(e),
            i = w(e),
            o = 0,
            a = () => {
              r.fill(1), i.fill(0), (o = 0);
            },
            s = (...e) => n(i, r, ...e),
            l = (e = w()) => {
              (i = s(v([0]), e)),
                (r = s()),
                0 !== e.length && ((i = s(v([1]), e)), (r = s()));
            },
            c = () => {
              if (o++ >= 1e3) throw Error("drbg: tried 1000 values");
              let e = 0,
                n = [];
              for (; e < t; ) {
                let t = (r = s()).slice();
                n.push(t), (e += r.length);
              }
              return g(...n);
            };
          return (e, t) => {
            let n;
            for (a(), l(e); !(n = t(c())); ) l();
            return a(), n;
          };
        }),
        (t.validateObject = function (e, t, n = {}) {
          let r = (t, n, r) => {
            let i = b[n];
            if ("function" != typeof i)
              throw Error("invalid validator function");
            let o = e[t];
            if ((!r || void 0 !== o) && !i(o, e))
              throw Error(
                "param " +
                  String(t) +
                  " is invalid. Expected " +
                  n +
                  ", got " +
                  o
              );
          };
          for (let [e, n] of Object.entries(t)) r(e, n, !1);
          for (let [e, t] of Object.entries(n)) r(e, t, !0);
          return e;
        }),
        (t.memoized = function (e) {
          let t = new WeakMap();
          return (n, ...r) => {
            let i = t.get(n);
            if (void 0 !== i) return i;
            let o = e(n, ...r);
            return t.set(n, o), o;
          };
        });
      let n = BigInt(0),
        r = BigInt(1),
        i = BigInt(2);
      function o(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function a(e) {
        if (!o(e)) throw Error("Uint8Array expected");
      }
      let s = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function l(e) {
        a(e);
        let t = "";
        for (let n = 0; n < e.length; n++) t += s[e[n]];
        return t;
      }
      function c(e) {
        let t = e.toString(16);
        return 1 & t.length ? "0" + t : t;
      }
      function d(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return "" === e ? n : BigInt("0x" + e);
      }
      let u = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function f(e) {
        return e >= u._0 && e <= u._9
          ? e - u._0
          : e >= u.A && e <= u.F
          ? e - (u.A - 10)
          : e >= u.a && e <= u.f
          ? e - (u.a - 10)
          : void 0;
      }
      function h(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        let t = e.length,
          n = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let r = new Uint8Array(n);
        for (let t = 0, i = 0; t < n; t++, i += 2) {
          let n = f(e.charCodeAt(i)),
            o = f(e.charCodeAt(i + 1));
          if (void 0 === n || void 0 === o)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[i] + e[i + 1]) +
                '" at index ' +
                i
            );
          r[t] = 16 * n + o;
        }
        return r;
      }
      function p(e, t) {
        return h(e.toString(16).padStart(2 * t, "0"));
      }
      function g(...e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          a(r), (t += r.length);
        }
        let n = new Uint8Array(t);
        for (let t = 0, r = 0; t < e.length; t++) {
          let i = e[t];
          n.set(i, r), (r += i.length);
        }
        return n;
      }
      let m = (e) => "bigint" == typeof e && n <= e;
      function y(e, t, n) {
        return m(e) && m(t) && m(n) && t <= e && e < n;
      }
      t.bitMask = (e) => (i << BigInt(e - 1)) - r;
      let w = (e) => new Uint8Array(e),
        v = (e) => Uint8Array.from(e),
        b = {
          bigint: (e) => "bigint" == typeof e,
          function: (e) => "function" == typeof e,
          boolean: (e) => "boolean" == typeof e,
          string: (e) => "string" == typeof e,
          stringOrUint8Array: (e) => "string" == typeof e || o(e),
          isSafeInteger: (e) => Number.isSafeInteger(e),
          array: (e) => Array.isArray(e),
          field: (e, t) => t.Fp.isValid(e),
          hash: (e) =>
            "function" == typeof e && Number.isSafeInteger(e.outputLen),
        };
      t.notImplemented = () => {
        throw Error("not implemented");
      };
    },
    45491: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SignAndSendAllTransactions = void 0),
        (t.SignAndSendAllTransactions = "solana:signAndSendAllTransactions");
    },
    49018: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                (!i ||
                  ("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(t, n) ||
                r(t, e, n);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(n(74824), t),
        i(n(9796), t),
        i(n(24851), t);
    },
    50944: (e, t, n) => {
      let r = n(15554),
        i = n(85202),
        o = n(17144),
        a = n(60431);
      function s(e, t, n, o, a) {
        let s = [].slice.call(arguments, 1),
          l = s.length,
          c = "function" == typeof s[l - 1];
        if (!c && !r()) throw Error("Callback required as last argument");
        if (c) {
          if (l < 2) throw Error("Too few arguments provided");
          2 === l
            ? ((a = n), (n = t), (t = o = void 0))
            : 3 === l &&
              (t.getContext && void 0 === a
                ? ((a = o), (o = void 0))
                : ((a = o), (o = n), (n = t), (t = void 0)));
        } else {
          if (l < 1) throw Error("Too few arguments provided");
          return (
            1 === l
              ? ((n = t), (t = o = void 0))
              : 2 !== l || t.getContext || ((o = n), (n = t), (t = void 0)),
            new Promise(function (r, a) {
              try {
                let a = i.create(n, o);
                r(e(a, t, o));
              } catch (e) {
                a(e);
              }
            })
          );
        }
        try {
          let r = i.create(n, o);
          a(null, e(r, t, o));
        } catch (e) {
          a(e);
        }
      }
      (t.create = i.create),
        (t.toCanvas = s.bind(null, o.render)),
        (t.toDataURL = s.bind(null, o.renderToDataURL)),
        (t.toString = s.bind(null, function (e, t, n) {
          return a.render(e, n);
        }));
    },
    51559: (e) => {
      "use strict";
      e.exports = function (e) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var t = new Uint8Array(256), n = 0; n < t.length; n++) t[n] = 255;
        for (var r = 0; r < e.length; r++) {
          var i = e.charAt(r),
            o = i.charCodeAt(0);
          if (255 !== t[o]) throw TypeError(i + " is ambiguous");
          t[o] = r;
        }
        var a = e.length,
          s = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          c = Math.log(256) / Math.log(a);
        function d(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          for (var n = 0, r = 0, i = 0; e[n] === s; ) r++, n++;
          for (
            var o = ((e.length - n) * l + 1) >>> 0, c = new Uint8Array(o);
            e[n];

          ) {
            var d = e.charCodeAt(n);
            if (d > 255) return;
            var u = t[d];
            if (255 === u) return;
            for (var f = 0, h = o - 1; (0 !== u || f < i) && -1 !== h; h--, f++)
              (u += (a * c[h]) >>> 0),
                (c[h] = u % 256 >>> 0),
                (u = (u / 256) >>> 0);
            if (0 !== u) throw Error("Non-zero carry");
            (i = f), n++;
          }
          for (var p = o - i; p !== o && 0 === c[p]; ) p++;
          for (var g = new Uint8Array(r + (o - p)), m = r; p !== o; )
            g[m++] = c[p++];
          return g;
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
            for (var n = 0, r = 0, i = 0, o = t.length; i !== o && 0 === t[i]; )
              i++, n++;
            for (
              var l = ((o - i) * c + 1) >>> 0, d = new Uint8Array(l);
              i !== o;

            ) {
              for (
                var u = t[i], f = 0, h = l - 1;
                (0 !== u || f < r) && -1 !== h;
                h--, f++
              )
                (u += (256 * d[h]) >>> 0),
                  (d[h] = u % a >>> 0),
                  (u = (u / a) >>> 0);
              if (0 !== u) throw Error("Non-zero carry");
              (r = f), i++;
            }
            for (var p = l - r; p !== l && 0 === d[p]; ) p++;
            for (var g = s.repeat(n); p < l; ++p) g += e.charAt(d[p]);
            return g;
          },
          decodeUnsafe: d,
          decode: function (e) {
            var t = d(e);
            if (t) return t;
            throw Error("Non-base" + a + " character");
          },
        };
      };
    },
    52136: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.add5L =
          t.add5H =
          t.add4H =
          t.add4L =
          t.add3H =
          t.add3L =
          t.rotlBL =
          t.rotlBH =
          t.rotlSL =
          t.rotlSH =
          t.rotr32L =
          t.rotr32H =
          t.rotrBL =
          t.rotrBH =
          t.rotrSL =
          t.rotrSH =
          t.shrSL =
          t.shrSH =
          t.toBig =
            void 0),
        (t.fromBig = i),
        (t.split = o),
        (t.add = v);
      let n = BigInt(0x100000000 - 1),
        r = BigInt(32);
      function i(e, t = !1) {
        return t
          ? { h: Number(e & n), l: Number((e >> r) & n) }
          : { h: 0 | Number((e >> r) & n), l: 0 | Number(e & n) };
      }
      function o(e, t = !1) {
        let n = new Uint32Array(e.length),
          r = new Uint32Array(e.length);
        for (let o = 0; o < e.length; o++) {
          let { h: a, l: s } = i(e[o], t);
          [n[o], r[o]] = [a, s];
        }
        return [n, r];
      }
      let a = (e, t) => (BigInt(e >>> 0) << r) | BigInt(t >>> 0);
      t.toBig = a;
      let s = (e, t, n) => e >>> n;
      t.shrSH = s;
      let l = (e, t, n) => (e << (32 - n)) | (t >>> n);
      t.shrSL = l;
      let c = (e, t, n) => (e >>> n) | (t << (32 - n));
      t.rotrSH = c;
      let d = (e, t, n) => (e << (32 - n)) | (t >>> n);
      t.rotrSL = d;
      let u = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32));
      t.rotrBH = u;
      let f = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n));
      t.rotrBL = f;
      let h = (e, t) => t;
      t.rotr32H = h;
      let p = (e, t) => e;
      t.rotr32L = p;
      let g = (e, t, n) => (e << n) | (t >>> (32 - n));
      t.rotlSH = g;
      let m = (e, t, n) => (t << n) | (e >>> (32 - n));
      t.rotlSL = m;
      let y = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n));
      t.rotlBH = y;
      let w = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      function v(e, t, n, r) {
        let i = (t >>> 0) + (r >>> 0);
        return { h: (e + n + ((i / 0x100000000) | 0)) | 0, l: 0 | i };
      }
      t.rotlBL = w;
      let b = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0);
      t.add3L = b;
      let E = (e, t, n, r) => (t + n + r + ((e / 0x100000000) | 0)) | 0;
      t.add3H = E;
      let x = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0);
      t.add4L = x;
      let S = (e, t, n, r, i) => (t + n + r + i + ((e / 0x100000000) | 0)) | 0;
      t.add4H = S;
      let A = (e, t, n, r, i) =>
        (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0);
      t.add5L = A;
      let T = (e, t, n, r, i, o) =>
        (t + n + r + i + o + ((e / 0x100000000) | 0)) | 0;
      (t.add5H = T),
        (t.default = {
          fromBig: i,
          split: o,
          toBig: a,
          shrSH: s,
          shrSL: l,
          rotrSH: c,
          rotrSL: d,
          rotrBH: u,
          rotrBL: f,
          rotr32H: h,
          rotr32L: p,
          rotlSH: g,
          rotlSL: m,
          rotlBH: y,
          rotlBL: w,
          add: v,
          add3L: b,
          add3H: E,
          add4L: x,
          add4H: S,
          add5H: T,
          add5L: A,
        });
    },
    52913: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getCommitment = function (e) {
          switch (e) {
            case "processed":
            case "confirmed":
            case "finalized":
            case void 0:
              return e;
            case "recent":
              return "processed";
            case "single":
            case "singleGossip":
              return "confirmed";
            case "max":
            case "root":
              return "finalized";
            default:
              return;
          }
        });
    },
    56057: (e, t, n) => {
      let r = n(84583);
      function i(e) {
        (this.mode = r.BYTE),
          "string" == typeof e
            ? (this.data = new TextEncoder().encode(e))
            : (this.data = new Uint8Array(e));
      }
      (i.getBitsLength = function (e) {
        return 8 * e;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (e) {
          for (let t = 0, n = this.data.length; t < n; t++)
            e.put(this.data[t], 8);
        }),
        (e.exports = i);
    },
    56839: (e, t, n) => {
      let r = n(58838);
      function i(e) {
        (this.genPoly = void 0),
          (this.degree = e),
          this.degree && this.initialize(this.degree);
      }
      (i.prototype.initialize = function (e) {
        (this.degree = e), (this.genPoly = r.generateECPolynomial(this.degree));
      }),
        (i.prototype.encode = function (e) {
          if (!this.genPoly) throw Error("Encoder not initialized");
          let t = new Uint8Array(e.length + this.degree);
          t.set(e);
          let n = r.mod(t, this.genPoly),
            i = this.degree - n.length;
          if (i > 0) {
            let e = new Uint8Array(this.degree);
            return e.set(n, i), e;
          }
          return n;
        }),
        (e.exports = i);
    },
    57479: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.wNAF = function (e, t) {
          return {
            constTimeNegate: s,
            hasPrecomputes: (e) => 1 !== p(e),
            unsafeLadder(t, n, r = e.ZERO) {
              let i = t;
              for (; n > o; )
                n & a && (r = r.add(i)), (i = i.double()), (n >>= a);
              return r;
            },
            precomputeWindow(e, n) {
              let { windows: r, windowSize: i } = c(n, t),
                o = [],
                a = e,
                s = a;
              for (let e = 0; e < r; e++) {
                (s = a), o.push(s);
                for (let e = 1; e < i; e++) (s = s.add(a)), o.push(s);
                a = s.double();
              }
              return o;
            },
            wNAF(n, r, i) {
              let { windows: o, windowSize: l } = c(n, t),
                d = e.ZERO,
                u = e.BASE,
                f = BigInt(2 ** n - 1),
                h = 2 ** n,
                p = BigInt(n);
              for (let e = 0; e < o; e++) {
                let t = e * l,
                  n = Number(i & f);
                (i >>= p), n > l && ((n -= h), (i += a));
                let o = t + Math.abs(n) - 1,
                  c = e % 2 != 0,
                  g = n < 0;
                0 === n ? (u = u.add(s(c, r[t]))) : (d = d.add(s(g, r[o])));
              }
              return { p: d, f: u };
            },
            wNAFUnsafe(n, r, i, s = e.ZERO) {
              let { windows: l, windowSize: d } = c(n, t),
                u = BigInt(2 ** n - 1),
                f = 2 ** n,
                h = BigInt(n);
              for (let e = 0; e < l; e++) {
                let t = e * d;
                if (i === o) break;
                let n = Number(i & u);
                if (((i >>= h), n > d && ((n -= f), (i += a)), 0 === n))
                  continue;
                let l = r[t + Math.abs(n) - 1];
                n < 0 && (l = l.negate()), (s = s.add(l));
              }
              return s;
            },
            getPrecomputes(e, t, n) {
              let r = f.get(t);
              return (
                r ||
                  ((r = this.precomputeWindow(t, e)),
                  1 !== e && f.set(t, n(r))),
                r
              );
            },
            wNAFCached(e, t, n) {
              let r = p(e);
              return this.wNAF(r, this.getPrecomputes(r, e, n), t);
            },
            wNAFCachedUnsafe(e, t, n, r) {
              let i = p(e);
              return 1 === i
                ? this.unsafeLadder(e, t, r)
                : this.wNAFUnsafe(i, this.getPrecomputes(i, e, n), t, r);
            },
            setWindowSize(e, n) {
              l(n, t), h.set(e, n), f.delete(e);
            },
          };
        }),
        (t.pippenger = function (e, t, n, r) {
          if ((d(n, e), u(r, t), n.length !== r.length))
            throw Error("arrays of points and scalars must have equal length");
          let o = e.ZERO,
            a = (0, i.bitLen)(BigInt(n.length)),
            s = a > 12 ? a - 3 : a > 4 ? a - 2 : a ? 2 : 1,
            l = (1 << s) - 1,
            c = Array(l + 1).fill(o),
            f = Math.floor((t.BITS - 1) / s) * s,
            h = o;
          for (let e = f; e >= 0; e -= s) {
            c.fill(o);
            for (let t = 0; t < r.length; t++) {
              let i = Number((r[t] >> BigInt(e)) & BigInt(l));
              c[i] = c[i].add(n[t]);
            }
            let t = o;
            for (let e = c.length - 1, n = o; e > 0; e--)
              (n = n.add(c[e])), (t = t.add(n));
            if (((h = h.add(t)), 0 !== e))
              for (let e = 0; e < s; e++) h = h.double();
          }
          return h;
        }),
        (t.precomputeMSMUnsafe = function (e, t, n, r) {
          l(r, t.BITS), d(n, e);
          let i = e.ZERO,
            o = 2 ** r - 1,
            a = Math.ceil(t.BITS / r),
            s = BigInt((1 << r) - 1),
            c = n.map((e) => {
              let t = [];
              for (let n = 0, r = e; n < o; n++) t.push(r), (r = r.add(e));
              return t;
            });
          return (e) => {
            if ((u(e, t), e.length > n.length))
              throw Error(
                "array of scalars must be smaller than array of points"
              );
            let o = i;
            for (let t = 0; t < a; t++) {
              if (o !== i) for (let e = 0; e < r; e++) o = o.double();
              let n = BigInt(a * r - (t + 1) * r);
              for (let t = 0; t < e.length; t++) {
                let r = Number((e[t] >> n) & s);
                r && (o = o.add(c[t][r - 1]));
              }
            }
            return o;
          };
        }),
        (t.validateBasic = function (e) {
          return (
            (0, r.validateField)(e.Fp),
            (0, i.validateObject)(
              e,
              { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
              { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
            ),
            Object.freeze({
              ...(0, r.nLength)(e.n, e.nBitLength),
              ...e,
              ...{ p: e.Fp.ORDER },
            })
          );
        });
      let r = n(43286),
        i = n(44045),
        o = BigInt(0),
        a = BigInt(1);
      function s(e, t) {
        let n = t.negate();
        return e ? n : t;
      }
      function l(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function c(e, t) {
        return (
          l(e, t), { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) }
        );
      }
      function d(e, t) {
        if (!Array.isArray(e)) throw Error("array expected");
        e.forEach((e, n) => {
          if (!(e instanceof t)) throw Error("invalid point at index " + n);
        });
      }
      function u(e, t) {
        if (!Array.isArray(e)) throw Error("array of scalars expected");
        e.forEach((e, n) => {
          if (!t.isValid(e)) throw Error("invalid scalar at index " + n);
        });
      }
      let f = new WeakMap(),
        h = new WeakMap();
      function p(e) {
        return h.get(e) || 1;
      }
    },
    58838: (e, t, n) => {
      let r = n(62980);
      (t.mul = function (e, t) {
        let n = new Uint8Array(e.length + t.length - 1);
        for (let i = 0; i < e.length; i++)
          for (let o = 0; o < t.length; o++) n[i + o] ^= r.mul(e[i], t[o]);
        return n;
      }),
        (t.mod = function (e, t) {
          let n = new Uint8Array(e);
          for (; n.length - t.length >= 0; ) {
            let e = n[0];
            for (let i = 0; i < t.length; i++) n[i] ^= r.mul(t[i], e);
            let i = 0;
            for (; i < n.length && 0 === n[i]; ) i++;
            n = n.slice(i);
          }
          return n;
        }),
        (t.generateECPolynomial = function (e) {
          let n = new Uint8Array([1]);
          for (let i = 0; i < e; i++)
            n = t.mul(n, new Uint8Array([1, r.exp(i)]));
          return n;
        });
    },
    60431: (e, t, n) => {
      let r = n(74181);
      function i(e, t) {
        let n = e.a / 255,
          r = t + '="' + e.hex + '"';
        return n < 1
          ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"'
          : r;
      }
      function o(e, t, n) {
        let r = e + t;
        return void 0 !== n && (r += " " + n), r;
      }
      t.render = function (e, t, n) {
        let a = r.getOptions(t),
          s = e.modules.size,
          l = e.modules.data,
          c = s + 2 * a.margin,
          d = a.color.light.a
            ? "<path " +
              i(a.color.light, "fill") +
              ' d="M0 0h' +
              c +
              "v" +
              c +
              'H0z"/>'
            : "",
          u =
            "<path " +
            i(a.color.dark, "stroke") +
            ' d="' +
            (function (e, t, n) {
              let r = "",
                i = 0,
                a = !1,
                s = 0;
              for (let l = 0; l < e.length; l++) {
                let c = Math.floor(l % t),
                  d = Math.floor(l / t);
                c || a || (a = !0),
                  e[l]
                    ? (s++,
                      (l > 0 && c > 0 && e[l - 1]) ||
                        ((r += a ? o("M", c + n, 0.5 + d + n) : o("m", i, 0)),
                        (i = 0),
                        (a = !1)),
                      (c + 1 < t && e[l + 1]) || ((r += o("h", s)), (s = 0)))
                    : i++;
              }
              return r;
            })(l, s, a.margin) +
            '"/>',
          f =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (a.width
              ? 'width="' + a.width + '" height="' + a.width + '" '
              : "") +
            ('viewBox="0 0 ' + c + " ") +
            c +
            '" shape-rendering="crispEdges">' +
            d +
            u +
            "</svg>\n";
        return "function" == typeof n && n(null, f), f;
      };
    },
    62980: (e, t) => {
      let n = new Uint8Array(512),
        r = new Uint8Array(256);
      !(function () {
        let e = 1;
        for (let t = 0; t < 255; t++)
          (n[t] = e), (r[e] = t), 256 & (e <<= 1) && (e ^= 285);
        for (let e = 255; e < 512; e++) n[e] = n[e - 255];
      })(),
        (t.log = function (e) {
          if (e < 1) throw Error("log(" + e + ")");
          return r[e];
        }),
        (t.exp = function (e) {
          return n[e];
        }),
        (t.mul = function (e, t) {
          return 0 === e || 0 === t ? 0 : n[r[e] + r[t]];
        });
    },
    63762: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { startRemoteScenario: () => h, transact: () => f });
      var r = n(23570),
        i = n(85926),
        o = n(93788);
      function a(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, r = Object.getOwnPropertySymbols(e);
            i < r.length;
            i++
          )
            0 > t.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        return n;
      }
      function s(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(a, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      }
      function l(e) {
        return window.btoa(String.fromCharCode.call(null, ...e));
      }
      function c(e) {
        return new Uint8Array(
          window
            .atob(e)
            .split("")
            .map((e) => e.charCodeAt(0))
        );
      }
      function d(e) {
        return l(
          "version" in e
            ? e.serialize()
            : e.serialize({ requireAllSignatures: !1, verifySignatures: !1 })
        );
      }
      function u(e) {
        let t = e[0] * r.SIGNATURE_LENGTH_IN_BYTES + 1;
        return "legacy" ===
          r.VersionedMessage.deserializeMessageVersion(e.slice(t, e.length))
          ? r.Transaction.from(e)
          : r.VersionedTransaction.deserialize(e);
      }
      function f(e, t) {
        return s(this, void 0, void 0, function* () {
          return yield (0, i.hL)((t) => e(p(t)), t);
        });
      }
      function h(e) {
        return s(this, void 0, void 0, function* () {
          let { wallet: t, close: n, associationUrl: r } = yield (0, i.X2)(e);
          return { wallet: t.then((e) => p(e)), close: n, associationUrl: r };
        });
      }
      function p(e) {
        return new Proxy(
          {},
          {
            get(t, n) {
              if (null == t[n])
                switch (n) {
                  case "signAndSendTransactions":
                    t[n] = function (t) {
                      var {
                          minContextSlot: n,
                          commitment: r,
                          skipPreflight: i,
                          maxRetries: l,
                          waitForCommitmentToSendNextTransaction: u,
                          transactions: f,
                        } = t,
                        h = a(t, [
                          "minContextSlot",
                          "commitment",
                          "skipPreflight",
                          "maxRetries",
                          "waitForCommitmentToSendNextTransaction",
                          "transactions",
                        ]);
                      return s(this, void 0, void 0, function* () {
                        let t = f.map(d),
                          a = {
                            min_context_slot: n,
                            commitment: r,
                            skip_preflight: i,
                            max_retries: l,
                            wait_for_commitment_to_send_next_transaction: u,
                          },
                          { signatures: s } = yield e.signAndSendTransactions(
                            Object.assign(
                              Object.assign(
                                Object.assign({}, h),
                                Object.values(a).some((e) => null != e)
                                  ? { options: a }
                                  : null
                              ),
                              { payloads: t }
                            )
                          );
                        return s.map(c).map(o.encode);
                      });
                    };
                    break;
                  case "signMessages":
                    t[n] = function (t) {
                      var { payloads: n } = t,
                        r = a(t, ["payloads"]);
                      return s(this, void 0, void 0, function* () {
                        let t = n.map(l),
                          { signed_payloads: i } = yield e.signMessages(
                            Object.assign(Object.assign({}, r), { payloads: t })
                          );
                        return i.map(c);
                      });
                    };
                    break;
                  case "signTransactions":
                    t[n] = function (t) {
                      var { transactions: n } = t,
                        r = a(t, ["transactions"]);
                      return s(this, void 0, void 0, function* () {
                        let t = n.map(d),
                          { signed_payloads: i } = yield e.signTransactions(
                            Object.assign(Object.assign({}, r), { payloads: t })
                          );
                        return i.map(c).map(u);
                      });
                    };
                    break;
                  default:
                    t[n] = e[n];
                }
              return t[n];
            },
            defineProperty: () => !1,
            deleteProperty: () => !1,
          }
        );
      }
    },
    66782: (e, t, n) => {
      let r = n(77105).getSymbolSize;
      (t.getRowColCoords = function (e) {
        if (1 === e) return [];
        let t = Math.floor(e / 7) + 2,
          n = r(e),
          i = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)),
          o = [n - 7];
        for (let e = 1; e < t - 1; e++) o[e] = o[e - 1] - i;
        return o.push(6), o.reverse();
      }),
        (t.getPositions = function (e) {
          let n = [],
            r = t.getRowColCoords(e),
            i = r.length;
          for (let e = 0; e < i; e++)
            for (let t = 0; t < i; t++)
              (0 !== e || 0 !== t) &&
                (0 !== e || t !== i - 1) &&
                (e !== i - 1 || 0 !== t) &&
                n.push([r[e], r[t]]);
          return n;
        });
    },
    66832: (e) => {
      function t() {
        (this.buffer = []), (this.length = 0);
      }
      (t.prototype = {
        get: function (e) {
          let t = Math.floor(e / 8);
          return ((this.buffer[t] >>> (7 - (e % 8))) & 1) == 1;
        },
        put: function (e, t) {
          for (let n = 0; n < t; n++)
            this.putBit(((e >>> (t - n - 1)) & 1) == 1);
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (e) {
          let t = Math.floor(this.length / 8);
          this.buffer.length <= t && this.buffer.push(0),
            e && (this.buffer[t] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (e.exports = t);
    },
    68130: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.verifySignIn = function (e, t) {
          let {
              signedMessage: n,
              signature: i,
              account: { publicKey: a },
            } = t,
            s = o(e, t);
          return (
            !!s &&
            (0, r.verifyMessageSignature)({
              message: s,
              signedMessage: n,
              signature: i,
              publicKey: a,
            })
          );
        }),
        (t.deriveSignInMessage = o),
        (t.deriveSignInMessageText = a),
        (t.parseSignInMessage = s),
        (t.parseSignInMessageText = d),
        (t.createSignInMessage = function (e) {
          let t = u(e);
          return new TextEncoder().encode(t);
        }),
        (t.createSignInMessageText = u);
      let r = n(71920),
        i = n(36232);
      function o(e, t) {
        let n = a(e, t);
        return n ? new TextEncoder().encode(n) : null;
      }
      function a(e, t) {
        let n = s(t.signedMessage);
        if (
          !n ||
          (e.domain && e.domain !== n.domain) ||
          (e.address && e.address !== n.address) ||
          e.statement !== n.statement ||
          e.uri !== n.uri ||
          e.version !== n.version ||
          e.chainId !== n.chainId ||
          e.nonce !== n.nonce ||
          e.issuedAt !== n.issuedAt ||
          e.expirationTime !== n.expirationTime ||
          e.notBefore !== n.notBefore ||
          e.requestId !== n.requestId
        )
          return null;
        if (e.resources) {
          if (!n.resources || !(0, i.arraysEqual)(e.resources, n.resources))
            return null;
        } else if (n.resources) return null;
        return u(n);
      }
      function s(e) {
        return d(new TextDecoder().decode(e));
      }
      let l = `(?:\\nURI: (?<uri>[^\\n]+))?(?:\\nVersion: (?<version>[^\\n]+))?(?:\\nChain ID: (?<chainId>[^\\n]+))?(?:\\nNonce: (?<nonce>[^\\n]+))?(?:\\nIssued At: (?<issuedAt>[^\\n]+))?(?:\\nExpiration Time: (?<expirationTime>[^\\n]+))?(?:\\nNot Before: (?<notBefore>[^\\n]+))?(?:\\nRequest ID: (?<requestId>[^\\n]+))?(?:\\nResources:(?<resources>(?:\\n- [^\\n]+)*))?`,
        c = RegExp(
          `^(?<domain>[^\\n]+?) wants you to sign in with your Solana account:\\n(?<address>[^\\n]+)(?:\\n|$)(?:\\n(?<statement>[\\S\\s]*?)(?:\\n|$))??${l}\\n*$`
        );
      function d(e) {
        var t;
        let n = c.exec(e);
        if (!n) return null;
        let r = n.groups;
        return r
          ? {
              domain: r.domain,
              address: r.address,
              statement: r.statement,
              uri: r.uri,
              version: r.version,
              nonce: r.nonce,
              chainId: r.chainId,
              issuedAt: r.issuedAt,
              expirationTime: r.expirationTime,
              notBefore: r.notBefore,
              requestId: r.requestId,
              resources:
                null == (t = r.resources) ? void 0 : t.split("\n- ").slice(1),
            }
          : null;
      }
      function u(e) {
        let t = `${e.domain} wants you to sign in with your Solana account:
`;
        (t += `${e.address}`),
          e.statement &&
            (t += `

${e.statement}`);
        let n = [];
        if (
          (e.uri && n.push(`URI: ${e.uri}`),
          e.version && n.push(`Version: ${e.version}`),
          e.chainId && n.push(`Chain ID: ${e.chainId}`),
          e.nonce && n.push(`Nonce: ${e.nonce}`),
          e.issuedAt && n.push(`Issued At: ${e.issuedAt}`),
          e.expirationTime && n.push(`Expiration Time: ${e.expirationTime}`),
          e.notBefore && n.push(`Not Before: ${e.notBefore}`),
          e.requestId && n.push(`Request ID: ${e.requestId}`),
          e.resources)
        )
          for (let t of (n.push("Resources:"), e.resources)) n.push(`- ${t}`);
        return (
          n.length &&
            (t += `

${n.join("\n")}`),
          t
        );
      }
    },
    70136: (e, t, n) => {
      let r = n(77105).getSymbolSize;
      t.getPositions = function (e) {
        let t = r(e);
        return [
          [0, 0],
          [t - 7, 0],
          [0, t - 7],
        ];
      };
    },
    70907: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isVersionedTransaction = function (e) {
          return "version" in e;
        });
    },
    71920: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.verifyMessageSignature = o),
        (t.verifySignMessage = function (e, t) {
          let {
              message: n,
              account: { publicKey: r },
            } = e,
            { signedMessage: i, signature: a } = t;
          return o({
            message: n,
            signedMessage: i,
            signature: a,
            publicKey: r,
          });
        });
      let r = n(87250),
        i = n(36232);
      function o({ message: e, signedMessage: t, signature: n, publicKey: o }) {
        return (0, i.bytesEqual)(e, t) && r.ed25519.verify(n, t, o);
      }
    },
    74181: (e, t) => {
      function n(e) {
        if (("number" == typeof e && (e = e.toString()), "string" != typeof e))
          throw Error("Color should be defined as hex string");
        let t = e.slice().replace("#", "").split("");
        if (t.length < 3 || 5 === t.length || t.length > 8)
          throw Error("Invalid hex color: " + e);
        (3 === t.length || 4 === t.length) &&
          (t = Array.prototype.concat.apply(
            [],
            t.map(function (e) {
              return [e, e];
            })
          )),
          6 === t.length && t.push("F", "F");
        let n = parseInt(t.join(""), 16);
        return {
          r: (n >> 24) & 255,
          g: (n >> 16) & 255,
          b: (n >> 8) & 255,
          a: 255 & n,
          hex: "#" + t.slice(0, 6).join(""),
        };
      }
      (t.getOptions = function (e) {
        e || (e = {}), e.color || (e.color = {});
        let t =
            void 0 === e.margin || null === e.margin || e.margin < 0
              ? 4
              : e.margin,
          r = e.width && e.width >= 21 ? e.width : void 0,
          i = e.scale || 4;
        return {
          width: r,
          scale: r ? 4 : i,
          margin: t,
          color: {
            dark: n(e.color.dark || "#000000ff"),
            light: n(e.color.light || "#ffffffff"),
          },
          type: e.type,
          rendererOpts: e.rendererOpts || {},
        };
      }),
        (t.getScale = function (e, t) {
          return t.width && t.width >= e + 2 * t.margin
            ? t.width / (e + 2 * t.margin)
            : t.scale;
        }),
        (t.getImageWidth = function (e, n) {
          let r = t.getScale(e, n);
          return Math.floor((e + 2 * n.margin) * r);
        }),
        (t.qrToImageData = function (e, n, r) {
          let i = n.modules.size,
            o = n.modules.data,
            a = t.getScale(i, r),
            s = Math.floor((i + 2 * r.margin) * a),
            l = r.margin * a,
            c = [r.color.light, r.color.dark];
          for (let t = 0; t < s; t++)
            for (let n = 0; n < s; n++) {
              let d = (t * s + n) * 4,
                u = r.color.light;
              t >= l &&
                n >= l &&
                t < s - l &&
                n < s - l &&
                (u =
                  c[
                    +!!o[Math.floor((t - l) / a) * i + Math.floor((n - l) / a)]
                  ]),
                (e[d++] = u.r),
                (e[d++] = u.g),
                (e[d++] = u.b),
                (e[d] = u.a);
            }
        });
    },
    74552: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                (!i ||
                  ("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(t, n) ||
                r(t, e, n);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(n(52913), t),
        i(n(8189), t),
        i(n(68130), t),
        i(n(71920), t);
    },
    74647: (e) => {
      function t(e) {
        if (!e || e < 1)
          throw Error("BitMatrix size must be defined and greater than 0");
        (this.size = e),
          (this.data = new Uint8Array(e * e)),
          (this.reservedBit = new Uint8Array(e * e));
      }
      (t.prototype.set = function (e, t, n, r) {
        let i = e * this.size + t;
        (this.data[i] = n), r && (this.reservedBit[i] = !0);
      }),
        (t.prototype.get = function (e, t) {
          return this.data[e * this.size + t];
        }),
        (t.prototype.xor = function (e, t, n) {
          this.data[e * this.size + t] ^= n;
        }),
        (t.prototype.isReserved = function (e, t) {
          return this.reservedBit[e * this.size + t];
        }),
        (e.exports = t);
    },
    74824: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Connect = t.StandardConnect = void 0),
        (t.StandardConnect = "standard:connect"),
        (t.Connect = t.StandardConnect);
    },
    77105: (e, t) => {
      let n,
        r = [
          0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
          655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706,
          1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196,
          3362, 3532, 3706,
        ];
      (t.getSymbolSize = function (e) {
        if (!e) throw Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40)
          throw Error('"version" should be in range from 1 to 40');
        return 4 * e + 17;
      }),
        (t.getSymbolTotalCodewords = function (e) {
          return r[e];
        }),
        (t.getBCHDigit = function (e) {
          let t = 0;
          for (; 0 !== e; ) t++, (e >>>= 1);
          return t;
        }),
        (t.setToSJISFunction = function (e) {
          if ("function" != typeof e)
            throw Error('"toSJISFunc" is not a valid function.');
          n = e;
        }),
        (t.isKanjiModeEnabled = function () {
          return void 0 !== n;
        }),
        (t.toSJIS = function (e) {
          return n(e);
        });
    },
    79393: (e, t, n) => {
      let r = n(41210),
        i = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
          10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
          11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
          25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
          23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
          40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
          60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
          24, 47, 65, 77, 25, 49, 68, 81,
        ],
        o = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
          72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
          160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
          104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
          408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
          224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
          750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
          1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
          1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
          1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
          1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
          2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (t.getBlocksCount = function (e, t) {
        switch (t) {
          case r.L:
            return i[(e - 1) * 4 + 0];
          case r.M:
            return i[(e - 1) * 4 + 1];
          case r.Q:
            return i[(e - 1) * 4 + 2];
          case r.H:
            return i[(e - 1) * 4 + 3];
          default:
            return;
        }
      }),
        (t.getTotalCodewordsCount = function (e, t) {
          switch (t) {
            case r.L:
              return o[(e - 1) * 4 + 0];
            case r.M:
              return o[(e - 1) * 4 + 1];
            case r.Q:
              return o[(e - 1) * 4 + 2];
            case r.H:
              return o[(e - 1) * 4 + 3];
            default:
              return;
          }
        });
    },
    80455: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                (!i ||
                  ("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(t, n) ||
                r(t, e, n);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(n(89584), t),
        i(n(25546), t),
        i(n(17103), t),
        i(n(25880), t),
        i(n(70907), t),
        i(n(95058), t);
    },
    84583: (e, t, n) => {
      let r = n(42669),
        i = n(85555);
      (t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (t.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (t.MIXED = { bit: -1 }),
        (t.getCharCountIndicator = function (e, t) {
          if (!e.ccBits) throw Error("Invalid mode: " + e);
          if (!r.isValid(t)) throw Error("Invalid version: " + t);
          return t >= 1 && t < 10
            ? e.ccBits[0]
            : t < 27
            ? e.ccBits[1]
            : e.ccBits[2];
        }),
        (t.getBestModeForData = function (e) {
          return i.testNumeric(e)
            ? t.NUMERIC
            : i.testAlphanumeric(e)
            ? t.ALPHANUMERIC
            : i.testKanji(e)
            ? t.KANJI
            : t.BYTE;
        }),
        (t.toString = function (e) {
          if (e && e.id) return e.id;
          throw Error("Invalid mode");
        }),
        (t.isValid = function (e) {
          return e && e.bit && e.ccBits;
        }),
        (t.from = function (e, n) {
          if (t.isValid(e)) return e;
          try {
            if ("string" != typeof e) throw Error("Param is not a string");
            switch (e.toLowerCase()) {
              case "numeric":
                return t.NUMERIC;
              case "alphanumeric":
                return t.ALPHANUMERIC;
              case "kanji":
                return t.KANJI;
              case "byte":
                return t.BYTE;
              default:
                throw Error("Unknown mode: " + e);
            }
          } catch (e) {
            return n;
          }
        });
    },
    85202: (e, t, n) => {
      let r = n(77105),
        i = n(41210),
        o = n(66832),
        a = n(74647),
        s = n(66782),
        l = n(70136),
        c = n(91591),
        d = n(79393),
        u = n(56839),
        f = n(91940),
        h = n(31154),
        p = n(84583),
        g = n(26578);
      function m(e, t, n) {
        let r,
          i,
          o = e.size,
          a = h.getEncodedBits(t, n);
        for (r = 0; r < 15; r++)
          (i = ((a >> r) & 1) == 1),
            r < 6
              ? e.set(r, 8, i, !0)
              : r < 8
              ? e.set(r + 1, 8, i, !0)
              : e.set(o - 15 + r, 8, i, !0),
            r < 8
              ? e.set(8, o - r - 1, i, !0)
              : r < 9
              ? e.set(8, 15 - r - 1 + 1, i, !0)
              : e.set(8, 15 - r - 1, i, !0);
        e.set(o - 8, 8, 1, !0);
      }
      t.create = function (e, t) {
        let n, h;
        if (void 0 === e || "" === e) throw Error("No input text");
        let y = i.M;
        return (
          void 0 !== t &&
            ((y = i.from(t.errorCorrectionLevel, i.M)),
            (n = f.from(t.version)),
            (h = c.from(t.maskPattern)),
            t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)),
          (function (e, t, n, i) {
            let h;
            if (Array.isArray(e)) h = g.fromArray(e);
            else if ("string" == typeof e) {
              let r = t;
              if (!r) {
                let t = g.rawSplit(e);
                r = f.getBestVersionForData(t, n);
              }
              h = g.fromString(e, r || 40);
            } else throw Error("Invalid data");
            let y = f.getBestVersionForData(h, n);
            if (!y)
              throw Error(
                "The amount of data is too big to be stored in a QR Code"
              );
            if (t) {
              if (t < y)
                throw Error(
                  "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                    y +
                    ".\n"
                );
            } else t = y;
            let w = (function (e, t, n) {
                let i = new o();
                n.forEach(function (t) {
                  i.put(t.mode.bit, 4),
                    i.put(t.getLength(), p.getCharCountIndicator(t.mode, e)),
                    t.write(i);
                });
                let a =
                  (r.getSymbolTotalCodewords(e) -
                    d.getTotalCodewordsCount(e, t)) *
                  8;
                for (
                  i.getLengthInBits() + 4 <= a && i.put(0, 4);
                  i.getLengthInBits() % 8 != 0;

                )
                  i.putBit(0);
                let s = (a - i.getLengthInBits()) / 8;
                for (let e = 0; e < s; e++) i.put(e % 2 ? 17 : 236, 8);
                return (function (e, t, n) {
                  let i,
                    o,
                    a = r.getSymbolTotalCodewords(t),
                    s = a - d.getTotalCodewordsCount(t, n),
                    l = d.getBlocksCount(t, n),
                    c = a % l,
                    f = l - c,
                    h = Math.floor(a / l),
                    p = Math.floor(s / l),
                    g = p + 1,
                    m = h - p,
                    y = new u(m),
                    w = 0,
                    v = Array(l),
                    b = Array(l),
                    E = 0,
                    x = new Uint8Array(e.buffer);
                  for (let e = 0; e < l; e++) {
                    let t = e < f ? p : g;
                    (v[e] = x.slice(w, w + t)),
                      (b[e] = y.encode(v[e])),
                      (w += t),
                      (E = Math.max(E, t));
                  }
                  let S = new Uint8Array(a),
                    A = 0;
                  for (i = 0; i < E; i++)
                    for (o = 0; o < l; o++)
                      i < v[o].length && (S[A++] = v[o][i]);
                  for (i = 0; i < m; i++)
                    for (o = 0; o < l; o++) S[A++] = b[o][i];
                  return S;
                })(i, e, t);
              })(t, n, h),
              v = new a(r.getSymbolSize(t));
            !(function (e, t) {
              let n = e.size,
                r = l.getPositions(t);
              for (let t = 0; t < r.length; t++) {
                let i = r[t][0],
                  o = r[t][1];
                for (let t = -1; t <= 7; t++)
                  if (!(i + t <= -1) && !(n <= i + t))
                    for (let r = -1; r <= 7; r++)
                      o + r <= -1 ||
                        n <= o + r ||
                        ((t >= 0 && t <= 6 && (0 === r || 6 === r)) ||
                        (r >= 0 && r <= 6 && (0 === t || 6 === t)) ||
                        (t >= 2 && t <= 4 && r >= 2 && r <= 4)
                          ? e.set(i + t, o + r, !0, !0)
                          : e.set(i + t, o + r, !1, !0));
              }
            })(v, t);
            let b = v.size;
            for (let e = 8; e < b - 8; e++) {
              let t = e % 2 == 0;
              v.set(e, 6, t, !0), v.set(6, e, t, !0);
            }
            return (
              !(function (e, t) {
                let n = s.getPositions(t);
                for (let t = 0; t < n.length; t++) {
                  let r = n[t][0],
                    i = n[t][1];
                  for (let t = -2; t <= 2; t++)
                    for (let n = -2; n <= 2; n++)
                      -2 === t ||
                      2 === t ||
                      -2 === n ||
                      2 === n ||
                      (0 === t && 0 === n)
                        ? e.set(r + t, i + n, !0, !0)
                        : e.set(r + t, i + n, !1, !0);
                }
              })(v, t),
              m(v, n, 0),
              t >= 7 &&
                (function (e, t) {
                  let n,
                    r,
                    i,
                    o = e.size,
                    a = f.getEncodedBits(t);
                  for (let t = 0; t < 18; t++)
                    (n = Math.floor(t / 3)),
                      (r = (t % 3) + o - 8 - 3),
                      (i = ((a >> t) & 1) == 1),
                      e.set(n, r, i, !0),
                      e.set(r, n, i, !0);
                })(v, t),
              !(function (e, t) {
                let n = e.size,
                  r = -1,
                  i = n - 1,
                  o = 7,
                  a = 0;
                for (let s = n - 1; s > 0; s -= 2)
                  for (6 === s && s--; ; ) {
                    for (let n = 0; n < 2; n++)
                      if (!e.isReserved(i, s - n)) {
                        let r = !1;
                        a < t.length && (r = ((t[a] >>> o) & 1) == 1),
                          e.set(i, s - n, r),
                          -1 == --o && (a++, (o = 7));
                      }
                    if ((i += r) < 0 || n <= i) {
                      (i -= r), (r = -r);
                      break;
                    }
                  }
              })(v, w),
              isNaN(i) && (i = c.getBestMask(v, m.bind(null, v, n))),
              c.applyMask(i, v),
              m(v, n, i),
              {
                modules: v,
                version: t,
                errorCorrectionLevel: n,
                maskPattern: i,
                segments: h,
              }
            );
          })(e, n, y, h)
        );
      };
    },
    85555: (e, t) => {
      let n = "[0-9]+",
        r =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        i =
          "(?:(?![A-Z0-9 $%*+\\-./:]|" +
          (r = r.replace(/u/g, "\\u")) +
          ")(?:.|[\r\n]))+";
      (t.KANJI = RegExp(r, "g")),
        (t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (t.BYTE = RegExp(i, "g")),
        (t.NUMERIC = RegExp(n, "g")),
        (t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g"));
      let o = RegExp("^" + r + "$"),
        a = RegExp("^" + n + "$"),
        s = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (t.testKanji = function (e) {
        return o.test(e);
      }),
        (t.testNumeric = function (e) {
          return a.test(e);
        }),
        (t.testAlphanumeric = function (e) {
          return s.test(e);
        });
    },
    85926: (e, t, n) => {
      "use strict";
      let r;
      var i = n(74552);
      let o = {
        ERROR_ASSOCIATION_PORT_OUT_OF_RANGE:
          "ERROR_ASSOCIATION_PORT_OUT_OF_RANGE",
        ERROR_FORBIDDEN_WALLET_BASE_URL: "ERROR_FORBIDDEN_WALLET_BASE_URL",
        ERROR_SECURE_CONTEXT_REQUIRED: "ERROR_SECURE_CONTEXT_REQUIRED",
        ERROR_SESSION_CLOSED: "ERROR_SESSION_CLOSED",
        ERROR_SESSION_TIMEOUT: "ERROR_SESSION_TIMEOUT",
        ERROR_WALLET_NOT_FOUND: "ERROR_WALLET_NOT_FOUND",
        ERROR_INVALID_PROTOCOL_VERSION: "ERROR_INVALID_PROTOCOL_VERSION",
      };
      class a extends Error {
        constructor(...e) {
          let [t, n, r] = e;
          super(n),
            (this.code = t),
            (this.data = r),
            (this.name = "SolanaMobileWalletAdapterError");
        }
      }
      class s extends Error {
        constructor(...e) {
          let [t, n, r, i] = e;
          super(r),
            (this.code = n),
            (this.data = i),
            (this.jsonRpcMessageId = t),
            (this.name = "SolanaMobileWalletAdapterProtocolError");
        }
      }
      function l(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(a, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      }
      function c(e, t) {
        let n = window.btoa(String.fromCharCode.call(null, ...e));
        return t
          ? n.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
          : n;
      }
      function d(e, t) {
        return l(this, void 0, void 0, function* () {
          let n = yield crypto.subtle.exportKey("raw", e),
            r = yield crypto.subtle.sign(
              { hash: "SHA-256", name: "ECDSA" },
              t,
              n
            ),
            i = new Uint8Array(n.byteLength + r.byteLength);
          return (
            i.set(new Uint8Array(n), 0),
            i.set(new Uint8Array(r), n.byteLength),
            i
          );
        });
      }
      let u = "solana:cloneAuthorization";
      function f(e, t) {
        return new Proxy(
          {},
          {
            get: (n, r) =>
              "then" === r
                ? null
                : (null == n[r] &&
                    (n[r] = function (n) {
                      return l(this, void 0, void 0, function* () {
                        let { method: o, params: a } = (function (e, t, n) {
                            let r = t,
                              i = e
                                .toString()
                                .replace(/[A-Z]/g, (e) => `_${e.toLowerCase()}`)
                                .toLowerCase();
                            switch (e) {
                              case "authorize": {
                                let { chain: e } = r;
                                if ("legacy" === n) {
                                  switch (e) {
                                    case "solana:testnet":
                                      e = "testnet";
                                      break;
                                    case "solana:devnet":
                                      e = "devnet";
                                      break;
                                    case "solana:mainnet":
                                      e = "mainnet-beta";
                                      break;
                                    default:
                                      e = r.cluster;
                                  }
                                  r.cluster = e;
                                } else {
                                  switch (e) {
                                    case "testnet":
                                    case "devnet":
                                      e = `solana:${e}`;
                                      break;
                                    case "mainnet-beta":
                                      e = "solana:mainnet";
                                  }
                                  r.chain = e;
                                }
                              }
                              case "reauthorize": {
                                let { auth_token: e, identity: t } = r;
                                e &&
                                  ("legacy" === n
                                    ? ((i = "reauthorize"),
                                      (r = { auth_token: e, identity: t }))
                                    : (i = "authorize"));
                              }
                            }
                            return { method: i, params: r };
                          })(r, n, e),
                          s = yield t(o, a);
                        return (
                          "authorize" === o &&
                            a.sign_in_payload &&
                            !s.sign_in_result &&
                            (s.sign_in_result = yield (function (e, t, n) {
                              var r;
                              return l(this, void 0, void 0, function* () {
                                var o, a;
                                let s =
                                    null != (r = e.domain)
                                      ? r
                                      : window.location.host,
                                  l = t.accounts[0].address,
                                  c =
                                    ((o = Object.assign(Object.assign({}, e), {
                                      domain: s,
                                      address: l,
                                    })),
                                    (a = i.createSignInMessageText(o)),
                                    window.btoa(a)),
                                  d = yield n("sign_messages", {
                                    addresses: [l],
                                    payloads: [c],
                                  });
                                return {
                                  address: l,
                                  signed_message: c,
                                  signature: d.signed_payloads[0].slice(
                                    c.length
                                  ),
                                };
                              });
                            })(a.sign_in_payload, s, t)),
                          (function (e, t, n) {
                            if ("getCapabilities" === e)
                              switch (n) {
                                case "legacy": {
                                  let e = ["solana:signTransactions"];
                                  return (
                                    !0 === t.supports_clone_authorization &&
                                      e.push(u),
                                    Object.assign(Object.assign({}, t), {
                                      features: e,
                                    })
                                  );
                                }
                                case "v1":
                                  return Object.assign(Object.assign({}, t), {
                                    supports_sign_and_send_transactions: !0,
                                    supports_clone_authorization:
                                      t.features.includes(u),
                                  });
                              }
                            return t;
                          })(r, s, e)
                        );
                      });
                    }),
                  n[r]),
            defineProperty: () => !1,
            deleteProperty: () => !1,
          }
        );
      }
      function h(e, t) {
        return l(this, void 0, void 0, function* () {
          let n = e.slice(0, 4),
            i = e.slice(4, 16),
            o = e.slice(16),
            a = yield crypto.subtle.decrypt(p(n, i), t, o);
          return (void 0 === r && (r = new TextDecoder("utf-8")), r).decode(a);
        });
      }
      function p(e, t) {
        return { additionalData: e, iv: t, name: "AES-GCM", tagLength: 128 };
      }
      function g() {
        return l(this, void 0, void 0, function* () {
          return yield crypto.subtle.generateKey(
            { name: "ECDSA", namedCurve: "P-256" },
            !1,
            ["sign"]
          );
        });
      }
      function m() {
        return l(this, void 0, void 0, function* () {
          return yield crypto.subtle.generateKey(
            { name: "ECDH", namedCurve: "P-256" },
            !1,
            ["deriveKey", "deriveBits"]
          );
        });
      }
      function y(e) {
        let t = "",
          n = new Uint8Array(e),
          r = n.byteLength;
        for (let e = 0; e < r; e++) t += String.fromCharCode(n[e]);
        return window.btoa(t);
      }
      function w(e) {
        if (e < 49152 || e > 65535)
          throw new a(
            o.ERROR_ASSOCIATION_PORT_OUT_OF_RANGE,
            `Association port number must be between 49152 and 65535. ${e} given.`,
            { port: e }
          );
        return e;
      }
      function v(e) {
        return e.replace(
          /[/+=]/g,
          (e) => ({ "/": "_", "+": "-", "=": "." }[e])
        );
      }
      function b(e) {
        return e.replace(/(^\/+|\/+$)/g, "").split("/");
      }
      function E(e, t) {
        let n = null;
        if (t) {
          try {
            n = new URL(t);
          } catch (e) {}
          if ((null == n ? void 0 : n.protocol) !== "https:")
            throw new a(
              o.ERROR_FORBIDDEN_WALLET_BASE_URL,
              "Base URLs supplied by wallets must be valid `https` URLs"
            );
        }
        return (
          n || (n = new URL("solana-wallet:/")),
          new URL(
            e.startsWith("/") ? e : [...b(n.pathname), ...b(e)].join("/"),
            n
          )
        );
      }
      function x(e, t) {
        return l(this, void 0, void 0, function* () {
          return (function (e, t, n) {
            return l(this, void 0, void 0, function* () {
              let r = (function (e) {
                  if (e >= 0x100000000)
                    throw Error(
                      "Outbound sequence number overflow. The maximum sequence number is 32-bytes."
                    );
                  let t = new ArrayBuffer(4);
                  return new DataView(t).setUint32(0, e, !1), new Uint8Array(t);
                })(t),
                i = new Uint8Array(12);
              crypto.getRandomValues(i);
              let o = yield crypto.subtle.encrypt(
                  p(r, i),
                  n,
                  new TextEncoder().encode(e)
                ),
                a = new Uint8Array(r.byteLength + i.byteLength + o.byteLength);
              return (
                a.set(new Uint8Array(r), 0),
                a.set(new Uint8Array(i), r.byteLength),
                a.set(new Uint8Array(o), r.byteLength + i.byteLength),
                a
              );
            });
          })(JSON.stringify(e), e.id, t);
        });
      }
      function S(e, t) {
        return l(this, void 0, void 0, function* () {
          let n = JSON.parse(yield h(e, t));
          if (Object.hasOwnProperty.call(n, "error"))
            throw new s(n.id, n.error.code, n.error.message);
          return n;
        });
      }
      function A(e, t, n) {
        return l(this, void 0, void 0, function* () {
          let [r, i] = yield Promise.all([
              crypto.subtle.exportKey("raw", t),
              crypto.subtle.importKey(
                "raw",
                e.slice(0, 65),
                { name: "ECDH", namedCurve: "P-256" },
                !1,
                []
              ),
            ]),
            o = yield crypto.subtle.deriveBits(
              { name: "ECDH", public: i },
              n,
              256
            ),
            a = yield crypto.subtle.importKey("raw", o, "HKDF", !1, [
              "deriveKey",
            ]);
          return yield crypto.subtle.deriveKey(
            {
              name: "HKDF",
              hash: "SHA-256",
              salt: new Uint8Array(r),
              info: new Uint8Array(),
            },
            a,
            { name: "AES-GCM", length: 128 },
            !1,
            ["encrypt", "decrypt"]
          );
        });
      }
      function T(e, t) {
        return l(this, void 0, void 0, function* () {
          let n = JSON.parse(yield h(e, t)),
            r = "legacy";
          if (Object.hasOwnProperty.call(n, "v"))
            switch (n.v) {
              case 1:
              case "1":
              case "v1":
                r = "v1";
                break;
              case "legacy":
                r = "legacy";
                break;
              default:
                throw new a(
                  o.ERROR_INVALID_PROTOCOL_VERSION,
                  `Unknown/unsupported protocol version: ${n.v}`
                );
            }
          return { protocol_version: r };
        });
      }
      let I = { Firefox: 0, Other: 1 },
        _ = null,
        O = {
          retryDelayScheduleMs: [150, 150, 200, 500, 500, 750, 750, 1e3],
          timeoutMs: 3e4,
        },
        B = "com.solana.mobilewalletadapter.v1",
        N = "com.solana.mobilewalletadapter.v1.base64";
      function C() {
        if ("undefined" == typeof window || !0 !== window.isSecureContext)
          throw new a(
            o.ERROR_SECURE_CONTEXT_REQUIRED,
            "The mobile wallet adapter protocol must be used in a secure context (`https`)."
          );
      }
      function M(e) {
        let t;
        try {
          t = new URL(e);
        } catch (e) {
          throw new a(
            o.ERROR_FORBIDDEN_WALLET_BASE_URL,
            "Invalid base URL supplied by wallet"
          );
        }
        if ("https:" !== t.protocol)
          throw new a(
            o.ERROR_FORBIDDEN_WALLET_BASE_URL,
            "Base URLs supplied by wallets must be valid `https` URLs"
          );
      }
      function L(e) {
        return new DataView(e).getUint32(0, !1);
      }
      (t.X2 = function (e) {
        return l(this, void 0, void 0, function* () {
          let t, n, r, i, u;
          C();
          let h = yield g(),
            p = `wss://${null == e ? void 0 : e.remoteHostAuthority}/reflect`,
            w = (() => {
              let e = [...O.retryDelayScheduleMs];
              return () => (e.length > 1 ? e.shift() : e[0]);
            })(),
            b = 1,
            I = 0,
            _ = { __type: "disconnected" },
            R = (e) =>
              l(this, void 0, void 0, function* () {
                var t;
                return "base64" != n
                  ? yield e.data.arrayBuffer()
                  : ((t = yield e.data),
                    new Uint8Array(
                      window
                        .atob(t)
                        .split("")
                        .map((e) => e.charCodeAt(0))
                    )).buffer;
              }),
            k = yield new Promise((s, d) => {
              let u,
                f = () =>
                  l(this, void 0, void 0, function* () {
                    if ("connecting" !== _.__type)
                      return void console.warn(
                        `Expected adapter state to be \`connecting\` at the moment the websocket opens. Got \`${_.__type}\`.`
                      );
                    (n = r.protocol.includes(N) ? "base64" : "binary"),
                      r.removeEventListener("open", f);
                  }),
                g = (e) => {
                  e.wasClean
                    ? (_ = { __type: "disconnected" })
                    : d(
                        new a(
                          o.ERROR_SESSION_CLOSED,
                          `The wallet session dropped unexpectedly (${e.code}: ${e.reason}).`,
                          { closeEvent: e }
                        )
                      ),
                    i();
                },
                m = (e) =>
                  l(this, void 0, void 0, function* () {
                    i(),
                      Date.now() - t >= O.timeoutMs
                        ? d(
                            new a(
                              o.ERROR_SESSION_TIMEOUT,
                              `Failed to connect to the wallet websocket at ${p}.`
                            )
                          )
                        : (yield new Promise((e) => {
                            let t = w();
                            u = window.setTimeout(e, t);
                          }),
                          x());
                  }),
                b = (t) =>
                  l(this, void 0, void 0, function* () {
                    let n = yield R(t);
                    if ("connecting" === _.__type) {
                      if (0 == n.byteLength)
                        throw Error(
                          "Encountered unexpected message while connecting"
                        );
                      let t = (function (e) {
                        let { value: t, offset: n } = (function (e) {
                          var t,
                            n = new Uint8Array(e),
                            r = e.byteLength,
                            i = 0,
                            o = 0;
                          do {
                            if (o >= r || o > 10)
                              throw RangeError("Failed to decode varint");
                            i |= (127 & (t = n[o++])) << (7 * o);
                          } while (t >= 128);
                          return { value: i, offset: o };
                        })(e);
                        return new Uint8Array(e.slice(n, n + t));
                      })(n);
                      _ = { __type: "reflector_id_received", reflectorId: t };
                      let i = yield (function (e, t, n, r, i = ["v1"]) {
                        return l(this, void 0, void 0, function* () {
                          let o = y(yield crypto.subtle.exportKey("raw", e)),
                            a = E("v1/associate/remote", r);
                          return (
                            a.searchParams.set("association", v(o)),
                            a.searchParams.set("reflector", `${t}`),
                            a.searchParams.set("id", `${c(n, !0)}`),
                            i.forEach((e) => {
                              a.searchParams.set("v", e);
                            }),
                            a
                          );
                        });
                      })(
                        h.publicKey,
                        e.remoteHostAuthority,
                        t,
                        null == e ? void 0 : e.baseUri
                      );
                      r.removeEventListener("message", b), s(i);
                    }
                  }),
                x = () => {
                  i && i(),
                    (_ = { __type: "connecting", associationKeypair: h }),
                    void 0 === t && (t = Date.now()),
                    (r = new WebSocket(p, [B, N])).addEventListener("open", f),
                    r.addEventListener("close", g),
                    r.addEventListener("error", m),
                    r.addEventListener("message", b),
                    (i = () => {
                      window.clearTimeout(u),
                        r.removeEventListener("open", f),
                        r.removeEventListener("close", g),
                        r.removeEventListener("error", m),
                        r.removeEventListener("message", b);
                    });
                };
              x();
            }),
            W = !1;
          return {
            associationUrl: k,
            close: () => {
              r.close(), u();
            },
            wallet: new Promise((e, t) => {
              let p = {},
                g = (i) =>
                  l(this, void 0, void 0, function* () {
                    let o = yield R(i);
                    switch (_.__type) {
                      case "reflector_id_received":
                        if (0 !== o.byteLength)
                          throw Error(
                            "Encountered unexpected message while awaiting reflection"
                          );
                        let a = yield m(),
                          u = yield d(a.publicKey, h.privateKey);
                        "base64" == n ? r.send(c(u)) : r.send(u),
                          (_ = {
                            __type: "hello_req_sent",
                            associationPublicKey: h.publicKey,
                            ecdhPrivateKey: a.privateKey,
                          });
                        break;
                      case "connected":
                        try {
                          let e = o.slice(0, 4),
                            t = L(e);
                          if (t !== I + 1)
                            throw Error(
                              "Encrypted message has invalid sequence number"
                            );
                          I = t;
                          let n = yield S(o, _.sharedSecret),
                            r = p[n.id];
                          delete p[n.id], r.resolve(n.result);
                        } catch (e) {
                          if (e instanceof s) {
                            let t = p[e.jsonRpcMessageId];
                            delete p[e.jsonRpcMessageId], t.reject(e);
                          } else throw e;
                        }
                        break;
                      case "hello_req_sent": {
                        let i = yield A(
                            o,
                            _.associationPublicKey,
                            _.ecdhPrivateKey
                          ),
                          a = o.slice(65),
                          s =
                            0 !== a.byteLength
                              ? yield l(this, void 0, void 0, function* () {
                                  let e = L(a.slice(0, 4));
                                  if (e !== I + 1)
                                    throw Error(
                                      "Encrypted message has invalid sequence number"
                                    );
                                  return (I = e), T(a, i);
                                })
                              : { protocol_version: "legacy" };
                        _ = {
                          __type: "connected",
                          sharedSecret: i,
                          sessionProperties: s,
                        };
                        let d = f(s.protocol_version, (e, t) =>
                          l(this, void 0, void 0, function* () {
                            let o = b++,
                              a = yield x(
                                {
                                  id: o,
                                  jsonrpc: "2.0",
                                  method: e,
                                  params: null != t ? t : {},
                                },
                                i
                              );
                            return (
                              "base64" == n ? r.send(c(a)) : r.send(a),
                              new Promise((t, n) => {
                                p[o] = {
                                  resolve(r) {
                                    switch (e) {
                                      case "authorize":
                                      case "reauthorize": {
                                        let { wallet_uri_base: e } = r;
                                        if (null != e)
                                          try {
                                            M(e);
                                          } catch (e) {
                                            n(e);
                                            return;
                                          }
                                      }
                                    }
                                    t(r);
                                  },
                                  reject: n,
                                };
                              })
                            );
                          })
                        );
                        W = !0;
                        try {
                          e(d);
                        } catch (e) {
                          t(e);
                        }
                      }
                    }
                  });
              r.addEventListener("message", g),
                (u = () => {
                  r.removeEventListener("message", g),
                    i(),
                    W ||
                      t(
                        new a(
                          o.ERROR_SESSION_CLOSED,
                          "The wallet session was closed before connection.",
                          {
                            closeEvent: new CloseEvent(
                              "socket was closed before connection"
                            ),
                          }
                        )
                      );
                });
            }),
          };
        });
      }),
        (t.hL = function (e, t) {
          return l(this, void 0, void 0, function* () {
            let n;
            C();
            let r = yield g(),
              i = yield (function (e, t) {
                return l(this, void 0, void 0, function* () {
                  let n = w(49152 + Math.floor(16384 * Math.random())),
                    r = yield (function (e, t, n, r = ["v1"]) {
                      return l(this, void 0, void 0, function* () {
                        let i = w(t),
                          o = y(yield crypto.subtle.exportKey("raw", e)),
                          a = E("v1/associate/local", n);
                        return (
                          a.searchParams.set("association", v(o)),
                          a.searchParams.set("port", `${i}`),
                          r.forEach((e) => {
                            a.searchParams.set("v", e);
                          }),
                          a
                        );
                      });
                    })(e, n, t);
                  return (
                    yield (function (e) {
                      return l(this, void 0, void 0, function* () {
                        if ("https:" === e.protocol) window.location.assign(e);
                        else
                          try {
                            switch (
                              -1 !== navigator.userAgent.indexOf("Firefox/")
                                ? I.Firefox
                                : I.Other
                            ) {
                              case I.Firefox:
                                null == _ &&
                                  (((_ =
                                    document.createElement(
                                      "iframe"
                                    )).style.display = "none"),
                                  document.body.appendChild(_)),
                                  (_.contentWindow.location.href =
                                    e.toString());
                                break;
                              case I.Other: {
                                let t = new Promise((e, t) => {
                                  function n() {
                                    clearTimeout(i),
                                      window.removeEventListener("blur", r);
                                  }
                                  function r() {
                                    n(), e();
                                  }
                                  window.addEventListener("blur", r);
                                  let i = setTimeout(() => {
                                    n(), t();
                                  }, 3e3);
                                });
                                window.location.assign(e), yield t;
                              }
                            }
                          } catch (e) {
                            throw new a(
                              o.ERROR_WALLET_NOT_FOUND,
                              "Found no installed wallet that supports the mobile wallet protocol."
                            );
                          }
                      });
                    })(r),
                    n
                  );
                });
              })(r.publicKey, null == t ? void 0 : t.baseUri),
              c = `ws://localhost:${i}/solana-wallet`,
              u = (() => {
                let e = [...O.retryDelayScheduleMs];
                return () => (e.length > 1 ? e.shift() : e[0]);
              })(),
              h = 1,
              p = 0,
              b = { __type: "disconnected" };
            return new Promise((t, i) => {
              let g,
                y,
                w,
                v = {},
                E = () =>
                  l(this, void 0, void 0, function* () {
                    if ("connecting" !== b.__type)
                      return void console.warn(
                        `Expected adapter state to be \`connecting\` at the moment the websocket opens. Got \`${b.__type}\`.`
                      );
                    g.removeEventListener("open", E);
                    let { associationKeypair: e } = b,
                      t = yield m();
                    g.send(yield d(t.publicKey, e.privateKey)),
                      (b = {
                        __type: "hello_req_sent",
                        associationPublicKey: e.publicKey,
                        ecdhPrivateKey: t.privateKey,
                      });
                  }),
                I = (e) => {
                  e.wasClean
                    ? (b = { __type: "disconnected" })
                    : i(
                        new a(
                          o.ERROR_SESSION_CLOSED,
                          `The wallet session dropped unexpectedly (${e.code}: ${e.reason}).`,
                          { closeEvent: e }
                        )
                      ),
                    y();
                },
                _ = (e) =>
                  l(this, void 0, void 0, function* () {
                    y(),
                      Date.now() - n >= O.timeoutMs
                        ? i(
                            new a(
                              o.ERROR_SESSION_TIMEOUT,
                              `Failed to connect to the wallet websocket at ${c}.`
                            )
                          )
                        : (yield new Promise((e) => {
                            let t = u();
                            w = window.setTimeout(e, t);
                          }),
                          C());
                  }),
                N = (n) =>
                  l(this, void 0, void 0, function* () {
                    let o = yield n.data.arrayBuffer();
                    switch (b.__type) {
                      case "connecting":
                        if (0 !== o.byteLength)
                          throw Error(
                            "Encountered unexpected message while connecting"
                          );
                        let a = yield m();
                        g.send(yield d(a.publicKey, r.privateKey)),
                          (b = {
                            __type: "hello_req_sent",
                            associationPublicKey: r.publicKey,
                            ecdhPrivateKey: a.privateKey,
                          });
                        break;
                      case "connected":
                        try {
                          let e = o.slice(0, 4),
                            t = L(e);
                          if (t !== p + 1)
                            throw Error(
                              "Encrypted message has invalid sequence number"
                            );
                          p = t;
                          let n = yield S(o, b.sharedSecret),
                            r = v[n.id];
                          delete v[n.id], r.resolve(n.result);
                        } catch (e) {
                          if (e instanceof s) {
                            let t = v[e.jsonRpcMessageId];
                            delete v[e.jsonRpcMessageId], t.reject(e);
                          } else throw e;
                        }
                        break;
                      case "hello_req_sent": {
                        if (0 === o.byteLength) {
                          let e = yield m();
                          g.send(yield d(e.publicKey, r.privateKey)),
                            (b = {
                              __type: "hello_req_sent",
                              associationPublicKey: r.publicKey,
                              ecdhPrivateKey: e.privateKey,
                            });
                          break;
                        }
                        let n = yield A(
                            o,
                            b.associationPublicKey,
                            b.ecdhPrivateKey
                          ),
                          a = o.slice(65),
                          s =
                            0 !== a.byteLength
                              ? yield l(this, void 0, void 0, function* () {
                                  let e = L(a.slice(0, 4));
                                  if (e !== p + 1)
                                    throw Error(
                                      "Encrypted message has invalid sequence number"
                                    );
                                  return (p = e), T(a, n);
                                })
                              : { protocol_version: "legacy" };
                        b = {
                          __type: "connected",
                          sharedSecret: n,
                          sessionProperties: s,
                        };
                        let c = f(s.protocol_version, (e, t) =>
                          l(this, void 0, void 0, function* () {
                            let r = h++;
                            return (
                              g.send(
                                yield x(
                                  {
                                    id: r,
                                    jsonrpc: "2.0",
                                    method: e,
                                    params: null != t ? t : {},
                                  },
                                  n
                                )
                              ),
                              new Promise((t, n) => {
                                v[r] = {
                                  resolve(r) {
                                    switch (e) {
                                      case "authorize":
                                      case "reauthorize": {
                                        let { wallet_uri_base: e } = r;
                                        if (null != e)
                                          try {
                                            M(e);
                                          } catch (e) {
                                            n(e);
                                            return;
                                          }
                                      }
                                    }
                                    t(r);
                                  },
                                  reject: n,
                                };
                              })
                            );
                          })
                        );
                        try {
                          t(yield e(c));
                        } catch (e) {
                          i(e);
                        } finally {
                          y(), g.close();
                        }
                      }
                    }
                  }),
                C = () => {
                  y && y(),
                    (b = { __type: "connecting", associationKeypair: r }),
                    void 0 === n && (n = Date.now()),
                    (g = new WebSocket(c, [B])).addEventListener("open", E),
                    g.addEventListener("close", I),
                    g.addEventListener("error", _),
                    g.addEventListener("message", N),
                    (y = () => {
                      window.clearTimeout(w),
                        g.removeEventListener("open", E),
                        g.removeEventListener("close", I),
                        g.removeEventListener("error", _),
                        g.removeEventListener("message", N);
                    });
                };
              C();
            });
          });
        });
    },
    86327: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.crypto = void 0),
        (t.crypto =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0);
    },
    87250: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hash_to_ristretto255 =
          t.hashToRistretto255 =
          t.RistrettoPoint =
          t.encodeToCurve =
          t.hashToCurve =
          t.edwardsToMontgomery =
          t.x25519 =
          t.ed25519ph =
          t.ed25519ctx =
          t.ed25519 =
          t.ED25519_TORSION_SUBGROUP =
            void 0),
        (t.edwardsToMontgomeryPub = T),
        (t.edwardsToMontgomeryPriv = function (e) {
          let t = S.hash(e.subarray(0, 32));
          return S.adjustScalarBytes(t).subarray(0, 32);
        });
      let r = n(5068),
        i = n(12315),
        o = n(42432),
        a = n(5952),
        s = n(43286),
        l = n(17735),
        c = n(57479),
        d = n(44045),
        u = BigInt(
          "57896044618658097711785492504343953926634992332820282019728792003956564819949"
        ),
        f = BigInt(
          "19681161376707505956807079304988542015446066515923890162744021073123829784752"
        ),
        h = BigInt(0),
        p = BigInt(1),
        g = BigInt(2),
        m = BigInt(3),
        y = BigInt(5),
        w = BigInt(8);
      function v(e) {
        let t = BigInt(10),
          n = BigInt(20),
          r = BigInt(40),
          i = BigInt(80),
          o = (((e * e) % u) * e) % u,
          a = ((0, s.pow2)(o, g, u) * o) % u,
          l = ((0, s.pow2)(a, p, u) * e) % u,
          c = ((0, s.pow2)(l, y, u) * l) % u,
          d = ((0, s.pow2)(c, t, u) * c) % u,
          f = ((0, s.pow2)(d, n, u) * d) % u,
          h = ((0, s.pow2)(f, r, u) * f) % u,
          m = ((0, s.pow2)(h, i, u) * h) % u,
          w = ((0, s.pow2)(m, i, u) * h) % u,
          v = ((0, s.pow2)(w, t, u) * c) % u;
        return { pow_p_5_8: ((0, s.pow2)(v, g, u) * e) % u, b2: o };
      }
      function b(e) {
        return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
      }
      function E(e, t) {
        let n = (0, s.mod)(t * t * t, u),
          r = v(e * (0, s.mod)(n * n * t, u)).pow_p_5_8,
          i = (0, s.mod)(e * n * r, u),
          o = (0, s.mod)(t * i * i, u),
          a = i,
          l = (0, s.mod)(i * f, u),
          c = o === e,
          d = o === (0, s.mod)(-e, u),
          h = o === (0, s.mod)(-e * f, u);
        return (
          c && (i = a),
          (d || h) && (i = l),
          (0, s.isNegativeLE)(i, u) && (i = (0, s.mod)(-i, u)),
          { isValid: c || d, value: i }
        );
      }
      t.ED25519_TORSION_SUBGROUP = [
        "0100000000000000000000000000000000000000000000000000000000000000",
        "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a",
        "0000000000000000000000000000000000000000000000000000000000000080",
        "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05",
        "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
        "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85",
        "0000000000000000000000000000000000000000000000000000000000000000",
        "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa",
      ];
      let x = (0, s.Field)(u, void 0, !0),
        S = {
          a: BigInt(-1),
          d: BigInt(
            "37095705934669439343138083508754565189542113879843219016388785533085940283555"
          ),
          Fp: x,
          n: BigInt(
            "7237005577332262213973186563042994240857116359379907606001950938285454250989"
          ),
          h: w,
          Gx: BigInt(
            "15112221349535400772501151409588531511454012693041857206046113283949847762202"
          ),
          Gy: BigInt(
            "46316835694926478169428394003475163141307993866256225615783033603165251855960"
          ),
          hash: r.sha512,
          randomBytes: i.randomBytes,
          adjustScalarBytes: b,
          uvRatio: E,
        };
      function A(e, t, n) {
        if (t.length > 255) throw Error("Context is too big");
        return (0, i.concatBytes)(
          (0, i.utf8ToBytes)("SigEd25519 no Ed25519 collisions"),
          new Uint8Array([+!!n, t.length]),
          t,
          e
        );
      }
      function T(e) {
        let { y: n } = t.ed25519.ExtendedPoint.fromHex(e),
          r = BigInt(1);
        return x.toBytes(x.create((r + n) * x.inv(r - n)));
      }
      (t.ed25519 = (0, o.twistedEdwards)(S)),
        (t.ed25519ctx = (0, o.twistedEdwards)({ ...S, domain: A })),
        (t.ed25519ph = (0, o.twistedEdwards)(
          Object.assign({}, S, { domain: A, prehash: r.sha512 })
        )),
        (t.x25519 = (0, l.montgomery)({
          P: u,
          a: BigInt(486662),
          montgomeryBits: 255,
          nByteLength: 32,
          Gu: BigInt(9),
          powPminus2: (e) => {
            let { pow_p_5_8: t, b2: n } = v(e);
            return (0, s.mod)((0, s.pow2)(t, m, u) * n, u);
          },
          adjustScalarBytes: b,
          randomBytes: i.randomBytes,
        })),
        (t.edwardsToMontgomery = T);
      let I = (x.ORDER + m) / w,
        _ = x.pow(g, I),
        O = x.sqrt(x.neg(x.ONE)),
        B = (0, s.FpSqrtEven)(x, x.neg(BigInt(486664))),
        N = (0, a.createHasher)(
          t.ed25519.ExtendedPoint,
          (e) =>
            (function (e) {
              let {
                  xMn: t,
                  xMd: n,
                  yMn: r,
                  yMd: i,
                } = (function (e) {
                  let t = (x.ORDER - y) / w,
                    n = BigInt(486662),
                    r = x.sqr(e);
                  r = x.mul(r, g);
                  let i = x.add(r, x.ONE),
                    o = x.neg(n),
                    a = x.sqr(i),
                    s = x.mul(a, i),
                    l = x.mul(r, n);
                  (l = x.mul(l, o)), (l = x.add(l, a)), (l = x.mul(l, o));
                  let c = x.sqr(s);
                  (a = x.sqr(c)),
                    (c = x.mul(c, s)),
                    (c = x.mul(c, l)),
                    (a = x.mul(a, c));
                  let d = x.pow(a, t);
                  d = x.mul(d, c);
                  let u = x.mul(d, O);
                  (a = x.sqr(d)), (a = x.mul(a, s));
                  let f = x.eql(a, l),
                    h = x.cmov(u, d, f),
                    m = x.mul(o, r),
                    v = x.mul(d, e);
                  v = x.mul(v, _);
                  let b = x.mul(v, O),
                    E = x.mul(l, r);
                  (a = x.sqr(v)), (a = x.mul(a, s));
                  let S = x.eql(a, E),
                    A = x.cmov(b, v, S);
                  (a = x.sqr(h)), (a = x.mul(a, s));
                  let T = x.eql(a, l),
                    I = x.cmov(m, o, T),
                    B = x.cmov(A, h, T),
                    N = x.isOdd(B);
                  return {
                    xMn: I,
                    xMd: i,
                    yMn: (B = x.cmov(B, x.neg(B), T !== N)),
                    yMd: p,
                  };
                })(e),
                o = x.mul(t, i);
              o = x.mul(o, B);
              let a = x.mul(n, r),
                s = x.sub(t, n),
                l = x.add(t, n),
                c = x.mul(a, l),
                d = x.eql(c, x.ZERO);
              (o = x.cmov(o, x.ZERO, d)),
                (a = x.cmov(a, x.ONE, d)),
                (s = x.cmov(s, x.ONE, d)),
                (l = x.cmov(l, x.ONE, d));
              let u = x.invertBatch([a, l]);
              return { x: x.mul(o, u[0]), y: x.mul(s, u[1]) };
            })(e[0]),
          {
            DST: "edwards25519_XMD:SHA-512_ELL2_RO_",
            encodeDST: "edwards25519_XMD:SHA-512_ELL2_NU_",
            p: x.ORDER,
            m: 1,
            k: 128,
            expand: "xmd",
            hash: r.sha512,
          }
        );
      function C(e) {
        if (!(e instanceof j)) throw Error("RistrettoPoint expected");
      }
      (t.hashToCurve = N.hashToCurve), (t.encodeToCurve = N.encodeToCurve);
      let M = BigInt(
          "25063068953384623474111414158702152701244531502492656460079210482610430750235"
        ),
        L = BigInt(
          "54469307008909316920995813868745141605393597292927456921205312896311721017578"
        ),
        R = BigInt(
          "1159843021668779879193775521855586647937357759715417654439879720876111806838"
        ),
        k = BigInt(
          "40440834346308536858101042469323190826248399146238708352240133220865137265952"
        ),
        W = (e) => E(p, e),
        P = BigInt(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        ),
        U = (e) => t.ed25519.CURVE.Fp.create((0, d.bytesToNumberLE)(e) & P);
      function D(e) {
        let { d: n } = t.ed25519.CURVE,
          r = t.ed25519.CURVE.Fp.ORDER,
          i = t.ed25519.CURVE.Fp.create,
          o = i(f * e * e),
          a = i((o + p) * R),
          l = BigInt(-1),
          c = i((l - n * o) * i(o + n)),
          { isValid: d, value: u } = E(a, c),
          h = i(u * e);
        (0, s.isNegativeLE)(h, r) || (h = i(-h)), d || (u = h), d || (l = o);
        let g = i(l * (o - p) * k - c),
          m = u * u,
          y = i((u + u) * c),
          w = i(g * M),
          v = i(p - m),
          b = i(p + m);
        return new t.ed25519.ExtendedPoint(
          i(y * b),
          i(v * w),
          i(w * b),
          i(y * v)
        );
      }
      class j {
        constructor(e) {
          this.ep = e;
        }
        static fromAffine(e) {
          return new j(t.ed25519.ExtendedPoint.fromAffine(e));
        }
        static hashToCurve(e) {
          let t = D(
              U((e = (0, d.ensureBytes)("ristrettoHash", e, 64)).slice(0, 32))
            ),
            n = D(U(e.slice(32, 64)));
          return new j(t.add(n));
        }
        static fromHex(e) {
          e = (0, d.ensureBytes)("ristrettoHex", e, 32);
          let { a: n, d: r } = t.ed25519.CURVE,
            i = t.ed25519.CURVE.Fp.ORDER,
            o = t.ed25519.CURVE.Fp.create,
            a =
              "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint",
            l = U(e);
          if (
            !(0, d.equalBytes)((0, d.numberToBytesLE)(l, 32), e) ||
            (0, s.isNegativeLE)(l, i)
          )
            throw Error(a);
          let c = o(l * l),
            u = o(p + n * c),
            f = o(p - n * c),
            g = o(u * u),
            m = o(f * f),
            y = o(n * r * g - m),
            { isValid: w, value: v } = W(o(y * m)),
            b = o(v * f),
            E = o(v * b * y),
            x = o((l + l) * b);
          (0, s.isNegativeLE)(x, i) && (x = o(-x));
          let S = o(u * E),
            A = o(x * S);
          if (!w || (0, s.isNegativeLE)(A, i) || S === h) throw Error(a);
          return new j(new t.ed25519.ExtendedPoint(x, S, p, A));
        }
        static msm(e, n) {
          let r = (0, s.Field)(t.ed25519.CURVE.n, t.ed25519.CURVE.nBitLength);
          return (0, c.pippenger)(j, r, e, n);
        }
        toRawBytes() {
          let e,
            { ex: n, ey: r, ez: i, et: o } = this.ep,
            a = t.ed25519.CURVE.Fp.ORDER,
            l = t.ed25519.CURVE.Fp.create,
            c = l(l(i + r) * l(i - r)),
            u = l(n * r),
            h = l(u * u),
            { value: p } = W(l(c * h)),
            g = l(p * c),
            m = l(p * u),
            y = l(g * m * o);
          if ((0, s.isNegativeLE)(o * y, a)) {
            let t = l(r * f),
              i = l(n * f);
            (n = t), (r = i), (e = l(g * L));
          } else e = m;
          (0, s.isNegativeLE)(n * y, a) && (r = l(-r));
          let w = l((i - r) * e);
          return (
            (0, s.isNegativeLE)(w, a) && (w = l(-w)),
            (0, d.numberToBytesLE)(w, 32)
          );
        }
        toHex() {
          return (0, d.bytesToHex)(this.toRawBytes());
        }
        toString() {
          return this.toHex();
        }
        equals(e) {
          C(e);
          let { ex: n, ey: r } = this.ep,
            { ex: i, ey: o } = e.ep,
            a = t.ed25519.CURVE.Fp.create,
            s = a(n * o) === a(r * i),
            l = a(r * o) === a(n * i);
          return s || l;
        }
        add(e) {
          return C(e), new j(this.ep.add(e.ep));
        }
        subtract(e) {
          return C(e), new j(this.ep.subtract(e.ep));
        }
        multiply(e) {
          return new j(this.ep.multiply(e));
        }
        multiplyUnsafe(e) {
          return new j(this.ep.multiplyUnsafe(e));
        }
        double() {
          return new j(this.ep.double());
        }
        negate() {
          return new j(this.ep.negate());
        }
      }
      j.BASE || (j.BASE = new j(t.ed25519.ExtendedPoint.BASE)),
        j.ZERO || (j.ZERO = new j(t.ed25519.ExtendedPoint.ZERO)),
        (t.RistrettoPoint = j),
        (t.hashToRistretto255 = (e, t) => {
          let n = t.DST,
            o = "string" == typeof n ? (0, i.utf8ToBytes)(n) : n,
            s = (0, a.expand_message_xmd)(e, o, 64, r.sha512);
          return j.hashToCurve(s);
        }),
        (t.hash_to_ristretto255 = t.hashToRistretto255);
    },
    89584: function (e, t, n) {
      "use strict";
      var r,
        i,
        o =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function a(e) {
                try {
                  l(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                try {
                  l(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value) instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })
                    ).then(a, s);
              }
              l((r = r.apply(e, t || [])).next());
            });
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BaseWalletAdapter = t.WalletReadyState = t.EventEmitter = void 0),
        (t.scopePollingDetectionStrategy = function (e) {
          if ("undefined" == typeof window || "undefined" == typeof document)
            return;
          let t = [];
          function n() {
            if (e()) for (let e of t) e();
          }
          let r = setInterval(n, 1e3);
          t.push(() => clearInterval(r)),
            "loading" === document.readyState &&
              (document.addEventListener("DOMContentLoaded", n, { once: !0 }),
              t.push(() =>
                document.removeEventListener("DOMContentLoaded", n)
              )),
            "complete" !== document.readyState &&
              (window.addEventListener("load", n, { once: !0 }),
              t.push(() => window.removeEventListener("load", n))),
            n();
        }),
        (t.isIosAndRedirectable = function () {
          if (!navigator) return !1;
          let e = navigator.userAgent.toLowerCase(),
            t = e.includes("iphone") || e.includes("ipad"),
            n = e.includes("safari");
          return t && n;
        });
      let s = a(n(82661));
      t.EventEmitter = s.default;
      let l = n(25546);
      ((r = i || (t.WalletReadyState = i = {})).Installed = "Installed"),
        (r.NotDetected = "NotDetected"),
        (r.Loadable = "Loadable"),
        (r.Unsupported = "Unsupported");
      class c extends s.default {
        get connected() {
          return !!this.publicKey;
        }
        autoConnect() {
          return o(this, void 0, void 0, function* () {
            yield this.connect();
          });
        }
        prepareTransaction(e, t) {
          return o(this, arguments, void 0, function* (e, t, n = {}) {
            let r = this.publicKey;
            if (!r) throw new l.WalletNotConnectedError();
            return (
              (e.feePayer = e.feePayer || r),
              (e.recentBlockhash =
                e.recentBlockhash ||
                (yield t.getLatestBlockhash({
                  commitment: n.preflightCommitment,
                  minContextSlot: n.minContextSlot,
                })).blockhash),
              e
            );
          });
        }
      }
      t.BaseWalletAdapter = c;
    },
    91591: (e, t) => {
      t.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      let n = { N1: 3, N2: 3, N3: 40, N4: 10 };
      (t.isValid = function (e) {
        return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7;
      }),
        (t.from = function (e) {
          return t.isValid(e) ? parseInt(e, 10) : void 0;
        }),
        (t.getPenaltyN1 = function (e) {
          let t = e.size,
            r = 0,
            i = 0,
            o = 0,
            a = null,
            s = null;
          for (let l = 0; l < t; l++) {
            (i = o = 0), (a = s = null);
            for (let c = 0; c < t; c++) {
              let t = e.get(l, c);
              t === a
                ? i++
                : (i >= 5 && (r += n.N1 + (i - 5)), (a = t), (i = 1)),
                (t = e.get(c, l)) === s
                  ? o++
                  : (o >= 5 && (r += n.N1 + (o - 5)), (s = t), (o = 1));
            }
            i >= 5 && (r += n.N1 + (i - 5)), o >= 5 && (r += n.N1 + (o - 5));
          }
          return r;
        }),
        (t.getPenaltyN2 = function (e) {
          let t = e.size,
            r = 0;
          for (let n = 0; n < t - 1; n++)
            for (let i = 0; i < t - 1; i++) {
              let t =
                e.get(n, i) +
                e.get(n, i + 1) +
                e.get(n + 1, i) +
                e.get(n + 1, i + 1);
              (4 === t || 0 === t) && r++;
            }
          return r * n.N2;
        }),
        (t.getPenaltyN3 = function (e) {
          let t = e.size,
            r = 0,
            i = 0,
            o = 0;
          for (let n = 0; n < t; n++) {
            i = o = 0;
            for (let a = 0; a < t; a++)
              (i = ((i << 1) & 2047) | e.get(n, a)),
                a >= 10 && (1488 === i || 93 === i) && r++,
                (o = ((o << 1) & 2047) | e.get(a, n)),
                a >= 10 && (1488 === o || 93 === o) && r++;
          }
          return r * n.N3;
        }),
        (t.getPenaltyN4 = function (e) {
          let t = 0,
            r = e.data.length;
          for (let n = 0; n < r; n++) t += e.data[n];
          return Math.abs(Math.ceil((100 * t) / r / 5) - 10) * n.N4;
        }),
        (t.applyMask = function (e, n) {
          let r = n.size;
          for (let i = 0; i < r; i++)
            for (let o = 0; o < r; o++)
              n.isReserved(o, i) ||
                n.xor(
                  o,
                  i,
                  (function (e, n, r) {
                    switch (e) {
                      case t.Patterns.PATTERN000:
                        return (n + r) % 2 == 0;
                      case t.Patterns.PATTERN001:
                        return n % 2 == 0;
                      case t.Patterns.PATTERN010:
                        return r % 3 == 0;
                      case t.Patterns.PATTERN011:
                        return (n + r) % 3 == 0;
                      case t.Patterns.PATTERN100:
                        return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
                      case t.Patterns.PATTERN101:
                        return ((n * r) % 2) + ((n * r) % 3) == 0;
                      case t.Patterns.PATTERN110:
                        return (((n * r) % 2) + ((n * r) % 3)) % 2 == 0;
                      case t.Patterns.PATTERN111:
                        return (((n * r) % 3) + ((n + r) % 2)) % 2 == 0;
                      default:
                        throw Error("bad maskPattern:" + e);
                    }
                  })(e, o, i)
                );
        }),
        (t.getBestMask = function (e, n) {
          let r = Object.keys(t.Patterns).length,
            i = 0,
            o = 1 / 0;
          for (let a = 0; a < r; a++) {
            n(a), t.applyMask(a, e);
            let r =
              t.getPenaltyN1(e) +
              t.getPenaltyN2(e) +
              t.getPenaltyN3(e) +
              t.getPenaltyN4(e);
            t.applyMask(a, e), r < o && ((o = r), (i = a));
          }
          return i;
        });
    },
    91940: (e, t, n) => {
      let r = n(77105),
        i = n(79393),
        o = n(41210),
        a = n(84583),
        s = n(42669),
        l = r.getBCHDigit(7973);
      function c(e, t) {
        return a.getCharCountIndicator(e, t) + 4;
      }
      (t.from = function (e, t) {
        return s.isValid(e) ? parseInt(e, 10) : t;
      }),
        (t.getCapacity = function (e, t, n) {
          if (!s.isValid(e)) throw Error("Invalid QR Code version");
          void 0 === n && (n = a.BYTE);
          let o =
            (r.getSymbolTotalCodewords(e) - i.getTotalCodewordsCount(e, t)) * 8;
          if (n === a.MIXED) return o;
          let l = o - c(n, e);
          switch (n) {
            case a.NUMERIC:
              return Math.floor((l / 10) * 3);
            case a.ALPHANUMERIC:
              return Math.floor((l / 11) * 2);
            case a.KANJI:
              return Math.floor(l / 13);
            case a.BYTE:
            default:
              return Math.floor(l / 8);
          }
        }),
        (t.getBestVersionForData = function (e, n) {
          let r,
            i = o.from(n, o.M);
          if (Array.isArray(e)) {
            if (e.length > 1) {
              for (let n = 1; n <= 40; n++)
                if (
                  (function (e, t) {
                    let n = 0;
                    return (
                      e.forEach(function (e) {
                        let r = c(e.mode, t);
                        n += r + e.getBitsLength();
                      }),
                      n
                    );
                  })(e, n) <= t.getCapacity(n, i, a.MIXED)
                )
                  return n;
              return;
            }
            if (0 === e.length) return 1;
            r = e[0];
          } else r = e;
          return (function (e, n, r) {
            for (let i = 1; i <= 40; i++)
              if (n <= t.getCapacity(i, r, e)) return i;
          })(r.mode, r.getLength(), i);
        }),
        (t.getEncodedBits = function (e) {
          if (!s.isValid(e) || e < 7) throw Error("Invalid QR Code version");
          let t = e << 12;
          for (; r.getBCHDigit(t) - l >= 0; )
            t ^= 7973 << (r.getBCHDigit(t) - l);
          return (e << 12) | t;
        });
    },
    92317: (e, t, n) => {
      "use strict";
      var r,
        i,
        o,
        a,
        s,
        l,
        c,
        d,
        u,
        f,
        h,
        p,
        g,
        m = n(80455),
        y = n(23570),
        w = n(771),
        v = n(37627);
      function b(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(a, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      }
      function E(e, t, n, r) {
        if ("a" === n && !r)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      }
      function x(e, t, n, r, i) {
        if ("m" === r) throw TypeError("Private method is not writable");
        if ("a" === r && !i)
          throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !i : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
      }
      let S = "standard:connect";
      function A(e) {
        return window.btoa(String.fromCharCode.call(null, ...e));
      }
      function T(e) {
        switch (e) {
          case "mainnet-beta":
            return "solana:mainnet";
          case "testnet":
            return "solana:testnet";
          case "devnet":
            return "solana:devnet";
          default:
            return e;
        }
      }
      class I extends m.BaseSignInMessageSignerWalletAdapter {
        constructor(e, t) {
          super(),
            r.add(this),
            (this.supportedTransactionVersions = new Set(["legacy", 0])),
            i.set(this, void 0),
            o.set(this, !1),
            a.set(
              this,
              "undefined" != typeof window &&
                window.isSecureContext &&
                "undefined" != typeof document &&
                /android/i.test(navigator.userAgent)
                ? m.WalletReadyState.Loadable
                : m.WalletReadyState.Unsupported
            ),
            s.set(this, void 0),
            l.set(this, void 0),
            c.set(this, void 0),
            d.set(this, (e) =>
              b(this, void 0, void 0, function* () {
                if (e.accounts && e.accounts.length > 0) {
                  E(this, r, "m", f).call(this);
                  let t = yield E(this, s, "f").call(this, e.accounts);
                  t !== E(this, l, "f") &&
                    (x(this, l, t, "f"),
                    x(this, c, void 0, "f"),
                    this.emit("connect", this.publicKey));
                }
              })
            ),
            x(
              this,
              s,
              (e) =>
                b(this, void 0, void 0, function* () {
                  var n;
                  let r = yield t.addressSelector.select(
                    e.map(({ publicKey: e }) => A(e))
                  );
                  return null != (n = e.find(({ publicKey: e }) => A(e) === r))
                    ? n
                    : e[0];
                }),
              "f"
            ),
            x(this, i, e, "f"),
            E(this, i, "f").features["standard:events"].on(
              "change",
              E(this, d, "f")
            ),
            (this.name = E(this, i, "f").name),
            (this.icon = E(this, i, "f").icon),
            (this.url = E(this, i, "f").url);
        }
        get publicKey() {
          var e;
          if (!E(this, c, "f") && E(this, l, "f"))
            try {
              x(this, c, new y.PublicKey(E(this, l, "f").publicKey), "f");
            } catch (e) {
              throw new m.WalletPublicKeyError(
                (e instanceof Error && (null == e ? void 0 : e.message)) ||
                  "Unknown error",
                e
              );
            }
          return null != (e = E(this, c, "f")) ? e : null;
        }
        get connected() {
          return E(this, i, "f").connected;
        }
        get connecting() {
          return E(this, o, "f");
        }
        get readyState() {
          return E(this, a, "f");
        }
        autoConnect_DO_NOT_USE_OR_YOU_WILL_BE_FIRED() {
          return b(this, void 0, void 0, function* () {
            return yield this.autoConnect();
          });
        }
        autoConnect() {
          return b(this, void 0, void 0, function* () {
            E(this, r, "m", u).call(this, !0);
          });
        }
        connect() {
          return b(this, void 0, void 0, function* () {
            E(this, r, "m", u).call(this);
          });
        }
        performAuthorization(e) {
          return b(this, void 0, void 0, function* () {
            try {
              let t = yield E(this, i, "f").cachedAuthorizationResult;
              if (t)
                return (
                  yield E(this, i, "f").features[S].connect({ silent: !0 }), t
                );
              return (
                e
                  ? yield E(this, i, "f").features[w.SolanaSignIn].signIn(e)
                  : yield E(this, i, "f").features[S].connect(),
                yield yield E(this, i, "f").cachedAuthorizationResult
              );
            } catch (e) {
              throw new m.WalletConnectionError(
                (e instanceof Error && e.message) || "Unknown error",
                e
              );
            }
          });
        }
        disconnect() {
          return b(this, void 0, void 0, function* () {
            return yield E(this, r, "m", g).call(this, () =>
              b(this, void 0, void 0, function* () {
                x(this, o, !1, "f"),
                  x(this, c, void 0, "f"),
                  x(this, l, void 0, "f"),
                  yield E(this, i, "f").features[
                    "standard:disconnect"
                  ].disconnect(),
                  this.emit("disconnect");
              })
            );
          });
        }
        signIn(e) {
          return b(this, void 0, void 0, function* () {
            return E(this, r, "m", g).call(this, () =>
              b(this, void 0, void 0, function* () {
                var t;
                if (
                  E(this, a, "f") !== m.WalletReadyState.Installed &&
                  E(this, a, "f") !== m.WalletReadyState.Loadable
                )
                  throw new m.WalletNotReadyError();
                x(this, o, !0, "f");
                try {
                  let n = yield E(this, i, "f").features[w.SolanaSignIn].signIn(
                    Object.assign(Object.assign({}, e), {
                      domain:
                        null != (t = null == e ? void 0 : e.domain)
                          ? t
                          : window.location.host,
                    })
                  );
                  if (n.length > 0) return n[0];
                  throw Error(
                    "Sign in failed, no sign in result returned by wallet"
                  );
                } catch (e) {
                  throw new m.WalletConnectionError(
                    (e instanceof Error && e.message) || "Unknown error",
                    e
                  );
                } finally {
                  x(this, o, !1, "f");
                }
              })
            );
          });
        }
        signMessage(e) {
          return b(this, void 0, void 0, function* () {
            return yield E(this, r, "m", g).call(this, () =>
              b(this, void 0, void 0, function* () {
                let t = E(this, r, "m", h).call(this);
                try {
                  return (yield E(this, i, "f").features[
                    w.SolanaSignMessage
                  ].signMessage({ account: t, message: e }))[0].signature;
                } catch (e) {
                  throw new m.WalletSignMessageError(
                    null == e ? void 0 : e.message,
                    e
                  );
                }
              })
            );
          });
        }
        sendTransaction(e, t, n) {
          return b(this, void 0, void 0, function* () {
            return yield E(this, r, "m", g).call(this, () =>
              b(this, void 0, void 0, function* () {
                let o = E(this, r, "m", h).call(this);
                try {
                  if (
                    w.SolanaSignAndSendTransaction in E(this, i, "f").features
                  ) {
                    let t = T(E(this, i, "f").currentAuthorization.chain),
                      [r] = (yield E(this, i, "f").features[
                        w.SolanaSignAndSendTransaction
                      ].signAndSendTransaction({
                        account: o,
                        transaction: e.serialize(),
                        chain: t,
                        options: n
                          ? {
                              skipPreflight: n.skipPreflight,
                              maxRetries: n.maxRetries,
                            }
                          : void 0,
                      })).map((e) => A(e.signature));
                    return r;
                  }
                  {
                    let [i] = yield E(this, r, "m", p).call(this, [e]);
                    if ("version" in i) return yield t.sendTransaction(i);
                    {
                      let e = i.serialize();
                      return yield t.sendRawTransaction(
                        e,
                        Object.assign(Object.assign({}, n), {
                          preflightCommitment: (function () {
                            let e, r;
                            switch (t.commitment) {
                              case "confirmed":
                              case "finalized":
                              case "processed":
                                e = t.commitment;
                                break;
                              default:
                                e = "finalized";
                            }
                            switch (
                              null == n ? void 0 : n.preflightCommitment
                            ) {
                              case "confirmed":
                              case "finalized":
                              case "processed":
                                r = n.preflightCommitment;
                                break;
                              case void 0:
                                r = e;
                                break;
                              default:
                                r = "finalized";
                            }
                            let i =
                                "finalized" === r ? 2 : +("confirmed" === r),
                              o = "finalized" === e ? 2 : +("confirmed" === e);
                            return i < o ? r : e;
                          })(),
                        })
                      );
                    }
                  }
                } catch (e) {
                  throw new m.WalletSendTransactionError(
                    null == e ? void 0 : e.message,
                    e
                  );
                }
              })
            );
          });
        }
        signTransaction(e) {
          return b(this, void 0, void 0, function* () {
            return yield E(this, r, "m", g).call(this, () =>
              b(this, void 0, void 0, function* () {
                let [t] = yield E(this, r, "m", p).call(this, [e]);
                return t;
              })
            );
          });
        }
        signAllTransactions(e) {
          return b(this, void 0, void 0, function* () {
            return yield E(this, r, "m", g).call(this, () =>
              b(this, void 0, void 0, function* () {
                return yield E(this, r, "m", p).call(this, e);
              })
            );
          });
        }
      }
      (i = new WeakMap()),
        (o = new WeakMap()),
        (a = new WeakMap()),
        (s = new WeakMap()),
        (l = new WeakMap()),
        (c = new WeakMap()),
        (d = new WeakMap()),
        (r = new WeakSet()),
        (u = function (e = !1) {
          return b(this, void 0, void 0, function* () {
            if (!this.connecting && !this.connected)
              return yield E(this, r, "m", g).call(this, () =>
                b(this, void 0, void 0, function* () {
                  if (
                    E(this, a, "f") !== m.WalletReadyState.Installed &&
                    E(this, a, "f") !== m.WalletReadyState.Loadable
                  )
                    throw new m.WalletNotReadyError();
                  x(this, o, !0, "f");
                  try {
                    yield E(this, i, "f").features[S].connect({ silent: e });
                  } catch (e) {
                    throw new m.WalletConnectionError(
                      (e instanceof Error && e.message) || "Unknown error",
                      e
                    );
                  } finally {
                    x(this, o, !1, "f");
                  }
                })
              );
          });
        }),
        (f = function () {
          E(this, a, "f") !== m.WalletReadyState.Installed &&
            this.emit(
              "readyStateChange",
              x(this, a, m.WalletReadyState.Installed, "f")
            );
        }),
        (h = function () {
          if (!E(this, i, "f").isAuthorized || !E(this, l, "f"))
            throw new m.WalletNotConnectedError();
          return E(this, l, "f");
        }),
        (p = function (e) {
          return b(this, void 0, void 0, function* () {
            let t = E(this, r, "m", h).call(this);
            try {
              if (w.SolanaSignTransaction in E(this, i, "f").features)
                return E(this, i, "f")
                  .features[w.SolanaSignTransaction].signTransaction(
                    ...e.map((e) => ({
                      account: t,
                      transaction: e.serialize(),
                    }))
                  )
                  .then((e) =>
                    e.map((e) => {
                      let t = e.signedTransaction,
                        n = t[0],
                        r = y.VersionedMessage.deserializeMessageVersion(
                          t.slice(64 * n + 1, t.length)
                        );
                      return "legacy" === r
                        ? y.Transaction.from(t)
                        : y.VersionedTransaction.deserialize(t);
                    })
                  );
              throw Error(
                "Connected wallet does not support signing transactions"
              );
            } catch (e) {
              throw new m.WalletSignTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          });
        }),
        (g = function (e) {
          return b(this, void 0, void 0, function* () {
            try {
              return yield e();
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          });
        });
      class _ extends I {
        constructor(e) {
          var t;
          let n = T(null != (t = e.chain) ? t : e.cluster);
          super(
            new v.LocalSolanaMobileWalletAdapterWallet({
              appIdentity: e.appIdentity,
              authorizationCache: {
                set: e.authorizationResultCache.set,
                get: () =>
                  b(this, void 0, void 0, function* () {
                    let t = yield e.authorizationResultCache.get();
                    return t && "chain" in t
                      ? t
                      : t
                      ? Object.assign(Object.assign({}, t), { chain: n })
                      : void 0;
                  }),
                clear: e.authorizationResultCache.clear,
              },
              chains: [n],
              chainSelector: v.createDefaultChainSelector(),
              onWalletNotFound: () =>
                b(this, void 0, void 0, function* () {
                  e.onWalletNotFound(this);
                }),
            }),
            { addressSelector: e.addressSelector, chain: n }
          );
        }
      }
      class O extends _ {}
      function B(e) {
        return b(this, void 0, void 0, function* () {
          return v.defaultErrorModalWalletNotFoundHandler();
        });
      }
      (t.Ne = O),
        (t.fG = "Mobile Wallet Adapter"),
        (t.RP = function () {
          return {
            select(e) {
              return b(this, void 0, void 0, function* () {
                return e[0];
              });
            },
          };
        }),
        (t.u = function () {
          return v.createDefaultAuthorizationCache();
        }),
        (t.O0 = function () {
          return B;
        });
    },
    93788: (e, t, n) => {
      e.exports = n(7719)(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      );
    },
    95058: (e, t) => {
      "use strict";
      var n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletAdapterNetwork = void 0),
        (function (e) {
          (e.Mainnet = "mainnet-beta"),
            (e.Testnet = "testnet"),
            (e.Devnet = "devnet");
        })(n || (t.WalletAdapterNetwork = n = {}));
    },
    96329: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => p });
      var r = n(12115),
        i = n(40840),
        o = n(17399),
        a = n(11392),
        s = n(47650);
      let l = ({ id: e, children: t, expanded: n = !1 }) => {
        let i = (0, r.useRef)(null),
          o = (0, r.useRef)(!0),
          a = () => {
            let e = i.current;
            e &&
              requestAnimationFrame(() => {
                e.style.height = e.scrollHeight + "px";
              });
          },
          s = () => {
            let e = i.current;
            e &&
              requestAnimationFrame(() => {
                (e.style.height = e.offsetHeight + "px"),
                  (e.style.overflow = "hidden"),
                  requestAnimationFrame(() => {
                    e.style.height = "0";
                  });
              });
          };
        return (
          (0, r.useLayoutEffect)(() => {
            n ? a() : s();
          }, [n]),
          (0, r.useLayoutEffect)(() => {
            let e = i.current;
            if (e)
              return (
                o.current && (t(), (o.current = !1)),
                e.addEventListener("transitionend", r),
                () => e.removeEventListener("transitionend", r)
              );
            function t() {
              e &&
                ((e.style.overflow = n ? "initial" : "hidden"),
                n && (e.style.height = "auto"));
            }
            function r(n) {
              e && n.target === e && "height" === n.propertyName && t();
            }
          }, [n]),
          r.createElement(
            "div",
            {
              className: "wallet-adapter-collapse",
              id: e,
              ref: i,
              role: "region",
              style: {
                height: 0,
                transition: o.current ? void 0 : "height 250ms ease-out",
              },
            },
            t
          )
        );
      };
      var c = n(57615),
        d = n(53347);
      let u = ({ handleClick: e, tabIndex: t, wallet: n }) =>
          r.createElement(
            "li",
            null,
            r.createElement(
              c.$,
              {
                onClick: e,
                startIcon: r.createElement(d.l, { wallet: n }),
                tabIndex: t,
              },
              n.adapter.name,
              n.readyState === o.Ok.Installed &&
                r.createElement("span", null, "Detected")
            )
          ),
        f = () =>
          r.createElement(
            "svg",
            {
              width: "97",
              height: "96",
              viewBox: "0 0 97 96",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r.createElement("circle", {
              cx: "48.5",
              cy: "48",
              r: "48",
              fill: "url(#paint0_linear_880_5115)",
              fillOpacity: "0.1",
            }),
            r.createElement("circle", {
              cx: "48.5",
              cy: "48",
              r: "47",
              stroke: "url(#paint1_linear_880_5115)",
              strokeOpacity: "0.4",
              strokeWidth: "2",
            }),
            r.createElement(
              "g",
              { clipPath: "url(#clip0_880_5115)" },
              r.createElement("path", {
                d: "M65.5769 28.1523H31.4231C27.6057 28.1523 24.5 31.258 24.5 35.0754V60.9215C24.5 64.7389 27.6057 67.8446 31.4231 67.8446H65.5769C69.3943 67.8446 72.5 64.7389 72.5 60.9215V35.0754C72.5 31.258 69.3943 28.1523 65.5769 28.1523ZM69.7308 52.1523H59.5769C57.2865 52.1523 55.4231 50.289 55.4231 47.9985C55.4231 45.708 57.2864 43.8446 59.5769 43.8446H69.7308V52.1523ZM69.7308 41.0754H59.5769C55.7595 41.0754 52.6539 44.1811 52.6539 47.9985C52.6539 51.8159 55.7595 54.9215 59.5769 54.9215H69.7308V60.9215C69.7308 63.2119 67.8674 65.0754 65.5769 65.0754H31.4231C29.1327 65.0754 27.2692 63.212 27.2692 60.9215V35.0754C27.2692 32.785 29.1326 30.9215 31.4231 30.9215H65.5769C67.8673 30.9215 69.7308 32.7849 69.7308 35.0754V41.0754Z",
                fill: "url(#paint2_linear_880_5115)",
              }),
              r.createElement("path", {
                d: "M61.4231 46.6172H59.577C58.8123 46.6172 58.1924 47.2371 58.1924 48.0018C58.1924 48.7665 58.8123 49.3863 59.577 49.3863H61.4231C62.1878 49.3863 62.8077 48.7664 62.8077 48.0018C62.8077 47.2371 62.1878 46.6172 61.4231 46.6172Z",
                fill: "url(#paint3_linear_880_5115)",
              })
            ),
            r.createElement(
              "defs",
              null,
              r.createElement(
                "linearGradient",
                {
                  id: "paint0_linear_880_5115",
                  x1: "3.41664",
                  y1: "98.0933",
                  x2: "103.05",
                  y2: "8.42498",
                  gradientUnits: "userSpaceOnUse",
                },
                r.createElement("stop", { stopColor: "#9945FF" }),
                r.createElement("stop", {
                  offset: "0.14",
                  stopColor: "#8A53F4",
                }),
                r.createElement("stop", {
                  offset: "0.42",
                  stopColor: "#6377D6",
                }),
                r.createElement("stop", {
                  offset: "0.79",
                  stopColor: "#24B0A7",
                }),
                r.createElement("stop", {
                  offset: "0.99",
                  stopColor: "#00D18C",
                }),
                r.createElement("stop", { offset: "1", stopColor: "#00D18C" })
              ),
              r.createElement(
                "linearGradient",
                {
                  id: "paint1_linear_880_5115",
                  x1: "3.41664",
                  y1: "98.0933",
                  x2: "103.05",
                  y2: "8.42498",
                  gradientUnits: "userSpaceOnUse",
                },
                r.createElement("stop", { stopColor: "#9945FF" }),
                r.createElement("stop", {
                  offset: "0.14",
                  stopColor: "#8A53F4",
                }),
                r.createElement("stop", {
                  offset: "0.42",
                  stopColor: "#6377D6",
                }),
                r.createElement("stop", {
                  offset: "0.79",
                  stopColor: "#24B0A7",
                }),
                r.createElement("stop", {
                  offset: "0.99",
                  stopColor: "#00D18C",
                }),
                r.createElement("stop", { offset: "1", stopColor: "#00D18C" })
              ),
              r.createElement(
                "linearGradient",
                {
                  id: "paint2_linear_880_5115",
                  x1: "25.9583",
                  y1: "68.7101",
                  x2: "67.2337",
                  y2: "23.7879",
                  gradientUnits: "userSpaceOnUse",
                },
                r.createElement("stop", { stopColor: "#9945FF" }),
                r.createElement("stop", {
                  offset: "0.14",
                  stopColor: "#8A53F4",
                }),
                r.createElement("stop", {
                  offset: "0.42",
                  stopColor: "#6377D6",
                }),
                r.createElement("stop", {
                  offset: "0.79",
                  stopColor: "#24B0A7",
                }),
                r.createElement("stop", {
                  offset: "0.99",
                  stopColor: "#00D18C",
                }),
                r.createElement("stop", { offset: "1", stopColor: "#00D18C" })
              ),
              r.createElement(
                "linearGradient",
                {
                  id: "paint3_linear_880_5115",
                  x1: "58.3326",
                  y1: "49.4467",
                  x2: "61.0002",
                  y2: "45.4453",
                  gradientUnits: "userSpaceOnUse",
                },
                r.createElement("stop", { stopColor: "#9945FF" }),
                r.createElement("stop", {
                  offset: "0.14",
                  stopColor: "#8A53F4",
                }),
                r.createElement("stop", {
                  offset: "0.42",
                  stopColor: "#6377D6",
                }),
                r.createElement("stop", {
                  offset: "0.79",
                  stopColor: "#24B0A7",
                }),
                r.createElement("stop", {
                  offset: "0.99",
                  stopColor: "#00D18C",
                }),
                r.createElement("stop", { offset: "1", stopColor: "#00D18C" })
              ),
              r.createElement(
                "clipPath",
                { id: "clip0_880_5115" },
                r.createElement("rect", {
                  width: "48",
                  height: "48",
                  fill: "white",
                  transform: "translate(24.5 24)",
                })
              )
            )
          ),
        h = ({ className: e = "", container: t = "body" }) => {
          let n = (0, r.useRef)(null),
            { wallets: c, select: d } = (0, a.v)(),
            { setVisible: h } = (0, i.o)(),
            [p, g] = (0, r.useState)(!1),
            [m, y] = (0, r.useState)(!1),
            [w, v] = (0, r.useState)(null),
            [b, E] = (0, r.useMemo)(() => {
              let e = [],
                t = [];
              for (let n of c)
                n.readyState === o.Ok.Installed ? e.push(n) : t.push(n);
              return e.length ? [e, t] : [t, []];
            }, [c]),
            x = (0, r.useCallback)(() => {
              y(!1), setTimeout(() => h(!1), 150);
            }, [h]),
            S = (0, r.useCallback)(
              (e) => {
                e.preventDefault(), x();
              },
              [x]
            ),
            A = (0, r.useCallback)(
              (e, t) => {
                d(t), S(e);
              },
              [d, S]
            ),
            T = (0, r.useCallback)(() => g(!p), [p]),
            I = (0, r.useCallback)(
              (e) => {
                let t = n.current;
                if (!t) return;
                let r = t.querySelectorAll("button"),
                  i = r[0],
                  o = r[r.length - 1];
                e.shiftKey
                  ? document.activeElement === i &&
                    (o.focus(), e.preventDefault())
                  : document.activeElement === o &&
                    (i.focus(), e.preventDefault());
              },
              [n]
            );
          return (
            (0, r.useLayoutEffect)(() => {
              let e = (e) => {
                  "Escape" === e.key ? x() : "Tab" === e.key && I(e);
                },
                { overflow: t } = window.getComputedStyle(document.body);
              return (
                setTimeout(() => y(!0), 0),
                (document.body.style.overflow = "hidden"),
                window.addEventListener("keydown", e, !1),
                () => {
                  (document.body.style.overflow = t),
                    window.removeEventListener("keydown", e, !1);
                }
              );
            }, [x, I]),
            (0, r.useLayoutEffect)(() => v(document.querySelector(t)), [t]),
            w &&
              (0, s.createPortal)(
                r.createElement(
                  "div",
                  {
                    "aria-labelledby": "wallet-adapter-modal-title",
                    "aria-modal": "true",
                    className: `wallet-adapter-modal ${
                      m && "wallet-adapter-modal-fade-in"
                    } ${e}`,
                    ref: n,
                    role: "dialog",
                  },
                  r.createElement(
                    "div",
                    { className: "wallet-adapter-modal-container" },
                    r.createElement(
                      "div",
                      { className: "wallet-adapter-modal-wrapper" },
                      r.createElement(
                        "button",
                        {
                          onClick: S,
                          className: "wallet-adapter-modal-button-close",
                        },
                        r.createElement(
                          "svg",
                          { width: "14", height: "14" },
                          r.createElement("path", {
                            d: "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z",
                          })
                        )
                      ),
                      b.length
                        ? r.createElement(
                            r.Fragment,
                            null,
                            r.createElement(
                              "h1",
                              { className: "wallet-adapter-modal-title" },
                              "Connect a wallet on Solana to continue"
                            ),
                            r.createElement(
                              "ul",
                              { className: "wallet-adapter-modal-list" },
                              b.map((e) =>
                                r.createElement(u, {
                                  key: e.adapter.name,
                                  handleClick: (t) => A(t, e.adapter.name),
                                  wallet: e,
                                })
                              ),
                              E.length
                                ? r.createElement(
                                    l,
                                    {
                                      expanded: p,
                                      id: "wallet-adapter-modal-collapse",
                                    },
                                    E.map((e) =>
                                      r.createElement(u, {
                                        key: e.adapter.name,
                                        handleClick: (t) =>
                                          A(t, e.adapter.name),
                                        tabIndex: p ? 0 : -1,
                                        wallet: e,
                                      })
                                    )
                                  )
                                : null
                            ),
                            E.length
                              ? r.createElement(
                                  "button",
                                  {
                                    className: "wallet-adapter-modal-list-more",
                                    onClick: T,
                                    tabIndex: 0,
                                  },
                                  r.createElement(
                                    "span",
                                    null,
                                    p ? "Less " : "More ",
                                    "options"
                                  ),
                                  r.createElement(
                                    "svg",
                                    {
                                      width: "13",
                                      height: "7",
                                      viewBox: "0 0 13 7",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      className: `${
                                        p
                                          ? "wallet-adapter-modal-list-more-icon-rotate"
                                          : ""
                                      }`,
                                    },
                                    r.createElement("path", {
                                      d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z",
                                    })
                                  )
                                )
                              : null
                          )
                        : r.createElement(
                            r.Fragment,
                            null,
                            r.createElement(
                              "h1",
                              { className: "wallet-adapter-modal-title" },
                              "You'll need a wallet on Solana to continue"
                            ),
                            r.createElement(
                              "div",
                              { className: "wallet-adapter-modal-middle" },
                              r.createElement(f, null)
                            ),
                            E.length
                              ? r.createElement(
                                  r.Fragment,
                                  null,
                                  r.createElement(
                                    "button",
                                    {
                                      className:
                                        "wallet-adapter-modal-list-more",
                                      onClick: T,
                                      tabIndex: 0,
                                    },
                                    r.createElement(
                                      "span",
                                      null,
                                      p
                                        ? "Hide "
                                        : "Already have a wallet? View ",
                                      "options"
                                    ),
                                    r.createElement(
                                      "svg",
                                      {
                                        width: "13",
                                        height: "7",
                                        viewBox: "0 0 13 7",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: `${
                                          p
                                            ? "wallet-adapter-modal-list-more-icon-rotate"
                                            : ""
                                        }`,
                                      },
                                      r.createElement("path", {
                                        d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z",
                                      })
                                    )
                                  ),
                                  r.createElement(
                                    l,
                                    {
                                      expanded: p,
                                      id: "wallet-adapter-modal-collapse",
                                    },
                                    r.createElement(
                                      "ul",
                                      {
                                        className: "wallet-adapter-modal-list",
                                      },
                                      E.map((e) =>
                                        r.createElement(u, {
                                          key: e.adapter.name,
                                          handleClick: (t) =>
                                            A(t, e.adapter.name),
                                          tabIndex: p ? 0 : -1,
                                          wallet: e,
                                        })
                                      )
                                    )
                                  )
                                )
                              : null
                          )
                    )
                  ),
                  r.createElement("div", {
                    className: "wallet-adapter-modal-overlay",
                    onMouseDown: S,
                  })
                ),
                w
              )
          );
        },
        p = ({ children: e, ...t }) => {
          let [n, o] = (0, r.useState)(!1);
          return r.createElement(
            i.w.Provider,
            { value: { visible: n, setVisible: o } },
            e,
            n && r.createElement(h, { ...t })
          );
        };
    },
    98082: (e, t, n) => {
      let r = n(84583),
        i = n(77105);
      function o(e) {
        (this.mode = r.KANJI), (this.data = e);
      }
      (o.getBitsLength = function (e) {
        return 13 * e;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          let t;
          for (t = 0; t < this.data.length; t++) {
            let n = i.toSJIS(this.data[t]);
            if (n >= 33088 && n <= 40956) n -= 33088;
            else if (n >= 57408 && n <= 60351) n -= 49472;
            else
              throw Error(
                "Invalid SJIS character: " +
                  this.data[t] +
                  "\nMake sure your charset is UTF-8"
              );
            (n = ((n >>> 8) & 255) * 192 + (255 & n)), e.put(n, 13);
          }
        }),
        (e.exports = o);
    },
    98991: (e, t, n) => {
      "use strict";
      let r, i, o;
      n.d(t, { r: () => eu });
      var a,
        s,
        l,
        c,
        d,
        u,
        f,
        h,
        p,
        g,
        m,
        y,
        w,
        v,
        b,
        E,
        x,
        S,
        A,
        T,
        I = n(92317);
      let _ = "solana:signAndSendTransaction",
        O = "solana:signTransaction",
        B = "standard:connect",
        N = "standard:events",
        C = function (e) {
          return (
            B in e.features &&
            N in e.features &&
            (_ in e.features || O in e.features)
          );
        };
      var M = n(17399),
        L = n(12131),
        R = n(6068);
      let k = "solana:signMessage",
        W = "solana:signIn",
        P = "solana:mainnet",
        U = "solana:devnet",
        D = "solana:testnet",
        j = "solana:localnet";
      function z(e) {
        switch (e) {
          case "processed":
          case "confirmed":
          case "finalized":
          case void 0:
            return e;
          case "recent":
            return "processed";
          case "single":
          case "singleGossip":
            return "confirmed";
          case "max":
          case "root":
            return "finalized";
          default:
            return;
        }
      }
      var H = n(23570);
      let F = "standard:disconnect";
      new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap();
      var q = n(42552),
        V = function (e, t, n, r) {
          if ("a" === n && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        },
        K = function (e, t, n, r, i) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
        };
      class G extends M.Ce {
        get name() {
          return V(this, h, "f").name;
        }
        get url() {
          return "https://github.com/solana-labs/wallet-standard";
        }
        get icon() {
          return V(this, h, "f").icon;
        }
        get readyState() {
          return V(this, p, "f");
        }
        get publicKey() {
          return V(this, l, "f");
        }
        get connecting() {
          return V(this, c, "f");
        }
        get supportedTransactionVersions() {
          return V(this, f, "f");
        }
        get wallet() {
          return V(this, h, "f");
        }
        get standard() {
          return !0;
        }
        constructor({ wallet: e }) {
          super(),
            a.add(this),
            s.set(this, void 0),
            l.set(this, void 0),
            c.set(this, void 0),
            d.set(this, void 0),
            u.set(this, void 0),
            f.set(this, void 0),
            h.set(this, void 0),
            p.set(
              this,
              "undefined" == typeof window || "undefined" == typeof document
                ? M.Ok.Unsupported
                : M.Ok.Installed
            ),
            v.set(this, (e) => {
              if ("accounts" in e) {
                let e = V(this, h, "f").accounts[0];
                V(this, s, "f") &&
                  !V(this, d, "f") &&
                  e !== V(this, s, "f") &&
                  (e
                    ? V(this, a, "m", m).call(this, e)
                    : (this.emit("error", new L.PQ()),
                      V(this, a, "m", y).call(this)));
              }
              "features" in e && V(this, a, "m", w).call(this);
            }),
            K(this, h, e, "f"),
            K(this, s, null, "f"),
            K(this, l, null, "f"),
            K(this, c, !1, "f"),
            K(this, d, !1, "f"),
            K(
              this,
              u,
              V(this, h, "f").features[N].on("change", V(this, v, "f")),
              "f"
            ),
            V(this, a, "m", w).call(this);
        }
        destroy() {
          K(this, s, null, "f"),
            K(this, l, null, "f"),
            K(this, c, !1, "f"),
            K(this, d, !1, "f");
          let e = V(this, u, "f");
          e && (K(this, u, null, "f"), e());
        }
        async autoConnect() {
          return V(this, a, "m", g).call(this, { silent: !0 });
        }
        async connect() {
          return V(this, a, "m", g).call(this);
        }
        async disconnect() {
          if (F in V(this, h, "f").features)
            try {
              K(this, d, !0, "f"),
                await V(this, h, "f").features[F].disconnect();
            } catch (e) {
              this.emit("error", new L.Y8(e?.message, e));
            } finally {
              K(this, d, !1, "f");
            }
          V(this, a, "m", y).call(this);
        }
        async sendTransaction(e, t, n = {}) {
          try {
            var r;
            let i,
              o = V(this, s, "f");
            if (!o) throw new L.kW();
            if (_ in V(this, h, "f").features)
              if (o.features.includes(_)) i = _;
              else if (O in V(this, h, "f").features && o.features.includes(O))
                i = O;
              else throw new L.fk();
            else if (O in V(this, h, "f").features) {
              if (!o.features.includes(O)) throw new L.fk();
              i = O;
            } else throw new L.Ez();
            let a = (r = t.rpcEndpoint).includes(
              "https://api.mainnet-beta.solana.com"
            )
              ? P
              : /\bdevnet\b/i.test(r)
              ? U
              : /\btestnet\b/i.test(r)
              ? D
              : /\blocalhost\b/i.test(r) || /\b127\.0\.0\.1\b/.test(r)
              ? j
              : P;
            if (!o.chains.includes(a)) throw new L.UF();
            try {
              let r,
                { signers: s, ...l } = n;
              if (
                ((0, R.Y)(e)
                  ? (s?.length && e.sign(s), (r = e.serialize()))
                  : ((e = await this.prepareTransaction(e, t, l)),
                    s?.length && e.partialSign(...s),
                    (r = new Uint8Array(
                      e.serialize({
                        requireAllSignatures: !1,
                        verifySignatures: !1,
                      })
                    ))),
                i === _)
              ) {
                let [e] = await V(this, h, "f").features[
                  _
                ].signAndSendTransaction({
                  account: o,
                  chain: a,
                  transaction: r,
                  options: {
                    preflightCommitment: z(
                      l.preflightCommitment || t.commitment
                    ),
                    skipPreflight: l.skipPreflight,
                    maxRetries: l.maxRetries,
                    minContextSlot: l.minContextSlot,
                  },
                });
                return q.A.encode(e.signature);
              }
              {
                let [e] = await V(this, h, "f").features[O].signTransaction({
                  account: o,
                  chain: a,
                  transaction: r,
                  options: {
                    preflightCommitment: z(
                      l.preflightCommitment || t.commitment
                    ),
                    minContextSlot: l.minContextSlot,
                  },
                });
                return await t.sendRawTransaction(e.signedTransaction, {
                  ...l,
                  preflightCommitment: z(l.preflightCommitment || t.commitment),
                });
              }
            } catch (e) {
              if (e instanceof L.m7) throw e;
              throw new L.UF(e?.message, e);
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
      }
      (s = new WeakMap()),
        (l = new WeakMap()),
        (c = new WeakMap()),
        (d = new WeakMap()),
        (u = new WeakMap()),
        (f = new WeakMap()),
        (h = new WeakMap()),
        (p = new WeakMap()),
        (v = new WeakMap()),
        (a = new WeakSet()),
        (g = async function (e) {
          try {
            if (this.connected || this.connecting) return;
            if (V(this, p, "f") !== M.Ok.Installed) throw new L.AE();
            if ((K(this, c, !0, "f"), !V(this, h, "f").accounts.length))
              try {
                await V(this, h, "f").features[B].connect(e);
              } catch (e) {
                throw new L.Y6(e?.message, e);
              }
            let t = V(this, h, "f").accounts[0];
            if (!t) throw new L.fk();
            V(this, a, "m", m).call(this, t);
          } catch (e) {
            throw (this.emit("error", e), e);
          } finally {
            K(this, c, !1, "f");
          }
        }),
        (m = function (e) {
          let t;
          try {
            t = new H.PublicKey(e.address);
          } catch (e) {
            throw new L.Kd(e?.message, e);
          }
          K(this, s, e, "f"),
            K(this, l, t, "f"),
            V(this, a, "m", w).call(this),
            this.emit("connect", t);
        }),
        (y = function () {
          K(this, s, null, "f"),
            K(this, l, null, "f"),
            V(this, a, "m", w).call(this),
            this.emit("disconnect");
        }),
        (w = function () {
          let e =
            _ in V(this, h, "f").features
              ? V(this, h, "f").features[_].supportedTransactionVersions
              : V(this, h, "f").features[O].supportedTransactionVersions;
          K(
            this,
            f,
            !(function (e, t) {
              if (e === t) return !0;
              let n = e.length;
              if (n !== t.length) return !1;
              for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
              return !0;
            })(e, ["legacy"])
              ? new Set(e)
              : null,
            "f"
          ),
            O in V(this, h, "f").features &&
            V(this, s, "f")?.features.includes(O)
              ? ((this.signTransaction = V(this, a, "m", b)),
                (this.signAllTransactions = V(this, a, "m", E)))
              : (delete this.signTransaction, delete this.signAllTransactions),
            k in V(this, h, "f").features &&
            V(this, s, "f")?.features.includes(k)
              ? (this.signMessage = V(this, a, "m", x))
              : delete this.signMessage,
            W in V(this, h, "f").features
              ? (this.signIn = V(this, a, "m", S))
              : delete this.signIn;
        }),
        (b = async function (e) {
          try {
            let t = V(this, s, "f");
            if (!t) throw new L.kW();
            if (!(O in V(this, h, "f").features)) throw new L.Ez();
            if (!t.features.includes(O)) throw new L.fk();
            try {
              let n = (
                await V(this, h, "f").features[O].signTransaction({
                  account: t,
                  transaction: (0, R.Y)(e)
                    ? e.serialize()
                    : new Uint8Array(
                        e.serialize({
                          requireAllSignatures: !1,
                          verifySignatures: !1,
                        })
                      ),
                })
              )[0].signedTransaction;
              return (0, R.Y)(e)
                ? H.VersionedTransaction.deserialize(n)
                : H.Transaction.from(n);
            } catch (e) {
              if (e instanceof L.m7) throw e;
              throw new L.z4(e?.message, e);
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }),
        (E = async function (e) {
          try {
            let t = V(this, s, "f");
            if (!t) throw new L.kW();
            if (!(O in V(this, h, "f").features)) throw new L.Ez();
            if (!t.features.includes(O)) throw new L.fk();
            try {
              let n = await V(this, h, "f").features[O].signTransaction(
                ...e.map((e) => ({
                  account: t,
                  transaction: (0, R.Y)(e)
                    ? e.serialize()
                    : new Uint8Array(
                        e.serialize({
                          requireAllSignatures: !1,
                          verifySignatures: !1,
                        })
                      ),
                }))
              );
              return e.map((e, t) => {
                let r = n[t].signedTransaction;
                return (0, R.Y)(e)
                  ? H.VersionedTransaction.deserialize(r)
                  : H.Transaction.from(r);
              });
            } catch (e) {
              throw new L.z4(e?.message, e);
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }),
        (x = async function (e) {
          try {
            let t = V(this, s, "f");
            if (!t) throw new L.kW();
            if (!(k in V(this, h, "f").features)) throw new L.Ez();
            if (!t.features.includes(k)) throw new L.fk();
            try {
              return (
                await V(this, h, "f").features[k].signMessage({
                  account: t,
                  message: e,
                })
              )[0].signature;
            } catch (e) {
              throw new L.K3(e?.message, e);
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }),
        (S = async function (e = {}) {
          try {
            let t;
            if (!(W in V(this, h, "f").features)) throw new L.Ez();
            try {
              [t] = await V(this, h, "f").features[W].signIn(e);
            } catch (e) {
              throw new L.o7(e?.message, e);
            }
            if (!t) throw new L.o7();
            return V(this, a, "m", m).call(this, t.account), t;
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        });
      var Z = function (e, t, n, r) {
          if ("a" === n && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        },
        $ = function (e, t, n, r, i) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
        };
      let Y = new Set(),
        Q = {};
      function J(...e) {
        return (e = e.filter((e) => !Y.has(e))).length
          ? (e.forEach((e) => {
              (r = void 0), Y.add(e);
            }),
            Q.register?.forEach((t) => et(() => t(...e))),
            function () {
              e.forEach((e) => {
                (r = void 0), Y.delete(e);
              }),
                Q.unregister?.forEach((t) => et(() => t(...e)));
            })
          : () => {};
      }
      function X() {
        return r || (r = [...Y]), r;
      }
      function ee(e, t) {
        return (
          Q[e]?.push(t) || (Q[e] = [t]),
          function () {
            Q[e] = Q[e]?.filter((e) => t !== e);
          }
        );
      }
      function et(e) {
        try {
          e();
        } catch (e) {
          console.error(e);
        }
      }
      class en extends Event {
        get detail() {
          return Z(this, A, "f");
        }
        get type() {
          return "wallet-standard:app-ready";
        }
        constructor(e) {
          super("wallet-standard:app-ready", {
            bubbles: !1,
            cancelable: !1,
            composed: !1,
          }),
            A.set(this, void 0),
            $(this, A, e, "f");
        }
        preventDefault() {
          throw Error("preventDefault cannot be called");
        }
        stopImmediatePropagation() {
          throw Error("stopImmediatePropagation cannot be called");
        }
        stopPropagation() {
          throw Error("stopPropagation cannot be called");
        }
      }
      A = new WeakMap();
      var er = n(12115);
      function ei(e) {
        let t = (0, er.useRef)(void 0);
        return (
          void 0 === t.current && (t.current = { value: e() }), t.current.value
        );
      }
      function eo(e) {
        return e.filter(C).map((e) => new G({ wallet: e }));
      }
      !(function (e) {
        (e[(e.DESKTOP_WEB = 0)] = "DESKTOP_WEB"),
          (e[(e.MOBILE_WEB = 1)] = "MOBILE_WEB");
      })(T || (T = {}));
      var ea = n(12361);
      class es extends L.m7 {
        constructor() {
          super(...arguments), (this.name = "WalletNotSelectedError");
        }
      }
      var el = n(11392);
      function ec({
        children: e,
        wallets: t,
        adapter: n,
        isUnloadingRef: r,
        onAutoConnectRequest: i,
        onConnectError: o,
        onError: a,
        onSelectWallet: s,
      }) {
        let l = (0, er.useRef)(!1),
          [c, d] = (0, er.useState)(!1),
          u = (0, er.useRef)(!1),
          [f, h] = (0, er.useState)(!1),
          [p, g] = (0, er.useState)(() => n?.publicKey ?? null),
          [m, y] = (0, er.useState)(() => n?.connected ?? !1),
          w = (0, er.useRef)(a);
        (0, er.useEffect)(
          () => (
            (w.current = a),
            () => {
              w.current = void 0;
            }
          ),
          [a]
        );
        let v = (0, er.useRef)(
            (e, t) => (
              !r.current &&
                (w.current
                  ? w.current(e, t)
                  : (console.error(e, t),
                    e instanceof L.AE &&
                      "undefined" != typeof window &&
                      t &&
                      window.open(t.url, "_blank"))),
              e
            )
          ),
          [b, E] = (0, er.useState)(() =>
            t
              .map((e) => ({ adapter: e, readyState: e.readyState }))
              .filter(({ readyState: e }) => e !== M.Ok.Unsupported)
          );
        (0, er.useEffect)(() => {
          function e(e) {
            E((t) => {
              let n = t.findIndex(({ adapter: e }) => e === this);
              if (-1 === n) return t;
              let { adapter: r } = t[n];
              return [
                ...t.slice(0, n),
                { adapter: r, readyState: e },
                ...t.slice(n + 1),
              ].filter(({ readyState: e }) => e !== M.Ok.Unsupported);
            });
          }
          return (
            E((e) =>
              t
                .map((t, n) => {
                  let r = e[n];
                  return r && r.adapter === t && r.readyState === t.readyState
                    ? r
                    : { adapter: t, readyState: t.readyState };
                })
                .filter(({ readyState: e }) => e !== M.Ok.Unsupported)
            ),
            t.forEach((t) => t.on("readyStateChange", e, t)),
            () => {
              t.forEach((t) => t.off("readyStateChange", e, t));
            }
          );
        }, [n, t]);
        let x = (0, er.useMemo)(
          () => b.find((e) => e.adapter === n) ?? null,
          [n, b]
        );
        (0, er.useEffect)(() => {
          if (!n) return;
          let e = (e) => {
              g(e), (l.current = !1), d(!1), y(!0), (u.current = !1), h(!1);
            },
            t = () => {
              r.current ||
                (g(null),
                (l.current = !1),
                d(!1),
                y(!1),
                (u.current = !1),
                h(!1));
            },
            i = (e) => {
              v.current(e, n);
            };
          return (
            n.on("connect", e),
            n.on("disconnect", t),
            n.on("error", i),
            () => {
              n.off("connect", e),
                n.off("disconnect", t),
                n.off("error", i),
                t();
            }
          );
        }, [n, r]);
        let S = (0, er.useRef)(!1);
        (0, er.useEffect)(
          () => () => {
            S.current = !1;
          },
          [n]
        ),
          (0, er.useEffect)(() => {
            S.current ||
              l.current ||
              m ||
              !i ||
              (x?.readyState !== M.Ok.Installed &&
                x?.readyState !== M.Ok.Loadable) ||
              ((l.current = !0),
              d(!0),
              (S.current = !0),
              (async function () {
                try {
                  await i();
                } catch {
                  o();
                } finally {
                  d(!1), (l.current = !1);
                }
              })());
          }, [m, i, o, x]);
        let A = (0, er.useCallback)(
            async (e, t, r) => {
              if (!n) throw v.current(new es());
              if (!m) throw v.current(new L.kW(), n);
              return await n.sendTransaction(e, t, r);
            },
            [n, m]
          ),
          T = (0, er.useMemo)(
            () =>
              n && "signTransaction" in n
                ? async (e) => {
                    if (!m) throw v.current(new L.kW(), n);
                    return await n.signTransaction(e);
                  }
                : void 0,
            [n, m]
          ),
          I = (0, er.useMemo)(
            () =>
              n && "signAllTransactions" in n
                ? async (e) => {
                    if (!m) throw v.current(new L.kW(), n);
                    return await n.signAllTransactions(e);
                  }
                : void 0,
            [n, m]
          ),
          _ = (0, er.useMemo)(
            () =>
              n && "signMessage" in n
                ? async (e) => {
                    if (!m) throw v.current(new L.kW(), n);
                    return await n.signMessage(e);
                  }
                : void 0,
            [n, m]
          ),
          O = (0, er.useMemo)(
            () =>
              n && "signIn" in n ? async (e) => await n.signIn(e) : void 0,
            [n]
          ),
          B = (0, er.useCallback)(async () => {
            if (l.current || u.current || x?.adapter.connected) return;
            if (!x) throw v.current(new es());
            let { adapter: e, readyState: t } = x;
            if (t !== M.Ok.Installed && t !== M.Ok.Loadable)
              throw v.current(new L.AE(), e);
            (l.current = !0), d(!0);
            try {
              await e.connect();
            } catch (e) {
              throw (o(), e);
            } finally {
              d(!1), (l.current = !1);
            }
          }, [o, x]),
          N = (0, er.useCallback)(async () => {
            if (!u.current && n) {
              (u.current = !0), h(!0);
              try {
                await n.disconnect();
              } finally {
                h(!1), (u.current = !1);
              }
            }
          }, [n]);
        return er.createElement(
          el.b.Provider,
          {
            value: {
              autoConnect: !!i,
              wallets: b,
              wallet: x,
              publicKey: p,
              connected: m,
              connecting: c,
              disconnecting: f,
              select: s,
              connect: B,
              disconnect: N,
              sendTransaction: A,
              signTransaction: T,
              signAllTransactions: I,
              signMessage: _,
              signIn: O,
            },
          },
          e
        );
      }
      function ed(e) {
        return (
          (function ({ adapters: e, userAgentString: t }) {
            return e.some(
              (e) => e.name !== I.fG && e.readyState === M.Ok.Installed
            )
              ? T.DESKTOP_WEB
              : t &&
                /android/i.test(t) &&
                !/(WebView|Version\/.+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+)|; wv\).+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+))/i.test(
                  t
                )
              ? T.MOBILE_WEB
              : T.DESKTOP_WEB;
          })({
            adapters: e,
            userAgentString:
              (void 0 === i && (i = globalThis.navigator?.userAgent ?? null),
              i),
          }) === T.MOBILE_WEB
        );
      }
      function eu({
        children: e,
        wallets: t,
        autoConnect: n,
        localStorageKey: r = "walletName",
        onError: i,
      }) {
        let { connection: a } = (0, ea.w)(),
          s = (function (e) {
            let t = ei(() => new Set()),
              { get: n, on: r } = ei(() =>
                (function () {
                  if (
                    o ||
                    ((o = (function () {
                      if (
                        o ||
                        ((o = Object.freeze({ register: J, get: X, on: ee })),
                        "undefined" == typeof window)
                      )
                        return o;
                      let e = Object.freeze({ register: J });
                      try {
                        window.addEventListener(
                          "wallet-standard:register-wallet",
                          ({ detail: t }) => t(e)
                        );
                      } catch (e) {
                        console.error(
                          "wallet-standard:register-wallet event listener could not be added\n",
                          e
                        );
                      }
                      try {
                        window.dispatchEvent(new en(e));
                      } catch (e) {
                        console.error(
                          "wallet-standard:app-ready event could not be dispatched\n",
                          e
                        );
                      }
                      return o;
                    })()),
                    "undefined" == typeof window)
                  )
                    return o;
                  let e = window.navigator.wallets || [];
                  if (!Array.isArray(e))
                    return (
                      console.error("window.navigator.wallets is not an array"),
                      o
                    );
                  let { register: t } = o,
                    n = (...e) =>
                      e.forEach((e) => et(() => e({ register: t })));
                  try {
                    Object.defineProperty(window.navigator, "wallets", {
                      value: Object.freeze({ push: n }),
                    });
                  } catch (e) {
                    return (
                      console.error(
                        "window.navigator.wallets could not be set"
                      ),
                      o
                    );
                  }
                  return n(...e), o;
                })()
              ),
              [i, a] = (0, er.useState)(() => eo(n()));
            (0, er.useEffect)(() => {
              let e = [
                r("register", (...e) => a((t) => [...t, ...eo(e)])),
                r("unregister", (...e) =>
                  a((t) => t.filter((t) => e.some((e) => e === t.wallet)))
                ),
              ];
              return () => e.forEach((e) => e());
            }, [r]);
            let s = (function (e) {
              let t = (0, er.useRef)(void 0);
              return (
                (0, er.useEffect)(() => {
                  t.current = e;
                }),
                t.current
              );
            })(i);
            return (
              (0, er.useEffect)(() => {
                if (!s) return;
                let e = new Set(i);
                new Set(s.filter((t) => !e.has(t))).forEach((e) => e.destroy());
              }, [s, i]),
              (0, er.useEffect)(() => () => i.forEach((e) => e.destroy()), []),
              (0, er.useMemo)(
                () => [
                  ...i,
                  ...e.filter(
                    ({ name: e }) =>
                      !i.some((t) => t.name === e) ||
                      (t.has(e) ||
                        (t.add(e),
                        console.warn(
                          `${e} was registered as a Standard Wallet. The Wallet Adapter for ${e} can be removed from your app.`
                        )),
                      !1)
                  ),
                ],
                [i, e, t]
              )
            );
          })(t),
          l = (0, er.useMemo)(() => {
            var e;
            if (!ed(s)) return null;
            let t = s.find((e) => e.name === I.fG);
            return t
              ? t
              : new I.Ne({
                  addressSelector: (0, I.RP)(),
                  appIdentity: {
                    uri: (function () {
                      let e = globalThis.location;
                      if (e) return `${e.protocol}//${e.host}`;
                    })(),
                  },
                  authorizationResultCache: (0, I.u)(),
                  cluster: (e = a?.rpcEndpoint)
                    ? /devnet/i.test(e)
                      ? "devnet"
                      : /testnet/i.test(e)
                      ? "testnet"
                      : "mainnet-beta"
                    : "mainnet-beta",
                  onWalletNotFound: (0, I.O0)(),
                });
          }, [s, a?.rpcEndpoint]),
          c = (0, er.useMemo)(
            () => (null == l || -1 !== s.indexOf(l) ? s : [l, ...s]),
            [s, l]
          ),
          [d, u] = (function (e, t) {
            let n = (0, er.useState)(() => {
                try {
                  let t = localStorage.getItem(e);
                  if (t) return JSON.parse(t);
                } catch (e) {
                  "undefined" != typeof window && console.error(e);
                }
                return null;
              }),
              r = n[0],
              i = (0, er.useRef)(!0);
            return (
              (0, er.useEffect)(() => {
                if (i.current) {
                  i.current = !1;
                  return;
                }
                try {
                  null === r
                    ? localStorage.removeItem(e)
                    : localStorage.setItem(e, JSON.stringify(r));
                } catch (e) {
                  "undefined" != typeof window && console.error(e);
                }
              }, [r, e]),
              n
            );
          })(r, 0),
          f = (0, er.useMemo)(
            () => c.find((e) => e.name === d) ?? null,
            [c, d]
          ),
          h = (0, er.useCallback)(
            (e) => {
              d !== e && (f && f.name !== I.fG && f.disconnect(), u(e));
            },
            [f, u, d]
          );
        (0, er.useEffect)(() => {
          if (f)
            return (
              f.on("disconnect", e),
              () => {
                f.off("disconnect", e);
              }
            );
          function e() {
            m.current || u(null);
          }
        }, [f, s, u, d]);
        let p = (0, er.useRef)(!1),
          g = (0, er.useMemo)(() => {
            if (n && f)
              return async () => {
                (!0 === n || (await n(f))) &&
                  (p.current ? await f.connect() : await f.autoConnect());
              };
          }, [n, f]),
          m = (0, er.useRef)(!1);
        (0, er.useEffect)(() => {
          if (d === I.fG && ed(s)) {
            m.current = !1;
            return;
          }
          function e() {
            m.current = !0;
          }
          return (
            window.addEventListener("beforeunload", e),
            () => {
              window.removeEventListener("beforeunload", e);
            }
          );
        }, [s, d]);
        let y = (0, er.useCallback)(() => {
            f && h(null);
          }, [f, h]),
          w = (0, er.useCallback)(
            (e) => {
              (p.current = !0), h(e);
            },
            [h]
          );
        return er.createElement(
          ec,
          {
            wallets: c,
            adapter: f,
            isUnloadingRef: m,
            onAutoConnectRequest: g,
            onConnectError: y,
            onError: i,
            onSelectWallet: w,
          },
          e
        );
      }
    },
  },
]);
