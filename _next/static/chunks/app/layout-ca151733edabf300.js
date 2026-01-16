(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7177],
  {
    8169: (e, t, r) => {
      "use strict";
      r.d(t, { T: () => n });
      var s = r(23464);
      class i {
        async setup() {
          this.isVisitActionLogged ||
            ((this.isVisitActionLogged = !0),
            await this.logAction({ action: "VISIT" }));
        }
        async logAction(e) {
          if (this.serverUrl)
            try {
              var t;
              let r = document.referrer,
                i = await s.A.post(
                  "".concat(this.serverUrl, "api/log-user-action"),
                  { ...e, href: this.href, referral_url: r },
                  {
                    headers: {
                      token:
                        null != (t = localStorage.getItem("_cc_token"))
                          ? t
                          : "",
                    },
                  }
                );
              i.data._token && localStorage.setItem("_cc_token", i.data._token);
            } catch (e) {}
        }
        constructor() {
          (this.isVisitActionLogged = !1),
            (this.serverUrl = "https://tapzi-campaign-manager.vercel.app/"),
            (this.href = window.location.href);
        }
      }
      let n = new i();
    },
    19564: (e, t, r) => {
      "use strict";
      r.d(t, { queryClient: () => s });
      let s = new (r(52775).E)({
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
    23204: (e, t, r) => {
      "use strict";
      r.d(t, { $W: () => p, Lg: () => f, tN: () => b });
      var s = r(17449),
        i = r(70051),
        n = r(57394),
        a = r(37200),
        o = r(65730),
        u = r(37120),
        l = r(40016),
        c = r(56886),
        d = r(55557);
      let f =
        r(87358).env.NEXT_PUBLIC_PROJECT_ID ||
        "bf3389810983a6aa0870f68f57a5af96";
      if (!f) throw Error("Project ID is not defined");
      let h = [a.r, o.n, u.N, l.E, c.D, d.G],
        p = (0, s.B)({
          chains: h,
          projectId: f,
          metadata: {
            name: "Web3Modal",
            description: "Web3Modal Example",
            url: "https://tapziwinner.org",
            icons: ["https://avatars.githubusercontent.com/u/37784886"],
          },
          ssr: !0,
          storage: (0, i.wE)({ storage: n.iM }),
        }),
        b =
          "https://summer-white-ensemble.solana-mainnet.quiknode.pro/43f4a5802d6e7dd74c2b9aa42095b9cc9aa45098/";
    },
    23666: (e, t, r) => {
      "use strict";
      r.d(t, { useSuspenseQuery: () => a });
      var s = r(76347),
        i = r(50005),
        n = r(4791);
      function a(e, t) {
        return (0, i.t)(
          {
            ...e,
            enabled: !0,
            suspense: !0,
            throwOnError: n.R3,
            placeholderData: void 0,
          },
          s.$,
          t
        );
      }
    },
    29656: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => u });
      var s = r(45530),
        i = r(95838),
        n = r(23464),
        a = r(2145);
      let o = async (e) =>
          (
            await n.A.post((0, s.I)("api/create-user-profile-wallet"), {
              wallet_address: e,
            })
          ).data,
        u = () => {
          let { address: e, isConnected: t } = (0, a.F)();
          return (0, i.useQuery)({
            queryKey: ["get-profile", t, e],
            queryFn: () => o(e),
            enabled: t,
          });
        };
    },
    30347: () => {},
    41142: (e, t, r) => {
      "use strict";
      r.d(t, { useSuspenseQueries: () => n });
      var s = r(71610),
        i = r(4791);
      function n(e, t) {
        return (0, s.useQueries)(
          {
            ...e,
            queries: e.queries.map((e) => ({
              ...e,
              suspense: !0,
              throwOnError: i.R3,
              enabled: !0,
              placeholderData: void 0,
            })),
          },
          t
        );
      }
    },
    42714: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "setAttributesFromProps", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let r = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv",
          noModule: "noModule",
        },
        s = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ];
      function i(e) {
        return ["async", "defer", "noModule"].includes(e);
      }
      function n(e, t) {
        for (let [n, a] of Object.entries(t)) {
          if (!t.hasOwnProperty(n) || s.includes(n) || void 0 === a) continue;
          let o = r[n] || n.toLowerCase();
          "SCRIPT" === e.tagName && i(o)
            ? (e[o] = !!a)
            : e.setAttribute(o, String(a)),
            (!1 === a ||
              ("SCRIPT" === e.tagName && i(o) && (!a || "false" === a))) &&
              (e.setAttribute(o, ""), e.removeAttribute(o));
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    45530: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => s });
      let s = (e) => "".concat("https://api.tapzi.io", "/").concat(e);
    },
    48822: (e, t, r) => {
      "use strict";
      r.d(t, { useInfiniteQuery: () => n });
      var s = r(74123),
        i = r(50005);
      function n(e, t) {
        return (0, i.t)(e, s.z, t);
      }
    },
    49473: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => y });
      var s = r(95155),
        i = r(12115),
        n = r(23204),
        a = r(86124),
        o = r(48374),
        u = r(8169),
        l = r(29656),
        c = r(16453),
        d = r(45530),
        f = r(95838),
        h = r(23464),
        p = r(2145);
      let b = async (e) =>
          (
            await h.A.get((0, d.I)("api/get-profile-rank"), {
              headers: { Authorization: "Bearer ".concat(e) },
            })
          ).data.data,
        g = (e) => {
          let { isConnected: t, address: r } = (0, p.F)();
          return (0, f.useQuery)({
            queryKey: ["get-profile-rank", t, r],
            queryFn: () => b((null == e ? void 0 : e.toString()) || ""),
            enabled: t && !!e,
          });
        };
      var v = r(64368);
      if (!n.Lg) throw Error("Project ID is not defined");
      function y(e) {
        let { children: t, initialState: r } = e;
        return (
          (0, i.useEffect)(() => {
            u.T.setup();
          }, []),
          (0, s.jsxs)(o.x, {
            config: n.$W,
            initialState: r,
            children: [(0, s.jsx)(m, {}), t],
          })
        );
      }
      (0, a.Pg)({ wagmiConfig: n.$W, projectId: n.Lg, enableAnalytics: !0 });
      let m = () => {
        let { data: e } = (0, l.A)(),
          { data: t } = g(null == e ? void 0 : e.access_token),
          r = (0, v.k)((e) => e.setRankProfile);
        return (
          (0, i.useEffect)(() => {
            t && r(t);
          }, [t]),
          (0, i.useEffect)(() => {
            (null == e ? void 0 : e.access_token) &&
              (0, c.setCookie)("X-Access-Token", e.access_token);
          }, [e]),
          null
        );
      };
    },
    55490: (e, t, r) => {
      "use strict";
      r.d(t, { useSuspenseInfiniteQuery: () => a });
      var s = r(74123),
        i = r(50005),
        n = r(4791);
      function a(e, t) {
        return (0, i.t)(
          { ...e, enabled: !0, suspense: !0, throwOnError: n.R3 },
          s.z,
          t
        );
      }
    },
    61643: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 88902)),
        Promise.resolve().then(r.bind(r, 61581)),
        Promise.resolve().then(r.bind(r, 26715)),
        Promise.resolve().then(r.bind(r, 80382)),
        Promise.resolve().then(r.bind(r, 48822)),
        Promise.resolve().then(r.bind(r, 62490)),
        Promise.resolve().then(r.bind(r, 5041)),
        Promise.resolve().then(r.bind(r, 99138)),
        Promise.resolve().then(r.bind(r, 71610)),
        Promise.resolve().then(r.bind(r, 95838)),
        Promise.resolve().then(r.bind(r, 55490)),
        Promise.resolve().then(r.bind(r, 41142)),
        Promise.resolve().then(r.bind(r, 23666)),
        Promise.resolve().then(r.t.bind(r, 69243, 23)),
        Promise.resolve().then(r.t.bind(r, 79779, 23)),
        Promise.resolve().then(r.bind(r, 56671)),
        Promise.resolve().then(r.t.bind(r, 30347, 23)),
        Promise.resolve().then(r.bind(r, 49473)),
        Promise.resolve().then(r.bind(r, 19564));
    },
    62490: (e, t, r) => {
      "use strict";
      r.d(t, { useIsFetching: () => a });
      var s = r(12115),
        i = r(7165),
        n = r(26715);
      function a(e, t) {
        let r = (0, n.useQueryClient)(t),
          a = r.getQueryCache();
        return s.useSyncExternalStore(
          s.useCallback((e) => a.subscribe(i.jG.batchCalls(e)), [a]),
          () => r.isFetching(e),
          () => r.isFetching(e)
        );
      }
    },
    64368: (e, t, r) => {
      "use strict";
      r.d(t, { k: () => s });
      let s = (0, r(65521).v)()((e) => ({
        user: null,
        setUser: (t) => e({ user: t }),
        rankProfile: null,
        setRankProfile: (t) => e({ rankProfile: t }),
      }));
    },
    69243: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return y;
          },
          handleClientScriptLoad: function () {
            return b;
          },
          initScriptLoader: function () {
            return g;
          },
        });
      let s = r(88229),
        i = r(6966),
        n = r(95155),
        a = s._(r(47650)),
        o = i._(r(12115)),
        u = r(82830),
        l = r(42714),
        c = r(92374),
        d = new Map(),
        f = new Set(),
        h = (e) => {
          if (a.default.preinit)
            return void e.forEach((e) => {
              a.default.preinit(e, { as: "style" });
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
        p = (e) => {
          let {
              src: t,
              id: r,
              onLoad: s = () => {},
              onReady: i = null,
              dangerouslySetInnerHTML: n,
              children: a = "",
              strategy: o = "afterInteractive",
              onError: u,
              stylesheets: c,
            } = e,
            p = r || t;
          if (p && f.has(p)) return;
          if (d.has(t)) {
            f.add(p), d.get(t).then(s, u);
            return;
          }
          let b = () => {
              i && i(), f.add(p);
            },
            g = document.createElement("script"),
            v = new Promise((e, t) => {
              g.addEventListener("load", function (t) {
                e(), s && s.call(this, t), b();
              }),
                g.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              u && u(e);
            });
          n
            ? ((g.innerHTML = n.__html || ""), b())
            : a
            ? ((g.textContent =
                "string" == typeof a ? a : Array.isArray(a) ? a.join("") : ""),
              b())
            : t && ((g.src = t), d.set(t, v)),
            (0, l.setAttributesFromProps)(g, e),
            "worker" === o && g.setAttribute("type", "text/partytown"),
            g.setAttribute("data-nscript", o),
            c && h(c),
            document.body.appendChild(g);
        };
      function b(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, c.requestIdleCallback)(() => p(e));
            })
          : p(e);
      }
      function g(e) {
        e.forEach(b),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            f.add(t);
          });
      }
      function v(e) {
        let {
            id: t,
            src: r = "",
            onLoad: s = () => {},
            onReady: i = null,
            strategy: l = "afterInteractive",
            onError: d,
            stylesheets: h,
            ...b
          } = e,
          {
            updateScripts: g,
            scripts: v,
            getIsSsr: y,
            appDir: m,
            nonce: P,
          } = (0, o.useContext)(u.HeadManagerContext),
          _ = (0, o.useRef)(!1);
        (0, o.useEffect)(() => {
          let e = t || r;
          _.current || (i && e && f.has(e) && i(), (_.current = !0));
        }, [i, t, r]);
        let O = (0, o.useRef)(!1);
        if (
          ((0, o.useEffect)(() => {
            if (!O.current) {
              if ("afterInteractive" === l) p(e);
              else
                "lazyOnload" === l &&
                  ("complete" === document.readyState
                    ? (0, c.requestIdleCallback)(() => p(e))
                    : window.addEventListener("load", () => {
                        (0, c.requestIdleCallback)(() => p(e));
                      }));
              O.current = !0;
            }
          }, [e, l]),
          ("beforeInteractive" === l || "worker" === l) &&
            (g
              ? ((v[l] = (v[l] || []).concat([
                  { id: t, src: r, onLoad: s, onReady: i, onError: d, ...b },
                ])),
                g(v))
              : y && y()
              ? f.add(t || r)
              : y && !y() && p(e)),
          m)
        ) {
          if (
            (h &&
              h.forEach((e) => {
                a.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === l)
          )
            if (!r)
              return (
                b.dangerouslySetInnerHTML &&
                  ((b.children = b.dangerouslySetInnerHTML.__html),
                  delete b.dangerouslySetInnerHTML),
                (0, n.jsx)("script", {
                  nonce: P,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...b, id: t }]) +
                      ")",
                  },
                })
              );
            else
              return (
                a.default.preload(
                  r,
                  b.integrity
                    ? {
                        as: "script",
                        integrity: b.integrity,
                        nonce: P,
                        crossOrigin: b.crossOrigin,
                      }
                    : { as: "script", nonce: P, crossOrigin: b.crossOrigin }
                ),
                (0, n.jsx)("script", {
                  nonce: P,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([r, { ...b, id: t }]) +
                      ")",
                  },
                })
              );
          "afterInteractive" === l &&
            r &&
            a.default.preload(
              r,
              b.integrity
                ? {
                    as: "script",
                    integrity: b.integrity,
                    nonce: P,
                    crossOrigin: b.crossOrigin,
                  }
                : { as: "script", nonce: P, crossOrigin: b.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(v, "__nextScript", { value: !0 });
      let y = v;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    71610: (e, t, r) => {
      "use strict";
      r.d(t, { useQueries: () => b });
      var s = r(12115),
        i = r(7165),
        n = r(76347),
        a = r(25910),
        o = r(52020);
      function u(e, t) {
        let r = new Set(t);
        return e.filter((e) => !r.has(e));
      }
      var l = class extends a.Q {
          #e;
          #t;
          #r;
          #s;
          #i;
          #n;
          #a;
          #o;
          #u = [];
          constructor(e, t, r) {
            super(),
              (this.#e = e),
              (this.#s = r),
              (this.#r = []),
              (this.#i = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#i.forEach((e) => {
                e.subscribe((t) => {
                  this.#l(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#i.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t) {
            (this.#r = e),
              (this.#s = t),
              i.jG.batch(() => {
                let e = this.#i,
                  t = this.#c(this.#r);
                (this.#u = t),
                  t.forEach((e) =>
                    e.observer.setOptions(e.defaultedQueryOptions)
                  );
                let r = t.map((e) => e.observer),
                  s = r.map((e) => e.getCurrentResult()),
                  i = r.some((t, r) => t !== e[r]);
                (e.length !== r.length || i) &&
                  ((this.#i = r),
                  (this.#t = s),
                  this.hasListeners() &&
                    (u(e, r).forEach((e) => {
                      e.destroy();
                    }),
                    u(r, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#l(e, t);
                      });
                    }),
                    this.#d()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#i.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#i;
          }
          getOptimisticResult(e, t) {
            let r = this.#c(e),
              s = r.map((e) =>
                e.observer.getOptimisticResult(e.defaultedQueryOptions)
              );
            return [s, (e) => this.#f(e ?? s, t), () => this.#h(s, r)];
          }
          #h(e, t) {
            return t.map((r, s) => {
              let i = e[s];
              return r.defaultedQueryOptions.notifyOnChangeProps
                ? i
                : r.observer.trackResult(i, (e) => {
                    t.forEach((t) => {
                      t.observer.trackProp(e);
                    });
                  });
            });
          }
          #f(e, t) {
            return t
              ? ((this.#n && this.#t === this.#o && t === this.#a) ||
                  ((this.#a = t),
                  (this.#o = this.#t),
                  (this.#n = (0, o.BH)(this.#n, t(e)))),
                this.#n)
              : e;
          }
          #c(e) {
            let t = new Map(this.#i.map((e) => [e.options.queryHash, e])),
              r = [];
            return (
              e.forEach((e) => {
                let s = this.#e.defaultQueryOptions(e),
                  i = t.get(s.queryHash);
                i
                  ? r.push({ defaultedQueryOptions: s, observer: i })
                  : r.push({
                      defaultedQueryOptions: s,
                      observer: new n.$(this.#e, s),
                    });
              }),
              r
            );
          }
          #l(e, t) {
            let r = this.#i.indexOf(e);
            -1 !== r &&
              ((this.#t = (function (e, t, r) {
                let s = e.slice(0);
                return (s[t] = r), s;
              })(this.#t, r, t)),
              this.#d());
          }
          #d() {
            if (this.hasListeners()) {
              let e = this.#n,
                t = this.#h(this.#t, this.#u);
              e !== this.#f(t, this.#s?.combine) &&
                i.jG.batch(() => {
                  this.listeners.forEach((e) => {
                    e(this.#t);
                  });
                });
            }
          }
        },
        c = r(26715),
        d = r(61581),
        f = r(80382),
        h = r(22450),
        p = r(4791);
      function b(e, t) {
        let { queries: r, ...a } = e,
          u = (0, c.useQueryClient)(t),
          b = (0, d.useIsRestoring)(),
          g = (0, f.useQueryErrorResetBoundary)(),
          v = s.useMemo(
            () =>
              r.map((e) => {
                let t = u.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = b ? "isRestoring" : "optimistic"), t
                );
              }),
            [r, u, b]
          );
        v.forEach((e) => {
          (0, p.jv)(e), (0, h.LJ)(e, g);
        }),
          (0, h.wZ)(g);
        let [y] = s.useState(() => new l(u, v, a)),
          [m, P, _] = y.getOptimisticResult(v, a.combine),
          O = !b && !1 !== a.subscribed;
        s.useSyncExternalStore(
          s.useCallback(
            (e) => (O ? y.subscribe(i.jG.batchCalls(e)) : o.lQ),
            [y, O]
          ),
          () => y.getCurrentResult(),
          () => y.getCurrentResult()
        ),
          s.useEffect(() => {
            y.setQueries(v, a);
          }, [v, a, y]);
        let w = m.some((e, t) => (0, p.EU)(v[t], e))
          ? m.flatMap((e, t) => {
              let r = v[t];
              if (r) {
                let t = new n.$(u, r);
                if ((0, p.EU)(r, e)) return (0, p.iL)(r, t, g);
                (0, p.nE)(e, b) && (0, p.iL)(r, t, g);
              }
              return [];
            })
          : [];
        if (w.length > 0) throw Promise.all(w);
        let E = m.find((e, t) => {
          let r = v[t];
          return (
            r &&
            (0, h.$1)({
              result: e,
              errorResetBoundary: g,
              throwOnError: r.throwOnError,
              query: u.getQueryCache().get(r.queryHash),
              suspense: r.suspense,
            })
          );
        });
        if (null == E ? void 0 : E.error) throw E.error;
        return P(_());
      }
    },
    74123: (e, t, r) => {
      "use strict";
      r.d(t, { z: () => n });
      var s = r(76347),
        i = r(64275),
        n = class extends s.$ {
          constructor(e, t) {
            super(e, t);
          }
          bindMethods() {
            super.bindMethods(),
              (this.fetchNextPage = this.fetchNextPage.bind(this)),
              (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
          }
          setOptions(e) {
            super.setOptions({ ...e, behavior: (0, i.PL)() });
          }
          getOptimisticResult(e) {
            return (e.behavior = (0, i.PL)()), super.getOptimisticResult(e);
          }
          fetchNextPage(e) {
            return this.fetch({
              ...e,
              meta: { fetchMore: { direction: "forward" } },
            });
          }
          fetchPreviousPage(e) {
            return this.fetch({
              ...e,
              meta: { fetchMore: { direction: "backward" } },
            });
          }
          createResult(e, t) {
            let { state: r } = e,
              s = super.createResult(e, t),
              {
                isFetching: n,
                isRefetching: a,
                isError: o,
                isRefetchError: u,
              } = s,
              l = r.fetchMeta?.fetchMore?.direction,
              c = o && "forward" === l,
              d = n && "forward" === l,
              f = o && "backward" === l,
              h = n && "backward" === l;
            return {
              ...s,
              fetchNextPage: this.fetchNextPage,
              fetchPreviousPage: this.fetchPreviousPage,
              hasNextPage: (0, i.rB)(t, r.data),
              hasPreviousPage: (0, i.RQ)(t, r.data),
              isFetchNextPageError: c,
              isFetchingNextPage: d,
              isFetchPreviousPageError: f,
              isFetchingPreviousPage: h,
              isRefetchError: u && !c && !f,
              isRefetching: a && !d && !h,
            };
          }
        };
    },
    79779: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Urbanist', 'Urbanist Fallback'",
          fontStyle: "normal",
        },
        className: "__className_472caf",
        variable: "__variable_472caf",
      };
    },
    88902: (e, t, r) => {
      "use strict";
      r.d(t, { HydrationBoundary: () => u });
      var s = r(12115),
        i = r(73504);
      function n(e) {
        return e;
      }
      function a(e, t, r) {
        if ("object" != typeof t || null === t) return;
        let s = e.getMutationCache(),
          a = e.getQueryCache(),
          o =
            r?.defaultOptions?.deserializeData ??
            e.getDefaultOptions().hydrate?.deserializeData ??
            n,
          u = t.mutations || [],
          l = t.queries || [];
        u.forEach(({ state: t, ...i }) => {
          s.build(
            e,
            {
              ...e.getDefaultOptions().hydrate?.mutations,
              ...r?.defaultOptions?.mutations,
              ...i,
            },
            t
          );
        }),
          l.forEach(
            ({
              queryKey: t,
              state: s,
              queryHash: n,
              meta: u,
              promise: l,
              dehydratedAt: c,
            }) => {
              let d = l ? (0, i.b)(l) : void 0,
                f = void 0 === s.data ? d?.data : s.data,
                h = void 0 === f ? f : o(f),
                p = a.get(n),
                b = p?.state.status === "pending",
                g = p?.state.fetchStatus === "fetching";
              if (p) {
                let e = d && void 0 !== c && c > p.state.dataUpdatedAt;
                if (s.dataUpdatedAt > p.state.dataUpdatedAt || e) {
                  let { fetchStatus: e, ...t } = s;
                  p.setState({ ...t, data: h });
                }
              } else
                p = a.build(
                  e,
                  {
                    ...e.getDefaultOptions().hydrate?.queries,
                    ...r?.defaultOptions?.queries,
                    queryKey: t,
                    queryHash: n,
                    meta: u,
                  },
                  {
                    ...s,
                    data: h,
                    fetchStatus: "idle",
                    status: void 0 !== h ? "success" : s.status,
                  }
                );
              l &&
                !b &&
                !g &&
                (void 0 === c || c > p.state.dataUpdatedAt) &&
                p.fetch(void 0, { initialPromise: Promise.resolve(l).then(o) });
            }
          );
      }
      var o = r(26715),
        u = (e) => {
          let { children: t, options: r = {}, state: i, queryClient: n } = e,
            u = (0, o.useQueryClient)(n),
            l = s.useRef(r);
          l.current = r;
          let c = s.useMemo(() => {
            if (i) {
              if ("object" != typeof i) return;
              let e = u.getQueryCache(),
                t = i.queries || [],
                r = [],
                s = [];
              for (let i of t) {
                let t = e.get(i.queryHash);
                t
                  ? (i.state.dataUpdatedAt > t.state.dataUpdatedAt ||
                      (i.promise &&
                        "pending" !== t.state.status &&
                        "fetching" !== t.state.fetchStatus &&
                        void 0 !== i.dehydratedAt &&
                        i.dehydratedAt > t.state.dataUpdatedAt)) &&
                    s.push(i)
                  : r.push(i);
              }
              if (
                (r.length > 0 && a(u, { queries: r }, l.current), s.length > 0)
              )
                return s;
            }
          }, [u, i]);
          return (
            s.useEffect(() => {
              c && a(u, { queries: c }, l.current);
            }, [u, c]),
            t
          );
        };
    },
    92374: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          cancelIdleCallback: function () {
            return s;
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
        s =
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
    99138: (e, t, r) => {
      "use strict";
      r.d(t, { useIsMutating: () => o, useMutationState: () => l });
      var s = r(12115),
        i = r(52020),
        n = r(7165),
        a = r(26715);
      function o(e, t) {
        let r = (0, a.useQueryClient)(t);
        return l({ filters: { ...e, status: "pending" } }, r).length;
      }
      function u(e, t) {
        return e
          .findAll(t.filters)
          .map((e) => (t.select ? t.select(e) : e.state));
      }
      function l() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0,
          r = (0, a.useQueryClient)(t).getMutationCache(),
          o = s.useRef(e),
          l = s.useRef(null);
        return (
          l.current || (l.current = u(r, e)),
          s.useEffect(() => {
            o.current = e;
          }),
          s.useSyncExternalStore(
            s.useCallback(
              (e) =>
                r.subscribe(() => {
                  let t = (0, i.BH)(l.current, u(r, o.current));
                  l.current !== t && ((l.current = t), n.jG.schedule(e));
                }),
              [r]
            ),
            () => l.current,
            () => l.current
          )
        );
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [
        3630, 7690, 2145, 4134, 4709, 5702, 6671, 6124, 8978, 8655, 8441, 1684,
        7358,
      ],
      () => t(61643)
    ),
      (_N_E = e.O());
  },
]);
