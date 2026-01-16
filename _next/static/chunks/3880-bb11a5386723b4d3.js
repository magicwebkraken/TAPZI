(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3880],
  {
    52: (t, e, r) => {
      "use strict";
      function n(t) {
        return `Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
      }
      r.d(e, {
        HY: () => c,
        Qd: () => u,
        Tw: () => f,
        Zz: () => s,
        ve: () => h,
        y$: () => l,
      });
      var i =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable",
        a = () => Math.random().toString(36).substring(7).split("").join("."),
        o = {
          INIT: `@@redux/INIT${a()}`,
          REPLACE: `@@redux/REPLACE${a()}`,
          PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${a()}`,
        };
      function u(t) {
        if ("object" != typeof t || null === t) return !1;
        let e = t;
        for (; null !== Object.getPrototypeOf(e); )
          e = Object.getPrototypeOf(e);
        return (
          Object.getPrototypeOf(t) === e || null === Object.getPrototypeOf(t)
        );
      }
      function l(t, e, r) {
        if ("function" != typeof t) throw Error(n(2));
        if (
          ("function" == typeof e && "function" == typeof r) ||
          ("function" == typeof r && "function" == typeof arguments[3])
        )
          throw Error(n(0));
        if (
          ("function" == typeof e && void 0 === r && ((r = e), (e = void 0)),
          void 0 !== r)
        ) {
          if ("function" != typeof r) throw Error(n(1));
          return r(l)(t, e);
        }
        let a = t,
          c = e,
          s = new Map(),
          f = s,
          h = 0,
          d = !1;
        function p() {
          f === s &&
            ((f = new Map()),
            s.forEach((t, e) => {
              f.set(e, t);
            }));
        }
        function y() {
          if (d) throw Error(n(3));
          return c;
        }
        function v(t) {
          if ("function" != typeof t) throw Error(n(4));
          if (d) throw Error(n(5));
          let e = !0;
          p();
          let r = h++;
          return (
            f.set(r, t),
            function () {
              if (e) {
                if (d) throw Error(n(6));
                (e = !1), p(), f.delete(r), (s = null);
              }
            }
          );
        }
        function g(t) {
          if (!u(t)) throw Error(n(7));
          if (void 0 === t.type) throw Error(n(8));
          if ("string" != typeof t.type) throw Error(n(17));
          if (d) throw Error(n(9));
          try {
            (d = !0), (c = a(c, t));
          } finally {
            d = !1;
          }
          return (
            (s = f).forEach((t) => {
              t();
            }),
            t
          );
        }
        return (
          g({ type: o.INIT }),
          {
            dispatch: g,
            subscribe: v,
            getState: y,
            replaceReducer: function (t) {
              if ("function" != typeof t) throw Error(n(10));
              (a = t), g({ type: o.REPLACE });
            },
            [i]: function () {
              return {
                subscribe(t) {
                  if ("object" != typeof t || null === t) throw Error(n(11));
                  function e() {
                    t.next && t.next(y());
                  }
                  return e(), { unsubscribe: v(e) };
                },
                [i]() {
                  return this;
                },
              };
            },
          }
        );
      }
      function c(t) {
        let e,
          r = Object.keys(t),
          i = {};
        for (let e = 0; e < r.length; e++) {
          let n = r[e];
          "function" == typeof t[n] && (i[n] = t[n]);
        }
        let a = Object.keys(i);
        try {
          Object.keys(i).forEach((t) => {
            let e = i[t];
            if (void 0 === e(void 0, { type: o.INIT })) throw Error(n(12));
            if (void 0 === e(void 0, { type: o.PROBE_UNKNOWN_ACTION() }))
              throw Error(n(13));
          });
        } catch (t) {
          e = t;
        }
        return function (t = {}, r) {
          if (e) throw e;
          let o = !1,
            u = {};
          for (let e = 0; e < a.length; e++) {
            let l = a[e],
              c = i[l],
              s = t[l],
              f = c(s, r);
            if (void 0 === f) throw (r && r.type, Error(n(14)));
            (u[l] = f), (o = o || f !== s);
          }
          return (o = o || a.length !== Object.keys(t).length) ? u : t;
        };
      }
      function s(...t) {
        return 0 === t.length
          ? (t) => t
          : 1 === t.length
          ? t[0]
          : t.reduce(
              (t, e) =>
                (...r) =>
                  t(e(...r))
            );
      }
      function f(...t) {
        return (e) => (r, i) => {
          let a = e(r, i),
            o = () => {
              throw Error(n(15));
            },
            u = { getState: a.getState, dispatch: (t, ...e) => o(t, ...e) };
          return (
            (o = s(...t.map((t) => t(u)))(a.dispatch)), { ...a, dispatch: o }
          );
        };
      }
      function h(t) {
        return u(t) && "type" in t && "string" == typeof t.type;
      }
    },
    675: (t, e, r) => {
      "use strict";
      r.d(e, { R: () => n });
      var n = function (t, e) {
        for (
          var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), i = 2;
          i < r;
          i++
        )
          n[i - 2] = arguments[i];
      };
    },
    841: (t, e, r) => {
      "use strict";
      r.d(e, { $7: () => f, Ru: () => s, uZ: () => c });
      var n = r(5710),
        i = r(34890),
        a = r(20215),
        o = r(94732),
        u = r(14299),
        l = r(60841),
        c = (0, n.VP)("keyDown"),
        s = (0, n.VP)("focus"),
        f = (0, n.Nc)();
      f.startListening({
        actionCreator: c,
        effect: (t, e) => {
          var r = e.getState();
          if (!1 !== r.rootProps.accessibilityLayer) {
            var { keyboardInteraction: n } = r.tooltip,
              c = t.payload;
            if ("ArrowRight" === c || "ArrowLeft" === c || "Enter" === c) {
              var s = Number((0, l.P)(n, (0, a.n4)(r))),
                f = (0, a.R4)(r);
              if ("Enter" === c) {
                var h = (0, o.pg)(r, "axis", "hover", String(n.index));
                e.dispatch(
                  (0, i.o4)({
                    active: !n.active,
                    activeIndex: n.index,
                    activeDataKey: n.dataKey,
                    activeCoordinate: h,
                  })
                );
                return;
              }
              var d =
                s +
                ("ArrowRight" === c ? 1 : -1) *
                  ("left-to-right" === (0, u._y)(r) ? 1 : -1);
              if (null != f && !(d >= f.length) && !(d < 0)) {
                var p = (0, o.pg)(r, "axis", "hover", String(d));
                e.dispatch(
                  (0, i.o4)({
                    active: !0,
                    activeIndex: d.toString(),
                    activeDataKey: void 0,
                    activeCoordinate: p,
                  })
                );
              }
            }
          }
        },
      }),
        f.startListening({
          actionCreator: s,
          effect: (t, e) => {
            var r = e.getState();
            if (!1 !== r.rootProps.accessibilityLayer) {
              var { keyboardInteraction: n } = r.tooltip;
              if (!n.active && null == n.index) {
                var a = (0, o.pg)(r, "axis", "hover", String("0"));
                e.dispatch(
                  (0, i.o4)({
                    activeDataKey: void 0,
                    active: !0,
                    activeIndex: "0",
                    activeCoordinate: a,
                  })
                );
              }
            }
          },
        });
    },
    1147: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.isPlainObject = function (t) {
          if (!t || "object" != typeof t) return !1;
          let e = Object.getPrototypeOf(t);
          return (
            (null === e ||
              e === Object.prototype ||
              null === Object.getPrototypeOf(e)) &&
            "[object Object]" === Object.prototype.toString.call(t)
          );
        });
    },
    2267: (t, e, r) => {
      "use strict";
      r.d(e, { J: () => a, U: () => i });
      var n = (0, r(5710).Z0)({
          name: "polarOptions",
          initialState: null,
          reducers: { updatePolarOptions: (t, e) => e.payload },
        }),
        { updatePolarOptions: i } = n.actions,
        a = n.reducer;
    },
    2348: (t, e, r) => {
      "use strict";
      r.d(e, { W: () => l });
      var n = r(12115),
        i = r(52596),
        a = r(70788),
        o = ["children", "className"];
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (t[n] = r[n]));
              }
              return t;
            }).apply(null, arguments);
      }
      var l = n.forwardRef((t, e) => {
        var { children: r, className: l } = t,
          c = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = (function (t, e) {
                if (null == t) return {};
                var r = {};
                for (var n in t)
                  if ({}.hasOwnProperty.call(t, n)) {
                    if (-1 !== e.indexOf(n)) continue;
                    r[n] = t[n];
                  }
                return r;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(t);
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  -1 === e.indexOf(r) &&
                    {}.propertyIsEnumerable.call(t, r) &&
                    (i[r] = t[r]);
            }
            return i;
          })(t, o),
          s = (0, i.$)("recharts-layer", l);
        return n.createElement(
          "g",
          u({ className: s }, (0, a.J9)(c, !0), { ref: e }),
          r
        );
      });
    },
    2494: (t, e, r) => {
      "use strict";
      r.d(e, { s: () => a });
      var n = r(60512),
        i = r.n(n);
      function a(t, e, r) {
        return !0 === e ? i()(t, r) : "function" == typeof e ? i()(t, e) : t;
      }
    },
    2589: (t, e, r) => {
      "use strict";
      r.d(e, { A$: () => i, HK: () => o, Lp: () => n, et: () => a });
      var n = (t) => t.layout.width,
        i = (t) => t.layout.height,
        a = (t) => t.layout.scale,
        o = (t) => t.layout.margin;
    },
    2767: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.noop = function () {});
    },
    4993: (t, e, r) => {
      "use strict";
      var n = r(12115);
      "function" == typeof Object.is && Object.is,
        n.useSyncExternalStore,
        n.useRef,
        n.useEffect,
        n.useMemo,
        n.useDebugValue;
    },
    5710: (t, e, r) => {
      "use strict";
      r.d(e, { U1: () => m, VP: () => c, Nc: () => ty, Z0: () => C });
      var n = r(52);
      function i(t) {
        return ({ dispatch: e, getState: r }) =>
          (n) =>
          (i) =>
            "function" == typeof i ? i(e, r, t) : n(i);
      }
      var a = i(),
        o = r(74532),
        u =
          (r(87358),
          "undefined" != typeof window &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : function () {
                if (0 != arguments.length)
                  return "object" == typeof arguments[0]
                    ? n.Zz
                    : n.Zz.apply(null, arguments);
              });
      "undefined" != typeof window &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__;
      var l = (t) => t && "function" == typeof t.match;
      function c(t, e) {
        function r(...n) {
          if (e) {
            let r = e(...n);
            if (!r) throw Error(tw(0));
            return {
              type: t,
              payload: r.payload,
              ...("meta" in r && { meta: r.meta }),
              ...("error" in r && { error: r.error }),
            };
          }
          return { type: t, payload: n[0] };
        }
        return (
          (r.toString = () => `${t}`),
          (r.type = t),
          (r.match = (e) => (0, n.ve)(e) && e.type === t),
          r
        );
      }
      function s(t) {
        return ["type", "payload", "error", "meta"].indexOf(t) > -1;
      }
      var f = class t extends Array {
        constructor(...e) {
          super(...e), Object.setPrototypeOf(this, t.prototype);
        }
        static get [Symbol.species]() {
          return t;
        }
        concat(...t) {
          return super.concat.apply(this, t);
        }
        prepend(...e) {
          return 1 === e.length && Array.isArray(e[0])
            ? new t(...e[0].concat(this))
            : new t(...e.concat(this));
        }
      };
      function h(t) {
        return (0, o.a6)(t) ? (0, o.jM)(t, () => {}) : t;
      }
      function d(t, e, r) {
        return t.has(e) ? t.get(e) : t.set(e, r(e)).get(e);
      }
      var p = () =>
          function (t) {
            let {
                thunk: e = !0,
                immutableCheck: r = !0,
                serializableCheck: n = !0,
                actionCreatorCheck: o = !0,
              } = t ?? {},
              u = new f();
            return (
              e &&
                ("boolean" == typeof e
                  ? u.push(a)
                  : u.push(i(e.extraArgument))),
              u
            );
          },
        y = (t) => (e) => {
          setTimeout(e, t);
        },
        v =
          (t = { type: "raf" }) =>
          (e) =>
          (...r) => {
            let n = e(...r),
              i = !0,
              a = !1,
              o = !1,
              u = new Set(),
              l =
                "tick" === t.type
                  ? queueMicrotask
                  : "raf" === t.type
                  ? "undefined" != typeof window && window.requestAnimationFrame
                    ? window.requestAnimationFrame
                    : y(10)
                  : "callback" === t.type
                  ? t.queueNotification
                  : y(t.timeout),
              c = () => {
                (o = !1), a && ((a = !1), u.forEach((t) => t()));
              };
            return Object.assign({}, n, {
              subscribe(t) {
                let e = n.subscribe(() => i && t());
                return (
                  u.add(t),
                  () => {
                    e(), u.delete(t);
                  }
                );
              },
              dispatch(t) {
                try {
                  return (
                    (a = !(i = !t?.meta?.RTK_autoBatch)) &&
                      !o &&
                      ((o = !0), l(c)),
                    n.dispatch(t)
                  );
                } finally {
                  i = !0;
                }
              },
            });
          },
        g = (t) =>
          function (e) {
            let { autoBatch: r = !0 } = e ?? {},
              n = new f(t);
            return r && n.push(v("object" == typeof r ? r : void 0)), n;
          };
      function m(t) {
        let e,
          r,
          i = p(),
          {
            reducer: a,
            middleware: o,
            devTools: l = !0,
            duplicateMiddlewareCheck: c = !0,
            preloadedState: s,
            enhancers: f,
          } = t || {};
        if ("function" == typeof a) e = a;
        else if ((0, n.Qd)(a)) e = (0, n.HY)(a);
        else throw Error(tw(1));
        r = "function" == typeof o ? o(i) : i();
        let h = n.Zz;
        l && (h = u({ trace: !1, ...("object" == typeof l && l) }));
        let d = g((0, n.Tw)(...r)),
          y = h(...("function" == typeof f ? f(d) : d()));
        return (0, n.y$)(e, s, y);
      }
      function b(t) {
        let e,
          r = {},
          n = [],
          i = {
            addCase(t, e) {
              let n = "string" == typeof t ? t : t.type;
              if (!n) throw Error(tw(28));
              if (n in r) throw Error(tw(29));
              return (r[n] = e), i;
            },
            addMatcher: (t, e) => (n.push({ matcher: t, reducer: e }), i),
            addDefaultCase: (t) => ((e = t), i),
          };
        return t(i), [r, n, e];
      }
      var x = (t, e) => (l(t) ? t.match(e) : t(e));
      function w(...t) {
        return (e) => t.some((t) => x(t, e));
      }
      var O = (t = 21) => {
          let e = "",
            r = t;
          for (; r--; )
            e +=
              "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[
                (64 * Math.random()) | 0
              ];
          return e;
        },
        M = ["name", "message", "stack", "code"],
        j = class {
          constructor(t, e) {
            (this.payload = t), (this.meta = e);
          }
          _type;
        },
        S = class {
          constructor(t, e) {
            (this.payload = t), (this.meta = e);
          }
          _type;
        },
        _ = (t) => {
          if ("object" == typeof t && null !== t) {
            let e = {};
            for (let r of M) "string" == typeof t[r] && (e[r] = t[r]);
            return e;
          }
          return { message: String(t) };
        },
        P = "External signal was aborted";
      function A(t) {
        if (t.meta && t.meta.rejectedWithValue) throw t.payload;
        if (t.error) throw t.error;
        return t.payload;
      }
      var E = Symbol.for("rtk-slice-createasyncthunk"),
        T = ((t) => (
          (t.reducer = "reducer"),
          (t.reducerWithPrepare = "reducerWithPrepare"),
          (t.asyncThunk = "asyncThunk"),
          t
        ))(T || {}),
        C = (function ({ creators: t } = {}) {
          let e = t?.asyncThunk?.[E];
          return function (t) {
            let r,
              { name: n, reducerPath: i = n } = t;
            if (!n) throw Error(tw(11));
            let a =
                ("function" == typeof t.reducers
                  ? t.reducers(
                      (function () {
                        function t(t, e) {
                          return {
                            _reducerDefinitionType: "asyncThunk",
                            payloadCreator: t,
                            ...e,
                          };
                        }
                        return (
                          (t.withTypes = () => t),
                          {
                            reducer: (t) =>
                              Object.assign(
                                { [t.name]: (...e) => t(...e) }[t.name],
                                { _reducerDefinitionType: "reducer" }
                              ),
                            preparedReducer: (t, e) => ({
                              _reducerDefinitionType: "reducerWithPrepare",
                              prepare: t,
                              reducer: e,
                            }),
                            asyncThunk: t,
                          }
                        );
                      })()
                    )
                  : t.reducers) || {},
              u = Object.keys(a),
              l = {},
              s = {},
              f = {},
              p = [],
              y = {
                addCase(t, e) {
                  let r = "string" == typeof t ? t : t.type;
                  if (!r) throw Error(tw(12));
                  if (r in s) throw Error(tw(13));
                  return (s[r] = e), y;
                },
                addMatcher: (t, e) => (p.push({ matcher: t, reducer: e }), y),
                exposeAction: (t, e) => ((f[t] = e), y),
                exposeCaseReducer: (t, e) => ((l[t] = e), y),
              };
            function v() {
              let [e = {}, r = [], n] =
                  "function" == typeof t.extraReducers
                    ? b(t.extraReducers)
                    : [t.extraReducers],
                i = { ...e, ...s };
              return (function (t, e) {
                let r,
                  [n, i, a] = b(e);
                if ("function" == typeof t) r = () => h(t());
                else {
                  let e = h(t);
                  r = () => e;
                }
                function u(t = r(), e) {
                  let l = [
                    n[e.type],
                    ...i
                      .filter(({ matcher: t }) => t(e))
                      .map(({ reducer: t }) => t),
                  ];
                  return (
                    0 === l.filter((t) => !!t).length && (l = [a]),
                    l.reduce((t, r) => {
                      if (r)
                        if ((0, o.Qx)(t)) {
                          let n = r(t, e);
                          return void 0 === n ? t : n;
                        } else {
                          if ((0, o.a6)(t)) return (0, o.jM)(t, (t) => r(t, e));
                          let n = r(t, e);
                          if (void 0 === n) {
                            if (null === t) return t;
                            throw Error(
                              "A case reducer on a non-draftable value must not return undefined"
                            );
                          }
                          return n;
                        }
                      return t;
                    }, t)
                  );
                }
                return (u.getInitialState = r), u;
              })(t.initialState, (t) => {
                for (let e in i) t.addCase(e, i[e]);
                for (let e of p) t.addMatcher(e.matcher, e.reducer);
                for (let e of r) t.addMatcher(e.matcher, e.reducer);
                n && t.addDefaultCase(n);
              });
            }
            u.forEach((r) => {
              let i = a[r],
                o = {
                  reducerName: r,
                  type: `${n}/${r}`,
                  createNotation: "function" == typeof t.reducers,
                };
              "asyncThunk" === i._reducerDefinitionType
                ? (function ({ type: t, reducerName: e }, r, n, i) {
                    if (!i) throw Error(tw(18));
                    let {
                        payloadCreator: a,
                        fulfilled: o,
                        pending: u,
                        rejected: l,
                        settled: c,
                        options: s,
                      } = r,
                      f = i(t, a, s);
                    n.exposeAction(e, f),
                      o && n.addCase(f.fulfilled, o),
                      u && n.addCase(f.pending, u),
                      l && n.addCase(f.rejected, l),
                      c && n.addMatcher(f.settled, c),
                      n.exposeCaseReducer(e, {
                        fulfilled: o || k,
                        pending: u || k,
                        rejected: l || k,
                        settled: c || k,
                      });
                  })(o, i, y, e)
                : (function (
                    { type: t, reducerName: e, createNotation: r },
                    n,
                    i
                  ) {
                    let a, o;
                    if ("reducer" in n) {
                      if (
                        r &&
                        "reducerWithPrepare" !== n._reducerDefinitionType
                      )
                        throw Error(tw(17));
                      (a = n.reducer), (o = n.prepare);
                    } else a = n;
                    i.addCase(t, a)
                      .exposeCaseReducer(e, a)
                      .exposeAction(e, o ? c(t, o) : c(t));
                  })(o, i, y);
            });
            let g = (t) => t,
              m = new Map(),
              x = new WeakMap();
            function w(t, e) {
              return r || (r = v()), r(t, e);
            }
            function O() {
              return r || (r = v()), r.getInitialState();
            }
            function M(e, r = !1) {
              function n(t) {
                let i = t[e];
                return void 0 === i && r && (i = d(x, n, O)), i;
              }
              function i(e = g) {
                let n = d(m, r, () => new WeakMap());
                return d(n, e, () => {
                  let n = {};
                  for (let [i, a] of Object.entries(t.selectors ?? {}))
                    n[i] = (function (t, e, r, n) {
                      function i(a, ...o) {
                        let u = e(a);
                        return void 0 === u && n && (u = r()), t(u, ...o);
                      }
                      return (i.unwrapped = t), i;
                    })(a, e, () => d(x, e, O), r);
                  return n;
                });
              }
              return {
                reducerPath: e,
                getSelectors: i,
                get selectors() {
                  return i(n);
                },
                selectSlice: n,
              };
            }
            let j = {
              name: n,
              reducer: w,
              actions: f,
              caseReducers: l,
              getInitialState: O,
              ...M(i),
              injectInto(t, { reducerPath: e, ...r } = {}) {
                let n = e ?? i;
                return (
                  t.inject({ reducerPath: n, reducer: w }, r),
                  { ...j, ...M(n, !0) }
                );
              },
            };
            return j;
          };
        })();
      function k() {}
      function D(t) {
        return function (e, r) {
          let n = (e) => {
            isAction(r) && Object.keys(r).every(s) ? t(r.payload, e) : t(r, e);
          };
          return null(e) ? (n(e), e) : createNextState3(e, n);
        };
      }
      function N(t, e) {
        return e(t);
      }
      function I(t) {
        return Array.isArray(t) || (t = Object.values(t)), t;
      }
      var z = "listener",
        $ = "completed",
        L = "cancelled",
        U = `task-${L}`,
        R = `task-${$}`,
        F = `${z}-${L}`,
        H = `${z}-${$}`,
        B = class {
          constructor(t) {
            (this.code = t), (this.message = `task ${L} (reason: ${t})`);
          }
          name = "TaskAbortError";
          message;
        },
        K = (t, e) => {
          if ("function" != typeof t) throw TypeError(tw(32));
        },
        Z = () => {},
        q = (t, e = Z) => (t.catch(e), t),
        W = (t, e) => (
          t.addEventListener("abort", e, { once: !0 }),
          () => t.removeEventListener("abort", e)
        ),
        G = (t, e) => {
          let r = t.signal;
          r.aborted ||
            ("reason" in r ||
              Object.defineProperty(r, "reason", {
                enumerable: !0,
                value: e,
                configurable: !0,
                writable: !0,
              }),
            t.abort(e));
        },
        Y = (t) => {
          if (t.aborted) {
            let { reason: e } = t;
            throw new B(e);
          }
        };
      function V(t, e) {
        let r = Z;
        return new Promise((n, i) => {
          let a = () => i(new B(t.reason));
          if (t.aborted) return void a();
          (r = W(t, a)), e.finally(() => r()).then(n, i);
        }).finally(() => {
          r = Z;
        });
      }
      var X = async (t, e) => {
          try {
            await Promise.resolve();
            let e = await t();
            return { status: "ok", value: e };
          } catch (t) {
            return {
              status: t instanceof B ? "cancelled" : "rejected",
              error: t,
            };
          } finally {
            e?.();
          }
        },
        J = (t) => (e) => q(V(t, e).then((e) => (Y(t), e))),
        Q = (t) => {
          let e = J(t);
          return (t) => e(new Promise((e) => setTimeout(e, t)));
        },
        { assign: tt } = Object,
        te = {},
        tr = "listenerMiddleware",
        tn = (t, e) => {
          let r = (e) => W(t, () => G(e, t.reason));
          return (n, i) => {
            K(n, "taskExecutor");
            let a = new AbortController();
            r(a);
            let o = X(
              async () => {
                Y(t), Y(a.signal);
                let e = await n({
                  pause: J(a.signal),
                  delay: Q(a.signal),
                  signal: a.signal,
                });
                return Y(a.signal), e;
              },
              () => G(a, R)
            );
            return (
              i?.autoJoin && e.push(o.catch(Z)),
              {
                result: J(t)(o),
                cancel() {
                  G(a, U);
                },
              }
            );
          };
        },
        ti = (t, e) => {
          let r = async (r, n) => {
            Y(e);
            let i = () => {},
              a = [
                new Promise((e, n) => {
                  let a = t({
                    predicate: r,
                    effect: (t, r) => {
                      r.unsubscribe(),
                        e([t, r.getState(), r.getOriginalState()]);
                    },
                  });
                  i = () => {
                    a(), n();
                  };
                }),
              ];
            null != n && a.push(new Promise((t) => setTimeout(t, n, null)));
            try {
              let t = await V(e, Promise.race(a));
              return Y(e), t;
            } finally {
              i();
            }
          };
          return (t, e) => q(r(t, e));
        },
        ta = (t) => {
          let {
            type: e,
            actionCreator: r,
            matcher: n,
            predicate: i,
            effect: a,
          } = t;
          if (e) i = c(e).match;
          else if (r) (e = r.type), (i = r.match);
          else if (n) i = n;
          else if (i);
          else throw Error(tw(21));
          return K(a, "options.listener"), { predicate: i, type: e, effect: a };
        },
        to = tt(
          (t) => {
            let { type: e, predicate: r, effect: n } = ta(t);
            return {
              id: O(),
              effect: n,
              type: e,
              predicate: r,
              pending: new Set(),
              unsubscribe: () => {
                throw Error(tw(22));
              },
            };
          },
          { withTypes: () => to }
        ),
        tu = (t, e) => {
          let { type: r, effect: n, predicate: i } = ta(e);
          return Array.from(t.values()).find(
            (t) =>
              ("string" == typeof r ? t.type === r : t.predicate === i) &&
              t.effect === n
          );
        },
        tl = (t) => {
          t.pending.forEach((t) => {
            G(t, F);
          });
        },
        tc = (t) => () => {
          t.forEach(tl), t.clear();
        },
        ts = (t, e, r) => {
          try {
            t(e, r);
          } catch (t) {
            setTimeout(() => {
              throw t;
            }, 0);
          }
        },
        tf = tt(c(`${tr}/add`), { withTypes: () => tf }),
        th = c(`${tr}/removeAll`),
        td = tt(c(`${tr}/remove`), { withTypes: () => td }),
        tp = (...t) => {
          console.error(`${tr}/error`, ...t);
        },
        ty = (t = {}) => {
          let e = new Map(),
            { extra: r, onError: i = tp } = t;
          K(i, "onError");
          let a = (t) => (
              (t.unsubscribe = () => e.delete(t.id)),
              e.set(t.id, t),
              (e) => {
                t.unsubscribe(), e?.cancelActive && tl(t);
              }
            ),
            o = (t) => a(tu(e, t) ?? to(t));
          tt(o, { withTypes: () => o });
          let u = (t) => {
            let r = tu(e, t);
            return r && (r.unsubscribe(), t.cancelActive && tl(r)), !!r;
          };
          tt(u, { withTypes: () => u });
          let l = async (t, n, a, u) => {
              let l = new AbortController(),
                c = ti(o, l.signal),
                s = [];
              try {
                t.pending.add(l),
                  await Promise.resolve(
                    t.effect(
                      n,
                      tt({}, a, {
                        getOriginalState: u,
                        condition: (t, e) => c(t, e).then(Boolean),
                        take: c,
                        delay: Q(l.signal),
                        pause: J(l.signal),
                        extra: r,
                        signal: l.signal,
                        fork: tn(l.signal, s),
                        unsubscribe: t.unsubscribe,
                        subscribe: () => {
                          e.set(t.id, t);
                        },
                        cancelActiveListeners: () => {
                          t.pending.forEach((t, e, r) => {
                            t !== l && (G(t, F), r.delete(t));
                          });
                        },
                        cancel: () => {
                          G(l, F), t.pending.delete(l);
                        },
                        throwIfCancelled: () => {
                          Y(l.signal);
                        },
                      })
                    )
                  );
              } catch (t) {
                t instanceof B || ts(i, t, { raisedBy: "effect" });
              } finally {
                await Promise.all(s), G(l, H), t.pending.delete(l);
              }
            },
            c = tc(e);
          return {
            middleware: (t) => (r) => (a) => {
              let s;
              if (!(0, n.ve)(a)) return r(a);
              if (tf.match(a)) return o(a.payload);
              if (th.match(a)) return void c();
              if (td.match(a)) return u(a.payload);
              let f = t.getState(),
                h = () => {
                  if (f === te) throw Error(tw(23));
                  return f;
                };
              try {
                if (((s = r(a)), e.size > 0)) {
                  let r = t.getState();
                  for (let n of Array.from(e.values())) {
                    let e = !1;
                    try {
                      e = n.predicate(a, r, f);
                    } catch (t) {
                      (e = !1), ts(i, t, { raisedBy: "predicate" });
                    }
                    e && l(n, a, t, h);
                  }
                }
              } finally {
                f = te;
              }
              return s;
            },
            startListening: o,
            stopListening: u,
            clearListeners: c,
          };
        },
        tv = (t) => "reducerPath" in t && "string" == typeof t.reducerPath,
        tg = Symbol.for("rtk-state-proxy-original"),
        tm = (t) => !!t && !!t[tg],
        tb = new WeakMap(),
        tx = {};
      function tw(t) {
        return `Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
      }
    },
    6115: (t, e, r) => {
      "use strict";
      var n = r(12115),
        i = r(49033),
        a =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        o = i.useSyncExternalStore,
        u = n.useRef,
        l = n.useEffect,
        c = n.useMemo,
        s = n.useDebugValue;
      e.useSyncExternalStoreWithSelector = function (t, e, r, n, i) {
        var f = u(null);
        if (null === f.current) {
          var h = { hasValue: !1, value: null };
          f.current = h;
        } else h = f.current;
        var d = o(
          t,
          (f = c(
            function () {
              function t(t) {
                if (!l) {
                  if (
                    ((l = !0), (o = t), (t = n(t)), void 0 !== i && h.hasValue)
                  ) {
                    var e = h.value;
                    if (i(e, t)) return (u = e);
                  }
                  return (u = t);
                }
                if (((e = u), a(o, t))) return e;
                var r = n(t);
                return void 0 !== i && i(e, r)
                  ? ((o = t), e)
                  : ((o = t), (u = r));
              }
              var o,
                u,
                l = !1,
                c = void 0 === r ? null : r;
              return [
                function () {
                  return t(e());
                },
                null === c
                  ? void 0
                  : function () {
                      return t(c());
                    },
              ];
            },
            [e, r, n, i]
          ))[0],
          f[1]
        );
        return (
          l(
            function () {
              (h.hasValue = !0), (h.value = d);
            },
            [d]
          ),
          s(d),
          d
        );
      };
    },
    7547: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(23676),
        i = r(72465),
        a = r(10656),
        o = r(81571);
      e.uniqBy = function (t, e = i.identity) {
        return a.isArrayLikeObject(t)
          ? n.uniqBy(Array.from(t), o.iteratee(e))
          : [];
      };
    },
    8287: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.isSymbol = function (t) {
          return "symbol" == typeof t || t instanceof Symbol;
        });
    },
    8870: function (t, e, r) {
      var n;
      !(function (i) {
        "use strict";
        var a,
          o = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
          },
          u = !0,
          l = "[DecimalError] ",
          c = l + "Invalid argument: ",
          s = l + "Exponent out of range: ",
          f = Math.floor,
          h = Math.pow,
          d = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          p = f(1286742750677284.5),
          y = {};
        function v(t, e) {
          var r,
            n,
            i,
            a,
            o,
            l,
            c,
            s,
            f = t.constructor,
            h = f.precision;
          if (!t.s || !e.s) return e.s || (e = new f(t)), u ? _(e, h) : e;
          if (
            ((c = t.d),
            (s = e.d),
            (o = t.e),
            (i = e.e),
            (c = c.slice()),
            (a = o - i))
          ) {
            for (
              a < 0
                ? ((n = c), (a = -a), (l = s.length))
                : ((n = s), (i = o), (l = c.length)),
                a > (l = (o = Math.ceil(h / 7)) > l ? o + 1 : l + 1) &&
                  ((a = l), (n.length = 1)),
                n.reverse();
              a--;

            )
              n.push(0);
            n.reverse();
          }
          for (
            (l = c.length) - (a = s.length) < 0 &&
              ((a = l), (n = s), (s = c), (c = n)),
              r = 0;
            a;

          )
            (r = ((c[--a] = c[a] + s[a] + r) / 1e7) | 0), (c[a] %= 1e7);
          for (r && (c.unshift(r), ++i), l = c.length; 0 == c[--l]; ) c.pop();
          return (e.d = c), (e.e = i), u ? _(e, h) : e;
        }
        function g(t, e, r) {
          if (t !== ~~t || t < e || t > r) throw Error(c + t);
        }
        function m(t) {
          var e,
            r,
            n,
            i = t.length - 1,
            a = "",
            o = t[0];
          if (i > 0) {
            for (a += o, e = 1; e < i; e++)
              (r = 7 - (n = t[e] + "").length) && (a += M(r)), (a += n);
            (r = 7 - (n = (o = t[e]) + "").length) && (a += M(r));
          } else if (0 === o) return "0";
          for (; o % 10 == 0; ) o /= 10;
          return a + o;
        }
        (y.absoluteValue = y.abs =
          function () {
            var t = new this.constructor(this);
            return t.s && (t.s = 1), t;
          }),
          (y.comparedTo = y.cmp =
            function (t) {
              var e, r, n, i;
              if (((t = new this.constructor(t)), this.s !== t.s))
                return this.s || -t.s;
              if (this.e !== t.e) return (this.e > t.e) ^ (this.s < 0) ? 1 : -1;
              for (
                e = 0, r = (n = this.d.length) < (i = t.d.length) ? n : i;
                e < r;
                ++e
              )
                if (this.d[e] !== t.d[e])
                  return (this.d[e] > t.d[e]) ^ (this.s < 0) ? 1 : -1;
              return n === i ? 0 : (n > i) ^ (this.s < 0) ? 1 : -1;
            }),
          (y.decimalPlaces = y.dp =
            function () {
              var t = this.d.length - 1,
                e = (t - this.e) * 7;
              if ((t = this.d[t])) for (; t % 10 == 0; t /= 10) e--;
              return e < 0 ? 0 : e;
            }),
          (y.dividedBy = y.div =
            function (t) {
              return b(this, new this.constructor(t));
            }),
          (y.dividedToIntegerBy = y.idiv =
            function (t) {
              var e = this.constructor;
              return _(b(this, new e(t), 0, 1), e.precision);
            }),
          (y.equals = y.eq =
            function (t) {
              return !this.cmp(t);
            }),
          (y.exponent = function () {
            return w(this);
          }),
          (y.greaterThan = y.gt =
            function (t) {
              return this.cmp(t) > 0;
            }),
          (y.greaterThanOrEqualTo = y.gte =
            function (t) {
              return this.cmp(t) >= 0;
            }),
          (y.isInteger = y.isint =
            function () {
              return this.e > this.d.length - 2;
            }),
          (y.isNegative = y.isneg =
            function () {
              return this.s < 0;
            }),
          (y.isPositive = y.ispos =
            function () {
              return this.s > 0;
            }),
          (y.isZero = function () {
            return 0 === this.s;
          }),
          (y.lessThan = y.lt =
            function (t) {
              return 0 > this.cmp(t);
            }),
          (y.lessThanOrEqualTo = y.lte =
            function (t) {
              return 1 > this.cmp(t);
            }),
          (y.logarithm = y.log =
            function (t) {
              var e,
                r = this.constructor,
                n = r.precision,
                i = n + 5;
              if (void 0 === t) t = new r(10);
              else if ((t = new r(t)).s < 1 || t.eq(a)) throw Error(l + "NaN");
              if (this.s < 1) throw Error(l + (this.s ? "NaN" : "-Infinity"));
              return this.eq(a)
                ? new r(0)
                : ((u = !1),
                  (e = b(j(this, i), j(t, i), i)),
                  (u = !0),
                  _(e, n));
            }),
          (y.minus = y.sub =
            function (t) {
              return (
                (t = new this.constructor(t)),
                this.s == t.s ? P(this, t) : v(this, ((t.s = -t.s), t))
              );
            }),
          (y.modulo = y.mod =
            function (t) {
              var e,
                r = this.constructor,
                n = r.precision;
              if (!(t = new r(t)).s) throw Error(l + "NaN");
              return this.s
                ? ((u = !1),
                  (e = b(this, t, 0, 1).times(t)),
                  (u = !0),
                  this.minus(e))
                : _(new r(this), n);
            }),
          (y.naturalExponential = y.exp =
            function () {
              return x(this);
            }),
          (y.naturalLogarithm = y.ln =
            function () {
              return j(this);
            }),
          (y.negated = y.neg =
            function () {
              var t = new this.constructor(this);
              return (t.s = -t.s || 0), t;
            }),
          (y.plus = y.add =
            function (t) {
              return (
                (t = new this.constructor(t)),
                this.s == t.s ? v(this, t) : P(this, ((t.s = -t.s), t))
              );
            }),
          (y.precision = y.sd =
            function (t) {
              var e, r, n;
              if (void 0 !== t && !!t !== t && 1 !== t && 0 !== t)
                throw Error(c + t);
              if (
                ((e = w(this) + 1),
                (r = 7 * (n = this.d.length - 1) + 1),
                (n = this.d[n]))
              ) {
                for (; n % 10 == 0; n /= 10) r--;
                for (n = this.d[0]; n >= 10; n /= 10) r++;
              }
              return t && e > r ? e : r;
            }),
          (y.squareRoot = y.sqrt =
            function () {
              var t,
                e,
                r,
                n,
                i,
                a,
                o,
                c = this.constructor;
              if (this.s < 1) {
                if (!this.s) return new c(0);
                throw Error(l + "NaN");
              }
              for (
                t = w(this),
                  u = !1,
                  0 == (i = Math.sqrt(+this)) || i == 1 / 0
                    ? (((e = m(this.d)).length + t) % 2 == 0 && (e += "0"),
                      (i = Math.sqrt(e)),
                      (t = f((t + 1) / 2) - (t < 0 || t % 2)),
                      (n = new c(
                        (e =
                          i == 1 / 0
                            ? "5e" + t
                            : (e = i.toExponential()).slice(
                                0,
                                e.indexOf("e") + 1
                              ) + t)
                      )))
                    : (n = new c(i.toString())),
                  i = o = (r = c.precision) + 3;
                ;

              )
                if (
                  ((n = (a = n).plus(b(this, a, o + 2)).times(0.5)),
                  m(a.d).slice(0, o) === (e = m(n.d)).slice(0, o))
                ) {
                  if (((e = e.slice(o - 3, o + 1)), i == o && "4999" == e)) {
                    if ((_(a, r + 1, 0), a.times(a).eq(this))) {
                      n = a;
                      break;
                    }
                  } else if ("9999" != e) break;
                  o += 4;
                }
              return (u = !0), _(n, r);
            }),
          (y.times = y.mul =
            function (t) {
              var e,
                r,
                n,
                i,
                a,
                o,
                l,
                c,
                s,
                f = this.constructor,
                h = this.d,
                d = (t = new f(t)).d;
              if (!this.s || !t.s) return new f(0);
              for (
                t.s *= this.s,
                  r = this.e + t.e,
                  (c = h.length) < (s = d.length) &&
                    ((a = h), (h = d), (d = a), (o = c), (c = s), (s = o)),
                  a = [],
                  n = o = c + s;
                n--;

              )
                a.push(0);
              for (n = s; --n >= 0; ) {
                for (e = 0, i = c + n; i > n; )
                  (l = a[i] + d[n] * h[i - n - 1] + e),
                    (a[i--] = l % 1e7 | 0),
                    (e = (l / 1e7) | 0);
                a[i] = (a[i] + e) % 1e7 | 0;
              }
              for (; !a[--o]; ) a.pop();
              return (
                e ? ++r : a.shift(),
                (t.d = a),
                (t.e = r),
                u ? _(t, f.precision) : t
              );
            }),
          (y.toDecimalPlaces = y.todp =
            function (t, e) {
              var r = this,
                n = r.constructor;
              return ((r = new n(r)), void 0 === t)
                ? r
                : (g(t, 0, 1e9),
                  void 0 === e ? (e = n.rounding) : g(e, 0, 8),
                  _(r, t + w(r) + 1, e));
            }),
          (y.toExponential = function (t, e) {
            var r,
              n = this,
              i = n.constructor;
            return (
              void 0 === t
                ? (r = A(n, !0))
                : (g(t, 0, 1e9),
                  void 0 === e ? (e = i.rounding) : g(e, 0, 8),
                  (r = A((n = _(new i(n), t + 1, e)), !0, t + 1))),
              r
            );
          }),
          (y.toFixed = function (t, e) {
            var r,
              n,
              i = this.constructor;
            return void 0 === t
              ? A(this)
              : (g(t, 0, 1e9),
                void 0 === e ? (e = i.rounding) : g(e, 0, 8),
                (r = A(
                  (n = _(new i(this), t + w(this) + 1, e)).abs(),
                  !1,
                  t + w(n) + 1
                )),
                this.isneg() && !this.isZero() ? "-" + r : r);
          }),
          (y.toInteger = y.toint =
            function () {
              var t = this.constructor;
              return _(new t(this), w(this) + 1, t.rounding);
            }),
          (y.toNumber = function () {
            return +this;
          }),
          (y.toPower = y.pow =
            function (t) {
              var e,
                r,
                n,
                i,
                o,
                c,
                s = this,
                h = s.constructor,
                d = +(t = new h(t));
              if (!t.s) return new h(a);
              if (!(s = new h(s)).s) {
                if (t.s < 1) throw Error(l + "Infinity");
                return s;
              }
              if (s.eq(a)) return s;
              if (((n = h.precision), t.eq(a))) return _(s, n);
              if (((c = (e = t.e) >= (r = t.d.length - 1)), (o = s.s), c)) {
                if ((r = d < 0 ? -d : d) <= 0x1fffffffffffff) {
                  for (
                    i = new h(a), e = Math.ceil(n / 7 + 4), u = !1;
                    r % 2 && E((i = i.times(s)).d, e), 0 !== (r = f(r / 2));

                  )
                    E((s = s.times(s)).d, e);
                  return (u = !0), t.s < 0 ? new h(a).div(i) : _(i, n);
                }
              } else if (o < 0) throw Error(l + "NaN");
              return (
                (o = o < 0 && 1 & t.d[Math.max(e, r)] ? -1 : 1),
                (s.s = 1),
                (u = !1),
                (i = t.times(j(s, n + 12))),
                (u = !0),
                ((i = x(i)).s = o),
                i
              );
            }),
          (y.toPrecision = function (t, e) {
            var r,
              n,
              i = this,
              a = i.constructor;
            return (
              void 0 === t
                ? ((r = w(i)), (n = A(i, r <= a.toExpNeg || r >= a.toExpPos)))
                : (g(t, 1, 1e9),
                  void 0 === e ? (e = a.rounding) : g(e, 0, 8),
                  (r = w((i = _(new a(i), t, e)))),
                  (n = A(i, t <= r || r <= a.toExpNeg, t))),
              n
            );
          }),
          (y.toSignificantDigits = y.tosd =
            function (t, e) {
              var r = this.constructor;
              return (
                void 0 === t
                  ? ((t = r.precision), (e = r.rounding))
                  : (g(t, 1, 1e9),
                    void 0 === e ? (e = r.rounding) : g(e, 0, 8)),
                _(new r(this), t, e)
              );
            }),
          (y.toString =
            y.valueOf =
            y.val =
            y.toJSON =
              function () {
                var t = w(this),
                  e = this.constructor;
                return A(this, t <= e.toExpNeg || t >= e.toExpPos);
              });
        var b = (function () {
          function t(t, e) {
            var r,
              n = 0,
              i = t.length;
            for (t = t.slice(); i--; )
              (r = t[i] * e + n), (t[i] = r % 1e7 | 0), (n = (r / 1e7) | 0);
            return n && t.unshift(n), t;
          }
          function e(t, e, r, n) {
            var i, a;
            if (r != n) a = r > n ? 1 : -1;
            else
              for (i = a = 0; i < r; i++)
                if (t[i] != e[i]) {
                  a = t[i] > e[i] ? 1 : -1;
                  break;
                }
            return a;
          }
          function r(t, e, r) {
            for (var n = 0; r--; )
              (t[r] -= n), (n = +(t[r] < e[r])), (t[r] = 1e7 * n + t[r] - e[r]);
            for (; !t[0] && t.length > 1; ) t.shift();
          }
          return function (n, i, a, o) {
            var u,
              c,
              s,
              f,
              h,
              d,
              p,
              y,
              v,
              g,
              m,
              b,
              x,
              O,
              M,
              j,
              S,
              P,
              A = n.constructor,
              E = n.s == i.s ? 1 : -1,
              T = n.d,
              C = i.d;
            if (!n.s) return new A(n);
            if (!i.s) throw Error(l + "Division by zero");
            for (
              s = 0,
                c = n.e - i.e,
                S = C.length,
                M = T.length,
                y = (p = new A(E)).d = [];
              C[s] == (T[s] || 0);

            )
              ++s;
            if (
              (C[s] > (T[s] || 0) && --c,
              (b =
                null == a ? (a = A.precision) : o ? a + (w(n) - w(i)) + 1 : a) <
                0)
            )
              return new A(0);
            if (((b = (b / 7 + 2) | 0), (s = 0), 1 == S))
              for (f = 0, C = C[0], b++; (s < M || f) && b--; s++)
                (x = 1e7 * f + (T[s] || 0)),
                  (y[s] = (x / C) | 0),
                  (f = x % C | 0);
            else {
              for (
                (f = (1e7 / (C[0] + 1)) | 0) > 1 &&
                  ((C = t(C, f)),
                  (T = t(T, f)),
                  (S = C.length),
                  (M = T.length)),
                  O = S,
                  g = (v = T.slice(0, S)).length;
                g < S;

              )
                v[g++] = 0;
              (P = C.slice()).unshift(0), (j = C[0]), C[1] >= 1e7 / 2 && ++j;
              do
                (f = 0),
                  (u = e(C, v, S, g)) < 0
                    ? ((m = v[0]),
                      S != g && (m = 1e7 * m + (v[1] || 0)),
                      (f = (m / j) | 0) > 1
                        ? (f >= 1e7 && (f = 1e7 - 1),
                          (d = (h = t(C, f)).length),
                          (g = v.length),
                          1 == (u = e(h, v, d, g)) &&
                            (f--, r(h, S < d ? P : C, d)))
                        : (0 == f && (u = f = 1), (h = C.slice())),
                      (d = h.length) < g && h.unshift(0),
                      r(v, h, g),
                      -1 == u &&
                        ((g = v.length),
                        (u = e(C, v, S, g)) < 1 &&
                          (f++, r(v, S < g ? P : C, g))),
                      (g = v.length))
                    : 0 === u && (f++, (v = [0])),
                  (y[s++] = f),
                  u && v[0] ? (v[g++] = T[O] || 0) : ((v = [T[O]]), (g = 1));
              while ((O++ < M || void 0 !== v[0]) && b--);
            }
            return y[0] || y.shift(), (p.e = c), _(p, o ? a + w(p) + 1 : a);
          };
        })();
        function x(t, e) {
          var r,
            n,
            i,
            o,
            l,
            c = 0,
            f = 0,
            d = t.constructor,
            p = d.precision;
          if (w(t) > 16) throw Error(s + w(t));
          if (!t.s) return new d(a);
          for (
            null == e ? ((u = !1), (l = p)) : (l = e), o = new d(0.03125);
            t.abs().gte(0.1);

          )
            (t = t.times(o)), (f += 5);
          for (
            l += ((Math.log(h(2, f)) / Math.LN10) * 2 + 5) | 0,
              r = n = i = new d(a),
              d.precision = l;
            ;

          ) {
            if (
              ((n = _(n.times(t), l)),
              (r = r.times(++c)),
              m((o = i.plus(b(n, r, l))).d).slice(0, l) === m(i.d).slice(0, l))
            ) {
              for (; f--; ) i = _(i.times(i), l);
              return (d.precision = p), null == e ? ((u = !0), _(i, p)) : i;
            }
            i = o;
          }
        }
        function w(t) {
          for (var e = 7 * t.e, r = t.d[0]; r >= 10; r /= 10) e++;
          return e;
        }
        function O(t, e, r) {
          if (e > t.LN10.sd())
            throw (
              ((u = !0),
              r && (t.precision = r),
              Error(l + "LN10 precision limit exceeded"))
            );
          return _(new t(t.LN10), e);
        }
        function M(t) {
          for (var e = ""; t--; ) e += "0";
          return e;
        }
        function j(t, e) {
          var r,
            n,
            i,
            o,
            c,
            s,
            f,
            h,
            d,
            p = 1,
            y = t,
            v = y.d,
            g = y.constructor,
            x = g.precision;
          if (y.s < 1) throw Error(l + (y.s ? "NaN" : "-Infinity"));
          if (y.eq(a)) return new g(0);
          if ((null == e ? ((u = !1), (h = x)) : (h = e), y.eq(10)))
            return null == e && (u = !0), O(g, h);
          if (
            ((g.precision = h += 10),
            (n = (r = m(v)).charAt(0)),
            !(15e14 > Math.abs((o = w(y)))))
          )
            return (
              (f = O(g, h + 2, x).times(o + "")),
              (y = j(new g(n + "." + r.slice(1)), h - 10).plus(f)),
              (g.precision = x),
              null == e ? ((u = !0), _(y, x)) : y
            );
          for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); )
            (n = (r = m((y = y.times(t)).d)).charAt(0)), p++;
          for (
            o = w(y),
              n > 1
                ? ((y = new g("0." + r)), o++)
                : (y = new g(n + "." + r.slice(1))),
              s = c = y = b(y.minus(a), y.plus(a), h),
              d = _(y.times(y), h),
              i = 3;
            ;

          ) {
            if (
              ((c = _(c.times(d), h)),
              m((f = s.plus(b(c, new g(i), h))).d).slice(0, h) ===
                m(s.d).slice(0, h))
            )
              return (
                (s = s.times(2)),
                0 !== o && (s = s.plus(O(g, h + 2, x).times(o + ""))),
                (s = b(s, new g(p), h)),
                (g.precision = x),
                null == e ? ((u = !0), _(s, x)) : s
              );
            (s = f), (i += 2);
          }
        }
        function S(t, e) {
          var r, n, i;
          for (
            (r = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
              (n = e.search(/e/i)) > 0
                ? (r < 0 && (r = n),
                  (r += +e.slice(n + 1)),
                  (e = e.substring(0, n)))
                : r < 0 && (r = e.length),
              n = 0;
            48 === e.charCodeAt(n);

          )
            ++n;
          for (i = e.length; 48 === e.charCodeAt(i - 1); ) --i;
          if ((e = e.slice(n, i))) {
            if (
              ((i -= n),
              (t.e = f((r = r - n - 1) / 7)),
              (t.d = []),
              (n = (r + 1) % 7),
              r < 0 && (n += 7),
              n < i)
            ) {
              for (n && t.d.push(+e.slice(0, n)), i -= 7; n < i; )
                t.d.push(+e.slice(n, (n += 7)));
              n = 7 - (e = e.slice(n)).length;
            } else n -= i;
            for (; n--; ) e += "0";
            if ((t.d.push(+e), u && (t.e > p || t.e < -p))) throw Error(s + r);
          } else (t.s = 0), (t.e = 0), (t.d = [0]);
          return t;
        }
        function _(t, e, r) {
          var n,
            i,
            a,
            o,
            l,
            c,
            d,
            y,
            v = t.d;
          for (o = 1, a = v[0]; a >= 10; a /= 10) o++;
          if ((n = e - o) < 0) (n += 7), (i = e), (d = v[(y = 0)]);
          else {
            if ((y = Math.ceil((n + 1) / 7)) >= (a = v.length)) return t;
            for (o = 1, d = a = v[y]; a >= 10; a /= 10) o++;
            (n %= 7), (i = n - 7 + o);
          }
          if (
            (void 0 !== r &&
              ((l = (d / (a = h(10, o - i - 1))) % 10 | 0),
              (c = e < 0 || void 0 !== v[y + 1] || d % a),
              (c =
                r < 4
                  ? (l || c) && (0 == r || r == (t.s < 0 ? 3 : 2))
                  : l > 5 ||
                    (5 == l &&
                      (4 == r ||
                        c ||
                        (6 == r &&
                          (n > 0 ? (i > 0 ? d / h(10, o - i) : 0) : v[y - 1]) %
                            10 &
                            1) ||
                        r == (t.s < 0 ? 8 : 7))))),
            e < 1 || !v[0])
          )
            return (
              c
                ? ((a = w(t)),
                  (v.length = 1),
                  (e = e - a - 1),
                  (v[0] = h(10, (7 - (e % 7)) % 7)),
                  (t.e = f(-e / 7) || 0))
                : ((v.length = 1), (v[0] = t.e = t.s = 0)),
              t
            );
          if (
            (0 == n
              ? ((v.length = y), (a = 1), y--)
              : ((v.length = y + 1),
                (a = h(10, 7 - n)),
                (v[y] = i > 0 ? ((d / h(10, o - i)) % h(10, i) | 0) * a : 0)),
            c)
          )
            for (;;)
              if (0 == y) {
                1e7 == (v[0] += a) && ((v[0] = 1), ++t.e);
                break;
              } else {
                if (((v[y] += a), 1e7 != v[y])) break;
                (v[y--] = 0), (a = 1);
              }
          for (n = v.length; 0 === v[--n]; ) v.pop();
          if (u && (t.e > p || t.e < -p)) throw Error(s + w(t));
          return t;
        }
        function P(t, e) {
          var r,
            n,
            i,
            a,
            o,
            l,
            c,
            s,
            f,
            h,
            d = t.constructor,
            p = d.precision;
          if (!t.s || !e.s)
            return e.s ? (e.s = -e.s) : (e = new d(t)), u ? _(e, p) : e;
          if (
            ((c = t.d),
            (h = e.d),
            (n = e.e),
            (s = t.e),
            (c = c.slice()),
            (o = s - n))
          ) {
            for (
              (f = o < 0)
                ? ((r = c), (o = -o), (l = h.length))
                : ((r = h), (n = s), (l = c.length)),
                o > (i = Math.max(Math.ceil(p / 7), l) + 2) &&
                  ((o = i), (r.length = 1)),
                r.reverse(),
                i = o;
              i--;

            )
              r.push(0);
            r.reverse();
          } else {
            for (
              (f = (i = c.length) < (l = h.length)) && (l = i), i = 0;
              i < l;
              i++
            )
              if (c[i] != h[i]) {
                f = c[i] < h[i];
                break;
              }
            o = 0;
          }
          for (
            f && ((r = c), (c = h), (h = r), (e.s = -e.s)),
              l = c.length,
              i = h.length - l;
            i > 0;
            --i
          )
            c[l++] = 0;
          for (i = h.length; i > o; ) {
            if (c[--i] < h[i]) {
              for (a = i; a && 0 === c[--a]; ) c[a] = 1e7 - 1;
              --c[a], (c[i] += 1e7);
            }
            c[i] -= h[i];
          }
          for (; 0 === c[--l]; ) c.pop();
          for (; 0 === c[0]; c.shift()) --n;
          return c[0] ? ((e.d = c), (e.e = n), u ? _(e, p) : e) : new d(0);
        }
        function A(t, e, r) {
          var n,
            i = w(t),
            a = m(t.d),
            o = a.length;
          return (
            e
              ? (r && (n = r - o) > 0
                  ? (a = a.charAt(0) + "." + a.slice(1) + M(n))
                  : o > 1 && (a = a.charAt(0) + "." + a.slice(1)),
                (a = a + (i < 0 ? "e" : "e+") + i))
              : i < 0
              ? ((a = "0." + M(-i - 1) + a),
                r && (n = r - o) > 0 && (a += M(n)))
              : i >= o
              ? ((a += M(i + 1 - o)),
                r && (n = r - i - 1) > 0 && (a = a + "." + M(n)))
              : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)),
                r &&
                  (n = r - o) > 0 &&
                  (i + 1 === o && (a += "."), (a += M(n)))),
            t.s < 0 ? "-" + a : a
          );
        }
        function E(t, e) {
          if (t.length > e) return (t.length = e), !0;
        }
        function T(t) {
          if (!t || "object" != typeof t) throw Error(l + "Object expected");
          var e,
            r,
            n,
            i = [
              "precision",
              1,
              1e9,
              "rounding",
              0,
              8,
              "toExpNeg",
              -1 / 0,
              0,
              "toExpPos",
              0,
              1 / 0,
            ];
          for (e = 0; e < i.length; e += 3)
            if (void 0 !== (n = t[(r = i[e])]))
              if (f(n) === n && n >= i[e + 1] && n <= i[e + 2]) this[r] = n;
              else throw Error(c + r + ": " + n);
          if (void 0 !== (n = t[(r = "LN10")]))
            if (n == Math.LN10) this[r] = new this(n);
            else throw Error(c + r + ": " + n);
          return this;
        }
        ((o = (function t(e) {
          var r, n, i;
          function a(t) {
            if (!(this instanceof a)) return new a(t);
            if (((this.constructor = a), t instanceof a)) {
              (this.s = t.s),
                (this.e = t.e),
                (this.d = (t = t.d) ? t.slice() : t);
              return;
            }
            if ("number" == typeof t) {
              if (0 * t != 0) throw Error(c + t);
              if (t > 0) this.s = 1;
              else if (t < 0) (t = -t), (this.s = -1);
              else {
                (this.s = 0), (this.e = 0), (this.d = [0]);
                return;
              }
              if (t === ~~t && t < 1e7) {
                (this.e = 0), (this.d = [t]);
                return;
              }
              return S(this, t.toString());
            }
            if ("string" != typeof t) throw Error(c + t);
            if (
              (45 === t.charCodeAt(0)
                ? ((t = t.slice(1)), (this.s = -1))
                : (this.s = 1),
              d.test(t))
            )
              S(this, t);
            else throw Error(c + t);
          }
          if (
            ((a.prototype = y),
            (a.ROUND_UP = 0),
            (a.ROUND_DOWN = 1),
            (a.ROUND_CEIL = 2),
            (a.ROUND_FLOOR = 3),
            (a.ROUND_HALF_UP = 4),
            (a.ROUND_HALF_DOWN = 5),
            (a.ROUND_HALF_EVEN = 6),
            (a.ROUND_HALF_CEIL = 7),
            (a.ROUND_HALF_FLOOR = 8),
            (a.clone = t),
            (a.config = a.set = T),
            void 0 === e && (e = {}),
            e)
          )
            for (
              r = 0,
                i = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
              r < i.length;

            )
              e.hasOwnProperty((n = i[r++])) || (e[n] = this[n]);
          return a.config(e), a;
        })(o)).default = o.Decimal =
          o),
          (a = new o(1)),
          void 0 ===
            (n = function () {
              return o;
            }.call(e, r, e, t)) || (t.exports = n);
      })(0);
    },
    9819: (t, e, r) => {
      "use strict";
      function n(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t);
      }
      r.d(e, { A: () => n }), Array.prototype.slice;
    },
    10656: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(68179),
        i = r(99279);
      e.isArrayLikeObject = function (t) {
        return i.isObjectLike(t) && n.isArrayLike(t);
      };
    },
    10921: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(27040),
        i = r(14545),
        a = r(46200),
        o = r(64072);
      e.get = function t(e, r, u) {
        if (null == e) return u;
        switch (typeof r) {
          case "string": {
            if (n.isUnsafeProperty(r)) return u;
            let a = e[r];
            if (void 0 === a)
              if (i.isDeepKey(r)) return t(e, o.toPath(r), u);
              else return u;
            return a;
          }
          case "number":
          case "symbol": {
            "number" == typeof r && (r = a.toKey(r));
            let t = e[r];
            if (void 0 === t) return u;
            return t;
          }
          default: {
            if (Array.isArray(r)) {
              var l = e,
                c = r,
                s = u;
              if (0 === c.length) return s;
              let t = l;
              for (let e = 0; e < c.length; e++) {
                if (null == t || n.isUnsafeProperty(c[e])) return s;
                t = t[c[e]];
              }
              return void 0 === t ? s : t;
            }
            if (
              ((r = Object.is(r?.valueOf(), -0) ? "-0" : String(r)),
              n.isUnsafeProperty(r))
            )
              return u;
            let t = e[r];
            if (void 0 === t) return u;
            return t;
          }
        }
      };
    },
    11928: (t, e, r) => {
      "use strict";
      r.d(e, { i: () => o });
      var n = r(34890);
      function i(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(r), !0).forEach(function (e) {
                var n, i, a;
                (n = t),
                  (i = e),
                  (a = r[e]),
                  (i = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var o = (t, e, r, i) => {
        if (null == e) return n.k_;
        var o = (function (t, e, r) {
          return "axis" === e
            ? "click" === r
              ? t.axisInteraction.click
              : t.axisInteraction.hover
            : "click" === r
            ? t.itemInteraction.click
            : t.itemInteraction.hover;
        })(t, e, r);
        if (null == o) return n.k_;
        if (o.active) return o;
        if (t.keyboardInteraction.active) return t.keyboardInteraction;
        if (t.syncInteraction.active && null != t.syncInteraction.index)
          return t.syncInteraction;
        var u = !0 === t.settings.active;
        if (null != o.index) {
          if (u) return a(a({}, o), {}, { active: !0 });
        } else if (null != i)
          return { active: !0, coordinate: void 0, dataKey: void 0, index: i };
        return a(a({}, n.k_), {}, { coordinate: o.coordinate });
      };
    },
    12287: (t, e, r) => {
      "use strict";
      r.d(e, { E: () => n });
      var n = (t, e, r) => r;
    },
    12429: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(44117);
      e.cloneDeep = function (t) {
        return n.cloneDeepWithImpl(t, void 0, t, new Map(), void 0);
      };
    },
    14299: (t, e, r) => {
      "use strict";
      r.d(e, {
        kz: () => ia,
        fb: () => n6,
        q: () => iO,
        tP: () => iC,
        g1: () => iL,
        iv: () => ar,
        Nk: () => n5,
        pM: () => ir,
        Oz: () => ix,
        tF: () => at,
        rj: () => n2,
        ec: () => nJ,
        bb: () => ij,
        xp: () => iz,
        wL: () => iA,
        sr: () => iD,
        Qn: () => iI,
        MK: () => it,
        IO: () => n0,
        P9: () => ip,
        S5: () => is,
        PU: () => nR,
        cd: () => nH,
        eo: () => nY,
        yi: () => ih,
        ZB: () => ai,
        D5: () => iq,
        iV: () => iG,
        Hd: () => nW,
        Gx: () => au,
        DP: () => nq,
        _y: () => ac,
        AV: () => iP,
        um: () => nG,
        xM: () => iN,
        gT: () => iv,
        Kr: () => id,
        $X: () => im,
        Zi: () => aa,
        CR: () => ao,
        ld: () => nV,
        L$: () => i7,
        Rl: () => nF,
        Lw: () => i2,
        KR: () => i8,
        sf: () => nB,
        wP: () => i9,
      });
      var n,
        i,
        a,
        o,
        u,
        l,
        c,
        s = {};
      r.r(s),
        r.d(s, {
          scaleBand: () => w,
          scaleDiverging: () =>
            function t() {
              var e = tZ(r6()(tP));
              return (
                (e.copy = function () {
                  return r4(e, t());
                }),
                y.apply(e, arguments)
              );
            },
          scaleDivergingLog: () =>
            function t() {
              var e = tQ(r6()).domain([0.1, 1, 10]);
              return (
                (e.copy = function () {
                  return r4(e, t()).base(e.base());
                }),
                y.apply(e, arguments)
              );
            },
          scaleDivergingPow: () => r7,
          scaleDivergingSqrt: () => r8,
          scaleDivergingSymlog: () =>
            function t() {
              var e = t2(r6());
              return (
                (e.copy = function () {
                  return r4(e, t()).constant(e.constant());
                }),
                y.apply(e, arguments)
              );
            },
          scaleIdentity: () =>
            function t(e) {
              var r;
              function n(t) {
                return null == t || isNaN((t *= 1)) ? r : t;
              }
              return (
                (n.invert = n),
                (n.domain = n.range =
                  function (t) {
                    return arguments.length
                      ? ((e = Array.from(t, tS)), n)
                      : e.slice();
                  }),
                (n.unknown = function (t) {
                  return arguments.length ? ((r = t), n) : r;
                }),
                (n.copy = function () {
                  return t(e).unknown(r);
                }),
                (e = arguments.length ? Array.from(e, tS) : [0, 1]),
                tZ(n)
              );
            },
          scaleImplicit: () => b,
          scaleLinear: () =>
            function t() {
              var e = tD();
              return (
                (e.copy = function () {
                  return tC(e, t());
                }),
                p.apply(e, arguments),
                tZ(e)
              );
            },
          scaleLog: () =>
            function t() {
              let e = tQ(tk()).domain([1, 10]);
              return (
                (e.copy = () => tC(e, t()).base(e.base())),
                p.apply(e, arguments),
                e
              );
            },
          scaleOrdinal: () => x,
          scalePoint: () => O,
          scalePow: () => t7,
          scaleQuantile: () =>
            function t() {
              var e,
                r = [],
                n = [],
                i = [];
              function a() {
                var t = 0,
                  e = Math.max(1, n.length);
                for (i = Array(e - 1); ++t < e; )
                  i[t - 1] = (function (t, e, r = N) {
                    if (!(!(n = t.length) || isNaN((e *= 1)))) {
                      if (e <= 0 || n < 2) return +r(t[0], 0, t);
                      if (e >= 1) return +r(t[n - 1], n - 1, t);
                      var n,
                        i = (n - 1) * e,
                        a = Math.floor(i),
                        o = +r(t[a], a, t);
                      return o + (r(t[a + 1], a + 1, t) - o) * (i - a);
                    }
                  })(r, t / e);
                return o;
              }
              function o(t) {
                return null == t || isNaN((t *= 1)) ? e : n[z(i, t)];
              }
              return (
                (o.invertExtent = function (t) {
                  var e = n.indexOf(t);
                  return e < 0
                    ? [NaN, NaN]
                    : [
                        e > 0 ? i[e - 1] : r[0],
                        e < i.length ? i[e] : r[r.length - 1],
                      ];
                }),
                (o.domain = function (t) {
                  if (!arguments.length) return r.slice();
                  for (let e of ((r = []), t))
                    null == e || isNaN((e *= 1)) || r.push(e);
                  return r.sort(T), a();
                }),
                (o.range = function (t) {
                  return arguments.length
                    ? ((n = Array.from(t)), a())
                    : n.slice();
                }),
                (o.unknown = function (t) {
                  return arguments.length ? ((e = t), o) : e;
                }),
                (o.quantiles = function () {
                  return i.slice();
                }),
                (o.copy = function () {
                  return t().domain(r).range(n).unknown(e);
                }),
                p.apply(o, arguments)
              );
            },
          scaleQuantize: () =>
            function t() {
              var e,
                r = 0,
                n = 1,
                i = 1,
                a = [0.5],
                o = [0, 1];
              function u(t) {
                return null != t && t <= t ? o[z(a, t, 0, i)] : e;
              }
              function l() {
                var t = -1;
                for (a = Array(i); ++t < i; )
                  a[t] = ((t + 1) * n - (t - i) * r) / (i + 1);
                return u;
              }
              return (
                (u.domain = function (t) {
                  return arguments.length
                    ? (([r, n] = t), (r *= 1), (n *= 1), l())
                    : [r, n];
                }),
                (u.range = function (t) {
                  return arguments.length
                    ? ((i = (o = Array.from(t)).length - 1), l())
                    : o.slice();
                }),
                (u.invertExtent = function (t) {
                  var e = o.indexOf(t);
                  return e < 0
                    ? [NaN, NaN]
                    : e < 1
                    ? [r, a[0]]
                    : e >= i
                    ? [a[i - 1], n]
                    : [a[e - 1], a[e]];
                }),
                (u.unknown = function (t) {
                  return arguments.length && (e = t), u;
                }),
                (u.thresholds = function () {
                  return a.slice();
                }),
                (u.copy = function () {
                  return t().domain([r, n]).range(o).unknown(e);
                }),
                p.apply(tZ(u), arguments)
              );
            },
          scaleRadial: () =>
            function t() {
              var e,
                r = tD(),
                n = [0, 1],
                i = !1;
              function a(t) {
                var n,
                  a = Math.sign((n = r(t))) * Math.sqrt(Math.abs(n));
                return isNaN(a) ? e : i ? Math.round(a) : a;
              }
              return (
                (a.invert = function (t) {
                  return r.invert(t9(t));
                }),
                (a.domain = function (t) {
                  return arguments.length ? (r.domain(t), a) : r.domain();
                }),
                (a.range = function (t) {
                  return arguments.length
                    ? (r.range((n = Array.from(t, tS)).map(t9)), a)
                    : n.slice();
                }),
                (a.rangeRound = function (t) {
                  return a.range(t).round(!0);
                }),
                (a.round = function (t) {
                  return arguments.length ? ((i = !!t), a) : i;
                }),
                (a.clamp = function (t) {
                  return arguments.length ? (r.clamp(t), a) : r.clamp();
                }),
                (a.unknown = function (t) {
                  return arguments.length ? ((e = t), a) : e;
                }),
                (a.copy = function () {
                  return t(r.domain(), n).round(i).clamp(r.clamp()).unknown(e);
                }),
                p.apply(a, arguments),
                tZ(a)
              );
            },
          scaleSequential: () =>
            function t() {
              var e = tZ(r2()(tP));
              return (
                (e.copy = function () {
                  return r4(e, t());
                }),
                y.apply(e, arguments)
              );
            },
          scaleSequentialLog: () =>
            function t() {
              var e = tQ(r2()).domain([1, 10]);
              return (
                (e.copy = function () {
                  return r4(e, t()).base(e.base());
                }),
                y.apply(e, arguments)
              );
            },
          scaleSequentialPow: () => r5,
          scaleSequentialQuantile: () =>
            function t() {
              var e = [],
                r = tP;
              function n(t) {
                if (null != t && !isNaN((t *= 1)))
                  return r((z(e, t, 1) - 1) / (e.length - 1));
              }
              return (
                (n.domain = function (t) {
                  if (!arguments.length) return e.slice();
                  for (let r of ((e = []), t))
                    null == r || isNaN((r *= 1)) || e.push(r);
                  return e.sort(T), n;
                }),
                (n.interpolator = function (t) {
                  return arguments.length ? ((r = t), n) : r;
                }),
                (n.range = function () {
                  return e.map((t, n) => r(n / (e.length - 1)));
                }),
                (n.quantiles = function (t) {
                  return Array.from({ length: t + 1 }, (r, n) =>
                    (function (t, e, r) {
                      if (
                        !(
                          !(n = (t = Float64Array.from(
                            (function* (t, e) {
                              if (void 0 === e)
                                for (let e of t)
                                  null != e && (e *= 1) >= e && (yield e);
                              else {
                                let r = -1;
                                for (let n of t)
                                  null != (n = e(n, ++r, t)) &&
                                    (n *= 1) >= n &&
                                    (yield n);
                              }
                            })(t, void 0)
                          )).length) || isNaN((e *= 1))
                        )
                      ) {
                        if (e <= 0 || n < 2) return ee(t);
                        if (e >= 1) return et(t);
                        var n,
                          i = (n - 1) * e,
                          a = Math.floor(i),
                          o = et(
                            (function t(e, r, n = 0, i = 1 / 0, a) {
                              if (
                                ((r = Math.floor(r)),
                                (n = Math.floor(Math.max(0, n))),
                                (i = Math.floor(Math.min(e.length - 1, i))),
                                !(n <= r && r <= i))
                              )
                                return e;
                              for (
                                a =
                                  void 0 === a
                                    ? er
                                    : (function (t = T) {
                                        if (t === T) return er;
                                        if ("function" != typeof t)
                                          throw TypeError(
                                            "compare is not a function"
                                          );
                                        return (e, r) => {
                                          let n = t(e, r);
                                          return n || 0 === n
                                            ? n
                                            : (0 === t(r, r)) - (0 === t(e, e));
                                        };
                                      })(a);
                                i > n;

                              ) {
                                if (i - n > 600) {
                                  let o = i - n + 1,
                                    u = r - n + 1,
                                    l = Math.log(o),
                                    c = 0.5 * Math.exp((2 * l) / 3),
                                    s =
                                      0.5 *
                                      Math.sqrt((l * c * (o - c)) / o) *
                                      (u - o / 2 < 0 ? -1 : 1),
                                    f = Math.max(
                                      n,
                                      Math.floor(r - (u * c) / o + s)
                                    ),
                                    h = Math.min(
                                      i,
                                      Math.floor(r + ((o - u) * c) / o + s)
                                    );
                                  t(e, r, f, h, a);
                                }
                                let o = e[r],
                                  u = n,
                                  l = i;
                                for (
                                  en(e, n, r), a(e[i], o) > 0 && en(e, n, i);
                                  u < l;

                                ) {
                                  for (en(e, u, l), ++u, --l; 0 > a(e[u], o); )
                                    ++u;
                                  for (; a(e[l], o) > 0; ) --l;
                                }
                                0 === a(e[n], o) ? en(e, n, l) : en(e, ++l, i),
                                  l <= r && (n = l + 1),
                                  r <= l && (i = l - 1);
                              }
                              return e;
                            })(t, a).subarray(0, a + 1)
                          );
                        return o + (ee(t.subarray(a + 1)) - o) * (i - a);
                      }
                    })(e, n / t)
                  );
                }),
                (n.copy = function () {
                  return t(r).domain(e);
                }),
                y.apply(n, arguments)
              );
            },
          scaleSequentialSqrt: () => r3,
          scaleSequentialSymlog: () =>
            function t() {
              var e = t2(r2());
              return (
                (e.copy = function () {
                  return r4(e, t()).constant(e.constant());
                }),
                y.apply(e, arguments)
              );
            },
          scaleSqrt: () => t8,
          scaleSymlog: () =>
            function t() {
              var e = t2(tk());
              return (
                (e.copy = function () {
                  return tC(e, t()).constant(e.constant());
                }),
                p.apply(e, arguments)
              );
            },
          scaleThreshold: () =>
            function t() {
              var e,
                r = [0.5],
                n = [0, 1],
                i = 1;
              function a(t) {
                return null != t && t <= t ? n[z(r, t, 0, i)] : e;
              }
              return (
                (a.domain = function (t) {
                  return arguments.length
                    ? ((i = Math.min((r = Array.from(t)).length, n.length - 1)),
                      a)
                    : r.slice();
                }),
                (a.range = function (t) {
                  return arguments.length
                    ? ((n = Array.from(t)),
                      (i = Math.min(r.length, n.length - 1)),
                      a)
                    : n.slice();
                }),
                (a.invertExtent = function (t) {
                  var e = n.indexOf(t);
                  return [r[e - 1], r[e]];
                }),
                (a.unknown = function (t) {
                  return arguments.length ? ((e = t), a) : e;
                }),
                (a.copy = function () {
                  return t().domain(r).range(n).unknown(e);
                }),
                p.apply(a, arguments)
              );
            },
          scaleTime: () => r0,
          scaleUtc: () => r1,
          tickFormat: () => tK,
        });
      var f = r(68924),
        h = r(83949),
        d = r.n(h);
      function p(t, e) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(t);
            break;
          default:
            this.range(e).domain(t);
        }
        return this;
      }
      function y(t, e) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            "function" == typeof t ? this.interpolator(t) : this.range(t);
            break;
          default:
            this.domain(t),
              "function" == typeof e ? this.interpolator(e) : this.range(e);
        }
        return this;
      }
      class v extends Map {
        constructor(t, e = m) {
          if (
            (super(),
            Object.defineProperties(this, {
              _intern: { value: new Map() },
              _key: { value: e },
            }),
            null != t)
          )
            for (let [e, r] of t) this.set(e, r);
        }
        get(t) {
          return super.get(g(this, t));
        }
        has(t) {
          return super.has(g(this, t));
        }
        set(t, e) {
          return super.set(
            (function ({ _intern: t, _key: e }, r) {
              let n = e(r);
              return t.has(n) ? t.get(n) : (t.set(n, r), r);
            })(this, t),
            e
          );
        }
        delete(t) {
          return super.delete(
            (function ({ _intern: t, _key: e }, r) {
              let n = e(r);
              return t.has(n) && ((r = t.get(n)), t.delete(n)), r;
            })(this, t)
          );
        }
      }
      function g({ _intern: t, _key: e }, r) {
        let n = e(r);
        return t.has(n) ? t.get(n) : r;
      }
      function m(t) {
        return null !== t && "object" == typeof t ? t.valueOf() : t;
      }
      let b = Symbol("implicit");
      function x() {
        var t = new v(),
          e = [],
          r = [],
          n = b;
        function i(i) {
          let a = t.get(i);
          if (void 0 === a) {
            if (n !== b) return n;
            t.set(i, (a = e.push(i) - 1));
          }
          return r[a % r.length];
        }
        return (
          (i.domain = function (r) {
            if (!arguments.length) return e.slice();
            for (let n of ((e = []), (t = new v()), r))
              t.has(n) || t.set(n, e.push(n) - 1);
            return i;
          }),
          (i.range = function (t) {
            return arguments.length ? ((r = Array.from(t)), i) : r.slice();
          }),
          (i.unknown = function (t) {
            return arguments.length ? ((n = t), i) : n;
          }),
          (i.copy = function () {
            return x(e, r).unknown(n);
          }),
          p.apply(i, arguments),
          i
        );
      }
      function w() {
        var t,
          e,
          r = x().unknown(void 0),
          n = r.domain,
          i = r.range,
          a = 0,
          o = 1,
          u = !1,
          l = 0,
          c = 0,
          s = 0.5;
        function f() {
          var r = n().length,
            f = o < a,
            h = f ? o : a,
            d = f ? a : o;
          (t = (d - h) / Math.max(1, r - l + 2 * c)),
            u && (t = Math.floor(t)),
            (h += (d - h - t * (r - l)) * s),
            (e = t * (1 - l)),
            u && ((h = Math.round(h)), (e = Math.round(e)));
          var p = (function (t, e, r) {
            (t *= 1),
              (e *= 1),
              (r =
                (i = arguments.length) < 2
                  ? ((e = t), (t = 0), 1)
                  : i < 3
                  ? 1
                  : +r);
            for (
              var n = -1,
                i = 0 | Math.max(0, Math.ceil((e - t) / r)),
                a = Array(i);
              ++n < i;

            )
              a[n] = t + n * r;
            return a;
          })(r).map(function (e) {
            return h + t * e;
          });
          return i(f ? p.reverse() : p);
        }
        return (
          delete r.unknown,
          (r.domain = function (t) {
            return arguments.length ? (n(t), f()) : n();
          }),
          (r.range = function (t) {
            return arguments.length
              ? (([a, o] = t), (a *= 1), (o *= 1), f())
              : [a, o];
          }),
          (r.rangeRound = function (t) {
            return ([a, o] = t), (a *= 1), (o *= 1), (u = !0), f();
          }),
          (r.bandwidth = function () {
            return e;
          }),
          (r.step = function () {
            return t;
          }),
          (r.round = function (t) {
            return arguments.length ? ((u = !!t), f()) : u;
          }),
          (r.padding = function (t) {
            return arguments.length ? ((l = Math.min(1, (c = +t))), f()) : l;
          }),
          (r.paddingInner = function (t) {
            return arguments.length ? ((l = Math.min(1, t)), f()) : l;
          }),
          (r.paddingOuter = function (t) {
            return arguments.length ? ((c = +t), f()) : c;
          }),
          (r.align = function (t) {
            return arguments.length
              ? ((s = Math.max(0, Math.min(1, t))), f())
              : s;
          }),
          (r.copy = function () {
            return w(n(), [a, o])
              .round(u)
              .paddingInner(l)
              .paddingOuter(c)
              .align(s);
          }),
          p.apply(f(), arguments)
        );
      }
      function O() {
        return (function t(e) {
          var r = e.copy;
          return (
            (e.padding = e.paddingOuter),
            delete e.paddingInner,
            delete e.paddingOuter,
            (e.copy = function () {
              return t(r());
            }),
            e
          );
        })(w.apply(null, arguments).paddingInner(1));
      }
      let M = Math.sqrt(50),
        j = Math.sqrt(10),
        S = Math.sqrt(2);
      function _(t, e, r) {
        let n,
          i,
          a,
          o = (e - t) / Math.max(0, r),
          u = Math.floor(Math.log10(o)),
          l = o / Math.pow(10, u),
          c = l >= M ? 10 : l >= j ? 5 : l >= S ? 2 : 1;
        return (u < 0
          ? ((n = Math.round(t * (a = Math.pow(10, -u) / c))),
            (i = Math.round(e * a)),
            n / a < t && ++n,
            i / a > e && --i,
            (a = -a))
          : ((n = Math.round(t / (a = Math.pow(10, u) * c))),
            (i = Math.round(e / a)),
            n * a < t && ++n,
            i * a > e && --i),
        i < n && 0.5 <= r && r < 2)
          ? _(t, e, 2 * r)
          : [n, i, a];
      }
      function P(t, e, r) {
        if (((e *= 1), (t *= 1), !((r *= 1) > 0))) return [];
        if (t === e) return [t];
        let n = e < t,
          [i, a, o] = n ? _(e, t, r) : _(t, e, r);
        if (!(a >= i)) return [];
        let u = a - i + 1,
          l = Array(u);
        if (n)
          if (o < 0) for (let t = 0; t < u; ++t) l[t] = -((a - t) / o);
          else for (let t = 0; t < u; ++t) l[t] = (a - t) * o;
        else if (o < 0) for (let t = 0; t < u; ++t) l[t] = -((i + t) / o);
        else for (let t = 0; t < u; ++t) l[t] = (i + t) * o;
        return l;
      }
      function A(t, e, r) {
        return _((t *= 1), (e *= 1), (r *= 1))[2];
      }
      function E(t, e, r) {
        (e *= 1), (t *= 1), (r *= 1);
        let n = e < t,
          i = n ? A(e, t, r) : A(t, e, r);
        return (n ? -1 : 1) * (i < 0 ? -(1 / i) : i);
      }
      function T(t, e) {
        return null == t || null == e
          ? NaN
          : t < e
          ? -1
          : t > e
          ? 1
          : t >= e
          ? 0
          : NaN;
      }
      function C(t, e) {
        return null == t || null == e
          ? NaN
          : e < t
          ? -1
          : e > t
          ? 1
          : e >= t
          ? 0
          : NaN;
      }
      function k(t) {
        let e, r, n;
        function i(t, n, a = 0, o = t.length) {
          if (a < o) {
            if (0 !== e(n, n)) return o;
            do {
              let e = (a + o) >>> 1;
              0 > r(t[e], n) ? (a = e + 1) : (o = e);
            } while (a < o);
          }
          return a;
        }
        return (
          2 !== t.length
            ? ((e = T), (r = (e, r) => T(t(e), r)), (n = (e, r) => t(e) - r))
            : ((e = t === T || t === C ? t : D), (r = t), (n = t)),
          {
            left: i,
            center: function (t, e, r = 0, a = t.length) {
              let o = i(t, e, r, a - 1);
              return o > r && n(t[o - 1], e) > -n(t[o], e) ? o - 1 : o;
            },
            right: function (t, n, i = 0, a = t.length) {
              if (i < a) {
                if (0 !== e(n, n)) return a;
                do {
                  let e = (i + a) >>> 1;
                  0 >= r(t[e], n) ? (i = e + 1) : (a = e);
                } while (i < a);
              }
              return i;
            },
          }
        );
      }
      function D() {
        return 0;
      }
      function N(t) {
        return null === t ? NaN : +t;
      }
      let I = k(T),
        z = I.right;
      function $(t, e, r) {
        (t.prototype = e.prototype = r), (r.constructor = t);
      }
      function L(t, e) {
        var r = Object.create(t.prototype);
        for (var n in e) r[n] = e[n];
        return r;
      }
      function U() {}
      I.left, k(N).center;
      var R = "\\s*([+-]?\\d+)\\s*",
        F = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        H = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        B = /^#([0-9a-f]{3,8})$/,
        K = RegExp(`^rgb\\(${R},${R},${R}\\)$`),
        Z = RegExp(`^rgb\\(${H},${H},${H}\\)$`),
        q = RegExp(`^rgba\\(${R},${R},${R},${F}\\)$`),
        W = RegExp(`^rgba\\(${H},${H},${H},${F}\\)$`),
        G = RegExp(`^hsl\\(${F},${H},${H}\\)$`),
        Y = RegExp(`^hsla\\(${F},${H},${H},${F}\\)$`),
        V = {
          aliceblue: 0xf0f8ff,
          antiquewhite: 0xfaebd7,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 0xf0ffff,
          beige: 0xf5f5dc,
          bisque: 0xffe4c4,
          black: 0,
          blanchedalmond: 0xffebcd,
          blue: 255,
          blueviolet: 9055202,
          brown: 0xa52a2a,
          burlywood: 0xdeb887,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 0xd2691e,
          coral: 0xff7f50,
          cornflowerblue: 6591981,
          cornsilk: 0xfff8dc,
          crimson: 0xdc143c,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 0xb8860b,
          darkgray: 0xa9a9a9,
          darkgreen: 25600,
          darkgrey: 0xa9a9a9,
          darkkhaki: 0xbdb76b,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 0xff8c00,
          darkorchid: 0x9932cc,
          darkred: 9109504,
          darksalmon: 0xe9967a,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 0xff1493,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 0xb22222,
          floralwhite: 0xfffaf0,
          forestgreen: 2263842,
          fuchsia: 0xff00ff,
          gainsboro: 0xdcdcdc,
          ghostwhite: 0xf8f8ff,
          gold: 0xffd700,
          goldenrod: 0xdaa520,
          gray: 8421504,
          green: 32768,
          greenyellow: 0xadff2f,
          grey: 8421504,
          honeydew: 0xf0fff0,
          hotpink: 0xff69b4,
          indianred: 0xcd5c5c,
          indigo: 4915330,
          ivory: 0xfffff0,
          khaki: 0xf0e68c,
          lavender: 0xe6e6fa,
          lavenderblush: 0xfff0f5,
          lawngreen: 8190976,
          lemonchiffon: 0xfffacd,
          lightblue: 0xadd8e6,
          lightcoral: 0xf08080,
          lightcyan: 0xe0ffff,
          lightgoldenrodyellow: 0xfafad2,
          lightgray: 0xd3d3d3,
          lightgreen: 9498256,
          lightgrey: 0xd3d3d3,
          lightpink: 0xffb6c1,
          lightsalmon: 0xffa07a,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 0xb0c4de,
          lightyellow: 0xffffe0,
          lime: 65280,
          limegreen: 3329330,
          linen: 0xfaf0e6,
          magenta: 0xff00ff,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 0xba55d3,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 0xc71585,
          midnightblue: 1644912,
          mintcream: 0xf5fffa,
          mistyrose: 0xffe4e1,
          moccasin: 0xffe4b5,
          navajowhite: 0xffdead,
          navy: 128,
          oldlace: 0xfdf5e6,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 0xffa500,
          orangered: 0xff4500,
          orchid: 0xda70d6,
          palegoldenrod: 0xeee8aa,
          palegreen: 0x98fb98,
          paleturquoise: 0xafeeee,
          palevioletred: 0xdb7093,
          papayawhip: 0xffefd5,
          peachpuff: 0xffdab9,
          peru: 0xcd853f,
          pink: 0xffc0cb,
          plum: 0xdda0dd,
          powderblue: 0xb0e0e6,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 0xff0000,
          rosybrown: 0xbc8f8f,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 0xfa8072,
          sandybrown: 0xf4a460,
          seagreen: 3050327,
          seashell: 0xfff5ee,
          sienna: 0xa0522d,
          silver: 0xc0c0c0,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 0xfffafa,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 0xd2b48c,
          teal: 32896,
          thistle: 0xd8bfd8,
          tomato: 0xff6347,
          turquoise: 4251856,
          violet: 0xee82ee,
          wheat: 0xf5deb3,
          white: 0xffffff,
          whitesmoke: 0xf5f5f5,
          yellow: 0xffff00,
          yellowgreen: 0x9acd32,
        };
      function X() {
        return this.rgb().formatHex();
      }
      function J() {
        return this.rgb().formatRgb();
      }
      function Q(t) {
        var e, r;
        return (
          (t = (t + "").trim().toLowerCase()),
          (e = B.exec(t))
            ? ((r = e[1].length),
              (e = parseInt(e[1], 16)),
              6 === r
                ? tt(e)
                : 3 === r
                ? new tn(
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    ((15 & e) << 4) | (15 & e),
                    1
                  )
                : 8 === r
                ? te(
                    (e >> 24) & 255,
                    (e >> 16) & 255,
                    (e >> 8) & 255,
                    (255 & e) / 255
                  )
                : 4 === r
                ? te(
                    ((e >> 12) & 15) | ((e >> 8) & 240),
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    (((15 & e) << 4) | (15 & e)) / 255
                  )
                : null)
            : (e = K.exec(t))
            ? new tn(e[1], e[2], e[3], 1)
            : (e = Z.exec(t))
            ? new tn(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                1
              )
            : (e = q.exec(t))
            ? te(e[1], e[2], e[3], e[4])
            : (e = W.exec(t))
            ? te(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                e[4]
              )
            : (e = G.exec(t))
            ? tc(e[1], e[2] / 100, e[3] / 100, 1)
            : (e = Y.exec(t))
            ? tc(e[1], e[2] / 100, e[3] / 100, e[4])
            : V.hasOwnProperty(t)
            ? tt(V[t])
            : "transparent" === t
            ? new tn(NaN, NaN, NaN, 0)
            : null
        );
      }
      function tt(t) {
        return new tn((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function te(t, e, r, n) {
        return n <= 0 && (t = e = r = NaN), new tn(t, e, r, n);
      }
      function tr(t, e, r, n) {
        var i;
        return 1 == arguments.length
          ? ((i = t) instanceof U || (i = Q(i)), i)
            ? new tn((i = i.rgb()).r, i.g, i.b, i.opacity)
            : new tn()
          : new tn(t, e, r, null == n ? 1 : n);
      }
      function tn(t, e, r, n) {
        (this.r = +t), (this.g = +e), (this.b = +r), (this.opacity = +n);
      }
      function ti() {
        return `#${tl(this.r)}${tl(this.g)}${tl(this.b)}`;
      }
      function ta() {
        let t = to(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${tu(this.r)}, ${tu(this.g)}, ${tu(
          this.b
        )}${1 === t ? ")" : `, ${t})`}`;
      }
      function to(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function tu(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function tl(t) {
        return ((t = tu(t)) < 16 ? "0" : "") + t.toString(16);
      }
      function tc(t, e, r, n) {
        return (
          n <= 0
            ? (t = e = r = NaN)
            : r <= 0 || r >= 1
            ? (t = e = NaN)
            : e <= 0 && (t = NaN),
          new tf(t, e, r, n)
        );
      }
      function ts(t) {
        if (t instanceof tf) return new tf(t.h, t.s, t.l, t.opacity);
        if ((t instanceof U || (t = Q(t)), !t)) return new tf();
        if (t instanceof tf) return t;
        var e = (t = t.rgb()).r / 255,
          r = t.g / 255,
          n = t.b / 255,
          i = Math.min(e, r, n),
          a = Math.max(e, r, n),
          o = NaN,
          u = a - i,
          l = (a + i) / 2;
        return (
          u
            ? ((o =
                e === a
                  ? (r - n) / u + (r < n) * 6
                  : r === a
                  ? (n - e) / u + 2
                  : (e - r) / u + 4),
              (u /= l < 0.5 ? a + i : 2 - a - i),
              (o *= 60))
            : (u = l > 0 && l < 1 ? 0 : o),
          new tf(o, u, l, t.opacity)
        );
      }
      function tf(t, e, r, n) {
        (this.h = +t), (this.s = +e), (this.l = +r), (this.opacity = +n);
      }
      function th(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
      }
      function td(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function tp(t, e, r) {
        return (
          (t < 60
            ? e + ((r - e) * t) / 60
            : t < 180
            ? r
            : t < 240
            ? e + ((r - e) * (240 - t)) / 60
            : e) * 255
        );
      }
      function ty(t, e, r, n, i) {
        var a = t * t,
          o = a * t;
        return (
          ((1 - 3 * t + 3 * a - o) * e +
            (4 - 6 * a + 3 * o) * r +
            (1 + 3 * t + 3 * a - 3 * o) * n +
            o * i) /
          6
        );
      }
      $(U, Q, {
        copy(t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: X,
        formatHex: X,
        formatHex8: function () {
          return this.rgb().formatHex8();
        },
        formatHsl: function () {
          return ts(this).formatHsl();
        },
        formatRgb: J,
        toString: J,
      }),
        $(
          tn,
          tr,
          L(U, {
            brighter(t) {
              return (
                (t =
                  null == t
                    ? 1.4285714285714286
                    : Math.pow(1.4285714285714286, t)),
                new tn(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new tn(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new tn(
                tu(this.r),
                tu(this.g),
                tu(this.b),
                to(this.opacity)
              );
            },
            displayable() {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: ti,
            formatHex: ti,
            formatHex8: function () {
              return `#${tl(this.r)}${tl(this.g)}${tl(this.b)}${tl(
                (isNaN(this.opacity) ? 1 : this.opacity) * 255
              )}`;
            },
            formatRgb: ta,
            toString: ta,
          })
        ),
        $(
          tf,
          function (t, e, r, n) {
            return 1 == arguments.length
              ? ts(t)
              : new tf(t, e, r, null == n ? 1 : n);
          },
          L(U, {
            brighter(t) {
              return (
                (t =
                  null == t
                    ? 1.4285714285714286
                    : Math.pow(1.4285714285714286, t)),
                new tf(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new tf(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb() {
              var t = (this.h % 360) + (this.h < 0) * 360,
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                r = this.l,
                n = r + (r < 0.5 ? r : 1 - r) * e,
                i = 2 * r - n;
              return new tn(
                tp(t >= 240 ? t - 240 : t + 120, i, n),
                tp(t, i, n),
                tp(t < 120 ? t + 240 : t - 120, i, n),
                this.opacity
              );
            },
            clamp() {
              return new tf(
                th(this.h),
                td(this.s),
                td(this.l),
                to(this.opacity)
              );
            },
            displayable() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl() {
              let t = to(this.opacity);
              return `${1 === t ? "hsl(" : "hsla("}${th(this.h)}, ${
                100 * td(this.s)
              }%, ${100 * td(this.l)}%${1 === t ? ")" : `, ${t})`}`;
            },
          })
        );
      let tv = (t) => () => t;
      function tg(t, e) {
        var r,
          n,
          i = e - t;
        return i
          ? ((r = t),
            (n = i),
            function (t) {
              return r + t * n;
            })
          : tv(isNaN(t) ? e : t);
      }
      let tm = (function t(e) {
        var r,
          n =
            1 == (r = +e)
              ? tg
              : function (t, e) {
                  var n, i, a;
                  return e - t
                    ? ((n = t),
                      (i = e),
                      (n = Math.pow(n, (a = r))),
                      (i = Math.pow(i, a) - n),
                      (a = 1 / a),
                      function (t) {
                        return Math.pow(n + t * i, a);
                      })
                    : tv(isNaN(t) ? e : t);
                };
        function i(t, e) {
          var r = n((t = tr(t)).r, (e = tr(e)).r),
            i = n(t.g, e.g),
            a = n(t.b, e.b),
            o = tg(t.opacity, e.opacity);
          return function (e) {
            return (
              (t.r = r(e)),
              (t.g = i(e)),
              (t.b = a(e)),
              (t.opacity = o(e)),
              t + ""
            );
          };
        }
        return (i.gamma = t), i;
      })(1);
      function tb(t) {
        return function (e) {
          var r,
            n,
            i = e.length,
            a = Array(i),
            o = Array(i),
            u = Array(i);
          for (r = 0; r < i; ++r)
            (n = tr(e[r])),
              (a[r] = n.r || 0),
              (o[r] = n.g || 0),
              (u[r] = n.b || 0);
          return (
            (a = t(a)),
            (o = t(o)),
            (u = t(u)),
            (n.opacity = 1),
            function (t) {
              return (n.r = a(t)), (n.g = o(t)), (n.b = u(t)), n + "";
            }
          );
        };
      }
      tb(function (t) {
        var e = t.length - 1;
        return function (r) {
          var n =
              r <= 0 ? (r = 0) : r >= 1 ? ((r = 1), e - 1) : Math.floor(r * e),
            i = t[n],
            a = t[n + 1],
            o = n > 0 ? t[n - 1] : 2 * i - a,
            u = n < e - 1 ? t[n + 2] : 2 * a - i;
          return ty((r - n / e) * e, o, i, a, u);
        };
      }),
        tb(function (t) {
          var e = t.length;
          return function (r) {
            var n = Math.floor(((r %= 1) < 0 ? ++r : r) * e),
              i = t[(n + e - 1) % e],
              a = t[n % e],
              o = t[(n + 1) % e],
              u = t[(n + 2) % e];
            return ty((r - n / e) * e, i, a, o, u);
          };
        });
      function tx(t, e) {
        return (
          (t *= 1),
          (e *= 1),
          function (r) {
            return t * (1 - r) + e * r;
          }
        );
      }
      var tw = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        tO = RegExp(tw.source, "g");
      function tM(t, e) {
        var r,
          n,
          i = typeof e;
        return null == e || "boolean" === i
          ? tv(e)
          : ("number" === i
              ? tx
              : "string" === i
              ? (n = Q(e))
                ? ((e = n), tm)
                : function (t, e) {
                    var r,
                      n,
                      i,
                      a,
                      o,
                      u = (tw.lastIndex = tO.lastIndex = 0),
                      l = -1,
                      c = [],
                      s = [];
                    for (
                      t += "", e += "";
                      (i = tw.exec(t)) && (a = tO.exec(e));

                    )
                      (o = a.index) > u &&
                        ((o = e.slice(u, o)),
                        c[l] ? (c[l] += o) : (c[++l] = o)),
                        (i = i[0]) === (a = a[0])
                          ? c[l]
                            ? (c[l] += a)
                            : (c[++l] = a)
                          : ((c[++l] = null), s.push({ i: l, x: tx(i, a) })),
                        (u = tO.lastIndex);
                    return (
                      u < e.length &&
                        ((o = e.slice(u)), c[l] ? (c[l] += o) : (c[++l] = o)),
                      c.length < 2
                        ? s[0]
                          ? ((r = s[0].x),
                            function (t) {
                              return r(t) + "";
                            })
                          : ((n = e),
                            function () {
                              return n;
                            })
                        : ((e = s.length),
                          function (t) {
                            for (var r, n = 0; n < e; ++n)
                              c[(r = s[n]).i] = r.x(t);
                            return c.join("");
                          })
                    );
                  }
              : e instanceof Q
              ? tm
              : e instanceof Date
              ? function (t, e) {
                  var r = new Date();
                  return (
                    (t *= 1),
                    (e *= 1),
                    function (n) {
                      return r.setTime(t * (1 - n) + e * n), r;
                    }
                  );
                }
              : !ArrayBuffer.isView((r = e)) || r instanceof DataView
              ? Array.isArray(e)
                ? function (t, e) {
                    var r,
                      n = e ? e.length : 0,
                      i = t ? Math.min(n, t.length) : 0,
                      a = Array(i),
                      o = Array(n);
                    for (r = 0; r < i; ++r) a[r] = tM(t[r], e[r]);
                    for (; r < n; ++r) o[r] = e[r];
                    return function (t) {
                      for (r = 0; r < i; ++r) o[r] = a[r](t);
                      return o;
                    };
                  }
                : ("function" != typeof e.valueOf &&
                    "function" != typeof e.toString) ||
                  isNaN(e)
                ? function (t, e) {
                    var r,
                      n = {},
                      i = {};
                    for (r in ((null === t || "object" != typeof t) && (t = {}),
                    (null === e || "object" != typeof e) && (e = {}),
                    e))
                      r in t ? (n[r] = tM(t[r], e[r])) : (i[r] = e[r]);
                    return function (t) {
                      for (r in n) i[r] = n[r](t);
                      return i;
                    };
                  }
                : tx
              : function (t, e) {
                  e || (e = []);
                  var r,
                    n = t ? Math.min(e.length, t.length) : 0,
                    i = e.slice();
                  return function (a) {
                    for (r = 0; r < n; ++r) i[r] = t[r] * (1 - a) + e[r] * a;
                    return i;
                  };
                })(t, e);
      }
      function tj(t, e) {
        return (
          (t *= 1),
          (e *= 1),
          function (r) {
            return Math.round(t * (1 - r) + e * r);
          }
        );
      }
      function tS(t) {
        return +t;
      }
      var t_ = [0, 1];
      function tP(t) {
        return t;
      }
      function tA(t, e) {
        var r;
        return (e -= t *= 1)
          ? function (r) {
              return (r - t) / e;
            }
          : ((r = isNaN(e) ? NaN : 0.5),
            function () {
              return r;
            });
      }
      function tE(t, e, r) {
        var n = t[0],
          i = t[1],
          a = e[0],
          o = e[1];
        return (
          i < n
            ? ((n = tA(i, n)), (a = r(o, a)))
            : ((n = tA(n, i)), (a = r(a, o))),
          function (t) {
            return a(n(t));
          }
        );
      }
      function tT(t, e, r) {
        var n = Math.min(t.length, e.length) - 1,
          i = Array(n),
          a = Array(n),
          o = -1;
        for (
          t[n] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
          ++o < n;

        )
          (i[o] = tA(t[o], t[o + 1])), (a[o] = r(e[o], e[o + 1]));
        return function (e) {
          var r = z(t, e, 1, n) - 1;
          return a[r](i[r](e));
        };
      }
      function tC(t, e) {
        return e
          .domain(t.domain())
          .range(t.range())
          .interpolate(t.interpolate())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function tk() {
        var t,
          e,
          r,
          n,
          i,
          a,
          o = t_,
          u = t_,
          l = tM,
          c = tP;
        function s() {
          var t,
            e,
            r,
            l = Math.min(o.length, u.length);
          return (
            c !== tP &&
              ((t = o[0]),
              (e = o[l - 1]),
              t > e && ((r = t), (t = e), (e = r)),
              (c = function (r) {
                return Math.max(t, Math.min(e, r));
              })),
            (n = l > 2 ? tT : tE),
            (i = a = null),
            f
          );
        }
        function f(e) {
          return null == e || isNaN((e *= 1))
            ? r
            : (i || (i = n(o.map(t), u, l)))(t(c(e)));
        }
        return (
          (f.invert = function (r) {
            return c(e((a || (a = n(u, o.map(t), tx)))(r)));
          }),
          (f.domain = function (t) {
            return arguments.length
              ? ((o = Array.from(t, tS)), s())
              : o.slice();
          }),
          (f.range = function (t) {
            return arguments.length ? ((u = Array.from(t)), s()) : u.slice();
          }),
          (f.rangeRound = function (t) {
            return (u = Array.from(t)), (l = tj), s();
          }),
          (f.clamp = function (t) {
            return arguments.length ? ((c = !!t || tP), s()) : c !== tP;
          }),
          (f.interpolate = function (t) {
            return arguments.length ? ((l = t), s()) : l;
          }),
          (f.unknown = function (t) {
            return arguments.length ? ((r = t), f) : r;
          }),
          function (r, n) {
            return (t = r), (e = n), s();
          }
        );
      }
      function tD() {
        return tk()(tP, tP);
      }
      var tN =
        /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function tI(t) {
        var e;
        if (!(e = tN.exec(t))) throw Error("invalid format: " + t);
        return new tz({
          fill: e[1],
          align: e[2],
          sign: e[3],
          symbol: e[4],
          zero: e[5],
          width: e[6],
          comma: e[7],
          precision: e[8] && e[8].slice(1),
          trim: e[9],
          type: e[10],
        });
      }
      function tz(t) {
        (this.fill = void 0 === t.fill ? " " : t.fill + ""),
          (this.align = void 0 === t.align ? ">" : t.align + ""),
          (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
          (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
          (this.zero = !!t.zero),
          (this.width = void 0 === t.width ? void 0 : +t.width),
          (this.comma = !!t.comma),
          (this.precision = void 0 === t.precision ? void 0 : +t.precision),
          (this.trim = !!t.trim),
          (this.type = void 0 === t.type ? "" : t.type + "");
      }
      function t$(t, e) {
        if (
          (r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf(
            "e"
          )) < 0
        )
          return null;
        var r,
          n = t.slice(0, r);
        return [n.length > 1 ? n[0] + n.slice(2) : n, +t.slice(r + 1)];
      }
      function tL(t) {
        return (t = t$(Math.abs(t))) ? t[1] : NaN;
      }
      function tU(t, e) {
        var r = t$(t, e);
        if (!r) return t + "";
        var n = r[0],
          i = r[1];
        return i < 0
          ? "0." + Array(-i).join("0") + n
          : n.length > i + 1
          ? n.slice(0, i + 1) + "." + n.slice(i + 1)
          : n + Array(i - n.length + 2).join("0");
      }
      (tI.prototype = tz.prototype),
        (tz.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (void 0 === this.precision
              ? ""
              : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
          );
        });
      let tR = {
        "%": (t, e) => (100 * t).toFixed(e),
        b: (t) => Math.round(t).toString(2),
        c: (t) => t + "",
        d: function (t) {
          return Math.abs((t = Math.round(t))) >= 1e21
            ? t.toLocaleString("en").replace(/,/g, "")
            : t.toString(10);
        },
        e: (t, e) => t.toExponential(e),
        f: (t, e) => t.toFixed(e),
        g: (t, e) => t.toPrecision(e),
        o: (t) => Math.round(t).toString(8),
        p: (t, e) => tU(100 * t, e),
        r: tU,
        s: function (t, e) {
          var r = t$(t, e);
          if (!r) return t + "";
          var i = r[0],
            a = r[1],
            o = a - (n = 3 * Math.max(-8, Math.min(8, Math.floor(a / 3)))) + 1,
            u = i.length;
          return o === u
            ? i
            : o > u
            ? i + Array(o - u + 1).join("0")
            : o > 0
            ? i.slice(0, o) + "." + i.slice(o)
            : "0." + Array(1 - o).join("0") + t$(t, Math.max(0, e + o - 1))[0];
        },
        X: (t) => Math.round(t).toString(16).toUpperCase(),
        x: (t) => Math.round(t).toString(16),
      };
      function tF(t) {
        return t;
      }
      var tH = Array.prototype.map,
        tB = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "\xb5",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y",
        ];
      function tK(t, e, r, n) {
        var i,
          u,
          l,
          c = E(t, e, r);
        switch ((n = tI(null == n ? ",f" : n)).type) {
          case "s":
            var s = Math.max(Math.abs(t), Math.abs(e));
            return (
              null != n.precision ||
                isNaN(
                  (l = Math.max(
                    0,
                    3 * Math.max(-8, Math.min(8, Math.floor(tL(s) / 3))) -
                      tL(Math.abs(c))
                  ))
                ) ||
                (n.precision = l),
              o(n, s)
            );
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != n.precision ||
              isNaN(
                (l =
                  Math.max(
                    0,
                    tL(
                      Math.abs(Math.max(Math.abs(t), Math.abs(e))) -
                        (i = Math.abs((i = c)))
                    ) - tL(i)
                  ) + 1)
              ) ||
              (n.precision = l - ("e" === n.type));
            break;
          case "f":
          case "%":
            null != n.precision ||
              isNaN((l = Math.max(0, -tL(Math.abs(c))))) ||
              (n.precision = l - ("%" === n.type) * 2);
        }
        return a(n);
      }
      function tZ(t) {
        var e = t.domain;
        return (
          (t.ticks = function (t) {
            var r = e();
            return P(r[0], r[r.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function (t, r) {
            var n = e();
            return tK(n[0], n[n.length - 1], null == t ? 10 : t, r);
          }),
          (t.nice = function (r) {
            null == r && (r = 10);
            var n,
              i,
              a = e(),
              o = 0,
              u = a.length - 1,
              l = a[o],
              c = a[u],
              s = 10;
            for (
              c < l && ((i = l), (l = c), (c = i), (i = o), (o = u), (u = i));
              s-- > 0;

            ) {
              if ((i = A(l, c, r)) === n) return (a[o] = l), (a[u] = c), e(a);
              if (i > 0)
                (l = Math.floor(l / i) * i), (c = Math.ceil(c / i) * i);
              else if (i < 0)
                (l = Math.ceil(l * i) / i), (c = Math.floor(c * i) / i);
              else break;
              n = i;
            }
            return t;
          }),
          t
        );
      }
      function tq(t, e) {
        t = t.slice();
        var r,
          n = 0,
          i = t.length - 1,
          a = t[n],
          o = t[i];
        return (
          o < a && ((r = n), (n = i), (i = r), (r = a), (a = o), (o = r)),
          (t[n] = e.floor(a)),
          (t[i] = e.ceil(o)),
          t
        );
      }
      function tW(t) {
        return Math.log(t);
      }
      function tG(t) {
        return Math.exp(t);
      }
      function tY(t) {
        return -Math.log(-t);
      }
      function tV(t) {
        return -Math.exp(-t);
      }
      function tX(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
      }
      function tJ(t) {
        return (e, r) => -t(-e, r);
      }
      function tQ(t) {
        let e,
          r,
          n = t(tW, tG),
          i = n.domain,
          o = 10;
        function u() {
          var a, u;
          return (
            (e =
              (a = o) === Math.E
                ? Math.log
                : (10 === a && Math.log10) ||
                  (2 === a && Math.log2) ||
                  ((a = Math.log(a)), (t) => Math.log(t) / a)),
            (r =
              10 === (u = o)
                ? tX
                : u === Math.E
                ? Math.exp
                : (t) => Math.pow(u, t)),
            i()[0] < 0 ? ((e = tJ(e)), (r = tJ(r)), t(tY, tV)) : t(tW, tG),
            n
          );
        }
        return (
          (n.base = function (t) {
            return arguments.length ? ((o = +t), u()) : o;
          }),
          (n.domain = function (t) {
            return arguments.length ? (i(t), u()) : i();
          }),
          (n.ticks = (t) => {
            let n,
              a,
              u = i(),
              l = u[0],
              c = u[u.length - 1],
              s = c < l;
            s && ([l, c] = [c, l]);
            let f = e(l),
              h = e(c),
              d = null == t ? 10 : +t,
              p = [];
            if (!(o % 1) && h - f < d) {
              if (((f = Math.floor(f)), (h = Math.ceil(h)), l > 0)) {
                for (; f <= h; ++f)
                  for (n = 1; n < o; ++n)
                    if (!((a = f < 0 ? n / r(-f) : n * r(f)) < l)) {
                      if (a > c) break;
                      p.push(a);
                    }
              } else
                for (; f <= h; ++f)
                  for (n = o - 1; n >= 1; --n)
                    if (!((a = f > 0 ? n / r(-f) : n * r(f)) < l)) {
                      if (a > c) break;
                      p.push(a);
                    }
              2 * p.length < d && (p = P(l, c, d));
            } else p = P(f, h, Math.min(h - f, d)).map(r);
            return s ? p.reverse() : p;
          }),
          (n.tickFormat = (t, i) => {
            if (
              (null == t && (t = 10),
              null == i && (i = 10 === o ? "s" : ","),
              "function" != typeof i &&
                (o % 1 || null != (i = tI(i)).precision || (i.trim = !0),
                (i = a(i))),
              t === 1 / 0)
            )
              return i;
            let u = Math.max(1, (o * t) / n.ticks().length);
            return (t) => {
              let n = t / r(Math.round(e(t)));
              return n * o < o - 0.5 && (n *= o), n <= u ? i(t) : "";
            };
          }),
          (n.nice = () =>
            i(
              tq(i(), {
                floor: (t) => r(Math.floor(e(t))),
                ceil: (t) => r(Math.ceil(e(t))),
              })
            )),
          n
        );
      }
      function t0(t) {
        return function (e) {
          return Math.sign(e) * Math.log1p(Math.abs(e / t));
        };
      }
      function t1(t) {
        return function (e) {
          return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
        };
      }
      function t2(t) {
        var e = 1,
          r = t(t0(1), t1(e));
        return (
          (r.constant = function (r) {
            return arguments.length ? t(t0((e = +r)), t1(e)) : e;
          }),
          tZ(r)
        );
      }
      function t4(t) {
        return function (e) {
          return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
        };
      }
      function t5(t) {
        return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
      }
      function t3(t) {
        return t < 0 ? -t * t : t * t;
      }
      function t6(t) {
        var e = t(tP, tP),
          r = 1;
        return (
          (e.exponent = function (e) {
            return arguments.length
              ? 1 == (r = +e)
                ? t(tP, tP)
                : 0.5 === r
                ? t(t5, t3)
                : t(t4(r), t4(1 / r))
              : r;
          }),
          tZ(e)
        );
      }
      function t7() {
        var t = t6(tk());
        return (
          (t.copy = function () {
            return tC(t, t7()).exponent(t.exponent());
          }),
          p.apply(t, arguments),
          t
        );
      }
      function t8() {
        return t7.apply(null, arguments).exponent(0.5);
      }
      function t9(t) {
        return Math.sign(t) * t * t;
      }
      function et(t, e) {
        let r;
        if (void 0 === e)
          for (let e of t)
            null != e && (r < e || (void 0 === r && e >= e)) && (r = e);
        else {
          let n = -1;
          for (let i of t)
            null != (i = e(i, ++n, t)) &&
              (r < i || (void 0 === r && i >= i)) &&
              (r = i);
        }
        return r;
      }
      function ee(t, e) {
        let r;
        if (void 0 === e)
          for (let e of t)
            null != e && (r > e || (void 0 === r && e >= e)) && (r = e);
        else {
          let n = -1;
          for (let i of t)
            null != (i = e(i, ++n, t)) &&
              (r > i || (void 0 === r && i >= i)) &&
              (r = i);
        }
        return r;
      }
      (a = (i = (function (t) {
        var e,
          r,
          i,
          a =
            void 0 === t.grouping || void 0 === t.thousands
              ? tF
              : ((e = tH.call(t.grouping, Number)),
                (r = t.thousands + ""),
                function (t, n) {
                  for (
                    var i = t.length, a = [], o = 0, u = e[0], l = 0;
                    i > 0 &&
                    u > 0 &&
                    (l + u + 1 > n && (u = Math.max(1, n - l)),
                    a.push(t.substring((i -= u), i + u)),
                    !((l += u + 1) > n));

                  )
                    u = e[(o = (o + 1) % e.length)];
                  return a.reverse().join(r);
                }),
          o = void 0 === t.currency ? "" : t.currency[0] + "",
          u = void 0 === t.currency ? "" : t.currency[1] + "",
          l = void 0 === t.decimal ? "." : t.decimal + "",
          c =
            void 0 === t.numerals
              ? tF
              : ((i = tH.call(t.numerals, String)),
                function (t) {
                  return t.replace(/[0-9]/g, function (t) {
                    return i[+t];
                  });
                }),
          s = void 0 === t.percent ? "%" : t.percent + "",
          f = void 0 === t.minus ? "−" : t.minus + "",
          h = void 0 === t.nan ? "NaN" : t.nan + "";
        function d(t) {
          var e = (t = tI(t)).fill,
            r = t.align,
            i = t.sign,
            d = t.symbol,
            p = t.zero,
            y = t.width,
            v = t.comma,
            g = t.precision,
            m = t.trim,
            b = t.type;
          "n" === b
            ? ((v = !0), (b = "g"))
            : tR[b] || (void 0 === g && (g = 12), (m = !0), (b = "g")),
            (p || ("0" === e && "=" === r)) && ((p = !0), (e = "0"), (r = "="));
          var x =
              "$" === d
                ? o
                : "#" === d && /[boxX]/.test(b)
                ? "0" + b.toLowerCase()
                : "",
            w = "$" === d ? u : /[%p]/.test(b) ? s : "",
            O = tR[b],
            M = /[defgprs%]/.test(b);
          function j(t) {
            var o,
              u,
              s,
              d = x,
              j = w;
            if ("c" === b) (j = O(t) + j), (t = "");
            else {
              var S = (t *= 1) < 0 || 1 / t < 0;
              if (
                ((t = isNaN(t) ? h : O(Math.abs(t), g)),
                m &&
                  (t = (function (t) {
                    t: for (var e, r = t.length, n = 1, i = -1; n < r; ++n)
                      switch (t[n]) {
                        case ".":
                          i = e = n;
                          break;
                        case "0":
                          0 === i && (i = n), (e = n);
                          break;
                        default:
                          if (!+t[n]) break t;
                          i > 0 && (i = 0);
                      }
                    return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t;
                  })(t)),
                S && 0 == +t && "+" !== i && (S = !1),
                (d =
                  (S ? ("(" === i ? i : f) : "-" === i || "(" === i ? "" : i) +
                  d),
                (j =
                  ("s" === b ? tB[8 + n / 3] : "") +
                  j +
                  (S && "(" === i ? ")" : "")),
                M)
              ) {
                for (o = -1, u = t.length; ++o < u; )
                  if (48 > (s = t.charCodeAt(o)) || s > 57) {
                    (j = (46 === s ? l + t.slice(o + 1) : t.slice(o)) + j),
                      (t = t.slice(0, o));
                    break;
                  }
              }
            }
            v && !p && (t = a(t, 1 / 0));
            var _ = d.length + t.length + j.length,
              P = _ < y ? Array(y - _ + 1).join(e) : "";
            switch (
              (v &&
                p &&
                ((t = a(P + t, P.length ? y - j.length : 1 / 0)), (P = "")),
              r)
            ) {
              case "<":
                t = d + t + j + P;
                break;
              case "=":
                t = d + P + t + j;
                break;
              case "^":
                t = P.slice(0, (_ = P.length >> 1)) + d + t + j + P.slice(_);
                break;
              default:
                t = P + d + t + j;
            }
            return c(t);
          }
          return (
            (g =
              void 0 === g
                ? 6
                : /[gprs]/.test(b)
                ? Math.max(1, Math.min(21, g))
                : Math.max(0, Math.min(20, g))),
            (j.toString = function () {
              return t + "";
            }),
            j
          );
        }
        return {
          format: d,
          formatPrefix: function (t, e) {
            var r = d((((t = tI(t)).type = "f"), t)),
              n = 3 * Math.max(-8, Math.min(8, Math.floor(tL(e) / 3))),
              i = Math.pow(10, -n),
              a = tB[8 + n / 3];
            return function (t) {
              return r(i * t) + a;
            };
          },
        };
      })({ thousands: ",", grouping: [3], currency: ["$", ""] })).format),
        (o = i.formatPrefix);
      function er(t, e) {
        return (
          (null == t || !(t >= t)) - (null == e || !(e >= e)) ||
          (t < e ? -1 : +(t > e))
        );
      }
      function en(t, e, r) {
        let n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      let ei = new Date(),
        ea = new Date();
      function eo(t, e, r, n) {
        function i(e) {
          return t((e = 0 == arguments.length ? new Date() : new Date(+e))), e;
        }
        return (
          (i.floor = (e) => (t((e = new Date(+e))), e)),
          (i.ceil = (r) => (t((r = new Date(r - 1))), e(r, 1), t(r), r)),
          (i.round = (t) => {
            let e = i(t),
              r = i.ceil(t);
            return t - e < r - t ? e : r;
          }),
          (i.offset = (t, r) => (
            e((t = new Date(+t)), null == r ? 1 : Math.floor(r)), t
          )),
          (i.range = (r, n, a) => {
            let o,
              u = [];
            if (
              ((r = i.ceil(r)),
              (a = null == a ? 1 : Math.floor(a)),
              !(r < n) || !(a > 0))
            )
              return u;
            do u.push((o = new Date(+r))), e(r, a), t(r);
            while (o < r && r < n);
            return u;
          }),
          (i.filter = (r) =>
            eo(
              (e) => {
                if (e >= e) for (; t(e), !r(e); ) e.setTime(e - 1);
              },
              (t, n) => {
                if (t >= t)
                  if (n < 0) for (; ++n <= 0; ) for (; e(t, -1), !r(t); );
                  else for (; --n >= 0; ) for (; e(t, 1), !r(t); );
              }
            )),
          r &&
            ((i.count = (e, n) => (
              ei.setTime(+e),
              ea.setTime(+n),
              t(ei),
              t(ea),
              Math.floor(r(ei, ea))
            )),
            (i.every = (t) =>
              isFinite((t = Math.floor(t))) && t > 0
                ? t > 1
                  ? i.filter(
                      n ? (e) => n(e) % t == 0 : (e) => i.count(0, e) % t == 0
                    )
                  : i
                : null)),
          i
        );
      }
      let eu = eo(
        () => {},
        (t, e) => {
          t.setTime(+t + e);
        },
        (t, e) => e - t
      );
      (eu.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? t > 1
            ? eo(
                (e) => {
                  e.setTime(Math.floor(e / t) * t);
                },
                (e, r) => {
                  e.setTime(+e + r * t);
                },
                (e, r) => (r - e) / t
              )
            : eu
          : null),
        eu.range;
      let el = eo(
        (t) => {
          t.setTime(t - t.getMilliseconds());
        },
        (t, e) => {
          t.setTime(+t + 1e3 * e);
        },
        (t, e) => (e - t) / 1e3,
        (t) => t.getUTCSeconds()
      );
      el.range;
      let ec = eo(
        (t) => {
          t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds());
        },
        (t, e) => {
          t.setTime(+t + 6e4 * e);
        },
        (t, e) => (e - t) / 6e4,
        (t) => t.getMinutes()
      );
      ec.range;
      let es = eo(
        (t) => {
          t.setUTCSeconds(0, 0);
        },
        (t, e) => {
          t.setTime(+t + 6e4 * e);
        },
        (t, e) => (e - t) / 6e4,
        (t) => t.getUTCMinutes()
      );
      es.range;
      let ef = eo(
        (t) => {
          t.setTime(
            t -
              t.getMilliseconds() -
              1e3 * t.getSeconds() -
              6e4 * t.getMinutes()
          );
        },
        (t, e) => {
          t.setTime(+t + 36e5 * e);
        },
        (t, e) => (e - t) / 36e5,
        (t) => t.getHours()
      );
      ef.range;
      let eh = eo(
        (t) => {
          t.setUTCMinutes(0, 0, 0);
        },
        (t, e) => {
          t.setTime(+t + 36e5 * e);
        },
        (t, e) => (e - t) / 36e5,
        (t) => t.getUTCHours()
      );
      eh.range;
      let ed = eo(
        (t) => t.setHours(0, 0, 0, 0),
        (t, e) => t.setDate(t.getDate() + e),
        (t, e) =>
          (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) /
          864e5,
        (t) => t.getDate() - 1
      );
      ed.range;
      let ep = eo(
        (t) => {
          t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCDate(t.getUTCDate() + e);
        },
        (t, e) => (e - t) / 864e5,
        (t) => t.getUTCDate() - 1
      );
      ep.range;
      let ey = eo(
        (t) => {
          t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCDate(t.getUTCDate() + e);
        },
        (t, e) => (e - t) / 864e5,
        (t) => Math.floor(t / 864e5)
      );
      function ev(t) {
        return eo(
          (e) => {
            e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
              e.setHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setDate(t.getDate() + 7 * e);
          },
          (t, e) =>
            (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) /
            6048e5
        );
      }
      ey.range;
      let eg = ev(0),
        em = ev(1),
        eb = ev(2),
        ex = ev(3),
        ew = ev(4),
        eO = ev(5),
        eM = ev(6);
      function ej(t) {
        return eo(
          (e) => {
            e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
              e.setUTCHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setUTCDate(t.getUTCDate() + 7 * e);
          },
          (t, e) => (e - t) / 6048e5
        );
      }
      eg.range, em.range, eb.range, ex.range, ew.range, eO.range, eM.range;
      let eS = ej(0),
        e_ = ej(1),
        eP = ej(2),
        eA = ej(3),
        eE = ej(4),
        eT = ej(5),
        eC = ej(6);
      eS.range, e_.range, eP.range, eA.range, eE.range, eT.range, eC.range;
      let ek = eo(
        (t) => {
          t.setDate(1), t.setHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setMonth(t.getMonth() + e);
        },
        (t, e) =>
          e.getMonth() -
          t.getMonth() +
          (e.getFullYear() - t.getFullYear()) * 12,
        (t) => t.getMonth()
      );
      ek.range;
      let eD = eo(
        (t) => {
          t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCMonth(t.getUTCMonth() + e);
        },
        (t, e) =>
          e.getUTCMonth() -
          t.getUTCMonth() +
          (e.getUTCFullYear() - t.getUTCFullYear()) * 12,
        (t) => t.getUTCMonth()
      );
      eD.range;
      let eN = eo(
        (t) => {
          t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setFullYear(t.getFullYear() + e);
        },
        (t, e) => e.getFullYear() - t.getFullYear(),
        (t) => t.getFullYear()
      );
      (eN.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? eo(
              (e) => {
                e.setFullYear(Math.floor(e.getFullYear() / t) * t),
                  e.setMonth(0, 1),
                  e.setHours(0, 0, 0, 0);
              },
              (e, r) => {
                e.setFullYear(e.getFullYear() + r * t);
              }
            )
          : null),
        eN.range;
      let eI = eo(
        (t) => {
          t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCFullYear(t.getUTCFullYear() + e);
        },
        (t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
        (t) => t.getUTCFullYear()
      );
      function ez(t, e, r, n, i, a) {
        let o = [
          [el, 1, 1e3],
          [el, 5, 5e3],
          [el, 15, 15e3],
          [el, 30, 3e4],
          [a, 1, 6e4],
          [a, 5, 3e5],
          [a, 15, 9e5],
          [a, 30, 18e5],
          [i, 1, 36e5],
          [i, 3, 108e5],
          [i, 6, 216e5],
          [i, 12, 432e5],
          [n, 1, 864e5],
          [n, 2, 1728e5],
          [r, 1, 6048e5],
          [e, 1, 2592e6],
          [e, 3, 7776e6],
          [t, 1, 31536e6],
        ];
        function u(e, r, n) {
          let i = Math.abs(r - e) / n,
            a = k(([, , t]) => t).right(o, i);
          if (a === o.length) return t.every(E(e / 31536e6, r / 31536e6, n));
          if (0 === a) return eu.every(Math.max(E(e, r, n), 1));
          let [u, l] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
          return u.every(l);
        }
        return [
          function (t, e, r) {
            let n = e < t;
            n && ([t, e] = [e, t]);
            let i = r && "function" == typeof r.range ? r : u(t, e, r),
              a = i ? i.range(t, +e + 1) : [];
            return n ? a.reverse() : a;
          },
          u,
        ];
      }
      (eI.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? eo(
              (e) => {
                e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
                  e.setUTCMonth(0, 1),
                  e.setUTCHours(0, 0, 0, 0);
              },
              (e, r) => {
                e.setUTCFullYear(e.getUTCFullYear() + r * t);
              }
            )
          : null),
        eI.range;
      let [e$, eL] = ez(eI, eD, eS, ey, eh, es),
        [eU, eR] = ez(eN, ek, eg, ed, ef, ec);
      function eF(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          return e.setFullYear(t.y), e;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }
      function eH(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          return e.setUTCFullYear(t.y), e;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }
      function eB(t, e, r) {
        return { y: t, m: e, d: r, H: 0, M: 0, S: 0, L: 0 };
      }
      var eK = { "-": "", _: " ", 0: "0" },
        eZ = /^\s*\d+/,
        eq = /^%/,
        eW = /[\\^$*+?|[\]().{}]/g;
      function eG(t, e, r) {
        var n = t < 0 ? "-" : "",
          i = (n ? -t : t) + "",
          a = i.length;
        return n + (a < r ? Array(r - a + 1).join(e) + i : i);
      }
      function eY(t) {
        return t.replace(eW, "\\$&");
      }
      function eV(t) {
        return RegExp("^(?:" + t.map(eY).join("|") + ")", "i");
      }
      function eX(t) {
        return new Map(t.map((t, e) => [t.toLowerCase(), e]));
      }
      function eJ(t, e, r) {
        var n = eZ.exec(e.slice(r, r + 1));
        return n ? ((t.w = +n[0]), r + n[0].length) : -1;
      }
      function eQ(t, e, r) {
        var n = eZ.exec(e.slice(r, r + 1));
        return n ? ((t.u = +n[0]), r + n[0].length) : -1;
      }
      function e0(t, e, r) {
        var n = eZ.exec(e.slice(r, r + 2));
        return n ? ((t.U = +n[0]), r + n[0].length) : -1;
      }
      function e1(t, e, r) {
        var n = eZ.exec(e.slice(r, r + 2));
        return n ? ((t.V = +n[0]), r + n[0].length) : -1;
      }
      function e2(t, e, r) {
        var n = eZ.exec(e.slice(r, r + 2));
        return n ? ((t.W = +n[0]), r + n[0].length) : -1;
      }
      function e4(t, e, r) {
        var n = eZ.exec(e.slice(r, r + 4));
        return n ? ((t.y = +n[0]), r + n[0].length) : -1;
      }
      function e5(t, e, r) {
        var n = eZ.exec(e.slice(r, r + 2));
        return n
          ? ((t.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length)
          : -1;
      }
      function e3(t, e, r) {
        var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r, r + 6));
        return n
          ? ((t.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length)
          : -1;
      }
      function e6(t, e, r) {
        var n = eZ.exec(e.slice(r, r + 1));
        return n ? ((t.q = 3 * n[0] - 3), r + n[0].length) : -1;
      }
      function e7(t, e, r) {
        var n = eZ.exec(e.slice(r, r + 2));
        return n ? ((t.m = n[0] - 1), r + n[0].length) : -1;
      }
      function e8(t, e, r) {
        var n = eZ.exec(e.slice(r, r + 2));
        return n ? ((t.d = +n[0]), r + n[0].length) : -1;
      }
      function e9(t, e, r) {
        var n = eZ.exec(e.slice(r, r + 3));
        return n ? ((t.m = 0), (t.d = +n[0]), r + n[0].length) : -1;
      }
      function rt(t, e, r) {
        var n = eZ.exec(e.slice(r, r + 2));
        return n ? ((t.H = +n[0]), r + n[0].length) : -1;
      }
      function re(t, e, r) {
        var n = eZ.exec(e.slice(r, r + 2));
        return n ? ((t.M = +n[0]), r + n[0].length) : -1;
      }
      function rr(t, e, r) {
        var n = eZ.exec(e.slice(r, r + 2));
        return n ? ((t.S = +n[0]), r + n[0].length) : -1;
      }
      function rn(t, e, r) {
        var n = eZ.exec(e.slice(r, r + 3));
        return n ? ((t.L = +n[0]), r + n[0].length) : -1;
      }
      function ri(t, e, r) {
        var n = eZ.exec(e.slice(r, r + 6));
        return n ? ((t.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
      }
      function ra(t, e, r) {
        var n = eq.exec(e.slice(r, r + 1));
        return n ? r + n[0].length : -1;
      }
      function ro(t, e, r) {
        var n = eZ.exec(e.slice(r));
        return n ? ((t.Q = +n[0]), r + n[0].length) : -1;
      }
      function ru(t, e, r) {
        var n = eZ.exec(e.slice(r));
        return n ? ((t.s = +n[0]), r + n[0].length) : -1;
      }
      function rl(t, e) {
        return eG(t.getDate(), e, 2);
      }
      function rc(t, e) {
        return eG(t.getHours(), e, 2);
      }
      function rs(t, e) {
        return eG(t.getHours() % 12 || 12, e, 2);
      }
      function rf(t, e) {
        return eG(1 + ed.count(eN(t), t), e, 3);
      }
      function rh(t, e) {
        return eG(t.getMilliseconds(), e, 3);
      }
      function rd(t, e) {
        return rh(t, e) + "000";
      }
      function rp(t, e) {
        return eG(t.getMonth() + 1, e, 2);
      }
      function ry(t, e) {
        return eG(t.getMinutes(), e, 2);
      }
      function rv(t, e) {
        return eG(t.getSeconds(), e, 2);
      }
      function rg(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e;
      }
      function rm(t, e) {
        return eG(eg.count(eN(t) - 1, t), e, 2);
      }
      function rb(t) {
        var e = t.getDay();
        return e >= 4 || 0 === e ? ew(t) : ew.ceil(t);
      }
      function rx(t, e) {
        return (
          (t = rb(t)), eG(ew.count(eN(t), t) + (4 === eN(t).getDay()), e, 2)
        );
      }
      function rw(t) {
        return t.getDay();
      }
      function rO(t, e) {
        return eG(em.count(eN(t) - 1, t), e, 2);
      }
      function rM(t, e) {
        return eG(t.getFullYear() % 100, e, 2);
      }
      function rj(t, e) {
        return eG((t = rb(t)).getFullYear() % 100, e, 2);
      }
      function rS(t, e) {
        return eG(t.getFullYear() % 1e4, e, 4);
      }
      function r_(t, e) {
        var r = t.getDay();
        return eG(
          (t = r >= 4 || 0 === r ? ew(t) : ew.ceil(t)).getFullYear() % 1e4,
          e,
          4
        );
      }
      function rP(t) {
        var e = t.getTimezoneOffset();
        return (
          (e > 0 ? "-" : ((e *= -1), "+")) +
          eG((e / 60) | 0, "0", 2) +
          eG(e % 60, "0", 2)
        );
      }
      function rA(t, e) {
        return eG(t.getUTCDate(), e, 2);
      }
      function rE(t, e) {
        return eG(t.getUTCHours(), e, 2);
      }
      function rT(t, e) {
        return eG(t.getUTCHours() % 12 || 12, e, 2);
      }
      function rC(t, e) {
        return eG(1 + ep.count(eI(t), t), e, 3);
      }
      function rk(t, e) {
        return eG(t.getUTCMilliseconds(), e, 3);
      }
      function rD(t, e) {
        return rk(t, e) + "000";
      }
      function rN(t, e) {
        return eG(t.getUTCMonth() + 1, e, 2);
      }
      function rI(t, e) {
        return eG(t.getUTCMinutes(), e, 2);
      }
      function rz(t, e) {
        return eG(t.getUTCSeconds(), e, 2);
      }
      function r$(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e;
      }
      function rL(t, e) {
        return eG(eS.count(eI(t) - 1, t), e, 2);
      }
      function rU(t) {
        var e = t.getUTCDay();
        return e >= 4 || 0 === e ? eE(t) : eE.ceil(t);
      }
      function rR(t, e) {
        return (
          (t = rU(t)), eG(eE.count(eI(t), t) + (4 === eI(t).getUTCDay()), e, 2)
        );
      }
      function rF(t) {
        return t.getUTCDay();
      }
      function rH(t, e) {
        return eG(e_.count(eI(t) - 1, t), e, 2);
      }
      function rB(t, e) {
        return eG(t.getUTCFullYear() % 100, e, 2);
      }
      function rK(t, e) {
        return eG((t = rU(t)).getUTCFullYear() % 100, e, 2);
      }
      function rZ(t, e) {
        return eG(t.getUTCFullYear() % 1e4, e, 4);
      }
      function rq(t, e) {
        var r = t.getUTCDay();
        return eG(
          (t = r >= 4 || 0 === r ? eE(t) : eE.ceil(t)).getUTCFullYear() % 1e4,
          e,
          4
        );
      }
      function rW() {
        return "+0000";
      }
      function rG() {
        return "%";
      }
      function rY(t) {
        return +t;
      }
      function rV(t) {
        return Math.floor(t / 1e3);
      }
      function rX(t) {
        return new Date(t);
      }
      function rJ(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function rQ(t, e, r, n, i, a, o, u, l, c) {
        var s = tD(),
          f = s.invert,
          h = s.domain,
          d = c(".%L"),
          p = c(":%S"),
          y = c("%I:%M"),
          v = c("%I %p"),
          g = c("%a %d"),
          m = c("%b %d"),
          b = c("%B"),
          x = c("%Y");
        function w(t) {
          return (
            l(t) < t
              ? d
              : u(t) < t
              ? p
              : o(t) < t
              ? y
              : a(t) < t
              ? v
              : n(t) < t
              ? i(t) < t
                ? g
                : m
              : r(t) < t
              ? b
              : x
          )(t);
        }
        return (
          (s.invert = function (t) {
            return new Date(f(t));
          }),
          (s.domain = function (t) {
            return arguments.length ? h(Array.from(t, rJ)) : h().map(rX);
          }),
          (s.ticks = function (e) {
            var r = h();
            return t(r[0], r[r.length - 1], null == e ? 10 : e);
          }),
          (s.tickFormat = function (t, e) {
            return null == e ? w : c(e);
          }),
          (s.nice = function (t) {
            var r = h();
            return (
              (t && "function" == typeof t.range) ||
                (t = e(r[0], r[r.length - 1], null == t ? 10 : t)),
              t ? h(tq(r, t)) : s
            );
          }),
          (s.copy = function () {
            return tC(s, rQ(t, e, r, n, i, a, o, u, l, c));
          }),
          s
        );
      }
      function r0() {
        return p.apply(
          rQ(eU, eR, eN, ek, eg, ed, ef, ec, el, l).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments
        );
      }
      function r1() {
        return p.apply(
          rQ(e$, eL, eI, eD, eS, ep, eh, es, el, c).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments
        );
      }
      function r2() {
        var t,
          e,
          r,
          n,
          i,
          a = 0,
          o = 1,
          u = tP,
          l = !1;
        function c(e) {
          return null == e || isNaN((e *= 1))
            ? i
            : u(
                0 === r
                  ? 0.5
                  : ((e = (n(e) - t) * r), l ? Math.max(0, Math.min(1, e)) : e)
              );
        }
        function s(t) {
          return function (e) {
            var r, n;
            return arguments.length
              ? (([r, n] = e), (u = t(r, n)), c)
              : [u(0), u(1)];
          };
        }
        return (
          (c.domain = function (i) {
            return arguments.length
              ? (([a, o] = i),
                (t = n((a *= 1))),
                (e = n((o *= 1))),
                (r = t === e ? 0 : 1 / (e - t)),
                c)
              : [a, o];
          }),
          (c.clamp = function (t) {
            return arguments.length ? ((l = !!t), c) : l;
          }),
          (c.interpolator = function (t) {
            return arguments.length ? ((u = t), c) : u;
          }),
          (c.range = s(tM)),
          (c.rangeRound = s(tj)),
          (c.unknown = function (t) {
            return arguments.length ? ((i = t), c) : i;
          }),
          function (i) {
            return (
              (n = i),
              (t = i(a)),
              (e = i(o)),
              (r = t === e ? 0 : 1 / (e - t)),
              c
            );
          }
        );
      }
      function r4(t, e) {
        return e
          .domain(t.domain())
          .interpolator(t.interpolator())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function r5() {
        var t = t6(r2());
        return (
          (t.copy = function () {
            return r4(t, r5()).exponent(t.exponent());
          }),
          y.apply(t, arguments)
        );
      }
      function r3() {
        return r5.apply(null, arguments).exponent(0.5);
      }
      function r6() {
        var t,
          e,
          r,
          n,
          i,
          a,
          o,
          u = 0,
          l = 0.5,
          c = 1,
          s = 1,
          f = tP,
          h = !1;
        function d(t) {
          return isNaN((t *= 1))
            ? o
            : ((t = 0.5 + ((t = +a(t)) - e) * (s * t < s * e ? n : i)),
              f(h ? Math.max(0, Math.min(1, t)) : t));
        }
        function p(t) {
          return function (e) {
            var r, n, i;
            return arguments.length
              ? (([r, n, i] = e),
                (f = (function (t, e) {
                  void 0 === e && ((e = t), (t = tM));
                  for (
                    var r = 0,
                      n = e.length - 1,
                      i = e[0],
                      a = Array(n < 0 ? 0 : n);
                    r < n;

                  )
                    a[r] = t(i, (i = e[++r]));
                  return function (t) {
                    var e = Math.max(0, Math.min(n - 1, Math.floor((t *= n))));
                    return a[e](t - e);
                  };
                })(t, [r, n, i])),
                d)
              : [f(0), f(0.5), f(1)];
          };
        }
        return (
          (d.domain = function (o) {
            return arguments.length
              ? (([u, l, c] = o),
                (t = a((u *= 1))),
                (e = a((l *= 1))),
                (r = a((c *= 1))),
                (n = t === e ? 0 : 0.5 / (e - t)),
                (i = e === r ? 0 : 0.5 / (r - e)),
                (s = e < t ? -1 : 1),
                d)
              : [u, l, c];
          }),
          (d.clamp = function (t) {
            return arguments.length ? ((h = !!t), d) : h;
          }),
          (d.interpolator = function (t) {
            return arguments.length ? ((f = t), d) : f;
          }),
          (d.range = p(tM)),
          (d.rangeRound = p(tj)),
          (d.unknown = function (t) {
            return arguments.length ? ((o = t), d) : o;
          }),
          function (o) {
            return (
              (a = o),
              (t = o(u)),
              (e = o(l)),
              (r = o(c)),
              (n = t === e ? 0 : 0.5 / (e - t)),
              (i = e === r ? 0 : 0.5 / (r - e)),
              (s = e < t ? -1 : 1),
              d
            );
          }
        );
      }
      function r7() {
        var t = t6(r6());
        return (
          (t.copy = function () {
            return r4(t, r7()).exponent(t.exponent());
          }),
          y.apply(t, arguments)
        );
      }
      function r8() {
        return r7.apply(null, arguments).exponent(0.5);
      }
      (l = (u = (function (t) {
        var e = t.dateTime,
          r = t.date,
          n = t.time,
          i = t.periods,
          a = t.days,
          o = t.shortDays,
          u = t.months,
          l = t.shortMonths,
          c = eV(i),
          s = eX(i),
          f = eV(a),
          h = eX(a),
          d = eV(o),
          p = eX(o),
          y = eV(u),
          v = eX(u),
          g = eV(l),
          m = eX(l),
          b = {
            a: function (t) {
              return o[t.getDay()];
            },
            A: function (t) {
              return a[t.getDay()];
            },
            b: function (t) {
              return l[t.getMonth()];
            },
            B: function (t) {
              return u[t.getMonth()];
            },
            c: null,
            d: rl,
            e: rl,
            f: rd,
            g: rj,
            G: r_,
            H: rc,
            I: rs,
            j: rf,
            L: rh,
            m: rp,
            M: ry,
            p: function (t) {
              return i[+(t.getHours() >= 12)];
            },
            q: function (t) {
              return 1 + ~~(t.getMonth() / 3);
            },
            Q: rY,
            s: rV,
            S: rv,
            u: rg,
            U: rm,
            V: rx,
            w: rw,
            W: rO,
            x: null,
            X: null,
            y: rM,
            Y: rS,
            Z: rP,
            "%": rG,
          },
          x = {
            a: function (t) {
              return o[t.getUTCDay()];
            },
            A: function (t) {
              return a[t.getUTCDay()];
            },
            b: function (t) {
              return l[t.getUTCMonth()];
            },
            B: function (t) {
              return u[t.getUTCMonth()];
            },
            c: null,
            d: rA,
            e: rA,
            f: rD,
            g: rK,
            G: rq,
            H: rE,
            I: rT,
            j: rC,
            L: rk,
            m: rN,
            M: rI,
            p: function (t) {
              return i[+(t.getUTCHours() >= 12)];
            },
            q: function (t) {
              return 1 + ~~(t.getUTCMonth() / 3);
            },
            Q: rY,
            s: rV,
            S: rz,
            u: r$,
            U: rL,
            V: rR,
            w: rF,
            W: rH,
            x: null,
            X: null,
            y: rB,
            Y: rZ,
            Z: rW,
            "%": rG,
          },
          w = {
            a: function (t, e, r) {
              var n = d.exec(e.slice(r));
              return n
                ? ((t.w = p.get(n[0].toLowerCase())), r + n[0].length)
                : -1;
            },
            A: function (t, e, r) {
              var n = f.exec(e.slice(r));
              return n
                ? ((t.w = h.get(n[0].toLowerCase())), r + n[0].length)
                : -1;
            },
            b: function (t, e, r) {
              var n = g.exec(e.slice(r));
              return n
                ? ((t.m = m.get(n[0].toLowerCase())), r + n[0].length)
                : -1;
            },
            B: function (t, e, r) {
              var n = y.exec(e.slice(r));
              return n
                ? ((t.m = v.get(n[0].toLowerCase())), r + n[0].length)
                : -1;
            },
            c: function (t, r, n) {
              return j(t, e, r, n);
            },
            d: e8,
            e: e8,
            f: ri,
            g: e5,
            G: e4,
            H: rt,
            I: rt,
            j: e9,
            L: rn,
            m: e7,
            M: re,
            p: function (t, e, r) {
              var n = c.exec(e.slice(r));
              return n
                ? ((t.p = s.get(n[0].toLowerCase())), r + n[0].length)
                : -1;
            },
            q: e6,
            Q: ro,
            s: ru,
            S: rr,
            u: eQ,
            U: e0,
            V: e1,
            w: eJ,
            W: e2,
            x: function (t, e, n) {
              return j(t, r, e, n);
            },
            X: function (t, e, r) {
              return j(t, n, e, r);
            },
            y: e5,
            Y: e4,
            Z: e3,
            "%": ra,
          };
        function O(t, e) {
          return function (r) {
            var n,
              i,
              a,
              o = [],
              u = -1,
              l = 0,
              c = t.length;
            for (r instanceof Date || (r = new Date(+r)); ++u < c; )
              37 === t.charCodeAt(u) &&
                (o.push(t.slice(l, u)),
                null != (i = eK[(n = t.charAt(++u))])
                  ? (n = t.charAt(++u))
                  : (i = "e" === n ? " " : "0"),
                (a = e[n]) && (n = a(r, i)),
                o.push(n),
                (l = u + 1));
            return o.push(t.slice(l, u)), o.join("");
          };
        }
        function M(t, e) {
          return function (r) {
            var n,
              i,
              a = eB(1900, void 0, 1);
            if (j(a, t, (r += ""), 0) != r.length) return null;
            if ("Q" in a) return new Date(a.Q);
            if ("s" in a) return new Date(1e3 * a.s + ("L" in a ? a.L : 0));
            if (
              (!e || "Z" in a || (a.Z = 0),
              "p" in a && (a.H = (a.H % 12) + 12 * a.p),
              void 0 === a.m && (a.m = "q" in a ? a.q : 0),
              "V" in a)
            ) {
              if (a.V < 1 || a.V > 53) return null;
              "w" in a || (a.w = 1),
                "Z" in a
                  ? ((n =
                      (i = (n = eH(eB(a.y, 0, 1))).getUTCDay()) > 4 || 0 === i
                        ? e_.ceil(n)
                        : e_(n)),
                    (n = ep.offset(n, (a.V - 1) * 7)),
                    (a.y = n.getUTCFullYear()),
                    (a.m = n.getUTCMonth()),
                    (a.d = n.getUTCDate() + ((a.w + 6) % 7)))
                  : ((n =
                      (i = (n = eF(eB(a.y, 0, 1))).getDay()) > 4 || 0 === i
                        ? em.ceil(n)
                        : em(n)),
                    (n = ed.offset(n, (a.V - 1) * 7)),
                    (a.y = n.getFullYear()),
                    (a.m = n.getMonth()),
                    (a.d = n.getDate() + ((a.w + 6) % 7)));
            } else
              ("W" in a || "U" in a) &&
                ("w" in a || (a.w = "u" in a ? a.u % 7 : +("W" in a)),
                (i =
                  "Z" in a
                    ? eH(eB(a.y, 0, 1)).getUTCDay()
                    : eF(eB(a.y, 0, 1)).getDay()),
                (a.m = 0),
                (a.d =
                  "W" in a
                    ? ((a.w + 6) % 7) + 7 * a.W - ((i + 5) % 7)
                    : a.w + 7 * a.U - ((i + 6) % 7)));
            return "Z" in a
              ? ((a.H += (a.Z / 100) | 0), (a.M += a.Z % 100), eH(a))
              : eF(a);
          };
        }
        function j(t, e, r, n) {
          for (var i, a, o = 0, u = e.length, l = r.length; o < u; ) {
            if (n >= l) return -1;
            if (37 === (i = e.charCodeAt(o++))) {
              if (
                !(a = w[(i = e.charAt(o++)) in eK ? e.charAt(o++) : i]) ||
                (n = a(t, r, n)) < 0
              )
                return -1;
            } else if (i != r.charCodeAt(n++)) return -1;
          }
          return n;
        }
        return (
          (b.x = O(r, b)),
          (b.X = O(n, b)),
          (b.c = O(e, b)),
          (x.x = O(r, x)),
          (x.X = O(n, x)),
          (x.c = O(e, x)),
          {
            format: function (t) {
              var e = O((t += ""), b);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            parse: function (t) {
              var e = M((t += ""), !1);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            utcFormat: function (t) {
              var e = O((t += ""), x);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            utcParse: function (t) {
              var e = M((t += ""), !0);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
          }
        );
      })({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        shortMonths: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      })).format),
        u.parse,
        (c = u.utcFormat),
        u.utcParse;
      var r9 = r(97238),
        nt = r(39827),
        ne = r(60356),
        nr = r(16377),
        nn = r(78892);
      function ni(t) {
        if (Array.isArray(t) && 2 === t.length) {
          var [e, r] = t;
          if ((0, nn.H)(e) && (0, nn.H)(r)) return !0;
        }
        return !1;
      }
      function na(t, e, r) {
        return r ? t : [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
      }
      var no = r(8870),
        nu = r.n(no),
        nl = (t) => t,
        nc = {},
        ns = (t) => t === nc,
        nf = (t) =>
          function e() {
            return 0 == arguments.length ||
              (1 == arguments.length &&
                ns(arguments.length <= 0 ? void 0 : arguments[0]))
              ? e
              : t(...arguments);
          },
        nh = (t, e) =>
          1 === t
            ? e
            : nf(function () {
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++)
                  n[i] = arguments[i];
                var a = n.filter((t) => t !== nc).length;
                return a >= t
                  ? e(...n)
                  : nh(
                      t - a,
                      nf(function () {
                        for (
                          var t = arguments.length, r = Array(t), i = 0;
                          i < t;
                          i++
                        )
                          r[i] = arguments[i];
                        return e(
                          ...n.map((t) => (ns(t) ? r.shift() : t)),
                          ...r
                        );
                      })
                    );
              }),
        nd = (t) => nh(t.length, t),
        np = (t, e) => {
          for (var r = [], n = t; n < e; ++n) r[n - t] = n;
          return r;
        },
        ny = nd((t, e) =>
          Array.isArray(e)
            ? e.map(t)
            : Object.keys(e)
                .map((t) => e[t])
                .map(t)
        ),
        nv = function () {
          for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          if (!e.length) return nl;
          var n = e.reverse(),
            i = n[0],
            a = n.slice(1);
          return function () {
            return a.reduce((t, e) => e(t), i(...arguments));
          };
        },
        ng = (t) =>
          Array.isArray(t) ? t.reverse() : t.split("").reverse().join(""),
        nm = (t) => {
          var e = null,
            r = null;
          return function () {
            for (var n = arguments.length, i = Array(n), a = 0; a < n; a++)
              i[a] = arguments[a];
            return e &&
              i.every((t, r) => {
                var n;
                return t === (null == (n = e) ? void 0 : n[r]);
              })
              ? r
              : ((e = i), (r = t(...i)));
          };
        };
      function nb(t) {
        var e;
        return 0 === t
          ? 1
          : Math.floor(new (nu())(t).abs().log(10).toNumber()) + 1;
      }
      function nx(t, e, r) {
        for (var n = new (nu())(t), i = 0, a = []; n.lt(e) && i < 1e5; )
          a.push(n.toNumber()), (n = n.add(r)), i++;
        return a;
      }
      nd((t, e, r) => {
        var n = +t;
        return n + r * (e - n);
      }),
        nd((t, e, r) => {
          var n = e - t;
          return (r - t) / (n = n || 1 / 0);
        }),
        nd((t, e, r) => {
          var n = e - t;
          return Math.max(0, Math.min(1, (r - t) / (n = n || 1 / 0)));
        });
      var nw = (t) => {
          var [e, r] = t,
            [n, i] = [e, r];
          return e > r && ([n, i] = [r, e]), [n, i];
        },
        nO = (t, e, r) => {
          if (t.lte(0)) return new (nu())(0);
          var n = nb(t.toNumber()),
            i = new (nu())(10).pow(n),
            a = t.div(i),
            o = 1 !== n ? 0.05 : 0.1,
            u = new (nu())(Math.ceil(a.div(o).toNumber())).add(r).mul(o).mul(i);
          return new (nu())(e ? u.toNumber() : Math.ceil(u.toNumber()));
        },
        nM = (t, e, r) => {
          var n = new (nu())(1),
            i = new (nu())(t);
          if (!i.isint() && r) {
            var a = Math.abs(t);
            a < 1
              ? ((n = new (nu())(10).pow(nb(t) - 1)),
                (i = new (nu())(Math.floor(i.div(n).toNumber())).mul(n)))
              : a > 1 && (i = new (nu())(Math.floor(t)));
          } else
            0 === t
              ? (i = new (nu())(Math.floor((e - 1) / 2)))
              : r || (i = new (nu())(Math.floor(t)));
          var o = Math.floor((e - 1) / 2);
          return nv(
            ny((t) => i.add(new (nu())(t - o).mul(n)).toNumber()),
            np
          )(0, e);
        },
        nj = function (t, e, r, n) {
          var i,
            a =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 0;
          if (!Number.isFinite((e - t) / (r - 1)))
            return {
              step: new (nu())(0),
              tickMin: new (nu())(0),
              tickMax: new (nu())(0),
            };
          var o = nO(new (nu())(e).sub(t).div(r - 1), n, a),
            u = Math.ceil(
              (i =
                t <= 0 && e >= 0
                  ? new (nu())(0)
                  : (i = new (nu())(t).add(e).div(2)).sub(new (nu())(i).mod(o)))
                .sub(t)
                .div(o)
                .toNumber()
            ),
            l = Math.ceil(new (nu())(e).sub(i).div(o).toNumber()),
            c = u + l + 1;
          return c > r
            ? nj(t, e, r, n, a + 1)
            : (c < r &&
                ((l = e > 0 ? l + (r - c) : l), (u = e > 0 ? u : u + (r - c))),
              {
                step: o,
                tickMin: i.sub(new (nu())(u).mul(o)),
                tickMax: i.add(new (nu())(l).mul(o)),
              });
        },
        nS = nm(function (t) {
          var [e, r] = t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 6,
            i =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            a = Math.max(n, 2),
            [o, u] = nw([e, r]);
          if (o === -1 / 0 || u === 1 / 0) {
            var l =
              u === 1 / 0
                ? [o, ...np(0, n - 1).map(() => 1 / 0)]
                : [...np(0, n - 1).map(() => -1 / 0), u];
            return e > r ? ng(l) : l;
          }
          if (o === u) return nM(o, n, i);
          var { step: c, tickMin: s, tickMax: f } = nj(o, u, a, i, 0),
            h = nx(s, f.add(new (nu())(0.1).mul(c)), c);
          return e > r ? ng(h) : h;
        }),
        n_ = nm(function (t, e) {
          var [r, n] = t,
            i =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            [a, o] = nw([r, n]);
          if (a === -1 / 0 || o === 1 / 0) return [r, n];
          if (a === o) return [a];
          var u = Math.max(e, 2),
            l = nO(new (nu())(o).sub(a).div(u - 1), i, 0),
            c = [...nx(new (nu())(a), new (nu())(o), l), o];
          return (
            !1 === i && (c = c.map((t) => Math.round(t))), r > n ? ng(c) : c
          );
        }),
        nP = r(2589),
        nA = r(96908),
        nE = r(56124),
        nT = r(20972),
        nC = r(18478),
        nk = r(47062),
        nD = r(66038),
        nN = r(12287),
        nI = r(18190),
        nz = r(84421);
      function n$(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function nL(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? n$(Object(r), !0).forEach(function (e) {
                var n, i, a;
                (n = t),
                  (i = e),
                  (a = r[e]),
                  (i = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : n$(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var nU = [0, "auto"],
        nR = {
          allowDataOverflow: !1,
          allowDecimals: !0,
          allowDuplicatedCategory: !0,
          angle: 0,
          dataKey: void 0,
          domain: void 0,
          height: 30,
          hide: !0,
          id: 0,
          includeHidden: !1,
          interval: "preserveEnd",
          minTickGap: 5,
          mirror: !1,
          name: void 0,
          orientation: "bottom",
          padding: { left: 0, right: 0 },
          reversed: !1,
          scale: "auto",
          tick: !0,
          tickCount: 5,
          tickFormatter: void 0,
          ticks: void 0,
          type: "category",
          unit: void 0,
        },
        nF = (t, e) => {
          var r = t.cartesianAxis.xAxis[e];
          return null == r ? nR : r;
        },
        nH = {
          allowDataOverflow: !1,
          allowDecimals: !0,
          allowDuplicatedCategory: !0,
          angle: 0,
          dataKey: void 0,
          domain: nU,
          hide: !0,
          id: 0,
          includeHidden: !1,
          interval: "preserveEnd",
          minTickGap: 5,
          mirror: !1,
          name: void 0,
          orientation: "left",
          padding: { top: 0, bottom: 0 },
          reversed: !1,
          scale: "auto",
          tick: !0,
          tickCount: 5,
          tickFormatter: void 0,
          ticks: void 0,
          type: "number",
          unit: void 0,
          width: nz.tQ,
        },
        nB = (t, e) => {
          var r = t.cartesianAxis.yAxis[e];
          return null == r ? nH : r;
        },
        nK = {
          domain: [0, "auto"],
          includeHidden: !1,
          reversed: !1,
          allowDataOverflow: !1,
          allowDuplicatedCategory: !1,
          dataKey: void 0,
          id: 0,
          name: "",
          range: [64, 64],
          scale: "auto",
          type: "number",
          unit: "",
        },
        nZ = (t, e) => {
          var r = t.cartesianAxis.zAxis[e];
          return null == r ? nK : r;
        },
        nq = (t, e, r) => {
          switch (e) {
            case "xAxis":
              return nF(t, r);
            case "yAxis":
              return nB(t, r);
            case "zAxis":
              return nZ(t, r);
            case "angleAxis":
              return (0, nk.Be)(t, r);
            case "radiusAxis":
              return (0, nk.Gl)(t, r);
            default:
              throw Error("Unexpected axis type: ".concat(e));
          }
        },
        nW = (t, e, r) => {
          switch (e) {
            case "xAxis":
              return nF(t, r);
            case "yAxis":
              return nB(t, r);
            case "angleAxis":
              return (0, nk.Be)(t, r);
            case "radiusAxis":
              return (0, nk.Gl)(t, r);
            default:
              throw Error("Unexpected axis type: ".concat(e));
          }
        },
        nG = (t) => t.graphicalItems.countOfBars > 0;
      function nY(t, e) {
        return (r) => {
          switch (t) {
            case "xAxis":
              return "xAxisId" in r && r.xAxisId === e;
            case "yAxis":
              return "yAxisId" in r && r.yAxisId === e;
            case "zAxis":
              return "zAxisId" in r && r.zAxisId === e;
            case "angleAxis":
              return "angleAxisId" in r && r.angleAxisId === e;
            case "radiusAxis":
              return "radiusAxisId" in r && r.radiusAxisId === e;
            default:
              return !1;
          }
        };
      }
      var nV = (t) => t.graphicalItems.cartesianItems,
        nX = (0, f.Mz)([nD.N, nN.E], nY),
        nJ = (t, e, r) =>
          t
            .filter(r)
            .filter(
              (t) => (null == e ? void 0 : e.includeHidden) === !0 || !t.hide
            ),
        nQ = (0, f.Mz)([nV, nq, nX], nJ),
        n0 = (t) => t.filter((t) => void 0 === t.stackId),
        n1 = (0, f.Mz)([nQ], n0),
        n2 = (t) =>
          t
            .map((t) => t.data)
            .filter(Boolean)
            .flat(1),
        n4 = (0, f.Mz)([nQ], n2),
        n5 = (t, e) => {
          var { chartData: r = [], dataStartIndex: n, dataEndIndex: i } = e;
          return t.length > 0 ? t : r.slice(n, i + 1);
        },
        n3 = (0, f.Mz)([n4, ne.HS], n5),
        n6 = (t, e, r) =>
          (null == e ? void 0 : e.dataKey) != null
            ? t.map((t) => ({ value: (0, nt.kr)(t, e.dataKey) }))
            : r.length > 0
            ? r
                .map((t) => t.dataKey)
                .flatMap((e) => t.map((t) => ({ value: (0, nt.kr)(t, e) })))
            : t.map((t) => ({ value: t })),
        n7 = (0, f.Mz)([n3, nq, nQ], n6);
      function n8(t, e) {
        switch (t) {
          case "xAxis":
            return "x" === e.direction;
          case "yAxis":
            return "y" === e.direction;
          default:
            return !1;
        }
      }
      function n9(t) {
        return t
          .filter((t) => (0, nr.vh)(t) || t instanceof Date)
          .map(Number)
          .filter((t) => !1 === (0, nr.M8)(t));
      }
      var it = (t, e, r) =>
          Object.fromEntries(
            Object.entries(
              e.reduce(
                (t, e) => (
                  null == e.stackId ||
                    (null == t[e.stackId] && (t[e.stackId] = []),
                    t[e.stackId].push(e)),
                  t
                ),
                {}
              )
            ).map((e) => {
              var [n, i] = e,
                a = i.map((t) => t.dataKey);
              return [
                n,
                { stackedData: (0, nt.yy)(t, a, r), graphicalItems: i },
              ];
            })
          ),
        ie = (0, f.Mz)([n3, nQ, nC.eC], it),
        ir = (t, e, r) => {
          var { dataStartIndex: n, dataEndIndex: i } = e;
          if ("zAxis" !== r) {
            var a = (0, nt.Mk)(t, n, i);
            if (null == a || 0 !== a[0] || 0 !== a[1]) return a;
          }
        },
        ii = (0, f.Mz)([ie, ne.LF, nD.N], ir),
        ia = (t, e, r, n) =>
          r.length > 0
            ? t
                .flatMap((t) =>
                  r.flatMap((r) => {
                    var i,
                      a,
                      o =
                        null == (i = r.errorBars)
                          ? void 0
                          : i.filter((t) => n8(n, t)),
                      u = (0, nt.kr)(
                        t,
                        null != (a = e.dataKey) ? a : r.dataKey
                      );
                    return {
                      value: u,
                      errorDomain: (function (t, e, r) {
                        return !r ||
                          "number" != typeof e ||
                          (0, nr.M8)(e) ||
                          !r.length
                          ? []
                          : n9(
                              r.flatMap((r) => {
                                var n,
                                  i,
                                  a = (0, nt.kr)(t, r.dataKey);
                                if (
                                  (Array.isArray(a)
                                    ? ([n, i] = a)
                                    : (n = i = a),
                                  (0, nn.H)(n) && (0, nn.H)(i))
                                )
                                  return [e - n, e + i];
                              })
                            );
                      })(t, u, o),
                    };
                  })
                )
                .filter(Boolean)
            : (null == e ? void 0 : e.dataKey) != null
            ? t.map((t) => ({
                value: (0, nt.kr)(t, e.dataKey),
                errorDomain: [],
              }))
            : t.map((t) => ({ value: t, errorDomain: [] })),
        io = (0, f.Mz)(n3, nq, n1, nD.N, ia);
      function iu(t) {
        var { value: e } = t;
        if ((0, nr.vh)(e) || e instanceof Date) return e;
      }
      var il = (t) => {
          var e = n9(t.flatMap((t) => [t.value, t.errorDomain]).flat(1));
          if (0 !== e.length) return [Math.min(...e), Math.max(...e)];
        },
        ic = (t, e, r) => {
          var n = t.map(iu).filter((t) => null != t);
          return r &&
            (null == e.dataKey || (e.allowDuplicatedCategory && (0, nr.CG)(n)))
            ? d()(0, t.length)
            : e.allowDuplicatedCategory
            ? n
            : Array.from(new Set(n));
        },
        is = (t) => {
          var e;
          if (null == t || !("domain" in t)) return nU;
          if (null != t.domain) return t.domain;
          if (null != t.ticks) {
            if ("number" === t.type) {
              var r = n9(t.ticks);
              return [Math.min(...r), Math.max(...r)];
            }
            if ("category" === t.type) return t.ticks.map(String);
          }
          return null != (e = null == t ? void 0 : t.domain) ? e : nU;
        },
        ih = function () {
          for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          var n = e.filter(Boolean);
          if (0 !== n.length) {
            var i = n.flat();
            return [Math.min(...i), Math.max(...i)];
          }
        },
        id = (t) => t.referenceElements.dots,
        ip = (t, e, r) =>
          t
            .filter((t) => "extendDomain" === t.ifOverflow)
            .filter((t) => ("xAxis" === e ? t.xAxisId === r : t.yAxisId === r)),
        iy = (0, f.Mz)([id, nD.N, nN.E], ip),
        iv = (t) => t.referenceElements.areas,
        ig = (0, f.Mz)([iv, nD.N, nN.E], ip),
        im = (t) => t.referenceElements.lines,
        ib = (0, f.Mz)([im, nD.N, nN.E], ip),
        ix = (t, e) => {
          var r = n9(t.map((t) => ("xAxis" === e ? t.x : t.y)));
          if (0 !== r.length) return [Math.min(...r), Math.max(...r)];
        },
        iw = (0, f.Mz)(iy, nD.N, ix),
        iO = (t, e) => {
          var r = n9(
            t.flatMap((t) => [
              "xAxis" === e ? t.x1 : t.y1,
              "xAxis" === e ? t.x2 : t.y2,
            ])
          );
          if (0 !== r.length) return [Math.min(...r), Math.max(...r)];
        },
        iM = (0, f.Mz)([ig, nD.N], iO),
        ij = (t, e) => {
          var r = n9(t.map((t) => ("xAxis" === e ? t.x : t.y)));
          if (0 !== r.length) return [Math.min(...r), Math.max(...r)];
        },
        iS = (0, f.Mz)(ib, nD.N, ij),
        i_ = (0, f.Mz)(iw, iS, iM, (t, e, r) => ih(t, r, e)),
        iP = (0, f.Mz)([nq], is),
        iA = (t, e, r, n, i) => {
          var a = (function (t, e) {
            if (
              e &&
              "function" != typeof t &&
              Array.isArray(t) &&
              2 === t.length
            ) {
              var r,
                n,
                [i, a] = t;
              if ((0, nn.H)(i)) r = i;
              else if ("function" == typeof i) return;
              if ((0, nn.H)(a)) n = a;
              else if ("function" == typeof a) return;
              var o = [r, n];
              if (ni(o)) return o;
            }
          })(e, t.allowDataOverflow);
          return null != a
            ? a
            : (function (t, e, r) {
                if (r || null != e) {
                  if ("function" == typeof t && null != e)
                    try {
                      var n = t(e, r);
                      if (ni(n)) return na(n, e, r);
                    } catch (t) {}
                  if (Array.isArray(t) && 2 === t.length) {
                    var i,
                      a,
                      [o, u] = t;
                    if ("auto" === o) null != e && (i = Math.min(...e));
                    else if ((0, nr.Et)(o)) i = o;
                    else if ("function" == typeof o)
                      try {
                        null != e && (i = o(null == e ? void 0 : e[0]));
                      } catch (t) {}
                    else if ("string" == typeof o && nt.IH.test(o)) {
                      var l = nt.IH.exec(o);
                      if (null == l || null == e) i = void 0;
                      else {
                        var c = +l[1];
                        i = e[0] - c;
                      }
                    } else i = null == e ? void 0 : e[0];
                    if ("auto" === u) null != e && (a = Math.max(...e));
                    else if ((0, nr.Et)(u)) a = u;
                    else if ("function" == typeof u)
                      try {
                        null != e && (a = u(null == e ? void 0 : e[1]));
                      } catch (t) {}
                    else if ("string" == typeof u && nt.qx.test(u)) {
                      var s = nt.qx.exec(u);
                      if (null == s || null == e) a = void 0;
                      else {
                        var f = +s[1];
                        a = e[1] + f;
                      }
                    } else a = null == e ? void 0 : e[1];
                    var h = [i, a];
                    if (ni(h)) return null == e ? h : na(h, e, r);
                  }
                }
              })(e, ih(r, i, il(n)), t.allowDataOverflow);
        },
        iE = (0, f.Mz)([nq, iP, ii, io, i_], iA),
        iT = [0, 1],
        iC = (t, e, r, n, i, a, o) => {
          if (null != t && null != r && 0 !== r.length) {
            var { dataKey: u, type: l } = t,
              c = (0, nt._L)(e, a);
            return c && null == u
              ? d()(0, r.length)
              : "category" === l
              ? ic(n, t, c)
              : "expand" === i
              ? iT
              : o;
          }
        },
        ik = (0, f.Mz)([nq, r9.fz, n3, n7, nC.eC, nD.N, iE], iC),
        iD = (t, e, r, n, i) => {
          if (null != t) {
            var { scale: a, type: o } = t;
            if ("auto" === a)
              return "radial" === e && "radiusAxis" === i
                ? "band"
                : "radial" === e && "angleAxis" === i
                ? "linear"
                : "category" === o &&
                  n &&
                  (n.indexOf("LineChart") >= 0 ||
                    n.indexOf("AreaChart") >= 0 ||
                    (n.indexOf("ComposedChart") >= 0 && !r))
                ? "point"
                : "category" === o
                ? "band"
                : "linear";
            if ("string" == typeof a) {
              var u = "scale".concat((0, nr.Zb)(a));
              return u in s ? u : "point";
            }
          }
        },
        iN = (0, f.Mz)([nq, r9.fz, nG, nC.iO, nD.N], iD);
      function iI(t, e, r, n) {
        if (null != r && null != n) {
          if ("function" == typeof t.scale)
            return t.scale.copy().domain(r).range(n);
          var i = (function (t) {
            if (null != t) {
              if (t in s) return s[t]();
              var e = "scale".concat((0, nr.Zb)(t));
              if (e in s) return s[e]();
            }
          })(e);
          if (null != i) {
            var a = i.domain(r).range(n);
            return (0, nt.YB)(a), a;
          }
        }
      }
      var iz = (t, e, r) => {
          var n = is(e);
          if ("auto" === r || "linear" === r) {
            if (
              null != e &&
              e.tickCount &&
              Array.isArray(n) &&
              ("auto" === n[0] || "auto" === n[1]) &&
              ni(t)
            )
              return nS(t, e.tickCount, e.allowDecimals);
            if (null != e && e.tickCount && "number" === e.type && ni(t))
              return n_(t, e.tickCount, e.allowDecimals);
          }
        },
        i$ = (0, f.Mz)([ik, nW, iN], iz),
        iL = (t, e, r, n) =>
          "angleAxis" !== n &&
          (null == t ? void 0 : t.type) === "number" &&
          ni(e) &&
          Array.isArray(r) &&
          r.length > 0
            ? [Math.min(e[0], r[0]), Math.max(e[1], r[r.length - 1])]
            : e,
        iU = (0, f.Mz)([nq, ik, i$, nD.N], iL),
        iR = (0, f.Mz)(n7, nq, (t, e) => {
          if (e && "number" === e.type) {
            var r = 1 / 0,
              n = Array.from(n9(t.map((t) => t.value))).sort((t, e) => t - e);
            if (n.length < 2) return 1 / 0;
            var i = n[n.length - 1] - n[0];
            if (0 === i) return 1 / 0;
            for (var a = 0; a < n.length - 1; a++)
              r = Math.min(r, n[a + 1] - n[a]);
            return r / i;
          }
        }),
        iF = (0, f.Mz)(
          iR,
          r9.fz,
          nC.gY,
          nE.HZ,
          (t, e, r, n) => n,
          (t, e, r, n, i) => {
            if (!(0, nn.H)(t)) return 0;
            var a = "vertical" === e ? n.height : n.width;
            if ("gap" === i) return (t * a) / 2;
            if ("no-gap" === i) {
              var o = (0, nr.F4)(r, t * a),
                u = (t * a) / 2;
              return u - o - ((u - o) / a) * o;
            }
            return 0;
          }
        ),
        iH = (0, f.Mz)(
          nF,
          (t, e) => {
            var r = nF(t, e);
            return null == r || "string" != typeof r.padding
              ? 0
              : iF(t, "xAxis", e, r.padding);
          },
          (t, e) => {
            if (null == t) return { left: 0, right: 0 };
            var r,
              n,
              { padding: i } = t;
            return "string" == typeof i
              ? { left: e, right: e }
              : {
                  left: (null != (r = i.left) ? r : 0) + e,
                  right: (null != (n = i.right) ? n : 0) + e,
                };
          }
        ),
        iB = (0, f.Mz)(
          nB,
          (t, e) => {
            var r = nB(t, e);
            return null == r || "string" != typeof r.padding
              ? 0
              : iF(t, "yAxis", e, r.padding);
          },
          (t, e) => {
            if (null == t) return { top: 0, bottom: 0 };
            var r,
              n,
              { padding: i } = t;
            return "string" == typeof i
              ? { top: e, bottom: e }
              : {
                  top: (null != (r = i.top) ? r : 0) + e,
                  bottom: (null != (n = i.bottom) ? n : 0) + e,
                };
          }
        ),
        iK = (0, f.Mz)(
          [nE.HZ, iH, nT.U, nT.C, (t, e, r) => r],
          (t, e, r, n, i) => {
            var { padding: a } = n;
            return i
              ? [a.left, r.width - a.right]
              : [t.left + e.left, t.left + t.width - e.right];
          }
        ),
        iZ = (0, f.Mz)(
          [nE.HZ, r9.fz, iB, nT.U, nT.C, (t, e, r) => r],
          (t, e, r, n, i, a) => {
            var { padding: o } = i;
            return a
              ? [n.height - o.bottom, o.top]
              : "horizontal" === e
              ? [t.top + t.height - r.bottom, t.top + r.top]
              : [t.top + r.top, t.top + t.height - r.bottom];
          }
        ),
        iq = (t, e, r, n) => {
          var i;
          switch (e) {
            case "xAxis":
              return iK(t, r, n);
            case "yAxis":
              return iZ(t, r, n);
            case "zAxis":
              return null == (i = nZ(t, r)) ? void 0 : i.range;
            case "angleAxis":
              return (0, nk.Cv)(t);
            case "radiusAxis":
              return (0, nk.Dc)(t, r);
            default:
              return;
          }
        },
        iW = (0, f.Mz)([nq, iq], nI.I),
        iG = (0, f.Mz)([nq, iN, iU, iW], iI);
      function iY(t, e) {
        return t.id < e.id ? -1 : +(t.id > e.id);
      }
      (0, f.Mz)(nQ, nD.N, (t, e) =>
        t
          .flatMap((t) => {
            var e;
            return null != (e = t.errorBars) ? e : [];
          })
          .filter((t) => n8(e, t))
      );
      var iV = (t, e) => e,
        iX = (t, e, r) => r,
        iJ = (0, f.Mz)(nA.h, iV, iX, (t, e, r) =>
          t
            .filter((t) => t.orientation === e)
            .filter((t) => t.mirror === r)
            .sort(iY)
        ),
        iQ = (0, f.Mz)(nA.W, iV, iX, (t, e, r) =>
          t
            .filter((t) => t.orientation === e)
            .filter((t) => t.mirror === r)
            .sort(iY)
        ),
        i0 = (t, e) => ({ width: t.width, height: e.height }),
        i1 = (t, e) => ({
          width: "number" == typeof e.width ? e.width : nz.tQ,
          height: t.height,
        }),
        i2 = (0, f.Mz)(nE.HZ, nF, i0),
        i4 = (t, e, r) => {
          switch (e) {
            case "top":
              return t.top;
            case "bottom":
              return r - t.bottom;
            default:
              return 0;
          }
        },
        i5 = (t, e, r) => {
          switch (e) {
            case "left":
              return t.left;
            case "right":
              return r - t.right;
            default:
              return 0;
          }
        },
        i3 = (0, f.Mz)(nP.A$, nE.HZ, iJ, iV, iX, (t, e, r, n, i) => {
          var a,
            o = {};
          return (
            r.forEach((r) => {
              var u = i0(e, r);
              null == a && (a = i4(e, n, t));
              var l = ("top" === n && !i) || ("bottom" === n && i);
              (o[r.id] = a - Number(l) * u.height),
                (a += (l ? -1 : 1) * u.height);
            }),
            o
          );
        }),
        i6 = (0, f.Mz)(nP.Lp, nE.HZ, iQ, iV, iX, (t, e, r, n, i) => {
          var a,
            o = {};
          return (
            r.forEach((r) => {
              var u = i1(e, r);
              null == a && (a = i5(e, n, t));
              var l = ("left" === n && !i) || ("right" === n && i);
              (o[r.id] = a - Number(l) * u.width),
                (a += (l ? -1 : 1) * u.width);
            }),
            o
          );
        }),
        i7 = (t, e) => {
          var r = (0, nE.HZ)(t),
            n = nF(t, e);
          if (null != n) {
            var i = i3(t, n.orientation, n.mirror)[e];
            return null == i ? { x: r.left, y: 0 } : { x: r.left, y: i };
          }
        },
        i8 = (t, e) => {
          var r = (0, nE.HZ)(t),
            n = nB(t, e);
          if (null != n) {
            var i = i6(t, n.orientation, n.mirror)[e];
            return null == i ? { x: 0, y: r.top } : { x: i, y: r.top };
          }
        },
        i9 = (0, f.Mz)(nE.HZ, nB, (t, e) => ({
          width: "number" == typeof e.width ? e.width : nz.tQ,
          height: t.height,
        })),
        at = (t, e, r, n) => {
          if (null != r) {
            var { allowDuplicatedCategory: i, type: a, dataKey: o } = r,
              u = (0, nt._L)(t, n),
              l = e.map((t) => t.value);
            if (o && u && "category" === a && i && (0, nr.CG)(l)) return l;
          }
        },
        ae = (0, f.Mz)([r9.fz, n7, nq, nD.N], at),
        ar = (t, e, r, n) => {
          if (null != r && null != r.dataKey) {
            var { type: i, scale: a } = r;
            if ((0, nt._L)(t, n) && ("number" === i || "auto" !== a))
              return e.map((t) => t.value);
          }
        },
        an = (0, f.Mz)([r9.fz, n7, nW, nD.N], ar),
        ai = (0, f.Mz)(
          [
            r9.fz,
            (t, e, r) => {
              switch (e) {
                case "xAxis":
                  return nF(t, r);
                case "yAxis":
                  return nB(t, r);
                default:
                  throw Error("Unexpected axis type: ".concat(e));
              }
            },
            iN,
            iG,
            ae,
            an,
            iq,
            i$,
            nD.N,
          ],
          (t, e, r, n, i, a, o, u, l) => {
            if (null == e) return null;
            var c = (0, nt._L)(t, l);
            return {
              angle: e.angle,
              interval: e.interval,
              minTickGap: e.minTickGap,
              orientation: e.orientation,
              tick: e.tick,
              tickCount: e.tickCount,
              tickFormatter: e.tickFormatter,
              ticks: e.ticks,
              type: e.type,
              unit: e.unit,
              axisType: l,
              categoricalDomain: a,
              duplicateDomain: i,
              isCategorical: c,
              niceTicks: u,
              range: o,
              realScaleType: r,
              scale: n,
            };
          }
        ),
        aa = (0, f.Mz)(
          [r9.fz, nW, iN, iG, i$, iq, ae, an, nD.N],
          (t, e, r, n, i, a, o, u, l) => {
            if (null != e && null != n) {
              var c = (0, nt._L)(t, l),
                { type: s, ticks: f, tickCount: h } = e,
                d =
                  "scaleBand" === r && "function" == typeof n.bandwidth
                    ? n.bandwidth() / 2
                    : 2,
                p = "category" === s && n.bandwidth ? n.bandwidth() / d : 0;
              p =
                "angleAxis" === l && null != a && a.length >= 2
                  ? 2 * (0, nr.sA)(a[0] - a[1]) * p
                  : p;
              var y = f || i;
              return y
                ? y
                    .map((t, e) => ({
                      index: e,
                      coordinate: n(o ? o.indexOf(t) : t) + p,
                      value: t,
                      offset: p,
                    }))
                    .filter((t) => !(0, nr.M8)(t.coordinate))
                : c && u
                ? u.map((t, e) => ({
                    coordinate: n(t) + p,
                    value: t,
                    index: e,
                    offset: p,
                  }))
                : n.ticks
                ? n
                    .ticks(h)
                    .map((t) => ({ coordinate: n(t) + p, value: t, offset: p }))
                : n
                    .domain()
                    .map((t, e) => ({
                      coordinate: n(t) + p,
                      value: o ? o[t] : t,
                      index: e,
                      offset: p,
                    }));
            }
          }
        ),
        ao = (0, f.Mz)(
          [r9.fz, nW, iG, iq, ae, an, nD.N],
          (t, e, r, n, i, a, o) => {
            if (null != e && null != r && null != n && n[0] !== n[1]) {
              var u = (0, nt._L)(t, o),
                { tickCount: l } = e,
                c = 0;
              return ((c =
                "angleAxis" === o && (null == n ? void 0 : n.length) >= 2
                  ? 2 * (0, nr.sA)(n[0] - n[1]) * c
                  : c),
              u && a)
                ? a.map((t, e) => ({
                    coordinate: r(t) + c,
                    value: t,
                    index: e,
                    offset: c,
                  }))
                : r.ticks
                ? r
                    .ticks(l)
                    .map((t) => ({ coordinate: r(t) + c, value: t, offset: c }))
                : r
                    .domain()
                    .map((t, e) => ({
                      coordinate: r(t) + c,
                      value: i ? i[t] : t,
                      index: e,
                      offset: c,
                    }));
            }
          }
        ),
        au = (0, f.Mz)(nq, iG, (t, e) => {
          if (null != t && null != e) return nL(nL({}, t), {}, { scale: e });
        }),
        al = (0, f.Mz)([nq, iN, ik, iW], iI);
      (0, f.Mz)(
        (t, e, r) => nZ(t, r),
        al,
        (t, e) => {
          if (null != t && null != e) return nL(nL({}, t), {}, { scale: e });
        }
      );
      var ac = (0, f.Mz)([r9.fz, nA.h, nA.W], (t, e, r) => {
        switch (t) {
          case "horizontal":
            return e.some((t) => t.reversed)
              ? "right-to-left"
              : "left-to-right";
          case "vertical":
            return r.some((t) => t.reversed)
              ? "bottom-to-top"
              : "top-to-bottom";
          case "centric":
          case "radial":
            return "left-to-right";
          default:
            return;
        }
      });
    },
    14545: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.isDeepKey = function (t) {
          switch (typeof t) {
            case "number":
            case "symbol":
              return !1;
            case "string":
              return t.includes(".") || t.includes("[") || t.includes("]");
          }
        });
    },
    14804: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(98132),
        i = r(12429);
      e.matches = function (t) {
        return (t = i.cloneDeep(t)), (e) => n.isMatch(e, t);
      };
    },
    15064: (t, e, r) => {
      "use strict";
      r.d(e, { E: () => n });
      var n = (0, r(12115).createContext)(null);
    },
    15160: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.getTag = function (t) {
          return null == t
            ? void 0 === t
              ? "[object Undefined]"
              : "[object Null]"
            : Object.prototype.toString.call(t);
        });
    },
    15679: (t, e, r) => {
      "use strict";
      r.d(e, { M: () => a, t: () => i });
      var n = r(12115),
        i = (0, n.createContext)(null),
        a = () => (0, n.useContext)(i);
    },
    16377: (t, e, r) => {
      "use strict";
      r.d(e, {
        CG: () => d,
        Dj: () => p,
        Et: () => l,
        F4: () => h,
        M8: () => o,
        NF: () => f,
        Zb: () => g,
        _3: () => u,
        eP: () => y,
        sA: () => a,
        uy: () => v,
        vh: () => c,
      });
      var n = r(95672),
        i = r.n(n),
        a = (t) => (0 === t ? 0 : t > 0 ? 1 : -1),
        o = (t) => "number" == typeof t && t != +t,
        u = (t) => "string" == typeof t && t.indexOf("%") === t.length - 1,
        l = (t) => ("number" == typeof t || t instanceof Number) && !o(t),
        c = (t) => l(t) || "string" == typeof t,
        s = 0,
        f = (t) => {
          var e = ++s;
          return "".concat(t || "").concat(e);
        },
        h = function (t, e) {
          var r,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!l(t) && "string" != typeof t) return n;
          if (u(t)) {
            if (null == e) return n;
            var a = t.indexOf("%");
            r = (e * parseFloat(t.slice(0, a))) / 100;
          } else r = +t;
          return o(r) && (r = n), i && null != e && r > e && (r = e), r;
        },
        d = (t) => {
          if (!Array.isArray(t)) return !1;
          for (var e = t.length, r = {}, n = 0; n < e; n++)
            if (r[t[n]]) return !0;
            else r[t[n]] = !0;
          return !1;
        },
        p = (t, e) => (l(t) && l(e) ? (r) => t + r * (e - t) : () => e);
      function y(t, e, r) {
        if (t && t.length)
          return t.find(
            (t) => t && ("function" == typeof e ? e(t) : i()(t, e)) === r
          );
      }
      var v = (t) => null == t,
        g = (t) =>
          v(t) ? t : "".concat(t.charAt(0).toUpperCase()).concat(t.slice(1));
    },
    18190: (t, e, r) => {
      "use strict";
      r.d(e, { I: () => n });
      var n = (t, e) => {
        if (t && e) return null != t && t.reversed ? [e[1], e[0]] : e;
      };
    },
    18478: (t, e, r) => {
      "use strict";
      r.d(e, {
        eC: () => i,
        gY: () => n,
        hX: () => u,
        iO: () => a,
        lZ: () => o,
        pH: () => l,
      });
      var n = (t) => t.rootProps.barCategoryGap,
        i = (t) => t.rootProps.stackOffset,
        a = (t) => t.options.chartName,
        o = (t) => t.rootProps.syncId,
        u = (t) => t.rootProps.syncMethod,
        l = (t) => t.options.eventEmitter;
    },
    19452: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.isLength = function (t) {
          return Number.isSafeInteger(t) && t >= 0;
        });
    },
    20215: (t, e, r) => {
      "use strict";
      r.d(e, {
        BZ: () => ta,
        eE: () => tc,
        Xb: () => to,
        JG: () => th,
        A2: () => ti,
        yn: () => ts,
        Dn: () => j,
        gL: () => Y,
        fl: () => V,
        R4: () => Q,
        Re: () => O,
        n4: () => T,
      });
      var n = r(68924),
        i = r(14299),
        a = r(97238),
        o = r(39827),
        u = r(60356),
        l = r(18478),
        c = r(16377),
        s = r(18190),
        f = r(96523),
        h = r(60530),
        d = r(11928),
        p = r(60841),
        y = r(64968),
        v = r(2589),
        g = r(56124),
        m = r(85146),
        b = r(46670),
        x = r(75714),
        w = r(94013),
        O = (t) => {
          var e = (0, a.fz)(t);
          return "horizontal" === e
            ? "xAxis"
            : "vertical" === e
            ? "yAxis"
            : "centric" === e
            ? "angleAxis"
            : "radiusAxis";
        },
        M = (t) => t.tooltip.settings.axisId,
        j = (t) => {
          var e = O(t),
            r = M(t);
          return (0, i.Hd)(t, e, r);
        },
        S = (0, n.Mz)([j, a.fz, i.um, l.iO, O], i.sr),
        _ = (0, n.Mz)(
          [
            (t) => t.graphicalItems.cartesianItems,
            (t) => t.graphicalItems.polarItems,
          ],
          (t, e) => [...t, ...e]
        ),
        P = (0, n.Mz)([O, M], i.eo),
        A = (0, n.Mz)([_, j, P], i.ec),
        E = (0, n.Mz)([A], i.rj),
        T = (0, n.Mz)([E, u.LF], i.Nk),
        C = (0, n.Mz)([T, j, A], i.fb),
        k = (0, n.Mz)([j], i.S5),
        D = (0, n.Mz)([T, A, l.eC], i.MK),
        N = (0, n.Mz)([D, u.LF, O], i.pM),
        I = (0, n.Mz)([A], i.IO),
        z = (0, n.Mz)([T, j, I, O], i.kz),
        $ = (0, n.Mz)([i.Kr, O, M], i.P9),
        L = (0, n.Mz)([$, O], i.Oz),
        U = (0, n.Mz)([i.gT, O, M], i.P9),
        R = (0, n.Mz)([U, O], i.q),
        F = (0, n.Mz)([i.$X, O, M], i.P9),
        H = (0, n.Mz)([F, O], i.bb),
        B = (0, n.Mz)([L, H, R], i.yi),
        K = (0, n.Mz)([j, k, N, z, B], i.wL),
        Z = (0, n.Mz)([j, a.fz, T, C, l.eC, O, K], i.tP),
        q = (0, n.Mz)([Z, j, S], i.xp),
        W = (0, n.Mz)([j, Z, q, O], i.g1),
        G = (t) => {
          var e = O(t),
            r = M(t);
          return (0, i.D5)(t, e, r, !1);
        },
        Y = (0, n.Mz)([j, G], s.I),
        V = (0, n.Mz)([j, S, W, Y], i.Qn),
        X = (0, n.Mz)([a.fz, C, j, O], i.tF),
        J = (0, n.Mz)([a.fz, C, j, O], i.iv),
        Q = (0, n.Mz)([a.fz, j, S, V, G, X, J, O], (t, e, r, n, i, a, u, l) => {
          if (e) {
            var { type: s } = e,
              f = (0, o._L)(t, l);
            if (n) {
              var h = "scaleBand" === r && n.bandwidth ? n.bandwidth() / 2 : 2,
                d = "category" === s && n.bandwidth ? n.bandwidth() / h : 0;
              return ((d =
                "angleAxis" === l &&
                null != i &&
                (null == i ? void 0 : i.length) >= 2
                  ? 2 * (0, c.sA)(i[0] - i[1]) * d
                  : d),
              f && u)
                ? u.map((t, e) => ({
                    coordinate: n(t) + d,
                    value: t,
                    index: e,
                    offset: d,
                  }))
                : n
                    .domain()
                    .map((t, e) => ({
                      coordinate: n(t) + d,
                      value: a ? a[t] : t,
                      index: e,
                      offset: d,
                    }));
            }
          }
        }),
        tt = (0, n.Mz)([f.xH, f.Hw, (t) => t.tooltip.settings], (t, e, r) =>
          (0, f.$g)(r.shared, t, e)
        ),
        te = (t) => t.tooltip.settings.trigger,
        tr = (t) => t.tooltip.settings.defaultIndex,
        tn = (0, n.Mz)([x.J, tt, te, tr], d.i),
        ti = (0, n.Mz)([tn, T], p.P),
        ta = (0, n.Mz)([Q, ti], h.E),
        to = (0, n.Mz)([tn], (t) => {
          if (t) return t.dataKey;
        }),
        tu = (0, n.Mz)([x.J, tt, te, tr], m.q),
        tl = (0, n.Mz)([v.Lp, v.A$, a.fz, g.HZ, Q, tr, tu, b.x], y.o),
        tc = (0, n.Mz)([tn, tl], (t, e) =>
          null != t && t.coordinate ? t.coordinate : e
        ),
        ts = (0, n.Mz)([tn], (t) => t.active),
        tf = (0, n.Mz)([tu, ti, u.LF, j, ta, b.x, tt], w.N),
        th = (0, n.Mz)([tf], (t) => {
          if (null != t)
            return Array.from(
              new Set(t.map((t) => t.payload).filter((t) => null != t))
            );
        });
    },
    20241: (t, e, r) => {
      t.exports = r(22434).sortBy;
    },
    20400: (t, e, r) => {
      t.exports = r(82962).throttle;
    },
    20972: (t, e, r) => {
      "use strict";
      r.d(e, { C: () => u, U: () => l });
      var n = r(68924),
        i = r(56124),
        a = r(2589),
        o = r(16377),
        u = (t) => t.brush,
        l = (0, n.Mz)([u, i.HZ, a.HK], (t, e, r) => ({
          height: t.height,
          x: (0, o.Et)(t.x) ? t.x : e.left,
          y: (0, o.Et)(t.y)
            ? t.y
            : e.top +
              e.height +
              e.brushBottom -
              ((null == r ? void 0 : r.bottom) || 0),
          width: (0, o.Et)(t.width) ? t.width : e.width,
        }));
    },
    22188: (t, e, r) => {
      t.exports = r(85252).isEqual;
    },
    22248: (t, e, r) => {
      "use strict";
      r.d(e, {
        As: () => f,
        TK: () => h,
        Vi: () => s,
        ZF: () => c,
        g5: () => l,
        iZ: () => d,
      });
      var n = r(5710),
        i = r(74532),
        a = (0, n.Z0)({
          name: "graphicalItems",
          initialState: { countOfBars: 0, cartesianItems: [], polarItems: [] },
          reducers: {
            addBar(t) {
              t.countOfBars += 1;
            },
            removeBar(t) {
              t.countOfBars -= 1;
            },
            addCartesianGraphicalItem(t, e) {
              t.cartesianItems.push((0, i.h4)(e.payload));
            },
            replaceCartesianGraphicalItem(t, e) {
              var { prev: r, next: n } = e.payload,
                a = (0, i.ss)(t).cartesianItems.indexOf((0, i.h4)(r));
              a > -1 && (t.cartesianItems[a] = (0, i.h4)(n));
            },
            removeCartesianGraphicalItem(t, e) {
              var r = (0, i.ss)(t).cartesianItems.indexOf((0, i.h4)(e.payload));
              r > -1 && t.cartesianItems.splice(r, 1);
            },
            addPolarGraphicalItem(t, e) {
              t.polarItems.push((0, i.h4)(e.payload));
            },
            removePolarGraphicalItem(t, e) {
              var r = (0, i.ss)(t).polarItems.indexOf((0, i.h4)(e.payload));
              r > -1 && t.polarItems.splice(r, 1);
            },
          },
        }),
        {
          addBar: o,
          removeBar: u,
          addCartesianGraphicalItem: l,
          replaceCartesianGraphicalItem: c,
          removeCartesianGraphicalItem: s,
          addPolarGraphicalItem: f,
          removePolarGraphicalItem: h,
        } = a.actions,
        d = a.reducer;
    },
    22434: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(47064),
        i = r(55998),
        a = r(64373);
      e.sortBy = function (t, ...e) {
        let r = e.length;
        return (
          r > 1 && a.isIterateeCall(t, e[0], e[1])
            ? (e = [])
            : r > 2 && a.isIterateeCall(e[0], e[1], e[2]) && (e = [e[0]]),
          n.orderBy(t, i.flatten(e), ["asc"])
        );
      };
    },
    22436: (t, e, r) => {
      "use strict";
      var n = r(12115),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        a = n.useState,
        o = n.useEffect,
        u = n.useLayoutEffect,
        l = n.useDebugValue;
      function c(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
          var r = e();
          return !i(t, r);
        } catch (t) {
          return !0;
        }
      }
      var s =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (t, e) {
              return e();
            }
          : function (t, e) {
              var r = e(),
                n = a({ inst: { value: r, getSnapshot: e } }),
                i = n[0].inst,
                s = n[1];
              return (
                u(
                  function () {
                    (i.value = r), (i.getSnapshot = e), c(i) && s({ inst: i });
                  },
                  [t, r, e]
                ),
                o(
                  function () {
                    return (
                      c(i) && s({ inst: i }),
                      t(function () {
                        c(i) && s({ inst: i });
                      })
                    );
                  },
                  [t]
                ),
                l(r),
                r
              );
            };
      e.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : s;
    },
    22520: (t, e, r) => {
      "use strict";
      var n = r(44134).Buffer;
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let i = r(1147),
        a = r(98221),
        o = r(15160),
        u = r(42721),
        l = r(83616);
      e.isEqualWith = function (t, e, r) {
        return (function t(e, r, c, s, f, h, d) {
          let p = d(e, r, c, s, f, h);
          if (void 0 !== p) return p;
          if (typeof e == typeof r)
            switch (typeof e) {
              case "bigint":
              case "string":
              case "boolean":
              case "symbol":
              case "undefined":
              case "function":
                return e === r;
              case "number":
                return e === r || Object.is(e, r);
            }
          return (function e(r, c, s, f) {
            if (Object.is(r, c)) return !0;
            let h = o.getTag(r),
              d = o.getTag(c);
            if (
              (h === u.argumentsTag && (h = u.objectTag),
              d === u.argumentsTag && (d = u.objectTag),
              h !== d)
            )
              return !1;
            switch (h) {
              case u.stringTag:
                return r.toString() === c.toString();
              case u.numberTag: {
                let t = r.valueOf(),
                  e = c.valueOf();
                return l.eq(t, e);
              }
              case u.booleanTag:
              case u.dateTag:
              case u.symbolTag:
                return Object.is(r.valueOf(), c.valueOf());
              case u.regexpTag:
                return r.source === c.source && r.flags === c.flags;
              case u.functionTag:
                return r === c;
            }
            let p = (s = s ?? new Map()).get(r),
              y = s.get(c);
            if (null != p && null != y) return p === c;
            s.set(r, c), s.set(c, r);
            try {
              switch (h) {
                case u.mapTag:
                  if (r.size !== c.size) return !1;
                  for (let [e, n] of r.entries())
                    if (!c.has(e) || !t(n, c.get(e), e, r, c, s, f)) return !1;
                  return !0;
                case u.setTag: {
                  if (r.size !== c.size) return !1;
                  let e = Array.from(r.values()),
                    n = Array.from(c.values());
                  for (let i = 0; i < e.length; i++) {
                    let a = e[i],
                      o = n.findIndex((e) => t(a, e, void 0, r, c, s, f));
                    if (-1 === o) return !1;
                    n.splice(o, 1);
                  }
                  return !0;
                }
                case u.arrayTag:
                case u.uint8ArrayTag:
                case u.uint8ClampedArrayTag:
                case u.uint16ArrayTag:
                case u.uint32ArrayTag:
                case u.bigUint64ArrayTag:
                case u.int8ArrayTag:
                case u.int16ArrayTag:
                case u.int32ArrayTag:
                case u.bigInt64ArrayTag:
                case u.float32ArrayTag:
                case u.float64ArrayTag:
                  if (
                    (void 0 !== n && n.isBuffer(r) !== n.isBuffer(c)) ||
                    r.length !== c.length
                  )
                    return !1;
                  for (let e = 0; e < r.length; e++)
                    if (!t(r[e], c[e], e, r, c, s, f)) return !1;
                  return !0;
                case u.arrayBufferTag:
                  if (r.byteLength !== c.byteLength) return !1;
                  return e(new Uint8Array(r), new Uint8Array(c), s, f);
                case u.dataViewTag:
                  if (
                    r.byteLength !== c.byteLength ||
                    r.byteOffset !== c.byteOffset
                  )
                    return !1;
                  return e(new Uint8Array(r), new Uint8Array(c), s, f);
                case u.errorTag:
                  return r.name === c.name && r.message === c.message;
                case u.objectTag: {
                  if (
                    !(
                      e(r.constructor, c.constructor, s, f) ||
                      (i.isPlainObject(r) && i.isPlainObject(c))
                    )
                  )
                    return !1;
                  let n = [...Object.keys(r), ...a.getSymbols(r)],
                    o = [...Object.keys(c), ...a.getSymbols(c)];
                  if (n.length !== o.length) return !1;
                  for (let e = 0; e < n.length; e++) {
                    let i = n[e],
                      a = r[i];
                    if (!Object.hasOwn(c, i)) return !1;
                    let o = c[i];
                    if (!t(a, o, i, r, c, s, f)) return !1;
                  }
                  return !0;
                }
                default:
                  return !1;
              }
            } finally {
              s.delete(r), s.delete(c);
            }
          })(e, r, h, d);
        })(t, e, void 0, void 0, void 0, void 0, r);
      };
    },
    23676: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.uniqBy = function (t, e) {
          let r = new Map();
          for (let n = 0; n < t.length; n++) {
            let i = t[n],
              a = e(i);
            r.has(a) || r.set(a, i);
          }
          return Array.from(r.values());
        });
    },
    24517: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(98132),
        i = r(46200),
        a = r(37298),
        o = r(10921),
        u = r(93205);
      e.matchesProperty = function (t, e) {
        switch (typeof t) {
          case "object":
            Object.is(t?.valueOf(), -0) && (t = "-0");
            break;
          case "number":
            t = i.toKey(t);
        }
        return (
          (e = a.cloneDeep(e)),
          function (r) {
            let i = o.get(r, t);
            return void 0 === i
              ? u.has(r, t)
              : void 0 === e
              ? void 0 === i
              : n.isMatch(i, e);
          }
        );
      };
    },
    25115: (t, e, r) => {
      "use strict";
      r.d(e, { $: () => i, X: () => a });
      var n = r(12115),
        i = (0, n.createContext)(null),
        a = () => (0, n.useContext)(i);
    },
    25641: (t, e, r) => {
      "use strict";
      function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? n(Object(r), !0).forEach(function (e) {
                var n, i, a;
                (n = t),
                  (i = e),
                  (a = r[e]),
                  (i = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : n(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      r.d(e, { IZ: () => u, Kg: () => a, lY: () => l, yy: () => d }), r(12115);
      var a = Math.PI / 180,
        o = (t) => (180 * t) / Math.PI,
        u = (t, e, r, n) => ({
          x: t + Math.cos(-a * n) * r,
          y: e + Math.sin(-a * n) * r,
        }),
        l = function (t, e) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: 0,
                  brushBottom: 0,
                };
          return (
            Math.min(
              Math.abs(t - (r.left || 0) - (r.right || 0)),
              Math.abs(e - (r.top || 0) - (r.bottom || 0))
            ) / 2
          );
        },
        c = (t, e) => {
          var { x: r, y: n } = t,
            { x: i, y: a } = e;
          return Math.sqrt((r - i) ** 2 + (n - a) ** 2);
        },
        s = (t, e) => {
          var { x: r, y: n } = t,
            { cx: i, cy: a } = e,
            u = c({ x: r, y: n }, { x: i, y: a });
          if (u <= 0) return { radius: u, angle: 0 };
          var l = Math.acos((r - i) / u);
          return (
            n > a && (l = 2 * Math.PI - l),
            { radius: u, angle: o(l), angleInRadian: l }
          );
        },
        f = (t) => {
          var { startAngle: e, endAngle: r } = t,
            n = Math.min(Math.floor(e / 360), Math.floor(r / 360));
          return { startAngle: e - 360 * n, endAngle: r - 360 * n };
        },
        h = (t, e) => {
          var { startAngle: r, endAngle: n } = e;
          return t + 360 * Math.min(Math.floor(r / 360), Math.floor(n / 360));
        },
        d = (t, e) => {
          var r,
            { x: n, y: a } = t,
            { radius: o, angle: u } = s({ x: n, y: a }, e),
            { innerRadius: l, outerRadius: c } = e;
          if (o < l || o > c || 0 === o) return null;
          var { startAngle: d, endAngle: p } = f(e),
            y = u;
          if (d <= p) {
            for (; y > p; ) y -= 360;
            for (; y < d; ) y += 360;
            r = y >= d && y <= p;
          } else {
            for (; y > d; ) y -= 360;
            for (; y < p; ) y += 360;
            r = y >= p && y <= d;
          }
          return r ? i(i({}, e), {}, { radius: o, angle: h(y, e) }) : null;
        };
    },
    27040: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.isUnsafeProperty = function (t) {
          return "__proto__" === t;
        });
    },
    27086: (t, e, r) => {
      "use strict";
      r.d(e, { m: () => to });
      var n = r(12115),
        i = r(47650),
        a = r(20241),
        o = r.n(a),
        u = r(52596),
        l = r(16377);
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (t[n] = r[n]));
              }
              return t;
            }).apply(null, arguments);
      }
      function s(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(r), !0).forEach(function (e) {
                var n, i, a;
                (n = t),
                  (i = e),
                  (a = r[e]),
                  (i = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function h(t) {
        return Array.isArray(t) && (0, l.vh)(t[0]) && (0, l.vh)(t[1])
          ? t.join(" ~ ")
          : t;
      }
      var d = (t) => {
          var {
              separator: e = " : ",
              contentStyle: r = {},
              itemStyle: i = {},
              labelStyle: a = {},
              payload: s,
              formatter: d,
              itemSorter: p,
              wrapperClassName: y,
              labelClassName: v,
              label: g,
              labelFormatter: m,
              accessibilityLayer: b = !1,
            } = t,
            x = f(
              {
                margin: 0,
                padding: 10,
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                whiteSpace: "nowrap",
              },
              r
            ),
            w = f({ margin: 0 }, a),
            O = !(0, l.uy)(g),
            M = O ? g : "",
            j = (0, u.$)("recharts-default-tooltip", y),
            S = (0, u.$)("recharts-tooltip-label", v);
          return (
            O && m && null != s && (M = m(g, s)),
            n.createElement(
              "div",
              c(
                { className: j, style: x },
                b ? { role: "status", "aria-live": "assertive" } : {}
              ),
              n.createElement(
                "p",
                { className: S, style: w },
                n.isValidElement(M) ? M : "".concat(M)
              ),
              (() => {
                if (s && s.length) {
                  var t = (p ? o()(s, p) : s).map((t, r) => {
                    if ("none" === t.type) return null;
                    var a = t.formatter || d || h,
                      { value: o, name: u } = t,
                      c = o,
                      p = u;
                    if (a) {
                      var y = a(o, u, t, r, s);
                      if (Array.isArray(y)) [c, p] = y;
                      else {
                        if (null == y) return null;
                        c = y;
                      }
                    }
                    var v = f(
                      {
                        display: "block",
                        paddingTop: 4,
                        paddingBottom: 4,
                        color: t.color || "#000",
                      },
                      i
                    );
                    return n.createElement(
                      "li",
                      {
                        className: "recharts-tooltip-item",
                        key: "tooltip-item-".concat(r),
                        style: v,
                      },
                      (0, l.vh)(p)
                        ? n.createElement(
                            "span",
                            { className: "recharts-tooltip-item-name" },
                            p
                          )
                        : null,
                      (0, l.vh)(p)
                        ? n.createElement(
                            "span",
                            { className: "recharts-tooltip-item-separator" },
                            e
                          )
                        : null,
                      n.createElement(
                        "span",
                        { className: "recharts-tooltip-item-value" },
                        c
                      ),
                      n.createElement(
                        "span",
                        { className: "recharts-tooltip-item-unit" },
                        t.unit || ""
                      )
                    );
                  });
                  return n.createElement(
                    "ul",
                    {
                      className: "recharts-tooltip-item-list",
                      style: { padding: 0, margin: 0 },
                    },
                    t
                  );
                }
                return null;
              })()
            )
          );
        },
        p = "recharts-tooltip-wrapper",
        y = { visibility: "hidden" };
      function v(t) {
        var {
          allowEscapeViewBox: e,
          coordinate: r,
          key: n,
          offsetTopLeft: i,
          position: a,
          reverseDirection: o,
          tooltipDimension: u,
          viewBox: c,
          viewBoxDimension: s,
        } = t;
        if (a && (0, l.Et)(a[n])) return a[n];
        var f = r[n] - u - (i > 0 ? i : 0),
          h = r[n] + i;
        if (e[n]) return o[n] ? f : h;
        var d = c[n];
        return null == d
          ? 0
          : o[n]
          ? f < d
            ? Math.max(h, d)
            : Math.max(f, d)
          : null == s
          ? 0
          : h + u > d + s
          ? Math.max(f, d)
          : Math.max(h, d);
      }
      function g(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function m(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? g(Object(r), !0).forEach(function (e) {
                b(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function b(t, e, r) {
        var n;
        return (
          (e =
            "symbol" ==
            typeof (n = (function (t, e) {
              if ("object" != typeof t || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === e ? String : Number)(t);
            })(e, "string"))
              ? n
              : n + "") in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      class x extends n.PureComponent {
        componentDidMount() {
          document.addEventListener("keydown", this.handleKeyDown);
        }
        componentWillUnmount() {
          document.removeEventListener("keydown", this.handleKeyDown);
        }
        componentDidUpdate() {
          var t, e;
          this.state.dismissed &&
            ((null == (t = this.props.coordinate) ? void 0 : t.x) !==
              this.state.dismissedAtCoordinate.x ||
              (null == (e = this.props.coordinate) ? void 0 : e.y) !==
                this.state.dismissedAtCoordinate.y) &&
            (this.state.dismissed = !1);
        }
        render() {
          var {
              active: t,
              allowEscapeViewBox: e,
              animationDuration: r,
              animationEasing: i,
              children: a,
              coordinate: o,
              hasPayload: c,
              isAnimationActive: s,
              offset: f,
              position: h,
              reverseDirection: d,
              useTranslate3d: g,
              viewBox: b,
              wrapperStyle: x,
              lastBoundingBox: w,
              innerRef: O,
              hasPortalFromProps: M,
            } = this.props,
            { cssClasses: j, cssProperties: S } = (function (t) {
              var e,
                r,
                n,
                {
                  allowEscapeViewBox: i,
                  coordinate: a,
                  offsetTopLeft: o,
                  position: c,
                  reverseDirection: s,
                  tooltipBox: f,
                  useTranslate3d: h,
                  viewBox: d,
                } = t;
              return {
                cssProperties: (e =
                  f.height > 0 && f.width > 0 && a
                    ? (function (t) {
                        var {
                          translateX: e,
                          translateY: r,
                          useTranslate3d: n,
                        } = t;
                        return {
                          transform: n
                            ? "translate3d("
                                .concat(e, "px, ")
                                .concat(r, "px, 0)")
                            : "translate(".concat(e, "px, ").concat(r, "px)"),
                        };
                      })({
                        translateX: (r = v({
                          allowEscapeViewBox: i,
                          coordinate: a,
                          key: "x",
                          offsetTopLeft: o,
                          position: c,
                          reverseDirection: s,
                          tooltipDimension: f.width,
                          viewBox: d,
                          viewBoxDimension: d.width,
                        })),
                        translateY: (n = v({
                          allowEscapeViewBox: i,
                          coordinate: a,
                          key: "y",
                          offsetTopLeft: o,
                          position: c,
                          reverseDirection: s,
                          tooltipDimension: f.height,
                          viewBox: d,
                          viewBoxDimension: d.height,
                        })),
                        useTranslate3d: h,
                      })
                    : y),
                cssClasses: (function (t) {
                  var { coordinate: e, translateX: r, translateY: n } = t;
                  return (0, u.$)(p, {
                    ["".concat(p, "-right")]:
                      (0, l.Et)(r) && e && (0, l.Et)(e.x) && r >= e.x,
                    ["".concat(p, "-left")]:
                      (0, l.Et)(r) && e && (0, l.Et)(e.x) && r < e.x,
                    ["".concat(p, "-bottom")]:
                      (0, l.Et)(n) && e && (0, l.Et)(e.y) && n >= e.y,
                    ["".concat(p, "-top")]:
                      (0, l.Et)(n) && e && (0, l.Et)(e.y) && n < e.y,
                  });
                })({ translateX: r, translateY: n, coordinate: a }),
              };
            })({
              allowEscapeViewBox: e,
              coordinate: o,
              offsetTopLeft: f,
              position: h,
              reverseDirection: d,
              tooltipBox: { height: w.height, width: w.width },
              useTranslate3d: g,
              viewBox: b,
            }),
            _ = M
              ? {}
              : m(
                  m(
                    {
                      transition:
                        s && t
                          ? "transform ".concat(r, "ms ").concat(i)
                          : void 0,
                    },
                    S
                  ),
                  {},
                  {
                    pointerEvents: "none",
                    visibility:
                      !this.state.dismissed && t && c ? "visible" : "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }
                ),
            P = m(
              m({}, _),
              {},
              {
                visibility:
                  !this.state.dismissed && t && c ? "visible" : "hidden",
              },
              x
            );
          return n.createElement(
            "div",
            {
              xmlns: "http://www.w3.org/1999/xhtml",
              tabIndex: -1,
              className: j,
              style: P,
              ref: O,
            },
            a
          );
        }
        constructor() {
          super(...arguments),
            b(this, "state", {
              dismissed: !1,
              dismissedAtCoordinate: { x: 0, y: 0 },
            }),
            b(this, "handleKeyDown", (t) => {
              if ("Escape" === t.key) {
                var e, r, n, i;
                this.setState({
                  dismissed: !0,
                  dismissedAtCoordinate: {
                    x:
                      null !=
                      (e = null == (r = this.props.coordinate) ? void 0 : r.x)
                        ? e
                        : 0,
                    y:
                      null !=
                      (n = null == (i = this.props.coordinate) ? void 0 : i.y)
                        ? n
                        : 0,
                  },
                });
              }
            });
        }
      }
      var w = r(41643),
        O = r(2494),
        M = r(97238),
        j = r(96752),
        S = r(77918),
        _ = r(70688),
        P = r(70788),
        A = ["x", "y", "top", "left", "width", "height", "className"];
      function E() {
        return (E = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (t[n] = r[n]));
              }
              return t;
            }).apply(null, arguments);
      }
      function T(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var C = (t, e, r, n, i, a) =>
          "M"
            .concat(t, ",")
            .concat(i, "v")
            .concat(n, "M")
            .concat(a, ",")
            .concat(e, "h")
            .concat(r),
        k = (t) => {
          var {
              x: e = 0,
              y: r = 0,
              top: i = 0,
              left: a = 0,
              width: o = 0,
              height: c = 0,
              className: s,
            } = t,
            f = (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? T(Object(r), !0).forEach(function (e) {
                      var n, i, a;
                      (n = t),
                        (i = e),
                        (a = r[e]),
                        (i = (function (t) {
                          var e = (function (t, e) {
                            if ("object" != typeof t || !t) return t;
                            var r = t[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(t, e || "default");
                              if ("object" != typeof n) return n;
                              throw TypeError(
                                "@@toPrimitive must return a primitive value."
                              );
                            }
                            return ("string" === e ? String : Number)(t);
                          })(t, "string");
                          return "symbol" == typeof e ? e : e + "";
                        })(i)) in n
                          ? Object.defineProperty(n, i, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (n[i] = a);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : T(Object(r)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(r, e)
                      );
                    });
              }
              return t;
            })(
              { x: e, y: r, top: i, left: a, width: o, height: c },
              (function (t, e) {
                if (null == t) return {};
                var r,
                  n,
                  i = (function (t, e) {
                    if (null == t) return {};
                    var r = {};
                    for (var n in t)
                      if ({}.hasOwnProperty.call(t, n)) {
                        if (-1 !== e.indexOf(n)) continue;
                        r[n] = t[n];
                      }
                    return r;
                  })(t, e);
                if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(t);
                  for (n = 0; n < a.length; n++)
                    (r = a[n]),
                      -1 === e.indexOf(r) &&
                        {}.propertyIsEnumerable.call(t, r) &&
                        (i[r] = t[r]);
                }
                return i;
              })(t, A)
            );
          return (0, l.Et)(e) &&
            (0, l.Et)(r) &&
            (0, l.Et)(o) &&
            (0, l.Et)(c) &&
            (0, l.Et)(i) &&
            (0, l.Et)(a)
            ? n.createElement(
                "path",
                E({}, (0, P.J9)(f, !0), {
                  className: (0, u.$)("recharts-cross", s),
                  d: C(e, r, o, c, i, a),
                })
              )
            : null;
        },
        D = r(44538),
        N = r(25641);
      function I(t) {
        var { cx: e, cy: r, radius: n, startAngle: i, endAngle: a } = t;
        return {
          points: [(0, N.IZ)(e, r, n, i), (0, N.IZ)(e, r, n, a)],
          cx: e,
          cy: r,
          radius: n,
          startAngle: i,
          endAngle: a,
        };
      }
      var z = r(77283),
        $ = r(81971),
        L = r(39827),
        U = r(20215);
      function R(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function F(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? R(Object(r), !0).forEach(function (e) {
                var n, i, a;
                (n = t),
                  (i = e),
                  (a = r[e]),
                  (i = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : R(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var H = () => (0, $.G)(U.Dn),
        B = () => {
          var t = H(),
            e = (0, $.G)(U.R4),
            r = (0, $.G)(U.fl);
          return (0, L.Hj)(F(F({}, t), {}, { scale: r }), e);
        },
        K = r(94732);
      function Z() {
        return (Z = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (t[n] = r[n]));
              }
              return t;
            }).apply(null, arguments);
      }
      function q(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function W(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? q(Object(r), !0).forEach(function (e) {
                var n, i, a;
                (n = t),
                  (i = e),
                  (a = r[e]),
                  (i = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : q(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function G(t) {
        var e,
          r,
          i,
          {
            coordinate: a,
            payload: o,
            index: l,
            offset: c,
            tooltipAxisBandSize: s,
            layout: f,
            cursor: h,
            tooltipEventType: d,
            chartName: p,
          } = t;
        if (!h || !a || ("ScatterChart" !== p && "axis" !== d)) return null;
        if ("ScatterChart" === p) (r = a), (i = k);
        else if ("BarChart" === p)
          (e = s / 2),
            (r = {
              stroke: "none",
              fill: "#ccc",
              x: "horizontal" === f ? a.x - e : c.left + 0.5,
              y: "horizontal" === f ? c.top + 0.5 : a.y - e,
              width: "horizontal" === f ? s : c.width - 1,
              height: "horizontal" === f ? c.height - 1 : s,
            }),
            (i = D.M);
        else if ("radial" === f) {
          var { cx: y, cy: v, radius: g, startAngle: m, endAngle: b } = I(a);
          (r = {
            cx: y,
            cy: v,
            startAngle: m,
            endAngle: b,
            innerRadius: g,
            outerRadius: g,
          }),
            (i = z.h);
        } else
          (r = {
            points: (function (t, e, r) {
              var n, i, a, o;
              if ("horizontal" === t)
                (a = n = e.x), (i = r.top), (o = r.top + r.height);
              else if ("vertical" === t)
                (o = i = e.y), (n = r.left), (a = r.left + r.width);
              else if (null != e.cx && null != e.cy)
                if ("centric" !== t) return I(e);
                else {
                  var {
                      cx: u,
                      cy: l,
                      innerRadius: c,
                      outerRadius: s,
                      angle: f,
                    } = e,
                    h = (0, N.IZ)(u, l, c, f),
                    d = (0, N.IZ)(u, l, s, f);
                  (n = h.x), (i = h.y), (a = d.x), (o = d.y);
                }
              return [
                { x: n, y: i },
                { x: a, y: o },
              ];
            })(f, a, c),
          }),
            (i = _.I);
        var x = "object" == typeof h && "className" in h ? h.className : void 0,
          w = W(
            W(
              W(W({ stroke: "#ccc", pointerEvents: "none" }, c), r),
              (0, P.J9)(h, !1)
            ),
            {},
            {
              payload: o,
              payloadIndex: l,
              className: (0, u.$)("recharts-tooltip-cursor", x),
            }
          );
        return (0, n.isValidElement)(h)
          ? (0, n.cloneElement)(h, w)
          : (0, n.createElement)(i, w);
      }
      function Y(t) {
        var e = B(),
          r = (0, M.W7)(),
          i = (0, M.WX)(),
          a = (0, K.fW)();
        return n.createElement(
          G,
          Z({}, t, {
            coordinate: t.coordinate,
            index: t.index,
            payload: t.payload,
            offset: r,
            layout: i,
            tooltipAxisBandSize: e,
            chartName: a,
          })
        );
      }
      var V = r(25115),
        X = r(34890),
        J = r(78137),
        Q = r(96523),
        tt = r(93389);
      function te(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function tr(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? te(Object(r), !0).forEach(function (e) {
                var n, i, a;
                (n = t),
                  (i = e),
                  (a = r[e]),
                  (i = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : te(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function tn(t) {
        return t.dataKey;
      }
      var ti = [],
        ta = {
          allowEscapeViewBox: { x: !1, y: !1 },
          animationDuration: 400,
          animationEasing: "ease",
          axisId: 0,
          contentStyle: {},
          cursor: !0,
          filterNull: !0,
          isAnimationActive: !w.m.isSsr,
          itemSorter: "name",
          itemStyle: {},
          labelStyle: {},
          offset: 10,
          reverseDirection: { x: !1, y: !1 },
          separator: " : ",
          trigger: "hover",
          useTranslate3d: !1,
          wrapperStyle: {},
        };
      function to(t) {
        var e,
          r = (0, tt.e)(t, ta),
          {
            active: a,
            allowEscapeViewBox: o,
            animationDuration: u,
            animationEasing: l,
            content: c,
            filterNull: s,
            isAnimationActive: f,
            offset: h,
            payloadUniqBy: p,
            position: y,
            reverseDirection: v,
            useTranslate3d: g,
            wrapperStyle: m,
            cursor: b,
            shared: w,
            trigger: _,
            defaultIndex: P,
            portal: A,
            axisId: E,
          } = r,
          T = (0, $.j)(),
          C = "number" == typeof P ? String(P) : P;
        (0, n.useEffect)(() => {
          T(
            (0, X.UF)({
              shared: w,
              trigger: _,
              axisId: E,
              active: a,
              defaultIndex: C,
            })
          );
        }, [T, w, _, E, a, C]);
        var k = (0, M.sk)(),
          D = (0, j.$)(),
          N = (0, Q.Td)(w),
          { activeIndex: I, isActive: z } = (0, $.G)((t) =>
            (0, K.yn)(t, N, _, C)
          ),
          L = (0, $.G)((t) => (0, K.u9)(t, N, _, C)),
          U = (0, $.G)((t) => (0, K.BZ)(t, N, _, C)),
          R = (0, $.G)((t) => (0, K.dS)(t, N, _, C)),
          F = (0, V.X)(),
          H = null != a ? a : z,
          [B, Z] = (0, S.V)([L, H]),
          q = "axis" === N ? U : void 0;
        (0, J.m7)(N, _, R, q, I, H);
        var W = null != A ? A : F;
        if (null == W) return null;
        var G = null != L ? L : ti;
        H || (G = ti),
          s &&
            G.length &&
            (G = (0, O.s)(
              L.filter(
                (t) => null != t.value && (!0 !== t.hide || r.includeHidden)
              ),
              p,
              tn
            ));
        var te = G.length > 0,
          to = n.createElement(
            x,
            {
              allowEscapeViewBox: o,
              animationDuration: u,
              animationEasing: l,
              isAnimationActive: f,
              active: H,
              coordinate: R,
              hasPayload: te,
              offset: h,
              position: y,
              reverseDirection: v,
              useTranslate3d: g,
              viewBox: k,
              wrapperStyle: m,
              lastBoundingBox: B,
              innerRef: Z,
              hasPortalFromProps: !!A,
            },
            ((e = tr(
              tr({}, r),
              {},
              {
                payload: G,
                label: q,
                active: H,
                coordinate: R,
                accessibilityLayer: D,
              }
            )),
            n.isValidElement(c)
              ? n.cloneElement(c, e)
              : "function" == typeof c
              ? n.createElement(c, e)
              : n.createElement(d, e))
          );
        return n.createElement(
          n.Fragment,
          null,
          (0, i.createPortal)(to, W),
          H &&
            n.createElement(Y, {
              cursor: b,
              tooltipEventType: N,
              coordinate: R,
              payload: L,
              index: I,
            })
        );
      }
    },
    27119: (t, e, r) => {
      "use strict";
      r.d(e, { p: () => c, v: () => s });
      var n = r(12115),
        i = r(81971),
        a = r(22248),
        o = r(39827);
      function u(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(r), !0).forEach(function (e) {
                var n, i, a;
                (n = t),
                  (i = e),
                  (a = r[e]),
                  (i = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function c(t) {
        var e = (0, i.j)(),
          r = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            var n = l(l({}, t), {}, { stackId: (0, o.$8)(t.stackId) });
            null === r.current
              ? e((0, a.g5)(n))
              : r.current !== n && e((0, a.ZF)({ prev: r.current, next: n })),
              (r.current = n);
          }, [e, t]),
          (0, n.useEffect)(
            () => () => {
              r.current && (e((0, a.Vi)(r.current)), (r.current = null));
            },
            [e]
          ),
          null
        );
      }
      function s(t) {
        var e = (0, i.j)();
        return (
          (0, n.useEffect)(
            () => (
              e((0, a.As)(t)),
              () => {
                e((0, a.TK)(t));
              }
            ),
            [e, t]
          ),
          null
        );
      }
    },
    29738: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(44117),
        i = r(42721);
      e.cloneDeepWith = function (t, e) {
        return n.cloneDeepWith(t, (r, a, o, u) => {
          let l = e?.(r, a, o, u);
          if (null != l) return l;
          if ("object" == typeof t)
            switch (Object.prototype.toString.call(t)) {
              case i.numberTag:
              case i.stringTag:
              case i.booleanTag: {
                let e = new t.constructor(t?.valueOf());
                return n.copyProperties(e, t), e;
              }
              case i.argumentsTag: {
                let e = {};
                return (
                  n.copyProperties(e, t),
                  (e.length = t.length),
                  (e[Symbol.iterator] = t[Symbol.iterator]),
                  e
                );
              }
              default:
                return;
            }
        });
      };
    },
    30294: (t, e) => {
      "use strict";
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        o = r ? Symbol.for("react.strict_mode") : 60108,
        u = r ? Symbol.for("react.profiler") : 60114,
        l = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        s = r ? Symbol.for("react.async_mode") : 60111,
        f = r ? Symbol.for("react.concurrent_mode") : 60111,
        h = r ? Symbol.for("react.forward_ref") : 60112,
        d = r ? Symbol.for("react.suspense") : 60113,
        p =
          (r && Symbol.for("react.suspense_list"),
          r ? Symbol.for("react.memo") : 60115),
        y = r ? Symbol.for("react.lazy") : 60116;
      function v(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case n:
              switch ((t = t.type)) {
                case s:
                case f:
                case a:
                case u:
                case o:
                case d:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case c:
                    case h:
                    case y:
                    case p:
                    case l:
                      return t;
                    default:
                      return e;
                  }
              }
            case i:
              return e;
          }
        }
      }
      r && Symbol.for("react.block"),
        r && Symbol.for("react.fundamental"),
        r && Symbol.for("react.responder"),
        r && Symbol.for("react.scope");
      e.isFragment = function (t) {
        return v(t) === a;
      };
    },
    31847: (t, e, r) => {
      "use strict";
      r.d(e, { i: () => l });
      let n = Math.PI,
        i = 2 * n,
        a = i - 1e-6;
      function o(t) {
        this._ += t[0];
        for (let e = 1, r = t.length; e < r; ++e) this._ += arguments[e] + t[e];
      }
      class u {
        constructor(t) {
          (this._x0 = this._y0 = this._x1 = this._y1 = null),
            (this._ = ""),
            (this._append =
              null == t
                ? o
                : (function (t) {
                    let e = Math.floor(t);
                    if (!(e >= 0)) throw Error(`invalid digits: ${t}`);
                    if (e > 15) return o;
                    let r = 10 ** e;
                    return function (t) {
                      this._ += t[0];
                      for (let e = 1, n = t.length; e < n; ++e)
                        this._ += Math.round(arguments[e] * r) / r + t[e];
                    };
                  })(t));
        }
        moveTo(t, e) {
          this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
            +e)}`;
        }
        closePath() {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
        }
        lineTo(t, e) {
          this._append`L${(this._x1 = +t)},${(this._y1 = +e)}`;
        }
        quadraticCurveTo(t, e, r, n) {
          this._append`Q${+t},${+e},${(this._x1 = +r)},${(this._y1 = +n)}`;
        }
        bezierCurveTo(t, e, r, n, i, a) {
          this._append`C${+t},${+e},${+r},${+n},${(this._x1 = +i)},${(this._y1 =
            +a)}`;
        }
        arcTo(t, e, r, i, a) {
          if (((t *= 1), (e *= 1), (r *= 1), (i *= 1), (a *= 1) < 0))
            throw Error(`negative radius: ${a}`);
          let o = this._x1,
            u = this._y1,
            l = r - t,
            c = i - e,
            s = o - t,
            f = u - e,
            h = s * s + f * f;
          if (null === this._x1)
            this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
          else if (h > 1e-6)
            if (Math.abs(f * l - c * s) > 1e-6 && a) {
              let d = r - o,
                p = i - u,
                y = l * l + c * c,
                v = Math.sqrt(y),
                g = Math.sqrt(h),
                m =
                  a *
                  Math.tan(
                    (n - Math.acos((y + h - (d * d + p * p)) / (2 * v * g))) / 2
                  ),
                b = m / g,
                x = m / v;
              Math.abs(b - 1) > 1e-6 &&
                this._append`L${t + b * s},${e + b * f}`,
                this._append`A${a},${a},0,0,${+(f * d > s * p)},${(this._x1 =
                  t + x * l)},${(this._y1 = e + x * c)}`;
            } else this._append`L${(this._x1 = t)},${(this._y1 = e)}`;
        }
        arc(t, e, r, o, u, l) {
          if (((t *= 1), (e *= 1), (r *= 1), (l = !!l), r < 0))
            throw Error(`negative radius: ${r}`);
          let c = r * Math.cos(o),
            s = r * Math.sin(o),
            f = t + c,
            h = e + s,
            d = 1 ^ l,
            p = l ? o - u : u - o;
          null === this._x1
            ? this._append`M${f},${h}`
            : (Math.abs(this._x1 - f) > 1e-6 ||
                Math.abs(this._y1 - h) > 1e-6) &&
              this._append`L${f},${h}`,
            r &&
              (p < 0 && (p = (p % i) + i),
              p > a
                ? this._append`A${r},${r},0,1,${d},${t - c},${
                    e - s
                  }A${r},${r},0,1,${d},${(this._x1 = f)},${(this._y1 = h)}`
                : p > 1e-6 &&
                  this._append`A${r},${r},0,${+(p >= n)},${d},${(this._x1 =
                    t + r * Math.cos(u))},${(this._y1 = e + r * Math.sin(u))}`);
        }
        rect(t, e, r, n) {
          this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
            +e)}h${(r *= 1)}v${+n}h${-r}Z`;
        }
        toString() {
          return this._;
        }
      }
      function l(t) {
        let e = 3;
        return (
          (t.digits = function (r) {
            if (!arguments.length) return e;
            if (null == r) e = null;
            else {
              let t = Math.floor(r);
              if (!(t >= 0)) throw RangeError(`invalid digits: ${r}`);
              e = t;
            }
            return t;
          }),
          () => new u(e)
        );
      }
      u.prototype;
    },
    32634: (t, e, r) => {
      "use strict";
      r.d(e, {
        CU: () => s,
        Lx: () => l,
        h1: () => u,
        hx: () => o,
        u3: () => c,
      });
      var n = r(5710),
        i = r(74532),
        a = (0, n.Z0)({
          name: "legend",
          initialState: {
            settings: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "middle",
              itemSorter: "value",
            },
            size: { width: 0, height: 0 },
            payload: [],
          },
          reducers: {
            setLegendSize(t, e) {
              (t.size.width = e.payload.width),
                (t.size.height = e.payload.height);
            },
            setLegendSettings(t, e) {
              (t.settings.align = e.payload.align),
                (t.settings.layout = e.payload.layout),
                (t.settings.verticalAlign = e.payload.verticalAlign),
                (t.settings.itemSorter = e.payload.itemSorter);
            },
            addLegendPayload(t, e) {
              t.payload.push((0, i.h4)(e.payload));
            },
            removeLegendPayload(t, e) {
              var r = (0, i.ss)(t).payload.indexOf((0, i.h4)(e.payload));
              r > -1 && t.payload.splice(r, 1);
            },
          },
        }),
        {
          setLegendSize: o,
          setLegendSettings: u,
          addLegendPayload: l,
          removeLegendPayload: c,
        } = a.actions,
        s = a.reducer;
    },
    34487: (t, e, r) => {
      "use strict";
      r.d(e, { LV: () => u, M: () => a, hq: () => i });
      var n = (0, r(5710).Z0)({
          name: "chartData",
          initialState: {
            chartData: void 0,
            computedData: void 0,
            dataStartIndex: 0,
            dataEndIndex: 0,
          },
          reducers: {
            setChartData(t, e) {
              if (((t.chartData = e.payload), null == e.payload)) {
                (t.dataStartIndex = 0), (t.dataEndIndex = 0);
                return;
              }
              e.payload.length > 0 &&
                t.dataEndIndex !== e.payload.length - 1 &&
                (t.dataEndIndex = e.payload.length - 1);
            },
            setComputedData(t, e) {
              t.computedData = e.payload;
            },
            setDataStartEndIndexes(t, e) {
              var { startIndex: r, endIndex: n } = e.payload;
              null != r && (t.dataStartIndex = r),
                null != n && (t.dataEndIndex = n);
            },
          },
        }),
        {
          setChartData: i,
          setDataStartEndIndexes: a,
          setComputedData: o,
        } = n.actions,
        u = n.reducer;
    },
    34890: (t, e, r) => {
      "use strict";
      r.d(e, {
        E1: () => v,
        En: () => m,
        Ix: () => u,
        ML: () => d,
        Nt: () => p,
        RD: () => s,
        UF: () => c,
        XB: () => l,
        jF: () => y,
        k_: () => a,
        o4: () => g,
        oP: () => f,
        xS: () => h,
      });
      var n = r(5710),
        i = r(74532),
        a = { active: !1, index: null, dataKey: void 0, coordinate: void 0 },
        o = (0, n.Z0)({
          name: "tooltip",
          initialState: {
            itemInteraction: { click: a, hover: a },
            axisInteraction: { click: a, hover: a },
            keyboardInteraction: a,
            syncInteraction: {
              active: !1,
              index: null,
              dataKey: void 0,
              label: void 0,
              coordinate: void 0,
            },
            tooltipItemPayloads: [],
            settings: {
              shared: void 0,
              trigger: "hover",
              axisId: 0,
              active: !1,
              defaultIndex: void 0,
            },
          },
          reducers: {
            addTooltipEntrySettings(t, e) {
              t.tooltipItemPayloads.push((0, i.h4)(e.payload));
            },
            removeTooltipEntrySettings(t, e) {
              var r = (0, i.ss)(t).tooltipItemPayloads.indexOf(
                (0, i.h4)(e.payload)
              );
              r > -1 && t.tooltipItemPayloads.splice(r, 1);
            },
            setTooltipSettingsState(t, e) {
              t.settings = e.payload;
            },
            setActiveMouseOverItemIndex(t, e) {
              (t.syncInteraction.active = !1),
                (t.keyboardInteraction.active = !1),
                (t.itemInteraction.hover.active = !0),
                (t.itemInteraction.hover.index = e.payload.activeIndex),
                (t.itemInteraction.hover.dataKey = e.payload.activeDataKey),
                (t.itemInteraction.hover.coordinate =
                  e.payload.activeCoordinate);
            },
            mouseLeaveChart(t) {
              (t.itemInteraction.hover.active = !1),
                (t.axisInteraction.hover.active = !1);
            },
            mouseLeaveItem(t) {
              t.itemInteraction.hover.active = !1;
            },
            setActiveClickItemIndex(t, e) {
              (t.syncInteraction.active = !1),
                (t.itemInteraction.click.active = !0),
                (t.keyboardInteraction.active = !1),
                (t.itemInteraction.click.index = e.payload.activeIndex),
                (t.itemInteraction.click.dataKey = e.payload.activeDataKey),
                (t.itemInteraction.click.coordinate =
                  e.payload.activeCoordinate);
            },
            setMouseOverAxisIndex(t, e) {
              (t.syncInteraction.active = !1),
                (t.axisInteraction.hover.active = !0),
                (t.keyboardInteraction.active = !1),
                (t.axisInteraction.hover.index = e.payload.activeIndex),
                (t.axisInteraction.hover.dataKey = e.payload.activeDataKey),
                (t.axisInteraction.hover.coordinate =
                  e.payload.activeCoordinate);
            },
            setMouseClickAxisIndex(t, e) {
              (t.syncInteraction.active = !1),
                (t.keyboardInteraction.active = !1),
                (t.axisInteraction.click.active = !0),
                (t.axisInteraction.click.index = e.payload.activeIndex),
                (t.axisInteraction.click.dataKey = e.payload.activeDataKey),
                (t.axisInteraction.click.coordinate =
                  e.payload.activeCoordinate);
            },
            setSyncInteraction(t, e) {
              t.syncInteraction = e.payload;
            },
            setKeyboardInteraction(t, e) {
              (t.keyboardInteraction.active = e.payload.active),
                (t.keyboardInteraction.index = e.payload.activeIndex),
                (t.keyboardInteraction.coordinate = e.payload.activeCoordinate),
                (t.keyboardInteraction.dataKey = e.payload.activeDataKey);
            },
          },
        }),
        {
          addTooltipEntrySettings: u,
          removeTooltipEntrySettings: l,
          setTooltipSettingsState: c,
          setActiveMouseOverItemIndex: s,
          mouseLeaveItem: f,
          mouseLeaveChart: h,
          setActiveClickItemIndex: d,
          setMouseOverAxisIndex: p,
          setMouseClickAxisIndex: y,
          setSyncInteraction: v,
          setKeyboardInteraction: g,
        } = o.actions,
        m = o.reducer;
    },
    35803: (t, e, r) => {
      "use strict";
      r.d(e, { dc: () => u, ff: () => o, g0: () => l });
      var n = r(68924),
        i = r(20241),
        a = r.n(i),
        o = (t) => t.legend.settings,
        u = (t) => t.legend.size,
        l = (0, n.Mz)([(t) => t.legend.payload, o], (t, e) => {
          var { itemSorter: r } = e,
            n = t.flat(1);
          return r ? a()(n, r) : n;
        });
    },
    36144: (t, e, r) => {
      "use strict";
      r.d(e, { e: () => p, k: () => y });
      var n = r(5710),
        i = r(34890),
        a = r(63027),
        o = r(91165),
        u = r(96523),
        l = r(84421),
        c = r(68924),
        s = r(46670),
        f = r(75714),
        h = (0, c.Mz)([f.J], (t) => t.tooltipItemPayloads),
        d = (0, c.Mz)(
          [h, s.x, (t, e, r) => e, (t, e, r) => r],
          (t, e, r, n) => {
            var i = t.find((t) => t.settings.dataKey === n);
            if (null != i) {
              var { positions: a } = i;
              if (null != a) return e(a, r);
            }
          }
        ),
        p = (0, n.VP)("touchMove"),
        y = (0, n.Nc)();
      y.startListening({
        actionCreator: p,
        effect: (t, e) => {
          var r = t.payload,
            n = e.getState(),
            c = (0, u.au)(n, n.tooltip.settings.shared);
          if ("axis" === c) {
            var s = (0, a.g)(
              n,
              (0, o.w)({
                clientX: r.touches[0].clientX,
                clientY: r.touches[0].clientY,
                currentTarget: r.currentTarget,
              })
            );
            (null == s ? void 0 : s.activeIndex) != null &&
              e.dispatch(
                (0, i.Nt)({
                  activeIndex: s.activeIndex,
                  activeDataKey: void 0,
                  activeCoordinate: s.activeCoordinate,
                })
              );
          } else if ("item" === c) {
            var f,
              h = r.touches[0],
              p = document.elementFromPoint(h.clientX, h.clientY);
            if (!p || !p.getAttribute) return;
            var y = p.getAttribute(l.F0),
              v = null != (f = p.getAttribute(l.um)) ? f : void 0,
              g = d(e.getState(), y, v);
            e.dispatch(
              (0, i.RD)({
                activeDataKey: v,
                activeIndex: y,
                activeCoordinate: g,
              })
            );
          }
        },
      });
    },
    36633: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.isPrimitive = function (t) {
          return null == t || ("object" != typeof t && "function" != typeof t);
        });
    },
    37298: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(29738);
      e.cloneDeep = function (t) {
        return n.cloneDeepWith(t);
      };
    },
    37335: (t, e, r) => {
      "use strict";
      r.d(e, { x: () => o, y: () => a });
      var n = r(5710),
        i = r(20215),
        a = (0, n.VP)("externalEvent"),
        o = (0, n.Nc)();
      o.startListening({
        actionCreator: a,
        effect: (t, e) => {
          if (null != t.payload.handler) {
            var r = e.getState(),
              n = {
                activeCoordinate: (0, i.eE)(r),
                activeDataKey: (0, i.Xb)(r),
                activeIndex: (0, i.A2)(r),
                activeLabel: (0, i.BZ)(r),
                activeTooltipIndex: (0, i.A2)(r),
                isTooltipActive: (0, i.yn)(r),
              };
            t.payload.handler(n, t.payload.reactEvent);
          }
        },
      });
    },
    39426: (t, e, r) => {
      "use strict";
      r.d(e, { n: () => a });
      var n = r(12115),
        i = r(16377);
      function a(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "animation-",
          r = (0, n.useRef)((0, i.NF)(e)),
          a = (0, n.useRef)(t);
        return (
          a.current !== t && ((r.current = (0, i.NF)(e)), (a.current = t)),
          r.current
        );
      }
    },
    39611: (t, e, r) => {
      "use strict";
      r(4993);
    },
    39827: (t, e, r) => {
      "use strict";
      r.d(e, {
        qx: () => k,
        IH: () => C,
        s0: () => b,
        gH: () => m,
        SW: () => L,
        YB: () => M,
        bk: () => $,
        Hj: () => D,
        nb: () => P,
        PW: () => w,
        Mk: () => T,
        $8: () => _,
        yy: () => S,
        Rh: () => O,
        GF: () => N,
        uM: () => I,
        kr: () => g,
        r4: () => z,
        _L: () => x,
      });
      var n = r(20241),
        i = r.n(n),
        a = r(95672),
        o = r.n(a);
      function u(t, e) {
        if ((i = t.length) > 1)
          for (var r, n, i, a = 1, o = t[e[0]], u = o.length; a < i; ++a)
            for (n = o, o = t[e[a]], r = 0; r < u; ++r)
              o[r][1] += o[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1];
      }
      var l = r(9819),
        c = r(85654);
      function s(t) {
        for (var e = t.length, r = Array(e); --e >= 0; ) r[e] = e;
        return r;
      }
      function f(t, e) {
        return t[e];
      }
      function h(t) {
        let e = [];
        return (e.key = t), e;
      }
      var d = r(16377),
        p = r(25641);
      function y(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function v(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? y(Object(r), !0).forEach(function (e) {
                var n, i, a;
                (n = t),
                  (i = e),
                  (a = r[e]),
                  (i = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : y(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function g(t, e, r) {
        return (0, d.uy)(t) || (0, d.uy)(e)
          ? r
          : (0, d.vh)(e)
          ? o()(t, e, r)
          : "function" == typeof e
          ? e(t)
          : r;
      }
      var m = (t, e, r, n, i) => {
          var a,
            o = -1,
            u = null != (a = null == e ? void 0 : e.length) ? a : 0;
          if (u <= 1 || null == t) return 0;
          if (
            "angleAxis" === n &&
            null != i &&
            1e-6 >= Math.abs(Math.abs(i[1] - i[0]) - 360)
          )
            for (var l = 0; l < u; l++) {
              var c = l > 0 ? r[l - 1].coordinate : r[u - 1].coordinate,
                s = r[l].coordinate,
                f = l >= u - 1 ? r[0].coordinate : r[l + 1].coordinate,
                h = void 0;
              if ((0, d.sA)(s - c) !== (0, d.sA)(f - s)) {
                var p = [];
                if ((0, d.sA)(f - s) === (0, d.sA)(i[1] - i[0])) {
                  h = f;
                  var y = s + i[1] - i[0];
                  (p[0] = Math.min(y, (y + c) / 2)),
                    (p[1] = Math.max(y, (y + c) / 2));
                } else {
                  h = c;
                  var v = f + i[1] - i[0];
                  (p[0] = Math.min(s, (v + s) / 2)),
                    (p[1] = Math.max(s, (v + s) / 2));
                }
                var g = [Math.min(s, (h + s) / 2), Math.max(s, (h + s) / 2)];
                if ((t > g[0] && t <= g[1]) || (t >= p[0] && t <= p[1])) {
                  ({ index: o } = r[l]);
                  break;
                }
              } else {
                var m = Math.min(c, f),
                  b = Math.max(c, f);
                if (t > (m + s) / 2 && t <= (b + s) / 2) {
                  ({ index: o } = r[l]);
                  break;
                }
              }
            }
          else if (e) {
            for (var x = 0; x < u; x++)
              if (
                (0 === x && t <= (e[x].coordinate + e[x + 1].coordinate) / 2) ||
                (x > 0 &&
                  x < u - 1 &&
                  t > (e[x].coordinate + e[x - 1].coordinate) / 2 &&
                  t <= (e[x].coordinate + e[x + 1].coordinate) / 2) ||
                (x === u - 1 && t > (e[x].coordinate + e[x - 1].coordinate) / 2)
              ) {
                ({ index: o } = e[x]);
                break;
              }
          }
          return o;
        },
        b = (t, e, r) => {
          if (e && r) {
            var { width: n, height: i } = r,
              { align: a, verticalAlign: o, layout: u } = e;
            if (
              ("vertical" === u || ("horizontal" === u && "middle" === o)) &&
              "center" !== a &&
              (0, d.Et)(t[a])
            )
              return v(v({}, t), {}, { [a]: t[a] + (n || 0) });
            if (
              ("horizontal" === u || ("vertical" === u && "center" === a)) &&
              "middle" !== o &&
              (0, d.Et)(t[o])
            )
              return v(v({}, t), {}, { [o]: t[o] + (i || 0) });
          }
          return t;
        },
        x = (t, e) =>
          ("horizontal" === t && "xAxis" === e) ||
          ("vertical" === t && "yAxis" === e) ||
          ("centric" === t && "angleAxis" === e) ||
          ("radial" === t && "radiusAxis" === e),
        w = (t, e, r, n) => {
          if (n) return t.map((t) => t.coordinate);
          var i,
            a,
            o = t.map(
              (t) => (
                t.coordinate === e && (i = !0),
                t.coordinate === r && (a = !0),
                t.coordinate
              )
            );
          return i || o.push(e), a || o.push(r), o;
        },
        O = (t, e, r) => {
          if (!t) return null;
          var {
            duplicateDomain: n,
            type: i,
            range: a,
            scale: o,
            realScaleType: u,
            isCategorical: l,
            categoricalDomain: c,
            tickCount: s,
            ticks: f,
            niceTicks: h,
            axisType: p,
          } = t;
          if (!o) return null;
          var y = "scaleBand" === u && o.bandwidth ? o.bandwidth() / 2 : 2,
            v =
              (e || r) && "category" === i && o.bandwidth
                ? o.bandwidth() / y
                : 0;
          return ((v =
            "angleAxis" === p && a && a.length >= 2
              ? 2 * (0, d.sA)(a[0] - a[1]) * v
              : v),
          e && (f || h))
            ? (f || h || [])
                .map((t, e) => ({
                  coordinate: o(n ? n.indexOf(t) : t) + v,
                  value: t,
                  offset: v,
                  index: e,
                }))
                .filter((t) => !(0, d.M8)(t.coordinate))
            : l && c
            ? c.map((t, e) => ({
                coordinate: o(t) + v,
                value: t,
                index: e,
                offset: v,
              }))
            : o.ticks && !r && null != s
            ? o
                .ticks(s)
                .map((t, e) => ({
                  coordinate: o(t) + v,
                  value: t,
                  offset: v,
                  index: e,
                }))
            : o
                .domain()
                .map((t, e) => ({
                  coordinate: o(t) + v,
                  value: n ? n[t] : t,
                  index: e,
                  offset: v,
                }));
        },
        M = (t) => {
          var e = t.domain();
          if (e && !(e.length <= 2)) {
            var r = e.length,
              n = t.range(),
              i = Math.min(n[0], n[1]) - 1e-4,
              a = Math.max(n[0], n[1]) + 1e-4,
              o = t(e[0]),
              u = t(e[r - 1]);
            (o < i || o > a || u < i || u > a) && t.domain([e[0], e[r - 1]]);
          }
        },
        j = {
          sign: (t) => {
            var e = t.length;
            if (!(e <= 0))
              for (var r = 0, n = t[0].length; r < n; ++r)
                for (var i = 0, a = 0, o = 0; o < e; ++o) {
                  var u = (0, d.M8)(t[o][r][1]) ? t[o][r][0] : t[o][r][1];
                  u >= 0
                    ? ((t[o][r][0] = i), (t[o][r][1] = i + u), (i = t[o][r][1]))
                    : ((t[o][r][0] = a),
                      (t[o][r][1] = a + u),
                      (a = t[o][r][1]));
                }
          },
          expand: function (t, e) {
            if ((n = t.length) > 0) {
              for (var r, n, i, a = 0, o = t[0].length; a < o; ++a) {
                for (i = r = 0; r < n; ++r) i += t[r][a][1] || 0;
                if (i) for (r = 0; r < n; ++r) t[r][a][1] /= i;
              }
              u(t, e);
            }
          },
          none: u,
          silhouette: function (t, e) {
            if ((r = t.length) > 0) {
              for (var r, n = 0, i = t[e[0]], a = i.length; n < a; ++n) {
                for (var o = 0, l = 0; o < r; ++o) l += t[o][n][1] || 0;
                i[n][1] += i[n][0] = -l / 2;
              }
              u(t, e);
            }
          },
          wiggle: function (t, e) {
            if ((i = t.length) > 0 && (n = (r = t[e[0]]).length) > 0) {
              for (var r, n, i, a = 0, o = 1; o < n; ++o) {
                for (var l = 0, c = 0, s = 0; l < i; ++l) {
                  for (
                    var f = t[e[l]],
                      h = f[o][1] || 0,
                      d = (h - (f[o - 1][1] || 0)) / 2,
                      p = 0;
                    p < l;
                    ++p
                  ) {
                    var y = t[e[p]];
                    d += (y[o][1] || 0) - (y[o - 1][1] || 0);
                  }
                  (c += h), (s += d * h);
                }
                (r[o - 1][1] += r[o - 1][0] = a), c && (a -= s / c);
              }
              (r[o - 1][1] += r[o - 1][0] = a), u(t, e);
            }
          },
          positive: (t) => {
            var e = t.length;
            if (!(e <= 0))
              for (var r = 0, n = t[0].length; r < n; ++r)
                for (var i = 0, a = 0; a < e; ++a) {
                  var o = (0, d.M8)(t[a][r][1]) ? t[a][r][0] : t[a][r][1];
                  o >= 0
                    ? ((t[a][r][0] = i), (t[a][r][1] = i + o), (i = t[a][r][1]))
                    : ((t[a][r][0] = 0), (t[a][r][1] = 0));
                }
          },
        },
        S = (t, e, r) => {
          var n = j[r];
          return (function () {
            var t = (0, c.A)([]),
              e = s,
              r = u,
              n = f;
            function i(i) {
              var a,
                o,
                u = Array.from(t.apply(this, arguments), h),
                c = u.length,
                s = -1;
              for (let t of i)
                for (a = 0, ++s; a < c; ++a)
                  (u[a][s] = [0, +n(t, u[a].key, s, i)]).data = t;
              for (a = 0, o = (0, l.A)(e(u)); a < c; ++a) u[o[a]].index = a;
              return r(u, o), u;
            }
            return (
              (i.keys = function (e) {
                return arguments.length
                  ? ((t = "function" == typeof e ? e : (0, c.A)(Array.from(e))),
                    i)
                  : t;
              }),
              (i.value = function (t) {
                return arguments.length
                  ? ((n = "function" == typeof t ? t : (0, c.A)(+t)), i)
                  : n;
              }),
              (i.order = function (t) {
                return arguments.length
                  ? ((e =
                      null == t
                        ? s
                        : "function" == typeof t
                        ? t
                        : (0, c.A)(Array.from(t))),
                    i)
                  : e;
              }),
              (i.offset = function (t) {
                return arguments.length ? ((r = null == t ? u : t), i) : r;
              }),
              i
            );
          })()
            .keys(e)
            .value((t, e) => +g(t, e, 0))
            .order(s)
            .offset(n)(t);
        };
      function _(t) {
        return null == t ? void 0 : String(t);
      }
      function P(t) {
        var {
          axis: e,
          ticks: r,
          bandSize: n,
          entry: i,
          index: a,
          dataKey: o,
        } = t;
        if ("category" === e.type) {
          if (
            !e.allowDuplicatedCategory &&
            e.dataKey &&
            !(0, d.uy)(i[e.dataKey])
          ) {
            var u = (0, d.eP)(r, "value", i[e.dataKey]);
            if (u) return u.coordinate + n / 2;
          }
          return r[a] ? r[a].coordinate + n / 2 : null;
        }
        var l = g(i, (0, d.uy)(o) ? e.dataKey : o);
        return (0, d.uy)(l) ? null : e.scale(l);
      }
      var A = (t) => {
          var e = t.flat(2).filter(d.Et);
          return [Math.min(...e), Math.max(...e)];
        },
        E = (t) => [t[0] === 1 / 0 ? 0 : t[0], t[1] === -1 / 0 ? 0 : t[1]],
        T = (t, e, r) => {
          if (null != t)
            return E(
              Object.keys(t).reduce(
                (n, i) => {
                  var { stackedData: a } = t[i],
                    o = a.reduce(
                      (t, n) => {
                        var i = A(n.slice(e, r + 1));
                        return [Math.min(t[0], i[0]), Math.max(t[1], i[1])];
                      },
                      [1 / 0, -1 / 0]
                    );
                  return [Math.min(o[0], n[0]), Math.max(o[1], n[1])];
                },
                [1 / 0, -1 / 0]
              )
            );
        },
        C = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        k = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        D = (t, e, r) => {
          if (t && t.scale && t.scale.bandwidth) {
            var n = t.scale.bandwidth();
            if (!r || n > 0) return n;
          }
          if (t && e && e.length >= 2) {
            for (
              var a = i()(e, (t) => t.coordinate),
                o = 1 / 0,
                u = 1,
                l = a.length;
              u < l;
              u++
            ) {
              var c = a[u],
                s = a[u - 1];
              o = Math.min((c.coordinate || 0) - (s.coordinate || 0), o);
            }
            return o === 1 / 0 ? 0 : o;
          }
          return r ? void 0 : 0;
        };
      function N(t) {
        var {
          tooltipEntrySettings: e,
          dataKey: r,
          payload: n,
          value: i,
          name: a,
        } = t;
        return v(v({}, e), {}, { dataKey: r, payload: n, value: i, name: a });
      }
      function I(t, e) {
        return t ? String(t) : "string" == typeof e ? e : void 0;
      }
      function z(t, e, r, n, i) {
        return "horizontal" === r || "vertical" === r
          ? t >= i.left &&
            t <= i.left + i.width &&
            e >= i.top &&
            e <= i.top + i.height
            ? { x: t, y: e }
            : null
          : n
          ? (0, p.yy)({ x: t, y: e }, n)
          : null;
      }
      var $ = (t, e, r, n) => {
          var i = e.find((t) => t && t.index === r);
          if (i) {
            if ("horizontal" === t) return { x: i.coordinate, y: n.y };
            if ("vertical" === t) return { x: n.x, y: i.coordinate };
            if ("centric" === t) {
              var a = i.coordinate,
                { radius: o } = n;
              return v(
                v(v({}, n), (0, p.IZ)(n.cx, n.cy, o, a)),
                {},
                { angle: a, radius: o }
              );
            }
            var u = i.coordinate,
              { angle: l } = n;
            return v(
              v(v({}, n), (0, p.IZ)(n.cx, n.cy, u, l)),
              {},
              { angle: l, radius: u }
            );
          }
          return { x: 0, y: 0 };
        },
        L = (t, e) =>
          "horizontal" === e
            ? t.x
            : "vertical" === e
            ? t.y
            : "centric" === e
            ? t.angle
            : t.radius;
    },
    41643: (t, e, r) => {
      "use strict";
      r.d(e, { m: () => n });
      var n = {
        isSsr: !(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement &&
          window.setTimeout
        ),
      };
    },
    42694: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(8287);
      e.toNumber = function (t) {
        return n.isSymbol(t) ? NaN : Number(t);
      };
    },
    42721: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.argumentsTag = "[object Arguments]"),
        (e.arrayBufferTag = "[object ArrayBuffer]"),
        (e.arrayTag = "[object Array]"),
        (e.bigInt64ArrayTag = "[object BigInt64Array]"),
        (e.bigUint64ArrayTag = "[object BigUint64Array]"),
        (e.booleanTag = "[object Boolean]"),
        (e.dataViewTag = "[object DataView]"),
        (e.dateTag = "[object Date]"),
        (e.errorTag = "[object Error]"),
        (e.float32ArrayTag = "[object Float32Array]"),
        (e.float64ArrayTag = "[object Float64Array]"),
        (e.functionTag = "[object Function]"),
        (e.int16ArrayTag = "[object Int16Array]"),
        (e.int32ArrayTag = "[object Int32Array]"),
        (e.int8ArrayTag = "[object Int8Array]"),
        (e.mapTag = "[object Map]"),
        (e.numberTag = "[object Number]"),
        (e.objectTag = "[object Object]"),
        (e.regexpTag = "[object RegExp]"),
        (e.setTag = "[object Set]"),
        (e.stringTag = "[object String]"),
        (e.symbolTag = "[object Symbol]"),
        (e.uint16ArrayTag = "[object Uint16Array]"),
        (e.uint32ArrayTag = "[object Uint32Array]"),
        (e.uint8ArrayTag = "[object Uint8Array]"),
        (e.uint8ClampedArrayTag = "[object Uint8ClampedArray]");
    },
    43597: (t, e, r) => {
      "use strict";
      r.d(e, {
        QQ: () => i,
        VU: () => o,
        XC: () => s,
        _U: () => l,
        j2: () => u,
      });
      var n = r(12115),
        i = [
          "aria-activedescendant",
          "aria-atomic",
          "aria-autocomplete",
          "aria-busy",
          "aria-checked",
          "aria-colcount",
          "aria-colindex",
          "aria-colspan",
          "aria-controls",
          "aria-current",
          "aria-describedby",
          "aria-details",
          "aria-disabled",
          "aria-errormessage",
          "aria-expanded",
          "aria-flowto",
          "aria-haspopup",
          "aria-hidden",
          "aria-invalid",
          "aria-keyshortcuts",
          "aria-label",
          "aria-labelledby",
          "aria-level",
          "aria-live",
          "aria-modal",
          "aria-multiline",
          "aria-multiselectable",
          "aria-orientation",
          "aria-owns",
          "aria-placeholder",
          "aria-posinset",
          "aria-pressed",
          "aria-readonly",
          "aria-relevant",
          "aria-required",
          "aria-roledescription",
          "aria-rowcount",
          "aria-rowindex",
          "aria-rowspan",
          "aria-selected",
          "aria-setsize",
          "aria-sort",
          "aria-valuemax",
          "aria-valuemin",
          "aria-valuenow",
          "aria-valuetext",
          "className",
          "color",
          "height",
          "id",
          "lang",
          "max",
          "media",
          "method",
          "min",
          "name",
          "style",
          "target",
          "width",
          "role",
          "tabIndex",
          "accentHeight",
          "accumulate",
          "additive",
          "alignmentBaseline",
          "allowReorder",
          "alphabetic",
          "amplitude",
          "arabicForm",
          "ascent",
          "attributeName",
          "attributeType",
          "autoReverse",
          "azimuth",
          "baseFrequency",
          "baselineShift",
          "baseProfile",
          "bbox",
          "begin",
          "bias",
          "by",
          "calcMode",
          "capHeight",
          "clip",
          "clipPath",
          "clipPathUnits",
          "clipRule",
          "colorInterpolation",
          "colorInterpolationFilters",
          "colorProfile",
          "colorRendering",
          "contentScriptType",
          "contentStyleType",
          "cursor",
          "cx",
          "cy",
          "d",
          "decelerate",
          "descent",
          "diffuseConstant",
          "direction",
          "display",
          "divisor",
          "dominantBaseline",
          "dur",
          "dx",
          "dy",
          "edgeMode",
          "elevation",
          "enableBackground",
          "end",
          "exponent",
          "externalResourcesRequired",
          "fill",
          "fillOpacity",
          "fillRule",
          "filter",
          "filterRes",
          "filterUnits",
          "floodColor",
          "floodOpacity",
          "focusable",
          "fontFamily",
          "fontSize",
          "fontSizeAdjust",
          "fontStretch",
          "fontStyle",
          "fontVariant",
          "fontWeight",
          "format",
          "from",
          "fx",
          "fy",
          "g1",
          "g2",
          "glyphName",
          "glyphOrientationHorizontal",
          "glyphOrientationVertical",
          "glyphRef",
          "gradientTransform",
          "gradientUnits",
          "hanging",
          "horizAdvX",
          "horizOriginX",
          "href",
          "ideographic",
          "imageRendering",
          "in2",
          "in",
          "intercept",
          "k1",
          "k2",
          "k3",
          "k4",
          "k",
          "kernelMatrix",
          "kernelUnitLength",
          "kerning",
          "keyPoints",
          "keySplines",
          "keyTimes",
          "lengthAdjust",
          "letterSpacing",
          "lightingColor",
          "limitingConeAngle",
          "local",
          "markerEnd",
          "markerHeight",
          "markerMid",
          "markerStart",
          "markerUnits",
          "markerWidth",
          "mask",
          "maskContentUnits",
          "maskUnits",
          "mathematical",
          "mode",
          "numOctaves",
          "offset",
          "opacity",
          "operator",
          "order",
          "orient",
          "orientation",
          "origin",
          "overflow",
          "overlinePosition",
          "overlineThickness",
          "paintOrder",
          "panose1",
          "pathLength",
          "patternContentUnits",
          "patternTransform",
          "patternUnits",
          "pointerEvents",
          "pointsAtX",
          "pointsAtY",
          "pointsAtZ",
          "preserveAlpha",
          "preserveAspectRatio",
          "primitiveUnits",
          "r",
          "radius",
          "refX",
          "refY",
          "renderingIntent",
          "repeatCount",
          "repeatDur",
          "requiredExtensions",
          "requiredFeatures",
          "restart",
          "result",
          "rotate",
          "rx",
          "ry",
          "seed",
          "shapeRendering",
          "slope",
          "spacing",
          "specularConstant",
          "specularExponent",
          "speed",
          "spreadMethod",
          "startOffset",
          "stdDeviation",
          "stemh",
          "stemv",
          "stitchTiles",
          "stopColor",
          "stopOpacity",
          "strikethroughPosition",
          "strikethroughThickness",
          "string",
          "stroke",
          "strokeDasharray",
          "strokeDashoffset",
          "strokeLinecap",
          "strokeLinejoin",
          "strokeMiterlimit",
          "strokeOpacity",
          "strokeWidth",
          "surfaceScale",
          "systemLanguage",
          "tableValues",
          "targetX",
          "targetY",
          "textAnchor",
          "textDecoration",
          "textLength",
          "textRendering",
          "to",
          "transform",
          "u1",
          "u2",
          "underlinePosition",
          "underlineThickness",
          "unicode",
          "unicodeBidi",
          "unicodeRange",
          "unitsPerEm",
          "vAlphabetic",
          "values",
          "vectorEffect",
          "version",
          "vertAdvY",
          "vertOriginX",
          "vertOriginY",
          "vHanging",
          "vIdeographic",
          "viewTarget",
          "visibility",
          "vMathematical",
          "widths",
          "wordSpacing",
          "writingMode",
          "x1",
          "x2",
          "x",
          "xChannelSelector",
          "xHeight",
          "xlinkActuate",
          "xlinkArcrole",
          "xlinkHref",
          "xlinkRole",
          "xlinkShow",
          "xlinkTitle",
          "xlinkType",
          "xmlBase",
          "xmlLang",
          "xmlns",
          "xmlnsXlink",
          "xmlSpace",
          "y1",
          "y2",
          "y",
          "yChannelSelector",
          "z",
          "zoomAndPan",
          "ref",
          "key",
          "angle",
        ],
        a = ["points", "pathLength"],
        o = { svg: ["viewBox", "children"], polygon: a, polyline: a },
        u = [
          "dangerouslySetInnerHTML",
          "onCopy",
          "onCopyCapture",
          "onCut",
          "onCutCapture",
          "onPaste",
          "onPasteCapture",
          "onCompositionEnd",
          "onCompositionEndCapture",
          "onCompositionStart",
          "onCompositionStartCapture",
          "onCompositionUpdate",
          "onCompositionUpdateCapture",
          "onFocus",
          "onFocusCapture",
          "onBlur",
          "onBlurCapture",
          "onChange",
          "onChangeCapture",
          "onBeforeInput",
          "onBeforeInputCapture",
          "onInput",
          "onInputCapture",
          "onReset",
          "onResetCapture",
          "onSubmit",
          "onSubmitCapture",
          "onInvalid",
          "onInvalidCapture",
          "onLoad",
          "onLoadCapture",
          "onError",
          "onErrorCapture",
          "onKeyDown",
          "onKeyDownCapture",
          "onKeyPress",
          "onKeyPressCapture",
          "onKeyUp",
          "onKeyUpCapture",
          "onAbort",
          "onAbortCapture",
          "onCanPlay",
          "onCanPlayCapture",
          "onCanPlayThrough",
          "onCanPlayThroughCapture",
          "onDurationChange",
          "onDurationChangeCapture",
          "onEmptied",
          "onEmptiedCapture",
          "onEncrypted",
          "onEncryptedCapture",
          "onEnded",
          "onEndedCapture",
          "onLoadedData",
          "onLoadedDataCapture",
          "onLoadedMetadata",
          "onLoadedMetadataCapture",
          "onLoadStart",
          "onLoadStartCapture",
          "onPause",
          "onPauseCapture",
          "onPlay",
          "onPlayCapture",
          "onPlaying",
          "onPlayingCapture",
          "onProgress",
          "onProgressCapture",
          "onRateChange",
          "onRateChangeCapture",
          "onSeeked",
          "onSeekedCapture",
          "onSeeking",
          "onSeekingCapture",
          "onStalled",
          "onStalledCapture",
          "onSuspend",
          "onSuspendCapture",
          "onTimeUpdate",
          "onTimeUpdateCapture",
          "onVolumeChange",
          "onVolumeChangeCapture",
          "onWaiting",
          "onWaitingCapture",
          "onAuxClick",
          "onAuxClickCapture",
          "onClick",
          "onClickCapture",
          "onContextMenu",
          "onContextMenuCapture",
          "onDoubleClick",
          "onDoubleClickCapture",
          "onDrag",
          "onDragCapture",
          "onDragEnd",
          "onDragEndCapture",
          "onDragEnter",
          "onDragEnterCapture",
          "onDragExit",
          "onDragExitCapture",
          "onDragLeave",
          "onDragLeaveCapture",
          "onDragOver",
          "onDragOverCapture",
          "onDragStart",
          "onDragStartCapture",
          "onDrop",
          "onDropCapture",
          "onMouseDown",
          "onMouseDownCapture",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseMove",
          "onMouseMoveCapture",
          "onMouseOut",
          "onMouseOutCapture",
          "onMouseOver",
          "onMouseOverCapture",
          "onMouseUp",
          "onMouseUpCapture",
          "onSelect",
          "onSelectCapture",
          "onTouchCancel",
          "onTouchCancelCapture",
          "onTouchEnd",
          "onTouchEndCapture",
          "onTouchMove",
          "onTouchMoveCapture",
          "onTouchStart",
          "onTouchStartCapture",
          "onPointerDown",
          "onPointerDownCapture",
          "onPointerMove",
          "onPointerMoveCapture",
          "onPointerUp",
          "onPointerUpCapture",
          "onPointerCancel",
          "onPointerCancelCapture",
          "onPointerEnter",
          "onPointerEnterCapture",
          "onPointerLeave",
          "onPointerLeaveCapture",
          "onPointerOver",
          "onPointerOverCapture",
          "onPointerOut",
          "onPointerOutCapture",
          "onGotPointerCapture",
          "onGotPointerCaptureCapture",
          "onLostPointerCapture",
          "onLostPointerCaptureCapture",
          "onScroll",
          "onScrollCapture",
          "onWheel",
          "onWheelCapture",
          "onAnimationStart",
          "onAnimationStartCapture",
          "onAnimationEnd",
          "onAnimationEndCapture",
          "onAnimationIteration",
          "onAnimationIterationCapture",
          "onTransitionEnd",
          "onTransitionEndCapture",
        ],
        l = (t, e) => {
          if (!t || "function" == typeof t || "boolean" == typeof t)
            return null;
          var r = t;
          if (
            ((0, n.isValidElement)(t) && (r = t.props),
            "object" != typeof r && "function" != typeof r)
          )
            return null;
          var i = {};
          return (
            Object.keys(r).forEach((t) => {
              u.includes(t) && (i[t] = e || ((e) => r[t](r, e)));
            }),
            i
          );
        },
        c = (t, e, r) => (n) => (t(e, r, n), null),
        s = (t, e, r) => {
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return null;
          var n = null;
          return (
            Object.keys(t).forEach((i) => {
              var a = t[i];
              u.includes(i) &&
                "function" == typeof a &&
                (n || (n = {}), (n[i] = c(a, e, r)));
            }),
            n
          );
        };
    },
    44117: (t, e, r) => {
      "use strict";
      var n = r(44134).Buffer;
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let i = r(98221),
        a = r(15160),
        o = r(42721),
        u = r(36633),
        l = r(80885);
      function c(t, e, r, i = new Map(), f) {
        let h = f?.(t, e, r, i);
        if (null != h) return h;
        if (u.isPrimitive(t)) return t;
        if (i.has(t)) return i.get(t);
        if (Array.isArray(t)) {
          let e = Array(t.length);
          i.set(t, e);
          for (let n = 0; n < t.length; n++) e[n] = c(t[n], n, r, i, f);
          return (
            Object.hasOwn(t, "index") && (e.index = t.index),
            Object.hasOwn(t, "input") && (e.input = t.input),
            e
          );
        }
        if (t instanceof Date) return new Date(t.getTime());
        if (t instanceof RegExp) {
          let e = new RegExp(t.source, t.flags);
          return (e.lastIndex = t.lastIndex), e;
        }
        if (t instanceof Map) {
          let e = new Map();
          for (let [n, a] of (i.set(t, e), t)) e.set(n, c(a, n, r, i, f));
          return e;
        }
        if (t instanceof Set) {
          let e = new Set();
          for (let n of (i.set(t, e), t)) e.add(c(n, void 0, r, i, f));
          return e;
        }
        if (void 0 !== n && n.isBuffer(t)) return t.subarray();
        if (l.isTypedArray(t)) {
          let e = new (Object.getPrototypeOf(t).constructor)(t.length);
          i.set(t, e);
          for (let n = 0; n < t.length; n++) e[n] = c(t[n], n, r, i, f);
          return e;
        }
        if (
          t instanceof ArrayBuffer ||
          ("undefined" != typeof SharedArrayBuffer &&
            t instanceof SharedArrayBuffer)
        )
          return t.slice(0);
        if (t instanceof DataView) {
          let e = new DataView(t.buffer.slice(0), t.byteOffset, t.byteLength);
          return i.set(t, e), s(e, t, r, i, f), e;
        }
        if ("undefined" != typeof File && t instanceof File) {
          let e = new File([t], t.name, { type: t.type });
          return i.set(t, e), s(e, t, r, i, f), e;
        }
        if (t instanceof Blob) {
          let e = new Blob([t], { type: t.type });
          return i.set(t, e), s(e, t, r, i, f), e;
        }
        if (t instanceof Error) {
          let e = new t.constructor();
          return (
            i.set(t, e),
            (e.message = t.message),
            (e.name = t.name),
            (e.stack = t.stack),
            (e.cause = t.cause),
            s(e, t, r, i, f),
            e
          );
        }
        if (
          "object" == typeof t &&
          (function (t) {
            switch (a.getTag(t)) {
              case o.argumentsTag:
              case o.arrayTag:
              case o.arrayBufferTag:
              case o.dataViewTag:
              case o.booleanTag:
              case o.dateTag:
              case o.float32ArrayTag:
              case o.float64ArrayTag:
              case o.int8ArrayTag:
              case o.int16ArrayTag:
              case o.int32ArrayTag:
              case o.mapTag:
              case o.numberTag:
              case o.objectTag:
              case o.regexpTag:
              case o.setTag:
              case o.stringTag:
              case o.symbolTag:
              case o.uint8ArrayTag:
              case o.uint8ClampedArrayTag:
              case o.uint16ArrayTag:
              case o.uint32ArrayTag:
                return !0;
              default:
                return !1;
            }
          })(t)
        ) {
          let e = Object.create(Object.getPrototypeOf(t));
          return i.set(t, e), s(e, t, r, i, f), e;
        }
        return t;
      }
      function s(t, e, r = t, n, a) {
        let o = [...Object.keys(e), ...i.getSymbols(e)];
        for (let i = 0; i < o.length; i++) {
          let u = o[i],
            l = Object.getOwnPropertyDescriptor(t, u);
          (null == l || l.writable) && (t[u] = c(e[u], u, r, n, a));
        }
      }
      (e.cloneDeepWith = function (t, e) {
        return c(t, void 0, t, new Map(), e);
      }),
        (e.cloneDeepWithImpl = c),
        (e.copyProperties = s);
    },
    44538: (t, e, r) => {
      "use strict";
      r.d(e, { M: () => f });
      var n = r(12115),
        i = r(52596),
        a = r(70788),
        o = r(93389),
        u = r(74460);
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (t[n] = r[n]));
              }
              return t;
            }).apply(null, arguments);
      }
      var c = (t, e, r, n, i) => {
          var a,
            o = Math.min(Math.abs(r) / 2, Math.abs(n) / 2),
            u = n >= 0 ? 1 : -1,
            l = r >= 0 ? 1 : -1,
            c = +((n >= 0 && r >= 0) || (n < 0 && r < 0));
          if (o > 0 && i instanceof Array) {
            for (var s = [0, 0, 0, 0], f = 0; f < 4; f++)
              s[f] = i[f] > o ? o : i[f];
            (a = "M".concat(t, ",").concat(e + u * s[0])),
              s[0] > 0 &&
                (a += "A "
                  .concat(s[0], ",")
                  .concat(s[0], ",0,0,")
                  .concat(c, ",")
                  .concat(t + l * s[0], ",")
                  .concat(e)),
              (a += "L ".concat(t + r - l * s[1], ",").concat(e)),
              s[1] > 0 &&
                (a += "A "
                  .concat(s[1], ",")
                  .concat(s[1], ",0,0,")
                  .concat(c, ",\n        ")
                  .concat(t + r, ",")
                  .concat(e + u * s[1])),
              (a += "L ".concat(t + r, ",").concat(e + n - u * s[2])),
              s[2] > 0 &&
                (a += "A "
                  .concat(s[2], ",")
                  .concat(s[2], ",0,0,")
                  .concat(c, ",\n        ")
                  .concat(t + r - l * s[2], ",")
                  .concat(e + n)),
              (a += "L ".concat(t + l * s[3], ",").concat(e + n)),
              s[3] > 0 &&
                (a += "A "
                  .concat(s[3], ",")
                  .concat(s[3], ",0,0,")
                  .concat(c, ",\n        ")
                  .concat(t, ",")
                  .concat(e + n - u * s[3])),
              (a += "Z");
          } else if (o > 0 && i === +i && i > 0) {
            var h = Math.min(o, i);
            a = "M "
              .concat(t, ",")
              .concat(e + u * h, "\n            A ")
              .concat(h, ",")
              .concat(h, ",0,0,")
              .concat(c, ",")
              .concat(t + l * h, ",")
              .concat(e, "\n            L ")
              .concat(t + r - l * h, ",")
              .concat(e, "\n            A ")
              .concat(h, ",")
              .concat(h, ",0,0,")
              .concat(c, ",")
              .concat(t + r, ",")
              .concat(e + u * h, "\n            L ")
              .concat(t + r, ",")
              .concat(e + n - u * h, "\n            A ")
              .concat(h, ",")
              .concat(h, ",0,0,")
              .concat(c, ",")
              .concat(t + r - l * h, ",")
              .concat(e + n, "\n            L ")
              .concat(t + l * h, ",")
              .concat(e + n, "\n            A ")
              .concat(h, ",")
              .concat(h, ",0,0,")
              .concat(c, ",")
              .concat(t, ",")
              .concat(e + n - u * h, " Z");
          } else
            a = "M "
              .concat(t, ",")
              .concat(e, " h ")
              .concat(r, " v ")
              .concat(n, " h ")
              .concat(-r, " Z");
          return a;
        },
        s = {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          radius: 0,
          isAnimationActive: !1,
          isUpdateAnimationActive: !1,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        },
        f = (t) => {
          var e = (0, o.e)(t, s),
            r = (0, n.useRef)(null),
            [f, h] = (0, n.useState)(-1);
          (0, n.useEffect)(() => {
            if (r.current && r.current.getTotalLength)
              try {
                var t = r.current.getTotalLength();
                t && h(t);
              } catch (t) {}
          }, []);
          var { x: d, y: p, width: y, height: v, radius: g, className: m } = e,
            {
              animationEasing: b,
              animationDuration: x,
              animationBegin: w,
              isAnimationActive: O,
              isUpdateAnimationActive: M,
            } = e;
          if (
            d !== +d ||
            p !== +p ||
            y !== +y ||
            v !== +v ||
            0 === y ||
            0 === v
          )
            return null;
          var j = (0, i.$)("recharts-rectangle", m);
          return M
            ? n.createElement(
                u.i,
                {
                  canBegin: f > 0,
                  from: { width: y, height: v, x: d, y: p },
                  to: { width: y, height: v, x: d, y: p },
                  duration: x,
                  animationEasing: b,
                  isActive: M,
                },
                (t) => {
                  var { width: i, height: o, x: s, y: h } = t;
                  return n.createElement(
                    u.i,
                    {
                      canBegin: f > 0,
                      from: "0px ".concat(-1 === f ? 1 : f, "px"),
                      to: "".concat(f, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: w,
                      duration: x,
                      isActive: O,
                      easing: b,
                    },
                    n.createElement(
                      "path",
                      l({}, (0, a.J9)(e, !0), {
                        className: j,
                        d: c(s, h, i, o, g),
                        ref: r,
                      })
                    )
                  );
                }
              )
            : n.createElement(
                "path",
                l({}, (0, a.J9)(e, !0), { className: j, d: c(d, p, y, v, g) })
              );
        };
    },
    45643: (t, e, r) => {
      "use strict";
      t.exports = r(6115);
    },
    46200: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.toKey = function (t) {
          return "string" == typeof t || "symbol" == typeof t
            ? t
            : Object.is(t?.valueOf?.(), -0)
            ? "-0"
            : String(t);
        });
    },
    46605: (t, e, r) => {
      "use strict";
      r.d(e, { P: () => c });
      var n = r(41643);
      function i(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(r), !0).forEach(function (e) {
                var n, i, a;
                (n = t),
                  (i = e),
                  (a = r[e]),
                  (i = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var o = { widthCache: {}, cacheCount: 0 },
        u = {
          position: "absolute",
          top: "-20000px",
          left: 0,
          padding: 0,
          margin: 0,
          border: "none",
          whiteSpace: "pre",
        },
        l = "recharts_measurement_span",
        c = function (t) {
          var e,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          if (null == t || n.m.isSsr) return { width: 0, height: 0 };
          var i =
              (Object.keys((e = a({}, r))).forEach((t) => {
                e[t] || delete e[t];
              }),
              e),
            c = JSON.stringify({ text: t, copyStyle: i });
          if (o.widthCache[c]) return o.widthCache[c];
          try {
            var s = document.getElementById(l);
            s ||
              ((s = document.createElement("span")).setAttribute("id", l),
              s.setAttribute("aria-hidden", "true"),
              document.body.appendChild(s));
            var f = a(a({}, u), i);
            Object.assign(s.style, f), (s.textContent = "".concat(t));
            var h = s.getBoundingClientRect(),
              d = { width: h.width, height: h.height };
            return (
              (o.widthCache[c] = d),
              ++o.cacheCount > 2e3 && ((o.cacheCount = 0), (o.widthCache = {})),
              d
            );
          } catch (t) {
            return { width: 0, height: 0 };
          }
        };
    },
    46641: (t, e, r) => {
      "use strict";
      r.d(e, { dl: () => l, lJ: () => u, uN: () => a });
      var n = r(5710),
        i = r(16377);
      function a(t, e) {
        if (e) {
          var r = Number.parseInt(e, 10);
          if (!(0, i.M8)(r)) return null == t ? void 0 : t[r];
        }
      }
      var o = (0, n.Z0)({
          name: "options",
          initialState: {
            chartName: "",
            tooltipPayloadSearcher: void 0,
            eventEmitter: void 0,
            defaultTooltipEventType: "axis",
          },
          reducers: {
            createEventEmitter: (t) => {
              null == t.eventEmitter &&
                (t.eventEmitter = Symbol("rechartsEventEmitter"));
            },
          },
        }),
        u = o.reducer,
        { createEventEmitter: l } = o.actions;
    },
    46670: (t, e, r) => {
      "use strict";
      r.d(e, { x: () => n });
      var n = (t) => t.options.tooltipPayloadSearcher;
    },
    47062: (t, e, r) => {
      "use strict";
      r.d(e, {
        Be: () => v,
        Cv: () => O,
        D0: () => j,
        Gl: () => g,
        Dc: () => M,
      });
      var n = r(68924),
        i = r(2589),
        a = r(56124),
        o = r(25641),
        u = r(16377),
        l = {
          allowDuplicatedCategory: !0,
          angleAxisId: 0,
          reversed: !1,
          scale: "auto",
          tick: !0,
          type: "category",
        },
        c = {
          allowDataOverflow: !1,
          allowDuplicatedCategory: !0,
          radiusAxisId: 0,
          scale: "auto",
          tick: !0,
          tickCount: 5,
          type: "number",
        },
        s = r(18190),
        f = r(97238),
        h = {
          allowDataOverflow: !1,
          allowDecimals: !1,
          allowDuplicatedCategory: !1,
          dataKey: void 0,
          domain: void 0,
          id: l.angleAxisId,
          includeHidden: !1,
          name: void 0,
          reversed: l.reversed,
          scale: l.scale,
          tick: l.tick,
          tickCount: void 0,
          ticks: void 0,
          type: l.type,
          unit: void 0,
        },
        d = {
          allowDataOverflow: c.allowDataOverflow,
          allowDecimals: !1,
          allowDuplicatedCategory: c.allowDuplicatedCategory,
          dataKey: void 0,
          domain: void 0,
          id: c.radiusAxisId,
          includeHidden: !1,
          name: void 0,
          reversed: !1,
          scale: c.scale,
          tick: c.tick,
          tickCount: c.tickCount,
          ticks: void 0,
          type: c.type,
          unit: void 0,
        },
        p = {
          allowDataOverflow: !1,
          allowDecimals: !1,
          allowDuplicatedCategory: l.allowDuplicatedCategory,
          dataKey: void 0,
          domain: void 0,
          id: l.angleAxisId,
          includeHidden: !1,
          name: void 0,
          reversed: !1,
          scale: l.scale,
          tick: l.tick,
          tickCount: void 0,
          ticks: void 0,
          type: "number",
          unit: void 0,
        },
        y = {
          allowDataOverflow: c.allowDataOverflow,
          allowDecimals: !1,
          allowDuplicatedCategory: c.allowDuplicatedCategory,
          dataKey: void 0,
          domain: void 0,
          id: c.radiusAxisId,
          includeHidden: !1,
          name: void 0,
          reversed: !1,
          scale: c.scale,
          tick: c.tick,
          tickCount: c.tickCount,
          ticks: void 0,
          type: "category",
          unit: void 0,
        },
        v = (t, e) =>
          null != t.polarAxis.angleAxis[e]
            ? t.polarAxis.angleAxis[e]
            : "radial" === t.layout.layoutType
            ? p
            : h,
        g = (t, e) =>
          null != t.polarAxis.radiusAxis[e]
            ? t.polarAxis.radiusAxis[e]
            : "radial" === t.layout.layoutType
            ? y
            : d,
        m = (t) => t.polarOptions,
        b = (0, n.Mz)([i.Lp, i.A$, a.HZ], o.lY),
        x = (0, n.Mz)([m, b], (t, e) => {
          if (null != t) return (0, u.F4)(t.innerRadius, e, 0);
        }),
        w = (0, n.Mz)([m, b], (t, e) => {
          if (null != t) return (0, u.F4)(t.outerRadius, e, 0.8 * e);
        }),
        O = (0, n.Mz)([m], (t) => {
          if (null == t) return [0, 0];
          var { startAngle: e, endAngle: r } = t;
          return [e, r];
        });
      (0, n.Mz)([v, O], s.I);
      var M = (0, n.Mz)([b, x, w], (t, e, r) => {
        if (null != t && null != e && null != r) return [e, r];
      });
      (0, n.Mz)([g, M], s.I);
      var j = (0, n.Mz)([f.fz, m, x, w, i.Lp, i.A$], (t, e, r, n, i, a) => {
        if (
          ("centric" === t || "radial" === t) &&
          null != e &&
          null != r &&
          null != n
        ) {
          var { cx: o, cy: l, startAngle: c, endAngle: s } = e;
          return {
            cx: (0, u.F4)(o, i, i / 2),
            cy: (0, u.F4)(l, a, a / 2),
            innerRadius: r,
            outerRadius: n,
            startAngle: c,
            endAngle: s,
            clockWise: !1,
          };
        }
      });
    },
    47064: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(55181),
        i = r(51551),
        a = r(64072);
      e.orderBy = function (t, e, r, o) {
        if (null == t) return [];
        (r = o ? void 0 : r),
          Array.isArray(t) || (t = Object.values(t)),
          Array.isArray(e) || (e = null == e ? [null] : [e]),
          0 === e.length && (e = [null]),
          Array.isArray(r) || (r = null == r ? [] : [r]),
          (r = r.map((t) => String(t)));
        let u = (t, e) => {
            let r = t;
            for (let t = 0; t < e.length && null != r; ++t) r = r[e[t]];
            return r;
          },
          l = (t, e) =>
            null == e || null == t
              ? e
              : "object" == typeof t && "key" in t
              ? Object.hasOwn(e, t.key)
                ? e[t.key]
                : u(e, t.path)
              : "function" == typeof t
              ? t(e)
              : Array.isArray(t)
              ? u(e, t)
              : "object" == typeof e
              ? e[t]
              : e,
          c = e.map((t) =>
            (Array.isArray(t) && 1 === t.length && (t = t[0]),
            null == t ||
              "function" == typeof t ||
              Array.isArray(t) ||
              i.isKey(t))
              ? t
              : { key: t, path: a.toPath(t) }
          );
        return t
          .map((t) => ({ original: t, criteria: c.map((e) => l(e, t)) }))
          .slice()
          .sort((t, e) => {
            for (let i = 0; i < c.length; i++) {
              let a = n.compareValues(t.criteria[i], e.criteria[i], r[i]);
              if (0 !== a) return a;
            }
            return 0;
          })
          .map((t) => t.original);
      };
    },
    48627: (t, e, r) => {
      "use strict";
      r.d(e, {
        B_: () => i,
        JK: () => a,
        Vp: () => l,
        gX: () => o,
        hF: () => u,
      });
      var n = (0, r(5710).Z0)({
          name: "chartLayout",
          initialState: {
            layoutType: "horizontal",
            width: 0,
            height: 0,
            margin: { top: 5, right: 5, bottom: 5, left: 5 },
            scale: 1,
          },
          reducers: {
            setLayout(t, e) {
              t.layoutType = e.payload;
            },
            setChartSize(t, e) {
              (t.width = e.payload.width), (t.height = e.payload.height);
            },
            setMargin(t, e) {
              (t.margin.top = e.payload.top),
                (t.margin.right = e.payload.right),
                (t.margin.bottom = e.payload.bottom),
                (t.margin.left = e.payload.left);
            },
            setScale(t, e) {
              t.scale = e.payload;
            },
          },
        }),
        {
          setMargin: i,
          setLayout: a,
          setChartSize: o,
          setScale: u,
        } = n.actions,
        l = n.reducer;
    },
    49033: (t, e, r) => {
      "use strict";
      t.exports = r(22436);
    },
    49901: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(64373),
        i = r(64664);
      e.range = function (t, e, r) {
        r &&
          "number" != typeof r &&
          n.isIterateeCall(t, e, r) &&
          (e = r = void 0),
          (t = i.toFinite(t)),
          void 0 === e ? ((e = t), (t = 0)) : (e = i.toFinite(e)),
          (r = void 0 === r ? (t < e ? 1 : -1) : i.toFinite(r));
        let a = Math.max(Math.ceil((e - t) / (r || 1)), 0),
          o = Array(a);
        for (let e = 0; e < a; e++) (o[e] = t), (t += r);
        return o;
      };
    },
    49972: (t, e, r) => {
      "use strict";
      r.d(e, { J: () => th });
      var n = r(12115);
      r(39611);
      var i = Symbol.for("react.forward_ref"),
        a = Symbol.for("react.memo");
      function o(t) {
        return t.dependsOnOwnProps ? !!t.dependsOnOwnProps : 1 !== t.length;
      }
      var u = { notify() {}, get: () => [] },
        l =
          "undefined" != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement,
        c =
          "undefined" != typeof navigator &&
          "ReactNative" === navigator.product,
        s = l || c ? n.useLayoutEffect : n.useEffect;
      function f(t, e) {
        return t === e
          ? 0 !== t || 0 !== e || 1 / t == 1 / e
          : t != t && e != e;
      }
      var h = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        d = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        p = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        y = {
          [i]: {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
          },
          [a]: p,
        };
      function v(t) {
        return (function (t) {
          if ("object" == typeof t && null !== t) {
            let { $$typeof: e } = t;
            switch (e) {
              case null:
                switch ((t = t.type)) {
                  case null:
                  case null:
                  case null:
                  case null:
                  case null:
                    return t;
                  default:
                    switch ((t = t && t.$$typeof)) {
                      case null:
                      case i:
                      case null:
                      case a:
                      case null:
                        return t;
                      default:
                        return e;
                    }
                }
              case null:
                return e;
            }
          }
        })(t) === a
          ? p
          : y[t.$$typeof] || h;
      }
      var g = Object.defineProperty,
        m = Object.getOwnPropertyNames,
        b = Object.getOwnPropertySymbols,
        x = Object.getOwnPropertyDescriptor,
        w = Object.getPrototypeOf,
        O = Object.prototype,
        M = Symbol.for("react-redux-context"),
        j = "undefined" != typeof globalThis ? globalThis : {},
        S = (function () {
          if (!n.createContext) return {};
          let t = (j[M] ??= new Map()),
            e = t.get(n.createContext);
          return (
            e || ((e = n.createContext(null)), t.set(n.createContext, e)), e
          );
        })(),
        _ = function (t) {
          let { children: e, context: r, serverState: i, store: a } = t,
            o = n.useMemo(() => {
              let t = (function (t, e) {
                let r,
                  n = u,
                  i = 0,
                  a = !1;
                function o() {
                  s.onStateChange && s.onStateChange();
                }
                function l() {
                  if ((i++, !r)) {
                    let e, i;
                    (r = t.subscribe(o)),
                      (e = null),
                      (i = null),
                      (n = {
                        clear() {
                          (e = null), (i = null);
                        },
                        notify() {
                          let t = e;
                          for (; t; ) t.callback(), (t = t.next);
                        },
                        get() {
                          let t = [],
                            r = e;
                          for (; r; ) t.push(r), (r = r.next);
                          return t;
                        },
                        subscribe(t) {
                          let r = !0,
                            n = (i = { callback: t, next: null, prev: i });
                          return (
                            n.prev ? (n.prev.next = n) : (e = n),
                            function () {
                              r &&
                                null !== e &&
                                ((r = !1),
                                n.next ? (n.next.prev = n.prev) : (i = n.prev),
                                n.prev ? (n.prev.next = n.next) : (e = n.next));
                            }
                          );
                        },
                      });
                  }
                }
                function c() {
                  i--, r && 0 === i && (r(), (r = void 0), n.clear(), (n = u));
                }
                let s = {
                  addNestedSub: function (t) {
                    l();
                    let e = n.subscribe(t),
                      r = !1;
                    return () => {
                      r || ((r = !0), e(), c());
                    };
                  },
                  notifyNestedSubs: function () {
                    n.notify();
                  },
                  handleChangeWrapper: o,
                  isSubscribed: function () {
                    return a;
                  },
                  trySubscribe: function () {
                    a || ((a = !0), l());
                  },
                  tryUnsubscribe: function () {
                    a && ((a = !1), c());
                  },
                  getListeners: () => n,
                };
                return s;
              })(a);
              return {
                store: a,
                subscription: t,
                getServerState: i ? () => i : void 0,
              };
            }, [a, i]),
            l = n.useMemo(() => a.getState(), [a]);
          return (
            s(() => {
              let { subscription: t } = o;
              return (
                (t.onStateChange = t.notifyNestedSubs),
                t.trySubscribe(),
                l !== a.getState() && t.notifyNestedSubs(),
                () => {
                  t.tryUnsubscribe(), (t.onStateChange = void 0);
                }
              );
            }, [o, l]),
            n.createElement((r || S).Provider, { value: o }, e)
          );
        },
        P = r(52),
        A = r(5710),
        E = r(46641),
        T = r(34890),
        C = r(34487),
        k = r(48627),
        D = r(94685);
      function N(t, e) {
        return e instanceof HTMLElement
          ? "HTMLElement <"
              .concat(e.tagName, ' class="')
              .concat(e.className, '">')
          : e === window
          ? "global.window"
          : e;
      }
      var I = r(55306),
        z = r(22248),
        $ = r(74532),
        L = (0, A.Z0)({
          name: "referenceElements",
          initialState: { dots: [], areas: [], lines: [] },
          reducers: {
            addDot: (t, e) => {
              t.dots.push(e.payload);
            },
            removeDot: (t, e) => {
              var r = (0, $.ss)(t).dots.findIndex((t) => t === e.payload);
              -1 !== r && t.dots.splice(r, 1);
            },
            addArea: (t, e) => {
              t.areas.push(e.payload);
            },
            removeArea: (t, e) => {
              var r = (0, $.ss)(t).areas.findIndex((t) => t === e.payload);
              -1 !== r && t.areas.splice(r, 1);
            },
            addLine: (t, e) => {
              t.lines.push(e.payload);
            },
            removeLine: (t, e) => {
              var r = (0, $.ss)(t).lines.findIndex((t) => t === e.payload);
              -1 !== r && t.lines.splice(r, 1);
            },
          },
        }),
        {
          addDot: U,
          removeDot: R,
          addArea: F,
          removeArea: H,
          addLine: B,
          removeLine: K,
        } = L.actions,
        Z = L.reducer,
        q = {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          padding: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        W = (0, A.Z0)({
          name: "brush",
          initialState: q,
          reducers: {
            setBrushSettings: (t, e) => (null == e.payload ? q : e.payload),
          },
        }),
        { setBrushSettings: G } = W.actions,
        Y = W.reducer,
        V = r(32634),
        X = r(60429),
        J = (0, A.Z0)({
          name: "polarAxis",
          initialState: { radiusAxis: {}, angleAxis: {} },
          reducers: {
            addRadiusAxis(t, e) {
              t.radiusAxis[e.payload.id] = (0, $.h4)(e.payload);
            },
            removeRadiusAxis(t, e) {
              delete t.radiusAxis[e.payload.id];
            },
            addAngleAxis(t, e) {
              t.angleAxis[e.payload.id] = (0, $.h4)(e.payload);
            },
            removeAngleAxis(t, e) {
              delete t.angleAxis[e.payload.id];
            },
          },
        }),
        {
          addRadiusAxis: Q,
          removeRadiusAxis: tt,
          addAngleAxis: te,
          removeAngleAxis: tr,
        } = J.actions,
        tn = J.reducer,
        ti = r(2267),
        ta = r(841),
        to = r(37335),
        tu = r(36144),
        tl = (0, P.HY)({
          brush: Y,
          cartesianAxis: I.CA,
          chartData: C.LV,
          graphicalItems: z.iZ,
          layout: k.Vp,
          legend: V.CU,
          options: E.lJ,
          polarAxis: tn,
          polarOptions: ti.J,
          referenceElements: Z,
          rootProps: X.vE,
          tooltip: T.En,
        }),
        tc = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "Chart";
          return (0, A.U1)({
            reducer: tl,
            preloadedState: t,
            middleware: (t) =>
              t({ serializableCheck: !1 }).concat([
                D.YF.middleware,
                D.fP.middleware,
                ta.$7.middleware,
                to.x.middleware,
                tu.k.middleware,
              ]),
            devTools: {
              serialize: { replacer: N },
              name: "recharts-".concat(e),
            },
          });
        },
        ts = r(71807),
        tf = r(15064);
      function th(t) {
        var { preloadedState: e, children: r, reduxStoreName: i } = t,
          a = (0, ts.r)(),
          o = (0, n.useRef)(null);
        if (a) return r;
        null == o.current && (o.current = tc(e, i));
        var u = tf.E;
        return n.createElement(_, { context: u, store: o.current }, r);
      }
    },
    50177: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(15160);
      e.isArguments = function (t) {
        return (
          null !== t &&
          "object" == typeof t &&
          "[object Arguments]" === n.getTag(t)
        );
      };
    },
    50330: (t, e, r) => {
      "use strict";
      t.exports = r(30294);
    },
    51551: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(8287),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
      e.isKey = function (t, e) {
        return (
          !Array.isArray(t) &&
          (!!(
            "number" == typeof t ||
            "boolean" == typeof t ||
            null == t ||
            n.isSymbol(t)
          ) ||
            ("string" == typeof t && (a.test(t) || !i.test(t))) ||
            (null != e && Object.hasOwn(e, t)))
        );
      };
    },
    55181: (t, e) => {
      "use strict";
      function r(t) {
        return "symbol" == typeof t
          ? 1
          : null === t
          ? 2
          : void 0 === t
          ? 3
          : 4 * (t != t);
      }
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.compareValues = (t, e, n) => {
          if (t !== e) {
            let i = r(t),
              a = r(e);
            if (i === a && 0 === i) {
              if (t < e) return "desc" === n ? 1 : -1;
              if (t > e) return "desc" === n ? -1 : 1;
            }
            return "desc" === n ? a - i : i - a;
          }
          return 0;
        });
    },
    55306: (t, e, r) => {
      "use strict";
      r.d(e, {
        CA: () => y,
        MC: () => c,
        QG: () => p,
        Vi: () => l,
        cU: () => s,
        fR: () => f,
      });
      var n = r(5710),
        i = r(74532);
      function a(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? a(Object(r), !0).forEach(function (e) {
                var n, i, a;
                (n = t),
                  (i = e),
                  (a = r[e]),
                  (i = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var u = (0, n.Z0)({
          name: "cartesianAxis",
          initialState: { xAxis: {}, yAxis: {}, zAxis: {} },
          reducers: {
            addXAxis(t, e) {
              t.xAxis[e.payload.id] = (0, i.h4)(e.payload);
            },
            removeXAxis(t, e) {
              delete t.xAxis[e.payload.id];
            },
            addYAxis(t, e) {
              t.yAxis[e.payload.id] = (0, i.h4)(e.payload);
            },
            removeYAxis(t, e) {
              delete t.yAxis[e.payload.id];
            },
            addZAxis(t, e) {
              t.zAxis[e.payload.id] = (0, i.h4)(e.payload);
            },
            removeZAxis(t, e) {
              delete t.zAxis[e.payload.id];
            },
            updateYAxisWidth(t, e) {
              var { id: r, width: n } = e.payload;
              t.yAxis[r] &&
                (t.yAxis[r] = o(o({}, t.yAxis[r]), {}, { width: n }));
            },
          },
        }),
        {
          addXAxis: l,
          removeXAxis: c,
          addYAxis: s,
          removeYAxis: f,
          addZAxis: h,
          removeZAxis: d,
          updateYAxisWidth: p,
        } = u.actions,
        y = u.reducer;
    },
    55998: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.flatten = function (t, e = 1) {
          let r = [],
            n = Math.floor(e),
            i = (t, e) => {
              for (let a = 0; a < t.length; a++) {
                let o = t[a];
                Array.isArray(o) && e < n ? i(o, e + 1) : r.push(o);
              }
            };
          return i(t, 0), r;
        });
    },
    56091: (t, e, r) => {
      "use strict";
      r.d(e, { r: () => u });
      var n = r(12115),
        i = r(81971),
        a = r(34890),
        o = r(71807);
      function u(t) {
        var { fn: e, args: r } = t,
          u = (0, i.j)(),
          l = (0, o.r)();
        return (
          (0, n.useEffect)(() => {
            if (!l) {
              var t = e(r);
              return (
                u((0, a.Ix)(t)),
                () => {
                  u((0, a.XB)(t));
                }
              );
            }
          }, [e, r, u, l]),
          null
        );
      }
    },
    56124: (t, e, r) => {
      "use strict";
      r.d(e, { Ds: () => p, HZ: () => d, c2: () => y });
      var n = r(68924),
        i = r(95672),
        a = r.n(i),
        o = r(35803),
        u = r(39827),
        l = r(2589),
        c = r(96908),
        s = r(84421);
      function f(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(r), !0).forEach(function (e) {
                var n, i, a;
                (n = t),
                  (i = e),
                  (a = r[e]),
                  (i = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var d = (0, n.Mz)(
          [l.Lp, l.A$, l.HK, (t) => t.brush.height, c.h, c.W, o.ff, o.dc],
          (t, e, r, n, i, o, l, c) => {
            var f = o.reduce(
                (t, e) => {
                  var { orientation: r } = e;
                  if (!e.mirror && !e.hide) {
                    var n = "number" == typeof e.width ? e.width : s.tQ;
                    return h(h({}, t), {}, { [r]: t[r] + n });
                  }
                  return t;
                },
                { left: r.left || 0, right: r.right || 0 }
              ),
              d = i.reduce(
                (t, e) => {
                  var { orientation: r } = e;
                  return e.mirror || e.hide
                    ? t
                    : h(h({}, t), {}, { [r]: a()(t, "".concat(r)) + e.height });
                },
                { top: r.top || 0, bottom: r.bottom || 0 }
              ),
              p = h(h({}, d), f),
              y = p.bottom;
            p.bottom += n;
            var v = t - (p = (0, u.s0)(p, l, c)).left - p.right,
              g = e - p.top - p.bottom;
            return h(
              h({ brushBottom: y }, p),
              {},
              { width: Math.max(v, 0), height: Math.max(g, 0) }
            );
          }
        ),
        p = (0, n.Mz)(d, (t) => ({
          x: t.left,
          y: t.top,
          width: t.width,
          height: t.height,
        })),
        y = (0, n.Mz)(l.Lp, l.A$, (t, e) => ({
          x: 0,
          y: 0,
          width: t,
          height: e,
        }));
    },
    59068: (t, e, r) => {
      "use strict";
      r.d(e, { TK: () => u });
      var n = r(12115),
        i = r(34487),
        a = r(81971),
        o = r(71807),
        u = (t) => {
          var { chartData: e } = t,
            r = (0, a.j)(),
            u = (0, o.r)();
          return (
            (0, n.useEffect)(
              () =>
                u
                  ? () => {}
                  : (r((0, i.hq)(e)),
                    () => {
                      r((0, i.hq)(void 0));
                    }),
              [e, r, u]
            ),
            null
          );
        };
    },
    60356: (t, e, r) => {
      "use strict";
      r.d(e, { HS: () => o, LF: () => i, z3: () => a });
      var n = r(68924),
        i = (t) => t.chartData,
        a = (0, n.Mz)([i], (t) => {
          var e = null != t.chartData ? t.chartData.length - 1 : 0;
          return {
            chartData: t.chartData,
            computedData: t.computedData,
            dataEndIndex: e,
            dataStartIndex: 0,
          };
        }),
        o = (t, e, r, n) => (n ? a(t) : i(t));
    },
    60429: (t, e, r) => {
      "use strict";
      r.d(e, { mZ: () => u, vE: () => o });
      var n = r(5710),
        i = {
          accessibilityLayer: !0,
          barCategoryGap: "10%",
          barGap: 4,
          barSize: void 0,
          className: void 0,
          maxBarSize: void 0,
          stackOffset: "none",
          syncId: void 0,
          syncMethod: "index",
        },
        a = (0, n.Z0)({
          name: "rootProps",
          initialState: i,
          reducers: {
            updateOptions: (t, e) => {
              var r;
              (t.accessibilityLayer = e.payload.accessibilityLayer),
                (t.barCategoryGap = e.payload.barCategoryGap),
                (t.barGap = null != (r = e.payload.barGap) ? r : i.barGap),
                (t.barSize = e.payload.barSize),
                (t.maxBarSize = e.payload.maxBarSize),
                (t.stackOffset = e.payload.stackOffset),
                (t.syncId = e.payload.syncId),
                (t.syncMethod = e.payload.syncMethod),
                (t.className = e.payload.className);
            },
          },
        }),
        o = a.reducer,
        { updateOptions: u } = a.actions;
    },
    60512: (t, e, r) => {
      t.exports = r(7547).uniqBy;
    },
    60530: (t, e, r) => {
      "use strict";
      r.d(e, { E: () => i });
      var n = r(16377),
        i = (t, e) => {
          var r,
            i = Number(e);
          if (!(0, n.M8)(i) && null != e)
            return i >= 0
              ? null == t || null == (r = t[i])
                ? void 0
                : r.value
              : void 0;
        };
    },
    60841: (t, e, r) => {
      "use strict";
      r.d(e, { P: () => i });
      var n = r(78892),
        i = (t, e) => {
          var r = null == t ? void 0 : t.index;
          if (null == r) return null;
          var i = Number(r);
          if (!(0, n.H)(i)) return r;
          var a = Infinity;
          return (
            e.length > 0 && (a = e.length - 1),
            String(Math.max(0, Math.min(i, a)))
          );
        };
    },
    62194: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(10921);
      e.property = function (t) {
        return function (e) {
          return n.get(e, t);
        };
      };
    },
    63027: (t, e, r) => {
      "use strict";
      r.d(e, { g: () => c });
      var n = r(68924),
        i = r(97238),
        a = r(20215),
        o = r(56124),
        u = r(94732),
        l = r(47062),
        c = (0, n.Mz)(
          [(t, e) => e, i.fz, l.D0, a.Re, a.gL, a.R4, u.r1, o.HZ],
          u.aX
        );
    },
    64072: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.toPath = function (t) {
          let e = [],
            r = t.length;
          if (0 === r) return e;
          let n = 0,
            i = "",
            a = "",
            o = !1;
          for (46 === t.charCodeAt(0) && (e.push(""), n++); n < r; ) {
            let u = t[n];
            a
              ? "\\" === u && n + 1 < r
                ? (i += t[++n])
                : u === a
                ? (a = "")
                : (i += u)
              : o
              ? '"' === u || "'" === u
                ? (a = u)
                : "]" === u
                ? ((o = !1), e.push(i), (i = ""))
                : (i += u)
              : "[" === u
              ? ((o = !0), i && (e.push(i), (i = "")))
              : "." === u
              ? i && (e.push(i), (i = ""))
              : (i += u),
              n++;
          }
          return i && e.push(i), e;
        });
    },
    64373: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(98412),
        i = r(68179),
        a = r(82384),
        o = r(83616);
      e.isIterateeCall = function (t, e, r) {
        return (
          !!a.isObject(r) &&
          ((!!("number" == typeof e && i.isArrayLike(r) && n.isIndex(e)) &&
            e < r.length) ||
            ("string" == typeof e && e in r)) &&
          o.eq(r[e], t)
        );
      };
    },
    64664: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(42694);
      e.toFinite = function (t) {
        return t
          ? (t = n.toNumber(t)) === 1 / 0 || t === -1 / 0
            ? (t < 0 ? -1 : 1) * Number.MAX_VALUE
            : t == t
            ? t
            : 0
          : 0 === t
          ? t
          : 0;
      };
    },
    64968: (t, e, r) => {
      "use strict";
      r.d(e, { o: () => n });
      var n = (t, e, r, n, i, a, o, u) => {
        if (null != a && null != u) {
          var l = o[0],
            c = null == l ? void 0 : u(l.positions, a);
          if (null != c) return c;
          var s = null == i ? void 0 : i[Number(a)];
          if (s)
            if ("horizontal" === r)
              return { x: s.coordinate, y: (n.top + e) / 2 };
            else return { x: (n.left + t) / 2, y: s.coordinate };
        }
      };
    },
    66038: (t, e, r) => {
      "use strict";
      r.d(e, { N: () => n });
      var n = (t, e) => e;
    },
    68179: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(19452);
      e.isArrayLike = function (t) {
        return null != t && "function" != typeof t && n.isLength(t.length);
      };
    },
    68234: (t, e, r) => {
      "use strict";
      r.d(e, { EI: () => y, oM: () => p, ZI: () => h, gi: () => d });
      var n = r(14299),
        i = r(81971),
        a = r(71807),
        o = r(20215),
        u = r(68924),
        l = r(56124),
        c = (0, u.Mz)([l.HZ], (t) => {
          if (t)
            return {
              top: t.top,
              bottom: t.bottom,
              left: t.left,
              right: t.right,
            };
        }),
        s = r(2589),
        f = (0, u.Mz)([c, s.Lp, s.A$], (t, e, r) => {
          if (t && null != e && null != r)
            return {
              x: t.left,
              y: t.top,
              width: Math.max(0, e - t.left - t.right),
              height: Math.max(0, r - t.top - t.bottom),
            };
        }),
        h = (t) => {
          var e = (0, a.r)();
          return (0, i.G)((r) => (0, n.Gx)(r, "xAxis", t, e));
        },
        d = (t) => {
          var e = (0, a.r)();
          return (0, i.G)((r) => (0, n.Gx)(r, "yAxis", t, e));
        },
        p = () => (0, i.G)(f),
        y = () => (0, i.G)(o.JG);
    },
    68924: (t, e, r) => {
      "use strict";
      r.d(e, { Mz: () => w });
      var n = (t) => (Array.isArray(t) ? t : [t]),
        i = 0,
        a = null,
        o = class {
          revision = i;
          _value;
          _lastValue;
          _isEqual = u;
          constructor(t, e = u) {
            (this._value = this._lastValue = t), (this._isEqual = e);
          }
          get value() {
            return a?.add(this), this._value;
          }
          set value(t) {
            this.value !== t && ((this._value = t), (this.revision = ++i));
          }
        };
      function u(t, e) {
        return t === e;
      }
      function l(t) {
        return t instanceof o || console.warn("Not a valid cell! ", t), t.value;
      }
      var c = (t, e) => !1;
      function s() {
        return (function (t, e = u) {
          return new o(null, e);
        })(0, c);
      }
      var f = (t) => {
        let e = t.collectionTag;
        null === e && (e = t.collectionTag = s()), l(e);
      };
      Symbol();
      var h = 0,
        d = Object.getPrototypeOf({}),
        p = class {
          constructor(t) {
            (this.value = t), (this.value = t), (this.tag.value = t);
          }
          proxy = new Proxy(this, y);
          tag = s();
          tags = {};
          children = {};
          collectionTag = null;
          id = h++;
        },
        y = {
          get: (t, e) =>
            (function () {
              let { value: r } = t,
                n = Reflect.get(r, e);
              if ("symbol" == typeof e || e in d) return n;
              if ("object" == typeof n && null !== n) {
                let r = t.children[e];
                return (
                  void 0 === r &&
                    (r = t.children[e] =
                      (function (t) {
                        return Array.isArray(t) ? new v(t) : new p(t);
                      })(n)),
                  r.tag && l(r.tag),
                  r.proxy
                );
              }
              {
                let r = t.tags[e];
                return (
                  void 0 === r && ((r = t.tags[e] = s()).value = n), l(r), n
                );
              }
            })(),
          ownKeys: (t) => (f(t), Reflect.ownKeys(t.value)),
          getOwnPropertyDescriptor: (t, e) =>
            Reflect.getOwnPropertyDescriptor(t.value, e),
          has: (t, e) => Reflect.has(t.value, e),
        },
        v = class {
          constructor(t) {
            (this.value = t), (this.value = t), (this.tag.value = t);
          }
          proxy = new Proxy([this], g);
          tag = s();
          tags = {};
          children = {};
          collectionTag = null;
          id = h++;
        },
        g = {
          get: ([t], e) => ("length" === e && f(t), y.get(t, e)),
          ownKeys: ([t]) => y.ownKeys(t),
          getOwnPropertyDescriptor: ([t], e) =>
            y.getOwnPropertyDescriptor(t, e),
          has: ([t], e) => y.has(t, e),
        },
        m =
          "undefined" != typeof WeakRef
            ? WeakRef
            : class {
                constructor(t) {
                  this.value = t;
                }
                deref() {
                  return this.value;
                }
              };
      function b() {
        return { s: 0, v: void 0, o: null, p: null };
      }
      function x(t, e = {}) {
        let r,
          n = b(),
          { resultEqualityCheck: i } = e,
          a = 0;
        function o() {
          let e,
            o = n,
            { length: u } = arguments;
          for (let t = 0; t < u; t++) {
            let e = arguments[t];
            if (
              "function" == typeof e ||
              ("object" == typeof e && null !== e)
            ) {
              let t = o.o;
              null === t && (o.o = t = new WeakMap());
              let r = t.get(e);
              void 0 === r ? ((o = b()), t.set(e, o)) : (o = r);
            } else {
              let t = o.p;
              null === t && (o.p = t = new Map());
              let r = t.get(e);
              void 0 === r ? ((o = b()), t.set(e, o)) : (o = r);
            }
          }
          let l = o;
          if (1 === o.s) e = o.v;
          else if (((e = t.apply(null, arguments)), a++, i)) {
            let t = r?.deref?.() ?? r;
            null != t && i(t, e) && ((e = t), 0 !== a && a--),
              (r =
                ("object" == typeof e && null !== e) || "function" == typeof e
                  ? new m(e)
                  : e);
          }
          return (l.s = 1), (l.v = e), e;
        }
        return (
          (o.clearCache = () => {
            (n = b()), o.resetResultsCount();
          }),
          (o.resultsCount = () => a),
          (o.resetResultsCount = () => {
            a = 0;
          }),
          o
        );
      }
      var w = (function (t, ...e) {
          let r =
              "function" == typeof t ? { memoize: t, memoizeOptions: e } : t,
            i = (...t) => {
              let e,
                i = 0,
                a = 0,
                o = {},
                u = t.pop();
              "object" == typeof u && ((o = u), (u = t.pop())),
                (function (
                  t,
                  e = `expected a function, instead received ${typeof t}`
                ) {
                  if ("function" != typeof t) throw TypeError(e);
                })(
                  u,
                  `createSelector expects an output function after the inputs, but received: [${typeof u}]`
                );
              let {
                  memoize: l,
                  memoizeOptions: c = [],
                  argsMemoize: s = x,
                  argsMemoizeOptions: f = [],
                  devModeChecks: h = {},
                } = { ...r, ...o },
                d = n(c),
                p = n(f),
                y = (function (t) {
                  let e = Array.isArray(t[0]) ? t[0] : t;
                  return (
                    !(function (
                      t,
                      e = "expected all items to be functions, instead received the following types: "
                    ) {
                      if (!t.every((t) => "function" == typeof t)) {
                        let r = t
                          .map((t) =>
                            "function" == typeof t
                              ? `function ${t.name || "unnamed"}()`
                              : typeof t
                          )
                          .join(", ");
                        throw TypeError(`${e}[${r}]`);
                      }
                    })(
                      e,
                      "createSelector expects all input-selectors to be functions, but received the following types: "
                    ),
                    e
                  );
                })(t),
                v = l(function () {
                  return i++, u.apply(null, arguments);
                }, ...d);
              return Object.assign(
                s(function () {
                  a++;
                  let t = (function (t, e) {
                    let r = [],
                      { length: n } = t;
                    for (let i = 0; i < n; i++) r.push(t[i].apply(null, e));
                    return r;
                  })(y, arguments);
                  return (e = v.apply(null, t));
                }, ...p),
                {
                  resultFunc: u,
                  memoizedResultFunc: v,
                  dependencies: y,
                  dependencyRecomputations: () => a,
                  resetDependencyRecomputations: () => {
                    a = 0;
                  },
                  lastResult: () => e,
                  recomputations: () => i,
                  resetRecomputations: () => {
                    i = 0;
                  },
                  memoize: l,
                  argsMemoize: s,
                }
              );
            };
          return Object.assign(i, { withTypes: () => i }), i;
        })(x),
        O = Object.assign(
          (t, e = w) => {
            !(function (
              t,
              e = `expected an object, instead received ${typeof t}`
            ) {
              if ("object" != typeof t) throw TypeError(e);
            })(
              t,
              `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`
            );
            let r = Object.keys(t);
            return e(
              r.map((e) => t[e]),
              (...t) => t.reduce((t, e, n) => ((t[r[n]] = e), t), {})
            );
          },
          { withTypes: () => O }
        );
    },
    70688: (t, e, r) => {
      "use strict";
      r.d(e, { I: () => B });
      var n = r(12115);
      function i() {}
      function a(t, e, r) {
        t._context.bezierCurveTo(
          (2 * t._x0 + t._x1) / 3,
          (2 * t._y0 + t._y1) / 3,
          (t._x0 + 2 * t._x1) / 3,
          (t._y0 + 2 * t._y1) / 3,
          (t._x0 + 4 * t._x1 + e) / 6,
          (t._y0 + 4 * t._y1 + r) / 6
        );
      }
      function o(t) {
        this._context = t;
      }
      function u(t) {
        this._context = t;
      }
      function l(t) {
        this._context = t;
      }
      (o.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              a(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, e) {
          switch (((t *= 1), (e *= 1), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._context.lineTo(
                  (5 * this._x0 + this._x1) / 6,
                  (5 * this._y0 + this._y1) / 6
                );
            default:
              a(this, t, e);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e);
        },
      }),
        (u.prototype = {
          areaStart: i,
          areaEnd: i,
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._x3 =
              this._x4 =
              this._y0 =
              this._y1 =
              this._y2 =
              this._y3 =
              this._y4 =
                NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 1:
                this._context.moveTo(this._x2, this._y2),
                  this._context.closePath();
                break;
              case 2:
                this._context.moveTo(
                  (this._x2 + 2 * this._x3) / 3,
                  (this._y2 + 2 * this._y3) / 3
                ),
                  this._context.lineTo(
                    (this._x3 + 2 * this._x2) / 3,
                    (this._y3 + 2 * this._y2) / 3
                  ),
                  this._context.closePath();
                break;
              case 3:
                this.point(this._x2, this._y2),
                  this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4);
            }
          },
          point: function (t, e) {
            switch (((t *= 1), (e *= 1), this._point)) {
              case 0:
                (this._point = 1), (this._x2 = t), (this._y2 = e);
                break;
              case 1:
                (this._point = 2), (this._x3 = t), (this._y3 = e);
                break;
              case 2:
                (this._point = 3),
                  (this._x4 = t),
                  (this._y4 = e),
                  this._context.moveTo(
                    (this._x0 + 4 * this._x1 + t) / 6,
                    (this._y0 + 4 * this._y1 + e) / 6
                  );
                break;
              default:
                a(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = e);
          },
        }),
        (l.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 3 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            switch (((t *= 1), (e *= 1), this._point)) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
                var r = (this._x0 + 4 * this._x1 + t) / 6,
                  n = (this._y0 + 4 * this._y1 + e) / 6;
                this._line
                  ? this._context.lineTo(r, n)
                  : this._context.moveTo(r, n);
                break;
              case 3:
                this._point = 4;
              default:
                a(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = e);
          },
        });
      class c {
        constructor(t, e) {
          (this._context = t), (this._x = e);
        }
        areaStart() {
          this._line = 0;
        }
        areaEnd() {
          this._line = NaN;
        }
        lineStart() {
          this._point = 0;
        }
        lineEnd() {
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        }
        point(t, e) {
          switch (((t *= 1), (e *= 1), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
            default:
              this._x
                ? this._context.bezierCurveTo(
                    (this._x0 = (this._x0 + t) / 2),
                    this._y0,
                    this._x0,
                    e,
                    t,
                    e
                  )
                : this._context.bezierCurveTo(
                    this._x0,
                    (this._y0 = (this._y0 + e) / 2),
                    t,
                    this._y0,
                    t,
                    e
                  );
          }
          (this._x0 = t), (this._y0 = e);
        }
      }
      function s(t) {
        this._context = t;
      }
      function f(t) {
        this._context = t;
      }
      function h(t) {
        return new f(t);
      }
      s.prototype = {
        areaStart: i,
        areaEnd: i,
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          this._point && this._context.closePath();
        },
        point: function (t, e) {
          (t *= 1),
            (e *= 1),
            this._point
              ? this._context.lineTo(t, e)
              : ((this._point = 1), this._context.moveTo(t, e));
        },
      };
      function d(t, e, r) {
        var n = t._x1 - t._x0,
          i = e - t._x1,
          a = (t._y1 - t._y0) / (n || (i < 0 && -0)),
          o = (r - t._y1) / (i || (n < 0 && -0));
        return (
          ((a < 0 ? -1 : 1) + (o < 0 ? -1 : 1)) *
            Math.min(
              Math.abs(a),
              Math.abs(o),
              0.5 * Math.abs((a * i + o * n) / (n + i))
            ) || 0
        );
      }
      function p(t, e) {
        var r = t._x1 - t._x0;
        return r ? ((3 * (t._y1 - t._y0)) / r - e) / 2 : e;
      }
      function y(t, e, r) {
        var n = t._x0,
          i = t._y0,
          a = t._x1,
          o = t._y1,
          u = (a - n) / 3;
        t._context.bezierCurveTo(n + u, i + u * e, a - u, o - u * r, a, o);
      }
      function v(t) {
        this._context = t;
      }
      function g(t) {
        this._context = new m(t);
      }
      function m(t) {
        this._context = t;
      }
      function b(t) {
        this._context = t;
      }
      function x(t) {
        var e,
          r,
          n = t.length - 1,
          i = Array(n),
          a = Array(n),
          o = Array(n);
        for (i[0] = 0, a[0] = 2, o[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e)
          (i[e] = 1), (a[e] = 4), (o[e] = 4 * t[e] + 2 * t[e + 1]);
        for (
          i[n - 1] = 2, a[n - 1] = 7, o[n - 1] = 8 * t[n - 1] + t[n], e = 1;
          e < n;
          ++e
        )
          (r = i[e] / a[e - 1]), (a[e] -= r), (o[e] -= r * o[e - 1]);
        for (i[n - 1] = o[n - 1] / a[n - 1], e = n - 2; e >= 0; --e)
          i[e] = (o[e] - i[e + 1]) / a[e];
        for (e = 0, a[n - 1] = (t[n] + i[n - 1]) / 2; e < n - 1; ++e)
          a[e] = 2 * t[e + 1] - i[e + 1];
        return [i, a];
      }
      function w(t, e) {
        (this._context = t), (this._t = e);
      }
      (f.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, e) {
          switch (((t *= 1), (e *= 1), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
            default:
              this._context.lineTo(t, e);
          }
        },
      }),
        (v.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
              case 3:
                y(this, this._t0, p(this, this._t0));
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            var r = NaN;
            if (((e *= 1), (t *= 1) !== this._x1 || e !== this._y1)) {
              switch (this._point) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, e)
                      : this._context.moveTo(t, e);
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3), y(this, p(this, (r = d(this, t, e))), r);
                  break;
                default:
                  y(this, this._t0, (r = d(this, t, e)));
              }
              (this._x0 = this._x1),
                (this._x1 = t),
                (this._y0 = this._y1),
                (this._y1 = e),
                (this._t0 = r);
            }
          },
        }),
        ((g.prototype = Object.create(v.prototype)).point = function (t, e) {
          v.prototype.point.call(this, e, t);
        }),
        (m.prototype = {
          moveTo: function (t, e) {
            this._context.moveTo(e, t);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (t, e) {
            this._context.lineTo(e, t);
          },
          bezierCurveTo: function (t, e, r, n, i, a) {
            this._context.bezierCurveTo(e, t, n, r, a, i);
          },
        }),
        (b.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = []), (this._y = []);
          },
          lineEnd: function () {
            var t = this._x,
              e = this._y,
              r = t.length;
            if (r)
              if (
                (this._line
                  ? this._context.lineTo(t[0], e[0])
                  : this._context.moveTo(t[0], e[0]),
                2 === r)
              )
                this._context.lineTo(t[1], e[1]);
              else
                for (var n = x(t), i = x(e), a = 0, o = 1; o < r; ++a, ++o)
                  this._context.bezierCurveTo(
                    n[0][a],
                    i[0][a],
                    n[1][a],
                    i[1][a],
                    t[o],
                    e[o]
                  );
            (this._line || (0 !== this._line && 1 === r)) &&
              this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null);
          },
          point: function (t, e) {
            this._x.push(+t), this._y.push(+e);
          },
        }),
        (w.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = this._y = NaN), (this._point = 0);
          },
          lineEnd: function () {
            0 < this._t &&
              this._t < 1 &&
              2 === this._point &&
              this._context.lineTo(this._x, this._y),
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
              this._line >= 0 &&
                ((this._t = 1 - this._t), (this._line = 1 - this._line));
          },
          point: function (t, e) {
            switch (((t *= 1), (e *= 1), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, e)
                    : this._context.moveTo(t, e);
                break;
              case 1:
                this._point = 2;
              default:
                if (this._t <= 0)
                  this._context.lineTo(this._x, e), this._context.lineTo(t, e);
                else {
                  var r = this._x * (1 - this._t) + t * this._t;
                  this._context.lineTo(r, this._y), this._context.lineTo(r, e);
                }
            }
            (this._x = t), (this._y = e);
          },
        });
      var O = r(9819),
        M = r(85654),
        j = r(31847);
      function S(t) {
        return t[0];
      }
      function _(t) {
        return t[1];
      }
      function P(t, e) {
        var r = (0, M.A)(!0),
          n = null,
          i = h,
          a = null,
          o = (0, j.i)(u);
        function u(u) {
          var l,
            c,
            s,
            f = (u = (0, O.A)(u)).length,
            h = !1;
          for (null == n && (a = i((s = o()))), l = 0; l <= f; ++l)
            !(l < f && r((c = u[l]), l, u)) === h &&
              ((h = !h) ? a.lineStart() : a.lineEnd()),
              h && a.point(+t(c, l, u), +e(c, l, u));
          if (s) return (a = null), s + "" || null;
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? S : (0, M.A)(t)),
          (e = "function" == typeof e ? e : void 0 === e ? _ : (0, M.A)(e)),
          (u.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, M.A)(+e)), u)
              : t;
          }),
          (u.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, M.A)(+t)), u)
              : e;
          }),
          (u.defined = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : (0, M.A)(!!t)), u)
              : r;
          }),
          (u.curve = function (t) {
            return arguments.length ? ((i = t), null != n && (a = i(n)), u) : i;
          }),
          (u.context = function (t) {
            return arguments.length
              ? (null == t ? (n = a = null) : (a = i((n = t))), u)
              : n;
          }),
          u
        );
      }
      function A(t, e, r) {
        var n = null,
          i = (0, M.A)(!0),
          a = null,
          o = h,
          u = null,
          l = (0, j.i)(c);
        function c(c) {
          var s,
            f,
            h,
            d,
            p,
            y = (c = (0, O.A)(c)).length,
            v = !1,
            g = Array(y),
            m = Array(y);
          for (null == a && (u = o((p = l()))), s = 0; s <= y; ++s) {
            if (!(s < y && i((d = c[s]), s, c)) === v)
              if ((v = !v)) (f = s), u.areaStart(), u.lineStart();
              else {
                for (u.lineEnd(), u.lineStart(), h = s - 1; h >= f; --h)
                  u.point(g[h], m[h]);
                u.lineEnd(), u.areaEnd();
              }
            v &&
              ((g[s] = +t(d, s, c)),
              (m[s] = +e(d, s, c)),
              u.point(n ? +n(d, s, c) : g[s], r ? +r(d, s, c) : m[s]));
          }
          if (p) return (u = null), p + "" || null;
        }
        function s() {
          return P().defined(i).curve(o).context(a);
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? S : (0, M.A)(+t)),
          (e =
            "function" == typeof e
              ? e
              : void 0 === e
              ? (0, M.A)(0)
              : (0, M.A)(+e)),
          (r = "function" == typeof r ? r : void 0 === r ? _ : (0, M.A)(+r)),
          (c.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, M.A)(+e)), (n = null), c)
              : t;
          }),
          (c.x0 = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, M.A)(+e)), c)
              : t;
          }),
          (c.x1 = function (t) {
            return arguments.length
              ? ((n =
                  null == t ? null : "function" == typeof t ? t : (0, M.A)(+t)),
                c)
              : n;
          }),
          (c.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, M.A)(+t)), (r = null), c)
              : e;
          }),
          (c.y0 = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, M.A)(+t)), c)
              : e;
          }),
          (c.y1 = function (t) {
            return arguments.length
              ? ((r =
                  null == t ? null : "function" == typeof t ? t : (0, M.A)(+t)),
                c)
              : r;
          }),
          (c.lineX0 = c.lineY0 =
            function () {
              return s().x(t).y(e);
            }),
          (c.lineY1 = function () {
            return s().x(t).y(r);
          }),
          (c.lineX1 = function () {
            return s().x(n).y(e);
          }),
          (c.defined = function (t) {
            return arguments.length
              ? ((i = "function" == typeof t ? t : (0, M.A)(!!t)), c)
              : i;
          }),
          (c.curve = function (t) {
            return arguments.length ? ((o = t), null != a && (u = o(a)), c) : o;
          }),
          (c.context = function (t) {
            return arguments.length
              ? (null == t ? (a = u = null) : (u = o((a = t))), c)
              : a;
          }),
          c
        );
      }
      var E = r(52596),
        T = r(43597),
        C = r(70788),
        k = r(16377),
        D = r(78892);
      function N() {
        return (N = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (t[n] = r[n]));
              }
              return t;
            }).apply(null, arguments);
      }
      function I(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function z(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? I(Object(r), !0).forEach(function (e) {
                var n, i, a;
                (n = t),
                  (i = e),
                  (a = r[e]),
                  (i = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : I(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var $ = {
          curveBasisClosed: function (t) {
            return new u(t);
          },
          curveBasisOpen: function (t) {
            return new l(t);
          },
          curveBasis: function (t) {
            return new o(t);
          },
          curveBumpX: function (t) {
            return new c(t, !0);
          },
          curveBumpY: function (t) {
            return new c(t, !1);
          },
          curveLinearClosed: function (t) {
            return new s(t);
          },
          curveLinear: h,
          curveMonotoneX: function (t) {
            return new v(t);
          },
          curveMonotoneY: function (t) {
            return new g(t);
          },
          curveNatural: function (t) {
            return new b(t);
          },
          curveStep: function (t) {
            return new w(t, 0.5);
          },
          curveStepAfter: function (t) {
            return new w(t, 1);
          },
          curveStepBefore: function (t) {
            return new w(t, 0);
          },
        },
        L = (t) => (0, D.H)(t.x) && (0, D.H)(t.y),
        U = (t) => t.x,
        R = (t) => t.y,
        F = (t, e) => {
          if ("function" == typeof t) return t;
          var r = "curve".concat((0, k.Zb)(t));
          return ("curveMonotone" === r || "curveBump" === r) && e
            ? $["".concat(r).concat("vertical" === e ? "Y" : "X")]
            : $[r] || h;
        },
        H = (t) => {
          var e,
            {
              type: r = "linear",
              points: n = [],
              baseLine: i,
              layout: a,
              connectNulls: o = !1,
            } = t,
            u = F(r, a),
            l = o ? n.filter(L) : n;
          if (Array.isArray(i)) {
            var c = o ? i.filter((t) => L(t)) : i,
              s = l.map((t, e) => z(z({}, t), {}, { base: c[e] }));
            return (
              (e =
                "vertical" === a
                  ? A()
                      .y(R)
                      .x1(U)
                      .x0((t) => t.base.x)
                  : A()
                      .x(U)
                      .y1(R)
                      .y0((t) => t.base.y))
                .defined(L)
                .curve(u),
              e(s)
            );
          }
          return (
            (e =
              "vertical" === a && (0, k.Et)(i)
                ? A().y(R).x1(U).x0(i)
                : (0, k.Et)(i)
                ? A().x(U).y1(R).y0(i)
                : P().x(U).y(R))
              .defined(L)
              .curve(u),
            e(l)
          );
        },
        B = (t) => {
          var { className: e, points: r, path: i, pathRef: a } = t;
          if ((!r || !r.length) && !i) return null;
          var o = r && r.length ? H(t) : i;
          return n.createElement(
            "path",
            N({}, (0, C.J9)(t, !1), (0, T._U)(t), {
              className: (0, E.$)("recharts-curve", e),
              d: null === o ? void 0 : o,
              ref: a,
            })
          );
        };
    },
    70788: (t, e, r) => {
      "use strict";
      r.d(e, { J9: () => v, aS: () => d, y$: () => p });
      var n = r(95672),
        i = r.n(n),
        a = r(12115),
        o = r(50330),
        u = r(16377),
        l = r(43597),
        c = (t) =>
          "string" == typeof t
            ? t
            : t
            ? t.displayName || t.name || "Component"
            : "",
        s = null,
        f = null,
        h = (t) => {
          if (t === s && Array.isArray(f)) return f;
          var e = [];
          return (
            a.Children.forEach(t, (t) => {
              (0, u.uy)(t) ||
                ((0, o.isFragment)(t)
                  ? (e = e.concat(h(t.props.children)))
                  : e.push(t));
            }),
            (f = e),
            (s = t),
            e
          );
        };
      function d(t, e) {
        var r = [],
          n = [];
        return (
          (n = Array.isArray(e) ? e.map((t) => c(t)) : [c(e)]),
          h(t).forEach((t) => {
            var e = i()(t, "type.displayName") || i()(t, "type.name");
            -1 !== n.indexOf(e) && r.push(t);
          }),
          r
        );
      }
      var p = (t) =>
          !t || "object" != typeof t || !("clipDot" in t) || !!t.clipDot,
        y = (t, e, r, n) => {
          var i,
            a =
              null !=
              (i = n && (null === l.VU || void 0 === l.VU ? void 0 : l.VU[n]))
                ? i
                : [];
          return (
            e.startsWith("data-") ||
            ("function" != typeof t &&
              ((n && a.includes(e)) || l.QQ.includes(e))) ||
            (r && l.j2.includes(e))
          );
        },
        v = (t, e, r) => {
          if (!t || "function" == typeof t || "boolean" == typeof t)
            return null;
          var n = t;
          if (
            ((0, a.isValidElement)(t) && (n = t.props),
            "object" != typeof n && "function" != typeof n)
          )
            return null;
          var i = {};
          return (
            Object.keys(n).forEach((t) => {
              var a;
              y(null == (a = n) ? void 0 : a[t], t, e, r) && (i[t] = n[t]);
            }),
            i
          );
        };
    },
    71807: (t, e, r) => {
      "use strict";
      r.d(e, { r: () => a });
      var n = r(12115),
        i = (0, n.createContext)(null),
        a = () => null != (0, n.useContext)(i);
    },
    72465: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.identity = function (t) {
          return t;
        });
    },
    72744: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(98132),
        i = r(82384),
        a = r(36633),
        o = r(83616);
      function u(t, e, r, n) {
        if (e === t) return !0;
        switch (typeof e) {
          case "object":
            return (function (t, e, r, n) {
              if (null == e) return !0;
              if (Array.isArray(e)) return l(t, e, r, n);
              if (e instanceof Map) {
                var i = t,
                  o = e,
                  u = r,
                  s = n;
                if (0 === o.size) return !0;
                if (!(i instanceof Map)) return !1;
                for (let [t, e] of o.entries())
                  if (!1 === u(i.get(t), e, t, i, o, s)) return !1;
                return !0;
              }
              if (e instanceof Set) return c(t, e, r, n);
              let f = Object.keys(e);
              if (null == t) return 0 === f.length;
              if (0 === f.length) return !0;
              if (n && n.has(e)) return n.get(e) === t;
              n && n.set(e, t);
              try {
                for (let i = 0; i < f.length; i++) {
                  let o = f[i];
                  if (
                    (!a.isPrimitive(t) && !(o in t)) ||
                    (void 0 === e[o] && void 0 !== t[o]) ||
                    (null === e[o] && null !== t[o]) ||
                    !r(t[o], e[o], o, t, e, n)
                  )
                    return !1;
                }
                return !0;
              } finally {
                n && n.delete(e);
              }
            })(t, e, r, n);
          case "function":
            if (Object.keys(e).length > 0) return u(t, { ...e }, r, n);
            return o.eq(t, e);
          default:
            if (!i.isObject(t)) return o.eq(t, e);
            if ("string" == typeof e) return "" === e;
            return !0;
        }
      }
      function l(t, e, r, n) {
        if (0 === e.length) return !0;
        if (!Array.isArray(t)) return !1;
        let i = new Set();
        for (let a = 0; a < e.length; a++) {
          let o = e[a],
            u = !1;
          for (let l = 0; l < t.length; l++) {
            if (i.has(l)) continue;
            let c = t[l],
              s = !1;
            if ((r(c, o, a, t, e, n) && (s = !0), s)) {
              i.add(l), (u = !0);
              break;
            }
          }
          if (!u) return !1;
        }
        return !0;
      }
      function c(t, e, r, n) {
        return 0 === e.size || (t instanceof Set && l([...t], [...e], r, n));
      }
      (e.isMatchWith = function (t, e, r) {
        return "function" != typeof r
          ? n.isMatch(t, e)
          : u(
              t,
              e,
              function t(e, n, i, a, o, l) {
                let c = r(e, n, i, a, o, l);
                return void 0 !== c ? !!c : u(e, n, t, l);
              },
              new Map()
            );
      }),
        (e.isSetMatch = c);
    },
    72790: (t, e, r) => {
      "use strict";
      r.d(e, { u: () => l });
      var n = r(12115),
        i = r(52596),
        a = r(70788),
        o = [
          "children",
          "width",
          "height",
          "viewBox",
          "className",
          "style",
          "title",
          "desc",
        ];
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (t[n] = r[n]));
              }
              return t;
            }).apply(null, arguments);
      }
      var l = (0, n.forwardRef)((t, e) => {
        var {
            children: r,
            width: l,
            height: c,
            viewBox: s,
            className: f,
            style: h,
            title: d,
            desc: p,
          } = t,
          y = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = (function (t, e) {
                if (null == t) return {};
                var r = {};
                for (var n in t)
                  if ({}.hasOwnProperty.call(t, n)) {
                    if (-1 !== e.indexOf(n)) continue;
                    r[n] = t[n];
                  }
                return r;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(t);
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  -1 === e.indexOf(r) &&
                    {}.propertyIsEnumerable.call(t, r) &&
                    (i[r] = t[r]);
            }
            return i;
          })(t, o),
          v = s || { width: l, height: c, x: 0, y: 0 },
          g = (0, i.$)("recharts-surface", f);
        return n.createElement(
          "svg",
          u({}, (0, a.J9)(y, !0, "svg"), {
            className: g,
            width: l,
            height: c,
            style: h,
            viewBox: ""
              .concat(v.x, " ")
              .concat(v.y, " ")
              .concat(v.width, " ")
              .concat(v.height),
            ref: e,
          }),
          n.createElement("title", null, d),
          n.createElement("desc", null, p),
          r
        );
      });
    },
    73433: (t, e, r) => {
      "use strict";
      r.d(e, { p: () => o });
      var n = r(12115),
        i = r(60429),
        a = r(81971);
      function o(t) {
        var e = (0, a.j)();
        return (
          (0, n.useEffect)(() => {
            e((0, i.mZ)(t));
          }, [e, t]),
          null
        );
      }
    },
    74460: (t, e, r) => {
      "use strict";
      r.d(e, { i: () => D });
      var n = r(12115),
        i = r(22188),
        a = r.n(i),
        o = (t, e) => [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1],
        u = (t, e) => t.map((t, r) => t * e ** r).reduce((t, e) => t + e),
        l = (t, e) => (r) => u(o(t, e), r),
        c = (t, e) => (r) =>
          u(
            [
              ...o(t, e)
                .map((t, e) => t * e)
                .slice(1),
              0,
            ],
            r
          ),
        s = function () {
          for (
            var t, e, r, n, i = arguments.length, a = Array(i), o = 0;
            o < i;
            o++
          )
            a[o] = arguments[o];
          if (1 === a.length)
            switch (a[0]) {
              case "linear":
                [t, r, e, n] = [0, 0, 1, 1];
                break;
              case "ease":
                [t, r, e, n] = [0.25, 0.1, 0.25, 1];
                break;
              case "ease-in":
                [t, r, e, n] = [0.42, 0, 1, 1];
                break;
              case "ease-out":
                [t, r, e, n] = [0.42, 0, 0.58, 1];
                break;
              case "ease-in-out":
                [t, r, e, n] = [0, 0, 0.58, 1];
                break;
              default:
                var u = a[0].split("(");
                "cubic-bezier" === u[0] &&
                  4 === u[1].split(")")[0].split(",").length &&
                  ([t, r, e, n] = u[1]
                    .split(")")[0]
                    .split(",")
                    .map((t) => parseFloat(t)));
            }
          else 4 === a.length && ([t, r, e, n] = a);
          var s = l(t, e),
            f = l(r, n),
            h = c(t, e),
            d = (t) => (t > 1 ? 1 : t < 0 ? 0 : t),
            p = (t) => {
              for (var e = t > 1 ? 1 : t, r = e, n = 0; n < 8; ++n) {
                var i = s(r) - e,
                  a = h(r);
                if (1e-4 > Math.abs(i - e) || a < 1e-4) break;
                r = d(r - i / a);
              }
              return f(r);
            };
          return (p.isStepper = !1), p;
        },
        f = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            { stiff: e = 100, damping: r = 8, dt: n = 17 } = t,
            i = (t, i, a) => {
              var o = a + ((-(t - i) * e - a * r) * n) / 1e3,
                u = (a * n) / 1e3 + t;
              return 1e-4 > Math.abs(u - i) && 1e-4 > Math.abs(o)
                ? [i, 0]
                : [u, o];
            };
          return (i.isStepper = !0), (i.dt = n), i;
        },
        h = (t) => {
          if ("string" == typeof t)
            switch (t) {
              case "ease":
              case "ease-in-out":
              case "ease-out":
              case "ease-in":
              case "linear":
                return s(t);
              case "spring":
                return f();
              default:
                if ("cubic-bezier" === t.split("(")[0]) return s(t);
            }
          return "function" == typeof t ? t : null;
        };
      function d(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? d(Object(r), !0).forEach(function (e) {
                var n, i, a;
                (n = t),
                  (i = e),
                  (a = r[e]),
                  (i = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var y = (t) => t.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())),
        v = (t, e, r) =>
          t
            .map((t) => "".concat(y(t), " ").concat(e, "ms ").concat(r))
            .join(","),
        g = (t, e) =>
          [Object.keys(t), Object.keys(e)].reduce((t, e) =>
            t.filter((t) => e.includes(t))
          ),
        m = (t, e) =>
          Object.keys(e).reduce(
            (r, n) => p(p({}, r), {}, { [n]: t(n, e[n]) }),
            {}
          );
      function b(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function x(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? b(Object(r), !0).forEach(function (e) {
                var n, i, a;
                (n = t),
                  (i = e),
                  (a = r[e]),
                  (i = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : b(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var w = (t, e, r) => t + (e - t) * r,
        O = (t) => {
          var { from: e, to: r } = t;
          return e !== r;
        },
        M = (t, e, r) => {
          var n = m((e, r) => {
            if (O(r)) {
              var [n, i] = t(r.from, r.to, r.velocity);
              return x(x({}, r), {}, { from: n, velocity: i });
            }
            return r;
          }, e);
          return r < 1
            ? m(
                (t, e) =>
                  O(e)
                    ? x(
                        x({}, e),
                        {},
                        {
                          velocity: w(e.velocity, n[t].velocity, r),
                          from: w(e.from, n[t].from, r),
                        }
                      )
                    : e,
                e
              )
            : M(t, n, r - 1);
        };
      let j = (t, e, r, n, i, a) => {
        var o = g(t, e);
        return !0 === r.isStepper
          ? (function (t, e, r, n, i, a) {
              var o,
                u = n.reduce(
                  (r, n) =>
                    x(
                      x({}, r),
                      {},
                      { [n]: { from: t[n], velocity: 0, to: e[n] } }
                    ),
                  {}
                ),
                l = () => m((t, e) => e.from, u),
                c = () => !Object.values(u).filter(O).length,
                s = null,
                f = (n) => {
                  o || (o = n);
                  var h = (n - o) / r.dt;
                  (u = M(r, u, h)),
                    i(x(x(x({}, t), e), l())),
                    (o = n),
                    c() || (s = a.setTimeout(f));
                };
              return () => (
                (s = a.setTimeout(f)),
                () => {
                  s();
                }
              );
            })(t, e, r, o, i, a)
          : (function (t, e, r, n, i, a, o) {
              var u,
                l = null,
                c = i.reduce(
                  (r, n) => x(x({}, r), {}, { [n]: [t[n], e[n]] }),
                  {}
                ),
                s = (i) => {
                  u || (u = i);
                  var f = (i - u) / n,
                    h = m((t, e) => w(...e, r(f)), c);
                  if ((a(x(x(x({}, t), e), h)), f < 1)) l = o.setTimeout(s);
                  else {
                    var d = m((t, e) => w(...e, r(1)), c);
                    a(x(x(x({}, t), e), d));
                  }
                };
              return () => (
                (l = o.setTimeout(s)),
                () => {
                  l();
                }
              );
            })(t, e, r, n, o, i, a);
      };
      class S {
        setTimeout(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            r = performance.now(),
            n = null,
            i = (a) => {
              a - r >= e
                ? t(a)
                : "function" == typeof requestAnimationFrame &&
                  (n = requestAnimationFrame(i));
            };
          return (
            (n = requestAnimationFrame(i)),
            () => {
              cancelAnimationFrame(n);
            }
          );
        }
      }
      var _ = [
        "children",
        "begin",
        "duration",
        "attributeName",
        "easing",
        "isActive",
        "from",
        "to",
        "canBegin",
        "onAnimationEnd",
        "shouldReAnimate",
        "onAnimationReStart",
        "animationManager",
      ];
      function P() {
        return (P = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (t[n] = r[n]));
              }
              return t;
            }).apply(null, arguments);
      }
      function A(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function E(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? A(Object(r), !0).forEach(function (e) {
                T(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : A(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function T(t, e, r) {
        var n;
        return (
          (e =
            "symbol" ==
            typeof (n = (function (t, e) {
              if ("object" != typeof t || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === e ? String : Number)(t);
            })(e, "string"))
              ? n
              : n + "") in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      class C extends n.PureComponent {
        componentDidMount() {
          var { isActive: t, canBegin: e } = this.props;
          (this.mounted = !0), t && e && this.runAnimation(this.props);
        }
        componentDidUpdate(t) {
          var {
              isActive: e,
              canBegin: r,
              attributeName: n,
              shouldReAnimate: i,
              to: o,
              from: u,
            } = this.props,
            { style: l } = this.state;
          if (r) {
            if (!e) {
              this.state &&
                l &&
                ((n && l[n] !== o) || (!n && l !== o)) &&
                this.setState({ style: n ? { [n]: o } : o });
              return;
            }
            if (!a()(t.to, o) || !t.canBegin || !t.isActive) {
              var c = !t.canBegin || !t.isActive;
              this.manager.stop(),
                this.stopJSAnimation && this.stopJSAnimation();
              var s = c || i ? u : t.to;
              this.state &&
                l &&
                ((n && l[n] !== s) || (!n && l !== s)) &&
                this.setState({ style: n ? { [n]: s } : s }),
                this.runAnimation(
                  E(E({}, this.props), {}, { from: s, begin: 0 })
                );
            }
          }
        }
        componentWillUnmount() {
          this.mounted = !1;
          var { onAnimationEnd: t } = this.props;
          this.unSubscribe && this.unSubscribe(),
            this.manager.stop(),
            this.stopJSAnimation && this.stopJSAnimation(),
            t && t();
        }
        handleStyleChange(t) {
          this.changeStyle(t);
        }
        changeStyle(t) {
          this.mounted && this.setState({ style: t });
        }
        runJSAnimation(t) {
          var {
              from: e,
              to: r,
              duration: n,
              easing: i,
              begin: a,
              onAnimationEnd: o,
              onAnimationStart: u,
            } = t,
            l = j(
              e,
              r,
              h(i),
              n,
              this.changeStyle,
              this.manager.getTimeoutController()
            );
          this.manager.start([
            u,
            a,
            () => {
              this.stopJSAnimation = l();
            },
            n,
            o,
          ]);
        }
        runAnimation(t) {
          var {
            begin: e,
            duration: r,
            attributeName: n,
            to: i,
            easing: a,
            onAnimationStart: o,
            onAnimationEnd: u,
            children: l,
          } = t;
          if (
            ((this.unSubscribe = this.manager.subscribe(
              this.handleStyleChange
            )),
            "function" == typeof a || "function" == typeof l || "spring" === a)
          )
            return void this.runJSAnimation(t);
          var c = n ? { [n]: i } : i,
            s = v(Object.keys(c), r, a);
          this.manager.start([o, e, E(E({}, c), {}, { transition: s }), r, u]);
        }
        render() {
          var t = this.props,
            {
              children: e,
              begin: r,
              duration: i,
              attributeName: a,
              easing: o,
              isActive: u,
              from: l,
              to: c,
              canBegin: s,
              onAnimationEnd: f,
              shouldReAnimate: h,
              onAnimationReStart: d,
              animationManager: p,
            } = t,
            y = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                i = (function (t, e) {
                  if (null == t) return {};
                  var r = {};
                  for (var n in t)
                    if ({}.hasOwnProperty.call(t, n)) {
                      if (-1 !== e.indexOf(n)) continue;
                      r[n] = t[n];
                    }
                  return r;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                for (n = 0; n < a.length; n++)
                  (r = a[n]),
                    -1 === e.indexOf(r) &&
                      {}.propertyIsEnumerable.call(t, r) &&
                      (i[r] = t[r]);
              }
              return i;
            })(t, _),
            v = n.Children.count(e),
            g = this.state.style;
          if ("function" == typeof e) return e(g);
          if (!u || 0 === v || i <= 0) return e;
          var m = (t) => {
            var { style: e = {}, className: r } = t.props;
            return (0, n.cloneElement)(
              t,
              E(E({}, y), {}, { style: E(E({}, e), g), className: r })
            );
          };
          return 1 === v
            ? m(n.Children.only(e))
            : n.createElement(
                "div",
                null,
                n.Children.map(e, (t) => m(t))
              );
        }
        constructor(t, e) {
          super(t, e),
            T(this, "mounted", !1),
            T(this, "manager", null),
            T(this, "stopJSAnimation", null),
            T(this, "unSubscribe", null);
          var {
            isActive: r,
            attributeName: n,
            from: i,
            to: a,
            children: o,
            duration: u,
            animationManager: l,
          } = this.props;
          if (
            ((this.manager = l),
            (this.handleStyleChange = this.handleStyleChange.bind(this)),
            (this.changeStyle = this.changeStyle.bind(this)),
            !r || u <= 0)
          ) {
            (this.state = { style: {} }),
              "function" == typeof o && (this.state = { style: a });
            return;
          }
          if (i) {
            if ("function" == typeof o) {
              this.state = { style: i };
              return;
            }
            this.state = { style: n ? { [n]: i } : i };
          } else this.state = { style: {} };
        }
      }
      T(C, "displayName", "Animate"),
        T(C, "defaultProps", {
          begin: 0,
          duration: 1e3,
          attributeName: "",
          easing: "ease",
          isActive: !0,
          canBegin: !0,
          onAnimationEnd: () => {},
          onAnimationStart: () => {},
        });
      var k = (0, n.createContext)(null);
      function D(t) {
        var e,
          r,
          i,
          a,
          o,
          u,
          l,
          c,
          s = (0, n.useContext)(k);
        return n.createElement(
          C,
          P({}, t, {
            animationManager:
              null != (l = null != (c = t.animationManager) ? c : s)
                ? l
                : ((e = new S()),
                  (i = () => null),
                  (a = !1),
                  (o = null),
                  (u = (t) => {
                    if (!a) {
                      if (Array.isArray(t)) {
                        if (!t.length) return;
                        var [r, ...n] = t;
                        if ("number" == typeof r) {
                          o = e.setTimeout(u.bind(null, n), r);
                          return;
                        }
                        u(r), (o = e.setTimeout(u.bind(null, n)));
                        return;
                      }
                      "object" == typeof t && i(t),
                        "function" == typeof t && t();
                    }
                  }),
                  {
                    stop: () => {
                      a = !0;
                    },
                    start: (t) => {
                      (a = !1), o && (o(), (o = null)), u(t);
                    },
                    subscribe: (t) => (
                      (i = t),
                      () => {
                        i = () => null;
                      }
                    ),
                    getTimeoutController: () => e,
                  }),
          })
        );
      }
    },
    74532: (t, e, r) => {
      "use strict";
      r.d(e, {
        Qx: () => c,
        a6: () => s,
        h4: () => Z,
        jM: () => K,
        ss: () => H,
      });
      var n,
        i = Symbol.for("immer-nothing"),
        a = Symbol.for("immer-draftable"),
        o = Symbol.for("immer-state");
      function u(t, ...e) {
        throw Error(
          `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
        );
      }
      var l = Object.getPrototypeOf;
      function c(t) {
        return !!t && !!t[o];
      }
      function s(t) {
        return (
          !!t &&
          (h(t) ||
            Array.isArray(t) ||
            !!t[a] ||
            !!t.constructor?.[a] ||
            g(t) ||
            m(t))
        );
      }
      var f = Object.prototype.constructor.toString();
      function h(t) {
        if (!t || "object" != typeof t) return !1;
        let e = l(t);
        if (null === e) return !0;
        let r = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
        return (
          r === Object ||
          ("function" == typeof r && Function.toString.call(r) === f)
        );
      }
      function d(t, e) {
        0 === p(t)
          ? Reflect.ownKeys(t).forEach((r) => {
              e(r, t[r], t);
            })
          : t.forEach((r, n) => e(n, r, t));
      }
      function p(t) {
        let e = t[o];
        return e ? e.type_ : Array.isArray(t) ? 1 : g(t) ? 2 : 3 * !!m(t);
      }
      function y(t, e) {
        return 2 === p(t)
          ? t.has(e)
          : Object.prototype.hasOwnProperty.call(t, e);
      }
      function v(t, e, r) {
        let n = p(t);
        2 === n ? t.set(e, r) : 3 === n ? t.add(r) : (t[e] = r);
      }
      function g(t) {
        return t instanceof Map;
      }
      function m(t) {
        return t instanceof Set;
      }
      function b(t) {
        return t.copy_ || t.base_;
      }
      function x(t, e) {
        if (g(t)) return new Map(t);
        if (m(t)) return new Set(t);
        if (Array.isArray(t)) return Array.prototype.slice.call(t);
        let r = h(t);
        if (!0 !== e && ("class_only" !== e || r)) {
          let e = l(t);
          return null !== e && r
            ? { ...t }
            : Object.assign(Object.create(e), t);
        }
        {
          let e = Object.getOwnPropertyDescriptors(t);
          delete e[o];
          let r = Reflect.ownKeys(e);
          for (let n = 0; n < r.length; n++) {
            let i = r[n],
              a = e[i];
            !1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
              (a.get || a.set) &&
                (e[i] = {
                  configurable: !0,
                  writable: !0,
                  enumerable: a.enumerable,
                  value: t[i],
                });
          }
          return Object.create(l(t), e);
        }
      }
      function w(t, e = !1) {
        return (
          M(t) ||
            c(t) ||
            !s(t) ||
            (p(t) > 1 && (t.set = t.add = t.clear = t.delete = O),
            Object.freeze(t),
            e && Object.entries(t).forEach(([t, e]) => w(e, !0))),
          t
        );
      }
      function O() {
        u(2);
      }
      function M(t) {
        return Object.isFrozen(t);
      }
      var j = {};
      function S(t) {
        let e = j[t];
        return e || u(0, t), e;
      }
      function _(t, e) {
        e &&
          (S("Patches"),
          (t.patches_ = []),
          (t.inversePatches_ = []),
          (t.patchListener_ = e));
      }
      function P(t) {
        A(t), t.drafts_.forEach(T), (t.drafts_ = null);
      }
      function A(t) {
        t === n && (n = t.parent_);
      }
      function E(t) {
        return (n = {
          drafts_: [],
          parent_: n,
          immer_: t,
          canAutoFreeze_: !0,
          unfinalizedDrafts_: 0,
        });
      }
      function T(t) {
        let e = t[o];
        0 === e.type_ || 1 === e.type_ ? e.revoke_() : (e.revoked_ = !0);
      }
      function C(t, e) {
        e.unfinalizedDrafts_ = e.drafts_.length;
        let r = e.drafts_[0];
        return (
          void 0 !== t && t !== r
            ? (r[o].modified_ && (P(e), u(4)),
              s(t) && ((t = k(e, t)), e.parent_ || N(e, t)),
              e.patches_ &&
                S("Patches").generateReplacementPatches_(
                  r[o].base_,
                  t,
                  e.patches_,
                  e.inversePatches_
                ))
            : (t = k(e, r, [])),
          P(e),
          e.patches_ && e.patchListener_(e.patches_, e.inversePatches_),
          t !== i ? t : void 0
        );
      }
      function k(t, e, r) {
        if (M(e)) return e;
        let n = e[o];
        if (!n) return d(e, (i, a) => D(t, n, e, i, a, r)), e;
        if (n.scope_ !== t) return e;
        if (!n.modified_) return N(t, n.base_, !0), n.base_;
        if (!n.finalized_) {
          (n.finalized_ = !0), n.scope_.unfinalizedDrafts_--;
          let e = n.copy_,
            i = e,
            a = !1;
          3 === n.type_ && ((i = new Set(e)), e.clear(), (a = !0)),
            d(i, (i, o) => D(t, n, e, i, o, r, a)),
            N(t, e, !1),
            r &&
              t.patches_ &&
              S("Patches").generatePatches_(
                n,
                r,
                t.patches_,
                t.inversePatches_
              );
        }
        return n.copy_;
      }
      function D(t, e, r, n, i, a, o) {
        if (c(i)) {
          let o = k(
            t,
            i,
            a && e && 3 !== e.type_ && !y(e.assigned_, n) ? a.concat(n) : void 0
          );
          if ((v(r, n, o), !c(o))) return;
          t.canAutoFreeze_ = !1;
        } else o && r.add(i);
        if (s(i) && !M(i)) {
          if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1) return;
          k(t, i),
            (!e || !e.scope_.parent_) &&
              "symbol" != typeof n &&
              Object.prototype.propertyIsEnumerable.call(r, n) &&
              N(t, i);
        }
      }
      function N(t, e, r = !1) {
        !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && w(e, r);
      }
      var I = {
          get(t, e) {
            if (e === o) return t;
            let r = b(t);
            if (!y(r, e)) {
              var n = t,
                i = r,
                a = e;
              let o = L(i, a);
              return o
                ? "value" in o
                  ? o.value
                  : o.get?.call(n.draft_)
                : void 0;
            }
            let u = r[e];
            return t.finalized_ || !s(u)
              ? u
              : u === $(t.base_, e)
              ? (R(t), (t.copy_[e] = F(u, t)))
              : u;
          },
          has: (t, e) => e in b(t),
          ownKeys: (t) => Reflect.ownKeys(b(t)),
          set(t, e, r) {
            let n = L(b(t), e);
            if (n?.set) return n.set.call(t.draft_, r), !0;
            if (!t.modified_) {
              let n = $(b(t), e),
                i = n?.[o];
              if (i && i.base_ === r)
                return (t.copy_[e] = r), (t.assigned_[e] = !1), !0;
              if (
                (r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n) &&
                (void 0 !== r || y(t.base_, e))
              )
                return !0;
              R(t), U(t);
            }
            return (
              !!(
                (t.copy_[e] === r && (void 0 !== r || e in t.copy_)) ||
                (Number.isNaN(r) && Number.isNaN(t.copy_[e]))
              ) || ((t.copy_[e] = r), (t.assigned_[e] = !0), !0)
            );
          },
          deleteProperty: (t, e) => (
            void 0 !== $(t.base_, e) || e in t.base_
              ? ((t.assigned_[e] = !1), R(t), U(t))
              : delete t.assigned_[e],
            t.copy_ && delete t.copy_[e],
            !0
          ),
          getOwnPropertyDescriptor(t, e) {
            let r = b(t),
              n = Reflect.getOwnPropertyDescriptor(r, e);
            return n
              ? {
                  writable: !0,
                  configurable: 1 !== t.type_ || "length" !== e,
                  enumerable: n.enumerable,
                  value: r[e],
                }
              : n;
          },
          defineProperty() {
            u(11);
          },
          getPrototypeOf: (t) => l(t.base_),
          setPrototypeOf() {
            u(12);
          },
        },
        z = {};
      function $(t, e) {
        let r = t[o];
        return (r ? b(r) : t)[e];
      }
      function L(t, e) {
        if (!(e in t)) return;
        let r = l(t);
        for (; r; ) {
          let t = Object.getOwnPropertyDescriptor(r, e);
          if (t) return t;
          r = l(r);
        }
      }
      function U(t) {
        !t.modified_ && ((t.modified_ = !0), t.parent_ && U(t.parent_));
      }
      function R(t) {
        t.copy_ ||
          (t.copy_ = x(t.base_, t.scope_.immer_.useStrictShallowCopy_));
      }
      function F(t, e) {
        let r = g(t)
          ? S("MapSet").proxyMap_(t, e)
          : m(t)
          ? S("MapSet").proxySet_(t, e)
          : (function (t, e) {
              let r = Array.isArray(t),
                i = {
                  type_: +!!r,
                  scope_: e ? e.scope_ : n,
                  modified_: !1,
                  finalized_: !1,
                  assigned_: {},
                  parent_: e,
                  base_: t,
                  draft_: null,
                  copy_: null,
                  revoke_: null,
                  isManual_: !1,
                },
                a = i,
                o = I;
              r && ((a = [i]), (o = z));
              let { revoke: u, proxy: l } = Proxy.revocable(a, o);
              return (i.draft_ = l), (i.revoke_ = u), l;
            })(t, e);
        return (e ? e.scope_ : n).drafts_.push(r), r;
      }
      function H(t) {
        return (
          c(t) || u(10, t),
          (function t(e) {
            let r;
            if (!s(e) || M(e)) return e;
            let n = e[o];
            if (n) {
              if (!n.modified_) return n.base_;
              (n.finalized_ = !0),
                (r = x(e, n.scope_.immer_.useStrictShallowCopy_));
            } else r = x(e, !0);
            return (
              d(r, (e, n) => {
                v(r, e, t(n));
              }),
              n && (n.finalized_ = !1),
              r
            );
          })(t)
        );
      }
      d(I, (t, e) => {
        z[t] = function () {
          return (arguments[0] = arguments[0][0]), e.apply(this, arguments);
        };
      }),
        (z.deleteProperty = function (t, e) {
          return z.set.call(this, t, e, void 0);
        }),
        (z.set = function (t, e, r) {
          return I.set.call(this, t[0], e, r, t[0]);
        });
      var B = new (class {
          constructor(t) {
            (this.autoFreeze_ = !0),
              (this.useStrictShallowCopy_ = !1),
              (this.produce = (t, e, r) => {
                let n;
                if ("function" == typeof t && "function" != typeof e) {
                  let r = e;
                  e = t;
                  let n = this;
                  return function (t = r, ...i) {
                    return n.produce(t, (t) => e.call(this, t, ...i));
                  };
                }
                if (
                  ("function" != typeof e && u(6),
                  void 0 !== r && "function" != typeof r && u(7),
                  s(t))
                ) {
                  let i = E(this),
                    a = F(t, void 0),
                    o = !0;
                  try {
                    (n = e(a)), (o = !1);
                  } finally {
                    o ? P(i) : A(i);
                  }
                  return _(i, r), C(n, i);
                }
                if (t && "object" == typeof t) u(1, t);
                else {
                  if (
                    (void 0 === (n = e(t)) && (n = t),
                    n === i && (n = void 0),
                    this.autoFreeze_ && w(n, !0),
                    r)
                  ) {
                    let e = [],
                      i = [];
                    S("Patches").generateReplacementPatches_(t, n, e, i),
                      r(e, i);
                  }
                  return n;
                }
              }),
              (this.produceWithPatches = (t, e) => {
                let r, n;
                return "function" == typeof t
                  ? (e, ...r) => this.produceWithPatches(e, (e) => t(e, ...r))
                  : [
                      this.produce(t, e, (t, e) => {
                        (r = t), (n = e);
                      }),
                      r,
                      n,
                    ];
              }),
              "boolean" == typeof t?.autoFreeze &&
                this.setAutoFreeze(t.autoFreeze),
              "boolean" == typeof t?.useStrictShallowCopy &&
                this.setUseStrictShallowCopy(t.useStrictShallowCopy);
          }
          createDraft(t) {
            s(t) || u(8), c(t) && (t = H(t));
            let e = E(this),
              r = F(t, void 0);
            return (r[o].isManual_ = !0), A(e), r;
          }
          finishDraft(t, e) {
            let r = t && t[o];
            (r && r.isManual_) || u(9);
            let { scope_: n } = r;
            return _(n, e), C(void 0, n);
          }
          setAutoFreeze(t) {
            this.autoFreeze_ = t;
          }
          setUseStrictShallowCopy(t) {
            this.useStrictShallowCopy_ = t;
          }
          applyPatches(t, e) {
            let r;
            for (r = e.length - 1; r >= 0; r--) {
              let n = e[r];
              if (0 === n.path.length && "replace" === n.op) {
                t = n.value;
                break;
              }
            }
            r > -1 && (e = e.slice(r + 1));
            let n = S("Patches").applyPatches_;
            return c(t) ? n(t, e) : this.produce(t, (t) => n(t, e));
          }
        })(),
        K = B.produce;
      function Z(t) {
        return t;
      }
      B.produceWithPatches.bind(B),
        B.setAutoFreeze.bind(B),
        B.setUseStrictShallowCopy.bind(B),
        B.applyPatches.bind(B),
        B.createDraft.bind(B),
        B.finishDraft.bind(B);
    },
    75380: (t, e, r) => {
      "use strict";
      r.d(e, { L: () => z });
      var n = r(12115),
        i = r(70788),
        a = r(97238),
        o = r(96752),
        u = r(71807),
        l = r(72790),
        c = r(81971),
        s = r(20972),
        f = r(78892),
        h = ["children"];
      function d() {
        return (d = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (t[n] = r[n]));
              }
              return t;
            }).apply(null, arguments);
      }
      var p = { width: "100%", height: "100%" },
        y = (0, n.forwardRef)((t, e) => {
          var r,
            i,
            u = (0, a.yi)(),
            c = (0, a.rY)(),
            s = (0, o.$)();
          if (!(0, f.F)(u) || !(0, f.F)(c)) return null;
          var { children: h, otherAttributes: y, title: v, desc: g } = t;
          return (
            (r = "number" == typeof y.tabIndex ? y.tabIndex : s ? 0 : void 0),
            (i =
              "string" == typeof y.role ? y.role : s ? "application" : void 0),
            n.createElement(
              l.u,
              d({}, y, {
                title: v,
                desc: g,
                role: i,
                tabIndex: r,
                width: u,
                height: c,
                style: p,
                ref: e,
              }),
              h
            )
          );
        }),
        v = (t) => {
          var { children: e } = t,
            r = (0, c.G)(s.U);
          if (!r) return null;
          var { width: i, height: a, y: o, x: u } = r;
          return n.createElement(l.u, { width: i, height: a, x: u, y: o }, e);
        },
        g = (0, n.forwardRef)((t, e) => {
          var { children: r } = t,
            i = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                i = (function (t, e) {
                  if (null == t) return {};
                  var r = {};
                  for (var n in t)
                    if ({}.hasOwnProperty.call(t, n)) {
                      if (-1 !== e.indexOf(n)) continue;
                      r[n] = t[n];
                    }
                  return r;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                for (n = 0; n < a.length; n++)
                  (r = a[n]),
                    -1 === e.indexOf(r) &&
                      {}.propertyIsEnumerable.call(t, r) &&
                      (i[r] = t[r]);
              }
              return i;
            })(t, h);
          return (0, u.r)()
            ? n.createElement(v, null, r)
            : n.createElement(y, d({ ref: e }, i), r);
        }),
        m = r(52596),
        b = r(34890),
        x = r(94685),
        w = r(78137),
        O = r(841),
        M = r(2589),
        j = r(48627),
        S = r(37335),
        _ = r(36144),
        P = r(25115),
        A = r(15679);
      function E(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var T = (0, n.forwardRef)((t, e) => {
          var {
              children: r,
              className: i,
              height: a,
              onClick: o,
              onContextMenu: u,
              onDoubleClick: l,
              onMouseDown: s,
              onMouseEnter: h,
              onMouseLeave: d,
              onMouseMove: p,
              onMouseUp: y,
              onTouchEnd: v,
              onTouchMove: g,
              onTouchStart: T,
              style: C,
              width: k,
            } = t,
            D = (0, c.j)(),
            [N, I] = (0, n.useState)(null),
            [z, $] = (0, n.useState)(null);
          (0, w.l3)();
          var L = (function () {
              var t = (0, c.j)(),
                [e, r] = (0, n.useState)(null),
                i = (0, c.G)(M.et);
              return (
                (0, n.useEffect)(() => {
                  if (null != e) {
                    var r = e.getBoundingClientRect().width / e.offsetWidth;
                    (0, f.H)(r) && r !== i && t((0, j.hF)(r));
                  }
                }, [e, t, i]),
                r
              );
            })(),
            U = (0, n.useCallback)(
              (t) => {
                L(t), "function" == typeof e && e(t), I(t), $(t);
              },
              [L, e, I, $]
            ),
            R = (0, n.useCallback)(
              (t) => {
                D((0, x.ky)(t)), D((0, S.y)({ handler: o, reactEvent: t }));
              },
              [D, o]
            ),
            F = (0, n.useCallback)(
              (t) => {
                D((0, x.dj)(t)), D((0, S.y)({ handler: h, reactEvent: t }));
              },
              [D, h]
            ),
            H = (0, n.useCallback)(
              (t) => {
                D((0, b.xS)()), D((0, S.y)({ handler: d, reactEvent: t }));
              },
              [D, d]
            ),
            B = (0, n.useCallback)(
              (t) => {
                D((0, x.dj)(t)), D((0, S.y)({ handler: p, reactEvent: t }));
              },
              [D, p]
            ),
            K = (0, n.useCallback)(() => {
              D((0, O.Ru)());
            }, [D]),
            Z = (0, n.useCallback)(
              (t) => {
                D((0, O.uZ)(t.key));
              },
              [D]
            ),
            q = (0, n.useCallback)(
              (t) => {
                D((0, S.y)({ handler: u, reactEvent: t }));
              },
              [D, u]
            ),
            W = (0, n.useCallback)(
              (t) => {
                D((0, S.y)({ handler: l, reactEvent: t }));
              },
              [D, l]
            ),
            G = (0, n.useCallback)(
              (t) => {
                D((0, S.y)({ handler: s, reactEvent: t }));
              },
              [D, s]
            ),
            Y = (0, n.useCallback)(
              (t) => {
                D((0, S.y)({ handler: y, reactEvent: t }));
              },
              [D, y]
            ),
            V = (0, n.useCallback)(
              (t) => {
                D((0, S.y)({ handler: T, reactEvent: t }));
              },
              [D, T]
            ),
            X = (0, n.useCallback)(
              (t) => {
                D((0, _.e)(t)), D((0, S.y)({ handler: g, reactEvent: t }));
              },
              [D, g]
            ),
            J = (0, n.useCallback)(
              (t) => {
                D((0, S.y)({ handler: v, reactEvent: t }));
              },
              [D, v]
            );
          return n.createElement(
            P.$.Provider,
            { value: N },
            n.createElement(
              A.t.Provider,
              { value: z },
              n.createElement(
                "div",
                {
                  className: (0, m.$)("recharts-wrapper", i),
                  style: (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var r = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? E(Object(r), !0).forEach(function (e) {
                            var n, i, a;
                            (n = t),
                              (i = e),
                              (a = r[e]),
                              (i = (function (t) {
                                var e = (function (t, e) {
                                  if ("object" != typeof t || !t) return t;
                                  var r = t[Symbol.toPrimitive];
                                  if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError(
                                      "@@toPrimitive must return a primitive value."
                                    );
                                  }
                                  return ("string" === e ? String : Number)(t);
                                })(t, "string");
                                return "symbol" == typeof e ? e : e + "";
                              })(i)) in n
                                ? Object.defineProperty(n, i, {
                                    value: a,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                  })
                                : (n[i] = a);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(r)
                          )
                        : E(Object(r)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(r, e)
                            );
                          });
                    }
                    return t;
                  })(
                    {
                      position: "relative",
                      cursor: "default",
                      width: k,
                      height: a,
                    },
                    C
                  ),
                  onClick: R,
                  onContextMenu: q,
                  onDoubleClick: W,
                  onFocus: K,
                  onKeyDown: Z,
                  onMouseDown: G,
                  onMouseEnter: F,
                  onMouseLeave: H,
                  onMouseMove: B,
                  onMouseUp: Y,
                  onTouchEnd: J,
                  onTouchMove: X,
                  onTouchStart: V,
                  ref: U,
                },
                r
              )
            )
          );
        }),
        C = r(16377),
        k = r(68234),
        D = (0, n.createContext)(void 0),
        N = (t) => {
          var { children: e } = t,
            [r] = (0, n.useState)("".concat((0, C.NF)("recharts"), "-clip")),
            i = (0, k.oM)();
          if (null == i) return null;
          var { x: a, y: o, width: u, height: l } = i;
          return n.createElement(
            D.Provider,
            { value: r },
            n.createElement(
              "defs",
              null,
              n.createElement(
                "clipPath",
                { id: r },
                n.createElement("rect", { x: a, y: o, height: l, width: u })
              )
            ),
            e
          );
        },
        I = [
          "children",
          "className",
          "width",
          "height",
          "style",
          "compact",
          "title",
          "desc",
        ],
        z = (0, n.forwardRef)((t, e) => {
          var {
              children: r,
              className: a,
              width: o,
              height: u,
              style: l,
              compact: c,
              title: s,
              desc: f,
            } = t,
            h = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                i = (function (t, e) {
                  if (null == t) return {};
                  var r = {};
                  for (var n in t)
                    if ({}.hasOwnProperty.call(t, n)) {
                      if (-1 !== e.indexOf(n)) continue;
                      r[n] = t[n];
                    }
                  return r;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                for (n = 0; n < a.length; n++)
                  (r = a[n]),
                    -1 === e.indexOf(r) &&
                      {}.propertyIsEnumerable.call(t, r) &&
                      (i[r] = t[r]);
              }
              return i;
            })(t, I),
            d = (0, i.J9)(h, !1);
          return c
            ? n.createElement(g, { otherAttributes: d, title: s, desc: f }, r)
            : n.createElement(
                T,
                {
                  className: a,
                  style: l,
                  width: o,
                  height: u,
                  onClick: t.onClick,
                  onMouseLeave: t.onMouseLeave,
                  onMouseEnter: t.onMouseEnter,
                  onMouseMove: t.onMouseMove,
                  onMouseDown: t.onMouseDown,
                  onMouseUp: t.onMouseUp,
                  onContextMenu: t.onContextMenu,
                  onDoubleClick: t.onDoubleClick,
                  onTouchStart: t.onTouchStart,
                  onTouchMove: t.onTouchMove,
                  onTouchEnd: t.onTouchEnd,
                },
                n.createElement(
                  g,
                  { otherAttributes: d, title: s, desc: f, ref: e },
                  n.createElement(N, null, r)
                )
              );
        });
    },
    75714: (t, e, r) => {
      "use strict";
      r.d(e, { J: () => n });
      var n = (t) => t.tooltip;
    },
    77283: (t, e, r) => {
      "use strict";
      r.d(e, { h: () => y });
      var n = r(12115),
        i = r(52596),
        a = r(70788),
        o = r(25641),
        u = r(16377),
        l = r(93389);
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (t[n] = r[n]));
              }
              return t;
            }).apply(null, arguments);
      }
      var s = (t, e) => (0, u.sA)(e - t) * Math.min(Math.abs(e - t), 359.999),
        f = (t) => {
          var {
              cx: e,
              cy: r,
              radius: n,
              angle: i,
              sign: a,
              isExternal: u,
              cornerRadius: l,
              cornerIsExternal: c,
            } = t,
            s = l * (u ? 1 : -1) + n,
            f = Math.asin(l / s) / o.Kg,
            h = c ? i : i + a * f,
            d = (0, o.IZ)(e, r, s, h);
          return {
            center: d,
            circleTangency: (0, o.IZ)(e, r, n, h),
            lineTangency: (0, o.IZ)(
              e,
              r,
              s * Math.cos(f * o.Kg),
              c ? i - a * f : i
            ),
            theta: f,
          };
        },
        h = (t) => {
          var {
              cx: e,
              cy: r,
              innerRadius: n,
              outerRadius: i,
              startAngle: a,
              endAngle: u,
            } = t,
            l = s(a, u),
            c = a + l,
            f = (0, o.IZ)(e, r, i, a),
            h = (0, o.IZ)(e, r, i, c),
            d = "M "
              .concat(f.x, ",")
              .concat(f.y, "\n    A ")
              .concat(i, ",")
              .concat(i, ",0,\n    ")
              .concat(+(Math.abs(l) > 180), ",")
              .concat(+(a > c), ",\n    ")
              .concat(h.x, ",")
              .concat(h.y, "\n  ");
          if (n > 0) {
            var p = (0, o.IZ)(e, r, n, a),
              y = (0, o.IZ)(e, r, n, c);
            d += "L "
              .concat(y.x, ",")
              .concat(y.y, "\n            A ")
              .concat(n, ",")
              .concat(n, ",0,\n            ")
              .concat(+(Math.abs(l) > 180), ",")
              .concat(+(a <= c), ",\n            ")
              .concat(p.x, ",")
              .concat(p.y, " Z");
          } else d += "L ".concat(e, ",").concat(r, " Z");
          return d;
        },
        d = (t) => {
          var {
              cx: e,
              cy: r,
              innerRadius: n,
              outerRadius: i,
              cornerRadius: a,
              forceCornerRadius: o,
              cornerIsExternal: l,
              startAngle: c,
              endAngle: s,
            } = t,
            d = (0, u.sA)(s - c),
            {
              circleTangency: p,
              lineTangency: y,
              theta: v,
            } = f({
              cx: e,
              cy: r,
              radius: i,
              angle: c,
              sign: d,
              cornerRadius: a,
              cornerIsExternal: l,
            }),
            {
              circleTangency: g,
              lineTangency: m,
              theta: b,
            } = f({
              cx: e,
              cy: r,
              radius: i,
              angle: s,
              sign: -d,
              cornerRadius: a,
              cornerIsExternal: l,
            }),
            x = l ? Math.abs(c - s) : Math.abs(c - s) - v - b;
          if (x < 0)
            return o
              ? "M "
                  .concat(y.x, ",")
                  .concat(y.y, "\n        a")
                  .concat(a, ",")
                  .concat(a, ",0,0,1,")
                  .concat(2 * a, ",0\n        a")
                  .concat(a, ",")
                  .concat(a, ",0,0,1,")
                  .concat(-(2 * a), ",0\n      ")
              : h({
                  cx: e,
                  cy: r,
                  innerRadius: n,
                  outerRadius: i,
                  startAngle: c,
                  endAngle: s,
                });
          var w = "M "
            .concat(y.x, ",")
            .concat(y.y, "\n    A")
            .concat(a, ",")
            .concat(a, ",0,0,")
            .concat(+(d < 0), ",")
            .concat(p.x, ",")
            .concat(p.y, "\n    A")
            .concat(i, ",")
            .concat(i, ",0,")
            .concat(+(x > 180), ",")
            .concat(+(d < 0), ",")
            .concat(g.x, ",")
            .concat(g.y, "\n    A")
            .concat(a, ",")
            .concat(a, ",0,0,")
            .concat(+(d < 0), ",")
            .concat(m.x, ",")
            .concat(m.y, "\n  ");
          if (n > 0) {
            var {
                circleTangency: O,
                lineTangency: M,
                theta: j,
              } = f({
                cx: e,
                cy: r,
                radius: n,
                angle: c,
                sign: d,
                isExternal: !0,
                cornerRadius: a,
                cornerIsExternal: l,
              }),
              {
                circleTangency: S,
                lineTangency: _,
                theta: P,
              } = f({
                cx: e,
                cy: r,
                radius: n,
                angle: s,
                sign: -d,
                isExternal: !0,
                cornerRadius: a,
                cornerIsExternal: l,
              }),
              A = l ? Math.abs(c - s) : Math.abs(c - s) - j - P;
            if (A < 0 && 0 === a)
              return "".concat(w, "L").concat(e, ",").concat(r, "Z");
            w += "L"
              .concat(_.x, ",")
              .concat(_.y, "\n      A")
              .concat(a, ",")
              .concat(a, ",0,0,")
              .concat(+(d < 0), ",")
              .concat(S.x, ",")
              .concat(S.y, "\n      A")
              .concat(n, ",")
              .concat(n, ",0,")
              .concat(+(A > 180), ",")
              .concat(+(d > 0), ",")
              .concat(O.x, ",")
              .concat(O.y, "\n      A")
              .concat(a, ",")
              .concat(a, ",0,0,")
              .concat(+(d < 0), ",")
              .concat(M.x, ",")
              .concat(M.y, "Z");
          } else w += "L".concat(e, ",").concat(r, "Z");
          return w;
        },
        p = {
          cx: 0,
          cy: 0,
          innerRadius: 0,
          outerRadius: 0,
          startAngle: 0,
          endAngle: 0,
          cornerRadius: 0,
          forceCornerRadius: !1,
          cornerIsExternal: !1,
        },
        y = (t) => {
          var e,
            r = (0, l.e)(t, p),
            {
              cx: o,
              cy: s,
              innerRadius: f,
              outerRadius: y,
              cornerRadius: v,
              forceCornerRadius: g,
              cornerIsExternal: m,
              startAngle: b,
              endAngle: x,
              className: w,
            } = r;
          if (y < f || b === x) return null;
          var O = (0, i.$)("recharts-sector", w),
            M = y - f,
            j = (0, u.F4)(v, M, 0, !0);
          return (
            (e =
              j > 0 && 360 > Math.abs(b - x)
                ? d({
                    cx: o,
                    cy: s,
                    innerRadius: f,
                    outerRadius: y,
                    cornerRadius: Math.min(j, M / 2),
                    forceCornerRadius: g,
                    cornerIsExternal: m,
                    startAngle: b,
                    endAngle: x,
                  })
                : h({
                    cx: o,
                    cy: s,
                    innerRadius: f,
                    outerRadius: y,
                    startAngle: b,
                    endAngle: x,
                  })),
            n.createElement(
              "path",
              c({}, (0, a.J9)(r, !0), { className: O, d: e })
            )
          );
        };
    },
    77918: (t, e, r) => {
      "use strict";
      r.d(e, { V: () => i });
      var n = r(12115);
      function i() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          [e, r] = (0, n.useState)({ height: 0, left: 0, top: 0, width: 0 }),
          i = (0, n.useCallback)(
            (t) => {
              if (null != t) {
                var n = t.getBoundingClientRect(),
                  i = {
                    height: n.height,
                    left: n.left,
                    top: n.top,
                    width: n.width,
                  };
                (Math.abs(i.height - e.height) > 1 ||
                  Math.abs(i.left - e.left) > 1 ||
                  Math.abs(i.top - e.top) > 1 ||
                  Math.abs(i.width - e.width) > 1) &&
                  r({
                    height: i.height,
                    left: i.left,
                    top: i.top,
                    width: i.width,
                  });
              }
            },
            [e.width, e.height, e.top, e.left, ...t]
          );
        return [e, i];
      }
    },
    78137: (t, e, r) => {
      "use strict";
      r.d(e, { l3: () => g, m7: () => m });
      var n = r(12115),
        i = r(81971),
        a = r(18478),
        o = new (r(15484).A)(),
        u = "recharts.syncEvent.tooltip",
        l = "recharts.syncEvent.brush",
        c = r(46641),
        s = r(34890),
        f = r(94732),
        h = r(20215);
      function d(t) {
        return t.tooltip.syncInteraction;
      }
      var p = r(97238),
        y = r(34487),
        v = () => {};
      function g() {
        var t,
          e,
          r,
          f,
          d,
          g,
          m,
          b,
          x,
          w,
          O,
          M = (0, i.j)();
        (0, n.useEffect)(() => {
          M((0, c.dl)());
        }, [M]),
          (t = (0, i.G)(a.lZ)),
          (e = (0, i.G)(a.pH)),
          (r = (0, i.j)()),
          (f = (0, i.G)(a.hX)),
          (d = (0, i.G)(h.R4)),
          (g = (0, p.WX)()),
          (m = (0, p.sk)()),
          (b = (0, i.G)((t) => t.rootProps.className)),
          (0, n.useEffect)(() => {
            if (null == t) return v;
            var n = (n, i, a) => {
              if (e !== a && t === n) {
                if ("index" === f) return void r(i);
                if (null != d) {
                  if ("function" == typeof f) {
                    var o,
                      u = f(d, {
                        activeTooltipIndex:
                          null == i.payload.index
                            ? void 0
                            : Number(i.payload.index),
                        isTooltipActive: i.payload.active,
                        activeIndex:
                          null == i.payload.index
                            ? void 0
                            : Number(i.payload.index),
                        activeLabel: i.payload.label,
                        activeDataKey: i.payload.dataKey,
                        activeCoordinate: i.payload.coordinate,
                      });
                    o = d[u];
                  } else
                    "value" === f &&
                      (o = d.find((t) => String(t.value) === i.payload.label));
                  var { coordinate: l } = i.payload;
                  if (
                    null == o ||
                    !1 === i.payload.active ||
                    null == l ||
                    null == m
                  )
                    return void r(
                      (0, s.E1)({
                        active: !1,
                        coordinate: void 0,
                        dataKey: void 0,
                        index: null,
                        label: void 0,
                      })
                    );
                  var { x: c, y: h } = l,
                    p = Math.min(c, m.x + m.width),
                    y = Math.min(h, m.y + m.height),
                    v = {
                      x: "horizontal" === g ? o.coordinate : p,
                      y: "horizontal" === g ? y : o.coordinate,
                    };
                  r(
                    (0, s.E1)({
                      active: i.payload.active,
                      coordinate: v,
                      dataKey: i.payload.dataKey,
                      index: String(o.index),
                      label: i.payload.label,
                    })
                  );
                }
              }
            };
            return (
              o.on(u, n),
              () => {
                o.off(u, n);
              }
            );
          }, [b, r, e, t, f, d, g, m]),
          (x = (0, i.G)(a.lZ)),
          (w = (0, i.G)(a.pH)),
          (O = (0, i.j)()),
          (0, n.useEffect)(() => {
            if (null == x) return v;
            var t = (t, e, r) => {
              w !== r && x === t && O((0, y.M)(e));
            };
            return (
              o.on(l, t),
              () => {
                o.off(l, t);
              }
            );
          }, [O, w, x]);
      }
      function m(t, e, r, l, c, h) {
        var p = (0, i.G)((r) => (0, f.dp)(r, t, e)),
          y = (0, i.G)(a.pH),
          v = (0, i.G)(a.lZ),
          g = (0, i.G)(a.hX),
          m = (0, i.G)(d),
          b = null == m ? void 0 : m.active;
        (0, n.useEffect)(() => {
          if (!b && null != v && null != y) {
            var t = (0, s.E1)({
              active: h,
              coordinate: r,
              dataKey: p,
              index: c,
              label: "number" == typeof l ? String(l) : l,
            });
            o.emit(u, v, t, y);
          }
        }, [b, r, p, c, l, y, v, g, h]);
      }
    },
    78673: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.debounce = function (t, e = 0, r = {}) {
          let n;
          "object" != typeof r && (r = {});
          let i = null,
            a = null,
            o = null,
            u = 0,
            l = null,
            { leading: c = !1, trailing: s = !0, maxWait: f } = r,
            h = "maxWait" in r,
            d = h ? Math.max(Number(f) || 0, e) : 0,
            p = (e) => (
              null !== i && (n = t.apply(a, i)), (i = a = null), (u = e), n
            ),
            y = (t) =>
              ((u = t), (l = setTimeout(b, e)), c && null !== i) ? p(t) : n,
            v = (t) => (((l = null), s && null !== i) ? p(t) : n),
            g = (t) => {
              if (null === o) return !0;
              let r = t - o,
                n = h && t - u >= d;
              return r >= e || r < 0 || n;
            },
            m = (t) => {
              let r = e - (null === o ? 0 : t - o),
                n = d - (t - u);
              return h ? Math.min(r, n) : r;
            },
            b = () => {
              let t = Date.now();
              if (g(t)) return v(t);
              l = setTimeout(b, m(t));
            },
            x = function (...t) {
              let r = Date.now(),
                u = g(r);
              if (((i = t), (a = this), (o = r), u)) {
                if (null === l) return y(r);
                if (h) return clearTimeout(l), (l = setTimeout(b, e)), p(r);
              }
              return null === l && (l = setTimeout(b, e)), n;
            };
          return (
            (x.cancel = () => {
              null !== l && clearTimeout(l), (u = 0), (o = i = a = l = null);
            }),
            (x.flush = () => (null === l ? n : v(Date.now()))),
            x
          );
        });
    },
    78892: (t, e, r) => {
      "use strict";
      function n(t) {
        return Number.isFinite(t);
      }
      function i(t) {
        return "number" == typeof t && t > 0 && Number.isFinite(t);
      }
      r.d(e, { F: () => i, H: () => n });
    },
    79020: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => c, _: () => s });
      var n = r(12115),
        i = r(71807),
        a = r(97238),
        o = r(81971),
        u = r(32634),
        l = () => {};
      function c(t) {
        var { legendPayload: e } = t,
          r = (0, o.j)(),
          a = (0, i.r)();
        return (
          (0, n.useEffect)(
            () =>
              a
                ? l
                : (r((0, u.Lx)(e)),
                  () => {
                    r((0, u.u3)(e));
                  }),
            [r, a, e]
          ),
          null
        );
      }
      function s(t) {
        var { legendPayload: e } = t,
          r = (0, o.j)(),
          i = (0, o.G)(a.fz);
        return (
          (0, n.useEffect)(
            () =>
              "centric" !== i && "radial" !== i
                ? l
                : (r((0, u.Lx)(e)),
                  () => {
                    r((0, u.u3)(e));
                  }),
            [r, i, e]
          ),
          null
        );
      }
    },
    79095: (t, e, r) => {
      "use strict";
      r.d(e, { E: () => E });
      var n = r(12115),
        i = r(52596),
        a = r(16377),
        o = r(41643),
        u = r(70788),
        l = r(46605),
        c = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        s = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        f = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
        h = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
        d = {
          cm: 96 / 2.54,
          mm: 96 / 25.4,
          pt: 96 / 72,
          pc: 16,
          in: 96,
          Q: 96 / 101.6,
          px: 1,
        },
        p = Object.keys(d);
      class y {
        static parse(t) {
          var e,
            [, r, n] = null != (e = h.exec(t)) ? e : [];
          return new y(parseFloat(r), null != n ? n : "");
        }
        add(t) {
          return this.unit !== t.unit
            ? new y(NaN, "")
            : new y(this.num + t.num, this.unit);
        }
        subtract(t) {
          return this.unit !== t.unit
            ? new y(NaN, "")
            : new y(this.num - t.num, this.unit);
        }
        multiply(t) {
          return "" !== this.unit && "" !== t.unit && this.unit !== t.unit
            ? new y(NaN, "")
            : new y(this.num * t.num, this.unit || t.unit);
        }
        divide(t) {
          return "" !== this.unit && "" !== t.unit && this.unit !== t.unit
            ? new y(NaN, "")
            : new y(this.num / t.num, this.unit || t.unit);
        }
        toString() {
          return "".concat(this.num).concat(this.unit);
        }
        isNaN() {
          return (0, a.M8)(this.num);
        }
        constructor(t, e) {
          (this.num = t),
            (this.unit = e),
            (this.num = t),
            (this.unit = e),
            (0, a.M8)(t) && (this.unit = ""),
            "" === e || f.test(e) || ((this.num = NaN), (this.unit = "")),
            p.includes(e) && ((this.num = t * d[e]), (this.unit = "px"));
        }
      }
      function v(t) {
        if (t.includes("NaN")) return "NaN";
        for (var e = t; e.includes("*") || e.includes("/"); ) {
          var r,
            [, n, i, a] = null != (r = c.exec(e)) ? r : [],
            o = y.parse(null != n ? n : ""),
            u = y.parse(null != a ? a : ""),
            l = "*" === i ? o.multiply(u) : o.divide(u);
          if (l.isNaN()) return "NaN";
          e = e.replace(c, l.toString());
        }
        for (; e.includes("+") || /.-\d+(?:\.\d+)?/.test(e); ) {
          var f,
            [, h, d, p] = null != (f = s.exec(e)) ? f : [],
            v = y.parse(null != h ? h : ""),
            g = y.parse(null != p ? p : ""),
            m = "+" === d ? v.add(g) : v.subtract(g);
          if (m.isNaN()) return "NaN";
          e = e.replace(s, m.toString());
        }
        return e;
      }
      var g = /\(([^()]*)\)/;
      function m(t) {
        var e = (function (t) {
          try {
            var e;
            return (
              (e = t.replace(/\s+/g, "")),
              (e = (function (t) {
                for (var e, r = t; null != (e = g.exec(r)); ) {
                  var [, n] = e;
                  r = r.replace(g, v(n));
                }
                return r;
              })(e)),
              (e = v(e))
            );
          } catch (t) {
            return "NaN";
          }
        })(t.slice(5, -1));
        return "NaN" === e ? "" : e;
      }
      var b = [
          "x",
          "y",
          "lineHeight",
          "capHeight",
          "scaleToFit",
          "textAnchor",
          "verticalAnchor",
          "fill",
        ],
        x = ["dx", "dy", "angle", "className", "breakAll"];
      function w() {
        return (w = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (t[n] = r[n]));
              }
              return t;
            }).apply(null, arguments);
      }
      function O(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if ({}.hasOwnProperty.call(t, n)) {
                if (-1 !== e.indexOf(n)) continue;
                r[n] = t[n];
              }
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              -1 === e.indexOf(r) &&
                {}.propertyIsEnumerable.call(t, r) &&
                (i[r] = t[r]);
        }
        return i;
      }
      var M = /[ \f\n\r\t\v\u2028\u2029]+/,
        j = (t) => {
          var { children: e, breakAll: r, style: n } = t;
          try {
            var i = [];
            (0, a.uy)(e) ||
              (i = r ? e.toString().split("") : e.toString().split(M));
            var o = i.map((t) => ({ word: t, width: (0, l.P)(t, n).width })),
              u = r ? 0 : (0, l.P)("\xa0", n).width;
            return { wordsWithComputedWidth: o, spaceWidth: u };
          } catch (t) {
            return null;
          }
        },
        S = (t, e, r, n, i) => {
          var o,
            { maxLines: u, children: l, style: c, breakAll: s } = t,
            f = (0, a.Et)(u),
            h = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return t.reduce((t, e) => {
                var { word: a, width: o } = e,
                  u = t[t.length - 1];
                return (
                  u && (null == n || i || u.width + o + r < Number(n))
                    ? (u.words.push(a), (u.width += o + r))
                    : t.push({ words: [a], width: o }),
                  t
                );
              }, []);
            },
            d = h(e),
            p = (t) => t.reduce((t, e) => (t.width > e.width ? t : e));
          if (!f || i || !(d.length > u || p(d).width > Number(n))) return d;
          for (
            var y = (t) => {
                var e = h(
                  j({ breakAll: s, style: c, children: l.slice(0, t) + "…" })
                    .wordsWithComputedWidth
                );
                return [e.length > u || p(e).width > Number(n), e];
              },
              v = 0,
              g = l.length - 1,
              m = 0;
            v <= g && m <= l.length - 1;

          ) {
            var b = Math.floor((v + g) / 2),
              [x, w] = y(b - 1),
              [O] = y(b);
            if ((x || O || (v = b + 1), x && O && (g = b - 1), !x && O)) {
              o = w;
              break;
            }
            m++;
          }
          return o || d;
        },
        _ = (t) => [{ words: (0, a.uy)(t) ? [] : t.toString().split(M) }],
        P = (t) => {
          var {
            width: e,
            scaleToFit: r,
            children: n,
            style: i,
            breakAll: a,
            maxLines: u,
          } = t;
          if ((e || r) && !o.m.isSsr) {
            var l = j({ breakAll: a, children: n, style: i });
            if (!l) return _(n);
            var { wordsWithComputedWidth: c, spaceWidth: s } = l;
            return S(
              { breakAll: a, children: n, maxLines: u, style: i },
              c,
              s,
              e,
              r
            );
          }
          return _(n);
        },
        A = "#808080",
        E = (0, n.forwardRef)((t, e) => {
          var r,
            {
              x: o = 0,
              y: l = 0,
              lineHeight: c = "1em",
              capHeight: s = "0.71em",
              scaleToFit: f = !1,
              textAnchor: h = "start",
              verticalAnchor: d = "end",
              fill: p = A,
            } = t,
            y = O(t, b),
            v = (0, n.useMemo)(
              () =>
                P({
                  breakAll: y.breakAll,
                  children: y.children,
                  maxLines: y.maxLines,
                  scaleToFit: f,
                  style: y.style,
                  width: y.width,
                }),
              [y.breakAll, y.children, y.maxLines, f, y.style, y.width]
            ),
            { dx: g, dy: M, angle: j, className: S, breakAll: _ } = y,
            E = O(y, x);
          if (!(0, a.vh)(o) || !(0, a.vh)(l)) return null;
          var T = o + ((0, a.Et)(g) ? g : 0),
            C = l + ((0, a.Et)(M) ? M : 0);
          switch (d) {
            case "start":
              r = m("calc(".concat(s, ")"));
              break;
            case "middle":
              r = m(
                "calc("
                  .concat((v.length - 1) / 2, " * -")
                  .concat(c, " + (")
                  .concat(s, " / 2))")
              );
              break;
            default:
              r = m("calc(".concat(v.length - 1, " * -").concat(c, ")"));
          }
          var k = [];
          if (f) {
            var D = v[0].width,
              { width: N } = y;
            k.push("scale(".concat((0, a.Et)(N) ? N / D : 1, ")"));
          }
          return (
            j &&
              k.push("rotate(".concat(j, ", ").concat(T, ", ").concat(C, ")")),
            k.length && (E.transform = k.join(" ")),
            n.createElement(
              "text",
              w({}, (0, u.J9)(E, !0), {
                ref: e,
                x: T,
                y: C,
                className: (0, i.$)("recharts-text", S),
                textAnchor: h,
                fill: p.includes("url") ? A : p,
              }),
              v.map((t, e) => {
                var i = t.words.join(_ ? "" : " ");
                return n.createElement(
                  "tspan",
                  {
                    x: T,
                    dy: 0 === e ? r : c,
                    key: "".concat(i, "-").concat(e),
                  },
                  i
                );
              })
            )
          );
        });
      E.displayName = "Text";
    },
    80885: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.isTypedArray = function (t) {
          return ArrayBuffer.isView(t) && !(t instanceof DataView);
        });
    },
    81571: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(72465),
        i = r(62194),
        a = r(14804),
        o = r(24517);
      e.iteratee = function (t) {
        if (null == t) return n.identity;
        switch (typeof t) {
          case "function":
            return t;
          case "object":
            if (Array.isArray(t) && 2 === t.length)
              return o.matchesProperty(t[0], t[1]);
            return a.matches(t);
          case "string":
          case "symbol":
          case "number":
            return i.property(t);
        }
      };
    },
    81971: (t, e, r) => {
      "use strict";
      r.d(e, { G: () => f, j: () => u });
      var n = r(45643),
        i = r(12115),
        a = r(15064),
        o = (t) => t,
        u = () => {
          var t = (0, i.useContext)(a.E);
          return t ? t.store.dispatch : o;
        },
        l = () => {},
        c = () => l,
        s = (t, e) => t === e;
      function f(t) {
        var e = (0, i.useContext)(a.E);
        return (0, n.useSyncExternalStoreWithSelector)(
          e ? e.subscription.addNestedSub : c,
          e ? e.store.getState : l,
          e ? e.store.getState : l,
          e ? t : l,
          s
        );
      }
    },
    82384: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.isObject = function (t) {
          return null !== t && ("object" == typeof t || "function" == typeof t);
        });
    },
    82962: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(78673);
      e.throttle = function (t, e = 0, r = {}) {
        let { leading: i = !0, trailing: a = !0 } = r;
        return n.debounce(t, e, { leading: i, maxWait: e, trailing: a });
      };
    },
    83540: (t, e, r) => {
      "use strict";
      r.d(e, { u: () => f });
      var n = r(52596),
        i = r(12115),
        a = r(20400),
        o = r.n(a),
        u = r(16377),
        l = r(675);
      function c(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(r), !0).forEach(function (e) {
                var n, i, a;
                (n = t),
                  (i = e),
                  (a = r[e]),
                  (i = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var f = (0, i.forwardRef)((t, e) => {
        var {
            aspect: r,
            initialDimension: a = { width: -1, height: -1 },
            width: c = "100%",
            height: f = "100%",
            minWidth: h = 0,
            minHeight: d,
            maxHeight: p,
            children: y,
            debounce: v = 0,
            id: g,
            className: m,
            onResize: b,
            style: x = {},
          } = t,
          w = (0, i.useRef)(null),
          O = (0, i.useRef)();
        (O.current = b), (0, i.useImperativeHandle)(e, () => w.current);
        var [M, j] = (0, i.useState)({
            containerWidth: a.width,
            containerHeight: a.height,
          }),
          S = (0, i.useCallback)((t, e) => {
            j((r) => {
              var n = Math.round(t),
                i = Math.round(e);
              return r.containerWidth === n && r.containerHeight === i
                ? r
                : { containerWidth: n, containerHeight: i };
            });
          }, []);
        (0, i.useEffect)(() => {
          var t = (t) => {
            var e,
              { width: r, height: n } = t[0].contentRect;
            S(r, n), null == (e = O.current) || e.call(O, r, n);
          };
          v > 0 && (t = o()(t, v, { trailing: !0, leading: !1 }));
          var e = new ResizeObserver(t),
            { width: r, height: n } = w.current.getBoundingClientRect();
          return (
            S(r, n),
            e.observe(w.current),
            () => {
              e.disconnect();
            }
          );
        }, [S, v]);
        var _ = (0, i.useMemo)(() => {
          var { containerWidth: t, containerHeight: e } = M;
          if (t < 0 || e < 0) return null;
          (0, l.R)(
            (0, u._3)(c) || (0, u._3)(f),
            "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",
            c,
            f
          ),
            (0, l.R)(
              !r || r > 0,
              "The aspect(%s) must be greater than zero.",
              r
            );
          var n = (0, u._3)(c) ? t : c,
            a = (0, u._3)(f) ? e : f;
          return (
            r &&
              r > 0 &&
              (n ? (a = n / r) : a && (n = a * r), p && a > p && (a = p)),
            (0, l.R)(
              n > 0 || a > 0,
              "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
              n,
              a,
              c,
              f,
              h,
              d,
              r
            ),
            i.Children.map(y, (t) =>
              (0, i.cloneElement)(t, {
                width: n,
                height: a,
                style: s({ width: n, height: a }, t.props.style),
              })
            )
          );
        }, [r, y, f, p, d, h, M, c]);
        return i.createElement(
          "div",
          {
            id: g ? "".concat(g) : void 0,
            className: (0, n.$)("recharts-responsive-container", m),
            style: s(
              s({}, x),
              {},
              { width: c, height: f, minWidth: h, minHeight: d, maxHeight: p }
            ),
            ref: w,
          },
          i.createElement(
            "div",
            { style: { width: 0, height: 0, overflow: "visible" } },
            _
          )
        );
      });
    },
    83616: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.eq = function (t, e) {
          return t === e || (Number.isNaN(t) && Number.isNaN(e));
        });
    },
    83949: (t, e, r) => {
      t.exports = r(49901).range;
    },
    84421: (t, e, r) => {
      "use strict";
      r.d(e, { F0: () => n, tQ: () => a, um: () => i });
      var n = "data-recharts-item-index",
        i = "data-recharts-item-data-key",
        a = 60;
    },
    85146: (t, e, r) => {
      "use strict";
      r.d(e, { q: () => n });
      var n = (t, e, r, n) => {
        var i;
        return "axis" === e
          ? t.tooltipItemPayloads
          : 0 === t.tooltipItemPayloads.length
          ? []
          : null ==
              (i =
                "hover" === r
                  ? t.itemInteraction.hover.dataKey
                  : t.itemInteraction.click.dataKey) && null != n
          ? [t.tooltipItemPayloads[0]]
          : t.tooltipItemPayloads.filter((t) => {
              var e;
              return (null == (e = t.settings) ? void 0 : e.dataKey) === i;
            });
      };
    },
    85252: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(22520),
        i = r(2767);
      e.isEqual = function (t, e) {
        return n.isEqualWith(t, e, i.noop);
      };
    },
    85654: (t, e, r) => {
      "use strict";
      function n(t) {
        return function () {
          return t;
        };
      }
      r.d(e, { A: () => n });
    },
    91165: (t, e, r) => {
      "use strict";
      r.d(e, { w: () => n });
      var n = (t) => {
        var e = t.currentTarget.getBoundingClientRect(),
          r = e.width / t.currentTarget.offsetWidth,
          n = e.height / t.currentTarget.offsetHeight;
        return {
          chartX: Math.round((t.clientX - e.left) / r),
          chartY: Math.round((t.clientY - e.top) / n),
        };
      };
    },
    93205: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(14545),
        i = r(98412),
        a = r(50177),
        o = r(64072);
      e.has = function (t, e) {
        let r;
        if (
          0 ===
          (r = Array.isArray(e)
            ? e
            : "string" == typeof e && n.isDeepKey(e) && t?.[e] == null
            ? o.toPath(e)
            : [e]).length
        )
          return !1;
        let u = t;
        for (let t = 0; t < r.length; t++) {
          let e = r[t];
          if (
            (null == u || !Object.hasOwn(u, e)) &&
            !(
              (Array.isArray(u) || a.isArguments(u)) &&
              i.isIndex(e) &&
              e < u.length
            )
          )
            return !1;
          u = u[e];
        }
        return !0;
      };
    },
    93389: (t, e, r) => {
      "use strict";
      function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(t, e) {
        var r = (function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? n(Object(r), !0).forEach(function (e) {
                  var n, i, a;
                  (n = t),
                    (i = e),
                    (a = r[e]),
                    (i = (function (t) {
                      var e = (function (t, e) {
                        if ("object" != typeof t || !t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                          var n = r.call(t, e || "default");
                          if ("object" != typeof n) return n;
                          throw TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === e ? String : Number)(t);
                      })(t, "string");
                      return "symbol" == typeof e ? e : e + "";
                    })(i)) in n
                      ? Object.defineProperty(n, i, {
                          value: a,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (n[i] = a);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : n(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        })({}, t);
        return Object.keys(e).reduce(
          (t, r) => (void 0 === t[r] && void 0 !== e[r] && (t[r] = e[r]), t),
          r
        );
      }
      r.d(e, { e: () => i });
    },
    94013: (t, e, r) => {
      "use strict";
      r.d(e, { N: () => u });
      var n = r(16377),
        i = r(39827);
      function a(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? a(Object(r), !0).forEach(function (e) {
                var n, i, a;
                (n = t),
                  (i = e),
                  (a = r[e]),
                  (i = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var u = (t, e, r, a, u, l, c) => {
        if (null != e && null != l) {
          var {
            chartData: s,
            computedData: f,
            dataStartIndex: h,
            dataEndIndex: d,
          } = r;
          return t.reduce((t, r) => {
            var p,
              y,
              v,
              g,
              m,
              { dataDefinedOnItem: b, settings: x } = r,
              w = (function (t, e, r) {
                return Array.isArray(t) && t && e + r !== 0
                  ? t.slice(e, r + 1)
                  : t;
              })(((p = b), (y = s), null != p ? p : y), h, d),
              O =
                null != (v = null == x ? void 0 : x.dataKey)
                  ? v
                  : null == a
                  ? void 0
                  : a.dataKey,
              M = null == x ? void 0 : x.nameKey;
            return (
              Array.isArray(
                (g =
                  null != a &&
                  a.dataKey &&
                  Array.isArray(w) &&
                  !Array.isArray(w[0]) &&
                  "axis" === c
                    ? (0, n.eP)(w, a.dataKey, u)
                    : l(w, e, f, M))
              )
                ? g.forEach((e) => {
                    var r = o(
                      o({}, x),
                      {},
                      {
                        name: e.name,
                        unit: e.unit,
                        color: void 0,
                        fill: void 0,
                      }
                    );
                    t.push(
                      (0, i.GF)({
                        tooltipEntrySettings: r,
                        dataKey: e.dataKey,
                        payload: e.payload,
                        value: (0, i.kr)(e.payload, e.dataKey),
                        name: e.name,
                      })
                    );
                  })
                : t.push(
                    (0, i.GF)({
                      tooltipEntrySettings: x,
                      dataKey: O,
                      payload: g,
                      value: (0, i.kr)(g, O),
                      name:
                        null != (m = (0, i.kr)(g, M))
                          ? m
                          : null == x
                          ? void 0
                          : x.name,
                    })
                  ),
              t
            );
          }, []);
        }
      };
    },
    94685: (t, e, r) => {
      "use strict";
      r.d(e, { YF: () => c, dj: () => s, fP: () => f, ky: () => l });
      var n = r(5710),
        i = r(34890),
        a = r(63027),
        o = r(96523),
        u = r(91165),
        l = (0, n.VP)("mouseClick"),
        c = (0, n.Nc)();
      c.startListening({
        actionCreator: l,
        effect: (t, e) => {
          var r = t.payload,
            n = (0, a.g)(e.getState(), (0, u.w)(r));
          (null == n ? void 0 : n.activeIndex) != null &&
            e.dispatch(
              (0, i.jF)({
                activeIndex: n.activeIndex,
                activeDataKey: void 0,
                activeCoordinate: n.activeCoordinate,
              })
            );
        },
      });
      var s = (0, n.VP)("mouseMove"),
        f = (0, n.Nc)();
      f.startListening({
        actionCreator: s,
        effect: (t, e) => {
          var r = t.payload,
            n = e.getState(),
            l = (0, o.au)(n, n.tooltip.settings.shared),
            c = (0, a.g)(n, (0, u.w)(r));
          "axis" === l &&
            ((null == c ? void 0 : c.activeIndex) != null
              ? e.dispatch(
                  (0, i.Nt)({
                    activeIndex: c.activeIndex,
                    activeDataKey: void 0,
                    activeCoordinate: c.activeCoordinate,
                  })
                )
              : e.dispatch((0, i.xS)()));
        },
      });
    },
    94732: (t, e, r) => {
      "use strict";
      r.d(e, {
        BZ: () => D,
        aX: () => z,
        dS: () => k,
        dp: () => E,
        fW: () => O,
        pg: () => C,
        r1: () => _,
        u9: () => N,
        yn: () => I,
      });
      var n = r(68924),
        i = r(20241),
        a = r.n(i),
        o = r(81971),
        u = r(39827),
        l = r(60356),
        c = r(20215),
        s = r(18478),
        f = r(97238),
        h = r(56124),
        d = r(2589),
        p = r(60530),
        y = r(11928),
        v = r(60841),
        g = r(64968),
        m = r(85146),
        b = r(46670),
        x = r(75714),
        w = r(94013),
        O = () => (0, o.G)(s.iO),
        M = (t, e) => e,
        j = (t, e, r) => r,
        S = (t, e, r, n) => n,
        _ = (0, n.Mz)(c.R4, (t) => a()(t, (t) => t.coordinate)),
        P = (0, n.Mz)([x.J, M, j, S], y.i),
        A = (0, n.Mz)([P, c.n4], v.P),
        E = (t, e, r) => {
          if (null != e) {
            var n = (0, x.J)(t);
            return "axis" === e
              ? "hover" === r
                ? n.axisInteraction.hover.dataKey
                : n.axisInteraction.click.dataKey
              : "hover" === r
              ? n.itemInteraction.hover.dataKey
              : n.itemInteraction.click.dataKey;
          }
        },
        T = (0, n.Mz)([x.J, M, j, S], m.q),
        C = (0, n.Mz)([d.Lp, d.A$, f.fz, h.HZ, c.R4, S, T, b.x], g.o),
        k = (0, n.Mz)([P, C], (t, e) => {
          var r;
          return null != (r = t.coordinate) ? r : e;
        }),
        D = (0, n.Mz)(c.R4, A, p.E),
        N = (0, n.Mz)([T, A, l.LF, c.Dn, D, b.x, M], w.N),
        I = (0, n.Mz)([P], (t) => ({
          isActive: t.active,
          activeIndex: t.index,
        })),
        z = (t, e, r, n, i, a, o, l) => {
          if (t && e && n && i && a) {
            var c = (0, u.r4)(t.chartX, t.chartY, e, r, l);
            if (c) {
              var s = (0, u.SW)(c, e),
                f = (0, u.gH)(s, o, a, n, i),
                h = (0, u.bk)(e, a, f, c);
              return { activeIndex: String(f), activeCoordinate: h };
            }
          }
        };
    },
    95672: (t, e, r) => {
      t.exports = r(10921).get;
    },
    95932: (t, e, r) => {
      "use strict";
      r.d(e, { s: () => u });
      var n = r(12115),
        i = r(71807),
        a = r(48627),
        o = r(81971);
      function u(t) {
        var { layout: e, width: r, height: u, margin: l } = t,
          c = (0, o.j)(),
          s = (0, i.r)();
        return (
          (0, n.useEffect)(() => {
            s ||
              (c((0, a.JK)(e)),
              c((0, a.gX)({ width: r, height: u })),
              c((0, a.B_)(l)));
          }, [c, s, e, r, u, l]),
          null
        );
      }
    },
    96523: (t, e, r) => {
      "use strict";
      r.d(e, {
        $g: () => o,
        Hw: () => a,
        Td: () => l,
        au: () => u,
        xH: () => i,
      });
      var n = r(81971),
        i = (t) => t.options.defaultTooltipEventType,
        a = (t) => t.options.validateTooltipEventTypes;
      function o(t, e, r) {
        if (null == t) return e;
        var n = t ? "axis" : "item";
        return null == r ? e : r.includes(n) ? n : e;
      }
      function u(t, e) {
        return o(e, i(t), a(t));
      }
      function l(t) {
        return (0, n.G)((e) => u(e, t));
      }
    },
    96752: (t, e, r) => {
      "use strict";
      r.d(e, { $: () => i });
      var n = r(81971),
        i = () => (0, n.G)((t) => t.rootProps.accessibilityLayer);
    },
    96908: (t, e, r) => {
      "use strict";
      r.d(e, { W: () => a, h: () => i });
      var n = r(68924),
        i = (0, n.Mz)(
          (t) => t.cartesianAxis.xAxis,
          (t) => Object.values(t)
        ),
        a = (0, n.Mz)(
          (t) => t.cartesianAxis.yAxis,
          (t) => Object.values(t)
        );
    },
    97238: (t, e, r) => {
      "use strict";
      r.d(e, {
        Kp: () => p,
        W7: () => s,
        WX: () => v,
        fz: () => y,
        rY: () => h,
        sk: () => l,
        yi: () => f,
      }),
        r(12115);
      var n = r(81971),
        i = r(56124),
        a = r(2589),
        o = r(71807),
        u = r(20972),
        l = () => {
          var t,
            e = (0, o.r)(),
            r = (0, n.G)(i.Ds),
            a = (0, n.G)(u.U),
            l = null == (t = (0, n.G)(u.C)) ? void 0 : t.padding;
          return e && a && l
            ? {
                width: a.width - l.left - l.right,
                height: a.height - l.top - l.bottom,
                x: l.left,
                y: l.top,
              }
            : r;
        },
        c = {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0,
          brushBottom: 0,
        },
        s = () => {
          var t;
          return null != (t = (0, n.G)(i.HZ)) ? t : c;
        },
        f = () => (0, n.G)(a.Lp),
        h = () => (0, n.G)(a.A$),
        d = { top: 0, right: 0, bottom: 0, left: 0 },
        p = () => {
          var t;
          return null != (t = (0, n.G)((t) => t.layout.margin)) ? t : d;
        },
        y = (t) => t.layout.layoutType,
        v = () => (0, n.G)(y);
    },
    98132: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let n = r(72744);
      e.isMatch = function (t, e) {
        return n.isMatchWith(t, e, () => void 0);
      };
    },
    98221: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.getSymbols = function (t) {
          return Object.getOwnPropertySymbols(t).filter((e) =>
            Object.prototype.propertyIsEnumerable.call(t, e)
          );
        });
    },
    98412: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      let r = /^(?:0|[1-9]\d*)$/;
      e.isIndex = function (t, e = Number.MAX_SAFE_INTEGER) {
        switch (typeof t) {
          case "number":
            return Number.isInteger(t) && t >= 0 && t < e;
          case "symbol":
            return !1;
          case "string":
            return r.test(t);
        }
      };
    },
    99279: (t, e) => {
      "use strict";
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        (e.isObjectLike = function (t) {
          return "object" == typeof t && null !== t;
        });
    },
  },
]);
