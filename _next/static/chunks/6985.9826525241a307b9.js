"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6985],
  {
    16985: (e, t, r) => {
      r.r(t), r.d(t, { default: () => m });
      var n = r(95155),
        l = r(12115),
        a = r(24563),
        i = r(59434),
        c = r(14046);
      let o = (e) => {
        let { percent: t, ...r } = e,
          a = (0, l.useRef)(null),
          [o, s] = (0, l.useState)(0),
          d = Math.ceil(o / 10);
        (0, l.useEffect)(() => {
          let e = () => {
            a.current && s(a.current.getBoundingClientRect().width);
          };
          return (
            e(),
            window.addEventListener("resize", e),
            () => {
              window.removeEventListener("resize", e);
            }
          );
        }, [s]);
        let x = (e) => t >= (100 * e) / d;
        return (0, n.jsx)("div", {
          className:
            "w-full h-[30px] flex gap-1 overflow-hidden bg-[#7BA5A633]",
          ref: a,
          ...r,
          children: Array(null != d ? d : 1e3)
            .fill(0)
            .map((e, t) =>
              (0, n.jsx)(
                "div",
                {
                  className: (0, i.cn)(
                    "w-1 h-[30px]",
                    x(t) ? "bg-primary-green" : "bg-transparent"
                  ),
                },
                "progress-bar-".concat(e, "-").concat((0, c.y)())
              )
            ),
        });
      };
      var s = r(30285),
        d = r(6874),
        x = r.n(d),
        u = r(31839);
      let m = () => {
          let { round: e } = (0, u.A)();
          return (0, n.jsxs)("div", {});
        },
        h = (e) => {
          let { title: t, children: r } = e;
          return (0, n.jsxs)("div", {
            style: {
              background:
                "linear-gradient(var(--color-background), var(--color-background)) padding-box, linear-gradient(270deg, #03F5CD 0%, #19D4D6 40.31%, #30ACE1 70.55%, #694DFB 100.79%) border-box",
              border: "3px solid transparent",
              backdropFilter: "blur(114px)",
            },
            className:
              "rounded-xl px-4 md:px-5 lg:px-6 py-6 pt-10 shadow-[0px_0px_90px_0px_#FFFFFF33_inset] w-full",
            children: [
              (0, n.jsx)("h3", {
                className:
                  "text-xl md:text-2xl lg:text-3xl text-center font-medium",
                children: t,
              }),
              r,
            ],
          });
        },
        f = (e) => {
          let {
            name: t,
            duration: r,
            percent: l,
            vesting: a,
            percentSuffix: i,
          } = e;
          return (0, n.jsxs)("div", {
            className: "mt-4",
            children: [
              (0, n.jsxs)("div", {
                className: "flex items-center justify-between text-lg",
                children: [
                  (0, n.jsx)("p", { children: t }),
                  (0, n.jsx)("p", { children: r }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "flex items-center gap-1 my-1",
                children: (0, n.jsx)(o, { percent: l }),
              }),
              (0, n.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, n.jsxs)("p", { children: [l, "% ", i, " at TGE"] }),
                  (0, n.jsx)("p", { children: a }),
                ],
              }),
            ],
          });
        };
    },
    24563: (e, t, r) => {
      r.d(t, { A: () => E });
      var n = r(95155),
        l = r(12115),
        a = r(83540),
        i = r(27086),
        c = r(64683),
        o = r(59434);
      let s = { light: "", dark: ".dark" },
        d = l.createContext(null);
      function x(e) {
        let { id: t, className: r, children: i, config: c, ...s } = e,
          x = l.useId(),
          m = "chart-".concat(t || x.replace(/:/g, ""));
        return (0, n.jsx)(d.Provider, {
          value: { config: c },
          children: (0, n.jsxs)("div", {
            "data-slot": "chart",
            "data-chart": m,
            className: (0, o.cn)(
              "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
              r
            ),
            ...s,
            children: [
              (0, n.jsx)(u, { id: m, config: c }),
              (0, n.jsx)(a.u, { children: i }),
            ],
          }),
        });
      }
      let u = (e) => {
          let { id: t, config: r } = e,
            l = Object.entries(r).filter((e) => {
              let [, t] = e;
              return t.theme || t.color;
            });
          return l.length
            ? (0, n.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html: Object.entries(s)
                    .map((e) => {
                      let [r, n] = e;
                      return "\n"
                        .concat(n, " [data-chart=")
                        .concat(t, "] {\n")
                        .concat(
                          l
                            .map((e) => {
                              var t;
                              let [n, l] = e,
                                a =
                                  (null == (t = l.theme) ? void 0 : t[r]) ||
                                  l.color;
                              return a
                                ? "  --color-".concat(n, ": ").concat(a, ";")
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
        m = i.m;
      function h(e) {
        let {
            active: t,
            payload: r,
            className: a,
            indicator: i = "dot",
            hideLabel: c = !1,
            hideIndicator: s = !1,
            label: x,
            labelFormatter: u,
            labelClassName: m,
            formatter: h,
            color: p,
            nameKey: v,
            labelKey: y,
          } = e,
          { config: b } = (function () {
            let e = l.useContext(d);
            if (!e)
              throw Error("useChart must be used within a <ChartContainer />");
            return e;
          })(),
          g = l.useMemo(() => {
            var e;
            if (c || !(null == r ? void 0 : r.length)) return null;
            let [t] = r,
              l = "".concat(
                y ||
                  (null == t ? void 0 : t.dataKey) ||
                  (null == t ? void 0 : t.name) ||
                  "value"
              ),
              a = f(b, t, l),
              i =
                y || "string" != typeof x
                  ? null == a
                    ? void 0
                    : a.label
                  : (null == (e = b[x]) ? void 0 : e.label) || x;
            return u
              ? (0, n.jsx)("div", {
                  className: (0, o.cn)("font-medium", m),
                  children: u(i, r),
                })
              : i
              ? (0, n.jsx)("div", {
                  className: (0, o.cn)("font-medium", m),
                  children: i,
                })
              : null;
          }, [x, u, r, c, m, b, y]);
        if (!t || !(null == r ? void 0 : r.length)) return null;
        let j = 1 === r.length && "dot" !== i;
        return (0, n.jsxs)("div", {
          className: (0, o.cn)(
            "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
            a
          ),
          children: [
            j ? null : g,
            (0, n.jsx)("div", {
              className: "grid gap-1.5",
              children: r.map((e, t) => {
                let r = "".concat(v || e.name || e.dataKey || "value"),
                  l = f(b, e, r),
                  a = p || e.payload.fill || e.color;
                return (0, n.jsx)(
                  "div",
                  {
                    className: (0, o.cn)(
                      "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                      "dot" === i && "items-center"
                    ),
                    children:
                      h && (null == e ? void 0 : e.value) !== void 0 && e.name
                        ? h(e.value, e.name, e, t, e.payload)
                        : (0, n.jsxs)(n.Fragment, {
                            children: [
                              (null == l ? void 0 : l.icon)
                                ? (0, n.jsx)(l.icon, {})
                                : !s &&
                                  (0, n.jsx)("div", {
                                    className: (0, o.cn)(
                                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                                      {
                                        "h-2.5 w-2.5": "dot" === i,
                                        "w-1": "line" === i,
                                        "w-0 border-[1.5px] border-dashed bg-transparent":
                                          "dashed" === i,
                                        "my-0.5": j && "dashed" === i,
                                      }
                                    ),
                                    style: {
                                      "--color-bg": a,
                                      "--color-border": a,
                                    },
                                  }),
                              (0, n.jsxs)("div", {
                                className: (0, o.cn)(
                                  "flex flex-1 justify-between leading-none",
                                  j ? "items-end" : "items-center"
                                ),
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: "grid gap-1.5",
                                    children: [
                                      j ? g : null,
                                      (0, n.jsx)("span", {
                                        className: "text-muted-foreground",
                                        children:
                                          (null == l ? void 0 : l.label) ||
                                          e.name,
                                      }),
                                    ],
                                  }),
                                  e.value &&
                                    (0, n.jsx)("span", {
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
      function f(e, t, r) {
        if ("object" != typeof t || null === t) return;
        let n =
            "payload" in t && "object" == typeof t.payload && null !== t.payload
              ? t.payload
              : void 0,
          l = r;
        return (
          r in t && "string" == typeof t[r]
            ? (l = t[r])
            : n && r in n && "string" == typeof n[r] && (l = n[r]),
          l in e ? e[l] : e[r]
        );
      }
      c.s;
      var p = r(90170),
        v = r(10627),
        y = r(60379),
        b = r(40054),
        g = r.n(b),
        j = r(30285),
        w = r(27719),
        A = r(5196),
        k = r(24357);
      let E = () => {
          let { copied: e, copy: t } = (0, w.T)(),
            r = {
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
            l = [
              { name: "presale", percent: 20, fill: r.presale.color },
              { name: "liquidity", percent: 20, fill: r.liquidity.color },
              { name: "team", percent: 10, fill: r.team.color },
              { name: "treasury", percent: 15, fill: r.treasury.color },
              { name: "airdrop", percent: 10, fill: r.airdrop.color },
              { name: "development", percent: 10, fill: r.development.color },
              { name: "marketing", percent: 10, fill: r.marketing.color },
              { name: "reward", percent: 5, fill: r.reward.color },
            ];
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)(x, {
                config: r,
                className: "mx-auto aspect-square max-h-[350px]",
                children: (0, n.jsxs)(p.r, {
                  children: [
                    (0, n.jsx)(m, {
                      cursor: !1,
                      content: (0, n.jsx)(h, { hideLabel: !0 }),
                    }),
                    (0, n.jsx)(v.F, {
                      data: l,
                      dataKey: "percent",
                      nameKey: "name",
                      innerRadius: 60,
                      strokeWidth: 10,
                      children: (0, n.jsx)(y.J, {
                        content: (e) => {
                          let { viewBox: t } = e;
                          if (t && "cx" in t && "cy" in t)
                            return (0, n.jsxs)("text", {
                              x: t.cx,
                              y: t.cy,
                              textAnchor: "middle",
                              dominantBaseline: "middle",
                              children: [
                                (0, n.jsx)("tspan", {
                                  x: t.cx,
                                  y: t.cy,
                                  className:
                                    "fill-foreground text-3xl font-bold",
                                  children: "100M",
                                }),
                                (0, n.jsx)("tspan", {
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
              (0, n.jsx)("div", {
                className: "flex items-center my-3 justify-center",
                children: (0, n.jsxs)("div", {
                  className:
                    "relative px-3 py-2 flex gap-4 items-center justify-center",
                  children: [
                    (0, n.jsx)("div", {
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
                    (0, n.jsx)("span", { children: "Contract : " }),
                    (0, n.jsx)("a", {
                      href: "https://etherscan.io/token/0x27e0f917d9df4d1febc7593bffb8bb09c63e44d6",
                      className:
                        "text-blue-500 hover:text-blue-600 hover:underline",
                      children: (0, o.O)(
                        "0x27e0f917d9df4d1febc7593bffb8bb09c63e44d6"
                      ),
                    }),
                    (0, n.jsx)(j.$, {
                      disabled: e,
                      onClick: () =>
                        t("0x27e0f917d9df4d1febc7593bffb8bb09c63e44d6"),
                      size: "icon",
                      variant: "ghost",
                      className: "h-5 w-5",
                      children: e
                        ? (0, n.jsx)(A.A, { className: "w-4" })
                        : (0, n.jsx)(k.A, { className: "w-4" }),
                    }),
                  ],
                }),
              }),
              g()
                .chunk(l, 2)
                .map((e, t) =>
                  (0, n.jsx)(
                    "div",
                    {
                      className: "flex items-center justify-between gap-4 mt-4",
                      children: e.map((e) =>
                        (0, n.jsx)(
                          N,
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
        N = (e) => {
          let { title: t, percentage: r, color: l } = e;
          return (0, n.jsxs)("div", {
            className: "flex gap-4 flex-0.5 items-center font-medium",
            children: [
              (0, n.jsx)("span", { className: "capitalize", children: t }),
              (0, n.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, n.jsx)("span", {
                    className: "h-5 w-5 rounded-full",
                    style: { background: l },
                  }),
                  (0, n.jsxs)("span", { children: [r, "%"] }),
                ],
              }),
            ],
          });
        };
    },
    60379: (e, t, r) => {
      r.d(t, { J: () => A, Z: () => v });
      var n = r(12115),
        l = r(52596),
        a = r(79095),
        i = r(70788),
        c = r(16377),
        o = r(25641),
        s = r(97238),
        d = ["offset"],
        x = ["labelRef"];
      function u(e, t) {
        if (null == e) return {};
        var r,
          n,
          l = (function (e, t) {
            if (null == e) return {};
            var r = {};
            for (var n in e)
              if ({}.hasOwnProperty.call(e, n)) {
                if (-1 !== t.indexOf(n)) continue;
                r[n] = e[n];
              }
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              -1 === t.indexOf(r) &&
                {}.propertyIsEnumerable.call(e, r) &&
                (l[r] = e[r]);
        }
        return l;
      }
      function m(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(r), !0).forEach(function (t) {
                var n, l, a;
                (n = e),
                  (l = t),
                  (a = r[t]),
                  (l = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(l)) in n
                    ? Object.defineProperty(n, l, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[l] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function f() {
        return (f = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (e[n] = r[n]));
              }
              return e;
            }).apply(null, arguments);
      }
      var p = (e) => {
          var { value: t, formatter: r } = e,
            n = (0, c.uy)(e.children) ? t : e.children;
          return "function" == typeof r ? r(n) : n;
        },
        v = (e) => null != e && "function" == typeof e,
        y = (e, t) => (0, c.sA)(t - e) * Math.min(Math.abs(t - e), 360),
        b = (e, t, r) => {
          var a,
            i,
            { position: s, viewBox: d, offset: x, className: u } = e,
            {
              cx: m,
              cy: h,
              innerRadius: p,
              outerRadius: v,
              startAngle: b,
              endAngle: g,
              clockWise: j,
            } = d,
            w = (p + v) / 2,
            A = y(b, g),
            k = A >= 0 ? 1 : -1;
          "insideStart" === s
            ? ((a = b + k * x), (i = j))
            : "insideEnd" === s
            ? ((a = g - k * x), (i = !j))
            : "end" === s && ((a = g + k * x), (i = j)),
            (i = A <= 0 ? i : !i);
          var E = (0, o.IZ)(m, h, w, a),
            N = (0, o.IZ)(m, h, w, a + (i ? 1 : -1) * 359),
            O = "M"
              .concat(E.x, ",")
              .concat(E.y, "\n    A")
              .concat(w, ",")
              .concat(w, ",0,1,")
              .concat(+!i, ",\n    ")
              .concat(N.x, ",")
              .concat(N.y),
            F = (0, c.uy)(e.id) ? (0, c.NF)("recharts-radial-line-") : e.id;
          return n.createElement(
            "text",
            f({}, r, {
              dominantBaseline: "central",
              className: (0, l.$)("recharts-radial-bar-label", u),
            }),
            n.createElement(
              "defs",
              null,
              n.createElement("path", { id: F, d: O })
            ),
            n.createElement("textPath", { xlinkHref: "#".concat(F) }, t)
          );
        },
        g = (e) => {
          var { viewBox: t, offset: r, position: n } = e,
            {
              cx: l,
              cy: a,
              innerRadius: i,
              outerRadius: c,
              startAngle: s,
              endAngle: d,
            } = t,
            x = (s + d) / 2;
          if ("outside" === n) {
            var { x: u, y: m } = (0, o.IZ)(l, a, c + r, x);
            return {
              x: u,
              y: m,
              textAnchor: u >= l ? "start" : "end",
              verticalAnchor: "middle",
            };
          }
          if ("center" === n)
            return {
              x: l,
              y: a,
              textAnchor: "middle",
              verticalAnchor: "middle",
            };
          if ("centerTop" === n)
            return {
              x: l,
              y: a,
              textAnchor: "middle",
              verticalAnchor: "start",
            };
          if ("centerBottom" === n)
            return { x: l, y: a, textAnchor: "middle", verticalAnchor: "end" };
          var { x: h, y: f } = (0, o.IZ)(l, a, (i + c) / 2, x);
          return { x: h, y: f, textAnchor: "middle", verticalAnchor: "middle" };
        },
        j = (e, t) => {
          var { parentViewBox: r, offset: n, position: l } = e,
            { x: a, y: i, width: o, height: s } = t,
            d = s >= 0 ? 1 : -1,
            x = d * n,
            u = d > 0 ? "end" : "start",
            m = d > 0 ? "start" : "end",
            f = o >= 0 ? 1 : -1,
            p = f * n,
            v = f > 0 ? "end" : "start",
            y = f > 0 ? "start" : "end";
          if ("top" === l)
            return h(
              h(
                {},
                {
                  x: a + o / 2,
                  y: i - d * n,
                  textAnchor: "middle",
                  verticalAnchor: u,
                }
              ),
              r ? { height: Math.max(i - r.y, 0), width: o } : {}
            );
          if ("bottom" === l)
            return h(
              h(
                {},
                {
                  x: a + o / 2,
                  y: i + s + x,
                  textAnchor: "middle",
                  verticalAnchor: m,
                }
              ),
              r
                ? { height: Math.max(r.y + r.height - (i + s), 0), width: o }
                : {}
            );
          if ("left" === l) {
            var b = {
              x: a - p,
              y: i + s / 2,
              textAnchor: v,
              verticalAnchor: "middle",
            };
            return h(
              h({}, b),
              r ? { width: Math.max(b.x - r.x, 0), height: s } : {}
            );
          }
          if ("right" === l) {
            var g = {
              x: a + o + p,
              y: i + s / 2,
              textAnchor: y,
              verticalAnchor: "middle",
            };
            return h(
              h({}, g),
              r ? { width: Math.max(r.x + r.width - g.x, 0), height: s } : {}
            );
          }
          var j = r ? { width: o, height: s } : {};
          return "insideLeft" === l
            ? h(
                {
                  x: a + p,
                  y: i + s / 2,
                  textAnchor: y,
                  verticalAnchor: "middle",
                },
                j
              )
            : "insideRight" === l
            ? h(
                {
                  x: a + o - p,
                  y: i + s / 2,
                  textAnchor: v,
                  verticalAnchor: "middle",
                },
                j
              )
            : "insideTop" === l
            ? h(
                {
                  x: a + o / 2,
                  y: i + x,
                  textAnchor: "middle",
                  verticalAnchor: m,
                },
                j
              )
            : "insideBottom" === l
            ? h(
                {
                  x: a + o / 2,
                  y: i + s - x,
                  textAnchor: "middle",
                  verticalAnchor: u,
                },
                j
              )
            : "insideTopLeft" === l
            ? h({ x: a + p, y: i + x, textAnchor: y, verticalAnchor: m }, j)
            : "insideTopRight" === l
            ? h({ x: a + o - p, y: i + x, textAnchor: v, verticalAnchor: m }, j)
            : "insideBottomLeft" === l
            ? h({ x: a + p, y: i + s - x, textAnchor: y, verticalAnchor: u }, j)
            : "insideBottomRight" === l
            ? h(
                {
                  x: a + o - p,
                  y: i + s - x,
                  textAnchor: v,
                  verticalAnchor: u,
                },
                j
              )
            : l &&
              "object" == typeof l &&
              ((0, c.Et)(l.x) || (0, c._3)(l.x)) &&
              ((0, c.Et)(l.y) || (0, c._3)(l.y))
            ? h(
                {
                  x: a + (0, c.F4)(l.x, o),
                  y: i + (0, c.F4)(l.y, s),
                  textAnchor: "end",
                  verticalAnchor: "end",
                },
                j
              )
            : h(
                {
                  x: a + o / 2,
                  y: i + s / 2,
                  textAnchor: "middle",
                  verticalAnchor: "middle",
                },
                j
              );
        },
        w = (e) => "cx" in e && (0, c.Et)(e.cx);
      function A(e) {
        var t,
          { offset: r = 5 } = e,
          o = h({ offset: r }, u(e, d)),
          {
            viewBox: m,
            position: v,
            value: y,
            children: A,
            content: k,
            className: E = "",
            textBreakAll: N,
            labelRef: O,
          } = o,
          F = (0, s.sk)(),
          _ = m || F;
        if (
          !_ ||
          ((0, c.uy)(y) &&
            (0, c.uy)(A) &&
            !(0, n.isValidElement)(k) &&
            "function" != typeof k)
        )
          return null;
        if ((0, n.isValidElement)(k)) {
          var { labelRef: P } = o,
            B = u(o, x);
          return (0, n.cloneElement)(k, B);
        }
        if ("function" == typeof k) {
          if (((t = (0, n.createElement)(k, o)), (0, n.isValidElement)(t)))
            return t;
        } else t = p(o);
        var C = w(_),
          S = (0, i.J9)(o, !0);
        if (C && ("insideStart" === v || "insideEnd" === v || "end" === v))
          return b(o, t, S);
        var T = C ? g(o) : j(o, _);
        return n.createElement(
          a.E,
          f({ ref: O, className: (0, l.$)("recharts-label", E) }, S, T, {
            breakAll: N,
          }),
          t
        );
      }
      A.displayName = "Label";
      var k = (e) => {
          var {
            cx: t,
            cy: r,
            angle: n,
            startAngle: l,
            endAngle: a,
            r: i,
            radius: o,
            innerRadius: s,
            outerRadius: d,
            x,
            y: u,
            top: m,
            left: h,
            width: f,
            height: p,
            clockWise: v,
            labelViewBox: y,
          } = e;
          if (y) return y;
          if ((0, c.Et)(f) && (0, c.Et)(p)) {
            if ((0, c.Et)(x) && (0, c.Et)(u))
              return { x, y: u, width: f, height: p };
            if ((0, c.Et)(m) && (0, c.Et)(h))
              return { x: m, y: h, width: f, height: p };
          }
          return (0, c.Et)(x) && (0, c.Et)(u)
            ? { x, y: u, width: 0, height: 0 }
            : (0, c.Et)(t) && (0, c.Et)(r)
            ? {
                cx: t,
                cy: r,
                startAngle: l || n || 0,
                endAngle: a || n || 0,
                innerRadius: s || 0,
                outerRadius: d || o || i || 0,
                clockWise: v,
              }
            : e.viewBox
            ? e.viewBox
            : void 0;
        },
        E = (e, t, r) => {
          if (!e) return null;
          var l = { viewBox: t, labelRef: r };
          return !0 === e
            ? n.createElement(A, f({ key: "label-implicit" }, l))
            : (0, c.vh)(e)
            ? n.createElement(A, f({ key: "label-implicit", value: e }, l))
            : (0, n.isValidElement)(e)
            ? e.type === A
              ? (0, n.cloneElement)(e, h({ key: "label-implicit" }, l))
              : n.createElement(A, f({ key: "label-implicit", content: e }, l))
            : v(e)
            ? n.createElement(A, f({ key: "label-implicit", content: e }, l))
            : e && "object" == typeof e
            ? n.createElement(A, f({}, e, { key: "label-implicit" }, l))
            : null;
        };
      (A.parseViewBox = k),
        (A.renderCallByParent = function (e, t) {
          var r =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          if (!e || (!e.children && r && !e.label)) return null;
          var { children: l, labelRef: a } = e,
            c = k(e),
            o = (0, i.aS)(l, A).map((e, r) =>
              (0, n.cloneElement)(e, {
                viewBox: t || c,
                key: "label-".concat(r),
              })
            );
          return r ? [E(e.label, t || c, a), ...o] : o;
        });
    },
  },
]);
