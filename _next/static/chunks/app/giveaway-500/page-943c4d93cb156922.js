(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [146],
  {
    10125: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => l });
      var n = r(95155),
        a = r(69243),
        s = r.n(a);
      function l() {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("a", {
              className:
                "e-widget no-button text-[16px] font-[400] text-[#fff] hover:border-b-[#E5AE00] transition duration-300 mx-auto block",
              href: "https://gleam.io/AddxI/tapzi-500000-giveaway",
              rel: "nofollow",
              children: "\uD83D\uDE80 Tapzi $500,000 Giveaway! \uD83D\uDE80",
            }),
            (0, n.jsx)(s(), {
              type: "text/javascript",
              src: "https://widget.gleamjs.io/e.js",
              async: !0,
            }),
          ],
        });
      }
    },
    12467: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => b });
      var n = r(95155),
        a = r(6874),
        s = r.n(a),
        l = r(12115),
        i = r(30285),
        o = r(55095),
        d = r(45799),
        c = r(86124),
        u = r(59434),
        f = r(2145),
        p = r(56671),
        h = r(66766),
        x = r(35695);
      let m = [
          { name: "Home", href: "/" },
          { name: "How to buy", href: "/how-to-buy" },
          { name: "Games", href: "/game" },
        ],
        b = () => {
          let [e, t] = (0, l.useState)(!1),
            { open: r } = (0, c.o1)(),
            { address: a, isConnected: b } = (0, f.F)(),
            g = (0, x.useRouter)();
          return (
            (0, l.useEffect)(() => {
              let e = () => {
                t(window.scrollY > 200);
              };
              return (
                window.addEventListener("scroll", e),
                () => window.removeEventListener("scroll", e)
              );
            }, []),
            (0, n.jsx)("nav", {
              className: (0, u.cn)(
                "max-w-[1600px] mx-auto pr-2 lg:px-6 py-4 relative",
                "sticky top-0 z-50",
                e && "bg-background/50 transition-all duration-300"
              ),
              style: { backdropFilter: "blur(5px)" },
              children: (0, n.jsxs)("div", {
                className: "flex gap-2 items-center",
                children: [
                  (0, n.jsx)(d.A, {
                    children: (0, n.jsx)("div", {
                      className: "flex flex-wrap gap-4 mt-4 justify-center",
                      children: (0, n.jsxs)(i.$, {
                        className:
                          "font-semibold text-base h-10 cursor-pointer rounded-md flex md:hidden flex-nowrap",
                        variant: "ghost",
                        onClick: () => {
                          r();
                        },
                        style: {
                          boxShadow:
                            "0px 10px 45px 0px #FFFFFF26, 0px -7px 20px 0px #FFFFFF4D inset",
                          borderRadius: "10px",
                        },
                        children: [
                          (0, n.jsx)(o.A, { className: "w-4" }),
                          " ",
                          a ? (0, u.O)(a) : "Connect Wallet",
                        ],
                      }),
                    }),
                  }),
                  (0, n.jsx)(s(), {
                    href: "/",
                    children: (0, n.jsx)(h.default, {
                      src: "/logo.webp",
                      className: "h-8 md:h-12 w-auto object-fit-contain",
                      width: 100,
                      height: 100,
                      alt: "Logo",
                    }),
                  }),
                  (0, n.jsx)("div", { className: "flex-grow" }),
                  (0, n.jsxs)("div", {
                    className: "text-lg items-center gap-6 hidden lg:flex",
                    children: [
                      m.map((e) =>
                        (0, n.jsx)(
                          s(),
                          {
                            className: (0, u.cn)(
                              "hover:underline",
                              e.className
                            ),
                            ...("#" === e.href
                              ? {
                                  href: "#",
                                  onClick: () => {
                                    p.o.info("Coming soon !", {
                                      duration: 2e3,
                                      position: "top-center",
                                    });
                                  },
                                }
                              : {
                                  href: e.href,
                                  target: e.href.startsWith("http")
                                    ? "_blank"
                                    : "_self",
                                }),
                            children: e.name,
                          },
                          e.name
                        )
                      ),
                      (0, n.jsx)(s(), {
                        href: "https://docs.tapziwinner.org/",
                        target: "_blank",
                        className: "hover:underline",
                        children: "Docs",
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", { className: "flex-grow" }),
                  (0, n.jsxs)("div", {
                    className: "flex items-center gap-4",
                    children: [
                      (0, n.jsx)(i.$, {
                        onClick: () => {
                          b
                            ? g.push("/dashboard")
                            : g.push("https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon", { scroll: !0 });
                        },
                        style: {
                          boxShadow:
                            "0px 8px 25px 0px #694DFBA6, 0px -7px 20px 0px #FFFFFF4D inset",
                        },
                        className:
                          "rounded-lg bg-primary-violet text-white h-12 lg:h-14 text-lg lg:text-xl font-semibold px-6 md:px-10 hover:bg-primary-violet/80",
                        children: a ? "Dashboard" : "Buy Now",
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        };
    },
    35695: (e, t, r) => {
      "use strict";
      var n = r(18999);
      r.o(n, "usePathname") &&
        r.d(t, {
          usePathname: function () {
            return n.usePathname;
          },
        }),
        r.o(n, "useRouter") &&
          r.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          }),
        r.o(n, "useSearchParams") &&
          r.d(t, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          });
    },
    42714: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "setAttributesFromProps", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv",
          noModule: "noModule",
        },
        n = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ];
      function a(e) {
        return ["async", "defer", "noModule"].includes(e);
      }
      function s(e, t) {
        for (let [s, l] of Object.entries(t)) {
          if (!t.hasOwnProperty(s) || n.includes(s) || void 0 === l) continue;
          let i = r[s] || s.toLowerCase();
          "SCRIPT" === e.tagName && a(i)
            ? (e[i] = !!l)
            : e.setAttribute(i, String(l)),
            (!1 === l ||
              ("SCRIPT" === e.tagName && a(i) && (!l || "false" === l))) &&
              (e.setAttribute(i, ""), e.removeAttribute(i));
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    69243: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return g;
          },
          handleClientScriptLoad: function () {
            return x;
          },
          initScriptLoader: function () {
            return m;
          },
        });
      let n = r(88229),
        a = r(6966),
        s = r(95155),
        l = n._(r(47650)),
        i = a._(r(12115)),
        o = r(82830),
        d = r(42714),
        c = r(92374),
        u = new Map(),
        f = new Set(),
        p = (e) => {
          if (l.default.preinit)
            return void e.forEach((e) => {
              l.default.preinit(e, { as: "style" });
            });
          {
            let t = document.head;
            e.forEach((e) => {
              let r = document.createElement("link");
              (r.type = "text/css"),
                (r.rel = "stylesheet"),
                (r.href = e),
                t.appendChild(r);
            });
          }
        },
        h = (e) => {
          let {
              src: t,
              id: r,
              onLoad: n = () => {},
              onReady: a = null,
              dangerouslySetInnerHTML: s,
              children: l = "",
              strategy: i = "afterInteractive",
              onError: o,
              stylesheets: c,
            } = e,
            h = r || t;
          if (h && f.has(h)) return;
          if (u.has(t)) {
            f.add(h), u.get(t).then(n, o);
            return;
          }
          let x = () => {
              a && a(), f.add(h);
            },
            m = document.createElement("script"),
            b = new Promise((e, t) => {
              m.addEventListener("load", function (t) {
                e(), n && n.call(this, t), x();
              }),
                m.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              o && o(e);
            });
          s
            ? ((m.innerHTML = s.__html || ""), x())
            : l
            ? ((m.textContent =
                "string" == typeof l ? l : Array.isArray(l) ? l.join("") : ""),
              x())
            : t && ((m.src = t), u.set(t, b)),
            (0, d.setAttributesFromProps)(m, e),
            "worker" === i && m.setAttribute("type", "text/partytown"),
            m.setAttribute("data-nscript", i),
            c && p(c),
            document.body.appendChild(m);
        };
      function x(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, c.requestIdleCallback)(() => h(e));
            })
          : h(e);
      }
      function m(e) {
        e.forEach(x),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            f.add(t);
          });
      }
      function b(e) {
        let {
            id: t,
            src: r = "",
            onLoad: n = () => {},
            onReady: a = null,
            strategy: d = "afterInteractive",
            onError: u,
            stylesheets: p,
            ...x
          } = e,
          {
            updateScripts: m,
            scripts: b,
            getIsSsr: g,
            appDir: y,
            nonce: v,
          } = (0, i.useContext)(o.HeadManagerContext),
          w = (0, i.useRef)(!1);
        (0, i.useEffect)(() => {
          let e = t || r;
          w.current || (a && e && f.has(e) && a(), (w.current = !0));
        }, [a, t, r]);
        let _ = (0, i.useRef)(!1);
        if (
          ((0, i.useEffect)(() => {
            if (!_.current) {
              if ("afterInteractive" === d) h(e);
              else
                "lazyOnload" === d &&
                  ("complete" === document.readyState
                    ? (0, c.requestIdleCallback)(() => h(e))
                    : window.addEventListener("load", () => {
                        (0, c.requestIdleCallback)(() => h(e));
                      }));
              _.current = !0;
            }
          }, [e, d]),
          ("beforeInteractive" === d || "worker" === d) &&
            (m
              ? ((b[d] = (b[d] || []).concat([
                  { id: t, src: r, onLoad: n, onReady: a, onError: u, ...x },
                ])),
                m(b))
              : g && g()
              ? f.add(t || r)
              : g && !g() && h(e)),
          y)
        ) {
          if (
            (p &&
              p.forEach((e) => {
                l.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === d)
          )
            if (!r)
              return (
                x.dangerouslySetInnerHTML &&
                  ((x.children = x.dangerouslySetInnerHTML.__html),
                  delete x.dangerouslySetInnerHTML),
                (0, s.jsx)("script", {
                  nonce: v,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...x, id: t }]) +
                      ")",
                  },
                })
              );
            else
              return (
                l.default.preload(
                  r,
                  x.integrity
                    ? {
                        as: "script",
                        integrity: x.integrity,
                        nonce: v,
                        crossOrigin: x.crossOrigin,
                      }
                    : { as: "script", nonce: v, crossOrigin: x.crossOrigin }
                ),
                (0, s.jsx)("script", {
                  nonce: v,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([r, { ...x, id: t }]) +
                      ")",
                  },
                })
              );
          "afterInteractive" === d &&
            r &&
            l.default.preload(
              r,
              x.integrity
                ? {
                    as: "script",
                    integrity: x.integrity,
                    nonce: v,
                    crossOrigin: x.crossOrigin,
                  }
                : { as: "script", nonce: v, crossOrigin: x.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(b, "__nextScript", { value: !0 });
      let g = b;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    71641: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 10125)),
        Promise.resolve().then(r.bind(r, 65057)),
        Promise.resolve().then(r.bind(r, 12467));
    },
    92374: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          cancelIdleCallback: function () {
            return n;
          },
          requestIdleCallback: function () {
            return r;
          },
        });
      let r =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [2145, 7598, 4134, 6874, 6671, 6124, 6738, 6708, 5799, 8441, 1684, 7358],
      () => t(71641)
    ),
      (_N_E = e.O());
  },
]);
