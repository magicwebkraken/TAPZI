"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8025],
  {
    88025: (e, t, n) => {
      n.r(t),
        n.d(t, {
          WalletContext: () => u.b,
          WalletProvider: () => d,
          useLocalStorage: () => a,
          useWallet: () => u.v,
        });
      var r = n(12115),
        c = n(93779);
      function a(e, t) {
        let [n, a] = (0, r.useState)(() => {
            try {
              let t = localStorage.getItem(e);
              if (t) return JSON.parse(t);
            } catch (e) {
              (0, c.My)() && console.error(e);
            }
            return t;
          }),
          u = (0, r.useRef)(!0);
        return (
          (0, r.useEffect)(() => {
            if (u.current) {
              u.current = !1;
              return;
            }
            try {
              null === n
                ? localStorage.removeItem(e)
                : localStorage.setItem(e, JSON.stringify(n));
            } catch (e) {
              (0, c.My)() && console.error(e);
            }
          }, [n, e]),
          [n, a]
        );
      }
      var u = n(49494),
        l = n(82313),
        o = n(49697),
        s = n(22162),
        i = function (e, t, n, r) {
          return new (n || (n = Promise))(function (c, a) {
            function u(e) {
              try {
                o(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                o(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function o(e) {
              var t;
              e.done
                ? c(e.value)
                : ((t = e.value) instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })
                  ).then(u, l);
            }
            o((r = r.apply(e, t || [])).next());
          });
        };
      let f = { wallet: null, address: null, connected: !1, adapter: null },
        d = function ({
          children: e,
          adapters: t = null,
          onError: n = (e) => console.error(e),
          onReadyStateChanged: c,
          onConnect: d,
          onDisconnect: h,
          onAccountsChanged: g,
          onChainChanged: C,
          onAdapterChanged: b,
          localStorageKey: y = "tronAdapterName",
          autoConnect: p = !0,
          disableAutoConnectOnLoad: v = !1,
        }) {
          let [k, w] = a(y, null),
            [{ wallet: S, connected: m, address: E, adapter: O }, j] = (0,
            r.useState)(f),
            [N, R] = (0, r.useState)(!1),
            [x, I] = (0, r.useState)(!1),
            M = (0, r.useRef)(!1),
            _ = (0, r.useRef)(!1),
            K = (0, r.useMemo)(() => (null === t ? [new s.Fq()] : t), [t]),
            [P, W] = (0, r.useState)(() =>
              K.map((e) => ({ adapter: e, state: e.state }))
            );
          (0, r.useEffect)(
            function () {
              function e() {
                W((e) => {
                  let t = e.findIndex((e) => e.adapter === this);
                  return -1 === t
                    ? e
                    : e.map((e, n) =>
                        n === t
                          ? Object.assign(Object.assign({}, e), {
                              state: e.adapter.state,
                            })
                          : e
                      );
                });
              }
              return (
                W((e) =>
                  K.map((t, n) => {
                    let r = e[n];
                    return r && r.adapter === t && r.state === t.state
                      ? r
                      : { adapter: t, state: t.state };
                  })
                ),
                K.forEach((t) => t.on("stateChanged", e, t)),
                () => K.forEach((t) => t.off("stateChanged", e, t))
              );
            },
            [K]
          ),
            (0, r.useEffect)(
              function () {
                let e = k && P.find((e) => e.adapter.name === k);
                e
                  ? j({
                      wallet: e,
                      adapter: e.adapter,
                      connected: e.adapter.connected,
                      address: e.adapter.address,
                    })
                  : j(f);
              },
              [k, P]
            );
          let J = (0, r.useRef)(null);
          (0, r.useEffect)(
            function () {
              O !== J.current && (null == b || b(O), (J.current = O));
            },
            [O, b]
          );
          let L = (0, r.useCallback)(
              function (e) {
                if (!O) return w(null);
                j((e) =>
                  Object.assign(Object.assign({}, e), {
                    connected: O.connected,
                    address: O.address,
                  })
                ),
                  null == d || d(e);
              },
              [O, w, d]
            ),
            q = (0, r.useCallback)(
              function (e) {
                return n(e), e;
              },
              [n]
            ),
            A = (0, r.useCallback)(
              function (e, t) {
                j((t) => Object.assign(Object.assign({}, t), { address: e })),
                  null == g || g(e, t);
              },
              [g]
            ),
            D = (0, r.useCallback)(
              function () {
                null == h || h();
              },
              [h]
            ),
            F = (0, r.useCallback)(
              function (e) {
                null == c || c(e);
              },
              [c]
            ),
            T = (0, r.useCallback)(
              function (e) {
                null == C || C(e);
              },
              [C]
            );
          (0, r.useEffect)(
            function () {
              if (O)
                return (
                  O.on("connect", L),
                  O.on("error", q),
                  O.on("accountsChanged", A),
                  O.on("chainChanged", T),
                  O.on("readyStateChanged", F),
                  O.on("disconnect", D),
                  () => {
                    O.off("connect", L),
                      O.off("error", q),
                      O.off("accountsChanged", A),
                      O.off("chainChanged", T),
                      O.off("readyStateChanged", F),
                      O.off("disconnect", D);
                  }
                );
            },
            [O, L, q, A, T, F, D]
          ),
            (0, r.useEffect)(
              () => () => {
                null == O || O.disconnect();
              },
              [O]
            );
          let z = (0, r.useRef)(!1);
          (0, r.useEffect)(
            function () {
              let e = p && (!v || z.current);
              !M.current &&
                e &&
                O &&
                O.state === l.nL.Disconnect &&
                (function () {
                  i(this, void 0, void 0, function* () {
                    (M.current = !0), R(!0);
                    try {
                      yield O.connect();
                    } catch (e) {
                    } finally {
                      R(!1), (M.current = !1);
                    }
                  });
                })();
            },
            [M, p, O, w, v]
          );
          let B = (0, r.useCallback)(
              (e) => {
                (z.current = !0), w(e);
              },
              [w]
            ),
            G = (0, r.useCallback)(
              function () {
                return i(this, void 0, void 0, function* () {
                  if (!M.current && !_.current && !m) {
                    if (!O) throw q(new o.gK());
                    (M.current = !0), R(!0);
                    try {
                      yield O.connect();
                    } catch (e) {
                      throw (w(null), e);
                    } finally {
                      R(!1), (M.current = !1);
                    }
                  }
                });
              },
              [M, _, O, m, q, w]
            ),
            H = (0, r.useCallback)(
              function () {
                return i(this, void 0, void 0, function* () {
                  if (!_.current) {
                    if (!O) return w(null);
                    (_.current = !0), I(!0);
                    try {
                      yield O.disconnect(), w(null);
                    } catch (e) {
                      throw (w(null), e);
                    } finally {
                      I(!1), (_.current = !1);
                    }
                  }
                });
              },
              [O, _, w]
            ),
            Q = (0, r.useCallback)(
              function (e, t) {
                return i(this, void 0, void 0, function* () {
                  if (!O) throw q(new o.gK());
                  return yield O.signTransaction(e, t);
                });
              },
              [O, q]
            ),
            U = (0, r.useCallback)(
              function (e, t) {
                return i(this, void 0, void 0, function* () {
                  if (!O) throw q(new o.gK());
                  return yield O.signMessage(e, t);
                });
              },
              [O, q]
            );
          return r.createElement(
            u.b.Provider,
            {
              value: {
                disableAutoConnectOnLoad: v,
                autoConnect: p,
                wallets: P,
                wallet: S,
                address: E,
                connecting: N,
                connected: m,
                disconnecting: x,
                select: B,
                connect: G,
                disconnect: H,
                signTransaction: Q,
                signMessage: U,
              },
            },
            e
          );
        };
    },
  },
]);
