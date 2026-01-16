(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2914],
  {
    17698: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => h });
      var l = s(95155);
      s(12115);
      var a = s(30285),
        r = s(6874),
        n = s.n(r),
        i = s(81284),
        d = s(39785),
        c = s(24944),
        o = s(31839),
        x = s(86608),
        m = s(40714);
      let h = () => {
        let { round: e } = (0, o.A)(),
          t =
            (Number((null == e ? void 0 : e.raised) || 0).toFixed(2) /
              (null == e ? void 0 : e.total_target)) *
            100,
          {
            d: s,
            h: r,
            m: h,
            s: u,
            isExpired: p,
          } = (0, x.A)((0, m.f)(new Date("2025-07-27"), 10));
        return (0, l.jsxs)("div", {
          className: "mt-24 md:mt-28 container relative min-h-[400px]",
          children: [
            (0, l.jsx)("div", {
              className: "flex justify-center",
              children: (0, l.jsxs)("div", {
                className:
                  "bg-primary-green/20 uppercase flex items-center gap-2 font-bold px-4 py-2 rounded-full font-base md:font-lg tracking-wide",
                children: [
                  (0, l.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                      fill: "#19D4D6",
                      d: "M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2",
                    }),
                  }),
                  "Tapzi now live",
                ],
              }),
            }),
            (0, l.jsxs)("h1", {
              className:
                "text-center font-normal text-3xl md:text-5xl lg:text-6xl xl:text-7xl mt-4 md:mt-6",
              children: [
                "How To Buy",
                " ",
                (0, l.jsx)("span", {
                  className: "font-medium text-primary-green",
                  children: "$TAPZI Tokens",
                }),
              ],
            }),
            (0, l.jsx)("p", {
              className:
                "text-center mt-2 md:mt-4 font-normal text-base sm:text-lg md:text-2xl lg:text-3xl capitalize",
              children: "Join the skill-to-earn revolution in under 2 minutes",
            }),
            (0, l.jsxs)("div", {
              className:
                "flex justify-center mt-8 sm:mt-10 md:mt-12 gap-4 md:gap-6",
              children: [
                (0, l.jsx)(n(), {
                  href: "https://docs.tapziwinner.org/",
                  children: (0, l.jsxs)(a.$, {
                    style: {
                      boxShadow:
                        "0px 8px 25px 0px #694DFBA6, 0px -7px 20px 0px #FFFFFF4D inset",
                    },
                    className:
                      "rounded-lg bg-primary-violet text-white h-12 lg:h-14 text-lg lg:text-xl font-semibold px-6 md:px-10 lg:px-16 md:min-w-44 hover:bg-primary-violet/80",
                    children: [
                      (0, l.jsx)(i.A, { className: "w-5" }),
                      (0, l.jsx)("span", { children: "Learn More" }),
                    ],
                  }),
                }),
                (0, l.jsx)(n(), {
                  href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x5a8908C8B7f0A35F3a08A7A1b93b0c4aC928E5f6",
                  children: (0, l.jsxs)(a.$, {
                    className:
                      "rounded-lg bg-white/30 text-white h-12 lg:h-14 text-lg lg:text-xl font-semibold px-6 md:px-10 md:min-w-52 hover:bg-white/40",
                    children: [
                      (0, l.jsx)(d.A, { className: "w-5" }),
                      " ",
                      (0, l.jsx)("span", { children: "Buy $TAPZI Now" }),
                    ],
                  }),
                }),
              ],
            }),
            
          ],
        });
      };
    },
    17717: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => S });
      var l = s(95155),
        a = s(12115),
        r = s(82974),
        n = s(39785),
        i = s(51154),
        d = s(55095),
        c = s(59434),
        o = s(62523),
        x = s(54073);
      function m(e) {
        let {
            className: t,
            defaultValue: s,
            value: r,
            min: n = 0,
            max: i = 100,
            ...d
          } = e,
          o = a.useMemo(
            () => (Array.isArray(r) ? r : Array.isArray(s) ? s : [n, i]),
            [r, s, n, i]
          );
        return (0, l.jsxs)(x.bL, {
          "data-slot": "slider",
          defaultValue: s,
          value: r,
          min: n,
          max: i,
          className: (0, c.cn)(
            "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
            t
          ),
          ...d,
          children: [
            (0, l.jsx)(x.CC, {
              "data-slot": "slider-track",
              className: (0, c.cn)(
                "relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5 bg-white/10"
              ),
              children: (0, l.jsx)(x.Q6, {
                "data-slot": "slider-range",
                className: (0, c.cn)(
                  "bg-primary-green absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                ),
              }),
            }),
            Array.from({ length: o.length }, (e, t) =>
              (0, l.jsx)(
                x.zi,
                {
                  "data-slot": "slider-thumb",
                  className:
                    "border-white bg-white block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50",
                },
                t
              )
            ),
          ],
        });
      }
      var h = s(30285),
        u = s(6874),
        p = s.n(u),
        f = s(41993),
        g = s(86124),
        b = s(29038),
        j = s(12607),
        v = s(2145),
        N = s(31839),
        w = s(75684),
        y = s(4119),
        k = s(23204),
        C = s(55028);
      let A = (0, C.default)(
          () =>
            Promise.all([s.e(9252), s.e(5716), s.e(1381)]).then(
              s.bind(s, 34562)
            ),
          { loadableGenerated: { webpack: () => [34562] } }
        ),
        F = (0, C.default)(
          () =>
            Promise.all([s.e(8284), s.e(1987), s.e(1133)]).then(
              s.bind(s, 41133)
            ),
          { loadableGenerated: { webpack: () => [41133] } }
        ),
        T = () => {
          let { open: e } = (0, g.o1)(),
            { data: t } = (0, b.Q)(),
            { switchChain: s } = (0, j.R)(),
            [c, x] = (0, a.useState)(""),
            { address: u } = (0, v.F)(),
            [y, k] = (0, a.useState)(!0),
            [C, A] = (0, a.useState)(""),
            [F, T] = (0, a.useState)(w.l.eth),
            { round: S } = (0, N.A)(),
            {
              isBuying: D,
              handleBuy: I,
              tokenAmount: L,
            } = (0, f.A)({
              currency: F,
              inputState: c,
              bonuses: [],
              handleRefetch: () => {},
              pricesPerUnit: t || b.B,
              round: S,
              isNative: y,
              getEquivalentUSD: () => {
                switch (F) {
                  case w.l.bnb:
                    if (["usdc", "usdt"].includes(C.toLowerCase())) return +c;
                    return c * ((null == t ? void 0 : t.bnb) || 0);
                  case w.l.eth:
                    if (["usdc", "usdt"].includes(C.toLowerCase())) return +c;
                    return c * ((null == t ? void 0 : t.eth) || 0);
                  case w.l.matic:
                    if (["usdc", "usdt"].includes(C.toLowerCase())) return +c;
                    return c * ((null == t ? void 0 : t.matic) || 0);
                  case w.l.sol:
                    if (["usdc", "usdt"].includes(C.toLowerCase())) return +c;
                    return c * ((null == t ? void 0 : t.sol) || 0);
                  case w.l.trx:
                    if (["usdc", "usdt"].includes(C.toLowerCase()) || !y)
                      return +c;
                    return c * ((null == t ? void 0 : t.trx) || 0);
                  case w.l.arb:
                    if (C.toLowerCase() === w.l.eth)
                      return c * ((null == t ? void 0 : t.eth) || 0);
                    if (C.toLowerCase() === w.l.arb)
                      return c * ((null == t ? void 0 : t.arb) || 0);
                    return +c;
                  case w.l.base:
                    if (C.toLowerCase() === w.l.eth)
                      return c * ((null == t ? void 0 : t.eth) || 0);
                    if (C.toLowerCase() === w.l.base)
                      return c * ((null == t ? void 0 : t.base) || 0);
                    return +c;
                  case w.l.usdt:
                  case w.l.usdc:
                  case w.l.card:
                    return +c;
                  default:
                    return 0;
                }
              },
              token: C,
            });
          return (0, l.jsx)("div", {
            className:
              "pt-10 md:pt-20 pb-20 md:pb-32 lg:pb-52 bg-[url(/image/landing/supported-blockchains/bg.png)] bg-bottom bg-no-repeat hide",
            children: (0, l.jsxs)("div", {
              className: "container relative z-1 relative",
              id: "steps",
              children: [
                (0, l.jsx)("h2", {
                  className:
                    "text-center font-light text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-white to-slate-500 bg-clip-text  text-transparent leading-normal uppercase",
                  children: "Complete these steps to purchase",
                }),
                (0, l.jsxs)("div", {
                  className: "mt-10 max-w-4xl mx-auto space-y-6",
                  children: [
                    (0, l.jsx)(P, {
                      title: "Connect your wallet",
                      description:
                        "Link your preferred Web3 wallet to participate",
                      index: 1,
                      children: (0, l.jsxs)("div", {
                        className: "mt-4 flex items-center flex-wrap gap-4",
                        children: [
                          (0, l.jsxs)(_, {
                            onClick: e,
                            children: [
                              (0, l.jsx)(r.Mh, { className: "h-4 w-4" }),
                              (0, l.jsx)("span", { children: "Metamask" }),
                            ],
                          }),
                          (0, l.jsxs)(_, {
                            onClick: e,
                            children: [
                              (0, l.jsx)(r.kI, { className: "h-6 w-6" }),
                              "Wallet Connect",
                            ],
                          }),
                          (0, l.jsxs)(_, {
                            onClick: e,
                            children: [
                              (0, l.jsx)(n.A, { className: "h-4" }),
                              (0, l.jsx)("span", { children: "Trust Wallet" }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsxs)(P, {
                      title: "Select Your Payment Method",
                      description:
                        "Choose how you'd like to purchase $TAPZI tokens",
                      index: 2,
                      children: [
                        (0, l.jsxs)("div", {
                          className: "grid grid-cols-2 gap-4 mt-6",
                          children: [
                            (0, l.jsx)(_, {
                              className:
                                "justify-center bg-primary-green rounded-lg py-1",
                              children: "Crypto",
                            }),
                            (0, l.jsx)(_, {
                              className:
                                "justify-center border bg-transparent rounded-lg py-1",
                              children: "Credit Card",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "mt-6 grid grid-cols-2 md:grid-cols-3 gap-4",
                          children: [
                            (0, l.jsxs)(_, {
                              onClick: () => {
                                T(w.l.eth), k(!0), A(""), s({ chainId: 1 });
                              },
                              className: "rounded-md",
                              children: [
                                (0, l.jsx)(r.ft, { className: "h-4 w-4" }),
                                (0, l.jsx)("span", { children: "ETH" }),
                              ],
                            }),
                            (0, l.jsxs)(_, {
                              onClick: () => {
                                T(w.l.bnb), k(!0), A(""), s({ chainId: 56 });
                              },
                              className: "rounded-md",
                              children: [
                                (0, l.jsx)(r.e0, { className: "h-4 w-4" }),
                                (0, l.jsx)("span", { children: "BNB" }),
                              ],
                            }),
                            (0, l.jsxs)(_, {
                              onClick: () => {
                                T(w.l.matic), k(!0), A(""), s({ chainId: 137 });
                              },
                              className: "rounded-md",
                              children: [
                                (0, l.jsx)(r.YH, { className: "h-5 w-5" }),
                                (0, l.jsx)("span", { children: "MATIC" }),
                              ],
                            }),
                            (0, l.jsxs)(_, {
                              onClick: () => {
                                A(w.l.usdt), k(!1);
                              },
                              className: "rounded-md",
                              children: [
                                (0, l.jsx)(r.c3, { className: "h-4 w-4" }),
                                (0, l.jsx)("span", { children: "USDT" }),
                              ],
                            }),
                            (0, l.jsxs)(_, {
                              onClick: () => {
                                A(w.l.usdc), k(!1);
                              },
                              className: "rounded-md",
                              children: [
                                (0, l.jsx)(r.Hb, { className: "h-5 w-5" }),
                                (0, l.jsx)("span", { children: "USDC" }),
                              ],
                            }),
                            (0, l.jsxs)(_, {
                              onClick: () => {
                                T(w.l.sol), k(!1), A("");
                              },
                              className: "rounded-md",
                              children: [
                                (0, l.jsx)(r.WE, { className: "h-4 w-4" }),
                                (0, l.jsx)("span", { children: "SOL" }),
                              ],
                            }),
                            (0, l.jsxs)(_, {
                              onClick: () => {
                                T(w.l.trx), k(!1), A("");
                              },
                              className: "rounded-md",
                              children: [
                                (0, l.jsx)(r.xN, { className: "h-5 w-5" }),
                                (0, l.jsx)("span", { children: "TRX" }),
                              ],
                            }),
                            (0, l.jsxs)(_, {
                              onClick: () => {
                                A(w.l.arb), k(!0), s({ chainId: 42161 });
                              },
                              className: "rounded-md",
                              children: [
                                (0, l.jsx)(r.O$, { className: "h-5 w-5" }),
                                (0, l.jsx)("span", { children: "ARB" }),
                              ],
                            }),
                            (0, l.jsxs)(_, {
                              onClick: () => {
                                A(w.l.base), k(!0), s({ chainId: 8453 });
                              },
                              className: "rounded-md",
                              children: [
                                (0, l.jsx)(r.h_, { className: "h-5 w-5" }),
                                (0, l.jsx)("span", { children: "BASE" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsx)(P, {
                      title: "Enter Purchase Amount",
                      description:
                        "Decide how many $TAPZI tokens you want to buy",
                      index: 3,
                      children: (0, l.jsxs)("div", {
                        className: "mt-6",
                        children: [
                          (0, l.jsxs)("p", {
                            className: "text-[#989898]",
                            children: [
                              "Amount in",
                              " ",
                              (0, l.jsx)("span", {
                                className:
                                  "text-[#989898] text-base md:text-lg uppercase",
                                children: ["card", "usdt", "usdc"].includes(F)
                                  ? "usd"
                                  : F,
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "relative flex justify-between items-center gap-2 mt-1",
                            children: [
                              (0, l.jsx)(o.p, {
                                style: {
                                  boxShadow:
                                    "0px -7px 20px 0px #FFFFFF1A inset",
                                },
                                value: c ? c.toString() : "",
                                onChange: (e) => {
                                  let t = e.target.value;
                                  (+t &&
                                    C.toLowerCase() !== w.l.base &&
                                    (+t > 5e4 || 0 > +t)) ||
                                    (+t &&
                                      C.toLowerCase() === w.l.base &&
                                      (+t > 1e9 || 0 > +t)) ||
                                    x(t);
                                },
                                min: 0,
                                max: C.toLowerCase() === w.l.base ? 1e9 : 5e4,
                                onWheel: (e) => e.currentTarget.blur(),
                                type: "number",
                                autoComplete: "off",
                                className:
                                  "flex-1 h-12 rounded-[7px] bg-white/10 hover:bg-white/15 appearance-none",
                              }),
                              (0, l.jsx)("span", {
                                className:
                                  "text-[#989898] text-base md:text-lg mt-1 uppercase",
                                children: ["card", "usdt", "usdc"].includes(F)
                                  ? "usd"
                                  : F,
                              }),
                            ],
                          }),
                          (0, l.jsx)(m, {
                            className: "mt-4",
                            value: [+c],
                            onValueChange: (e) => {
                              var t;
                              return x(
                                null == (t = e[0]) ? void 0 : t.toString()
                              );
                            },
                            max: 100,
                            min: 1,
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "mt-6 rounded-[10px] bg-[#ffffff08] p-4 space-y-2 font-semibold",
                            children: [
                              (0, l.jsxs)("div", {
                                className:
                                  "flex justify-between items-center gap-4",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "text-[#989898]",
                                    children: "You'll receive:",
                                  }),
                                  (0, l.jsxs)("span", {
                                    className: "text-right",
                                    children: [
                                      (+L).toLocaleString(),
                                      " $TAPZI",
                                    ],
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className:
                                  "flex justify-between items-center gap-4",
                                children: [
                                  (0, l.jsx)("span", {
                                    className:
                                      "text-[#989898] whitespace-nowrap",
                                    children: "Exchange rate:",
                                  }),
                                  (0, l.jsxs)("span", {
                                    className: "text-right",
                                    children: [
                                      c,
                                      (0, l.jsx)("span", {
                                        className: "uppercase",
                                        children: [
                                          "card",
                                          "usdt",
                                          "usdc",
                                        ].includes(F)
                                          ? "usd"
                                          : F,
                                      }),
                                      " ",
                                      "= ",
                                      (+L).toLocaleString(),
                                      " $TAPZI",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)(P, {
                      title: "Complete The Purchase",
                      description:
                        "Review your purchase details and confirm the transaction",
                      index: 4,
                      children: (0, l.jsxs)("div", {
                        className: "mt-6",
                        children: [
                          (0, l.jsxs)("p", {
                            className: "text-[#989898]",
                            children: [
                              "Amount in",
                              " ",
                              (0, l.jsx)("span", {
                                className: "uppercase",
                                children: ["card", "usdt", "usdc"].includes(F)
                                  ? "usd"
                                  : F,
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "mt-4 rounded-[10px] bg-[#ffffff08] p-4 space-y-2 font-semibold",
                            children: [
                              (0, l.jsxs)("div", {
                                className:
                                  "flex justify-between items-center gap-4",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "text-[#989898]",
                                    children: "Amount:",
                                  }),
                                  (0, l.jsxs)("span", {
                                    className: "text-right",
                                    children: [
                                      c,
                                      " ",
                                      (0, l.jsx)("span", {
                                        className: "uppercase",
                                        children: [
                                          "card",
                                          "usdt",
                                          "usdc",
                                        ].includes(F)
                                          ? "usd"
                                          : F,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className:
                                  "flex justify-between items-center gap-4",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "text-[#989898]",
                                    children: "$TAPZI tokens:",
                                  }),
                                  (0, l.jsx)("span", {
                                    className: "text-right",
                                    children: L.toLocaleString(),
                                  }),
                                ],
                              }),
                              (0, l.jsx)("hr", {
                                className: "border-white/20 border-0 border-t",
                              }),
                              (0, l.jsxs)("div", {
                                className:
                                  "flex justify-between items-center gap-4",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "text-[#989898]",
                                    children: "Total $TAPZI:",
                                  }),
                                  (0, l.jsx)("span", {
                                    className: "text-right",
                                    children: L.toLocaleString(),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsx)(p(), {
                            href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x5a8908C8B7f0A35F3a08A7A1b93b0c4aC928E5f6",
                            children: (0, l.jsxs)(h.$, {
                              type: "button",
                              disabled: !c || !L,
                              onClick: async () => {
                                if (!u) return void e();
                                I();
                              },
                              className:
                                "bg-primary-green hover:bg-primary-green/80 font-semibold mt-6 text-white w-full h-10",
                              children: [
                                D
                                  ? (0, l.jsx)(i.A, {
                                      className: "w-4 animate-spin",
                                    })
                                  : (0, l.jsx)(d.A, {}),
                                " ",
                                D ? "Buying..." : "Buy $TAPZI",
                              ],
                            }),
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "text-[#989898] text-base mt-4 text-center",
                            children:
                              "You'll approve the transaction in your wallet",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        _ = (e) => {
          let { children: t, className: s, onClick: a } = e;
          return (0, l.jsx)("div", {
            className: (0, c.cn)(
              "bg-white/10 rounded-md md:rounded-[11.54px] text-white flex items-center gap-2 py-1 md:py-2 px-2 md:px-3 text-base md:text-lg font-semibold cursor-pointer hover:bg-white/20",
              s
            ),
            onClick: a,
            children: t,
          });
        },
        P = (e) => {
          let { title: t, description: s, children: a, index: r } = e;
          return (0, l.jsxs)("div", {
            style: {
              background:
                "linear-gradient(var(--color-background), var(--color-background)) padding-box, linear-gradient(270deg, #03F5CD 0%, #19D4D6 40.31%, #30ACE1 70.55%, #694DFB 100.79%) border-box",
              border: "3px solid transparent",
              backdropFilter: "blur(114px)",
            },
            className:
              "rounded-2xl py-6 md:py-10 px-4 shadow-[0px_0px_90px_0px_#FFFFFF33_inset] w-full flex flex-col md:flex-row items-start gap-4 md:gap-6",
            children: [
              (0, l.jsx)("div", {
                className:
                  "h-12 w-12 rounded-full flex items-center justify-center border border-primary-violet font-semibold text-xl",
                style: { boxShadow: "0px -7px 20px 0px #694DFB inset" },
                children: r,
              }),
              (0, l.jsxs)("div", {
                className: "flex-1 w-full md:w-auto",
                children: [
                  (0, l.jsx)("h2", {
                    className: "font-medium text-xl md:text-2xl lg:text-3xl",
                    children: t,
                  }),
                  (0, l.jsx)("p", {
                    className: "text-[#989898] text-base md:text-lg mt-1",
                    children: s,
                  }),
                  a,
                ],
              }),
            ],
          });
        },
        S = () =>
          (0, l.jsx)(F, {
            children: (0, l.jsx)(y.S, {
              endpoint: k.tN,
              children: (0, l.jsx)(A, { children: (0, l.jsx)(T, {}) }),
            }),
          });
    },
    24563: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => C });
      var l = s(95155),
        a = s(12115),
        r = s(83540),
        n = s(27086),
        i = s(64683),
        d = s(59434);
      let c = { light: "", dark: ".dark" },
        o = a.createContext(null);
      function x(e) {
        let { id: t, className: s, children: n, config: i, ...c } = e,
          x = a.useId(),
          h = "chart-".concat(t || x.replace(/:/g, ""));
        return (0, l.jsx)(o.Provider, {
          value: { config: i },
          children: (0, l.jsxs)("div", {
            "data-slot": "chart",
            "data-chart": h,
            className: (0, d.cn)(
              "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
              s
            ),
            ...c,
            children: [
              (0, l.jsx)(m, { id: h, config: i }),
              (0, l.jsx)(r.u, { children: n }),
            ],
          }),
        });
      }
      let m = (e) => {
          let { id: t, config: s } = e,
            a = Object.entries(s).filter((e) => {
              let [, t] = e;
              return t.theme || t.color;
            });
          return a.length
            ? (0, l.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html: Object.entries(c)
                    .map((e) => {
                      let [s, l] = e;
                      return "\n"
                        .concat(l, " [data-chart=")
                        .concat(t, "] {\n")
                        .concat(
                          a
                            .map((e) => {
                              var t;
                              let [l, a] = e,
                                r =
                                  (null == (t = a.theme) ? void 0 : t[s]) ||
                                  a.color;
                              return r
                                ? "  --color-".concat(l, ": ").concat(r, ";")
                                : null;
                            })
                            .join("\n"),
                          "\n}\n"
                        );
                    })
                    .join("\n"),
                },
              })
            : null;
        },
        h = n.m;
      function u(e) {
        let {
            active: t,
            payload: s,
            className: r,
            indicator: n = "dot",
            hideLabel: i = !1,
            hideIndicator: c = !1,
            label: x,
            labelFormatter: m,
            labelClassName: h,
            formatter: u,
            color: f,
            nameKey: g,
            labelKey: b,
          } = e,
          { config: j } = (function () {
            let e = a.useContext(o);
            if (!e)
              throw Error("useChart must be used within a <ChartContainer />");
            return e;
          })(),
          v = a.useMemo(() => {
            var e;
            if (i || !(null == s ? void 0 : s.length)) return null;
            let [t] = s,
              a = "".concat(
                b ||
                  (null == t ? void 0 : t.dataKey) ||
                  (null == t ? void 0 : t.name) ||
                  "value"
              ),
              r = p(j, t, a),
              n =
                b || "string" != typeof x
                  ? null == r
                    ? void 0
                    : r.label
                  : (null == (e = j[x]) ? void 0 : e.label) || x;
            return m
              ? (0, l.jsx)("div", {
                  className: (0, d.cn)("font-medium", h),
                  children: m(n, s),
                })
              : n
              ? (0, l.jsx)("div", {
                  className: (0, d.cn)("font-medium", h),
                  children: n,
                })
              : null;
          }, [x, m, s, i, h, j, b]);
        if (!t || !(null == s ? void 0 : s.length)) return null;
        let N = 1 === s.length && "dot" !== n;
        return (0, l.jsxs)("div", {
          className: (0, d.cn)(
            "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
            r
          ),
          children: [
            N ? null : v,
            (0, l.jsx)("div", {
              className: "grid gap-1.5",
              children: s.map((e, t) => {
                let s = "".concat(g || e.name || e.dataKey || "value"),
                  a = p(j, e, s),
                  r = f || e.payload.fill || e.color;
                return (0, l.jsx)(
                  "div",
                  {
                    className: (0, d.cn)(
                      "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                      "dot" === n && "items-center"
                    ),
                    children:
                      u && (null == e ? void 0 : e.value) !== void 0 && e.name
                        ? u(e.value, e.name, e, t, e.payload)
                        : (0, l.jsxs)(l.Fragment, {
                            children: [
                              (null == a ? void 0 : a.icon)
                                ? (0, l.jsx)(a.icon, {})
                                : !c &&
                                  (0, l.jsx)("div", {
                                    className: (0, d.cn)(
                                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                                      {
                                        "h-2.5 w-2.5": "dot" === n,
                                        "w-1": "line" === n,
                                        "w-0 border-[1.5px] border-dashed bg-transparent":
                                          "dashed" === n,
                                        "my-0.5": N && "dashed" === n,
                                      }
                                    ),
                                    style: {
                                      "--color-bg": r,
                                      "--color-border": r,
                                    },
                                  }),
                              (0, l.jsxs)("div", {
                                className: (0, d.cn)(
                                  "flex flex-1 justify-between leading-none",
                                  N ? "items-end" : "items-center"
                                ),
                                children: [
                                  (0, l.jsxs)("div", {
                                    className: "grid gap-1.5",
                                    children: [
                                      N ? v : null,
                                      (0, l.jsx)("span", {
                                        className: "text-muted-foreground",
                                        children:
                                          (null == a ? void 0 : a.label) ||
                                          e.name,
                                      }),
                                    ],
                                  }),
                                  e.value &&
                                    (0, l.jsx)("span", {
                                      className:
                                        "text-foreground font-mono font-medium tabular-nums",
                                      children: e.value.toLocaleString(),
                                    }),
                                ],
                              }),
                            ],
                          }),
                  },
                  e.dataKey
                );
              }),
            }),
          ],
        });
      }
      function p(e, t, s) {
        if ("object" != typeof t || null === t) return;
        let l =
            "payload" in t && "object" == typeof t.payload && null !== t.payload
              ? t.payload
              : void 0,
          a = s;
        return (
          s in t && "string" == typeof t[s]
            ? (a = t[s])
            : l && s in l && "string" == typeof l[s] && (a = l[s]),
          a in e ? e[a] : e[s]
        );
      }
      i.s;
      var f = s(90170),
        g = s(10627),
        b = s(60379),
        j = s(40054),
        v = s.n(j),
        N = s(30285),
        w = s(27719),
        y = s(5196),
        k = s(24357);
      let C = () => {
          let { copied: e, copy: t } = (0, w.T)(),
            s = {
              liquidity: { label: "Liquidity", color: "#03F5CD" },
              presale: { label: "Presale", color: "#19D4D6" },
              team: { label: "Team", color: "var(--color-primary-violet)" },
              treasury: { label: "Treasury", color: "#30ACE1" },
              airdrop: { label: "Airdrop & Bonuses", color: "#FFC700" },
              development: {
                label: "Ecosystem & Development",
                color: "#0dff00",
              },
              marketing: { label: "Marketing", color: "#452fd5" },
              reward: { label: "User Rewards", color: "#d0004c" },
            },
            a = [
              { name: "presale", percent: 20, fill: s.presale.color },
              { name: "liquidity", percent: 20, fill: s.liquidity.color },
              { name: "team", percent: 10, fill: s.team.color },
              { name: "treasury", percent: 15, fill: s.treasury.color },
              { name: "airdrop", percent: 10, fill: s.airdrop.color },
              { name: "development", percent: 10, fill: s.development.color },
              { name: "marketing", percent: 10, fill: s.marketing.color },
              { name: "reward", percent: 5, fill: s.reward.color },
            ];
          return (0, l.jsxs)("div", {
            children: [
              (0, l.jsx)(x, {
                config: s,
                className: "mx-auto aspect-square max-h-[350px]",
                children: (0, l.jsxs)(f.r, {
                  children: [
                    (0, l.jsx)(h, {
                      cursor: !1,
                      content: (0, l.jsx)(u, { hideLabel: !0 }),
                    }),
                    (0, l.jsx)(g.F, {
                      data: a,
                      dataKey: "percent",
                      nameKey: "name",
                      innerRadius: 60,
                      strokeWidth: 10,
                      children: (0, l.jsx)(b.J, {
                        content: (e) => {
                          let { viewBox: t } = e;
                          if (t && "cx" in t && "cy" in t)
                            return (0, l.jsxs)("text", {
                              x: t.cx,
                              y: t.cy,
                              textAnchor: "middle",
                              dominantBaseline: "middle",
                              children: [
                                (0, l.jsx)("tspan", {
                                  x: t.cx,
                                  y: t.cy,
                                  className:
                                    "fill-foreground text-3xl font-bold",
                                  children: "100M",
                                }),
                                (0, l.jsx)("tspan", {
                                  x: t.cx,
                                  y: (t.cy || 0) + 24,
                                  className: "fill-muted-foreground",
                                  children: "Total Supply",
                                }),
                              ],
                            });
                        },
                      }),
                    }),
                  ],
                }),
              }),
              (0, l.jsx)("div", {
                className: "flex items-center my-3 justify-center",
                children: (0, l.jsxs)("div", {
                  className:
                    "relative px-3 py-2 flex gap-4 items-center justify-center",
                  children: [
                    (0, l.jsx)("div", {
                      style: {
                        position: "absolute",
                        background:
                          "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)",
                        opacity: 0.1,
                        height: "100%",
                        width: "100%",
                        top: 0,
                        left: 0,
                        border: "1px solid #FFFFFF",
                        boxSizing: "border-box",
                        borderRadius: "10px",
                        transform: "rotate(180deg')",
                        pointerEvents: "none",
                      },
                    }),
                    (0, l.jsx)("span", { children: "Contract : " }),
                    (0, l.jsx)("a", {
                      href: "https://etherscan.io/token/0x5a8908C8B7f0A35F3a08A7A1b93b0c4aC928E5f6",
                      className:
                        "text-blue-500 hover:text-blue-600 hover:underline",
                      children: (0, d.O)(
                        "0x5a8908C8B7f0A35F3a08A7A1b93b0c4aC928E5f6"
                      ),
                    }),
                    (0, l.jsx)(N.$, {
                      disabled: e,
                      onClick: () =>
                        t("0x5a8908C8B7f0A35F3a08A7A1b93b0c4aC928E5f6"),
                      size: "icon",
                      variant: "ghost",
                      className: "h-5 w-5",
                      children: e
                        ? (0, l.jsx)(y.A, { className: "w-4" })
                        : (0, l.jsx)(k.A, { className: "w-4" }),
                    }),
                  ],
                }),
              }),
              v()
                .chunk(a, 2)
                .map((e, t) =>
                  (0, l.jsx)(
                    "div",
                    {
                      className: "flex items-center justify-between gap-4 mt-4",
                      children: e.map((e) =>
                        (0, l.jsx)(
                          A,
                          {
                            title: e.name,
                            percentage: e.percent,
                            color: e.fill,
                          },
                          e.name
                        )
                      ),
                    },
                    t
                  )
                ),
            ],
          });
        },
        A = (e) => {
          let { title: t, percentage: s, color: a } = e;
          return (0, l.jsxs)("div", {
            className: "flex gap-4 flex-0.5 items-center font-medium",
            children: [
              (0, l.jsx)("span", { className: "capitalize", children: t }),
              (0, l.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, l.jsx)("span", {
                    className: "h-5 w-5 rounded-full",
                    style: { background: a },
                  }),
                  (0, l.jsxs)("span", { children: [s, "%"] }),
                ],
              }),
            ],
          });
        };
    },
    61284: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => d });
      var l = s(95155);
      s(12115);
      var a = s(24563),
        r = s(59434),
        n = s(31839);
      let i = [
          {
            allocation: "Presale",
            tge: "25%",
            cliff: "None",
            vesting: "3 months",
          },
          {
            allocation: "Team",
            tge: "0%",
            cliff: "6 months",
            vesting: "18 months",
          },
          {
            allocation: "Marketing",
            tge: "10%",
            cliff: "None",
            vesting: "12 months",
          },
          {
            allocation: "Ecosystem",
            tge: "5%",
            cliff: "3 months",
            vesting: "24 Months",
          },
        ],
        d = () => {
          let { round: e } = (0, n.A)();
          return (0, l.jsxs)("div", {
            className: "container relative z-1 py-12 md:py-20",
            children: [
              (0, l.jsx)("h2", {
                className:
                  "text-center font-light text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-white to-slate-500 bg-clip-text  text-transparent leading-normal",
                children: "Tokenomics",
              }),
              (0, l.jsxs)("div", {
                className: "grid grid-cols-1  gap-4 mt-10",
                children: [
                  (0, l.jsx)(c, {
                    title: "Token Details",
                    children: (0, l.jsxs)("div", {
                      className: "space-y-6",
                      children: [
                        (0, l.jsx)(o, { name: "Token Name", value: "TAPZI" }),
                        (0, l.jsx)(o, {
                          name: "Token Symbol",
                          value: "$TAPZI",
                        }),
                        (0, l.jsx)(o, {
                          name: "Total Supply",
                          value: "1,000,000,000 $TAPZI",
                        }),
                        (0, l.jsx)(o, {
                          name: "Liquidity Pool",
                          value: "LP Locked",
                        }),
                        (0, l.jsx)(o, {
                          name: "Trade Tax",
                          value: "0% Buy/Sell",
                        }),
                        (0, l.jsx)(o, {
                          name: "Ownership",
                          value: "Renounced",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        c = (e) => {
          let { title: t, children: s, alignment: a = "center" } = e;
          return (0, l.jsxs)("div", {
            style: {
              background:
                "linear-gradient(var(--color-background), var(--color-background)) padding-box, linear-gradient(270deg, #03F5CD 0%, #19D4D6 40.31%, #30ACE1 70.55%, #694DFB 100.79%) border-box",
              border: "3px solid transparent",
              backdropFilter: "blur(114px)",
            },
            className:
              "rounded-xl px-4 md:px-5 lg:px-6 py-6 pt-10 shadow-[0px_0px_90px_0px_#FFFFFF33_inset] w-full",
            children: [
              t &&
                (0, l.jsx)("h3", {
                  className: (0, r.cn)(
                    "text-xl md:text-2xl lg:text-3xl text-center font-medium",
                    "left" === a && "text-left"
                  ),
                  children: t,
                }),
              s,
            ],
          });
        },
        o = (e) => {
          let { name: t, value: s } = e;
          return (0, l.jsxs)("div", {
            className: "mt-4",
            children: [
              (0, l.jsx)("p", {
                className: "text-[#ffffff49] font-medium",
                children: t,
              }),
              (0, l.jsx)("p", {
                className: "mt-1 text-xl md:text-2xl lg:text-3xl font-medium",
                children: s,
              }),
            ],
          });
        };
    },
    62123: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 33063, 23)),
        Promise.resolve().then(s.bind(s, 17698)),
        Promise.resolve().then(s.bind(s, 95204)),
        Promise.resolve().then(s.bind(s, 17717)),
        Promise.resolve().then(s.bind(s, 61284)),
        Promise.resolve().then(s.bind(s, 65057)),
        Promise.resolve().then(s.bind(s, 12467)),
        Promise.resolve().then(s.bind(s, 10549));
    },
    86608: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      var l = s(12115);
      let a = (e) => {
        let [t, s] = (0, l.useState)({ d: 0, h: 0, m: 0, s: 0 });
        return (
          (0, l.useEffect)(() => {
            let l = setInterval(() => {
              let a = new Date().getTime(),
                r = e.getTime() - a;
              if (r <= 0) {
                clearInterval(l), s({ ...t, d: 0, h: 0, m: 0, s: 0 });
                return;
              }
              let n = Math.floor(r / 864e5),
                i = Math.floor((r % 864e5) / 36e5),
                d = Math.floor((r % 36e5) / 6e4),
                c = Math.floor((r % 6e4) / 1e3);
              s({ ...t, d: n, h: i, m: d, s: c });
            }, 1e3);
            return () => clearInterval(l);
          }, [e]),
          { ...t, isExpired: () => new Date().getTime() > e.getTime() }
        );
      };
    },
    95204: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      var l = s(95155),
        a = s(59434),
        r = s(32919),
        n = s(81284),
        i = s(6874),
        d = s.n(i);
      s(12115);
      var c = s(82974);
      let o = () =>
          (0, l.jsxs)("div", {
            className: "container relative z-1 pt-10 md:pt-14 lg:pt-20",
            children: [
              (0, l.jsx)("h2", {
                className:
                  "text-center font-light text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-white to-slate-500 bg-clip-text  text-transparent leading-normal uppercase",
                children: "Security Tips",
              }),
              (0, l.jsxs)("div", {
                className:
                  "grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 mt-10 md:mt-14 lg:mt-16",
                children: [
                  (0, l.jsxs)(x, {
                    title: "Verify the URL",
                    image: "/image/how-to-buy/verify-url.png",
                    children: [
                      (0, l.jsxs)("div", {
                        className:
                          "bg-[#ffffff08] px-4 py-2 rounded-[10px] flex gap-1 items-center",
                        children: [
                          (0, l.jsx)(r.A, {
                            className: "text-muted-foreground w-3",
                          }),
                          (0, l.jsxs)("p", {
                            children: [
                              (0, l.jsx)("span", {
                                className: "text-muted-foreground",
                                children: "https://",
                              }),
                              "tapziwinner.org",
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsx)("p", {
                        className: "mt-4",
                        children:
                          "Always check that you're on the official Tapzi website before connecting your wallet.",
                      }),
                    ],
                  }),
                  (0, l.jsxs)(x, {
                    title: "Beware of Scams",
                    image: "/image/how-to-buy/be-aware-of-scams.png",
                    children: [
                      (0, l.jsx)("p", {
                        children:
                          "The Tapzi team will never ask for your private keys or seed phrase. Be cautious of impersonators.",
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "bg-[#ffffff08] px-4 py-2 rounded-[10px] flex gap-3 items-start mt-4",
                        children: [
                          (0, l.jsx)("span", {
                            className: "w-4",
                            children: (0, l.jsx)(n.A, {
                              className: "text-white/50 w-4",
                            }),
                          }),
                          (0, l.jsx)("p", {
                            className: "text-muted-foreground flex-1",
                            children:
                              "If someone DMs you claiming to be support, verify through official channels first.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)(x, {
                    title: "Stay Connected",
                    image: "/image/how-to-buy/stay-connected.png",
                    children: [
                      (0, l.jsx)("p", {
                        children:
                          "Join our official channels for updates and support during the presales.",
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex items-center gap-4 md:gap-6 mt-4",
                        children: [
                          (0, l.jsx)(d(), {
                            href: "https://t.me/TapziPlatform",
                            target: "_blank",
                            className: "hover:text-primary-green",
                            children: (0, l.jsx)(c.hZ, {
                              className: "h-6 w-6 md:h-7 md:w-7",
                            }),
                          }),
                          (0, l.jsx)(d(), {
                            href: "https://x.com/TapziPlatform",
                            target: "_blank",
                            className: "hover:text-primary-green",
                            children: (0, l.jsx)(c.Fi, {
                              className: "h-6 w-6 md:h-7 md:w-7",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        x = (e) => {
          let { image: t, title: s, children: r } = e;
          return (0, l.jsxs)("div", {
            style: {
              background:
                "linear-gradient(var(--color-background), var(--color-background)) padding-box,linear-gradient(180deg, rgba(25, 212, 214, 0.7) 0%, rgba(139, 44, 205, 0.7) 100%)  border-box",
              border: "2px solid transparent",
              backdropFilter: "blur(114px)",
            },
            className:
              "rounded-xl px-4 md:px-5 lg:px-10 py-6 md:py-8 lg:py-10 w-full group flex flex-row md:flex-col gap-4 md:gap-0",
            children: [
              (0, l.jsx)("div", {
                className: "h-20 md:w-24 w-20 md:h-24",
                children: (0, l.jsx)("img", {
                  className: "w-full h-fit object-contain",
                  src: t,
                  alt: s,
                }),
              }),
              (0, l.jsxs)("div", {
                className: (0, a.cn)("mt-4"),
                children: [
                  (0, l.jsx)("h3", {
                    className: (0, a.cn)(
                      "text-xl md:text-2xl lg:text-3xl font-semibold text-primary-green"
                    ),
                    children: s,
                  }),
                  (0, l.jsx)("div", { className: "mt-4", children: r }),
                ],
              }),
            ],
          });
        };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [
        4935, 9268, 8956, 2145, 7598, 4134, 6874, 4709, 6671, 6124, 6738, 3880,
        6708, 8978, 1670, 340, 3387, 2366, 5799, 8291, 8441, 1684, 7358,
      ],
      () => t(62123)
    ),
      (_N_E = e.O());
  },
]);
