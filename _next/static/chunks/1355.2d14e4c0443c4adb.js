"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1355],
  {
    17319: (e, t, n) => {
      n.d(t, { o: () => c, w: () => r });
      var a = n(12115);
      let l = {
        setVisible(e) {
          o();
        },
        visible: !1,
      };
      function o() {
        console.error(
          "WalletModalProvider is not provided.Please wrap your components with WalletModalProvider."
        );
      }
      Object.defineProperty(l, "visible", { get: () => (o(), !1) });
      let r = (0, a.createContext)(l);
      function c() {
        return (0, a.useContext)(r);
      }
    },
    35359: (e, t, n) => {
      n.d(t, { S: () => l });
      var a = n(12115);
      let l = function ({
        children: e,
        className: t,
        transition: n = "height 250ms ease-out",
        isOpen: l,
        onMouseEnter: o,
        onMouseLeave: r,
      }) {
        let c = (0, a.useRef)(null),
          [i, s] = (0, a.useState)({ height: "0px", transition: n });
        return (
          (0, a.useEffect)(
            function () {
              s((e) => Object.assign(Object.assign({}, e), { transition: n }));
            },
            [n]
          ),
          (0, a.useLayoutEffect)(() => {
            l
              ? c.current &&
                s((e) => {
                  var t;
                  return Object.assign(Object.assign({}, e), {
                    height:
                      (null == (t = c.current) ? void 0 : t.scrollHeight) +
                      "px",
                  });
                })
              : c.current &&
                s((e) =>
                  Object.assign(Object.assign({}, e), { height: "0px" })
                );
          }, [l]),
          a.createElement(
            "div",
            {
              ref: c,
              className: "react-collapse " + t,
              style: Object.assign({ overflow: "hidden" }, i),
              onMouseEnter: o,
              onMouseLeave: r,
            },
            e
          )
        );
      };
    },
    71292: (e, t, n) => {
      n.d(t, { K: () => d });
      var a = n(49494),
        l = n(12115),
        o = n(77844),
        r = n(97969),
        c = n(99845),
        i = n(35359),
        s = n(17319),
        u = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              0 > t.indexOf(a) &&
              (n[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var l = 0, a = Object.getOwnPropertySymbols(e);
              l < a.length;
              l++
            )
              0 > t.indexOf(a[l]) &&
                Object.prototype.propertyIsEnumerable.call(e, a[l]) &&
                (n[a[l]] = e[a[l]]);
          return n;
        };
      let d = (e) => {
        var { children: t } = e,
          n = u(e, ["children"]);
        let { address: d, wallet: p, disconnect: m } = (0, a.v)(),
          { setVisible: f } = (0, s.o)(),
          [b, v] = (0, l.useState)(!1),
          [y, O] = (0, l.useState)(!1),
          E = (0, l.useRef)(null),
          w = (0, l.useMemo)(
            () => t || (p && d ? d.slice(0, 4) + "..." + d.slice(-4) : null),
            [t, p, d]
          ),
          h = (0, l.useCallback)(function () {
            v(!0);
          }, []),
          g = (0, l.useCallback)(function () {
            v(!1);
          }, []),
          C = (0, l.useCallback)(
            function () {
              var e, t, n, a;
              return (
                (e = this),
                (t = void 0),
                (n = void 0),
                (a = function* () {
                  yield m(), g();
                }),
                new (n || (n = Promise))(function (l, o) {
                  function r(e) {
                    try {
                      i(a.next(e));
                    } catch (e) {
                      o(e);
                    }
                  }
                  function c(e) {
                    try {
                      i(a.throw(e));
                    } catch (e) {
                      o(e);
                    }
                  }
                  function i(e) {
                    var t;
                    e.done
                      ? l(e.value)
                      : ((t = e.value) instanceof n
                          ? t
                          : new n(function (e) {
                              e(t);
                            })
                        ).then(r, c);
                  }
                  i((a = a.apply(e, t || [])).next());
                })
              );
            },
            [m, g]
          );
        return ((0, l.useEffect)(() => {
          let e = (e) => {
            let t = E.current;
            !t || t.contains(e.target) || g();
          };
          return (
            document.addEventListener("mousedown", e),
            document.addEventListener("touchstart", e),
            () => {
              document.removeEventListener("mousedown", e),
                document.removeEventListener("touchstart", e);
            }
          );
        }, [E, g]),
        p)
          ? l.createElement(
              "div",
              {
                "data-testid": "wallet-action-button",
                className: "adapter-dropdown",
              },
              d
                ? l.createElement(
                    o.$,
                    Object.assign(
                      {
                        onClick: h,
                        style: Object.assign(
                          { pointerEvents: b ? "none" : "auto" },
                          n.style
                        ),
                        icon: p ? p.adapter.icon : "",
                      },
                      n
                    ),
                    w
                  )
                : l.createElement(
                    "div",
                    { onMouseEnter: h, onMouseLeave: g },
                    l.createElement(c.s, Object.assign({}, n), t)
                  ),
              l.createElement(
                i.S,
                Object.assign(
                  { className: "adapter-dropdown-collapse", isOpen: b },
                  d ? {} : { onMouseEnter: h, onMouseLeave: g }
                ),
                l.createElement(
                  "ul",
                  { ref: E, className: "adapter-dropdown-list", role: "menu" },
                  d &&
                    l.createElement(
                      "li",
                      {
                        onClick: () => {
                          d &&
                            (!(function (e) {
                              let t = document.createElement("textarea");
                              (t.value = e),
                                document.body.appendChild(t),
                                t.select(),
                                (t.style.position = "fixed"),
                                (t.style.top = "-9999px"),
                                (t.style.left = "-9999px"),
                                document.execCommand("copy"),
                                t.blur();
                            })(d),
                            O(!0),
                            setTimeout(() => {
                              O(!1), g();
                            }, 400));
                        },
                        className: "adapter-dropdown-list-item",
                        role: "menuitem",
                      },
                      y ? "Copied" : "Copy address"
                    ),
                  l.createElement(
                    "li",
                    {
                      onClick: function () {
                        f(!0), g();
                      },
                      className: "adapter-dropdown-list-item",
                      role: "menuitem",
                    },
                    "Change wallet"
                  ),
                  d &&
                    l.createElement(
                      "li",
                      {
                        onClick: C,
                        className: "adapter-dropdown-list-item",
                        role: "menuitem",
                      },
                      "Disconnect"
                    )
                )
              )
            )
          : l.createElement(r.W, Object.assign({ onClick: g }, n), t);
      };
    },
    71355: (e, t, n) => {
      n.r(t),
        n.d(t, {
          Button: () => l.$,
          Collapse: () => a.S,
          WalletActionButton: () => b.K,
          WalletConnectButton: () => p.s,
          WalletDisconnectButton: () => f,
          WalletItem: () => u,
          WalletModalContext: () => y.w,
          WalletModalProvider: () => E,
          WalletSelectButton: () => v.W,
          WalletSelectModal: () => d,
          useWalletModal: () => y.o,
        });
      var a = n(35359),
        l = n(77844),
        o = n(49494),
        r = n(12115),
        c = n(82313),
        i = n(47650);
      let s = function ({
          children: e,
          wrapperId: t = "react-portal-wrapper",
        }) {
          let [n, a] = (0, r.useState)(null);
          return ((0, r.useLayoutEffect)(() => {
            let e = document.getElementById(t),
              n = !1;
            return (
              e ||
                ((n = !0),
                (e = (function (e) {
                  let t = document.createElement("div");
                  return (
                    t.setAttribute("id", e),
                    (t.style.position = "relative"),
                    document.body.appendChild(t),
                    t
                  );
                })(t))),
              a(e),
              () => {
                n &&
                  (null == e ? void 0 : e.parentNode) &&
                  e.parentNode.removeChild(e);
              }
            );
          }, [t]),
          null === n)
            ? null
            : (0, i.createPortal)(e, n);
        },
        u = ({ onClick: e, wallet: t }) =>
          r.createElement(
            "div",
            { className: "adapter-wallet-item" },
            r.createElement(
              l.$,
              { onClick: e, icon: t.adapter.icon, tabIndex: 0 },
              t.adapter.name,
              r.createElement(
                "span",
                { className: "status-text" },
                t.state !== c.nL.NotFound ? "Detected" : "NotFound"
              )
            )
          ),
        d = function ({ visible: e, onClose: t }) {
          let n = (0, r.useRef)(null),
            { wallets: a, select: l } = (0, o.v)(),
            [i, d] = (0, r.useState)(!1),
            [p, m] = (0, r.useState)(!1),
            f = (0, r.useMemo)(
              () => [
                ...a.filter((e) => e.state !== c.nL.NotFound),
                ...a.filter((e) => e.state === c.nL.NotFound),
              ],
              [a]
            ),
            b = (0, r.useCallback)(
              (e) => {
                l(e.adapter.name), t();
              },
              [l, t]
            );
          return (
            (0, r.useEffect)(
              function () {
                e ? (m(!0), d(!0)) : (d(!1), setTimeout(() => m(!1), 200));
              },
              [e]
            ),
            (0, r.useEffect)(() => {
              let e = (e) => ("Escape" === e.key ? t() : null);
              return (
                document.body.addEventListener("keydown", e),
                () => {
                  document.body.removeEventListener("keydown", e);
                }
              );
            }, [t]),
            p
              ? r.createElement(
                  s,
                  { wrapperId: "react-portal-modal-container" },
                  r.createElement(
                    "div",
                    {
                      "data-testid": "wallet-select-modal",
                      ref: n,
                      className: `adapter-modal ${
                        i && "adapter-modal-fade-in"
                      }`,
                    },
                    r.createElement(
                      "div",
                      { className: "adapter-modal-wrapper" },
                      r.createElement(
                        "div",
                        { className: "adapter-modal-header" },
                        r.createElement("button", {
                          onClick: t,
                          className: "close-button",
                          tabIndex: 0,
                        }),
                        r.createElement(
                          "div",
                          { className: "adapter-modal-title" },
                          "Connect a wallet on",
                          r.createElement("br", null),
                          "Tron to continue"
                        )
                      ),
                      r.createElement(
                        "div",
                        { className: "adapter-list" },
                        f.map((e) =>
                          r.createElement(u, {
                            key: e.adapter.name,
                            wallet: e,
                            onClick: () => b(e),
                          })
                        )
                      )
                    )
                  )
                )
              : null
          );
        };
      var p = n(99845),
        m = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              0 > t.indexOf(a) &&
              (n[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var l = 0, a = Object.getOwnPropertySymbols(e);
              l < a.length;
              l++
            )
              0 > t.indexOf(a[l]) &&
                Object.prototype.propertyIsEnumerable.call(e, a[l]) &&
                (n[a[l]] = e[a[l]]);
          return n;
        };
      let f = (e) => {
        var { children: t, disabled: n, onClick: a } = e,
          c = m(e, ["children", "disabled", "onClick"]);
        let {
            wallet: i,
            disconnect: s,
            disconnecting: u,
            connected: d,
          } = (0, o.v)(),
          p = (0, r.useCallback)(
            (e) => {
              a && a(e), e.defaultPrevented || s().catch(() => {});
            },
            [a, s]
          ),
          f = (0, r.useMemo)(
            () =>
              t ||
              (u
                ? "Disconnecting ..."
                : i
                ? "Disconnect"
                : "Disconnect Wallet"),
            [t, u, i]
          );
        return r.createElement(
          l.$,
          Object.assign(
            {
              "data-testid": "wallet-disconnect-button",
              disabled: n || !i || !d,
              icon: i ? i.adapter.icon : "",
              onClick: p,
            },
            c
          ),
          f
        );
      };
      var b = n(71292),
        v = n(97969),
        y = n(17319),
        O = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              0 > t.indexOf(a) &&
              (n[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var l = 0, a = Object.getOwnPropertySymbols(e);
              l < a.length;
              l++
            )
              0 > t.indexOf(a[l]) &&
                Object.prototype.propertyIsEnumerable.call(e, a[l]) &&
                (n[a[l]] = e[a[l]]);
          return n;
        };
      function E(e) {
        var { children: t } = e,
          n = O(e, ["children"]);
        let [a, l] = (0, r.useState)(!1);
        return r.createElement(
          y.w.Provider,
          { value: { visible: a, setVisible: l } },
          t,
          r.createElement(
            d,
            Object.assign({ visible: a, onClose: () => l(!1) }, n)
          )
        );
      }
    },
    77844: (e, t, n) => {
      n.d(t, { $: () => o });
      var a = n(12115),
        l = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              0 > t.indexOf(a) &&
              (n[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var l = 0, a = Object.getOwnPropertySymbols(e);
              l < a.length;
              l++
            )
              0 > t.indexOf(a[l]) &&
                Object.prototype.propertyIsEnumerable.call(e, a[l]) &&
                (n[a[l]] = e[a[l]]);
          return n;
        };
      let o = (e) => {
        var {
            children: t,
            onClick: n,
            className: o = "",
            tabIndex: r = 0,
            icon: c,
          } = e,
          i = l(e, ["children", "onClick", "className", "tabIndex", "icon"]);
        let s = (0, a.useRef)(null);
        return a.createElement(
          "button",
          Object.assign(
            {
              ref: s,
              onClick: function (e) {
                null == n || n(e),
                  setTimeout(() => {
                    var e;
                    null == (e = s.current) || e.blur();
                  }, 300);
              },
              className: `adapter-react-button ${o}`,
              tabIndex: r,
            },
            i
          ),
          c &&
            a.createElement(
              "i",
              { className: "button-icon" },
              a.createElement("img", { src: c })
            ),
          t
        );
      };
    },
    97969: (e, t, n) => {
      n.d(t, { W: () => c });
      var a = n(12115),
        l = n(77844),
        o = n(17319),
        r = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              0 > t.indexOf(a) &&
              (n[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var l = 0, a = Object.getOwnPropertySymbols(e);
              l < a.length;
              l++
            )
              0 > t.indexOf(a[l]) &&
                Object.prototype.propertyIsEnumerable.call(e, a[l]) &&
                (n[a[l]] = e[a[l]]);
          return n;
        };
      let c = function (e) {
        var { children: t = "Select Wallet", onClick: n } = e,
          c = r(e, ["children", "onClick"]);
        let { visible: i, setVisible: s } = (0, o.o)(),
          u = (0, a.useCallback)(
            (e) => {
              n && n(e), e.defaultPrevented || s(!i);
            },
            [n, s, i]
          );
        return a.createElement(
          l.$,
          Object.assign(
            { "data-testid": "wallet-select-button", onClick: u },
            c
          ),
          t
        );
      };
    },
    99845: (e, t, n) => {
      n.d(t, { s: () => c });
      var a = n(49494),
        l = n(12115),
        o = n(77844),
        r = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              0 > t.indexOf(a) &&
              (n[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var l = 0, a = Object.getOwnPropertySymbols(e);
              l < a.length;
              l++
            )
              0 > t.indexOf(a[l]) &&
                Object.prototype.propertyIsEnumerable.call(e, a[l]) &&
                (n[a[l]] = e[a[l]]);
          return n;
        };
      let c = (e) => {
        var { children: t, disabled: n, onClick: c } = e,
          i = r(e, ["children", "disabled", "onClick"]);
        let { wallet: s, connect: u, connecting: d, connected: p } = (0, a.v)(),
          m = (0, l.useCallback)(
            (e) =>
              (function (e, t, n, a) {
                return new (n || (n = Promise))(function (l, o) {
                  function r(e) {
                    try {
                      i(a.next(e));
                    } catch (e) {
                      o(e);
                    }
                  }
                  function c(e) {
                    try {
                      i(a.throw(e));
                    } catch (e) {
                      o(e);
                    }
                  }
                  function i(e) {
                    var t;
                    e.done
                      ? l(e.value)
                      : ((t = e.value) instanceof n
                          ? t
                          : new n(function (e) {
                              e(t);
                            })
                        ).then(r, c);
                  }
                  i((a = a.apply(e, t || [])).next());
                });
              })(void 0, void 0, void 0, function* () {
                c && c(e), e.defaultPrevented || (yield u());
              }),
            [c, u]
          ),
          f = (0, l.useMemo)(
            () =>
              t ||
              (d
                ? "Connecting ..."
                : p
                ? "Connected"
                : s
                ? "Connect"
                : "Connect Wallet"),
            [t, d, p, s]
          );
        return l.createElement(
          o.$,
          Object.assign(
            {
              "data-testid": "wallet-connect-button",
              className: "wallet-button",
              disabled: n || !s || d || p,
              onClick: m,
              icon: s ? s.adapter.icon : "",
            },
            i
          ),
          f
        );
      };
    },
  },
]);
