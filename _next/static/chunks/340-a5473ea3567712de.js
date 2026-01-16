(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [340],
  {
    9795: (e, t, r) => {
      "use strict";
      r.d(t, { i: () => R });
      var n = r(12115);
      let a = Math.cos,
        i = Math.sin,
        o = Math.sqrt,
        l = Math.PI,
        c = 2 * l,
        u = {
          draw(e, t) {
            let r = o(t / l);
            e.moveTo(r, 0), e.arc(0, 0, r, 0, c);
          },
        },
        s = o(1 / 3),
        p = 2 * s,
        f = i(l / 10) / i((7 * l) / 10),
        d = i(c / 10) * f,
        y = -a(c / 10) * f,
        m = o(3),
        g = o(3) / 2,
        v = 1 / o(12),
        b = (v / 2 + 1) * 3;
      var h = r(85654),
        O = r(31847);
      o(3), o(3);
      var P = r(52596),
        j = r(70788),
        E = r(16377),
        w = ["type", "size", "sizeType"];
      function A() {
        return (A = Object.assign
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
      function S(e, t) {
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
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(r), !0).forEach(function (t) {
                var n, a, i;
                (n = e),
                  (a = t),
                  (i = r[t]),
                  (a = (function (e) {
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
                  })(a)) in n
                    ? Object.defineProperty(n, a, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[a] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : S(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var x = {
          symbolCircle: u,
          symbolCross: {
            draw(e, t) {
              let r = o(t / 5) / 2;
              e.moveTo(-3 * r, -r),
                e.lineTo(-r, -r),
                e.lineTo(-r, -3 * r),
                e.lineTo(r, -3 * r),
                e.lineTo(r, -r),
                e.lineTo(3 * r, -r),
                e.lineTo(3 * r, r),
                e.lineTo(r, r),
                e.lineTo(r, 3 * r),
                e.lineTo(-r, 3 * r),
                e.lineTo(-r, r),
                e.lineTo(-3 * r, r),
                e.closePath();
            },
          },
          symbolDiamond: {
            draw(e, t) {
              let r = o(t / p),
                n = r * s;
              e.moveTo(0, -r),
                e.lineTo(n, 0),
                e.lineTo(0, r),
                e.lineTo(-n, 0),
                e.closePath();
            },
          },
          symbolSquare: {
            draw(e, t) {
              let r = o(t),
                n = -r / 2;
              e.rect(n, n, r, r);
            },
          },
          symbolStar: {
            draw(e, t) {
              let r = o(0.8908130915292852 * t),
                n = d * r,
                l = y * r;
              e.moveTo(0, -r), e.lineTo(n, l);
              for (let t = 1; t < 5; ++t) {
                let o = (c * t) / 5,
                  u = a(o),
                  s = i(o);
                e.lineTo(s * r, -u * r), e.lineTo(u * n - s * l, s * n + u * l);
              }
              e.closePath();
            },
          },
          symbolTriangle: {
            draw(e, t) {
              let r = -o(t / (3 * m));
              e.moveTo(0, 2 * r),
                e.lineTo(-m * r, -r),
                e.lineTo(m * r, -r),
                e.closePath();
            },
          },
          symbolWye: {
            draw(e, t) {
              let r = o(t / b),
                n = r / 2,
                a = r * v,
                i = r * v + r,
                l = -n;
              e.moveTo(n, a),
                e.lineTo(n, i),
                e.lineTo(l, i),
                e.lineTo(-0.5 * n - g * a, g * n + -0.5 * a),
                e.lineTo(-0.5 * n - g * i, g * n + -0.5 * i),
                e.lineTo(-0.5 * l - g * i, g * l + -0.5 * i),
                e.lineTo(-0.5 * n + g * a, -0.5 * a - g * n),
                e.lineTo(-0.5 * n + g * i, -0.5 * i - g * n),
                e.lineTo(-0.5 * l + g * i, -0.5 * i - g * l),
                e.closePath();
            },
          },
        },
        M = Math.PI / 180,
        k = (e) => x["symbol".concat((0, E.Zb)(e))] || u,
        D = (e, t, r) => {
          if ("area" === t) return e;
          switch (r) {
            case "cross":
              return (5 * e * e) / 9;
            case "diamond":
              return (0.5 * e * e) / Math.sqrt(3);
            case "square":
              return e * e;
            case "star":
              var n = 18 * M;
              return (
                1.25 *
                e *
                e *
                (Math.tan(n) - Math.tan(2 * n) * Math.tan(n) ** 2)
              );
            case "triangle":
              return (Math.sqrt(3) * e * e) / 4;
            case "wye":
              return ((21 - 10 * Math.sqrt(3)) * e * e) / 8;
            default:
              return (Math.PI * e * e) / 4;
          }
        },
        R = (e) => {
          var { type: t = "circle", size: r = 64, sizeType: a = "area" } = e,
            i = T(
              T(
                {},
                (function (e, t) {
                  if (null == e) return {};
                  var r,
                    n,
                    a = (function (e, t) {
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
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++)
                      (r = i[n]),
                        -1 === t.indexOf(r) &&
                          {}.propertyIsEnumerable.call(e, r) &&
                          (a[r] = e[r]);
                  }
                  return a;
                })(e, w)
              ),
              {},
              { type: t, size: r, sizeType: a }
            ),
            { className: o, cx: l, cy: c } = i,
            s = (0, j.J9)(i, !0);
          return l === +l && c === +c && r === +r
            ? n.createElement(
                "path",
                A({}, s, {
                  className: (0, P.$)("recharts-symbols", o),
                  transform: "translate(".concat(l, ", ").concat(c, ")"),
                  d: (() => {
                    var e = k(t);
                    return (function (e, t) {
                      let r = null,
                        n = (0, O.i)(a);
                      function a() {
                        let a;
                        if (
                          (r || (r = a = n()),
                          e
                            .apply(this, arguments)
                            .draw(r, +t.apply(this, arguments)),
                          a)
                        )
                          return (r = null), a + "" || null;
                      }
                      return (
                        (e = "function" == typeof e ? e : (0, h.A)(e || u)),
                        (t =
                          "function" == typeof t
                            ? t
                            : (0, h.A)(void 0 === t ? 64 : +t)),
                        (a.type = function (t) {
                          return arguments.length
                            ? ((e = "function" == typeof t ? t : (0, h.A)(t)),
                              a)
                            : e;
                        }),
                        (a.size = function (e) {
                          return arguments.length
                            ? ((t = "function" == typeof e ? e : (0, h.A)(+e)),
                              a)
                            : t;
                        }),
                        (a.context = function (e) {
                          return arguments.length
                            ? ((r = null == e ? null : e), a)
                            : r;
                        }),
                        a
                      );
                    })()
                      .type(e)
                      .size(D(r, a, t))();
                  })(),
                })
              )
            : null;
        };
      R.registerSymbol = (e, t) => {
        x["symbol".concat((0, E.Zb)(e))] = t;
      };
    },
    10627: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => eF, L: () => ez });
      var n = r(12115),
        a = r(95672),
        i = r.n(a),
        o = r(52596),
        l = r(68924),
        c = r(60356),
        u = r(56124),
        s = r(39827),
        p = r(14299),
        f = r(97238),
        d = r(66038),
        y = r(12287),
        m = r(18478),
        g = (e) => e.graphicalItems.polarItems,
        v = (0, l.Mz)([d.N, y.E], p.eo),
        b = (0, l.Mz)([g, p.DP, v], p.ec),
        h = (0, l.Mz)([b], p.rj),
        O = (0, l.Mz)([h, c.z3], p.Nk),
        P = (0, l.Mz)([O, p.DP, b], p.fb),
        j = (0, l.Mz)([O, p.DP, b], (e, t, r) =>
          r.length > 0
            ? e
                .flatMap((e) =>
                  r.flatMap((r) => {
                    var n;
                    return {
                      value: (0, s.kr)(
                        e,
                        null != (n = t.dataKey) ? n : r.dataKey
                      ),
                      errorDomain: [],
                    };
                  })
                )
                .filter(Boolean)
            : (null == t ? void 0 : t.dataKey) != null
            ? e.map((e) => ({
                value: (0, s.kr)(e, t.dataKey),
                errorDomain: [],
              }))
            : e.map((e) => ({ value: e, errorDomain: [] }))
        ),
        E = () => void 0,
        w = (0, l.Mz)([p.DP, p.AV, E, j, E], p.wL),
        A = (0, l.Mz)([p.DP, f.fz, O, P, m.eC, d.N, w], p.tP),
        S = (0, l.Mz)([A, p.DP, p.xM], p.xp);
      function T(e, t) {
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
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? T(Object(r), !0).forEach(function (t) {
                var n, a, i;
                (n = e),
                  (a = t),
                  (i = r[t]),
                  (a = (function (e) {
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
                  })(a)) in n
                    ? Object.defineProperty(n, a, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[a] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : T(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      (0, l.Mz)([p.DP, A, S, d.N], p.g1);
      var M = (e, t) => t,
        k = [],
        D = (e, t, r) => ((null == r ? void 0 : r.length) === 0 ? k : r),
        R = (0, l.Mz)([c.z3, M, D], (e, t, r) => {
          var n,
            { chartData: a } = e;
          if (
            (((n =
              (null == t ? void 0 : t.data) != null && t.data.length > 0
                ? t.data
                : a) &&
              n.length) ||
              null == r ||
              (n = r.map((e) => x(x({}, t.presentationProps), e.props))),
            null != n)
          )
            return n;
        }),
        N = (0, l.Mz)([R, M, D], (e, t, r) => {
          if (null != e)
            return e.map((e, n) => {
              var a,
                i,
                o = (0, s.kr)(e, t.nameKey, t.name);
              return (
                (i =
                  null != r &&
                  null != (a = r[n]) &&
                  null != (a = a.props) &&
                  a.fill
                    ? r[n].props.fill
                    : "object" == typeof e && null != e && "fill" in e
                    ? e.fill
                    : t.fill),
                {
                  value: (0, s.uM)(o, t.dataKey),
                  color: i,
                  payload: e,
                  type: t.legendType,
                }
              );
            });
        }),
        z = (0, l.Mz)([g, M], (e, t) => {
          if (
            e.some(
              (e) =>
                "pie" === e.type && t.dataKey === e.dataKey && t.data === e.data
            )
          )
            return t;
        }),
        I = (0, l.Mz)([R, z, D, u.HZ], (e, t, r, n) => {
          if (null != t && null != e)
            return ez({
              offset: n,
              pieSettings: t,
              displayedData: e,
              cells: r,
            });
        }),
        K = r(81971),
        C = r(27119),
        L = r(2348),
        W = r(70688),
        F = r(79095),
        B = r(54811),
        G = r(70788),
        J = r(41643),
        V = r(25641),
        q = r(16377),
        Z = r(43597),
        $ = r(80931),
        H = r.n($),
        _ = r(44538),
        U = r(93389),
        X = r(74460);
      function Y() {
        return (Y = Object.assign
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
      var Q = (e, t, r, n, a) => {
          var i,
            o = r - n;
          return (
            "M ".concat(e, ",").concat(t) +
            "L ".concat(e + r, ",").concat(t) +
            "L ".concat(e + r - o / 2, ",").concat(t + a) +
            "L ".concat(e + r - o / 2 - n, ",").concat(t + a) +
            "L ".concat(e, ",").concat(t, " Z")
          );
        },
        ee = {
          x: 0,
          y: 0,
          upperWidth: 0,
          lowerWidth: 0,
          height: 0,
          isUpdateAnimationActive: !1,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        },
        et = (e) => {
          var t = (0, U.e)(e, ee),
            r = (0, n.useRef)(),
            [a, i] = (0, n.useState)(-1);
          (0, n.useEffect)(() => {
            if (r.current && r.current.getTotalLength)
              try {
                var e = r.current.getTotalLength();
                e && i(e);
              } catch (e) {}
          }, []);
          var {
              x: l,
              y: c,
              upperWidth: u,
              lowerWidth: s,
              height: p,
              className: f,
            } = t,
            {
              animationEasing: d,
              animationDuration: y,
              animationBegin: m,
              isUpdateAnimationActive: g,
            } = t;
          if (
            l !== +l ||
            c !== +c ||
            u !== +u ||
            s !== +s ||
            p !== +p ||
            (0 === u && 0 === s) ||
            0 === p
          )
            return null;
          var v = (0, o.$)("recharts-trapezoid", f);
          return g
            ? n.createElement(
                X.i,
                {
                  canBegin: a > 0,
                  from: { upperWidth: 0, lowerWidth: 0, height: p, x: l, y: c },
                  to: { upperWidth: u, lowerWidth: s, height: p, x: l, y: c },
                  duration: y,
                  animationEasing: d,
                  isActive: g,
                },
                (e) => {
                  var {
                    upperWidth: i,
                    lowerWidth: o,
                    height: l,
                    x: c,
                    y: u,
                  } = e;
                  return n.createElement(
                    X.i,
                    {
                      canBegin: a > 0,
                      from: "0px ".concat(-1 === a ? 1 : a, "px"),
                      to: "".concat(a, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: m,
                      duration: y,
                      easing: d,
                    },
                    n.createElement(
                      "path",
                      Y({}, (0, G.J9)(t, !0), {
                        className: v,
                        d: Q(c, u, i, o, l),
                        ref: r,
                      })
                    )
                  );
                }
              )
            : n.createElement(
                "g",
                null,
                n.createElement(
                  "path",
                  Y({}, (0, G.J9)(t, !0), { className: v, d: Q(l, c, u, s, p) })
                )
              );
        },
        er = r(77283),
        en = r(9795),
        ea = [
          "option",
          "shapeType",
          "propTransformer",
          "activeClassName",
          "isActive",
        ];
      function ei(e, t) {
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
      function eo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ei(Object(r), !0).forEach(function (t) {
                var n, a, i;
                (n = e),
                  (a = t),
                  (i = r[t]),
                  (a = (function (e) {
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
                  })(a)) in n
                    ? Object.defineProperty(n, a, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[a] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ei(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function el(e, t) {
        return eo(eo({}, t), e);
      }
      function ec(e) {
        var { shapeType: t, elementProps: r } = e;
        switch (t) {
          case "rectangle":
            return n.createElement(_.M, r);
          case "trapezoid":
            return n.createElement(et, r);
          case "sector":
            return n.createElement(er.h, r);
          case "symbols":
            if ("symbols" === t) return n.createElement(en.i, r);
            break;
          default:
            return null;
        }
      }
      function eu(e) {
        var t,
          {
            option: r,
            shapeType: a,
            propTransformer: i = el,
            activeClassName: o = "recharts-active-shape",
            isActive: l,
          } = e,
          c = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = (function (e, t) {
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
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  -1 === t.indexOf(r) &&
                    {}.propertyIsEnumerable.call(e, r) &&
                    (a[r] = e[r]);
            }
            return a;
          })(e, ea);
        if ((0, n.isValidElement)(r))
          t = (0, n.cloneElement)(
            r,
            eo(eo({}, c), (0, n.isValidElement)(r) ? r.props : r)
          );
        else if ("function" == typeof r) t = r(c);
        else if (H()(r) && "boolean" != typeof r) {
          var u = i(r, c);
          t = n.createElement(ec, { shapeType: a, elementProps: u });
        } else t = n.createElement(ec, { shapeType: a, elementProps: c });
        return l ? n.createElement(L.W, { className: o }, t) : t;
      }
      var es = r(34890),
        ep = (e, t) => {
          var r = (0, K.j)();
          return (n, a) => (i) => {
            null == e || e(n, a, i),
              r(
                (0, es.RD)({
                  activeIndex: String(a),
                  activeDataKey: t,
                  activeCoordinate: n.tooltipPosition,
                })
              );
          };
        },
        ef = (e) => {
          var t = (0, K.j)();
          return (r, n) => (a) => {
            null == e || e(r, n, a), t((0, es.oP)());
          };
        },
        ed = (e, t) => {
          var r = (0, K.j)();
          return (n, a) => (i) => {
            null == e || e(n, a, i),
              r(
                (0, es.ML)({
                  activeIndex: String(a),
                  activeDataKey: t,
                  activeCoordinate: n.tooltipPosition,
                })
              );
          };
        },
        ey = r(56091),
        em = r(20215),
        eg = r(79020),
        ev = r(84421),
        eb = r(39426),
        eh = ["onMouseEnter", "onClick", "onMouseLeave"];
      function eO(e, t) {
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
      function eP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eO(Object(r), !0).forEach(function (t) {
                ej(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : eO(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function ej(e, t, r) {
        var n;
        return (
          (t =
            "symbol" ==
            typeof (n = (function (e, t) {
              if ("object" != typeof e || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t ? String : Number)(e);
            })(t, "string"))
              ? n
              : n + "") in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function eE() {
        return (eE = Object.assign
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
      function ew(e) {
        var t = (0, n.useMemo)(() => (0, G.J9)(e, !1), [e]),
          r = (0, n.useMemo)(() => (0, G.aS)(e.children, B.f), [e.children]),
          a = (0, n.useMemo)(
            () => ({
              name: e.name,
              nameKey: e.nameKey,
              tooltipType: e.tooltipType,
              data: e.data,
              dataKey: e.dataKey,
              cx: e.cx,
              cy: e.cy,
              startAngle: e.startAngle,
              endAngle: e.endAngle,
              minAngle: e.minAngle,
              paddingAngle: e.paddingAngle,
              innerRadius: e.innerRadius,
              outerRadius: e.outerRadius,
              cornerRadius: e.cornerRadius,
              legendType: e.legendType,
              fill: e.fill,
              presentationProps: t,
            }),
            [
              e.cornerRadius,
              e.cx,
              e.cy,
              e.data,
              e.dataKey,
              e.endAngle,
              e.innerRadius,
              e.minAngle,
              e.name,
              e.nameKey,
              e.outerRadius,
              e.paddingAngle,
              e.startAngle,
              e.tooltipType,
              e.legendType,
              e.fill,
              t,
            ]
          ),
          i = (0, K.G)((e) => N(e, a, r));
        return n.createElement(eg._, { legendPayload: i });
      }
      function eA(e) {
        var {
          dataKey: t,
          nameKey: r,
          sectors: n,
          stroke: a,
          strokeWidth: i,
          fill: o,
          name: l,
          hide: c,
          tooltipType: u,
        } = e;
        return {
          dataDefinedOnItem:
            null == n ? void 0 : n.map((e) => e.tooltipPayload),
          positions: null == n ? void 0 : n.map((e) => e.tooltipPosition),
          settings: {
            stroke: a,
            strokeWidth: i,
            fill: o,
            dataKey: t,
            nameKey: r,
            name: (0, s.uM)(l, t),
            hide: c,
            type: u,
            color: o,
            unit: "",
          },
        };
      }
      var eS = (e, t) => (e > t ? "start" : e < t ? "end" : "middle"),
        eT = (e, t, r) =>
          "function" == typeof t ? t(e) : (0, q.F4)(t, r, 0.8 * r),
        ex = (e, t, r) => {
          var { top: n, left: a, width: i, height: o } = t,
            l = (0, V.lY)(i, o),
            c = a + (0, q.F4)(e.cx, i, i / 2),
            u = n + (0, q.F4)(e.cy, o, o / 2),
            s = (0, q.F4)(e.innerRadius, l, 0);
          return {
            cx: c,
            cy: u,
            innerRadius: s,
            outerRadius: eT(r, e.outerRadius, l),
            maxRadius: e.maxRadius || Math.sqrt(i * i + o * o) / 2,
          };
        },
        eM = (e, t) => (0, q.sA)(t - e) * Math.min(Math.abs(t - e), 360),
        ek = (e, t) => {
          if (n.isValidElement(e)) return n.cloneElement(e, t);
          if ("function" == typeof e) return e(t);
          var r = (0, o.$)(
            "recharts-pie-label-line",
            "boolean" != typeof e ? e.className : ""
          );
          return n.createElement(
            W.I,
            eE({}, t, { type: "linear", className: r })
          );
        },
        eD = (e, t, r) => {
          if (n.isValidElement(e)) return n.cloneElement(e, t);
          var a = r;
          if ("function" == typeof e && ((a = e(t)), n.isValidElement(a)))
            return a;
          var i = (0, o.$)(
            "recharts-pie-label-text",
            "boolean" != typeof e && "function" != typeof e ? e.className : ""
          );
          return n.createElement(
            F.E,
            eE({}, t, { alignmentBaseline: "middle", className: i }),
            a
          );
        };
      function eR(e) {
        var { sectors: t, props: r, showLabels: a } = e,
          { label: i, labelLine: o, dataKey: l } = r;
        if (!a || !i || !t) return null;
        var c = (0, G.J9)(r, !1),
          u = (0, G.J9)(i, !1),
          p = (0, G.J9)(o, !1),
          f =
            ("object" == typeof i && "offsetRadius" in i && i.offsetRadius) ||
            20,
          d = t.map((e, t) => {
            var r = (e.startAngle + e.endAngle) / 2,
              a = (0, V.IZ)(e.cx, e.cy, e.outerRadius + f, r),
              d = eP(
                eP(eP(eP({}, c), e), {}, { stroke: "none" }, u),
                {},
                { index: t, textAnchor: eS(a.x, e.cx) },
                a
              ),
              y = eP(
                eP(eP(eP({}, c), e), {}, { fill: "none", stroke: e.fill }, p),
                {},
                {
                  index: t,
                  points: [(0, V.IZ)(e.cx, e.cy, e.outerRadius, r), a],
                  key: "line",
                }
              );
            return n.createElement(
              L.W,
              {
                key: "label-"
                  .concat(e.startAngle, "-")
                  .concat(e.endAngle, "-")
                  .concat(e.midAngle, "-")
                  .concat(t),
              },
              o && ek(o, y),
              eD(i, d, (0, s.kr)(e, l))
            );
          });
        return n.createElement(L.W, { className: "recharts-pie-labels" }, d);
      }
      function eN(e) {
        var {
            sectors: t,
            activeShape: r,
            inactiveShape: a,
            allOtherPieProps: i,
            showLabels: o,
          } = e,
          l = (0, K.G)(em.A2),
          { onMouseEnter: c, onClick: u, onMouseLeave: s } = i,
          p = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = (function (e, t) {
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
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  -1 === t.indexOf(r) &&
                    {}.propertyIsEnumerable.call(e, r) &&
                    (a[r] = e[r]);
            }
            return a;
          })(i, eh),
          f = ep(c, i.dataKey),
          d = ef(s),
          y = ed(u, i.dataKey);
        return null == t
          ? null
          : n.createElement(
              n.Fragment,
              null,
              t.map((e, o) => {
                if (
                  (null == e ? void 0 : e.startAngle) === 0 &&
                  (null == e ? void 0 : e.endAngle) === 0 &&
                  1 !== t.length
                )
                  return null;
                var c = r && String(o) === l,
                  u = c ? r : l ? a : null,
                  s = eP(
                    eP({}, e),
                    {},
                    {
                      stroke: e.stroke,
                      tabIndex: -1,
                      [ev.F0]: o,
                      [ev.um]: i.dataKey,
                    }
                  );
                return n.createElement(
                  L.W,
                  eE(
                    { tabIndex: -1, className: "recharts-pie-sector" },
                    (0, Z.XC)(p, e, o),
                    {
                      onMouseEnter: f(e, o),
                      onMouseLeave: d(e, o),
                      onClick: y(e, o),
                      key: "sector-"
                        .concat(null == e ? void 0 : e.startAngle, "-")
                        .concat(null == e ? void 0 : e.endAngle, "-")
                        .concat(e.midAngle, "-")
                        .concat(o),
                    }
                  ),
                  n.createElement(
                    eu,
                    eE({ option: u, isActive: c, shapeType: "sector" }, s)
                  )
                );
              }),
              n.createElement(eR, { sectors: t, props: i, showLabels: o })
            );
      }
      function ez(e) {
        var t,
          r,
          n,
          { pieSettings: a, displayedData: i, cells: o, offset: l } = e,
          {
            cornerRadius: c,
            startAngle: u,
            endAngle: p,
            dataKey: f,
            nameKey: d,
            tooltipType: y,
          } = a,
          m = Math.abs(a.minAngle),
          g = eM(u, p),
          v = Math.abs(g),
          b = i.length <= 1 ? 0 : null != (t = a.paddingAngle) ? t : 0,
          h = i.filter((e) => 0 !== (0, s.kr)(e, f, 0)).length,
          O = v - h * m - (v >= 360 ? h : h - 1) * b,
          P = i.reduce((e, t) => {
            var r = (0, s.kr)(t, f, 0);
            return e + ((0, q.Et)(r) ? r : 0);
          }, 0);
        return (
          P > 0 &&
            (r = i.map((e, t) => {
              var r,
                i = (0, s.kr)(e, f, 0),
                p = (0, s.kr)(e, d, t),
                v = ex(a, l, e),
                h = ((0, q.Et)(i) ? i : 0) / P,
                j = eP(eP({}, e), o && o[t] && o[t].props),
                E =
                  (r = t ? n.endAngle + (0, q.sA)(g) * b * (0 !== i) : u) +
                  (0, q.sA)(g) * ((0 !== i ? m : 0) + h * O),
                w = (r + E) / 2,
                A = (v.innerRadius + v.outerRadius) / 2,
                S = [{ name: p, value: i, payload: j, dataKey: f, type: y }],
                T = (0, V.IZ)(v.cx, v.cy, A, w);
              return (n = eP(
                eP(
                  eP(
                    eP({}, a.presentationProps),
                    {},
                    {
                      percent: h,
                      cornerRadius: c,
                      name: p,
                      tooltipPayload: S,
                      midAngle: w,
                      middleRadius: A,
                      tooltipPosition: T,
                    },
                    j
                  ),
                  v
                ),
                {},
                {
                  value: (0, s.kr)(e, f),
                  startAngle: r,
                  endAngle: E,
                  payload: j,
                  paddingAngle: (0, q.sA)(g) * b,
                }
              ));
            })),
          r
        );
      }
      function eI(e) {
        var { props: t, previousSectorsRef: r } = e,
          {
            sectors: a,
            isAnimationActive: o,
            animationBegin: l,
            animationDuration: c,
            animationEasing: u,
            activeShape: s,
            inactiveShape: p,
            onAnimationStart: f,
            onAnimationEnd: d,
          } = t,
          y = (0, eb.n)(t, "recharts-pie-"),
          m = r.current,
          [g, v] = (0, n.useState)(!0),
          b = (0, n.useCallback)(() => {
            "function" == typeof d && d(), v(!1);
          }, [d]),
          h = (0, n.useCallback)(() => {
            "function" == typeof f && f(), v(!0);
          }, [f]);
        return n.createElement(
          X.i,
          {
            begin: l,
            duration: c,
            isActive: o,
            easing: u,
            from: { t: 0 },
            to: { t: 1 },
            onAnimationStart: h,
            onAnimationEnd: b,
            key: y,
          },
          (e) => {
            var { t: o } = e,
              l = [],
              c = (a && a[0]).startAngle;
            return (
              a.forEach((e, t) => {
                var r = m && m[t],
                  n = t > 0 ? i()(e, "paddingAngle", 0) : 0;
                if (r) {
                  var a = (0, q.Dj)(
                      r.endAngle - r.startAngle,
                      e.endAngle - e.startAngle
                    ),
                    u = eP(
                      eP({}, e),
                      {},
                      { startAngle: c + n, endAngle: c + a(o) + n }
                    );
                  l.push(u), (c = u.endAngle);
                } else {
                  var { endAngle: s, startAngle: p } = e,
                    f = (0, q.Dj)(0, s - p)(o),
                    d = eP(
                      eP({}, e),
                      {},
                      { startAngle: c + n, endAngle: c + f + n }
                    );
                  l.push(d), (c = d.endAngle);
                }
              }),
              (r.current = l),
              n.createElement(
                L.W,
                null,
                n.createElement(eN, {
                  sectors: l,
                  activeShape: s,
                  inactiveShape: p,
                  allOtherPieProps: t,
                  showLabels: !g,
                })
              )
            );
          }
        );
      }
      function eK(e) {
        var {
            sectors: t,
            isAnimationActive: r,
            activeShape: a,
            inactiveShape: i,
          } = e,
          o = (0, n.useRef)(null),
          l = o.current;
        return r && t && t.length && (!l || l !== t)
          ? n.createElement(eI, { props: e, previousSectorsRef: o })
          : n.createElement(eN, {
              sectors: t,
              activeShape: a,
              inactiveShape: i,
              allOtherPieProps: e,
              showLabels: !0,
            });
      }
      function eC(e) {
        var { hide: t, className: r, rootTabIndex: a } = e,
          i = (0, o.$)("recharts-pie", r);
        return t
          ? null
          : n.createElement(
              L.W,
              { tabIndex: a, className: i },
              n.createElement(eK, e)
            );
      }
      var eL = {
        animationBegin: 400,
        animationDuration: 1500,
        animationEasing: "ease",
        cx: "50%",
        cy: "50%",
        dataKey: "value",
        endAngle: 360,
        fill: "#808080",
        hide: !1,
        innerRadius: 0,
        isAnimationActive: !J.m.isSsr,
        labelLine: !0,
        legendType: "rect",
        minAngle: 0,
        nameKey: "name",
        outerRadius: "80%",
        paddingAngle: 0,
        rootTabIndex: 0,
        startAngle: 0,
        stroke: "#fff",
      };
      function eW(e) {
        var t = (0, U.e)(e, eL),
          r = (0, n.useMemo)(() => (0, G.aS)(e.children, B.f), [e.children]),
          a = (0, G.J9)(t, !1),
          i = (0, n.useMemo)(
            () => ({
              name: t.name,
              nameKey: t.nameKey,
              tooltipType: t.tooltipType,
              data: t.data,
              dataKey: t.dataKey,
              cx: t.cx,
              cy: t.cy,
              startAngle: t.startAngle,
              endAngle: t.endAngle,
              minAngle: t.minAngle,
              paddingAngle: t.paddingAngle,
              innerRadius: t.innerRadius,
              outerRadius: t.outerRadius,
              cornerRadius: t.cornerRadius,
              legendType: t.legendType,
              fill: t.fill,
              presentationProps: a,
            }),
            [
              t.cornerRadius,
              t.cx,
              t.cy,
              t.data,
              t.dataKey,
              t.endAngle,
              t.innerRadius,
              t.minAngle,
              t.name,
              t.nameKey,
              t.outerRadius,
              t.paddingAngle,
              t.startAngle,
              t.tooltipType,
              t.legendType,
              t.fill,
              a,
            ]
          ),
          o = (0, K.G)((e) => I(e, i, r));
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(ey.r, {
            fn: eA,
            args: eP(eP({}, t), {}, { sectors: o }),
          }),
          n.createElement(eC, eE({}, t, { sectors: o }))
        );
      }
      class eF extends n.PureComponent {
        render() {
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(C.v, {
              data: this.props.data,
              dataKey: this.props.dataKey,
              hide: this.props.hide,
              angleAxisId: 0,
              radiusAxisId: 0,
              stackId: void 0,
              barSize: void 0,
              type: "pie",
            }),
            n.createElement(ew, this.props),
            n.createElement(eW, this.props),
            this.props.children
          );
        }
        constructor() {
          super(...arguments), ej(this, "id", (0, q.NF)("recharts-pie-"));
        }
      }
      ej(eF, "displayName", "Pie"), ej(eF, "defaultProps", eL);
    },
    54811: (e, t, r) => {
      "use strict";
      r.d(t, { f: () => n });
      var n = (e) => null;
      n.displayName = "Cell";
    },
    64683: (e, t, r) => {
      "use strict";
      r.d(t, { s: () => D });
      var n = r(12115),
        a = r(47650),
        i = r(15679),
        o = r(52596),
        l = r(72790),
        c = r(9795),
        u = r(43597);
      function s() {
        return (s = Object.assign
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
      function p(e, t) {
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
      function f(e, t, r) {
        var n;
        return (
          (t =
            "symbol" ==
            typeof (n = (function (e, t) {
              if ("object" != typeof e || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t ? String : Number)(e);
            })(t, "string"))
              ? n
              : n + "") in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      class d extends n.PureComponent {
        renderIcon(e, t) {
          var { inactiveColor: r } = this.props,
            a = 32 / 6,
            i = 32 / 3,
            o = e.inactive ? r : e.color,
            l = null != t ? t : e.type;
          if ("none" === l) return null;
          if ("plainline" === l)
            return n.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: o,
              strokeDasharray: e.payload.strokeDasharray,
              x1: 0,
              y1: 16,
              x2: 32,
              y2: 16,
              className: "recharts-legend-icon",
            });
          if ("line" === l)
            return n.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: o,
              d: "M0,"
                .concat(16, "h")
                .concat(i, "\n            A")
                .concat(a, ",")
                .concat(a, ",0,1,1,")
                .concat(2 * i, ",")
                .concat(16, "\n            H")
                .concat(32, "M")
                .concat(2 * i, ",")
                .concat(16, "\n            A")
                .concat(a, ",")
                .concat(a, ",0,1,1,")
                .concat(i, ",")
                .concat(16),
              className: "recharts-legend-icon",
            });
          if ("rect" === l)
            return n.createElement("path", {
              stroke: "none",
              fill: o,
              d: "M0,"
                .concat(4, "h")
                .concat(32, "v")
                .concat(24, "h")
                .concat(-32, "z"),
              className: "recharts-legend-icon",
            });
          if (n.isValidElement(e.legendIcon)) {
            var u = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? p(Object(r), !0).forEach(function (t) {
                      f(e, t, r[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : p(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      );
                    });
              }
              return e;
            })({}, e);
            return delete u.legendIcon, n.cloneElement(e.legendIcon, u);
          }
          return n.createElement(c.i, {
            fill: o,
            cx: 16,
            cy: 16,
            size: 32,
            sizeType: "diameter",
            type: l,
          });
        }
        renderItems() {
          var {
              payload: e,
              iconSize: t,
              layout: r,
              formatter: a,
              inactiveColor: i,
              iconType: c,
            } = this.props,
            p = { x: 0, y: 0, width: 32, height: 32 },
            f = {
              display: "horizontal" === r ? "inline-block" : "block",
              marginRight: 10,
            },
            d = {
              display: "inline-block",
              verticalAlign: "middle",
              marginRight: 4,
            };
          return e.map((e, r) => {
            var y = e.formatter || a,
              m = (0, o.$)({
                "recharts-legend-item": !0,
                ["legend-item-".concat(r)]: !0,
                inactive: e.inactive,
              });
            if ("none" === e.type) return null;
            var g = e.inactive ? i : e.color,
              v = y ? y(e.value, e, r) : e.value;
            return n.createElement(
              "li",
              s(
                { className: m, style: f, key: "legend-item-".concat(r) },
                (0, u.XC)(this.props, e, r)
              ),
              n.createElement(
                l.u,
                {
                  width: t,
                  height: t,
                  viewBox: p,
                  style: d,
                  "aria-label": "".concat(v, " legend icon"),
                },
                this.renderIcon(e, c)
              ),
              n.createElement(
                "span",
                { className: "recharts-legend-item-text", style: { color: g } },
                v
              )
            );
          });
        }
        render() {
          var { payload: e, layout: t, align: r } = this.props;
          return e && e.length
            ? n.createElement(
                "ul",
                {
                  className: "recharts-default-legend",
                  style: {
                    padding: 0,
                    margin: 0,
                    textAlign: "horizontal" === t ? r : "left",
                  },
                },
                this.renderItems()
              )
            : null;
        }
      }
      f(d, "displayName", "Legend"),
        f(d, "defaultProps", {
          align: "center",
          iconSize: 14,
          inactiveColor: "#ccc",
          layout: "horizontal",
          verticalAlign: "middle",
        });
      var y = r(16377),
        m = r(2494),
        g = r(81971),
        v = r(35803),
        b = r(77918),
        h = r(97238),
        O = r(32634),
        P = ["contextPayload"];
      function j() {
        return (j = Object.assign
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
      function E(e, t) {
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(r), !0).forEach(function (t) {
                A(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : E(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function A(e, t, r) {
        var n;
        return (
          (t =
            "symbol" ==
            typeof (n = (function (e, t) {
              if ("object" != typeof e || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t ? String : Number)(e);
            })(t, "string"))
              ? n
              : n + "") in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function S(e) {
        return e.value;
      }
      function T(e) {
        var { contextPayload: t } = e,
          r = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = (function (e, t) {
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
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  -1 === t.indexOf(r) &&
                    {}.propertyIsEnumerable.call(e, r) &&
                    (a[r] = e[r]);
            }
            return a;
          })(e, P),
          a = (0, m.s)(t, e.payloadUniqBy, S),
          i = w(w({}, r), {}, { payload: a });
        return n.isValidElement(e.content)
          ? n.cloneElement(e.content, i)
          : "function" == typeof e.content
          ? n.createElement(e.content, i)
          : n.createElement(d, i);
      }
      function x(e) {
        var t = (0, g.j)();
        return (
          (0, n.useEffect)(() => {
            t((0, O.h1)(e));
          }, [t, e]),
          null
        );
      }
      function M(e) {
        var t = (0, g.j)();
        return (
          (0, n.useEffect)(
            () => (
              t((0, O.hx)(e)),
              () => {
                t((0, O.hx)({ width: 0, height: 0 }));
              }
            ),
            [t, e]
          ),
          null
        );
      }
      function k(e) {
        var t = (0, g.G)(v.g0),
          r = (0, i.M)(),
          o = (0, h.Kp)(),
          { width: l, height: c, wrapperStyle: u, portal: s } = e,
          [p, f] = (0, b.V)([t]),
          d = (0, h.yi)(),
          y = (0, h.rY)(),
          m = d - (o.left || 0) - (o.right || 0),
          O = D.getWidthOrHeight(e.layout, c, l, m),
          P = s
            ? u
            : w(
                w(
                  {
                    position: "absolute",
                    width: (null == O ? void 0 : O.width) || l || "auto",
                    height: (null == O ? void 0 : O.height) || c || "auto",
                  },
                  (function (e, t, r, n, a, i) {
                    var o,
                      l,
                      { layout: c, align: u, verticalAlign: s } = t;
                    return (
                      (e &&
                        ((void 0 !== e.left && null !== e.left) ||
                          (void 0 !== e.right && null !== e.right))) ||
                        (o =
                          "center" === u && "vertical" === c
                            ? { left: ((n || 0) - i.width) / 2 }
                            : "right" === u
                            ? { right: (r && r.right) || 0 }
                            : { left: (r && r.left) || 0 }),
                      (e &&
                        ((void 0 !== e.top && null !== e.top) ||
                          (void 0 !== e.bottom && null !== e.bottom))) ||
                        (l =
                          "middle" === s
                            ? { top: ((a || 0) - i.height) / 2 }
                            : "bottom" === s
                            ? { bottom: (r && r.bottom) || 0 }
                            : { top: (r && r.top) || 0 }),
                      w(w({}, o), l)
                    );
                  })(u, e, o, d, y, p)
                ),
                u
              ),
          E = null != s ? s : r;
        if (null == E) return null;
        var A = n.createElement(
          "div",
          { className: "recharts-legend-wrapper", style: P, ref: f },
          n.createElement(x, {
            layout: e.layout,
            align: e.align,
            verticalAlign: e.verticalAlign,
            itemSorter: e.itemSorter,
          }),
          n.createElement(M, { width: p.width, height: p.height }),
          n.createElement(
            T,
            j({}, e, O, {
              margin: o,
              chartWidth: d,
              chartHeight: y,
              contextPayload: t,
            })
          )
        );
        return (0, a.createPortal)(A, E);
      }
      class D extends n.PureComponent {
        static getWidthOrHeight(e, t, r, n) {
          return "vertical" === e && (0, y.Et)(t)
            ? { height: t }
            : "horizontal" === e
            ? { width: r || n }
            : null;
        }
        render() {
          return n.createElement(k, this.props);
        }
      }
      A(D, "displayName", "Legend"),
        A(D, "defaultProps", {
          align: "center",
          iconSize: 14,
          itemSorter: "value",
          layout: "horizontal",
          verticalAlign: "bottom",
        });
    },
    80931: (e, t, r) => {
      e.exports = r(86006).isPlainObject;
    },
    86006: (e, t) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.isPlainObject = function (e) {
          if ("object" != typeof e || null == e) return !1;
          if (null === Object.getPrototypeOf(e)) return !0;
          if ("[object Object]" !== Object.prototype.toString.call(e)) {
            let t = e[Symbol.toStringTag];
            return (
              null != t &&
              !!Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)
                ?.writable &&
              e.toString() === `[object ${t}]`
            );
          }
          let t = e;
          for (; null !== Object.getPrototypeOf(t); )
            t = Object.getPrototypeOf(t);
          return Object.getPrototypeOf(e) === t;
        });
    },
    90170: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => P });
      var n = r(12115),
        a = r(46641),
        i = r(49972),
        o = r(59068),
        l = r(95932),
        c = r(73433),
        u = r(81971),
        s = r(2267);
      function p(e) {
        var t = (0, u.j)();
        return (
          (0, n.useEffect)(() => {
            t((0, s.U)(e));
          }, [t, e]),
          null
        );
      }
      var f = r(75380),
        d = r(93389),
        y = r(78892),
        m = ["width", "height", "layout"];
      function g() {
        return (g = Object.assign
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
      var v = {
          accessibilityLayer: !0,
          stackOffset: "none",
          barCategoryGap: "10%",
          barGap: 4,
          margin: { top: 5, right: 5, bottom: 5, left: 5 },
          reverseStackOrder: !1,
          syncMethod: "index",
          layout: "radial",
        },
        b = (0, n.forwardRef)(function (e, t) {
          var r,
            a = (0, d.e)(e.categoricalChartProps, v),
            { width: u, height: s, layout: b } = a,
            h = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                a = (function (e, t) {
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
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                  (r = i[n]),
                    -1 === t.indexOf(r) &&
                      {}.propertyIsEnumerable.call(e, r) &&
                      (a[r] = e[r]);
              }
              return a;
            })(a, m);
          if (!(0, y.F)(u) || !(0, y.F)(s)) return null;
          var {
            chartName: O,
            defaultTooltipEventType: P,
            validateTooltipEventTypes: j,
            tooltipPayloadSearcher: E,
          } = e;
          return n.createElement(
            i.J,
            {
              preloadedState: {
                options: {
                  chartName: O,
                  defaultTooltipEventType: P,
                  validateTooltipEventTypes: j,
                  tooltipPayloadSearcher: E,
                  eventEmitter: void 0,
                },
              },
              reduxStoreName: null != (r = a.id) ? r : O,
            },
            n.createElement(o.TK, { chartData: a.data }),
            n.createElement(l.s, {
              width: u,
              height: s,
              layout: b,
              margin: a.margin,
            }),
            n.createElement(c.p, {
              accessibilityLayer: a.accessibilityLayer,
              barCategoryGap: a.barCategoryGap,
              maxBarSize: a.maxBarSize,
              stackOffset: a.stackOffset,
              barGap: a.barGap,
              barSize: a.barSize,
              syncId: a.syncId,
              syncMethod: a.syncMethod,
              className: a.className,
            }),
            n.createElement(p, {
              cx: a.cx,
              cy: a.cy,
              startAngle: a.startAngle,
              endAngle: a.endAngle,
              innerRadius: a.innerRadius,
              outerRadius: a.outerRadius,
            }),
            n.createElement(f.L, g({ width: u, height: s }, h, { ref: t }))
          );
        }),
        h = ["item"],
        O = {
          layout: "centric",
          startAngle: 0,
          endAngle: 360,
          cx: "50%",
          cy: "50%",
          innerRadius: 0,
          outerRadius: "80%",
        },
        P = (0, n.forwardRef)((e, t) => {
          var r = (0, d.e)(e, O);
          return n.createElement(b, {
            chartName: "PieChart",
            defaultTooltipEventType: "item",
            validateTooltipEventTypes: h,
            tooltipPayloadSearcher: a.uN,
            categoricalChartProps: r,
            ref: t,
          });
        });
    },
  },
]);
