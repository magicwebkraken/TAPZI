"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4404],
  {
    17319: (e, t, n) => {
      n.d(t, { o: () => i, w: () => l });
      var r = n(12115);
      let o = {
        setVisible(e) {
          a();
        },
        visible: !1,
      };
      function a() {
        console.error(
          "WalletModalProvider is not provided.Please wrap your components with WalletModalProvider."
        );
      }
      Object.defineProperty(o, "visible", { get: () => (a(), !1) });
      let l = (0, r.createContext)(o);
      function i() {
        return (0, r.useContext)(l);
      }
    },
    23599: (e, t, n) => {
      n.d(t, { x: () => d });
      var r = n(12115),
        o = n(11392),
        a = n(57615),
        l = n(53347);
      function i({ walletIcon: e, walletName: t, ...n }) {
        return r.createElement(a.$, {
          ...n,
          className: "wallet-adapter-button-trigger",
          startIcon:
            e && t
              ? r.createElement(l.l, {
                  wallet: { adapter: { icon: e, name: t } },
                })
              : void 0,
        });
      }
      var s = n(40840);
      function c({ children: e, labels: t, ...n }) {
        let { setVisible: a } = (0, s.o)(),
          {
            buttonState: l,
            onConnect: c,
            onDisconnect: u,
            publicKey: d,
            walletIcon: p,
            walletName: f,
          } = (function ({ onSelectWallet: e }) {
            let t,
              {
                connect: n,
                connected: a,
                connecting: l,
                disconnect: i,
                disconnecting: s,
                publicKey: c,
                select: u,
                wallet: d,
                wallets: p,
              } = (0, o.v)();
            t = l
              ? "connecting"
              : a
              ? "connected"
              : s
              ? "disconnecting"
              : d
              ? "has-wallet"
              : "no-wallet";
            let f = (0, r.useCallback)(() => {
                n().catch(() => {});
              }, [n]),
              m = (0, r.useCallback)(() => {
                i().catch(() => {});
              }, [i]);
            return {
              buttonState: t,
              onConnect: "has-wallet" === t ? f : void 0,
              onDisconnect:
                "disconnecting" !== t && "no-wallet" !== t ? m : void 0,
              onSelectWallet: (0, r.useCallback)(() => {
                e({ onSelectWallet: u, wallets: p });
              }, [e, u, p]),
              publicKey: c ?? void 0,
              walletIcon: d?.adapter.icon,
              walletName: d?.adapter.name,
            };
          })({
            onSelectWallet() {
              a(!0);
            },
          }),
          [m, v] = (0, r.useState)(!1),
          [h, y] = (0, r.useState)(!1),
          b = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
          let e = (e) => {
            let t = b.current;
            !t || t.contains(e.target) || y(!1);
          };
          return (
            document.addEventListener("mousedown", e),
            document.addEventListener("touchstart", e),
            () => {
              document.removeEventListener("mousedown", e),
                document.removeEventListener("touchstart", e);
            }
          );
        }, []);
        let w = (0, r.useMemo)(() => {
          if (e) return e;
          if (d) {
            let e = d.toBase58();
            return e.slice(0, 4) + ".." + e.slice(-4);
          }
          return "connecting" === l || "has-wallet" === l
            ? t[l]
            : t["no-wallet"];
        }, [l, e, t, d]);
        return r.createElement(
          "div",
          { className: "wallet-adapter-dropdown" },
          r.createElement(
            i,
            {
              ...n,
              "aria-expanded": h,
              style: { pointerEvents: h ? "none" : "auto", ...n.style },
              onClick: () => {
                switch (l) {
                  case "no-wallet":
                    a(!0);
                    break;
                  case "has-wallet":
                    c && c();
                    break;
                  case "connected":
                    y(!0);
                }
              },
              walletIcon: p,
              walletName: f,
            },
            w
          ),
          r.createElement(
            "ul",
            {
              "aria-label": "dropdown-list",
              className: `wallet-adapter-dropdown-list ${
                h && "wallet-adapter-dropdown-list-active"
              }`,
              ref: b,
              role: "menu",
            },
            d
              ? r.createElement(
                  "li",
                  {
                    className: "wallet-adapter-dropdown-list-item",
                    onClick: async () => {
                      await navigator.clipboard.writeText(d.toBase58()),
                        v(!0),
                        setTimeout(() => v(!1), 400);
                    },
                    role: "menuitem",
                  },
                  m ? t.copied : t["copy-address"]
                )
              : null,
            r.createElement(
              "li",
              {
                className: "wallet-adapter-dropdown-list-item",
                onClick: () => {
                  a(!0), y(!1);
                },
                role: "menuitem",
              },
              t["change-wallet"]
            ),
            u
              ? r.createElement(
                  "li",
                  {
                    className: "wallet-adapter-dropdown-list-item",
                    onClick: () => {
                      u(), y(!1);
                    },
                    role: "menuitem",
                  },
                  t.disconnect
                )
              : null
          )
        );
      }
      let u = {
        "change-wallet": "Change wallet",
        connecting: "Connecting ...",
        "copy-address": "Copy address",
        copied: "Copied",
        disconnect: "Disconnect",
        "has-wallet": "Connect",
        "no-wallet": "Select Wallet",
      };
      function d(e) {
        return r.createElement(c, { ...e, labels: u });
      }
    },
    34156: (e, t, n) => {
      n.d(t, { UC: () => eO, ZL: () => ex, bL: () => eg, l9: () => eE });
      var r,
        o = n(12115),
        a = !!(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
        );
      function l(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      var i = n(6101),
        s = n(46081),
        c = n(63655),
        u = n(39033),
        d = n(51595),
        p = n(95155),
        f = "dismissableLayer.update",
        m = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        v = o.forwardRef((e, t) => {
          var n, a;
          let {
              disableOutsidePointerEvents: s = !1,
              onEscapeKeyDown: v,
              onPointerDownOutside: b,
              onFocusOutside: w,
              onInteractOutside: g,
              onDismiss: E,
              ...x
            } = e,
            O = o.useContext(m),
            [C, P] = o.useState(null),
            j =
              null != (a = null == C ? void 0 : C.ownerDocument)
                ? a
                : null == (n = globalThis)
                ? void 0
                : n.document,
            [, N] = o.useState({}),
            k = (0, i.s)(t, (e) => P(e)),
            A = Array.from(O.layers),
            [S] = [...O.layersWithOutsidePointerEventsDisabled].slice(-1),
            R = A.indexOf(S),
            L = C ? A.indexOf(C) : -1,
            D = O.layersWithOutsidePointerEventsDisabled.size > 0,
            M = L >= R,
            I = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == (t = globalThis)
                    ? void 0
                    : t.document,
                r = (0, u.c)(e),
                a = o.useRef(!1),
                l = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !a.current) {
                        let t = function () {
                            y("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", l.current),
                            (l.current = t),
                            n.addEventListener("click", l.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", l.current);
                      a.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", l.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (a.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...O.branches].some((e) => e.contains(t));
              M &&
                !n &&
                (null == b || b(e),
                null == g || g(e),
                e.defaultPrevented || null == E || E());
            }, j),
            T = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == (t = globalThis)
                    ? void 0
                    : t.document,
                r = (0, u.c)(e),
                a = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !a.current &&
                      y(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (a.current = !0),
                  onBlurCapture: () => (a.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              ![...O.branches].some((e) => e.contains(t)) &&
                (null == w || w(e),
                null == g || g(e),
                e.defaultPrevented || null == E || E());
            }, j);
          return (
            (0, d.U)((e) => {
              L === O.layers.size - 1 &&
                (null == v || v(e),
                !e.defaultPrevented && E && (e.preventDefault(), E()));
            }, j),
            o.useEffect(() => {
              if (C)
                return (
                  s &&
                    (0 === O.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = j.body.style.pointerEvents),
                      (j.body.style.pointerEvents = "none")),
                    O.layersWithOutsidePointerEventsDisabled.add(C)),
                  O.layers.add(C),
                  h(),
                  () => {
                    s &&
                      1 === O.layersWithOutsidePointerEventsDisabled.size &&
                      (j.body.style.pointerEvents = r);
                  }
                );
            }, [C, j, s, O]),
            o.useEffect(
              () => () => {
                C &&
                  (O.layers.delete(C),
                  O.layersWithOutsidePointerEventsDisabled.delete(C),
                  h());
              },
              [C, O]
            ),
            o.useEffect(() => {
              let e = () => N({});
              return (
                document.addEventListener(f, e),
                () => document.removeEventListener(f, e)
              );
            }, []),
            (0, p.jsx)(c.sG.div, {
              ...x,
              ref: k,
              style: {
                pointerEvents: D ? (M ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: l(e.onFocusCapture, T.onFocusCapture),
              onBlurCapture: l(e.onBlurCapture, T.onBlurCapture),
              onPointerDownCapture: l(
                e.onPointerDownCapture,
                I.onPointerDownCapture
              ),
            })
          );
        });
      function h() {
        let e = new CustomEvent(f);
        document.dispatchEvent(e);
      }
      function y(e, t, n, r) {
        let { discrete: o } = r,
          a = n.originalEvent.target,
          l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && a.addEventListener(e, t, { once: !0 }),
          o ? (0, c.hO)(a, l) : a.dispatchEvent(l);
      }
      (v.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(m),
            r = o.useRef(null),
            a = (0, i.s)(t, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, p.jsx)(c.sG.div, { ...e, ref: a })
          );
        }).displayName = "DismissableLayerBranch");
      var b = 0;
      function w() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
      var g = n(25519),
        E = n(61285),
        x = n(84945),
        O = n(22475),
        C = n(82391),
        P = n(52712),
        j = n(11275),
        N = "Popper",
        [k, A] = (0, s.A)(N),
        [S, R] = k(N),
        L = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, a] = o.useState(null);
          return (0, p.jsx)(S, {
            scope: t,
            anchor: r,
            onAnchorChange: a,
            children: n,
          });
        };
      L.displayName = N;
      var D = "PopperAnchor",
        M = o.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...a } = e,
            l = R(D, n),
            s = o.useRef(null),
            u = (0, i.s)(t, s),
            d = o.useRef(null);
          return (
            o.useEffect(() => {
              let e = d.current;
              (d.current = (null == r ? void 0 : r.current) || s.current),
                e !== d.current && l.onAnchorChange(d.current);
            }),
            r ? null : (0, p.jsx)(c.sG.div, { ...a, ref: u })
          );
        });
      M.displayName = D;
      var I = "PopperContent",
        [T, W] = k(I),
        F = o.forwardRef((e, t) => {
          var n, r, a, l, s, d, f, m;
          let {
              __scopePopper: v,
              side: h = "bottom",
              sideOffset: y = 0,
              align: b = "center",
              alignOffset: w = 0,
              arrowPadding: g = 0,
              avoidCollisions: E = !0,
              collisionBoundary: C = [],
              collisionPadding: N = 0,
              sticky: k = "partial",
              hideWhenDetached: A = !1,
              updatePositionStrategy: S = "optimized",
              onPlaced: L,
              ...D
            } = e,
            M = R(I, v),
            [W, F] = o.useState(null),
            U = (0, i.s)(t, (e) => F(e)),
            [_, $] = o.useState(null),
            G = (0, j.X)(_),
            Y = null != (f = null == G ? void 0 : G.width) ? f : 0,
            V = null != (m = null == G ? void 0 : G.height) ? m : 0,
            X =
              "number" == typeof N
                ? N
                : { top: 0, right: 0, bottom: 0, left: 0, ...N },
            q = Array.isArray(C) ? C : [C],
            K = q.length > 0,
            Z = { padding: X, boundary: q.filter(B), altBoundary: K },
            {
              refs: J,
              floatingStyles: Q,
              placement: ee,
              isPositioned: et,
              middlewareData: en,
            } = (0, x.we)({
              strategy: "fixed",
              placement: h + ("center" !== b ? "-" + b : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (0, O.ll)(...t, { animationFrame: "always" === S });
              },
              elements: { reference: M.anchor },
              middleware: [
                (0, x.cY)({ mainAxis: y + V, alignmentAxis: w }),
                E &&
                  (0, x.BN)({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === k ? (0, x.ER)() : void 0,
                    ...Z,
                  }),
                E && (0, x.UU)({ ...Z }),
                (0, x.Ej)({
                  ...Z,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: n,
                        availableWidth: r,
                        availableHeight: o,
                      } = e,
                      { width: a, height: l } = n.reference,
                      i = t.floating.style;
                    i.setProperty(
                      "--radix-popper-available-width",
                      "".concat(r, "px")
                    ),
                      i.setProperty(
                        "--radix-popper-available-height",
                        "".concat(o, "px")
                      ),
                      i.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(a, "px")
                      ),
                      i.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(l, "px")
                      );
                  },
                }),
                _ && (0, x.UE)({ element: _, padding: g }),
                z({ arrowWidth: Y, arrowHeight: V }),
                A && (0, x.jD)({ strategy: "referenceHidden", ...Z }),
              ],
            }),
            [er, eo] = H(ee),
            ea = (0, u.c)(L);
          (0, P.N)(() => {
            et && (null == ea || ea());
          }, [et, ea]);
          let el = null == (n = en.arrow) ? void 0 : n.x,
            ei = null == (r = en.arrow) ? void 0 : r.y,
            es = (null == (a = en.arrow) ? void 0 : a.centerOffset) !== 0,
            [ec, eu] = o.useState();
          return (
            (0, P.N)(() => {
              W && eu(window.getComputedStyle(W).zIndex);
            }, [W]),
            (0, p.jsx)("div", {
              ref: J.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...Q,
                transform: et ? Q.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: ec,
                "--radix-popper-transform-origin": [
                  null == (l = en.transformOrigin) ? void 0 : l.x,
                  null == (s = en.transformOrigin) ? void 0 : s.y,
                ].join(" "),
                ...((null == (d = en.hide) ? void 0 : d.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, p.jsx)(T, {
                scope: v,
                placedSide: er,
                onArrowChange: $,
                arrowX: el,
                arrowY: ei,
                shouldHideArrow: es,
                children: (0, p.jsx)(c.sG.div, {
                  "data-side": er,
                  "data-align": eo,
                  ...D,
                  ref: U,
                  style: { ...D.style, animation: et ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      F.displayName = I;
      var U = "PopperArrow",
        _ = { top: "bottom", right: "left", bottom: "top", left: "right" },
        $ = o.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = W(U, n),
            a = _[o.placedSide];
          return (0,
          p.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [a]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, p.jsx)(C.b, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
        });
      function B(e) {
        return null !== e;
      }
      $.displayName = U;
      var z = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, a, l;
          let { placement: i, rects: s, middlewareData: c } = t,
            u = (null == (n = c.arrow) ? void 0 : n.centerOffset) !== 0,
            d = u ? 0 : e.arrowWidth,
            p = u ? 0 : e.arrowHeight,
            [f, m] = H(i),
            v = { start: "0%", center: "50%", end: "100%" }[m],
            h =
              (null != (a = null == (r = c.arrow) ? void 0 : r.x) ? a : 0) +
              d / 2,
            y =
              (null != (l = null == (o = c.arrow) ? void 0 : o.y) ? l : 0) +
              p / 2,
            b = "",
            w = "";
          return (
            "bottom" === f
              ? ((b = u ? v : "".concat(h, "px")), (w = "".concat(-p, "px")))
              : "top" === f
              ? ((b = u ? v : "".concat(h, "px")),
                (w = "".concat(s.floating.height + p, "px")))
              : "right" === f
              ? ((b = "".concat(-p, "px")), (w = u ? v : "".concat(y, "px")))
              : "left" === f &&
                ((b = "".concat(s.floating.width + p, "px")),
                (w = u ? v : "".concat(y, "px"))),
            { data: { x: b, y: w } }
          );
        },
      });
      function H(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      var G = n(34378),
        Y = (e) => {
          let { present: t, children: n } = e,
            r = (function (e) {
              var t, n;
              let [r, a] = o.useState(),
                l = o.useRef(null),
                i = o.useRef(e),
                s = o.useRef("none"),
                [c, u] =
                  ((t = e ? "mounted" : "unmounted"),
                  (n = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  o.useReducer((e, t) => {
                    let r = n[e][t];
                    return null != r ? r : e;
                  }, t));
              return (
                o.useEffect(() => {
                  let e = V(l.current);
                  s.current = "mounted" === c ? e : "none";
                }, [c]),
                (0, P.N)(() => {
                  let t = l.current,
                    n = i.current;
                  if (n !== e) {
                    let r = s.current,
                      o = V(t);
                    e
                      ? u("MOUNT")
                      : "none" === o ||
                        (null == t ? void 0 : t.display) === "none"
                      ? u("UNMOUNT")
                      : n && r !== o
                      ? u("ANIMATION_OUT")
                      : u("UNMOUNT"),
                      (i.current = e);
                  }
                }, [e, u]),
                (0, P.N)(() => {
                  if (r) {
                    var e;
                    let t,
                      n =
                        null != (e = r.ownerDocument.defaultView) ? e : window,
                      o = (e) => {
                        let o = V(l.current).includes(
                          CSS.escape(e.animationName)
                        );
                        if (
                          e.target === r &&
                          o &&
                          (u("ANIMATION_END"), !i.current)
                        ) {
                          let e = r.style.animationFillMode;
                          (r.style.animationFillMode = "forwards"),
                            (t = n.setTimeout(() => {
                              "forwards" === r.style.animationFillMode &&
                                (r.style.animationFillMode = e);
                            }));
                        }
                      },
                      a = (e) => {
                        e.target === r && (s.current = V(l.current));
                      };
                    return (
                      r.addEventListener("animationstart", a),
                      r.addEventListener("animationcancel", o),
                      r.addEventListener("animationend", o),
                      () => {
                        n.clearTimeout(t),
                          r.removeEventListener("animationstart", a),
                          r.removeEventListener("animationcancel", o),
                          r.removeEventListener("animationend", o);
                      }
                    );
                  }
                  u("ANIMATION_END");
                }, [r, u]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(c),
                  ref: o.useCallback((e) => {
                    (l.current = e ? getComputedStyle(e) : null), a(e);
                  }, []),
                }
              );
            })(t),
            a =
              "function" == typeof n
                ? n({ present: r.isPresent })
                : o.Children.only(n),
            l = (0, i.s)(
              r.ref,
              (function (e) {
                var t, n;
                let r =
                    null ==
                    (t = Object.getOwnPropertyDescriptor(e.props, "ref"))
                      ? void 0
                      : t.get,
                  o = r && "isReactWarning" in r && r.isReactWarning;
                return o
                  ? e.ref
                  : (o =
                      (r =
                        null == (n = Object.getOwnPropertyDescriptor(e, "ref"))
                          ? void 0
                          : n.get) &&
                      "isReactWarning" in r &&
                      r.isReactWarning)
                  ? e.props.ref
                  : e.props.ref || e.ref;
              })(a)
            );
          return "function" == typeof n || r.isPresent
            ? o.cloneElement(a, { ref: l })
            : null;
        };
      function V(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      Y.displayName = "Presence";
      var X = n(99708),
        q = n(5845),
        K = n(38168),
        Z = n(31114),
        J = "Popover",
        [Q, ee] = (0, s.A)(J, [A]),
        et = A(),
        [en, er] = Q(J),
        eo = (e) => {
          let {
              __scopePopover: t,
              children: n,
              open: r,
              defaultOpen: a,
              onOpenChange: l,
              modal: i = !1,
            } = e,
            s = et(t),
            c = o.useRef(null),
            [u, d] = o.useState(!1),
            [f, m] = (0, q.i)({
              prop: r,
              defaultProp: null != a && a,
              onChange: l,
              caller: J,
            });
          return (0, p.jsx)(L, {
            ...s,
            children: (0, p.jsx)(en, {
              scope: t,
              contentId: (0, E.B)(),
              triggerRef: c,
              open: f,
              onOpenChange: m,
              onOpenToggle: o.useCallback(() => m((e) => !e), [m]),
              hasCustomAnchor: u,
              onCustomAnchorAdd: o.useCallback(() => d(!0), []),
              onCustomAnchorRemove: o.useCallback(() => d(!1), []),
              modal: i,
              children: n,
            }),
          });
        };
      eo.displayName = J;
      var ea = "PopoverAnchor";
      o.forwardRef((e, t) => {
        let { __scopePopover: n, ...r } = e,
          a = er(ea, n),
          l = et(n),
          { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = a;
        return (
          o.useEffect(() => (i(), () => s()), [i, s]),
          (0, p.jsx)(M, { ...l, ...r, ref: t })
        );
      }).displayName = ea;
      var el = "PopoverTrigger",
        ei = o.forwardRef((e, t) => {
          let { __scopePopover: n, ...r } = e,
            o = er(el, n),
            a = et(n),
            s = (0, i.s)(t, o.triggerRef),
            u = (0, p.jsx)(c.sG.button, {
              type: "button",
              "aria-haspopup": "dialog",
              "aria-expanded": o.open,
              "aria-controls": o.contentId,
              "data-state": ew(o.open),
              ...r,
              ref: s,
              onClick: l(e.onClick, o.onOpenToggle),
            });
          return o.hasCustomAnchor
            ? u
            : (0, p.jsx)(M, { asChild: !0, ...a, children: u });
        });
      ei.displayName = el;
      var es = "PopoverPortal",
        [ec, eu] = Q(es, { forceMount: void 0 }),
        ed = (e) => {
          let {
              __scopePopover: t,
              forceMount: n,
              children: r,
              container: o,
            } = e,
            a = er(es, t);
          return (0, p.jsx)(ec, {
            scope: t,
            forceMount: n,
            children: (0, p.jsx)(Y, {
              present: n || a.open,
              children: (0, p.jsx)(G.Z, {
                asChild: !0,
                container: o,
                children: r,
              }),
            }),
          });
        };
      ed.displayName = es;
      var ep = "PopoverContent",
        ef = o.forwardRef((e, t) => {
          let n = eu(ep, e.__scopePopover),
            { forceMount: r = n.forceMount, ...o } = e,
            a = er(ep, e.__scopePopover);
          return (0, p.jsx)(Y, {
            present: r || a.open,
            children: a.modal
              ? (0, p.jsx)(ev, { ...o, ref: t })
              : (0, p.jsx)(eh, { ...o, ref: t }),
          });
        });
      ef.displayName = ep;
      var em = (0, X.TL)("PopoverContent.RemoveScroll"),
        ev = o.forwardRef((e, t) => {
          let n = er(ep, e.__scopePopover),
            r = o.useRef(null),
            a = (0, i.s)(t, r),
            s = o.useRef(!1);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e) return (0, K.Eq)(e);
            }, []),
            (0, p.jsx)(Z.A, {
              as: em,
              allowPinchZoom: !0,
              children: (0, p.jsx)(ey, {
                ...e,
                ref: a,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: l(e.onCloseAutoFocus, (e) => {
                  var t;
                  e.preventDefault(),
                    s.current ||
                      null == (t = n.triggerRef.current) ||
                      t.focus();
                }),
                onPointerDownOutside: l(
                  e.onPointerDownOutside,
                  (e) => {
                    let t = e.detail.originalEvent,
                      n = 0 === t.button && !0 === t.ctrlKey;
                    s.current = 2 === t.button || n;
                  },
                  { checkForDefaultPrevented: !1 }
                ),
                onFocusOutside: l(e.onFocusOutside, (e) => e.preventDefault(), {
                  checkForDefaultPrevented: !1,
                }),
              }),
            })
          );
        }),
        eh = o.forwardRef((e, t) => {
          let n = er(ep, e.__scopePopover),
            r = o.useRef(!1),
            a = o.useRef(!1);
          return (0, p.jsx)(ey, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var o, l;
              null == (o = e.onCloseAutoFocus) || o.call(e, t),
                t.defaultPrevented ||
                  (r.current || null == (l = n.triggerRef.current) || l.focus(),
                  t.preventDefault()),
                (r.current = !1),
                (a.current = !1);
            },
            onInteractOutside: (t) => {
              var o, l;
              null == (o = e.onInteractOutside) || o.call(e, t),
                t.defaultPrevented ||
                  ((r.current = !0),
                  "pointerdown" === t.detail.originalEvent.type &&
                    (a.current = !0));
              let i = t.target;
              (null == (l = n.triggerRef.current) ? void 0 : l.contains(i)) &&
                t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  a.current &&
                  t.preventDefault();
            },
          });
        }),
        ey = o.forwardRef((e, t) => {
          let {
              __scopePopover: n,
              trapFocus: r,
              onOpenAutoFocus: a,
              onCloseAutoFocus: l,
              disableOutsidePointerEvents: i,
              onEscapeKeyDown: s,
              onPointerDownOutside: c,
              onFocusOutside: u,
              onInteractOutside: d,
              ...f
            } = e,
            m = er(ep, n),
            h = et(n);
          return (
            o.useEffect(() => {
              var e, t;
              let n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null != (e = n[0]) ? e : w()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null != (t = n[1]) ? t : w()
                ),
                b++,
                () => {
                  1 === b &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    b--;
                }
              );
            }, []),
            (0, p.jsx)(g.n, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: a,
              onUnmountAutoFocus: l,
              children: (0, p.jsx)(v, {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onInteractOutside: d,
                onEscapeKeyDown: s,
                onPointerDownOutside: c,
                onFocusOutside: u,
                onDismiss: () => m.onOpenChange(!1),
                children: (0, p.jsx)(F, {
                  "data-state": ew(m.open),
                  role: "dialog",
                  id: m.contentId,
                  ...h,
                  ...f,
                  ref: t,
                  style: {
                    ...f.style,
                    "--radix-popover-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                }),
              }),
            })
          );
        }),
        eb = "PopoverClose";
      function ew(e) {
        return e ? "open" : "closed";
      }
      (o.forwardRef((e, t) => {
        let { __scopePopover: n, ...r } = e,
          o = er(eb, n);
        return (0, p.jsx)(c.sG.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: l(e.onClick, () => o.onOpenChange(!1)),
        });
      }).displayName = eb),
        (o.forwardRef((e, t) => {
          let { __scopePopover: n, ...r } = e,
            o = et(n);
          return (0, p.jsx)($, { ...o, ...r, ref: t });
        }).displayName = "PopoverArrow");
      var eg = eo,
        eE = ei,
        ex = ed,
        eO = ef;
    },
    35169: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("arrow-left", [
        ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
        ["path", { d: "M19 12H5", key: "x3x0zl" }],
      ]);
    },
    35359: (e, t, n) => {
      n.d(t, { S: () => o });
      var r = n(12115);
      let o = function ({
        children: e,
        className: t,
        transition: n = "height 250ms ease-out",
        isOpen: o,
        onMouseEnter: a,
        onMouseLeave: l,
      }) {
        let i = (0, r.useRef)(null),
          [s, c] = (0, r.useState)({ height: "0px", transition: n });
        return (
          (0, r.useEffect)(
            function () {
              c((e) => Object.assign(Object.assign({}, e), { transition: n }));
            },
            [n]
          ),
          (0, r.useLayoutEffect)(() => {
            o
              ? i.current &&
                c((e) => {
                  var t;
                  return Object.assign(Object.assign({}, e), {
                    height:
                      (null == (t = i.current) ? void 0 : t.scrollHeight) +
                      "px",
                  });
                })
              : i.current &&
                c((e) =>
                  Object.assign(Object.assign({}, e), { height: "0px" })
                );
          }, [o]),
          r.createElement(
            "div",
            {
              ref: i,
              className: "react-collapse " + t,
              style: Object.assign({ overflow: "hidden" }, s),
              onMouseEnter: a,
              onMouseLeave: l,
            },
            e
          )
        );
      };
    },
    40840: (e, t, n) => {
      n.d(t, { o: () => i, w: () => l });
      var r = n(12115);
      let o = {
        setVisible(e) {
          console.error(a("call", "setVisible"));
        },
        visible: !1,
      };
      function a(e, t) {
        return `You have tried to  ${e} "${t}" on a WalletModalContext without providing one. Make sure to render a WalletModalProvider as an ancestor of the component that uses WalletModalContext`;
      }
      Object.defineProperty(o, "visible", {
        get: () => (console.error(a("read", "visible")), !1),
      });
      let l = (0, r.createContext)(o);
      function i() {
        return (0, r.useContext)(l);
      }
    },
    53347: (e, t, n) => {
      n.d(t, { l: () => o });
      var r = n(12115);
      let o = ({ wallet: e, ...t }) =>
        e &&
        r.createElement("img", {
          src: e.adapter.icon,
          alt: `${e.adapter.name} icon`,
          ...t,
        });
    },
    54416: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    57615: (e, t, n) => {
      n.d(t, { $: () => o });
      var r = n(12115);
      let o = (e) =>
        r.createElement(
          "button",
          {
            className: `wallet-adapter-button ${e.className || ""}`,
            disabled: e.disabled,
            style: e.style,
            onClick: e.onClick,
            tabIndex: e.tabIndex || 0,
            type: "button",
          },
          e.startIcon &&
            r.createElement(
              "i",
              { className: "wallet-adapter-button-start-icon" },
              e.startIcon
            ),
          e.children,
          e.endIcon &&
            r.createElement(
              "i",
              { className: "wallet-adapter-button-end-icon" },
              e.endIcon
            )
        );
    },
    71292: (e, t, n) => {
      n.d(t, { K: () => d });
      var r = n(49494),
        o = n(12115),
        a = n(77844),
        l = n(97969),
        i = n(99845),
        s = n(35359),
        c = n(17319),
        u = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, r = Object.getOwnPropertySymbols(e);
              o < r.length;
              o++
            )
              0 > t.indexOf(r[o]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          return n;
        };
      let d = (e) => {
        var { children: t } = e,
          n = u(e, ["children"]);
        let { address: d, wallet: p, disconnect: f } = (0, r.v)(),
          { setVisible: m } = (0, c.o)(),
          [v, h] = (0, o.useState)(!1),
          [y, b] = (0, o.useState)(!1),
          w = (0, o.useRef)(null),
          g = (0, o.useMemo)(
            () => t || (p && d ? d.slice(0, 4) + "..." + d.slice(-4) : null),
            [t, p, d]
          ),
          E = (0, o.useCallback)(function () {
            h(!0);
          }, []),
          x = (0, o.useCallback)(function () {
            h(!1);
          }, []),
          O = (0, o.useCallback)(
            function () {
              var e, t, n, r;
              return (
                (e = this),
                (t = void 0),
                (n = void 0),
                (r = function* () {
                  yield f(), x();
                }),
                new (n || (n = Promise))(function (o, a) {
                  function l(e) {
                    try {
                      s(r.next(e));
                    } catch (e) {
                      a(e);
                    }
                  }
                  function i(e) {
                    try {
                      s(r.throw(e));
                    } catch (e) {
                      a(e);
                    }
                  }
                  function s(e) {
                    var t;
                    e.done
                      ? o(e.value)
                      : ((t = e.value) instanceof n
                          ? t
                          : new n(function (e) {
                              e(t);
                            })
                        ).then(l, i);
                  }
                  s((r = r.apply(e, t || [])).next());
                })
              );
            },
            [f, x]
          );
        return ((0, o.useEffect)(() => {
          let e = (e) => {
            let t = w.current;
            !t || t.contains(e.target) || x();
          };
          return (
            document.addEventListener("mousedown", e),
            document.addEventListener("touchstart", e),
            () => {
              document.removeEventListener("mousedown", e),
                document.removeEventListener("touchstart", e);
            }
          );
        }, [w, x]),
        p)
          ? o.createElement(
              "div",
              {
                "data-testid": "wallet-action-button",
                className: "adapter-dropdown",
              },
              d
                ? o.createElement(
                    a.$,
                    Object.assign(
                      {
                        onClick: E,
                        style: Object.assign(
                          { pointerEvents: v ? "none" : "auto" },
                          n.style
                        ),
                        icon: p ? p.adapter.icon : "",
                      },
                      n
                    ),
                    g
                  )
                : o.createElement(
                    "div",
                    { onMouseEnter: E, onMouseLeave: x },
                    o.createElement(i.s, Object.assign({}, n), t)
                  ),
              o.createElement(
                s.S,
                Object.assign(
                  { className: "adapter-dropdown-collapse", isOpen: v },
                  d ? {} : { onMouseEnter: E, onMouseLeave: x }
                ),
                o.createElement(
                  "ul",
                  { ref: w, className: "adapter-dropdown-list", role: "menu" },
                  d &&
                    o.createElement(
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
                            b(!0),
                            setTimeout(() => {
                              b(!1), x();
                            }, 400));
                        },
                        className: "adapter-dropdown-list-item",
                        role: "menuitem",
                      },
                      y ? "Copied" : "Copy address"
                    ),
                  o.createElement(
                    "li",
                    {
                      onClick: function () {
                        m(!0), x();
                      },
                      className: "adapter-dropdown-list-item",
                      role: "menuitem",
                    },
                    "Change wallet"
                  ),
                  d &&
                    o.createElement(
                      "li",
                      {
                        onClick: O,
                        className: "adapter-dropdown-list-item",
                        role: "menuitem",
                      },
                      "Disconnect"
                    )
                )
              )
            )
          : o.createElement(l.W, Object.assign({ onClick: x }, n), t);
      };
    },
    77844: (e, t, n) => {
      n.d(t, { $: () => a });
      var r = n(12115),
        o = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, r = Object.getOwnPropertySymbols(e);
              o < r.length;
              o++
            )
              0 > t.indexOf(r[o]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          return n;
        };
      let a = (e) => {
        var {
            children: t,
            onClick: n,
            className: a = "",
            tabIndex: l = 0,
            icon: i,
          } = e,
          s = o(e, ["children", "onClick", "className", "tabIndex", "icon"]);
        let c = (0, r.useRef)(null);
        return r.createElement(
          "button",
          Object.assign(
            {
              ref: c,
              onClick: function (e) {
                null == n || n(e),
                  setTimeout(() => {
                    var e;
                    null == (e = c.current) || e.blur();
                  }, 300);
              },
              className: `adapter-react-button ${a}`,
              tabIndex: l,
            },
            s
          ),
          i &&
            r.createElement(
              "i",
              { className: "button-icon" },
              r.createElement("img", { src: i })
            ),
          t
        );
      };
    },
    97969: (e, t, n) => {
      n.d(t, { W: () => i });
      var r = n(12115),
        o = n(77844),
        a = n(17319),
        l = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, r = Object.getOwnPropertySymbols(e);
              o < r.length;
              o++
            )
              0 > t.indexOf(r[o]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          return n;
        };
      let i = function (e) {
        var { children: t = "Select Wallet", onClick: n } = e,
          i = l(e, ["children", "onClick"]);
        let { visible: s, setVisible: c } = (0, a.o)(),
          u = (0, r.useCallback)(
            (e) => {
              n && n(e), e.defaultPrevented || c(!s);
            },
            [n, c, s]
          );
        return r.createElement(
          o.$,
          Object.assign(
            { "data-testid": "wallet-select-button", onClick: u },
            i
          ),
          t
        );
      };
    },
    99845: (e, t, n) => {
      n.d(t, { s: () => i });
      var r = n(49494),
        o = n(12115),
        a = n(77844),
        l = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, r = Object.getOwnPropertySymbols(e);
              o < r.length;
              o++
            )
              0 > t.indexOf(r[o]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          return n;
        };
      let i = (e) => {
        var { children: t, disabled: n, onClick: i } = e,
          s = l(e, ["children", "disabled", "onClick"]);
        let { wallet: c, connect: u, connecting: d, connected: p } = (0, r.v)(),
          f = (0, o.useCallback)(
            (e) =>
              (function (e, t, n, r) {
                return new (n || (n = Promise))(function (o, a) {
                  function l(e) {
                    try {
                      s(r.next(e));
                    } catch (e) {
                      a(e);
                    }
                  }
                  function i(e) {
                    try {
                      s(r.throw(e));
                    } catch (e) {
                      a(e);
                    }
                  }
                  function s(e) {
                    var t;
                    e.done
                      ? o(e.value)
                      : ((t = e.value) instanceof n
                          ? t
                          : new n(function (e) {
                              e(t);
                            })
                        ).then(l, i);
                  }
                  s((r = r.apply(e, t || [])).next());
                });
              })(void 0, void 0, void 0, function* () {
                i && i(e), e.defaultPrevented || (yield u());
              }),
            [i, u]
          ),
          m = (0, o.useMemo)(
            () =>
              t ||
              (d
                ? "Connecting ..."
                : p
                ? "Connected"
                : c
                ? "Connect"
                : "Connect Wallet"),
            [t, d, p, c]
          );
        return o.createElement(
          a.$,
          Object.assign(
            {
              "data-testid": "wallet-connect-button",
              className: "wallet-button",
              disabled: n || !c || d || p,
              onClick: f,
              icon: c ? c.adapter.icon : "",
            },
            s
          ),
          m
        );
      };
    },
  },
]);
