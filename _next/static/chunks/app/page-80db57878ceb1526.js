(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8974],
  {
    7676: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 22117));
    },
    19564: (e, t, s) => {
      "use strict";
      s.d(t, { queryClient: () => a });
      let a = new (s(52775).E)({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: !1,
            refetchOnMount: !1,
            refetchOnReconnect: !1,
            refetchIntervalInBackground: !1,
          },
        },
      });
    },
    22117: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => eE });
      var a = s(95155),
        l = s(66766),
        n = s(55028),
        i = s(12115),
        r = s(30285),
        c = s(6874),
        o = s.n(c),
        d = s(24944),
        x = s(62523),
        h = s(86124),
        m = s(81284),
        u = s(51154),
        p = s(2145),
        b = s(18224),
        g = s(12607),
        f = s(29038),
        j = s(72637),
        v = s(75684),
        N = s(31839),
        w = s(41993),
        y = s(48812),
        k = s(88180),
        C = s(15452),
        F = s(54416),
        S = s(59434);
      function D(e) {
        let { ...t } = e;
        return (0, a.jsx)(C.bL, { "data-slot": "dialog", ...t });
      }
      function A(e) {
        let { ...t } = e;
        return (0, a.jsx)(C.ZL, { "data-slot": "dialog-portal", ...t });
      }
      function B(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)(C.hJ, {
          "data-slot": "dialog-overlay",
          className: (0, S.cn)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
            t
          ),
          ...s,
        });
      }
      function P(e) {
        let { className: t, children: s, showCloseButton: l = !0, ...n } = e;
        return (0, a.jsxs)(A, {
          "data-slot": "dialog-portal",
          children: [
            (0, a.jsx)(B, {}),
            (0, a.jsxs)(C.UC, {
              "data-slot": "dialog-content",
              className: (0, S.cn)(
                "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
                t
              ),
              ...n,
              children: [
                s,
                l &&
                  (0, a.jsxs)(C.bm, {
                    "data-slot": "dialog-close",
                    className:
                      "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    children: [
                      (0, a.jsx)(F.A, {}),
                      (0, a.jsx)("span", {
                        className: "sr-only",
                        children: "Close",
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function E(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          "data-slot": "dialog-header",
          className: (0, S.cn)(
            "flex flex-col gap-2 text-center sm:text-left",
            t
          ),
          ...s,
        });
      }
      function T(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)(C.hE, {
          "data-slot": "dialog-title",
          className: (0, S.cn)("text-lg leading-none font-semibold", t),
          ...s,
        });
      }
      var I = s(35169),
        R = s(66474);
      let L = [
          {
            title: "ETH",
            symbol: "ETH",
            subtitle: "Ethereum",
            image: k.Rd.eth,
            currency: v.l.eth,
            isEVM: !0,
            chain: "eth",
            chainId: y.t.eth,
          },
          {
            title: "Matic",
            symbol: "MATIC",
            subtitle: "Polygon",
            image: k.Rd.matic,
            currency: v.l.matic,
            isEVM: !0,
            chain: "polygon",
            chainId: y.t.polygon,
          },
          {
            title: "BNB",
            symbol: "BNB",
            subtitle: "Binance",
            image: k.Rd.bnb,
            currency: v.l.bnb,
            isEVM: !0,
            chain: "bsc",
            chainId: y.t.bsc,
          },
          {
            title: "SOL",
            symbol: "SOL",
            subtitle: "Solana",
            image: k.Rd.sol,
            currency: v.l.sol,
            isEVM: !1,
            chain: "solana",
            chainId: -1,
          },
          {
            title: "TRX",
            symbol: "TRX",
            subtitle: "Tron",
            image: k.Rd.trx,
            currency: v.l.trx,
            isEVM: !1,
            chain: "tron",
            chainId: -1,
          },
          {
            title: "Arbitrum",
            symbol: "ARB",
            subtitle: "Arbitrum One",
            image: k.Rd.arb,
            currency: v.l.arb,
            isEVM: !0,
            chain: "arbitrum",
            chainId: y.t.arbitrum,
          },
          {
            title: "BASE",
            symbol: "BASE",
            subtitle: "Base",
            image: k.Rd.base,
            currency: v.l.base,
            isEVM: !0,
            chain: "base",
            chainId: y.t.base,
          },
          {
            title: "USDT",
            symbol: "USDT",
            subtitle: "Tether USD",
            image: k.Rd.usdt,
            currency: v.l.usdt,
            isEVM: !1,
            chain: "-",
            chainId: -1,
          },
          {
            title: "USDC",
            symbol: "USDC",
            subtitle: "USD Coin",
            image: k.Rd.usdc,
            currency: v.l.usdc,
            isEVM: !1,
            chain: "-",
            chainId: -1,
          },
        ],
        $ = (e) => {
          let { onClick: t, item: s, isActive: n, option: i } = e;
          return (0, a.jsxs)("div", {
            className: (0, S.cn)(
              "cursor-pointer flex justify-between items-center px-3 py-2 hover:bg-gray-800 rounded-md",
              n && "bg-gradient-to-b from-[#19D4D6] to-[#0C6566]"
            ),
            onClick: () => {
              t();
            },
            children: [
              (0, a.jsxs)("div", {
                className: "flex gap-4 items-center",
                children: [
                  (0, a.jsx)(l.default, {
                    src: null == s ? void 0 : s.image,
                    height: 32,
                    width: 32,
                    className: "object-contain h-8 w-8",
                    alt: (null == s ? void 0 : s.title) || "",
                    unoptimized: !0,
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("p", {
                        className: "text-base font-semibold",
                        children: null == s ? void 0 : s.title,
                      }),
                      (0, a.jsx)("p", {
                        className: "text-sm text-slate-300 font-medium",
                        children: null == s ? void 0 : s.subtitle,
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("button", {
                className: (0, S.cn)(
                  "border-gray-500 border rounded-md py-1 px-2 hover:bg-gray-900 flex items-center gap-2 cursor-pointer",
                  n && "border-white hover:bg-white/20"
                ),
                children: [
                  i &&
                    (0, a.jsx)(l.default, {
                      src: null == i ? void 0 : i.image,
                      height: 16,
                      width: 16,
                      className: "h-4 w-4 object-contain rounded-full",
                      alt: i.title,
                    }),
                  (0, a.jsx)(R.A, { className: "w-4" }),
                ],
              }),
            ],
          });
        },
        O = (e) => {
          let {
              tokens: t,
              onOptionSelect: s,
              item: n,
              type: r,
              defaultOption: c,
            } = e,
            [o, d] = (0, i.useState)(t[0]),
            x =
              !!c &&
              !!t.find((e) => e.currency === (null == c ? void 0 : c.currency));
          return (
            (0, i.useEffect)(() => {
              x || d(t[0]), c && x && d(c);
            }, [c, x]),
            (0, a.jsx)("div", {
              className: "flex flex-col gap-1",
              children: t.map((e) =>
                (0, a.jsxs)(
                  "div",
                  {
                    className: (0, S.cn)(
                      "cursor-pointer hover:bg-gray-800 flex items-center gap-4 px-3 py-2 rounded-md",
                      (null == o ? void 0 : o.symbol) === e.symbol &&
                        "bg-gradient-to-b from-[#19D4D6] to-[#0C6566]"
                    ),
                    onClick: () => {
                      s(e), d(e);
                    },
                    children: [
                      "token" === r
                        ? (0, a.jsxs)("div", {
                            className: "relative h-fit w-fit",
                            children: [
                              (0, a.jsx)(l.default, {
                                height: 16,
                                width: 16,
                                className:
                                  "absolute border border-white -top-1 -right-1 rounded-full",
                                src: e.image,
                                alt: "",
                              }),
                              (0, a.jsx)(l.default, {
                                src: n.image,
                                height: 32,
                                width: 32,
                                className:
                                  "object-contain h-8 w-8 rounded-full",
                                alt: n.title,
                                unoptimized: !0,
                              }),
                            ],
                          })
                        : (0, a.jsx)(l.default, {
                            src: e.image,
                            height: 32,
                            width: 32,
                            className: "object-contain h-8 w-8 rounded-full",
                            alt: e.title,
                            unoptimized: !0,
                          }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("p", {
                            className: "text-base font-semibold",
                            children: "token" === r ? e.title : e.subtitle,
                          }),
                          (0, a.jsx)("p", {
                            className: "text-sm text-slate-300 font-medium",
                            children:
                              "token" === r
                                ? e.subtitle
                                : [v.l.eth, v.l.matic, v.l.bnb].includes(
                                    e.currency
                                  )
                                ? "Native"
                                : "ERC20",
                          }),
                        ],
                      }),
                    ],
                  },
                  e.title
                )
              ),
            })
          );
        },
        U = (e) => {
          let {
              activeCurrency: t,
              isNative: s,
              setIsNative: n,
              token: r,
              setToken: c,
              onSelect: o,
              isOpen: d,
              onClose: x,
            } = e,
            [h] = (0, i.useState)(L),
            { switchChain: m } = (0, g.R)(),
            [u, p] = (0, i.useState)(!1),
            [b, f] = (0, i.useState)([]),
            [j, N] = (0, i.useState)("chain"),
            [w, k] = (0, i.useState)(h[0]),
            C = h.find((e) => e.currency === v.l.usdt),
            F = h.find((e) => e.currency === v.l.usdc),
            A = h.find((e) => e.currency === v.l.arb),
            B = h.find((e) => e.currency === v.l.base),
            R = h.find((e) => e.currency === v.l.eth),
            U = h.find(
              (e) =>
                e.currency === t && !["card", "usdt", "usdc"].includes(e.chain)
            ),
            M = h.filter((e) => [v.l.eth, v.l.arb].includes(e.currency)),
            W = h
              .filter((e) => [v.l.eth, v.l.base].includes(e.currency))
              .map((e) =>
                e.currency === v.l.base
                  ? { ...e, image: "/image/tokens/base-token-round.png" }
                  : e
              ),
            z = W.find((e) => e.currency === v.l.eth);
          return (
            (0, i.useEffect)(() => {
              d || p(!1);
            }, [d]),
            (0, a.jsx)(D, {
              open: d,
              onOpenChange: x,
              children: (0, a.jsxs)(P, {
                className:
                  "bg-background backdrop:blur-lg overflow-auto max-h-screen",
                children: [
                  (0, a.jsx)(E, {
                    children: (0, a.jsxs)(T, {
                      className: "flex gap-2 items-center",
                      children: [
                        u &&
                          (0, a.jsx)("button", {
                            onClick: () => p(!1),
                            className: "hover:text-primary cursor-pointer",
                            children: (0, a.jsx)(I.A, { className: "w-5" }),
                          }),
                        u
                          ? "chain" === j
                            ? "Select a token"
                            : "Select a network"
                          : "Select a payment method",
                      ],
                    }),
                  }),
                  u
                    ? (0, a.jsx)(O, {
                        tokens: b,
                        onOptionSelect: (e) => {
                          c(
                            "token" === j
                              ? w.currency.toUpperCase()
                              : e.currency.toUpperCase()
                          ),
                            n(!1),
                            e.isEVM &&
                              "token" === j &&
                              (o(e.currency), m({ chainId: e.chainId })),
                            p(!1),
                            x();
                        },
                        type: j,
                        item: w,
                        defaultOption: "token" === j ? U : void 0,
                      })
                    : (0, a.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [
                          h.slice(0, 5).map((e) =>
                            (0, a.jsxs)(
                              "div",
                              {
                                className: (0, S.cn)(
                                  "cursor-pointer hover:bg-gray-800 flex items-center gap-4 px-3 py-2 rounded-md",
                                  t === e.currency &&
                                    s &&
                                    "bg-gradient-to-b from-[#19D4D6] to-[#0C6566]"
                                ),
                                onClick: () => {
                                  o(e.currency),
                                    n(!0),
                                    x(),
                                    c(""),
                                    e.isEVM && m({ chainId: e.chainId });
                                },
                                children: [
                                  (0, a.jsx)(l.default, {
                                    src: e.image,
                                    height: 32,
                                    width: 32,
                                    className:
                                      "object-contain h-8 w-8 rounded-full",
                                    alt: e.title,
                                    unoptimized: !0,
                                  }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("p", {
                                        className: "text-base font-semibold",
                                        children: e.title,
                                      }),
                                      (0, a.jsx)("p", {
                                        className:
                                          "text-sm text-slate-300 text-medium",
                                        children: e.subtitle,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.title
                            )
                          ),
                          (0, a.jsx)("hr", { className: "bg-gray-800 my-2" }),
                          (0, a.jsx)($, {
                            item: B,
                            onClick: () => {
                              o(v.l.base),
                                n(!1),
                                k(B),
                                f(W),
                                p(!0),
                                N("chain"),
                                ["ETH", "BASE"].includes(r) ||
                                  c(v.l.eth.toUpperCase()),
                                m({ chainId: y.t.base });
                            },
                            isActive:
                              t === v.l.base && ["ETH", "BASE"].includes(r),
                            type: "chain",
                            option: "ETH" === r ? R : z,
                          }),
                          (0, a.jsx)($, {
                            item: A,
                            onClick: () => {
                              o(v.l.arb),
                                n(!1),
                                k(A),
                                f(M),
                                p(!0),
                                N("chain"),
                                ["ETH", "ARB"].includes(r) ||
                                  c(v.l.eth.toUpperCase()),
                                m({ chainId: y.t.base });
                            },
                            isActive:
                              t === v.l.arb && ["ETH", "ARB"].includes(r),
                            type: "chain",
                            option: "ETH" === r ? R : A,
                          }),
                          (0, a.jsx)($, {
                            item: C,
                            onClick: () => {
                              n(!1),
                                c(v.l.usdt.toUpperCase()),
                                k(C),
                                p(!0),
                                N("token"),
                                f(
                                  h.filter((e) =>
                                    [
                                      "eth",
                                      "bnb",
                                      "matic",
                                      "arb",
                                      "base",
                                    ].includes(e.currency)
                                  )
                                );
                            },
                            isActive: !s && r === v.l.usdt.toUpperCase(),
                            type: "token",
                            option: [
                              "eth",
                              "bnb",
                              "matic",
                              "arb",
                              "base",
                            ].includes(null == U ? void 0 : U.currency)
                              ? U
                              : void 0,
                          }),
                          (0, a.jsx)($, {
                            item: F,
                            onClick: () => {
                              n(!1),
                                c(v.l.usdc.toUpperCase()),
                                k(F),
                                p(!0),
                                N("token"),
                                f(
                                  h.filter((e) =>
                                    [
                                      "eth",
                                      "bnb",
                                      "matic",
                                      "arb",
                                      "base",
                                    ].includes(e.currency)
                                  )
                                );
                            },
                            isActive: !s && r === v.l.usdc.toUpperCase(),
                            type: "token",
                            option: [
                              "eth",
                              "bnb",
                              "matic",
                              "arb",
                              "base",
                            ].includes(null == U ? void 0 : U.currency)
                              ? U
                              : void 0,
                          }),
                        ],
                      }),
                ],
              }),
            })
          );
        };
      var M = s(11392),
        W = s(23599),
        z = s(8169);
      let _ = (e) => {
        let { handleBuy: t, isBuying: s } = e,
          { connected: l, publicKey: n, disconnect: c } = (0, M.v)();
        return (
          (0, i.useEffect)(() => {
            l &&
              n &&
              setTimeout(() => {
                z.T.logAction({
                  action: "VISIT",
                  isCompleted: !0,
                  ref: (null == n ? void 0 : n.toBase58()) || "",
                  wallet_address: (null == n ? void 0 : n.toBase58()) || "",
                });
              }, 2e3);
          }, [l, n]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className:
                  "relative flex items-center justify-center  mt-4 md:mt-6 btn-hover-gradient",
                children: l
                  ? (0, a.jsx)(r.$, {
                      disabled: s,
                      style: {
                        boxShadow:
                          "0px 8px 25px 0px #19D4D614, 0px -7px 20px 0px #FFFFFF4D inset",
                      },
                      onClick: () => {
                        t();
                      },
                      className:
                        "text-white w-full mt-4 h-14 text-lg lg:text-xl font-semibold bg-gradient-to-b from-[#19D4D6] to-[#0C6566] hover:bg-linear-to-b hover:from-[#19D4D6]/80 hover:to-[#0C6566]/80 rounded-[10px]",
                      children: s
                        ? (0, a.jsx)(u.A, { className: "w-4 animate-spin" })
                        : "Buy",
                    })
                  : (0, a.jsx)(W.x, {
                      className:
                        "flex items-center justify-center text-lg disabled:cursor-not-allowed w-full",
                      children: "Connect Wallet",
                    }),
              }),
              l &&
                (0, a.jsx)("p", {
                  className: "text-center my-4",
                  children: (0, a.jsxs)("span", {
                    className:
                      "cursor-pointer text-gray-300 hover:text-red-500",
                    onClick: () => c(),
                    children: [
                      "Disconnect [",
                      (0, S.O)((null == n ? void 0 : n.toBase58()) || ""),
                      "]",
                    ],
                  }),
                }),
            ],
          })
        );
      };
      var V = s(49494),
        Z = s(71292);
      let G = (e) => {
        let { handleBuy: t, isBuying: s } = e,
          { connected: l, address: n, disconnect: c } = (0, V.v)();
        return (
          (0, i.useEffect)(() => {
            l &&
              n &&
              setTimeout(() => {
                z.T.logAction({
                  action: "VISIT",
                  isCompleted: !0,
                  ref: n || "",
                  wallet_address: n || "",
                });
              }, 2e3);
          }, [l, n]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className:
                  "relative flex items-center justify-center  mt-4 md:mt-6 btn-hover-gradient",
                children: l
                  ? (0, a.jsx)(r.$, {
                      disabled: s,
                      style: {
                        boxShadow:
                          "0px 8px 25px 0px #19D4D614, 0px -7px 20px 0px #FFFFFF4D inset",
                      },
                      onClick: () => {
                        t();
                      },
                      className:
                        "text-white w-full mt-4 h-14 text-lg lg:text-xl font-semibold bg-gradient-to-b from-[#19D4D6] to-[#0C6566] hover:bg-linear-to-b hover:from-[#19D4D6]/80 hover:to-[#0C6566]/80 rounded-[10px]",
                      children: s
                        ? (0, a.jsx)(u.A, { className: "w-4 animate-spin" })
                        : "Buy",
                    })
                  : (0, a.jsx)(Z.K, {
                      style: { zIndex: 1 },
                      className:
                        "flex items-center justify-center text-lg disabled:cursor-not-allowed w-full",
                      children: "Connect Wallet",
                    }),
              }),
              l &&
                (0, a.jsx)("p", {
                  className: "text-center my-4",
                  children: (0, a.jsxs)("span", {
                    className:
                      "cursor-pointer text-gray-300 hover:text-red-200",
                    onClick: () => c(),
                    children: ["Disconnect [", (0, S.O)(n || ""), "]"],
                  }),
                }),
            ],
          })
        );
      };
      var q = s(92833);
      let H = {
          Shrimp: 500,
          Crab: 1e3,
          Octopus: 5e3,
          Fish: 1e4,
          Dolphin: 25e3,
          Shark: 5e4,
          Whale: 1e5,
        },
        J = {
          Beginner: 0,
          Shrimp: 5,
          Crab: 10,
          Octopus: 15,
          Fish: 20,
          Dolphin: 30,
          Shark: 40,
          Whale: 50,
        },
        X = {
          Shrimp: "Shrimp",
          Crab: "Crab",
          Octopus: "Octopus",
          Fish: "Fish",
          Dolphin: "Dolphin",
          Shark: "Shark",
          Whale: "Whale",
        },
        K = (e) => {
          let t = "Beginner",
            s = "Shrimp",
            a = Object.entries(H);
          if (e >= H.Whale) return { rank: (t = X.Whale), nextRank: (s = "") };
          for (let l = 0; l < a.length; l++) {
            let [n, i] = a[l];
            if (e < i) {
              (t = 0 === l ? "Beginner" : X[a[l - 1][0]]), (s = X[n]);
              break;
            }
          }
          return { rank: t, nextRank: s };
        },
        Q = {
          Beginner: { title: "No Reward", list: [] },
          Shrimp: {
            title: "Shrimp ($500-$999)",
            list: [
              "\uD83D\uDC49 +5% extra TAPZI on each purchase",
              "\uD83D\uDC49 Practice Arena (free matches)",
              "\uD83D\uDC49 Small surprise airdrops",
              "\uD83D\uDC49 +10% extra game credits (non-cash)",
            ],
          },
          Crab: {
            title: "Crab ($1,000-$4,999)",
            list: [
              "\uD83D\uDC49 +10% extra TAPZI on each purchase",
              "\uD83D\uDC49 Monthly casual tournaments",
              "\uD83D\uDC49 Early beta invites",
              "\uD83D\uDC49 Referral bonus: 2% per qualified referral",
              "\uD83D\uDC49 +20% extra game credits (non-cash)",
            ],
          },
          Octopus: {
            title: "Octopus ($5,000-$9,999)",
            list: [
              "\uD83D\uDC49 +15% extra TAPZI on each purchase",
              "\uD83D\uDC49 VIP tournaments + 48-hour early access",
              "\uD83D\uDC49 EEP Weight: 1x the Seasonal Rewards Pool",
              "\uD83D\uDC49 Referral bonus: 4% per qualified referral",
              "\uD83D\uDC49 +30% extra game credits (non-cash)",
            ],
          },
          Fish: {
            title: "Fish ($10,000-$24,999)",
            list: [
              "\uD83D\uDC49 +20% extra TAPZI on each purchase",
              "\uD83D\uDC49 EEP Weight: 2.5x of the Seasonal Rewards Pool",
              "\uD83D\uDC49 Private roundtables / AMAs",
              "\uD83D\uDC49 Access to variable staking rewards",
              "\uD83D\uDC49 Referral bonus: 6% per qualified referral",
              "\uD83D\uDC49 +40% extra game credits (non-cash)",
            ],
          },
          Dolphin: {
            title: "Dolphin ($25,000-$49,999)",
            list: [
              "\uD83D\uDC49 +30% extra TAPZI on each purchase",
              "\uD83D\uDC49 EEP Weight: 4x of the Seasonal Rewards Pool",
              "\uD83D\uDC49 Legendary tournaments + VIP event access (limited spots)",
              "\uD83D\uDC49 Priority access to variable staking",
              "\uD83D\uDC49 Referral bonus: 7% per qualified referral",
              "\uD83D\uDC49 +50% extra game credits (non-cash)",
            ],
          },
          Shark: {
            title: "Shark ($50,000-$99,999)",
            list: [
              "\uD83D\uDC49 +40% extra TAPZI on each purchase",
              "\uD83D\uDC49 EEP Weight: 6x of the Seasonal Rewards Pool",
              "\uD83D\uDC49 Elite retreats/strategy sessions (limited) + online editions",
              "\uD83D\uDC49 Priority staking with occasional boosters",
              "\uD83D\uDC49 Partner spotlight (co-branded, approval-based)",
              "\uD83D\uDC49 Referral bonus: 8% per qualified referral",
              "\uD83D\uDC49 +75% extra game credits (non-cash)",
            ],
          },
          Whale: {
            title: "Whale ($100,000+)",
            list: [
              "\uD83D\uDC49 +50% extra TAPZI on each purchase",
              "\uD83D\uDC49 EEP Weight: 10x of the Seasonal Rewards Pool",
              "\uD83D\uDC49 Priority for major event sponsorship/co-host slots (subject to availability)",
              "\uD83D\uDC49 Access to private seasonal staking pools",
              "\uD83D\uDC49 Whale badge in the Tapzi app",
              "\uD83D\uDC49 Referral bonus: 10% per qualified referral",
              "\uD83D\uDC49 +100% extra game credits (non-cash)",
            ],
          },
        },
        Y = {
          Beginner: "/coin.webp",
          Octopus: "/image/rank/octopus.svg",
          Crab: "/image/rank/crab.svg",
          Dolphin: "/image/rank/dolphin.svg",
          Shark: "/image/rank/shark.svg",
          Whale: "/image/rank/whale.svg",
          Fish: "/image/rank/fish.svg",
          Shrimp: "/image/rank/shrimp.svg",
        };
      var ee = s(34156);
      function et(e) {
        let { ...t } = e;
        return (0, a.jsx)(ee.bL, { "data-slot": "popover", ...t });
      }
      function es(e) {
        let { ...t } = e;
        return (0, a.jsx)(ee.l9, { "data-slot": "popover-trigger", ...t });
      }
      function ea(e) {
        let { className: t, align: s = "center", sideOffset: l = 4, ...n } = e;
        return (0, a.jsx)(ee.ZL, {
          children: (0, a.jsx)(ee.UC, {
            "data-slot": "popover-content",
            align: s,
            sideOffset: l,
            className: (0, S.cn)(
              "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
              t
            ),
            ...n,
          }),
        });
      }
      let el = (e) => {
        let {
            children: t,
            rank: s = "Shrimp",
            content: n,
            popoverContentClassName: r,
          } = e,
          [c, o] = (0, i.useState)(!1),
          d = Q[s];
        return d
          ? (0, a.jsxs)(et, {
              open: c,
              onOpenChange: o,
              children: [
                (0, a.jsx)(es, {
                  onMouseEnter: () => {
                    o(!0);
                  },
                  asChild: !0,
                  children: t,
                }),
                (0, a.jsx)(ea, {
                  onMouseLeave: () => o(!1),
                  className: (0, S.cn)(
                    "w-5/6 sm:w-80 lg:w-[420px] bg-[#07012A] border border-[#312752] rounded-lg",
                    r
                  ),
                  children:
                    n ||
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, a.jsx)(l.default, {
                              src: Y[s],
                              alt: "icon",
                              height: 32,
                              width: 32,
                              className: "h-8 w-auto object-contain",
                            }),
                            (0, a.jsx)("h3", {
                              className: "text-lg font-bold",
                              children: d.title,
                            }),
                          ],
                        }),
                        (0, a.jsx)("ul", {
                          className: "space-y-2 pl-2 mt-4",
                          children: d.list.map((e, t) =>
                            (0, a.jsx)(
                              "li",
                              { className: "font-medium", children: e },
                              "".concat(d.title, "-").concat(t)
                            )
                          ),
                        }),
                      ],
                    }),
                }),
              ],
            })
          : null;
      };
      var en = s(58019);
      let ei = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
          return Math.ceil(e * Math.pow(10, t)) / Math.pow(10, t);
        },
        er = (e) => {
          let {
              className: t,
              setInput: s,
              rank: n,
              nextRank: i,
              amount: c,
              currency: o,
              token: x,
              isNative: h,
              prices: u,
              inputState: p,
            } = e,
            b = H[i] || 0,
            g = b - c,
            f = () => {
              let e = "",
                t = 0;
              if (!h && ["usdc", "usdt"].includes(x.toLowerCase()))
                (t = ei(g, 2)), (e = "".concat(t, " ").concat(x));
              else if (x.toLowerCase() === en.l.eth || o === en.l.eth)
                (t = ei(g / ((null == u ? void 0 : u.eth) || 1), 4)),
                  (e = "".concat(t, " ").concat(o.toUpperCase()));
              else
                switch (o) {
                  case en.l.bnb:
                    (t = ei(g / ((null == u ? void 0 : u.bnb) || 1), 4)),
                      (e = "".concat(t, " ").concat(o.toUpperCase()));
                    break;
                  case en.l.matic:
                    (t = ei(g / ((null == u ? void 0 : u.matic) || 1), 3)),
                      (e = "".concat(t, " ").concat(o.toUpperCase()));
                    break;
                  case en.l.sol:
                    (t = ei(g / ((null == u ? void 0 : u.sol) || 1), 4)),
                      (e = "".concat(t, " ").concat(o.toUpperCase()));
                    break;
                  case en.l.trx:
                    (t = ei(g / ((null == u ? void 0 : u.trx) || 1), 3)),
                      (e = "".concat(t, " ").concat(o.toUpperCase()));
                    break;
                  case en.l.arb:
                    x.toLowerCase() === en.l.arb &&
                      ((t = ei(g / ((null == u ? void 0 : u.arb) || 1), 3)),
                      (e = "".concat(t, " ").concat(x)));
                    break;
                  case en.l.base:
                    x.toLowerCase() === en.l.base &&
                      ((t = ei(g / ((null == u ? void 0 : u.base) || 1), 3)),
                      (e = "".concat(t, " ").concat(x)));
                    break;
                  case en.l.card:
                    (t = ei(g, 2)), (e = "$".concat(t.toString()));
                }
              return { amountWithCurrency: e, amount: t };
            },
            j = () => {
              let { amount: e } = f(),
                t = +(p || 0) + e;
              o === en.l.card || ["usdc", "usdt"].includes(x.toLowerCase())
                ? s(t.toFixed(2))
                : s(ei(t, 4).toString());
            };
          return (0, a.jsxs)("div", {
            className: (0, S.cn)(
              "w-full rounded-xl border border-[#312752] bg-[#07012A] p-4 mt-4",
              t
            ),
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, a.jsx)(l.default, {
                        src: "Beginner" === n ? Y.Beginner : Y[n] || Y.Shrimp,
                        alt: "icon",
                        height: 24,
                        width: 24,
                        className: "h-8 w-8 sm:h-10 sm:w-10 object-contain",
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsxs)("p", {
                            className: "flex items-center gap-1",
                            children: [
                              (0, a.jsx)("span", {
                                className: "text-sm",
                                children:
                                  "Beginner" === n
                                    ? "No Reward"
                                    : (0, a.jsx)("span", {
                                        className: "hidden sm:inline-block",
                                        children: "Earned",
                                      }),
                              }),
                              "Beginner" !== n &&
                                (0, a.jsx)(el, {
                                  rank: n,
                                  children: (0, a.jsx)(m.A, {
                                    className: "h-4 cursor-pointer",
                                  }),
                                }),
                            ],
                          }),
                          (0, a.jsx)("p", {
                            className: "font-semibold text-base sm:text-lg",
                            children: n,
                          }),
                        ],
                      }),
                    ],
                  }),
                  "Whale" !== n &&
                    (0, a.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsxs)("p", {
                              className: "flex items-center gap-1",
                              children: [
                                (0, a.jsx)("span", {
                                  className: "text-sm",
                                  children: "Unlocked",
                                }),
                                (0, a.jsx)(el, {
                                  rank: i,
                                  children: (0, a.jsx)(m.A, {
                                    className: "h-4 cursor-pointer",
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "font-semibold text-base sm:text-lg text-left",
                              children: i,
                            }),
                          ],
                        }),
                        (0, a.jsx)(l.default, {
                          src: Y[i] || Y.Turtle,
                          alt: "icon",
                          height: 24,
                          width: 24,
                          className: "h-8 w-8 sm:h-10 sm:w-10 object-contain",
                        }),
                      ],
                    }),
                ],
              }),
              (0, a.jsx)(d.k, {
                value: "Whale" !== n ? (c / b) * 100 || 0 : 100,
                className: "h-2 rounded-[30px] mt-2 bg-white/10",
                indicatorClassName:
                  "bg-gradient-to-r from-[#FF7C48] to-[#FF415B] rounded-full",
              }),
              "Whale" !== n &&
                (0, a.jsxs)("div", {
                  className: "flex items-center justify-between gap-2 mt-3",
                  children: [
                    (0, a.jsxs)("p", {
                      className: "text-[#2FD9FF] text-sm md:text-base",
                      children: [
                        "Add ",
                        f().amountWithCurrency,
                        " More To Unlock",
                        " ",
                        i,
                      ],
                    }),
                    (0, a.jsxs)(r.$, {
                      onClick: () => j(),
                      className:
                        "h-[34px] text-sm md:text-base rounded-sm bg-gradient-to-r from-[#304AFF] to-[#733CFF] px-4 md:px-6 w-fit text-white font-semibold",
                      children: ["Unlock ", i],
                    }),
                  ],
                }),
            ],
          });
        };
      var ec = s(19564),
        eo = s(64368);
      let ed = () => {
        let { open: e } = (0, h.o1)(),
          { data: t } = (0, f.Q)(),
          { address: s, isConnected: n } = (0, p.F)(),
          c = (0, b.i)(),
          { fetchOrders: C, orderBalance: F, bonus: D } = (0, j.A)(),
          { switchChain: A } = (0, g.R)(),
          { connected: B, publicKey: P } = (0, M.v)(),
          { connected: E, address: T } = (0, V.v)(),
          I = (0, eo.k)((e) => e.rankProfile),
          [R, L] = (0, i.useState)(""),
          [$, O] = (0, i.useState)(v.l.card),
          [W, Z] = (0, i.useState)(!1),
          [H, X] = (0, i.useState)(!0),
          [Q, Y] = (0, i.useState)(""),
          { round: ee, fetchRound: et } = (0, N.A)(),
          es = () => {
            switch ($) {
              case v.l.bnb:
                if (["usdc", "usdt"].includes(Q.toLowerCase())) return +R;
                return R * ((null == t ? void 0 : t.bnb) || 0);
              case v.l.eth:
                if (["usdc", "usdt"].includes(Q.toLowerCase())) return +R;
                return R * ((null == t ? void 0 : t.eth) || 0);
              case v.l.matic:
                if (["usdc", "usdt"].includes(Q.toLowerCase())) return +R;
                return R * ((null == t ? void 0 : t.matic) || 0);
              case v.l.sol:
                if (["usdc", "usdt"].includes(Q.toLowerCase())) return +R;
                return R * ((null == t ? void 0 : t.sol) || 0);
              case v.l.trx:
                if (["usdc", "usdt"].includes(Q.toLowerCase()) || !H) return +R;
                return R * ((null == t ? void 0 : t.trx) || 0);
              case v.l.arb:
                if (Q.toLowerCase() === v.l.eth)
                  return R * ((null == t ? void 0 : t.eth) || 0);
                if (Q.toLowerCase() === v.l.arb)
                  return R * ((null == t ? void 0 : t.arb) || 0);
                return +R;
              case v.l.base:
                if (Q.toLowerCase() === v.l.eth)
                  return R * ((null == t ? void 0 : t.eth) || 0);
                if (Q.toLowerCase() === v.l.base)
                  return R * ((null == t ? void 0 : t.base) || 0);
                return +R;
              case v.l.usdt:
              case v.l.usdc:
              case v.l.card:
                return +R;
              default:
                return 0;
            }
          },
          ea = es(),
          {
            isBuying: en,
            handleBuy: ei,
            tokenAmount: ed,
            error: ex,
          } = (0, w.A)({
            currency: $,
            inputState: R,
            bonuses: [],
            handleRefetch: () => {
              C(),
                et(),
                ec.queryClient.invalidateQueries({
                  queryKey: ["get-profile-rank"],
                });
            },
            pricesPerUnit: t || f.B,
            round: ee,
            isNative: H,
            getEquivalentUSD: es,
            token: Q,
          }),
          eh =
            (c !== y.t.eth && $ === v.l.eth) ||
            (c !== y.t.bsc && $ === v.l.bnb) ||
            (c !== y.t.polygon && $ === v.l.matic);
        (0, i.useEffect)(() => {
          let e = ["eth", "bnb", "matic", "card", "arb", "base"].includes($),
            t = $ === v.l.sol,
            a = $ === v.l.trx;
          return n && e
            ? void C(s)
            : B && t
            ? void C(null == P ? void 0 : P.toBase58())
            : E && a
            ? void C(T || "")
            : void 0;
        }, [n, $, E, B]);
        let em =
            (Number((null == ee ? void 0 : ee.raised) || 0).toFixed(2) /
              (null == ee ? void 0 : ee.total_target)) *
            100,
          eu = (e) => {
            O(e);
          };
        (0, i.useEffect)(() => {
          n &&
            s &&
            n &&
            setTimeout(() => {
              z.T.logAction({
                action: "VISIT",
                isCompleted: !0,
                ref: s || "",
                wallet_address: s || "",
              });
            }, 7e3);
        }, [n, s]),
          (0, i.useEffect)(() => {
            L((e) =>
              $ === v.l.card || $ === v.l.usdt || $ === v.l.matic
                ? "100"
                : $ === v.l.eth || $ === v.l.bnb || $ === v.l.sol
                ? "1"
                : e
            );
          }, [$]);
        let ep = +((null == I ? void 0 : I.total_purchase_usd) || 0) + ea,
          { rank: eb, nextRank: eg } = K(ep);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(U, {
              isOpen: W,
              onClose: () => Z(!1),
              onSelect: eu,
              activeCurrency: $,
              isNative: H,
              setIsNative: X,
              token: Q,
              setToken: Y,
            }),
            (0, a.jsx)("div", {}),
          ],
        });
      };
      var ex = s(4119),
        eh = s(23204);
      let em = (0, n.default)(
          () =>
            Promise.all([s.e(9252), s.e(5716), s.e(4562)]).then(
              s.bind(s, 34562)
            ),
          { loadableGenerated: { webpack: () => [34562] } }
        ),
        eu = (0, n.default)(
          () =>
            Promise.all([s.e(8284), s.e(1987), s.e(1133)]).then(
              s.bind(s, 41133)
            ),
          { loadableGenerated: { webpack: () => [41133] } }
        ),
        ep = () =>
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("div", {
              className: "mt-16 md:mt-32 container relative min-h-[400px]",
              children: [
                (0, a.jsx)("div", { className: "flex justify-center" }),
                (0, a.jsxs)("h1", {
                  className:
                    "text-center font-normal text-3xl md:text-5xl lg:text-6xl xl:text-7xl",
                  children: [
                    "World's 1",
                    (0, a.jsx)("sup", { children: "st" }),
                    " Web3 Gaming Platform",
                    (0, a.jsx)("br", { className: "hidden sm:block" }),
                    " Where",
                    " ",
                    (0, a.jsx)("span", {
                      className: "font-medium text-primary-green",
                      children: "Skill Decides the Winner",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "flex justify-center",
                  children: (0, a.jsxs)("div", {
                    className: "mt-8 md:bg-black/10 rounded-lg p-4 w-max",
                    children: [
                      (0, a.jsx)("div", {
                        className: "",
                        children: (0, a.jsx)("p", {
                          className:
                            "text-[20px] text-[#fff] leading-[185%] text-center font-[400]",
                          children: "Audited and Approved by",
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "!mt-[8px] flex justify-center items-center space-x-[20px]",
                        children: [
                          (0, a.jsx)("img", {
                            className:
                              "md:h-8 h-6 w-auto opacity-50 md:opacity-75",
                            alt: "",
                            src: "/image/approved-1.svg",
                          }),
                          (0, a.jsx)("img", {
                            className:
                              "md:h-8 h-6 w-auto opacity-50 md:opacity-75",
                            alt: "",
                            src: "/image/approved-2-white.svg",
                          }),
                          (0, a.jsx)("img", {
                            className:
                              "md:h-8 h-6 w-auto opacity-50 md:opacity-75",
                            alt: "",
                            src: "/image/certik-logotype.svg",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, a.jsxs)("div", {
                  className:
                    "flex justify-center mt-8 sm:mt-10 md:mt-12 gap-4 md:gap-6",
                  children: [
                    (0, a.jsx)(r.$, {
                      style: {
                        boxShadow:
                          "0px 8px 25px 0px #694DFBA6, 0px -7px 20px 0px #FFFFFF4D inset",
                      },
                      className:
                        "rounded-lg bg-primary-violet text-white h-12 lg:h-14 text-lg lg:text-xl font-semibold px-6 md:px-10 hover:bg-primary-violet/80",
                      asChild: !0,
                      children: (0, a.jsx)(o(), {
                        target: "_blank",
                        href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x27e0f917d9df4d1febc7593bffb8bb09c63e44d6",
                        children: "Buy $TAPZI",
                      }),
                    }),
              
                  ],
                }),
                (0, a.jsx)(eu, {
                  children: (0, a.jsx)(ex.S, {
                    endpoint: eh.tN,
                    children: (0, a.jsx)(em, { children: (0, a.jsx)(ed, {}) }),
                  }),
                }),
              ],
            }),
          });
      var eb = s(12467);
      let eg = [
          "/image/landing/as-seen-in/binance.svg",
          "/image/landing/as-seen-in/cryptonews.svg",
          "/image/landing/as-seen-in/bitcoinst.svg",
          "/image/landing/as-seen-in/cointelegraph.svg",
          "/image/landing/as-seen-in/cryptonews.svg",
          "/image/landing/as-seen-in/nasdaq.svg",
          "/image/landing/as-seen-in/techopedia.svg",
        ],
        ef = () =>
          (0, a.jsxs)("div", {
            className: "pt-10 md:pt-20 container relative",
            children: [
              (0, a.jsx)("h2", {
                className: "text-center text-2xl md:text-3xl uppercase",
                children: "Media Partners",
              }),
              (0, a.jsx)("div", {
                className: "mt-6 overflow-hidden",
                children: (0, a.jsx)(ej, {
                  style: { animation: "scroll 20s forwards linear infinite" },
                  children: [...eg, ...eg, ...eg, ...eg].map((e, t) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: (0, S.cn)(
                          "h-fit py-4 md:py-6 px-6 md:px-10 w-fit  min-w-20 gap-2 border border-r-0 border-dashed flex justify-center",
                          t === eg.length - 1 && "border-r"
                        ),
                        children: (0, a.jsx)(l.default, {
                          alt: "",
                          src: e,
                          height: 24,
                          width: 24,
                          className: "h-[25px] w-[100px] object-fit-contain",
                        }),
                      },
                      "brand-".concat(t)
                    )
                  ),
                }),
              }),
            ],
          }),
        ej = (e) => {
          let { children: t, ...s } = e;
          return (0, a.jsx)("div", {
            className: "flex justify-around shrink-0 gap-0 w-max",
            ...s,
            children: t,
          });
        },
        ev = (0, n.default)(() => s.e(4767).then(s.bind(s, 34767)), {
          loadableGenerated: { webpack: () => [34767] },
        }),
        eN = (0, n.default)(
          () => Promise.all([s.e(2900), s.e(4441)]).then(s.bind(s, 34441)),
          { loadableGenerated: { webpack: () => [34441] } }
        ),
        ew = (0, n.default)(() => s.e(181).then(s.bind(s, 60181)), {
          loadableGenerated: { webpack: () => [60181] },
          ssr: !1,
        }),
        ey = (0, n.default)(() => s.e(3935).then(s.bind(s, 63935)), {
          loadableGenerated: { webpack: () => [63935] },
          ssr: !1,
        }),
        ek = (0, n.default)(() => s.e(9579).then(s.bind(s, 59579)), {
          loadableGenerated: { webpack: () => [59579] },
          ssr: !1,
        }),
        eC = (0, n.default)(() => s.e(5362).then(s.bind(s, 15362)), {
          loadableGenerated: { webpack: () => [15362] },
          ssr: !1,
        }),
        eF = (0, n.default)(
          () =>
            Promise.all([s.e(4935), s.e(3880), s.e(340), s.e(6985)]).then(
              s.bind(s, 16985)
            ),
          { loadableGenerated: { webpack: () => [16985] }, ssr: !1 }
        ),
        eS = (0, n.default)(
          () =>
            Promise.all([s.e(2900), s.e(1996), s.e(4441), s.e(9980)]).then(
              s.bind(s, 59980)
            ),
          { loadableGenerated: { webpack: () => [59980] }, ssr: !1 }
        ),
        eD = (0, n.default)(
          () =>
            Promise.all([s.e(2900), s.e(1996), s.e(4441), s.e(543)]).then(
              s.bind(s, 90543)
            ),
          { loadableGenerated: { webpack: () => [90543] }, ssr: !1 }
        ),
        eA = (0, n.default)(() => s.e(4516).then(s.bind(s, 34516)), {
          loadableGenerated: { webpack: () => [34516] },
          ssr: !1,
        }),
        eB = (0, n.default)(() => s.e(2790).then(s.bind(s, 52790)), {
          loadableGenerated: { webpack: () => [52790] },
          ssr: !1,
        }),
        eP = (0, n.default)(() => Promise.resolve().then(s.bind(s, 65057)), {
          loadableGenerated: { webpack: () => [65057] },
        });
      function eE() {
        return (0, a.jsxs)("div", {
          className: "relative",
          children: [
            (0, a.jsx)(l.default, {
              alt: "background",
              src: "/assets/hero-bg.png",
              height: 500,
              width: 1400,
              unoptimized: !0,
              className:
                "absolute hidden md:block w-full h-[60vh] md:h-auto left-0 top-0 z-0 object-fit-cover md:object-fit-contain rotate-180 md:rotate-0",
            }),
            (0, a.jsx)("img", {
              alt: "background",
              src: "/assets/background/mobile-bg.png",
              className:
                "absolute block md:hidden w-[100vw] h-auto left-0 top-0",
            }),
            (0, a.jsxs)("div", {
              className: "relative",
              children: [
                (0, a.jsx)(eb.default, {}),
                (0, a.jsx)(ep, {}),
                (0, a.jsx)(ef, {}),
                (0, a.jsxs)("div", {
                  className: "bg-background mt-4 md:mt-10",
                  children: [
                    (0, a.jsx)(ev, {}),
                    (0, a.jsx)(eN, {}),
                    (0, a.jsx)(ew, {}),
                    (0, a.jsx)(ey, {}),
                    (0, a.jsx)(eB, {}),
                    (0, a.jsx)(ek, {}),
                    (0, a.jsx)(eC, {}),
                    (0, a.jsx)(eF, {}),
                    (0, a.jsx)(eS, {}),
                    (0, a.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, a.jsx)("img", {
                          src: "/assets/background/gray-triangle.png",
                          alt: "",
                          className: "absolute w-full h-[200px] top-0 left-0",
                        }),
                        (0, a.jsx)(eD, {}),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, a.jsx)("img", {
                          src: "/assets/background/blue-triangle.png",
                          alt: "",
                          className:
                            "absolute w-full  h-[200px] bottom-0 right-0",
                        }),
                        (0, a.jsx)(eA, {}),
                      ],
                    }),
                    (0, a.jsx)(eP, {}),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    64368: (e, t, s) => {
      "use strict";
      s.d(t, { k: () => a });
      let a = (0, s(65521).v)()((e) => ({
        user: null,
        setUser: (t) => e({ user: t }),
        rankProfile: null,
        setRankProfile: (t) => e({ rankProfile: t }),
      }));
    },
    72637: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => i });
      var a = s(45530),
        l = s(12115),
        n = s(2145);
      let i = () => {
        let [e, t] = (0, l.useState)([]),
          [s, i] = (0, l.useState)(0),
          [r, c] = (0, l.useState)(0),
          { address: o } = (0, n.F)(),
          [d, x] = (0, l.useState)(!1),
          [h, m] = (0, l.useState)(!1),
          u = async (e) => {
            var s;
            m(!0),
              fetch((0, a.I)("api/filter_orders"), {
                method: "POST",
                body: JSON.stringify({
                  from: null == (s = e || o) ? void 0 : s.toLowerCase(),
                }),
              })
                .then((e) => e.json())
                .then((e) => {
                  t(() => (null == e ? void 0 : e.orders));
                })
                .catch((e) => {})
                .finally(() => {
                  m(!1), x(!0);
                });
          };
        return (
          (0, l.useEffect)(() => {
            if (e && e.length > 0) {
              var t, s;
              let a =
                  null == (t = e.filter((e) => "PA" === e.status))
                    ? void 0
                    : t.reduce((e, t, s) => e + +t.token_quantity, 0),
                l =
                  null == (s = e.filter((e) => "PA" === e.status))
                    ? void 0
                    : s.reduce((e, t, s) => e + +(t.bonus || 0), 0);
              i(a), c(l);
            }
          }, [e]),
          {
            orders: e,
            fetchOrders: u,
            isLoading: h,
            resetOrders: () => {
              t([]), x(!1);
            },
            isFetched: d,
            orderBalance: s,
            bonus: r,
          }
        );
      };
    },
    92833: (e, t, s) => {
      "use strict";
      function a(e) {
        if (0 === e) return 0;
        let t = Math.pow(10, Math.floor(Math.log10(e)) - 1);
        return Math.ceil(e / t) * t;
      }
      s.d(t, { p: () => a });
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [
        9268, 8956, 2145, 7598, 4134, 6874, 4709, 6671, 6124, 6738, 6708, 8978,
        1670, 3387, 8655, 4404, 5799, 8291, 8441, 1684, 7358,
      ],
      () => t(7676)
    ),
      (_N_E = e.O());
  },
]);
